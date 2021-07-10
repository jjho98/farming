<template>
  <back-header label="주소 설정" class="shadow-bottom" />
  <div class="container q-pa-md q-gutter-y-md ">
    <q-form
      ref="addressForm"
      @submit.prevent="onSubmit"
    >
      <div>
        <q-input outlined v-model="address" lazy-rules :rules="addressRules" name="addreas" label="주소를 입력해주세요" color="secondary" clearable>
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

  <q-scroll-area v-show="searchResults" style="height: 700px" class="container">
    <q-list  separator padding>
      <q-item v-ripple clickable class="not-flex" v-for="(result, index) in searchResults" :key="index">
        <q-item-section>
          <q-item-label>{{ result.bdNm }}</q-item-label>
          <q-item-label caption>{{ result.jibunAddr }}</q-item-label>
          <q-badge class="float-left" outline color="secondary" label="도로명" />
          <q-item-label caption>{{ result.roadAddr }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </q-scroll-area>

</template>

<script>
import { defineAsyncComponent } from 'vue'
import axios from 'axios'

export default {
  components: { 
    BackHeader: defineAsyncComponent(() => import('components/BackHeader.vue'))
  },
  data() {
    return {
      address: '',
      addressRules: [
        val => this.checkSearchWord(val) || '특수문자를 사용하지 말아주세요'
      ],
      searchResults: null,
    }
  },
  methods: {
    onSubmit() {

    },
    onClick() {

    },
    searchAddress() {
      axios.get('https://www.juso.go.kr/addrlink/addrLinkApi.do', {
        params: {
          // 나중에 발급받은 키는 .env에서 관리
          confmKey: process.env.JUSO_KEY,
          keyword: this.address,
          resultType: 'json',
        }
      })
      .then(res => {
        console.log(res)
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


}
</script>

<style lang="sass" scoped>
.search
  height: 100%
.here
  width: 100%
</style>>