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

/***/ "(app-pages-browser)/./src/components/ProjectList.tsx":
/*!****************************************!*\
  !*** ./src/components/ProjectList.tsx ***!
  \****************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ProjectList)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api */ \"(app-pages-browser)/./src/services/api.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction ProjectList() {\n    _s();\n    const [projects, setProjects] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [newProject, setNewProject] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        description: \"\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"ProjectList.useEffect\": ()=>{\n            loadProjects();\n        }\n    }[\"ProjectList.useEffect\"], []);\n    const loadProjects = async ()=>{\n        try {\n            const data = await _services_api__WEBPACK_IMPORTED_MODULE_2__.api.getProjects();\n            setProjects(data);\n            setError(null);\n        } catch (err) {\n            setError(\"Failed to load projects\");\n        } finally{\n            setLoading(false);\n        }\n    };\n    const handleCreateProject = async (e)=>{\n        e.preventDefault();\n        try {\n            const project = await _services_api__WEBPACK_IMPORTED_MODULE_2__.api.createProject(newProject);\n            setProjects([\n                ...projects,\n                project\n            ]);\n            setNewProject({\n                name: \"\",\n                description: \"\"\n            });\n            setError(null);\n        } catch (err) {\n            setError(\"Failed to create project\");\n        }\n    };\n    const handleImageUpload = async (projectId, files)=>{\n        try {\n            await _services_api__WEBPACK_IMPORTED_MODULE_2__.api.uploadImages(projectId, Array.from(files));\n            await loadProjects(); // Reload to get updated image list\n            setError(null);\n        } catch (err) {\n            setError(\"Failed to upload images\");\n        }\n    };\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/thakuraditya/Desktop/CG Viz studios/frontend/src/components/ProjectList.tsx\",\n        lineNumber: 51,\n        columnNumber: 23\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-4xl mx-auto p-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleCreateProject,\n                className: \"mb-8 space-y-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Project Name\",\n                            value: newProject.name,\n                            onChange: (e)=>setNewProject({\n                                    ...newProject,\n                                    name: e.target.value\n                                }),\n                            className: \"w-full p-2 border rounded\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/Users/thakuraditya/Desktop/CG Viz studios/frontend/src/components/ProjectList.tsx\",\n                            lineNumber: 57,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/thakuraditya/Desktop/CG Viz studios/frontend/src/components/ProjectList.tsx\",\n                        lineNumber: 56,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                            placeholder: \"Project Description\",\n                            value: newProject.description,\n                            onChange: (e)=>setNewProject({\n                                    ...newProject,\n                                    description: e.target.value\n                                }),\n                            className: \"w-full p-2 border font-black text- rounded\"\n                        }, void 0, false, {\n                            fileName: \"/Users/thakuraditya/Desktop/CG Viz studios/frontend/src/components/ProjectList.tsx\",\n                            lineNumber: 69,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/thakuraditya/Desktop/CG Viz studios/frontend/src/components/ProjectList.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600\",\n                        children: \"Create Project\"\n                    }, void 0, false, {\n                        fileName: \"/Users/thakuraditya/Desktop/CG Viz studios/frontend/src/components/ProjectList.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/thakuraditya/Desktop/CG Viz studios/frontend/src/components/ProjectList.tsx\",\n                lineNumber: 55,\n                columnNumber: 7\n            }, this),\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-red-500 mb-4\",\n                children: error\n            }, void 0, false, {\n                fileName: \"/Users/thakuraditya/Desktop/CG Viz studios/frontend/src/components/ProjectList.tsx\",\n                lineNumber: 86,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"space-y-6\",\n                children: projects.map((project)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"border rounded p-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                className: \"text-xl font-bold\",\n                                children: project.name\n                            }, void 0, false, {\n                                fileName: \"/Users/thakuraditya/Desktop/CG Viz studios/frontend/src/components/ProjectList.tsx\",\n                                lineNumber: 91,\n                                columnNumber: 13\n                            }, this),\n                            project.description && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-gray-600 mt-2\",\n                                children: project.description\n                            }, void 0, false, {\n                                fileName: \"/Users/thakuraditya/Desktop/CG Viz studios/frontend/src/components/ProjectList.tsx\",\n                                lineNumber: 93,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"file\",\n                                        multiple: true,\n                                        accept: \"image/*\",\n                                        onChange: (e)=>e.target.files && handleImageUpload(project.id, e.target.files),\n                                        className: \"mb-4\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/thakuraditya/Desktop/CG Viz studios/frontend/src/components/ProjectList.tsx\",\n                                        lineNumber: 96,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"grid grid-cols-3 gap-4\",\n                                        children: project.images && project.images.map((image)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                                src: \"http://localhost:3001\".concat(image.url),\n                                                alt: \"Project \".concat(project.name, \" image \").concat(image.sequence),\n                                                className: \"w-full h-48 object-cover rounded\"\n                                            }, image.id, false, {\n                                                fileName: \"/Users/thakuraditya/Desktop/CG Viz studios/frontend/src/components/ProjectList.tsx\",\n                                                lineNumber: 108,\n                                                columnNumber: 19\n                                            }, this))\n                                    }, void 0, false, {\n                                        fileName: \"/Users/thakuraditya/Desktop/CG Viz studios/frontend/src/components/ProjectList.tsx\",\n                                        lineNumber: 106,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/thakuraditya/Desktop/CG Viz studios/frontend/src/components/ProjectList.tsx\",\n                                lineNumber: 95,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, project.id, true, {\n                        fileName: \"/Users/thakuraditya/Desktop/CG Viz studios/frontend/src/components/ProjectList.tsx\",\n                        lineNumber: 90,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/thakuraditya/Desktop/CG Viz studios/frontend/src/components/ProjectList.tsx\",\n                lineNumber: 88,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/thakuraditya/Desktop/CG Viz studios/frontend/src/components/ProjectList.tsx\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, this);\n}\n_s(ProjectList, \"WN0stbk0i6FVauzgcl2J0S/KfSs=\");\n_c = ProjectList;\nvar _c;\n$RefreshReg$(_c, \"ProjectList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1Byb2plY3RMaXN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBRTRDO0FBQ0c7QUFFaEMsU0FBU0c7O0lBQ3RCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTCwrQ0FBUUEsQ0FBWSxFQUFFO0lBQ3RELE1BQU0sQ0FBQ00sU0FBU0MsV0FBVyxHQUFHUCwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNRLE9BQU9DLFNBQVMsR0FBR1QsK0NBQVFBLENBQWdCO0lBQ2xELE1BQU0sQ0FBQ1UsWUFBWUMsY0FBYyxHQUFHWCwrQ0FBUUEsQ0FBQztRQUFFWSxNQUFNO1FBQUlDLGFBQWE7SUFBRztJQUV6RVosZ0RBQVNBO2lDQUFDO1lBQ1JhO1FBQ0Y7Z0NBQUcsRUFBRTtJQUVMLE1BQU1BLGVBQWU7UUFDbkIsSUFBSTtZQUNGLE1BQU1DLE9BQU8sTUFBTWIsOENBQUdBLENBQUNjLFdBQVc7WUFDbENYLFlBQVlVO1lBQ1pOLFNBQVM7UUFDWCxFQUFFLE9BQU9RLEtBQUs7WUFFWlIsU0FBUztRQUNYLFNBQVU7WUFDUkYsV0FBVztRQUNiO0lBQ0Y7SUFFQSxNQUFNVyxzQkFBc0IsT0FBT0M7UUFDakNBLEVBQUVDLGNBQWM7UUFDaEIsSUFBSTtZQUNGLE1BQU1DLFVBQVUsTUFBTW5CLDhDQUFHQSxDQUFDb0IsYUFBYSxDQUFDWjtZQUN4Q0wsWUFBWTttQkFBSUQ7Z0JBQVVpQjthQUFRO1lBQ2xDVixjQUFjO2dCQUFFQyxNQUFNO2dCQUFJQyxhQUFhO1lBQUc7WUFDMUNKLFNBQVM7UUFDWCxFQUFFLE9BQU9RLEtBQUs7WUFDWlIsU0FBUztRQUNYO0lBQ0Y7SUFFQSxNQUFNYyxvQkFBb0IsT0FBT0MsV0FBbUJDO1FBQ2xELElBQUk7WUFDRixNQUFNdkIsOENBQUdBLENBQUN3QixZQUFZLENBQUNGLFdBQVdHLE1BQU1DLElBQUksQ0FBQ0g7WUFDN0MsTUFBTVgsZ0JBQWdCLG1DQUFtQztZQUN6REwsU0FBUztRQUNYLEVBQUUsT0FBT1EsS0FBSztZQUNaUixTQUFTO1FBQ1g7SUFDRjtJQUVBLElBQUlILFNBQVMscUJBQU8sOERBQUN1QjtrQkFBSTs7Ozs7O0lBRXpCLHFCQUNFLDhEQUFDQTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0M7Z0JBQUtDLFVBQVVkO2dCQUFxQlksV0FBVTs7a0NBQzdDLDhEQUFDRDtrQ0FDQyw0RUFBQ0k7NEJBQ0NDLE1BQUs7NEJBQ0xDLGFBQVk7NEJBQ1pDLE9BQU8xQixXQUFXRSxJQUFJOzRCQUN0QnlCLFVBQVUsQ0FBQ2xCLElBQ1RSLGNBQWM7b0NBQUUsR0FBR0QsVUFBVTtvQ0FBRUUsTUFBTU8sRUFBRW1CLE1BQU0sQ0FBQ0YsS0FBSztnQ0FBQzs0QkFFdEROLFdBQVU7NEJBQ1ZTLFFBQVE7Ozs7Ozs7Ozs7O2tDQUdaLDhEQUFDVjtrQ0FDQyw0RUFBQ1c7NEJBQ0NMLGFBQVk7NEJBQ1pDLE9BQU8xQixXQUFXRyxXQUFXOzRCQUM3QndCLFVBQVUsQ0FBQ2xCLElBQ1RSLGNBQWM7b0NBQUUsR0FBR0QsVUFBVTtvQ0FBRUcsYUFBYU0sRUFBRW1CLE1BQU0sQ0FBQ0YsS0FBSztnQ0FBQzs0QkFFN0ROLFdBQVU7Ozs7Ozs7Ozs7O2tDQUdkLDhEQUFDVzt3QkFDQ1AsTUFBSzt3QkFDTEosV0FBVTtrQ0FDWDs7Ozs7Ozs7Ozs7O1lBS0Z0Qix1QkFBUyw4REFBQ3FCO2dCQUFJQyxXQUFVOzBCQUFxQnRCOzs7Ozs7MEJBRTlDLDhEQUFDcUI7Z0JBQUlDLFdBQVU7MEJBQ1oxQixTQUFTc0MsR0FBRyxDQUFDLENBQUNyQix3QkFDYiw4REFBQ1E7d0JBQXFCQyxXQUFVOzswQ0FDOUIsOERBQUNhO2dDQUFHYixXQUFVOzBDQUFxQlQsUUFBUVQsSUFBSTs7Ozs7OzRCQUM5Q1MsUUFBUVIsV0FBVyxrQkFDbEIsOERBQUMrQjtnQ0FBRWQsV0FBVTswQ0FBc0JULFFBQVFSLFdBQVc7Ozs7OzswQ0FFeEQsOERBQUNnQjtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNHO3dDQUNDQyxNQUFLO3dDQUNMVyxRQUFRO3dDQUNSQyxRQUFPO3dDQUNQVCxVQUFVLENBQUNsQixJQUNUQSxFQUFFbUIsTUFBTSxDQUFDYixLQUFLLElBQ2RGLGtCQUFrQkYsUUFBUTBCLEVBQUUsRUFBRTVCLEVBQUVtQixNQUFNLENBQUNiLEtBQUs7d0NBRTlDSyxXQUFVOzs7Ozs7a0RBRVosOERBQUNEO3dDQUFJQyxXQUFVO2tEQUNaVCxRQUFRMkIsTUFBTSxJQUFJM0IsUUFBUTJCLE1BQU0sQ0FBQ04sR0FBRyxDQUFDLENBQUNPLHNCQUNyQyw4REFBQ0M7Z0RBRUNDLEtBQUssd0JBQWtDLE9BQVZGLE1BQU1HLEdBQUc7Z0RBQ3RDQyxLQUFLLFdBQWlDSixPQUF0QjVCLFFBQVFULElBQUksRUFBQyxXQUF3QixPQUFmcUMsTUFBTUssUUFBUTtnREFDcER4QixXQUFVOytDQUhMbUIsTUFBTUYsRUFBRTs7Ozs7Ozs7Ozs7Ozs7Ozs7dUJBbkJiMUIsUUFBUTBCLEVBQUU7Ozs7Ozs7Ozs7Ozs7Ozs7QUFnQzlCO0dBcEh3QjVDO0tBQUFBIiwic291cmNlcyI6WyIvVXNlcnMvdGhha3VyYWRpdHlhL0Rlc2t0b3AvQ0cgVml6IHN0dWRpb3MvZnJvbnRlbmQvc3JjL2NvbXBvbmVudHMvUHJvamVjdExpc3QudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuXG5pbXBvcnQgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBhcGksIFByb2plY3QgfSBmcm9tIFwiLi4vc2VydmljZXMvYXBpXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFByb2plY3RMaXN0KCkge1xuICBjb25zdCBbcHJvamVjdHMsIHNldFByb2plY3RzXSA9IHVzZVN0YXRlPFByb2plY3RbXT4oW10pO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2Vycm9yLCBzZXRFcnJvcl0gPSB1c2VTdGF0ZTxzdHJpbmcgfCBudWxsPihudWxsKTtcbiAgY29uc3QgW25ld1Byb2plY3QsIHNldE5ld1Byb2plY3RdID0gdXNlU3RhdGUoeyBuYW1lOiBcIlwiLCBkZXNjcmlwdGlvbjogXCJcIiB9KTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGxvYWRQcm9qZWN0cygpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgbG9hZFByb2plY3RzID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgYXBpLmdldFByb2plY3RzKCk7XG4gICAgICBzZXRQcm9qZWN0cyhkYXRhKTtcbiAgICAgIHNldEVycm9yKG51bGwpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuXG4gICAgICBzZXRFcnJvcihcIkZhaWxlZCB0byBsb2FkIHByb2plY3RzXCIpO1xuICAgIH0gZmluYWxseSB7XG4gICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ3JlYXRlUHJvamVjdCA9IGFzeW5jIChlOiBSZWFjdC5Gb3JtRXZlbnQpID0+IHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHByb2plY3QgPSBhd2FpdCBhcGkuY3JlYXRlUHJvamVjdChuZXdQcm9qZWN0KTtcbiAgICAgIHNldFByb2plY3RzKFsuLi5wcm9qZWN0cywgcHJvamVjdF0pO1xuICAgICAgc2V0TmV3UHJvamVjdCh7IG5hbWU6IFwiXCIsIGRlc2NyaXB0aW9uOiBcIlwiIH0pO1xuICAgICAgc2V0RXJyb3IobnVsbCk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBzZXRFcnJvcihcIkZhaWxlZCB0byBjcmVhdGUgcHJvamVjdFwiKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlSW1hZ2VVcGxvYWQgPSBhc3luYyAocHJvamVjdElkOiBzdHJpbmcsIGZpbGVzOiBGaWxlTGlzdCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBhcGkudXBsb2FkSW1hZ2VzKHByb2plY3RJZCwgQXJyYXkuZnJvbShmaWxlcykpO1xuICAgICAgYXdhaXQgbG9hZFByb2plY3RzKCk7IC8vIFJlbG9hZCB0byBnZXQgdXBkYXRlZCBpbWFnZSBsaXN0XG4gICAgICBzZXRFcnJvcihudWxsKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHNldEVycm9yKFwiRmFpbGVkIHRvIHVwbG9hZCBpbWFnZXNcIik7XG4gICAgfVxuICB9O1xuXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy00eGwgbXgtYXV0byBwLTRcIj5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVDcmVhdGVQcm9qZWN0fSBjbGFzc05hbWU9XCJtYi04IHNwYWNlLXktNFwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQcm9qZWN0IE5hbWVcIlxuICAgICAgICAgICAgdmFsdWU9e25ld1Byb2plY3QubmFtZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgc2V0TmV3UHJvamVjdCh7IC4uLm5ld1Byb2plY3QsIG5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcC0yIGJvcmRlciByb3VuZGVkXCJcbiAgICAgICAgICAgIHJlcXVpcmVkXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHRleHRhcmVhXG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlByb2plY3QgRGVzY3JpcHRpb25cIlxuICAgICAgICAgICAgdmFsdWU9e25ld1Byb2plY3QuZGVzY3JpcHRpb259XG4gICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+XG4gICAgICAgICAgICAgIHNldE5ld1Byb2plY3QoeyAuLi5uZXdQcm9qZWN0LCBkZXNjcmlwdGlvbjogZS50YXJnZXQudmFsdWUgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctZnVsbCBwLTIgYm9yZGVyIGZvbnQtYmxhY2sgdGV4dC0gcm91bmRlZFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB0eXBlPVwic3VibWl0XCJcbiAgICAgICAgICBjbGFzc05hbWU9XCJiZy1ibHVlLTUwMCB0ZXh0LXdoaXRlIHB4LTQgcHktMiByb3VuZGVkIGhvdmVyOmJnLWJsdWUtNjAwXCJcbiAgICAgICAgPlxuICAgICAgICAgIENyZWF0ZSBQcm9qZWN0XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgPC9mb3JtPlxuXG4gICAgICB7ZXJyb3IgJiYgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJlZC01MDAgbWItNFwiPntlcnJvcn08L2Rpdj59XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic3BhY2UteS02XCI+XG4gICAgICAgIHtwcm9qZWN0cy5tYXAoKHByb2plY3QpID0+IChcbiAgICAgICAgICA8ZGl2IGtleT17cHJvamVjdC5pZH0gY2xhc3NOYW1lPVwiYm9yZGVyIHJvdW5kZWQgcC00XCI+XG4gICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGRcIj57cHJvamVjdC5uYW1lfTwvaDI+XG4gICAgICAgICAgICB7cHJvamVjdC5kZXNjcmlwdGlvbiAmJiAoXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgbXQtMlwiPntwcm9qZWN0LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTRcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgICAgIG11bHRpcGxlXG4gICAgICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgZS50YXJnZXQuZmlsZXMgJiZcbiAgICAgICAgICAgICAgICAgIGhhbmRsZUltYWdlVXBsb2FkKHByb2plY3QuaWQsIGUudGFyZ2V0LmZpbGVzKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYi00XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0zIGdhcC00XCI+XG4gICAgICAgICAgICAgICAge3Byb2plY3QuaW1hZ2VzICYmIHByb2plY3QuaW1hZ2VzLm1hcCgoaW1hZ2UpID0+IChcbiAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAga2V5PXtpbWFnZS5pZH1cbiAgICAgICAgICAgICAgICAgICAgc3JjPXtgaHR0cDovL2xvY2FsaG9zdDozMDAxJHtpbWFnZS51cmx9YH1cbiAgICAgICAgICAgICAgICAgICAgYWx0PXtgUHJvamVjdCAke3Byb2plY3QubmFtZX0gaW1hZ2UgJHtpbWFnZS5zZXF1ZW5jZX1gfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC00OCBvYmplY3QtY292ZXIgcm91bmRlZFwiXG4gICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXBpIiwiUHJvamVjdExpc3QiLCJwcm9qZWN0cyIsInNldFByb2plY3RzIiwibG9hZGluZyIsInNldExvYWRpbmciLCJlcnJvciIsInNldEVycm9yIiwibmV3UHJvamVjdCIsInNldE5ld1Byb2plY3QiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJsb2FkUHJvamVjdHMiLCJkYXRhIiwiZ2V0UHJvamVjdHMiLCJlcnIiLCJoYW5kbGVDcmVhdGVQcm9qZWN0IiwiZSIsInByZXZlbnREZWZhdWx0IiwicHJvamVjdCIsImNyZWF0ZVByb2plY3QiLCJoYW5kbGVJbWFnZVVwbG9hZCIsInByb2plY3RJZCIsImZpbGVzIiwidXBsb2FkSW1hZ2VzIiwiQXJyYXkiLCJmcm9tIiwiZGl2IiwiY2xhc3NOYW1lIiwiZm9ybSIsIm9uU3VibWl0IiwiaW5wdXQiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJ2YWx1ZSIsIm9uQ2hhbmdlIiwidGFyZ2V0IiwicmVxdWlyZWQiLCJ0ZXh0YXJlYSIsImJ1dHRvbiIsIm1hcCIsImgyIiwicCIsIm11bHRpcGxlIiwiYWNjZXB0IiwiaWQiLCJpbWFnZXMiLCJpbWFnZSIsImltZyIsInNyYyIsInVybCIsImFsdCIsInNlcXVlbmNlIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ProjectList.tsx\n"));

/***/ })

});