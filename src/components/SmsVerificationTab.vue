<template>
  <!-- 전화번호 입력 폼 -->
  <div class="q-gutter-md">
    <q-input v-model="phoneNumber" type="tel" label="전화번호" maxlength="11" :rules="phonRule"/>
    <div>{{splitPhoneNumber}}</div>
    <q-btn color="primary" label="인증번호 요청" @click="sendVerifictaionSms" />
  </div>
  <!-- 인증번호 입력 폼 -->
  <div class="q-gutter-md">
    <q-input v-model="typedCode" type="number" label="인증번호 입력" />
    <q-btn color="primary" icon="check" label="인증 확인" @click="verifyCode" />
  </div>

  <!-- 다음 버튼 -->
  <!-- <div v-if="isVerified">
    <q-btn class="float-right" color="dark" icon-right="navigate_next" label="다음" @click="clickedNext" />
  </div> -->
</template>

<script>
export default {
  emits: [
    'clickedNext',
  ],
  data() {
    return {
      phoneNumber: '',
      typedCode: '',
      // 잠시 true로 해놓음
      isVerified: true,
      phoneRule: [
        val => (/^\d{2,3}-\d{3,4}-\d{4}$/).test(phoneNumber) || '올바른 전화번호를 입력해주세요'
      ]
    }
  },
  computed: {
    splitPhoneNumber: function() {
      if (!this.phoneNumber) {
        return "휴대전화 번호를 입력해주세요"
      }

      // 문자가 있으면 폰 번호 X
      if (isNaN(this.phoneNumber)) {
        return "숫자만 입력해주세요"
      }
      // // 11자가 아니면 폰 번호 X
      // if (this.phoneNumber.len !== 11) {
      //   return "11개의 숫자를 입력해주세요"
      // }
      return this.phoneNumber.substring(0, 3) + '-' + this.phoneNumber.substring(3, 7) + '-' + this.phoneNumber.substring(7, 11)
    }
  },
  methods: {
    async sendVerifictaionSms() {
      const res = await this.$api.post('/auth/sms', {
        phoneNumber: this.phoneNumber
      })
    },
    async verifyCode() {
      const res = await this.$api.post('/auth/sms/verify', {
        phoneNumber: this.phoneNumber,
        typedCode: this.typedCode,
      })
      if (res.status === 200) {
        this.$q.notify({
          type: 'positive',
          message: 'SMS 인증에 성공했습니다'
        })
        this.isVerified = true
      } else if (res.status == 409) {
        this.$q.notify({
          type: 'negative',
          message: '인증 번호가 일치하지 않습니다'
        })
      }
    },
    clickedNext() {
      this.$emit('clickedNext')
    }
  }
}
</script>

<style>

</style>