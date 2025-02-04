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
exports.id = "app/api/projects/route";
exports.ids = ["app/api/projects/route"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@prisma/client");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fprojects%2Froute&page=%2Fapi%2Fprojects%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprojects%2Froute.ts&appDir=%2FUsers%2Fthakuraditya%2FDesktop%2FCG%20Viz%20studios%2Ffrontend%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fthakuraditya%2FDesktop%2FCG%20Viz%20studios%2Ffrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fprojects%2Froute&page=%2Fapi%2Fprojects%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprojects%2Froute.ts&appDir=%2FUsers%2Fthakuraditya%2FDesktop%2FCG%20Viz%20studios%2Ffrontend%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fthakuraditya%2FDesktop%2FCG%20Viz%20studios%2Ffrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Users_thakuraditya_Desktop_CG_Viz_studios_frontend_src_app_api_projects_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./src/app/api/projects/route.ts */ \"(rsc)/./src/app/api/projects/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/projects/route\",\n        pathname: \"/api/projects\",\n        filename: \"route\",\n        bundlePath: \"app/api/projects/route\"\n    },\n    resolvedPagePath: \"/Users/thakuraditya/Desktop/CG Viz studios/frontend/src/app/api/projects/route.ts\",\n    nextConfigOutput,\n    userland: _Users_thakuraditya_Desktop_CG_Viz_studios_frontend_src_app_api_projects_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZwcm9qZWN0cyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGcHJvamVjdHMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZwcm9qZWN0cyUyRnJvdXRlLnRzJmFwcERpcj0lMkZVc2VycyUyRnRoYWt1cmFkaXR5YSUyRkRlc2t0b3AlMkZDRyUyMFZpeiUyMHN0dWRpb3MlMkZmcm9udGVuZCUyRnNyYyUyRmFwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9JTJGVXNlcnMlMkZ0aGFrdXJhZGl0eWElMkZEZXNrdG9wJTJGQ0clMjBWaXolMjBzdHVkaW9zJTJGZnJvbnRlbmQmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ2lDO0FBQzlHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCIvVXNlcnMvdGhha3VyYWRpdHlhL0Rlc2t0b3AvQ0cgVml6IHN0dWRpb3MvZnJvbnRlbmQvc3JjL2FwcC9hcGkvcHJvamVjdHMvcm91dGUudHNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3Byb2plY3RzL3JvdXRlXCIsXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hcGkvcHJvamVjdHNcIixcbiAgICAgICAgZmlsZW5hbWU6IFwicm91dGVcIixcbiAgICAgICAgYnVuZGxlUGF0aDogXCJhcHAvYXBpL3Byb2plY3RzL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiL1VzZXJzL3RoYWt1cmFkaXR5YS9EZXNrdG9wL0NHIFZpeiBzdHVkaW9zL2Zyb250ZW5kL3NyYy9hcHAvYXBpL3Byb2plY3RzL3JvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fprojects%2Froute&page=%2Fapi%2Fprojects%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprojects%2Froute.ts&appDir=%2FUsers%2Fthakuraditya%2FDesktop%2FCG%20Viz%20studios%2Ffrontend%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fthakuraditya%2FDesktop%2FCG%20Viz%20studios%2Ffrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./src/app/api/projects/route.ts":
/*!***************************************!*\
  !*** ./src/app/api/projects/route.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n/* harmony import */ var _utils_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/utils/prisma */ \"(rsc)/./src/utils/prisma.ts\");\n/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! zod */ \"(rsc)/./node_modules/zod/lib/index.mjs\");\n\n\n\nconst createProjectSchema = zod__WEBPACK_IMPORTED_MODULE_2__.z.object({\n    name: zod__WEBPACK_IMPORTED_MODULE_2__.z.string().min(1),\n    description: zod__WEBPACK_IMPORTED_MODULE_2__.z.string().optional()\n});\nasync function POST(request) {\n    try {\n        const body = await request.json();\n        const { name, description } = createProjectSchema.parse(body);\n        console.log(name, description);\n        const project = await _utils_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].project.create({\n            data: {\n                name,\n                description\n            }\n        });\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(project);\n    } catch (error) {\n        console.error(\"Error creating project:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Invalid project data\"\n        }, {\n            status: 400\n        });\n    }\n}\nasync function GET() {\n    try {\n        const projects = await _utils_prisma__WEBPACK_IMPORTED_MODULE_1__[\"default\"].project.findMany({\n            include: {\n                images: true\n            },\n            orderBy: {\n                createdAt: \"desc\"\n            }\n        });\n        console.log(projects);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json(projects);\n    } catch (error) {\n        console.error(\"Error fetching projects:\", error);\n        return next_server__WEBPACK_IMPORTED_MODULE_0__.NextResponse.json({\n            error: \"Failed to fetch projects\"\n        }, {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvYXBwL2FwaS9wcm9qZWN0cy9yb3V0ZS50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUEyQztBQUNQO0FBQ1o7QUFFeEIsTUFBTUcsc0JBQXNCRCxrQ0FBQ0EsQ0FBQ0UsTUFBTSxDQUFDO0lBQ25DQyxNQUFNSCxrQ0FBQ0EsQ0FBQ0ksTUFBTSxHQUFHQyxHQUFHLENBQUM7SUFDckJDLGFBQWFOLGtDQUFDQSxDQUFDSSxNQUFNLEdBQUdHLFFBQVE7QUFDbEM7QUFFTyxlQUFlQyxLQUFLQyxPQUFnQjtJQUN6QyxJQUFJO1FBQ0YsTUFBTUMsT0FBTyxNQUFNRCxRQUFRRSxJQUFJO1FBQy9CLE1BQU0sRUFBRVIsSUFBSSxFQUFFRyxXQUFXLEVBQUUsR0FBR0wsb0JBQW9CVyxLQUFLLENBQUNGO1FBQ3hERyxRQUFRQyxHQUFHLENBQUNYLE1BQU1HO1FBRWxCLE1BQU1TLFVBQVUsTUFBTWhCLHFEQUFNQSxDQUFDZ0IsT0FBTyxDQUFDQyxNQUFNLENBQUM7WUFDMUNDLE1BQU07Z0JBQUVkO2dCQUFNRztZQUFZO1FBQzVCO1FBRUEsT0FBT1IscURBQVlBLENBQUNhLElBQUksQ0FBQ0k7SUFDM0IsRUFBRSxPQUFPRyxPQUFPO1FBQ2RMLFFBQVFLLEtBQUssQ0FBQywyQkFBMkJBO1FBQ3pDLE9BQU9wQixxREFBWUEsQ0FBQ2EsSUFBSSxDQUN0QjtZQUFFTyxPQUFPO1FBQXVCLEdBQ2hDO1lBQUVDLFFBQVE7UUFBSTtJQUVsQjtBQUNGO0FBRU8sZUFBZUM7SUFDcEIsSUFBSTtRQUNGLE1BQU1DLFdBQVcsTUFBTXRCLHFEQUFNQSxDQUFDZ0IsT0FBTyxDQUFDTyxRQUFRLENBQUM7WUFDN0NDLFNBQVM7Z0JBQ1BDLFFBQVE7WUFDVjtZQUNBQyxTQUFTO2dCQUNQQyxXQUFXO1lBQ2I7UUFDRjtRQUNBYixRQUFRQyxHQUFHLENBQUNPO1FBQ1osT0FBT3ZCLHFEQUFZQSxDQUFDYSxJQUFJLENBQUNVO0lBQzNCLEVBQUUsT0FBT0gsT0FBTztRQUNkTCxRQUFRSyxLQUFLLENBQUMsNEJBQTRCQTtRQUMxQyxPQUFPcEIscURBQVlBLENBQUNhLElBQUksQ0FDdEI7WUFBRU8sT0FBTztRQUEyQixHQUNwQztZQUFFQyxRQUFRO1FBQUk7SUFFbEI7QUFDRiIsInNvdXJjZXMiOlsiL1VzZXJzL3RoYWt1cmFkaXR5YS9EZXNrdG9wL0NHIFZpeiBzdHVkaW9zL2Zyb250ZW5kL3NyYy9hcHAvYXBpL3Byb2plY3RzL3JvdXRlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gXCJuZXh0L3NlcnZlclwiO1xuaW1wb3J0IHByaXNtYSBmcm9tIFwiQC91dGlscy9wcmlzbWFcIjtcbmltcG9ydCB7IHogfSBmcm9tIFwiem9kXCI7XG5cbmNvbnN0IGNyZWF0ZVByb2plY3RTY2hlbWEgPSB6Lm9iamVjdCh7XG4gIG5hbWU6IHouc3RyaW5nKCkubWluKDEpLFxuICBkZXNjcmlwdGlvbjogei5zdHJpbmcoKS5vcHRpb25hbCgpLFxufSk7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcXVlc3Q6IFJlcXVlc3QpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBib2R5ID0gYXdhaXQgcmVxdWVzdC5qc29uKCk7XG4gICAgY29uc3QgeyBuYW1lLCBkZXNjcmlwdGlvbiB9ID0gY3JlYXRlUHJvamVjdFNjaGVtYS5wYXJzZShib2R5KTtcbiAgICBjb25zb2xlLmxvZyhuYW1lLCBkZXNjcmlwdGlvbik7XG5cbiAgICBjb25zdCBwcm9qZWN0ID0gYXdhaXQgcHJpc21hLnByb2plY3QuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHsgbmFtZSwgZGVzY3JpcHRpb24gfSxcbiAgICB9KTtcblxuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihwcm9qZWN0KTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgY3JlYXRpbmcgcHJvamVjdDpcIiwgZXJyb3IpO1xuICAgIHJldHVybiBOZXh0UmVzcG9uc2UuanNvbihcbiAgICAgIHsgZXJyb3I6IFwiSW52YWxpZCBwcm9qZWN0IGRhdGFcIiB9LFxuICAgICAgeyBzdGF0dXM6IDQwMCB9XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKCkge1xuICB0cnkge1xuICAgIGNvbnN0IHByb2plY3RzID0gYXdhaXQgcHJpc21hLnByb2plY3QuZmluZE1hbnkoe1xuICAgICAgaW5jbHVkZToge1xuICAgICAgICBpbWFnZXM6IHRydWUsXG4gICAgICB9LFxuICAgICAgb3JkZXJCeToge1xuICAgICAgICBjcmVhdGVkQXQ6IFwiZGVzY1wiLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBjb25zb2xlLmxvZyhwcm9qZWN0cyk7XG4gICAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHByb2plY3RzKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xlLmVycm9yKFwiRXJyb3IgZmV0Y2hpbmcgcHJvamVjdHM6XCIsIGVycm9yKTtcbiAgICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24oXG4gICAgICB7IGVycm9yOiBcIkZhaWxlZCB0byBmZXRjaCBwcm9qZWN0c1wiIH0sXG4gICAgICB7IHN0YXR1czogNTAwIH1cbiAgICApO1xuICB9XG59XG4iXSwibmFtZXMiOlsiTmV4dFJlc3BvbnNlIiwicHJpc21hIiwieiIsImNyZWF0ZVByb2plY3RTY2hlbWEiLCJvYmplY3QiLCJuYW1lIiwic3RyaW5nIiwibWluIiwiZGVzY3JpcHRpb24iLCJvcHRpb25hbCIsIlBPU1QiLCJyZXF1ZXN0IiwiYm9keSIsImpzb24iLCJwYXJzZSIsImNvbnNvbGUiLCJsb2ciLCJwcm9qZWN0IiwiY3JlYXRlIiwiZGF0YSIsImVycm9yIiwic3RhdHVzIiwiR0VUIiwicHJvamVjdHMiLCJmaW5kTWFueSIsImluY2x1ZGUiLCJpbWFnZXMiLCJvcmRlckJ5IiwiY3JlYXRlZEF0Il0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./src/app/api/projects/route.ts\n");

/***/ }),

/***/ "(rsc)/./src/utils/prisma.ts":
/*!*****************************!*\
  !*** ./src/utils/prisma.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9zcmMvdXRpbHMvcHJpc21hLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUU5QyxNQUFNQyxTQUFTLElBQUlELHdEQUFZQTtBQUUvQixpRUFBZUMsTUFBTUEsRUFBQyIsInNvdXJjZXMiOlsiL1VzZXJzL3RoYWt1cmFkaXR5YS9EZXNrdG9wL0NHIFZpeiBzdHVkaW9zL2Zyb250ZW5kL3NyYy91dGlscy9wcmlzbWEudHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSBcIkBwcmlzbWEvY2xpZW50XCI7XG5cbmNvbnN0IHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKTtcblxuZXhwb3J0IGRlZmF1bHQgcHJpc21hO1xuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./src/utils/prisma.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/zod"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fprojects%2Froute&page=%2Fapi%2Fprojects%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fprojects%2Froute.ts&appDir=%2FUsers%2Fthakuraditya%2FDesktop%2FCG%20Viz%20studios%2Ffrontend%2Fsrc%2Fapp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=%2FUsers%2Fthakuraditya%2FDesktop%2FCG%20Viz%20studios%2Ffrontend&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();