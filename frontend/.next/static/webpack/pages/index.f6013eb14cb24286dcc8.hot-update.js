webpackHotUpdate_N_E("pages/index",{

/***/ "./components/auth/authservice.js":
/*!****************************************!*\
  !*** ./components/auth/authservice.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");





var AuthService = /*#__PURE__*/function () {
  function AuthService() {
    Object(_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_2__["default"])(this, AuthService);

    this.loggedIn = false;
  }

  Object(_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_3__["default"])(AuthService, [{
    key: "login",
    value: function login(body, callback) {
      console.log("sende login request", body);
      API.post("/login", body).then(function (res) {
        if (res.status === 200) {
          console.log(res);
          localStorage.setItem('user', res.data.user.mail);
          localStorage.setItem('Authorization', res.headers.authorization);
          callback(res);
        }
      })["catch"](function (err) {
        console.log(err);
        callback(err);
      });
    }
  }, {
    key: "logout",
    value: function logout() {
      localStorage.removeItem('user');
      localStorage.removeItem('Authorization');
    }
  }, {
    key: "isLoggedIn",
    value: function () {
      var _isLoggedIn = Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                return _context.abrupt("return", new Promise(function (resovle, reject) {
                  resolve(true);
                }));

              case 1:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      function isLoggedIn() {
        return _isLoggedIn.apply(this, arguments);
      }

      return isLoggedIn;
    }()
  }, {
    key: "register",
    value: function register(mailInput, passwordInput, repeatedPasswordInput, successCallback) {
      API.post("/register", {
        mail: mailInput,
        password: passwordInput,
        passwordConfirm: repeatedPasswordInput
      }).then(function (res) {
        if (res.status === 200) {
          successCallback(res);
        }
      })["catch"](function (err) {
        successCallback(err);
      });
    }
  }, {
    key: "hasToken",
    value: function hasToken() {
      if (localStorage.getItem('Authorization') != null) {
        return true;
      }

      return false;
    }
  }, {
    key: "getHeader",
    value: function getHeader() {
      return Object.create({
        headers: {
          Authorization: localStorage.getItem('Authorization'),
          Username: localStorage.getItem('user')
        }
      });
    }
  }]);

  return AuthService;
}();

/* harmony default export */ __webpack_exports__["default"] = (new AuthService());

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdXRoL2F1dGhzZXJ2aWNlLmpzIl0sIm5hbWVzIjpbIkF1dGhTZXJ2aWNlIiwibG9nZ2VkSW4iLCJib2R5IiwiY2FsbGJhY2siLCJjb25zb2xlIiwibG9nIiwiQVBJIiwicG9zdCIsInRoZW4iLCJyZXMiLCJzdGF0dXMiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZGF0YSIsInVzZXIiLCJtYWlsIiwiaGVhZGVycyIsImF1dGhvcml6YXRpb24iLCJlcnIiLCJyZW1vdmVJdGVtIiwiUHJvbWlzZSIsInJlc292bGUiLCJyZWplY3QiLCJyZXNvbHZlIiwibWFpbElucHV0IiwicGFzc3dvcmRJbnB1dCIsInJlcGVhdGVkUGFzc3dvcmRJbnB1dCIsInN1Y2Nlc3NDYWxsYmFjayIsInBhc3N3b3JkIiwicGFzc3dvcmRDb25maXJtIiwiZ2V0SXRlbSIsIk9iamVjdCIsImNyZWF0ZSIsIkF1dGhvcml6YXRpb24iLCJVc2VybmFtZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBRU1BLFc7QUFDRix5QkFBYTtBQUFBOztBQUNULFNBQUtDLFFBQUwsR0FBZ0IsS0FBaEI7QUFDSDs7OzswQkFFS0MsSSxFQUFNQyxRLEVBQVM7QUFDakJDLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLHFCQUFaLEVBQW1DSCxJQUFuQztBQUNBSSxTQUFHLENBQUNDLElBQUosV0FBbUJMLElBQW5CLEVBQ0NNLElBREQsQ0FDTSxVQUFBQyxHQUFHLEVBQUk7QUFDVCxZQUFHQSxHQUFHLENBQUNDLE1BQUosS0FBZSxHQUFsQixFQUFzQjtBQUNsQk4saUJBQU8sQ0FBQ0MsR0FBUixDQUFZSSxHQUFaO0FBQ0FFLHNCQUFZLENBQUNDLE9BQWIsQ0FBcUIsTUFBckIsRUFBNkJILEdBQUcsQ0FBQ0ksSUFBSixDQUFTQyxJQUFULENBQWNDLElBQTNDO0FBQ0FKLHNCQUFZLENBQUNDLE9BQWIsQ0FBcUIsZUFBckIsRUFBc0NILEdBQUcsQ0FBQ08sT0FBSixDQUFZQyxhQUFsRDtBQUNBZCxrQkFBUSxDQUFDTSxHQUFELENBQVI7QUFDSDtBQUNKLE9BUkQsV0FTTyxVQUFBUyxHQUFHLEVBQUk7QUFDVmQsZUFBTyxDQUFDQyxHQUFSLENBQVlhLEdBQVo7QUFDQWYsZ0JBQVEsQ0FBQ2UsR0FBRCxDQUFSO0FBQ0gsT0FaRDtBQWFIOzs7NkJBRU87QUFDSlAsa0JBQVksQ0FBQ1EsVUFBYixDQUF3QixNQUF4QjtBQUNBUixrQkFBWSxDQUFDUSxVQUFiLENBQXdCLGVBQXhCO0FBQ0g7Ozs7Ozs7OztpREFHVSxJQUFJQyxPQUFKLENBQVksVUFBQ0MsT0FBRCxFQUFVQyxNQUFWLEVBQXFCO0FBQ3BDQyx5QkFBTyxDQUFDLElBQUQsQ0FBUDtBQUNILGlCQUZNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs2QkEyQkZDLFMsRUFBV0MsYSxFQUFlQyxxQixFQUF1QkMsZSxFQUFnQjtBQUVsRXJCLFNBQUcsQ0FBQ0MsSUFBSixjQUFzQjtBQUNsQlEsWUFBSSxFQUFFUyxTQURZO0FBRWxCSSxnQkFBUSxFQUFFSCxhQUZRO0FBR2xCSSx1QkFBZSxFQUFFSDtBQUhDLE9BQXRCLEVBS0NsQixJQUxELENBS00sVUFBQUMsR0FBRyxFQUFJO0FBQ1QsWUFBR0EsR0FBRyxDQUFDQyxNQUFKLEtBQWUsR0FBbEIsRUFBc0I7QUFDbEJpQix5QkFBZSxDQUFDbEIsR0FBRCxDQUFmO0FBQ0g7QUFDSixPQVRELFdBVU8sVUFBQVMsR0FBRyxFQUFJO0FBQ1ZTLHVCQUFlLENBQUNULEdBQUQsQ0FBZjtBQUNILE9BWkQ7QUFhUDs7OytCQUVTO0FBQ04sVUFBR1AsWUFBWSxDQUFDbUIsT0FBYixDQUFxQixlQUFyQixLQUF5QyxJQUE1QyxFQUFpRDtBQUM3QyxlQUFPLElBQVA7QUFDSDs7QUFDRCxhQUFPLEtBQVA7QUFDSDs7O2dDQUVVO0FBQ1AsYUFBT0MsTUFBTSxDQUFDQyxNQUFQLENBQWM7QUFDakJoQixlQUFPLEVBQUU7QUFDTGlCLHVCQUFhLEVBQUV0QixZQUFZLENBQUNtQixPQUFiLENBQXFCLGVBQXJCLENBRFY7QUFFTEksa0JBQVEsRUFBRXZCLFlBQVksQ0FBQ21CLE9BQWIsQ0FBcUIsTUFBckI7QUFGTDtBQURRLE9BQWQsQ0FBUDtBQU1IOzs7Ozs7QUFHVSxtRUFBSTlCLFdBQUosRUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mNjAxM2ViMTRjYjI0Mjg2ZGNjOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcblxyXG5jbGFzcyBBdXRoU2VydmljZSB7XHJcbiAgICBjb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgIHRoaXMubG9nZ2VkSW4gPSBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBsb2dpbihib2R5LCBjYWxsYmFjayl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzZW5kZSBsb2dpbiByZXF1ZXN0XCIsIGJvZHkpO1xyXG4gICAgICAgIEFQSS5wb3N0KGAvbG9naW5gLCBib2R5KVxyXG4gICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgIGlmKHJlcy5zdGF0dXMgPT09IDIwMCl7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXMpO1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXInLCByZXMuZGF0YS51c2VyLm1haWwpO1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0F1dGhvcml6YXRpb24nLCByZXMuaGVhZGVycy5hdXRob3JpemF0aW9uKTtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHJlcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICBjYWxsYmFjayhlcnIpO1xyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcblxyXG4gICAgbG9nb3V0KCl7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKTtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnQXV0aG9yaXphdGlvbicpO1xyXG4gICAgfVxyXG5cclxuICAgIGFzeW5jIGlzTG9nZ2VkSW4oKXtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc292bGUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICByZXNvbHZlKHRydWUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICAgIC8qXHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjaGVja2UgZWluZ2Vsb2dndCBtaXQgdG9rZW4gXCIgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnQXV0aG9yaXphdGlvbicpKTtcclxuICAgICAgICBpZih0aGlzLmhhc1Rva2VuKCkpe1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgQVBJLmdldCgnL3VzZXInLCB0aGlzLmdldEhlYWRlcigpKVxyXG4gICAgICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZihyZXMuc3RhdHVzID09PSAyMDApe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdBdXRob3JpemF0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ3VzZXInKTtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJrZWluIHRva2VuXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSAqL1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyKG1haWxJbnB1dCwgcGFzc3dvcmRJbnB1dCwgcmVwZWF0ZWRQYXNzd29yZElucHV0LCBzdWNjZXNzQ2FsbGJhY2spe1xyXG5cclxuICAgICAgICAgICAgQVBJLnBvc3QoYC9yZWdpc3RlcmAsIHtcclxuICAgICAgICAgICAgICAgIG1haWw6IG1haWxJbnB1dCxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBwYXNzd29yZElucHV0LFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmRDb25maXJtOiByZXBlYXRlZFBhc3N3b3JkSW5wdXRcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHJlcy5zdGF0dXMgPT09IDIwMCl7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VjY2Vzc0NhbGxiYWNrKHJlcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xyXG4gICAgICAgICAgICAgICAgc3VjY2Vzc0NhbGxiYWNrKGVycik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGhhc1Rva2VuKCl7XHJcbiAgICAgICAgaWYobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0F1dGhvcml6YXRpb24nKSAhPSBudWxsKXtcclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRIZWFkZXIoKXtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LmNyZWF0ZSh7XHJcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdBdXRob3JpemF0aW9uJyksXHJcbiAgICAgICAgICAgICAgICBVc2VybmFtZTogbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXInKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG5ldyBBdXRoU2VydmljZSgpOyJdLCJzb3VyY2VSb290IjoiIn0=