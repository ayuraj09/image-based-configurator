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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst ImageSequenceViewer = (param)=>{\n    let { images, width = 500, height = 500 } = param;\n    _s();\n    const [currentImageIndex, setCurrentImageIndex] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const startXRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const handleMouseDown = (e)=>{\n        if (containerRef.current) {\n            startXRef.current = e.clientX;\n        }\n    };\n    const handleMouseMove = (e)=>{\n        if (startXRef.current !== null && containerRef.current) {\n            const containerWidth = containerRef.current.offsetWidth;\n            const deltaX = e.clientX - startXRef.current;\n            // Calculate image index based on mouse movement with adjusted sensitivity\n            const sensitivity = 5; // Fixed sensitivity value for smoother control\n            const indexDelta = Math.floor(deltaX / sensitivity);\n            // Calculate new index with proper wrapping\n            let newIndex = currentImageIndex + (deltaX > 0 ? 1 : -1) * Math.abs(indexDelta);\n            // Ensure index stays within bounds\n            if (newIndex >= images.length) {\n                newIndex = newIndex % images.length;\n            } else if (newIndex < 0) {\n                newIndex = images.length - 1 + (newIndex + 1) % images.length;\n            }\n            setCurrentImageIndex(boundedIndex);\n            startXRef.current = e.clientX;\n        }\n    };\n    const handleMouseUp = ()=>{\n        startXRef.current = null;\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: containerRef,\n        onMouseDown: handleMouseDown,\n        onMouseMove: handleMouseMove,\n        onMouseUp: handleMouseUp,\n        onMouseLeave: handleMouseUp,\n        className: \"relative cursor-ew-resize select-none\",\n        style: {\n            width,\n            height\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                src: \"http://localhost:3001\".concat(images[currentImageIndex]),\n                alt: \"Sequence image \".concat(currentImageIndex + 1),\n                className: \"absolute top-0 left-0 w-full h-full object-contain\",\n                draggable: false\n            }, void 0, false, {\n                fileName: \"/Users/thakuraditya/Desktop/CG Viz studios/frontend/src/components/ImageSequenceViewer.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute bottom-2 right-2 bg-black/50 text-white px-2 py-1 rounded\",\n                children: [\n                    currentImageIndex + 1,\n                    \" / \",\n                    images.length\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/thakuraditya/Desktop/CG Viz studios/frontend/src/components/ImageSequenceViewer.tsx\",\n                lineNumber: 71,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/thakuraditya/Desktop/CG Viz studios/frontend/src/components/ImageSequenceViewer.tsx\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ImageSequenceViewer, \"a2JAyNApp3rkY4lga+7H39VI5X8=\");\n_c = ImageSequenceViewer;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ImageSequenceViewer);\nvar _c;\n$RefreshReg$(_c, \"ImageSequenceViewer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0ltYWdlU2VxdWVuY2VWaWV3ZXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUUyRDtBQVEzRCxNQUFNRyxzQkFBMEQ7UUFBQyxFQUMvREMsTUFBTSxFQUNOQyxRQUFRLEdBQUcsRUFDWEMsU0FBUyxHQUFHLEVBQ2I7O0lBQ0MsTUFBTSxDQUFDQyxtQkFBbUJDLHFCQUFxQixHQUFHUCwrQ0FBUUEsQ0FBQztJQUMzRCxNQUFNUSxlQUFlUCw2Q0FBTUEsQ0FBaUI7SUFDNUMsTUFBTVEsWUFBWVIsNkNBQU1BLENBQWdCO0lBRXhDLE1BQU1TLGtCQUFrQixDQUFDQztRQUN2QixJQUFJSCxhQUFhSSxPQUFPLEVBQUU7WUFDeEJILFVBQVVHLE9BQU8sR0FBR0QsRUFBRUUsT0FBTztRQUMvQjtJQUNGO0lBRUEsTUFBTUMsa0JBQWtCLENBQUNIO1FBQ3ZCLElBQUlGLFVBQVVHLE9BQU8sS0FBSyxRQUFRSixhQUFhSSxPQUFPLEVBQUU7WUFDdEQsTUFBTUcsaUJBQWlCUCxhQUFhSSxPQUFPLENBQUNJLFdBQVc7WUFDdkQsTUFBTUMsU0FBU04sRUFBRUUsT0FBTyxHQUFHSixVQUFVRyxPQUFPO1lBRTVDLDBFQUEwRTtZQUMxRSxNQUFNTSxjQUFjLEdBQUcsK0NBQStDO1lBQ3RFLE1BQU1DLGFBQWFDLEtBQUtDLEtBQUssQ0FBQ0osU0FBU0M7WUFFdkMsMkNBQTJDO1lBQzNDLElBQUlJLFdBQ0ZoQixvQkFBb0IsQ0FBQ1csU0FBUyxJQUFJLElBQUksQ0FBQyxLQUFLRyxLQUFLRyxHQUFHLENBQUNKO1lBRXZELG1DQUFtQztZQUNuQyxJQUFJRyxZQUFZbkIsT0FBT3FCLE1BQU0sRUFBRTtnQkFDN0JGLFdBQVdBLFdBQVduQixPQUFPcUIsTUFBTTtZQUNyQyxPQUFPLElBQUlGLFdBQVcsR0FBRztnQkFDdkJBLFdBQVduQixPQUFPcUIsTUFBTSxHQUFHLElBQUssQ0FBQ0YsV0FBVyxLQUFLbkIsT0FBT3FCLE1BQU07WUFDaEU7WUFFQWpCLHFCQUFxQmtCO1lBQ3JCaEIsVUFBVUcsT0FBTyxHQUFHRCxFQUFFRSxPQUFPO1FBQy9CO0lBQ0Y7SUFFQSxNQUFNYSxnQkFBZ0I7UUFDcEJqQixVQUFVRyxPQUFPLEdBQUc7SUFDdEI7SUFFQSxxQkFDRSw4REFBQ2U7UUFDQ0MsS0FBS3BCO1FBQ0xxQixhQUFhbkI7UUFDYm9CLGFBQWFoQjtRQUNiaUIsV0FBV0w7UUFDWE0sY0FBY047UUFDZE8sV0FBVTtRQUNWQyxPQUFPO1lBQUU5QjtZQUFPQztRQUFPOzswQkFFdkIsOERBQUM4QjtnQkFDQ0MsS0FBSyx3QkFBa0QsT0FBMUJqQyxNQUFNLENBQUNHLGtCQUFrQjtnQkFDdEQrQixLQUFLLGtCQUF3QyxPQUF0Qi9CLG9CQUFvQjtnQkFDM0MyQixXQUFVO2dCQUNWSyxXQUFXOzs7Ozs7MEJBRWIsOERBQUNYO2dCQUFJTSxXQUFVOztvQkFDWjNCLG9CQUFvQjtvQkFBRTtvQkFBSUgsT0FBT3FCLE1BQU07Ozs7Ozs7Ozs7Ozs7QUFJaEQ7R0FqRU10QjtLQUFBQTtBQW1FTixpRUFBZUEsbUJBQW1CQSxFQUFDIiwic291cmNlcyI6WyIvVXNlcnMvdGhha3VyYWRpdHlhL0Rlc2t0b3AvQ0cgVml6IHN0dWRpb3MvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvSW1hZ2VTZXF1ZW5jZVZpZXdlci50c3giXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5cbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcblxuaW50ZXJmYWNlIEltYWdlU2VxdWVuY2VWaWV3ZXJQcm9wcyB7XG4gIGltYWdlczogc3RyaW5nW107IC8vIEFycmF5IG9mIGltYWdlIFVSTHNcbiAgd2lkdGg/OiBudW1iZXI7XG4gIGhlaWdodD86IG51bWJlcjtcbn1cblxuY29uc3QgSW1hZ2VTZXF1ZW5jZVZpZXdlcjogUmVhY3QuRkM8SW1hZ2VTZXF1ZW5jZVZpZXdlclByb3BzPiA9ICh7XG4gIGltYWdlcyxcbiAgd2lkdGggPSA1MDAsXG4gIGhlaWdodCA9IDUwMCxcbn0pID0+IHtcbiAgY29uc3QgW2N1cnJlbnRJbWFnZUluZGV4LCBzZXRDdXJyZW50SW1hZ2VJbmRleF0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgY29udGFpbmVyUmVmID0gdXNlUmVmPEhUTUxEaXZFbGVtZW50PihudWxsKTtcbiAgY29uc3Qgc3RhcnRYUmVmID0gdXNlUmVmPG51bWJlciB8IG51bGw+KG51bGwpO1xuXG4gIGNvbnN0IGhhbmRsZU1vdXNlRG93biA9IChlOiBSZWFjdC5Nb3VzZUV2ZW50KSA9PiB7XG4gICAgaWYgKGNvbnRhaW5lclJlZi5jdXJyZW50KSB7XG4gICAgICBzdGFydFhSZWYuY3VycmVudCA9IGUuY2xpZW50WDtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlTW91c2VNb3ZlID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICBpZiAoc3RhcnRYUmVmLmN1cnJlbnQgIT09IG51bGwgJiYgY29udGFpbmVyUmVmLmN1cnJlbnQpIHtcbiAgICAgIGNvbnN0IGNvbnRhaW5lcldpZHRoID0gY29udGFpbmVyUmVmLmN1cnJlbnQub2Zmc2V0V2lkdGg7XG4gICAgICBjb25zdCBkZWx0YVggPSBlLmNsaWVudFggLSBzdGFydFhSZWYuY3VycmVudDtcblxuICAgICAgLy8gQ2FsY3VsYXRlIGltYWdlIGluZGV4IGJhc2VkIG9uIG1vdXNlIG1vdmVtZW50IHdpdGggYWRqdXN0ZWQgc2Vuc2l0aXZpdHlcbiAgICAgIGNvbnN0IHNlbnNpdGl2aXR5ID0gNTsgLy8gRml4ZWQgc2Vuc2l0aXZpdHkgdmFsdWUgZm9yIHNtb290aGVyIGNvbnRyb2xcbiAgICAgIGNvbnN0IGluZGV4RGVsdGEgPSBNYXRoLmZsb29yKGRlbHRhWCAvIHNlbnNpdGl2aXR5KTtcblxuICAgICAgLy8gQ2FsY3VsYXRlIG5ldyBpbmRleCB3aXRoIHByb3BlciB3cmFwcGluZ1xuICAgICAgbGV0IG5ld0luZGV4ID1cbiAgICAgICAgY3VycmVudEltYWdlSW5kZXggKyAoZGVsdGFYID4gMCA/IDEgOiAtMSkgKiBNYXRoLmFicyhpbmRleERlbHRhKTtcblxuICAgICAgLy8gRW5zdXJlIGluZGV4IHN0YXlzIHdpdGhpbiBib3VuZHNcbiAgICAgIGlmIChuZXdJbmRleCA+PSBpbWFnZXMubGVuZ3RoKSB7XG4gICAgICAgIG5ld0luZGV4ID0gbmV3SW5kZXggJSBpbWFnZXMubGVuZ3RoO1xuICAgICAgfSBlbHNlIGlmIChuZXdJbmRleCA8IDApIHtcbiAgICAgICAgbmV3SW5kZXggPSBpbWFnZXMubGVuZ3RoIC0gMSArICgobmV3SW5kZXggKyAxKSAlIGltYWdlcy5sZW5ndGgpO1xuICAgICAgfVxuXG4gICAgICBzZXRDdXJyZW50SW1hZ2VJbmRleChib3VuZGVkSW5kZXgpO1xuICAgICAgc3RhcnRYUmVmLmN1cnJlbnQgPSBlLmNsaWVudFg7XG4gICAgfVxuICB9O1xuXG4gIGNvbnN0IGhhbmRsZU1vdXNlVXAgPSAoKSA9PiB7XG4gICAgc3RhcnRYUmVmLmN1cnJlbnQgPSBudWxsO1xuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgcmVmPXtjb250YWluZXJSZWZ9XG4gICAgICBvbk1vdXNlRG93bj17aGFuZGxlTW91c2VEb3dufVxuICAgICAgb25Nb3VzZU1vdmU9e2hhbmRsZU1vdXNlTW92ZX1cbiAgICAgIG9uTW91c2VVcD17aGFuZGxlTW91c2VVcH1cbiAgICAgIG9uTW91c2VMZWF2ZT17aGFuZGxlTW91c2VVcH1cbiAgICAgIGNsYXNzTmFtZT1cInJlbGF0aXZlIGN1cnNvci1ldy1yZXNpemUgc2VsZWN0LW5vbmVcIlxuICAgICAgc3R5bGU9e3sgd2lkdGgsIGhlaWdodCB9fVxuICAgID5cbiAgICAgIDxpbWdcbiAgICAgICAgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDozMDAxJHtpbWFnZXNbY3VycmVudEltYWdlSW5kZXhdfWB9XG4gICAgICAgIGFsdD17YFNlcXVlbmNlIGltYWdlICR7Y3VycmVudEltYWdlSW5kZXggKyAxfWB9XG4gICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIHRvcC0wIGxlZnQtMCB3LWZ1bGwgaC1mdWxsIG9iamVjdC1jb250YWluXCJcbiAgICAgICAgZHJhZ2dhYmxlPXtmYWxzZX1cbiAgICAgIC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGJvdHRvbS0yIHJpZ2h0LTIgYmctYmxhY2svNTAgdGV4dC13aGl0ZSBweC0yIHB5LTEgcm91bmRlZFwiPlxuICAgICAgICB7Y3VycmVudEltYWdlSW5kZXggKyAxfSAvIHtpbWFnZXMubGVuZ3RofVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBJbWFnZVNlcXVlbmNlVmlld2VyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VSZWYiLCJJbWFnZVNlcXVlbmNlVmlld2VyIiwiaW1hZ2VzIiwid2lkdGgiLCJoZWlnaHQiLCJjdXJyZW50SW1hZ2VJbmRleCIsInNldEN1cnJlbnRJbWFnZUluZGV4IiwiY29udGFpbmVyUmVmIiwic3RhcnRYUmVmIiwiaGFuZGxlTW91c2VEb3duIiwiZSIsImN1cnJlbnQiLCJjbGllbnRYIiwiaGFuZGxlTW91c2VNb3ZlIiwiY29udGFpbmVyV2lkdGgiLCJvZmZzZXRXaWR0aCIsImRlbHRhWCIsInNlbnNpdGl2aXR5IiwiaW5kZXhEZWx0YSIsIk1hdGgiLCJmbG9vciIsIm5ld0luZGV4IiwiYWJzIiwibGVuZ3RoIiwiYm91bmRlZEluZGV4IiwiaGFuZGxlTW91c2VVcCIsImRpdiIsInJlZiIsIm9uTW91c2VEb3duIiwib25Nb3VzZU1vdmUiLCJvbk1vdXNlVXAiLCJvbk1vdXNlTGVhdmUiLCJjbGFzc05hbWUiLCJzdHlsZSIsImltZyIsInNyYyIsImFsdCIsImRyYWdnYWJsZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ImageSequenceViewer.tsx\n"));

/***/ })

});