import { boot } from 'quasar/wrappers'
import axios from 'axios'
import { Loading } from 'quasar'
import { setupCache } from 'axios-cache-adapter'

// Be careful when using SSR for cross-request state pollution
// due to creating a Singleton instance here;
// If any client changes this (global) instance, it might be a
// good idea to move this instance creation inside of the
// "export default () => {}" function below (which runs individually
// for each client)

const cache = setupCache({
  maxAge: 30 * 60 * 1000,
  debug: true,
  exclude: {
    query: false,
  },
})
const api = axios.create({ 
  baseURL: '//localhost:3000/api/v1',
  withCredentials: true,
  adapter: cache.adapter,
})



export default boot(({ app, router }) => {
  // 응답 왔을 때
  api.interceptors.response.use(
    (response) => {
      return response
    },
    async (error) => {
      if (error.config && error.response && error.response.status) {
        Loading.hide()
        // 로그인 필요
        if (error.response.status === 401) {
          return router.push({name: 'login'})
        }

        // if (error.response.status === 404) {
        //   return router.push({name: '404'})
        // }

        // 배포 시에는 4XX번대 에러만 response return 하기
        // 나머지는 promise.reject(error) 처리
        return error.response
      }

      //  return Promise.reject(error)
    }

  )


  // for use inside Vue files (Options API) through this.$axios and this.$api

  // app.config.globalProperties.$axios = axios
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
})

export { api }
