import { boot } from 'quasar/wrappers'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async ({ app }) => {
  // something to do
  const toCurrency = 

  app.config.globalProperties.$filters = {
    toCurrency(money) {
      return new Intl.NumberFormat('ko-KR', { style: 'decimal', currency: 'KRW' }).format(money)
    }
  }
})
