/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const express = __webpack_require__(/*! express */ \"express\");\n\nconst cors = __webpack_require__(/*! cors */ \"cors\");\n\nconst compression = __webpack_require__(/*! compression */ \"compression\");\n\nconst helmet = __webpack_require__(/*! helmet */ \"helmet\");\n\nconst morgan = __webpack_require__(/*! morgan */ \"morgan\");\n\nconst appRouter = __webpack_require__(/*! ./routes/index */ \"./src/routes/index.js\");\n\nconst initalizeApp = () => {\n  const app = express();\n  app.use(express.json());\n  app.use(cors());\n  app.use(helmet());\n  app.use(morgan(\"combined\"));\n  app.use(compression());\n  app.use(\"/api\", appRouter);\n  app.get(\"/\", (_req, res) => {\n    return res.status(200).json({\n      status: \"running\"\n    });\n  });\n  return app;\n};\n\nmodule.exports = initalizeApp;\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/config/index.js":
/*!*****************************!*\
  !*** ./src/config/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! dotenv */ \"dotenv\").config();\n\nconst isDev =  false ? undefined : true;\nmodule.exports = {\n  isDev,\n  PORT: process.env.PORT\n};\n\n//# sourceURL=webpack:///./src/config/index.js?");

/***/ }),

/***/ "./src/routes/flags.js":
/*!*****************************!*\
  !*** ./src/routes/flags.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const {\n  Router\n} = __webpack_require__(/*! express */ \"express\");\n\nconst router = Router();\nrouter.get(\"/\", (_req, res) => {\n  const randomNumber = Math.floor(Math.random() * 200);\n  let featureFlag = false;\n  if (randomNumber % 2 === 0) featureFlag = true;\n  return res.status(200).json({\n    flag: featureFlag\n  });\n});\nmodule.exports = router;\n\n//# sourceURL=webpack:///./src/routes/flags.js?");

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("const {\n  Router\n} = __webpack_require__(/*! express */ \"express\");\n\nconst flags = __webpack_require__(/*! ./flags */ \"./src/routes/flags.js\"); // const ssr = require(\"./ssr\");\n\n\nconst router = Router();\nrouter.use(\"/flags\", flags); // router.use(\"/ssr\", ssr);\n\nmodule.exports = router;\n\n//# sourceURL=webpack:///./src/routes/index.js?");

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! @babel/register */ \"@babel/register\")({\n  plugins: [\"@babel/plugin-syntax-jsx\"],\n  presets: [\"@babel/preset-env\", \"@babel/preset-react\"]\n});\n\nconst initalizeApp = __webpack_require__(/*! ./app */ \"./src/app.js\");\n\nconst config = __webpack_require__(/*! ./config/index */ \"./src/config/index.js\");\n\nconst main = () => {\n  const app = initalizeApp();\n  app.listen(config.PORT, () => {\n    console.log(`Server listening on port http://localhost:${config.PORT}/`);\n  });\n};\n\nmain();\n\n//# sourceURL=webpack:///./src/server.js?");

/***/ }),

/***/ "@babel/register":
/*!**********************************!*\
  !*** external "@babel/register" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@babel/register\");\n\n//# sourceURL=webpack:///external_%22@babel/register%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "cors":
/*!***********************!*\
  !*** external "cors" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"cors\");\n\n//# sourceURL=webpack:///external_%22cors%22?");

/***/ }),

/***/ "dotenv":
/*!*************************!*\
  !*** external "dotenv" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"dotenv\");\n\n//# sourceURL=webpack:///external_%22dotenv%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ })

/******/ });