import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './method'
import shopList from './shopList'
import shopInfo from './shopInfo'
import searchData from  './search'
import user from  './user'
Vue.use(Vuex)

const state={
    currentPageName:'饿了么',
    hidefooter:false,
    indexShopList:shopList,
    shop:shopInfo,
    search:searchData,
    showSearchArea:false,
    user:user
}

export default new Vuex.Store({
    state,
    mutations
});
