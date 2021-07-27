<template>
  <!-- 유저 정보 (이메일, 닉네임, 프로필 사진) -->
  <div class="container">
    <q-list bordered separator>
      <q-item class="q-pa-lg">
        <q-item-section avatar>
          <q-btn round @click="changeProfile" v-if="isLoaded">
            <q-avatar color="black" text-color="white" icon="person" />
          </q-btn>
          <q-skeleton v-else type="QAvatar"/>
        </q-item-section>
        <q-item-section>
          <div class="row">
            <div class="text-h6 text-bold" v-if="isLoaded">{{ user.nickname }}</div>
            <q-skeleton v-else type="rect"/>
            <q-btn flat  label=">" @click="changeNickname" />
          </div>

          <q-item-label caption v-if="isLoaded">{{ user.email }}</q-item-label>
          <q-skeleton v-else type="text"/>
        </q-item-section>
      </q-item>
      
    </q-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        nickname: '',
        email: '',
      },
      isLoaded: false,
    }
  },
  async created() {
    const res = await this.$api.get('/auth/me')
    this.user = res.data
    this.isLoaded = true
  },
  methods: {
    changeProfile() {

    },
    changeNickname() {
      
    }
  },
}
</script>

<style>

</style>