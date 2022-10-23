(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./context/index.js":
/*!**************************!*\
  !*** ./context/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Context": () => (/* binding */ Context),
/* harmony export */   "ContextProvider": () => (/* binding */ ContextProvider)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\Deverishi\\Desktop\\NextChat\\context\\index.js";


const Context = /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)();
const ContextProvider = props => {
  const {
    0: username,
    1: setUsername
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const {
    0: secret,
    1: setSecret
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");
  const value = {
    username,
    setUsername,
    secret,
    setSecret
  };
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)(Context.Provider, {
    value: value,
    children: props.children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 16,
    columnNumber: 10
  }, undefined);
};

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _styles_auth_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/auth.css */ "./styles/auth.css");
/* harmony import */ var _styles_auth_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_styles_auth_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _styles_chats_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/chats.css */ "./styles/chats.css");
/* harmony import */ var _styles_chats_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_chats_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/index.css */ "./styles/index.css");
/* harmony import */ var _styles_index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../context */ "./context/index.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Deverishi\\Desktop\\NextChat\\pages\\_app.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






function App({
  Component,
  pageProps
}) {
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(_context__WEBPACK_IMPORTED_MODULE_3__.ContextProvider, {
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)(Component, _objectSpread({}, pageProps), void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 6
  }, this);
}

/***/ }),

/***/ "./styles/auth.css":
/*!*************************!*\
  !*** ./styles/auth.css ***!
  \*************************/
/***/ (() => {



/***/ }),

/***/ "./styles/chats.css":
/*!**************************!*\
  !*** ./styles/chats.css ***!
  \**************************/
/***/ (() => {



/***/ }),

/***/ "./styles/index.css":
/*!**************************!*\
  !*** ./styles/index.css ***!
  \**************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicGFnZXMvX2FwcC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOztBQUVPLE1BQU1HLE9BQU8sZ0JBQUdELG9EQUFhLEVBQTdCO0FBRUEsTUFBTUUsZUFBZSxHQUFJQyxLQUFELElBQVc7QUFDeEMsUUFBTTtBQUFBLE9BQUNDLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCTiwrQ0FBUSxDQUFDLEVBQUQsQ0FBeEM7QUFDQSxRQUFNO0FBQUEsT0FBQ08sTUFBRDtBQUFBLE9BQVNDO0FBQVQsTUFBc0JSLCtDQUFRLENBQUMsRUFBRCxDQUFwQztBQUVBLFFBQU1TLEtBQUssR0FBRztBQUNaSixJQUFBQSxRQURZO0FBRVpDLElBQUFBLFdBRlk7QUFHWkMsSUFBQUEsTUFIWTtBQUlaQyxJQUFBQTtBQUpZLEdBQWQ7QUFPQSxzQkFBTyw4REFBQyxPQUFELENBQVMsUUFBVDtBQUFrQixTQUFLLEVBQUVDLEtBQXpCO0FBQUEsY0FBaUNMLEtBQUssQ0FBQ007QUFBdkM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUFQO0FBQ0QsQ0FaTTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNKUDtBQUNBO0FBQ0E7QUFFQzs7QUFFYyxTQUFTQyxHQUFULENBQWE7QUFBRUMsRUFBQUEsU0FBRjtBQUFhQyxFQUFBQTtBQUFiLENBQWIsRUFBdUM7QUFDcEQsc0JBQ0csOERBQUMscURBQUQ7QUFBQSwyQkFDRCw4REFBQyxTQUFELG9CQUFlQSxTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQztBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREg7QUFLRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUlaRDs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xlYXJuLXN0YXJ0ZXIvLi9jb250ZXh0L2luZGV4LmpzIiwid2VicGFjazovL2xlYXJuLXN0YXJ0ZXIvLi9wYWdlcy9fYXBwLmpzIiwid2VicGFjazovL2xlYXJuLXN0YXJ0ZXIvLi9zdHlsZXMvYXV0aC5jc3MiLCJ3ZWJwYWNrOi8vbGVhcm4tc3RhcnRlci8uL3N0eWxlcy9jaGF0cy5jc3MiLCJ3ZWJwYWNrOi8vbGVhcm4tc3RhcnRlci8uL3N0eWxlcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vbGVhcm4tc3RhcnRlci9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vbGVhcm4tc3RhcnRlci9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgY3JlYXRlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuZXhwb3J0IGNvbnN0IENvbnRleHQgPSBjcmVhdGVDb250ZXh0KCk7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGV4dFByb3ZpZGVyID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3QgW3VzZXJuYW1lLCBzZXRVc2VybmFtZV0gPSB1c2VTdGF0ZShcIlwiKTtcclxuICBjb25zdCBbc2VjcmV0LCBzZXRTZWNyZXRdID0gdXNlU3RhdGUoXCJcIik7XHJcblxyXG4gIGNvbnN0IHZhbHVlID0ge1xyXG4gICAgdXNlcm5hbWUsXHJcbiAgICBzZXRVc2VybmFtZSxcclxuICAgIHNlY3JldCxcclxuICAgIHNldFNlY3JldCxcclxuICB9O1xyXG5cclxuICByZXR1cm4gPENvbnRleHQuUHJvdmlkZXIgdmFsdWU9e3ZhbHVlfT57cHJvcHMuY2hpbGRyZW59PC9Db250ZXh0LlByb3ZpZGVyPjtcclxufTtcclxuIiwiaW1wb3J0IFwiLi4vc3R5bGVzL2F1dGguY3NzXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvY2hhdHMuY3NzXCI7XG5pbXBvcnQgXCIuLi9zdHlsZXMvaW5kZXguY3NzXCI7XG5cbiBpbXBvcnQgeyBDb250ZXh0UHJvdmlkZXIgfSBmcm9tICcuLi9jb250ZXh0J1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gICAgIDxDb250ZXh0UHJvdmlkZXI+XG4gICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgICA8L0NvbnRleHRQcm92aWRlcj5cbiAgKTtcbn1cbiIsIiIsIiIsIiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTsiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsImNyZWF0ZUNvbnRleHQiLCJDb250ZXh0IiwiQ29udGV4dFByb3ZpZGVyIiwicHJvcHMiLCJ1c2VybmFtZSIsInNldFVzZXJuYW1lIiwic2VjcmV0Iiwic2V0U2VjcmV0IiwidmFsdWUiLCJjaGlsZHJlbiIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=