webpackJsonp([4],{

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(71);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("5f0c49ac", content, false);
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(71, function() {
     var newContent = __webpack_require__(71);
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 64:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(106)
}
var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(80),
  /* template */
  __webpack_require__(97),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "F:\\Program\\ele\\public\\components\\shop\\shop.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] shop.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(2)
  hotAPI.install(__webpack_require__(1), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-a5e84be6", Component.options)
  } else {
    hotAPI.reload("data-v-a5e84be6", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports
exports.i(__webpack_require__(84), "");

// module
exports.push([module.i, "\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"shop.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
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

exports.default = {
    data: function data() {
        return {
            'shop': {
                'shopInfo': {
                    'name': '放牛斑（滨北官任店）',
                    'head': 'https://fuss10.elemecdn.com/f/db/4e3454fcacc68667ef8ee8832179cjpeg.jpeg?imageMogr/format/webp/thumbnail/!130x130r/gravity/Center/crop/130x130/',
                    'sendMethods': '蜂鸟专送',
                    'sendTime': '31分钟',
                    'sendPrice': '15',
                    'gongGao': '各位放牛斑的粉丝，请在饮料下单的时候备注一下购买饮料的需求：1、甜度选择（多糖、正常糖、少糖、半塘、微糖、无糖）。2、放牛斑会员卡的手机号，以便我们帮您把积分积进去喔！3、选购加料（波霸、燕麦、红豆）的时候要备注清楚加料要加在哪一杯饮料中，确保我们给您的饮料是无误的，谢谢！'
                }
            }
        };
    },
    mounted: function mounted() {
        this.$store.commit('toggleFooter');
    }
};

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, ".shopInfo{\r\n    padding:0.3rem;\r\n    background-color:rgb(0, 151, 255);\r\n}\r\n.shop-header-main_1B2kH_0{\r\n    display: -webkit-box;\r\n    display: -webkit-flex;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n    -webkit-justify-content: space-between;\r\n    -ms-flex-pack: justify;\r\n    justify-content: space-between;\r\n    align-content: center;\r\n}\r\n.shop-header-logo_3woDQ_0{\r\n    width: 1.3rem;\r\n    height: 1.3rem;\r\n    border: 1px solid #fff;\r\n    border-radius: .106667rem;\r\n    margin: 0 .2rem;\r\n}\r\n.shop-header-content_3UjPs_0{\r\n    -webkit-box-flex: 1;\r\n    -webkit-flex: 1;\r\n    -ms-flex: 1;\r\n    flex: 1;\r\n    display: block;\r\n    width: 0;\r\n    padding-right: .133333rem;\r\n    color:#fff;\r\n}\r\n.shop-header-shopName_2QrHh_0{\r\n    font-size:.36rem;\r\n    font-weight:bold;\r\n    line-height:0.4rem;\r\n}\r\n.shop-header-delivery_1mcTe_0{\r\n    font-size:0.25rem;\r\n}\r\n.shop-header-notice_2DzmG_0{\r\n    font-size:0.25rem;\r\n    white-space: nowrap;\r\n    width:100%;\r\n    overflow:hidden;\r\n    text-overflow:ellipsis;\r\n}\r\n\r\n.shop-tab-container_3skq8_0 {\r\n    line-height: 0.8rem;\r\n    display: -webkit-box;\r\n    display: -webkit-flex;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    background-color: #fff;\r\n}\r\n.shop-tab-tab_r4SDi_0 {\r\n    position: relative;\r\n    -webkit-box-flex: 1;\r\n    -webkit-flex: 1;\r\n    -ms-flex: 1;\r\n    flex: 1;\r\n    display: block;\r\n    width: 0;\r\n    text-align: center;\r\n    font-size: .28rem;\r\n    color: #666;\r\n    border-bottom: 1px solid #ddd;\r\n    outline:none!important;\r\n}\r\n.shop-tab-active {\r\n    color: #3190e8;\r\n}\r\n.shop-tab-active .shop-tab-title_1crD1_0:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    bottom:-1px;\r\n    left: 0rem;\r\n    right: 0rem;\r\n    height: .03rem;\r\n    background-color: #3190e8;\r\n    border-radius: .04rem;\r\n}\r\n\r\n.subPage{\r\n    position: absolute;\r\n    width:100%;\r\n    bottom:0;\r\n    top:2.8rem;\r\n    overflow:hidden;\r\n}", "", {"version":3,"sources":["F:/Program/ele/public/css/shop.css"],"names":[],"mappings":"AAAA;IACI,eAAe;IACf,kCAAkC;CACrC;AACD;IACI,qBAAqB;IACrB,sBAAsB;IACtB,qBAAqB;IACrB,cAAc;IACd,0BAA0B;IAC1B,uCAAuC;IACvC,uBAAuB;IACvB,+BAA+B;IAC/B,sBAAsB;CACzB;AACD;IACI,cAAc;IACd,eAAe;IACf,uBAAuB;IACvB,0BAA0B;IAC1B,gBAAgB;CACnB;AACD;IACI,oBAAoB;IACpB,gBAAgB;IAChB,YAAY;IACZ,QAAQ;IACR,eAAe;IACf,SAAS;IACT,0BAA0B;IAC1B,WAAW;CACd;AACD;IACI,iBAAiB;IACjB,iBAAiB;IACjB,mBAAmB;CACtB;AACD;IACI,kBAAkB;CACrB;AACD;IACI,kBAAkB;IAClB,oBAAoB;IACpB,WAAW;IACX,gBAAgB;IAChB,uBAAuB;CAC1B;;AAED;IACI,oBAAoB;IACpB,qBAAqB;IACrB,sBAAsB;IACtB,qBAAqB;IACrB,cAAc;IACd,uBAAuB;CAC1B;AACD;IACI,mBAAmB;IACnB,oBAAoB;IACpB,gBAAgB;IAChB,YAAY;IACZ,QAAQ;IACR,eAAe;IACf,SAAS;IACT,mBAAmB;IACnB,kBAAkB;IAClB,YAAY;IACZ,8BAA8B;IAC9B,uBAAuB;CAC1B;AACD;IACI,eAAe;CAClB;AACD;IACI,YAAY;IACZ,mBAAmB;IACnB,YAAY;IACZ,WAAW;IACX,YAAY;IACZ,eAAe;IACf,0BAA0B;IAC1B,sBAAsB;CACzB;;AAED;IACI,mBAAmB;IACnB,WAAW;IACX,SAAS;IACT,WAAW;IACX,gBAAgB;CACnB","file":"shop.css","sourcesContent":[".shopInfo{\r\n    padding:0.3rem;\r\n    background-color:rgb(0, 151, 255);\r\n}\r\n.shop-header-main_1B2kH_0{\r\n    display: -webkit-box;\r\n    display: -webkit-flex;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n    -webkit-justify-content: space-between;\r\n    -ms-flex-pack: justify;\r\n    justify-content: space-between;\r\n    align-content: center;\r\n}\r\n.shop-header-logo_3woDQ_0{\r\n    width: 1.3rem;\r\n    height: 1.3rem;\r\n    border: 1px solid #fff;\r\n    border-radius: .106667rem;\r\n    margin: 0 .2rem;\r\n}\r\n.shop-header-content_3UjPs_0{\r\n    -webkit-box-flex: 1;\r\n    -webkit-flex: 1;\r\n    -ms-flex: 1;\r\n    flex: 1;\r\n    display: block;\r\n    width: 0;\r\n    padding-right: .133333rem;\r\n    color:#fff;\r\n}\r\n.shop-header-shopName_2QrHh_0{\r\n    font-size:.36rem;\r\n    font-weight:bold;\r\n    line-height:0.4rem;\r\n}\r\n.shop-header-delivery_1mcTe_0{\r\n    font-size:0.25rem;\r\n}\r\n.shop-header-notice_2DzmG_0{\r\n    font-size:0.25rem;\r\n    white-space: nowrap;\r\n    width:100%;\r\n    overflow:hidden;\r\n    text-overflow:ellipsis;\r\n}\r\n\r\n.shop-tab-container_3skq8_0 {\r\n    line-height: 0.8rem;\r\n    display: -webkit-box;\r\n    display: -webkit-flex;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    background-color: #fff;\r\n}\r\n.shop-tab-tab_r4SDi_0 {\r\n    position: relative;\r\n    -webkit-box-flex: 1;\r\n    -webkit-flex: 1;\r\n    -ms-flex: 1;\r\n    flex: 1;\r\n    display: block;\r\n    width: 0;\r\n    text-align: center;\r\n    font-size: .28rem;\r\n    color: #666;\r\n    border-bottom: 1px solid #ddd;\r\n    outline:none!important;\r\n}\r\n.shop-tab-active {\r\n    color: #3190e8;\r\n}\r\n.shop-tab-active .shop-tab-title_1crD1_0:after {\r\n    content: \"\";\r\n    position: absolute;\r\n    bottom:-1px;\r\n    left: 0rem;\r\n    right: 0rem;\r\n    height: .03rem;\r\n    background-color: #3190e8;\r\n    border-radius: .04rem;\r\n}\r\n\r\n.subPage{\r\n    position: absolute;\r\n    width:100%;\r\n    bottom:0;\r\n    top:2.8rem;\r\n    overflow:hidden;\r\n}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 97:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "shop"
  }, [_c('section', {
    staticClass: "shopInfo"
  }, [_c('div', {
    staticClass: "shop-header-main_1B2kH_0"
  }, [_c('img', {
    staticClass: "shop-header-logo_3woDQ_0",
    attrs: {
      "src": _vm.shop.shopInfo.head
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "shop-header-content_3UjPs_0"
  }, [_c('h2', {
    staticClass: "shop-header-shopName_2QrHh_0",
    domProps: {
      "textContent": _vm._s(_vm.shop.shopInfo.name)
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "shop-header-delivery_1mcTe_0"
  }, [_c('span', {
    staticClass: "shop-header-deliveryItem_Fari3_0"
  }, [_vm._v("\n                 " + _vm._s(_vm.shop.shopInfo.sendMethods) + "\n             ")]), _vm._v(" "), _c('span', {
    staticClass: "shop-header-deliveryItem_Fari3_0"
  }, [_vm._v("\n                " + _vm._s(_vm.shop.shopInfo.sendTime) + "送达\n             ")]), _vm._v(" "), _c('span', {
    staticClass: "shop-header-deliveryItem_Fari3_0"
  }, [_vm._v("\n                配送费¥" + _vm._s(_vm.shop.shopInfo.sendPrice) + "\n              ")])]), _vm._v(" "), _c('div', {
    staticClass: "shop-header-notice_2DzmG_0"
  }, [_c('span', [_vm._v("公告：")]), _vm._v(" "), _c('span', {
    domProps: {
      "textContent": _vm._s(_vm.shop.shopInfo.gongGao)
    }
  })])])])]), _vm._v(" "), _c('div', {
    staticClass: "shop-tab-container_3skq8_0"
  }, [_c('router-link', {
    staticClass: "shop-tab-tab_r4SDi_0 ",
    class: {
      'shop-tab-active': _vm.$route.path.indexOf('comment') === -1
    },
    attrs: {
      "to": {
        path: '/shopInfo',
        query: {
          shophash: _vm.$route.query.shophash
        }
      }
    }
  }, [_c('span', {
    staticClass: "shop-tab-title_1crD1_0"
  }, [_vm._v("商品")])]), _vm._v(" "), _c('router-link', {
    staticClass: "shop-tab-tab_r4SDi_0",
    class: {
      'shop-tab-active': _vm.$route.path.indexOf('comment') > -1
    },
    attrs: {
      "to": {
        path: '/shopInfo/comment',
        query: {
          shophash: _vm.$route.query.shophash
        }
      }
    }
  }, [_c('span', {
    staticClass: "shop-tab-title_1crD1_0"
  }, [_vm._v("评价")])])], 1), _vm._v(" "), _c('section', {
    staticClass: "subPage"
  }, [_c('router-view')], 1)])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(2).rerender("data-v-a5e84be6", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=4.js.map