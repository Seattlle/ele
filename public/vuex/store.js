import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './method'
import shopList from './shopList'
import shoInfo from './shoInfo'
Vue.use(Vuex)

const state={
    currentPageName:'饿了么',
    hidefooter:false,
    indexShopList:shopList,
    shop:shoInfo
}

export default new Vuex.Store({
    state,
    mutations
});
