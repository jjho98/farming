<template>
  <div class="form-container q-gutter-md q-pa-lg">
    <div class="text-center text-h6 text-bold">회원가입</div>
    <!-- <div class="timeline">
      <div class="circle">1</div>
      <div class="line"></div>
      <div class="circle">2</div>
      <div class="line"></div>
      <div class="circle">3</div>
    </div> -->

    <q-stepper
      v-model="step"
      ref="stepper"
      color="primary"
      animated
      flat
      contracted
    >
      <q-step
        :name="1"
        title="SMS 인증"
        icon="message"
        :done="step > 1"
      >
        <sms-verification-tab @verifiedSms="completed = true"/>
      </q-step>
      <q-step
        :name="2"
        title="회원정보 작성"
        icon="assignment"
        :done="step > 2"
      >
        <join-tab/>
      </q-step>
      <template v-slot:navigation>
        <q-stepper-navigation>
          <q-btn v-if="completed" @click="onClickNextButton" color="primary" :label="step === 2 ?'홈으로' : '다음으로'" />
          <!-- <q-btn v-if="step > 1" flat color="primary" @click="$refs.stepper.previous()" label="Back" class="q-ml-sm" /> -->
        </q-stepper-navigation>
      </template>
    </q-stepper>

  </div>
</template>

<script>
import {defineAsyncComponent} from 'vue'

export default {
  components: {
    SmsVerificationTab: defineAsyncComponent(() => import('components/SmsVerificationTab.vue')),
    JoinTab: defineAsyncComponent(() => import('components/JoinTab.vue')),
  },
  data() {
    return {
      step: 1,
      completed: false,
    }
  },
  methods: {
    moveNext() {
      console.log('clicked')
    },
    onClickNextButton() {
      // all completed
      if (this.step == 2) {
        return this.$router.replace({name: 'main'})
      }

      this.$refs.stepper.next()
      this.completed = false
    },
    // onRegister() {
    //   this.completed = true
    //   this.$q.notify({
    //     type: 'success',
    //     message: '회원가입 되었습니다'
    //   })
    // }
  },
}
</script>

<style lang="sass" scoped>
// $circle-size: 30px
// $line-height: 5px
// $line-width: 50px
// $border-size: 2px

// .timeline
//   display: flex
//   flex: 1 1 auto
//   justify-content: center
//   align-items: center

// .circle
//   width: $circle-size
//   height: $circle-size
//   border-radius: $circle-size / 2
//   border: $border-size solid $primary
//   text-align: center
//   line-height: $circle-size - $border-size * 2
//   font-weight: bold

// .line
//   width: $line-width
//   height: $line-height
//   background-color: $primary
</style>>
