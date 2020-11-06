import Vue from 'vue'
import VueRouter from 'vue-router'
// import Index from 'con/home/index.vue'
// import User from 'con/user/index.vue'

const Index = () => import('con/home/index.vue')
const User = () => import('con/user/index.vue')

Vue.use(VueRouter)
const routes = [
    {path: '/', component: Index},
    {path: '/user', component: User}
]

const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})

export default router