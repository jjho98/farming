<template>
  <div class="container q-pa-xl">
    <q-form
      @submit="onSubmit"
      class="q-gutter-md"
    >
      <div class="text-center text-h6 text-bold">로그인</div>
      <q-input outlined v-model="email" type="email" label="이메일" name="email" />
      <q-input outlined v-model="password" type="password" label="비밀번호" name="password" />
      <div class="q-gutter-y-md">
        <q-btn unelevated label="로그인" type="submit" color="primary" class="auth-btn bg-black"/>
        <q-btn unelevated label="카카오 로그인" type="reset" color="primary" class="auth-btn bg-yellow text-black " />
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
    onSubmit() {

    }
  },
  mounted() {
    console.log(width(window))
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
