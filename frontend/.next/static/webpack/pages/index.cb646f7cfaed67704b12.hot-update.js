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
                return _context.abrupt("return", new Promise(function (resolve, reject) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9hdXRoL2F1dGhzZXJ2aWNlLmpzIl0sIm5hbWVzIjpbIkF1dGhTZXJ2aWNlIiwibG9nZ2VkSW4iLCJib2R5IiwiY2FsbGJhY2siLCJjb25zb2xlIiwibG9nIiwiQVBJIiwicG9zdCIsInRoZW4iLCJyZXMiLCJzdGF0dXMiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZGF0YSIsInVzZXIiLCJtYWlsIiwiaGVhZGVycyIsImF1dGhvcml6YXRpb24iLCJlcnIiLCJyZW1vdmVJdGVtIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJtYWlsSW5wdXQiLCJwYXNzd29yZElucHV0IiwicmVwZWF0ZWRQYXNzd29yZElucHV0Iiwic3VjY2Vzc0NhbGxiYWNrIiwicGFzc3dvcmQiLCJwYXNzd29yZENvbmZpcm0iLCJnZXRJdGVtIiwiT2JqZWN0IiwiY3JlYXRlIiwiQXV0aG9yaXphdGlvbiIsIlVzZXJuYW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFFTUEsVztBQUNGLHlCQUFhO0FBQUE7O0FBQ1QsU0FBS0MsUUFBTCxHQUFnQixLQUFoQjtBQUNIOzs7OzBCQUVLQyxJLEVBQU1DLFEsRUFBUztBQUNqQkMsYUFBTyxDQUFDQyxHQUFSLENBQVkscUJBQVosRUFBbUNILElBQW5DO0FBQ0FJLFNBQUcsQ0FBQ0MsSUFBSixXQUFtQkwsSUFBbkIsRUFDQ00sSUFERCxDQUNNLFVBQUFDLEdBQUcsRUFBSTtBQUNULFlBQUdBLEdBQUcsQ0FBQ0MsTUFBSixLQUFlLEdBQWxCLEVBQXNCO0FBQ2xCTixpQkFBTyxDQUFDQyxHQUFSLENBQVlJLEdBQVo7QUFDQUUsc0JBQVksQ0FBQ0MsT0FBYixDQUFxQixNQUFyQixFQUE2QkgsR0FBRyxDQUFDSSxJQUFKLENBQVNDLElBQVQsQ0FBY0MsSUFBM0M7QUFDQUosc0JBQVksQ0FBQ0MsT0FBYixDQUFxQixlQUFyQixFQUFzQ0gsR0FBRyxDQUFDTyxPQUFKLENBQVlDLGFBQWxEO0FBQ0FkLGtCQUFRLENBQUNNLEdBQUQsQ0FBUjtBQUNIO0FBQ0osT0FSRCxXQVNPLFVBQUFTLEdBQUcsRUFBSTtBQUNWZCxlQUFPLENBQUNDLEdBQVIsQ0FBWWEsR0FBWjtBQUNBZixnQkFBUSxDQUFDZSxHQUFELENBQVI7QUFDSCxPQVpEO0FBYUg7Ozs2QkFFTztBQUNKUCxrQkFBWSxDQUFDUSxVQUFiLENBQXdCLE1BQXhCO0FBQ0FSLGtCQUFZLENBQUNRLFVBQWIsQ0FBd0IsZUFBeEI7QUFDSDs7Ozs7Ozs7O2lEQUdVLElBQUlDLE9BQUosQ0FBWSxVQUFDQyxPQUFELEVBQVVDLE1BQVYsRUFBcUI7QUFDcENELHlCQUFPLENBQUMsSUFBRCxDQUFQO0FBQ0gsaUJBRk0sQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OzZCQTJCRkUsUyxFQUFXQyxhLEVBQWVDLHFCLEVBQXVCQyxlLEVBQWdCO0FBRWxFcEIsU0FBRyxDQUFDQyxJQUFKLGNBQXNCO0FBQ2xCUSxZQUFJLEVBQUVRLFNBRFk7QUFFbEJJLGdCQUFRLEVBQUVILGFBRlE7QUFHbEJJLHVCQUFlLEVBQUVIO0FBSEMsT0FBdEIsRUFLQ2pCLElBTEQsQ0FLTSxVQUFBQyxHQUFHLEVBQUk7QUFDVCxZQUFHQSxHQUFHLENBQUNDLE1BQUosS0FBZSxHQUFsQixFQUFzQjtBQUNsQmdCLHlCQUFlLENBQUNqQixHQUFELENBQWY7QUFDSDtBQUNKLE9BVEQsV0FVTyxVQUFBUyxHQUFHLEVBQUk7QUFDVlEsdUJBQWUsQ0FBQ1IsR0FBRCxDQUFmO0FBQ0gsT0FaRDtBQWFQOzs7K0JBRVM7QUFDTixVQUFHUCxZQUFZLENBQUNrQixPQUFiLENBQXFCLGVBQXJCLEtBQXlDLElBQTVDLEVBQWlEO0FBQzdDLGVBQU8sSUFBUDtBQUNIOztBQUNELGFBQU8sS0FBUDtBQUNIOzs7Z0NBRVU7QUFDUCxhQUFPQyxNQUFNLENBQUNDLE1BQVAsQ0FBYztBQUNqQmYsZUFBTyxFQUFFO0FBQ0xnQix1QkFBYSxFQUFFckIsWUFBWSxDQUFDa0IsT0FBYixDQUFxQixlQUFyQixDQURWO0FBRUxJLGtCQUFRLEVBQUV0QixZQUFZLENBQUNrQixPQUFiLENBQXFCLE1BQXJCO0FBRkw7QUFEUSxPQUFkLENBQVA7QUFNSDs7Ozs7O0FBR1UsbUVBQUk3QixXQUFKLEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguY2I2NDZmN2NmYWVkNjc3MDRiMTIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuY2xhc3MgQXV0aFNlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmxvZ2dlZEluID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgbG9naW4oYm9keSwgY2FsbGJhY2spe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2VuZGUgbG9naW4gcmVxdWVzdFwiLCBib2R5KTtcclxuICAgICAgICBBUEkucG9zdChgL2xvZ2luYCwgYm9keSlcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICBpZihyZXMuc3RhdHVzID09PSAyMDApe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyJywgcmVzLmRhdGEudXNlci5tYWlsKTtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdBdXRob3JpemF0aW9uJywgcmVzLmhlYWRlcnMuYXV0aG9yaXphdGlvbik7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgY2FsbGJhY2soZXJyKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGxvZ291dCgpe1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJyk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ0F1dGhvcml6YXRpb24nKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBpc0xvZ2dlZEluKCl7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcclxuICAgICAgICB9KTtcclxuICAgICAgICAvKlxyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2hlY2tlIGVpbmdlbG9nZ3QgbWl0IHRva2VuIFwiICsgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ0F1dGhvcml6YXRpb24nKSk7XHJcbiAgICAgICAgaWYodGhpcy5oYXNUb2tlbigpKXtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIEFQSS5nZXQoJy91c2VyJywgdGhpcy5nZXRIZWFkZXIoKSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzLnN0YXR1cyA9PT0gMjAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnQXV0aG9yaXphdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwia2VpbiB0b2tlblwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0gKi9cclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlcihtYWlsSW5wdXQsIHBhc3N3b3JkSW5wdXQsIHJlcGVhdGVkUGFzc3dvcmRJbnB1dCwgc3VjY2Vzc0NhbGxiYWNrKXtcclxuXHJcbiAgICAgICAgICAgIEFQSS5wb3N0KGAvcmVnaXN0ZXJgLCB7XHJcbiAgICAgICAgICAgICAgICBtYWlsOiBtYWlsSW5wdXQsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogcGFzc3dvcmRJbnB1dCxcclxuICAgICAgICAgICAgICAgIHBhc3N3b3JkQ29uZmlybTogcmVwZWF0ZWRQYXNzd29yZElucHV0XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZihyZXMuc3RhdHVzID09PSAyMDApe1xyXG4gICAgICAgICAgICAgICAgICAgIHN1Y2Nlc3NDYWxsYmFjayhyZXMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3NDYWxsYmFjayhlcnIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBoYXNUb2tlbigpe1xyXG4gICAgICAgIGlmKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdBdXRob3JpemF0aW9uJykgIT0gbnVsbCl7XHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgZ2V0SGVhZGVyKCl7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC5jcmVhdGUoe1xyXG4gICAgICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgICAgICBBdXRob3JpemF0aW9uOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnQXV0aG9yaXphdGlvbicpLFxyXG4gICAgICAgICAgICAgICAgVXNlcm5hbWU6IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBuZXcgQXV0aFNlcnZpY2UoKTsiXSwic291cmNlUm9vdCI6IiJ9