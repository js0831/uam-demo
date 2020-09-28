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


/***/ }),

/***/ "./src/app/shared/service/api.service.ts":
/*!***********************************************!*\
  !*** ./src/app/shared/service/api.service.ts ***!
  \***********************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





class ApiService {
    constructor(http) {
        this.http = http;
        this.configUrl = 'assets/config.json';
    }
    create(what, data) {
        const endpoint = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL}${what}/`;
        return this.http.post(endpoint, data);
    }
    update(what, id, data) {
        const endpoint = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL}${what}/${id}`;
        return this.http.put(endpoint, data);
    }
    delete(what, id) {
        const endpoint = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL}${what}/${id}`;
        return this.http.delete(endpoint);
    }
    list(ofWhat, params) {
        const paramString = params ? `?${this.objectToParams(params)}` : '';
        const endpoint = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL}${ofWhat}/${paramString}`;
        return this.http.get(endpoint);
    }
    listMap(ofWhat, params) {
        const paramString = params ? `?${this.objectToParams(params)}` : '';
        const endpoint = `${src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL}${ofWhat}/${paramString}`;
        return this.http.get(endpoint).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((x) => {
            console.log(x);
            return {
                data: x.content,
                count: x.totalElements,
                totalPage: x.totalPages
            };
        }));
    }
    objectToParams(obj) {
        const keys = Object.keys(obj);
        let paramsString = '';
        keys.forEach(key => {
            paramsString += `${key}=${obj[key]}&`;
        });
        return paramsString.slice(0, -1);
    }
}
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common.js.map