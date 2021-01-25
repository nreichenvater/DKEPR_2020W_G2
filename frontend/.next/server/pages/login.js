module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/login.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./api.js":
/*!****************!*\
  !*** ./api.js ***!
  \****************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: `http://localhost:8081`
}));

/***/ }),

/***/ "./components/auth/authservice.js":
/*!****************************************!*\
  !*** ./components/auth/authservice.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../api */ "./api.js");


class AuthService {
  constructor() {
    this.loggedIn = false;
  }

  login(body, callback) {
    console.log("sende login request", body);
    _api__WEBPACK_IMPORTED_MODULE_0__["default"].post(`/login`, body).then(res => {
      if (res.status === 200) {
        console.log(res);
        localStorage.setItem('user', res.data.username);
        localStorage.setItem('Authorization', res.data.token);
        callback(res);
      }
    }).catch(err => {
      console.log(err);
      callback(err);
    });
  }

  logout() {
    localStorage.removeItem('user');
    localStorage.removeItem('Authorization');
  }

  async isLoggedIn() {
    console.log("checke eingeloggt mit token " + localStorage.getItem('Authorization'));

    if (this.hasToken()) {
      return new Promise((resolve, reject) => {
        _api__WEBPACK_IMPORTED_MODULE_0__["default"].get('/user', this.getHeader()).then(res => {
          if (res.status === 200) {
            resolve(true);
          }
        }).catch(err => {
          console.log(err);
          localStorage.removeItem('Authorization');
          localStorage.removeItem('user');
          resolve(false);
        });
      });
    } else {
      console.log("kein token");
      return false;
    }
  }

  register(mailInput, passwordInput, repeatedPasswordInput, successCallback) {
    _api__WEBPACK_IMPORTED_MODULE_0__["default"].post(`/register`, {
      username: mailInput,
      password: passwordInput,
      repeatedPassword: repeatedPasswordInput
    }).then(res => {
      if (res.status === 200) {
        successCallback(res);
      }
    }).catch(err => {
      successCallback(err);
    });
  }

  hasToken() {
    if (localStorage.getItem('Authorization') != null) {
      return true;
    }

    return false;
  }

  getHeader() {
    const token = "Bearer " + localStorage.getItem('Authorization');
    return Object.create({
      headers: {
        Authorization: token,
        user: localStorage.getItem('user')
      }
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (new AuthService());

/***/ }),

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_auth_authservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/auth/authservice */ "./components/auth/authservice.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api */ "./api.js");
var _jsxFileName = "C:\\Users\\Nico\\Dropbox\\Studium\\5. Semester\\DKE PR\\frontend\\pages\\login.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




class Login extends react__WEBPACK_IMPORTED_MODULE_1__["Component"] {
  constructor(props) {
    super(props);
    this.state = {
      user: "",
      password: ""
    };
  }

  componentDidMount() {
    //document.getElementById("loginmailinput").focus();
    document.addEventListener("keyup", this.handleKeyUp);
  }

  login(e) {
    if (e) {
      e.preventDefault();
    }

    console.log(this);
    const body = {
      username: this.state.user,
      password: this.state.password
    };
    _components_auth_authservice__WEBPACK_IMPORTED_MODULE_2__["default"].login(body, res => {
      if (res.status === 200) {
        next_router__WEBPACK_IMPORTED_MODULE_0___default.a.push('/');
        document.getElementById("loginuserinput").value = "";
        document.getElementById("loginpasswordinput").value = "";
      } else {
        console.log("Fehler");
      }
    });
  }

  handleChange(e) {
    e.preventDefault();

    if (e.target.id === "loginuserinput") {
      this.setState({
        user: e.target.value
      });
    } else if (e.target.id === "loginpasswordinput") {
      this.setState({
        password: e.target.value
      });
    }
  }

  switchToRegister(e) {
    if (e) {
      e.preventDefault();
    }

    document.getElementById("loginuserinput").value = "";
    document.getElementById("loginpasswordinput").value = "";
    next_router__WEBPACK_IMPORTED_MODULE_0___default.a.push('/register');
  }

  handleKeyUp(e) {
    e.preventDefault();

    if (e.key === "Enter") {
      this.login();
    }
  }

  render() {
    return __jsx("div", {
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67,
        columnNumber: 7
      }
    }, __jsx("div", {
      className: "body-4",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68,
        columnNumber: 9
      }
    }, __jsx("div", {
      id: "HeaderSection",
      class: "defaultsection loginheader",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 13
      }
    }, __jsx("div", {
      class: "defaultcontainer header",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 17
      }
    }, __jsx("div", {
      class: "navigationdiv nomarginbottom",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 71,
        columnNumber: 21
      }
    }, __jsx("a", {
      className: "logo",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 72,
        columnNumber: 25
      }
    }, "Mooder"), __jsx("div", {
      class: "headerspace",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73,
        columnNumber: 25
      }
    })))), __jsx("div", {
      class: "logindiv",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77,
        columnNumber: 11
      }
    }, __jsx("div", {
      class: "loginheader",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78,
        columnNumber: 13
      }
    }, "Anmelden"), __jsx("div", {
      class: "loginform w-form",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 13
      }
    }, __jsx("form", {
      id: "email-form",
      name: "email-form",
      "data-name": "Email Form",
      class: "form-3",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 15
      }
    }, __jsx("input", {
      onChange: this.handleChange.bind(this),
      type: "text",
      class: "logintextfield mail w-input",
      maxLength: "256",
      name: "field",
      "data-name": "Field",
      placeholder: "Username",
      id: "loginuserinput",
      required: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 86,
        columnNumber: 17
      }
    }), __jsx("input", {
      onChange: this.handleChange.bind(this),
      onKeyUp: this.handleKeyUp.bind(this),
      type: "password",
      class: "logintextfield password w-input",
      maxlength: "256",
      name: "field-2",
      "data-name": "Field 2",
      placeholder: "Passwort",
      id: "loginpasswordinput",
      required: "",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 17
      }
    }), __jsx("a", {
      onClick: this.login.bind(this),
      "data-w-id": "2e7716f4-fa06-b98c-67d2-94a074914c30",
      href: "#",
      class: "button login w-button",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109,
        columnNumber: 17
      }
    }, "ANMELDEN")), __jsx("div", {
      class: "loginbottomtext",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118,
        columnNumber: 15
      }
    }, "Du hast noch kein Konto?\xA0", __jsx("a", {
      href: "#",
      onClick: this.switchToRegister.bind(this),
      class: "link-5",
      __self: this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 15
      }
    }, "Registrieren"))))));
  }

}

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vYXBpLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvYXV0aC9hdXRoc2VydmljZS5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9sb2dpbi5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJheGlvc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvcm91dGVyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJheGlvcyIsImNyZWF0ZSIsImJhc2VVUkwiLCJBdXRoU2VydmljZSIsImNvbnN0cnVjdG9yIiwibG9nZ2VkSW4iLCJsb2dpbiIsImJvZHkiLCJjYWxsYmFjayIsImNvbnNvbGUiLCJsb2ciLCJBUEkiLCJwb3N0IiwidGhlbiIsInJlcyIsInN0YXR1cyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJkYXRhIiwidXNlcm5hbWUiLCJ0b2tlbiIsImNhdGNoIiwiZXJyIiwibG9nb3V0IiwicmVtb3ZlSXRlbSIsImlzTG9nZ2VkSW4iLCJnZXRJdGVtIiwiaGFzVG9rZW4iLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsImdldCIsImdldEhlYWRlciIsInJlZ2lzdGVyIiwibWFpbElucHV0IiwicGFzc3dvcmRJbnB1dCIsInJlcGVhdGVkUGFzc3dvcmRJbnB1dCIsInN1Y2Nlc3NDYWxsYmFjayIsInBhc3N3b3JkIiwicmVwZWF0ZWRQYXNzd29yZCIsIk9iamVjdCIsImhlYWRlcnMiLCJBdXRob3JpemF0aW9uIiwidXNlciIsIkxvZ2luIiwiQ29tcG9uZW50IiwicHJvcHMiLCJzdGF0ZSIsImNvbXBvbmVudERpZE1vdW50IiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlS2V5VXAiLCJlIiwicHJldmVudERlZmF1bHQiLCJBdXRoIiwiUm91dGVyIiwicHVzaCIsImdldEVsZW1lbnRCeUlkIiwidmFsdWUiLCJoYW5kbGVDaGFuZ2UiLCJ0YXJnZXQiLCJpZCIsInNldFN0YXRlIiwic3dpdGNoVG9SZWdpc3RlciIsImtleSIsInJlbmRlciIsImJpbmQiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFBO0FBQUE7QUFFZUEsMkdBQUssQ0FBQ0MsTUFBTixDQUFhO0FBQzFCQyxTQUFPLEVBQUc7QUFEZ0IsQ0FBYixDQUFmLEU7Ozs7Ozs7Ozs7OztBQ0RBO0FBQUE7QUFBQTs7QUFFQSxNQUFNQyxXQUFOLENBQWtCO0FBQ2RDLGFBQVcsR0FBRTtBQUNULFNBQUtDLFFBQUwsR0FBZ0IsS0FBaEI7QUFDSDs7QUFFREMsT0FBSyxDQUFDQyxJQUFELEVBQU9DLFFBQVAsRUFBZ0I7QUFDakJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLHFCQUFaLEVBQW1DSCxJQUFuQztBQUNBSSxnREFBRyxD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RSxLQUFLZixXQUFMLENBQWlCZSxJQUFqQixDQUFzQixJQUF0QixDQUZYO0FBR0UsVUFBSSxFQUFDLFVBSFA7QUFJRSxXQUFLLEVBQUMsaUNBSlI7QUFLRSxlQUFTLEVBQUMsS0FMWjtBQU1FLFVBQUksRUFBQyxTQU5QO0FBT0UsbUJBQVUsU0FQWjtBQVFFLGlCQUFXLEVBQUMsVUFSZDtBQVNFLFFBQUUsRUFBQyxvQkFUTDtBQVVFLGNBQVEsRUFBQyxFQVZYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFqQkYsRUE2QkU7QUFDRSxhQUFPLEVBQUUsS0FBSzVELEtBQUwsQ0FBVzRELElBQVgsQ0FBZ0IsSUFBaEIsQ0FEWDtBQUVFLG1CQUFVLHNDQUZaO0FBR0UsVUFBSSxFQUFDLEdBSFA7QUFJRSxXQUFLLEVBQUMsdUJBSlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxrQkE3QkYsQ0FERixFQXVDRTtBQUFLLFdBQUssRUFBQyxpQkFBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVDQUVBO0FBQ0UsVUFBSSxFQUFDLEdBRFA7QUFFRSxhQUFPLEVBQUUsS0FBS0gsZ0JBQUwsQ0FBc0JHLElBQXRCLENBQTJCLElBQTNCLENBRlg7QUFHRSxXQUFLLEVBQUMsUUFIUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHNCQUZBLENBdkNGLENBRkYsQ0FURixDQURGLENBREY7QUFtRUQ7O0FBL0gwQyxDOzs7Ozs7Ozs7OztBQ0w3QyxrQzs7Ozs7Ozs7Ozs7QUNBQSx3Qzs7Ozs7Ozs7Ozs7QUNBQSxrQyIsImZpbGUiOiJwYWdlcy9sb2dpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vcGFnZXMvbG9naW4uanNcIik7XG4iLCJpbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXhpb3MuY3JlYXRlKHtcclxuICBiYXNlVVJMOiBgaHR0cDovL2xvY2FsaG9zdDo4MDgxYFxyXG59KTsiLCJcclxuaW1wb3J0IEFQSSBmcm9tICcuLi8uLi9hcGknO1xyXG5cclxuY2xhc3MgQXV0aFNlcnZpY2Uge1xyXG4gICAgY29uc3RydWN0b3IoKXtcclxuICAgICAgICB0aGlzLmxvZ2dlZEluID0gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgbG9naW4oYm9keSwgY2FsbGJhY2spe1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2VuZGUgbG9naW4gcmVxdWVzdFwiLCBib2R5KTtcclxuICAgICAgICBBUEkucG9zdChgL2xvZ2luYCwgYm9keSlcclxuICAgICAgICAudGhlbihyZXMgPT4ge1xyXG4gICAgICAgICAgICBpZihyZXMuc3RhdHVzID09PSAyMDApe1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzKTtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyJywgcmVzLmRhdGEudXNlcm5hbWUpO1xyXG4gICAgICAgICAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ0F1dGhvcml6YXRpb24nLCByZXMuZGF0YS50b2tlbik7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhyZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgY2FsbGJhY2soZXJyKTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIGxvZ291dCgpe1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJyk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ0F1dGhvcml6YXRpb24nKTtcclxuICAgIH1cclxuXHJcbiAgICBhc3luYyBpc0xvZ2dlZEluKCl7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJjaGVja2UgZWluZ2Vsb2dndCBtaXQgdG9rZW4gXCIgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnQXV0aG9yaXphdGlvbicpKTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5oYXNUb2tlbigpKXtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgIEFQSS5nZXQoJy91c2VyJywgdGhpcy5nZXRIZWFkZXIoKSlcclxuICAgICAgICAgICAgICAgIC50aGVuKHJlcyA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYocmVzLnN0YXR1cyA9PT0gMjAwKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgLmNhdGNoKGVyciA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKTtcclxuICAgICAgICAgICAgICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnQXV0aG9yaXphdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCd1c2VyJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwia2VpbiB0b2tlblwiKTtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlcihtYWlsSW5wdXQsIHBhc3N3b3JkSW5wdXQsIHJlcGVhdGVkUGFzc3dvcmRJbnB1dCwgc3VjY2Vzc0NhbGxiYWNrKXtcclxuXHJcbiAgICAgICAgQVBJLnBvc3QoYC9yZWdpc3RlcmAsIHtcclxuICAgICAgICAgICAgdXNlcm5hbWU6IG1haWxJbnB1dCxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IHBhc3N3b3JkSW5wdXQsXHJcbiAgICAgICAgICAgIHJlcGVhdGVkUGFzc3dvcmQ6IHJlcGVhdGVkUGFzc3dvcmRJbnB1dFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgaWYocmVzLnN0YXR1cyA9PT0gMjAwKXtcclxuICAgICAgICAgICAgICAgIHN1Y2Nlc3NDYWxsYmFjayhyZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcclxuICAgICAgICAgICAgc3VjY2Vzc0NhbGxiYWNrKGVycik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgaGFzVG9rZW4oKXtcclxuICAgICAgICBpZihsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnQXV0aG9yaXphdGlvbicpICE9IG51bGwpe1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIGdldEhlYWRlcigpe1xyXG4gICAgICAgIGNvbnN0IHRva2VuID0gXCJCZWFyZXIgXCIgKyBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnQXV0aG9yaXphdGlvbicpO1xyXG4gICAgICAgIHJldHVybiBPYmplY3QuY3JlYXRlKHtcclxuICAgICAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogdG9rZW4sXHJcbiAgICAgICAgICAgICAgICB1c2VyOiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbmV3IEF1dGhTZXJ2aWNlKCk7IiwiaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgQXV0aCBmcm9tIFwiLi4vY29tcG9uZW50cy9hdXRoL2F1dGhzZXJ2aWNlXCI7XHJcbmltcG9ydCBBUEkgZnJvbSAnLi4vYXBpJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2luIGV4dGVuZHMgQ29tcG9uZW50IHtcclxuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xyXG4gICAgc3VwZXIocHJvcHMpO1xyXG4gICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgdXNlcjogXCJcIixcclxuICAgICAgcGFzc3dvcmQ6IFwiXCIsXHJcbiAgICB9O1xyXG4gIH1cclxuXHJcbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XHJcbiAgICAvL2RvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW5tYWlsaW5wdXRcIikuZm9jdXMoKTtcclxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCB0aGlzLmhhbmRsZUtleVVwKTtcclxuICB9XHJcblxyXG4gIGxvZ2luKGUpIHtcclxuICAgIGlmIChlKSB7XHJcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKHRoaXMpO1xyXG4gICAgY29uc3QgYm9keSA9IHtcclxuICAgICAgdXNlcm5hbWU6IHRoaXMuc3RhdGUudXNlcixcclxuICAgICAgcGFzc3dvcmQ6IHRoaXMuc3RhdGUucGFzc3dvcmQsXHJcbiAgICB9O1xyXG4gICAgQXV0aC5sb2dpbihib2R5LCAocmVzKSA9PiB7XHJcbiAgICAgICAgaWYgKHJlcy5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgUm91dGVyLnB1c2goJy8nKTtcclxuICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibG9naW51c2VyaW5wdXRcIikudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpbnBhc3N3b3JkaW5wdXRcIikudmFsdWUgPSBcIlwiO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkZlaGxlclwiKTtcclxuICAgICAgICB9XHJcbiAgICAgIH0pO1xyXG4gIH1cclxuXHJcbiAgaGFuZGxlQ2hhbmdlKGUpIHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmIChlLnRhcmdldC5pZCA9PT0gXCJsb2dpbnVzZXJpbnB1dFwiKSB7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyB1c2VyOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgIH0gZWxzZSBpZiAoZS50YXJnZXQuaWQgPT09IFwibG9naW5wYXNzd29yZGlucHV0XCIpIHtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IHBhc3N3b3JkOiBlLnRhcmdldC52YWx1ZSB9KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gIHN3aXRjaFRvUmVnaXN0ZXIoZSkge1xyXG4gICAgaWYgKGUpIHtcclxuICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgfVxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJsb2dpbnVzZXJpbnB1dFwiKS52YWx1ZSA9IFwiXCI7XHJcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImxvZ2lucGFzc3dvcmRpbnB1dFwiKS52YWx1ZSA9IFwiXCI7XHJcbiAgICBSb3V0ZXIucHVzaCgnL3JlZ2lzdGVyJyk7XHJcbiAgfVxyXG5cclxuICBoYW5kbGVLZXlVcChlKSB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAoZS5rZXkgPT09IFwiRW50ZXJcIikge1xyXG4gICAgICB0aGlzLmxvZ2luKCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZW5kZXIoKSB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYm9keS00XCI+XHJcbiAgICAgICAgICAgIDxkaXYgaWQ9XCJIZWFkZXJTZWN0aW9uXCIgY2xhc3M9XCJkZWZhdWx0c2VjdGlvbiBsb2dpbmhlYWRlclwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRlZmF1bHRjb250YWluZXIgaGVhZGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm5hdmlnYXRpb25kaXYgbm9tYXJnaW5ib3R0b21cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwibG9nb1wiPk1vb2RlcjwvYT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlcnNwYWNlXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbmRpdlwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW5oZWFkZXJcIj5Bbm1lbGRlbjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibG9naW5mb3JtIHctZm9ybVwiPlxyXG4gICAgICAgICAgICAgIDxmb3JtXHJcbiAgICAgICAgICAgICAgICBpZD1cImVtYWlsLWZvcm1cIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsLWZvcm1cIlxyXG4gICAgICAgICAgICAgICAgZGF0YS1uYW1lPVwiRW1haWwgRm9ybVwiXHJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImZvcm0tM1wiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXt0aGlzLmhhbmRsZUNoYW5nZS5iaW5kKHRoaXMpfVxyXG4gICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzPVwibG9naW50ZXh0ZmllbGQgbWFpbCB3LWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgbWF4TGVuZ3RoPVwiMjU2XCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cImZpZWxkXCJcclxuICAgICAgICAgICAgICAgICAgZGF0YS1uYW1lPVwiRmllbGRcIlxyXG4gICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgaWQ9XCJsb2dpbnVzZXJpbnB1dFwiXHJcbiAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPVwiXCJcclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e3RoaXMuaGFuZGxlQ2hhbmdlLmJpbmQodGhpcyl9XHJcbiAgICAgICAgICAgICAgICAgIG9uS2V5VXA9e3RoaXMuaGFuZGxlS2V5VXAuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgY2xhc3M9XCJsb2dpbnRleHRmaWVsZCBwYXNzd29yZCB3LWlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgbWF4bGVuZ3RoPVwiMjU2XCJcclxuICAgICAgICAgICAgICAgICAgbmFtZT1cImZpZWxkLTJcIlxyXG4gICAgICAgICAgICAgICAgICBkYXRhLW5hbWU9XCJGaWVsZCAyXCJcclxuICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29ydFwiXHJcbiAgICAgICAgICAgICAgICAgIGlkPVwibG9naW5wYXNzd29yZGlucHV0XCJcclxuICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e3RoaXMubG9naW4uYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgICAgZGF0YS13LWlkPVwiMmU3NzE2ZjQtZmEwNi1iOThjLTY3ZDItOTRhMDc0OTE0YzMwXCJcclxuICAgICAgICAgICAgICAgICAgaHJlZj1cIiNcIlxyXG4gICAgICAgICAgICAgICAgICBjbGFzcz1cImJ1dHRvbiBsb2dpbiB3LWJ1dHRvblwiXHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIEFOTUVMREVOXHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJsb2dpbmJvdHRvbXRleHRcIj5cclxuICAgICAgICAgICAgICBEdSBoYXN0IG5vY2gga2VpbiBLb250bz/CoFxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBocmVmPVwiI1wiXHJcbiAgICAgICAgICAgICAgICBvbkNsaWNrPXt0aGlzLnN3aXRjaFRvUmVnaXN0ZXIuYmluZCh0aGlzKX1cclxuICAgICAgICAgICAgICAgIGNsYXNzPVwibGluay01XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBSZWdpc3RyaWVyZW5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfVxyXG59XHJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImF4aW9zXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=