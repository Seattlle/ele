/**
 * Created by Seattle on 2017/6/6.
 */
import  Vue from 'vue'
const mutations={
    setPageName(store,name){
        store.currentPageName=name;
    },
    toggleFooter(store){
        store.hidefooter=!store.hidefooter;
    },
    choseMenu(store,thisItem){
        store.shop.menuCategory.forEach(function(item){
            if(thisItem==item){
                if(typeof item.checked=='undefined'){
                    Vue.set(item,'checked',true);
                }else{
                    item.checked=true;
                }
            }else{
                if(typeof item.checked=='undefined'){
                    Vue.set(item,'checked',false);
                }else{
                    item.checked=false;
                }
            }
        });
    },
    scrollMenu(store,menuId){
        store.shop.menuCategory.forEach(function(items){
            if(items.id==menuId){
                if(typeof items.checked=='undefined'){
                    Vue.set(items,'checked',true);
                }else{
                    items.checked=true;
                }
            }else{
                if(typeof items.checked=='undefined'){
                    Vue.set(items,'checked',false);
                }else{
                    items.checked=false;
                }
            }
        });
    },
    addOrder(store,obj){
        if(typeof obj.list.selectNum=='undefined'){
            Vue.set(obj.list,'selectNum',obj.num);
        }else{
            obj.list.selectNum+=obj.num;
        }
    },
    calculateMoney(store){
        store.shop.selectedItem=[];
        store.shop.totalMoney=0;
        store.shop.totalNum=0;
        store.shop.menuCategory.forEach(function (menuType) {
            let num=0;
            menuType.category.forEach(function (item) {
                if(item.selectNum>0){
                    store.shop.selectedItem.push(item);
                    store.shop.totalMoney+=item.selectNum*item.price;
                    num+=item.selectNum;
                }
            });
            Vue.set(menuType,'selectNum',num);
            store.shop.totalNum+=num;
        });
    }
}

export default mutations;