(function() {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\projectnextjs\\pages\\index.js";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




class index extends react__WEBPACK_IMPORTED_MODULE_1__.Component {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "state", {
      num: 0
    });

    _defineProperty(this, "increaseNumber", () => {
      console.log("Button was clicked");

      if (this.state.num < 100) {
        this.setState({
          num: this.state.num + 1
        });
      }
    });

    _defineProperty(this, "decreaseNumber", () => {
      console.log("Button was clicked");

      if (this.state.num > 0) {
        this.setState({
          num: this.state.num - 1
        });
      }
    });
  }

  render() {
    return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react__WEBPACK_IMPORTED_MODULE_1__.Fragment, {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
        children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
          children: "The Number"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 39,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 38,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "Number Change"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          type: "button",
          onClick: this.decreaseNumber,
          children: "-"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
          type: "text",
          value: this.state.num
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
          type: "button",
          onClick: this.increaseNumber,
          children: "+"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, this);
  }

}

/* harmony default export */ __webpack_exports__["default"] = (index);

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ (function(module) {

"use strict";
module.exports = require("next/head");;

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ (function(module) {

"use strict";
module.exports = require("react");;

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ (function(module) {

"use strict";
module.exports = require("react/jsx-dev-runtime");;

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcm9qZWN0bmV4dGpzLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vcHJvamVjdG5leHRqcy9leHRlcm5hbCBcIm5leHQvaGVhZFwiIiwid2VicGFjazovL3Byb2plY3RuZXh0anMvZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovL3Byb2plY3RuZXh0anMvZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiJdLCJuYW1lcyI6WyJpbmRleCIsIlJlYWN0IiwibnVtIiwiY29uc29sZSIsImxvZyIsInN0YXRlIiwic2V0U3RhdGUiLCJyZW5kZXIiLCJkZWNyZWFzZU51bWJlciIsImluY3JlYXNlTnVtYmVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSxNQUFNQSxLQUFOLFNBQW9CQyw0Q0FBcEIsQ0FBb0M7QUFBQTtBQUFBOztBQUFBLG1DQWExQjtBQUNOQyxTQUFHLEVBQUU7QUFEQyxLQWIwQjs7QUFBQSw0Q0FpQmpCLE1BQU07QUFDckJDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLG9CQUFaOztBQUNBLFVBQUcsS0FBS0MsS0FBTCxDQUFXSCxHQUFYLEdBQWUsR0FBbEIsRUFBc0I7QUFDckIsYUFBS0ksUUFBTCxDQUFjO0FBQUVKLGFBQUcsRUFBRSxLQUFLRyxLQUFMLENBQVdILEdBQVgsR0FBaUI7QUFBeEIsU0FBZDtBQUNBO0FBQ0YsS0F0QmlDOztBQUFBLDRDQXdCakIsTUFBTTtBQUNyQkMsYUFBTyxDQUFDQyxHQUFSLENBQVksb0JBQVo7O0FBQ0EsVUFBRyxLQUFLQyxLQUFMLENBQVdILEdBQVgsR0FBZSxDQUFsQixFQUFvQjtBQUNsQixhQUFLSSxRQUFMLENBQWM7QUFBRUosYUFBRyxFQUFFLEtBQUtHLEtBQUwsQ0FBV0gsR0FBWCxHQUFpQjtBQUF4QixTQUFkO0FBQ0Q7QUFDRixLQTdCaUM7QUFBQTs7QUErQmxDSyxRQUFNLEdBQUc7QUFDUCx3QkFDRSw4REFBQywyQ0FBRDtBQUFBLDhCQUNFLDhEQUFDLGtEQUFEO0FBQUEsK0JBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFJRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUpGLGVBS0U7QUFBQSxnQ0FDRTtBQUFRLGNBQUksRUFBQyxRQUFiO0FBQXNCLGlCQUFPLEVBQUUsS0FBS0MsY0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBREYsZUFJRTtBQUFPLGNBQUksRUFBRyxNQUFkO0FBQXFCLGVBQUssRUFBSSxLQUFLSCxLQUFMLENBQVdIO0FBQXpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBSkYsZUFLRTtBQUFRLGNBQUksRUFBQyxRQUFiO0FBQXNCLGlCQUFPLEVBQUUsS0FBS08sY0FBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREY7QUFpQkQ7O0FBakRpQzs7QUFvRHBDLCtEQUFlVCxLQUFmLEU7Ozs7Ozs7Ozs7O0FDdkRBLHVDOzs7Ozs7Ozs7OztBQ0FBLG1DOzs7Ozs7Ozs7OztBQ0FBLG1EIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuXHJcbmNsYXNzIGluZGV4IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAvLyBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gIC8vICAgc3VwZXIocHJvcHMpO1xyXG5cclxuICAvLyAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgLy8gICAgIHNvbWVTdGF0ZTogXCJzb21lIHN0YXRlXCIsXHJcbiAgLy8gICB9O1xyXG5cclxuICAvLyAgIHRoaXMuY2hhbmdlU29tZXRoaW5nID0gdGhpcy5jaGFuZ2VTb21ldGhpbmcuYmluZCh0aGlzKTtcclxuICAvLyB9XHJcbiAgXHJcblxyXG5cclxuICBzdGF0ZSA9IHtcclxuICAgIG51bTogMCAsXHJcbiAgfTtcclxuXHJcbiAgaW5jcmVhc2VOdW1iZXIgPSAoKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhcIkJ1dHRvbiB3YXMgY2xpY2tlZFwiKTtcclxuICAgIGlmKHRoaXMuc3RhdGUubnVtPDEwMCl7XHJcbiAgICAgdGhpcy5zZXRTdGF0ZSh7IG51bTogdGhpcy5zdGF0ZS5udW0gKyAxIH0pXHJcbiAgICB9XHJcbiAgfTtcclxuICBcclxuICBkZWNyZWFzZU51bWJlciA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKFwiQnV0dG9uIHdhcyBjbGlja2VkXCIpO1xyXG4gICAgaWYodGhpcy5zdGF0ZS5udW0+MCl7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBudW06IHRoaXMuc3RhdGUubnVtIC0gMSB9KVxyXG4gICAgfVxyXG4gIH07XHJcbiAgXHJcbiAgcmVuZGVyKCkge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgPHRpdGxlPlRoZSBOdW1iZXI8L3RpdGxlPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8cD5OdW1iZXIgQ2hhbmdlPC9wPlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICA8YnV0dG9uIHR5cGU9XCJidXR0b25cIiBvbkNsaWNrPXt0aGlzLmRlY3JlYXNlTnVtYmVyfT5cclxuICAgICAgICAgICAgLVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgICA8aW5wdXQgdHlwZSA9IFwidGV4dFwiIHZhbHVlID0ge3RoaXMuc3RhdGUubnVtfT48L2lucHV0PlxyXG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17dGhpcy5pbmNyZWFzZU51bWJlcn0+XHJcbiAgICAgICAgICAgICtcclxuICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKTtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGluZGV4OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvaGVhZFwiKTs7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7OyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiKTs7Il0sInNvdXJjZVJvb3QiOiIifQ==