<template>
  <!-- 유저 정보 (이메일, 닉네임, 프로필 사진) -->
  <div class="container">
    <q-list bordered separator>
      <q-item class="q-pa-lg">
        <!-- 프로필 사진 -->
        <q-item-section avatar class="">
          <input @input="updateProfile" v-show="false" type="file" name="profile" id="profile" accept=".jpg, image/*" >
          <q-btn round v-if="isLoaded">
            <label class="profile-label" for="profile"></label>
            <!-- profile 없을 시 -->
            <q-avatar v-if="!user.profile" color="black" text-color="white" icon="person" />
            <!-- profile 있을 시 -->
            <q-avatar v-else>
              <img
                :src="'http://localhost:3000/img/' + user.profile"
              />
            </q-avatar>
          </q-btn>
          <!-- 데이터 로딩 중 skeleton -->
          <q-skeleton v-else type="QAvatar"/>
        </q-item-section>
        
        <q-item-section>
          <!-- 닉네임 -->
          <div class="text-h6 text-bold" v-if="isLoaded">
            {{ user.nickname }}
            <q-btn flat dense icon="chevron_right" @click="changeNickname"/>
            <q-popup-edit 
              v-model="user.nickname" 
              :offset="[0, 5]" 
              :cover="false" 
              buttons
              v-slot="scope"
              label-cancel="취소"              
              label-set="변경"
              :validate="validateNickname"
              @save="updateNickname"
             >
              <q-input 
                v-model="scope.value"
                dense counter autofocus
                @keyup.enter="scope.set"
              />
            </q-popup-edit>
            <q-btn class="q-ma-sm" dense outline label="로그아웃" @click="onClick" />
          </div>
          <!-- 데이터 로딩 중 skeleton -->
          <q-skeleton v-else type="rect"/>

          <!-- 이메일 -->
          <q-item-label caption v-if="isLoaded">{{ user.email }}</q-item-label>
          <!-- 데이터 로딩 중 skeleton -->
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
      user: null,
      isLoaded: false,
    }
  },
  async created() {
    const res = await this.$api.get('/user/me')
    if (res) {
      this.user = res.data
      this.isLoaded = true
    }
  },
  methods: {
    async updateProfile(e) {
      const files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;

      const form = new FormData()
      const config = {
        headers: {
          'content-type': 'multipart/form-data',
        }
      }
      form.append('profile', files[0])

      const res = await this.$api.put('/user/me/profile', form, config)
      if (res.status === 200) {
        console.log(res)
        this.user.profile = res.data
      } else {
        this.$q.notify({
          type: 'negative',
          message: '프로필 업데이트에 실패했습니다'
        })
      }
    },
    async updateNickname(val) {
      const res = await this.$api.put('/user/me/nickname', {
        nickname: val
      })
      if (res.status === 200) {
        console.log(res)
        return
      } else {
        this.$q.notify({
          type: 'negative',
          message: '닉네임 업데이트에 실패했습니다'
        })
      }
    },
    validateNickname(val) {
      if (val.length > 20) {
        this.$q.notify({
          type: 'warning',
          message: '닉네임은 최대 20자까지만 가능합니다',
        })
        return false
      }
      if (!val) {
        this.$q.notify({
          type: 'warning',
          message: '닉네임은 공백일 수 없습니다',
        })
        return false
      }

      return true
    }
  },
}
</script>

<style lang="sass" scoped>
.profile-label
  width: 100%
  height: 100%
  z-index: 5
  position: absolute
</style>>
