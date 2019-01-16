module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		4: 0
/******/ 	};
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
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// require() chunk loading for javascript
/******/
/******/ 		// "0" is the signal for "already loaded"
/******/ 		if(installedChunks[chunkId] !== 0) {
/******/ 			var chunk = require("../../../" + ({}[chunkId]||chunkId) + "." + {"8":"6bbd04ebcd544954478b"}[chunkId] + ".js");
/******/ 			var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 			for(var moduleId in moreModules) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 			for(var i = 0; i < chunkIds.length; i++)
/******/ 				installedChunks[chunkIds[i]] = 0;
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
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
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 15);
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
/* 4 */,
/* 5 */
/***/ (function(module, exports) {

module.exports = require("next/dynamic");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts_HeaderFooter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);
/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);



var Olddriver = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(function () {
  return __webpack_require__.e(/* import() */ 8).then(__webpack_require__.bind(null, 7));
}, {
  loading: function loading() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "loading...");
  },
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(7)];
    },
    modules: ['../../components/OldDriver']
  }
});
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_layouts_HeaderFooter__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], {
    active: "home"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: "homepage"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Olddriver, null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", null, "\n        #homepage {\n          width: 100%;\n          height:600px;\n          background-color: #f7f7f7;\n          display: flex;\n          justify-content: center;\n          align-items: center\n        }\n      "));
});

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(16);


/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Home_home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6);


/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Home_home__WEBPACK_IMPORTED_MODULE_1__["default"], null));
});

/***/ })
/******/ ]);