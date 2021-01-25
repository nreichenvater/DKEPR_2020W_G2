webpackHotUpdate_N_E("pages/settings",{

/***/ "./pages/settings.js":
/*!***************************!*\
  !*** ./pages/settings.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_auth_withAuth__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/auth/withAuth */ "./components/auth/withAuth.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../api */ "./api.js");
/* harmony import */ var _components_auth_authservice__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/auth/authservice */ "./components/auth/authservice.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);







var _jsxFileName = "C:\\Users\\Nico\\Dropbox\\Studium\\5. Semester\\DKE PR\\frontend\\pages\\settings.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var Settings = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Settings, _Component);

  var _super = _createSuper(Settings);

  function Settings(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Settings);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "logOut", function (e) {
      if (e) {
        e.preventDefault();
      }

      localStorage.removeItem("Authorization");
      localStorage.removeItem("user");
      next_router__WEBPACK_IMPORTED_MODULE_12___default.a.push("/login");
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleRadio", function (e) {
      if (e) {
        e.preventDefault();
      }

      var visible = true;

      if (document.getElementById('radioPublic').checked) {
        visible = true;
      } else if (document.getElementById('radioPrivate').checked) {
        visible = false;
      }

      _api__WEBPACK_IMPORTED_MODULE_10__["default"].patch('/visibility', visible, _components_auth_authservice__WEBPACK_IMPORTED_MODULE_11__["default"].getHeader()).then(function (res) {
        if (res.status === 200) {
          console.log(res);
        }
      })["catch"](function (err) {
        console.log(err);
      });
    });

    _this.state = {
      loggedIn: true,
      posts: []
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Settings, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _api__WEBPACK_IMPORTED_MODULE_10__["default"].get('/visibility', _components_auth_authservice__WEBPACK_IMPORTED_MODULE_11__["default"].getHeader()).then(function (res) {
        if (res.status === 200) {
          console.log(res);
          var visible = res.data.visible;

          if (visible) {
            document.getElementById('radioPublic').checked = true;
            document.getElementById('radioPrivate').checked = false;
          }
        }
      })["catch"](function (err) {
        console.log(err);
      });
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx("div", {
        className: "page",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 13
        }
      }, __jsx("div", {
        id: "HeaderSection",
        "class": "defaultsection header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 17
        }
      }, __jsx("div", {
        "class": "defaultcontainer header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71,
          columnNumber: 21
        }
      }, __jsx("div", {
        "class": "navigationdiv nomarginbottom",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 25
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 29
        }
      }, __jsx("a", {
        href: "#",
        className: "logo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 44
        }
      }, "Mooder")), __jsx("div", {
        "class": "headerspace",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 29
        }
      }), __jsx("ul", {
        className: "headermenu",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 29
        }
      }, __jsx("li", {
        className: "headermenuitem",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 33
        }
      }, "Hallo, ", localStorage.getItem("user"), "!"), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 33
        }
      }, __jsx("a", {
        className: "headermenuitem",
        onClick: this.logOut,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77,
          columnNumber: 37
        }
      }, "Ausloggen")))))), __jsx("div", {
        "class": "defaultsection main",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 17
        }
      }, __jsx("div", {
        "class": "defaultcontainer index",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "sidemenudiv",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "sidemenulist",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 29
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 33
        }
      }, __jsx("a", {
        href: "#",
        className: "sidemenulistentry",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 48
        }
      }, "Feed / Post Erstellen")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/recentposts",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 33
        }
      }, __jsx("a", {
        href: "#",
        className: "sidemenulistentry",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87,
          columnNumber: 59
        }
      }, "Aktuelle Posts")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/personalposts",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 33
        }
      }, __jsx("a", {
        href: "#",
        className: "sidemenulistentry",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88,
          columnNumber: 61
        }
      }, "Meine Posts")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/friends",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 33
        }
      }, __jsx("a", {
        href: "#",
        className: "sidemenulistentry",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 55
        }
      }, "Freunde")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/search",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 33
        }
      }, __jsx("a", {
        href: "#",
        className: "sidemenulistentry",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 54
        }
      }, "Suche")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/settings",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 33
        }
      }, __jsx("a", {
        href: "#",
        className: "sidemenulistentry selected",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 56
        }
      }, "Einstellungen")))), __jsx("div", {
        className: "contentdiv",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "feeddiv",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 29
        }
      }, __jsx("div", {
        "class": "descriptiontext marginbottom margintop",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 33
        }
      }, "Wenn dein Konto privat ist, kannst weder du, noch Posts von dir \xF6ffentlich gefunden werden, au\xDFer von deinen Followern."), __jsx("label", {
        "class": "settingsradiobutton",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 33
        }
      }, __jsx("input", {
        type: "radio",
        onClick: this.handleRadio.bind(this),
        "data-name": "Radio",
        id: "radioPublic",
        name: "radioPrivate",
        value: "Radio",
        "class": "radio",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 37
        }
      }), __jsx("span", {
        "class": "radio span",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 37
        }
      }, "\xD6ffentliches Konto")), __jsx("label", {
        "class": "settingsradiobutton",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101,
          columnNumber: 33
        }
      }, __jsx("input", {
        type: "radio",
        onClick: this.handleRadio.bind(this),
        "data-name": "Radio",
        id: "radioPrivate",
        name: "radioPrivate",
        value: "Radio",
        "class": "radio",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 37
        }
      }), __jsx("span", {
        "class": "radio span",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 37
        }
      }, "Privates Konto")))))), __jsx("div", {
        className: "blank",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
          columnNumber: 17
        }
      }));
    }
  }]);

  return Settings;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (_c = Object(_components_auth_withAuth__WEBPACK_IMPORTED_MODULE_9__["default"])(Settings));

var _c;

$RefreshReg$(_c, "%default%");

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
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2V0dGluZ3MuanMiXSwibmFtZXMiOlsiU2V0dGluZ3MiLCJwcm9wcyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJSb3V0ZXIiLCJwdXNoIiwidmlzaWJsZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjaGVja2VkIiwiQVBJIiwicGF0Y2giLCJBdXRoIiwiZ2V0SGVhZGVyIiwidGhlbiIsInJlcyIsInN0YXR1cyIsImNvbnNvbGUiLCJsb2ciLCJlcnIiLCJzdGF0ZSIsImxvZ2dlZEluIiwicG9zdHMiLCJnZXQiLCJkYXRhIiwiZ2V0SXRlbSIsImxvZ091dCIsImhhbmRsZVJhZGlvIiwiYmluZCIsIkNvbXBvbmVudCIsIndpdGhBdXRoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7SUFFTUEsUTs7Ozs7QUFDRixvQkFBWUMsS0FBWixFQUFrQjtBQUFBOztBQUFBOztBQUNkLDhCQUFNQSxLQUFOOztBQURjLGlOQTBCVCxVQUFDQyxDQUFELEVBQU87QUFDWixVQUFHQSxDQUFILEVBQUs7QUFDREEsU0FBQyxDQUFDQyxjQUFGO0FBQ0g7O0FBQ0RDLGtCQUFZLENBQUNDLFVBQWIsQ0FBd0IsZUFBeEI7QUFDQUQsa0JBQVksQ0FBQ0MsVUFBYixDQUF3QixNQUF4QjtBQUNBQyx5REFBTSxDQUFDQyxJQUFQLENBQVksUUFBWjtBQUNILEtBakNpQjs7QUFBQSxzTkFtQ0osVUFBQ0wsQ0FBRCxFQUFPO0FBQ2pCLFVBQUdBLENBQUgsRUFBSztBQUNEQSxTQUFDLENBQUNDLGNBQUY7QUFDSDs7QUFDRCxVQUFJSyxPQUFPLEdBQUcsSUFBZDs7QUFDQSxVQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsYUFBeEIsRUFBdUNDLE9BQTFDLEVBQWtEO0FBQzlDSCxlQUFP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QUFBTyxZQUFJLEVBQUMsT0FBWjtBQUFvQixlQUFPLEVBQUUsS0FBS0QsV0FBTCxDQUFpQkMsSUFBakIsQ0FBc0IsSUFBdEIsQ0FBN0I7QUFBMEQscUJBQVUsT0FBcEU7QUFBNEUsVUFBRSxFQUFDLGNBQS9FO0FBQThGLFlBQUksRUFBQyxjQUFuRztBQUFrSCxhQUFLLEVBQUMsT0FBeEg7QUFBZ0ksaUJBQU0sT0FBdEk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQURKLEVBRUk7QUFBTSxpQkFBTSxZQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMEJBRkosQ0FOSixDQURKLENBWEosQ0FESixDQWJKLEVBd0NJO0FBQUssaUJBQVMsRUFBQyxPQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUF4Q0osQ0FESjtBQTRDSDs7OztFQXhHa0JDLCtDOztBQTJHUixvRUFBQUMseUVBQVEsQ0FBQ2hDLFFBQUQsQ0FBdkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2V0dGluZ3MuYjAzYWE5NjdkMTJiOGYwYTZlMmUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCB3aXRoQXV0aCBmcm9tICcuLi9jb21wb25lbnRzL2F1dGgvd2l0aEF1dGgnO1xyXG5pbXBvcnQgQVBJIGZyb20gJy4uL2FwaSc7XHJcbmltcG9ydCBBdXRoIGZyb20gJy4uL2NvbXBvbmVudHMvYXV0aC9hdXRoc2VydmljZSc7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInO1xyXG5cclxuY2xhc3MgU2V0dGluZ3MgZXh0ZW5kcyBDb21wb25lbnR7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm9wcyl7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpO1xyXG4gICAgICAgIHRoaXMuc3RhdGUgPSB7XHJcbiAgICAgICAgICAgIGxvZ2dlZEluOiB0cnVlLFxyXG4gICAgICAgICAgICBwb3N0czogW11cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29tcG9uZW50RGlkTW91bnQoKXtcclxuICAgICAgICBcclxuICAgICAgICBBUEkuZ2V0KCcvdmlzaWJpbGl0eScsIEF1dGguZ2V0SGVhZGVyKCkpXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgaWYocmVzLnN0YXR1cyA9PT0gMjAwKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2aXNpYmxlID0gcmVzLmRhdGEudmlzaWJsZTtcclxuICAgICAgICAgICAgICAgIGlmKHZpc2libGUpe1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYWRpb1B1YmxpYycpLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYWRpb1ByaXZhdGUnKS5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ091dCA9IChlKSA9PiB7XHJcbiAgICAgICAgaWYoZSl7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJBdXRob3JpemF0aW9uXCIpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlclwiKTtcclxuICAgICAgICBSb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVSYWRpbyA9IChlKSA9PiB7XHJcbiAgICAgICAgaWYoZSl7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYWRpb1B1YmxpYycpLmNoZWNrZWQpe1xyXG4gICAgICAgICAgICB2aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFkaW9Qcml2YXRlJykuY2hlY2tlZCl7XHJcbiAgICAgICAgICAgIHZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEFQSS5wYXRjaCgnL3Zpc2liaWxpdHknLCB2aXNpYmxlLCBBdXRoLmdldEhlYWRlcigpKVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGlmKHJlcy5zdGF0dXMgPT09IDIwMCl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZW5kZXIoKXtcclxuICAgICAgICByZXR1cm4oXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGFnZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBpZD1cIkhlYWRlclNlY3Rpb25cIiBjbGFzcz1cImRlZmF1bHRzZWN0aW9uIGhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZWZhdWx0Y29udGFpbmVyIGhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibmF2aWdhdGlvbmRpdiBub21hcmdpbmJvdHRvbVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cImxvZ29cIj5Nb29kZXI8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlcnNwYWNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJoZWFkZXJtZW51XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cImhlYWRlcm1lbnVpdGVtXCI+SGFsbG8sIHtsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIil9ITwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGNsYXNzTmFtZT1cImhlYWRlcm1lbnVpdGVtXCIgb25DbGljaz17dGhpcy5sb2dPdXR9ID5BdXNsb2dnZW48L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVmYXVsdHNlY3Rpb24gbWFpblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZWZhdWx0Y29udGFpbmVyIGluZGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZW1lbnVkaXZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZW1lbnVsaXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInNpZGVtZW51bGlzdGVudHJ5XCI+RmVlZCAvIFBvc3QgRXJzdGVsbGVuPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3JlY2VudHBvc3RzXCI+PGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJzaWRlbWVudWxpc3RlbnRyeVwiPkFrdHVlbGxlIFBvc3RzPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3BlcnNvbmFscG9zdHNcIj48YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInNpZGVtZW51bGlzdGVudHJ5XCI+TWVpbmUgUG9zdHM8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZnJpZW5kc1wiPjxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwic2lkZW1lbnVsaXN0ZW50cnlcIj5GcmV1bmRlPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NlYXJjaFwiPjxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwic2lkZW1lbnVsaXN0ZW50cnlcIj5TdWNoZTwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zZXR0aW5nc1wiPjxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwic2lkZW1lbnVsaXN0ZW50cnkgc2VsZWN0ZWRcIj5FaW5zdGVsbHVuZ2VuPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50ZGl2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZlZWRkaXZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVzY3JpcHRpb250ZXh0IG1hcmdpbmJvdHRvbSBtYXJnaW50b3BcIj5XZW5uIGRlaW4gS29udG8gcHJpdmF0IGlzdCwga2FubnN0IHdlZGVyIGR1LCBub2NoIFBvc3RzIHZvbiBkaXIgw7ZmZmVudGxpY2ggZ2VmdW5kZW4gd2VyZGVuLCBhdcOfZXIgdm9uIGRlaW5lbiBGb2xsb3dlcm4uPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwic2V0dGluZ3NyYWRpb2J1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgb25DbGljaz17dGhpcy5oYW5kbGVSYWRpby5iaW5kKHRoaXMpfSBkYXRhLW5hbWU9XCJSYWRpb1wiIGlkPVwicmFkaW9QdWJsaWNcIiBuYW1lPVwicmFkaW9Qcml2YXRlXCIgdmFsdWU9XCJSYWRpb1wiIGNsYXNzPVwicmFkaW9cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJhZGlvIHNwYW5cIj7DlmZmZW50bGljaGVzIEtvbnRvPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGNsYXNzPVwic2V0dGluZ3NyYWRpb2J1dHRvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgdHlwZT1cInJhZGlvXCIgb25DbGljaz17dGhpcy5oYW5kbGVSYWRpby5iaW5kKHRoaXMpfSBkYXRhLW5hbWU9XCJSYWRpb1wiIGlkPVwicmFkaW9Qcml2YXRlXCIgbmFtZT1cInJhZGlvUHJpdmF0ZVwiIHZhbHVlPVwiUmFkaW9cIiBjbGFzcz1cInJhZGlvXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyYWRpbyBzcGFuXCI+UHJpdmF0ZXMgS29udG88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibGFua1wiIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIClcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aEF1dGgoU2V0dGluZ3MpOyJdLCJzb3VyY2VSb290IjoiIn0=