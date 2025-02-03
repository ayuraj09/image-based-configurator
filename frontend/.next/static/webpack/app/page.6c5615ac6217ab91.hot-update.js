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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ProjectList)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _services_api__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../services/api */ \"(app-pages-browser)/./src/services/api.ts\");\n/* harmony import */ var _ImageSequenceViewer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ImageSequenceViewer */ \"(app-pages-browser)/./src/components/ImageSequenceViewer.tsx\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction ProjectList() {\n    _s();\n    const [projects, setProjects] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    const [loading, setLoading] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true);\n    const [error, setError] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [newProject, setNewProject] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        name: \"\",\n        description: \"\"\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)({\n        \"ProjectList.useEffect\": ()=>{\n            loadProjects();\n        }\n    }[\"ProjectList.useEffect\"], []);\n    const loadProjects = async ()=>{\n        try {\n            const data = await _services_api__WEBPACK_IMPORTED_MODULE_2__.api.getProjects();\n            setProjects(data);\n            setError(null);\n        } catch (err) {\n            setError(\"Failed to load projects\");\n        } finally{\n            setLoading(false);\n        }\n    };\n    const handleCreateProject = async (e)=>{\n        e.preventDefault();\n        try {\n            const project = await _services_api__WEBPACK_IMPORTED_MODULE_2__.api.createProject(newProject);\n            setProjects([\n                ...projects,\n                project\n            ]);\n            setNewProject({\n                name: \"\",\n                description: \"\"\n            });\n            setError(null);\n        } catch (err) {\n            setError(\"Failed to create project\");\n        }\n    };\n    const handleImageUpload = async (projectId, files)=>{\n        try {\n            await _services_api__WEBPACK_IMPORTED_MODULE_2__.api.uploadImages(projectId, Array.from(files));\n            await loadProjects(); // Reload to get updated image list\n            setError(null);\n        } catch (err) {\n            setError(\"Failed to upload images\");\n        }\n    };\n    const handleDeleteProject = async (projectId)=>{\n        try {\n            await _services_api__WEBPACK_IMPORTED_MODULE_2__.api.deleteProject(projectId);\n            setProjects(projects.filter((project)=>project.id !== projectId));\n            setError(null);\n        } catch (err) {\n            setError(\"Failed to delete project\");\n        }\n    };\n    if (loading) return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: \"Loading...\"\n    }, void 0, false, {\n        fileName: \"/Users/thakuraditya/Desktop/CG Viz studios/frontend/src/components/ProjectList.tsx\",\n        lineNumber: 61,\n        columnNumber: 23\n    }, this);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"max-w-4xl mx-auto p-4\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleCreateProject,\n                className: \"mb-8 space-y-4\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                            type: \"text\",\n                            placeholder: \"Project Name\",\n                            value: newProject.name,\n                            onChange: (e)=>setNewProject({\n                                    ...newProject,\n                                    name: e.target.value\n                                }),\n                            className: \"w-full p-2 text-black border rounded\",\n                            required: true\n                        }, void 0, false, {\n                            fileName: \"/Users/thakuraditya/Desktop/CG Viz studios/frontend/src/components/ProjectList.tsx\",\n                            lineNumber: 67,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/thakuraditya/Desktop/CG Viz studios/frontend/src/components/ProjectList.tsx\",\n                        lineNumber: 66,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                            placeholder: \"Project Description\",\n                            value: newProject.description,\n                            onChange: (e)=>setNewProject({\n                                    ...newProject,\n                                    description: e.target.value\n                                }),\n                            className: \"w-full p-2 border text-black rounded\"\n                        }, void 0, false, {\n                            fileName: \"/Users/thakuraditya/Desktop/CG Viz studios/frontend/src/components/ProjectList.tsx\",\n                            lineNumber: 79,\n                            columnNumber: 11\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/thakuraditya/Desktop/CG Viz studios/frontend/src/components/ProjectList.tsx\",\n                        lineNumber: 78,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        className: \"bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600\",\n                        children: \"Create Project\"\n                    }, void 0, false, {\n                        fileName: \"/Users/thakuraditya/Desktop/CG Viz studios/frontend/src/components/ProjectList.tsx\",\n                        lineNumber: 88,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/thakuraditya/Desktop/CG Viz studios/frontend/src/components/ProjectList.tsx\",\n                lineNumber: 65,\n                columnNumber: 7\n            }, this),\n            error && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"text-red-500 mb-4\",\n                children: error\n            }, void 0, false, {\n                fileName: \"/Users/thakuraditya/Desktop/CG Viz studios/frontend/src/components/ProjectList.tsx\",\n                lineNumber: 96,\n                columnNumber: 17\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"space-y-6\",\n                children: projects.map((project)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"border rounded p-4\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex justify-between items-start mb-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        className: \"text-xl font-bold\",\n                                        children: project.name\n                                    }, void 0, false, {\n                                        fileName: \"/Users/thakuraditya/Desktop/CG Viz studios/frontend/src/components/ProjectList.tsx\",\n                                        lineNumber: 102,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                        onClick: ()=>handleDeleteProject(project.id),\n                                        className: \"bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm\",\n                                        children: \"Delete\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/thakuraditya/Desktop/CG Viz studios/frontend/src/components/ProjectList.tsx\",\n                                        lineNumber: 103,\n                                        columnNumber: 15\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/thakuraditya/Desktop/CG Viz studios/frontend/src/components/ProjectList.tsx\",\n                                lineNumber: 101,\n                                columnNumber: 13\n                            }, this),\n                            project.description && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: \"text-gray-600 mt-2\",\n                                children: project.description\n                            }, void 0, false, {\n                                fileName: \"/Users/thakuraditya/Desktop/CG Viz studios/frontend/src/components/ProjectList.tsx\",\n                                lineNumber: 111,\n                                columnNumber: 15\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"mt-4\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        type: \"file\",\n                                        multiple: true,\n                                        accept: \"image/*\",\n                                        onChange: (e)=>e.target.files && handleImageUpload(project.id, e.target.files),\n                                        className: \"mb-4\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/thakuraditya/Desktop/CG Viz studios/frontend/src/components/ProjectList.tsx\",\n                                        lineNumber: 114,\n                                        columnNumber: 15\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"grid grid-cols-3 gap-4\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/thakuraditya/Desktop/CG Viz studios/frontend/src/components/ProjectList.tsx\",\n                                        lineNumber: 124,\n                                        columnNumber: 15\n                                    }, this),\n                                    project.images && project.images.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                        className: \"mt-4\",\n                                        children: [\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                                className: \"text-lg font-semibold mb-2\",\n                                                children: \"Image Sequence\"\n                                            }, void 0, false, {\n                                                fileName: \"/Users/thakuraditya/Desktop/CG Viz studios/frontend/src/components/ProjectList.tsx\",\n                                                lineNumber: 138,\n                                                columnNumber: 19\n                                            }, this),\n                                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ImageSequenceViewer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                                images: project.images.map((img)=>img.url),\n                                                width: 500,\n                                                height: 500\n                                            }, void 0, false, {\n                                                fileName: \"/Users/thakuraditya/Desktop/CG Viz studios/frontend/src/components/ProjectList.tsx\",\n                                                lineNumber: 139,\n                                                columnNumber: 19\n                                            }, this)\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/Users/thakuraditya/Desktop/CG Viz studios/frontend/src/components/ProjectList.tsx\",\n                                        lineNumber: 137,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/thakuraditya/Desktop/CG Viz studios/frontend/src/components/ProjectList.tsx\",\n                                lineNumber: 113,\n                                columnNumber: 13\n                            }, this)\n                        ]\n                    }, project.id, true, {\n                        fileName: \"/Users/thakuraditya/Desktop/CG Viz studios/frontend/src/components/ProjectList.tsx\",\n                        lineNumber: 100,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/thakuraditya/Desktop/CG Viz studios/frontend/src/components/ProjectList.tsx\",\n                lineNumber: 98,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/thakuraditya/Desktop/CG Viz studios/frontend/src/components/ProjectList.tsx\",\n        lineNumber: 64,\n        columnNumber: 5\n    }, this);\n}\n_s(ProjectList, \"WN0stbk0i6FVauzgcl2J0S/KfSs=\");\n_c = ProjectList;\nvar _c;\n$RefreshReg$(_c, \"ProjectList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL1Byb2plY3RMaXN0LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUU0QztBQUNHO0FBQ1M7QUFFekMsU0FBU0k7O0lBQ3RCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHTiwrQ0FBUUEsQ0FBWSxFQUFFO0lBQ3RELE1BQU0sQ0FBQ08sU0FBU0MsV0FBVyxHQUFHUiwrQ0FBUUEsQ0FBQztJQUN2QyxNQUFNLENBQUNTLE9BQU9DLFNBQVMsR0FBR1YsK0NBQVFBLENBQWdCO0lBQ2xELE1BQU0sQ0FBQ1csWUFBWUMsY0FBYyxHQUFHWiwrQ0FBUUEsQ0FBQztRQUFFYSxNQUFNO1FBQUlDLGFBQWE7SUFBRztJQUV6RWIsZ0RBQVNBO2lDQUFDO1lBQ1JjO1FBQ0Y7Z0NBQUcsRUFBRTtJQUVMLE1BQU1BLGVBQWU7UUFDbkIsSUFBSTtZQUNGLE1BQU1DLE9BQU8sTUFBTWQsOENBQUdBLENBQUNlLFdBQVc7WUFDbENYLFlBQVlVO1lBQ1pOLFNBQVM7UUFDWCxFQUFFLE9BQU9RLEtBQUs7WUFDWlIsU0FBUztRQUNYLFNBQVU7WUFDUkYsV0FBVztRQUNiO0lBQ0Y7SUFFQSxNQUFNVyxzQkFBc0IsT0FBT0M7UUFDakNBLEVBQUVDLGNBQWM7UUFDaEIsSUFBSTtZQUNGLE1BQU1DLFVBQVUsTUFBTXBCLDhDQUFHQSxDQUFDcUIsYUFBYSxDQUFDWjtZQUN4Q0wsWUFBWTttQkFBSUQ7Z0JBQVVpQjthQUFRO1lBQ2xDVixjQUFjO2dCQUFFQyxNQUFNO2dCQUFJQyxhQUFhO1lBQUc7WUFDMUNKLFNBQVM7UUFDWCxFQUFFLE9BQU9RLEtBQUs7WUFDWlIsU0FBUztRQUNYO0lBQ0Y7SUFFQSxNQUFNYyxvQkFBb0IsT0FBT0MsV0FBbUJDO1FBQ2xELElBQUk7WUFDRixNQUFNeEIsOENBQUdBLENBQUN5QixZQUFZLENBQUNGLFdBQVdHLE1BQU1DLElBQUksQ0FBQ0g7WUFDN0MsTUFBTVgsZ0JBQWdCLG1DQUFtQztZQUN6REwsU0FBUztRQUNYLEVBQUUsT0FBT1EsS0FBSztZQUNaUixTQUFTO1FBQ1g7SUFDRjtJQUVBLE1BQU1vQixzQkFBc0IsT0FBT0w7UUFDakMsSUFBSTtZQUNGLE1BQU12Qiw4Q0FBR0EsQ0FBQzZCLGFBQWEsQ0FBQ047WUFDeEJuQixZQUFZRCxTQUFTMkIsTUFBTSxDQUFDLENBQUNWLFVBQVlBLFFBQVFXLEVBQUUsS0FBS1I7WUFDeERmLFNBQVM7UUFDWCxFQUFFLE9BQU9RLEtBQUs7WUFDWlIsU0FBUztRQUNYO0lBQ0Y7SUFFQSxJQUFJSCxTQUFTLHFCQUFPLDhEQUFDMkI7a0JBQUk7Ozs7OztJQUV6QixxQkFDRSw4REFBQ0E7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUNDO2dCQUFLQyxVQUFVbEI7Z0JBQXFCZ0IsV0FBVTs7a0NBQzdDLDhEQUFDRDtrQ0FDQyw0RUFBQ0k7NEJBQ0NDLE1BQUs7NEJBQ0xDLGFBQVk7NEJBQ1pDLE9BQU85QixXQUFXRSxJQUFJOzRCQUN0QjZCLFVBQVUsQ0FBQ3RCLElBQ1RSLGNBQWM7b0NBQUUsR0FBR0QsVUFBVTtvQ0FBRUUsTUFBTU8sRUFBRXVCLE1BQU0sQ0FBQ0YsS0FBSztnQ0FBQzs0QkFFdEROLFdBQVU7NEJBQ1ZTLFFBQVE7Ozs7Ozs7Ozs7O2tDQUdaLDhEQUFDVjtrQ0FDQyw0RUFBQ1c7NEJBQ0NMLGFBQVk7NEJBQ1pDLE9BQU85QixXQUFXRyxXQUFXOzRCQUM3QjRCLFVBQVUsQ0FBQ3RCLElBQ1RSLGNBQWM7b0NBQUUsR0FBR0QsVUFBVTtvQ0FBRUcsYUFBYU0sRUFBRXVCLE1BQU0sQ0FBQ0YsS0FBSztnQ0FBQzs0QkFFN0ROLFdBQVU7Ozs7Ozs7Ozs7O2tDQUdkLDhEQUFDVzt3QkFDQ1AsTUFBSzt3QkFDTEosV0FBVTtrQ0FDWDs7Ozs7Ozs7Ozs7O1lBS0YxQix1QkFBUyw4REFBQ3lCO2dCQUFJQyxXQUFVOzBCQUFxQjFCOzs7Ozs7MEJBRTlDLDhEQUFDeUI7Z0JBQUlDLFdBQVU7MEJBQ1o5QixTQUFTMEMsR0FBRyxDQUFDLENBQUN6Qix3QkFDYiw4REFBQ1k7d0JBQXFCQyxXQUFVOzswQ0FDOUIsOERBQUNEO2dDQUFJQyxXQUFVOztrREFDYiw4REFBQ2E7d0NBQUdiLFdBQVU7a0RBQXFCYixRQUFRVCxJQUFJOzs7Ozs7a0RBQy9DLDhEQUFDaUM7d0NBQ0NHLFNBQVMsSUFBTW5CLG9CQUFvQlIsUUFBUVcsRUFBRTt3Q0FDN0NFLFdBQVU7a0RBQ1g7Ozs7Ozs7Ozs7Ozs0QkFJRmIsUUFBUVIsV0FBVyxrQkFDbEIsOERBQUNvQztnQ0FBRWYsV0FBVTswQ0FBc0JiLFFBQVFSLFdBQVc7Ozs7OzswQ0FFeEQsOERBQUNvQjtnQ0FBSUMsV0FBVTs7a0RBQ2IsOERBQUNHO3dDQUNDQyxNQUFLO3dDQUNMWSxRQUFRO3dDQUNSQyxRQUFPO3dDQUNQVixVQUFVLENBQUN0QixJQUNUQSxFQUFFdUIsTUFBTSxDQUFDakIsS0FBSyxJQUNkRixrQkFBa0JGLFFBQVFXLEVBQUUsRUFBRWIsRUFBRXVCLE1BQU0sQ0FBQ2pCLEtBQUs7d0NBRTlDUyxXQUFVOzs7Ozs7a0RBRVosOERBQUNEO3dDQUFJQyxXQUFVOzs7Ozs7b0NBWWRiLFFBQVErQixNQUFNLElBQUkvQixRQUFRK0IsTUFBTSxDQUFDQyxNQUFNLEdBQUcsbUJBQ3pDLDhEQUFDcEI7d0NBQUlDLFdBQVU7OzBEQUNiLDhEQUFDb0I7Z0RBQUdwQixXQUFVOzBEQUE2Qjs7Ozs7OzBEQUMzQyw4REFBQ2hDLDREQUFtQkE7Z0RBQ2xCa0QsUUFBUS9CLFFBQVErQixNQUFNLENBQUNOLEdBQUcsQ0FBQyxDQUFDUyxNQUFRQSxJQUFJQyxHQUFHO2dEQUMzQ0MsT0FBTztnREFDUEMsUUFBUTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt1QkExQ1JyQyxRQUFRVyxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7O0FBb0Q5QjtHQWpKd0I3QjtLQUFBQSIsInNvdXJjZXMiOlsiL1VzZXJzL3RoYWt1cmFkaXR5YS9EZXNrdG9wL0NHIFZpeiBzdHVkaW9zL2Zyb250ZW5kL3NyYy9jb21wb25lbnRzL1Byb2plY3RMaXN0LnRzeCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcblxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgYXBpLCBQcm9qZWN0IH0gZnJvbSBcIi4uL3NlcnZpY2VzL2FwaVwiO1xuaW1wb3J0IEltYWdlU2VxdWVuY2VWaWV3ZXIgZnJvbSBcIi4vSW1hZ2VTZXF1ZW5jZVZpZXdlclwiO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQcm9qZWN0TGlzdCgpIHtcbiAgY29uc3QgW3Byb2plY3RzLCBzZXRQcm9qZWN0c10gPSB1c2VTdGF0ZTxQcm9qZWN0W10+KFtdKTtcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUodHJ1ZSk7XG4gIGNvbnN0IFtlcnJvciwgc2V0RXJyb3JdID0gdXNlU3RhdGU8c3RyaW5nIHwgbnVsbD4obnVsbCk7XG4gIGNvbnN0IFtuZXdQcm9qZWN0LCBzZXROZXdQcm9qZWN0XSA9IHVzZVN0YXRlKHsgbmFtZTogXCJcIiwgZGVzY3JpcHRpb246IFwiXCIgfSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsb2FkUHJvamVjdHMoKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGxvYWRQcm9qZWN0cyA9IGFzeW5jICgpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGFwaS5nZXRQcm9qZWN0cygpO1xuICAgICAgc2V0UHJvamVjdHMoZGF0YSk7XG4gICAgICBzZXRFcnJvcihudWxsKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHNldEVycm9yKFwiRmFpbGVkIHRvIGxvYWQgcHJvamVjdHNcIik7XG4gICAgfSBmaW5hbGx5IHtcbiAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVDcmVhdGVQcm9qZWN0ID0gYXN5bmMgKGU6IFJlYWN0LkZvcm1FdmVudCkgPT4ge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcHJvamVjdCA9IGF3YWl0IGFwaS5jcmVhdGVQcm9qZWN0KG5ld1Byb2plY3QpO1xuICAgICAgc2V0UHJvamVjdHMoWy4uLnByb2plY3RzLCBwcm9qZWN0XSk7XG4gICAgICBzZXROZXdQcm9qZWN0KHsgbmFtZTogXCJcIiwgZGVzY3JpcHRpb246IFwiXCIgfSk7XG4gICAgICBzZXRFcnJvcihudWxsKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgIHNldEVycm9yKFwiRmFpbGVkIHRvIGNyZWF0ZSBwcm9qZWN0XCIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBoYW5kbGVJbWFnZVVwbG9hZCA9IGFzeW5jIChwcm9qZWN0SWQ6IHN0cmluZywgZmlsZXM6IEZpbGVMaXN0KSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IGFwaS51cGxvYWRJbWFnZXMocHJvamVjdElkLCBBcnJheS5mcm9tKGZpbGVzKSk7XG4gICAgICBhd2FpdCBsb2FkUHJvamVjdHMoKTsgLy8gUmVsb2FkIHRvIGdldCB1cGRhdGVkIGltYWdlIGxpc3RcbiAgICAgIHNldEVycm9yKG51bGwpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgc2V0RXJyb3IoXCJGYWlsZWQgdG8gdXBsb2FkIGltYWdlc1wiKTtcbiAgICB9XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlRGVsZXRlUHJvamVjdCA9IGFzeW5jIChwcm9qZWN0SWQ6IHN0cmluZykgPT4ge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBhcGkuZGVsZXRlUHJvamVjdChwcm9qZWN0SWQpO1xuICAgICAgc2V0UHJvamVjdHMocHJvamVjdHMuZmlsdGVyKChwcm9qZWN0KSA9PiBwcm9qZWN0LmlkICE9PSBwcm9qZWN0SWQpKTtcbiAgICAgIHNldEVycm9yKG51bGwpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgc2V0RXJyb3IoXCJGYWlsZWQgdG8gZGVsZXRlIHByb2plY3RcIik7XG4gICAgfVxuICB9O1xuXG4gIGlmIChsb2FkaW5nKSByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJtYXgtdy00eGwgbXgtYXV0byBwLTRcIj5cbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVDcmVhdGVQcm9qZWN0fSBjbGFzc05hbWU9XCJtYi04IHNwYWNlLXktNFwiPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxpbnB1dFxuICAgICAgICAgICAgdHlwZT1cInRleHRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQcm9qZWN0IE5hbWVcIlxuICAgICAgICAgICAgdmFsdWU9e25ld1Byb2plY3QubmFtZX1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgc2V0TmV3UHJvamVjdCh7IC4uLm5ld1Byb2plY3QsIG5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgcC0yIHRleHQtYmxhY2sgYm9yZGVyIHJvdW5kZWRcIlxuICAgICAgICAgICAgcmVxdWlyZWRcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8dGV4dGFyZWFcbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUHJvamVjdCBEZXNjcmlwdGlvblwiXG4gICAgICAgICAgICB2YWx1ZT17bmV3UHJvamVjdC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT5cbiAgICAgICAgICAgICAgc2V0TmV3UHJvamVjdCh7IC4uLm5ld1Byb2plY3QsIGRlc2NyaXB0aW9uOiBlLnRhcmdldC52YWx1ZSB9KVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2xhc3NOYW1lPVwidy1mdWxsIHAtMiBib3JkZXIgdGV4dC1ibGFjayByb3VuZGVkXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgIGNsYXNzTmFtZT1cImJnLWJsdWUtNTAwIHRleHQtd2hpdGUgcHgtNCBweS0yIHJvdW5kZWQgaG92ZXI6YmctYmx1ZS02MDBcIlxuICAgICAgICA+XG4gICAgICAgICAgQ3JlYXRlIFByb2plY3RcbiAgICAgICAgPC9idXR0b24+XG4gICAgICA8L2Zvcm0+XG5cbiAgICAgIHtlcnJvciAmJiA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmVkLTUwMCBtYi00XCI+e2Vycm9yfTwvZGl2Pn1cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZS15LTZcIj5cbiAgICAgICAge3Byb2plY3RzLm1hcCgocHJvamVjdCkgPT4gKFxuICAgICAgICAgIDxkaXYga2V5PXtwcm9qZWN0LmlkfSBjbGFzc05hbWU9XCJib3JkZXIgcm91bmRlZCBwLTRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWJldHdlZW4gaXRlbXMtc3RhcnQgbWItNFwiPlxuICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC14bCBmb250LWJvbGRcIj57cHJvamVjdC5uYW1lfTwvaDI+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiBoYW5kbGVEZWxldGVQcm9qZWN0KHByb2plY3QuaWQpfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImJnLXJlZC01MDAgdGV4dC13aGl0ZSBweC0zIHB5LTEgcm91bmRlZCBob3ZlcjpiZy1yZWQtNjAwIHRleHQtc21cIlxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgRGVsZXRlXG4gICAgICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICB7cHJvamVjdC5kZXNjcmlwdGlvbiAmJiAoXG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS02MDAgbXQtMlwiPntwcm9qZWN0LmRlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTRcIj5cbiAgICAgICAgICAgICAgPGlucHV0XG4gICAgICAgICAgICAgICAgdHlwZT1cImZpbGVcIlxuICAgICAgICAgICAgICAgIG11bHRpcGxlXG4gICAgICAgICAgICAgICAgYWNjZXB0PVwiaW1hZ2UvKlwiXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PlxuICAgICAgICAgICAgICAgICAgZS50YXJnZXQuZmlsZXMgJiZcbiAgICAgICAgICAgICAgICAgIGhhbmRsZUltYWdlVXBsb2FkKHByb2plY3QuaWQsIGUudGFyZ2V0LmZpbGVzKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJtYi00XCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJncmlkIGdyaWQtY29scy0zIGdhcC00XCI+XG4gICAgICAgICAgICAgICAgey8qIHtwcm9qZWN0LmltYWdlcyAmJlxuICAgICAgICAgICAgICAgICAgcHJvamVjdC5pbWFnZXMubWFwKChpbWFnZSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICA8aW1nXG4gICAgICAgICAgICAgICAgICAgICAga2V5PXtpbWFnZS5pZH1cbiAgICAgICAgICAgICAgICAgICAgICBzcmM9e2BodHRwOi8vbG9jYWxob3N0OjMwMDEke2ltYWdlLnVybH1gfVxuICAgICAgICAgICAgICAgICAgICAgIGFsdD17YFByb2plY3QgJHtwcm9qZWN0Lm5hbWV9IGltYWdlICR7aW1hZ2Uuc2VxdWVuY2V9YH1cbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJ3LWZ1bGwgaC00OCBvYmplY3QtY292ZXIgcm91bmRlZFwiXG4gICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICApKX0gKi99XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICB7LyogTmV3IEltYWdlIFNlcXVlbmNlIFZpZXdlciAqL31cbiAgICAgICAgICAgICAge3Byb2plY3QuaW1hZ2VzICYmIHByb2plY3QuaW1hZ2VzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtNFwiPlxuICAgICAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cInRleHQtbGcgZm9udC1zZW1pYm9sZCBtYi0yXCI+SW1hZ2UgU2VxdWVuY2U8L2gzPlxuICAgICAgICAgICAgICAgICAgPEltYWdlU2VxdWVuY2VWaWV3ZXJcbiAgICAgICAgICAgICAgICAgICAgaW1hZ2VzPXtwcm9qZWN0LmltYWdlcy5tYXAoKGltZykgPT4gaW1nLnVybCl9XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoPXs1MDB9XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodD17NTAwfVxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKX1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZVN0YXRlIiwidXNlRWZmZWN0IiwiYXBpIiwiSW1hZ2VTZXF1ZW5jZVZpZXdlciIsIlByb2plY3RMaXN0IiwicHJvamVjdHMiLCJzZXRQcm9qZWN0cyIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsIm5ld1Byb2plY3QiLCJzZXROZXdQcm9qZWN0IiwibmFtZSIsImRlc2NyaXB0aW9uIiwibG9hZFByb2plY3RzIiwiZGF0YSIsImdldFByb2plY3RzIiwiZXJyIiwiaGFuZGxlQ3JlYXRlUHJvamVjdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInByb2plY3QiLCJjcmVhdGVQcm9qZWN0IiwiaGFuZGxlSW1hZ2VVcGxvYWQiLCJwcm9qZWN0SWQiLCJmaWxlcyIsInVwbG9hZEltYWdlcyIsIkFycmF5IiwiZnJvbSIsImhhbmRsZURlbGV0ZVByb2plY3QiLCJkZWxldGVQcm9qZWN0IiwiZmlsdGVyIiwiaWQiLCJkaXYiLCJjbGFzc05hbWUiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInZhbHVlIiwib25DaGFuZ2UiLCJ0YXJnZXQiLCJyZXF1aXJlZCIsInRleHRhcmVhIiwiYnV0dG9uIiwibWFwIiwiaDIiLCJvbkNsaWNrIiwicCIsIm11bHRpcGxlIiwiYWNjZXB0IiwiaW1hZ2VzIiwibGVuZ3RoIiwiaDMiLCJpbWciLCJ1cmwiLCJ3aWR0aCIsImhlaWdodCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/ProjectList.tsx\n"));

/***/ })

});