module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(2);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(1);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// CONCATENATED MODULE: ./components/Header.tsx


/* harmony default export */ var Header = (function (props) {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement("div", {
    className: "header"
  }, external_react_default.a.createElement("div", {
    className: "header-inner"
  }, external_react_default.a.createElement(link_default.a, {
    href: "/"
  }, external_react_default.a.createElement("h2", {
    style: {
      cursor: 'pointer'
    },
    className: "logo"
  }, "YoPo")), external_react_default.a.createElement("div", {
    className: "nav-bar"
  }, external_react_default.a.createElement(link_default.a, {
    href: "/Home/home"
  }, external_react_default.a.createElement("div", {
    className: "bar",
    style: props.active === 'home' ? {
      color: '#09c'
    } : {}
  }, "Home")), external_react_default.a.createElement(link_default.a, {
    href: "/Aboutus/aboutus"
  }, external_react_default.a.createElement("div", {
    className: "bar",
    style: props.active === 'aboutus' ? {
      color: '#09c'
    } : {}
  }, "AboutUs")), external_react_default.a.createElement(link_default.a, {
    href: "/Helps/helps"
  }, external_react_default.a.createElement("div", {
    className: "bar",
    style: props.active === 'helps' ? {
      color: '#09c'
    } : {}
  }, "Helps"))))), external_react_default.a.createElement("style", null, "\n        .header {\n          width: 100%;\n          border-bottom: 1px solid #eee;\n          padding: 0 70px;\n          box-sizing: border-box\n        }\n        .header .header-inner {\n          width: 100%;\n          box-sizing: border-box;\n          display: flex;\n          justify-content: space-between;\n          align-items: center;\n          height: 50px;\n        }\n        .logo {\n          font-size: 32;\n        }\n        .nav-bar {\n          display: flex;\n          aligin-items: center\n        }\n        .nav-bar .bar {\n          padding: 0 10px;\n          height: 50px;\n          line-height: 50px;\n          text-align: center;\n          font-size: 13px;\n          color: #555555;\n          cursor: pointer\n        }\n        .nav-bar .bar:hover {\n          color: #0099cc\n        }\n      "));
});
// CONCATENATED MODULE: ./components/Footer.tsx

/* harmony default export */ var Footer = (function () {
  return external_react_default.a.createElement("div", null, external_react_default.a.createElement("div", {
    className: "footer"
  }, external_react_default.a.createElement("div", {
    className: "footer-inner"
  }, "Copyright \xA9 2018-\u221E WWW.GETLAID.CN All Rights Reserved \u7248\u6743\u5F52YoPo\u6240\u6709")), external_react_default.a.createElement("style", null, "\n        .footer {\n          width: 100%;\n          padding: 0 70px;\n          border-top: 1px solid #eee;\n          box-sizing: border-box\n        }\n        .footer .footer-inner {\n          width: 100%;\n          display: flex;\n          flex: 1;\n          justify-content: center;\n          height: 50px;\n          align-items: center;\n          font-size: 12px;\n          color: #999999\n        }\n      "));
});
// CONCATENATED MODULE: ./layouts/HeaderFooter.tsx




/* harmony default export */ var HeaderFooter = __webpack_exports__["a"] = (function (props) {
  return external_react_default.a.createElement("div", {
    className: "jsx-10690466"
  }, external_react_default.a.createElement(Header, {
    active: props.active
  }), external_react_default.a.createElement("div", {
    id: "LayoutContainer",
    className: "jsx-10690466"
  }, props.children), external_react_default.a.createElement(Footer, null), external_react_default.a.createElement("style", null, "\n        #LayoutContainer {\n          min-height: 600px;\n          background-color: #f7f7f7\n        }\n      "), external_react_default.a.createElement(style_default.a, {
    styleId: "10690466",
    css: ["*{margin:0;padding:0;}", "li{list-style:none;}"]
  }));
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(13);


/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Helps; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _layouts_HeaderFooter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }





var Helps =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Helps, _React$Component);

  function Helps(props) {
    _classCallCheck(this, Helps);

    return _possibleConstructorReturn(this, _getPrototypeOf(Helps).call(this, props));
  }

  _createClass(Helps, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_layouts_HeaderFooter__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
        active: "helps"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        id: "helpspage"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", null, this.props.hlist.map(function (help) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", {
          key: help.id
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
          as: "/helps/".concat(help.id),
          href: "/Help/help?id=".concat(help.id, "&title=").concat(help.title)
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", null, help.title)));
      }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("style", null, "\n          #helpspage {\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            height: 600px;\n            width: 100%\n          }\n        "));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var hlist;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return new Promise(function (resolve) {
                  var hlist = [{
                    title: 'title1',
                    id: '1'
                  }, {
                    title: 'title2',
                    id: '2'
                  }, {
                    title: 'title3',
                    id: '3'
                  }, {
                    title: 'title4',
                    id: '4'
                  }, {
                    title: 'title5',
                    id: '5'
                  }];
                  resolve(hlist);
                });

              case 2:
                hlist = _context.sent;
                return _context.abrupt("return", {
                  hlist: hlist
                });

              case 4:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      function getInitialProps() {
        return _getInitialProps.apply(this, arguments);
      }

      return getInitialProps;
    }()
  }]);

  return Helps;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);



/***/ })
/******/ ]);