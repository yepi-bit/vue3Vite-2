import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import './assets/css/layout.scss'
import './assets/css/custom.scss'
import SvgIcon from './components/SvgIcon.vue'

createApp(App).use(store).use(router).use(ElementPlus).component('SvgIcon', SvgIcon).mount('#app')
yarn
