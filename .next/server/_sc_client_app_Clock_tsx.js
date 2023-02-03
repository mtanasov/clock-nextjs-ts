"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "_sc_client_app_Clock_tsx";
exports.ids = ["_sc_client_app_Clock_tsx"];
exports.modules = {

/***/ "(sc_client)/./app/Clock.tsx":
/*!***********************!*\
  !*** ./app/Clock.tsx ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Clock)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n// \"use client\"\n\n\nconst styles = {\n    color: \"white\",\n    fontSize: \"30px\"\n};\nfunction Clock(props) {\n    const date = new Date();\n    const [dateNow, setDateNow] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(new Date());\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setInterval(()=>{\n            setDateNow(new Date());\n        }, 1000);\n    }, [\n        dateNow\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n            children: [\n                \" \",\n                `${dateNow.getHours()} : ${dateNow.getMinutes()} : ${dateNow.getSeconds()} `\n            ]\n        }, void 0, true, {\n            fileName: \"D:\\\\Front-end\\\\next\\\\astwt\\\\app\\\\Clock.tsx\",\n            lineNumber: 23,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"D:\\\\Front-end\\\\next\\\\astwt\\\\app\\\\Clock.tsx\",\n        lineNumber: 22,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNjX2NsaWVudCkvLi9hcHAvQ2xvY2sudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsZUFBZTtBQUVmO0FBQW1EO0FBRW5ELE1BQU1HLFNBQVM7SUFDYkMsT0FBTztJQUNQQyxVQUFVO0FBQ1o7QUFFZSxTQUFTQyxNQUFNQyxLQUFTLEVBQUU7SUFDdkMsTUFBTUMsT0FBTyxJQUFJQztJQUNqQixNQUFNLENBQUNDLFNBQVNDLFdBQVcsR0FBR1YsK0NBQVFBLENBQUMsSUFBSVE7SUFFM0NQLGdEQUFTQSxDQUFDLElBQU07UUFDZFUsWUFBWSxJQUFNO1lBQ2hCRCxXQUFXLElBQUlGO1FBQ2pCLEdBQUc7SUFFTCxHQUFHO1FBQUNDO0tBQVE7SUFFWixxQkFDRSw4REFBQ0c7a0JBQ0MsNEVBQUNDOztnQkFBRTtnQkFBRSxDQUFDLEVBQUVKLFFBQVFLLFFBQVEsR0FBRyxHQUFHLEVBQUVMLFFBQVFNLFVBQVUsR0FBRyxHQUFHLEVBQUVOLFFBQVFPLFVBQVUsR0FBRyxDQUFDLENBQUM7Ozs7Ozs7Ozs7OztBQUl2RixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwL0Nsb2NrLnRzeD9iYzhkIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFwidXNlIGNsaWVudFwiXHJcblxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmNvbnN0IHN0eWxlcyA9IHtcclxuICBjb2xvcjogXCJ3aGl0ZVwiLFxyXG4gIGZvbnRTaXplOiBcIjMwcHhcIixcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2xvY2socHJvcHM6IHt9KSB7XHJcbiAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgY29uc3QgW2RhdGVOb3csIHNldERhdGVOb3ddID0gdXNlU3RhdGUobmV3IERhdGUoKSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgIHNldERhdGVOb3cobmV3IERhdGUoKSlcclxuICAgIH0sIDEwMDApXHJcblxyXG4gIH0sIFtkYXRlTm93XSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgLyogc3R5bGU9e3N0eWxlc30gKi8+XHJcbiAgICAgIDxwPiB7YCR7ZGF0ZU5vdy5nZXRIb3VycygpfSA6ICR7ZGF0ZU5vdy5nZXRNaW51dGVzKCl9IDogJHtkYXRlTm93LmdldFNlY29uZHMoKX0gYFxyXG4gICAgICB9PC9wID5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufSAiXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInN0eWxlcyIsImNvbG9yIiwiZm9udFNpemUiLCJDbG9jayIsInByb3BzIiwiZGF0ZSIsIkRhdGUiLCJkYXRlTm93Iiwic2V0RGF0ZU5vdyIsInNldEludGVydmFsIiwiZGl2IiwicCIsImdldEhvdXJzIiwiZ2V0TWludXRlcyIsImdldFNlY29uZHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(sc_client)/./app/Clock.tsx\n");

/***/ })

};
;