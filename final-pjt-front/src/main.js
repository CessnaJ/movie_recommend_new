import Vue from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import { initializeApp } from "firebase/app"
import { getStorage } from "firebase/storage"

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: process.env.VUE_APP_APIKEY,
  authDomain: process.env.VUE_APP_AUTHDOMAIN,
  projectId: process.env.VUE_APP_PROJECTID,
  storageBucket: process.env.VUE_APP_STORAGEBUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGINGSENDERID,
  appId: process.env.VUE_APP_APPID, 
}
const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)

Vue.config.productionTip = false

new Vue({
  store,
  router,
  render: h => h(App),
  created() {},
}).$mount('#app')
