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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst ImageSequenceViewer = (param)=>{\n    let { images, width = 500, height = 500 } = param;\n    _s();\n    const [currentImageIndex, setCurrentImageIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const startXRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const handleMouseDown = (e)=>{\n        if (containerRef.current) {\n            startXRef.current = e.clientX;\n        }\n    };\n    const handleMouseMove = (e)=>{\n        if (startXRef.current !== null && containerRef.current) {\n            const containerWidth = containerRef.current.offsetWidth;\n            const deltaX = e.clientX - startXRef.current;\n            // Calculate image index based on mouse movement with adjusted sensitivity\n            const sensitivity = 9900; // Fixed sensitivity value for smoother control\n            const indexDelta = deltaX > 0 ? Math.ceil(deltaX / sensitivity) : Math.floor(deltaX / sensitivity);\n            console.log;\n            // Calculate new index with proper wrapping\n            let newIndex = currentImageIndex + (deltaX > 0 ? 1 : -1) * Math.abs(indexDelta);\n            // Ensure index stays within bounds\n            if (newIndex >= images.length) {\n                newIndex = newIndex % images.length;\n            } else if (newIndex < 0) {\n                newIndex = images.length - 1 + (newIndex + 1) % images.length;\n            }\n            setCurrentImageIndex(newIndex);\n            startXRef.current = e.clientX;\n        }\n    };\n    const handleMouseUp = ()=>{\n        startXRef.current = null;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: containerRef,\n        onMouseDown: handleMouseDown,\n        onMouseMove: handleMouseMove,\n        onMouseUp: handleMouseUp,\n        onMouseLeave: handleMouseUp,\n        className: \"relative cursor-ew-resize select-none\",\n        style: {\n            width,\n            height\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"http://localhost:3001\".concat(images[currentImageIndex]),\n                alt: \"Sequence image \".concat(currentImageIndex + 1),\n                className: \"absolute top-0 left-0 w-full h-full object-contain\",\n                draggable: false\n            }, void 0, false, {\n                fileName: \"/Users/thakuraditya/Desktop/CG Viz studios/frontend/src/components/ImageSequenceViewer.tsx\",\n                lineNumber: 68,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute bottom-2 right-2 bg-black/50 text-white px-2 py-1 rounded\",\n                children: [\n                    currentImageIndex + 1,\n                    \" / \",\n                    images.length\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/thakuraditya/Desktop/CG Viz studios/frontend/src/components/ImageSequenceViewer.tsx\",\n                lineNumber: 74,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/thakuraditya/Desktop/CG Viz studios/frontend/src/components/ImageSequenceViewer.tsx\",\n        lineNumber: 59,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ImageSequenceViewer, \"a2JAyNApp3rkY4lga+7H39VI5X8=\");\n_c = ImageSequenceViewer;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageSequenceViewer);\nvar _c;\n$RefreshReg$(_c, \"ImageSequenceViewer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ltYWdlU2VxdWVuY2VWaWV3ZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUUyRDtBQVEzRCxNQUFNRyxzQkFBMEQ7UUFBQyxFQUMvREMsTUFBTSxFQUNOQyxRQUFRLEdBQUcsRUFDWEMsU0FBUyxHQUFHLEVBQ2I7O0lBQ0MsTUFBTSxDQUFDQyxtQkFBbUJDLHFCQUFxQixHQUFHUCwrQ0FBUUEsQ0FBQztJQUMzRCxNQUFNUSxlQUFlUCw2Q0FBTUEsQ0FBaUI7SUFDNUMsTUFBTVEsWUFBWVIsNkNBQU1BLENBQWdCO0lBRXhDLE1BQU1TLGtCQUFrQixDQUFDQztRQUN2QixJQUFJSCxhQUFhSSxPQUFPLEVBQUU7WUFDeEJILFVBQVVHLE9BQU8sR0FBR0QsRUFBRUUsT0FBTztRQUMvQjtJQUNGO0lBRUEsTUFBTUMsa0JBQWtCLENBQUNIO1FBQ3ZCLElBQUlGLFVBQVVHLE9BQU8sS0FBSyxRQUFRSixhQUFhSSxPQUFPLEVBQUU7WUFDdEQsTUFBTUcsaUJBQWlCUCxhQUFhSSxPQUFPLENBQUNJLFdBQVc7WUFDdkQsTUFBTUMsU0FBU04sRUFBRUUsT0FBTyxHQUFHSixVQUFVRyxPQUFPO1lBRTVDLDBFQUEwRTtZQUMxRSxNQUFNTSxjQUFjLE1BQU0sK0NBQStDO1lBQ3pFLE1BQU1DLGFBQ0pGLFNBQVMsSUFDTEcsS0FBS0MsSUFBSSxDQUFDSixTQUFTQyxlQUNuQkUsS0FBS0UsS0FBSyxDQUFDTCxTQUFTQztZQUNoQ0ssUUFBUUMsR0FBRztZQUNMLDJDQUEyQztZQUMzQyxJQUFJQyxXQUNGbkIsb0JBQW9CLENBQUNXLFNBQVMsSUFBSSxJQUFJLENBQUMsS0FBS0csS0FBS00sR0FBRyxDQUFDUDtZQUV2RCxtQ0FBbUM7WUFDbkMsSUFBSU0sWUFBWXRCLE9BQU93QixNQUFNLEVBQUU7Z0JBQzdCRixXQUFXQSxXQUFXdEIsT0FBT3dCLE1BQU07WUFDckMsT0FBTyxJQUFJRixXQUFXLEdBQUc7Z0JBQ3ZCQSxXQUFXdEIsT0FBT3dCLE1BQU0sR0FBRyxJQUFLLENBQUNGLFdBQVcsS0FBS3RCLE9BQU93QixNQUFNO1lBQ2hFO1lBRUFwQixxQkFBcUJrQjtZQUNyQmhCLFVBQVVHLE9BQU8sR0FBR0QsRUFBRUUsT0FBTztRQUMvQjtJQUNGO0lBRUEsTUFBTWUsZ0JBQWdCO1FBQ3BCbkIsVUFBVUcsT0FBTyxHQUFHO0lBQ3RCO0lBRUEscUJBQ0UsOERBQUNpQjtRQUNDQyxLQUFLdEI7UUFDTHVCLGFBQWFyQjtRQUNic0IsYUFBYWxCO1FBQ2JtQixXQUFXTDtRQUNYTSxjQUFjTjtRQUNkTyxXQUFVO1FBQ1ZDLE9BQU87WUFBRWhDO1lBQU9DO1FBQU87OzBCQUV2Qiw4REFBQ2dDO2dCQUNDQyxLQUFLLHdCQUFrRCxPQUExQm5DLE1BQU0sQ0FBQ0csa0JBQWtCO2dCQUN0RGlDLEtBQUssa0JBQXdDLE9BQXRCakMsb0JBQW9CO2dCQUMzQzZCLFdBQVU7Z0JBQ1ZLLFdBQVc7Ozs7OzswQkFFYiw4REFBQ1g7Z0JBQUlNLFdBQVU7O29CQUNaN0Isb0JBQW9CO29CQUFFO29CQUFJSCxPQUFPd0IsTUFBTTs7Ozs7Ozs7Ozs7OztBQUloRDtHQXBFTXpCO0tBQUFBO0FBc0VOLGlFQUFlQSxtQkFBbUJBLEVBQUMiLCJzb3VyY2VzIjpbIi9Vc2Vycy90aGFrdXJhZGl0eWEvRGVza3RvcC9DRyBWaXogc3R1ZGlvcy9mcm9udGVuZC9zcmMvY29tcG9uZW50cy9JbWFnZVNlcXVlbmNlVmlld2VyLnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuXG5pbnRlcmZhY2UgSW1hZ2VTZXF1ZW5jZVZpZXdlclByb3BzIHtcbiAgaW1hZ2VzOiBzdHJpbmdbXTsgLy8gQXJyYXkgb2YgaW1hZ2UgVVJMc1xuICB3aWR0aD86IG51bWJlcjtcbiAgaGVpZ2h0PzogbnVtYmVyO1xufVxuXG5jb25zdCBJbWFnZVNlcXVlbmNlVmlld2VyOiBSZWFjdC5GQzxJbWFnZVNlcXVlbmNlVmlld2VyUHJvcHM+ID0gKHtcbiAgaW1hZ2VzLFxuICB3aWR0aCA9IDUwMCxcbiAgaGVpZ2h0ID0gNTAwLFxufSkgPT4ge1xuICBjb25zdCBbY3VycmVudEltYWdlSW5kZXgsIHNldEN1cnJlbnRJbWFnZUluZGV4XSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBjb250YWluZXJSZWYgPSB1c2VSZWY8SFRNTERpdkVsZW1lbnQ+KG51bGwpO1xuICBjb25zdCBzdGFydFhSZWYgPSB1c2VSZWY8bnVtYmVyIHwgbnVsbD4obnVsbCk7XG5cbiAgY29uc3QgaGFuZGxlTW91c2VEb3duID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICBpZiAoY29udGFpbmVyUmVmLmN1cnJlbnQpIHtcbiAgICAgIHN0YXJ0WFJlZi5jdXJyZW50ID0gZS5jbGllbnRYO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVNb3VzZU1vdmUgPSAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgIGlmIChzdGFydFhSZWYuY3VycmVudCAhPT0gbnVsbCAmJiBjb250YWluZXJSZWYuY3VycmVudCkge1xuICAgICAgY29uc3QgY29udGFpbmVyV2lkdGggPSBjb250YWluZXJSZWYuY3VycmVudC5vZmZzZXRXaWR0aDtcbiAgICAgIGNvbnN0IGRlbHRhWCA9IGUuY2xpZW50WCAtIHN0YXJ0WFJlZi5jdXJyZW50O1xuXG4gICAgICAvLyBDYWxjdWxhdGUgaW1hZ2UgaW5kZXggYmFzZWQgb24gbW91c2UgbW92ZW1lbnQgd2l0aCBhZGp1c3RlZCBzZW5zaXRpdml0eVxuICAgICAgY29uc3Qgc2Vuc2l0aXZpdHkgPSA5OTAwOyAvLyBGaXhlZCBzZW5zaXRpdml0eSB2YWx1ZSBmb3Igc21vb3RoZXIgY29udHJvbFxuICAgICAgY29uc3QgaW5kZXhEZWx0YSA9XG4gICAgICAgIGRlbHRhWCA+IDBcbiAgICAgICAgICA/IE1hdGguY2VpbChkZWx0YVggLyBzZW5zaXRpdml0eSlcbiAgICAgICAgICA6IE1hdGguZmxvb3IoZGVsdGFYIC8gc2Vuc2l0aXZpdHkpO1xuY29uc29sZS5sb2dcbiAgICAgIC8vIENhbGN1bGF0ZSBuZXcgaW5kZXggd2l0aCBwcm9wZXIgd3JhcHBpbmdcbiAgICAgIGxldCBuZXdJbmRleCA9XG4gICAgICAgIGN1cnJlbnRJbWFnZUluZGV4ICsgKGRlbHRhWCA+IDAgPyAxIDogLTEpICogTWF0aC5hYnMoaW5kZXhEZWx0YSk7XG5cbiAgICAgIC8vIEVuc3VyZSBpbmRleCBzdGF5cyB3aXRoaW4gYm91bmRzXG4gICAgICBpZiAobmV3SW5kZXggPj0gaW1hZ2VzLmxlbmd0aCkge1xuICAgICAgICBuZXdJbmRleCA9IG5ld0luZGV4ICUgaW1hZ2VzLmxlbmd0aDtcbiAgICAgIH0gZWxzZSBpZiAobmV3SW5kZXggPCAwKSB7XG4gICAgICAgIG5ld0luZGV4ID0gaW1hZ2VzLmxlbmd0aCAtIDEgKyAoKG5ld0luZGV4ICsgMSkgJSBpbWFnZXMubGVuZ3RoKTtcbiAgICAgIH1cblxuICAgICAgc2V0Q3VycmVudEltYWdlSW5kZXgobmV3SW5kZXgpO1xuICAgICAgc3RhcnRYUmVmLmN1cnJlbnQgPSBlLmNsaWVudFg7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU1vdXNlVXAgPSAoKSA9PiB7XG4gICAgc3RhcnRYUmVmLmN1cnJlbnQgPSBudWxsO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgcmVmPXtjb250YWluZXJSZWZ9XG4gICAgICBvbk1vdXNlRG93bj17aGFuZGxlTW91c2VEb3dufVxuICAgICAgb25Nb3VzZU1vdmU9e2hhbmRsZU1vdXNlTW92ZX1cbiAgICAgIG9uTW91c2VVcD17aGFuZGxlTW91c2VVcH1cbiAgICAgIG9uTW91c2VMZWF2ZT17aGFuZGxlTW91c2VVcH1cbiAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIGN1cnNvci1ldy1yZXNpemUgc2VsZWN0LW5vbmVcIlxuICAgICAgc3R5bGU9e3sgd2lkdGgsIGhlaWdodCB9fVxuICAgID5cbiAgICAgIDxpbWdcbiAgICAgICAgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDozMDAxJHtpbWFnZXNbY3VycmVudEltYWdlSW5kZXhdfWB9XG4gICAgICAgIGFsdD17YFNlcXVlbmNlIGltYWdlICR7Y3VycmVudEltYWdlSW5kZXggKyAxfWB9XG4gICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGxlZnQtMCB3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb250YWluXCJcbiAgICAgICAgZHJhZ2dhYmxlPXtmYWxzZX1cbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0yIHJpZ2h0LTIgYmctYmxhY2svNTAgdGV4dC13aGl0ZSBweC0yIHB5LTEgcm91bmRlZFwiPlxuICAgICAgICB7Y3VycmVudEltYWdlSW5kZXggKyAxfSAvIHtpbWFnZXMubGVuZ3RofVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbWFnZVNlcXVlbmNlVmlld2VyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJJbWFnZVNlcXVlbmNlVmlld2VyIiwiaW1hZ2VzIiwid2lkdGgiLCJoZWlnaHQiLCJjdXJyZW50SW1hZ2VJbmRleCIsInNldEN1cnJlbnRJbWFnZUluZGV4IiwiY29udGFpbmVyUmVmIiwic3RhcnRYUmVmIiwiaGFuZGxlTW91c2VEb3duIiwiZSIsImN1cnJlbnQiLCJjbGllbnRYIiwiaGFuZGxlTW91c2VNb3ZlIiwiY29udGFpbmVyV2lkdGgiLCJvZmZzZXRXaWR0aCIsImRlbHRhWCIsInNlbnNpdGl2aXR5IiwiaW5kZXhEZWx0YSIsIk1hdGgiLCJjZWlsIiwiZmxvb3IiLCJjb25zb2xlIiwibG9nIiwibmV3SW5kZXgiLCJhYnMiLCJsZW5ndGgiLCJoYW5kbGVNb3VzZVVwIiwiZGl2IiwicmVmIiwib25Nb3VzZURvd24iLCJvbk1vdXNlTW92ZSIsIm9uTW91c2VVcCIsIm9uTW91c2VMZWF2ZSIsImNsYXNzTmFtZSIsInN0eWxlIiwiaW1nIiwic3JjIiwiYWx0IiwiZHJhZ2dhYmxlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ImageSequenceViewer.tsx\n"));

/***/ })

});