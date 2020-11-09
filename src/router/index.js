import Vue from 'vue'
import VueRouter from 'vue-router'

// webpack 魔法注释
const Index = () => import(/* webpackChunkName: 'index-chunk-name' */'con/home/index.vue')
const User = () => import(/* webpackChunkName: 'user-chunk-name' */'con/user/index.vue')

Vue.use(VueRouter)
const routes = [
    {path: '/', component: Index},
    {path: '/user', component: User}
]

const router = new VueRouter({
    routes // (缩写) 相当于 routes: routes
})

export default router