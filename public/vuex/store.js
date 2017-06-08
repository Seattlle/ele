import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './method'
import shopList from './shopList'
Vue.use(Vuex)

const state={
    currentPageName:'饿了么',
    hidefooter:false,
    indexShopList:shopList
}

export default new Vuex.Store({
    state,
    mutations
});
