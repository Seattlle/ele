webpackJsonp([1],{

/***/ 105:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(68);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("32ee6ebb", content, false);
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(68, function() {
     var newContent = __webpack_require__(68);
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(71);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(6)("225530d3", content, false);
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

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(105)
}
var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(83),
  /* template */
  __webpack_require__(96),
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

/***/ 68:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports
exports.i(__webpack_require__(89), "");

// module
exports.push([module.i, "\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"shopOrder.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports
exports.i(__webpack_require__(84), "");

// module
exports.push([module.i, "\n", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"cart.vue","sourceRoot":""}]);

// exports


/***/ }),

/***/ 79:
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


/***/ }),

/***/ 83:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _vue = __webpack_require__(1);

var _vue2 = _interopRequireDefault(_vue);

var _cart = __webpack_require__(93);

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
//

var ifOnScroll = false;
exports.default = {
    data: function data() {
        return {
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
            this.choseMenu = thisItem;
            this.$store.commit('choseMenu', thisItem);
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
                        _this.$store.commit('scrollMenu', menuId);
                        _this.choseMenu = menuId;
                    }
                });
            }
        },
        method: function method(list, i) {
            this.$store.commit('addOrder', {
                'list': list,
                'num': i
            });
            if (i > 0) {
                this.flyball(event.clientX - event.target.clientWidth, event.clientY - event.target.clientHeight);
            }
            this.$store.commit('calculateMoney');
        },
        flyball: function flyball(startX, startY) {
            var flyball = document.createElement('div');
            flyball.className = 'flyball';
            flyball.style.top = startY + 'px';
            flyball.style.left = startX + 'px';

            document.getElementById('app').appendChild(flyball);

            var target = document.querySelector('.bottomNav-18KRG_0');
            var targetX = target.clientLeft + 15;
            var targetY = screen.height - target.clientTop - 40;

            var stepsX = (startX - targetX) / 50;
            var stepsY = (targetY - startY) / 50;

            moveBall();

            function moveBall() {
                if (startX > targetX) {
                    startX -= stepsX;
                    flyball.style.left = startX + 'px';
                    if (startY < targetY) {
                        startY += stepsY;
                        flyball.style.top = startY + 'px';
                    }
                    setTimeout(moveBall, 10);
                } else {
                    document.getElementById('app').removeChild(flyball);
                }
            }
        }
    }
};

/***/ }),

/***/ 84:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, ".cartview{\r\n    font-size: .3rem;\r\n}\r\n.bottomNav-3XM6c_0 {\r\n    position: fixed;\r\n    right: 0;\r\n    bottom: 0;\r\n    width:100%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    padding-left: 1.35rem;\r\n    background-color: #3d3d3f;\r\n    height: .9rem;\r\n    opacity: .95;\r\n    max-width: 768px;\r\n    margin: 0 auto;\r\n    left: 0;\r\n    box-sizing:border-box;\r\n}\r\n.bottomNav-18KRG_0 {\r\n    position: absolute;\r\n    left: .15rem;\r\n    bottom: .25rem;\r\n    width: 1rem;\r\n    height: 1rem;\r\n    box-sizing: border-box;\r\n    border-radius: 100%;\r\n    background-color: #3190e8;\r\n    border: .133333rem solid #444;\r\n    box-shadow: 0 -0.08rem 0.053333rem 0 rgba(0,0,0,.1);\r\n    will-change: transform;\r\n}\r\n.bottomNav-18KRG_0.bottomNav-6KjUI_0 {\r\n    background-image: -webkit-radial-gradient(circle,#363636 .626667rem,#444 0);\r\n    background-image: radial-gradient(circle,#363636 .626667rem,#444 0);\r\n}\r\n.bottomNav-18KRG_0:before {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    background-size: .6rem;\r\n    content: \"\";\r\n}\r\n.bottomNav-wzCAW_0 {\r\n    -webkit-box-flex: 1;\r\n    -ms-flex: 1;\r\n    flex: 1;\r\n    display: block;\r\n    width: 0;\r\n}\r\n.bottomNav-3Ak_E_0 {\r\n    font-size: .32rem;\r\n    line-height: normal;\r\n    color: #fff;\r\n}\r\n.bottomNav-3zqFz_0 {\r\n    color: #f5f5f5;\r\n    font-size: .2rem;\r\n}\r\n.bottomNav-1urxC_0 {\r\n    height: 100%;\r\n    width: 2.5rem;\r\n    background-color: #4cd964;\r\n    color: #fff;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    font-size: .36rem;\r\n    font-weight: 700;\r\n    line-height: .9rem;\r\n    outline:none;\r\n}\r\n.bottomNav-1urxC_0.bottomNav-9FCIh_0 {\r\n    background-color: #535356;\r\n}\r\n.bottomNav-18KRG_0:after {\r\n    position: absolute;\r\n    right: -.12rem;\r\n    top: -.133333rem;\r\n    background-color: #ff461d;\r\n    color: #fff;\r\n    border-radius: .2rem;\r\n    font-size: .2rem;\r\n    font-weight: 700;\r\n    text-align: center;\r\n    min-width: .25rem;\r\n    padding: .03rem .05rem;\r\n    line-height: .25rem;\r\n    content: attr(attr-quantity);\r\n}", "", {"version":3,"sources":["F:/Program/ele/public/css/cart.css"],"names":[],"mappings":"AAAA;IACI,iBAAiB;CACpB;AACD;IACI,gBAAgB;IAChB,SAAS;IACT,UAAU;IACV,WAAW;IACX,qBAAqB;IACrB,qBAAqB;IACrB,cAAc;IACd,0BAA0B;IAC1B,uBAAuB;IACvB,oBAAoB;IACpB,sBAAsB;IACtB,0BAA0B;IAC1B,cAAc;IACd,aAAa;IACb,iBAAiB;IACjB,eAAe;IACf,QAAQ;IACR,sBAAsB;CACzB;AACD;IACI,mBAAmB;IACnB,aAAa;IACb,eAAe;IACf,YAAY;IACZ,aAAa;IACb,uBAAuB;IACvB,oBAAoB;IACpB,0BAA0B;IAC1B,8BAA8B;IAC9B,oDAAoD;IACpD,uBAAuB;CAC1B;AACD;IACI,4EAA4E;IAC5E,oEAAoE;CACvE;AACD;IACI,mBAAmB;IACnB,OAAO;IACP,SAAS;IACT,UAAU;IACV,QAAQ;IACR,uBAAuB;IACvB,YAAY;CACf;AACD;IACI,oBAAoB;IACpB,YAAY;IACZ,QAAQ;IACR,eAAe;IACf,SAAS;CACZ;AACD;IACI,kBAAkB;IAClB,oBAAoB;IACpB,YAAY;CACf;AACD;IACI,eAAe;IACf,iBAAiB;CACpB;AACD;IACI,aAAa;IACb,cAAc;IACd,0BAA0B;IAC1B,YAAY;IACZ,mBAAmB;IACnB,sBAAsB;IACtB,kBAAkB;IAClB,iBAAiB;IACjB,mBAAmB;IACnB,aAAa;CAChB;AACD;IACI,0BAA0B;CAC7B;AACD;IACI,mBAAmB;IACnB,eAAe;IACf,iBAAiB;IACjB,0BAA0B;IAC1B,YAAY;IACZ,qBAAqB;IACrB,iBAAiB;IACjB,iBAAiB;IACjB,mBAAmB;IACnB,kBAAkB;IAClB,uBAAuB;IACvB,oBAAoB;IACpB,6BAA6B;CAChC","file":"cart.css","sourcesContent":[".cartview{\r\n    font-size: .3rem;\r\n}\r\n.bottomNav-3XM6c_0 {\r\n    position: fixed;\r\n    right: 0;\r\n    bottom: 0;\r\n    width:100%;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: center;\r\n    -ms-flex-align: center;\r\n    align-items: center;\r\n    padding-left: 1.35rem;\r\n    background-color: #3d3d3f;\r\n    height: .9rem;\r\n    opacity: .95;\r\n    max-width: 768px;\r\n    margin: 0 auto;\r\n    left: 0;\r\n    box-sizing:border-box;\r\n}\r\n.bottomNav-18KRG_0 {\r\n    position: absolute;\r\n    left: .15rem;\r\n    bottom: .25rem;\r\n    width: 1rem;\r\n    height: 1rem;\r\n    box-sizing: border-box;\r\n    border-radius: 100%;\r\n    background-color: #3190e8;\r\n    border: .133333rem solid #444;\r\n    box-shadow: 0 -0.08rem 0.053333rem 0 rgba(0,0,0,.1);\r\n    will-change: transform;\r\n}\r\n.bottomNav-18KRG_0.bottomNav-6KjUI_0 {\r\n    background-image: -webkit-radial-gradient(circle,#363636 .626667rem,#444 0);\r\n    background-image: radial-gradient(circle,#363636 .626667rem,#444 0);\r\n}\r\n.bottomNav-18KRG_0:before {\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    background-size: .6rem;\r\n    content: \"\";\r\n}\r\n.bottomNav-wzCAW_0 {\r\n    -webkit-box-flex: 1;\r\n    -ms-flex: 1;\r\n    flex: 1;\r\n    display: block;\r\n    width: 0;\r\n}\r\n.bottomNav-3Ak_E_0 {\r\n    font-size: .32rem;\r\n    line-height: normal;\r\n    color: #fff;\r\n}\r\n.bottomNav-3zqFz_0 {\r\n    color: #f5f5f5;\r\n    font-size: .2rem;\r\n}\r\n.bottomNav-1urxC_0 {\r\n    height: 100%;\r\n    width: 2.5rem;\r\n    background-color: #4cd964;\r\n    color: #fff;\r\n    text-align: center;\r\n    text-decoration: none;\r\n    font-size: .36rem;\r\n    font-weight: 700;\r\n    line-height: .9rem;\r\n    outline:none;\r\n}\r\n.bottomNav-1urxC_0.bottomNav-9FCIh_0 {\r\n    background-color: #535356;\r\n}\r\n.bottomNav-18KRG_0:after {\r\n    position: absolute;\r\n    right: -.12rem;\r\n    top: -.133333rem;\r\n    background-color: #ff461d;\r\n    color: #fff;\r\n    border-radius: .2rem;\r\n    font-size: .2rem;\r\n    font-weight: 700;\r\n    text-align: center;\r\n    min-width: .25rem;\r\n    padding: .03rem .05rem;\r\n    line-height: .25rem;\r\n    content: attr(attr-quantity);\r\n}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 89:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(3)(true);
// imports


// module
exports.push([module.i, ".shop-main{\r\n    height:100%;\r\n    overflow: hidden;\r\n    background:#fff;\r\n}\r\n.menuview{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    height: 100%;\r\n    padding-bottom:1rem;\r\n    box-sizing:border-box;\r\n}\r\n.menucategory{\r\n    overflow-y: auto;\r\n    height: 100%;\r\n    background-color: #f8f8f8;\r\n    -webkit-overflow-scrolling: touch;\r\n}\r\n.menucategory-item{\r\n    position: relative;\r\n    padding:.2rem  .25rem ;\r\n    border-bottom: 1px solid #ededed;\r\n    font-size: .26rem;\r\n    line-height: .3rem;\r\n    color: #666;\r\n    width:0.8rem;\r\n}\r\n.menucategory-item.active{\r\n    background:#fff;\r\n    border-left:3px solid #3190e8;\r\n    font-weight:bold;\r\n}\r\n.container-menuview{\r\n    -webkit-box-flex: 1;\r\n    -ms-flex: 1;\r\n    flex: 1;\r\n    display: block;\r\n    width: 0;\r\n    height: 100%;\r\n    overflow-y:auto;\r\n}\r\n.category-title{\r\n    position: relative;\r\n    padding: .16rem .18rem;\r\n    background-color: #f1f1f1;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: end;\r\n    -ms-flex-align: end;\r\n    align-items: flex-end;\r\n    overflow: hidden;\r\n}\r\n.category-name{\r\n    margin-right: .133333rem;\r\n    font-weight: 700;\r\n    font-size: .3rem;\r\n    color: #666;\r\n    -webkit-box-flex: 0;\r\n    -ms-flex: none;\r\n    flex: none;\r\n}\r\n.category-description{\r\n    -webkit-box-flex: 1;\r\n    -ms-flex: 1;\r\n    flex: 1;\r\n    display: block;\r\n    width: 0;\r\n    color: #999;\r\n    font-size: .2rem;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n}\r\n\r\n.category-item{\r\n    position: relative;\r\n    background-color: #fff;\r\n    margin: 0;\r\n    padding: .3rem .2rem;\r\n    margin-bottom: 1px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    min-height: 2.5rem;\r\n    box-shadow: 0.4rem 0.013333rem 0 0 #ddd;\r\n}\r\n.foodimg{\r\n    margin-right: .1rem;\r\n    -webkit-box-flex: 2;\r\n    -ms-flex: 2;\r\n    flex: 2;\r\n    display: block;\r\n    width: 0;\r\n    vertical-align: top;\r\n}\r\n.foodimg img{\r\n    width: 100%;\r\n    border-radius: .053333rem;\r\n}\r\n.foodinfo{\r\n    position: relative;\r\n    -webkit-box-flex: 8;\r\n    -ms-flex: 8;\r\n    flex: 8;\r\n    display: block;\r\n    width: 0;\r\n    padding-bottom: .5rem;\r\n}\r\n.foodtitle{\r\n    font-size: .3rem;\r\n    font-weight: 700;\r\n    line-height: 1.1;\r\n    overflow: hidden;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n    -ms-flex-pack: justify;\r\n    justify-content: space-between;\r\n}\r\n.fooddescription{\r\n    margin: .1rem 0;\r\n    font-size: .2rem;\r\n    color: #999;\r\n    line-height:.4rem;\r\n}\r\n.foodsales{\r\n    color: #666;\r\n    font-size: .2rem;\r\n    line-height: 1;\r\n}\r\n.foodsales span{\r\n    vertical-align: middle;\r\n}\r\n.foodactivity{\r\n    font-size: .22rem;\r\n    -webkit-transform: scale(.8);\r\n    transform: scale(.8);\r\n    -webkit-transform-origin: left;\r\n    transform-origin: left;\r\n    color: #f07373;\r\n    white-space: nowrap;\r\n}\r\n.foodactivity span:first-child {\r\n    border: 1px solid currentColor;\r\n    padding: 0 .066667rem;\r\n}\r\n.foodprice{\r\n    position: absolute;\r\n    left: 0;\r\n    bottom: 0;\r\n    font-weight: 700;\r\n    font-size: .4rem;\r\n    line-height: .4rem;\r\n    color: #f60;\r\n}\r\n.foodprice:before {\r\n    font-weight: 400;\r\n    content: \"\\A5\";\r\n    font-size: .293333rem;\r\n    display: inline-block;\r\n}\r\n.cartbutton {\r\n    position: absolute;\r\n    right: 0;\r\n    bottom: -.066667rem;\r\n}\r\n.cartbutton-2tycR {\r\n    display: inline-block;\r\n    font-size: .346667rem;\r\n    white-space: nowrap;\r\n}\r\n.cartbutton-2tycR a ,.flyball{\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    text-decoration: none;\r\n    outline:none;\r\n    -webkit-border-radius:50%;\r\n    -moz-border-radius:50%;\r\n    border-radius:50%;\r\n    border:1px solid #3190e8;\r\n    line-height:.4rem;\r\n    height:.4rem;\r\n    width:.4rem;\r\n    text-align:center;\r\n    font-size:.4rem;\r\n}\r\n.cartbutton-2tycR a.cut{\r\n    color:#3190e8;\r\n}\r\n.cartbutton-2tycR a.add,.flyball{\r\n    background:#3190e8;\r\n    color:#fff;\r\n}\r\n.cartbutton-2OSi7{\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    text-align: center;\r\n    color: #666;\r\n    font-size: .33rem;\r\n    min-width: .4rem;\r\n    max-width: 2em;\r\n    overflow: hidden;\r\n    line-height:.4rem;\r\n    height:.4rem;\r\n}\r\n\r\n.flyball{\r\n    position: absolute;\r\n    top:0;\r\n    left:0;\r\n    z-index:100;\r\n}\r\n\r\n.menucategory-28BIn{\r\n    position: absolute;\r\n    right: .05rem;\r\n    top: .05rem;\r\n    color: #fff;\r\n    background-color: #ff461d;\r\n    border-radius: .2rem;\r\n    font-size: .2rem;\r\n    font-weight: 700;\r\n    text-align: center;\r\n    min-width: .25rem;\r\n    padding: .03rem .05rem;\r\n    line-height: .25rem;\r\n}", "", {"version":3,"sources":["F:/Program/ele/public/css/shopOrder.css"],"names":[],"mappings":"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","file":"shopOrder.css","sourcesContent":[".shop-main{\r\n    height:100%;\r\n    overflow: hidden;\r\n    background:#fff;\r\n}\r\n.menuview{\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    height: 100%;\r\n    padding-bottom:1rem;\r\n    box-sizing:border-box;\r\n}\r\n.menucategory{\r\n    overflow-y: auto;\r\n    height: 100%;\r\n    background-color: #f8f8f8;\r\n    -webkit-overflow-scrolling: touch;\r\n}\r\n.menucategory-item{\r\n    position: relative;\r\n    padding:.2rem  .25rem ;\r\n    border-bottom: 1px solid #ededed;\r\n    font-size: .26rem;\r\n    line-height: .3rem;\r\n    color: #666;\r\n    width:0.8rem;\r\n}\r\n.menucategory-item.active{\r\n    background:#fff;\r\n    border-left:3px solid #3190e8;\r\n    font-weight:bold;\r\n}\r\n.container-menuview{\r\n    -webkit-box-flex: 1;\r\n    -ms-flex: 1;\r\n    flex: 1;\r\n    display: block;\r\n    width: 0;\r\n    height: 100%;\r\n    overflow-y:auto;\r\n}\r\n.category-title{\r\n    position: relative;\r\n    padding: .16rem .18rem;\r\n    background-color: #f1f1f1;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-align: end;\r\n    -ms-flex-align: end;\r\n    align-items: flex-end;\r\n    overflow: hidden;\r\n}\r\n.category-name{\r\n    margin-right: .133333rem;\r\n    font-weight: 700;\r\n    font-size: .3rem;\r\n    color: #666;\r\n    -webkit-box-flex: 0;\r\n    -ms-flex: none;\r\n    flex: none;\r\n}\r\n.category-description{\r\n    -webkit-box-flex: 1;\r\n    -ms-flex: 1;\r\n    flex: 1;\r\n    display: block;\r\n    width: 0;\r\n    color: #999;\r\n    font-size: .2rem;\r\n    white-space: nowrap;\r\n    overflow: hidden;\r\n}\r\n\r\n.category-item{\r\n    position: relative;\r\n    background-color: #fff;\r\n    margin: 0;\r\n    padding: .3rem .2rem;\r\n    margin-bottom: 1px;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    min-height: 2.5rem;\r\n    box-shadow: 0.4rem 0.013333rem 0 0 #ddd;\r\n}\r\n.foodimg{\r\n    margin-right: .1rem;\r\n    -webkit-box-flex: 2;\r\n    -ms-flex: 2;\r\n    flex: 2;\r\n    display: block;\r\n    width: 0;\r\n    vertical-align: top;\r\n}\r\n.foodimg img{\r\n    width: 100%;\r\n    border-radius: .053333rem;\r\n}\r\n.foodinfo{\r\n    position: relative;\r\n    -webkit-box-flex: 8;\r\n    -ms-flex: 8;\r\n    flex: 8;\r\n    display: block;\r\n    width: 0;\r\n    padding-bottom: .5rem;\r\n}\r\n.foodtitle{\r\n    font-size: .3rem;\r\n    font-weight: 700;\r\n    line-height: 1.1;\r\n    overflow: hidden;\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-pack: justify;\r\n    -ms-flex-pack: justify;\r\n    justify-content: space-between;\r\n}\r\n.fooddescription{\r\n    margin: .1rem 0;\r\n    font-size: .2rem;\r\n    color: #999;\r\n    line-height:.4rem;\r\n}\r\n.foodsales{\r\n    color: #666;\r\n    font-size: .2rem;\r\n    line-height: 1;\r\n}\r\n.foodsales span{\r\n    vertical-align: middle;\r\n}\r\n.foodactivity{\r\n    font-size: .22rem;\r\n    -webkit-transform: scale(.8);\r\n    transform: scale(.8);\r\n    -webkit-transform-origin: left;\r\n    transform-origin: left;\r\n    color: #f07373;\r\n    white-space: nowrap;\r\n}\r\n.foodactivity span:first-child {\r\n    border: 1px solid currentColor;\r\n    padding: 0 .066667rem;\r\n}\r\n.foodprice{\r\n    position: absolute;\r\n    left: 0;\r\n    bottom: 0;\r\n    font-weight: 700;\r\n    font-size: .4rem;\r\n    line-height: .4rem;\r\n    color: #f60;\r\n}\r\n.foodprice:before {\r\n    font-weight: 400;\r\n    content: \"\\A5\";\r\n    font-size: .293333rem;\r\n    display: inline-block;\r\n}\r\n.cartbutton {\r\n    position: absolute;\r\n    right: 0;\r\n    bottom: -.066667rem;\r\n}\r\n.cartbutton-2tycR {\r\n    display: inline-block;\r\n    font-size: .346667rem;\r\n    white-space: nowrap;\r\n}\r\n.cartbutton-2tycR a ,.flyball{\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    text-decoration: none;\r\n    outline:none;\r\n    -webkit-border-radius:50%;\r\n    -moz-border-radius:50%;\r\n    border-radius:50%;\r\n    border:1px solid #3190e8;\r\n    line-height:.4rem;\r\n    height:.4rem;\r\n    width:.4rem;\r\n    text-align:center;\r\n    font-size:.4rem;\r\n}\r\n.cartbutton-2tycR a.cut{\r\n    color:#3190e8;\r\n}\r\n.cartbutton-2tycR a.add,.flyball{\r\n    background:#3190e8;\r\n    color:#fff;\r\n}\r\n.cartbutton-2OSi7{\r\n    display: inline-block;\r\n    vertical-align: middle;\r\n    text-align: center;\r\n    color: #666;\r\n    font-size: .33rem;\r\n    min-width: .4rem;\r\n    max-width: 2em;\r\n    overflow: hidden;\r\n    line-height:.4rem;\r\n    height:.4rem;\r\n}\r\n\r\n.flyball{\r\n    position: absolute;\r\n    top:0;\r\n    left:0;\r\n    z-index:100;\r\n}\r\n\r\n.menucategory-28BIn{\r\n    position: absolute;\r\n    right: .05rem;\r\n    top: .05rem;\r\n    color: #fff;\r\n    background-color: #ff461d;\r\n    border-radius: .2rem;\r\n    font-size: .2rem;\r\n    font-weight: 700;\r\n    text-align: center;\r\n    min-width: .25rem;\r\n    padding: .03rem .05rem;\r\n    line-height: .25rem;\r\n}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ 93:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(108)
}
var Component = __webpack_require__(5)(
  /* script */
  __webpack_require__(79),
  /* template */
  __webpack_require__(99),
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

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('section', {
    staticClass: "shop-main"
  }, [_c('div', {
    staticClass: "menuview"
  }, [_c('ul', {
    staticClass: "menucategory"
  }, _vm._l((_vm.$store.state.shop.menuCategory), function(item, index) {
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
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), (item.selectNum != undefined && item.selectNum > 0) ? _c('span', {
      staticClass: "menucategory-28BIn"
    }, [_vm._v(_vm._s(item.selectNum))]) : _vm._e()])
  })), _vm._v(" "), _c('section', {
    staticClass: "container-menuview",
    attrs: {
      "id": "container"
    }
  }, [_vm._l((_vm.$store.state.shop.menuCategory), function(cate) {
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
      }, [_c('span', [_vm._v(_vm._s(list.price))])]), _vm._v(" "), _c('div', {
        staticClass: "cartbutton"
      }, [_c('span', [_c('span', {
        staticClass: "cartbutton-2tycR"
      }, [(list.selectNum > 0) ? _c('a', {
        staticClass: "cut",
        attrs: {
          "href": "javascript:",
          "role": "button"
        },
        on: {
          "click": function($event) {
            _vm.method(list, -1)
          }
        }
      }, [_vm._v("-")]) : _vm._e(), _vm._v(" "), (list.selectNum > 0) ? _c('span', {
        staticClass: "cartbutton-2OSi7",
        attrs: {
          "role": "button"
        }
      }, [_vm._v(_vm._s(list.selectNum))]) : _vm._e(), _vm._v(" "), _c('a', {
        staticClass: "add",
        attrs: {
          "href": "javascript:",
          "role": "button"
        },
        on: {
          "click": function($event) {
            _vm.method(list, 1)
          }
        }
      }, [_vm._v("+")])])])])])])
    }))]
  })], 2)]), _vm._v(" "), _c('cart')], 1)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(2).rerender("data-v-4e47871e", module.exports)
  }
}

/***/ }),

/***/ 99:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
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
      "role": "button",
      "attr-quantity": _vm.$store.state.shop.totalNum
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "bottomNav-wzCAW_0",
    attrs: {
      "role": "button"
    }
  }, [_c('p', {
    staticClass: "bottomNav-3Ak_E_0"
  }, [_c('span', [_vm._v(_vm._s(_vm._f("toMoney")(_vm.$store.state.shop.totalMoney)))])]), _vm._v(" "), _c('p', {
    staticClass: "bottomNav-3zqFz_0"
  }, [_vm._v("配送费" + _vm._s(_vm._f("toMoney")(_vm.$store.state.shop.sendPrice)))])]), _vm._v(" "), _c('a', {
    staticClass: "bottomNav-1urxC_0",
    attrs: {
      "href": "javascript:",
      "role": "button"
    }
  }, [_vm._v("去结算")])])])
},staticRenderFns: []}
module.exports.render._withStripped = true
if (true) {
  module.hot.accept()
  if (module.hot.data) {
     __webpack_require__(2).rerender("data-v-7bf75592", module.exports)
  }
}

/***/ })

});
//# sourceMappingURL=1.js.map