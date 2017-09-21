/**
 * Created by Seattle on 2017/6/6.
 */
import  Vue from 'vue'
import axios from 'axios'
const mutations={
    //设置页头名称
    setPageName(store,name){
        store.currentPageName=name;
    },
    //隐藏底部菜单
    hideFooter(store){
        store.hidefooter=true;
    },
    //显示底部菜单
    showFooter(store){
        store.hidefooter=false;
    },
    //选择商铺左侧主菜单
    choseMenu(store,thisItem){
        store.shop.menuCategory.forEach(function(item){
            if(thisItem==item){
                if(typeof item.checked=='undefined'){
                    Vue.set(item,'checked',true);
                }else{
                    item.checked=true;
                }
                if(typeof store.shop.choseMenu=='undefined'){
                    Vue.set(store.shop,'choseMenu',item);
                }else{
                    store.shop.choseMenu=item;
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
    //滚动右侧菜单时  选择左侧菜单
    scrollMenu(store,menuId){
        store.shop.menuCategory.forEach(function(items){
            if(items.id==menuId){
                if(typeof items.checked=='undefined'){
                    Vue.set(items,'checked',true);
                }else{
                    items.checked=true;
                }
                if(typeof store.shop.choseMenu=='undefined'){
                    Vue.set(store.shop,'choseMenu',items);
                }else{
                    store.shop.choseMenu=items;
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
    //添加 删除 菜
    addOrder(store,obj){
        if(typeof obj.list.selectNum=='undefined'){
            Vue.set(obj.list,'selectNum',obj.num);
        }else{
            obj.list.selectNum+=obj.num;
        }
    },
    //计算总价
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

        let button=document.getElementById("bottomNav_Cart");
        if(store.shop.totalNum>0){
            if(button.className.indexOf("bottomNav_right")<0)
                button.className=button.className.trim()+" bottomNav_right";
        }else{
            button.className=button.className.trim().replace("bottomNav_right","");
        }
    },
    //显示/隐藏搜索地址页
    toggleAreaSearch(state){
        state.showSearchArea=!state.showSearchArea;
    },
    //根据id获取商铺信息
    getShopInfoById(state,id){
        state.shop={};
        axios.get('./shopInfo.json?shophash='+id)
        .then(function (response) {
            state.shop=response;
        })
        .catch(function (error) {
            console.log(error);
        });
    }
}

export default mutations;