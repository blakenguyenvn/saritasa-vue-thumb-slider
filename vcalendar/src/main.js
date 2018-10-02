import Vue from 'vue'
import App from './App.vue'
import './styles/styles.scss'
import GlobalConfig from './globalConfig'

Vue.config.productionTip = false

Vue.use(GlobalConfig)

new Vue({
  render: h => h(App)
}).$mount('#app')
