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

/***/ "(app-client)/./src/components/Projects.tsx":
/*!*************************************!*\
  !*** ./src/components/Projects.tsx ***!
  \*************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Projects; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var framer_motion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! framer-motion */ \"(app-client)/./node_modules/framer-motion/dist/es/render/dom/motion.mjs\");\n/* harmony import */ var _components_css_smallScreen_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/css/smallScreen.module.css */ \"(app-client)/./src/components/css/smallScreen.module.css\");\n/* harmony import */ var _components_css_smallScreen_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_css_smallScreen_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\n\n\nconst useMediaQuery = (width)=>{\n    _s();\n    const [targetReached, setTargetReached] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const updateTarget = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)((e)=>{\n        if (e.matches) {\n            setTargetReached(true);\n        } else {\n            setTargetReached(false);\n        }\n    }, []);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const media = window.matchMedia(\"(max-width: \".concat(width, \"px)\"));\n        media.addListener(updateTarget);\n        // Check on mount (callback is not called until a change occurs)\n        if (media.matches) {\n            setTargetReached(true);\n        }\n        return ()=>media.removeListener(updateTarget);\n    }, []);\n    return targetReached;\n};\n_s(useMediaQuery, \"3YJ+medpEEIXi9i+LP+brdzS5O0=\");\nfunction Projects(param) {\n    let {} = param;\n    _s1();\n    const isBreakpoint = useMediaQuery(768);\n    const projects = [\n        {\n            name: \"Spotify shorts App\",\n            image: \"/spotify.png\",\n            description: \"Developed the cross platform app using the spotify API. Users can login using the spotify account and they do not need the seperate account. After login, users can play the music previews on the song in 4 different languages and add to their spotify playlist. Also, users can search any song present on the spotify database. This app comes with the light and dark mode.\"\n        },\n        {\n            name: \"EMS app for cross platform\",\n            image: \"/diligent-logo.png\",\n            description: \"Developed the app for the employees of the diligent security company. This app was developed with react-native and firebase as backend. In this app all the employees can login with their login details and can choose the location of their work before they clockin. After they clockin, employees can enter their daily occurrence report on it and can edit it. In this app they can reset the password and this app also store the location of the employees.\"\n        },\n        {\n            name: \"Weather app for IOS users\",\n            image: \"/weatherApp.png\",\n            description: \"Developed the IOS weather app using the weather API. Used the XCode and swift to develop the app. This app shows the weather details of user's current location and users can also search for the weather details of different locations of world. I developed this app for my learning while I was studing in the college.\"\n        },\n        {\n            name: \"Wordle game for IOS users\",\n            image: \"/wordle.png\",\n            description: \"Wordle game in XCode with the swift language with custom keyboard. In this game user will have 5 chances to guess the word and if user guess the letter right and at right then that letter will get the colour green. If user guess the letter right but at wrong place, then that letter will get the colour orange. Also, if the entered letters are not present in the word, then letter will get the colour gray. \"\n        }\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.div, {\n        initial: {\n            opacity: 0\n        },\n        whileInView: {\n            opacity: 1\n        },\n        transition: {\n            duration: 1.5\n        },\n        className: \"h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl\",\n                children: \"Projects\"\n            }, void 0, false, {\n                fileName: \"/Users/angrej/Desktop/MyDevelopments/nextApps/portfolio/portfolio-angrej/src/components/Projects.tsx\",\n                lineNumber: 68,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80\",\n                children: projects.map((project, i)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"w-screen relative top-5 xl:top-0 xl:h-[99%]  flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 \",\n                        children: [\n                            isBreakpoint ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: project.image,\n                                alt: \"\",\n                                className: project.image == \"/diligent-logo.png\" ? \" w-36 h-20 md:w-46 md:h-24 xl:w-52 xl:h-28\" : \" w-36 h-36 md:w-48 md:h-48 xl:w-52 xl:h-52\"\n                            }, void 0, false, {\n                                fileName: \"/Users/angrej/Desktop/MyDevelopments/nextApps/portfolio/portfolio-angrej/src/components/Projects.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 39\n                            }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(framer_motion__WEBPACK_IMPORTED_MODULE_2__.motion.img, {\n                                initial: {\n                                    y: -300,\n                                    opacity: 0\n                                },\n                                transition: {\n                                    duration: 1.2\n                                },\n                                whileInView: {\n                                    opacity: 1,\n                                    y: 0\n                                },\n                                viewport: {\n                                    once: true\n                                },\n                                src: project.image,\n                                alt: \"\",\n                                className: project.image == \"/diligent-logo.png\" ? \" w-40 h-24 md:w-46 md:h-24 xl:w-52 xl:h-28\" : \" w-40 h-40 md:w-48 md:h-48 xl:w-52 xl:h-52\"\n                            }, void 0, false, {\n                                fileName: \"/Users/angrej/Desktop/MyDevelopments/nextApps/portfolio/portfolio-angrej/src/components/Projects.tsx\",\n                                lineNumber: 81,\n                                columnNumber: 26\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"space-y-10 px-0 md:px-10 max-w-6xl\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                                        className: \"text-2xl md:text-4xl xl:text-4xl font-semibold text-center\",\n                                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                            className: \"underline decoration-[#F7AB0A]/50\",\n                                            children: project.name\n                                        }, void 0, false, {\n                                            fileName: \"/Users/angrej/Desktop/MyDevelopments/nextApps/portfolio/portfolio-angrej/src/components/Projects.tsx\",\n                                            lineNumber: 101,\n                                            columnNumber: 29\n                                        }, this)\n                                    }, void 0, false, {\n                                        fileName: \"/Users/angrej/Desktop/MyDevelopments/nextApps/portfolio/portfolio-angrej/src/components/Projects.tsx\",\n                                        lineNumber: 100,\n                                        columnNumber: 25\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"\".concat((_components_css_smallScreen_module_css__WEBPACK_IMPORTED_MODULE_3___default().projectText), \" text-sm md:text-base xl:text-lg text-center md:text-left\"),\n                                        children: project.description\n                                    }, void 0, false, {\n                                        fileName: \"/Users/angrej/Desktop/MyDevelopments/nextApps/portfolio/portfolio-angrej/src/components/Projects.tsx\",\n                                        lineNumber: 105,\n                                        columnNumber: 25\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/angrej/Desktop/MyDevelopments/nextApps/portfolio/portfolio-angrej/src/components/Projects.tsx\",\n                                lineNumber: 99,\n                                columnNumber: 21\n                            }, this)\n                        ]\n                    }, project.name, true, {\n                        fileName: \"/Users/angrej/Desktop/MyDevelopments/nextApps/portfolio/portfolio-angrej/src/components/Projects.tsx\",\n                        lineNumber: 74,\n                        columnNumber: 17\n                    }, this))\n            }, void 0, false, {\n                fileName: \"/Users/angrej/Desktop/MyDevelopments/nextApps/portfolio/portfolio-angrej/src/components/Projects.tsx\",\n                lineNumber: 72,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12\"\n            }, void 0, false, {\n                fileName: \"/Users/angrej/Desktop/MyDevelopments/nextApps/portfolio/portfolio-angrej/src/components/Projects.tsx\",\n                lineNumber: 114,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/angrej/Desktop/MyDevelopments/nextApps/portfolio/portfolio-angrej/src/components/Projects.tsx\",\n        lineNumber: 61,\n        columnNumber: 5\n    }, this);\n}\n_s1(Projects, \"atqENnNhZG7oggUbAQeVzcs3bJc=\", false, function() {\n    return [\n        useMediaQuery\n    ];\n});\n_c = Projects;\nvar _c;\n$RefreshReg$(_c, \"Projects\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvUHJvamVjdHMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUMrRDtBQUN6QjtBQUN1QjtBQUc3RCxNQUFNTSxnQkFBZ0IsQ0FBQ0MsUUFBZTs7SUFDbEMsTUFBTSxDQUFDQyxlQUFlQyxpQkFBaUIsR0FBR1IsK0NBQVFBLENBQUMsS0FBSztJQUV4RCxNQUFNUyxlQUFlUixrREFBV0EsQ0FBQyxDQUFDUyxJQUF5QjtRQUN6RCxJQUFJQSxFQUFFQyxPQUFPLEVBQUU7WUFDYkgsaUJBQWlCLElBQUk7UUFDdkIsT0FBTztZQUNMQSxpQkFBaUIsS0FBSztRQUN4QixDQUFDO0lBQ0gsR0FBRyxFQUFFO0lBRUxOLGdEQUFTQSxDQUFDLElBQU07UUFDZCxNQUFNVSxRQUFRQyxPQUFPQyxVQUFVLENBQUMsZUFBcUIsT0FBTlIsT0FBTTtRQUNyRE0sTUFBTUcsV0FBVyxDQUFDTjtRQUVsQixnRUFBZ0U7UUFDaEUsSUFBSUcsTUFBTUQsT0FBTyxFQUFFO1lBQ2pCSCxpQkFBaUIsSUFBSTtRQUN2QixDQUFDO1FBRUQsT0FBTyxJQUFNSSxNQUFNSSxjQUFjLENBQUNQO0lBQ3BDLEdBQUcsRUFBRTtJQUVMLE9BQU9GO0FBQ1Q7R0F4QklGO0FBNEJTLFNBQVNZLFNBQVMsS0FBUyxFQUFFO1FBQVgsRUFBUyxHQUFUOztJQUM3QixNQUFNQyxlQUFlYixjQUFjO0lBQ25DLE1BQU1jLFdBQVU7UUFDWjtZQUNJQyxNQUFLO1lBQ0xDLE9BQU07WUFDTkMsYUFBWTtRQUNoQjtRQUNBO1lBQ0lGLE1BQUs7WUFDTEMsT0FBTTtZQUNOQyxhQUFZO1FBQ2hCO1FBQ0E7WUFDSUYsTUFBSztZQUNMQyxPQUFNO1lBQ05DLGFBQVk7UUFDaEI7UUFDQTtZQUNJRixNQUFLO1lBQ0xDLE9BQU07WUFDTkMsYUFBWTtRQUNoQjtLQUVIO0lBQ0gscUJBQ0UsOERBQUNuQixxREFBVTtRQUNYcUIsU0FBUztZQUNMQyxTQUFRO1FBQ1o7UUFDQUMsYUFBYTtZQUFDRCxTQUFRO1FBQUM7UUFDdkJFLFlBQVk7WUFBQ0MsVUFBUztRQUFHO1FBQ3pCQyxXQUFVOzswQkFDTiw4REFBQ0M7Z0JBQUdELFdBQVU7MEJBQW1FOzs7Ozs7MEJBSWpGLDhEQUFDTjtnQkFBSU0sV0FBVTswQkFDVlYsU0FBU1ksR0FBRyxDQUFDLENBQUNDLFNBQVFDLGtCQUNuQiw4REFBQ1Y7d0JBQXVCTSxXQUFVOzs0QkFFNUJYLDZCQUFnQiw4REFBQ2dCO2dDQUVmQyxLQUFLSCxRQUFRWCxLQUFLO2dDQUNsQmUsS0FBSTtnQ0FDSlAsV0FBV0csUUFBUVgsS0FBSyxJQUFFLHVCQUFxQiwrQ0FBNkMsNENBQTRDOzs7OztxREFDdkksOERBQUNsQixxREFBVTtnQ0FDWnFCLFNBQVM7b0NBQ0xhLEdBQUUsQ0FBQztvQ0FDSFosU0FBUTtnQ0FDWjtnQ0FDQUUsWUFBWTtvQ0FBQ0MsVUFBUztnQ0FBRztnQ0FDekJGLGFBQWE7b0NBQ1RELFNBQVE7b0NBQ1JZLEdBQUU7Z0NBQ047Z0NBQ0FDLFVBQVU7b0NBQUNDLE1BQUssSUFBSTtnQ0FBQTtnQ0FDaEJKLEtBQUtILFFBQVFYLEtBQUs7Z0NBQ2xCZSxLQUFJO2dDQUNKUCxXQUFXRyxRQUFRWCxLQUFLLElBQUUsdUJBQXFCLCtDQUE2Qyw0Q0FBNEM7Ozs7O29DQUN6STswQ0FJUCw4REFBQ0U7Z0NBQUlNLFdBQVU7O2tEQUNYLDhEQUFDVzt3Q0FBR1gsV0FBVTtrREFDViw0RUFBQ1k7NENBQUtaLFdBQVU7c0RBQXFDRyxRQUFRWixJQUFJOzs7Ozs7Ozs7OztrREFJckUsOERBQUNzQjt3Q0FBRWIsV0FBVyxHQUFzQixPQUFuQnpCLDJGQUFrQixFQUFDO2tEQUMvQjRCLFFBQVFWLFdBQVc7Ozs7Ozs7Ozs7Ozs7dUJBaEN0QlUsUUFBUVosSUFBSTs7Ozs7Ozs7OzswQkF3QzlCLDhEQUFDRztnQkFBSU0sV0FBVTs7Ozs7Ozs7Ozs7O0FBTXZCLENBQUM7SUFyRnVCWjs7UUFDQ1o7OztLQUREWSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Qcm9qZWN0cy50c3g/OTI2NSJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuaW1wb3J0IFJlYWN0LHsgdXNlU3RhdGUsIHVzZUNhbGxiYWNrLCB1c2VFZmZlY3QgfSAgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBtb3Rpb24gfSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9jb21wb25lbnRzL2Nzcy9zbWFsbFNjcmVlbi5tb2R1bGUuY3NzXCJcblxuXG5jb25zdCB1c2VNZWRpYVF1ZXJ5ID0gKHdpZHRoOiBhbnkpID0+IHtcbiAgICBjb25zdCBbdGFyZ2V0UmVhY2hlZCwgc2V0VGFyZ2V0UmVhY2hlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG4gIFxuICAgIGNvbnN0IHVwZGF0ZVRhcmdldCA9IHVzZUNhbGxiYWNrKChlOiB7IG1hdGNoZXM6IGFueTsgfSkgPT4ge1xuICAgICAgaWYgKGUubWF0Y2hlcykge1xuICAgICAgICBzZXRUYXJnZXRSZWFjaGVkKHRydWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc2V0VGFyZ2V0UmVhY2hlZChmYWxzZSk7XG4gICAgICB9XG4gICAgfSwgW10pO1xuICBcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgICAgY29uc3QgbWVkaWEgPSB3aW5kb3cubWF0Y2hNZWRpYShgKG1heC13aWR0aDogJHt3aWR0aH1weClgKTtcbiAgICAgIG1lZGlhLmFkZExpc3RlbmVyKHVwZGF0ZVRhcmdldCk7XG4gIFxuICAgICAgLy8gQ2hlY2sgb24gbW91bnQgKGNhbGxiYWNrIGlzIG5vdCBjYWxsZWQgdW50aWwgYSBjaGFuZ2Ugb2NjdXJzKVxuICAgICAgaWYgKG1lZGlhLm1hdGNoZXMpIHtcbiAgICAgICAgc2V0VGFyZ2V0UmVhY2hlZCh0cnVlKTtcbiAgICAgIH1cbiAgXG4gICAgICByZXR1cm4gKCkgPT4gbWVkaWEucmVtb3ZlTGlzdGVuZXIodXBkYXRlVGFyZ2V0KTtcbiAgICB9LCBbXSk7XG4gIFxuICAgIHJldHVybiB0YXJnZXRSZWFjaGVkO1xuICB9O1xuXG50eXBlIFByb3BzID0ge31cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUHJvamVjdHMoe306IFByb3BzKSB7XG4gICAgY29uc3QgaXNCcmVha3BvaW50ID0gdXNlTWVkaWFRdWVyeSg3NjgpO1xuICAgIGNvbnN0IHByb2plY3RzID1bXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6XCJTcG90aWZ5IHNob3J0cyBBcHBcIixcbiAgICAgICAgICAgIGltYWdlOlwiL3Nwb3RpZnkucG5nXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjpcIkRldmVsb3BlZCB0aGUgY3Jvc3MgcGxhdGZvcm0gYXBwIHVzaW5nIHRoZSBzcG90aWZ5IEFQSS4gVXNlcnMgY2FuIGxvZ2luIHVzaW5nIHRoZSBzcG90aWZ5IGFjY291bnQgYW5kIHRoZXkgZG8gbm90IG5lZWQgdGhlIHNlcGVyYXRlIGFjY291bnQuIEFmdGVyIGxvZ2luLCB1c2VycyBjYW4gcGxheSB0aGUgbXVzaWMgcHJldmlld3Mgb24gdGhlIHNvbmcgaW4gNCBkaWZmZXJlbnQgbGFuZ3VhZ2VzIGFuZCBhZGQgdG8gdGhlaXIgc3BvdGlmeSBwbGF5bGlzdC4gQWxzbywgdXNlcnMgY2FuIHNlYXJjaCBhbnkgc29uZyBwcmVzZW50IG9uIHRoZSBzcG90aWZ5IGRhdGFiYXNlLiBUaGlzIGFwcCBjb21lcyB3aXRoIHRoZSBsaWdodCBhbmQgZGFyayBtb2RlLlwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6XCJFTVMgYXBwIGZvciBjcm9zcyBwbGF0Zm9ybVwiLFxuICAgICAgICAgICAgaW1hZ2U6XCIvZGlsaWdlbnQtbG9nby5wbmdcIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOlwiRGV2ZWxvcGVkIHRoZSBhcHAgZm9yIHRoZSBlbXBsb3llZXMgb2YgdGhlIGRpbGlnZW50IHNlY3VyaXR5IGNvbXBhbnkuIFRoaXMgYXBwIHdhcyBkZXZlbG9wZWQgd2l0aCByZWFjdC1uYXRpdmUgYW5kIGZpcmViYXNlIGFzIGJhY2tlbmQuIEluIHRoaXMgYXBwIGFsbCB0aGUgZW1wbG95ZWVzIGNhbiBsb2dpbiB3aXRoIHRoZWlyIGxvZ2luIGRldGFpbHMgYW5kIGNhbiBjaG9vc2UgdGhlIGxvY2F0aW9uIG9mIHRoZWlyIHdvcmsgYmVmb3JlIHRoZXkgY2xvY2tpbi4gQWZ0ZXIgdGhleSBjbG9ja2luLCBlbXBsb3llZXMgY2FuIGVudGVyIHRoZWlyIGRhaWx5IG9jY3VycmVuY2UgcmVwb3J0IG9uIGl0IGFuZCBjYW4gZWRpdCBpdC4gSW4gdGhpcyBhcHAgdGhleSBjYW4gcmVzZXQgdGhlIHBhc3N3b3JkIGFuZCB0aGlzIGFwcCBhbHNvIHN0b3JlIHRoZSBsb2NhdGlvbiBvZiB0aGUgZW1wbG95ZWVzLlwiXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6XCJXZWF0aGVyIGFwcCBmb3IgSU9TIHVzZXJzXCIsXG4gICAgICAgICAgICBpbWFnZTpcIi93ZWF0aGVyQXBwLnBuZ1wiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246XCJEZXZlbG9wZWQgdGhlIElPUyB3ZWF0aGVyIGFwcCB1c2luZyB0aGUgd2VhdGhlciBBUEkuIFVzZWQgdGhlIFhDb2RlIGFuZCBzd2lmdCB0byBkZXZlbG9wIHRoZSBhcHAuIFRoaXMgYXBwIHNob3dzIHRoZSB3ZWF0aGVyIGRldGFpbHMgb2YgdXNlcidzIGN1cnJlbnQgbG9jYXRpb24gYW5kIHVzZXJzIGNhbiBhbHNvIHNlYXJjaCBmb3IgdGhlIHdlYXRoZXIgZGV0YWlscyBvZiBkaWZmZXJlbnQgbG9jYXRpb25zIG9mIHdvcmxkLiBJIGRldmVsb3BlZCB0aGlzIGFwcCBmb3IgbXkgbGVhcm5pbmcgd2hpbGUgSSB3YXMgc3R1ZGluZyBpbiB0aGUgY29sbGVnZS5cIlxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOlwiV29yZGxlIGdhbWUgZm9yIElPUyB1c2Vyc1wiLFxuICAgICAgICAgICAgaW1hZ2U6XCIvd29yZGxlLnBuZ1wiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246XCJXb3JkbGUgZ2FtZSBpbiBYQ29kZSB3aXRoIHRoZSBzd2lmdCBsYW5ndWFnZSB3aXRoIGN1c3RvbSBrZXlib2FyZC4gSW4gdGhpcyBnYW1lIHVzZXIgd2lsbCBoYXZlIDUgY2hhbmNlcyB0byBndWVzcyB0aGUgd29yZCBhbmQgaWYgdXNlciBndWVzcyB0aGUgbGV0dGVyIHJpZ2h0IGFuZCBhdCByaWdodCB0aGVuIHRoYXQgbGV0dGVyIHdpbGwgZ2V0IHRoZSBjb2xvdXIgZ3JlZW4uIElmIHVzZXIgZ3Vlc3MgdGhlIGxldHRlciByaWdodCBidXQgYXQgd3JvbmcgcGxhY2UsIHRoZW4gdGhhdCBsZXR0ZXIgd2lsbCBnZXQgdGhlIGNvbG91ciBvcmFuZ2UuIEFsc28sIGlmIHRoZSBlbnRlcmVkIGxldHRlcnMgYXJlIG5vdCBwcmVzZW50IGluIHRoZSB3b3JkLCB0aGVuIGxldHRlciB3aWxsIGdldCB0aGUgY29sb3VyIGdyYXkuIFwiXG4gICAgICAgIH0sXG4gICAgICAgIFxuICAgIF1cbiAgcmV0dXJuIChcbiAgICA8bW90aW9uLmRpdiBcbiAgICBpbml0aWFsPXt7XG4gICAgICAgIG9wYWNpdHk6MFxuICAgIH19XG4gICAgd2hpbGVJblZpZXc9e3tvcGFjaXR5OjF9fVxuICAgIHRyYW5zaXRpb249e3tkdXJhdGlvbjoxLjV9fVxuICAgIGNsYXNzTmFtZT0naC1zY3JlZW4gcmVsYXRpdmUgZmxleCBvdmVyZmxvdy1oaWRkZW4gZmxleC1jb2wgdGV4dC1sZWZ0IG1kOmZsZXgtcm93IG1heC13LWZ1bGwganVzdGlmeS1ldmVubHkgbXgtYXV0byBpdGVtcy1jZW50ZXIgei0wJz5cbiAgICAgICAgPGgzIGNsYXNzTmFtZT0nYWJzb2x1dGUgdG9wLTI0IHVwcGVyY2FzZSB0cmFja2luZy1bMjBweF0gdGV4dC1ncmF5LTUwMCB0ZXh0LTJ4bCc+XG4gICAgICAgICAgICBQcm9qZWN0c1xuICAgICAgICA8L2gzPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSdyZWxhdGl2ZSB3LWZ1bGwgZmxleCBvdmVyZmxvdy14LXNjcm9sbCBvdmVyZmxvdy15LWhpZGRlbiBzbmFwLXggc25hcC1tYW5kYXRvcnkgei0yMCBzY3JvbGxiYXIgc2Nyb2xsYmFyLXRyYWNrLWdyYXktNDAwLzIwIHNjcm9sbGJhci10aHVtYi1bI0Y3QUIwQV0vODAnPlxuICAgICAgICAgICAge3Byb2plY3RzLm1hcCgocHJvamVjdCxpKT0+KFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtwcm9qZWN0Lm5hbWV9IGNsYXNzTmFtZT0ndy1zY3JlZW4gcmVsYXRpdmUgdG9wLTUgeGw6dG9wLTAgeGw6aC1bOTklXSAgZmxleC1zaHJpbmstMCBzbmFwLWNlbnRlciBmbGV4IGZsZXgtY29sIHNwYWNlLXktNSBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgcC0yMCBtZDpwLTQ0ICc+XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB7IGlzQnJlYWtwb2ludCA/ICg8aW1nXG4gICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e3Byb2plY3QuaW1hZ2V9XG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtwcm9qZWN0LmltYWdlPT1cIi9kaWxpZ2VudC1sb2dvLnBuZ1wiPycgdy0zNiBoLTIwIG1kOnctNDYgbWQ6aC0yNCB4bDp3LTUyIHhsOmgtMjgnOicgdy0zNiBoLTM2IG1kOnctNDggbWQ6aC00OCB4bDp3LTUyIHhsOmgtNTInfVxuICAgICAgICAgICAgICAgICAgICAvPik6KDxtb3Rpb24uaW1nXG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsPXt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTotMzAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6MFxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRyYW5zaXRpb249e3tkdXJhdGlvbjoxLjJ9fVxuICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGVJblZpZXc9e3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OjEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTowXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgdmlld3BvcnQ9e3tvbmNlOnRydWV9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17cHJvamVjdC5pbWFnZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17cHJvamVjdC5pbWFnZT09XCIvZGlsaWdlbnQtbG9nby5wbmdcIj8nIHctNDAgaC0yNCBtZDp3LTQ2IG1kOmgtMjQgeGw6dy01MiB4bDpoLTI4JzonIHctNDAgaC00MCBtZDp3LTQ4IG1kOmgtNDggeGw6dy01MiB4bDpoLTUyJ31cbiAgICAgICAgICAgICAgICAgICAgICAgIC8+KX1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSdzcGFjZS15LTEwIHB4LTAgbWQ6cHgtMTAgbWF4LXctNnhsJz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9J3RleHQtMnhsIG1kOnRleHQtNHhsIHhsOnRleHQtNHhsIGZvbnQtc2VtaWJvbGQgdGV4dC1jZW50ZXInPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndW5kZXJsaW5lIGRlY29yYXRpb24tWyNGN0FCMEFdLzUwJz57cHJvamVjdC5uYW1lfTwvc3Bhbj4gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2g0PlxuXG4gICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2Ake3N0eWxlcy5wcm9qZWN0VGV4dH0gdGV4dC1zbSBtZDp0ZXh0LWJhc2UgeGw6dGV4dC1sZyB0ZXh0LWNlbnRlciBtZDp0ZXh0LWxlZnRgfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvamVjdC5kZXNjcmlwdGlvbn1cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cblxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndy1mdWxsIGFic29sdXRlIHRvcC1bMzAlXSBiZy1bI0Y3QUIwQV0vMTAgbGVmdC0wIGgtWzUwMHB4XSAtc2tldy15LTEyJz5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgICBcbiAgICA8L21vdGlvbi5kaXY+XG4gIClcbn0iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUNhbGxiYWNrIiwidXNlRWZmZWN0IiwibW90aW9uIiwic3R5bGVzIiwidXNlTWVkaWFRdWVyeSIsIndpZHRoIiwidGFyZ2V0UmVhY2hlZCIsInNldFRhcmdldFJlYWNoZWQiLCJ1cGRhdGVUYXJnZXQiLCJlIiwibWF0Y2hlcyIsIm1lZGlhIiwid2luZG93IiwibWF0Y2hNZWRpYSIsImFkZExpc3RlbmVyIiwicmVtb3ZlTGlzdGVuZXIiLCJQcm9qZWN0cyIsImlzQnJlYWtwb2ludCIsInByb2plY3RzIiwibmFtZSIsImltYWdlIiwiZGVzY3JpcHRpb24iLCJkaXYiLCJpbml0aWFsIiwib3BhY2l0eSIsIndoaWxlSW5WaWV3IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwiY2xhc3NOYW1lIiwiaDMiLCJtYXAiLCJwcm9qZWN0IiwiaSIsImltZyIsInNyYyIsImFsdCIsInkiLCJ2aWV3cG9ydCIsIm9uY2UiLCJoNCIsInNwYW4iLCJwIiwicHJvamVjdFRleHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./src/components/Projects.tsx\n"));

/***/ })

});