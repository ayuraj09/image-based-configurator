"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/services/api.ts":
/*!*****************************!*\
  !*** ./src/services/api.ts ***!
  \*****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   api: () => (/* binding */ api)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n\nconst API_BASE_URL = \"http://localhost:3001/api\";\nconst api = {\n    // Project APIs\n    async createProject (data) {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"\".concat(API_BASE_URL, \"/projects\"), data);\n        return response.data;\n    },\n    async getProjects () {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"\".concat(API_BASE_URL, \"/projects\"));\n        return response.data;\n    },\n    async getProject (projectId) {\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].get(\"\".concat(API_BASE_URL, \"/projects/\").concat(projectId));\n        return response.data;\n    },\n    // Image APIs\n    async uploadImages (projectId, images) {\n        const formData = new FormData();\n        images.forEach((image)=>{\n            formData.append(\"images\", image);\n        });\n        const response = await axios__WEBPACK_IMPORTED_MODULE_0__[\"default\"].post(\"\".concat(API_BASE_URL, \"/projects/\").concat(projectId, \"/images\"), formData, {\n            headers: {\n                \"Content-Type\": \"multipart/form-data\"\n            }\n        });\n        return response.data;\n    },\n    deleteProject: async (projectId)=>{\n        const response = await fetch(\"\".concat(API_URL, \"/projects/\").concat(projectId), {\n            method: \"DELETE\"\n        });\n        if (!response.ok) {\n            throw new Error(\"Failed to delete project\");\n        }\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9zZXJ2aWNlcy9hcGkudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBMEI7QUFFMUIsTUFBTUMsZUFBZTtBQW9CZCxNQUFNQyxNQUFNO0lBQ2pCLGVBQWU7SUFDZixNQUFNQyxlQUFjQyxJQUE0QztRQUM5RCxNQUFNQyxXQUFXLE1BQU1MLDZDQUFLQSxDQUFDTSxJQUFJLENBQy9CLEdBQWdCLE9BQWJMLGNBQWEsY0FDaEJHO1FBRUYsT0FBT0MsU0FBU0QsSUFBSTtJQUN0QjtJQUVBLE1BQU1HO1FBQ0osTUFBTUYsV0FBVyxNQUFNTCw2Q0FBS0EsQ0FBQ1EsR0FBRyxDQUFZLEdBQWdCLE9BQWJQLGNBQWE7UUFDNUQsT0FBT0ksU0FBU0QsSUFBSTtJQUN0QjtJQUVBLE1BQU1LLFlBQVdDLFNBQWlCO1FBQ2hDLE1BQU1MLFdBQVcsTUFBTUwsNkNBQUtBLENBQUNRLEdBQUcsQ0FDOUIsR0FBNEJFLE9BQXpCVCxjQUFhLGNBQXNCLE9BQVZTO1FBRTlCLE9BQU9MLFNBQVNELElBQUk7SUFDdEI7SUFFQSxhQUFhO0lBQ2IsTUFBTU8sY0FBYUQsU0FBaUIsRUFBRUUsTUFBYztRQUNsRCxNQUFNQyxXQUFXLElBQUlDO1FBQ3JCRixPQUFPRyxPQUFPLENBQUMsQ0FBQ0M7WUFDZEgsU0FBU0ksTUFBTSxDQUFDLFVBQVVEO1FBQzVCO1FBRUEsTUFBTVgsV0FBVyxNQUFNTCw2Q0FBS0EsQ0FBQ00sSUFBSSxDQUMvQixHQUE0QkksT0FBekJULGNBQWEsY0FBc0IsT0FBVlMsV0FBVSxZQUN0Q0csVUFDQTtZQUNFSyxTQUFTO2dCQUNQLGdCQUFnQjtZQUNsQjtRQUNGO1FBRUYsT0FBT2IsU0FBU0QsSUFBSTtJQUN0QjtJQUNBZSxlQUFlLE9BQU9UO1FBQ3BCLE1BQU1MLFdBQVcsTUFBTWUsTUFBTSxHQUF1QlYsT0FBcEJXLFNBQVEsY0FBc0IsT0FBVlgsWUFBYTtZQUMvRFksUUFBUTtRQUNWO1FBQ0EsSUFBSSxDQUFDakIsU0FBU2tCLEVBQUUsRUFBRTtZQUNoQixNQUFNLElBQUlDLE1BQU07UUFDbEI7SUFDRjtBQUNGLEVBQUUiLCJzb3VyY2VzIjpbIi9Vc2Vycy90aGFrdXJhZGl0eWEvRGVza3RvcC9DRyBWaXogc3R1ZGlvcy9mcm9udGVuZC9zcmMvc2VydmljZXMvYXBpLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgQVBJX0JBU0VfVVJMID0gXCJodHRwOi8vbG9jYWxob3N0OjMwMDEvYXBpXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvamVjdCB7XG4gIGlkOiBzdHJpbmc7XG4gIG5hbWU6IHN0cmluZztcbiAgZGVzY3JpcHRpb24/OiBzdHJpbmc7XG4gIGltYWdlczogSW1hZ2VbXTtcbiAgY3JlYXRlZEF0OiBzdHJpbmc7XG4gIHVwZGF0ZWRBdDogc3RyaW5nO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIEltYWdlIHtcbiAgaWQ6IHN0cmluZztcbiAgdXJsOiBzdHJpbmc7XG4gIHNlcXVlbmNlOiBudW1iZXI7XG4gIHByb2plY3RJZDogc3RyaW5nO1xuICBjcmVhdGVkQXQ6IHN0cmluZztcbiAgdXBkYXRlZEF0OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBhcGkgPSB7XG4gIC8vIFByb2plY3QgQVBJc1xuICBhc3luYyBjcmVhdGVQcm9qZWN0KGRhdGE6IHsgbmFtZTogc3RyaW5nOyBkZXNjcmlwdGlvbj86IHN0cmluZyB9KSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0PFByb2plY3Q+KFxuICAgICAgYCR7QVBJX0JBU0VfVVJMfS9wcm9qZWN0c2AsXG4gICAgICBkYXRhXG4gICAgKTtcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgfSxcblxuICBhc3luYyBnZXRQcm9qZWN0cygpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLmdldDxQcm9qZWN0W10+KGAke0FQSV9CQVNFX1VSTH0vcHJvamVjdHNgKTtcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgfSxcblxuICBhc3luYyBnZXRQcm9qZWN0KHByb2plY3RJZDogc3RyaW5nKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5nZXQ8UHJvamVjdD4oXG4gICAgICBgJHtBUElfQkFTRV9VUkx9L3Byb2plY3RzLyR7cHJvamVjdElkfWBcbiAgICApO1xuICAgIHJldHVybiByZXNwb25zZS5kYXRhO1xuICB9LFxuXG4gIC8vIEltYWdlIEFQSXNcbiAgYXN5bmMgdXBsb2FkSW1hZ2VzKHByb2plY3RJZDogc3RyaW5nLCBpbWFnZXM6IEZpbGVbXSkge1xuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG4gICAgaW1hZ2VzLmZvckVhY2goKGltYWdlKSA9PiB7XG4gICAgICBmb3JtRGF0YS5hcHBlbmQoXCJpbWFnZXNcIiwgaW1hZ2UpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBheGlvcy5wb3N0PEltYWdlW10+KFxuICAgICAgYCR7QVBJX0JBU0VfVVJMfS9wcm9qZWN0cy8ke3Byb2plY3RJZH0vaW1hZ2VzYCxcbiAgICAgIGZvcm1EYXRhLFxuICAgICAge1xuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJtdWx0aXBhcnQvZm9ybS1kYXRhXCIsXG4gICAgICAgIH0sXG4gICAgICB9XG4gICAgKTtcbiAgICByZXR1cm4gcmVzcG9uc2UuZGF0YTtcbiAgfSxcbiAgZGVsZXRlUHJvamVjdDogYXN5bmMgKHByb2plY3RJZDogc3RyaW5nKSA9PiB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChgJHtBUElfVVJMfS9wcm9qZWN0cy8ke3Byb2plY3RJZH1gLCB7XG4gICAgICBtZXRob2Q6IFwiREVMRVRFXCIsXG4gICAgfSk7XG4gICAgaWYgKCFyZXNwb25zZS5vaykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiRmFpbGVkIHRvIGRlbGV0ZSBwcm9qZWN0XCIpO1xuICAgIH1cbiAgfSxcbn07XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJBUElfQkFTRV9VUkwiLCJhcGkiLCJjcmVhdGVQcm9qZWN0IiwiZGF0YSIsInJlc3BvbnNlIiwicG9zdCIsImdldFByb2plY3RzIiwiZ2V0IiwiZ2V0UHJvamVjdCIsInByb2plY3RJZCIsInVwbG9hZEltYWdlcyIsImltYWdlcyIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJmb3JFYWNoIiwiaW1hZ2UiLCJhcHBlbmQiLCJoZWFkZXJzIiwiZGVsZXRlUHJvamVjdCIsImZldGNoIiwiQVBJX1VSTCIsIm1ldGhvZCIsIm9rIiwiRXJyb3IiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/services/api.ts\n"));

/***/ })

});