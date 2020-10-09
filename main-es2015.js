(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _provisioning_provisioning_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./provisioning/provisioning.component */ "./src/app/provisioning/provisioning.component.ts");
/* harmony import */ var jk_wait__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jk-wait */ "./node_modules/jk-wait/__ivy_ngcc__/fesm2015/jk-wait.js");




class AppComponent {
    constructor() {
        this.title = 'uamui';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 10, vars: 0, consts: [[1, "content"], [1, "inner-content"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "UAM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Super Admin");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-provisioning");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "ng-jk-wait");
    } }, directives: [_provisioning_provisioning_component__WEBPACK_IMPORTED_MODULE_1__["ProvisioningComponent"], jk_wait__WEBPACK_IMPORTED_MODULE_2__["JkWaitComponent"]], styles: ["header[_ngcontent-%COMP%] {\n  background: #0e73ce;\n  height: 3rem;\n}\nheader[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 100%;\n  width: 100%;\n  max-width: 1000px;\n  margin: auto;\n}\nheader[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 1.75rem;\n  font-weight: 300;\n}\nheader[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 0.9rem;\n}\n.content[_ngcontent-%COMP%] {\n  height: calc(100vh - 3rem);\n  background: #9c9c9c;\n  padding-top: 0.5rem;\n}\n.inner-content[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1000px;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0FBQ0o7QUFDSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFDUjtBQUVJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBUjtBQUdJO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FBRFI7QUFJQTtFQUNJLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQURKO0FBSUE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBREoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiMwZTczY2U7XHJcbiAgICBoZWlnaHQ6M3JlbTtcclxuXHJcbiAgICA+IGRpdntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICAgICAgICBtYXJnaW46YXV0bztcclxuICAgIH1cclxuXHJcbiAgICBoMXtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBmb250LXNpemU6IDEuNzVyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIH1cclxuXHJcbiAgICBsYWJlbHtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBmb250LXNpemU6IDAuOXJlbTtcclxuICAgIH1cclxufVxyXG4uY29udGVudHtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDNyZW0pO1xyXG4gICAgYmFja2dyb3VuZDogIzljOWM5YztcclxuICAgIHBhZGRpbmctdG9wOiAuNXJlbTtcclxufVxyXG5cclxuLmlubmVyLWNvbnRlbnR7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxMDAwcHg7XHJcbiAgICBtYXJnaW46YXV0bztcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _provisioning_provisioning_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./provisioning/provisioning.component */ "./src/app/provisioning/provisioning.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var jk_wait__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! jk-wait */ "./node_modules/jk-wait/__ivy_ngcc__/fesm2015/jk-wait.js");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            jk_wait__WEBPACK_IMPORTED_MODULE_7__["JkWaitModule"].forRoot({ type: 'SPINNER' }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _provisioning_provisioning_component__WEBPACK_IMPORTED_MODULE_4__["ProvisioningComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], jk_wait__WEBPACK_IMPORTED_MODULE_7__["JkWaitModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _provisioning_provisioning_component__WEBPACK_IMPORTED_MODULE_4__["ProvisioningComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    jk_wait__WEBPACK_IMPORTED_MODULE_7__["JkWaitModule"].forRoot({ type: 'SPINNER' }),
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/provisioning/provisioning.component.ts":
/*!********************************************************!*\
  !*** ./src/app/provisioning/provisioning.component.ts ***!
  \********************************************************/
/*! exports provided: ProvisioningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvisioningComponent", function() { return ProvisioningComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _shared_data_static_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../shared/data/static.data */ "./src/app/shared/data/static.data.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../shared/services/api.service */ "./src/app/shared/services/api.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");









function ProvisioningComponent_option_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const jobDuty_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", jobDuty_r5.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](jobDuty_r5.name);
} }
function ProvisioningComponent_option_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const br_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", br_r6.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](br_r6.name);
} }
function ProvisioningComponent_option_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ch_r7 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ch_r7.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ch_r7.name);
} }
function ProvisioningComponent_ng_container_25_option_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const app_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", app_r8.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](app_r8.name);
} }
function ProvisioningComponent_ng_container_25_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProvisioningComponent_ng_container_25_option_1_Template, 2, 2, "option", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const app_r8 = ctx.$implicit;
    const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r3.isAppAlreadySelected(app_r8.id));
} }
function ProvisioningComponent_div_30_div_7_option_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const option_r16 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", option_r16.categoryId);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", option_r16.categoryValue, " ");
} }
function ProvisioningComponent_div_30_div_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "select", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "option");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ProvisioningComponent_div_30_div_7_option_5_Template, 2, 2, "option", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const attr_r14 = ctx.$implicit;
    const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", attr_r14.categoryValue, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControlName", ctx_r13.getAttributeFormName(attr_r14.categoryValue));
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", attr_r14.options);
} }
function ProvisioningComponent_div_30_Template(rf, ctx) { if (rf & 1) {
    const _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProvisioningComponent_div_30_Template_button_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r18); const app_r11 = ctx.$implicit; const i_r12 = ctx.index; const ctx_r17 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](); return ctx_r17.removeApplication(app_r11.id, i_r12); });
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ProvisioningComponent_div_30_div_7_Template, 6, 3, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
} if (rf & 2) {
    const app_r11 = ctx.$implicit;
    const i_r12 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r12);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", app_r11.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", app_r11.attributes);
} }
class ProvisioningComponent {
    constructor(api, fb) {
        this.api = api;
        this.fb = fb;
        this.isStaticData = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].staticData;
        this.firstLeveldata = {
            jobDuties: _shared_data_static_data__WEBPACK_IMPORTED_MODULE_3__["STATIC_DATA"].jobDuties,
            channels: _shared_data_static_data__WEBPACK_IMPORTED_MODULE_3__["STATIC_DATA"].channels,
            businessRoles: _shared_data_static_data__WEBPACK_IMPORTED_MODULE_3__["STATIC_DATA"].businessRoles,
        };
        this.applications = _shared_data_static_data__WEBPACK_IMPORTED_MODULE_3__["STATIC_DATA"].applications;
        this.selectedApplications = [];
        this.commonAttributesForms = {
            FunctionalGroup: 'function_group_id',
            Centers: 'center_cd',
            ChannelsID: 'channel_id',
            ChannelsCD: 'channel_cd'
        };
    }
    ngOnInit() {
        this.buildForms();
        if (!this.isStaticData) {
            this.resetData();
            this.loadFirstLevelData();
            this.getApplications();
        }
    }
    buildForms() {
        this.applicationForm = this.fb.group({
            application: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        this.levelOneForm = this.fb.group({
            business_role_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            channel_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            job_duty_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
        this.levelTwoForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            applications: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArray"]([])
        });
    }
    get applicationsFormArray() {
        return this.levelTwoForm.get('applications');
    }
    addApplication() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.applicationForm.invalid) {
                return;
            }
            const appId = this.applicationForm.value.application;
            let app = this.applications.filter(x => x.id.toString() === appId)[0];
            const attributes = yield this.getApplicationAttributes(appId);
            this.buildApplicationsFormArray(appId);
            app = Object.assign(Object.assign({}, app), { attributes });
            this.selectedApplications.push(app);
            this.applicationForm.reset();
            return;
        });
    }
    buildApplicationsFormArray(appId) {
        this.applicationsFormArray.push(this.fb.group({
            app_id: [appId, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            center_cd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            channel_cd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            channel_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            function_group_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
        }));
    }
    getAttributeFormName(attributeName) {
        const attrNameNoSpace = attributeName.replace(/\ /g, '');
        return this.commonAttributesForms[attrNameNoSpace];
    }
    getApplicationAttributes(appId) {
        var e_1, _a;
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const attributes = yield this.api.list('attribute/getAllAppAttribute', { appId }).toPromise();
            const attributesWithOptions = [];
            try {
                for (var attributes_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__asyncValues"])(attributes), attributes_1_1; attributes_1_1 = yield attributes_1.next(), !attributes_1_1.done;) {
                    const attr = attributes_1_1.value;
                    const options = yield this.getAttributeOptions(appId, attr.category);
                    attributesWithOptions.push(Object.assign(Object.assign({}, attr), { options }));
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (attributes_1_1 && !attributes_1_1.done && (_a = attributes_1.return)) yield _a.call(attributes_1);
                }
                finally { if (e_1) throw e_1.error; }
            }
            return attributesWithOptions;
        });
    }
    getAttributeOptions(appId, category) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const options = yield this.api.list('attribute/findValuesByCategory', { appId, category }).toPromise();
            return options;
        });
    }
    isAppAlreadySelected(id) {
        return this.selectedApplications.filter(x => x.id === id).length > 0;
    }
    removeApplication(id, index) {
        this.selectedApplications = this.selectedApplications.filter(x => x.id !== id);
        this.applicationsFormArray.removeAt(index);
        console.log(this.levelTwoForm.value);
    }
    resetData() {
        this.firstLeveldata = {
            jobDuties: [],
            channels: [],
            businessRoles: [],
        };
        this.applications = [];
    }
    getApplications() {
        this.getListOf('application').then(x => {
            this.applications = x;
        });
    }
    loadFirstLevelData() {
        this.getListOf('job-duty').then(x => {
            this.firstLeveldata.jobDuties = x;
        });
        this.getListOf('business-role').then(x => {
            this.firstLeveldata.businessRoles = x;
        });
        this.getListOf('channel').then(x => {
            this.firstLeveldata.channels = x;
        });
    }
    getListOf(entity) {
        return new Promise((res, rej) => {
            this.api.list(entity, { limit: 999, offset: 0 }).subscribe(x => {
                res(x);
            });
        });
    }
    save() {
        if (this.levelOneForm.invalid || this.levelTwoForm.invalid) {
            alert('All Fields are required');
            return;
        }
        const levelOne = this.levelOneForm.value;
        const levelTwo = this.levelTwoForm.value;
        const data = Object.assign(Object.assign({}, levelOne), { applications: [
                ...levelTwo.applications
            ] });
        console.log(data);
        this.api.create('preset', data).subscribe(x => {
            this.levelOneForm.reset();
            this.levelTwoForm.reset();
            alert('Success');
        });
    }
}
ProvisioningComponent.ɵfac = function ProvisioningComponent_Factory(t) { return new (t || ProvisioningComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"])); };
ProvisioningComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ProvisioningComponent, selectors: [["app-provisioning"]], decls: 34, vars: 8, consts: [[1, "levelOne", 3, "formGroup"], [1, "form-group"], ["formControlName", "job_duty_id", 1, "form-control", "form-control-sm"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "business_role_id", 1, "form-control", "form-control-sm"], ["formControlName", "channel_id", 1, "form-control", "form-control-sm"], [1, "application", 3, "formGroup"], ["formControlName", "application", 1, "form-control", "form-control-sm"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "level-two", 3, "formGroup"], ["formArrayName", "applications"], ["class", "card", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "submit"], [1, "btn", "btn-primary", 3, "click"], [3, "value"], [3, "value", 4, "ngIf"], [1, "card", 3, "formGroupName"], ["type", "hidden", "formControlName", "app_id"], [1, "card-header"], ["type", "button", 1, "btn", "btn-link", 3, "click"], [1, "card-body"], ["class", "form-group", 4, "ngFor", "ngForOf"], [1, "form-control", "form-control-sm", 3, "formControlName"]], template: function ProvisioningComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Job Duty");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "select", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](6, ProvisioningComponent_option_6_Template, 2, 2, "option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Business Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "select", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](11, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](12, ProvisioningComponent_option_12_Template, 2, 2, "option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Channel");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "select", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](17, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](18, ProvisioningComponent_option_18_Template, 2, 2, "option", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Application");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](24, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](25, ProvisioningComponent_ng_container_25_Template, 2, 1, "ng-container", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProvisioningComponent_Template_button_click_26_listener() { return ctx.addApplication(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "Add Application");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](28, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](30, ProvisioningComponent_div_30_Template, 8, 3, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProvisioningComponent_Template_button_click_32_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Save");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.levelOneForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.firstLeveldata.jobDuties);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.firstLeveldata.businessRoles);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.firstLeveldata.channels);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.applicationForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.applications);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.levelTwoForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.selectedApplications);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"]], styles: [".levelOne[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.5rem;\n  background: #fff;\n  margin-bottom: 0.5rem;\n  border-radius: 0.25rem;\n}\n.levelOne[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex: 1;\n  padding-right: 1rem;\n}\n.levelOne[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n  padding: 0;\n}\n.level-two[_ngcontent-%COMP%] {\n  position: relative;\n  height: calc(100vh - 15rem);\n  overflow-y: auto;\n  background: #fff;\n  padding: 0.5rem;\n  border-bottom: 0.5rem solid #fff;\n  border-bottom-left-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n  border-top: 1px solid #ddd;\n}\n.level-two[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.level-two[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background-color: #f7f7f7;\n  padding: 0.5rem;\n  font-size: 0.85rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.level-two[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  padding: 0;\n}\n.level-two[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-gap: 0.25rem;\n  padding: 0.5rem;\n}\n.submit[_ngcontent-%COMP%] {\n  padding: 0.5rem 0;\n  text-align: right;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  margin-bottom: 0.25rem;\n}\n.application[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.5rem 0;\n  background: #fff;\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n  border-bottom: 0.5rem solid #fff;\n}\n.application[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n}\n.application[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-right: 1rem;\n  font-size: 0.9rem;\n}\n.application[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 20rem;\n}\n.application[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvdmlzaW9uaW5nL3Byb3Zpc2lvbmluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQUNKO0FBQ0k7RUFDSSxPQUFBO0VBQ0EsbUJBQUE7QUFDUjtBQUNRO0VBQ0ksVUFBQTtBQUNaO0FBSUE7RUFDSSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSwwQkFBQTtBQURKO0FBS0k7RUFDSSxxQkFBQTtBQUhSO0FBTUk7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBTFI7QUFPUTtFQUNJLGlCQUFBO0VBQ0EsVUFBQTtBQUxaO0FBU0k7RUFDSSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFQUjtBQWNBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQVhKO0FBY0E7RUFDSSxnQkFBQTtBQVhKO0FBYUk7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0FBWFI7QUFlQTtFQUNJLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0NBQUE7QUFaSjtBQWNJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBQVpSO0FBY1E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBWlo7QUFlUTtFQUNJLFlBQUE7QUFiWjtBQWdCUTtFQUNJLGlCQUFBO0FBZFoiLCJmaWxlIjoic3JjL2FwcC9wcm92aXNpb25pbmcvcHJvdmlzaW9uaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxldmVsT25le1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZzouNXJlbTtcclxuICAgIGJhY2tncm91bmQ6I2ZmZjtcclxuICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG5cclxuICAgID4gZGl2e1xyXG4gICAgICAgIGZsZXg6MTtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OjFyZW07XHJcblxyXG4gICAgICAgICY6bGFzdC1jaGlsZHtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5sZXZlbC10d28ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTVyZW0pO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAuNXJlbTtcclxuICAgIGJvcmRlci1ib3R0b206IC41cmVtIHNvbGlkICNmZmY7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAuMjVyZW07XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogLjI1cmVtO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7XHJcblxyXG5cclxuXHJcbiAgICAuY2FyZHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC1oZWFkZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcclxuICAgICAgICBwYWRkaW5nOi41cmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogLjg1cmVtO1xyXG5cclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgICBidXR0b257XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjdyZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtYm9keXtcclxuICAgICAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcclxuICAgICAgICBncmlkLWdhcDogMC4yNXJlbTtcclxuICAgICAgICBwYWRkaW5nOi41cmVtO1xyXG5cclxuXHJcblxyXG5cclxuICAgIH0gICAgXHJcbn1cclxuLnN1Ym1pdHtcclxuICAgIHBhZGRpbmc6IC41cmVtIDA7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgXHJcbiAgICBsYWJlbHtcclxuICAgICAgICBmb250LXNpemU6IC43NXJlbTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAuMjVyZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hcHBsaWNhdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMC41cmVtIDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogLjI1cmVtO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IC4yNXJlbTtcclxuICAgIGJvcmRlci1ib3R0b206IC41cmVtIHNvbGlkICNmZmY7XHJcblxyXG4gICAgPiBkaXZ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cclxuICAgICAgICBsYWJlbHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtOyAgXHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjlyZW07ICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZWxlY3R7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMHJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProvisioningComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
                selector: 'app-provisioning',
                templateUrl: './provisioning.component.html',
                styleUrls: ['./provisioning.component.scss']
            }]
    }], function () { return [{ type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/data/static.data.ts":
/*!********************************************!*\
  !*** ./src/app/shared/data/static.data.ts ***!
  \********************************************/
/*! exports provided: STATIC_DATA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STATIC_DATA", function() { return STATIC_DATA; });
const STATIC_DATA = {
    applications: [
        {
            id: 1,
            name: 'SVC',
            attributes: [
                {
                    id: 1,
                    name: 'Function Group'
                },
                {
                    id: 2,
                    name: 'Channel ID'
                },
                {
                    id: 3,
                    name: 'Channel CD'
                },
                {
                    id: 4,
                    name: 'Center CD'
                },
            ]
        },
        {
            id: 2,
            name: 'BOM',
            attributes: [
                {
                    id: 1,
                    name: 'Function Group'
                },
                {
                    id: 2,
                    name: 'Channel ID'
                },
                {
                    id: 3,
                    name: 'Channel CD'
                },
                {
                    id: 4,
                    name: 'Center CD'
                },
            ]
        },
        {
            id: 3,
            name: 'Salesforce',
            attributes: [
                {
                    id: 1,
                    name: 'Function Group'
                },
                {
                    id: 2,
                    name: 'Channel ID'
                },
                {
                    id: 3,
                    name: 'Channel CD'
                },
                {
                    id: 4,
                    name: 'Center CD'
                },
                {
                    id: 5,
                    name: 'Profile'
                }
            ]
        }
    ],
    jobDuties: [
        {
            id: 1,
            name: 'Fullfilment / CFM'
        },
        {
            id: 2,
            name: 'Smart Charge / SCS'
        },
        {
            id: 3,
            name: 'Outbound Sales (call center) / OBS'
        },
    ],
    businessRoles: [
        {
            id: 1,
            name: 'Supervisor'
        },
        {
            id: 2,
            name: 'Frontline'
        },
        {
            id: 3,
            name: 'Sales Manager'
        },
        {
            id: 4,
            name: 'Support'
        }
    ],
    channels: [
        {
            id: 5,
            name: 'CS_SC_14'
        },
        {
            id: 1,
            name: 'VCC'
        },
        {
            id: 2,
            name: 'OBS'
        },
        {
            id: 3,
            name: 'RET'
        },
        {
            id: 4,
            name: 'CSS'
        }
    ],
    attributes: [
        {
            id: 1,
            name: 'Function Group',
            options: [
                {
                    label: 'RS-CSL-FRONTLINE',
                    value: '1'
                },
                {
                    label: 'LTS-RET-SM',
                    value: '1'
                },
                {
                    label: 'CFM3-F&S-SMART-LIVING ONLY SUPPORT',
                    value: '1'
                },
                {
                    label: 'PCD-RET-SM',
                    value: '1'
                },
                {
                    label: 'QOM-QSI',
                    value: '1'
                },
                {
                    label: 'RS-CSL-FRONTLINE',
                    value: '1'
                },
                {
                    label: 'CSS-IMSTS - AGENT',
                    value: '1'
                },
                {
                    label: 'CSS-IMSTS - MANAGER',
                    value: '1'
                },
            ]
        },
        {
            id: 2,
            name: 'Channel ID',
            options: [
                {
                    label: 1,
                    value: 1
                },
                {
                    label: 2,
                    value: 2
                },
                {
                    label: 3,
                    value: 3
                },
                {
                    label: 4,
                    value: 4
                },
                {
                    label: 5,
                    value: 5
                }
            ]
        },
        {
            id: 3,
            name: 'Channel CD',
            options: [
                {
                    label: 'QOM',
                    value: 'QOM'
                },
                {
                    label: 'CSS',
                    value: 'CSS'
                },
                {
                    label: 'IBS',
                    value: 'IBS'
                },
                {
                    label: 'VCC',
                    value: 'VCC'
                },
                {
                    label: 'CFM1',
                    value: 'CFM1'
                },
                {
                    label: 'CPA(LTS)',
                    value: 'CPA(LTS)'
                },
                {
                    label: 'DS6',
                    value: 'DS6'
                },
            ]
        },
        {
            id: 4,
            name: 'Center CD',
            options: [
                {
                    label: 'CS SERVICE CENTER',
                    value: 'CS SERVICE CENTER',
                },
                {
                    label: 'TTW/33',
                    value: 'TTW/33'
                },
                {
                    label: 'SHOP TEAM 2',
                    value: 'SHOP TEAM 2'
                },
                {
                    label: 'QOM',
                    value: 'QOM'
                },
                {
                    label: 'RETENTION TEAM',
                    value: 'RETENTION TEAM'
                },
                {
                    label: 'F&S',
                    value: 'F&S'
                },
                {
                    label: 'DEL RETENTION',
                    value: 'DEL RETENTION'
                },
                {
                    label: 'SHOP TEAM 7',
                    value: 'SHOP TEAM 7'
                },
            ]
        },
        {
            id: 5,
            name: 'Profile',
            options: [
                {
                    label: 'System Administration',
                    value: 'System Administration'
                },
                {
                    label: 'Sales Manager',
                    value: 'Sales Manager'
                },
                {
                    label: 'Product Encoder',
                    value: 'Product Encoder'
                },
                {
                    label: 'Marketing',
                    value: 'Marketing'
                },
                {
                    label: 'Developer',
                    value: 'Developer'
                },
            ]
        }
    ],
};


/***/ }),

/***/ "./src/app/shared/services/api.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/services/api.service.ts ***!
  \************************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var jk_wait__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jk-wait */ "./node_modules/jk-wait/__ivy_ngcc__/fesm2015/jk-wait.js");






class ApiService {
    constructor(http, wait) {
        this.http = http;
        this.wait = wait;
        this.configUrl = 'assets/config.json';
    }
    create(what, data) {
        this.wait.start();
        const endpoint = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL}${what}/`;
        return this.http.post(endpoint, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(x => {
            this.wait.end();
            return x;
        }));
    }
    update(what, id, data) {
        this.wait.start();
        const endpoint = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL}${what}/${id}`;
        return this.http.put(endpoint, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(x => {
            this.wait.end();
            return x;
        }));
    }
    delete(what, id) {
        this.wait.start();
        const endpoint = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL}${what}/${id}`;
        return this.http.delete(endpoint).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(x => {
            this.wait.end();
            return x;
        }));
    }
    list(ofWhat, params) {
        this.wait.start();
        const paramString = params ? `?${this.objectToParams(params)}` : '';
        const endpoint = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL}${ofWhat}/${paramString}`;
        return this.http.get(endpoint).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(x => {
            this.wait.end();
            return x;
        }));
    }
    listMap(ofWhat, params) {
        this.wait.start();
        const paramString = params ? `?${this.objectToParams(params)}` : '';
        const endpoint = `${_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL}${ofWhat}/${paramString}`;
        return this.http.get(endpoint).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((x) => {
            this.wait.end();
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
ApiService.ɵfac = function ApiService_Factory(t) { return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](jk_wait__WEBPACK_IMPORTED_MODULE_4__["JkWaitService"])); };
ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: ApiService, factory: ApiService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: jk_wait__WEBPACK_IMPORTED_MODULE_4__["JkWaitService"] }]; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    // apiURL: 'http://localhost:4003/api/',
    apiURL: 'https://quick-bear-12.loca.lt/api/',
    staticData: true
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\81254807\Desktop\UAM\project\uam\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map