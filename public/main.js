import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import vuex from 'vuex'
import router from './router'
import store from './vuex/store'
import App from './App.vue'

Vue.use(VueAxios,axios, vuex)
new Vue({
    el: '#app',
    store,
    router,
    render: h => h(App)
})