(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Minyatur"] = factory();
	else
		root["Minyatur"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js?{\"sourceMap\":false,\"exportType\":\"string\"}!./node_modules/sass-loader/dist/cjs.js?{\"api\":\"modern\"}!./src/scss/main.scss":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js?{"sourceMap":false,"exportType":"string"}!./node_modules/sass-loader/dist/cjs.js?{"api":"modern"}!./src/scss/main.scss ***!
  \********************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ "./node_modules/css-loader/dist/runtime/noSourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/** COLORS **/
/** Theme Colors **/
/** End of Theme Colors **/
.minyatur {
  --color-theme-light: rgb(218, 215, 205);
  --color-theme-base: rgb(88, 129, 87);
  --color-theme-dark: rgb(52, 78, 65);
  --color-theme-second-light: rgb(182, 173, 144);
  --color-theme-second-base: rgb(147, 102, 57);
  --color-theme-second-dark: rgb(88, 47, 14);
  --color-image-background-color: rgb(35, 35, 37);
  --color-zoom-lens: rgba(19, 28, 209, 0.4);
  --color-thumbnail-inactive: rgb(204, 204, 204);
  --color-thumbnail-hover: rgb(182, 173, 144);
  --color-thumbnail-active: rgb(88, 129, 87);
  --color-arrow-inactive: rgb(204, 204, 204);
  --color-arrow-active: rgb(235, 235, 235);
}
.minyatur body.dark-mode {
  --color-theme-light: rgb(52, 78, 65);
  --color-theme-base: rgb(88, 129, 87);
  --color-theme-dark: rgb(218, 215, 205);
}
.minyatur body.dark-mode {
  --color-theme-second-light: rgb(88, 47, 14);
  --color-theme-second-base: rgb(147, 102, 57);
  --color-theme-second-dark: rgb(182, 173, 144);
}
.minyatur body.dark-mode {
  --color-image-background-color: rgb(35, 35, 37);
  --color-zoom-lens: rgba(19, 28, 209, 0.4);
  --color-thumbnail-inactive: rgb(204, 204, 204);
  --color-thumbnail-hover: rgb(88, 47, 14);
  --color-thumbnail-active: rgb(88, 129, 87);
  --color-arrow-inactive: rgba(25, 25, 25, 0.8);
  --color-arrow-active: rgba(25, 25, 25, 0.4);
}

.minyatur {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
  margin: 0 auto;
  visibility: visible !important;
  display: block !important;
  /* hide scrollbar */
  /* Internet Explorer 10+ */
  -ms-overflow-style: none;
  /* Firefox */
  scrollbar-width: none;
  /* Safari and Chrome */
  /* end hide scrollbar */
}
.minyatur::-webkit-scrollbar {
  display: none;
}
.minyatur > div:not([class]) {
  position: relative;
  display: none;
  width: 100%;
  margin: 0 auto;
}
.minyatur .minyatur-board {
  width: 100%;
  margin: 0 auto;
  /*center-aligned*/
  font-size: 0px;
  position: relative;
  box-sizing: border-box;
  overflow: hidden;
  /* hide scrollbar */
  /* Internet Explorer 10+ */
  -ms-overflow-style: none;
  /* Firefox */
  scrollbar-width: none;
  /* Safari and Chrome */
  /* end hide scrollbar */
  /* ---------Arrow buttons ------- */
  /* The arrow button id should be: slider id + ("-prev", "-next", and "-pause-play") */
}
.minyatur .minyatur-board::-webkit-scrollbar {
  display: none;
}
.minyatur .minyatur-board ul {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  /*overflow:hidden;*/
  list-style: none;
  padding: 0;
  box-sizing: border-box;
  z-index: 1;
  display: flex;
  flex-wrap: nowrap;
  overflow: auto;
  overflow-y: hidden;
  scrollbar-width: none;
  scroll-behavior: smooth;
  scroll-snap-type: x mandatory;
}
.minyatur .minyatur-board li {
  position: relative;
  display: block;
  width: 100%;
  height: 100%;
  background-color: var(--background-grey-dark-zero);
  font-size: 12px;
  list-style: none;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  scroll-snap-align: start;
}
.minyatur .minyatur-board li img,
.minyatur .minyatur-board li i,
.minyatur .minyatur-board li video {
  /* Note: If transitionType is zoom, it will be overridden to cover. */
  position: relative;
  display: block;
  margin: 0 auto;
  cursor: default;
  max-width: 100%;
  max-height: 100%;
  outline: none;
}
.minyatur .minyatur-board li img, .minyatur .minyatur-board li video {
  object-fit: scale-down;
}
.minyatur .minyatur-board li .minyatur-on-image-message-wrapper {
  position: relative;
  margin: 0 auto;
}
.minyatur .minyatur-board li .minyatur-on-image-message-container {
  position: absolute;
  bottom: 40px;
  left: 40px;
  background-color: white;
  border-radius: 3px;
  font-size: 3vmin;
  font-weight: 600;
  padding: 0.5vmin 1vmin;
}
@media only screen and (max-width: 667px) {
  .minyatur .minyatur-board li .minyatur-on-image-message-container {
    left: 10px;
  }
}
.minyatur .minyatur-board .minyatur-board-button-container {
  position: absolute;
  margin: 0 auto;
  width: 100%;
  height: 0;
  top: 50%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 2;
}
.minyatur .minyatur-board .minyatur-board-prev-button,
.minyatur .minyatur-board .minyatur-board-next-button {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: min(10vmin, 52px);
  height: min(13vmin, 72px);
  top: 50%;
  transform: translateY(-50%);
  /* background-color: \$color-grey-500; */
  overflow: hidden;
  white-space: nowrap;
  user-select: none;
  border-radius: 2px;
  opacity: 0.8;
  cursor: pointer;
  align-items: center;
  -webkit-user-select: none;
}
.minyatur .minyatur-board .minyatur-board-prev-button::before,
.minyatur .minyatur-board .minyatur-board-next-button::before {
  position: absolute;
  content: "";
  width: min(5vmin, 30px);
  height: min(5vmin, 30px);
  border-left: min(0.7vmin, 3px) solid var(--color-arrow-inactive);
  border-top: min(0.7vmin, 3px) solid var(--color-arrow-inactive);
  border-radius: 2px;
  transition: all 0.05s;
}
.minyatur .minyatur-board .minyatur-board-prev-button:hover::before,
.minyatur .minyatur-board .minyatur-board-next-button:hover::before {
  width: min(5.3vmin, 32px);
  height: min(5.3vmin, 32px);
  border-left: min(0.9vmin, 4px) solid var(--color-arrow-active);
  border-top: min(0.9vmin, 4px) solid var(--color-arrow-active);
}
.minyatur .minyatur-board .minyatur-board-prev-button {
  left: 0;
}
.minyatur .minyatur-board .minyatur-board-next-button {
  right: 0;
}
.minyatur .minyatur-board .minyatur-board-prev-button::before {
  -ms-transform: rotate(-45deg);
  /*IE 9*/
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  backface-visibility: hidden;
  right: 4px;
}
.minyatur .minyatur-board .minyatur-board-next-button::before {
  -ms-transform: rotate(135deg);
  /*IE 9*/
  -webkit-transform: rotate(135deg);
  transform: rotate(135deg);
  backface-visibility: hidden;
  left: 4px;
}
.minyatur .minyatur-board .minyatur-board-prev-button div,
.minyatur .minyatur-board .minyatur-board-next-button div {
  display: none;
}
.minyatur .minyatur-board .minyatur-board-prev-button,
.minyatur .minyatur-board .minyatur-board-next-button {
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  user-select: none;
}
/* DOT THUMBNAIL */
.minyatur-thumbnail-dot {
  position: relative;
  width: 100%;
  left: 0;
  bottom: 0;
  background-color: transparent;
  z-index: 1;
}
.minyatur-thumbnail-dot ul {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  list-style: none;
  gap: 0.5vw;
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.minyatur-thumbnail-dot li {
  height: 0.5vh;
  margin-top: 0;
  background-color: var(--color-thumbnail-inactive);
  opacity: 0.8;
  cursor: pointer;
  transition: all 0.4s;
  flex-grow: 1;
  margin-top: 2px;
}
.minyatur-thumbnail-dot li.active {
  background-color: var(--color-thumbnail-active);
  opacity: 1;
}
.minyatur-thumbnail-dot li.active:hover {
  background-color: var(--color-thumbnail-active);
}
.minyatur-thumbnail-dot li:hover {
  background-color: var(--color-thumbnail-hover);
}

/* END OF DOT THUMBNAIL */
/* BASIC THUMBNAIL */
.minyatur-thumbnail-basic {
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  overflow: hidden;
  /*Gives room for arrow buttons*/
  box-sizing: border-box;
  user-select: none;
}
.minyatur-thumbnail-basic ul {
  position: relative;
  display: grid;
  grid-gap: min(2vw, 7px);
  grid-template-columns: repeat(auto-fill, minmax(min(10vmin, 50px), 1fr));
  list-style: none;
  padding: 6px 0;
  margin: 0 auto;
}
.minyatur-thumbnail-basic ul li {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  list-style: none;
  cursor: pointer;
  height: min(10vmin, 50px);
  width: min(10vmin, 50px);
  border: 2px solid var(--color-theme-base);
  box-sizing: border-box;
  overflow: hidden;
  /* a {
          width: 100%;
          height: 100%;
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center center;
          background-color: red;
          display: block;
          font-size: 0;
          } */
}
.minyatur-thumbnail-basic ul li.active, .minyatur-thumbnail-basic ul li.active:hover {
  border-color: var(--color-theme-dark);
}
.minyatur-thumbnail-basic ul li:hover {
  background-color: var(--color-theme-light);
}
.minyatur-thumbnail-basic ul li > * {
  max-width: 100%;
  max-height: 100%;
  display: block;
  margin: 0 auto;
  border: none;
}

/* END OF BASIC THUMBNAIL */
/* SLIDER THUMBNAIL */
.minyatur-thumbnail-snap {
  position: relative;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  overflow: hidden;
  /*Gives room for arrow buttons*/
  box-sizing: border-box;
  user-select: none;
}
.minyatur-thumbnail-snap ul {
  position: relative;
  list-style: none;
  padding: 6px 0;
  margin: 0 auto;
  display: flex;
  flex-wrap: nowrap;
  gap: min(2vw, 10px);
  overflow-x: scroll;
  overflow-y: hidden;
  scroll-behavior: smooth;
  /* Internet Explorer 10+ */
  -ms-overflow-style: none;
  /* Firefox */
  scrollbar-width: none;
  /* Safari and Chrome */
}
.minyatur-thumbnail-snap ul::-webkit-scrollbar {
  display: none;
}
.minyatur-thumbnail-snap ul li {
  position: relative;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  cursor: pointer;
  height: min(10vmin, 50px);
  width: min(10vmin, 50px);
  border: 2px solid var(--color-theme-base);
  opacity: 1;
  list-style: none;
  /* a {
          width: 100%;
          height: 100%;
          background-size: contain;
          background-repeat: no-repeat;
          background-position: center center;
          background-color: red;
          display: block;
          font-size: 0;
          } */
}
.minyatur-thumbnail-snap ul li.active, .minyatur-thumbnail-snap ul li.active:hover {
  border-color: var(--color-theme-dark);
}
.minyatur-thumbnail-snap ul li:hover {
  background-color: var(--color-theme-light);
}
.minyatur-thumbnail-snap ul li > * {
  max-width: 100%;
  max-height: 100%;
  display: block;
  margin: 0 auto;
  border: none;
}

/* END OF SLIDER THUMBNAIL */
/* Zoom */
.minyatur-zoom-lens {
  position: absolute;
  visibility: hidden;
  /*set the size of the lens:*/
  /* width: 200px;
  height: 100px; */
  top: 0;
  left: 0;
  background-color: var(--color-zoom-lens);
  z-index: 1;
}

/* End of zoom */
.minyatur-zoom-result {
  position: absolute;
  border: 1px solid var(--bordercolor-grey-light-400);
  visibility: hidden;
  background-size: contain;
  background-position: center center;
  background-repeat: no-repeat;
  background-color: var(--color-image-background-color);
  box-sizing: border-box;
  /*set the size of the result div:*/
  z-index: 1;
}

.minyatur-fullscreen-wrapper {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 9999;
  animation-duration: 0.2s;
  animation-name: animeOpacityFadeIn;
}
@keyframes animeOpacityFadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
.minyatur-fullscreen-wrapper.hidden,
.minyatur-fullscreen-wrapper .hidden {
  display: none !important;
}
.minyatur-fullscreen-wrapper .mfw-backcloth {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgba(15, 15, 15, 0.94);
  top: 0;
  left: 0;
  z-index: -1;
}
.minyatur-fullscreen-wrapper .mfw-close-button-container {
  position: fixed;
  right: 0;
  z-index: 1;
  padding: 10px 15px 0 0;
}
.minyatur-fullscreen-wrapper .mfw-close-button-container button {
  position: relative;
  color: white;
  border: none;
  font-size: 11px;
  width: 2.5em;
  height: 2.5em;
  background-color: transparent;
  box-sizing: content-box;
  padding: 5px;
  cursor: pointer;
}
.minyatur-fullscreen-wrapper .mfw-close-button-container button:before {
  position: absolute;
  content: " ";
  border-radius: 50%;
  background-color: rgba(40, 40, 40, 0.6);
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
}
.minyatur-fullscreen-wrapper .mfw-div-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}
.minyatur-fullscreen-wrapper .mfw-div-wrapper .mfw-div-container {
  position: relative;
  width: 100%;
  height: 0px;
  overflow: hidden;
}
.minyatur-fullscreen-wrapper .mfw-div-wrapper .mfw-div-container > div {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
}
.minyatur-fullscreen-wrapper .mfw-image-wrapper {
  position: absolute;
  width: 100vw;
  width: 100dvw;
  height: 100vh;
  height: 100dvh;
  top: 0;
  left: 0;
  padding: 0;
  box-sizing: border-box;
}
.minyatur-fullscreen-wrapper .mfw-image-wrapper .mfw-image-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;
  align-items: center;
  user-select: none;
}
.minyatur-fullscreen-wrapper .mfw-image-wrapper .mfw-image-container .nfw-image-item {
  position: relative;
  margin: 0 auto;
  max-width: 100%;
  display: grid;
  place-items: center;
  overflow: auto;
  /* Internet Explorer 10+ */
  -ms-overflow-style: none;
  /* Firefox */
  scrollbar-width: none;
  /* Safari and Chrome */
}
.minyatur-fullscreen-wrapper .mfw-image-wrapper .mfw-image-container .nfw-image-item::-webkit-scrollbar {
  display: none;
}
.minyatur-fullscreen-wrapper .mfw-image-wrapper .mfw-image-container .nfw-image-item .nfw-image {
  position: relative;
  display: block;
  margin: 0 auto;
  max-width: 100vw;
}
.minyatur-fullscreen-wrapper .mfw-image-wrapper .mfw-image-container .nfw-image-item .nfw-image.nfw-zoom-out {
  cursor: zoom-in;
}
.minyatur-fullscreen-wrapper .mfw-image-wrapper .mfw-image-container .nfw-image-item .nfw-image.nfw-zoom-in {
  cursor: zoom-out;
}
.minyatur-fullscreen-wrapper .mfw-image-wrapper .mfw-image-container .nfw-image-item.pointer-mouse {
  margin: 0 auto;
}
.minyatur-fullscreen-wrapper .mfw-image-wrapper .mfw-image-container .nfw-image-item.pointer-mouse .nfw-image.nfw-zoom-out {
  scale: 1;
}
.minyatur-fullscreen-wrapper .mfw-image-wrapper .mfw-image-container .nfw-image-item.pointer-mouse .nfw-image.nfw-zoom-in {
  transform-origin: 0 0;
}
.minyatur-fullscreen-wrapper .mfw-image-wrapper .mfw-image-container .nfw-image-item.pointer-touch {
  width: 100%;
  height: 100%;
}
.minyatur-fullscreen-wrapper .mfw-image-wrapper .mfw-image-container .nfw-image-item.pointer-touch .nfw-image.nfw-zoom-in {
  max-width: unset;
}`, ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___.toString());


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ "./src/js/config.js":
/*!**************************!*\
  !*** ./src/js/config.js ***!
  \**************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var config = {
  aspectRatio: '16:9',
  // width:height,
  maxWidth: null,
  // If this value is null, slider tries expanded as much as parent width.
  maxHeight: null,
  // If this value is empty, the slider height continues to grow proportionally to the width according to the value specified in "aspectRatio".
  contentWidthLimit: '1250px',
  // If this value provided, the width of the button container element is limited according to this property.
  loop: false,
  // Infinity loop.
  startIndex: 1,
  // The number of the image selected by default. The first image is number 1.
  styleAutoload: true,
  // Default styles are added to <head> automatically. If you want to add your own css, this field must be false.
  languageCode: 'tr',
  // Language code
  module: ['thumbnail', 'fullscreen', 'control', 'zoom']
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (config);

/***/ }),

/***/ "./src/js/core/item.js":
/*!*****************************!*\
  !*** ./src/js/core/item.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Item = /*#__PURE__*/function () {
  function Item(sliderInstance) {
    _classCallCheck(this, Item);
    this.sliderInstance = sliderInstance;
  }
  return _createClass(Item, [{
    key: "setElement",
    value: function setElement(element) {
      this.element = element;
    }
  }, {
    key: "getElement",
    value: function getElement() {
      return this.element;
    }
  }, {
    key: "show",
    value: function show() {}
  }, {
    key: "hide",
    value: function hide() {}
  }, {
    key: "getInstance",
    value: function getInstance() {
      return this;
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Item);

/***/ }),

/***/ "./src/js/core/language.js":
/*!*********************************!*\
  !*** ./src/js/core/language.js ***!
  \*********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Language = /*#__PURE__*/function () {
  function Language() {
    _classCallCheck(this, Language);
  }
  return _createClass(Language, null, [{
    key: "load",
    value: function () {
      var _load = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(languageCode) {
        var importModule, importDefaultObject, _importModule, _importDefaultObject;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return __webpack_require__("./src/js/language lazy recursive ^\\.\\/.*\\.js$")("./".concat(languageCode, ".js"));
            case 3:
              importModule = _context.sent;
              importDefaultObject = importModule["default"];
              this.setAll(importDefaultObject);
              _context.next = 15;
              break;
            case 8:
              _context.prev = 8;
              _context.t0 = _context["catch"](0);
              _context.next = 12;
              return __webpack_require__("./src/js/language lazy recursive ^\\.\\/.*\\.js$")("./".concat(this.defaultLanguageCode, ".js"));
            case 12:
              _importModule = _context.sent;
              _importDefaultObject = _importModule["default"];
              this.setAll(_importDefaultObject);
            case 15:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[0, 8]]);
      }));
      function load(_x) {
        return _load.apply(this, arguments);
      }
      return load;
    }()
  }, {
    key: "get",
    value: function get(key) {
      return Language.words.get(key);
    }
  }, {
    key: "getAll",
    value: function getAll() {
      return Language.words;
    }
  }, {
    key: "set",
    value: function set(key, value) {
      return Language.words.set(key, value);
    }
  }, {
    key: "setAll",
    value: function setAll(translationObject) {
      var _this = this;
      Object.entries(translationObject).forEach(function (elem) {
        _this.set(elem[0], elem[1]);
      });
    }
  }, {
    key: "delete",
    value: function _delete(key) {
      return Language.words["delete"](key);
    }
  }]);
}();
_defineProperty(Language, "words", new Map());
_defineProperty(Language, "defaultLanguageCode", 'en');
if (globalThis.lang != null) {
  Language.load(globalThis.lang);
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Language);

/***/ }),

/***/ "./src/js/core/module.js":
/*!*******************************!*\
  !*** ./src/js/core/module.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
// Base class for modules that support both JS and HTML config
var Module = /*#__PURE__*/_createClass(function Module(sliderInstance, moduleName) {
  _classCallCheck(this, Module);
  this.sliderInstance = sliderInstance;
  this.config = new Map();

  // Load config from JS object: config[moduleName] = { key: value }
  var jsConfig = sliderInstance.config.get(moduleName);
  if (jsConfig && _typeof(jsConfig) === 'object') {
    for (var _i = 0, _Object$entries = Object.entries(jsConfig); _i < _Object$entries.length; _i++) {
      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
        key = _Object$entries$_i[0],
        value = _Object$entries$_i[1];
      this.config.set(key, value);
    }
  }

  // Override or supplement with HTML data attributes: data-moduleName-*
  var attrs = sliderInstance.mainContainer.attributes;
  var _iterator = _createForOfIteratorHelper(attrs),
    _step;
  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var attr = _step.value;
      if (attr.name.startsWith("data-".concat(moduleName, "-"))) {
        var _key = attr.name.replace("data-".concat(moduleName, "-"), '').split('-').map(function (part, i) {
          return i === 0 ? part : part[0].toUpperCase() + part.slice(1);
        }).join('');
        this.config.set(_key, attr.value);
      }
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Module);

/***/ }),

/***/ "./src/js/core/slider.js":
/*!*******************************!*\
  !*** ./src/js/core/slider.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _config_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config.js */ "./src/js/config.js");
/* harmony import */ var _language_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./language.js */ "./src/js/core/language.js");
/* harmony import */ var _css_loader_sourceMap_false_exportType_string_sass_loader_api_modern_scss_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !!css-loader?{"sourceMap":false,"exportType":"string"}!sass-loader?{"api":"modern"}!../../scss/main.scss */ "./node_modules/css-loader/dist/cjs.js?{\"sourceMap\":false,\"exportType\":\"string\"}!./node_modules/sass-loader/dist/cjs.js?{\"api\":\"modern\"}!./src/scss/main.scss");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }



var Slider = /*#__PURE__*/function () {
  function Slider() {
    var _this = this,
      _params$items;
    var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, Slider);
    _defineProperty(this, "sliderItems", new Map());
    _defineProperty(this, "config", new Map());
    this.activeIndex = 0;
    this.boardListOnShift = null;
    if (!params.target) throw new Error('Minyatur: `target` parameter is required.');
    this.mainContainer = typeof params.target === 'string' ? document.querySelector(params.target) : params.target;
    if (!(this.mainContainer instanceof window.HTMLElement)) {
      throw new Error('Minyatur: Please provide a valid DOM element or selector.');
    }
    this.mainContainer.classList.add('minyatur');
    this.mainContainer.__minyatur = this;

    // Load default configuration
    Object.entries(_config_js__WEBPACK_IMPORTED_MODULE_0__["default"]).forEach(function (_ref) {
      var _ref2 = _slicedToArray(_ref, 2),
        key = _ref2[0],
        value = _ref2[1];
      _this.config.set(key, value);
    });

    // Override from HTML attributes
    this.config.forEach(function (_, key) {
      var attr = "data-minyatur-".concat(key.replace(/((?<=[a-z\d])[A-Z]|(?<=[A-Z\d])[A-Z](?=[a-z]))/g, '-$1').toLowerCase());
      if (_this.mainContainer.hasAttribute(attr)) {
        _this.config.set(key, _this.mainContainer.getAttribute(attr));
      }
    });

    // Override from user config
    Object.entries(params).forEach(function (_ref3) {
      var _ref4 = _slicedToArray(_ref3, 2),
        key = _ref4[0],
        value = _ref4[1];
      if (value != null) {
        _this.config.set(key, value);
      }
    });

    // Load language
    _language_js__WEBPACK_IMPORTED_MODULE_1__["default"].load(this.config.get('languageCode'));
    this.language = _language_js__WEBPACK_IMPORTED_MODULE_1__["default"];

    // Auto-inject default style if needed
    if (this.config.get('styleAutoload')) {
      if (!document.querySelector('.minyatur-default-style') && !document.querySelector('link[href*="minyatur.css"]')) {
        var styleElement = document.createElement('style');
        styleElement.setAttribute('type', 'text/css');
        styleElement.classList.add('minyatur-default-style');
        styleElement.innerHTML = _css_loader_sourceMap_false_exportType_string_sass_loader_api_modern_scss_main_scss__WEBPACK_IMPORTED_MODULE_2__["default"];
        document.head.appendChild(styleElement);
      }
    }

    // Use user-defined items or fallback to DOM children
    this.userDefinedItems = (_params$items = params.items) !== null && _params$items !== void 0 && _params$items.length ? params.items : _toConsumableArray(this.mainContainer.firstElementChild.children || []);
    if (!this.userDefinedItems.length) {
      this.printItemErrorMessage();
      return;
    }

    // Empty the main container
    while (this.mainContainer.firstChild) {
      this.mainContainer.removeChild(this.mainContainer.lastChild);
    }

    // BroadWrapper, holder for slider items
    this.boardWrapper = document.createElement('div');
    this.boardWrapper.classList.add('minyatur-board');
    this.boardWrapper.style.visibility = 'hidden';
    this.mainContainer.appendChild(this.boardWrapper);

    // AspectRatio and width and height related settings.
    this.boardListContainer = document.createElement('div');
    this.boardListContainer.classList.add('minyatur-board-list-container');
    this.boardListContainer.style.overflow = 'hidden';
    this.boardListContainer.style.height = '0';
    this.boardWrapper.appendChild(this.boardListContainer);

    // Since the measurement properties return values after adding the BoardContainer as a child, values such as ratioPercent, maxWidth, maxHeight of the slider are calculated and evaluated here.
    if (this.config.get('maxWidth') != null) {
      this.boardWrapper.style.maxWidth = this.config.get('maxWidth');
    }
    this.boardListContainerCalculateHeight();
    this._boardListContainerCalculateHeight = this.boardListContainerCalculateHeight.bind(this);
    window.addEventListener('resize', this._boardListContainerCalculateHeight);

    // Generate boardlist
    this.boardList = document.createElement('ul');

    // Transition Events
    this.boardList.addEventListener('transitionstart', function () {
      _this.boardListOnShift = true;
    });
    this.boardList.addEventListener('transitionend', function () {
      _this.boardListOnShift = null;
      _this.transitionOff();
    });

    // touchstart
    this._touchStart = this.touchStart.bind(this);
    this.boardList.addEventListener('touchstart', this._touchStart, {
      passive: true
    });

    // touchmove
    this._touchMove = this.touchMove.bind(this);
    this.boardList.addEventListener('touchmove', this._touchMove, {
      passive: false
    });

    // touchend and touchcancel
    this._touchStop = this.touchStop.bind(this);
    this.boardList.addEventListener('touchend', this._touchStop, {
      passive: true
    });
    this.boardList.addEventListener('touchcancel', this._touchStop, {
      passive: true
    });

    // End of scroll change scrollIndex
    this.boardList.addEventListener('scroll', function () {
      if (_this.scrollEndTimer) {
        window.clearTimeout(_this.scrollEndTimer);
      }
      if (_this.boardListOnShift) {
        return;
      }
      _this.scrollEndTimer = window.setTimeout(function () {
        var scrollIndex = Math.round(_this.boardList.scrollLeft / _this.boardList.firstElementChild.offsetWidth);
        if (_this.activeIndex !== scrollIndex) {
          _this.insertItem(scrollIndex, {
            behavior: 'smooth',
            source: 'scrollEvent'
          });
        }
      }, 70);
    });
    this.boardListContainer.appendChild(this.boardList);
    this.init();
    return {
      next: function next() {
        var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          behavior = _ref5.behavior;
        _this.nextItem({
          behavior: behavior,
          source: 'api'
        });
      },
      prev: function prev() {
        var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          behavior = _ref6.behavior;
        _this.prevItem({
          behavior: behavior,
          source: 'api'
        });
      },
      insert: function insert(index) {
        var _ref7 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
          behavior = _ref7.behavior;
        _this.insertItem(index, {
          behavior: behavior,
          source: 'api'
        });
      }
    };
  }
  return _createClass(Slider, [{
    key: "init",
    value: function () {
      var _init = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var _this2 = this;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return this.initItems();
            case 2:
              _context.next = 4;
              return this.initModules();
            case 4:
              if (this.sliderItems.size) {
                _context.next = 7;
                break;
              }
              this.printItemErrorMessage();
              return _context.abrupt("return");
            case 7:
              // DOM tamamen yerleştirildikten sonra aktif sınıfı ekle
              window.requestAnimationFrame(function () {
                _this2.insertItem(_this2.config.get('startIndex') - 1, {
                  behavior: 'instant',
                  source: 'init'
                });

                // Finally make the slider visible
                _this2.boardWrapper.style.visibility = null;
              });
            case 8:
            case "end":
              return _context.stop();
          }
        }, _callee, this);
      }));
      function init() {
        return _init.apply(this, arguments);
      }
      return init;
    }()
  }, {
    key: "initItems",
    value: function () {
      var _initItems = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
        var _iterator, _step, item, ItemModule, ItemClass, itemInstance, boardListItem, MessageModule, MessageClass, messageInstance;
        return _regeneratorRuntime().wrap(function _callee2$(_context2) {
          while (1) switch (_context2.prev = _context2.next) {
            case 0:
              _iterator = _createForOfIteratorHelper(this.userDefinedItems);
              _context2.prev = 1;
              _iterator.s();
            case 3:
              if ((_step = _iterator.n()).done) {
                _context2.next = 31;
                break;
              }
              item = _step.value;
              _context2.prev = 5;
              _context2.next = 8;
              return __webpack_require__("./src/js/item lazy recursive ^\\.\\/.*\\.js$")("./".concat(item.tagName.toLowerCase(), ".js"));
            case 8:
              ItemModule = _context2.sent;
              ItemClass = ItemModule["default"];
              itemInstance = new ItemClass(this);
              itemInstance.setElement(item);
              boardListItem = document.createElement('li');
              this.boardList.appendChild(boardListItem);
              boardListItem.appendChild(item);
              if (!item.getAttribute('data-message')) {
                _context2.next = 23;
                break;
              }
              _context2.next = 18;
              return Promise.resolve(/*! import() */).then(__webpack_require__.bind(__webpack_require__, /*! ../module/message.js */ "./src/js/module/message.js"));
            case 18:
              MessageModule = _context2.sent;
              MessageClass = MessageModule["default"];
              messageInstance = new MessageClass(this);
              messageInstance.setMessage(item.getAttribute('data-message'));
              boardListItem.appendChild(messageInstance.getElement());
            case 23:
              this.sliderItems.set(_toConsumableArray(this.boardList.children).indexOf(boardListItem), {
                instance: itemInstance,
                element: item,
                message: item.getAttribute('data-message')
              });
              _context2.next = 29;
              break;
            case 26:
              _context2.prev = 26;
              _context2.t0 = _context2["catch"](5);
              console.warn(_context2.t0);
            case 29:
              _context2.next = 3;
              break;
            case 31:
              _context2.next = 36;
              break;
            case 33:
              _context2.prev = 33;
              _context2.t1 = _context2["catch"](1);
              _iterator.e(_context2.t1);
            case 36:
              _context2.prev = 36;
              _iterator.f();
              return _context2.finish(36);
            case 39:
            case "end":
              return _context2.stop();
          }
        }, _callee2, this, [[1, 33, 36, 39], [5, 26]]);
      }));
      function initItems() {
        return _initItems.apply(this, arguments);
      }
      return initItems;
    }()
  }, {
    key: "initModules",
    value: function () {
      var _initModules = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
        var moduleConfigValue, moduleConfigArray, _iterator2, _step2, moduleName, exportedModule, Module, ModuleInstance;
        return _regeneratorRuntime().wrap(function _callee3$(_context3) {
          while (1) switch (_context3.prev = _context3.next) {
            case 0:
              if (this.config.has('module')) {
                _context3.next = 2;
                break;
              }
              return _context3.abrupt("return");
            case 2:
              moduleConfigValue = this.config.get('module');
              if (typeof moduleConfigValue === 'string' || moduleConfigValue instanceof String) {
                moduleConfigArray = moduleConfigValue.split(',').map(function (s) {
                  return s.trim();
                });
              } else {
                moduleConfigArray = moduleConfigValue;
              }
              if (!(!Array.isArray(moduleConfigArray) || !moduleConfigArray.length)) {
                _context3.next = 6;
                break;
              }
              return _context3.abrupt("return");
            case 6:
              this.modules = new Set();

              // Access to the modules then initialize
              // Object.keys(moduleConfigArray).forEach(key => {
              _iterator2 = _createForOfIteratorHelper(moduleConfigArray);
              _context3.prev = 8;
              _iterator2.s();
            case 10:
              if ((_step2 = _iterator2.n()).done) {
                _context3.next = 27;
                break;
              }
              moduleName = _step2.value;
              _context3.prev = 12;
              _context3.next = 15;
              return __webpack_require__("./src/js/module lazy recursive ^\\.\\/.*\\.js$")("./".concat(moduleName, ".js"));
            case 15:
              exportedModule = _context3.sent;
              Module = exportedModule["default"];
              ModuleInstance = new Module(this);
              this.modules.add(ModuleInstance);
              if (ModuleInstance.append) {
                ModuleInstance.append();
              }
              _context3.next = 25;
              break;
            case 22:
              _context3.prev = 22;
              _context3.t0 = _context3["catch"](12);
              console.warn(_context3.t0.message);
            case 25:
              _context3.next = 10;
              break;
            case 27:
              _context3.next = 32;
              break;
            case 29:
              _context3.prev = 29;
              _context3.t1 = _context3["catch"](8);
              _iterator2.e(_context3.t1);
            case 32:
              _context3.prev = 32;
              _iterator2.f();
              return _context3.finish(32);
            case 35:
            case "end":
              return _context3.stop();
          }
        }, _callee3, this, [[8, 29, 32, 35], [12, 22]]);
      }));
      function initModules() {
        return _initModules.apply(this, arguments);
      }
      return initModules;
    }()
  }, {
    key: "boardListContainerCalculateHeight",
    value: function boardListContainerCalculateHeight() {
      var ratioPercent = this.config.get('aspectRatio').split(':');
      var calculatedHeight = this.boardWrapper.offsetWidth / ratioPercent[0] * ratioPercent[1];
      console.log(ratioPercent);
      if (this.config.get('maxHeight') == null || this.boardListContainer.offsetHeight <= parseInt(this.config.get('maxHeight')) && calculatedHeight <= parseInt(this.config.get('maxHeight'))) {
        this.boardListContainer.style.paddingTop = "".concat(100 / (ratioPercent[0] / ratioPercent[1]), "%");
      } else {
        this.boardListContainer.style.paddingTop = this.config.get('maxHeight');
      }
    }
  }, {
    key: "transitionOn",
    value: function transitionOn() {
      this.boardList.style.transition = 'all 250ms ease 0ms';
    }
  }, {
    key: "transitionOff",
    value: function transitionOff() {
      this.boardList.style.transition = null;
    }
  }, {
    key: "insertItem",
    value: function insertItem(newIndex) {
      var _ref8 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref8$behavior = _ref8.behavior,
        behavior = _ref8$behavior === void 0 ? null : _ref8$behavior,
        _ref8$_source = _ref8._source,
        _source = _ref8$_source === void 0 ? null : _ref8$_source;
      if (this.activeIndex > newIndex && newIndex < 0 && this.config.get('loop')) {
        this.prevLoopMotion();
        return;
      }
      if (this.activeIndex < newIndex && newIndex >= this.boardList.children.length && this.config.get('loop')) {
        this.nextLoopMotion();
        return;
      }

      // Index
      if (newIndex < 0) {
        newIndex = 0;
      }
      if (newIndex >= this.boardList.children.length) {
        newIndex = this.boardList.children.length - 1;
      }

      // module hide;
      this.triggerModuleHide(this.activeIndex);
      this.activeIndex = newIndex;

      // module show
      this.triggerModuleInit(this.activeIndex);

      // Scroll
      var scrollAbsoluteX = this.boardList.firstElementChild.offsetWidth * this.activeIndex;
      if (!['smooth', 'instant', 'auto'].includes(behavior)) {
        behavior = 'smooth';
      }
      var scrollOptions = {
        left: scrollAbsoluteX,
        top: 0,
        behavior: behavior
      };

      // If there is a difference, move it
      if (this.boardList.scrollLeft !== scrollAbsoluteX) {
        this.boardList.scrollTo(scrollOptions);
      }
    }
  }, {
    key: "triggerModuleHide",
    value: function triggerModuleHide(_index) {
      // Hide method, oldIndex element
      this.sliderItems.get(this.activeIndex).instance.hide();
    }
  }, {
    key: "triggerModuleInit",
    value: function triggerModuleInit(newIndex) {
      // Pass newIndex to the modules
      this.modules.forEach(function (v) {
        if (v.insertItem != null) {
          v.insertItem(newIndex);
        }
      });

      // Show method, newIndex element
      this.sliderItems.get(newIndex).instance.show();
    }
  }, {
    key: "prevItem",
    value: function prevItem() {
      var _ref9 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref9$behavior = _ref9.behavior,
        behavior = _ref9$behavior === void 0 ? null : _ref9$behavior,
        _ref9$source = _ref9.source,
        source = _ref9$source === void 0 ? null : _ref9$source;
      if (this.boardListOnShift) {
        return;
      }
      var targetIndex = this.activeIndex - 1;
      if (targetIndex < 0) {
        if (this.config.get('loop')) {
          this.prevLoopMotion();
          return;
        } else {
          this.prevEndMotion();
          return;
        }
      }
      this.insertItem(targetIndex, {
        behavior: behavior,
        source: source
      });
    }
  }, {
    key: "nextItem",
    value: function nextItem() {
      var _ref10 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref10$behavior = _ref10.behavior,
        behavior = _ref10$behavior === void 0 ? null : _ref10$behavior,
        _ref10$source = _ref10.source,
        source = _ref10$source === void 0 ? null : _ref10$source;
      if (this.boardListOnShift) {
        return;
      }
      var targetIndex = this.activeIndex + 1;
      if (targetIndex >= this.boardList.children.length) {
        if (this.config.get('loop')) {
          this.nextLoopMotion();
          return;
        } else {
          this.nextEndMotion();
          return;
        }
      }
      this.insertItem(targetIndex, {
        behavior: behavior,
        source: source
      });
    }
  }, {
    key: "prevEndMotion",
    value: function prevEndMotion() {
      var boardRelativeDelta = this.boardList.firstElementChild.offsetWidth / 6;
      var staticDelta = 100;
      var finalDelta = Math.min(boardRelativeDelta, staticDelta);
      this.endMotion("".concat(finalDelta, "px"));
    }
  }, {
    key: "nextEndMotion",
    value: function nextEndMotion() {
      var boardRelativeDelta = this.boardList.firstElementChild.offsetWidth / 6;
      var staticDelta = 100;
      var finalDelta = Math.min(boardRelativeDelta, staticDelta);
      this.endMotion("-".concat(finalDelta, "px"));
    }
  }, {
    key: "endMotion",
    value: function endMotion(positionWithUnit) {
      var _this3 = this;
      this.transitionOn();
      this.boardList.style.transform = "translateX(".concat(positionWithUnit, ")");
      this.boardList.addEventListener('transitionend', function () {
        _this3.transitionOn();
        _this3.boardList.style.transform = null;
      }, {
        once: true
      });
    }
  }, {
    key: "prevLoopMotion",
    value: function prevLoopMotion() {
      this.loopMotion('prev');
    }
  }, {
    key: "nextLoopMotion",
    value: function nextLoopMotion() {
      this.loopMotion('next');
    }
  }, {
    key: "loopMotion",
    value: function loopMotion(direction) {
      var _this4 = this;
      if (this.boardListOnShift) {
        return;
      }
      var firstMoveDeltaX, lastMoveDeltaX, targetIndex;
      if (direction === 'next') {
        var startPoint = this.boardList.scrollWidth - (this.boardList.scrollLeft + this.boardList.offsetWidth);
        this.boardList.style.transform = "translateX(".concat(startPoint, "px)");
        this.boardList.style.overflow = 'hidden';
        firstMoveDeltaX = -this.boardList.firstElementChild.offsetWidth;
        lastMoveDeltaX = this.boardList.firstElementChild.offsetWidth;
        targetIndex = 0;
      }
      if (direction === 'prev') {
        var _startPoint = -this.boardList.scrollLeft;
        this.boardList.style.transform = "translateX(".concat(_startPoint, "px)");
        this.boardList.style.overflow = 'hidden';
        firstMoveDeltaX = this.boardList.firstElementChild.offsetWidth;
        lastMoveDeltaX = -this.boardList.firstElementChild.offsetWidth;
        targetIndex = this.boardList.children.length - 1;
      }
      this.transitionOn();
      this.boardList.style.transform = "translateX(".concat(firstMoveDeltaX, "px)");
      this.boardList.addEventListener('transitionend', function () {
        _this4.insertItem(targetIndex, {
          behavior: 'instant',
          source: 'loopMotion'
        });
        _this4.boardList.style.transform = "translateX(".concat(lastMoveDeltaX, "px)");
        window.setTimeout(function () {
          _this4.transitionOn();
          _this4.boardList.style.transform = null;
          _this4.boardList.style.overflow = null;
        }, 10);
      }, {
        once: true
      });
    }
  }, {
    key: "touchStart",
    value: function touchStart(event) {
      if (this.boardListOnShift) {
        return;
      }
      this.boardListOnShift = true;
      this.touchStartX = event.touches[0].pageX;
      this.touchChangeRatio = this.boardList.firstElementChild.offsetWidth / 4.5;
      this.onTouch = true;
    }
  }, {
    key: "touchMove",
    value: function touchMove(event) {
      if (!this.onTouch) {
        return;
      }
      if (!this.config.get('loop')) {
        return;
      }
      this.touchDeltaX = event.touches[0].pageX - this.touchStartX;
    }
  }, {
    key: "touchStop",
    value: function touchStop() {
      this.boardListOnShift = null;
      if (!this.config.get('loop')) {
        return;
      }
      this.onTouch = null;
      if (this.activeIndex === 0 && this.touchDeltaX > this.touchChangeRatio) {
        this.onTouch = null;
        this.insertItem(this.activeIndex - 1, {
          source: 'touchStop'
        });
        return;
      }
      if (this.activeIndex === this.boardList.children.length - 1 && this.touchDeltaX < -this.touchChangeRatio) {
        this.onTouch = null;
        this.insertItem(this.activeIndex + 1, {
          source: 'touchStop'
        });
      }
    }
  }, {
    key: "isTouch",
    value: function isTouch() {
      if ('ontouchstart' in window || window.DocumentTouch && document instanceof window.DocumentTouch) {
        return true;
      }
      var prefixes = ' -webkit- -moz- -o- -ms- '.split(' ');
      var mq = function mq(query) {
        return window.matchMedia(query).matches;
      };

      // include the 'heartz' as a way to have a non matching MQ to help terminate the join
      // https://git.io/vznFH
      var query = ['(', prefixes.join('touch-enabled),('), 'heartz', ')'].join('');
      mq(query);
    }
  }], [{
    key: "printItemErrorMessage",
    value: function printItemErrorMessage() {
      console.error('Minyatur Error: There is no image to show.', '\n', 'Please insert `div` inside of `slider container element` and then insert elements to the `div`.', '\n', 'Example:', '\n', '<div id="minyatur-container">', '\n', '\t<div>', '\n', '\t\t<img src="source" />', '\n', '\t\t<img src="source" />', '\n', '\t</div>', '\n', '</div>');
    }
  }, {
    key: "manual",
    value: function manual() {
      var _console;
      var lines = [['%c====================  Minyatur Slider Manual  ====================%c\n\n', ['color: #6c5ce7; font-weight: bold;', '']], ['%cHow to initialize (JS):%c\n', ['color: #00b894; font-weight: bold;', '']], ["new Minyatur({\n  target: '#slider',\n  loop: true,\n  languageCode: 'en',\n  aspectRatio: '16:9',\n  module: ['thumbnail', 'fullscreen', 'message', 'control', 'mouse', 'zoom'],\n  thumbnail: {\n    type: 'slider',\n    id: 'thumbs'\n  },\n  zoom: {\n    expandedZoom: true\n  }\n});\n\n", []], ['%cHow to configure via HTML:%c\n', ['color: #00b894; font-weight: bold;', '']], ["<div id=\"slider\"\n     data-minyatur-aspect-ratio=\"16:9\"\n     data-minyatur-module=\"thumbnail,fullscreen,message,zoom\"\n     data-minyatur-thumbnail-type=\"slider\"\n     data-thumbnail-id=\"thumbs\">\n  <img src=\"1.jpg\" data-message=\"First image\" />\n  <img src=\"2.jpg\" data-message=\"Second image\" />\n</div>\n\n", []], ['%cAvailable Config Keys:%c\n', ['color: #00cec9; font-weight: bold;', '']], ["aspectRatio         string          Slider display ratio (e.g. 16:9)\n" + "maxWidth            string|null     Max width of container\n" + "maxHeight           string|null     Max height of container\n" + "contentWidthLimit   string          Button container limit\n" + "loop                boolean         Enables circular sliding\n" + "startIndex          number          Initial index (1-based)\n" + "styleAutoload       boolean         Load default CSS\n" + "languageCode        string          Language key (e.g. en, tr)\n" + "module              string[]        List of modules to activate\n\n", []], ['%cModule-Specific Options:%c\n', ['color: #e17055; font-weight: bold;', '']], ["thumbnail.type       string          dot | slider | basic\n" + "thumbnail.id         string|null     ID of thumbnail container\n" + "zoom.expandedZoom    boolean         Enables larger zoom area\n\n", []], ['%cNotes:%c\n', ['color: #636e72; font-weight: bold;', '']], ["- JavaScript config values override HTML data-* attributes.\n" + "- All config values are optional unless required by a module.\n" + "- Use data-minyatur-* or JS config depending on your setup.\n\n", []], ['%c============================================================%c\n', ['color: #6c5ce7;', '']]];
      var message = lines.map(function (_ref11) {
        var _ref12 = _slicedToArray(_ref11, 1),
          text = _ref12[0];
        return text;
      }).join('');
      var styles = lines.flatMap(function (_ref13) {
        var _ref14 = _slicedToArray(_ref13, 2),
          _ = _ref14[0],
          _ref14$ = _ref14[1],
          styles = _ref14$ === void 0 ? [] : _ref14$;
        return styles;
      });
      (_console = console).log.apply(_console, [message].concat(_toConsumableArray(styles)));
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slider);

/***/ }),

/***/ "./src/js/item lazy recursive ^\\.\\/.*\\.js$":
/*!****************************************************************!*\
  !*** ./src/js/item/ lazy ^\.\/.*\.js$ strict namespace object ***!
  \****************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./div.js": "./src/js/item/div.js",
	"./img.js": "./src/js/item/img.js",
	"./video.js": "./src/js/item/video.js"
};

function webpackAsyncContext(req) {
	return Promise.resolve().then(() => {
		if(!__webpack_require__.o(map, req)) {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		}

		var id = map[req];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./src/js/item lazy recursive ^\\.\\/.*\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/js/item/div.js":
/*!****************************!*\
  !*** ./src/js/item/div.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_item_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/item.js */ "./src/js/core/item.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

var Div = /*#__PURE__*/function (_Item) {
  function Div() {
    _classCallCheck(this, Div);
    return _callSuper(this, Div, arguments);
  }
  _inherits(Div, _Item);
  return _createClass(Div);
}(_core_item_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Div);

/***/ }),

/***/ "./src/js/item/img.js":
/*!****************************!*\
  !*** ./src/js/item/img.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_item_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/item.js */ "./src/js/core/item.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

var Img = /*#__PURE__*/function (_Item) {
  function Img() {
    _classCallCheck(this, Img);
    return _callSuper(this, Img, arguments);
  }
  _inherits(Img, _Item);
  return _createClass(Img);
}(_core_item_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Img);

/***/ }),

/***/ "./src/js/item/video.js":
/*!******************************!*\
  !*** ./src/js/item/video.js ***!
  \******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_item_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/item.js */ "./src/js/core/item.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

var Video = /*#__PURE__*/function (_Item) {
  function Video() {
    _classCallCheck(this, Video);
    return _callSuper(this, Video, arguments);
  }
  _inherits(Video, _Item);
  return _createClass(Video, [{
    key: "hide",
    value: function hide() {
      this.element.pause();
    }
  }]);
}(_core_item_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Video);

/***/ }),

/***/ "./src/js/language lazy recursive ^\\.\\/.*\\.js$":
/*!********************************************************************!*\
  !*** ./src/js/language/ lazy ^\.\/.*\.js$ strict namespace object ***!
  \********************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./en.js": "./src/js/language/en.js",
	"./tr.js": "./src/js/language/tr.js"
};

function webpackAsyncContext(req) {
	return Promise.resolve().then(() => {
		if(!__webpack_require__.o(map, req)) {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		}

		var id = map[req];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./src/js/language lazy recursive ^\\.\\/.*\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/js/language/en.js":
/*!*******************************!*\
  !*** ./src/js/language/en.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var lang = {
  close: 'Close'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lang);

/***/ }),

/***/ "./src/js/language/tr.js":
/*!*******************************!*\
  !*** ./src/js/language/tr.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var lang = {
  close: 'Kapat'
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (lang);

/***/ }),

/***/ "./src/js/module lazy recursive ^\\.\\/.*\\.js$":
/*!******************************************************************!*\
  !*** ./src/js/module/ lazy ^\.\/.*\.js$ strict namespace object ***!
  \******************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./control.js": "./src/js/module/control.js",
	"./fullscreen.js": "./src/js/module/fullscreen.js",
	"./fullscreen/div.js": "./src/js/module/fullscreen/div.js",
	"./fullscreen/img.js": "./src/js/module/fullscreen/img.js",
	"./message.js": "./src/js/module/message.js",
	"./mouse.js": "./src/js/module/mouse.js",
	"./thumbnail.js": "./src/js/module/thumbnail.js",
	"./thumbnail/preview/div.js": "./src/js/module/thumbnail/preview/div.js",
	"./thumbnail/preview/img.js": "./src/js/module/thumbnail/preview/img.js",
	"./thumbnail/preview/video.js": "./src/js/module/thumbnail/preview/video.js",
	"./thumbnail/thumbnail.js": "./src/js/module/thumbnail/thumbnail.js",
	"./thumbnail/type/basic.js": "./src/js/module/thumbnail/type/basic.js",
	"./thumbnail/type/dot.js": "./src/js/module/thumbnail/type/dot.js",
	"./thumbnail/type/slider.js": "./src/js/module/thumbnail/type/slider.js",
	"./zoom.js": "./src/js/module/zoom.js"
};

function webpackAsyncContext(req) {
	return Promise.resolve().then(() => {
		if(!__webpack_require__.o(map, req)) {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		}

		var id = map[req];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./src/js/module lazy recursive ^\\.\\/.*\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/js/module/control.js":
/*!**********************************!*\
  !*** ./src/js/module/control.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/module.js */ "./src/js/core/module.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

var Control = /*#__PURE__*/function (_Module) {
  function Control(sliderInstance) {
    var _this;
    _classCallCheck(this, Control);
    _this = _callSuper(this, Control, [sliderInstance, 'control']); // Yeni eklenen satır

    _this.buttonContainer = document.createElement('div');
    _this.buttonContainer.classList.add('minyatur-board-button-container');
    _this.sliderInstance.boardWrapper.appendChild(_this.buttonContainer);
    if (_this.sliderInstance.config.has('contentWidthLimit')) {
      _this.buttonContainer.style.maxWidth = _this.sliderInstance.config.get('contentWidthLimit');
    }
    _this.prevButton = document.createElement('div');
    _this.prevButton.classList.add('minyatur-board-prev-button');
    _this.buttonContainer.appendChild(_this.prevButton);
    _this.nextButton = document.createElement('div');
    _this.nextButton.classList.add('minyatur-board-next-button');
    _this.buttonContainer.appendChild(_this.nextButton);
    _this._prevItem = _this.prevItem.bind(_this);
    _this.prevButton.addEventListener('click', _this._prevItem);
    _this._nextItem = _this.nextItem.bind(_this);
    _this.nextButton.addEventListener('click', _this._nextItem);
    return _this;
  }
  _inherits(Control, _Module);
  return _createClass(Control, [{
    key: "prevItem",
    value: function prevItem(event) {
      this.sliderInstance.prevItem({
        source: 'button'
      });
      event.stopPropagation();
    }
  }, {
    key: "nextItem",
    value: function nextItem(event) {
      this.sliderInstance.nextItem({
        source: 'button'
      });
      event.stopPropagation();
    }
  }]);
}(_core_module_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Control);

/***/ }),

/***/ "./src/js/module/fullscreen lazy recursive ^\\.\\/.*\\.js$":
/*!*****************************************************************************!*\
  !*** ./src/js/module/fullscreen/ lazy ^\.\/.*\.js$ strict namespace object ***!
  \*****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./div.js": "./src/js/module/fullscreen/div.js",
	"./img.js": "./src/js/module/fullscreen/img.js"
};

function webpackAsyncContext(req) {
	return Promise.resolve().then(() => {
		if(!__webpack_require__.o(map, req)) {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		}

		var id = map[req];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./src/js/module/fullscreen lazy recursive ^\\.\\/.*\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/js/module/fullscreen.js":
/*!*************************************!*\
  !*** ./src/js/module/fullscreen.js ***!
  \*************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/module.js */ "./src/js/core/module.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var Fullscreen = /*#__PURE__*/function (_Module) {
  function Fullscreen(sliderInstance) {
    var _this;
    _classCallCheck(this, Fullscreen);
    _this = _callSuper(this, Fullscreen, [sliderInstance, 'fullscreen']);
    _defineProperty(_this, "instances", new WeakMap());
    _this._eventRouter = _this.eventRouter.bind(_this);
    _this.sliderInstance.boardWrapper.addEventListener('click', _this._eventRouter);
    _this._keyhandler = _this.keyhandler.bind(_this);
    return _this;
  }
  _inherits(Fullscreen, _Module);
  return _createClass(Fullscreen, [{
    key: "eventRouter",
    value: function () {
      var _eventRouter = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
        var importModule, ImportDefaultClass;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              this.activeSliderItem = this.sliderInstance.boardList.children[this.sliderInstance.activeIndex].firstElementChild;
              _context.prev = 1;
              _context.next = 4;
              return __webpack_require__("./src/js/module/fullscreen lazy recursive ^\\.\\/.*\\.js$")("./".concat(this.activeSliderItem.tagName.toLowerCase(), ".js"));
            case 4:
              importModule = _context.sent;
              ImportDefaultClass = importModule["default"];
              if (!this.mainWrapper) {
                this.init();
              }
              if (!this.instances.has(ImportDefaultClass)) {
                this.instances.set(ImportDefaultClass, new ImportDefaultClass(this.sliderInstance, this.mainWrapper));
              }
              this.activeClassInstance = this.instances.get(ImportDefaultClass);
              this.show();
              _context.next = 14;
              break;
            case 12:
              _context.prev = 12;
              _context.t0 = _context["catch"](1);
            case 14:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[1, 12]]);
      }));
      function eventRouter() {
        return _eventRouter.apply(this, arguments);
      }
      return eventRouter;
    }()
  }, {
    key: "init",
    value: function init() {
      this.containerId = 'id-' + Math.floor((1 + Math.random()) * Math.pow(0x10, 10)).toString(16).substring(1);
      this.mainWrapper = document.createElement('div');
      this.mainWrapper.id = this.containerId;
      this.mainWrapper.classList.add('minyatur-fullscreen-wrapper');
      this.mainWrapper.addEventListener('dblclick', function (event) {
        return event.preventDefault();
      });
      this.mainWrapper.addEventListener('click', function (event) {
        return event.preventDefault();
      });

      // Disable pich zoom
      this.mainWrapper.addEventListener('touchmove', function (event) {
        if (event.touches.length > 1) {
          event.preventDefault();
        }
      }, {
        passive: false
      });
      // this.mainWrapper.addEventListener('touchmove', event => event.preventDefault(), { passive: false });
      // this.mainWrapper.addEventListener('touchend', event => event.preventDefault(), { passive: false });

      this.backcloth = document.createElement('div');
      this.backcloth.classList.add('mfw-backcloth');
      this.mainWrapper.appendChild(this.backcloth);
      this.closeButtonContainer = document.createElement('div');
      this.closeButtonContainer.classList.add('mfw-close-button-container');
      this.mainWrapper.appendChild(this.closeButtonContainer);
      this._hide = this.hide.bind(this);
      this.closeButton = document.createElement('button');
      this.closeButton.innerHTML = '<i class="fa-solid fa-xmark fa-2x"></i>';
      // this.closeButton.addEventListener('touchstart', this._hide, { capture: false });
      this.closeButton.addEventListener('click', this._hide, {
        capture: false
      });
      this.closeButtonContainer.appendChild(this.closeButton);
      document.body.appendChild(this.mainWrapper);
    }
  }, {
    key: "show",
    value: function show() {
      document.addEventListener('keydown', this._keyhandler);
      document.body.style.overflow = 'hidden';
      this.mainWrapper.classList.remove('hidden');
      this.activeClassInstance.show();
    }
  }, {
    key: "hide",
    value: function hide() {
      document.removeEventListener('keydown', this._keyhandler);
      document.body.style.overflow = null;
      this.mainWrapper.classList.add('hidden');
      this.activeClassInstance.hide();
    }
  }, {
    key: "keyhandler",
    value: function keyhandler(event) {
      var isEscape = false;
      if ('key' in event) {
        isEscape = event.key === 'Escape' || event.key === 'Esc';
      } else {
        isEscape = event.keyCode === 27;
      }
      if (isEscape) {
        this.hide();
      }
    }
  }]);
}(_core_module_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Fullscreen);

/***/ }),

/***/ "./src/js/module/fullscreen/div.js":
/*!*****************************************!*\
  !*** ./src/js/module/fullscreen/div.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/module.js */ "./src/js/core/module.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

var Div = /*#__PURE__*/function (_Module) {
  function Div(sliderInstance, mainWrapper) {
    _classCallCheck(this, Div);
    return _callSuper(this, Div, [sliderInstance, 'fullscreen']);
  }
  _inherits(Div, _Module);
  return _createClass(Div, [{
    key: "init",
    value: function init() {
      // div wrapper
      this.divWrapper = document.createElement('div');
      this.divWrapper.classList.add('mfw-div-wrapper');

      // div container
      this.divContainer = document.createElement('div');
      this.divContainer.classList.add('mfw-div-container');
      this.divWrapper.appendChild(this.divContainer);

      // append to root
      this.sliderInstance.mainWrapper.appendChild(this.divWrapper);
    }
  }, {
    key: "show",
    value: function show() {
      if (this.divWrapper == null) {
        this.init();
      }
      while (this.divContainer.firstChild) {
        this.divContainer.removeChild(this.divContainer.lastChild);
      }
      var activeSliderItem = this.sliderInstance.boardList.children[this.sliderInstance.activeIndex].firstElementChild;
      var elementClone = activeSliderItem.cloneNode(true);

      // aspect ratio from settings
      var ratioPercent = this.sliderInstance.config.get('aspectRatio').split(':');
      var calculatedHeight = Math.abs(100 / ratioPercent[0] * ratioPercent[1]);
      this.divContainer.style.paddingTop = "".concat(calculatedHeight, "%");
      this.divContainer.appendChild(elementClone);
      this.divWrapper.classList.remove('hidden');
    }
  }, {
    key: "hide",
    value: function hide() {
      this.divWrapper.classList.add('hidden');
    }
  }]);
}(_core_module_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Div);

/***/ }),

/***/ "./src/js/module/fullscreen/img.js":
/*!*****************************************!*\
  !*** ./src/js/module/fullscreen/img.js ***!
  \*****************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/module.js */ "./src/js/core/module.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var Img = /*#__PURE__*/function (_Module) {
  function Img(sliderInstance, mainWrapper) {
    var _this;
    _classCallCheck(this, Img);
    _this = _callSuper(this, Img, [sliderInstance, 'fullscreen']);
    _defineProperty(_this, "transitionDuration", 500);
    _this.mainWrapper = mainWrapper;
    return _this;
  }
  _inherits(Img, _Module);
  return _createClass(Img, [{
    key: "init",
    value: function init() {
      this.imageWrapper = document.createElement('div');
      this.imageWrapper.classList.add('mfw-image-wrapper');
      this.imageContainer = document.createElement('div');
      this.imageContainer.classList.add('mfw-image-container');
      this.imageWrapper.appendChild(this.imageContainer);
      this.imageDiv = document.createElement('div');
      this.imageDiv.classList.add('nfw-image-item');
      this.imageContainer.appendChild(this.imageDiv);
      this.imageElem = document.createElement('img');
      this.imageElem.classList.add('nfw-image');
      this.imageElem.style.transform = null;
      this.imageDiv.appendChild(this.imageElem);
      this.imageInit();

      // Mouse event handler
      this._pointerDownHandler = this.pointerClickHandler.bind(this);
      this.imageElem.addEventListener('pointerdown', this._pointerDownHandler);
      this._pointerMoveHandler = this.pointerMoveHandler.bind(this);
      this.imageElem.addEventListener('pointermove', this._pointerMoveHandler);

      // Touch event handler
      this._wheelZoom = this.wheelZoom.bind(this);
      this.imageDiv.addEventListener('wheel', this._wheelZoom, {
        passive: false
      });
      this._imagePinchStart = this.imagePinchStart.bind(this);
      this.imageDiv.addEventListener('touchstart', this._imagePinchStart, {
        passive: true
      });
      this._imagePinchMove = this.imagePinchMove.bind(this);
      this.imageDiv.addEventListener('touchmove', this._imagePinchMove, {
        passive: true
      });
      this._imagePinchEnd = this.imagePinchEnd.bind(this);
      this.imageDiv.addEventListener('touchend', this._imagePinchEnd, {
        passive: true
      });
      this._doubleTapHandler = this.doubleTapHandler.bind(this);
      this.imageElem.addEventListener('touchstart', this._doubleTapHandler, {
        passive: true
      });

      // add to parent
      this.mainWrapper.appendChild(this.imageWrapper);
    }
  }, {
    key: "show",
    value: function show() {
      if (!this.imageWrapper) {
        this.init();
      } else {
        this.imageInit();
      }
      this.zoomOut();
      this.imageWrapper.classList.remove('hidden');
    }
  }, {
    key: "hide",
    value: function hide() {
      this.imageWrapper.classList.add('hidden');
      this.zoomOut();
    }
  }, {
    key: "imageInit",
    value: function imageInit() {
      var activeSliderItem = this.sliderInstance.boardList.children[this.sliderInstance.activeIndex].firstElementChild;
      this.imageElem.src = activeSliderItem.src;
      this.imageElem.style.scale = null;
      this.imageElem.style.width = null;
      this.imageElem.setAttribute('data-max-scale', '2');
      this.imageElem.setAttribute('data-max-width', "".concat(2 * activeSliderItem.naturalWidth));
    }
  }, {
    key: "zoomIn",
    value: function zoomIn(event) {
      if (event.pointerType && event.pointerType === 'mouse' || event.type && event.type === 'wheel') {
        this.imageDiv.classList.remove('pointer-touch');
        this.imageDiv.classList.add('pointer-mouse');
      } else {
        this.imageDiv.classList.remove('pointer-mouse');
        this.imageDiv.classList.add('pointer-touch');
      }
      this.imageElem.classList.remove('nfw-zoom-out');
      this.imageElem.classList.add('nfw-zoom-in');
    }
  }, {
    key: "zoomOut",
    value: function zoomOut() {
      this.imageElem.classList.remove('nfw-zoom-in');
      this.imageElem.classList.add('nfw-zoom-out');
    }
  }, {
    key: "pointerClickHandler",
    value: function pointerClickHandler(event) {
      if (event.pointerType !== 'mouse') {
        return;
      }
      if (this.imageElem.classList.contains('nfw-zoom-in')) {
        this.imageElem.style.scale = null;
        this.zoomOut();
        return;
      }
      this.imageElem.style.scale = this.imageElem.getAttribute('data-max-scale');
      this.zoomIn(event);
      var pos = this.estimatedScrollPosition(event);
      var scrollOptions = {
        top: pos.y,
        left: pos.x,
        behavior: 'instant'
      };
      this.imageDiv.scrollTo(scrollOptions);
    }
  }, {
    key: "pointerMoveHandler",
    value: function pointerMoveHandler(event) {
      if (event.pointerType !== 'mouse') {
        return;
      }
      this.imageElem.style.transitionDuration = null;
      this.imageElem.style.transitionTimingFunction = null;
      var pos = this.estimatedScrollPosition(event);
      var scrollOptions = {
        top: pos.y,
        left: pos.x,
        behavior: 'instant'
      };
      this.imageDiv.scrollTo(scrollOptions);
    }
  }, {
    key: "estimatedScrollPosition",
    value: function estimatedScrollPosition(event) {
      // console.log('estimatedScrollPosition');

      var clientX = event.clientX || event.touches[0].clientX || 0;
      var clientY = event.clientY || event.touches[0].clientY || 0;

      // https://codepen.io/pseudonynnous/pen/poMKRag
      var containerRect = this.imageDiv.getBoundingClientRect();
      var imageRect = this.imageElem.getBoundingClientRect();

      // X Axis
      var imageDivRatioX = (imageRect.width - containerRect.width) / imageRect.width;
      var posX = 0;
      if (imageDivRatioX > 0) {
        var clientXPositionRatioX = (clientX - containerRect.x) / this.imageDiv.clientWidth;
        var scrollableDistX = this.imageDiv.scrollWidth - this.imageDiv.clientWidth;
        var padding = Math.sin(clientXPositionRatioX - 0.5) * 2 * (this.imageDiv.clientWidth * 0.3);
        // padding = 0;

        posX = clientXPositionRatioX * scrollableDistX + padding;

        // We want the picture to come to an end before it gets close to the borders.
      }

      // Y Axis
      var imageDivRatioY = (imageRect.height - containerRect.height) / imageRect.height;
      var posY = 0;
      if (imageDivRatioY > 0) {
        var clientYPositionRatioY = (clientY - containerRect.y) / this.imageDiv.clientHeight;
        var scrollableDistY = this.imageDiv.scrollHeight - this.imageDiv.clientHeight;
        var _padding = Math.sin(clientYPositionRatioY - 0.5) * 2 * (this.imageDiv.clientHeight * 0.3);
        // padding = 0;

        posY = clientYPositionRatioY * scrollableDistY + _padding;

        // We want the picture to come to an end before it gets close to the borders.
      }
      return {
        x: posX,
        y: posY
      };
    }
  }, {
    key: "wheelZoom",
    value: function wheelZoom(event) {
      // console.log('wheelZoom');
      event.preventDefault();
      var newScale = parseFloat(this.imageElem.style.scale || 1) + parseFloat(0.1 * Math.sign(event.deltaY));
      if (newScale <= 1) {
        this.imageElem.style.scale = null;
        this.zoomOut();
        return;
      }
      if (newScale >= this.imageElem.getAttribute('data-max-scale')) {
        return;
      }
      var scrollOldHeight = this.imageDiv.scrollHeight;
      var scrollOldWidth = this.imageDiv.scrollWidth;
      this.imageElem.style.scale = newScale;
      this.zoomIn(event);

      // scroll
      var scrollDeltaY = this.imageDiv.scrollHeight - scrollOldHeight;
      var scrollDeltaX = this.imageDiv.scrollWidth - scrollOldWidth;
      var imageRect = this.imageElem.getBoundingClientRect();
      var touchPositionRatioX = (event.clientX - imageRect.x) / imageRect.width;
      var touchPositionRatioY = (event.clientY - imageRect.y) / imageRect.height;
      var scrollOptions = {
        top: scrollDeltaY * touchPositionRatioY,
        left: scrollDeltaX * touchPositionRatioX,
        behavior: 'instant'
      };
      this.imageDiv.scrollBy(scrollOptions);
    }
  }, {
    key: "imagePinchStart",
    value: function imagePinchStart(event) {
      // console.log('imagePinchStart');
      if (!event.touches || event.touches.length < 2) {
        return;
      }
      if (!this._touch) {
        this._touch = {};
      }
      if (!this._imageBaseWidth) {
        this._imageBaseWidth = this.imageElem.width;
      }

      // get rough estimate of distance between two fingers
      this._touch.startHypotMultiDim = Math.hypot(event.touches[0].pageX - event.touches[1].pageX, event.touches[0].pageY - event.touches[1].pageY);
      this._touch.midPointX = 0;
      for (var i = 0; i < event.touches.length; i++) {
        this._touch.midPointX += event.touches[i].pageX / event.touches.length;
      }
      this._touch.coordsMidY = 0;
      for (var _i = 0; _i < event.touches.length; _i++) {
        this._touch.coordsMidY += event.touches[_i].pageY / event.touches.length;
      }
    }
  }, {
    key: "imagePinchMove",
    value: function imagePinchMove(event) {
      // console.log('imagePinchMove');
      if (!event.touches || event.touches.length < 2) {
        return;
      }
      if (!this._touch) {
        this.imagePinchStart(event);
        return;
      }

      // get rough estimate of distance between two fingers
      var touchDeltaHypotMultiDim = Math.hypot(event.touches[0].pageX - event.touches[1].pageX, event.touches[0].pageY - event.touches[1].pageY);
      var widthStep = (touchDeltaHypotMultiDim - this._touch.startHypotMultiDim) * 2;
      // Update value for next event
      this._touch.startHypotMultiDim = touchDeltaHypotMultiDim;
      var newImageWidth = this.imageElem.width + widthStep;

      // basewidth check
      if (newImageWidth <= this._imageBaseWidth) {
        this._imageBaseWidth = null;
        this._touch = null;
        this.zoomOut();
        this.imagePinchStart(event);
        return;
      }

      // maxwidth check
      var maxWidth = this.imageElem.getAttribute('data-max-width');
      if (newImageWidth >= maxWidth) {
        return;
      }
      var scrollOldHeight = this.imageElem.height;
      var scrollOldWidth = this.imageElem.width;
      this.imageElem.style.width = "".concat(newImageWidth, "px");
      this.zoomIn(event);
      var scrollDeltaY = this.imageElem.height - scrollOldHeight;
      var scrollDeltaX = this.imageElem.width - scrollOldWidth;

      // scroll
      var imageRect = this.imageElem.getBoundingClientRect();

      // change the scroll according to the position of the midpoint when zooming. the effect of sliding fingers is minimal.
      var touchMidPointX = 0;
      for (var i = 0; i < event.touches.length; i++) {
        touchMidPointX += event.touches[i].pageX / event.touches.length;
      }
      var touchMidPointY = 0;
      for (var _i2 = 0; _i2 < event.touches.length; _i2++) {
        touchMidPointY += event.touches[_i2].pageY / event.touches.length;
      }
      var touchPositionRatioX = (touchMidPointX - imageRect.x) / imageRect.width;
      var touchPositionRatioY = (touchMidPointY - imageRect.y) / imageRect.height;

      // change the scroll along with changing the midpoint. It also adds the finger scrolling effect.
      var touchMidPointDeltaX = touchMidPointX - this._touch.midPointX;
      var touchMidPointDeltaY = touchMidPointY - this._touch.midPointY;

      // update midpoint value for next event
      this._touch.midPointX = touchMidPointX;
      this._touch.midPointY = touchMidPointY;

      // set scroll
      var scrollOptions = {
        top: scrollDeltaY * touchPositionRatioY - touchMidPointDeltaY,
        left: scrollDeltaX * touchPositionRatioX - touchMidPointDeltaX,
        behavior: 'instant'
      };
      this.imageDiv.scrollBy(scrollOptions);
    }
  }, {
    key: "imagePinchEnd",
    value: function imagePinchEnd() {
      this._touch = null;
    }
  }, {
    key: "doubleTapHandler",
    value: function doubleTapHandler(event) {
      var _this2 = this;
      if (!event.touches || event.touches.length > 1) {
        return;
      }
      // console.log('doubleTab');

      if (!this.tapped) {
        this.tapped = {
          x: event.pageX,
          y: event.pageY
        };
        this.tapTimeoutId = window.setTimeout(function () {
          _this2.tapped = null;
        }, 300);
        return;
      }
      var deltaX = event.pageX - this.tapped.x;
      var deltaY = event.pageY - this.tapped.y;
      if (deltaX > 20 || deltaY > 20) {
        return;
      }
      if (this.imageElem.classList.contains('nfw-zoom-in')) {
        this.imageElem.style.width = null;
        this.zoomOut();
        return;
      }
      this.imageElem.style.width = "".concat(this.imageElem.getAttribute('data-max-width'), "px");
      this.zoomIn(event);
      var pos = this.estimatedScrollPosition(event);
      var scrollOptions = {
        top: pos.y,
        left: pos.x,
        behavior: 'instant'
      };
      this.imageDiv.scrollTo(scrollOptions);
    }
  }]);
}(_core_module_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Img);

/***/ }),

/***/ "./src/js/module/message.js":
/*!**********************************!*\
  !*** ./src/js/module/message.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/module.js */ "./src/js/core/module.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var Message = /*#__PURE__*/function (_Module) {
  function Message(sliderInstance) {
    var _this;
    _classCallCheck(this, Message);
    _this = _callSuper(this, Message, [sliderInstance, 'message']);
    _defineProperty(_this, "messsage", '');
    return _this;
  }
  _inherits(Message, _Module);
  return _createClass(Message, [{
    key: "setMessage",
    value: function setMessage(messsage) {
      this.messsage = messsage;
    }
  }, {
    key: "getElement",
    value: function getElement() {
      // Wrapper'ı buraya sadece contentWidthLimit ekleyebilmek için koyuyoruz. contentWidthLimit kaldırılırsa wrapper'de kaldırılabilir.
      this.boardListItemMessageWrapper = document.createElement('div');
      this.boardListItemMessageWrapper.classList.add('minyatur-on-image-message-wrapper');
      if (this.sliderInstance.config.has('contentWidthLimit')) {
        this.boardListItemMessageWrapper.style.maxWidth = this.sliderInstance.config.get('contentWidthLimit');
      }
      this.boardListItemMessageContainer = document.createElement('div');
      this.boardListItemMessageContainer.classList.add('minyatur-on-image-message-container');
      this.boardListItemMessageContainer.appendChild(document.createTextNode(this.messsage));
      this.boardListItemMessageWrapper.appendChild(this.boardListItemMessageContainer);
      this._calculateFontSize = this.calculateFontSize.bind(this);
      window.addEventListener('resize', this._calculateFontSize);
      this.calculateFontSize();
      return this.boardListItemMessageWrapper;
    }
  }, {
    key: "calculateFontSize",
    value: function calculateFontSize() {
      var minimumLenght = Math.min(this.sliderInstance.boardWrapper.offsetWidth, this.sliderInstance.boardWrapper.offsetHeight);
      this.boardListItemMessageContainer.style.fontSize = "".concat(parseInt(minimumLenght) / 12, "px");
    }
  }]);
}(_core_module_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Message);

/***/ }),

/***/ "./src/js/module/mouse.js":
/*!********************************!*\
  !*** ./src/js/module/mouse.js ***!
  \********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/module.js */ "./src/js/core/module.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

var Mouse = /*#__PURE__*/function (_Module) {
  function Mouse(sliderInstance) {
    var _this;
    _classCallCheck(this, Mouse);
    _this = _callSuper(this, Mouse, [sliderInstance, 'mouse']);

    // Mouse Drag Handle
    _this._mouseDown = _this.mouseDown.bind(_this);
    _this.sliderInstance.boardList.addEventListener('mousedown', _this._mouseDown);
    _this._mouseStop = _this.mouseStop.bind(_this);
    _this.sliderInstance.boardList.addEventListener('mouseup', _this._mouseStop);
    _this.sliderInstance.boardList.addEventListener('mouseleave', _this._mouseStop);
    _this._mouseMove = _this.mouseMove.bind(_this);
    _this.sliderInstance.boardList.addEventListener('mousemove', _this._mouseMove);
    return _this;
  }
  _inherits(Mouse, _Module);
  return _createClass(Mouse, [{
    key: "mouseDown",
    value: function mouseDown(event) {
      event.preventDefault();
      if (this.mouseStopTimeOut) {
        window.clearTimeout(this.mouseStopTimeOut);
      }
      if (this.sliderInstance.boardListOnShift) {
        return;
      }
      this.sliderInstance.boardListOnShift = true;
      this.sliderInstance.boardList.style.scrollSnapType = 'none';
      this.sliderInstance.boardList.style.overflowX = 'hidden';
      this.mouseStartPageX = event.pageX;
      this.mouseStartScrollLeftX = this.sliderInstance.boardList.scrollLeft;
      this.mouseChangeRatio = this.sliderInstance.boardList.firstElementChild.offsetWidth / 5;
      this.isMouseDown = true;
    }
  }, {
    key: "mouseMove",
    value: function mouseMove(event) {
      event.preventDefault();
      if (!this.isMouseDown) {
        return;
      }

      // console.log('mouseMove');

      // Move vertcally
      var deltaX = this.mouseStartScrollLeftX - (event.pageX - this.mouseStartPageX);
      if (deltaX <= 0) {
        return;
      }
      var scrollOptions = {
        left: deltaX,
        top: 0,
        behavior: 'instant'
      };

      // console.log(this.isMouseDown);
      // console.log(scrollOptions.left);

      this.sliderInstance.boardList.scrollTo(scrollOptions);
    }
  }, {
    key: "mouseStop",
    value: function mouseStop(event) {
      var _this2 = this;
      event.preventDefault();
      this.sliderInstance.boardListOnShift = null;
      if (!this.isMouseDown) {
        return;
      }

      // console.log('mouseStop');

      // console.log(this.mouseStartScrollLeftX);
      // console.log(this.sliderInstance.boardList.scrollLeft);

      var totalDeltaX = this.mouseStartScrollLeftX - this.sliderInstance.boardList.scrollLeft;
      var change = this.mouseChangeRatio < Math.abs(totalDeltaX);
      this.isMouseDown = null;
      this.mouseStartPageX = null;
      this.mouseStartScrollLeftX = null;
      this.sliderInstance.boardList.style.overflowX = null;
      if (totalDeltaX > 0 && change) {
        this.sliderInstance.insertItem(this.sliderInstance.activeIndex - 1, {
          source: 'mouseStop'
        });
      }
      if (totalDeltaX < 0 && change) {
        this.sliderInstance.insertItem(this.sliderInstance.activeIndex + 1, {
          source: 'mouseStop'
        });
      }
      if (!change) {
        this.sliderInstance.insertItem(this.sliderInstance.activeIndex, {
          source: 'mouseStop'
        });
      }
      this.mouseStopTimeOut = window.setTimeout(function () {
        _this2.sliderInstance.boardList.style.scrollSnapType = null;
      }, 600);
    }
  }]);
}(_core_module_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Mouse);

/***/ }),

/***/ "./src/js/module/thumbnail.js":
/*!************************************!*\
  !*** ./src/js/module/thumbnail.js ***!
  \************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/module.js */ "./src/js/core/module.js");
/* harmony import */ var _thumbnail_type_basic_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./thumbnail/type/basic.js */ "./src/js/module/thumbnail/type/basic.js");
/* harmony import */ var _thumbnail_type_dot_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./thumbnail/type/dot.js */ "./src/js/module/thumbnail/type/dot.js");
/* harmony import */ var _thumbnail_type_slider_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./thumbnail/type/slider.js */ "./src/js/module/thumbnail/type/slider.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }




var Thumbnail = /*#__PURE__*/function (_Module) {
  function Thumbnail(sliderInstance) {
    var _this;
    _classCallCheck(this, Thumbnail);
    _this = _callSuper(this, Thumbnail, [sliderInstance, 'thumbnail']);

    // Load correct type from config
    var type = _this.config.get('type');

    // Delegate to corresponding thumbnail type
    if (type === 'basic') return _possibleConstructorReturn(_this, new _thumbnail_type_basic_js__WEBPACK_IMPORTED_MODULE_1__["default"](sliderInstance));
    if (type === 'slider') return _possibleConstructorReturn(_this, new _thumbnail_type_slider_js__WEBPACK_IMPORTED_MODULE_3__["default"](sliderInstance));

    // Default to dot
    return _possibleConstructorReturn(_this, new _thumbnail_type_dot_js__WEBPACK_IMPORTED_MODULE_2__["default"](sliderInstance));
  }
  _inherits(Thumbnail, _Module);
  return _createClass(Thumbnail);
}(_core_module_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Thumbnail);

/***/ }),

/***/ "./src/js/module/thumbnail/preview lazy recursive ^\\.\\/.*\\.js$":
/*!************************************************************************************!*\
  !*** ./src/js/module/thumbnail/preview/ lazy ^\.\/.*\.js$ strict namespace object ***!
  \************************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./div.js": "./src/js/module/thumbnail/preview/div.js",
	"./img.js": "./src/js/module/thumbnail/preview/img.js",
	"./video.js": "./src/js/module/thumbnail/preview/video.js"
};

function webpackAsyncContext(req) {
	return Promise.resolve().then(() => {
		if(!__webpack_require__.o(map, req)) {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		}

		var id = map[req];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = () => (Object.keys(map));
webpackAsyncContext.id = "./src/js/module/thumbnail/preview lazy recursive ^\\.\\/.*\\.js$";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/js/module/thumbnail/preview/div.js":
/*!************************************************!*\
  !*** ./src/js/module/thumbnail/preview/div.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Div = /*#__PURE__*/function () {
  function Div() {
    _classCallCheck(this, Div);
  }
  return _createClass(Div, null, [{
    key: "image",
    value: function image(sliderItem) {
      var thumbnailListItem = document.createElement('li');
      var thumbnailListItemContent = document.createElement('div');
      thumbnailListItemContent.style.width = '100%';
      thumbnailListItemContent.style.height = '100%';
      var itemContent = document.createElement('iframe');
      itemContent.style.width = '100%';
      itemContent.style.height = '100%';
      itemContent.style.border = 'none';
      itemContent.zIndex = '0';
      itemContent.srcdoc = "<html style=\"width: 100%; height: 100%; margin: 0; padding: 0; border: 0\"><body style=\"width: 100%; height: 100%; margin: 0; padding: 0; border: 0\">".concat(sliderItem.element.outerHTML, "</body></html>");

      // iframes not fired javascript events so we will add fake event listener.
      var fakeEventListener = document.createElement('div');
      fakeEventListener.style.position = 'absolute';
      fakeEventListener.style.width = '100%';
      fakeEventListener.style.height = '100%';
      fakeEventListener.style.top = '0';
      fakeEventListener.style.left = '0';
      fakeEventListener.zIndex = '1';
      thumbnailListItemContent.appendChild(itemContent);
      thumbnailListItemContent.appendChild(fakeEventListener);
      thumbnailListItem.appendChild(thumbnailListItemContent);
      return thumbnailListItem;
    }
  }, {
    key: "dot",
    value: function dot() {
      var thumbnailListItem = document.createElement('li');
      return thumbnailListItem;
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Div);

/***/ }),

/***/ "./src/js/module/thumbnail/preview/img.js":
/*!************************************************!*\
  !*** ./src/js/module/thumbnail/preview/img.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Img = /*#__PURE__*/function () {
  function Img() {
    _classCallCheck(this, Img);
  }
  return _createClass(Img, null, [{
    key: "image",
    value: function image(sliderItem) {
      var thumbnailListItem = document.createElement('li');
      var thumbnailListItemContent = document.createElement('img');
      thumbnailListItemContent.src = sliderItem.element.src;
      thumbnailListItem.appendChild(thumbnailListItemContent);
      return thumbnailListItem;
    }
  }, {
    key: "dot",
    value: function dot() {
      var thumbnailListItem = document.createElement('li');
      return thumbnailListItem;
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Img);

/***/ }),

/***/ "./src/js/module/thumbnail/preview/video.js":
/*!**************************************************!*\
  !*** ./src/js/module/thumbnail/preview/video.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Video = /*#__PURE__*/function () {
  function Video() {
    _classCallCheck(this, Video);
  }
  return _createClass(Video, null, [{
    key: "image",
    value: function image(sliderItem) {
      var thumbnailListItem = document.createElement('li');
      var thumbnailListItemContent = document.createElement('img');
      sliderItem.element.addEventListener('loadeddata', function () {
        var _this = this;
        var canvas = document.createElement('canvas');
        var thumbnailVideoRatioDiver = Math.max(sliderItem.element.videoWidth / thumbnailListItem.offsetWidth, sliderItem.element.videoHeight / thumbnailListItem.offsetHeight);
        canvas.width = sliderItem.element.videoWidth / thumbnailVideoRatioDiver;
        canvas.height = sliderItem.element.videoHeight / thumbnailVideoRatioDiver;
        var ctx = canvas.getContext('2d');
        // ctx.filter = 'sepia(100%)';

        this.__canplayFunc = function () {
          if (!_this.__canplayCounter) {
            _this.__canplayCounter = 0;
          }
          _this.__canplayCounter++;
          _this.currentTime = 0.1;
          ctx.drawImage(_this, 0, 0, canvas.width, canvas.height);
          thumbnailListItemContent.src = canvas.toDataURL('image/webp');
          if (_this.__canplayCounter > 2) {
            _this.currentTime = 0;
            _this.removeEventListener('canplay', _this.__canplayFunc);
            delete _this.__canplayCounter;
            delete _this.__canplayFunc;
          }
        };
        sliderItem.element.addEventListener('canplay', sliderItem.element.__canplayFunc);
      }, {
        once: true
      });
      thumbnailListItem.appendChild(thumbnailListItemContent);
      return thumbnailListItem;
    }
  }, {
    key: "dot",
    value: function dot() {
      var thumbnailListItem = document.createElement('li');
      return thumbnailListItem;
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Video);

/***/ }),

/***/ "./src/js/module/thumbnail/thumbnail.js":
/*!**********************************************!*\
  !*** ./src/js/module/thumbnail/thumbnail.js ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core/module.js */ "./src/js/core/module.js");
function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return e; }; var t, e = {}, r = Object.prototype, n = r.hasOwnProperty, o = Object.defineProperty || function (t, e, r) { t[e] = r.value; }, i = "function" == typeof Symbol ? Symbol : {}, a = i.iterator || "@@iterator", c = i.asyncIterator || "@@asyncIterator", u = i.toStringTag || "@@toStringTag"; function define(t, e, r) { return Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }), t[e]; } try { define({}, ""); } catch (t) { define = function define(t, e, r) { return t[e] = r; }; } function wrap(t, e, r, n) { var i = e && e.prototype instanceof Generator ? e : Generator, a = Object.create(i.prototype), c = new Context(n || []); return o(a, "_invoke", { value: makeInvokeMethod(t, r, c) }), a; } function tryCatch(t, e, r) { try { return { type: "normal", arg: t.call(e, r) }; } catch (t) { return { type: "throw", arg: t }; } } e.wrap = wrap; var h = "suspendedStart", l = "suspendedYield", f = "executing", s = "completed", y = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var p = {}; define(p, a, function () { return this; }); var d = Object.getPrototypeOf, v = d && d(d(values([]))); v && v !== r && n.call(v, a) && (p = v); var g = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(p); function defineIteratorMethods(t) { ["next", "throw", "return"].forEach(function (e) { define(t, e, function (t) { return this._invoke(e, t); }); }); } function AsyncIterator(t, e) { function invoke(r, o, i, a) { var c = tryCatch(t[r], t, o); if ("throw" !== c.type) { var u = c.arg, h = u.value; return h && "object" == _typeof(h) && n.call(h, "__await") ? e.resolve(h.__await).then(function (t) { invoke("next", t, i, a); }, function (t) { invoke("throw", t, i, a); }) : e.resolve(h).then(function (t) { u.value = t, i(u); }, function (t) { return invoke("throw", t, i, a); }); } a(c.arg); } var r; o(this, "_invoke", { value: function value(t, n) { function callInvokeWithMethodAndArg() { return new e(function (e, r) { invoke(t, n, e, r); }); } return r = r ? r.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(e, r, n) { var o = h; return function (i, a) { if (o === f) throw Error("Generator is already running"); if (o === s) { if ("throw" === i) throw a; return { value: t, done: !0 }; } for (n.method = i, n.arg = a;;) { var c = n.delegate; if (c) { var u = maybeInvokeDelegate(c, n); if (u) { if (u === y) continue; return u; } } if ("next" === n.method) n.sent = n._sent = n.arg;else if ("throw" === n.method) { if (o === h) throw o = s, n.arg; n.dispatchException(n.arg); } else "return" === n.method && n.abrupt("return", n.arg); o = f; var p = tryCatch(e, r, n); if ("normal" === p.type) { if (o = n.done ? s : l, p.arg === y) continue; return { value: p.arg, done: n.done }; } "throw" === p.type && (o = s, n.method = "throw", n.arg = p.arg); } }; } function maybeInvokeDelegate(e, r) { var n = r.method, o = e.iterator[n]; if (o === t) return r.delegate = null, "throw" === n && e.iterator["return"] && (r.method = "return", r.arg = t, maybeInvokeDelegate(e, r), "throw" === r.method) || "return" !== n && (r.method = "throw", r.arg = new TypeError("The iterator does not provide a '" + n + "' method")), y; var i = tryCatch(o, e.iterator, r.arg); if ("throw" === i.type) return r.method = "throw", r.arg = i.arg, r.delegate = null, y; var a = i.arg; return a ? a.done ? (r[e.resultName] = a.value, r.next = e.nextLoc, "return" !== r.method && (r.method = "next", r.arg = t), r.delegate = null, y) : a : (r.method = "throw", r.arg = new TypeError("iterator result is not an object"), r.delegate = null, y); } function pushTryEntry(t) { var e = { tryLoc: t[0] }; 1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e); } function resetTryEntry(t) { var e = t.completion || {}; e.type = "normal", delete e.arg, t.completion = e; } function Context(t) { this.tryEntries = [{ tryLoc: "root" }], t.forEach(pushTryEntry, this), this.reset(!0); } function values(e) { if (e || "" === e) { var r = e[a]; if (r) return r.call(e); if ("function" == typeof e.next) return e; if (!isNaN(e.length)) { var o = -1, i = function next() { for (; ++o < e.length;) if (n.call(e, o)) return next.value = e[o], next.done = !1, next; return next.value = t, next.done = !0, next; }; return i.next = i; } } throw new TypeError(_typeof(e) + " is not iterable"); } return GeneratorFunction.prototype = GeneratorFunctionPrototype, o(g, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), o(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, u, "GeneratorFunction"), e.isGeneratorFunction = function (t) { var e = "function" == typeof t && t.constructor; return !!e && (e === GeneratorFunction || "GeneratorFunction" === (e.displayName || e.name)); }, e.mark = function (t) { return Object.setPrototypeOf ? Object.setPrototypeOf(t, GeneratorFunctionPrototype) : (t.__proto__ = GeneratorFunctionPrototype, define(t, u, "GeneratorFunction")), t.prototype = Object.create(g), t; }, e.awrap = function (t) { return { __await: t }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, c, function () { return this; }), e.AsyncIterator = AsyncIterator, e.async = function (t, r, n, o, i) { void 0 === i && (i = Promise); var a = new AsyncIterator(wrap(t, r, n, o), i); return e.isGeneratorFunction(r) ? a : a.next().then(function (t) { return t.done ? t.value : a.next(); }); }, defineIteratorMethods(g), define(g, u, "Generator"), define(g, a, function () { return this; }), define(g, "toString", function () { return "[object Generator]"; }), e.keys = function (t) { var e = Object(t), r = []; for (var n in e) r.push(n); return r.reverse(), function next() { for (; r.length;) { var t = r.pop(); if (t in e) return next.value = t, next.done = !1, next; } return next.done = !0, next; }; }, e.values = values, Context.prototype = { constructor: Context, reset: function reset(e) { if (this.prev = 0, this.next = 0, this.sent = this._sent = t, this.done = !1, this.delegate = null, this.method = "next", this.arg = t, this.tryEntries.forEach(resetTryEntry), !e) for (var r in this) "t" === r.charAt(0) && n.call(this, r) && !isNaN(+r.slice(1)) && (this[r] = t); }, stop: function stop() { this.done = !0; var t = this.tryEntries[0].completion; if ("throw" === t.type) throw t.arg; return this.rval; }, dispatchException: function dispatchException(e) { if (this.done) throw e; var r = this; function handle(n, o) { return a.type = "throw", a.arg = e, r.next = n, o && (r.method = "next", r.arg = t), !!o; } for (var o = this.tryEntries.length - 1; o >= 0; --o) { var i = this.tryEntries[o], a = i.completion; if ("root" === i.tryLoc) return handle("end"); if (i.tryLoc <= this.prev) { var c = n.call(i, "catchLoc"), u = n.call(i, "finallyLoc"); if (c && u) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } else if (c) { if (this.prev < i.catchLoc) return handle(i.catchLoc, !0); } else { if (!u) throw Error("try statement without catch or finally"); if (this.prev < i.finallyLoc) return handle(i.finallyLoc); } } } }, abrupt: function abrupt(t, e) { for (var r = this.tryEntries.length - 1; r >= 0; --r) { var o = this.tryEntries[r]; if (o.tryLoc <= this.prev && n.call(o, "finallyLoc") && this.prev < o.finallyLoc) { var i = o; break; } } i && ("break" === t || "continue" === t) && i.tryLoc <= e && e <= i.finallyLoc && (i = null); var a = i ? i.completion : {}; return a.type = t, a.arg = e, i ? (this.method = "next", this.next = i.finallyLoc, y) : this.complete(a); }, complete: function complete(t, e) { if ("throw" === t.type) throw t.arg; return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), y; }, finish: function finish(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.finallyLoc === t) return this.complete(r.completion, r.afterLoc), resetTryEntry(r), y; } }, "catch": function _catch(t) { for (var e = this.tryEntries.length - 1; e >= 0; --e) { var r = this.tryEntries[e]; if (r.tryLoc === t) { var n = r.completion; if ("throw" === n.type) { var o = n.arg; resetTryEntry(r); } return o; } } throw Error("illegal catch attempt"); }, delegateYield: function delegateYield(e, r, n) { return this.delegate = { iterator: values(e), resultName: r, nextLoc: n }, "next" === this.method && (this.arg = t), y; } }, e; }
function _createForOfIteratorHelper(r, e) { var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (!t) { if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e && r && "number" == typeof r.length) { t && (r = t); var _n = 0, F = function F() {}; return { s: F, n: function n() { return _n >= r.length ? { done: !0 } : { done: !1, value: r[_n++] }; }, e: function e(r) { throw r; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var o, a = !0, u = !1; return { s: function s() { t = t.call(r); }, n: function n() { var r = t.next(); return a = r.done, r; }, e: function e(r) { u = !0, o = r; }, f: function f() { try { a || null == t["return"] || t["return"](); } finally { if (u) throw o; } } }; }
function _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }
function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _iterableToArray(r) { if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r); }
function _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }
function asyncGeneratorStep(n, t, e, r, o, a, c) { try { var i = n[a](c), u = i.value; } catch (n) { return void e(n); } i.done ? t(u) : Promise.resolve(u).then(r, o); }
function _asyncToGenerator(n) { return function () { var t = this, e = arguments; return new Promise(function (r, o) { var a = n.apply(t, e); function _next(n) { asyncGeneratorStep(a, r, o, _next, _throw, "next", n); } function _throw(n) { asyncGeneratorStep(a, r, o, _next, _throw, "throw", n); } _next(void 0); }); }; }
function _slicedToArray(r, e) { return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest(); }
function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }
function _unsupportedIterableToArray(r, a) { if (r) { if ("string" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }
function _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }
function _iterableToArrayLimit(r, l) { var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"]; if (null != t) { var e, n, i, u, a = [], f = !0, o = !1; try { if (i = (t = t.call(r)).next, 0 === l) { if (Object(t) !== t) return; f = !1; } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0); } catch (r) { o = !0, n = r; } finally { try { if (!f && null != t["return"] && (u = t["return"](), Object(u) !== u)) return; } finally { if (o) throw n; } } return a; } }
function _arrayWithHoles(r) { if (Array.isArray(r)) return r; }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

var Thumbnail = /*#__PURE__*/function (_Module) {
  function Thumbnail(sliderInstance) {
    var _this;
    _classCallCheck(this, Thumbnail);
    _this = _callSuper(this, Thumbnail, [sliderInstance, 'thumbnail']);

    // Step 1: Load from JS config (config.thumbnail)
    var jsConfig = sliderInstance.config.get('thumbnail');
    if (jsConfig && _typeof(jsConfig) === 'object') {
      Object.entries(jsConfig).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
          key = _ref2[0],
          value = _ref2[1];
        _this.config.set(key, value);
      });
    }

    // Step 2: Override/supplement with HTML attributes (data-thumbnail-*)
    var nodeMap = _this.sliderInstance.mainContainer.attributes;
    for (var i = nodeMap.length - 1; i >= 0; i--) {
      var attributeName = nodeMap[i].name;
      if (attributeName.startsWith('data-thumbnail-')) {
        var configName = attributeName.replace('data-thumbnail-', '').split('-').map(function (part, index) {
          return index === 0 ? part : part.charAt(0).toUpperCase() + part.slice(1);
        }).join('');
        _this.config.set(configName, nodeMap[i].value);
      }
    }

    // External container
    if (_this.config.has('id') && document.getElementById(_this.config.get('id'))) {
      _this.thumbnailWrapper = document.getElementById(_this.config.get('id'));
      while (_this.thumbnailWrapper.firstChild) {
        _this.thumbnailWrapper.removeChild(_this.thumbnailWrapper.lastChild);
      }
    } else {
      _this.thumbnailWrapper = document.createElement('div');
      _this.sliderInstance.mainContainer.appendChild(_this.thumbnailWrapper);
    }
    return _this;
  }
  _inherits(Thumbnail, _Module);
  return _createClass(Thumbnail, [{
    key: "append",
    value: function append() {
      return true;
    }
  }, {
    key: "insertItem",
    value: function insertItem(index) {
      [].forEach.call(this.thumbnailItems, function (item) {
        if (item.classList.contains('active')) {
          item.classList.remove('active');
        }
      });
      if (this.thumbnailItems[index]) {
        this.thumbnailItems[index].classList.add('active');
      }
    }
  }, {
    key: "clickHandler",
    value: function clickHandler(attachedElem, event) {
      var index = [].indexOf.call(this.thumbnailItems, attachedElem);
      if (index < 0) return;
      this.insertItem(index);
      this.sliderInstance.insertItem(index, {
        behavior: 'auto'
      });
    }
  }, {
    key: "previewGenerator",
    value: function () {
      var _previewGenerator = _asyncToGenerator(/*#__PURE__*/_regeneratorRuntime().mark(function _callee(source) {
        var sliderItems, _iterator, _step, sliderItem, importModule, ImportModuleClass, thumbnailListItem, _thumbnailListItem, thumbnailListItemContent;
        return _regeneratorRuntime().wrap(function _callee$(_context) {
          while (1) switch (_context.prev = _context.next) {
            case 0:
              // add slider items to thumbnail
              sliderItems = _toConsumableArray(this.sliderInstance.sliderItems.values());
              _iterator = _createForOfIteratorHelper(sliderItems);
              _context.prev = 2;
              _iterator.s();
            case 4:
              if ((_step = _iterator.n()).done) {
                _context.next = 29;
                break;
              }
              sliderItem = _step.value;
              _context.prev = 6;
              _context.next = 9;
              return __webpack_require__("./src/js/module/thumbnail/preview lazy recursive ^\\.\\/.*\\.js$")("./".concat(sliderItem.element.tagName.toLowerCase(), ".js"));
            case 9:
              importModule = _context.sent;
              ImportModuleClass = importModule["default"];
              thumbnailListItem = ImportModuleClass[source](sliderItem);
              this._clickHandler = this.clickHandler.bind(this, thumbnailListItem);
              thumbnailListItem.addEventListener('click', this._clickHandler);
              this.thumbnailList.appendChild(thumbnailListItem);
              _context.next = 27;
              break;
            case 17:
              _context.prev = 17;
              _context.t0 = _context["catch"](6);
              console.warn('Some slider items preview not showing in thumbnail. Item without preview:', sliderItem.element);
              _thumbnailListItem = document.createElement('li');
              thumbnailListItemContent = document.createElement('div');
              thumbnailListItemContent.classList.add('blank-item');
              thumbnailListItemContent.style.width = '100%';
              thumbnailListItemContent.style.height = '100%';
              _thumbnailListItem.appendChild(thumbnailListItemContent);
              this.thumbnailList.appendChild(_thumbnailListItem);
            case 27:
              _context.next = 4;
              break;
            case 29:
              _context.next = 34;
              break;
            case 31:
              _context.prev = 31;
              _context.t1 = _context["catch"](2);
              _iterator.e(_context.t1);
            case 34:
              _context.prev = 34;
              _iterator.f();
              return _context.finish(34);
            case 37:
            case "end":
              return _context.stop();
          }
        }, _callee, this, [[2, 31, 34, 37], [6, 17]]);
      }));
      function previewGenerator(_x) {
        return _previewGenerator.apply(this, arguments);
      }
      return previewGenerator;
    }()
  }]);
}(_core_module_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Thumbnail);

/***/ }),

/***/ "./src/js/module/thumbnail/type/basic.js":
/*!***********************************************!*\
  !*** ./src/js/module/thumbnail/type/basic.js ***!
  \***********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _thumbnail_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../thumbnail.js */ "./src/js/module/thumbnail/thumbnail.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

var Basic = /*#__PURE__*/function (_Thumbnail) {
  function Basic(sliderInstance) {
    var _this;
    _classCallCheck(this, Basic);
    _this = _callSuper(this, Basic, [sliderInstance]);
    _this.thumbnailWrapper.classList.add('minyatur-thumbnail-basic');
    _this.thumbnailList = document.createElement('ul');
    _this.thumbnailList.positionX = 0;
    _this.thumbnailWrapper.appendChild(_this.thumbnailList);
    _this.thumbnailItems = _this.thumbnailList.children;
    _this.previewGenerator('image');
    return _possibleConstructorReturn(_this, _this);
  }
  _inherits(Basic, _Thumbnail);
  return _createClass(Basic);
}(_thumbnail_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Basic);

/***/ }),

/***/ "./src/js/module/thumbnail/type/dot.js":
/*!*********************************************!*\
  !*** ./src/js/module/thumbnail/type/dot.js ***!
  \*********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _thumbnail_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../thumbnail.js */ "./src/js/module/thumbnail/thumbnail.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

var Dot = /*#__PURE__*/function (_Thumbnail) {
  function Dot(sliderInstance) {
    var _this;
    _classCallCheck(this, Dot);
    _this = _callSuper(this, Dot, [sliderInstance]);
    _this.thumbnailWrapper.classList.add('minyatur-thumbnail-dot');
    _this.thumbnailList = document.createElement('ul');
    _this.thumbnailWrapper.appendChild(_this.thumbnailList);
    _this.thumbnailItems = _this.thumbnailList.children;
    _this.previewGenerator('dot');
    return _possibleConstructorReturn(_this, _this);
  }
  _inherits(Dot, _Thumbnail);
  return _createClass(Dot);
}(_thumbnail_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Dot);

/***/ }),

/***/ "./src/js/module/thumbnail/type/slider.js":
/*!************************************************!*\
  !*** ./src/js/module/thumbnail/type/slider.js ***!
  \************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _thumbnail_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../thumbnail.js */ "./src/js/module/thumbnail/thumbnail.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var Slider = /*#__PURE__*/function (_Thumbnail) {
  function Slider(sliderInstance) {
    var _this;
    _classCallCheck(this, Slider);
    _this = _callSuper(this, Slider, [sliderInstance]);
    _defineProperty(_this, "x", void 0);
    _this.animating = false;
    _this.scrollPaddingMultiplier = {
      right: 1.7,
      left: 0.5
    };
    _this.thumbnailWrapper.classList.add('minyatur-thumbnail-snap');
    _this.thumbnailContainer = document.createElement('div');
    _this.thumbnailWrapper.appendChild(_this.thumbnailContainer);
    _this.thumbnailList = document.createElement('ul');
    _this.thumbnailContainer.appendChild(_this.thumbnailList);
    _this.thumbnailItems = _this.thumbnailList.children;
    _this.previewGenerator('image');
    _this.thumbnailBackwardButton = document.createElement('div');
    _this.thumbnailBackwardButton.classList.add('minyatur-thumbnail-slider-backward-button');
    _this.thumbnailContainer.appendChild(_this.thumbnailBackwardButton);
    _this._slidePrev = _this.slidePrev.bind(_this);
    _this.thumbnailBackwardButton.addEventListener('click', _this._slidePrev);
    _this.thumbnailForwardButton = document.createElement('div');
    _this.thumbnailForwardButton.classList.add('minyatur-thumbnail-slider-forward-button');
    _this.thumbnailContainer.appendChild(_this.thumbnailForwardButton);
    _this._slideNext = _this.slideNext.bind(_this);
    _this.thumbnailForwardButton.addEventListener('click', _this._slideNext);
    return _possibleConstructorReturn(_this, _this);
  }
  _inherits(Slider, _Thumbnail);
  return _createClass(Slider, [{
    key: "insertItem",
    value: function insertItem(index) {
      if (!this.thumbnailItems || this.thumbnailItems.length === 0) {
        return;
      }
      var lastIndex = this.thumbnailItems.length - 1;
      index = Math.max(0, Math.min(index, lastIndex));
      [].forEach.call(this.thumbnailItems, function (item) {
        if (item.classList.contains('active')) {
          item.classList.remove('active');
        }
      });
      if (this.thumbnailItems[index]) {
        this.thumbnailItems[index].classList.add('active');
      }

      // Right Scroll
      var containerScrollLeftToRightEdge = this.thumbnailList.clientWidth + this.thumbnailList.scrollLeft;
      // *1.5 for: if he has a sibling next to him, let him appear.
      var itemRightFromParentLeftWithHalfSibling = this.thumbnailItems[index].offsetLeft + this.thumbnailItems[index].offsetWidth * 1.7;
      if (itemRightFromParentLeftWithHalfSibling > containerScrollLeftToRightEdge) {
        // the right edge of the item aligns with the right edge of the container
        var scrollDelta = itemRightFromParentLeftWithHalfSibling - containerScrollLeftToRightEdge;
        this.thumbnailList.scrollBy(scrollDelta, 0);
      }

      // Left Scroll
      // *0.5 for: if he has a sibling next to him, let him appear.
      var containerScrollLeftWithHalfSibling = this.thumbnailList.scrollLeft + this.thumbnailItems[index].offsetWidth * 0.7;
      if (containerScrollLeftWithHalfSibling > this.thumbnailItems[index].offsetLeft) {
        // the left edge of the item aligns with the left edge of the container
        var _scrollDelta = this.thumbnailItems[index].offsetLeft - containerScrollLeftWithHalfSibling;
        this.thumbnailList.scrollBy(_scrollDelta, 0);
      }
    }
  }, {
    key: "slidePrev",
    value: function slidePrev() {
      if (this.thumbnailList.scrollLeft < 1) {
        this.prevEndMotion();
        return;
      }
      var scrollDelta = -(this.thumbnailList.offsetWidth - this.thumbnailItems[0].offsetWidth);
      this.thumbnailList.scrollBy(scrollDelta, 0);
    }
  }, {
    key: "slideNext",
    value: function slideNext() {
      if (this.thumbnailList.offsetWidth + this.thumbnailList.scrollLeft >= this.thumbnailList.scrollWidth) {
        this.nextEndMotion();
        return;
      }
      var scrollDelta = this.thumbnailList.offsetWidth - this.thumbnailItems[0].offsetWidth;
      this.thumbnailList.scrollBy(scrollDelta, 0);
    }
  }, {
    key: "prevEndMotion",
    value: function prevEndMotion() {
      this.endMotion('5vw');
    }
  }, {
    key: "nextEndMotion",
    value: function nextEndMotion() {
      this.endMotion('-5vw');
    }
  }, {
    key: "endMotion",
    value: function endMotion(positionWithPx) {
      var _this2 = this;
      if (this.animating != null) {
        return;
      }
      this.thumbnailList.style.transition = 'all 150ms ease 50ms';
      this.animating = true;
      window.setTimeout(function () {
        _this2.thumbnailList.style.transform = "translateX(".concat(positionWithPx, ")");
      }, 0);
      this.thumbnailList.addEventListener('transitionend', function () {
        _this2.thumbnailList.style.transform = 'translateX(0px)';
        _this2.thumbnailList.addEventListener('transitionend', function () {
          _this2.thumbnailList.style.transition = null;
          _this2.thumbnailList.style.transform = null;
          _this2.animating = null;
        }, {
          once: true
        });
      }, {
        once: true
      });
    }
  }]);
}(_thumbnail_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Slider);

/***/ }),

/***/ "./src/js/module/zoom.js":
/*!*******************************!*\
  !*** ./src/js/module/zoom.js ***!
  \*******************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_module_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core/module.js */ "./src/js/core/module.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

var Zoom = /*#__PURE__*/function (_Module) {
  function Zoom(sliderInstance) {
    var _this;
    _classCallCheck(this, Zoom);
    _this = _callSuper(this, Zoom, [sliderInstance, 'zoom']);
    _this.resultContainer = document.createElement('div');
    _this.resultContainer.classList.add('minyatur-zoom-result');
    _this.lens = document.createElement('div');
    _this.lens.classList.add('minyatur-zoom-lens');
    _this.sliderInstance.boardWrapper.appendChild(_this.lens);
    _this._zoomIn = _this.zoomIn.bind(_this);
    _this.sliderInstance.boardWrapper.addEventListener('mouseover', _this._zoomIn);
    _this._zoomOut = _this.zoomOut.bind(_this);
    _this.sliderInstance.boardWrapper.addEventListener('mouseleave', _this._zoomOut);
    return _this;
  }
  _inherits(Zoom, _Module);
  return _createClass(Zoom, [{
    key: "zoomIn",
    value: function zoomIn(event) {
      if (this.eventAdded) {
        return;
      }

      // Find the free range of screen for insert result window.
      this.activeImageContainer = this.sliderInstance.boardList.children[this.sliderInstance.activeIndex];
      this.activeImage = this.activeImageContainer.querySelector('img');
      if (!this.activeImage) {
        return;
      }
      if (this.activeImage.naturalWidth <= this.getRenderedSize().width && this.activeImage.naturalHeight <= this.getRenderedSize().height) {
        return;
      }
      this.eventAdded = true;
      this.sizingElements();

      // Execute a function when someone moves the cursor over the image, or the lens:
      this._moveLens = this.moveLens.bind(this);
      this.sliderInstance.boardWrapper.addEventListener('mousemove', this._moveLens);
    }
  }, {
    key: "zoomOut",
    value: function zoomOut() {
      var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
      this.eventAdded = null;
      this.sliderInstance.boardWrapper.removeEventListener('mousemove', this._moveLens);
      this.lens.style = null;
      this.resultContainer.style = null;
    }
  }, {
    key: "insertItem",
    value: function insertItem() {
      this.zoomOut();
    }
  }, {
    key: "moveLens",
    value: function moveLens(e) {
      // Prevent any other actions that may occur when moving over the image
      e.preventDefault();
      if (e.target !== this.lens && e.target !== this.activeImage && e.target !== this.activeImageContainer) {
        this.zoomOut();
      }
      var imageRelativeToBoardWrapperX = (this.sliderInstance.boardWrapper.offsetWidth - this.getRenderedSize().width) / 2;
      var imageRelativeToBoardWrapperY = (this.sliderInstance.boardWrapper.offsetHeight - this.getRenderedSize().height) / 2;
      if (this.config.has('expandedZoom') && this.config.get('expandedZoom') === true) {
        imageRelativeToBoardWrapperX = 0;
        imageRelativeToBoardWrapperY = 0;
      }

      // Get the cursor x and y positions:
      var pos = this.getCursorPositionRelativeToBoardWrapper(e);

      // Find center position of the lens:
      var x = pos.x - this.lens.offsetWidth / 2;
      var y = pos.y - this.lens.offsetHeight / 2;

      // Prevent the lens from being positioned outside the image:
      if (x > this.sliderInstance.boardWrapper.offsetWidth - this.lens.offsetWidth - imageRelativeToBoardWrapperX) {
        x = this.sliderInstance.boardWrapper.offsetWidth - this.lens.offsetWidth - imageRelativeToBoardWrapperX;
      }
      if (x < imageRelativeToBoardWrapperX) {
        x = imageRelativeToBoardWrapperX;
      }
      if (y > this.sliderInstance.boardWrapper.offsetHeight - this.lens.offsetHeight - imageRelativeToBoardWrapperY) {
        y = this.sliderInstance.boardWrapper.offsetHeight - this.lens.offsetHeight - imageRelativeToBoardWrapperY;
      }
      if (y < imageRelativeToBoardWrapperY) {
        y = imageRelativeToBoardWrapperY;
      }

      // Set the position of the lens:
      this.lens.style.left = "".concat(x, "px");
      this.lens.style.top = "".concat(y, "px");

      // If image small than container, center the image also in result, because image centered at slider
      var backgroundCenterAlignmentDistanceX = (this.sliderInstance.boardWrapper.offsetWidth - this.getRenderedSize().width) / 2 * this.containerLensRatioX;
      var backgroundCenterAlignmentDistanceY = (this.sliderInstance.boardWrapper.offsetHeight - this.getRenderedSize().height) / 2 * this.containerLensRatioY;

      // Display what the lens "sees":
      this.resultContainer.style.backgroundPosition = "".concat(backgroundCenterAlignmentDistanceX - x * this.containerLensRatioX, "px ").concat(backgroundCenterAlignmentDistanceY - y * this.containerLensRatioY, "px");
      this.resultContainer.style.visibility = 'visible';
      this.lens.style.visibility = 'visible';
    }
  }, {
    key: "sizingElements",
    value: function sizingElements() {
      document.body.appendChild(this.resultContainer);
      this.resultContainer.style.backgroundImage = "url(".concat(this.activeImage.src, ")");
      var sliderRect = this.sliderInstance.mainContainer.getBoundingClientRect();
      var padding = 10;
      var top, left, width, height;
      var spaceWidthAtLeftOfSliderContainer = sliderRect.left;
      height = document.documentElement.clientHeight - padding - sliderRect.top;
      width = spaceWidthAtLeftOfSliderContainer - padding * 2;
      top = sliderRect.top + window.scrollY;
      left = sliderRect.left + sliderRect.width + window.scrollX + padding;
      var spaceWidthAtRightOfSliderContainer = document.documentElement.clientWidth - (sliderRect.left + sliderRect.width);
      if (spaceWidthAtRightOfSliderContainer > spaceWidthAtLeftOfSliderContainer) {
        height = document.documentElement.clientHeight - padding - sliderRect.top;
        width = spaceWidthAtRightOfSliderContainer - padding * 2;
        top = sliderRect.top + window.scrollY;
        left = window.scrollX + padding;
      }
      var spaceHeightAtTopOfSliderContainer = sliderRect.top;
      if (spaceHeightAtTopOfSliderContainer > spaceWidthAtRightOfSliderContainer) {
        height = spaceHeightAtTopOfSliderContainer - padding * 2;
        width = document.documentElement.clientWidth - padding - sliderRect.left;
        top = sliderRect.top + window.scrollY - height - padding;
        left = sliderRect.left + window.scrollX;
      }
      var spaceHeightAtBottomOfSliderContainer = document.documentElement.clientHeight - sliderRect.bottom;
      if (spaceHeightAtBottomOfSliderContainer > spaceHeightAtTopOfSliderContainer) {
        height = spaceHeightAtBottomOfSliderContainer - padding * 2;
        width = document.documentElement.clientWidth - padding - sliderRect.left;
        top = sliderRect.bottom + window.scrollY + padding;
        left = sliderRect.left + window.scrollX;
      }
      var maxZoomFactor = 3;

      // set result container background dimensions
      this.backgroundWidth = this.activeImage.naturalWidth;
      this.backgroundHeight = this.activeImage.naturalHeight;
      if (this.backgroundWidth > width * maxZoomFactor) {
        this.backgroundWidth = width * maxZoomFactor;
        this.backgroundHeight = width / this.activeImage.naturalWidth * this.activeImage.naturalHeight * maxZoomFactor;
      }
      if (this.backgroundHeight > height * maxZoomFactor) {
        this.backgroundHeight = height * maxZoomFactor;
        this.backgroundWidth = height / this.activeImage.naturalHeight * this.activeImage.naturalWidth * maxZoomFactor;
      }

      // Set result container background properties
      this.resultContainer.style.backgroundSize = "".concat(this.backgroundWidth, "px ").concat(this.backgroundHeight, "px");

      // Set Width
      if (width > this.backgroundWidth) {
        width = this.backgroundWidth;
      }
      if (height > this.backgroundHeight) {
        height = this.backgroundHeight;
      }
      this.resultContainer.style.top = "".concat(top, "px");
      this.resultContainer.style.left = "".concat(left, "px");
      this.resultContainer.style.width = "".concat(width, "px");
      this.resultContainer.style.height = "".concat(height, "px");

      // size lens element
      var lensWidth = this.getRenderedSize().width / this.backgroundWidth * this.resultContainer.offsetWidth;
      var lensHeight = this.getRenderedSize().height / this.backgroundHeight * this.resultContainer.offsetHeight;
      this.lens.style.width = "".concat(lensWidth, "px");
      this.lens.style.height = "".concat(lensHeight, "px");

      // Calculate the ratio between result DIV and lens:
      this.containerLensRatioX = this.resultContainer.offsetWidth / this.lens.offsetWidth;
      this.containerLensRatioY = this.resultContainer.offsetHeight / this.lens.offsetHeight;
    }
  }, {
    key: "getRenderedSize",
    value: function getRenderedSize() {
      var naturalRatio = this.activeImage.naturalWidth / this.activeImage.naturalHeight;
      var visibleRatio = this.activeImage.width / this.activeImage.height;
      var size = {};

      // imageObjectFit === 'scale-down'
      if (naturalRatio > visibleRatio) {
        size.width = window.Math.min(this.activeImage.width, this.activeImage.naturalWidth);
        size.height = window.Math.min(this.activeImage.width, this.activeImage.naturalWidth) / naturalRatio;
      } else {
        size.width = window.Math.min(this.activeImage.height, this.activeImage.naturalHeight) * naturalRatio;
        size.height = window.Math.min(this.activeImage.height, this.activeImage.naturalHeight);
      }
      return size;
    }
  }, {
    key: "getCursorPositionRelativeToBoardWrapper",
    value: function getCursorPositionRelativeToBoardWrapper(e) {
      var x = 0;
      var y = 0;
      e = e || window.event;

      // Get the x and y positions of the image:
      var a = this.sliderInstance.boardWrapper.getBoundingClientRect();

      // Calculate the cursor's x and y coordinates, relative to the boardWrapper:
      x = e.pageX - a.left;
      y = e.pageY - a.top;

      // Consider any page scrolling:
      x = x - window.scrollX;
      y = y - window.scrollY;
      return {
        x: x,
        y: y
      };
    }
  }]);
}(_core_module_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Zoom);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		// The chunk loading function for additional chunks
/******/ 		// Since all referenced chunks are already included
/******/ 		// in this file, this function is empty here.
/******/ 		__webpack_require__.e = () => (Promise.resolve());
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be in strict mode.
(() => {
"use strict";
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _core_slider_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/slider.js */ "./src/js/core/slider.js");

globalThis.Minyatur = _core_slider_js__WEBPACK_IMPORTED_MODULE_0__["default"];
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_core_slider_js__WEBPACK_IMPORTED_MODULE_0__["default"]);
})();

__webpack_exports__ = __webpack_exports__["default"];
/******/ 	return __webpack_exports__;
/******/ })()
;
});