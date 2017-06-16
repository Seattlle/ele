import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './method'
import shopList from './shopList'
import shopInfo from './shopInfo.js'
import searchData from  './search'
Vue.use(Vuex)

const state={
    currentPageName:'饿了么',
    hidefooter:false,
    indexShopList:shopList,
    shop:shopInfo,
    search:searchData,
    showSearchArea:false
}

export default new Vuex.Store({
    state,
    mutations
});
