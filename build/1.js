webpackJsonp([1],{

/***/ 102:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(129)
}
var Component = __webpack_require__(5)(
  /* script */
  null,
  /* template */
  __webpack_require__(116),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "F:\\Program\\ele\\src\\components\\home\\fooder.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] fooder.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(2)
  hotAPI.install(__webpack_require__(1), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-5c6ba9ec", Component.options)
  } else {
    hotAPI.reload("data-v-5c6ba9ec", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 103:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(131)
}
var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(86),
  /* template */
  __webpack_require__(118),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "F:\\Program\\ele\\src\\components\\home\\shopList.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] shopList.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(2)
  hotAPI.install(__webpack_require__(1), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ace14b56", Component.options)
  } else {
    hotAPI.reload("data-v-ace14b56", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "container"
  }, [(_vm.$route.path == '/') ? _c('div', {
    attrs: {
      "id": "header-title"
    }
  }, [_c('span', {
    staticClass: "area-title",
    on: {
      "click": function($event) {
        _vm.$store.commit('toggleAreaSearch')
      }
    }
  }, [_vm._v("厦门市湖里区禾山路")])]) : _vm._e(), _vm._v(" "), (_vm.$route.path == '/') ? _c('router-link', {
    staticClass: "index-search-link",
    attrs: {
      "to": "search"
    }
  }, [_c('input', {
    staticClass: "index-search",
    attrs: {
      "type": "text",
      "placeholder": "搜索商家、商品",
      "aria-label": "搜索商家、商品"
    }
  })]) : _vm._e(), _vm._v(" "), _c('section', {
    staticClass: "fooder"
  }, [_c('fooder')], 1), _vm._v(" "), _c('h3', {
    staticClass: "index-title"
  }, [_vm._v("推荐商家")]), _vm._v(" "), _c('shop-list')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(2).rerender("data-v-02afccaf", module.exports)
  }
}

/***/ }),

/***/ 116:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _vm._m(0)
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "fooder-list-wrap"
  }, [_c('ul', {
    staticClass: "fooder-list"
  }, [_c('li', {
    staticClass: "list-item"
  }, [_c('a', {
    attrs: {
      "href": "javascript:;"
    }
  }, [_c('div', {
    staticClass: "list-img"
  }, [_c('img', {
    attrs: {
      "src": "https://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
      "alt": ""
    }
  })]), _vm._v(" "), _c('span', {
    staticClass: "title"
  }, [_vm._v("美食")])])]), _vm._v(" "), _c('li', {
    staticClass: "list-item"
  }, [_c('a', {
    attrs: {
      "href": "javascript:;"
    }
  }, [_c('div', {
    staticClass: "list-img"
  }, [_c('img', {
    attrs: {
      "src": "https://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
      "alt": ""
    }
  })]), _vm._v(" "), _c('span', {
    staticClass: "title"
  }, [_vm._v("美食")])])]), _vm._v(" "), _c('li', {
    staticClass: "list-item"
  }, [_c('a', {
    attrs: {
      "href": "javascript:;"
    }
  }, [_c('div', {
    staticClass: "list-img"
  }, [_c('img', {
    attrs: {
      "src": "https://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
      "alt": ""
    }
  })]), _vm._v(" "), _c('span', {
    staticClass: "title"
  }, [_vm._v("美食")])])]), _vm._v(" "), _c('li', {
    staticClass: "list-item"
  }, [_c('a', {
    attrs: {
      "href": "javascript:;"
    }
  }, [_c('div', {
    staticClass: "list-img"
  }, [_c('img', {
    attrs: {
      "src": "https://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
      "alt": ""
    }
  })]), _vm._v(" "), _c('span', {
    staticClass: "title"
  }, [_vm._v("美食")])])])]), _vm._v(" "), _c('ul', {
    staticClass: "fooder-list"
  }, [_c('li', {
    staticClass: "list-item"
  }, [_c('a', {
    attrs: {
      "href": "javascript:;"
    }
  }, [_c('div', {
    staticClass: "list-img"
  }, [_c('img', {
    attrs: {
      "src": "https://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
      "alt": ""
    }
  })]), _vm._v(" "), _c('span', {
    staticClass: "title"
  }, [_vm._v("美食")])])]), _vm._v(" "), _c('li', {
    staticClass: "list-item"
  }, [_c('a', {
    attrs: {
      "href": "javascript:;"
    }
  }, [_c('div', {
    staticClass: "list-img"
  }, [_c('img', {
    attrs: {
      "src": "https://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
      "alt": ""
    }
  })]), _vm._v(" "), _c('span', {
    staticClass: "title"
  }, [_vm._v("美食")])])]), _vm._v(" "), _c('li', {
    staticClass: "list-item"
  }, [_c('a', {
    attrs: {
      "href": "javascript:;"
    }
  }, [_c('div', {
    staticClass: "list-img"
  }, [_c('img', {
    attrs: {
      "src": "https://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
      "alt": ""
    }
  })]), _vm._v(" "), _c('span', {
    staticClass: "title"
  }, [_vm._v("美食")])])]), _vm._v(" "), _c('li', {
    staticClass: "list-item"
  }, [_c('a', {
    attrs: {
      "href": "javascript:;"
    }
  }, [_c('div', {
    staticClass: "list-img"
  }, [_c('img', {
    attrs: {
      "src": "https://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/",
      "alt": ""
    }
  })]), _vm._v(" "), _c('span', {
    staticClass: "title"
  }, [_vm._v("美食")])])])])])
}]}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(2).rerender("data-v-5c6ba9ec", module.exports)
  }
}

/***/ }),

/***/ 118:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "shoplist"
  }, [_c('ul', {
    staticClass: "shop-list"
  }, _vm._l((_vm.$store.state.indexShopList), function(shop) {
    return _c('li', {
      staticClass: "shop-list-item"
    }, [_c('router-link', {
      attrs: {
        "to": {
          path: 'shopInfo',
          query: {
            shophash: shop.id
          }
        }
      }
    }, [_c('div', {
      staticClass: "logo-container"
    }, [_c('img', {
      staticClass: "shop-logo",
      attrs: {
        "src": shop.img,
        "alt": ""
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "index-main"
    }, [_c('section', {
      staticClass: "index-line"
    }, [_c('h3', {
      staticClass: "shop-name"
    }, [_c('span', [_vm._v(_vm._s(shop.name))])]), _vm._v(" "), _c('div', {
      staticClass: "index-supportWrap"
    }, [_c('i', {
      staticClass: "activity-activityIcon"
    }, [_vm._v("保")]), _vm._v(" "), _c('i', {
      staticClass: "activity-activityIcon"
    }, [_vm._v(" 票")]), _vm._v(" "), _c('i', {
      staticClass: "activity-activityIcon"
    }, [_vm._v(" 准")])])]), _vm._v(" "), _c('section', {
      staticClass: "index-line"
    }, [_c('div', {
      staticClass: "index-rateWrap"
    }, [_c('div', {
      staticClass: "rating-max"
    }, [_c('i', {
      staticClass: "start"
    }, [_vm._v("★")]), _vm._v(" "), _c('i', {
      staticClass: "start"
    }, [_vm._v("★")]), _vm._v(" "), _c('i', {
      staticClass: "start"
    }, [_vm._v("★")]), _vm._v(" "), _c('i', {
      staticClass: "start"
    }, [_vm._v("★")]), _vm._v(" "), _c('i', {
      staticClass: "start"
    }, [_vm._v("★")])]), _vm._v(" "), _c('span', {
      staticClass: "index-rate"
    }, [_vm._v(_vm._s(shop.score))]), _vm._v(" "), _c('span', [_vm._v("月售" + _vm._s(shop.sale) + "单")])]), _vm._v(" "), _c('div', {
      staticClass: "index-deliveryWrap"
    }, [_c('span', {
      staticClass: "index-iconDeliver"
    }, [_vm._v("准时达")]), _vm._v(" "), _c('span', {
      staticClass: "index-iconDeliver"
    }, [_vm._v("蜂鸟专送")])])]), _vm._v(" "), _c('section', {
      staticClass: "index-line"
    }, [_c('div', {
      staticClass: "index-rateWrap"
    }, [_c('span', [_vm._v(_vm._s(_vm._f("toMoney")(shop.saleStart)) + "起送")]), _vm._v(" "), _c('span', [_vm._v("配送费" + _vm._s(_vm._f("toMoney")(shop.sendPrice)))]), _vm._v(" "), _c('span', [_vm._v(_vm._s(shop.pingJun) + "/人")])]), _vm._v(" "), _c('div', {
      staticClass: "index-deliveryWrap"
    }, [_c('span', {
      staticClass: "index-distanceWrap"
    }, [_vm._v(_vm._s(shop.juLi) + "m")]), _vm._v(" "), _c('span', {
      staticClass: "index-distanceWrap"
    }, [_vm._v(_vm._s(shop.time) + "分钟")])])])])])], 1)
  }))])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(2).rerender("data-v-ace14b56", module.exports)
  }
}

/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(71);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("2bf53aae", content, false);
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

/***/ 129:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(79);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("7d91d9a6", content, false);
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(79, function() {
     var newContent = __webpack_require__(79);
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(81);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("fb7ba812", content, false);
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(81, function() {
     var newContent = __webpack_require__(81);
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
  __webpack_require__(121)
}
var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(84),
  /* template */
  __webpack_require__(108),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "F:\\Program\\ele\\src\\components\\home\\homePage.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] homePage.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(2)
  hotAPI.install(__webpack_require__(1), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-02afccaf", Component.options)
  } else {
    hotAPI.reload("data-v-02afccaf", Component.options)
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


// module
exports.push([module.i, "\n.fooder{background-color:#fff;padding-bottom:0.2rem;\n}\n.index-title {\n    margin-top: .266667rem;\n    line-height: .7rem;\n    font-weight: 600;\n    border-top: 1px solid #eee;\n    border-bottom: 1px solid #eee;\n    font-size: .3rem;\n    padding-left: .3rem;\n    background-color:#fff;\n}\n.index-search-link{\n    background:#0097ff;\n    display: block;\n    padding:0 .3rem .3rem .3rem;\n}\n.index-search-link:active{\n    background:#0097ff;\n}\n.index-search{\n    display: block;\n    width: 100%;\n    height: .7rem;\n    line-height: .7rem;\n    text-align: center;\n    border-radius: .7rem;\n    color: #333;\n    font-size: .28rem;\n    outline:none;\n    border: none;\n    box-shadow: 0 0.026667rem 0.066667rem 0 rgba(0,0,0,.2);\n}\n.area-title{\n    float:left;\n    text-align:left;\n    width:40%;\n    overflow:hidden;\n    white-space:nowrap;\n    -ms-text-overflow: ellipsis;\n    text-overflow: ellipsis;\n    padding-left:.3rem;\n    font-size:.32rem;\n}\n.searchArea{\n    position: fixed;\n    top:0;\n    bottom:0;\n    width:100%;\n    height:100%;\n    z-index:100;\n    background:#f4f4f4;\n}\n.searchArea .search-top{\n    background-color:rgb(0, 151, 255);\n    text-align: center;\n    padding-bottom: .2rem;\n}\n.searchArea .search-hearder{\n    height:0.8rem;\n    line-height:0.8rem;\n    color:#fff;\n}\n.searchArea .search-hearder .search-area-title{\n    font-size:0.36rem;\n}\n.searchArea .search-area-input{\n    margin-top: .133333rem;\n    width: 90%;\n    height: .533333rem;\n    line-height: .533333rem;\n    border-radius: .733333rem;\n    padding: 0 .32rem;\n    font-size: .28rem;\n    box-sizing:border-box;\n}\n.slide-enter-active, .slide-leave-active {\n    transition: all 300ms;\n}\n.slide-enter, .slide-leave-active {\n    opacity: 0;\n    transform: translateX(100%);\n}\n", "", {"version":3,"sources":["F:/Program/ele/src/components/home/homePage.vue?4db384e9"],"names":[],"mappings":";AAgCA,QAAA,sBAAA,sBAAA;CAAA;AACA;IACA,uBAAA;IACA,mBAAA;IACA,iBAAA;IACA,2BAAA;IACA,8BAAA;IACA,iBAAA;IACA,oBAAA;IACA,sBAAA;CACA;AAEA;IACA,mBAAA;IACA,eAAA;IACA,4BAAA;CACA;AACA;IACA,mBAAA;CACA;AACA;IACA,eAAA;IACA,YAAA;IACA,cAAA;IACA,mBAAA;IACA,mBAAA;IACA,qBAAA;IACA,YAAA;IACA,kBAAA;IACA,aAAA;IACA,aAAA;IACA,uDAAA;CACA;AACA;IACA,WAAA;IACA,gBAAA;IACA,UAAA;IACA,gBAAA;IACA,mBAAA;IACA,4BAAA;IACA,wBAAA;IACA,mBAAA;IACA,iBAAA;CACA;AAEA;IACA,gBAAA;IACA,MAAA;IACA,SAAA;IACA,WAAA;IACA,YAAA;IACA,YAAA;IACA,mBAAA;CACA;AACA;IACA,kCAAA;IACA,mBAAA;IACA,sBAAA;CACA;AACA;IACA,cAAA;IACA,mBAAA;IACA,WAAA;CACA;AACA;IACA,kBAAA;CACA;AACA;IACA,uBAAA;IACA,WAAA;IACA,mBAAA;IACA,wBAAA;IACA,0BAAA;IACA,kBAAA;IACA,kBAAA;IACA,sBAAA;CACA;AAEA;IACA,sBAAA;CACA;AACA;IACA,WAAA;IACA,4BAAA;CACA","file":"homePage.vue","sourcesContent":["<template>\r\n    <div class=\"container\">\r\n        <div id=\"header-title\"  v-if=\"$route.path=='/'\">\r\n            <span class=\"area-title\" @click=\"$store.commit('toggleAreaSearch')\">厦门市湖里区禾山路</span>\r\n        </div>\r\n        <router-link to=\"search\" class=\"index-search-link\"   v-if=\"$route.path=='/'\">\r\n            <input type=\"text\" placeholder=\"搜索商家、商品\" aria-label=\"搜索商家、商品\" class=\"index-search\">\r\n        </router-link>\r\n\r\n        <!--食物功能列表-->\r\n        <section class=\"fooder\">\r\n            <fooder></fooder>\r\n        </section>\r\n\r\n        <h3 class=\"index-title\">推荐商家</h3>\r\n\r\n        <shop-list></shop-list>\r\n\r\n    </div>\r\n</template>\r\n<script>\r\n    import fooder from './fooder.vue'\r\n    import shopList from './shopList.vue'\r\n\r\n    export default{\r\n        name:'homePage',\r\n        components:{\r\n            fooder,shopList\r\n        }\r\n    }\r\n</script>\r\n<style>\r\n    .fooder{background-color:#fff;padding-bottom:0.2rem;}\r\n    .index-title {\r\n        margin-top: .266667rem;\r\n        line-height: .7rem;\r\n        font-weight: 600;\r\n        border-top: 1px solid #eee;\r\n        border-bottom: 1px solid #eee;\r\n        font-size: .3rem;\r\n        padding-left: .3rem;\r\n        background-color:#fff;\r\n    }\r\n\r\n    .index-search-link{\r\n        background:#0097ff;\r\n        display: block;\r\n        padding:0 .3rem .3rem .3rem;\r\n    }\r\n    .index-search-link:active{\r\n        background:#0097ff;\r\n    }\r\n    .index-search{\r\n        display: block;\r\n        width: 100%;\r\n        height: .7rem;\r\n        line-height: .7rem;\r\n        text-align: center;\r\n        border-radius: .7rem;\r\n        color: #333;\r\n        font-size: .28rem;\r\n        outline:none;\r\n        border: none;\r\n        box-shadow: 0 0.026667rem 0.066667rem 0 rgba(0,0,0,.2);\r\n    }\r\n    .area-title{\r\n        float:left;\r\n        text-align:left;\r\n        width:40%;\r\n        overflow:hidden;\r\n        white-space:nowrap;\r\n        -ms-text-overflow: ellipsis;\r\n        text-overflow: ellipsis;\r\n        padding-left:.3rem;\r\n        font-size:.32rem;\r\n    }\r\n\r\n    .searchArea{\r\n        position: fixed;\r\n        top:0;\r\n        bottom:0;\r\n        width:100%;\r\n        height:100%;\r\n        z-index:100;\r\n        background:#f4f4f4;\r\n    }\r\n    .searchArea .search-top{\r\n        background-color:rgb(0, 151, 255);\r\n        text-align: center;\r\n        padding-bottom: .2rem;\r\n    }\r\n    .searchArea .search-hearder{\r\n        height:0.8rem;\r\n        line-height:0.8rem;\r\n        color:#fff;\r\n    }\r\n    .searchArea .search-hearder .search-area-title{\r\n        font-size:0.36rem;\r\n    }\r\n    .searchArea .search-area-input{\r\n        margin-top: .133333rem;\r\n        width: 90%;\r\n        height: .533333rem;\r\n        line-height: .533333rem;\r\n        border-radius: .733333rem;\r\n        padding: 0 .32rem;\r\n        font-size: .28rem;\r\n        box-sizing:border-box;\r\n    }\r\n\r\n    .slide-enter-active, .slide-leave-active {\r\n        transition: all 300ms;\r\n    }\r\n    .slide-enter, .slide-leave-active {\r\n        opacity: 0;\r\n        transform: translateX(100%);\r\n    }\r\n</style>"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n.fooder-list{\n    display:-ms-flex;\n    display:-webkit-flex;\n    display:flex;\n    align-items:center;\n}\n.fooder-list .list-item{\n    -webkit-flex:1;\n    -webkit-box-flex:1;\n    -ms-flex:1;\n    flex:1;\n    display: block;\n    width:0;\n    text-align:center;\n}\n.fooder-list a{\n    outline:none;\n}\n.fooder-list .list-img{\n    width:1rem;\n    height:1rem;\n    display: inline-block;\n}\n.fooder-list img{width:100%;\n}\n.fooder-list .title{\n    display: block;\n    margin-top: .133333rem;\n    color: #666;\n    font-size: .26rem;\n}\n", "", {"version":3,"sources":["F:/Program/ele/src/components/home/fooder.vue?67df1884"],"names":[],"mappings":";AA0DA;IACA,iBAAA;IACA,qBAAA;IACA,aAAA;IACA,mBAAA;CACA;AACA;IACA,eAAA;IACA,mBAAA;IACA,WAAA;IACA,OAAA;IACA,eAAA;IACA,QAAA;IACA,kBAAA;CACA;AACA;IACA,aAAA;CACA;AACA;IACA,WAAA;IACA,YAAA;IACA,sBAAA;CACA;AACA,iBAAA,WAAA;CAAA;AAEA;IACA,eAAA;IACA,uBAAA;IACA,YAAA;IACA,kBAAA;CACA","file":"fooder.vue","sourcesContent":["<template>\r\n    <div class=\"fooder-list-wrap\">\r\n        <ul class=\"fooder-list\">\r\n            <li class=\"list-item\"><a href=\"javascript:;\">\r\n                <div class=\"list-img\">\r\n                    <img src=\"https://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/\" alt=\"\">\r\n                </div>\r\n                <span class=\"title\">美食</span>\r\n            </a></li>\r\n            <li class=\"list-item\"><a href=\"javascript:;\">\r\n                <div class=\"list-img\">\r\n                    <img src=\"https://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/\" alt=\"\">\r\n                </div>\r\n                <span class=\"title\">美食</span>\r\n            </a></li>\r\n            <li class=\"list-item\"><a href=\"javascript:;\">\r\n                <div class=\"list-img\">\r\n                    <img src=\"https://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/\" alt=\"\">\r\n                </div>\r\n                <span class=\"title\">美食</span>\r\n            </a></li>\r\n            <li class=\"list-item\"><a href=\"javascript:;\">\r\n                <div class=\"list-img\">\r\n                    <img src=\"https://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/\" alt=\"\">\r\n                </div>\r\n                <span class=\"title\">美食</span>\r\n            </a></li>\r\n        </ul>\r\n        <ul class=\"fooder-list\">\r\n            <li class=\"list-item\"><a href=\"javascript:;\">\r\n                <div class=\"list-img\">\r\n                    <img src=\"https://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/\" alt=\"\">\r\n                </div>\r\n                <span class=\"title\">美食</span>\r\n            </a></li>\r\n            <li class=\"list-item\"><a href=\"javascript:;\">\r\n                <div class=\"list-img\">\r\n                    <img src=\"https://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/\" alt=\"\">\r\n                </div>\r\n                <span class=\"title\">美食</span>\r\n            </a></li>\r\n            <li class=\"list-item\"><a href=\"javascript:;\">\r\n                <div class=\"list-img\">\r\n                    <img src=\"https://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/\" alt=\"\">\r\n                </div>\r\n                <span class=\"title\">美食</span>\r\n            </a></li>\r\n            <li class=\"list-item\"><a href=\"javascript:;\">\r\n                <div class=\"list-img\">\r\n                    <img src=\"https://fuss10.elemecdn.com/b/7e/d1890cf73ae6f2adb97caa39de7fcjpeg.jpeg?imageMogr/format/webp/thumbnail/!90x90r/gravity/Center/crop/90x90/\" alt=\"\">\r\n                </div>\r\n                <span class=\"title\">美食</span>\r\n            </a></li>\r\n        </ul>\r\n    </div>\r\n</template>\r\n\r\n<style>\r\n    .fooder-list{\r\n        display:-ms-flex;\r\n        display:-webkit-flex;\r\n        display:flex;\r\n        align-items:center;\r\n    }\r\n    .fooder-list .list-item{\r\n        -webkit-flex:1;\r\n        -webkit-box-flex:1;\r\n        -ms-flex:1;\r\n        flex:1;\r\n        display: block;\r\n        width:0;\r\n        text-align:center;\r\n    }\r\n    .fooder-list a{\r\n        outline:none;\r\n    }\r\n    .fooder-list .list-img{\r\n        width:1rem;\r\n        height:1rem;\r\n        display: inline-block;\r\n    }\r\n    .fooder-list img{width:100%;}\r\n\r\n    .fooder-list .title{\r\n        display: block;\r\n        margin-top: .133333rem;\r\n        color: #666;\r\n        font-size: .26rem;\r\n    }\r\n</style>"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports
exports.i(__webpack_require__(99), "");

// module
exports.push([module.i, "\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"shopList.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _fooder = __webpack_require__(102);

var _fooder2 = _interopRequireDefault(_fooder);

var _shopList = __webpack_require__(103);

var _shopList2 = _interopRequireDefault(_shopList);

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

exports.default = {
    name: 'homePage',
    components: {
        fooder: _fooder2.default, shopList: _shopList2.default
    }
};

/***/ }),

/***/ 86:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
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
//


/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, ".shoplist{\r\n    background-color:#fff;\r\n}\r\n.shop-list-item a{\r\n    display: -webkit-box;\r\n    display: -webkit-flex;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n    -webkit-justify-content: space-between;\r\n    -ms-flex-pack: justify;\r\n    justify-content: space-between;\r\n    border-bottom: 1px solid #eee;\r\n    background-color: #fff;\r\n    color: #666;\r\n    list-style: none;\r\n    font-size: .293333rem;\r\n    outline:none;\r\n}\r\n.shop-list-item .logo-container{\r\n    position: relative;\r\n    padding: .3rem .266667rem;\r\n    width: 1.2rem;\r\n    height: 1.2rem;\r\n}\r\n.shop-list-item .logo-container img {\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: .053333rem;\r\n}\r\n\r\n.index-main{\r\n    -webkit-box-flex: 1;\r\n    -webkit-flex-grow: 1;\r\n    -ms-flex-positive: 1;\r\n    flex-grow: 1;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n    -webkit-flex-direction: column;\r\n    -ms-flex-direction: column;\r\n    flex-direction: column;\r\n    padding: .3rem .266667rem .3rem 0;\r\n}\r\n.index-line{\r\n    display: -webkit-box;\r\n    display: -webkit-flex;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n    -webkit-align-items: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    -webkit-box-pack: justify;\r\n    -webkit-justify-content: space-between;\r\n    -ms-flex-pack: justify;\r\n    justify-content: space-between;\r\n    font-size: .24rem;\r\n}\r\n.index-line h3{\r\n    display: -webkit-box;\r\n    display: -webkit-flex;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n    -webkit-align-items: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    margin: 0;\r\n    padding: 0;\r\n    max-width: 5rem;\r\n    height: .426667rem;\r\n    color: #333;\r\n    font-weight: 700;\r\n    font-size: .3rem;\r\n}\r\n.index-line h3 span{\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    color: #333;\r\n}\r\n\r\n.index-rateWrap{\r\n    display: -webkit-box;\r\n    display: -webkit-flex;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n    -webkit-align-items: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n\r\n}\r\n.rating-max{\r\n    display: -webkit-box;\r\n    display: -webkit-flex;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n.rating-max .start{\r\n    font-style: normal;\r\n    color:#ffaa0c;\r\n}\r\n.index-rate {\r\n    margin: 0 .05rem;\r\n    color: #ff6000;\r\n}\r\n.index-iconDeliver{\r\n    padding: 0 .053333rem;\r\n    border: 1px solid #44a5ff;\r\n    border-radius: .053333rem;\r\n    background-color: #fff;\r\n    color: #2395ff;\r\n    font-size: .22rem;\r\n    line-height: .346667rem;\r\n}\r\n\r\n.activity-activityIcon{\r\n    font-style:normal;\r\n    font-size:.2rem;\r\n}", "", {"version":3,"sources":["F:/Program/ele/src/css/shopList.css"],"names":[],"mappings":"AAAA;IACI,sBAAsB;CACzB;AACD;IACI,qBAAqB;IACrB,sBAAsB;IACtB,qBAAqB;IACrB,cAAc;IACd,0BAA0B;IAC1B,uCAAuC;IACvC,uBAAuB;IACvB,+BAA+B;IAC/B,8BAA8B;IAC9B,uBAAuB;IACvB,YAAY;IACZ,iBAAiB;IACjB,sBAAsB;IACtB,aAAa;CAChB;AACD;IACI,mBAAmB;IACnB,0BAA0B;IAC1B,cAAc;IACd,eAAe;CAClB;AACD;IACI,eAAe;IACf,YAAY;IACZ,aAAa;IACb,0BAA0B;CAC7B;;AAED;IACI,oBAAoB;IACpB,qBAAqB;IACrB,qBAAqB;IACrB,aAAa;IACb,6BAA6B;IAC7B,8BAA8B;IAC9B,+BAA+B;IAC/B,2BAA2B;IAC3B,uBAAuB;IACvB,kCAAkC;CACrC;AACD;IACI,qBAAqB;IACrB,sBAAsB;IACtB,qBAAqB;IACrB,cAAc;IACd,0BAA0B;IAC1B,4BAA4B;IAC5B,uBAAuB;IACvB,oBAAoB;IACpB,0BAA0B;IAC1B,uCAAuC;IACvC,uBAAuB;IACvB,+BAA+B;IAC/B,kBAAkB;CACrB;AACD;IACI,qBAAqB;IACrB,sBAAsB;IACtB,qBAAqB;IACrB,cAAc;IACd,0BAA0B;IAC1B,4BAA4B;IAC5B,uBAAuB;IACvB,oBAAoB;IACpB,UAAU;IACV,WAAW;IACX,gBAAgB;IAChB,mBAAmB;IACnB,YAAY;IACZ,iBAAiB;IACjB,iBAAiB;CACpB;AACD;IACI,iBAAiB;IACjB,wBAAwB;IACxB,oBAAoB;IACpB,YAAY;CACf;;AAED;IACI,qBAAqB;IACrB,sBAAsB;IACtB,qBAAqB;IACrB,cAAc;IACd,0BAA0B;IAC1B,4BAA4B;IAC5B,uBAAuB;IACvB,oBAAoB;;CAEvB;AACD;IACI,qBAAqB;IACrB,sBAAsB;IACtB,qBAAqB;IACrB,cAAc;CACjB;AACD;IACI,mBAAmB;IACnB,cAAc;CACjB;AACD;IACI,iBAAiB;IACjB,eAAe;CAClB;AACD;IACI,sBAAsB;IACtB,0BAA0B;IAC1B,0BAA0B;IAC1B,uBAAuB;IACvB,eAAe;IACf,kBAAkB;IAClB,wBAAwB;CAC3B;;AAED;IACI,kBAAkB;IAClB,gBAAgB;CACnB","file":"shopList.css","sourcesContent":[".shoplist{\r\n    background-color:#fff;\r\n}\r\n.shop-list-item a{\r\n    display: -webkit-box;\r\n    display: -webkit-flex;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n    -webkit-justify-content: space-between;\r\n    -ms-flex-pack: justify;\r\n    justify-content: space-between;\r\n    border-bottom: 1px solid #eee;\r\n    background-color: #fff;\r\n    color: #666;\r\n    list-style: none;\r\n    font-size: .293333rem;\r\n    outline:none;\r\n}\r\n.shop-list-item .logo-container{\r\n    position: relative;\r\n    padding: .3rem .266667rem;\r\n    width: 1.2rem;\r\n    height: 1.2rem;\r\n}\r\n.shop-list-item .logo-container img {\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    border-radius: .053333rem;\r\n}\r\n\r\n.index-main{\r\n    -webkit-box-flex: 1;\r\n    -webkit-flex-grow: 1;\r\n    -ms-flex-positive: 1;\r\n    flex-grow: 1;\r\n    -webkit-box-orient: vertical;\r\n    -webkit-box-direction: normal;\r\n    -webkit-flex-direction: column;\r\n    -ms-flex-direction: column;\r\n    flex-direction: column;\r\n    padding: .3rem .266667rem .3rem 0;\r\n}\r\n.index-line{\r\n    display: -webkit-box;\r\n    display: -webkit-flex;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n    -webkit-align-items: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    -webkit-box-pack: justify;\r\n    -webkit-justify-content: space-between;\r\n    -ms-flex-pack: justify;\r\n    justify-content: space-between;\r\n    font-size: .24rem;\r\n}\r\n.index-line h3{\r\n    display: -webkit-box;\r\n    display: -webkit-flex;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n    -webkit-align-items: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    margin: 0;\r\n    padding: 0;\r\n    max-width: 5rem;\r\n    height: .426667rem;\r\n    color: #333;\r\n    font-weight: 700;\r\n    font-size: .3rem;\r\n}\r\n.index-line h3 span{\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    color: #333;\r\n}\r\n\r\n.index-rateWrap{\r\n    display: -webkit-box;\r\n    display: -webkit-flex;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n    -webkit-align-items: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n\r\n}\r\n.rating-max{\r\n    display: -webkit-box;\r\n    display: -webkit-flex;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n}\r\n.rating-max .start{\r\n    font-style: normal;\r\n    color:#ffaa0c;\r\n}\r\n.index-rate {\r\n    margin: 0 .05rem;\r\n    color: #ff6000;\r\n}\r\n.index-iconDeliver{\r\n    padding: 0 .053333rem;\r\n    border: 1px solid #44a5ff;\r\n    border-radius: .053333rem;\r\n    background-color: #fff;\r\n    color: #2395ff;\r\n    font-size: .22rem;\r\n    line-height: .346667rem;\r\n}\r\n\r\n.activity-activityIcon{\r\n    font-style:normal;\r\n    font-size:.2rem;\r\n}"],"sourceRoot":""}]);

// exports


/***/ })

});
//# sourceMappingURL=1.js.map