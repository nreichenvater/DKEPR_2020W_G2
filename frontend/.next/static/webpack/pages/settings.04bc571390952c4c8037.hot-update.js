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

      var body = {
        visible: visible
      };
      _api__WEBPACK_IMPORTED_MODULE_10__["default"].patch('/visibility', body, _components_auth_authservice__WEBPACK_IMPORTED_MODULE_11__["default"].getHeader()).then(function (res) {
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
          console.log(res.data.visible);
          var visible = res.data.visible;
          console.log(visible);

          if (visible) {
            document.getElementById('radioPublic').checked = false;
            document.getElementById('radioPrivate').checked = true;
          } else {
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
          lineNumber: 77,
          columnNumber: 13
        }
      }, __jsx("div", {
        id: "HeaderSection",
        "class": "defaultsection header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78,
          columnNumber: 17
        }
      }, __jsx("div", {
        "class": "defaultcontainer header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 21
        }
      }, __jsx("div", {
        "class": "navigationdiv nomarginbottom",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 25
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 29
        }
      }, __jsx("a", {
        href: "#",
        className: "logo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 44
        }
      }, "Mooder")), __jsx("div", {
        "class": "headerspace",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 29
        }
      }), __jsx("ul", {
        className: "headermenu",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 29
        }
      }, __jsx("li", {
        className: "headermenuitem",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84,
          columnNumber: 33
        }
      }, "Hallo, ", localStorage.getItem("user"), "!"), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 33
        }
      }, __jsx("a", {
        className: "headermenuitem",
        onClick: this.logOut,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 37
        }
      }, "Ausloggen")))))), __jsx("div", {
        "class": "defaultsection main",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 17
        }
      }, __jsx("div", {
        "class": "defaultcontainer index",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "sidemenudiv",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "sidemenulist",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 29
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 33
        }
      }, __jsx("a", {
        href: "#",
        className: "sidemenulistentry",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 48
        }
      }, "Feed / Post Erstellen")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/recentposts",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 33
        }
      }, __jsx("a", {
        href: "#",
        className: "sidemenulistentry",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 59
        }
      }, "Aktuelle Posts")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/personalposts",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 33
        }
      }, __jsx("a", {
        href: "#",
        className: "sidemenulistentry",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 61
        }
      }, "Meine Posts")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/friends",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 33
        }
      }, __jsx("a", {
        href: "#",
        className: "sidemenulistentry",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 55
        }
      }, "Freunde")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/search",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 33
        }
      }, __jsx("a", {
        href: "#",
        className: "sidemenulistentry",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 54
        }
      }, "Suche")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/settings",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 33
        }
      }, __jsx("a", {
        href: "#",
        className: "sidemenulistentry selected",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 56
        }
      }, "Einstellungen")))), __jsx("div", {
        className: "contentdiv",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "feeddiv",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 29
        }
      }, __jsx("div", {
        "class": "descriptiontext marginbottom margintop",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 33
        }
      }, "Wenn dein Konto privat ist, kannst weder du, noch Posts von dir \xF6ffentlich gefunden werden, au\xDFer von deinen Followern."), __jsx("label", {
        "class": "settingsradiobutton",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105,
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
          lineNumber: 106,
          columnNumber: 37
        }
      }), __jsx("span", {
        "class": "radio span",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 37
        }
      }, "\xD6ffentliches Konto")), __jsx("label", {
        "class": "settingsradiobutton",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109,
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
          lineNumber: 110,
          columnNumber: 37
        }
      }), __jsx("span", {
        "class": "radio span",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 37
        }
      }, "Privates Konto")))))), __jsx("div", {
        className: "blank",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2V0dGluZ3MuanMiXSwibmFtZXMiOlsiU2V0dGluZ3MiLCJwcm9wcyIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImxvY2FsU3RvcmFnZSIsInJlbW92ZUl0ZW0iLCJSb3V0ZXIiLCJwdXNoIiwidmlzaWJsZSIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJjaGVja2VkIiwiYm9keSIsIkFQSSIsInBhdGNoIiwiQXV0aCIsImdldEhlYWRlciIsInRoZW4iLCJyZXMiLCJzdGF0dXMiLCJjb25zb2xlIiwibG9nIiwiZXJyIiwic3RhdGUiLCJsb2dnZWRJbiIsInBvc3RzIiwiZ2V0IiwiZGF0YSIsImdldEl0ZW0iLCJsb2dPdXQiLCJoYW5kbGVSYWRpbyIsImJpbmQiLCJDb21wb25lbnQiLCJ3aXRoQXV0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0lBRU1BLFE7Ozs7O0FBQ0Ysb0JBQVlDLEtBQVosRUFBa0I7QUFBQTs7QUFBQTs7QUFDZCw4QkFBTUEsS0FBTjs7QUFEYyxpTkErQlQsVUFBQ0MsQ0FBRCxFQUFPO0FBQ1osVUFBR0EsQ0FBSCxFQUFLO0FBQ0RBLFNBQUMsQ0FBQ0MsY0FBRjtBQUNIOztBQUNEQyxrQkFBWSxDQUFDQyxVQUFiLENBQXdCLGVBQXhCO0FBQ0FELGtCQUFZLENBQUNDLFVBQWIsQ0FBd0IsTUFBeEI7QUFDQUMseURBQU0sQ0FBQ0MsSUFBUCxDQUFZLFFBQVo7QUFDSCxLQXRDaUI7O0FBQUEsc05Bd0NKLFVBQUNMLENBQUQsRUFBTztBQUNqQixVQUFHQSxDQUFILEVBQUs7QUFDREEsU0FBQyxDQUFDQyxjQUFGO0FBQ0g7O0FBQ0QsVUFBSUssT0FBTyxHQUFHLElBQWQ7O0FBQ0EsVUFBR0MsUUFBUSxDQUFDQyxjQUFULENBQXdCLGFBQXhCLEVBQXVDQyxPQUExQyxFQUFrRDtBQUM5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QTRFLFVBQUUsRUFBQyxhQUEvRTtBQUE2RixZQUFJLEVBQUMsY0FBbEc7QUFBaUgsYUFBSyxFQUFDLE9BQXZIO0FBQStILGlCQUFNLE9BQXJJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsUUFESixFQUVJO0FBQU0saUJBQU0sWUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlDQUZKLENBRkosRUFNSTtBQUFPLGlCQUFNLHFCQUFiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsU0FDSTtBQUFPLFlBQUksRUFBQyxPQUFaO0FBQW9CLGVBQU8sRUFBRSxLQUFLRCxXQUFMLENBQWlCQyxJQUFqQixDQUFzQixJQUF0QixDQUE3QjtBQUEwRCxxQkFBVSxPQUFwRTtBQUE0RSxVQUFFLEVBQUMsY0FBL0U7QUFBOEYsWUFBSSxFQUFDLGNBQW5HO0FBQWtILGFBQUssRUFBQyxPQUF4SDtBQUFnSSxpQkFBTSxPQUF0STtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBREosRUFFSTtBQUFNLGlCQUFNLFlBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSwwQkFGSixDQU5KLENBREosQ0FYSixDQURKLENBYkosRUF3Q0k7QUFBSyxpQkFBUyxFQUFDLE9BQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxRQXhDSixDQURKO0FBNENIOzs7O0VBaEhrQkMsK0M7O0FBbUhSLG9FQUFBQyx5RUFBUSxDQUFDakMsUUFBRCxDQUF2QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zZXR0aW5ncy4wNGJjNTcxMzkwOTUyYzRjODAzNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuaW1wb3J0IHdpdGhBdXRoIGZyb20gJy4uL2NvbXBvbmVudHMvYXV0aC93aXRoQXV0aCc7XHJcbmltcG9ydCBBUEkgZnJvbSAnLi4vYXBpJztcclxuaW1wb3J0IEF1dGggZnJvbSAnLi4vY29tcG9uZW50cy9hdXRoL2F1dGhzZXJ2aWNlJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG5jbGFzcyBTZXR0aW5ncyBleHRlbmRzIENvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgbG9nZ2VkSW46IHRydWUsXHJcbiAgICAgICAgICAgIHBvc3RzOiBbXVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb21wb25lbnREaWRNb3VudCgpe1xyXG4gICAgICAgIFxyXG4gICAgICAgIEFQSS5nZXQoJy92aXNpYmlsaXR5JywgQXV0aC5nZXRIZWFkZXIoKSlcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICBpZihyZXMuc3RhdHVzID09PSAyMDApe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzLmRhdGEudmlzaWJsZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2aXNpYmxlID0gcmVzLmRhdGEudmlzaWJsZTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHZpc2libGUpO1xyXG4gICAgICAgICAgICAgICAgaWYodmlzaWJsZSl7XHJcbiAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3JhZGlvUHVibGljJykuY2hlY2tlZCA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYWRpb1ByaXZhdGUnKS5jaGVja2VkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYWRpb1B1YmxpYycpLmNoZWNrZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYWRpb1ByaXZhdGUnKS5jaGVja2VkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGxvZ091dCA9IChlKSA9PiB7XHJcbiAgICAgICAgaWYoZSl7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJBdXRob3JpemF0aW9uXCIpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlclwiKTtcclxuICAgICAgICBSb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcclxuICAgIH1cclxuXHJcbiAgICBoYW5kbGVSYWRpbyA9IChlKSA9PiB7XHJcbiAgICAgICAgaWYoZSl7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbGV0IHZpc2libGUgPSB0cnVlO1xyXG4gICAgICAgIGlmKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdyYWRpb1B1YmxpYycpLmNoZWNrZWQpe1xyXG4gICAgICAgICAgICB2aXNpYmxlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSBpZihkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFkaW9Qcml2YXRlJykuY2hlY2tlZCl7XHJcbiAgICAgICAgICAgIHZpc2libGUgPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgYm9keSA9IHtcclxuICAgICAgICAgICAgdmlzaWJsZTogdmlzaWJsZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQVBJLnBhdGNoKCcvdmlzaWJpbGl0eScsIGJvZHksIEF1dGguZ2V0SGVhZGVyKCkpXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgaWYocmVzLnN0YXR1cyA9PT0gMjAwKXtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiSGVhZGVyU2VjdGlvblwiIGNsYXNzPVwiZGVmYXVsdHNlY3Rpb24gaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlZmF1bHRjb250YWluZXIgaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYXZpZ2F0aW9uZGl2IG5vbWFyZ2luYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPjxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwibG9nb1wiPk1vb2RlcjwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyc3BhY2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImhlYWRlcm1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaGVhZGVybWVudWl0ZW1cIj5IYWxsbywge2xvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKX0hPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPVwiaGVhZGVybWVudWl0ZW1cIiBvbkNsaWNrPXt0aGlzLmxvZ091dH0gPkF1c2xvZ2dlbjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZWZhdWx0c2VjdGlvbiBtYWluXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlZmF1bHRjb250YWluZXIgaW5kZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlbWVudWRpdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaWRlbWVudWxpc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPjxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwic2lkZW1lbnVsaXN0ZW50cnlcIj5GZWVkIC8gUG9zdCBFcnN0ZWxsZW48L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcmVjZW50cG9zdHNcIj48YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInNpZGVtZW51bGlzdGVudHJ5XCI+QWt0dWVsbGUgUG9zdHM8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcGVyc29uYWxwb3N0c1wiPjxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwic2lkZW1lbnVsaXN0ZW50cnlcIj5NZWluZSBQb3N0czwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9mcmllbmRzXCI+PGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJzaWRlbWVudWxpc3RlbnRyeVwiPkZyZXVuZGU8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvc2VhcmNoXCI+PGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJzaWRlbWVudWxpc3RlbnRyeVwiPlN1Y2hlPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NldHRpbmdzXCI+PGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJzaWRlbWVudWxpc3RlbnRyeSBzZWxlY3RlZFwiPkVpbnN0ZWxsdW5nZW48L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRkaXZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmVlZGRpdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXNjcmlwdGlvbnRleHQgbWFyZ2luYm90dG9tIG1hcmdpbnRvcFwiPldlbm4gZGVpbiBLb250byBwcml2YXQgaXN0LCBrYW5uc3Qgd2VkZXIgZHUsIG5vY2ggUG9zdHMgdm9uIGRpciDDtmZmZW50bGljaCBnZWZ1bmRlbiB3ZXJkZW4sIGF1w59lciB2b24gZGVpbmVuIEZvbGxvd2Vybi48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJzZXR0aW5nc3JhZGlvYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVJhZGlvLmJpbmQodGhpcyl9IGRhdGEtbmFtZT1cIlJhZGlvXCIgaWQ9XCJyYWRpb1B1YmxpY1wiIG5hbWU9XCJyYWRpb1ByaXZhdGVcIiB2YWx1ZT1cIlJhZGlvXCIgY2xhc3M9XCJyYWRpb1wiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicmFkaW8gc3BhblwiPsOWZmZlbnRsaWNoZXMgS29udG88L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGFiZWwgY2xhc3M9XCJzZXR0aW5nc3JhZGlvYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwicmFkaW9cIiBvbkNsaWNrPXt0aGlzLmhhbmRsZVJhZGlvLmJpbmQodGhpcyl9IGRhdGEtbmFtZT1cIlJhZGlvXCIgaWQ9XCJyYWRpb1ByaXZhdGVcIiBuYW1lPVwicmFkaW9Qcml2YXRlXCIgdmFsdWU9XCJSYWRpb1wiIGNsYXNzPVwicmFkaW9cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJhZGlvIHNwYW5cIj5Qcml2YXRlcyBLb250bzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsYW5rXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXV0aChTZXR0aW5ncyk7Il0sInNvdXJjZVJvb3QiOiIifQ==