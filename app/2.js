webpackJsonp([2],{

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(67);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("32ee6ebb", content, false);
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(67, function() {
     var newContent = __webpack_require__(67);
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(70);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("225530d3", content, false);
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(70, function() {
     var newContent = __webpack_require__(70);
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(102)
}
var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(81),
  /* template */
  __webpack_require__(93),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "F:\\Program\\ele\\public\\components\\shop\\shopOrder.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] shopOrder.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(2)
  hotAPI.install(__webpack_require__(1), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4e47871e", Component.options)
  } else {
    hotAPI.reload("data-v-4e47871e", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 67:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports
exports.i(__webpack_require__(86), "");

// module
exports.push([module.i, "\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"shopOrder.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n.cartview{\n    font-size: .3rem;\n}\n.bottomNav-3XM6c_0 {\n    position: fixed;\n    right: 0;\n    bottom: 0;\n    width:100%;\n    display: -webkit-box;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n    -ms-flex-align: center;\n    align-items: center;\n    padding-left: 1.35rem;\n    background-color: #3d3d3f;\n    height: .9rem;\n    opacity: .95;\n    max-width: 768px;\n    margin: 0 auto;\n    left: 0;\n    box-sizing:border-box;\n}\n.bottomNav-18KRG_0 {\n    position: absolute;\n    left: .15rem;\n    bottom: .25rem;\n    width: 1rem;\n    height: 1rem;\n    box-sizing: border-box;\n    border-radius: 100%;\n    background-color: #3190e8;\n    border: .133333rem solid #444;\n    box-shadow: 0 -0.08rem 0.053333rem 0 rgba(0,0,0,.1);\n    will-change: transform;\n}\n.bottomNav-18KRG_0.bottomNav-6KjUI_0 {\n    background-image: -webkit-radial-gradient(circle,#363636 .626667rem,#444 0);\n    background-image: radial-gradient(circle,#363636 .626667rem,#444 0);\n}\n.bottomNav-18KRG_0:before {\n    position: absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-size: .6rem;\n    content: \"\";\n}\n.bottomNav-wzCAW_0 {\n    -webkit-box-flex: 1;\n    -ms-flex: 1;\n    flex: 1;\n    display: block;\n    width: 0;\n}\n.bottomNav-3Ak_E_0 {\n    font-size: .32rem;\n    line-height: normal;\n    color: #fff;\n}\n.bottomNav-3zqFz_0 {\n    color: #f5f5f5;\n    font-size: .2rem;\n}\n.bottomNav-1urxC_0 {\n    height: 100%;\n    width: 2.5rem;\n    background-color: #4cd964;\n    color: #fff;\n    text-align: center;\n    text-decoration: none;\n    font-size: .36rem;\n    font-weight: 700;\n    line-height: .9rem;\n    outline:none;\n}\n.bottomNav-1urxC_0.bottomNav-9FCIh_0 {\n    background-color: #535356;\n}\n", "", {"version":3,"sources":["F:/Program/ele/public/components/shop/cart.vue?40dbc512"],"names":[],"mappings":";AAiDA;IACA,iBAAA;CACA;AACA;IACA,gBAAA;IACA,SAAA;IACA,UAAA;IACA,WAAA;IACA,qBAAA;IACA,qBAAA;IACA,cAAA;IACA,0BAAA;IACA,uBAAA;IACA,oBAAA;IACA,sBAAA;IACA,0BAAA;IACA,cAAA;IACA,aAAA;IACA,iBAAA;IACA,eAAA;IACA,QAAA;IACA,sBAAA;CACA;AACA;IACA,mBAAA;IACA,aAAA;IACA,eAAA;IACA,YAAA;IACA,aAAA;IACA,uBAAA;IACA,oBAAA;IACA,0BAAA;IACA,8BAAA;IACA,oDAAA;IACA,uBAAA;CACA;AACA;IACA,4EAAA;IACA,oEAAA;CACA;AACA;IACA,mBAAA;IACA,OAAA;IACA,SAAA;IACA,UAAA;IACA,QAAA;IACA,uBAAA;IACA,YAAA;CACA;AACA;IACA,oBAAA;IACA,YAAA;IACA,QAAA;IACA,eAAA;IACA,SAAA;CACA;AACA;IACA,kBAAA;IACA,oBAAA;IACA,YAAA;CACA;AACA;IACA,eAAA;IACA,iBAAA;CACA;AACA;IACA,aAAA;IACA,cAAA;IACA,0BAAA;IACA,YAAA;IACA,mBAAA;IACA,sBAAA;IACA,kBAAA;IACA,iBAAA;IACA,mBAAA;IACA,aAAA;CACA;AACA;IACA,0BAAA;CACA","file":"cart.vue","sourcesContent":["<template>\r\n    <footer class=\"cartview \">\r\n        <!--<div class=\"cartview-bIr0V\" style=\"z-index: 10; display: none;\"></div>-->\r\n        <!--<div class=\"cartview-JFaw9 cartview-WUJTe\" style=\"z-index: 11;\">-->\r\n            <!--<section class=\"discount-tip-1sl_7_0\" style=\"display: none;\">此处为原价，「去结算」享优惠哦</section>-->\r\n            <!--<div class=\"cartview-37dYf\"><span class=\"cartview-2IL0z\">购物车</span> &lt;!&ndash;&ndash;&gt; <a href=\"javascript:\"-->\r\n                                                                                           <!--class=\"cartview-3ElqP\">-->\r\n                <!--<svg>-->\r\n                    <!--<use xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#cart-remove\"></use>-->\r\n                <!--</svg>-->\r\n                <!--<span>清空</span></a></div>-->\r\n            <!--<div class=\"entityList-yrs9v_0\">&lt;!&ndash;&ndash;&gt;-->\r\n                <!--<ul>-->\r\n                    <!--<li class=\"entityList-1eODF_0\"><span class=\"entityList-30u-R_0\"><em class=\"entityList-2g5ra_0\">极度可乐（瓶）</em>-->\r\n                        <!--&lt;!&ndash;&ndash;&gt; &lt;!&ndash;&ndash;&gt; &lt;!&ndash;&ndash;&gt; <p class=\"entityList-1IZul_0\"> </p></span> <span-->\r\n                            <!--class=\"entityList-1vr8H_0\"><span class=\"entityList-1XZvm_0\">50</span></span> <span-->\r\n                            <!--class=\"entityList-3cAE9_0\"><span class=\"cartbutton-2tycR\"><a href=\"javascript:\"-->\r\n                                                                                         <!--role=\"button\"-->\r\n                                                                                         <!--aria-label=\"删减商品\"><svg><use-->\r\n                            <!--xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#cart-add\"></use></svg></a> <span-->\r\n                            <!--role=\"button\" aria-label=\"已选5份\" class=\"cartbutton-2OSi7\">-->\r\n      <!--5-->\r\n    <!--</span> <a href=\"javascript:\" role=\"button\" aria-label=\"添加商品\"><svg><use xmlns:xlink=\"http://www.w3.org/1999/xlink\"-->\r\n                                                                            <!--xlink:href=\"#cart-minus\"></use></svg></a></span></span>-->\r\n                    <!--</li>-->\r\n                    <!--<li class=\"entityList-1eODF_0\"><span class=\"entityList-30u-R_0\"><em class=\"entityList-2g5ra_0\">百事可乐（瓶）</em>-->\r\n                        <!--&lt;!&ndash;&ndash;&gt; &lt;!&ndash;&ndash;&gt; &lt;!&ndash;&ndash;&gt; <p class=\"entityList-1IZul_0\"> </p></span> <span-->\r\n                            <!--class=\"entityList-1vr8H_0\"><span class=\"entityList-1XZvm_0\">20</span></span> <span-->\r\n                            <!--class=\"entityList-3cAE9_0\"><span class=\"cartbutton-2tycR\"><a href=\"javascript:\"-->\r\n                                                                                         <!--role=\"button\"-->\r\n                                                                                         <!--aria-label=\"删减商品\"><svg><use-->\r\n                            <!--xmlns:xlink=\"http://www.w3.org/1999/xlink\" xlink:href=\"#cart-add\"></use></svg></a> <span-->\r\n                            <!--role=\"button\" aria-label=\"已选2份\" class=\"cartbutton-2OSi7\">-->\r\n      <!--2-->\r\n    <!--</span> <a href=\"javascript:\" role=\"button\" aria-label=\"添加商品\"><svg><use xmlns:xlink=\"http://www.w3.org/1999/xlink\"-->\r\n                                                                            <!--xlink:href=\"#cart-minus\"></use></svg></a></span></span>-->\r\n                    <!--</li>-->\r\n                <!--</ul> &lt;!&ndash;&ndash;&gt;</div>-->\r\n        <!--</div>-->\r\n        <div class=\"bottomNav-3XM6c_0\" style=\"z-index: 11;\">\r\n            <span role=\"button\" class=\"bottomNav-18KRG_0\"></span>\r\n            <div role=\"button\" class=\"bottomNav-wzCAW_0\">\r\n                <p class=\"bottomNav-3Ak_E_0\"><span>¥70</span> </p>\r\n                <p class=\"bottomNav-3zqFz_0\">配送费¥5</p></div>\r\n            <a href=\"javascript:\" role=\"button\" class=\"bottomNav-1urxC_0\">去结算</a>\r\n        </div>\r\n    </footer>\r\n</template>\r\n<style>\r\n    .cartview{\r\n        font-size: .3rem;\r\n    }\r\n    .bottomNav-3XM6c_0 {\r\n        position: fixed;\r\n        right: 0;\r\n        bottom: 0;\r\n        width:100%;\r\n        display: -webkit-box;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -webkit-box-align: center;\r\n        -ms-flex-align: center;\r\n        align-items: center;\r\n        padding-left: 1.35rem;\r\n        background-color: #3d3d3f;\r\n        height: .9rem;\r\n        opacity: .95;\r\n        max-width: 768px;\r\n        margin: 0 auto;\r\n        left: 0;\r\n        box-sizing:border-box;\r\n    }\r\n    .bottomNav-18KRG_0 {\r\n        position: absolute;\r\n        left: .15rem;\r\n        bottom: .25rem;\r\n        width: 1rem;\r\n        height: 1rem;\r\n        box-sizing: border-box;\r\n        border-radius: 100%;\r\n        background-color: #3190e8;\r\n        border: .133333rem solid #444;\r\n        box-shadow: 0 -0.08rem 0.053333rem 0 rgba(0,0,0,.1);\r\n        will-change: transform;\r\n    }\r\n    .bottomNav-18KRG_0.bottomNav-6KjUI_0 {\r\n        background-image: -webkit-radial-gradient(circle,#363636 .626667rem,#444 0);\r\n        background-image: radial-gradient(circle,#363636 .626667rem,#444 0);\r\n    }\r\n    .bottomNav-18KRG_0:before {\r\n        position: absolute;\r\n        top: 0;\r\n        right: 0;\r\n        bottom: 0;\r\n        left: 0;\r\n        background-size: .6rem;\r\n        content: \"\";\r\n    }\r\n    .bottomNav-wzCAW_0 {\r\n        -webkit-box-flex: 1;\r\n        -ms-flex: 1;\r\n        flex: 1;\r\n        display: block;\r\n        width: 0;\r\n    }\r\n    .bottomNav-3Ak_E_0 {\r\n        font-size: .32rem;\r\n        line-height: normal;\r\n        color: #fff;\r\n    }\r\n    .bottomNav-3zqFz_0 {\r\n        color: #f5f5f5;\r\n        font-size: .2rem;\r\n    }\r\n    .bottomNav-1urxC_0 {\r\n        height: 100%;\r\n        width: 2.5rem;\r\n        background-color: #4cd964;\r\n        color: #fff;\r\n        text-align: center;\r\n        text-decoration: none;\r\n        font-size: .36rem;\r\n        font-weight: 700;\r\n        line-height: .9rem;\r\n        outline:none;\r\n    }\r\n    .bottomNav-1urxC_0.bottomNav-9FCIh_0 {\r\n        background-color: #535356;\r\n    }\r\n</style>"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _cart = __webpack_require__(90);

var _cart2 = _interopRequireDefault(_cart);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

var ifOnScroll = false;
exports.default = {
    data: function data() {
        return {
            'menuCategory': [{
                'id': '10001',
                'name': '热销榜',
                'descript': '大家喜欢吃，才叫真好吃。',
                'category': [{
                    'id': '1001001',
                    'name': '冬（香）菇鸡腿肉满足餐（配外婆菜）',
                    'headImg': 'https://fuss10.elemecdn.com/3/a8/2cdc1acf305611ebe21ac8428970djpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/',
                    'description': '冬菇鸡腿肉饭X1四季猪骨汤X1蒸蛋X1外婆菜X1',
                    'monthSale': '319',
                    'goodNum': '100',
                    'limit': '',
                    'price': '20'
                }, {
                    'id': '1001001',
                    'name': '冬（香）菇鸡腿肉满足餐（配外婆菜）',
                    'headImg': 'https://fuss10.elemecdn.com/3/a8/2cdc1acf305611ebe21ac8428970djpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/',
                    'description': '冬菇鸡腿肉饭X1四季猪骨汤X1蒸蛋X1外婆菜X1',
                    'monthSale': '319',
                    'goodNum': '100',
                    'limit': '1',
                    'price': '20'
                }, {
                    'id': '1001001',
                    'name': '冬（香）菇鸡腿肉满足餐（配外婆菜）',
                    'headImg': 'https://fuss10.elemecdn.com/3/a8/2cdc1acf305611ebe21ac8428970djpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/',
                    'description': '冬菇鸡腿肉饭X1四季猪骨汤X1蒸蛋X1外婆菜X1',
                    'monthSale': '319',
                    'goodNum': '100',
                    'limit': '1',
                    'price': '20'
                }]
            }, {
                'id': '10002',
                'name': '优惠',
                'descript': '大家喜欢吃，才叫真好吃。',
                'category': [{
                    'id': '1001001',
                    'name': '冬（香）菇鸡腿肉满足餐（配外婆菜）',
                    'headImg': 'https://fuss10.elemecdn.com/3/a8/2cdc1acf305611ebe21ac8428970djpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/',
                    'description': '冬菇鸡腿肉饭X1四季猪骨汤X1蒸蛋X1外婆菜X1',
                    'monthSale': '319',
                    'goodNum': '100',
                    'limit': '1',
                    'price': '20'
                }, {
                    'id': '1001001',
                    'name': '冬（香）菇鸡腿肉满足餐（配外婆菜）',
                    'headImg': 'https://fuss10.elemecdn.com/3/a8/2cdc1acf305611ebe21ac8428970djpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/',
                    'description': '冬菇鸡腿肉饭X1四季猪骨汤X1蒸蛋X1外婆菜X1',
                    'monthSale': '319',
                    'goodNum': '100',
                    'limit': '1',
                    'price': '20'
                }, {
                    'id': '1001001',
                    'name': '冬（香）菇鸡腿肉满足餐（配外婆菜）',
                    'headImg': 'https://fuss10.elemecdn.com/3/a8/2cdc1acf305611ebe21ac8428970djpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/',
                    'description': '冬菇鸡腿肉饭X1四季猪骨汤X1蒸蛋X1外婆菜X1',
                    'monthSale': '319',
                    'goodNum': '100',
                    'limit': '1',
                    'price': '20'
                }]
            }, {
                'id': '10003',
                'name': '主餐主餐主餐',
                'descript': '大家喜欢吃，才叫真好吃。',
                'category': [{
                    'id': '1001001',
                    'name': '冬（香）菇鸡腿肉满足餐（配外婆菜）',
                    'headImg': 'https://fuss10.elemecdn.com/3/a8/2cdc1acf305611ebe21ac8428970djpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/',
                    'description': '冬菇鸡腿肉饭X1四季猪骨汤X1蒸蛋X1外婆菜X1',
                    'monthSale': '319',
                    'goodNum': '100',
                    'limit': '1',
                    'price': '20'
                }, {
                    'id': '1001001',
                    'name': '冬（香）菇鸡腿肉满足餐（配外婆菜）',
                    'headImg': 'https://fuss10.elemecdn.com/3/a8/2cdc1acf305611ebe21ac8428970djpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/',
                    'description': '冬菇鸡腿肉饭X1四季猪骨汤X1蒸蛋X1外婆菜X1',
                    'monthSale': '319',
                    'goodNum': '100',
                    'limit': '1',
                    'price': '20'
                }, {
                    'id': '1001001',
                    'name': '冬（香）菇鸡腿肉满足餐（配外婆菜）',
                    'headImg': 'https://fuss10.elemecdn.com/3/a8/2cdc1acf305611ebe21ac8428970djpeg.jpeg?imageMogr/format/webp/thumbnail/!140x140r/gravity/Center/crop/140x140/',
                    'description': '冬菇鸡腿肉饭X1四季猪骨汤X1蒸蛋X1外婆菜X1',
                    'monthSale': '319',
                    'goodNum': '100',
                    'limit': '1',
                    'price': '20'
                }]
            }],
            'choseMenu': undefined
        };
    },

    components: {
        cart: _cart2.default
    },
    mounted: function mounted() {
        this.$nextTick(function () {
            document.getElementById("container").addEventListener('scroll', this.onScroll);
        });
    },

    methods: {
        choseThis: function choseThis(thisItem, index) {
            ifOnScroll = true;
            this.menuCategory.forEach(function (item) {
                if (typeof item.checked == 'undefined') {
                    _vue2.default.set(item, 'checked', false);
                } else {
                    item.checked = false;
                }
            });
            thisItem.checked = true;
            this.choseMenu = thisItem;
            //平滑滚动
            this.jump(index);
        },
        jump: function jump(index) {
            var jump = document.querySelectorAll('.category-title'
            // 获取需要滚动的距离
            );var total = jump[index].offsetTop;
            var distance = document.getElementById("container").scrollTop;
            // 平滑滚动，时长500ms，每10ms一跳，共50跳
            var step = total / 50;
            if (total > distance) {
                smoothDown();
            } else {
                var newTotal = distance - total;
                step = newTotal / 50;
                smoothUp();
            }
            function smoothDown() {
                if (distance < total) {
                    distance += step;
                    document.getElementById("container").scrollTop = distance;
                    setTimeout(smoothDown, 10);
                } else {
                    document.getElementById("container").scrollTop = total;
                    ifOnScroll = false;
                }
            }
            function smoothUp() {
                if (distance > total) {
                    distance -= step;
                    document.getElementById("container").scrollTop = distance;
                    setTimeout(smoothUp, 10);
                } else {
                    document.getElementById("container").scrollTop = total;
                    ifOnScroll = false;
                }
            }
        },
        onScroll: function onScroll() {
            if (!ifOnScroll) {
                var scrolled = document.getElementById("container").scrollTop;
                var title = document.querySelectorAll('.category-title');
                var _this = this;
                title.forEach(function (it) {
                    if (it.offsetTop > scrolled - 20 && it.offsetTop < scrolled + 20) {
                        var menuId = it.dataset.menuid;
                        _this.menuCategory.forEach(function (items) {
                            if (items.id == menuId) {
                                if (typeof items.checked == 'undefined') {
                                    _vue2.default.set(items, 'checked', true);
                                } else {
                                    items.checked = true;
                                }
                                _this.choseMenu = items;
                            } else {
                                if (typeof items.checked == 'undefined') {
                                    _vue2.default.set(items, 'checked', false);
                                } else {
                                    items.checked = false;
                                }
                            }
                        });
                    }
                });
            }
        }
    }
};

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, ".shop-main{\r\n    height:100%;\r\n    overflow: hidden;\r\n    background:#fff;\r\n}\r\n.menuview{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    height: 100%;\r\n    padding-bottom:1rem;\r\n    box-sizing:border-box;\r\n}\r\n.menucategory{\r\n    overflow-y: auto;\r\n    height: 100%;\r\n    background-color: #f8f8f8;\r\n    -webkit-overflow-scrolling: touch;\r\n}\r\n.menucategory-item{\r\n    position: relative;\r\n    padding:.15rem  .2rem ;\r\n    border-bottom: 1px solid #ededed;\r\n    font-size: .26rem;\r\n    color: #666;\r\n    width:0.8rem;\r\n}\r\n.menucategory-item.active{\r\n    background:#fff;\r\n    border-left:3px solid #3190e8;\r\n    font-weight:bold;\r\n}\r\n.container-menuview{\r\n    -webkit-box-flex: 1;\r\n    -ms-flex: 1;\r\n    flex: 1;\r\n    display: block;\r\n    width: 0;\r\n    height: 100%;\r\n    overflow-y:auto;\r\n}\r\n.category-title{\r\n    position: relative;\r\n    padding: .16rem .18rem;\r\n    background-color: #f1f1f1;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: end;\r\n    -ms-flex-align: end;\r\n    align-items: flex-end;\r\n    overflow: hidden;\r\n}\r\n.category-name{\r\n    margin-right: .133333rem;\r\n    font-weight: 700;\r\n    font-size: .3rem;\r\n    color: #666;\r\n    -webkit-box-flex: 0;\r\n    -ms-flex: none;\r\n    flex: none;\r\n}\r\n.category-description{\r\n    -webkit-box-flex: 1;\r\n    -ms-flex: 1;\r\n    flex: 1;\r\n    display: block;\r\n    width: 0;\r\n    color: #999;\r\n    font-size: .2rem;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n}\r\n\r\n.category-item{\r\n    position: relative;\r\n    background-color: #fff;\r\n    margin: 0;\r\n    padding: .3rem .2rem;\r\n    margin-bottom: 1px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    min-height: 2.5rem;\r\n    box-shadow: 0.4rem 0.013333rem 0 0 #ddd;\r\n}\r\n.foodimg{\r\n    margin-right: .1rem;\r\n    -webkit-box-flex: 2;\r\n    -ms-flex: 2;\r\n    flex: 2;\r\n    display: block;\r\n    width: 0;\r\n    vertical-align: top;\r\n}\r\n.foodimg img{\r\n    width: 100%;\r\n    border-radius: .053333rem;\r\n}\r\n.foodinfo{\r\n    position: relative;\r\n    -webkit-box-flex: 8;\r\n    -ms-flex: 8;\r\n    flex: 8;\r\n    display: block;\r\n    width: 0;\r\n    padding-bottom: .5rem;\r\n}\r\n.foodtitle{\r\n    font-size: .3rem;\r\n    font-weight: 700;\r\n    line-height: 1.1;\r\n    overflow: hidden;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n    -ms-flex-pack: justify;\r\n    justify-content: space-between;\r\n}\r\n.fooddescription{\r\n    margin: .1rem 0;\r\n    font-size: .2rem;\r\n    color: #999;\r\n    line-height:.4rem;\r\n}\r\n.foodsales{\r\n    color: #666;\r\n    font-size: .2rem;\r\n    line-height: 1;\r\n}\r\n.foodsales span{\r\n    vertical-align: middle;\r\n}\r\n.foodactivity{\r\n    font-size: .22rem;\r\n    -webkit-transform: scale(.8);\r\n    transform: scale(.8);\r\n    -webkit-transform-origin: left;\r\n    transform-origin: left;\r\n    color: #f07373;\r\n    white-space: nowrap;\r\n}\r\n.foodactivity span:first-child {\r\n    border: 1px solid currentColor;\r\n    padding: 0 .066667rem;\r\n}\r\n.foodprice{\r\n    position: absolute;\r\n    left: 0;\r\n    bottom: 0;\r\n    font-weight: 700;\r\n    font-size: .4rem;\r\n    line-height: .4rem;\r\n    color: #f60;\r\n}\r\n.foodprice:before {\r\n    font-weight: 400;\r\n    content: \"\\A5\";\r\n    font-size: .293333rem;\r\n    display: inline-block;\r\n}\r\n.cartbutton {\r\n    position: absolute;\r\n    right: 0;\r\n    bottom: -.066667rem;\r\n}\r\n.cartbutton-2tycR {\r\n    display: inline-block;\r\n    font-size: .346667rem;\r\n    white-space: nowrap;\r\n}\r\n.cartbutton-2tycR a {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    text-decoration: none;\r\n    outline:none;\r\n    -webkit-border-radius:50%;\r\n    -moz-border-radius:50%;\r\n    border-radius:50%;\r\n    border:1px solid #3190e8;\r\n    line-height:.4rem;\r\n    height:.4rem;\r\n    width:.4rem;\r\n    text-align:center;\r\n    font-size:.4rem;\r\n}\r\n.cartbutton-2tycR a.cut{\r\n    color:#3190e8;\r\n}\r\n.cartbutton-2tycR a.add{\r\n    background:#3190e8;\r\n    color:#fff;\r\n}\r\n.cartbutton-2OSi7{\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    text-align: center;\r\n    color: #666;\r\n    font-size: .373333rem;\r\n    min-width: .4rem;\r\n    max-width: 2em;\r\n    overflow: hidden;\r\n}", "", {"version":3,"sources":["F:/Program/ele/public/css/shopOrder.css"],"names":[],"mappings":"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","file":"shopOrder.css","sourcesContent":[".shop-main{\r\n    height:100%;\r\n    overflow: hidden;\r\n    background:#fff;\r\n}\r\n.menuview{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    height: 100%;\r\n    padding-bottom:1rem;\r\n    box-sizing:border-box;\r\n}\r\n.menucategory{\r\n    overflow-y: auto;\r\n    height: 100%;\r\n    background-color: #f8f8f8;\r\n    -webkit-overflow-scrolling: touch;\r\n}\r\n.menucategory-item{\r\n    position: relative;\r\n    padding:.15rem  .2rem ;\r\n    border-bottom: 1px solid #ededed;\r\n    font-size: .26rem;\r\n    color: #666;\r\n    width:0.8rem;\r\n}\r\n.menucategory-item.active{\r\n    background:#fff;\r\n    border-left:3px solid #3190e8;\r\n    font-weight:bold;\r\n}\r\n.container-menuview{\r\n    -webkit-box-flex: 1;\r\n    -ms-flex: 1;\r\n    flex: 1;\r\n    display: block;\r\n    width: 0;\r\n    height: 100%;\r\n    overflow-y:auto;\r\n}\r\n.category-title{\r\n    position: relative;\r\n    padding: .16rem .18rem;\r\n    background-color: #f1f1f1;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: end;\r\n    -ms-flex-align: end;\r\n    align-items: flex-end;\r\n    overflow: hidden;\r\n}\r\n.category-name{\r\n    margin-right: .133333rem;\r\n    font-weight: 700;\r\n    font-size: .3rem;\r\n    color: #666;\r\n    -webkit-box-flex: 0;\r\n    -ms-flex: none;\r\n    flex: none;\r\n}\r\n.category-description{\r\n    -webkit-box-flex: 1;\r\n    -ms-flex: 1;\r\n    flex: 1;\r\n    display: block;\r\n    width: 0;\r\n    color: #999;\r\n    font-size: .2rem;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n}\r\n\r\n.category-item{\r\n    position: relative;\r\n    background-color: #fff;\r\n    margin: 0;\r\n    padding: .3rem .2rem;\r\n    margin-bottom: 1px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    min-height: 2.5rem;\r\n    box-shadow: 0.4rem 0.013333rem 0 0 #ddd;\r\n}\r\n.foodimg{\r\n    margin-right: .1rem;\r\n    -webkit-box-flex: 2;\r\n    -ms-flex: 2;\r\n    flex: 2;\r\n    display: block;\r\n    width: 0;\r\n    vertical-align: top;\r\n}\r\n.foodimg img{\r\n    width: 100%;\r\n    border-radius: .053333rem;\r\n}\r\n.foodinfo{\r\n    position: relative;\r\n    -webkit-box-flex: 8;\r\n    -ms-flex: 8;\r\n    flex: 8;\r\n    display: block;\r\n    width: 0;\r\n    padding-bottom: .5rem;\r\n}\r\n.foodtitle{\r\n    font-size: .3rem;\r\n    font-weight: 700;\r\n    line-height: 1.1;\r\n    overflow: hidden;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n    -ms-flex-pack: justify;\r\n    justify-content: space-between;\r\n}\r\n.fooddescription{\r\n    margin: .1rem 0;\r\n    font-size: .2rem;\r\n    color: #999;\r\n    line-height:.4rem;\r\n}\r\n.foodsales{\r\n    color: #666;\r\n    font-size: .2rem;\r\n    line-height: 1;\r\n}\r\n.foodsales span{\r\n    vertical-align: middle;\r\n}\r\n.foodactivity{\r\n    font-size: .22rem;\r\n    -webkit-transform: scale(.8);\r\n    transform: scale(.8);\r\n    -webkit-transform-origin: left;\r\n    transform-origin: left;\r\n    color: #f07373;\r\n    white-space: nowrap;\r\n}\r\n.foodactivity span:first-child {\r\n    border: 1px solid currentColor;\r\n    padding: 0 .066667rem;\r\n}\r\n.foodprice{\r\n    position: absolute;\r\n    left: 0;\r\n    bottom: 0;\r\n    font-weight: 700;\r\n    font-size: .4rem;\r\n    line-height: .4rem;\r\n    color: #f60;\r\n}\r\n.foodprice:before {\r\n    font-weight: 400;\r\n    content: \"\\A5\";\r\n    font-size: .293333rem;\r\n    display: inline-block;\r\n}\r\n.cartbutton {\r\n    position: absolute;\r\n    right: 0;\r\n    bottom: -.066667rem;\r\n}\r\n.cartbutton-2tycR {\r\n    display: inline-block;\r\n    font-size: .346667rem;\r\n    white-space: nowrap;\r\n}\r\n.cartbutton-2tycR a {\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    text-decoration: none;\r\n    outline:none;\r\n    -webkit-border-radius:50%;\r\n    -moz-border-radius:50%;\r\n    border-radius:50%;\r\n    border:1px solid #3190e8;\r\n    line-height:.4rem;\r\n    height:.4rem;\r\n    width:.4rem;\r\n    text-align:center;\r\n    font-size:.4rem;\r\n}\r\n.cartbutton-2tycR a.cut{\r\n    color:#3190e8;\r\n}\r\n.cartbutton-2tycR a.add{\r\n    background:#3190e8;\r\n    color:#fff;\r\n}\r\n.cartbutton-2OSi7{\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    text-align: center;\r\n    color: #666;\r\n    font-size: .373333rem;\r\n    min-width: .4rem;\r\n    max-width: 2em;\r\n    overflow: hidden;\r\n}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 90:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(105)
}
var Component = __webpack_require__(5)(
  /* script */
  null,
  /* template */
  __webpack_require__(96),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "F:\\Program\\ele\\public\\components\\shop\\cart.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] cart.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(2)
  hotAPI.install(__webpack_require__(1), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-7bf75592", Component.options)
  } else {
    hotAPI.reload("data-v-7bf75592", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "shop-main"
  }, [_c('div', {
    staticClass: "menuview"
  }, [_c('ul', {
    staticClass: "menucategory"
  }, _vm._l((_vm.menuCategory), function(item, index) {
    return _c('li', {
      staticClass: "menucategory-item",
      class: {
        'active': !!item.checked || (_vm.choseMenu == undefined && index == 0)
      },
      on: {
        "click": function($event) {
          _vm.choseThis(item, index)
        }
      }
    }, [_c('span', {
      staticClass: "menucategory-qwsbd"
    }, [_vm._v(_vm._s(item.name))])])
  })), _vm._v(" "), _c('section', {
    staticClass: "container-menuview",
    attrs: {
      "id": "container"
    }
  }, [_vm._l((_vm.menuCategory), function(cate) {
    return [_c('div', {
      staticClass: "category-title",
      attrs: {
        "data-menuid": cate.id
      }
    }, [_c('strong', {
      staticClass: "category-name"
    }, [_vm._v(_vm._s(cate.name))]), _vm._v(" "), _c('span', {
      staticClass: "category-description"
    }, [_vm._v(_vm._s(cate.descript))])]), _vm._v(" "), _c('ul', {
      staticClass: "categoryList"
    }, _vm._l((cate.category), function(list) {
      return _c('li', {
        staticClass: "category-item"
      }, [_c('span', {
        staticClass: "foodimg"
      }, [_c('img', {
        attrs: {
          "src": list.headImg
        }
      })]), _vm._v(" "), _c('section', {
        staticClass: "foodinfo"
      }, [_c('div', {
        staticClass: "foodtitle"
      }, [_c('span', [_vm._v(_vm._s(list.name))])]), _vm._v(" "), _c('p', {
        staticClass: "fooddescription"
      }, [_vm._v(_vm._s(list.description))]), _vm._v(" "), _c('p', {
        staticClass: "foodsales"
      }, [_c('span', [_vm._v("月售" + _vm._s(list.monthSale) + "份")]), _vm._v(" "), _c('span', [_vm._v("好评率" + _vm._s(list.goodNum) + "%")])]), _vm._v(" "), (list.limit != '') ? _c('p', {
        staticClass: "foodactivity"
      }, [_c('span', [_vm._v("限" + _vm._s(list.limit) + "份")])]) : _vm._e(), _vm._v(" "), _c('strong', {
        staticClass: "foodprice"
      }, [_c('span', [_vm._v(_vm._s(list.price))])]), _vm._v(" "), _vm._m(0, true)])])
    }))]
  })], 2)]), _vm._v(" "), _c('cart')], 1)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "cartbutton"
  }, [_c('span', [_c('span', {
    staticClass: "cartbutton-2tycR"
  }, [_c('a', {
    staticClass: "cut",
    attrs: {
      "href": "javascript:",
      "role": "button"
    }
  }, [_vm._v("-")]), _vm._v(" "), _c('span', {
    staticClass: "cartbutton-2OSi7",
    attrs: {
      "role": "button"
    }
  }, [_vm._v("9")]), _vm._v(" "), _c('a', {
    staticClass: "add",
    attrs: {
      "href": "javascript:",
      "role": "button"
    }
  }, [_vm._v("+")])])])])
}]}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(2).rerender("data-v-4e47871e", module.exports)
  }
}

/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('footer', {
    staticClass: "cartview "
  }, [_c('div', {
    staticClass: "bottomNav-3XM6c_0",
    staticStyle: {
      "z-index": "11"
    }
  }, [_c('span', {
    staticClass: "bottomNav-18KRG_0",
    attrs: {
      "role": "button"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "bottomNav-wzCAW_0",
    attrs: {
      "role": "button"
    }
  }, [_c('p', {
    staticClass: "bottomNav-3Ak_E_0"
  }, [_c('span', [_vm._v("¥70")])]), _vm._v(" "), _c('p', {
    staticClass: "bottomNav-3zqFz_0"
  }, [_vm._v("配送费¥5")])]), _vm._v(" "), _c('a', {
    staticClass: "bottomNav-1urxC_0",
    attrs: {
      "href": "javascript:",
      "role": "button"
    }
  }, [_vm._v("去结算")])])])
}]}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(2).rerender("data-v-7bf75592", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=2.js.map