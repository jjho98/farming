import axios from 'axios'
import router from 'src/router'
import {Cookies} from 'quasar'

const api = axios.create({
  baseURL: '//localhost:3000/api/v1/',
  withCredentials: true
})

// 응답 왔을 때
api.interceptors.response.use(
  (response) => {
    return response
  },
  async (error) => {
    if (error.config && error.response && error.response.status === 401) {
      try {
        const msg = error.response.message
        if (msg === 'InvalidRefresh') {
          // 리프레시 토큰 만료 시 재로그인 필요
          return router.push({name: 'login'})
        } else if (msg === 'ExpiredToken') {
          // 액세스 토큰 만료 시 발급 후 재요청 
            const res = await api.post('/auth/token/refresh', {
              nickname: Cookies.get('nickname'),
              refreshToken: Cookies.get('refreshToken'),
            })
            if (res.status === 200) {
              error.config.headers.Authorization = `Barer ${res.data.accessToken}`
              return api.request(error.config)
            }
        }
      } catch(err) {
        // 쿠키를 삭제했지만 리프레시 토큰이 살아있다면?
        console.error(err)
        return router.push({name: 'login'})
      }
    }

    return error.response
  }
)

export default api

