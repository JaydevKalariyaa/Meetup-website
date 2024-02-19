"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/new-meetup";
exports.ids = ["pages/api/new-meetup"];
exports.modules = {

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "(api)/./pages/api/database.js":
/*!*******************************!*\
  !*** ./pages/api/database.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"client\": () => (/* binding */ client)\n/* harmony export */ });\nconst { MongoClient  } = __webpack_require__(/*! mongodb */ \"mongodb\");\nconst uri = \"mongodb+srv://jaydevk:jk@meetup-project.ydormky.mongodb.net/?retryWrites=true&w=majority\";\nconst client = new MongoClient(uri);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZGF0YWJhc2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLEtBQUssQ0FBQyxDQUFDLENBQUNBLFdBQVcsRUFBQyxDQUFDLEdBQUdDLG1CQUFPLENBQUMsd0JBQVM7QUFDekMsS0FBSyxDQUFDQyxHQUFHLEdBQ1AsQ0FBMEY7QUFDckYsS0FBSyxDQUFDQyxNQUFNLEdBQUcsR0FBRyxDQUFDSCxXQUFXLENBQUNFLEdBQUciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0anMtY291cnNlLy4vcGFnZXMvYXBpL2RhdGFiYXNlLmpzPzc0NmEiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBNb25nb0NsaWVudCB9ID0gcmVxdWlyZShcIm1vbmdvZGJcIik7XHJcbmNvbnN0IHVyaSA9XHJcbiAgXCJtb25nb2RiK3NydjovL2pheWRldms6amtAbWVldHVwLXByb2plY3QueWRvcm1reS5tb25nb2RiLm5ldC8/cmV0cnlXcml0ZXM9dHJ1ZSZ3PW1ham9yaXR5XCI7XHJcbmV4cG9ydCBjb25zdCBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpKTtcclxuIl0sIm5hbWVzIjpbIk1vbmdvQ2xpZW50IiwicmVxdWlyZSIsInVyaSIsImNsaWVudCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/database.js\n");

/***/ }),

/***/ "(api)/./pages/api/new-meetup.js":
/*!*********************************!*\
  !*** ./pages/api/new-meetup.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _database__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./database */ \"(api)/./pages/api/database.js\");\n\nasync function handler(req, res) {\n    if (req.method === \"POST\") {\n        let data = req.body;\n        try {\n            await _database__WEBPACK_IMPORTED_MODULE_0__.client.connect();\n            const database = _database__WEBPACK_IMPORTED_MODULE_0__.client.db(\"meetup\");\n            const meetup = database.collection(\"meetup\");\n            const result = await meetup.insertOne(data);\n            res.status(201).json({\n                message: \"meetup created succesfully\"\n            });\n        } finally{\n            await _database__WEBPACK_IMPORTED_MODULE_0__.client.close();\n        }\n    }\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (handler);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFtQztlQUVwQkMsT0FBTyxDQUFDQyxHQUFHLEVBQUVDLEdBQUcsRUFBRSxDQUFDO0lBQ2hDLEVBQUUsRUFBRUQsR0FBRyxDQUFDRSxNQUFNLEtBQUssQ0FBTSxPQUFFLENBQUM7UUFDMUIsR0FBRyxDQUFDQyxJQUFJLEdBQUdILEdBQUcsQ0FBQ0ksSUFBSTtRQUVuQixHQUFHLENBQUMsQ0FBQztZQUNILEtBQUssQ0FBQ04scURBQWMsRUFBRSxDQUFDO1lBQ3ZCLEtBQUssQ0FBQ1EsUUFBUSxHQUFHUixnREFBUyxDQUFDLENBQVE7WUFDbkMsS0FBSyxDQUFDVSxNQUFNLEdBQUdGLFFBQVEsQ0FBQ0csVUFBVSxDQUFDLENBQVE7WUFFM0MsS0FBSyxDQUFDQyxNQUFNLEdBQUcsS0FBSyxDQUFDRixNQUFNLENBQUNHLFNBQVMsQ0FBQ1IsSUFBSTtZQUMxQ0YsR0FBRyxDQUFDVyxNQUFNLENBQUMsR0FBRyxFQUFFQyxJQUFJLENBQUMsQ0FBQztnQkFBQ0MsT0FBTyxFQUFFLENBQTRCO1lBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbEUsQ0FBQyxRQUFTLENBQUM7WUFDVCxLQUFLLENBQUNoQixtREFBWSxFQUFFLENBQUM7UUFDdkIsQ0FBQztJQUNILENBQUM7QUFDSCxDQUFDO0FBQ0QsaUVBQWVDLE9BQU8sRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leHRqcy1jb3Vyc2UvLi9wYWdlcy9hcGkvbmV3LW1lZXR1cC5qcz83Mzk0Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNsaWVudCB9IGZyb20gXCIuL2RhdGFiYXNlXCI7XHJcblxyXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcSwgcmVzKSB7XHJcbiAgaWYgKHJlcS5tZXRob2QgPT09IFwiUE9TVFwiKSB7XHJcbiAgICBsZXQgZGF0YSA9IHJlcS5ib2R5O1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGF3YWl0IGNsaWVudC5jb25uZWN0KCk7XHJcbiAgICAgIGNvbnN0IGRhdGFiYXNlID0gY2xpZW50LmRiKFwibWVldHVwXCIpO1xyXG4gICAgICBjb25zdCBtZWV0dXAgPSBkYXRhYmFzZS5jb2xsZWN0aW9uKFwibWVldHVwXCIpO1xyXG5cclxuICAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgbWVldHVwLmluc2VydE9uZShkYXRhKTtcclxuICAgICAgcmVzLnN0YXR1cygyMDEpLmpzb24oeyBtZXNzYWdlOiBcIm1lZXR1cCBjcmVhdGVkIHN1Y2Nlc2Z1bGx5XCIgfSk7XHJcbiAgICB9IGZpbmFsbHkge1xyXG4gICAgICBhd2FpdCBjbGllbnQuY2xvc2UoKTtcclxuICAgIH1cclxuICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgaGFuZGxlcjtcclxuIl0sIm5hbWVzIjpbImNsaWVudCIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJtZXRob2QiLCJkYXRhIiwiYm9keSIsImNvbm5lY3QiLCJkYXRhYmFzZSIsImRiIiwibWVldHVwIiwiY29sbGVjdGlvbiIsInJlc3VsdCIsImluc2VydE9uZSIsInN0YXR1cyIsImpzb24iLCJtZXNzYWdlIiwiY2xvc2UiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/new-meetup.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/new-meetup.js"));
module.exports = __webpack_exports__;

})();