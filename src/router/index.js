import Vue from 'vue'
import VueRouter from 'vue-router'
import Index from 'con/home/index.vue'

Vue.use(VueRouter)
const routes = [
    {path: '/', component: Index}
]

const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})

export default router