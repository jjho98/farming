<template>
  <div class="container q-pa-xl">
    <q-form class="q-gutter-md" @submit.prevent>
      <div class="text-center text-h6 text-bold">로그인</div>
      <q-input outlined v-model="email" type="email" label="이메일" name="email" />
      <q-input outlined v-model="password" type="password" label="비밀번호" name="password" />
      <div class="q-gutter-y-md">
        <q-btn unelevated label="로그인" color="primary" class="auth-btn bg-black" @click="localLogin"/>
        <q-btn unelevated label="카카오 로그인" color="primary" class="auth-btn bg-yellow text-black" @click="kakaoLogin" />
      </div>
    </q-form>
    <div class="q-py-md">
      <q-breadcrumbs align="center" separator="|" gutter="md">
        <q-breadcrumbs-el label="아이디 찾기" :to="{name: ''}" v-if="width > 351"/>
        <q-breadcrumbs-el label="비밀번호 찾기" :to="{name: ''}"/>
      </q-breadcrumbs>
    </div>
    <div class="flex flex-center q-gutter-x-sm q-py-md">
      <div>계정이 없으신가요?</div>
      <q-breadcrumbs-el label="회원가입" :to="{name: ''}"/>
    </div>
  </div>
</template>

<script>
import {dom} from 'quasar'
const {width} = dom
import api from '../api'
import jwtDecode from "jwt-decode"
import {Cookies} from 'quasar'
 
export default {
  data() {
    return {
      email: '',
      password: '',
      width: 0,
    }
  },
  methods: {
    async localLogin() {
      // seller와 customer 분리 필요
      const res = await api.post('/auth/login/seller', {
        email: this.email,
        password: this.password,
      })
      if (res.status === (404 || 403)) {
        this.$q.notify({
          message: res.data.message,
          icon: 'error_outline',
          position: 'center',
          closeBtn: '닫기',
        })
      } else {
        // accessToken, refreshToken 쿠키에 저장
        const { accessToken, refreshToken } = res.data
        api.defaults.headers.common.Authorization = `Barer ${accessToken}`

        console.log(jwtDecode(accessToken))
        const { nickname, role } = jwtDecode(accessToken)
        Cookies.set('nickname', nickname)
        Cookies.set('role', role)
        Cookies.set('accessToken', accessToken, {expires: '30m', httpOnly: true})
        Cookies.set('refreshToken', refreshToken, {expires: '14d', httpOnly: true})

        this.$router.back()
      }
    },
    kakaoLogin() {

    }
  },
  mounted() {
    this.width = width(window)
  }
}
</script>

<style lang="sass" scoped>
.container
  width: 100%
  max-width: 400px
.auth-btn
  width: 100%
  font-weight: bold 
  font-size: 16px
</style>
