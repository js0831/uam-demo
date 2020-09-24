(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/data/user.ts":
/*!******************************!*\
  !*** ./src/app/data/user.ts ***!
  \******************************/
/*! exports provided: IPermission, DATA_USERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IPermission", function() { return IPermission; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DATA_USERS", function() { return DATA_USERS; });
var IPermission;
(function (IPermission) {
    IPermission[IPermission["SUPER_ADMIN"] = 1] = "SUPER_ADMIN";
    IPermission[IPermission["DEPARTMENT_ADMIN"] = 2] = "DEPARTMENT_ADMIN";
})(IPermission || (IPermission = {}));
const DATA_USERS = [
    {
        username: 'super',
        password: 'admin',
        name: 'Joe Evans',
        type: IPermission.SUPER_ADMIN
    },
    {
        username: 'department',
        password: 'admin',
        name: 'Cris Patt',
        type: IPermission.DEPARTMENT_ADMIN
    }
];


/***/ })

}]);
//# sourceMappingURL=common.js.map