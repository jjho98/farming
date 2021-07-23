<template>
  <div class="container q-pa-xl">
    <q-form class="q-gutter-md" ref="form" >
      <div class="text-center text-h6 text-bold">로그인</div>
      <q-input outlined v-model="email" type="email" label="이메일" :rules="[ val => !!val || '이메일을 입력해주세요']" />
      <q-input outlined v-model="password" type="password" label="비밀번호" :rules="[ val => !!val || '비밀번호를 입력해주세요']" />
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
      // form 유효성 검증
      this.$refs.form.validate().then(async (success) => {
        if (success) {
          // form이 유효하면
          const res = await this.$api.post('/login', {
            email: this.email,
            password: this.password,
          })

          if (res.status === (404 || 403)) {
            return this.$q.notify({
              message: res.data.message,
              icon: 'error_outline',
              position: 'center',
              closeBtn: '닫기',
            })
          }
          if (res.status === 200) {
            return this.$router.back()
          }
        } 
        else {
          // form이 유효성 검증 실패
          this.$q.notify({
              message: '전부 작성해주세요',
              color: 'negative',
              icon: 'error_outline',
              position: 'top',
              closeBtn: '닫기',
            })
        }
      })

      
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
