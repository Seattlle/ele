/**
 * Created by Seattle on 2017/6/6.
 */
const mutations={
    setPageName(store,name){
        store.currentPageName=name;
    },
    toggleFooter(store){
        store.hidefooter=!store.hidefooter;
    }
}

export default mutations;