webpackJsonp([4],{

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "login"
  }, [_c('form', {
    attrs: {
      "action": "#"
    }
  }, [_c('div', {
    staticClass: "MessageLogin"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model.trim",
      value: (_vm.phone),
      expression: "phone",
      modifiers: {
        "trim": true
      }
    }],
    attrs: {
      "type": "tel",
      "maxlength": "11",
      "placeholder": "手机号"
    },
    domProps: {
      "value": (_vm.phone)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.phone = $event.target.value.trim()
      },
      "blur": function($event) {
        _vm.$forceUpdate()
      }
    }
  }), _vm._v(" "), _c('button', _vm._b({
    staticClass: "CountButton"
  }, 'button', {
    'disabled': _vm.phone.length != 11
  }, false), [_vm._v("获取验证码")])]), _vm._v(" "), _vm._m(0)]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c('button', {
    staticClass: "SubmitButton"
  }, [_vm._v("\n        登录\n    ")]), _vm._v(" "), _vm._m(2)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "MessageLogin"
  }, [_c('input', {
    attrs: {
      "type": "tel",
      "maxlength": "11",
      "placeholder": "验证码"
    }
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "login-panel"
  }, [_c('p', [_vm._v("温馨提示：未注册饿了么帐号的手机号，登录时将自动注册，且代表您已同意"), _c('a', {
    attrs: {
      "href": "//h5.ele.me/service/agreement/",
      "target": "_blank"
    }
  }, [_vm._v("《用户服务协议》")])])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "about-us"
  }, [_c('span', [_vm._v("关于我们")])])
}]}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(2).rerender("data-v-590ffb18", module.exports)
  }
}

/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(81);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("7d601abe", content, false, {});
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

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(132)
}
var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(91),
  /* template */
  __webpack_require__(119),
  /* styles */
  injectStyle,
  /* scopeId */
  null,
  /* moduleIdentifier (server only) */
  null
)
Component.options.__file = "D:\\Program\\ele\\src\\components\\profile\\login.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] login.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (true) {(function () {
  var hotAPI = __webpack_require__(2)
  hotAPI.install(__webpack_require__(1), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-590ffb18", Component.options)
  } else {
    hotAPI.reload("data-v-590ffb18", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 81:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, "\n.login{\n    margin-top: .4rem;\n}\n.login form{background:#fff;\n}\n.MessageLogin{\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-align: center;\n    -webkit-align-items: center;\n    -ms-flex-align: center;\n    align-items: center;\n    -webkit-box-pack: justify;\n    -webkit-justify-content: space-between;\n    -ms-flex-pack: justify;\n    justify-content: space-between;\n    padding: 0 .426667rem;\n    height: .9rem;\n    border-bottom: 1px solid #ddd;\n    background: #fff;\n    font-size: .3rem;\n}\n.MessageLogin input {\n    -webkit-box-flex: 1;\n    -webkit-flex-grow: 1;\n    -ms-flex-positive: 1;\n    flex-grow: 1;\n    padding: .133333rem 0;\n    height: .6rem;\n    color: #333;\n    line-height: .533333rem;\n}\n.CountButton{\n    padding: 0;\n    width: 2rem;\n    height: .7rem;\n    border-radius: .08rem;\n    background: #0097ff;\n    color: #fff;\n    text-align: center;\n    font-size: .3rem;\n    line-height: .7rem;\n    border:none;\n}\n.CountButton[disabled] {\n    background: #ccc;\n}\n.login-panel{\n    margin: .24rem auto -.266667rem;\n    width: 6.9rem;\n    color: #999;\n    font-size: .28rem;\n    line-height: .426667rem;\n}\n.SubmitButton{\n    display: block;\n    margin: .533333rem auto 0;\n    padding: 0;\n    width: 6.9rem;\n    height: .8rem;\n    border-radius: .053333rem;\n    background: #4cd964;\n    color: #fff;\n    text-align: center;\n    font-size: .36rem;\n    line-height: .8rem;\n    outline:none;\n    border:none;\n}\n.about-us{\n    display: -webkit-box;\n    display: -webkit-flex;\n    display: -ms-flexbox;\n    display: flex;\n    -webkit-box-pack: center;\n    -webkit-justify-content: center;\n    -ms-flex-pack: center;\n    justify-content: center;\n    margin: .533333rem auto;\n    color: #999;\n    font-size: .28rem;\n}\n", "", {"version":3,"sources":["D:/Program/ele/src/components/profile/login.vue?ccd6cee4"],"names":[],"mappings":";AA+BA;IACA,kBAAA;CACA;AACA,YAAA,gBAAA;CAAA;AACA;IACA,qBAAA;IACA,sBAAA;IACA,qBAAA;IACA,cAAA;IACA,0BAAA;IACA,4BAAA;IACA,uBAAA;IACA,oBAAA;IACA,0BAAA;IACA,uCAAA;IACA,uBAAA;IACA,+BAAA;IACA,sBAAA;IACA,cAAA;IACA,8BAAA;IACA,iBAAA;IACA,iBAAA;CACA;AACA;IACA,oBAAA;IACA,qBAAA;IACA,qBAAA;IACA,aAAA;IACA,sBAAA;IACA,cAAA;IACA,YAAA;IACA,wBAAA;CACA;AACA;IACA,WAAA;IACA,YAAA;IACA,cAAA;IACA,sBAAA;IACA,oBAAA;IACA,YAAA;IACA,mBAAA;IACA,iBAAA;IACA,mBAAA;IACA,YAAA;CACA;AACA;IACA,iBAAA;CACA;AACA;IACA,gCAAA;IACA,cAAA;IACA,YAAA;IACA,kBAAA;IACA,wBAAA;CACA;AACA;IACA,eAAA;IACA,0BAAA;IACA,WAAA;IACA,cAAA;IACA,cAAA;IACA,0BAAA;IACA,oBAAA;IACA,YAAA;IACA,mBAAA;IACA,kBAAA;IACA,mBAAA;IACA,aAAA;IACA,YAAA;CACA;AACA;IACA,qBAAA;IACA,sBAAA;IACA,qBAAA;IACA,cAAA;IACA,yBAAA;IACA,gCAAA;IACA,sBAAA;IACA,wBAAA;IACA,wBAAA;IACA,YAAA;IACA,kBAAA;CACA","file":"login.vue","sourcesContent":["<template>\r\n    <section class=\"login\">\r\n        <form action=\"#\">\r\n            <div class=\"MessageLogin\">\r\n                <input type=\"tel\" maxlength=\"11\" placeholder=\"手机号\" v-model.trim=\"phone\">\r\n                <button class=\"CountButton\" v-bind=\"{'disabled':phone.length!=11}\">获取验证码</button>\r\n            </div>\r\n            <div class=\"MessageLogin\">\r\n                <input type=\"tel\" maxlength=\"11\" placeholder=\"验证码\">\r\n            </div>\r\n        </form>\r\n\r\n        <div class=\"login-panel\">\r\n            <p>温馨提示：未注册饿了么帐号的手机号，登录时将自动注册，且代表您已同意<a href=\"//h5.ele.me/service/agreement/\" target=\"_blank\">《用户服务协议》</a></p>\r\n        </div>\r\n        <button class=\"SubmitButton\">\r\n            登录\r\n        </button>\r\n        <div class=\"about-us\"><span>关于我们</span></div>\r\n    </section>\r\n</template>\r\n<script>\r\n    export default{\r\n        data(){\r\n            return{\r\n                phone:''\r\n            }\r\n        }\r\n    }\r\n</script>\r\n<style>\r\n    .login{\r\n        margin-top: .4rem;\r\n    }\r\n    .login form{background:#fff;}\r\n    .MessageLogin{\r\n        display: -webkit-box;\r\n        display: -webkit-flex;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -webkit-box-align: center;\r\n        -webkit-align-items: center;\r\n        -ms-flex-align: center;\r\n        align-items: center;\r\n        -webkit-box-pack: justify;\r\n        -webkit-justify-content: space-between;\r\n        -ms-flex-pack: justify;\r\n        justify-content: space-between;\r\n        padding: 0 .426667rem;\r\n        height: .9rem;\r\n        border-bottom: 1px solid #ddd;\r\n        background: #fff;\r\n        font-size: .3rem;\r\n    }\r\n    .MessageLogin input {\r\n        -webkit-box-flex: 1;\r\n        -webkit-flex-grow: 1;\r\n        -ms-flex-positive: 1;\r\n        flex-grow: 1;\r\n        padding: .133333rem 0;\r\n        height: .6rem;\r\n        color: #333;\r\n        line-height: .533333rem;\r\n    }\r\n    .CountButton{\r\n        padding: 0;\r\n        width: 2rem;\r\n        height: .7rem;\r\n        border-radius: .08rem;\r\n        background: #0097ff;\r\n        color: #fff;\r\n        text-align: center;\r\n        font-size: .3rem;\r\n        line-height: .7rem;\r\n        border:none;\r\n    }\r\n    .CountButton[disabled] {\r\n        background: #ccc;\r\n    }\r\n    .login-panel{\r\n        margin: .24rem auto -.266667rem;\r\n        width: 6.9rem;\r\n        color: #999;\r\n        font-size: .28rem;\r\n        line-height: .426667rem;\r\n    }\r\n    .SubmitButton{\r\n        display: block;\r\n        margin: .533333rem auto 0;\r\n        padding: 0;\r\n        width: 6.9rem;\r\n        height: .8rem;\r\n        border-radius: .053333rem;\r\n        background: #4cd964;\r\n        color: #fff;\r\n        text-align: center;\r\n        font-size: .36rem;\r\n        line-height: .8rem;\r\n        outline:none;\r\n        border:none;\r\n    }\r\n    .about-us{\r\n        display: -webkit-box;\r\n        display: -webkit-flex;\r\n        display: -ms-flexbox;\r\n        display: flex;\r\n        -webkit-box-pack: center;\r\n        -webkit-justify-content: center;\r\n        -ms-flex-pack: center;\r\n        justify-content: center;\r\n        margin: .533333rem auto;\r\n        color: #999;\r\n        font-size: .28rem;\r\n    }\r\n</style>"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 91:
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

exports.default = {
    data: function data() {
        return {
            phone: ''
        };
    }
};

/***/ })

});
//# sourceMappingURL=4.js.map