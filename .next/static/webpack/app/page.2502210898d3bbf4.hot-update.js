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

/***/ "(app-client)/./app/WorldTime.tsx":
/*!***************************!*\
  !*** ./app/WorldTime.tsx ***!
  \***************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ WorldTime; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-client)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-client)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dynamic */ \"(app-client)/./node_modules/next/dynamic.js\");\n/* harmony import */ var next_dynamic__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dynamic__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _modal_worldTime__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal__worldTime */ \"(app-client)/./app/modal__worldTime.tsx\");\n// \"use client\"\n\nvar _s = $RefreshSig$();\n\n\n\nconst Clock = next_dynamic__WEBPACK_IMPORTED_MODULE_2___default()(_c = ()=>__webpack_require__.e(/*! import() */ \"_app-client_app_Clock_tsx\").then(__webpack_require__.bind(__webpack_require__, /*! ./Clock */ \"(app-client)/./app/Clock.tsx\")), {\n    loadableGenerated: {\n        modules: [\n            \"D:\\\\Front-end\\\\next\\\\astwt\\\\app\\\\WorldTime.tsx -> \" + \"./Clock\"\n        ]\n    },\n    ssr: false\n});\n_c1 = Clock;\nfunction WorldTime() {\n    _s();\n    const [display, setDisplay] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"none\");\n    const [showListCities__modal, setShowListCities__modal] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const onClick__buttonPlus = ()=>{\n        switch(true){\n            case display === \"none\":\n                setDisplay(\"inline-block\");\n                break;\n            case display === \"inline-block\":\n                setDisplay(\"none\");\n                break;\n        }\n        console.log(\"\\uD83C\\uDFB5\", display);\n    };\n    const onClickButton_Cancel = ()=>{\n        setShowListCities__modal(false);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-bermuda text-[30px]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-[320px] h-[30px] text-main-orange\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"flex justify-between h-[100%] items-center mx-[15px] align-middle\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \"text-[18px]\",\n                            children: \"Править\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Front-end\\\\next\\\\astwt\\\\app\\\\WorldTime.tsx\",\n                            lineNumber: 29,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                            className: \" w-[26px] text-[40px] font-light align-text-top\",\n                            onClick: onClick__buttonPlus,\n                            children: \"+\"\n                        }, void 0, false, {\n                            fileName: \"D:\\\\Front-end\\\\next\\\\astwt\\\\app\\\\WorldTime.tsx\",\n                            lineNumber: 35,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"D:\\\\Front-end\\\\next\\\\astwt\\\\app\\\\WorldTime.tsx\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Front-end\\\\next\\\\astwt\\\\app\\\\WorldTime.tsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-[320px] h-[50px] text-left\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \" font-[600] justify-start mx-[12px]\",\n                    children: \" Мировые часы \"\n                }, void 0, false, {\n                    fileName: \"D:\\\\Front-end\\\\next\\\\astwt\\\\app\\\\WorldTime.tsx\",\n                    lineNumber: 44,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"D:\\\\Front-end\\\\next\\\\astwt\\\\app\\\\WorldTime.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_modal_worldTime__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                active: showListCities__modal,\n                buttonCancel: onClickButton_Cancel,\n                letter: \"A\"\n            }, void 0, false, {\n                fileName: \"D:\\\\Front-end\\\\next\\\\astwt\\\\app\\\\WorldTime.tsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\Front-end\\\\next\\\\astwt\\\\app\\\\WorldTime.tsx\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_s(WorldTime, \"teWjlgdAGqryNEWJQ/kawhGBPc4=\");\n_c2 = WorldTime;\nvar _c, _c1, _c2;\n$RefreshReg$(_c, \"Clock$dynamic\");\n$RefreshReg$(_c1, \"Clock\");\n$RefreshReg$(_c2, \"WorldTime\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1jbGllbnQpLy4vYXBwL1dvcmxkVGltZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLGVBQWU7QUFDZjs7QUFBbUQ7QUFDaEI7QUFDSTtBQUN2QyxNQUFNSSxRQUFRRixtREFBT0EsTUFBQyxJQUFNLHFLQUFPOzs7Ozs7SUFDakNHLEtBQUssS0FBSzs7O0FBR0csU0FBU0MsWUFBWTs7SUFDbEMsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdQLCtDQUFRQSxDQUFDO0lBQ3ZDLE1BQU0sQ0FBQ1EsdUJBQXVCQyx5QkFBeUIsR0FBR1QsK0NBQVFBLENBQUMsS0FBSztJQUV4RSxNQUFNVSxzQkFBc0IsSUFBTTtRQUNoQyxPQUFRLElBQUk7WUFDVixLQUFNSixZQUFZO2dCQUFTQyxXQUFXO2dCQUFpQixLQUFNO1lBQzdELEtBQU1ELFlBQVk7Z0JBQWlCQyxXQUFXO2dCQUFTLEtBQU07UUFDL0Q7UUFDQUksUUFBUUMsR0FBRyxDQUFDLGdCQUFNTjtJQUNwQjtJQUVBLE1BQU1PLHVCQUF1QixJQUFNO1FBQ2pDSix5QkFBeUIsS0FBSztJQUNoQztJQUVBLHFCQUNFLDhEQUFDSztRQUFJQyxXQUFVOzswQkFDYiw4REFBQ0Q7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNEO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0M7NEJBQ0NELFdBQVU7c0NBQ1g7Ozs7OztzQ0FJRCw4REFBQ0M7NEJBQ0NELFdBQVU7NEJBQ1ZFLFNBQVNQO3NDQUNWOzs7Ozs7Ozs7Ozs7Ozs7OzswQkFLTCw4REFBQ0k7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNHO29CQUFHSCxXQUFVOzhCQUFzQzs7Ozs7Ozs7Ozs7MEJBR3RELDhEQUFDYix3REFBS0E7Z0JBQ0ppQixRQUFRWDtnQkFDUlksY0FBY1A7Z0JBQ2RRLFFBQVE7Ozs7Ozs7Ozs7OztBQU1oQixDQUFDO0dBL0N1QmhCO01BQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9Xb3JsZFRpbWUudHN4PzkwYjgiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gXCJ1c2UgY2xpZW50XCJcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCBkeW5hbWljIGZyb20gJ25leHQvZHluYW1pYyc7XHJcbmltcG9ydCBNb2RhbCBmcm9tIFwiLi9tb2RhbF9fd29ybGRUaW1lXCI7XHJcbmNvbnN0IENsb2NrID0gZHluYW1pYygoKSA9PiBpbXBvcnQoJy4vQ2xvY2snKSwge1xyXG4gIHNzcjogZmFsc2UsXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBXb3JsZFRpbWUoKSB7XHJcbiAgY29uc3QgW2Rpc3BsYXksIHNldERpc3BsYXldID0gdXNlU3RhdGUoXCJub25lXCIpO1xyXG4gIGNvbnN0IFtzaG93TGlzdENpdGllc19fbW9kYWwsIHNldFNob3dMaXN0Q2l0aWVzX19tb2RhbF0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tfX2J1dHRvblBsdXMgPSAoKSA9PiB7XHJcbiAgICBzd2l0Y2ggKHRydWUpIHtcclxuICAgICAgY2FzZSAoZGlzcGxheSA9PT0gXCJub25lXCIpOiBzZXREaXNwbGF5KFwiaW5saW5lLWJsb2NrXCIpOyBicmVhaztcclxuICAgICAgY2FzZSAoZGlzcGxheSA9PT0gXCJpbmxpbmUtYmxvY2tcIik6IHNldERpc3BsYXkoXCJub25lXCIpOyBicmVhaztcclxuICAgIH1cclxuICAgIGNvbnNvbGUubG9nKFwi8J+OtVwiLCBkaXNwbGF5KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uQ2xpY2tCdXR0b25fQ2FuY2VsID0gKCkgPT4ge1xyXG4gICAgc2V0U2hvd0xpc3RDaXRpZXNfX21vZGFsKGZhbHNlKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPSd0ZXh0LWJlcm11ZGEgdGV4dC1bMzBweF0nID5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9J3ctWzMyMHB4XSBoLVszMHB4XSAgdGV4dC1tYWluLW9yYW5nZSc+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J2ZsZXgganVzdGlmeS1iZXR3ZWVuIGgtWzEwMCVdIGl0ZW1zLWNlbnRlciBteC1bMTVweF0gYWxpZ24tbWlkZGxlJz5cclxuICAgICAgICAgIDxzcGFuXHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInRleHQtWzE4cHhdXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAg0J/RgNCw0LLQuNGC0YxcclxuICAgICAgICAgIDwvc3Bhbj5cclxuXHJcbiAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCIgdy1bMjZweF0gdGV4dC1bNDBweF0gZm9udC1saWdodCBhbGlnbi10ZXh0LXRvcFwiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e29uQ2xpY2tfX2J1dHRvblBsdXN9XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgICtcclxuICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSd3LVszMjBweF0gaC1bNTBweF0gdGV4dC1sZWZ0Jz5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwiIGZvbnQtWzYwMF0ganVzdGlmeS1zdGFydCBteC1bMTJweF1cIj4g0JzQuNGA0L7QstGL0LUg0YfQsNGB0YsgPC9oMT5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8TW9kYWxcclxuICAgICAgICBhY3RpdmU9e3Nob3dMaXN0Q2l0aWVzX19tb2RhbH1cclxuICAgICAgICBidXR0b25DYW5jZWw9e29uQ2xpY2tCdXR0b25fQ2FuY2VsfVxyXG4gICAgICAgIGxldHRlcj17J0EnfVxyXG4gICAgICA+PC9Nb2RhbD5cclxuXHJcbiAgICAgIHsvKiA8Q2xvY2sgLz4gKi99XHJcbiAgICA8L2RpdiA+XHJcbiAgKVxyXG59Il0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJkeW5hbWljIiwiTW9kYWwiLCJDbG9jayIsInNzciIsIldvcmxkVGltZSIsImRpc3BsYXkiLCJzZXREaXNwbGF5Iiwic2hvd0xpc3RDaXRpZXNfX21vZGFsIiwic2V0U2hvd0xpc3RDaXRpZXNfX21vZGFsIiwib25DbGlja19fYnV0dG9uUGx1cyIsImNvbnNvbGUiLCJsb2ciLCJvbkNsaWNrQnV0dG9uX0NhbmNlbCIsImRpdiIsImNsYXNzTmFtZSIsInNwYW4iLCJvbkNsaWNrIiwiaDEiLCJhY3RpdmUiLCJidXR0b25DYW5jZWwiLCJsZXR0ZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-client)/./app/WorldTime.tsx\n"));

/***/ })

});