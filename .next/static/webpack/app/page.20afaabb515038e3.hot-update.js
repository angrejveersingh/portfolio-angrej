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

/***/ "(app-client)/./src/components/ContactMe.tsx":
/*!**************************************!*\
  !*** ./src/components/ContactMe.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ContactMe; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @heroicons/react/24/solid */ \"(app-client)/./node_modules/@heroicons/react/24/solid/esm/PhoneIcon.js\");\n/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @heroicons/react/24/solid */ \"(app-client)/./node_modules/@heroicons/react/24/solid/esm/EnvelopeIcon.js\");\n/* harmony import */ var _heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @heroicons/react/24/solid */ \"(app-client)/./node_modules/@heroicons/react/24/solid/esm/MapPinIcon.js\");\n/* harmony import */ var _emailjs_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emailjs/browser */ \"(app-client)/./node_modules/@emailjs/browser/es/index.js\");\n/* harmony import */ var _components_css_smallScreen_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/css/smallScreen.module.css */ \"(app-client)/./src/components/css/smallScreen.module.css\");\n/* harmony import */ var _components_css_smallScreen_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_components_css_smallScreen_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction ContactMe(param) {\n    let {} = param;\n    _s();\n    const form = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)();\n    const [sentEmail, setSentEmail] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const sendEmail = (e)=>{\n        setSentEmail(1);\n        e.preventDefault();\n        _emailjs_browser__WEBPACK_IMPORTED_MODULE_2__[\"default\"].sendForm(\"\".concat(\"service_1ax5sgh\"), \"\".concat(\"template_9cqyrjk\"), e.target, \"\".concat(\"GKBQ4rgl_V94HGFcA\")).then((result)=>{\n            console.log(form.current);\n        }, (error)=>{\n            console.log(error.text);\n        });\n    };\n    // const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();\n    // const onSubmit: SubmitHandler<Inputs> = (formData) => {\n    //     window.location.href = `mailto:asingh6400@gmail.com?subject=${formData.subject}&body=Hi my name is ${formData.name}. ${formData.message}. My email is ${formData.email}`;\n    // };  \n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                className: \"\".concat((_components_css_smallScreen_module_css__WEBPACK_IMPORTED_MODULE_3___default().education), \" absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl\"),\n                children: \"Contact\"\n            }, void 0, false, {\n                fileName: \"/Users/angrej/Desktop/MyDevelopments/nextApps/portfolio/portfolio-angrej/src/components/ContactMe.tsx\",\n                lineNumber: 39,\n                columnNumber: 9\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"\".concat((_components_css_smallScreen_module_css__WEBPACK_IMPORTED_MODULE_3___default().contactBody), \" flex absolute top-36 flex-col space-y-6 md:space-y-8 xl:space-y-10 \"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h4\", {\n                        className: \"text-lg md:text-4xl xl:text-4xl font-semibold text-center\",\n                        children: [\n                            \"I have got just what you need.\",\n                            \" \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                className: \"decoration-[#F7AB0A]/50 underline\",\n                                children: \"Lets Talk\"\n                            }, void 0, false, {\n                                fileName: \"/Users/angrej/Desktop/MyDevelopments/nextApps/portfolio/portfolio-angrej/src/components/ContactMe.tsx\",\n                                lineNumber: 46,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/angrej/Desktop/MyDevelopments/nextApps/portfolio/portfolio-angrej/src/components/ContactMe.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 13\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"space-y-6 md:space-y-8 xl:space-y-10\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\".concat((_components_css_smallScreen_module_css__WEBPACK_IMPORTED_MODULE_3___default().contactInfo), \" flex items-center space-x-5 justify-center\"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                                        className: \"text-[#F7AB0A] h-5 w-5 md:w-7 md:h-7 xl:h-7  xl:w-7  animate-pulse\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/angrej/Desktop/MyDevelopments/nextApps/portfolio/portfolio-angrej/src/components/ContactMe.tsx\",\n                                        lineNumber: 50,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-lg md:text-2xl xl:text-2xl\",\n                                        children: \"+14372564004\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/angrej/Desktop/MyDevelopments/nextApps/portfolio/portfolio-angrej/src/components/ContactMe.tsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/angrej/Desktop/MyDevelopments/nextApps/portfolio/portfolio-angrej/src/components/ContactMe.tsx\",\n                                lineNumber: 49,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\".concat((_components_css_smallScreen_module_css__WEBPACK_IMPORTED_MODULE_3___default().contactInfo), \" flex items-center space-x-5 justify-center\"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                                        className: \"text-[#F7AB0A] h-5 w-5 md:w-7 md:h-7 xl:h-7  xl:w-7 animate-pulse\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/angrej/Desktop/MyDevelopments/nextApps/portfolio/portfolio-angrej/src/components/ContactMe.tsx\",\n                                        lineNumber: 55,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-lg md:text-2xl xl:text-2xl\",\n                                        children: \"asingh6400@gmail.com\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/angrej/Desktop/MyDevelopments/nextApps/portfolio/portfolio-angrej/src/components/ContactMe.tsx\",\n                                        lineNumber: 56,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/angrej/Desktop/MyDevelopments/nextApps/portfolio/portfolio-angrej/src/components/ContactMe.tsx\",\n                                lineNumber: 54,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"\".concat((_components_css_smallScreen_module_css__WEBPACK_IMPORTED_MODULE_3___default().contactInfo), \" flex items-center space-x-5 justify-center\"),\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_heroicons_react_24_solid__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                                        className: \"text-[#F7AB0A] h-5 w-5 md:w-7 md:h-7 xl:h-7  xl:w-7 animate-pulse\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/angrej/Desktop/MyDevelopments/nextApps/portfolio/portfolio-angrej/src/components/ContactMe.tsx\",\n                                        lineNumber: 60,\n                                        columnNumber: 17\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        className: \"text-lg md:text-2xl xl:text-2xl\",\n                                        children: \"Brampton, Ontario\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/angrej/Desktop/MyDevelopments/nextApps/portfolio/portfolio-angrej/src/components/ContactMe.tsx\",\n                                        lineNumber: 61,\n                                        columnNumber: 17\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/angrej/Desktop/MyDevelopments/nextApps/portfolio/portfolio-angrej/src/components/ContactMe.tsx\",\n                                lineNumber: 59,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/angrej/Desktop/MyDevelopments/nextApps/portfolio/portfolio-angrej/src/components/ContactMe.tsx\",\n                        lineNumber: 48,\n                        columnNumber: 13\n                    }, this),\n                    sentEmail == 0 ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: sendEmail,\n                        className: \"flex flex-col space-y-2 w-fit mx-auto\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"flex space-x-2\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        required: true,\n                                        placeholder: \"Name\",\n                                        className: \"contactInput w-40 md:w-[270px] md:h-[57px] xl:w-[270px] xl:h-[57px]\",\n                                        type: \"text\",\n                                        name: \"form_name\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/angrej/Desktop/MyDevelopments/nextApps/portfolio/portfolio-angrej/src/components/ContactMe.tsx\",\n                                        lineNumber: 70,\n                                        columnNumber: 21\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                        required: true,\n                                        placeholder: \"Email\",\n                                        className: \"contactInput w-40 md:w-[270px] md:h-[57px] xl:w-[270px] xl:h-[57px]\",\n                                        type: \"email\",\n                                        name: \"form_email\"\n                                    }, void 0, false, {\n                                        fileName: \"/Users/angrej/Desktop/MyDevelopments/nextApps/portfolio/portfolio-angrej/src/components/ContactMe.tsx\",\n                                        lineNumber: 71,\n                                        columnNumber: 21\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/Users/angrej/Desktop/MyDevelopments/nextApps/portfolio/portfolio-angrej/src/components/ContactMe.tsx\",\n                                lineNumber: 69,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                required: true,\n                                placeholder: \"Subject\",\n                                className: \"contactInput\",\n                                type: \"text\",\n                                name: \"form_subject\"\n                            }, void 0, false, {\n                                fileName: \"/Users/angrej/Desktop/MyDevelopments/nextApps/portfolio/portfolio-angrej/src/components/ContactMe.tsx\",\n                                lineNumber: 74,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"textarea\", {\n                                required: true,\n                                placeholder: \"Message\",\n                                className: \"contactInput\",\n                                name: \"message\"\n                            }, void 0, false, {\n                                fileName: \"/Users/angrej/Desktop/MyDevelopments/nextApps/portfolio/portfolio-angrej/src/components/ContactMe.tsx\",\n                                lineNumber: 75,\n                                columnNumber: 17\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: \"bg-[#F7AB0A] py-5 px-10 rounded-md text-black font-bold text-lg\",\n                                children: \"Submit\"\n                            }, void 0, false, {\n                                fileName: \"/Users/angrej/Desktop/MyDevelopments/nextApps/portfolio/portfolio-angrej/src/components/ContactMe.tsx\",\n                                lineNumber: 76,\n                                columnNumber: 17\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/Users/angrej/Desktop/MyDevelopments/nextApps/portfolio/portfolio-angrej/src/components/ContactMe.tsx\",\n                        lineNumber: 68,\n                        columnNumber: 32\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"text-3xl md:text-4xl xl:text-4xl font-semibold text-center\",\n                        children: \"Thank you for contacting\"\n                    }, void 0, false, {\n                        fileName: \"/Users/angrej/Desktop/MyDevelopments/nextApps/portfolio/portfolio-angrej/src/components/ContactMe.tsx\",\n                        lineNumber: 77,\n                        columnNumber: 23\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/angrej/Desktop/MyDevelopments/nextApps/portfolio/portfolio-angrej/src/components/ContactMe.tsx\",\n                lineNumber: 43,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/angrej/Desktop/MyDevelopments/nextApps/portfolio/portfolio-angrej/src/components/ContactMe.tsx\",\n        lineNumber: 38,\n        columnNumber: 5\n    }, this);\n}\n_s(ContactMe, \"6ZyhpDZEEZIFgmaoFXaCK1nJ+40=\");\n_c = ContactMe;\nvar _c;\n$RefreshReg$(_c, \"ContactMe\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vc3JjL2NvbXBvbmVudHMvQ29udGFjdE1lLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFDZ0Q7QUFDNkI7QUFFdEM7QUFDdUI7QUFZL0MsU0FBU1EsVUFBVSxLQUFTLEVBQUU7UUFBWCxFQUFTLEdBQVQ7O0lBQzlCLE1BQU1DLE9BQU9SLDZDQUFNQTtJQUNuQixNQUFNLENBQUNTLFdBQVdDLGFBQWEsR0FBR1QsK0NBQVFBLENBQUM7SUFFM0MsTUFBTVUsWUFBWSxDQUFDQyxJQUFVO1FBQ3pCRixhQUFhO1FBQ2JFLEVBQUVDLGNBQWM7UUFFaEJSLGlFQUFnQixDQUFDLEdBQTJCLE9BQXhCVSxpQkFBdUIsR0FBSSxHQUE0QixPQUF6QkEsa0JBQXdCLEdBQUlILEVBQUVPLE1BQU0sRUFBRSxHQUEwQixPQUF2QkosbUJBQXNCLEdBQzlHTSxJQUFJLENBQUMsQ0FBQ0MsU0FBVztZQUNkQyxRQUFRQyxHQUFHLENBQUNoQixLQUFLaUIsT0FBTztRQUM1QixHQUFHLENBQUNDLFFBQVU7WUFDVkgsUUFBUUMsR0FBRyxDQUFDRSxNQUFNQyxJQUFJO1FBQzFCO0lBQ0o7SUFDRixzRkFBc0Y7SUFDdEYsMERBQTBEO0lBQzFELGdMQUFnTDtJQUNoTCxPQUFPO0lBQ1QscUJBQ0UsOERBQUNDO1FBQUtDLFdBQVU7OzBCQUNaLDhEQUFDQztnQkFBR0QsV0FBVyxHQUFvQixPQUFqQnZCLHlGQUFnQixFQUFDOzBCQUFvRTs7Ozs7OzBCQUl2Ryw4REFBQ3NCO2dCQUFJQyxXQUFXLEdBQXNCLE9BQW5CdkIsMkZBQWtCLEVBQUM7O2tDQUNsQyw4REFBQzJCO3dCQUFHSixXQUFVOzs0QkFBNEQ7NEJBQ3ZDOzBDQUMvQiw4REFBQ0s7Z0NBQUtMLFdBQVU7MENBQW9DOzs7Ozs7Ozs7Ozs7a0NBRXhELDhEQUFDRDt3QkFBSUMsV0FBWTs7MENBQ2IsOERBQUNEO2dDQUFJQyxXQUFXLEdBQXNCLE9BQW5CdkIsMkZBQWtCLEVBQUM7O2tEQUN0Qyw4REFBQ0osaUVBQVNBO3dDQUFDMkIsV0FBVTs7Ozs7O2tEQUNyQiw4REFBQ087d0NBQUVQLFdBQVU7a0RBQWtDOzs7Ozs7Ozs7Ozs7MENBRy9DLDhEQUFDRDtnQ0FBSUMsV0FBVyxHQUFzQixPQUFuQnZCLDJGQUFrQixFQUFDOztrREFDdEMsOERBQUNGLGlFQUFZQTt3Q0FBQ3lCLFdBQVU7Ozs7OztrREFDeEIsOERBQUNPO3dDQUFFUCxXQUFVO2tEQUFrQzs7Ozs7Ozs7Ozs7OzBDQUcvQyw4REFBQ0Q7Z0NBQUlDLFdBQVcsR0FBc0IsT0FBbkJ2QiwyRkFBa0IsRUFBQzs7a0RBQ3RDLDhEQUFDSCxpRUFBVUE7d0NBQUMwQixXQUFVOzs7Ozs7a0RBQ3RCLDhEQUFDTzt3Q0FBRVAsV0FBVTtrREFBa0M7Ozs7Ozs7Ozs7Ozs7Ozs7OztvQkFPbERwQixhQUFhLGtCQUFLLDhEQUFDRDt3QkFBTTZCLFVBQVUxQjt3QkFBV2tCLFdBQVU7OzBDQUNyRCw4REFBQ0Q7Z0NBQUlDLFdBQVU7O2tEQUNYLDhEQUFDUzt3Q0FBTUMsUUFBUTt3Q0FBQ0MsYUFBWTt3Q0FBT1gsV0FBVTt3Q0FBdUVZLE1BQUs7d0NBQU9DLE1BQUs7Ozs7OztrREFDckksOERBQUNKO3dDQUFNQyxRQUFRO3dDQUFDQyxhQUFZO3dDQUFRWCxXQUFVO3dDQUFzRVksTUFBSzt3Q0FBUUMsTUFBSzs7Ozs7Ozs7Ozs7OzBDQUcxSSw4REFBQ0o7Z0NBQU1DLFFBQVE7Z0NBQUNDLGFBQVk7Z0NBQVdYLFdBQVU7Z0NBQWVZLE1BQUs7Z0NBQU9DLE1BQUs7Ozs7OzswQ0FDakYsOERBQUNDO2dDQUFTSixRQUFRO2dDQUFDQyxhQUFZO2dDQUFVWCxXQUFVO2dDQUFlYSxNQUFLOzs7Ozs7MENBQ3ZFLDhEQUFDRTtnQ0FBT2YsV0FBVTswQ0FBa0U7Ozs7Ozs7Ozs7OzZDQUM5RSw4REFBQ087d0JBQUVQLFdBQVU7a0NBQTZEOzs7Ozs0QkFBNEI7Ozs7Ozs7Ozs7Ozs7QUFLNUgsQ0FBQztHQWhFdUJ0QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9Db250YWN0TWUudHN4PzJkMzkiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCJcbmltcG9ydCBSZWFjdCwgeyB1c2VSZWYsIHVzZVN0YXRlIH0gIGZyb20gJ3JlYWN0J1xuaW1wb3J0IHtQaG9uZUljb24sIE1hcFBpbkljb24sIEVudmVsb3BlSWNvbn0gZnJvbSBcIkBoZXJvaWNvbnMvcmVhY3QvMjQvc29saWRcIlxuaW1wb3J0IHsgdXNlRm9ybSwgU3VibWl0SGFuZGxlciB9IGZyb20gXCJyZWFjdC1ob29rLWZvcm1cIjtcbmltcG9ydCBlbWFpbGpzIGZyb20gJ0BlbWFpbGpzL2Jyb3dzZXInO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vY29tcG9uZW50cy9jc3Mvc21hbGxTY3JlZW4ubW9kdWxlLmNzc1wiO1xuXG5cbnR5cGUgSW5wdXRzID0ge1xuICBuYW1lOiBzdHJpbmcsXG4gIGVtYWlsOiBzdHJpbmcsXG4gIHN1YmplY3Q6c3RyaW5nLFxuICBtZXNzYWdlOiBzdHJpbmdcbn07XG5cbnR5cGUgUHJvcHMgPSB7fVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb250YWN0TWUoe306IFByb3BzKSB7XG4gICAgY29uc3QgZm9ybSA9IHVzZVJlZigpO1xuICAgIGNvbnN0IFtzZW50RW1haWwsIHNldFNlbnRFbWFpbF0gPSB1c2VTdGF0ZSgwKTtcblxuICAgIGNvbnN0IHNlbmRFbWFpbCA9IChlOmFueSkgPT4ge1xuICAgICAgICBzZXRTZW50RW1haWwoMSk7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICBcbiAgICAgICAgZW1haWxqcy5zZW5kRm9ybShgJHtwcm9jZXNzLmVudi5TRVJWSUNFX0tFWX1gLCBgJHtwcm9jZXNzLmVudi5URU1QTEVURV9LRVl9YCwgZS50YXJnZXQsIGAke3Byb2Nlc3MuZW52LlBST0pFQ1RfSUR9YClcbiAgICAgICAgICAudGhlbigocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGZvcm0uY3VycmVudCk7XG4gICAgICAgICAgfSwgKGVycm9yKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycm9yLnRleHQpO1xuICAgICAgICAgIH0pO1xuICAgICAgfTtcbiAgICAvLyBjb25zdCB7IHJlZ2lzdGVyLCBoYW5kbGVTdWJtaXQsIHdhdGNoLCBmb3JtU3RhdGU6IHsgZXJyb3JzIH0gfSA9IHVzZUZvcm08SW5wdXRzPigpO1xuICAgIC8vIGNvbnN0IG9uU3VibWl0OiBTdWJtaXRIYW5kbGVyPElucHV0cz4gPSAoZm9ybURhdGEpID0+IHtcbiAgICAvLyAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBgbWFpbHRvOmFzaW5naDY0MDBAZ21haWwuY29tP3N1YmplY3Q9JHtmb3JtRGF0YS5zdWJqZWN0fSZib2R5PUhpIG15IG5hbWUgaXMgJHtmb3JtRGF0YS5uYW1lfS4gJHtmb3JtRGF0YS5tZXNzYWdlfS4gTXkgZW1haWwgaXMgJHtmb3JtRGF0YS5lbWFpbH1gO1xuICAgIC8vIH07ICBcbiAgcmV0dXJuIChcbiAgICA8ZGl2ICBjbGFzc05hbWU9J2gtc2NyZWVuIGZsZXggcmVsYXRpdmUgZmxleC1jb2wgdGV4dC1jZW50ZXIgbWQ6dGV4dC1sZWZ0IG1kOmZsZXgtcm93IG1heC13LTd4bCBweC0xMCBqdXN0aWZ5LWV2ZW5seSBteC1hdXRvIGl0ZW1zLWNlbnRlcic+XG4gICAgICAgIDxoMyBjbGFzc05hbWU9e2Ake3N0eWxlcy5lZHVjYXRpb259IGFic29sdXRlIHRvcC0yNCB1cHBlcmNhc2UgdHJhY2tpbmctWzIwcHhdIHRleHQtZ3JheS01MDAgdGV4dC0yeGxgfT5cbiAgICAgICAgQ29udGFjdFxuICAgICAgICA8L2gzPlxuXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY29udGFjdEJvZHl9IGZsZXggYWJzb2x1dGUgdG9wLTM2IGZsZXgtY29sIHNwYWNlLXktNiBtZDpzcGFjZS15LTggeGw6c3BhY2UteS0xMCBgfT5cbiAgICAgICAgICAgIDxoNCBjbGFzc05hbWU9J3RleHQtbGcgbWQ6dGV4dC00eGwgeGw6dGV4dC00eGwgZm9udC1zZW1pYm9sZCB0ZXh0LWNlbnRlcic+XG4gICAgICAgICAgICAgICAgSSBoYXZlIGdvdCBqdXN0IHdoYXQgeW91IG5lZWQue1wiIFwifVxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0nZGVjb3JhdGlvbi1bI0Y3QUIwQV0vNTAgdW5kZXJsaW5lJz5MZXRzIFRhbGs8L3NwYW4+XG4gICAgICAgICAgICA8L2g0PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2BzcGFjZS15LTYgbWQ6c3BhY2UteS04IHhsOnNwYWNlLXktMTBgfT5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmNvbnRhY3RJbmZvfSBmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTUganVzdGlmeS1jZW50ZXJgfT5cbiAgICAgICAgICAgICAgICA8UGhvbmVJY29uIGNsYXNzTmFtZT0ndGV4dC1bI0Y3QUIwQV0gaC01IHctNSBtZDp3LTcgbWQ6aC03IHhsOmgtNyAgeGw6dy03ICBhbmltYXRlLXB1bHNlJy8+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPSd0ZXh0LWxnIG1kOnRleHQtMnhsIHhsOnRleHQtMnhsJz4rMTQzNzI1NjQwMDQ8L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17YCR7c3R5bGVzLmNvbnRhY3RJbmZvfSBmbGV4IGl0ZW1zLWNlbnRlciBzcGFjZS14LTUganVzdGlmeS1jZW50ZXJgfT5cbiAgICAgICAgICAgICAgICA8RW52ZWxvcGVJY29uIGNsYXNzTmFtZT0ndGV4dC1bI0Y3QUIwQV0gaC01IHctNSBtZDp3LTcgbWQ6aC03IHhsOmgtNyAgeGw6dy03IGFuaW1hdGUtcHVsc2UnLz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9J3RleHQtbGcgbWQ6dGV4dC0yeGwgeGw6dGV4dC0yeGwnPmFzaW5naDY0MDBAZ21haWwuY29tPC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5jb250YWN0SW5mb30gZmxleCBpdGVtcy1jZW50ZXIgc3BhY2UteC01IGp1c3RpZnktY2VudGVyYH0+XG4gICAgICAgICAgICAgICAgPE1hcFBpbkljb24gY2xhc3NOYW1lPSd0ZXh0LVsjRjdBQjBBXSBoLTUgdy01IG1kOnctNyBtZDpoLTcgeGw6aC03ICB4bDp3LTcgYW5pbWF0ZS1wdWxzZScvPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1sZyBtZDp0ZXh0LTJ4bCB4bDp0ZXh0LTJ4bCc+QnJhbXB0b24sIE9udGFyaW88L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICBcbiAgICAgICAgICAgIHtzZW50RW1haWwgPT0gMCA/ICA8Zm9ybSAgb25TdWJtaXQ9e3NlbmRFbWFpbH0gY2xhc3NOYW1lPSdmbGV4IGZsZXgtY29sIHNwYWNlLXktMiB3LWZpdCBteC1hdXRvJz5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nZmxleCBzcGFjZS14LTInPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcmVxdWlyZWQgcGxhY2Vob2xkZXI9XCJOYW1lXCIgY2xhc3NOYW1lPVwiY29udGFjdElucHV0IHctNDAgbWQ6dy1bMjcwcHhdIG1kOmgtWzU3cHhdIHhsOnctWzI3MHB4XSB4bDpoLVs1N3B4XVwiICB0eXBlPSd0ZXh0JyBuYW1lPVwiZm9ybV9uYW1lXCIvPlxuICAgICAgICAgICAgICAgICAgICA8aW5wdXQgcmVxdWlyZWQgcGxhY2Vob2xkZXI9XCJFbWFpbFwiIGNsYXNzTmFtZT1cImNvbnRhY3RJbnB1dCB3LTQwIG1kOnctWzI3MHB4XSBtZDpoLVs1N3B4XSB4bDp3LVsyNzBweF0geGw6aC1bNTdweF1cIiB0eXBlPSdlbWFpbCcgbmFtZT1cImZvcm1fZW1haWxcIi8+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgICA8aW5wdXQgcmVxdWlyZWQgcGxhY2Vob2xkZXI9XCJTdWJqZWN0XCIgIGNsYXNzTmFtZT1cImNvbnRhY3RJbnB1dFwiIHR5cGU9J3RleHQnIG5hbWU9XCJmb3JtX3N1YmplY3RcIi8+XG4gICAgICAgICAgICAgICAgPHRleHRhcmVhIHJlcXVpcmVkIHBsYWNlaG9sZGVyPSdNZXNzYWdlJyBjbGFzc05hbWU9XCJjb250YWN0SW5wdXRcIiBuYW1lPVwibWVzc2FnZVwiLz5cbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nYmctWyNGN0FCMEFdIHB5LTUgcHgtMTAgcm91bmRlZC1tZCB0ZXh0LWJsYWNrIGZvbnQtYm9sZCB0ZXh0LWxnJz5TdWJtaXQ8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZm9ybT4gOiA8cCBjbGFzc05hbWU9J3RleHQtM3hsIG1kOnRleHQtNHhsIHhsOnRleHQtNHhsIGZvbnQtc2VtaWJvbGQgdGV4dC1jZW50ZXInPlRoYW5rIHlvdSBmb3IgY29udGFjdGluZzwvcD59XG4gICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICA8L2Rpdj5cbiAgKVxufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJQaG9uZUljb24iLCJNYXBQaW5JY29uIiwiRW52ZWxvcGVJY29uIiwiZW1haWxqcyIsInN0eWxlcyIsIkNvbnRhY3RNZSIsImZvcm0iLCJzZW50RW1haWwiLCJzZXRTZW50RW1haWwiLCJzZW5kRW1haWwiLCJlIiwicHJldmVudERlZmF1bHQiLCJzZW5kRm9ybSIsInByb2Nlc3MiLCJlbnYiLCJTRVJWSUNFX0tFWSIsIlRFTVBMRVRFX0tFWSIsInRhcmdldCIsIlBST0pFQ1RfSUQiLCJ0aGVuIiwicmVzdWx0IiwiY29uc29sZSIsImxvZyIsImN1cnJlbnQiLCJlcnJvciIsInRleHQiLCJkaXYiLCJjbGFzc05hbWUiLCJoMyIsImVkdWNhdGlvbiIsImNvbnRhY3RCb2R5IiwiaDQiLCJzcGFuIiwiY29udGFjdEluZm8iLCJwIiwib25TdWJtaXQiLCJpbnB1dCIsInJlcXVpcmVkIiwicGxhY2Vob2xkZXIiLCJ0eXBlIiwibmFtZSIsInRleHRhcmVhIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-client)/./src/components/ContactMe.tsx\n"));

/***/ })

});