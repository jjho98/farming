<template>
  <div class="form-container q-pa-xl">
    <q-form class="q-gutter-md" ref="form" >
      <div class="text-center text-h6 text-bold">로그인</div>
      <q-input outlined v-model="email" type="email" label="이메일" :rules="[ val => !!val || '이메일을 입력해주세요']" />
      <q-input outlined v-model="password" type="password" label="비밀번호" :rules="[ val => !!val || '비밀번호를 입력해주세요']" />
      <div class="q-gutter-y-md">
        <q-btn unelevated label="로그인" color="primary" class="auth-btn bg-black" @click="localLogin"/>
        <div class="auth-btn kakao-btn">
          <a class="kakao-a" :href="kakaoLogin"/>
        </div>
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
      <q-breadcrumbs-el label="회원가입" :to="{name: 'join'}"/>
    </div>
  </div>
</template>

<script>
import {dom} from 'quasar'
import {defineAsyncComponent} from 'vue'
const {width} = dom
 
const REST_API_KEY= 'ab0076b130ff69b409ddf3e8e5bae9a1'
const REDIRECT_URI = 'http://localhost:8080/auth/kakao/callback'
// const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`

export default {
  data() {
    return {
      email: '',
      password: '',
      width: 0,
      kakaoUrl: `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`,
    }
  },
  methods: {
    async localLogin() {
      // form 유효성 검증
      this.$refs.form.validate().then(async (success) => {
        if (success) {
          // form이 유효하면
          const res = await this.$api.post('/auth/login', {
            email: this.email,
            password: this.password,
          })

          if (res.status === (404 || 403)) {
            return this.$q.notify({
              type: 'negative',
              message: res.data.message,
            })
          }
          if (res.status === 200) {
            return this.$router.back()
          }
        } 
        else {
          // form이 유효성 검증 실패
          this.$q.notify({
              type: 'negative',
              message: '전부 작성해주세요',
            })
        }
      })
    },
    async kakaoLogin() {
      // const api = axios
      Kakao.Auth.login({
        success: function(authObj) {
          alert(JSON.stringify(authObj))
        },
        fail: function(err) {
          alert(JSON.stringify(err))
        },
      })
    }
  },
  mounted() {
    this.width = width(window)
  }
}
</script>

<style lang="sass" scoped>
.form-container
  width: 100%
  max-width: 400px

.auth-btn
  width: 100%
  font-weight: bold 
  font-size: 16px
  height: 45px

.kakao-btn
  background-color: #FEE500

.kakao-a
  background: center / contain no-repeat url('~assets/kakao_login_btn.png'), 
  padding: 0
  display: block
  height: 100%
</style>
