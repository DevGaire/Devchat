"use strict";
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./context/index.js":
/*!**************************!*\
  !*** ./context/index.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

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

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Auth)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _context__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../context */ "./context/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "C:\\Users\\Deverishi\\Desktop\\NextChat\\pages\\index.js";





function Auth() {
  const {
    username,
    setUsername,
    secret,
    setSecret
  } = (0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(_context__WEBPACK_IMPORTED_MODULE_1__.Context);
  const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();

  function onSubmit(e) {
    e.preventDefault();
    if (username.length === 0 || secret.length === 0) return;
    axios__WEBPACK_IMPORTED_MODULE_3___default().put("https://api.chatengine.io/users/", {
      username,
      secret
    }, {
      headers: {
        "Private-Key": "66a1d1bf-5aca-4977-b87b-4c1a71fb282f "
      }
    }).then(r => {
      router.push("/chats");
    });
  }

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
    className: "background",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
      className: "auth-container",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("form", {
        className: "auth-form",
        onSubmit: e => onSubmit(e),
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "auth-title",
          children: "Welcome! Dev Chat "
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "input-container",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
            placeholder: "Email",
            className: "text-input",
            onChange: e => setUsername(e.target.value)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("div", {
          className: "input-container",
          children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("input", {
            type: "password",
            placeholder: "Password",
            className: "text-input",
            onChange: e => setSecret(e.target.value)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 11
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 9
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_4__.jsxDEV)("button", {
          type: "submit",
          className: "submit-button",
          children: "Login / Sign Up"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 9
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 40,
        columnNumber: 7
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 5
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 5
  }, this);
}

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFEQTtBQThCRjs7Ozs7Ozs7OztBQ2xFRjs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xlYXJuLXN0YXJ0ZXIvLi9jb250ZXh0L2luZGV4LmpzIiwid2VicGFjazovL2xlYXJuLXN0YXJ0ZXIvLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyL2V4dGVybmFsIFwiYXhpb3NcIiIsIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9sZWFybi1zdGFydGVyL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCBjcmVhdGVDb250ZXh0IH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuXHJcbmV4cG9ydCBjb25zdCBDb250ZXh0UHJvdmlkZXIgPSAocHJvcHMpID0+IHtcclxuICBjb25zdCBbdXNlcm5hbWUsIHNldFVzZXJuYW1lXSA9IHVzZVN0YXRlKFwiXCIpO1xyXG4gIGNvbnN0IFtzZWNyZXQsIHNldFNlY3JldF0gPSB1c2VTdGF0ZShcIlwiKTtcclxuXHJcbiAgY29uc3QgdmFsdWUgPSB7XHJcbiAgICB1c2VybmFtZSxcclxuICAgIHNldFVzZXJuYW1lLFxyXG4gICAgc2VjcmV0LFxyXG4gICAgc2V0U2VjcmV0LFxyXG4gIH07XHJcblxyXG4gIHJldHVybiA8Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17dmFsdWV9Pntwcm9wcy5jaGlsZHJlbn08L0NvbnRleHQuUHJvdmlkZXI+O1xyXG59O1xyXG4iLCJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCB9IGZyb20gXCJyZWFjdFwiO1xuXG5cbmltcG9ydCB7IENvbnRleHQgfSBmcm9tIFwiLi4vY29udGV4dFwiO1xuXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcblxuaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBdXRoKCkge1xuIFxuICBjb25zdCB7IHVzZXJuYW1lLCBzZXRVc2VybmFtZSwgc2VjcmV0LCBzZXRTZWNyZXQgfSA9IHVzZUNvbnRleHQoQ29udGV4dCk7XG5cbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG4gIFxuICBcblxuZnVuY3Rpb24gb25TdWJtaXQoZSkge1xuICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgaWYgKHVzZXJuYW1lLmxlbmd0aCA9PT0gMCB8fCBzZWNyZXQubGVuZ3RoID09PSAwKSByZXR1cm47XG5cbiAgYXhpb3NcbiAgICAucHV0KFxuICAgICAgXCJodHRwczovL2FwaS5jaGF0ZW5naW5lLmlvL3VzZXJzL1wiLFxuICAgICAgeyB1c2VybmFtZSwgc2VjcmV0IH0sXG4gICAgICB7IGhlYWRlcnM6IHsgXCJQcml2YXRlLUtleVwiOiBcIjY2YTFkMWJmLTVhY2EtNDk3Ny1iODdiLTRjMWE3MWZiMjgyZiBcIiB9IH1cbiAgICApXG5cbiAgICAudGhlbigocikgPT4ge1xuICAgICAgcm91dGVyLnB1c2goXCIvY2hhdHNcIik7XG4gICAgfSk7XG4gICB9XG5cblxuXG4gICAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJhY2tncm91bmRcIj5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGgtY29udGFpbmVyXCI+XG4gICAgICA8Zm9ybSBjbGFzc05hbWU9XCJhdXRoLWZvcm1cIiBvblN1Ym1pdD17KGUpID0+IG9uU3VibWl0KGUpfT5cbiAgICAgICAgPGRpdiAgY2xhc3NOYW1lPVwiYXV0aC10aXRsZVwiID5XZWxjb21lISBEZXYgQ2hhdCA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0LWNvbnRhaW5lclwiPlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJFbWFpbFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWlucHV0XCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0VXNlcm5hbWUoZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXQtY29udGFpbmVyXCI+XG4gICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LWlucHV0XCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4gc2V0U2VjcmV0KGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIiBjbGFzc05hbWU9XCJzdWJtaXQtYnV0dG9uXCI+XG4gICAgICAgICAgICAgICAgIExvZ2luIC8gU2lnbiBVcFxuICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICA8L2Rpdj5cbiAgICApO1xuIH1cblxuXG4gIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYXhpb3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9yb3V0ZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwiY3JlYXRlQ29udGV4dCIsIkNvbnRleHQiLCJDb250ZXh0UHJvdmlkZXIiLCJwcm9wcyIsInVzZXJuYW1lIiwic2V0VXNlcm5hbWUiLCJzZWNyZXQiLCJzZXRTZWNyZXQiLCJ2YWx1ZSIsImNoaWxkcmVuIiwidXNlQ29udGV4dCIsInVzZVJvdXRlciIsImF4aW9zIiwiQXV0aCIsInJvdXRlciIsIm9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwibGVuZ3RoIiwicHV0IiwiaGVhZGVycyIsInRoZW4iLCJyIiwicHVzaCIsInRhcmdldCJdLCJzb3VyY2VSb290IjoiIn0=