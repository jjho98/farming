<template>
  <back-header/>
  <div class="q-gutter-y-md">

    <!-- 검색 폼 -->
    <div class="container q-pa-md q-gutter-y-md ">
      <q-form
        ref="addressForm"
        @submit.prevent="onSubmit"
      >
        <div>
          <q-input outlined v-model="address" lazy-rules :rules="addressRules" name="addreas" label="주소를 입력해주세요" color="secondary" 
          clearable @keyup.enter="searchAddress">
            <template v-slot:prepend>
              <q-icon name="place" />
            </template>
            <template v-slot:after>
              <q-btn push color="secondary" icon="search" class="search" @click="searchAddress" />
            </template>
          </q-input>
        </div>

        <q-btn outline color="secondary" icon="my_location" label="현재 위치로 설정" class="here" @click="onClick" />
      </q-form>
    </div>

    <!-- 최근 주소 또는 검색 결과 -->
    <div v-if="(searchResults.length && address) || (!address && addressHistories.length)" class="container q-pa-md">
      <!-- 검색 결과 -->
      <div v-show="searchResults.length && address">
        <q-list  separator padding>
          <q-item v-ripple clickable v-for="(result, index) in searchResults" :key="index" @click="test(result)">
            <q-item-section class="q-gutter-y-xs not-flex ">
              <q-item-label>{{ result.bdNm ? result.bdNm : result.jibunAddr }}</q-item-label>
              <q-item-label caption>{{ result.jibunAddr }}</q-item-label>
              <q-badge class="float-left badge" outline color="secondary" label="도로명" />
              <q-item-label caption>{{ result.roadAddr }}</q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </div>

      <!-- 최근 주소들 -->
      <div v-show="!address && addressHistories.length">
        <span class="text-weight-bolder">최근</span>

        <q-list  separator padding>
          <q-item v-ripple clickable v-for="(item, index) in addressHistories" :key="index">
            <q-item-section class="q-gutter-y-xs not-flex ">
              <q-item-label caption>{{ item.jibunAddr }}</q-item-label>
              <q-badge class="float-left badge" outline color="secondary" label="도로명" />
              <q-item-label caption>{{ item.roadAddr }}</q-item-label>
            </q-item-section>
            <q-item-section side>
              <q-btn flat dense icon="clear" size="10px" @click="deleteHistory(item)"/>
            </q-item-section>
          </q-item>
        </q-list>
      </div>
    
    </div>
  </div>

</template>

<script>
import { defineAsyncComponent } from 'vue'
import axios from 'axios'

export default {
  components: { 
    BackHeader: defineAsyncComponent(() => import('components/BackHeader.vue')),
    // AddressItem: defineAsyncComponent(() => import('components/AddressItem.vue')),
  },
  data() {
    return {
      address: '',
      addressRules: [
        val => this.checkSearchWord(val) || '특수문자를 사용하지 말아주세요'
      ],
      searchResults: [],
      addressHistories: [],
    }
  },
  methods: {
    onSubmit() {

    },
    onClick() {

    },
    deleteHistory(item) {
      this.addressHistories.splice(this.addressHistories.findIndex((elem) => elem.jibunAddr == item.jibunAddr && elem.roadAddr == item.roadAddr), 1)
      this.$q.localStorage.set('addressHistories', this.addressHistories)
    },
    test(item) {
      const { jibunAddr, roadAddr } = item
      this.addressHistories.unshift({ jibunAddr, roadAddr })
      this.$q.localStorage.set('addressHistories', this.addressHistories)
    },
    searchAddress() {
      axios.get('https://www.juso.go.kr/addrlink/addrLinkApi.do', {
        params: {
          confmKey: process.env.JUSO_KEY,
          keyword: this.address,
          resultType: 'json',
        }
      })
      .then(res => {
        if (res.data.results.common.errorMessage !== "정상") {
          this.$q.notify({
            message: res.data.results.common.errorMessage,
            icon: 'error_outline',
            // position: 'center',
            closeBtn: '닫기',
          })
        }

        // 성공 시 결과
        this.searchResults = res.data.results.juso
      })
      .catch(err => {
        console.log(err)
      })
    },
    checkSearchWord(word) {
      //특수문자, 특정문자열(sql예약어의 앞뒤공백포함) 제거
      if(word && word.length > 0){
        //특수문자 제거
        const expText = /[%=><]/ ;
        if(expText.test(word) == true){
          // alert("특수문자를 입력 할수 없습니다.") ;
          // word = word.split(expText).join(""); 
          return false;
        }
        
        //특정문자열(sql예약어의 앞뒤공백포함) 제거
        const sqlArray = new Array(
          //sql 예약어
          "OR", "SELECT", "INSERT", "DELETE", "UPDATE", "CREATE", "DROP", "EXEC",
          "UNION",  "FETCH", "DECLARE", "TRUNCATE" 
        );
        
        let regex;
        for(var i=0; i<sqlArray.length; i++){
          regex = new RegExp( sqlArray[i] ,"gi") ;
          
          if (regex.test(word) ) {
            // alert("\"" + sqlArray[i]+"\"와(과) 같은 특정문자로 검색할 수 없습니다.");
            // word =word.replace(regex, "");
            return false;
          }
        }
      }
      return true ;
    }
  },
  created() {
    this.addressHistories = this.$q.localStorage.getItem('addressHistories')  ? this.$q.localStorage.getItem('addressHistories') : []
  }
}
</script>

<style lang="sass" scoped>
.search
  height: 100%
.here
  width: 100%
.q-item
  padding: 12px 0
</style>>