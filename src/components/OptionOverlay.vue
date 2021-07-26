<template>
  <transition
    enter-active-class="animated slideInUp"
    leave-active-class="animated slideOutDown"
  >
    <div class="outer  bg-grey-1"  v-show="isShowingBottomTab">
      <!-- option overlay -->
      <div class="convex-tab q-gutter-y-sm">
        <!-- convex tab btn -->
        <div class="tab-btn-container flex flex-center">
          <q-btn class="tab-btn" flat color="secondary" icon="horizontal_rule" @click="hideBottomTab" />
        </div>

        <!-- option select -->
        <q-select color="secondary" v-model="selected" :options="productOptions" label="구매 옵션을 선택해주세요" filled @update:model-value="changeSelected">
          <template v-slot:option="scope">
            <q-item v-bind="scope.itemProps">
              <q-item-section>
                <q-item-label >{{ scope.opt.name }}</q-item-label>
                <q-item-label >{{ $filters.toCurrency(scope.opt.price) }}원</q-item-label>
              </q-item-section>
            </q-item>
          </template>
        </q-select>
        
        <!-- 주문하려는 옵션들 -->
        <div class="text-black flex flex-center">
          <transition-group
            enter-active-class="animated zoomIn"
            leave-active-class="animated zoomOut"
          >
          <q-card flat class="option-card" v-for="(option, index) in selectedOptions" :key="index">
            <q-card-section>
              <div class="text-h6">{{ option.name }}</div>
              <div class="text-subtitle2">{{ $filters.toCurrency(option.price) }}원</div>
              
              <!-- 선택한 옵션 수량, 가격 표시 -->
              <div class="row justify-between q-mt-sm">
                <div>
                  <q-btn class="cube" outline color="secondary" icon="remove" @click="subtractOptionCount(index)" />
                  <q-btn class="cube" outline color="black" :label="option.count" disable />
                  <q-btn class="cube" outline color="secondary" icon="add" @click="addOptionCount(index)" />
                </div>
                <div>
                  <div class="text-h6">{{ $filters.toCurrency(option.price * option.count) }}원</div>
                </div>
                <div>
                  <q-btn class="cube" outline color="secondary" icon="clear" @click="removeSelectedOption(index)" />
                </div>
              </div>
            </q-card-section>
          
          </q-card>
          </transition-group>

          <!-- 총 가격 -->
          <div class="row justify-between width-100 q-pa-sm">
            <div>총 가격</div>
            <div class="text-secondary text-h6 text-bold">{{ $filters.toCurrency(totalPrice) }}원</div>
          </div>
        </div>
      </div>
    </div>  
  </transition>

</template>

<script>
import {mapGetters, mapMutations} from 'vuex'

export default {
  data() {
    return {
      selected: '',
    }
  },
  computed: {
    ...mapGetters('choices', [
      'productOptions',
      'isShowingBottomTab',
      'selectedOptions',
    ]),
    totalPrice() {
      return this.selectedOptions.reduce((acc, option) => {
        return acc + option.price * option.count
      }, 0)
    }
  },
  methods: {
    changeSelected(selected) {
      this.selected = ''

      const alreadySelected = this.selectedOptions.some((option) => {
        return option.id === selected.id
      })

      if (alreadySelected) {
        this.$q.notify({
          type: 'info',
          message: '이미 선택된 옵션입니다. 개수를 늘려주세요.'
        })
        return
      } 
      this.addSelectedOption(selected)
    },
    ...mapMutations('choices', [
      'hideBottomTab',
      'addOptionCount',
      'subtractOptionCount',
      'removeSelectedOption',
      'addSelectedOption',
    ])
  },
}
</script>

<style lang="sass" scoped>
.outer
  position: fixed
  bottom: 50px
  width: 100%
  
.convex-tab
  margin-top: -50px

.option-card
  width: 100%

.cube
  width: 32px
  height: 32px

.tab-btn-container
  border-radius: 100px 100px 0 0
  border: 2px solid $secondary
  margin: 0
  height: 50px
  background-color: rgba(255, 255, 255, 0.8)
  
.tab-btn
  width: 90%
</style>>
