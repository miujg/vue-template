import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import VideoPlayer from 'vue-video-player'
import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'
// mock 启动
import {createMock}  from '@/mock/index.js'
createMock()
 
Vue.use(VideoPlayer)
Vue.use(ElementUI)
import router from './router/index'
import store from './store/index'

Vue.config.productionTip = false
Vue.config.devtools = true

new Vue({
  router:router,
  store:store,
  render: h => h(App),
}).$mount('#app')
