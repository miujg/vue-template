import Vue from 'vue'
import vuex from 'vuex'
import createPersistedState from "vuex-persistedstate";

import modules from './modules'
// console.log(modules)

Vue.use(vuex)
let store = new vuex.Store({
    modules:modules,
    plugins: [createPersistedState()],
})

export default store