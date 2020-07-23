var GUI =
(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["gui"],{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/playground/index.css":
/*!*****************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/src??postcss!./src/playground/index.css ***!
  \*****************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "html,\nbody,\n.index_app_2mqDO {\n    /* probably unecessary, transitional until layout is refactored */\n    width: 100%; \n    height: 100%;\n    margin: 0;\n\n    /* Setting min height/width makes the UI scroll below those sizes */\n    min-width: 1024px;\n    min-height: 640px; /* Min height to fit sprite/backdrop button */\n}\n\n/* @todo: move globally? Safe / side FX, for blocks particularly? */\n\n* { -webkit-box-sizing: border-box; box-sizing: border-box; }\n", ""]);

// exports
exports.locals = {
	"app": "index_app_2mqDO"
};

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/lib/scratch-extends/scratch-blocks/field-face/sources/facepanel.txt":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/lib/scratch-extends/scratch-blocks/field-face/sources/facepanel.txt ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fp-icon {\r\n  vertical-align: -0.15em;\r\n  fill: currentColor;\r\n  overflow: hidden;\r\n  width: 1.5rem;\r\n  height: 1.5rem;\r\n}\r\n.facepanel {\r\n  visibility: hidden;\r\n}\r\n.facepanel .fp-modal-mask,\r\n.facepanel .fp-modal {\r\n  -webkit-animation-duration: 0.2s;\r\n          animation-duration: 0.2s;\r\n  -webkit-animation-fill-mode: backwards;\r\n          animation-fill-mode: backwards;\r\n  will-change: animation;\r\n}\r\n.facepanel .fp-modal-mask {\r\n  -webkit-animation-timing-function: linear;\r\n          animation-timing-function: linear;\r\n}\r\n.facepanel .fp-modal {\r\n  -webkit-animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\r\n          animation-timing-function: cubic-bezier(0, 0, 0.2, 1);\r\n}\r\n.facepanel.facepanel-show {\r\n  -webkit-animation-name: fadeIn;\r\n          animation-name: fadeIn;\r\n}\r\n.facepanel.facepanel-show .fp-modal-mask {\r\n  -webkit-animation-name: fadeIn;\r\n          animation-name: fadeIn;\r\n}\r\n.facepanel.facepanel-show .fp-modal {\r\n  -webkit-animation-name: slideInUp;\r\n          animation-name: slideInUp;\r\n}\r\n.facepanel.facepanel-hide .fp-modal-mask {\r\n  -webkit-animation-name: fadeOut;\r\n          animation-name: fadeOut;\r\n}\r\n.facepanel.facepanel-hide .fp-modal {\r\n  -webkit-animation-name: slideOutDown;\r\n          animation-name: slideOutDown;\r\n}\r\n.facepanel.facepanel-hide .fp-svg rect,\r\n.facepanel.facepanel-hide .fp-svg circle {\r\n  transition: none;\r\n  will-change: transition;\r\n}\r\n@-webkit-keyframes fadeIn {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n@keyframes fadeIn {\r\n  from {\r\n    opacity: 0;\r\n  }\r\n  to {\r\n    opacity: 1;\r\n  }\r\n}\r\n@-webkit-keyframes fadeOut {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n  to {\r\n    opacity: 0;\r\n  }\r\n}\r\n@keyframes fadeOut {\r\n  from {\r\n    opacity: 1;\r\n  }\r\n  to {\r\n    opacity: 0;\r\n  }\r\n}\r\n@-webkit-keyframes slideInUp {\r\n  from {\r\n    -webkit-transform: translate(-50%, -20%);\r\n            transform: translate(-50%, -20%);\r\n  }\r\n  to {\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n  }\r\n}\r\n@keyframes slideInUp {\r\n  from {\r\n    -webkit-transform: translate(-50%, -20%);\r\n            transform: translate(-50%, -20%);\r\n  }\r\n  to {\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n  }\r\n}\r\n@-webkit-keyframes slideOutDown {\r\n  from {\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n  }\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: translate(-50%, -20%);\r\n            transform: translate(-50%, -20%);\r\n  }\r\n}\r\n@keyframes slideOutDown {\r\n  from {\r\n    -webkit-transform: translate(-50%, -50%);\r\n            transform: translate(-50%, -50%);\r\n  }\r\n  to {\r\n    opacity: 0;\r\n    -webkit-transform: translate(-50%, -20%);\r\n            transform: translate(-50%, -20%);\r\n  }\r\n}\r\n.fp-modal-mask {\r\n  position: absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 1000;\r\n  background-color: rgba(0, 0, 0, 0.5);\r\n}\r\n.fp-modal {\r\n  z-index: 1001;\r\n  background-color: #fff;\r\n  border-radius: 0.75rem;\r\n  box-shadow: 0 0 0.25rem rgba(27, 27, 27, 0.144);\r\n  -webkit-backface-visibility: hidden;\r\n          backface-visibility: hidden;\r\n  -webkit-font-smoothing: antialiased;\r\n}\r\n.fp-modal:not(.preivew) {\r\n  position: fixed;\r\n  top: 50%;\r\n  left: 50%;\r\n  -webkit-transform: translate3d(-50%, -50%, 0);\r\n          transform: translate3d(-50%, -50%, 0);\r\n}\r\n.fp-modal-content .facepanel-editor-row {\r\n  white-space: nowrap;\r\n  width: auto;\r\n}\r\n.fp-modal-content .facepanel-editor-cell {\r\n  z-index: 2;\r\n  display: inline-block;\r\n  vertical-align: top;\r\n  box-sizing: content-box;\r\n  cursor: pointer;\r\n}\r\n.fp-modal-content .point-target {\r\n  position: absolute;\r\n  background-color: rgba(0, 0, 0, 0.125);\r\n  pointer-events: none;\r\n  z-index: 0;\r\n  transition: -webkit-transform 0.1s ease-in;\r\n  transition: transform 0.1s ease-in;\r\n  transition: transform 0.1s ease-in, -webkit-transform 0.1s ease-in;\r\n  will-change: transform;\r\n  visibility: hidden;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n.fp-modal-content .point-target.point-target-x {\r\n  top: 0;\r\n  height: 100%;\r\n}\r\n.fp-modal-content .point-target.point-target-y {\r\n  left: 0;\r\n  width: 100%;\r\n}\r\n.fp-modal-footer {\r\n  border-top: 1px solid #e0e5eb;\r\n  padding: 1rem 1.5rem;\r\n  text-align: right;\r\n}\r\n.fp-modal-footer .fp-btn-action {\r\n  font-size: 0.75rem;\r\n  height: 2rem;\r\n  margin-left: 1rem;\r\n  width: 6rem;\r\n  padding: 0;\r\n}\r\n.fp-linear-actions {\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 1;\r\n}\r\n.fp-color-list-container {\r\n  min-height: 9px;\r\n}\r\n.fp-color-list {\r\n  flex-wrap: nowrap;\r\n  padding: 1rem 2.5rem 0.5rem 2.5rem;\r\n  border-bottom: 1px solid #e0e5eb;\r\n}\r\n.fp-color-list .fp-icon {\r\n  opacity: 0;\r\n  transition: opacity 0.2s linear;\r\n  will-change: transition;\r\n}\r\n.fp-color-list .color-item-selected .fp-icon {\r\n  opacity: 1;\r\n}\r\n.color-list {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  align-items: center;\r\n  list-style: none;\r\n  margin: 0;\r\n}\r\n.color-list .color-list-item {\r\n  margin-right: 1rem;\r\n  margin-bottom: 0.5rem;\r\n  position: relative;\r\n}\r\n.color-list .color-item {\r\n  cursor: pointer;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  width: 1.5rem;\r\n  height: 1.5rem;\r\n  line-height: 1.5rem;\r\n  border-radius: 0.75rem;\r\n  color: #c8c8c8;\r\n  transition: color 0.25s linear, box-shadow 0.25s linear;\r\n  will-change: color, box-shadow;\r\n  z-index: 1;\r\n  border: 1px solid currentColor;\r\n  padding: 3px;\r\n}\r\n.color-list .color-item .anticon {\r\n  color: #fa0000;\r\n}\r\n.color-list button {\r\n  display: block;\r\n}\r\n.face-list {\r\n  display: flex;\r\n  overflow-x: auto;\r\n  flex-wrap: wrap;\r\n  padding: 0.25rem 0 0 0.25rem;\r\n  border: 1px solid #eee;\r\n  border-radius: 0.25rem;\r\n}\r\n.face-list .face-item {\r\n  position: relative;\r\n  margin-right: 0.25rem;\r\n  margin-bottom: 0.25rem;\r\n  cursor: pointer;\r\n  background-color: #eee;\r\n  margin-left: 3px;\r\n  margin-right: 3px;\r\n  border-radius: 2px;\r\n}\r\n.face-list .face-item svg {\r\n  display: block;\r\n  max-width: 72px;\r\n  max-height: 36px;\r\n}\r\n.face-list .remove-target {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  z-index: 1;\r\n}\r\n.linear-action {\r\n  display: block;\r\n  position: absolute;\r\n  text-align: center;\r\n  font-size: 12px;\r\n  padding: 0.5rem;\r\n}\r\n.linear-action svg.action-icon {\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n.fp-editor {\r\n  display: flex;\r\n  justify-content: center;\r\n  padding: 1.5rem 1.25rem 1rem 2rem;\r\n}\r\n.fp-editor-container {\r\n  margin-right: 0.5rem;\r\n  flex: 1;\r\n  justify-content: center;\r\n  align-items: center;\r\n  display: flex;\r\n  min-width: 30rem;\r\n}\r\n.fp-editor-content,\r\n.fp-canvas-content {\r\n  position: relative;\r\n}\r\n.fp-canvas-content:hover .point-target {\r\n  visibility: visible;\r\n}\r\n.fp-canvas-content .fp-svg-canvas {\r\n  position: relative;\r\n  z-index: 1;\r\n  background-repeat: no-repeat;\r\n  background-position: center;\r\n  background-size: contain;\r\n}\r\n.fp-svg {\r\n  display: block;\r\n  cursor: pointer;\r\n}\r\n.fp-svg rect,\r\n.fp-svg circle {\r\n  transition: fill 0.1s ease-in-out, stroke 0.1s ease-in-out;\r\n  will-change: transition;\r\n}\r\n.fp-axis {\r\n  z-index: 1;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n.fp-axis.fp-axis-hide {\r\n  visibility: hidden;\r\n}\r\n.fp-axis .axis-point {\r\n  display: block;\r\n  position: absolute;\r\n  text-align: center;\r\n  pointer-events: none;\r\n  -webkit-user-select: none;\r\n     -moz-user-select: none;\r\n      -ms-user-select: none;\r\n          user-select: none;\r\n  font-size: 12px;\r\n  -webkit-transform: none;\r\n          transform: none;\r\n  transition: none;\r\n  color: #405471;\r\n  transition: color 0.1s ease-in-out;\r\n  will-change: transition;\r\n}\r\n.fp-actions {\r\n  padding: 1rem 0.875rem;\r\n  border-radius: 0.5rem;\r\n}\r\n.fp-actions .action-item {\r\n  display: block;\r\n  line-height: 1;\r\n  position: relative;\r\n  cursor: pointer;\r\n  margin-bottom: 1rem;\r\n}\r\n.fp-actions .action-item:last-child {\r\n  margin-bottom: 0;\r\n}\r\n.fp-actions .action-item .fp-btn-action {\r\n  position: relative;\r\n  width: 2.5rem;\r\n  height: 2.5rem;\r\n  padding: 0.5rem;\r\n  border-radius: 2rem;\r\n}\r\n.fp-actions .action-item .action-radio {\r\n  visibility: hidden;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n}\r\n.fp-actions .action-item .action-radio:checked ~ label {\r\n  background-color: #1EAAFF;\r\n}\r\n.fp-actions .action-item .action-radio:checked ~ label .fp-icon {\r\n  color: #fff;\r\n}\r\n.fp-preset-container {\r\n  display: block;\r\n  width: 100%;\r\n  height: 5.5rem;\r\n  overflow: hidden;\r\n  position: relative;\r\n  border-top: 1px solid #e0e5eb;\r\n  padding: 1rem 0;\r\n}\r\n.fp-preset-container .fp-slides-content {\r\n  position: absolute;\r\n  top: 1rem;\r\n  bottom: 0;\r\n  left: 2.25rem;\r\n  right: 8.25rem;\r\n  padding: 0.25rem 0;\r\n  overflow-x: auto;\r\n  overflow-y: hidden;\r\n}\r\n.fp-preset-container .fp-preset-item {\r\n  position: relative;\r\n  cursor: pointer;\r\n  background-color: #E0E5EB;\r\n  margin-left: 0.25rem;\r\n  margin-right: 0.25rem;\r\n  border-radius: 2px;\r\n}\r\n.fp-preset-container .fp-preset-item.fp-preset-highlight {\r\n  box-shadow: 0 0 0 2px #40a9ff;\r\n}\r\n.fp-preset-container .fp-preset-item > svg {\r\n  max-width: 6rem;\r\n  max-height: 3rem;\r\n  pointer-events: none;\r\n}\r\n.fp-preset-container .fp-preset-custom:hover .fp-remove-trigger {\r\n  opacity: 1;\r\n}\r\n.fp-preset-container .fp-preset-custom .fp-remove-trigger {\r\n  opacity: 0;\r\n  transition: opacity 0.2s linear;\r\n  will-change: opacity;\r\n  z-index: 1;\r\n  padding: 2px;\r\n  width: 16px;\r\n  height: 16px;\r\n  background-color: #1EAAFF;\r\n  color: #405471;\r\n  padding: 0;\r\n}\r\n.fp-preset-container .fp-preset-custom .remove-icon {\r\n  width: 12px;\r\n  height: 12px;\r\n  color: #fff;\r\n}\r\n.fp-preset-slides .fp-slides-content {\r\n  scroll-behavior: smooth;\r\n  -webkit-overflow-scrolling: touch;\r\n}\r\n.fp-preset-slides .fp-slides-content::-webkit-scrollbar {\r\n  width: 0;\r\n  height: 0;\r\n}\r\n.fp-preset-slides .fp-slides-content::-webkit-scrollbar-thumb {\r\n  background-color: transparent;\r\n  border-radius: 0;\r\n}\r\n.fp-preset-slides .fp-slides-content::-webkit-scrollbar-track {\r\n  background-color: transparent;\r\n}\r\n.fp-preset-slides .split-line {\r\n  width: 1px;\r\n  top: 1.25rem;\r\n  height: 3rem;\r\n  position: absolute;\r\n  right: 5.75rem;\r\n  background-color: #E0E5EB;\r\n}\r\n.fp-preset-slides .fp-slides-trigger {\r\n  position: absolute;\r\n}\r\n.fp-preset-slides .fp-slides-trigger.fp-slides-play {\r\n  top: 1.25rem;\r\n  width: 3rem;\r\n  height: 3rem;\r\n  right: 1.5rem;\r\n  border-radius: 3rem;\r\n  padding: 0.5rem;\r\n}\r\n.fp-preset-slides .fp-slides-trigger.fp-slides-trigger-prev,\r\n.fp-preset-slides .fp-slides-trigger.fp-slides-trigger-next {\r\n  width: 1rem;\r\n  height: 1rem;\r\n  border: none;\r\n  background-color: transparent;\r\n  top: 2.25rem;\r\n  padding: 0;\r\n}\r\n.fp-preset-slides .fp-slides-trigger.fp-slides-trigger-prev {\r\n  left: 0.75rem;\r\n}\r\n.fp-preset-slides .fp-slides-trigger.fp-slides-trigger-next {\r\n  right: 6.75rem;\r\n}\r\n.fp-preset-slides .fp-slides-trigger .slides-icon {\r\n  width: 1rem;\r\n  height: 1rem;\r\n  pointer-events: none;\r\n}\r\n.fp-preset-slides .fp-slides-trigger.disabled {\r\n  opacity: 0.35;\r\n  cursor: default;\r\n  pointer-events: none;\r\n}\r\n.fp-preset-slides .fp-preset-list {\r\n  display: inline-flex;\r\n  flex-wrap: nowrap;\r\n}\r\n.fp-btn-action {\r\n  cursor: pointer;\r\n  display: inline-flex;\r\n  align-items: center;\r\n  justify-content: center;\r\n  /* transition: opacity linear 0.25s, background-color linear 0.25s; */\r\n  will-change: background-color, opacity;\r\n  z-index: 1;\r\n  background-color: #fff;\r\n  color: #1EAAFF;\r\n  border: 1px solid #1EAAFF;\r\n  outline: none;\r\n  border-radius: 1rem;\r\n  font-size: 1rem;\r\n}\r\n.fp-btn-action .fp-icon {\r\n  transition: color linear 0.25s;\r\n  will-change: color;\r\n  color: #1EAAFF;\r\n}\r\n\r\n.fp-btn-action:hover {\r\n    opacity: .75;\r\n}\r\n\r\n.fp-btn-action:active {\r\n    opacity: 1;\r\n}\r\n\r\n.fp-modal-footer .fp-btn-action:hover {\r\n    background-color: #1EAAFF;\r\n    color: #fff;\r\n}\r\n\r\n.fp-modal-footer .fp-btn-action:active {\r\n    background-color: #1B9CEA;\r\n    border:1px solid #1B9CEA;\r\n    color: #fff;\r\n}\r\n\r\n.fp-btn-action.active:hover {\r\n    background-color: #4BBBFF;\r\n    border:1px solid #4BBBFF;\r\n    color: #fff;\r\n}\r\n\r\n.fp-btn-action.active:active {\r\n    background-color: #1B9CEA;\r\n    border:1px solid #1B9CEA;\r\n    color: #fff;\r\n}\r\n\r\n\r\n\r\n.fp-btn-action.active {\r\n  background-color: #1EAAFF;\r\n  color: #fff;\r\n}\r\n.fp-btn-action.active .fp-icon {\r\n  color: #fff;\r\n}\r\n.fp-btn-action.danger {\r\n  border-color: #FD7D70;\r\n}\r\n.fp-btn-action.danger .fp-icon {\r\n  color: #FD7D70;\r\n}\r\n.fp-modal-close {\r\n  width: 32px;\r\n  height: 32px;\r\n  border-top-right-radius: 0.25rem;\r\n}\r\n.fp-modal-close,\r\n.fp-remove-trigger {\r\n  position: absolute;\r\n  top: 0;\r\n  right: 0;\r\n  background-color: rgba(225, 225, 225, 0.5);\r\n  color: #ff3c3f;\r\n}\r\n.fp-modal-close:hover,\r\n.fp-remove-trigger:hover {\r\n  color: #ff090d;\r\n}\r\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/lib/scratch-extends/scratch-blocks/field-face/sources/template.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/lib/scratch-extends/scratch-blocks/field-face/sources/template.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section>\n    <!-- 遮罩 -->\n    <section class=\"fp-modal-mask\" data-action=\"CANCEL\"></section>\n    <section class=\"fp-modal\">\n        <section class=\"fp-modal-content\">\n            <section class=\"fp-color-list-container\">\n                <section class=\"color-list fp-color-list\">\n                    <!-- 颜色列表区域 -->\n                    <!-- <%=colorItems%> -->\n                </section>\n            </section>\n            <!-- 表情面板工作区 -->\n            <section class=\"fp-editor\">\n                <section class=\"fp-editor-container\">\n                    <section class=\"fp-editor-content\">\n                        <section class=\"fp-canvas-content\">\n                            <section class=\"fp-svg-canvas\">\n                                <!-- 表情面板SVG -->\n                                <!-- <%=editorSvg%> -->\n                            </section>\n                            <section class=\"fp-axis\">\n                                <!-- 坐标点 -->\n                                <!-- <%=editorAxisPoints%> -->\n                            </section>\n                            <section class=\"fp-linear-actions\"></section>\n                        </section>\n                    </section>\n                </section>\n                <section class=\"fp-actions\">\n                    <!-- 表情面板工具区 -->\n                    <!-- <%=actionsItems%> -->\n                </section>\n            </section>\n            <section class=\"fp-modal-footer\">\n                <button class=\"fp-btn-action\" data-action=\"CANCEL\">cancel</button>\n                <button class=\"fp-btn-action active\" data-action=\"OK\">confirm</button></section>\n        </section>\n    </section>\n</section>"

/***/ }),

/***/ "./src/lib/scratch-extends/scratch-blocks/field-face-next.js":
/*!*******************************************************************!*\
  !*** ./src/lib/scratch-extends/scratch-blocks/field-face-next.js ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var scratch_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! scratch-blocks */ "./node_modules/scratch-blocks/shim/vertical.js");
/* harmony import */ var scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(scratch_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _field_face__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./field-face */ "./src/lib/scratch-extends/scratch-blocks/field-face/index.js");
/* harmony import */ var _field_face_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./field-face/util */ "./src/lib/scratch-extends/scratch-blocks/field-face/util.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

/* eslint-disable no-console */

/* eslint-disable no-mixed-operators */



var config = {
  actions: [],
  bgimg: {
    name: 'matataconn.png',
    url: 'static/matataconn.png'
  },
  boxspacing: 20,
  colorIndex: 1,
  colors: ['#ffffff', '#ff0000', '#ffA500', '#ffff00', '#00ff00', '#00ffff', '#0000ff', '#8000ff', '#000000'],
  columns: 16,
  count: 12,
  create_time: 1584582917,
  defaultFace: '',
  defaultFaces: ['234567888881'],
  defaultValue: '234567888881',
  enableAnimation: false,
  ftype: 2,
  guid: '9d03c0b1',
  id: '1',
  interval: 30,
  modify_time: 1584582917,
  multiColor: true,
  name: 'ledRing',
  offsetCount: 1,
  radius: 12,
  rows: 8,
  showNumber: false,
  size: {
    width: 16,
    height: 16
  },
  sort: 999,
  startNumber: 1,
  type: 'field_paneleditor',
  uid: 1111
};
var cacheFacePanel = {};

var FieldPanelEditor = /*#__PURE__*/function (_Blockly$Field) {
  _inherits(FieldPanelEditor, _Blockly$Field);

  var _super = _createSuper(FieldPanelEditor);

  function FieldPanelEditor(options) {
    var _this;

    _classCallCheck(this, FieldPanelEditor);

    _this = _super.call(this);
    _this.options = options;
    return _this;
  }

  _createClass(FieldPanelEditor, [{
    key: "willInit",
    value: function willInit() {
      this.setValue(this.getValue());
    }
  }, {
    key: "getValue",
    value: function getValue() {
      var _this$options = this.options,
          defaultValue = _this$options.defaultValue,
          _this$options$ftype = _this$options.ftype,
          ftype = _this$options$ftype === void 0 ? 0 : _this$options$ftype,
          _this$options$count = _this$options.count,
          count = _this$options$count === void 0 ? 10 : _this$options$count,
          _this$options$rows = _this$options.rows,
          rows = _this$options$rows === void 0 ? 8 : _this$options$rows,
          _this$options$colums = _this$options.colums,
          colums = _this$options$colums === void 0 ? 16 : _this$options$colums;
      return this.data_ || defaultValue || new Array(ftype === 0 ? rows * colums : count).fill(0).join('');
    }
  }, {
    key: "setValue",
    value: function setValue(data) {
      try {
        if (!data || this.data_ === data) {
          return;
        }

        if (scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.Events.isEnabled() && this.sourceBlock_ && this.data_ !== data) {
          scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.Events.fire(new scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.Events.BlockChange(this.sourceBlock_, 'field', this.name, this.data_, data));
        }

        this.data_ = data;
        this.render_();
      } catch (error) {
        console.warn(error);
      }
    }
  }, {
    key: "render_",
    value: function render_() {
      if (this.fieldGroup_ && this.options) {
        var svgElement = Object(_field_face_util__WEBPACK_IMPORTED_MODULE_2__["faceDataToSvg"])(this.options, this.data_, 32, true);

        if (svgElement instanceof SVGElement) {
          var width = Number(svgElement.getAttribute('width'));
          var height = Number(svgElement.getAttribute('height'));
          var xml = svgElement.outerHTML;
          this.size_.width = width;
          this.size_.height = height;

          if (this.fieldGroup_.innerHTML !== xml) {
            this.fieldGroup_.innerHTML = xml;
          }

          if (this.sourceBlock_ && this.sourceBlock_.rendered) {
            this.sourceBlock_.render();
          }
        }
      }
    }
  }, {
    key: "showEditor_",
    value: function showEditor_() {
      if (this.options) {
        var data = this.getValue();
        var guid = this.options.guid;
        var facepanel;

        if (cacheFacePanel.hasOwnProperty(guid)) {
          facepanel = cacheFacePanel[guid];
          console.log({
            cache: facepanel
          });
        } else {
          facepanel = cacheFacePanel[guid] = new _field_face__WEBPACK_IMPORTED_MODULE_1__["default"](this.options, data);
          console.log({
            new: facepanel
          });
        }

        facepanel.open(data, this);
      }
    }
  }]);

  return FieldPanelEditor;
}(scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.Field);

FieldPanelEditor.fromJson = function (options) {
  options = config;
  return new FieldPanelEditor(options);
};

scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.Field.register('field_face', FieldPanelEditor);
scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.Blocks.face = {
  /**
   * Block for matrix value.
   * @this Blockly.Block
   */
  init: function init() {
    this.jsonInit({
      message0: '%1',
      args0: [{
        type: 'field_face',
        name: 'FACE'
      }],
      outputShape: scratch_blocks__WEBPACK_IMPORTED_MODULE_0___default.a.OUTPUT_SHAPE_ROUND,
      output: 'Number',
      extensions: ['colours_pen']
    });
  }
};

/***/ }),

/***/ "./src/lib/scratch-extends/scratch-blocks/field-face/config.js":
/*!*********************************************************************!*\
  !*** ./src/lib/scratch-extends/scratch-blocks/field-face/config.js ***!
  \*********************************************************************/
/*! exports provided: SVGNS, EDITOR_SPACING, AXIS_SIZE, CELL_MAX_WIDTH, CELL_STROKE_WIDTH, CELL_STROKE_COLOR, CELL_FILL_COLOR, CELL_TAG_NAME, LINEAR_OFFSET, LINEAR_MAX_ROWCOUNT, PREVIEW_SVG_HEIGHT, FACEPANEL_MAX, CACHE_FACEPANE_KEY, TRANSPARENT_MAP_COLORS, MAP_WHITE_COLOR_BORDER, CONFIG, colorItemTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGNS", function() { return SVGNS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EDITOR_SPACING", function() { return EDITOR_SPACING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AXIS_SIZE", function() { return AXIS_SIZE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CELL_MAX_WIDTH", function() { return CELL_MAX_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CELL_STROKE_WIDTH", function() { return CELL_STROKE_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CELL_STROKE_COLOR", function() { return CELL_STROKE_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CELL_FILL_COLOR", function() { return CELL_FILL_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CELL_TAG_NAME", function() { return CELL_TAG_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LINEAR_OFFSET", function() { return LINEAR_OFFSET; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LINEAR_MAX_ROWCOUNT", function() { return LINEAR_MAX_ROWCOUNT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PREVIEW_SVG_HEIGHT", function() { return PREVIEW_SVG_HEIGHT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FACEPANEL_MAX", function() { return FACEPANEL_MAX; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CACHE_FACEPANE_KEY", function() { return CACHE_FACEPANE_KEY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TRANSPARENT_MAP_COLORS", function() { return TRANSPARENT_MAP_COLORS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAP_WHITE_COLOR_BORDER", function() { return MAP_WHITE_COLOR_BORDER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONFIG", function() { return CONFIG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colorItemTemplate", function() { return colorItemTemplate; });
var SVGNS = 'http://www.w3.org/2000/svg';
var EDITOR_SPACING = 24;
var AXIS_SIZE = 20;
var CELL_MAX_WIDTH = 32;
var CELL_STROKE_WIDTH = 0.5;
var CELL_STROKE_COLOR = '#E0E5EB';
var CELL_FILL_COLOR = '#F9F9F9';
var CELL_TAG_NAME = ['RECT', 'CIRCLE'];
var LINEAR_OFFSET = 0;
var LINEAR_MAX_ROWCOUNT = 8;
var PREVIEW_SVG_HEIGHT = 48;
var FACEPANEL_MAX = {
  COL: 32,
  ROW: 32
};
/**
 * LocalStorage 缓存的 KEY
 */

var CACHE_FACEPANE_KEY = 'CACHE_FACE_DATA';
/**
 * 白色映射表
 */

var TRANSPARENT_MAP_COLORS = ['#FFFFFF', '#FFF', '#ffffff', '#fff'];
var MAP_WHITE_COLOR_BORDER = '#BCDAFB';
/**
 * 表情面板配置
 */

var CONFIG = {
  guid: 'default',
  colors: ['#FFFFFF', '#00B9FF'],
  colorIndex: 1,
  columns: 16,
  enableAnimation: false,
  interval: 3,
  multiColor: false,
  radius: 8,
  rows: 8,
  showNumber: true,
  size: {
    width: CELL_MAX_WIDTH,
    height: CELL_MAX_WIDTH
  },
  startNumber: 0,
  ftype: 0
};
var colorItemTemplate = function colorItemTemplate(color, bgColor, boxShadow, index, selected) {
  return "<span class=\"color-list-item ".concat(selected ? 'color-item-selected' : '', "\"\n        data-action=\"CHANGE_COLOR\"\n        data-action-value=\"").concat(index, "\">\n        <label class=\"color-item\"\n            style=\"color: ").concat(color, "; background-color: ").concat(bgColor, ";\">\n            <svg class=\"fp-icon\"><use xlink:href=\"#iconcheck\"></use></svg>\n        </label>\n    </span>");
};

/***/ }),

/***/ "./src/lib/scratch-extends/scratch-blocks/field-face/editor/canvas.js":
/*!****************************************************************************!*\
  !*** ./src/lib/scratch-extends/scratch-blocks/field-face/editor/canvas.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return FaceCanvas; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/lib/scratch-extends/scratch-blocks/field-face/editor/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/lib/scratch-extends/scratch-blocks/field-face/config.js");
/* harmony import */ var _ring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ring */ "./src/lib/scratch-extends/scratch-blocks/field-face/editor/ring.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util */ "./src/lib/scratch-extends/scratch-blocks/field-face/util.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }






var FaceCanvas = /*#__PURE__*/function () {
  function FaceCanvas(config) {
    _classCallCheck(this, FaceCanvas);

    this.config = Object.assign({}, _config__WEBPACK_IMPORTED_MODULE_1__["CONFIG"], config);
    this.canvasElement = null;
    this.panel = null;
    this._changeColorCallback = null;
    this.isMouseDown = false;
    this.createCanvas();
  }

  _createClass(FaceCanvas, [{
    key: "createCanvas",
    value: function createCanvas() {
      if (!(this.canvasElement instanceof SVGAElement)) {
        this.panel = new _ring__WEBPACK_IMPORTED_MODULE_2__["default"](this.config);

        if (this.panel) {
          this.panel.geneator();
          var _this$panel = this.panel,
              boxWidth = _this$panel.boxWidth,
              boxHeight = _this$panel.boxHeight,
              cellElements = _this$panel.cellElements;
          boxWidth = boxWidth % 2 === 0 ? boxWidth : boxWidth + 1;
          boxHeight = boxHeight % 2 === 0 ? boxHeight : boxHeight + 1;
          var attrs = {
            class: 'fp-svg',
            style: 'background-color: transparent;',
            width: boxWidth,
            height: boxHeight,
            viewBox: "0 0 ".concat(boxWidth, " ").concat(boxHeight)
          };
          this.canvasElement = Object(_util__WEBPACK_IMPORTED_MODULE_3__["createSvgElement"])(attrs, 'svg');
          this.addEventListeners();

          if (this.panel instanceof _index__WEBPACK_IMPORTED_MODULE_0__["default"] && cellElements.length > 0) {
            this.canvasElement.innerHTML = cellElements.join('');
          }
        }
      }
    }
  }, {
    key: "addEventListeners",
    value: function addEventListeners() {
      var listeners = {
        mousedown: this.handleMouseDown.bind(this),
        mouseup: this.handleMouseUp.bind(this),
        mousemove: this.handleMouseMove.bind(this),
        mouseleave: this.handleMouseOut.bind(this),
        touchstart: this.handleMouseDown.bind(this),
        touchend: this.handleMouseUp.bind(this),
        touchmove: this.handleMouseMove.bind(this)
      };

      for (var key in listeners) {
        this.canvasElement.addEventListener(key, listeners[key]);
      }
    }
  }, {
    key: "handleMouseDown",
    value: function handleMouseDown(e) {
      e.preventDefault();
      var target = e.srcElement;
      this.isMouseDown = true;
      this.changeColor(target);
    }
  }, {
    key: "handleMouseUp",
    value: function handleMouseUp(e) {
      e.preventDefault();
      this.isMouseDown = false;
    }
  }, {
    key: "handleMouseMove",
    value: function handleMouseMove(e) {
      e.preventDefault();

      if (this.isMouseDown) {
        var target;

        if (e instanceof TouchEvent) {
          if (!e.touches) {
            return;
          }

          target = document.elementFromPoint(e.touches[0].clientX, e.touches[0].clientY);
        } else {
          target = e.srcElement;
        }

        this.changeColor(target, 'move');
      }
    }
  }, {
    key: "handleMouseOut",
    value: function handleMouseOut(e) {
      e.preventDefault();
      this.handleMouseUp(e);
    }
  }, {
    key: "changeColor",
    value: function changeColor(target, type) {
      if (target) {
        var tagName = target.tagName;

        if (_config__WEBPACK_IMPORTED_MODULE_1__["CELL_TAG_NAME"].indexOf(tagName.toUpperCase()) >= 0) {
          var dataIndex = Number(target.getAttribute('dataindex')) || 0;

          if (!type || type === 'move' && dataIndex !== this.mouseOverIndex) {
            this.mouseOverIndex = dataIndex;
            var colors = this.config.colors;
            var currentColor = target.getAttribute('fill') || '';
            var currentColorIndex = colors.indexOf(currentColor);
            var isHighLight = currentColorIndex !== 0;
            var colorIndex = isHighLight && currentColorIndex === this.colorIndex ? 0 : this.colorIndex;

            if (this._mode === 'ERASE') {
              colorIndex = 0;
            }

            var color = colors[colorIndex];
            this.changeAxisPointColor(dataIndex, color);
            var isWhite = _config__WEBPACK_IMPORTED_MODULE_1__["TRANSPARENT_MAP_COLORS"].indexOf(color) >= 0;
            var fill = isWhite ? _config__WEBPACK_IMPORTED_MODULE_1__["CELL_FILL_COLOR"] : color;
            var stroke = isWhite ? _config__WEBPACK_IMPORTED_MODULE_1__["CELL_STROKE_COLOR"] : color;
            target.setAttribute('fill', fill);
            target.setAttribute('stroke', stroke);
            var faceData = this.panel.faceData;
            faceData[dataIndex] = colorIndex;
            this.panel.faceData = faceData;
            var callback = this.changeColorCallback;

            if (typeof callback === 'function') {
              callback();
            }
          }
        }
      }
    }
  }, {
    key: "changeAxisPointColor",
    value: function changeAxisPointColor(index, color) {
      if (this.axisPoints instanceof NodeList) {
        var ele = this.axisPoints.item(index);
        var isWhite = _config__WEBPACK_IMPORTED_MODULE_1__["TRANSPARENT_MAP_COLORS"].indexOf(color) >= 0;

        if (ele instanceof HTMLElement) {
          var nextColor = isWhite ? '#405471' : '#FFF';
          var currentColor = ele.style.color;

          if (nextColor !== currentColor) {
            ele.style.color = nextColor;
          }
        }
      }
    }
  }, {
    key: "axisPoints",
    get: function get() {
      return this._axisPoints;
    },
    set: function set(list) {
      this._axisPoints = list;
    }
  }, {
    key: "colorIndex",
    get: function get() {
      return this._colorIndex;
    },
    set: function set(index) {
      this._colorIndex = index;
    }
  }, {
    key: "faceData",
    set: function set(data) {
      var _this = this;

      var datas = data.split('').map(function (num) {
        return Number(num);
      });

      if (this.panel && datas.length) {
        var selector = 'circle';
        var eles = this.canvasElement.querySelectorAll(selector);
        eles.forEach(function (ele) {
          var dataIndex = Number(ele.getAttribute('dataindex')) || 0;
          var colorIndex = datas[dataIndex];
          var colors = _this.config.colors;
          var color = colors[colorIndex] || colors[0];

          _this.changeAxisPointColor(dataIndex, color);

          var isWhite = _config__WEBPACK_IMPORTED_MODULE_1__["TRANSPARENT_MAP_COLORS"].indexOf(color) >= 0;
          var fill = isWhite ? _config__WEBPACK_IMPORTED_MODULE_1__["CELL_FILL_COLOR"] : color;
          var stroke = isWhite ? _config__WEBPACK_IMPORTED_MODULE_1__["CELL_STROKE_COLOR"] : color;
          ele.setAttribute('fill', fill);
          ele.setAttribute('stroke', stroke);
        });
        this.panel.faceData = datas;
      }
    },
    get: function get() {
      return this.panel.faceData.join('');
    }
  }, {
    key: "changeColorCallback",
    set: function set(callback) {
      this._changeColorCallback = callback;
    },
    get: function get() {
      return this._changeColorCallback;
    }
  }]);

  return FaceCanvas;
}();



/***/ }),

/***/ "./src/lib/scratch-extends/scratch-blocks/field-face/editor/index.js":
/*!***************************************************************************!*\
  !*** ./src/lib/scratch-extends/scratch-blocks/field-face/editor/index.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SvgEditor; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../config */ "./src/lib/scratch-extends/scratch-blocks/field-face/config.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/* eslint-disable quote-props */

/* eslint-disable max-len */


var SvgEditor = /*#__PURE__*/function () {
  function SvgEditor(config, faceData) {
    _classCallCheck(this, SvgEditor);

    this.config = config;
    this._faceData = faceData;
    this.cellElements = [];
    this.axisElements = [];
  }

  _createClass(SvgEditor, [{
    key: "addCellElement",
    value: function addCellElement(attrs) {
      var colorIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var tag = arguments.length > 2 ? arguments[2] : undefined;
      var html = this.createSvgElementHtml(_objectSpread(_objectSpread({}, this.cellDftAttr(colorIndex)), attrs), tag);
      this.cellElements.push(html);
    }
  }, {
    key: "addAxisPoint",
    value: function addAxisPoint(index, top, left, w, h, color) {
      var _this$config = this.config,
          _this$config$size = _this$config.size,
          _this$config$size$wid = _this$config$size.width,
          width = _this$config$size$wid === void 0 ? _config__WEBPACK_IMPORTED_MODULE_0__["CELL_MAX_WIDTH"] : _this$config$size$wid,
          _this$config$size$hei = _this$config$size.height,
          height = _this$config$size$hei === void 0 ? _config__WEBPACK_IMPORTED_MODULE_0__["CELL_MAX_WIDTH"] : _this$config$size$hei,
          _this$config$startNum = _this$config.startNumber,
          startNumber = _this$config$startNum === void 0 ? 0 : _this$config$startNum;
      var attrs = {
        width: "".concat(w || width, "px"),
        height: "".concat(h || height, "px"),
        top: "".concat(top, "px"),
        left: "".concat(left, "px"),
        'line-height': "".concat(h || height, "px")
      };

      if (color) {
        attrs.color = color;
      }

      var html = this.createAxisNoElementHtml("".concat(index + startNumber), attrs);
      this.axisElements.push(html);
    }
  }, {
    key: "createSvgElementHtml",
    value: function createSvgElementHtml(attrs) {
      var tag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'rect';
      var innerText = arguments.length > 2 ? arguments[2] : undefined;
      var attrsString = [];

      if (_typeof(attrs) === 'object') {
        for (var key in attrs) {
          attrsString.push("".concat(key, "=\"").concat(attrs[key], "\""));
        }
      }

      return "<".concat(tag, " ").concat(attrsString.join(' '), ">").concat(innerText || '', "</").concat(tag, ">");
    }
  }, {
    key: "cellDftAttr",
    value: function cellDftAttr() {
      var colorIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var colors = this.config.colors;
      var color = colors[colorIndex] || _config__WEBPACK_IMPORTED_MODULE_0__["TRANSPARENT_MAP_COLORS"][0];
      var isWhite = _config__WEBPACK_IMPORTED_MODULE_0__["TRANSPARENT_MAP_COLORS"].indexOf(color) >= 0;
      return {
        'fill': isWhite ? _config__WEBPACK_IMPORTED_MODULE_0__["CELL_FILL_COLOR"] : color,
        'stroke-width': _config__WEBPACK_IMPORTED_MODULE_0__["CELL_STROKE_WIDTH"] * 2,
        'stroke': isWhite ? _config__WEBPACK_IMPORTED_MODULE_0__["CELL_STROKE_COLOR"] : color
      };
    }
  }, {
    key: "createAxisNoElementHtml",
    value: function createAxisNoElementHtml(text, style) {
      var styleString = [];

      for (var key in style) {
        styleString.push("".concat(key, ": ").concat(style[key]));
      }

      return "<span class=\"axis-point\" style=\"".concat(styleString.join('; '), "\">").concat(text, "</span>");
    }
  }, {
    key: "emptyFaceData",
    get: function get() {
      var _this$config$count = this.config.count,
          count = _this$config$count === void 0 ? 12 : _this$config$count;
      var faceData = Array(count).fill(0);
      return faceData;
    }
  }, {
    key: "faceData",
    get: function get() {
      if (this._faceData) return this._faceData.split('').map(function (d) {
        return Number(d);
      });
      return this.emptyFaceData;
    },
    set: function set(faceData) {
      this._faceData = faceData.join('');
    }
  }]);

  return SvgEditor;
}();



/***/ }),

/***/ "./src/lib/scratch-extends/scratch-blocks/field-face/editor/ring.js":
/*!**************************************************************************!*\
  !*** ./src/lib/scratch-extends/scratch-blocks/field-face/editor/ring.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return RingPanel; });
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index */ "./src/lib/scratch-extends/scratch-blocks/field-face/editor/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./src/lib/scratch-extends/scratch-blocks/field-face/config.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }




var RingPanel = /*#__PURE__*/function (_SvgEditor) {
  _inherits(RingPanel, _SvgEditor);

  var _super = _createSuper(RingPanel);

  function RingPanel(config, faceData) {
    var _this;

    _classCallCheck(this, RingPanel);

    _this = _super.call(this, config, faceData);
    var _config$size$width = config.size.width,
        width = _config$size$width === void 0 ? _config__WEBPACK_IMPORTED_MODULE_1__["CELL_MAX_WIDTH"] : _config$size$width,
        _config$count = config.count,
        count = _config$count === void 0 ? 12 : _config$count,
        _config$interval = config.interval,
        interval = _config$interval === void 0 ? 0 : _config$interval;
    _this.angle = 2 * Math.PI / count;
    _this.r = (width || _config__WEBPACK_IMPORTED_MODULE_1__["CELL_MAX_WIDTH"]) / 2;
    _this.R = (_this.r + interval) / Math.sin(_this.angle / 2);
    _this.x0 = _this.r + _this.R;
    _this.y0 = _this.x0;
    return _this;
  }

  _createClass(RingPanel, [{
    key: "geneator",
    value: function geneator() {
      var _this$config = this.config,
          _this$config$size$wid = _this$config.size.width,
          width = _this$config$size$wid === void 0 ? _config__WEBPACK_IMPORTED_MODULE_1__["CELL_MAX_WIDTH"] : _this$config$size$wid,
          _this$config$count = _this$config.count,
          count = _this$config$count === void 0 ? 12 : _this$config$count,
          _this$config$offsetCo = _this$config.offsetCount,
          offsetCount = _this$config$offsetCo === void 0 ? 1 : _this$config$offsetCo,
          _this$config$offset = _this$config.offset,
          offset = _this$config$offset === void 0 ? _config__WEBPACK_IMPORTED_MODULE_1__["CELL_MAX_WIDTH"] : _this$config$offset,
          _this$config$boxspaci = _this$config.boxspacing,
          boxspacing = _this$config$boxspaci === void 0 ? _config__WEBPACK_IMPORTED_MODULE_1__["EDITOR_SPACING"] : _this$config$boxspaci;
      var angle = this.angle,
          r = this.r,
          R = this.R,
          x0 = this.x0,
          y0 = this.y0,
          faceData = this.faceData;

      for (var index = 0; index < count; index++) {
        var sinV = Math.sin((index + offsetCount) * angle);
        var cosV = Math.cos((index + offsetCount) * angle);
        var x = x0 + R * sinV + 1;
        var y = y0 - R * cosV + 1;
        var colorIndex = faceData[index] || 0;
        var attrs = {
          r: r,
          cx: x,
          cy: y,
          dataindex: index
        };
        this.addCellElement(attrs, colorIndex, 'circle');
        var xs = x0 + (R - (offset || _config__WEBPACK_IMPORTED_MODULE_1__["CELL_MAX_WIDTH"])) * sinV + 1;
        var ys = y0 - (R - (offset || _config__WEBPACK_IMPORTED_MODULE_1__["CELL_MAX_WIDTH"])) * cosV + 1;
        var offsetX = -((width || _config__WEBPACK_IMPORTED_MODULE_1__["CELL_MAX_WIDTH"]) / 2) + 1;
        var offsetY = offsetX;
        this.addAxisPoint(index, boxspacing + ys + offsetY, boxspacing + xs + offsetX);
      }

      this.boxWidth = Math.round(R + r) * 2 + 2;
      this.boxHeight = this.boxWidth;
    }
  }]);

  return RingPanel;
}(_index__WEBPACK_IMPORTED_MODULE_0__["default"]);



/***/ }),

/***/ "./src/lib/scratch-extends/scratch-blocks/field-face/index.js":
/*!********************************************************************!*\
  !*** ./src/lib/scratch-extends/scratch-blocks/field-face/index.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Editor; });
/* harmony import */ var _sources__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./sources */ "./src/lib/scratch-extends/scratch-blocks/field-face/sources/index.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./config */ "./src/lib/scratch-extends/scratch-blocks/field-face/config.js");
/* harmony import */ var _editor_canvas__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor/canvas */ "./src/lib/scratch-extends/scratch-blocks/field-face/editor/canvas.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }





var Editor = /*#__PURE__*/function () {
  function Editor(config) {
    _classCallCheck(this, Editor);

    this._config = config;
    this._container = null;
    this._field = '';
    this._canvas = new _editor_canvas__WEBPACK_IMPORTED_MODULE_2__["default"](this._config);
    this.render();
  }

  _createClass(Editor, [{
    key: "render",
    value: function render() {
      var _this$_config = this._config,
          _this$_config$guid = _this$_config.guid,
          guid = _this$_config$guid === void 0 ? 'default' : _this$_config$guid,
          _this$_config$showNum = _this$_config.showNumber,
          showNumber = _this$_config$showNum === void 0 ? true : _this$_config$showNum,
          _this$_config$colorIn = _this$_config.colorIndex,
          colorIndex = _this$_config$colorIn === void 0 ? 1 : _this$_config$colorIn,
          _this$_config$boxspac = _this$_config.boxspacing,
          boxspacing = _this$_config$boxspac === void 0 ? _config__WEBPACK_IMPORTED_MODULE_1__["EDITOR_SPACING"] : _this$_config$boxspac,
          _this$_config$multiCo = _this$_config.multiColor,
          multiColor = _this$_config$multiCo === void 0 ? true : _this$_config$multiCo,
          bgimg = _this$_config.bgimg;
      var id = "facepanel_".concat(guid.replace(/-/g, ''));
      var container = document.querySelector("#".concat(id));

      if (!(container instanceof Element)) {
        container = document.createElement('section');
        container.setAttribute('id', id);
        container.setAttribute('class', 'facepanel facepanel-hide');
        container.innerHTML = _sources__WEBPACK_IMPORTED_MODULE_0__["templateHTML"];
        this._axisContainer = container.querySelector('.fp-axis');
        this._svgContainer = container.querySelector('.fp-svg-canvas');
        this._colorsContainer = container.querySelector('.color-list');
        this._okBtn = container.querySelector('button[data-action="OK"]');
        this._cancelBtn = container.querySelector('button[data-action="CANCEL"]');

        if (this._colorsContainer instanceof HTMLElement) {
          if (multiColor === true) {
            this._colorsContainer.innerHTML = this.genColorsContent().join('');
          } else {
            this._colorsContainer.remove();
          }
        }

        if (this._svgContainer instanceof HTMLElement) {
          this._svgContainer.appendChild(this.canvas.canvasElement);

          if (bgimg) {
            var url = typeof bgimg === 'string' ? bgimg : bgimg.url;

            if (url) {
              this._svgContainer.style.backgroundImage = "url(".concat(url, ")");
            }
          }

          this._svgContainer.style.padding = "".concat(boxspacing, "px");
        }

        if (this._axisContainer instanceof Element) {
          this._axisContainer.innerHTML = this.canvas.panel.axisElements.join('');

          if (!showNumber) {
            this._axisContainer.classList.add('fp-axis-hide');
          }
        }

        this.canvas.colorIndex = colorIndex;
        this.addEventListener(container);
        document.body.appendChild(container);
      }

      this._container = container;
    }
  }, {
    key: "addEventListener",
    value: function addEventListener(container) {
      var _this = this;

      if (container) {
        container.addEventListener('click', function (ev) {
          var actionsHandler = _this.actions;
          var ele = ev.srcElement;

          if (actionsHandler) {
            while (ele instanceof Element) {
              var action = ele.getAttribute('data-action') || '';

              if (action !== '') {
                if (actionsHandler[action] && typeof actionsHandler[action] === 'function') {
                  var actiondata = ele.getAttribute('data-action-value');
                  actionsHandler[action](actiondata || '', ele);
                }

                break;
              }

              ele = ele.parentElement;
            }
          }
        }, false);
      }
    }
  }, {
    key: "preview",
    value: function preview(data) {
      var facedata = this.canvas.faceData;

      if (!data) {
        data = this.canvas.panel.emptyFacedata.join('');
      }

      if (data && data !== facedata) {
        this.canvas.faceData = data;
      }
    }
  }, {
    key: "open",
    value: function open(data, field) {
      var _this2 = this;

      this._field = field;
      this.preview(data);
      this.updateButtonText();
      setTimeout(function () {
        if (_this2._container instanceof HTMLElement) {
          _this2._container.style.visibility = 'visible';

          _this2._container.classList.remove('facepanel-hide');

          _this2._container.classList.add('facepanel-show');
        }
      }, 0);
    }
  }, {
    key: "close",
    value: function close() {
      if (this._field) {
        this._field = null;
      }

      if (this._container instanceof HTMLElement) {
        this._container.style.visibility = 'hidden';

        this._container.classList.remove('facepanel-show');

        this._container.classList.add('facepanel-hide');
      }

      this.switchColorByIndex(1);
    }
  }, {
    key: "genColorsContent",
    value: function genColorsContent() {
      var _this$_config2 = this._config,
          colors = _this$_config2.colors,
          _this$_config2$colorI = _this$_config2.colorIndex,
          colorIndex = _this$_config2$colorI === void 0 ? 1 : _this$_config2$colorI;
      return colors.map(function (color, index) {
        var bgColor = color;
        var isWhite = _config__WEBPACK_IMPORTED_MODULE_1__["TRANSPARENT_MAP_COLORS"].indexOf(color.toUpperCase()) >= 0;
        var boxShadow = '';

        if (isWhite) {
          color = _config__WEBPACK_IMPORTED_MODULE_1__["MAP_WHITE_COLOR_BORDER"];
        } else {
          color = '#fff';
        }

        return Object(_config__WEBPACK_IMPORTED_MODULE_1__["colorItemTemplate"])(color, bgColor, boxShadow, index, index === colorIndex);
      });
    }
  }, {
    key: "switchToEditMode",
    value: function switchToEditMode() {
      if (this._container instanceof HTMLElement) {
        var radio = this._container.querySelector('[data-action="DRAW"] > input[type="radio"]');

        if (radio instanceof HTMLInputElement) {
          this.canvas.mode = 'DRAW';
          radio.click();
        }
      }
    }
  }, {
    key: "switchColorByIndex",
    value: function switchColorByIndex(index) {
      if (this._container) {
        var multiColor = this._config.multiColor;

        if (multiColor) {
          this.canvas.colorIndex = index;

          this._container.querySelectorAll('[data-action=CHANGE_COLOR]').forEach(function (ele) {
            var idx = ele.getAttribute('data-action-value');

            if (Number(idx) === index) {
              ele.classList.add('color-item-selected');
            } else {
              ele.classList.remove('color-item-selected');
            }
          });
        }
      }
    }
  }, {
    key: "updateButtonText",
    value: function updateButtonText() {
      if (this._okBtn instanceof HTMLElement) {
        var text = Object(_sources__WEBPACK_IMPORTED_MODULE_0__["formatMessage"])('gui.modal.ok');

        if (this._okBtn.innerText !== text && text) {
          this._okBtn.innerText = text;
        }
      }

      if (this._cancelBtn instanceof HTMLElement) {
        var _text = Object(_sources__WEBPACK_IMPORTED_MODULE_0__["formatMessage"])('gui.modal.cancel');

        if (this._cancelBtn.innerText !== _text && _text) {
          this._cancelBtn.innerText = _text;
        }
      }
    }
  }, {
    key: "actions",
    get: function get() {
      var _this3 = this;

      return {
        CHANGE_COLOR: function CHANGE_COLOR(index, ele) {
          if (ele instanceof HTMLElement) {
            index = Number(index);

            if (_this3._container) {
              if (!ele.classList.contains('color-item-selected')) {
                _this3.switchColorByIndex(index);
              }

              _this3.switchToEditMode();
            }
          }
        },
        CANCEL: function CANCEL() {
          _this3.close();
        },
        OK: function OK() {
          var field = _this3._field;
          var facedata = _this3.canvas.faceData;

          if (field && field.setValue) {
            var setValue = field.setValue;

            if (typeof setValue === 'function') {
              setValue.call(field, facedata.toString());
            }
          }

          _this3.close();
        }
      };
    }
  }, {
    key: "canvas",
    get: function get() {
      return this._canvas;
    }
  }]);

  return Editor;
}();



/***/ }),

/***/ "./src/lib/scratch-extends/scratch-blocks/field-face/sources/iconfont.js":
/*!*******************************************************************************!*\
  !*** ./src/lib/scratch-extends/scratch-blocks/field-face/sources/iconfont.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

!function (d) {
  var t,
      e = '<svg><symbol id="iconsave" viewBox="0 0 1024 1024"><path d="M211.692308 132.923077h444.967384c28.750769 0 56.32 11.421538 76.603077 31.704615l126.109539 126.109539a108.307692 108.307692 0 0 1 31.704615 76.603077v444.967384a78.769231 78.769231 0 0 1-78.769231 78.769231H211.692308a78.769231 78.769231 0 0 1-78.769231-78.769231V211.692308a78.769231 78.769231 0 0 1 78.769231-78.769231z m462.76923 276.716308V289.476923c0-26.624-21.582769-48.206769-48.206769-48.206769H289.476923c-26.624 0-48.206769 21.582769-48.206769 48.206769V409.6c0 26.624 21.582769 48.206769 48.206769 48.206769H626.215385c26.624 0 48.206769-21.582769 48.206769-48.206769z m-135.404307-141.312h27.096615c14.966154 0 27.096615 12.091077 27.096616 27.05723v108.307693c0 14.966154-12.130462 27.096615-27.096616 27.096615h-27.096615A27.057231 27.057231 0 0 1 512 403.692308V295.384615c0-14.966154 12.130462-27.096615 27.096615-27.096615z"  ></path></symbol><symbol id="iconeraser" viewBox="0 0 1024 1024"><path d="M638.194887 56.130434l340.286182 340.286182a79.36 79.36 0 0 1 0 112.231988l-336.816644 336.816645-452.54834-452.54834L525.902559 56.130434a79.36 79.36 0 0 1 112.231989 0z m-491.135628 378.90364l452.54834 452.54834-45.435853 45.435853a39.68 39.68 0 0 1-27.846808 11.615408L337.73296 945.810301a39.68 39.68 0 0 1-28.299357-11.645578L34.797101 659.528221a79.36 79.36 0 0 1 0-112.231989l112.262158-112.262158z"  ></path></symbol><symbol id="iconplay" viewBox="0 0 1024 1024"><path d="M298.666667 169.386667v685.226666a87.765333 87.765333 0 0 0 138.368 71.68l485.418666-342.613333a87.765333 87.765333 0 0 0 0-143.445333L437.034667 97.706667A87.765333 87.765333 0 0 0 298.666667 169.344z"  ></path></symbol><symbol id="iconnext" viewBox="0 0 1024 1024"><path d="M795.84 561.792l-362.048 362.048a64 64 0 0 1-90.496-90.496l316.8-316.8-316.8-316.8a64 64 0 0 1 90.496-90.496l362.048 362.048a64 64 0 0 1 0 90.496z"  ></path></symbol><symbol id="iconedit" viewBox="0 0 1024 1024"><path d="M533.06946233 220.96692933l251.850031 251.850031L381.16744533 876.56900833a78.877141 78.877141 0 0 1-52.372313 23.034894l-193.035756 8.310409a39.43857 39.43857 0 0 1-41.105852-41.719372l11.1828-189.828718a78.877141 78.877141 0 0 1 22.979119-51.145273L533.06946233 220.96692933z m188.07182-132.297259l195.210964 195.210964a39.43857 39.43857 0 0 1 0 55.774561l-83.661842 83.661842-250.985525-250.985525 83.661842-83.661842a39.43857 39.43857 0 0 1 55.774561 0z"  ></path></symbol><symbol id="iconplus" viewBox="0 0 1024 1024"><path d="M448 448V192a64 64 0 1 1 128 0v256h256a64 64 0 0 1 0 128H576v256a64 64 0 0 1-128 0V576H192a64 64 0 1 1 0-128h256z"  ></path></symbol><symbol id="icondelete" viewBox="0 0 1024 1024"><path d="M170.666667 362.666667h682.666666v554.666666a85.333333 85.333333 0 0 1-85.333333 85.333334H256a85.333333 85.333333 0 0 1-85.333333-85.333334v-554.666666z m170.666666 128a42.666667 42.666667 0 0 0-42.666666 42.666666v256a42.666667 42.666667 0 0 0 85.333333 0v-256a42.666667 42.666667 0 0 0-42.666667-42.666666z m170.666667 0a42.666667 42.666667 0 0 0-42.666667 42.666666v256a42.666667 42.666667 0 0 0 85.333334 0v-256a42.666667 42.666667 0 0 0-42.666667-42.666666z m170.666667 0a42.666667 42.666667 0 0 0-42.666667 42.666666v256a42.666667 42.666667 0 0 0 85.333333 0v-256a42.666667 42.666667 0 0 0-42.666666-42.666666zM384 170.666667V85.333333a42.666667 42.666667 0 0 1 42.666667-42.666666h170.666666a42.666667 42.666667 0 0 1 42.666667 42.666666v85.333334h234.666667a64 64 0 0 1 0 128h-725.333334a64 64 0 0 1 0-128H384z"  ></path></symbol><symbol id="iconminus" viewBox="0 0 1024 1024"><path d="M192 448h640a64 64 0 0 1 0 128H192a64 64 0 1 1 0-128z"  ></path></symbol><symbol id="iconcheck" viewBox="0 0 1024 1024"><path d="M399.502915 625.790753l362.038672-362.038672a64 64 0 1 1 90.509668 90.509668l-407.293506 407.293506a64 64 0 0 1-90.509668 0l-181.019336-181.019336a64 64 0 0 1 90.509668-90.509668l135.764502 135.764502z"  ></path></symbol><symbol id="iconprev" viewBox="0 0 1024 1024"><path d="M228.16 561.792a64 64 0 0 1 0-90.496l362.048-362.048a64 64 0 0 1 90.496 90.496l-316.8 316.8 316.8 316.8a64 64 0 1 1-90.496 90.496L228.16 561.792z"  ></path></symbol><symbol id="iconaxis" viewBox="0 0 1024 1024"><path d="M957.738667 286.72a29.653333 29.653333 0 0 1 0 41.941333L328.533333 958.293333a29.653333 29.653333 0 0 1-41.941333 0L76.8 748.416a29.696 29.696 0 0 1 0-41.984l83.882667-83.925333 62.933333 62.933333 41.941333-41.984-62.933333-62.933333 62.933333-62.976 83.925334 83.925333 41.941333-41.984-83.925333-83.925333 62.933333-62.933334 62.933333 62.933334 41.941334-41.984-62.933334-62.933334 62.933334-62.976 83.882666 83.968 41.941334-41.984-83.882667-83.925333 62.933333-62.976 62.933334 62.933333 41.941333-41.984-62.933333-62.933333 83.882666-83.925333a29.653333 29.653333 0 0 1 41.941334 0l209.749333 209.877333zM779.52 360.106667a44.501333 44.501333 0 1 0 62.933333-62.933334 44.501333 44.501333 0 0 0-62.933333 62.933334z m122.282667 357.034666l59.306666 207.786667a29.653333 29.653333 0 0 1-36.650666 36.693333l-207.658667-59.392a29.482667 29.482667 0 0 1-12.8-7.552l-114.005333-114.048 190.293333-190.378666 113.962667 114.048a29.525333 29.525333 0 0 1 7.552 12.8zM254.293333 444.842667L81.066667 271.402667a29.653333 29.653333 0 0 1 0-41.941334l148.309333-148.437333a29.610667 29.610667 0 0 1 41.941333 0l173.312 173.44-190.250666 190.378667z"  ></path></symbol><symbol id="iconstop" viewBox="0 0 1024 1024"><path d="M213.333333 128m64 0l0 0q64 0 64 64l0 682.666667q0 64-64 64l0 0q-64 0-64-64l0-682.666667q0-64 64-64Z"  ></path><path d="M682.666667 128m64 0l0 0q64 0 64 64l0 682.666667q0 64-64 64l0 0q-64 0-64-64l0-682.666667q0-64 64-64Z"  ></path></symbol><symbol id="iconclose" viewBox="0 0 1024 1024"><path d="M513.4336 441.0368l108.6464-108.5952a51.2 51.2 0 1 1 72.3968 72.3968l-108.5952 108.5952 108.5952 108.6464a51.2 51.2 0 0 1-72.3968 72.3968l-108.6464-108.5952-108.544 108.5952a51.2 51.2 0 0 1-72.448-72.3968l108.5952-108.6464-108.5952-108.544a51.2 51.2 0 1 1 72.3968-72.448l108.5952 108.5952z"  ></path></symbol></svg>',
      a = (t = document.getElementsByTagName("script"))[t.length - 1].getAttribute("data-injectcss");

  if (a && !d.__iconfont__svg__cssinject__) {
    d.__iconfont__svg__cssinject__ = !0;

    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (t) {
      console && console.log(t);
    }
  }

  !function (t) {
    if (document.addEventListener) {
      if (~["complete", "loaded", "interactive"].indexOf(document.readyState)) setTimeout(t, 0);else {
        var a = function a() {
          document.removeEventListener("DOMContentLoaded", a, !1), t();
        };

        document.addEventListener("DOMContentLoaded", a, !1);
      }
    } else document.attachEvent && (e = t, o = d.document, l = !1, i = function i() {
      l || (l = !0, e());
    }, (_n = function n() {
      try {
        o.documentElement.doScroll("left");
      } catch (t) {
        return void setTimeout(_n, 50);
      }

      i();
    })(), o.onreadystatechange = function () {
      "complete" == o.readyState && (o.onreadystatechange = null, i());
    });

    var e, o, l, i, _n;
  }(function () {
    var t, a;
    (t = document.createElement("div")).innerHTML = e, e = null, (a = t.getElementsByTagName("svg")[0]) && (a.setAttribute("aria-hidden", "true"), a.style.position = "absolute", a.style.width = 0, a.style.height = 0, a.style.overflow = "hidden", function (t, a) {
      a.firstChild ? function (t, a) {
        a.parentNode.insertBefore(t, a);
      }(t, a.firstChild) : a.appendChild(t);
    }(a, document.body));
  });
}(window);

/***/ }),

/***/ "./src/lib/scratch-extends/scratch-blocks/field-face/sources/index.js":
/*!****************************************************************************!*\
  !*** ./src/lib/scratch-extends/scratch-blocks/field-face/sources/index.js ***!
  \****************************************************************************/
/*! exports provided: formatMessage, templateHTML */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "formatMessage", function() { return formatMessage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "templateHTML", function() { return templateHTML; });
/* harmony import */ var _reducers_locales__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../reducers/locales */ "./src/reducers/locales.js");
/* eslint-disable import/no-commonjs */


__webpack_require__(/*! ./iconfont.js */ "./src/lib/scratch-extends/scratch-blocks/field-face/sources/iconfont.js");

var css = __webpack_require__(/*! raw-loader!./facepanel.txt */ "./node_modules/raw-loader/index.js!./src/lib/scratch-extends/scratch-blocks/field-face/sources/facepanel.txt");

var fpStyle = document.querySelector('#mbFp');

if (!(fpStyle instanceof Element)) {
  var head = document.querySelector('head');

  if (head) {
    var style = document.createElement('style');
    style.innerHTML = css;
    style.setAttribute('id', 'mbFp');
    style.setAttribute('type', 'text/css');
    head.appendChild(style);
  }
}

var templateHTML = __webpack_require__(/*! raw-loader!./template.html */ "./node_modules/raw-loader/index.js!./src/lib/scratch-extends/scratch-blocks/field-face/sources/template.html");

var formatMessageId = function formatMessageId(id) {
  var result = _reducers_locales__WEBPACK_IMPORTED_MODULE_0__["localesInitialState"].messages[id];
  return result;
};

var formatMessage = formatMessageId;


/***/ }),

/***/ "./src/lib/scratch-extends/scratch-blocks/field-face/util.js":
/*!*******************************************************************!*\
  !*** ./src/lib/scratch-extends/scratch-blocks/field-face/util.js ***!
  \*******************************************************************/
/*! exports provided: createSvgElement, faceDataToSvg, svgElementToBase64, faceDataToImage, faceDataToImages, svgTextToBase64, createAxisNoElement, facepanelHtmlTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createSvgElement", function() { return createSvgElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faceDataToSvg", function() { return faceDataToSvg; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svgElementToBase64", function() { return svgElementToBase64; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faceDataToImage", function() { return faceDataToImage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "faceDataToImages", function() { return faceDataToImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "svgTextToBase64", function() { return svgTextToBase64; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAxisNoElement", function() { return createAxisNoElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "facepanelHtmlTemplate", function() { return facepanelHtmlTemplate; });
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./config */ "./src/lib/scratch-extends/scratch-blocks/field-face/config.js");
/* harmony import */ var _editor_ring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./editor/ring */ "./src/lib/scratch-extends/scratch-blocks/field-face/editor/ring.js");
/* harmony import */ var _editor_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor/index */ "./src/lib/scratch-extends/scratch-blocks/field-face/editor/index.js");
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/* eslint-disable func-style */

/* eslint-disable require-jsdoc */

/* eslint-disable max-len */



var createSvgElement = function createSvgElement(attrs) {
  var tag = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'circle';
  var ele = document.createElementNS(_config__WEBPACK_IMPORTED_MODULE_0__["SVGNS"], tag);

  if (_typeof(attrs) === 'object') {
    for (var key in attrs) {
      ele.setAttribute(key, attrs[key]);
    }
  }

  return ele;
};
function faceDataToSvg(config, data) {
  var showHeight = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _config__WEBPACK_IMPORTED_MODULE_0__["PREVIEW_SVG_HEIGHT"];
  var isPreview = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  config = Object.assign({}, _config__WEBPACK_IMPORTED_MODULE_0__["CONFIG"], config);
  config.count = Math.min(config.count || 3, _config__WEBPACK_IMPORTED_MODULE_0__["CELL_MAX_WIDTH"]);
  var panel = new _editor_ring__WEBPACK_IMPORTED_MODULE_1__["default"](config, data);

  if (panel instanceof _editor_index__WEBPACK_IMPORTED_MODULE_2__["default"]) {
    panel.geneator(data.length, panel.faceData, isPreview);
  }

  var _panel$boxHeight = panel.boxHeight,
      boxHeight = _panel$boxHeight === void 0 ? 100 : _panel$boxHeight,
      _panel$boxWidth = panel.boxWidth,
      boxWidth = _panel$boxWidth === void 0 ? 100 : _panel$boxWidth;
  var attrs = {
    style: "display: block; cursor: pointer;",
    width: boxWidth * (showHeight / boxHeight),
    height: showHeight,
    viewBox: "0 0 ".concat(boxWidth, " ").concat(boxHeight)
  };
  var svg = createSvgElement(attrs, 'svg');
  var rect = createSvgElement({
    width: boxWidth || 100,
    height: boxHeight || 100,
    x: 0,
    y: 0,
    rx: 4,
    ry: 4,
    fill: 'rgba(255, 255, 255, .5)'
  }, 'rect');

  if (panel.cellElements instanceof Array && panel.cellElements.length > 0) {
    svg.innerHTML = "".concat(rect.outerHTML).concat(panel.cellElements.join(''));
  }

  return svg;
}
var svgElementToBase64 = function svgElementToBase64(svgElement) {
  if (svgElement) {
    return "data:image/svg+xml;base64,".concat(window.btoa(new XMLSerializer().serializeToString(svgElement)));
  }

  return '';
};
function faceDataToImage(config, data) {
  var showHeight = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : _config__WEBPACK_IMPORTED_MODULE_0__["PREVIEW_SVG_HEIGHT"];
  var canvasElement = faceDataToSvg(config, data, showHeight);
  var src = svgElementToBase64(canvasElement);
  return src;
}
function faceDataToImages(config, faceData) {
  var images = [];

  if (faceData instanceof Array) {
    faceData.forEach(function (face) {
      if (face && typeof face.data === 'string') {
        images.push(faceDataToImage(config, face.data));
      }
    });
  }

  return images;
}
var svgTextToBase64 = function svgTextToBase64(svgXmlString) {
  var data = window.encodeURIComponent(svgXmlString);
  return "data:image/svg+xml,".concat(data);
};
var createAxisNoElement = function createAxisNoElement(text, style) {
  var dftStyle = {
    display: 'block',
    position: 'absolute',
    textAlign: 'center',
    pointerEvents: 'none',
    userSelect: 'none'
  };
  var span = document.createElement('span');
  span.innerText = text;
  Object.assign(style, dftStyle);

  for (var key in style) {
    if (span.style.hasOwnProperty(key)) {
      span.style[key] = style[key];
    }
  }

  return span;
};
var facepanelHtmlTemplate = function facepanelHtmlTemplate(svgContainerPadding, canvasMargin, actionPadding) {
  return "\n<section class=\"fp-modal-mask\" data-action=\"CANCEL\"></section>\n<section class=\"fp-modal\">\n    <a class=\"fp-modal-close fp-btn-action\" data-action=\"CANCEL\">\n        <svg class=\"fp-icon close-icon\">\n            <use xlink:href=\"#iconclose\"></use>\n        </svg>\n    </a>\n    <section class=\"fp-modal-content\">\n        <section class=\"color-list\"></section>\n        <section class=\"fp-editor\">\n            <section class=\"fp-editor-container\">\n                <section class=\"fp-editor-content\">\n                    <section class=\"fp-canvas-content\">\n                        <section class=\"fp-svg-canvas\" style=\"padding: ".concat(svgContainerPadding, ";margin: ").concat(canvasMargin, "\"></section>\n                        <section class=\"fp-axis\"></section>\n                    </section>\n                </section>\n                <section class=\"fp-preset-container fp-preset-slides\"></section>\n            </section>\n            <section class=\"fp-actions\" style=\"padding: ").concat(actionPadding, "\"></section>\n        </section>\n        <section class=\"fp-modal-footer\">\n            <button class=\"btn-fp-ok fp-btn-action\" data-action=\"OK\">\n                <svg class=\"fp-icon ok-icon\">\n                    <use xlink:href=\"#iconcheck\"></use>\n                </svg>\n            </button>\n        </section>\n    </section>\n</section>");
};

/***/ }),

/***/ "./src/playground/index.css":
/*!**********************************!*\
  !*** ./src/playground/index.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--5-1!../../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/playground/index.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/playground/index.jsx":
/*!**********************************!*\
  !*** ./src/playground/index.jsx ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var es6_object_assign_auto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! es6-object-assign/auto */ "./node_modules/es6-object-assign/auto.js");
/* harmony import */ var es6_object_assign_auto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(es6_object_assign_auto__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_fn_array_includes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/fn/array/includes */ "./node_modules/core-js/fn/array/includes.js");
/* harmony import */ var core_js_fn_array_includes__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_fn_array_includes__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_fn_promise_finally__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/fn/promise/finally */ "./node_modules/core-js/fn/promise/finally.js");
/* harmony import */ var core_js_fn_promise_finally__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_fn_promise_finally__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var intl__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! intl */ "./node_modules/intl/index.js");
/* harmony import */ var intl__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(intl__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lib_analytics__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/analytics */ "./src/lib/analytics.js");
/* harmony import */ var _lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../lib/app-state-hoc.jsx */ "./src/lib/app-state-hoc.jsx");
/* harmony import */ var _components_browser_modal_browser_modal_jsx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/browser-modal/browser-modal.jsx */ "./src/components/browser-modal/browser-modal.jsx");
/* harmony import */ var _lib_supported_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../lib/supported-browser */ "./src/lib/supported-browser.js");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./index.css */ "./src/playground/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_10__);
// Polyfills



 // For Safari 9







 // Register "base" page view

_lib_analytics__WEBPACK_IMPORTED_MODULE_6__["default"].pageview('/');
var appTarget = document.createElement('div');
appTarget.className = _index_css__WEBPACK_IMPORTED_MODULE_10___default.a.app;
document.body.appendChild(appTarget);

if (Object(_lib_supported_browser__WEBPACK_IMPORTED_MODULE_9__["default"])()) {
  // require needed here to avoid importing unsupported browser-crashing code
  // at the top level
  __webpack_require__(/*! ./render-gui.jsx */ "./src/playground/render-gui.jsx").default(appTarget);

  __webpack_require__(/*! ../lib/scratch-extends/scratch-blocks/field-face-next */ "./src/lib/scratch-extends/scratch-blocks/field-face-next.js");
} else {
  _components_browser_modal_browser_modal_jsx__WEBPACK_IMPORTED_MODULE_8__["default"].setAppElement(appTarget);
  var WrappedBrowserModalComponent = Object(_lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_7__["default"])(_components_browser_modal_browser_modal_jsx__WEBPACK_IMPORTED_MODULE_8__["default"], true
  /* localesOnly */
  );

  var handleBack = function handleBack() {}; // eslint-disable-next-line react/jsx-no-bind


  react_dom__WEBPACK_IMPORTED_MODULE_5___default.a.render( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(WrappedBrowserModalComponent, {
    onBack: handleBack
  }), appTarget);
}

/***/ }),

/***/ "./src/playground/render-gui.jsx":
/*!***************************************!*\
  !*** ./src/playground/render-gui.jsx ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux */ "./node_modules/redux/es/index.js");
/* harmony import */ var _lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../lib/app-state-hoc.jsx */ "./src/lib/app-state-hoc.jsx");
/* harmony import */ var _containers_gui_jsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../containers/gui.jsx */ "./src/containers/gui.jsx");
/* harmony import */ var _lib_hash_parser_hoc_jsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../lib/hash-parser-hoc.jsx */ "./src/lib/hash-parser-hoc.jsx");
/* harmony import */ var _lib_log_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../lib/log.js */ "./src/lib/log.js");
/* harmony import */ var _config_domain_json__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config/domain.json */ "./src/config/domain.json");
var _config_domain_json__WEBPACK_IMPORTED_MODULE_7___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../config/domain.json */ "./src/config/domain.json", 1);
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }










var onClickLogo = function onClickLogo() {
  window.location = _config_domain_json__WEBPACK_IMPORTED_MODULE_7__.mata_home_link;
};

var handleTelemetryModalCancel = function handleTelemetryModalCancel() {
  Object(_lib_log_js__WEBPACK_IMPORTED_MODULE_6__["default"])('User canceled telemetry modal');
};

var handleTelemetryModalOptIn = function handleTelemetryModalOptIn() {
  Object(_lib_log_js__WEBPACK_IMPORTED_MODULE_6__["default"])('User opted into telemetry');
};

var handleTelemetryModalOptOut = function handleTelemetryModalOptOut() {
  Object(_lib_log_js__WEBPACK_IMPORTED_MODULE_6__["default"])('User opted out of telemetry');
};
/*
 * Render the GUI playground. This is a separate function because importing anything
 * that instantiates the VM causes unsupported browsers to crash
 * {object} appTarget - the DOM element to render to
 */


/* harmony default export */ __webpack_exports__["default"] = (function (appTarget) {
  _containers_gui_jsx__WEBPACK_IMPORTED_MODULE_4__["default"].setAppElement(appTarget); // note that redux's 'compose' function is just being used as a general utility to make
  // the hierarchy of HOC constructor calls clearer here; it has nothing to do with redux's
  // ability to compose reducers.

  var WrappedGui = Object(redux__WEBPACK_IMPORTED_MODULE_2__["compose"])(_lib_app_state_hoc_jsx__WEBPACK_IMPORTED_MODULE_3__["default"], _lib_hash_parser_hoc_jsx__WEBPACK_IMPORTED_MODULE_5__["default"])(_containers_gui_jsx__WEBPACK_IMPORTED_MODULE_4__["default"]); // TODO a hack for testing the backpack, allow backpack host to be set by url param

  var backpackHostMatches = window.location.href.match(/[?&]backpack_host=([^&]*)&?/);
  var backpackHost = backpackHostMatches ? backpackHostMatches[1] : null;
  var scratchDesktopMatches = window.location.href.match(/[?&]isScratchDesktop=([^&]+)/);
  var simulateScratchDesktop;

  if (scratchDesktopMatches) {
    try {
      // parse 'true' into `true`, 'false' into `false`, etc.
      simulateScratchDesktop = JSON.parse(scratchDesktopMatches[1]);
    } catch (_unused) {
      // it's not JSON so just use the string
      // note that a typo like "falsy" will be treated as true
      simulateScratchDesktop = scratchDesktopMatches[1];
    }
  }

  if (false) {}

  react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render( // important: this is checking whether `simulateScratchDesktop` is truthy, not just defined!
  simulateScratchDesktop ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedGui, {
    canEditTitle: true,
    isScratchDesktop: true,
    showTelemetryModal: true,
    canSave: false,
    onTelemetryModalCancel: handleTelemetryModalCancel,
    onTelemetryModalOptIn: handleTelemetryModalOptIn,
    onTelemetryModalOptOut: handleTelemetryModalOptOut
  }) : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WrappedGui, {
    canEditTitle: true,
    backpackVisible: true,
    showComingSoon: true,
    backpackHost: backpackHost,
    canSave: false,
    onClickLogo: onClickLogo
  }), appTarget);
});

/***/ }),

/***/ 1:
/*!*******************************************!*\
  !*** ./locale-data/complete.js (ignored) ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })

},[["./src/playground/index.jsx","lib.min"]]]);
//# sourceMappingURL=gui.js.map