<template>
  <q-form
    @submit="onSubmit"
    class="q-gutter-md"
  >
    <!-- 이메일 폼 -->
    <div class="text-h6">이메일</div>
    <q-input v-model="email" type="email" :rules="emailRule" />
    <!-- 비밀번호 폼 -->
    <div class="text-h6">비밀번호</div>
    <q-input v-model="password" type="password" :rules="passwordRule" />
    <!-- 비밀번호 재입력 폼 -->
    <div class="text-h6">비밀번호 확인</div>
    <q-input v-model="passowrdVerification" type="password" :rules="passwordCheckRule" />
    <!-- 닉네임 폼 -->
    <div class="text-h6">닉네임</div>
    <q-input v-model="nickname" type="text" :rules="nicknameRule"/>
    
    <!-- 다음 버튼 -->
    <!-- <div v-if="isVerified">
      <q-btn class="float-right" color="dark" icon-right="navigate_next" label="다음" @click="clickedNext" />
    </div> -->
  </q-form>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      passowrdVerification: '',
      nickname: '',
      emailRule: [
        val => (/^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i).test(val) || '이메일을 압력해주세요',
      ],
      passwordRule: [
        val => (/^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[~!@#$%^&*])[a-zA-Z0-9~!@#$%^&*]{8,20}$/).test(val) || '영문, 숫자, 특수문자 포함하여 8자~20자로 입력해주세요'
      ],
      passwordCheckRule: [
        val => (val == this.password) || '비밀번호가 일치하지 않습니다'
      ],
      nicknameRule: [
        val => (val && val.length <= 20) || '닉네임은 1글자 이상 20글자 이하여야 합니다' 
      ]
    }
  },
}
</script>

<style lang="sass" scoped>
.q-form
  div
    font-size: 1.2rem
    font-weight: bold
</style>>
