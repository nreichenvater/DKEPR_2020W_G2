webpackHotUpdate_N_E("pages/search",{

/***/ "./pages/search.js":
/*!*************************!*\
  !*** ./pages/search.js ***!
  \*************************/
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
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../api */ "./api.js");
/* harmony import */ var _components_auth_authservice__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/auth/authservice */ "./components/auth/authservice.js");
/* harmony import */ var _components_auth_withAuth__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/auth/withAuth */ "./components/auth/withAuth.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_12__);







var _jsxFileName = "C:\\Users\\Nico\\Dropbox\\Studium\\5. Semester\\DKE PR\\frontend\\pages\\search.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = Object(_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_5__["default"])(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return Object(_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_4__["default"])(this, result); }; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }








var Search = /*#__PURE__*/function (_Component) {
  Object(_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_3__["default"])(Search, _Component);

  var _super = _createSuper(Search);

  function Search(props) {
    var _this;

    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Search);

    _this = _super.call(this, props);

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "handleChange", function (e) {
      if (e) {
        e.preventDefault();
      }

      if (e.target.id === "searchInput") {
        _this.setState({
          searchText: e.target.value,
          persons: [],
          posts: []
        }, function () {
          var headers = Object.create({
            headers: {
              searchingUser: localStorage.getItem("user"),
              searchString: _this.state.searchText
            }
          });

          if (_this.state.searchText.length > 0) {
            _api__WEBPACK_IMPORTED_MODULE_9__["default"].get('/search', headers).then(function (res) {
              if (res.status === 200) {
                var posts = res.data.searchResultPosts;
                var persons = res.data.searchResultUsers;
                posts.sort(function (a, b) {
                  return b._id.timestamp - a._id.timestamp;
                });

                _this.setState({
                  posts: posts,
                  persons: persons
                }, function () {
                  return console.log(_this.state.posts);
                });

                console.log(res);
              }
            })["catch"](function (err) {
              console.log(err);
            });
          }
        });
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "update", function (e) {
      if (e) {
        e.preventDefault();
      }

      var headers = Object.create({
        headers: {
          searchingUser: localStorage.getItem("user"),
          searchString: _this.state.searchText
        }
      });

      if (_this.state.searchText.length > 0) {
        _api__WEBPACK_IMPORTED_MODULE_9__["default"].get('/search', headers).then(function (res) {
          if (res.status === 200) {
            var posts = res.data.searchResultPosts;
            var persons = res.data.searchResultUsers;
            posts.sort(function (a, b) {
              return b._id.timestamp - a._id.timestamp;
            });

            _this.setState({
              posts: posts,
              persons: persons
            });

            console.log(res);
          }
        })["catch"](function (err) {
          console.log(err);
        });
      }
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "logOut", function (e) {
      if (e) {
        e.preventDefault();
      }

      localStorage.removeItem("Authorization");
      localStorage.removeItem("user");
      next_router__WEBPACK_IMPORTED_MODULE_12___default.a.push("/login");
    });

    Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_2__["default"])(_this), "follow", function (e) {
      if (e) {
        e.preventDefault();
      }

      var type = e.target.id;
      var name = e.target.getAttribute('name');

      if (type === "buttonFollow") {
        var body = {
          callingUserId: localStorage.getItem('user'),
          followUserId: name
        };
        _api__WEBPACK_IMPORTED_MODULE_9__["default"].post('/follow', body, _components_auth_authservice__WEBPACK_IMPORTED_MODULE_10__["default"].getHeader()).then(function (res) {
          if (res.status === 200) {
            console.log(res);

            _this.update();
          }
        })["catch"](function (err) {
          console.log(err);
        });
      } else if (type === "buttonUnfollow") {
        var _body = {
          callingUserId: localStorage.getItem('user'),
          unfollowUserId: name
        };
        _api__WEBPACK_IMPORTED_MODULE_9__["default"].post('/unfollow', _body, _components_auth_authservice__WEBPACK_IMPORTED_MODULE_10__["default"].getHeader()).then(function (res) {
          if (res.status === 200) {
            console.log(res);

            _this.update();
          }
        })["catch"](function (err) {
          console.log(err);
        });
      }
    });

    _this.state = {
      loggedIn: true,
      posts: [],
      persons: [],
      searchText: ""
    };
    return _this;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Search, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx("div", {
        className: "page",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 13
        }
      }, __jsx("div", {
        id: "HeaderSection",
        "class": "defaultsection header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 17
        }
      }, __jsx("div", {
        "class": "defaultcontainer header",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 130,
          columnNumber: 21
        }
      }, __jsx("div", {
        "class": "navigationdiv nomarginbottom",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 25
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 29
        }
      }, __jsx("a", {
        href: "#",
        className: "logo",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 44
        }
      }, "Mooder")), __jsx("div", {
        "class": "headerspace",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133,
          columnNumber: 29
        }
      }), __jsx("ul", {
        className: "headermenu",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 134,
          columnNumber: 29
        }
      }, __jsx("li", {
        className: "headermenuitem",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 135,
          columnNumber: 33
        }
      }, "Hallo, ", localStorage.getItem("user"), "!"), __jsx("li", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 33
        }
      }, __jsx("a", {
        className: "headermenuitem",
        onClick: this.logOut,
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136,
          columnNumber: 37
        }
      }, "Ausloggen")))))), __jsx("div", {
        "class": "defaultsection main",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 141,
          columnNumber: 17
        }
      }, __jsx("div", {
        "class": "defaultcontainer index",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 142,
          columnNumber: 21
        }
      }, __jsx("div", {
        className: "sidemenudiv",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 143,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "sidemenulist",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144,
          columnNumber: 29
        }
      }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 33
        }
      }, __jsx("a", {
        href: "#",
        className: "sidemenulistentry",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 48
        }
      }, "Feed / Post Erstellen")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/recentposts",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 33
        }
      }, __jsx("a", {
        href: "#",
        className: "sidemenulistentry",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 59
        }
      }, "Aktuelle Posts")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/personalposts",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 33
        }
      }, __jsx("a", {
        href: "#",
        className: "sidemenulistentry",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 61
        }
      }, "Meine Posts")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/friends",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 33
        }
      }, __jsx("a", {
        href: "#",
        className: "sidemenulistentry",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148,
          columnNumber: 55
        }
      }, "Freunde")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/search",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 33
        }
      }, __jsx("a", {
        href: "#",
        className: "sidemenulistentry selected",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 54
        }
      }, "Suche")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_8___default.a, {
        href: "/settings",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 33
        }
      }, __jsx("a", {
        href: "#",
        className: "sidemenulistentry",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 56
        }
      }, "Einstellungen")))), __jsx("div", {
        className: "contentdiv",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153,
          columnNumber: 25
        }
      }, __jsx("div", {
        className: "createpostdiv",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 29
        }
      }, __jsx("form", {
        className: "createpostform",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155,
          columnNumber: 33
        }
      }, __jsx("input", {
        className: "defaulttextfield input search",
        id: "searchInput",
        onChange: this.handleChange,
        type: "text",
        placeHolder: "Wonach suchst du?",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 37
        }
      }))), __jsx("div", {
        className: "feeddiv",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 29
        }
      }, this.state.persons.length > 0 ? __jsx("div", {
        className: "postheading",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163,
          columnNumber: 41
        }
      }, "Personen") : __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 41
        }
      }), this.state.persons.map(function (person) {
        return __jsx("div", {
          className: "person",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 41
          }
        }, __jsx("div", {
          className: "postcontentdiv",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 171,
            columnNumber: 45
          }
        }, __jsx("div", {
          className: "postedtextdiv",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 49
          }
        }, person.username)), person.username != undefined && person.followed ? __jsx("div", {
          className: "button w-button",
          id: "buttonUnfollow",
          name: person.username,
          onClick: _this2.follow,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 179,
            columnNumber: 57
          }
        }, "Entfolgen") : __jsx("div", {
          className: "button w-button",
          id: "buttonFollow",
          name: person.username,
          onClick: _this2.follow,
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 181,
            columnNumber: 57
          }
        }, "Folgen"));
      }), this.state.posts.length > 0 ? __jsx("div", {
        className: "postheading",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 190,
          columnNumber: 41
        }
      }, "Posts") : __jsx("div", {
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192,
          columnNumber: 41
        }
      }), this.state.posts.map(function (post) {
        return __jsx("div", {
          className: "post",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 197,
            columnNumber: 41
          }
        }, post.mood === "happy" ? __jsx("img", {
          src: "/images/015-smile-1.png",
          loading: "lazy",
          alt: "",
          className: "image emoti posted",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 200,
            columnNumber: 57
          }
        }) : post.mood === "neutral" ? __jsx("img", {
          src: "/images/034-neutral.png",
          loading: "lazy",
          alt: "",
          className: "image emoti posted",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 207,
            columnNumber: 57
          }
        }) : post.mood === "sad" ? __jsx("img", {
          src: "/images/021-sad.png",
          loading: "lazy",
          alt: "",
          className: "image emoti posted",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 214,
            columnNumber: 57
          }
        }) : __jsx("div", {
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 221,
            columnNumber: 57
          }
        }), __jsx("div", {
          className: "postcontentdiv",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 224,
            columnNumber: 45
          }
        }, __jsx("div", {
          className: "postedbydiv",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 225,
            columnNumber: 49
          }
        }, post.userid), __jsx("div", {
          className: "posteddatediv",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 228,
            columnNumber: 49
          }
        }, post.timestamp), __jsx("div", {
          "class": "postseparator",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 231,
            columnNumber: 49
          }
        }), __jsx("div", {
          className: "postedtextdiv",
          __self: _this2,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 232,
            columnNumber: 49
          }
        }, post.post)));
      }))))), __jsx("div", {
        className: "blank",
        __self: this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 243,
          columnNumber: 17
        }
      }));
    }
  }]);

  return Search;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (_c = Object(_components_auth_withAuth__WEBPACK_IMPORTED_MODULE_11__["default"])(Search));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2VhcmNoLmpzIl0sIm5hbWVzIjpbIlNlYXJjaCIsInByb3BzIiwiZSIsInByZXZlbnREZWZhdWx0IiwidGFyZ2V0IiwiaWQiLCJzZXRTdGF0ZSIsInNlYXJjaFRleHQiLCJ2YWx1ZSIsInBlcnNvbnMiLCJwb3N0cyIsImhlYWRlcnMiLCJPYmplY3QiLCJjcmVhdGUiLCJzZWFyY2hpbmdVc2VyIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInNlYXJjaFN0cmluZyIsInN0YXRlIiwibGVuZ3RoIiwiQVBJIiwiZ2V0IiwidGhlbiIsInJlcyIsInN0YXR1cyIsImRhdGEiLCJzZWFyY2hSZXN1bHRQb3N0cyIsInNlYXJjaFJlc3VsdFVzZXJzIiwic29ydCIsImEiLCJiIiwiX2lkIiwidGltZXN0YW1wIiwiY29uc29sZSIsImxvZyIsImVyciIsInJlbW92ZUl0ZW0iLCJSb3V0ZXIiLCJwdXNoIiwidHlwZSIsIm5hbWUiLCJnZXRBdHRyaWJ1dGUiLCJib2R5IiwiY2FsbGluZ1VzZXJJZCIsImZvbGxvd1VzZXJJZCIsInBvc3QiLCJBdXRoIiwiZ2V0SGVhZGVyIiwidXBkYXRlIiwidW5mb2xsb3dVc2VySWQiLCJsb2dnZWRJbiIsImxvZ091dCIsImhhbmRsZUNoYW5nZSIsIm1hcCIsInBlcnNvbiIsInVzZXJuYW1lIiwidW5kZWZpbmVkIiwiZm9sbG93ZWQiLCJmb2xsb3ciLCJtb29kIiwidXNlcmlkIiwiQ29tcG9uZW50Iiwid2l0aEF1dGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztJQUVNQSxNOzs7OztBQUNGLGtCQUFZQyxLQUFaLEVBQWtCO0FBQUE7O0FBQUE7O0FBQ2QsOEJBQU1BLEtBQU47O0FBRGMsdU5BVUgsVUFBQ0MsQ0FBRCxFQUFPO0FBQ2xCLFVBQUdBLENBQUgsRUFBSztBQUNEQSxTQUFDLENB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QmdCLCtDOztBQWlQTixvRUFBQUMsMEVBQVEsQ0FBQzlELE1BQUQsQ0FBdkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2VhcmNoLmM4YTJkMzdjNjZhYjk2YjY1YjUzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgQVBJIGZyb20gJy4uL2FwaSc7XHJcbmltcG9ydCBBdXRoIGZyb20gJy4uL2NvbXBvbmVudHMvYXV0aC9hdXRoc2VydmljZSc7XHJcbmltcG9ydCB3aXRoQXV0aCBmcm9tICcuLi9jb21wb25lbnRzL2F1dGgvd2l0aEF1dGgnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuXHJcbmNsYXNzIFNlYXJjaCBleHRlbmRzIENvbXBvbmVudHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKXtcclxuICAgICAgICBzdXBlcihwcm9wcyk7XHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgbG9nZ2VkSW46IHRydWUsXHJcbiAgICAgICAgICAgIHBvc3RzOiBbXSxcclxuICAgICAgICAgICAgcGVyc29uczogW10sXHJcbiAgICAgICAgICAgIHNlYXJjaFRleHQ6IFwiXCIsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgaWYoZSl7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoZS50YXJnZXQuaWQgPT09IFwic2VhcmNoSW5wdXRcIil7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBzZWFyY2hUZXh0OiBlLnRhcmdldC52YWx1ZSwgcGVyc29uczogW10sIHBvc3RzOiBbXSB9LCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBoZWFkZXJzID0gT2JqZWN0LmNyZWF0ZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWFyY2hpbmdVc2VyOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIiksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlYXJjaFN0cmluZzogdGhpcy5zdGF0ZS5zZWFyY2hUZXh0XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLnN0YXRlLnNlYXJjaFRleHQubGVuZ3RoID4gMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgQVBJLmdldCgnL3NlYXJjaCcsIGhlYWRlcnMpXHJcbiAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYocmVzLnN0YXR1cyA9PT0gMjAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvc3RzID0gcmVzLmRhdGEuc2VhcmNoUmVzdWx0UG9zdHM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwZXJzb25zID0gcmVzLmRhdGEuc2VhcmNoUmVzdWx0VXNlcnM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwb3N0cy5zb3J0KGZ1bmN0aW9uKGEsIGIpe3JldHVybiBiLl9pZC50aW1lc3RhbXAgLSBhLl9pZC50aW1lc3RhbXB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBwb3N0cywgcGVyc29ucyB9LCAoKSA9PiBjb25zb2xlLmxvZyh0aGlzLnN0YXRlLnBvc3RzKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHVwZGF0ZSA9IChlKSA9PiB7XHJcbiAgICAgICAgaWYoZSl7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc3QgaGVhZGVycyA9IE9iamVjdC5jcmVhdGUoe1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBzZWFyY2hpbmdVc2VyOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIiksXHJcbiAgICAgICAgICAgICAgICBzZWFyY2hTdHJpbmc6IHRoaXMuc3RhdGUuc2VhcmNoVGV4dFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICAgICAgaWYodGhpcy5zdGF0ZS5zZWFyY2hUZXh0Lmxlbmd0aCA+IDApe1xyXG4gICAgICAgICAgICBBUEkuZ2V0KCcvc2VhcmNoJywgaGVhZGVycylcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHJlcy5zdGF0dXMgPT09IDIwMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9zdHMgPSByZXMuZGF0YS5zZWFyY2hSZXN1bHRQb3N0cztcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwZXJzb25zID0gcmVzLmRhdGEuc2VhcmNoUmVzdWx0VXNlcnM7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zdHMuc29ydChmdW5jdGlvbihhLCBiKXtyZXR1cm4gYi5faWQudGltZXN0YW1wIC0gYS5faWQudGltZXN0YW1wfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBvc3RzLCBwZXJzb25zIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHJlcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGxvZ091dCA9IChlKSA9PiB7XHJcbiAgICAgICAgaWYoZSl7XHJcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJBdXRob3JpemF0aW9uXCIpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidXNlclwiKTtcclxuICAgICAgICBSb3V0ZXIucHVzaChcIi9sb2dpblwiKTtcclxuICAgIH1cclxuXHJcbiAgICBmb2xsb3cgPSAoZSkgPT4ge1xyXG4gICAgICAgIGlmKGUpe1xyXG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNvbnN0IHR5cGUgPSBlLnRhcmdldC5pZDtcclxuICAgICAgICBjb25zdCBuYW1lID0gZS50YXJnZXQuZ2V0QXR0cmlidXRlKCduYW1lJyk7XHJcbiAgICAgICAgaWYodHlwZSA9PT0gXCJidXR0b25Gb2xsb3dcIil7XHJcbiAgICAgICAgICAgIGNvbnN0IGJvZHkgPSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsaW5nVXNlcklkOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpLFxyXG4gICAgICAgICAgICAgICAgZm9sbG93VXNlcklkOiBuYW1lXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgQVBJLnBvc3QoJy9mb2xsb3cnLCBib2R5LCBBdXRoLmdldEhlYWRlcigpKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYocmVzLnN0YXR1cyA9PT0gMjAwKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYodHlwZSA9PT0gXCJidXR0b25VbmZvbGxvd1wiKXtcclxuICAgICAgICAgICAgY29uc3QgYm9keSA9IHtcclxuICAgICAgICAgICAgICAgIGNhbGxpbmdVc2VySWQ6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJyksXHJcbiAgICAgICAgICAgICAgICB1bmZvbGxvd1VzZXJJZDogbmFtZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIEFQSS5wb3N0KCcvdW5mb2xsb3cnLCBib2R5LCBBdXRoLmdldEhlYWRlcigpKVxyXG4gICAgICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYocmVzLnN0YXR1cyA9PT0gMjAwKXtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJlbmRlcigpe1xyXG4gICAgICAgIHJldHVybihcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwYWdlXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGlkPVwiSGVhZGVyU2VjdGlvblwiIGNsYXNzPVwiZGVmYXVsdHNlY3Rpb24gaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlZmF1bHRjb250YWluZXIgaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJuYXZpZ2F0aW9uZGl2IG5vbWFyZ2luYm90dG9tXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPjxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwibG9nb1wiPk1vb2RlcjwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyc3BhY2VcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImhlYWRlcm1lbnVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwiaGVhZGVybWVudWl0ZW1cIj5IYWxsbywge2xvY2FsU3RvcmFnZS5nZXRJdGVtKFwidXNlclwiKX0hPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+PGEgY2xhc3NOYW1lPVwiaGVhZGVybWVudWl0ZW1cIiBvbkNsaWNrPXt0aGlzLmxvZ091dH0gPkF1c2xvZ2dlbjwvYT48L2xpPiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGVmYXVsdHNlY3Rpb24gbWFpblwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZWZhdWx0Y29udGFpbmVyIGluZGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZW1lbnVkaXZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2lkZW1lbnVsaXN0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj48YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInNpZGVtZW51bGlzdGVudHJ5XCI+RmVlZCAvIFBvc3QgRXJzdGVsbGVuPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3JlY2VudHBvc3RzXCI+PGEgaHJlZj1cIiNcIiBjbGFzc05hbWU9XCJzaWRlbWVudWxpc3RlbnRyeVwiPkFrdHVlbGxlIFBvc3RzPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3BlcnNvbmFscG9zdHNcIj48YSBocmVmPVwiI1wiIGNsYXNzTmFtZT1cInNpZGVtZW51bGlzdGVudHJ5XCI+TWVpbmUgUG9zdHM8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvZnJpZW5kc1wiPjxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwic2lkZW1lbnVsaXN0ZW50cnlcIj5GcmV1bmRlPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL3NlYXJjaFwiPjxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwic2lkZW1lbnVsaXN0ZW50cnkgc2VsZWN0ZWRcIj5TdWNoZTwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9zZXR0aW5nc1wiPjxhIGhyZWY9XCIjXCIgY2xhc3NOYW1lPVwic2lkZW1lbnVsaXN0ZW50cnlcIj5FaW5zdGVsbHVuZ2VuPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50ZGl2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNyZWF0ZXBvc3RkaXZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9XCJjcmVhdGVwb3N0Zm9ybVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPVwiZGVmYXVsdHRleHRmaWVsZCBpbnB1dCBzZWFyY2hcIiBpZD1cInNlYXJjaElucHV0XCIgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlfSB0eXBlPVwidGV4dFwiIHBsYWNlSG9sZGVyPVwiV29uYWNoIHN1Y2hzdCBkdT9cIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmZWVkZGl2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnBlcnNvbnMubGVuZ3RoID4gMCA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdGhlYWRpbmdcIj5QZXJzb25lbjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5wZXJzb25zLm1hcChwZXJzb24gPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwZXJzb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3Rjb250ZW50ZGl2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdGVkdGV4dGRpdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3BlcnNvbi51c2VybmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBlcnNvbi51c2VybmFtZSAhPSB1bmRlZmluZWQgJiYgcGVyc29uLmZvbGxvd2VkID9cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbiB3LWJ1dHRvblwiIGlkPVwiYnV0dG9uVW5mb2xsb3dcIiBuYW1lPXtwZXJzb24udXNlcm5hbWV9IG9uQ2xpY2s9e3RoaXMuZm9sbG93fT5FbnRmb2xnZW48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b24gdy1idXR0b25cIiBpZD1cImJ1dHRvbkZvbGxvd1wiIG5hbWU9e3BlcnNvbi51c2VybmFtZX0gb25DbGljaz17dGhpcy5mb2xsb3d9PkZvbGdlbjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnN0YXRlLnBvc3RzLmxlbmd0aCA+IDAgP1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RoZWFkaW5nXCI+UG9zdHM8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZS5wb3N0cy5tYXAocG9zdCA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zdC5tb29kID09PSBcImhhcHB5XCIgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy8wMTUtc21pbGUtMS5wbmdcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2FkaW5nPVwibGF6eVwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1hZ2UgZW1vdGkgcG9zdGVkXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBwb3N0Lm1vb2QgPT09IFwibmV1dHJhbFwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz1cIi9pbWFnZXMvMDM0LW5ldXRyYWwucG5nXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCIgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltYWdlIGVtb3RpIHBvc3RlZFwiIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogcG9zdC5tb29kID09PSBcInNhZFwiID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPVwiL2ltYWdlcy8wMjEtc2FkLnBuZ1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGluZz1cImxhenlcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWFnZSBlbW90aSBwb3N0ZWRcIiBcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3Rjb250ZW50ZGl2XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdGVkYnlkaXZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwb3N0LnVzZXJpZH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicG9zdGVkZGF0ZWRpdlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Bvc3QudGltZXN0YW1wfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInBvc3RzZXBhcmF0b3JcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInBvc3RlZHRleHRkaXZcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwb3N0LnBvc3R9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsYW5rXCIgLz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoQXV0aChTZWFyY2gpOyJdLCJzb3VyY2VSb290IjoiIn0=