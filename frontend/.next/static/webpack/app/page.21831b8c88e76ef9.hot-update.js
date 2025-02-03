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

/***/ "(app-pages-browser)/./src/components/ImageSequenceViewer.tsx":
/*!************************************************!*\
  !*** ./src/components/ImageSequenceViewer.tsx ***!
  \************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst ImageSequenceViewer = (param)=>{\n    let { images, width = 500, height = 500 } = param;\n    _s();\n    const [currentImageIndex, setCurrentImageIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const startXRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const handleMouseDown = (e)=>{\n        if (containerRef.current) {\n            startXRef.current = e.clientX;\n        }\n    };\n    const handleMouseMove = (e)=>{\n        if (startXRef.current !== null && containerRef.current) {\n            const deltaX = e.clientX - startXRef.current;\n            // Calculate image index based on mouse movement with slower sensitivity\n            const pixelsPerImage = 10; // Number of pixels needed to move for one image change\n            const indexDelta = Math.floor(Math.abs(deltaX) / pixelsPerImage);\n            if (indexDelta > 0) {\n                // Calculate new index with proper wrapping\n                let newIndex = currentImageIndex + (deltaX > 0 ? 1 : -1);\n                // Ensure index stays within bounds\n                if (newIndex >= images.length) {\n                    newIndex = 0;\n                } else if (newIndex < 0) {\n                    newIndex = images.length - 1;\n                }\n                setCurrentImageIndex(newIndex);\n                startXRef.current = e.clientX; // Reset the start position\n            }\n        }\n    };\n    const handleMouseUp = ()=>{\n        startXRef.current = null;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: containerRef,\n        onMouseDown: handleMouseDown,\n        onMouseMove: handleMouseMove,\n        onMouseUp: handleMouseUp,\n        onMouseLeave: handleMouseUp,\n        className: \"relative cursor-grab select-none\",\n        style: {\n            width,\n            height\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"http://localhost:3001\".concat(images[currentImageIndex]),\n                alt: \"Sequence image \".concat(currentImageIndex + 1),\n                className: \"absolute top-0 left-0 w-full h-full object-contain\",\n                draggable: false\n            }, void 0, false, {\n                fileName: \"/Users/thakuraditya/Desktop/CG Viz studios/frontend/src/components/ImageSequenceViewer.tsx\",\n                lineNumber: 66,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute bottom-2 right-2 bg-black/50 text-white px-2 py-1 rounded\",\n                children: [\n                    currentImageIndex + 1,\n                    \" / \",\n                    images.length\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/thakuraditya/Desktop/CG Viz studios/frontend/src/components/ImageSequenceViewer.tsx\",\n                lineNumber: 72,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/thakuraditya/Desktop/CG Viz studios/frontend/src/components/ImageSequenceViewer.tsx\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ImageSequenceViewer, \"a2JAyNApp3rkY4lga+7H39VI5X8=\");\n_c = ImageSequenceViewer;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageSequenceViewer);\nvar _c;\n$RefreshReg$(_c, \"ImageSequenceViewer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ltYWdlU2VxdWVuY2VWaWV3ZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUUyRDtBQVEzRCxNQUFNRyxzQkFBMEQ7UUFBQyxFQUMvREMsTUFBTSxFQUNOQyxRQUFRLEdBQUcsRUFDWEMsU0FBUyxHQUFHLEVBQ2I7O0lBQ0MsTUFBTSxDQUFDQyxtQkFBbUJDLHFCQUFxQixHQUFHUCwrQ0FBUUEsQ0FBQztJQUMzRCxNQUFNUSxlQUFlUCw2Q0FBTUEsQ0FBaUI7SUFDNUMsTUFBTVEsWUFBWVIsNkNBQU1BLENBQWdCO0lBRXhDLE1BQU1TLGtCQUFrQixDQUFDQztRQUN2QixJQUFJSCxhQUFhSSxPQUFPLEVBQUU7WUFDeEJILFVBQVVHLE9BQU8sR0FBR0QsRUFBRUUsT0FBTztRQUMvQjtJQUNGO0lBRUEsTUFBTUMsa0JBQWtCLENBQUNIO1FBQ3ZCLElBQUlGLFVBQVVHLE9BQU8sS0FBSyxRQUFRSixhQUFhSSxPQUFPLEVBQUU7WUFDdEQsTUFBTUcsU0FBU0osRUFBRUUsT0FBTyxHQUFHSixVQUFVRyxPQUFPO1lBRTVDLHdFQUF3RTtZQUN4RSxNQUFNSSxpQkFBaUIsSUFBSSx1REFBdUQ7WUFDbEYsTUFBTUMsYUFBYUMsS0FBS0MsS0FBSyxDQUFDRCxLQUFLRSxHQUFHLENBQUNMLFVBQVVDO1lBRWpELElBQUlDLGFBQWEsR0FBRztnQkFDbEIsMkNBQTJDO2dCQUMzQyxJQUFJSSxXQUFXZixvQkFBcUJTLENBQUFBLFNBQVMsSUFBSSxJQUFJLENBQUM7Z0JBRXRELG1DQUFtQztnQkFDbkMsSUFBSU0sWUFBWWxCLE9BQU9tQixNQUFNLEVBQUU7b0JBQzdCRCxXQUFXO2dCQUNiLE9BQU8sSUFBSUEsV0FBVyxHQUFHO29CQUN2QkEsV0FBV2xCLE9BQU9tQixNQUFNLEdBQUc7Z0JBQzdCO2dCQUVBZixxQkFBcUJjO2dCQUNyQlosVUFBVUcsT0FBTyxHQUFHRCxFQUFFRSxPQUFPLEVBQUUsMkJBQTJCO1lBQzVEO1FBQ0Y7SUFDRjtJQUVBLE1BQU1VLGdCQUFnQjtRQUNwQmQsVUFBVUcsT0FBTyxHQUFHO0lBQ3RCO0lBRUEscUJBQ0UsOERBQUNZO1FBQ0NDLEtBQUtqQjtRQUNMa0IsYUFBYWhCO1FBQ2JpQixhQUFhYjtRQUNiYyxXQUFXTDtRQUNYTSxjQUFjTjtRQUVkTyxXQUFVO1FBQ1ZDLE9BQU87WUFBRTNCO1lBQU9DO1FBQU87OzBCQUV2Qiw4REFBQzJCO2dCQUNDQyxLQUFLLHdCQUFrRCxPQUExQjlCLE1BQU0sQ0FBQ0csa0JBQWtCO2dCQUN0RDRCLEtBQUssa0JBQXdDLE9BQXRCNUIsb0JBQW9CO2dCQUMzQ3dCLFdBQVU7Z0JBQ1ZLLFdBQVc7Ozs7OzswQkFFYiw4REFBQ1g7Z0JBQUlNLFdBQVU7O29CQUNaeEIsb0JBQW9CO29CQUFFO29CQUFJSCxPQUFPbUIsTUFBTTs7Ozs7Ozs7Ozs7OztBQUloRDtHQWxFTXBCO0tBQUFBO0FBb0VOLGlFQUFlQSxtQkFBbUJBLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy90aGFrdXJhZGl0eWEvRGVza3RvcC9DRyBWaXogc3R1ZGlvcy9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9JbWFnZVNlcXVlbmNlVmlld2VyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgSW1hZ2VTZXF1ZW5jZVZpZXdlclByb3BzIHtcbiAgaW1hZ2VzOiBzdHJpbmdbXTsgLy8gQXJyYXkgb2YgaW1hZ2UgVVJMc1xuICB3aWR0aD86IG51bWJlcjtcbiAgaGVpZ2h0PzogbnVtYmVyO1xufVxuXG5jb25zdCBJbWFnZVNlcXVlbmNlVmlld2VyOiBSZWFjdC5GQzxJbWFnZVNlcXVlbmNlVmlld2VyUHJvcHM+ID0gKHtcbiAgaW1hZ2VzLFxuICB3aWR0aCA9IDUwMCxcbiAgaGVpZ2h0ID0gNTAwLFxufSkgPT4ge1xuICBjb25zdCBbY3VycmVudEltYWdlSW5kZXgsIHNldEN1cnJlbnRJbWFnZUluZGV4XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBjb250YWluZXJSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBzdGFydFhSZWYgPSB1c2VSZWY8bnVtYmVyIHwgbnVsbD4obnVsbCk7XG5cbiAgY29uc3QgaGFuZGxlTW91c2VEb3duID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICBpZiAoY29udGFpbmVyUmVmLmN1cnJlbnQpIHtcbiAgICAgIHN0YXJ0WFJlZi5jdXJyZW50ID0gZS5jbGllbnRYO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVNb3VzZU1vdmUgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgIGlmIChzdGFydFhSZWYuY3VycmVudCAhPT0gbnVsbCAmJiBjb250YWluZXJSZWYuY3VycmVudCkge1xuICAgICAgY29uc3QgZGVsdGFYID0gZS5jbGllbnRYIC0gc3RhcnRYUmVmLmN1cnJlbnQ7XG5cbiAgICAgIC8vIENhbGN1bGF0ZSBpbWFnZSBpbmRleCBiYXNlZCBvbiBtb3VzZSBtb3ZlbWVudCB3aXRoIHNsb3dlciBzZW5zaXRpdml0eVxuICAgICAgY29uc3QgcGl4ZWxzUGVySW1hZ2UgPSAxMDsgLy8gTnVtYmVyIG9mIHBpeGVscyBuZWVkZWQgdG8gbW92ZSBmb3Igb25lIGltYWdlIGNoYW5nZVxuICAgICAgY29uc3QgaW5kZXhEZWx0YSA9IE1hdGguZmxvb3IoTWF0aC5hYnMoZGVsdGFYKSAvIHBpeGVsc1BlckltYWdlKTtcblxuICAgICAgaWYgKGluZGV4RGVsdGEgPiAwKSB7XG4gICAgICAgIC8vIENhbGN1bGF0ZSBuZXcgaW5kZXggd2l0aCBwcm9wZXIgd3JhcHBpbmdcbiAgICAgICAgbGV0IG5ld0luZGV4ID0gY3VycmVudEltYWdlSW5kZXggKyAoZGVsdGFYID4gMCA/IDEgOiAtMSk7XG5cbiAgICAgICAgLy8gRW5zdXJlIGluZGV4IHN0YXlzIHdpdGhpbiBib3VuZHNcbiAgICAgICAgaWYgKG5ld0luZGV4ID49IGltYWdlcy5sZW5ndGgpIHtcbiAgICAgICAgICBuZXdJbmRleCA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAobmV3SW5kZXggPCAwKSB7XG4gICAgICAgICAgbmV3SW5kZXggPSBpbWFnZXMubGVuZ3RoIC0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIHNldEN1cnJlbnRJbWFnZUluZGV4KG5ld0luZGV4KTtcbiAgICAgICAgc3RhcnRYUmVmLmN1cnJlbnQgPSBlLmNsaWVudFg7IC8vIFJlc2V0IHRoZSBzdGFydCBwb3NpdGlvblxuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVNb3VzZVVwID0gKCkgPT4ge1xuICAgIHN0YXJ0WFJlZi5jdXJyZW50ID0gbnVsbDtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIHJlZj17Y29udGFpbmVyUmVmfVxuICAgICAgb25Nb3VzZURvd249e2hhbmRsZU1vdXNlRG93bn1cbiAgICAgIG9uTW91c2VNb3ZlPXtoYW5kbGVNb3VzZU1vdmV9XG4gICAgICBvbk1vdXNlVXA9e2hhbmRsZU1vdXNlVXB9XG4gICAgICBvbk1vdXNlTGVhdmU9e2hhbmRsZU1vdXNlVXB9XG4gICAgICBcbiAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIGN1cnNvci1ncmFiIHNlbGVjdC1ub25lXCJcbiAgICAgIHN0eWxlPXt7IHdpZHRoLCBoZWlnaHQgfX1cbiAgICA+XG4gICAgICA8aW1nXG4gICAgICAgIHNyYz17YGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMSR7aW1hZ2VzW2N1cnJlbnRJbWFnZUluZGV4XX1gfVxuICAgICAgICBhbHQ9e2BTZXF1ZW5jZSBpbWFnZSAke2N1cnJlbnRJbWFnZUluZGV4ICsgMX1gfVxuICAgICAgICBjbGFzc05hbWU9XCJhYnNvbHV0ZSB0b3AtMCBsZWZ0LTAgdy1mdWxsIGgtZnVsbCBvYmplY3QtY29udGFpblwiXG4gICAgICAgIGRyYWdnYWJsZT17ZmFsc2V9XG4gICAgICAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhYnNvbHV0ZSBib3R0b20tMiByaWdodC0yIGJnLWJsYWNrLzUwIHRleHQtd2hpdGUgcHgtMiBweS0xIHJvdW5kZWRcIj5cbiAgICAgICAge2N1cnJlbnRJbWFnZUluZGV4ICsgMX0gLyB7aW1hZ2VzLmxlbmd0aH1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VTZXF1ZW5jZVZpZXdlcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlUmVmIiwiSW1hZ2VTZXF1ZW5jZVZpZXdlciIsImltYWdlcyIsIndpZHRoIiwiaGVpZ2h0IiwiY3VycmVudEltYWdlSW5kZXgiLCJzZXRDdXJyZW50SW1hZ2VJbmRleCIsImNvbnRhaW5lclJlZiIsInN0YXJ0WFJlZiIsImhhbmRsZU1vdXNlRG93biIsImUiLCJjdXJyZW50IiwiY2xpZW50WCIsImhhbmRsZU1vdXNlTW92ZSIsImRlbHRhWCIsInBpeGVsc1BlckltYWdlIiwiaW5kZXhEZWx0YSIsIk1hdGgiLCJmbG9vciIsImFicyIsIm5ld0luZGV4IiwibGVuZ3RoIiwiaGFuZGxlTW91c2VVcCIsImRpdiIsInJlZiIsIm9uTW91c2VEb3duIiwib25Nb3VzZU1vdmUiLCJvbk1vdXNlVXAiLCJvbk1vdXNlTGVhdmUiLCJjbGFzc05hbWUiLCJzdHlsZSIsImltZyIsInNyYyIsImFsdCIsImRyYWdnYWJsZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ImageSequenceViewer.tsx\n"));

/***/ })

});