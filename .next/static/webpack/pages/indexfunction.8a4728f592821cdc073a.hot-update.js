self["webpackHotUpdate_N_E"]("pages/indexfunction",{

/***/ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayLikeToArray.js ***!
  \*****************************************************************/
/***/ (function(module) {

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

module.exports = _arrayLikeToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return arrayLikeToArray(arr);
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/assertThisInitialized.js ***!
  \**********************************************************************/
/***/ (function(module) {

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

module.exports = _assertThisInitialized;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/classCallCheck.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/classCallCheck.js ***!
  \***************************************************************/
/***/ (function(module) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/createClass.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/createClass.js ***!
  \************************************************************/
/***/ (function(module) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/defineProperty.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/defineProperty.js ***!
  \***************************************************************/
/***/ (function(module) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/***/ (function(module) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inherits.js":
/*!*********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inherits.js ***!
  \*********************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) setPrototypeOf(subClass, superClass);
}

module.exports = _inherits;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/iterableToArray.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/iterableToArray.js ***!
  \****************************************************************/
/***/ (function(module) {

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/nonIterableSpread.js ***!
  \******************************************************************/
/***/ (function(module) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js ***!
  \**************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! @babel/runtime/helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

var assertThisInitialized = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return assertThisInitialized(self);
}

module.exports = _possibleConstructorReturn;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/***/ (function(module) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/toConsumableArray.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/toConsumableArray.js ***!
  \******************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(/*! ./arrayWithoutHoles */ "./node_modules/@babel/runtime/helpers/arrayWithoutHoles.js");

var iterableToArray = __webpack_require__(/*! ./iterableToArray */ "./node_modules/@babel/runtime/helpers/iterableToArray.js");

var unsupportedIterableToArray = __webpack_require__(/*! ./unsupportedIterableToArray */ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js");

var nonIterableSpread = __webpack_require__(/*! ./nonIterableSpread */ "./node_modules/@babel/runtime/helpers/nonIterableSpread.js");

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || unsupportedIterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/***/ (function(module) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/unsupportedIterableToArray.js ***!
  \***************************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(/*! ./arrayLikeToArray */ "./node_modules/@babel/runtime/helpers/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return arrayLikeToArray(o, minLen);
}

module.exports = _unsupportedIterableToArray;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp-context.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp-context.js ***!
  \***************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.AmpStateContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var AmpStateContext = /*#__PURE__*/_react["default"].createContext({});

exports.AmpStateContext = AmpStateContext;

if (true) {
  AmpStateContext.displayName = 'AmpStateContext';
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/amp.js":
/*!*******************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/amp.js ***!
  \*******************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _s = $RefreshSig$();

exports.__esModule = true;
exports.isInAmpMode = isInAmpMode;
exports.useAmp = useAmp;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _ampContext = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function isInAmpMode() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$ampFirst = _ref.ampFirst,
      ampFirst = _ref$ampFirst === void 0 ? false : _ref$ampFirst,
      _ref$hybrid = _ref.hybrid,
      hybrid = _ref$hybrid === void 0 ? false : _ref$hybrid,
      _ref$hasQuery = _ref.hasQuery,
      hasQuery = _ref$hasQuery === void 0 ? false : _ref$hasQuery;

  return ampFirst || hybrid && hasQuery;
}

function useAmp() {
  _s();

  // Don't assign the context value to a variable to save bytes
  return isInAmpMode(_react["default"].useContext(_ampContext.AmpStateContext));
}

_s(useAmp, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head-manager-context.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head-manager-context.js ***!
  \************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


exports.__esModule = true;
exports.HeadManagerContext = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

var HeadManagerContext = /*#__PURE__*/_react["default"].createContext({});

exports.HeadManagerContext = HeadManagerContext;

if (true) {
  HeadManagerContext.displayName = 'HeadManagerContext';
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/head.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/head.js ***!
  \********************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _defineProperty = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/defineProperty.js");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

exports.__esModule = true;
exports.defaultHead = defaultHead;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "./node_modules/react/index.js"));

var _sideEffect = _interopRequireDefault(__webpack_require__(/*! ./side-effect */ "./node_modules/next/dist/next-server/lib/side-effect.js"));

var _ampContext = __webpack_require__(/*! ./amp-context */ "./node_modules/next/dist/next-server/lib/amp-context.js");

var _headManagerContext = __webpack_require__(/*! ./head-manager-context */ "./node_modules/next/dist/next-server/lib/head-manager-context.js");

var _amp = __webpack_require__(/*! ./amp */ "./node_modules/next/dist/next-server/lib/amp.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function defaultHead() {
  var inAmpMode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  var head = [/*#__PURE__*/_react["default"].createElement("meta", {
    charSet: "utf-8"
  })];

  if (!inAmpMode) {
    head.push( /*#__PURE__*/_react["default"].createElement("meta", {
      name: "viewport",
      content: "width=device-width"
    }));
  }

  return head;
}

function onlyReactElement(list, child) {
  // React children can be "string" or "number" in this case we ignore them for backwards compat
  if (typeof child === 'string' || typeof child === 'number') {
    return list;
  } // Adds support for React.Fragment


  if (child.type === _react["default"].Fragment) {
    return list.concat(_react["default"].Children.toArray(child.props.children).reduce(function (fragmentList, fragmentChild) {
      if (typeof fragmentChild === 'string' || typeof fragmentChild === 'number') {
        return fragmentList;
      }

      return fragmentList.concat(fragmentChild);
    }, []));
  }

  return list.concat(child);
}

var METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp'];
/*
returns a function for filtering head child elements
which shouldn't be duplicated, like <title/>
Also adds support for deduplicated `key` properties
*/

function unique() {
  var keys = new Set();
  var tags = new Set();
  var metaTypes = new Set();
  var metaCategories = {};
  return function (h) {
    var isUnique = true;
    var hasKey = false;

    if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
      hasKey = true;
      var key = h.key.slice(h.key.indexOf('$') + 1);

      if (keys.has(key)) {
        isUnique = false;
      } else {
        keys.add(key);
      }
    } // eslint-disable-next-line default-case


    switch (h.type) {
      case 'title':
      case 'base':
        if (tags.has(h.type)) {
          isUnique = false;
        } else {
          tags.add(h.type);
        }

        break;

      case 'meta':
        for (var i = 0, len = METATYPES.length; i < len; i++) {
          var metatype = METATYPES[i];
          if (!h.props.hasOwnProperty(metatype)) continue;

          if (metatype === 'charSet') {
            if (metaTypes.has(metatype)) {
              isUnique = false;
            } else {
              metaTypes.add(metatype);
            }
          } else {
            var category = h.props[metatype];
            var categories = metaCategories[metatype] || new Set();

            if ((metatype !== 'name' || !hasKey) && categories.has(category)) {
              isUnique = false;
            } else {
              categories.add(category);
              metaCategories[metatype] = categories;
            }
          }
        }

        break;
    }

    return isUnique;
  };
}
/**
*
* @param headElements List of multiple <Head> instances
*/


function reduceComponents(headElements, props) {
  return headElements.reduce(function (list, headElement) {
    var headElementChildren = _react["default"].Children.toArray(headElement.props.children);

    return list.concat(headElementChildren);
  }, []).reduce(onlyReactElement, []).reverse().concat(defaultHead(props.inAmpMode)).filter(unique()).reverse().map(function (c, i) {
    var key = c.key || i;

    if (false) { var newProps; }

    return /*#__PURE__*/_react["default"].cloneElement(c, {
      key: key
    });
  });
}
/**
* This component injects elements to `<head>` of your page.
* To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
*/


function Head(_ref) {
  var children = _ref.children;
  var ampState = (0, _react.useContext)(_ampContext.AmpStateContext);
  var headManager = (0, _react.useContext)(_headManagerContext.HeadManagerContext);
  return /*#__PURE__*/_react["default"].createElement(_sideEffect["default"], {
    reduceComponentsToState: reduceComponents,
    headManager: headManager,
    inAmpMode: (0, _amp.isInAmpMode)(ampState)
  }, children);
}

_c = Head;
var _default = Head;
exports.default = _default;

var _c;

$RefreshReg$(_c, "Head");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/side-effect.js":
/*!***************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/side-effect.js ***!
  \***************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _toConsumableArray = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/toConsumableArray.js");

var _classCallCheck = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/classCallCheck.js");

var _createClass = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/createClass.js");

var _assertThisInitialized = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/assertThisInitialized.js");

var _inherits = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/inherits */ "./node_modules/@babel/runtime/helpers/inherits.js");

var _possibleConstructorReturn = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/possibleConstructorReturn.js");

var _getPrototypeOf = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

exports.__esModule = true;
exports.default = void 0;

var _react = __webpack_require__(/*! react */ "./node_modules/react/index.js");

var isServer = false;

var _default = /*#__PURE__*/function (_react$Component) {
  _inherits(_default, _react$Component);

  var _super = _createSuper(_default);

  function _default(props) {
    var _this;

    _classCallCheck(this, _default);

    _this = _super.call(this, props);
    _this._hasHeadManager = void 0;

    _this.emitChange = function () {
      if (_this._hasHeadManager) {
        _this.props.headManager.updateHead(_this.props.reduceComponentsToState(_toConsumableArray(_this.props.headManager.mountedInstances), _this.props));
      }
    };

    _this._hasHeadManager = _this.props.headManager && _this.props.headManager.mountedInstances;

    if (isServer && _this._hasHeadManager) {
      _this.props.headManager.mountedInstances.add(_assertThisInitialized(_this));

      _this.emitChange();
    }

    return _this;
  }

  _createClass(_default, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      if (this._hasHeadManager) {
        this.props.headManager.mountedInstances.add(this);
      }

      this.emitChange();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      this.emitChange();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this._hasHeadManager) {
        this.props.headManager.mountedInstances["delete"](this);
      }

      this.emitChange();
    }
  }, {
    key: "render",
    value: function render() {
      return null;
    }
  }]);

  return _default;
}(_react.Component);

exports.default = _default;

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./pages/indexfunction.js":
/*!********************************!*\
  !*** ./pages/indexfunction.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ indexfunction; }
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\projectnextjs\\pages\\indexfunction.js",
    _s = $RefreshSig$();



function indexfunction() {
  _s();

  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0),
      num = _useState[0],
      setNum = _useState[1];

  var decrease = function decrease() {
    console.log("Button was clicked");

    if (num > 0) {
      setNum(num - 1);
    }
  };

  var increase = function increase() {
    console.log("Button was clicked");

    if (num < 100) {
      setNum(num + 1);
    }
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("title", {
        children: "The Number"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 24,
        columnNumber: 17
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      children: "Number Change"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "button",
        onClick: decreaseNumber,
        children: "-"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("input", {
        type: "text",
        value: num
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 17
      }, this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
        type: "button",
        onClick: increaseNumber,
        children: "+"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 13
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 22,
    columnNumber: 9
  }, this);
}

_s(indexfunction, "5jvem6Tzl4A3nIMosDFhAMXGHnE=");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/head.js":
/*!***********************************!*\
  !*** ./node_modules/next/head.js ***!
  \***********************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/next-server/lib/head */ "./node_modules/next/dist/next-server/lib/head.js")


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlMaWtlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvYXJyYXlXaXRob3V0SG9sZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2Fzc2VydFRoaXNJbml0aWFsaXplZC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2suanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2NyZWF0ZUNsYXNzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZ2V0UHJvdG90eXBlT2YuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2luaGVyaXRzLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9zZXRQcm90b3R5cGVPZi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL3R5cGVvZi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2FtcC1jb250ZXh0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9hbXAuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQtbWFuYWdlci1jb250ZXh0LmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9oZWFkLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9zaWRlLWVmZmVjdC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXhmdW5jdGlvbi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvaGVhZC5qcyJdLCJuYW1lcyI6WyJleHBvcnRzIiwiX3JlYWN0IiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJvYmoiLCJfX2VzTW9kdWxlIiwiQW1wU3RhdGVDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsImRpc3BsYXlOYW1lIiwiaXNJbkFtcE1vZGUiLCJ1c2VBbXAiLCJfYW1wQ29udGV4dCIsImFtcEZpcnN0IiwiaHlicmlkIiwiaGFzUXVlcnkiLCJ1c2VDb250ZXh0IiwiSGVhZE1hbmFnZXJDb250ZXh0IiwiZGVmYXVsdEhlYWQiLCJfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZCIsIl9zaWRlRWZmZWN0IiwiX2hlYWRNYW5hZ2VyQ29udGV4dCIsIl9hbXAiLCJfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUiLCJXZWFrTWFwIiwiY2FjaGUiLCJoYXMiLCJnZXQiLCJuZXdPYmoiLCJoYXNQcm9wZXJ0eURlc2NyaXB0b3IiLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImdldE93blByb3BlcnR5RGVzY3JpcHRvciIsImtleSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsImRlc2MiLCJzZXQiLCJpbkFtcE1vZGUiLCJoZWFkIiwiY3JlYXRlRWxlbWVudCIsImNoYXJTZXQiLCJwdXNoIiwibmFtZSIsImNvbnRlbnQiLCJvbmx5UmVhY3RFbGVtZW50IiwibGlzdCIsImNoaWxkIiwidHlwZSIsIkZyYWdtZW50IiwiY29uY2F0IiwiQ2hpbGRyZW4iLCJ0b0FycmF5IiwicHJvcHMiLCJjaGlsZHJlbiIsInJlZHVjZSIsImZyYWdtZW50TGlzdCIsImZyYWdtZW50Q2hpbGQiLCJNRVRBVFlQRVMiLCJ1bmlxdWUiLCJrZXlzIiwiU2V0IiwidGFncyIsIm1ldGFUeXBlcyIsIm1ldGFDYXRlZ29yaWVzIiwiaCIsImlzVW5pcXVlIiwiaGFzS2V5IiwiaW5kZXhPZiIsInNsaWNlIiwiYWRkIiwiaSIsImxlbiIsImxlbmd0aCIsIm1ldGF0eXBlIiwiY2F0ZWdvcnkiLCJjYXRlZ29yaWVzIiwicmVkdWNlQ29tcG9uZW50cyIsImhlYWRFbGVtZW50cyIsImhlYWRFbGVtZW50IiwiaGVhZEVsZW1lbnRDaGlsZHJlbiIsInJldmVyc2UiLCJmaWx0ZXIiLCJtYXAiLCJjIiwiY2xvbmVFbGVtZW50IiwiSGVhZCIsImFtcFN0YXRlIiwiaGVhZE1hbmFnZXIiLCJyZWR1Y2VDb21wb25lbnRzVG9TdGF0ZSIsIl9kZWZhdWx0IiwiaXNTZXJ2ZXIiLCJfaGFzSGVhZE1hbmFnZXIiLCJlbWl0Q2hhbmdlIiwidXBkYXRlSGVhZCIsIm1vdW50ZWRJbnN0YW5jZXMiLCJDb21wb25lbnQiLCJpbmRleGZ1bmN0aW9uIiwidXNlU3RhdGUiLCJudW0iLCJzZXROdW0iLCJkZWNyZWFzZSIsImNvbnNvbGUiLCJsb2ciLCJpbmNyZWFzZSIsImRlY3JlYXNlTnVtYmVyIiwiaW5jcmVhc2VOdW1iZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUE7QUFDQTs7QUFFQSx3Q0FBd0MsU0FBUztBQUNqRDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsbUM7Ozs7Ozs7Ozs7QUNWQSx1QkFBdUIsbUJBQU8sQ0FBQyxxRkFBb0I7O0FBRW5EO0FBQ0E7QUFDQTs7QUFFQSxvQzs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsd0M7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGlDOzs7Ozs7Ozs7O0FDTkE7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsOEI7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSxpQzs7Ozs7Ozs7OztBQ2ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxpQzs7Ozs7Ozs7OztBQ1BBLHFCQUFxQixtQkFBTyxDQUFDLGlGQUFrQjs7QUFFL0M7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUEsMkI7Ozs7Ozs7Ozs7QUNqQkE7QUFDQTtBQUNBOztBQUVBLGtDOzs7Ozs7Ozs7O0FDSkE7QUFDQTtBQUNBOztBQUVBLG9DOzs7Ozs7Ozs7O0FDSkEsY0FBYyxtQkFBTyxDQUFDLHNGQUErQjs7QUFFckQsNEJBQTRCLG1CQUFPLENB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QUFBO0FBQUE7QUFBQSxjQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURKO0FBaUJIOztHQWxDdUJULGE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0h4QiwySEFBdUQiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXhmdW5jdGlvbi44YTQ3MjhmNTkyODIxY2RjMDczYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheUxpa2VUb0FycmF5OyIsInZhciBhcnJheUxpa2VUb0FycmF5ID0gcmVxdWlyZShcIi4vYXJyYXlMaWtlVG9BcnJheVwiKTtcblxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hcnJheVdpdGhvdXRIb2xlczsiLCJmdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpIHtcbiAgaWYgKHNlbGYgPT09IHZvaWQgMCkge1xuICAgIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihcInRoaXMgaGFzbid0IGJlZW4gaW5pdGlhbGlzZWQgLSBzdXBlcigpIGhhc24ndCBiZWVuIGNhbGxlZFwiKTtcbiAgfVxuXG4gIHJldHVybiBzZWxmO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQ7IiwiZnVuY3Rpb24gX2NsYXNzQ2FsbENoZWNrKGluc3RhbmNlLCBDb25zdHJ1Y3Rvcikge1xuICBpZiAoIShpbnN0YW5jZSBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfY2xhc3NDYWxsQ2hlY2s7IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVDbGFzczsiLCJmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfZGVmaW5lUHJvcGVydHk7IiwiZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKG8pIHtcbiAgbW9kdWxlLmV4cG9ydHMgPSBfZ2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3QuZ2V0UHJvdG90eXBlT2YgOiBmdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2Yobykge1xuICAgIHJldHVybiBvLl9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2Yobyk7XG4gIH07XG4gIHJldHVybiBfZ2V0UHJvdG90eXBlT2Yobyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2dldFByb3RvdHlwZU9mOyIsInZhciBzZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoXCIuL3NldFByb3RvdHlwZU9mXCIpO1xuXG5mdW5jdGlvbiBfaW5oZXJpdHMoc3ViQ2xhc3MsIHN1cGVyQ2xhc3MpIHtcbiAgaWYgKHR5cGVvZiBzdXBlckNsYXNzICE9PSBcImZ1bmN0aW9uXCIgJiYgc3VwZXJDbGFzcyAhPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTtcbiAgfVxuXG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcyAmJiBzdXBlckNsYXNzLnByb3RvdHlwZSwge1xuICAgIGNvbnN0cnVjdG9yOiB7XG4gICAgICB2YWx1ZTogc3ViQ2xhc3MsXG4gICAgICB3cml0YWJsZTogdHJ1ZSxcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZVxuICAgIH1cbiAgfSk7XG4gIGlmIChzdXBlckNsYXNzKSBzZXRQcm90b3R5cGVPZihzdWJDbGFzcywgc3VwZXJDbGFzcyk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2luaGVyaXRzOyIsImZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBTeW1ib2wuaXRlcmF0b3IgaW4gT2JqZWN0KGl0ZXIpKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfaXRlcmFibGVUb0FycmF5OyIsImZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX25vbkl0ZXJhYmxlU3ByZWFkOyIsInZhciBfdHlwZW9mID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvdHlwZW9mXCIpO1xuXG52YXIgYXNzZXJ0VGhpc0luaXRpYWxpemVkID0gcmVxdWlyZShcIi4vYXNzZXJ0VGhpc0luaXRpYWxpemVkXCIpO1xuXG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybihzZWxmLCBjYWxsKSB7XG4gIGlmIChjYWxsICYmIChfdHlwZW9mKGNhbGwpID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBjYWxsID09PSBcImZ1bmN0aW9uXCIpKSB7XG4gICAgcmV0dXJuIGNhbGw7XG4gIH1cblxuICByZXR1cm4gYXNzZXJ0VGhpc0luaXRpYWxpemVkKHNlbGYpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuOyIsImZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gIG1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZihvLCBwKSB7XG4gICAgby5fX3Byb3RvX18gPSBwO1xuICAgIHJldHVybiBvO1xuICB9O1xuXG4gIHJldHVybiBfc2V0UHJvdG90eXBlT2YobywgcCk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX3NldFByb3RvdHlwZU9mOyIsInZhciBhcnJheVdpdGhvdXRIb2xlcyA9IHJlcXVpcmUoXCIuL2FycmF5V2l0aG91dEhvbGVzXCIpO1xuXG52YXIgaXRlcmFibGVUb0FycmF5ID0gcmVxdWlyZShcIi4vaXRlcmFibGVUb0FycmF5XCIpO1xuXG52YXIgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgPSByZXF1aXJlKFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheVwiKTtcblxudmFyIG5vbkl0ZXJhYmxlU3ByZWFkID0gcmVxdWlyZShcIi4vbm9uSXRlcmFibGVTcHJlYWRcIik7XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHtcbiAgcmV0dXJuIGFycmF5V2l0aG91dEhvbGVzKGFycikgfHwgaXRlcmFibGVUb0FycmF5KGFycikgfHwgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90b0NvbnN1bWFibGVBcnJheTsiLCJmdW5jdGlvbiBfdHlwZW9mKG9iaikge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgaWYgKHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID09PSBcInN5bWJvbFwiKSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH0gZWxzZSB7XG4gICAgbW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mID0gZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgICAgIHJldHVybiBvYmogJiYgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gX3R5cGVvZihvYmopO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF90eXBlb2Y7IiwidmFyIGFycmF5TGlrZVRvQXJyYXkgPSByZXF1aXJlKFwiLi9hcnJheUxpa2VUb0FycmF5XCIpO1xuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheTsiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLkFtcFN0YXRlQ29udGV4dD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmope3JldHVybiBvYmomJm9iai5fX2VzTW9kdWxlP29iajp7ZGVmYXVsdDpvYmp9O31jb25zdCBBbXBTdGF0ZUNvbnRleHQ9LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUNvbnRleHQoe30pO2V4cG9ydHMuQW1wU3RhdGVDb250ZXh0PUFtcFN0YXRlQ29udGV4dDtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7QW1wU3RhdGVDb250ZXh0LmRpc3BsYXlOYW1lPSdBbXBTdGF0ZUNvbnRleHQnO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFtcC1jb250ZXh0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuaXNJbkFtcE1vZGU9aXNJbkFtcE1vZGU7ZXhwb3J0cy51c2VBbXA9dXNlQW1wO3ZhciBfcmVhY3Q9X2ludGVyb3BSZXF1aXJlRGVmYXVsdChyZXF1aXJlKFwicmVhY3RcIikpO3ZhciBfYW1wQ29udGV4dD1yZXF1aXJlKFwiLi9hbXAtY29udGV4dFwiKTtmdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KG9iail7cmV0dXJuIG9iaiYmb2JqLl9fZXNNb2R1bGU/b2JqOntkZWZhdWx0Om9ian07fWZ1bmN0aW9uIGlzSW5BbXBNb2RlKHthbXBGaXJzdD1mYWxzZSxoeWJyaWQ9ZmFsc2UsaGFzUXVlcnk9ZmFsc2V9PXt9KXtyZXR1cm4gYW1wRmlyc3R8fGh5YnJpZCYmaGFzUXVlcnk7fWZ1bmN0aW9uIHVzZUFtcCgpey8vIERvbid0IGFzc2lnbiB0aGUgY29udGV4dCB2YWx1ZSB0byBhIHZhcmlhYmxlIHRvIHNhdmUgYnl0ZXNcbnJldHVybiBpc0luQW1wTW9kZShfcmVhY3QuZGVmYXVsdC51c2VDb250ZXh0KF9hbXBDb250ZXh0LkFtcFN0YXRlQ29udGV4dCkpO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFtcC5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtleHBvcnRzLl9fZXNNb2R1bGU9dHJ1ZTtleHBvcnRzLkhlYWRNYW5hZ2VyQ29udGV4dD12b2lkIDA7dmFyIF9yZWFjdD1faW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCJyZWFjdFwiKSk7ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmope3JldHVybiBvYmomJm9iai5fX2VzTW9kdWxlP29iajp7ZGVmYXVsdDpvYmp9O31jb25zdCBIZWFkTWFuYWdlckNvbnRleHQ9LyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUNvbnRleHQoe30pO2V4cG9ydHMuSGVhZE1hbmFnZXJDb250ZXh0PUhlYWRNYW5hZ2VyQ29udGV4dDtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdwcm9kdWN0aW9uJyl7SGVhZE1hbmFnZXJDb250ZXh0LmRpc3BsYXlOYW1lPSdIZWFkTWFuYWdlckNvbnRleHQnO31cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhlYWQtbWFuYWdlci1jb250ZXh0LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO2V4cG9ydHMuX19lc01vZHVsZT10cnVlO2V4cG9ydHMuZGVmYXVsdEhlYWQ9ZGVmYXVsdEhlYWQ7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PV9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKHJlcXVpcmUoXCJyZWFjdFwiKSk7dmFyIF9zaWRlRWZmZWN0PV9pbnRlcm9wUmVxdWlyZURlZmF1bHQocmVxdWlyZShcIi4vc2lkZS1lZmZlY3RcIikpO3ZhciBfYW1wQ29udGV4dD1yZXF1aXJlKFwiLi9hbXAtY29udGV4dFwiKTt2YXIgX2hlYWRNYW5hZ2VyQ29udGV4dD1yZXF1aXJlKFwiLi9oZWFkLW1hbmFnZXItY29udGV4dFwiKTt2YXIgX2FtcD1yZXF1aXJlKFwiLi9hbXBcIik7ZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmope3JldHVybiBvYmomJm9iai5fX2VzTW9kdWxlP29iajp7ZGVmYXVsdDpvYmp9O31mdW5jdGlvbiBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKXtpZih0eXBlb2YgV2Vha01hcCE9PVwiZnVuY3Rpb25cIilyZXR1cm4gbnVsbDt2YXIgY2FjaGU9bmV3IFdlYWtNYXAoKTtfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGU9ZnVuY3Rpb24oKXtyZXR1cm4gY2FjaGU7fTtyZXR1cm4gY2FjaGU7fWZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZVdpbGRjYXJkKG9iail7aWYob2JqJiZvYmouX19lc01vZHVsZSl7cmV0dXJuIG9iajt9aWYob2JqPT09bnVsbHx8dHlwZW9mIG9iaiE9PVwib2JqZWN0XCImJnR5cGVvZiBvYmohPT1cImZ1bmN0aW9uXCIpe3JldHVybntkZWZhdWx0Om9ian07fXZhciBjYWNoZT1fZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtpZihjYWNoZSYmY2FjaGUuaGFzKG9iaikpe3JldHVybiBjYWNoZS5nZXQob2JqKTt9dmFyIG5ld09iaj17fTt2YXIgaGFzUHJvcGVydHlEZXNjcmlwdG9yPU9iamVjdC5kZWZpbmVQcm9wZXJ0eSYmT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtmb3IodmFyIGtleSBpbiBvYmope2lmKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosa2V5KSl7dmFyIGRlc2M9aGFzUHJvcGVydHlEZXNjcmlwdG9yP09iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3Iob2JqLGtleSk6bnVsbDtpZihkZXNjJiYoZGVzYy5nZXR8fGRlc2Muc2V0KSl7T2JqZWN0LmRlZmluZVByb3BlcnR5KG5ld09iaixrZXksZGVzYyk7fWVsc2V7bmV3T2JqW2tleV09b2JqW2tleV07fX19bmV3T2JqLmRlZmF1bHQ9b2JqO2lmKGNhY2hlKXtjYWNoZS5zZXQob2JqLG5ld09iaik7fXJldHVybiBuZXdPYmo7fWZ1bmN0aW9uIGRlZmF1bHRIZWFkKGluQW1wTW9kZT1mYWxzZSl7Y29uc3QgaGVhZD1bLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJtZXRhXCIse2NoYXJTZXQ6XCJ1dGYtOFwifSldO2lmKCFpbkFtcE1vZGUpe2hlYWQucHVzaCgvKiNfX1BVUkVfXyovX3JlYWN0LmRlZmF1bHQuY3JlYXRlRWxlbWVudChcIm1ldGFcIix7bmFtZTpcInZpZXdwb3J0XCIsY29udGVudDpcIndpZHRoPWRldmljZS13aWR0aFwifSkpO31yZXR1cm4gaGVhZDt9ZnVuY3Rpb24gb25seVJlYWN0RWxlbWVudChsaXN0LGNoaWxkKXsvLyBSZWFjdCBjaGlsZHJlbiBjYW4gYmUgXCJzdHJpbmdcIiBvciBcIm51bWJlclwiIGluIHRoaXMgY2FzZSB3ZSBpZ25vcmUgdGhlbSBmb3IgYmFja3dhcmRzIGNvbXBhdFxuaWYodHlwZW9mIGNoaWxkPT09J3N0cmluZyd8fHR5cGVvZiBjaGlsZD09PSdudW1iZXInKXtyZXR1cm4gbGlzdDt9Ly8gQWRkcyBzdXBwb3J0IGZvciBSZWFjdC5GcmFnbWVudFxuaWYoY2hpbGQudHlwZT09PV9yZWFjdC5kZWZhdWx0LkZyYWdtZW50KXtyZXR1cm4gbGlzdC5jb25jYXQoX3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4udG9BcnJheShjaGlsZC5wcm9wcy5jaGlsZHJlbikucmVkdWNlKChmcmFnbWVudExpc3QsZnJhZ21lbnRDaGlsZCk9PntpZih0eXBlb2YgZnJhZ21lbnRDaGlsZD09PSdzdHJpbmcnfHx0eXBlb2YgZnJhZ21lbnRDaGlsZD09PSdudW1iZXInKXtyZXR1cm4gZnJhZ21lbnRMaXN0O31yZXR1cm4gZnJhZ21lbnRMaXN0LmNvbmNhdChmcmFnbWVudENoaWxkKTt9LFtdKSk7fXJldHVybiBsaXN0LmNvbmNhdChjaGlsZCk7fWNvbnN0IE1FVEFUWVBFUz1bJ25hbWUnLCdodHRwRXF1aXYnLCdjaGFyU2V0JywnaXRlbVByb3AnXTsvKlxuIHJldHVybnMgYSBmdW5jdGlvbiBmb3IgZmlsdGVyaW5nIGhlYWQgY2hpbGQgZWxlbWVudHNcbiB3aGljaCBzaG91bGRuJ3QgYmUgZHVwbGljYXRlZCwgbGlrZSA8dGl0bGUvPlxuIEFsc28gYWRkcyBzdXBwb3J0IGZvciBkZWR1cGxpY2F0ZWQgYGtleWAgcHJvcGVydGllc1xuKi9mdW5jdGlvbiB1bmlxdWUoKXtjb25zdCBrZXlzPW5ldyBTZXQoKTtjb25zdCB0YWdzPW5ldyBTZXQoKTtjb25zdCBtZXRhVHlwZXM9bmV3IFNldCgpO2NvbnN0IG1ldGFDYXRlZ29yaWVzPXt9O3JldHVybiBoPT57bGV0IGlzVW5pcXVlPXRydWU7bGV0IGhhc0tleT1mYWxzZTtpZihoLmtleSYmdHlwZW9mIGgua2V5IT09J251bWJlcicmJmgua2V5LmluZGV4T2YoJyQnKT4wKXtoYXNLZXk9dHJ1ZTtjb25zdCBrZXk9aC5rZXkuc2xpY2UoaC5rZXkuaW5kZXhPZignJCcpKzEpO2lmKGtleXMuaGFzKGtleSkpe2lzVW5pcXVlPWZhbHNlO31lbHNle2tleXMuYWRkKGtleSk7fX0vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZGVmYXVsdC1jYXNlXG5zd2l0Y2goaC50eXBlKXtjYXNlJ3RpdGxlJzpjYXNlJ2Jhc2UnOmlmKHRhZ3MuaGFzKGgudHlwZSkpe2lzVW5pcXVlPWZhbHNlO31lbHNle3RhZ3MuYWRkKGgudHlwZSk7fWJyZWFrO2Nhc2UnbWV0YSc6Zm9yKGxldCBpPTAsbGVuPU1FVEFUWVBFUy5sZW5ndGg7aTxsZW47aSsrKXtjb25zdCBtZXRhdHlwZT1NRVRBVFlQRVNbaV07aWYoIWgucHJvcHMuaGFzT3duUHJvcGVydHkobWV0YXR5cGUpKWNvbnRpbnVlO2lmKG1ldGF0eXBlPT09J2NoYXJTZXQnKXtpZihtZXRhVHlwZXMuaGFzKG1ldGF0eXBlKSl7aXNVbmlxdWU9ZmFsc2U7fWVsc2V7bWV0YVR5cGVzLmFkZChtZXRhdHlwZSk7fX1lbHNle2NvbnN0IGNhdGVnb3J5PWgucHJvcHNbbWV0YXR5cGVdO2NvbnN0IGNhdGVnb3JpZXM9bWV0YUNhdGVnb3JpZXNbbWV0YXR5cGVdfHxuZXcgU2V0KCk7aWYoKG1ldGF0eXBlIT09J25hbWUnfHwhaGFzS2V5KSYmY2F0ZWdvcmllcy5oYXMoY2F0ZWdvcnkpKXtpc1VuaXF1ZT1mYWxzZTt9ZWxzZXtjYXRlZ29yaWVzLmFkZChjYXRlZ29yeSk7bWV0YUNhdGVnb3JpZXNbbWV0YXR5cGVdPWNhdGVnb3JpZXM7fX19YnJlYWs7fXJldHVybiBpc1VuaXF1ZTt9O30vKipcbiAqXG4gKiBAcGFyYW0gaGVhZEVsZW1lbnRzIExpc3Qgb2YgbXVsdGlwbGUgPEhlYWQ+IGluc3RhbmNlc1xuICovZnVuY3Rpb24gcmVkdWNlQ29tcG9uZW50cyhoZWFkRWxlbWVudHMscHJvcHMpe3JldHVybiBoZWFkRWxlbWVudHMucmVkdWNlKChsaXN0LGhlYWRFbGVtZW50KT0+e2NvbnN0IGhlYWRFbGVtZW50Q2hpbGRyZW49X3JlYWN0LmRlZmF1bHQuQ2hpbGRyZW4udG9BcnJheShoZWFkRWxlbWVudC5wcm9wcy5jaGlsZHJlbik7cmV0dXJuIGxpc3QuY29uY2F0KGhlYWRFbGVtZW50Q2hpbGRyZW4pO30sW10pLnJlZHVjZShvbmx5UmVhY3RFbGVtZW50LFtdKS5yZXZlcnNlKCkuY29uY2F0KGRlZmF1bHRIZWFkKHByb3BzLmluQW1wTW9kZSkpLmZpbHRlcih1bmlxdWUoKSkucmV2ZXJzZSgpLm1hcCgoYyxpKT0+e2NvbnN0IGtleT1jLmtleXx8aTtpZihwcm9jZXNzLmVudi5OT0RFX0VOViE9PSdkZXZlbG9wbWVudCcmJnByb2Nlc3MuZW52Ll9fTkVYVF9PUFRJTUlaRV9GT05UUyYmIXByb3BzLmluQW1wTW9kZSl7aWYoYy50eXBlPT09J2xpbmsnJiZjLnByb3BzWydocmVmJ10mJi8vIFRPRE8ocHJhdGVla2JoQCk6IFJlcGxhY2UgdGhpcyB3aXRoIGNvbnN0IGZyb20gYGNvbnN0YW50c2Agd2hlbiB0aGUgdHJlZSBzaGFraW5nIHdvcmtzLlxuWydodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzcycsJ2h0dHBzOi8vdXNlLnR5cGVraXQubmV0LyddLnNvbWUodXJsPT5jLnByb3BzWydocmVmJ10uc3RhcnRzV2l0aCh1cmwpKSl7Y29uc3QgbmV3UHJvcHM9ey4uLihjLnByb3BzfHx7fSl9O25ld1Byb3BzWydkYXRhLWhyZWYnXT1uZXdQcm9wc1snaHJlZiddO25ld1Byb3BzWydocmVmJ109dW5kZWZpbmVkOy8vIEFkZCB0aGlzIGF0dHJpYnV0ZSB0byBtYWtlIGl0IGVhc3kgdG8gaWRlbnRpZnkgb3B0aW1pemVkIHRhZ3Ncbm5ld1Byb3BzWydkYXRhLW9wdGltaXplZC1mb250cyddPXRydWU7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNsb25lRWxlbWVudChjLG5ld1Byb3BzKTt9fXJldHVybi8qI19fUFVSRV9fKi9fcmVhY3QuZGVmYXVsdC5jbG9uZUVsZW1lbnQoYyx7a2V5fSk7fSk7fS8qKlxuICogVGhpcyBjb21wb25lbnQgaW5qZWN0cyBlbGVtZW50cyB0byBgPGhlYWQ+YCBvZiB5b3VyIHBhZ2UuXG4gKiBUbyBhdm9pZCBkdXBsaWNhdGVkIGB0YWdzYCBpbiBgPGhlYWQ+YCB5b3UgY2FuIHVzZSB0aGUgYGtleWAgcHJvcGVydHksIHdoaWNoIHdpbGwgbWFrZSBzdXJlIGV2ZXJ5IHRhZyBpcyBvbmx5IHJlbmRlcmVkIG9uY2UuXG4gKi9mdW5jdGlvbiBIZWFkKHtjaGlsZHJlbn0pe2NvbnN0IGFtcFN0YXRlPSgwLF9yZWFjdC51c2VDb250ZXh0KShfYW1wQ29udGV4dC5BbXBTdGF0ZUNvbnRleHQpO2NvbnN0IGhlYWRNYW5hZ2VyPSgwLF9yZWFjdC51c2VDb250ZXh0KShfaGVhZE1hbmFnZXJDb250ZXh0LkhlYWRNYW5hZ2VyQ29udGV4dCk7cmV0dXJuLyojX19QVVJFX18qL19yZWFjdC5kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoX3NpZGVFZmZlY3QuZGVmYXVsdCx7cmVkdWNlQ29tcG9uZW50c1RvU3RhdGU6cmVkdWNlQ29tcG9uZW50cyxoZWFkTWFuYWdlcjpoZWFkTWFuYWdlcixpbkFtcE1vZGU6KDAsX2FtcC5pc0luQW1wTW9kZSkoYW1wU3RhdGUpfSxjaGlsZHJlbik7fXZhciBfZGVmYXVsdD1IZWFkO2V4cG9ydHMuZGVmYXVsdD1fZGVmYXVsdDtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWhlYWQuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5kZWZhdWx0PXZvaWQgMDt2YXIgX3JlYWN0PXJlcXVpcmUoXCJyZWFjdFwiKTtjb25zdCBpc1NlcnZlcj10eXBlb2Ygd2luZG93PT09J3VuZGVmaW5lZCc7Y2xhc3MgX2RlZmF1bHQgZXh0ZW5kcyBfcmVhY3QuQ29tcG9uZW50e2NvbnN0cnVjdG9yKHByb3BzKXtzdXBlcihwcm9wcyk7dGhpcy5faGFzSGVhZE1hbmFnZXI9dm9pZCAwO3RoaXMuZW1pdENoYW5nZT0oKT0+e2lmKHRoaXMuX2hhc0hlYWRNYW5hZ2VyKXt0aGlzLnByb3BzLmhlYWRNYW5hZ2VyLnVwZGF0ZUhlYWQodGhpcy5wcm9wcy5yZWR1Y2VDb21wb25lbnRzVG9TdGF0ZShbLi4udGhpcy5wcm9wcy5oZWFkTWFuYWdlci5tb3VudGVkSW5zdGFuY2VzXSx0aGlzLnByb3BzKSk7fX07dGhpcy5faGFzSGVhZE1hbmFnZXI9dGhpcy5wcm9wcy5oZWFkTWFuYWdlciYmdGhpcy5wcm9wcy5oZWFkTWFuYWdlci5tb3VudGVkSW5zdGFuY2VzO2lmKGlzU2VydmVyJiZ0aGlzLl9oYXNIZWFkTWFuYWdlcil7dGhpcy5wcm9wcy5oZWFkTWFuYWdlci5tb3VudGVkSW5zdGFuY2VzLmFkZCh0aGlzKTt0aGlzLmVtaXRDaGFuZ2UoKTt9fWNvbXBvbmVudERpZE1vdW50KCl7aWYodGhpcy5faGFzSGVhZE1hbmFnZXIpe3RoaXMucHJvcHMuaGVhZE1hbmFnZXIubW91bnRlZEluc3RhbmNlcy5hZGQodGhpcyk7fXRoaXMuZW1pdENoYW5nZSgpO31jb21wb25lbnREaWRVcGRhdGUoKXt0aGlzLmVtaXRDaGFuZ2UoKTt9Y29tcG9uZW50V2lsbFVubW91bnQoKXtpZih0aGlzLl9oYXNIZWFkTWFuYWdlcil7dGhpcy5wcm9wcy5oZWFkTWFuYWdlci5tb3VudGVkSW5zdGFuY2VzLmRlbGV0ZSh0aGlzKTt9dGhpcy5lbWl0Q2hhbmdlKCk7fXJlbmRlcigpe3JldHVybiBudWxsO319ZXhwb3J0cy5kZWZhdWx0PV9kZWZhdWx0O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9c2lkZS1lZmZlY3QuanMubWFwIiwiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluZGV4ZnVuY3Rpb24oKSB7XHJcbiAgICBjb25zdCBbbnVtLCBzZXROdW1dID0gdXNlU3RhdGUoMClcclxuICAgIFxyXG4gICAgY29uc3QgZGVjcmVhc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJCdXR0b24gd2FzIGNsaWNrZWRcIik7XHJcbiAgICAgICAgaWYgKG51bSA+IDApIHtcclxuICAgICAgICAgICAgc2V0TnVtKG51bS0xKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpbmNyZWFzZSA9ICgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcIkJ1dHRvbiB3YXMgY2xpY2tlZFwiKTtcclxuICAgICAgICBpZiAobnVtIDwgMTAwKSB7XHJcbiAgICAgICAgICAgIHNldE51bShudW0rMSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8SGVhZD5cclxuICAgICAgICAgICAgICAgIDx0aXRsZT5UaGUgTnVtYmVyPC90aXRsZT5cclxuICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8cD5OdW1iZXIgQ2hhbmdlPC9wPlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPVwiYnV0dG9uXCIgb25DbGljaz17ZGVjcmVhc2VOdW1iZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgIC1cclxuICAgICAgICAgICAgICAgIDwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgdmFsdWU9e251bX0+PC9pbnB1dD5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIG9uQ2xpY2s9e2luY3JlYXNlTnVtYmVyfT5cclxuICAgICAgICAgICAgICAgICAgICArXHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvbmV4dC1zZXJ2ZXIvbGliL2hlYWQnKVxuIl0sInNvdXJjZVJvb3QiOiIifQ==