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

/***/ "../src/App.js":
/*!*********************!*\
  !*** ../src/App.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("throw new Error(\"Module build failed (from ./node_modules/babel-loader/lib/index.js):\\nSyntaxError: /Users/pranjal.dev/coding/React/react-ssr/src/App.js: Support for the experimental syntax 'jsx' isn't currently enabled (8:5):\\n\\n\\u001b[0m \\u001b[90m  6 | \\u001b[39m\\u001b[36mfunction\\u001b[39m \\u001b[33mApp\\u001b[39m() {\\u001b[0m\\n\\u001b[0m \\u001b[90m  7 | \\u001b[39m  \\u001b[36mreturn\\u001b[39m (\\u001b[0m\\n\\u001b[0m\\u001b[31m\\u001b[1m>\\u001b[22m\\u001b[39m\\u001b[90m  8 | \\u001b[39m    \\u001b[33m<\\u001b[39m\\u001b[33mdiv\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m    | \\u001b[39m    \\u001b[31m\\u001b[1m^\\u001b[22m\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m  9 | \\u001b[39m      \\u001b[33m<\\u001b[39m\\u001b[33mNavbar\\u001b[39m \\u001b[33m/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 10 | \\u001b[39m      \\u001b[33m<\\u001b[39m\\u001b[33mdiv\\u001b[39m className\\u001b[33m=\\u001b[39m\\u001b[32m\\\"container\\\"\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\u001b[0m \\u001b[90m 11 | \\u001b[39m        \\u001b[33m<\\u001b[39m\\u001b[33mDashboard\\u001b[39m \\u001b[33m/\\u001b[39m\\u001b[33m>\\u001b[39m\\u001b[0m\\n\\nAdd @babel/preset-react (https://git.io/JfeDR) to the 'presets' section of your Babel config to enable transformation.\\nIf you want to leave it as-is, add @babel/plugin-syntax-jsx (https://git.io/vb4yA) to the 'plugins' section to enable parsing.\\n    at Parser._raise (/Users/pranjal.dev/coding/React/react-ssr/server/node_modules/@babel/parser/lib/index.js:541:17)\\n    at Parser.raiseWithData (/Users/pranjal.dev/coding/React/react-ssr/server/node_modules/@babel/parser/lib/index.js:534:17)\\n    at Parser.expectOnePlugin (/Users/pranjal.dev/coding/React/react-ssr/server/node_modules/@babel/parser/lib/index.js:3565:18)\\n    at Parser.parseExprAtom (/Users/pranjal.dev/coding/React/react-ssr/server/node_modules/@babel/parser/lib/index.js:11814:20)\\n    at Parser.parseExprSubscripts (/Users/pranjal.dev/coding/React/react-ssr/server/node_modules/@babel/parser/lib/index.js:11414:23)\\n    at Parser.parseUpdate (/Users/pranjal.dev/coding/React/react-ssr/server/node_modules/@babel/parser/lib/index.js:11394:21)\\n    at Parser.parseMaybeUnary (/Users/pranjal.dev/coding/React/react-ssr/server/node_modules/@babel/parser/lib/index.js:11369:23)\\n    at Parser.parseMaybeUnaryOrPrivate (/Users/pranjal.dev/coding/React/react-ssr/server/node_modules/@babel/parser/lib/index.js:11183:61)\\n    at Parser.parseExprOps (/Users/pranjal.dev/coding/React/react-ssr/server/node_modules/@babel/parser/lib/index.js:11190:23)\\n    at Parser.parseMaybeConditional (/Users/pranjal.dev/coding/React/react-ssr/server/node_modules/@babel/parser/lib/index.js:11160:23)\\n    at Parser.parseMaybeAssign (/Users/pranjal.dev/coding/React/react-ssr/server/node_modules/@babel/parser/lib/index.js:11123:21)\\n    at /Users/pranjal.dev/coding/React/react-ssr/server/node_modules/@babel/parser/lib/index.js:11081:39\\n    at Parser.allowInAnd (/Users/pranjal.dev/coding/React/react-ssr/server/node_modules/@babel/parser/lib/index.js:12928:12)\\n    at Parser.parseMaybeAssignAllowIn (/Users/pranjal.dev/coding/React/react-ssr/server/node_modules/@babel/parser/lib/index.js:11081:17)\\n    at Parser.parseParenAndDistinguishExpression (/Users/pranjal.dev/coding/React/react-ssr/server/node_modules/@babel/parser/lib/index.js:12116:28)\\n    at Parser.parseExprAtom (/Users/pranjal.dev/coding/React/react-ssr/server/node_modules/@babel/parser/lib/index.js:11721:23)\\n    at Parser.parseExprSubscripts (/Users/pranjal.dev/coding/React/react-ssr/server/node_modules/@babel/parser/lib/index.js:11414:23)\\n    at Parser.parseUpdate (/Users/pranjal.dev/coding/React/react-ssr/server/node_modules/@babel/parser/lib/index.js:11394:21)\\n    at Parser.parseMaybeUnary (/Users/pranjal.dev/coding/React/react-ssr/server/node_modules/@babel/parser/lib/index.js:11369:23)\\n    at Parser.parseMaybeUnaryOrPrivate (/Users/pranjal.dev/coding/React/react-ssr/server/node_modules/@babel/parser/lib/index.js:11183:61)\\n    at Parser.parseExprOps (/Users/pranjal.dev/coding/React/react-ssr/server/node_modules/@babel/parser/lib/index.js:11190:23)\\n    at Parser.parseMaybeConditional (/Users/pranjal.dev/coding/React/react-ssr/server/node_modules/@babel/parser/lib/index.js:11160:23)\\n    at Parser.parseMaybeAssign (/Users/pranjal.dev/coding/React/react-ssr/server/node_modules/@babel/parser/lib/index.js:11123:21)\\n    at Parser.parseExpressionBase (/Users/pranjal.dev/coding/React/react-ssr/server/node_modules/@babel/parser/lib/index.js:11059:23)\\n    at /Users/pranjal.dev/coding/React/react-ssr/server/node_modules/@babel/parser/lib/index.js:11053:39\\n    at Parser.allowInAnd (/Users/pranjal.dev/coding/React/react-ssr/server/node_modules/@babel/parser/lib/index.js:12922:16)\\n    at Parser.parseExpression (/Users/pranjal.dev/coding/React/react-ssr/server/node_modules/@babel/parser/lib/index.js:11053:17)\\n    at Parser.parseReturnStatement (/Users/pranjal.dev/coding/React/react-ssr/server/node_modules/@babel/parser/lib/index.js:13517:28)\\n    at Parser.parseStatementContent (/Users/pranjal.dev/coding/React/react-ssr/server/node_modules/@babel/parser/lib/index.js:13189:21)\\n    at Parser.parseStatement (/Users/pranjal.dev/coding/React/react-ssr/server/node_modules/@babel/parser/lib/index.js:13139:17)\");\n\n//# sourceURL=webpack:///../src/App.js?");

/***/ }),

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

eval("const {\n  Router\n} = __webpack_require__(/*! express */ \"express\");\n\nconst flags = __webpack_require__(/*! ./flags */ \"./src/routes/flags.js\");\n\nconst ssr = __webpack_require__(/*! ./ssr */ \"./src/routes/ssr.js\");\n\nconst router = Router();\nrouter.use(\"/flags\", flags);\nrouter.use(\"/ssr\", ssr);\nmodule.exports = router;\n\n//# sourceURL=webpack:///./src/routes/index.js?");

/***/ }),

/***/ "./src/routes/ssr.js":
/*!***************************!*\
  !*** ./src/routes/ssr.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(__dirname) {/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../src/App */ \"../src/App.js\");\n/* harmony import */ var _src_App__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_src_App__WEBPACK_IMPORTED_MODULE_0__);\nconst {\n  Router\n} = __webpack_require__(/*! express */ \"express\");\n\nconst React = __webpack_require__(/*! react */ \"react\");\n\nconst ReactDOMServer = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nconst path = __webpack_require__(/*! path */ \"path\");\n\nconst fs = __webpack_require__(/*! fs */ \"fs\");\n\n\n\nconst getHtmlFileContents = () => {\n  const htmlFilePath = path.join(__dirname, \"../../\", \"public/index.html\");\n  console.log(\"htmlFilePath: \", htmlFilePath);\n  return new Promise(resolve => {\n    fs.readFile(htmlFilePath, \"utf-8\", (err, data) => {\n      if (err) {\n        console.error(\"Something went wrong:\", err);\n        resolve({\n          error: err,\n          data: null\n        });\n      }\n\n      resolve({\n        error: null,\n        data\n      });\n    });\n  });\n};\n\nconst router = Router();\nconst app = ReactDOMServer.renderToString( /*#__PURE__*/React.createElement(_src_App__WEBPACK_IMPORTED_MODULE_0___default.a, null));\nrouter.get(\"/\", async (_req, res) => {\n  const {\n    error,\n    data\n  } = await getHtmlFileContents();\n\n  if (error) {\n    console.error(\"Something went wrong:\", err);\n    return res.status(500).send(\"Oops, better luck next time!\");\n  }\n\n  const ssrApp = data.replace('<div id=\"root\"></div>', `<div id=\"root\">${app}</div>`);\n  return res.status(200).send(ssrApp);\n});\n/* WEBPACK VAR INJECTION */}.call(this, \"/\"))\n\n//# sourceURL=webpack:///./src/routes/ssr.js?");

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! @babel/register */ \"@babel/register\")({\n  presets: [\"@babel/preset-env\", \"@babel/preset-react\"],\n  plugins: [[\"@babel/plugin-syntax-jsx\", \"css-modules-transform\", {\n    camelCase: true,\n    extensions: [\".css\", \".scss\"]\n  }], \"dynamic-import-node\"]\n});\n\nconst initalizeApp = __webpack_require__(/*! ./app */ \"./src/app.js\");\n\nconst config = __webpack_require__(/*! ./config/index */ \"./src/config/index.js\");\n\nconst main = () => {\n  const app = initalizeApp();\n  app.listen(config.PORT, () => {\n    console.log(`Server listening on port http://localhost:${config.PORT}/`);\n  });\n};\n\nmain();\n\n//# sourceURL=webpack:///./src/server.js?");

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

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"fs\");\n\n//# sourceURL=webpack:///external_%22fs%22?");

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

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"path\");\n\n//# sourceURL=webpack:///external_%22path%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ })

/******/ });