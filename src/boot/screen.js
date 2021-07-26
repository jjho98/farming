import { boot } from 'quasar/wrappers'
import { Screen } from 'quasar'

// "async" is optional;
// more info on params: https://v2.quasar.dev/quasar-cli/boot-files
export default boot(async (/* { app, router, ... } */) => {
  // something to do
  Screen.setSizes({ xs: 280, sm: 320, md: 1025, lg: 1280, xl: 2000 })
})
