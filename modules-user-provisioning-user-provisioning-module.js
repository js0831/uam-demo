(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-user-provisioning-user-provisioning-module"],{

/***/ "./src/app/modules/user-provisioning/business-role/business-role.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/modules/user-provisioning/business-role/business-role.component.ts ***!
  \************************************************************************************/
/*! exports provided: BusinessRoleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BusinessRoleComponent", function() { return BusinessRoleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _user_provisioning_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-provisioning.service */ "./src/app/modules/user-provisioning/user-provisioning.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function BusinessRoleComponent_div_36_tr_10_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BusinessRoleComponent_div_36_tr_10_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const i_r3 = ctx.index; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r4.remove(i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.application);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.functionGroup);
} }
function BusinessRoleComponent_div_36_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "table", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Application");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Function Group");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "th", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, BusinessRoleComponent_div_36_tr_10_Template, 8, 2, "tr", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r0.list);
} }
class BusinessRoleComponent {
    constructor(router, service, formBuilder) {
        this.router = router;
        this.service = service;
        this.formBuilder = formBuilder;
        this.list = [];
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            application: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            functionGroup: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
    }
    add() {
        if (this.form.invalid) {
            return;
        }
        this.list.push(this.form.value);
        this.form.reset();
    }
    remove(index) {
        this.list.splice(index, 1);
    }
    next() {
        this.service.nextStep('staffinfo');
        this.router.navigate(['provisioning', 'staffinfo']);
    }
}
BusinessRoleComponent.ɵfac = function BusinessRoleComponent_Factory(t) { return new (t || BusinessRoleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_provisioning_service__WEBPACK_IMPORTED_MODULE_3__["UserProvisioningService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
BusinessRoleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BusinessRoleComponent, selectors: [["app-business-role"]], decls: 39, vars: 2, consts: [[3, "formGroup"], [1, "form-group"], ["for", "exampleFormControlSelect1"], [1, "form-control"], ["value", "Manager"], ["value", "Frontline"], [1, "form-group", "application"], ["formControlName", "application", 1, "form-control"], ["value", "SVC"], ["value", "BOM"], ["formControlName", "functionGroup", 1, "form-control"], ["value", "OBS-SM"], ["value", "PCD-RET SM"], ["value", "PTC Manager"], ["value", "IBS Frontline"], ["type", "button", 1, "btn", "btn-secondary", 3, "click"], ["class", "form-group", 4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "table"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["type", "button", 1, "btn", "btn-sm", "btn-link", 3, "click"]], template: function BusinessRoleComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Role");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Frontline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Application");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "select", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "option", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "SVC");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "option", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "BOM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Function Group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "select", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "option", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "OBS-SM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "option", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "PCD-RET SM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "option", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "PTC Manager");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "option", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "IBS Frontline");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "button", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BusinessRoleComponent_Template_button_click_34_listener() { return ctx.add(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "+");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](36, BusinessRoleComponent_div_36_Template, 11, 1, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BusinessRoleComponent_Template_button_click_37_listener() { return ctx.next(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Next");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](36);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.list.length > 0);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["[_nghost-%COMP%] {\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  flex-flow: column;\n}\n\nform[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 22rem;\n  padding: 2rem 0;\n}\n\n.application[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-end;\n}\n\n.application[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex: 1;\n  margin-right: 0.5rem;\n}\n\n.application[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n  flex: none;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91c2VyLXByb3Zpc2lvbmluZy9idXNpbmVzcy1yb2xlL2J1c2luZXNzLXJvbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EscUJBQUE7QUFDSjs7QUFDSTtFQUNJLE9BQUE7RUFDQSxvQkFBQTtBQUNSOztBQUNRO0VBQ0ksVUFBQTtFQUNBLFNBQUE7QUFDWiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvdXNlci1wcm92aXNpb25pbmcvYnVzaW5lc3Mtcm9sZS9idXNpbmVzcy1yb2xlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiOmhvc3R7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1mbG93OiBjb2x1bW47XHJcbn1cclxuXHJcbmZvcm17XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMjJyZW07XHJcbiAgICBwYWRkaW5nOjJyZW0gMDtcclxufVxyXG5cclxuLmFwcGxpY2F0aW9ue1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtZW5kO1xyXG5cclxuICAgID4gZGl2e1xyXG4gICAgICAgIGZsZXg6MTtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IC41cmVtO1xyXG5cclxuICAgICAgICAmOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgICAgIGZsZXg6IG5vbmU7XHJcbiAgICAgICAgICAgIG1hcmdpbjowO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BusinessRoleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-business-role',
                templateUrl: './business-role.component.html',
                styleUrls: ['./business-role.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _user_provisioning_service__WEBPACK_IMPORTED_MODULE_3__["UserProvisioningService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/user-provisioning/department-hierarchy/department-hierarchy.component.ts":
/*!**************************************************************************************************!*\
  !*** ./src/app/modules/user-provisioning/department-hierarchy/department-hierarchy.component.ts ***!
  \**************************************************************************************************/
/*! exports provided: DepartmentHierarchyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentHierarchyComponent", function() { return DepartmentHierarchyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _user_provisioning_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-provisioning.service */ "./src/app/modules/user-provisioning/user-provisioning.service.ts");
/* harmony import */ var src_app_shared_components_hierarchy_hierarchy_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/shared/components/hierarchy/hierarchy.service */ "./src/app/shared/components/hierarchy/hierarchy.service.ts");
/* harmony import */ var _shared_components_hierarchy_hierarchy_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/hierarchy/hierarchy.component */ "./src/app/shared/components/hierarchy/hierarchy.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







const _c0 = function (a0) { return { "selected": a0 }; };
function DepartmentHierarchyComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DepartmentHierarchyComponent_ng_template_0_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const node_r2 = ctx.node; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.select(node_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r2 = ctx.node;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, (ctx_r1.staffProvisioning == null ? null : ctx_r1.staffProvisioning.department == null ? null : ctx_r1.staffProvisioning.department.id) === node_r2.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", node_r2.name, " ");
} }
class DepartmentHierarchyComponent {
    constructor(router, service, hierarchyService) {
        this.router = router;
        this.service = service;
        this.hierarchyService = hierarchyService;
        this.node = [
            { id: 1, name: 'Channel Fulfillment Management (CFM)', parent_id: null, type: 'department' },
            { id: 2, name: 'Fulfillment & Services (F&S) - HK', parent_id: 1, type: 'department' },
            { id: 3, name: 'Fulfillment & Services (F&S) - PRC', parent_id: 1, type: 'department' },
            { id: 4, name: 'HK - CPE Team', parent_id: 2, type: 'department' },
            { id: 5, name: 'HK - Order Team', parent_id: 2, type: 'department' },
            { id: 6, name: 'HK - Misc. Support', parent_id: 2, type: 'department' },
            { id: 7, name: 'HK - Others', parent_id: 2, type: 'department' },
            { id: 8, name: 'PY - Order Team', parent_id: 3, type: 'department' },
            { id: 9, name: 'PY - COS & QC Team', parent_id: 3, type: 'department' },
            { id: 10, name: 'PY - Others', parent_id: 3, type: 'department' }
        ];
    }
    ngOnInit() {
        this.node = this.hierarchyService.formatOrg(this.node);
        // TEMP
        const staffProv = localStorage.getItem('staffProvisioning');
        this.staffProvisioning = staffProv ? JSON.parse(staffProv) : {};
    }
    // next(): void {
    //   this.service.nextStep('businessrole');
    //   this.router.navigate(['provisioning', 'businessrole']);
    // }
    select(node) {
        this.staffProvisioning.department = node;
        localStorage.setItem('staffProvisioning', JSON.stringify(this.staffProvisioning));
        setTimeout(x => {
            this.service.nextStep('businessrole');
            this.router.navigate(['provisioning', 'businessrole']);
        }, 250);
    }
}
DepartmentHierarchyComponent.ɵfac = function DepartmentHierarchyComponent_Factory(t) { return new (t || DepartmentHierarchyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_provisioning_service__WEBPACK_IMPORTED_MODULE_2__["UserProvisioningService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_components_hierarchy_hierarchy_service__WEBPACK_IMPORTED_MODULE_3__["HierarchyService"])); };
DepartmentHierarchyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DepartmentHierarchyComponent, selectors: [["app-department-hierarchy"]], decls: 4, vars: 2, consts: [["nodeTemplate", ""], [1, "hierarchy"], [3, "node", "nodeTemplate"], ["href", "javascript:;", 3, "ngClass", "click"]], template: function DepartmentHierarchyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, DepartmentHierarchyComponent_ng_template_0_Template, 3, 4, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-hierarchy", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("node", ctx.node)("nodeTemplate", _r0);
    } }, directives: [_shared_components_hierarchy_hierarchy_component__WEBPACK_IMPORTED_MODULE_4__["HierarchyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-flow: column;\n}\n\n.hierarchy[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.next[_ngcontent-%COMP%] {\n  align-self: flex-end;\n}\n\n.selected[_ngcontent-%COMP%] {\n  box-shadow: 0 0 1px 3px #204873;\n  color: #333;\n  background: #fff;\n  font-weight: bold;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91c2VyLXByb3Zpc2lvbmluZy9kZXBhcnRtZW50LWhpZXJhcmNoeS9kZXBhcnRtZW50LWhpZXJhcmNoeS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0FBQ0o7O0FBS0E7RUFDSSxvQkFBQTtBQUZKOztBQUtBO0VBQ0ksK0JBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQUZKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy91c2VyLXByb3Zpc2lvbmluZy9kZXBhcnRtZW50LWhpZXJhcmNoeS9kZXBhcnRtZW50LWhpZXJhcmNoeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG59XHJcblxyXG4uaGllcmFyY2h5e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAvLyBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNXJlbSk7XHJcbiAgICAvLyBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLm5leHR7XHJcbiAgICBhbGlnbi1zZWxmOmZsZXgtZW5kO1xyXG59XHJcblxyXG4uc2VsZWN0ZWR7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IDNweCAjMjA0ODczO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DepartmentHierarchyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-department-hierarchy',
                templateUrl: './department-hierarchy.component.html',
                styleUrls: ['./department-hierarchy.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _user_provisioning_service__WEBPACK_IMPORTED_MODULE_2__["UserProvisioningService"] }, { type: src_app_shared_components_hierarchy_hierarchy_service__WEBPACK_IMPORTED_MODULE_3__["HierarchyService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/user-provisioning/organization-hierarchy/organization-hierarchy.component.ts":
/*!******************************************************************************************************!*\
  !*** ./src/app/modules/user-provisioning/organization-hierarchy/organization-hierarchy.component.ts ***!
  \******************************************************************************************************/
/*! exports provided: OrganizationHierarchyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrganizationHierarchyComponent", function() { return OrganizationHierarchyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _user_provisioning_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../user-provisioning.service */ "./src/app/modules/user-provisioning/user-provisioning.service.ts");
/* harmony import */ var _shared_components_hierarchy_hierarchy_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/components/hierarchy/hierarchy.service */ "./src/app/shared/components/hierarchy/hierarchy.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _shared_components_hierarchy_hierarchy_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/components/hierarchy/hierarchy.component */ "./src/app/shared/components/hierarchy/hierarchy.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");








const _c0 = function (a0) { return { "selected": a0 }; };
function OrganizationHierarchyComponent_ng_template_0_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function OrganizationHierarchyComponent_ng_template_0_Template_a_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const node_r2 = ctx.node; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.select(node_r2); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r2 = ctx.node;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, (ctx_r1.staffProvisioning == null ? null : ctx_r1.staffProvisioning.organization == null ? null : ctx_r1.staffProvisioning.organization.id) === node_r2.id));
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](node_r2.name);
} }
class OrganizationHierarchyComponent {
    constructor(router, service, hierarchyService) {
        this.router = router;
        this.service = service;
        this.hierarchyService = hierarchyService;
        this.node = [
            { id: 10, name: 'Mobile Sales and Marketing', parent_id: null },
            { id: 1, name: 'Consumer Mobile', parent_id: 10 },
            { id: 2, name: 'CSL Marketing & Prepaid ', parent_id: 1 },
            { id: 3, name: 'Marketing Operation', parent_id: 1 },
            { id: 4, name: 'Brand & Communications', parent_id: 1 },
            { id: 5, name: 'Human Resources', parent_id: 1 },
            { id: 6, name: 'Finance', parent_id: 1 },
        ];
    }
    ngOnInit() {
        this.node = this.hierarchyService.formatOrg(this.node);
        // TEMP
        const staffProv = localStorage.getItem('staffProvisioning');
        this.staffProvisioning = staffProv ? JSON.parse(staffProv) : {};
    }
    // next(): void {
    //   this.service.nextStep('department');
    //   this.router.navigate(['provisioning', 'department']);
    // }
    select(node) {
        this.staffProvisioning.organization = node;
        localStorage.setItem('staffProvisioning', JSON.stringify(this.staffProvisioning));
        setTimeout(x => {
            this.service.nextStep('department');
            this.router.navigate(['provisioning', 'department']);
        }, 250);
    }
}
OrganizationHierarchyComponent.ɵfac = function OrganizationHierarchyComponent_Factory(t) { return new (t || OrganizationHierarchyComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_provisioning_service__WEBPACK_IMPORTED_MODULE_2__["UserProvisioningService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_components_hierarchy_hierarchy_service__WEBPACK_IMPORTED_MODULE_3__["HierarchyService"])); };
OrganizationHierarchyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: OrganizationHierarchyComponent, selectors: [["app-organization-hierarchy"]], decls: 16, vars: 2, consts: [["nodeTemplate", ""], [1, "form-group", "form-inline"], ["for", "exampleFormControlSelect1"], [1, "form-control"], ["value", "Manager"], ["value", "Frontline"], [1, "hierarchy"], [3, "node", "nodeTemplate"], ["href", "javascript:;", 3, "ngClass", "click"]], template: function OrganizationHierarchyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, OrganizationHierarchyComponent_ng_template_0_Template, 3, 4, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Organization");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "select", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "option");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "option", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "CRM");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Consumer Group");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "option", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "HKT Premier");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "app-hierarchy", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("node", ctx.node)("nodeTemplate", _r0);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _shared_components_hierarchy_hierarchy_component__WEBPACK_IMPORTED_MODULE_5__["HierarchyComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], styles: ["[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-flow: column;\n}\n\n.hierarchy[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.next[_ngcontent-%COMP%] {\n  align-self: flex-end;\n}\n\n.selected[_ngcontent-%COMP%] {\n  box-shadow: 0 0 1px 3px #204873;\n  color: #333;\n  background: #fff;\n  font-weight: bold;\n}\n\n.form-inline[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91c2VyLXByb3Zpc2lvbmluZy9vcmdhbml6YXRpb24taGllcmFyY2h5L29yZ2FuaXphdGlvbi1oaWVyYXJjaHkuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0FBQ0o7O0FBRUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtBQUNKOztBQUtBO0VBQ0ksb0JBQUE7QUFGSjs7QUFLQTtFQUNJLCtCQUFBO0VBQ0EsV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QUFGSjs7QUFLQTtFQUNJLG9CQUFBO0FBRkoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3VzZXItcHJvdmlzaW9uaW5nL29yZ2FuaXphdGlvbi1oaWVyYXJjaHkvb3JnYW5pemF0aW9uLWhpZXJhcmNoeS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG59XHJcblxyXG4uaGllcmFyY2h5e1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuXHJcbiAgICAvLyBoZWlnaHQ6IGNhbGMoMTAwdmggLSAxNXJlbSk7XHJcbiAgICAvLyBvdmVyZmxvdzogYXV0bztcclxufVxyXG5cclxuLm5leHR7XHJcbiAgICBhbGlnbi1zZWxmOmZsZXgtZW5kO1xyXG59XHJcblxyXG4uc2VsZWN0ZWR7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMXB4IDNweCAjMjA0ODczO1xyXG4gICAgY29sb3I6ICMzMzM7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5mb3JtLWlubGluZSBsYWJlbCB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IC41cmVtO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](OrganizationHierarchyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-organization-hierarchy',
                templateUrl: './organization-hierarchy.component.html',
                styleUrls: ['./organization-hierarchy.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _user_provisioning_service__WEBPACK_IMPORTED_MODULE_2__["UserProvisioningService"] }, { type: _shared_components_hierarchy_hierarchy_service__WEBPACK_IMPORTED_MODULE_3__["HierarchyService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/user-provisioning/provisioning/provisioning.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/user-provisioning/provisioning/provisioning.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ProvisioningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProvisioningComponent", function() { return ProvisioningComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _user_provisioning_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user-provisioning.service */ "./src/app/modules/user-provisioning/user-provisioning.service.ts");
/* harmony import */ var _shared_components_stepper_stepper_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/components/stepper/stepper.service */ "./src/app/shared/components/stepper/stepper.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_components_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/components/stepper/stepper.component */ "./src/app/shared/components/stepper/stepper.component.ts");






class ProvisioningComponent {
    constructor(service, stepperService, router) {
        this.service = service;
        this.stepperService = stepperService;
        this.router = router;
        this.subs = [];
        this.isSuperAdmin = false;
        this.departmentAdminSteps = [
            {
                id: 'businessrole',
                label: 'Business Role'
            },
            {
                id: 'staffinfo',
                label: 'Staff Information'
            }
        ];
        this.superAdminSteps = [
            {
                id: 'organization',
                label: 'Organization'
            },
            {
                id: 'department',
                label: 'Department'
            },
            {
                id: 'businessrole',
                label: 'Business Role'
            },
            {
                id: 'staffinfo',
                label: 'Staff Information'
            }
        ];
        this.steps = [];
    }
    ngOnInit() {
        var _a;
        this.isSuperAdmin = ((_a = JSON.parse(localStorage.getItem('user'))) === null || _a === void 0 ? void 0 : _a.type) === 1;
        this.steps = this.isSuperAdmin ? this.superAdminSteps : this.departmentAdminSteps;
        const savedSteps = localStorage.getItem('steps');
        this.subs.push(this.service.step.subscribe(step => this.watchStepChange(step)));
        if (savedSteps) {
            this.steps = JSON.parse(savedSteps);
        }
    }
    watchStepChange(step) {
        if (!step) {
            return;
        }
        switch (step.action) {
            case 'next':
                this.stepperService.next(this.steps);
                this.saveSteps();
                break;
            case 'reset':
                this.stepperService.reset(this.steps);
                this.saveSteps();
                break;
            default:
                break;
        }
    }
    saveSteps() {
        localStorage.setItem('steps', JSON.stringify(this.steps));
    }
    stepChanged(step) {
        this.saveSteps();
        this.router.navigate(['provisioning', step.id]);
    }
    ngOnDestroy() {
        localStorage.removeItem('staffProvisioning');
        this.service.clearStepSource();
        localStorage.removeItem('steps');
        this.subs.forEach(x => x.unsubscribe());
    }
}
ProvisioningComponent.ɵfac = function ProvisioningComponent_Factory(t) { return new (t || ProvisioningComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_provisioning_service__WEBPACK_IMPORTED_MODULE_1__["UserProvisioningService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_shared_components_stepper_stepper_service__WEBPACK_IMPORTED_MODULE_2__["StepperService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
ProvisioningComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProvisioningComponent, selectors: [["app-provisioning"]], decls: 3, vars: 1, consts: [[3, "steps", "onchanged"], [1, "step"]], template: function ProvisioningComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-stepper", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("onchanged", function ProvisioningComponent_Template_app_stepper_onchanged_0_listener($event) { return ctx.stepChanged($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("steps", ctx.steps);
    } }, directives: [_shared_components_stepper_stepper_component__WEBPACK_IMPORTED_MODULE_4__["StepperComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterOutlet"]], styles: [".step[_ngcontent-%COMP%] {\n  padding: 0.5rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91c2VyLXByb3Zpc2lvbmluZy9wcm92aXNpb25pbmcvcHJvdmlzaW9uaW5nLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZUFBQTtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy91c2VyLXByb3Zpc2lvbmluZy9wcm92aXNpb25pbmcvcHJvdmlzaW9uaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0ZXB7XHJcbiAgICBwYWRkaW5nOi41cmVtO1xyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProvisioningComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-provisioning',
                templateUrl: './provisioning.component.html',
                styleUrls: ['./provisioning.component.scss']
            }]
    }], function () { return [{ type: _user_provisioning_service__WEBPACK_IMPORTED_MODULE_1__["UserProvisioningService"] }, { type: _shared_components_stepper_stepper_service__WEBPACK_IMPORTED_MODULE_2__["StepperService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/user-provisioning/staff-information/staff-information.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/modules/user-provisioning/staff-information/staff-information.component.ts ***!
  \********************************************************************************************/
/*! exports provided: StaffInformationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StaffInformationComponent", function() { return StaffInformationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _user_provisioning_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../user-provisioning.service */ "./src/app/modules/user-provisioning/user-provisioning.service.ts");






class StaffInformationComponent {
    constructor(router, service, formBuilder) {
        this.router = router;
        this.service = service;
        this.formBuilder = formBuilder;
    }
    ngOnInit() {
        this.form = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
        });
    }
    save() {
        localStorage.removeItem('staffProvisioning');
        this.service.resetSTep();
        this.router.navigate(['provisioning', 'organization']);
    }
}
StaffInformationComponent.ɵfac = function StaffInformationComponent_Factory(t) { return new (t || StaffInformationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_user_provisioning_service__WEBPACK_IMPORTED_MODULE_3__["UserProvisioningService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
StaffInformationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: StaffInformationComponent, selectors: [["app-staff-information"]], decls: 24, vars: 1, consts: [[3, "formGroup"], [1, "form-group"], ["type", "text", 1, "form-control"], ["type", "email", 1, "form-control"], [1, "form-group", "date"], ["type", "date", 1, "form-control"], ["type", "button", 1, "btn", "btn-primary", 3, "click"]], template: function StaffInformationComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Staff Number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Email address");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "From Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "To Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StaffInformationComponent_Template_button_click_22_listener() { return ctx.save(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"]], styles: ["[_nghost-%COMP%] {\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  flex-flow: column;\n}\n\nform[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 22rem;\n  padding: 2rem 0;\n}\n\n.date[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.date[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  width: 49%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy91c2VyLXByb3Zpc2lvbmluZy9zdGFmZi1pbmZvcm1hdGlvbi9zdGFmZi1pbmZvcm1hdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsaUJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtBQUNKOztBQUVJO0VBQ0ksVUFBQTtBQUFSIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy91c2VyLXByb3Zpc2lvbmluZy9zdGFmZi1pbmZvcm1hdGlvbi9zdGFmZi1pbmZvcm1hdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZmxvdzogY29sdW1uO1xyXG59XHJcblxyXG5mb3Jte1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDIycmVtO1xyXG4gICAgcGFkZGluZzoycmVtIDA7XHJcbn1cclxuXHJcbi5kYXRle1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgXHJcblxyXG4gICAgPiBkaXYge1xyXG4gICAgICAgIHdpZHRoOiA0OSU7XHJcbiAgICAgICAgXHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StaffInformationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-staff-information',
                templateUrl: './staff-information.component.html',
                styleUrls: ['./staff-information.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _user_provisioning_service__WEBPACK_IMPORTED_MODULE_3__["UserProvisioningService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/user-provisioning/user-provisioning-routing.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/user-provisioning/user-provisioning-routing.module.ts ***!
  \*******************************************************************************/
/*! exports provided: UserProvisioningRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProvisioningRoutingModule", function() { return UserProvisioningRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _provisioning_provisioning_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./provisioning/provisioning.component */ "./src/app/modules/user-provisioning/provisioning/provisioning.component.ts");
/* harmony import */ var _organization_hierarchy_organization_hierarchy_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./organization-hierarchy/organization-hierarchy.component */ "./src/app/modules/user-provisioning/organization-hierarchy/organization-hierarchy.component.ts");
/* harmony import */ var _department_hierarchy_department_hierarchy_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./department-hierarchy/department-hierarchy.component */ "./src/app/modules/user-provisioning/department-hierarchy/department-hierarchy.component.ts");
/* harmony import */ var _business_role_business_role_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./business-role/business-role.component */ "./src/app/modules/user-provisioning/business-role/business-role.component.ts");
/* harmony import */ var _staff_information_staff_information_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./staff-information/staff-information.component */ "./src/app/modules/user-provisioning/staff-information/staff-information.component.ts");










const routes = [
    {
        path: '',
        component: _provisioning_provisioning_component__WEBPACK_IMPORTED_MODULE_3__["ProvisioningComponent"],
        children: [
            { path: '', redirectTo: 'organization', pathMatch: 'full' },
            { path: 'organization', component: _organization_hierarchy_organization_hierarchy_component__WEBPACK_IMPORTED_MODULE_4__["OrganizationHierarchyComponent"] },
            { path: 'department', component: _department_hierarchy_department_hierarchy_component__WEBPACK_IMPORTED_MODULE_5__["DepartmentHierarchyComponent"] },
            { path: 'businessrole', component: _business_role_business_role_component__WEBPACK_IMPORTED_MODULE_6__["BusinessRoleComponent"] },
            { path: 'staffinfo', component: _staff_information_staff_information_component__WEBPACK_IMPORTED_MODULE_7__["StaffInformationComponent"] },
        ]
    }
];
class UserProvisioningRoutingModule {
}
UserProvisioningRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserProvisioningRoutingModule });
UserProvisioningRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserProvisioningRoutingModule_Factory(t) { return new (t || UserProvisioningRoutingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserProvisioningRoutingModule, { imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserProvisioningRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/user-provisioning/user-provisioning.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/user-provisioning/user-provisioning.module.ts ***!
  \***********************************************************************/
/*! exports provided: UserProvisioningModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProvisioningModule", function() { return UserProvisioningModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _user_provisioning_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-provisioning-routing.module */ "./src/app/modules/user-provisioning/user-provisioning-routing.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _organization_hierarchy_organization_hierarchy_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./organization-hierarchy/organization-hierarchy.component */ "./src/app/modules/user-provisioning/organization-hierarchy/organization-hierarchy.component.ts");
/* harmony import */ var _provisioning_provisioning_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./provisioning/provisioning.component */ "./src/app/modules/user-provisioning/provisioning/provisioning.component.ts");
/* harmony import */ var _department_hierarchy_department_hierarchy_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./department-hierarchy/department-hierarchy.component */ "./src/app/modules/user-provisioning/department-hierarchy/department-hierarchy.component.ts");
/* harmony import */ var _business_role_business_role_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./business-role/business-role.component */ "./src/app/modules/user-provisioning/business-role/business-role.component.ts");
/* harmony import */ var _staff_information_staff_information_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./staff-information/staff-information.component */ "./src/app/modules/user-provisioning/staff-information/staff-information.component.ts");











class UserProvisioningModule {
}
UserProvisioningModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: UserProvisioningModule });
UserProvisioningModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function UserProvisioningModule_Factory(t) { return new (t || UserProvisioningModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _user_provisioning_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserProvisioningRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](UserProvisioningModule, { declarations: [_organization_hierarchy_organization_hierarchy_component__WEBPACK_IMPORTED_MODULE_5__["OrganizationHierarchyComponent"],
        _provisioning_provisioning_component__WEBPACK_IMPORTED_MODULE_6__["ProvisioningComponent"],
        _department_hierarchy_department_hierarchy_component__WEBPACK_IMPORTED_MODULE_7__["DepartmentHierarchyComponent"],
        _business_role_business_role_component__WEBPACK_IMPORTED_MODULE_8__["BusinessRoleComponent"],
        _staff_information_staff_information_component__WEBPACK_IMPORTED_MODULE_9__["StaffInformationComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _user_provisioning_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserProvisioningRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserProvisioningModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _organization_hierarchy_organization_hierarchy_component__WEBPACK_IMPORTED_MODULE_5__["OrganizationHierarchyComponent"],
                    _provisioning_provisioning_component__WEBPACK_IMPORTED_MODULE_6__["ProvisioningComponent"],
                    _department_hierarchy_department_hierarchy_component__WEBPACK_IMPORTED_MODULE_7__["DepartmentHierarchyComponent"],
                    _business_role_business_role_component__WEBPACK_IMPORTED_MODULE_8__["BusinessRoleComponent"],
                    _staff_information_staff_information_component__WEBPACK_IMPORTED_MODULE_9__["StaffInformationComponent"],
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    _user_provisioning_routing_module__WEBPACK_IMPORTED_MODULE_3__["UserProvisioningRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/modules/user-provisioning/user-provisioning.service.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/user-provisioning/user-provisioning.service.ts ***!
  \************************************************************************/
/*! exports provided: UserProvisioningService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserProvisioningService", function() { return UserProvisioningService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");



class UserProvisioningService {
    constructor() {
        this.stepSource = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.step = this.stepSource.asObservable();
    }
    nextStep(page) {
        this.stepSource.next({
            action: 'next',
            to: page,
        });
    }
    previousStep(page) {
        this.stepSource.next({
            action: 'back',
            to: page,
        });
    }
    resetSTep() {
        this.stepSource.next({
            action: 'reset',
        });
    }
    clearStepSource() {
        this.stepSource.next(null);
    }
}
UserProvisioningService.ɵfac = function UserProvisioningService_Factory(t) { return new (t || UserProvisioningService)(); };
UserProvisioningService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: UserProvisioningService, factory: UserProvisioningService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UserProvisioningService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/hierarchy/hierarchy.service.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/hierarchy/hierarchy.service.ts ***!
  \******************************************************************/
/*! exports provided: HierarchyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HierarchyService", function() { return HierarchyService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HierarchyService {
    constructor() { }
    formatOrg(hierarchy) {
        const rootNode = this.getRootNode(hierarchy);
        return Object.assign(Object.assign({}, rootNode), { subNodes: this.findChildren(rootNode, hierarchy) });
    }
    findChildren(root, hierarchy) {
        const children = hierarchy.filter(item => item.parent_id === root.id);
        return children.map(item => {
            return Object.assign(Object.assign({}, item), { subNodes: this.findChildren(item, hierarchy) });
        });
    }
    getRootNode(hierarchy) {
        return hierarchy.filter(item => !item.parent_id)[0];
    }
}
HierarchyService.ɵfac = function HierarchyService_Factory(t) { return new (t || HierarchyService)(); };
HierarchyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HierarchyService, factory: HierarchyService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HierarchyService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/shared/components/stepper/stepper.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/shared/components/stepper/stepper.service.ts ***!
  \**************************************************************/
/*! exports provided: StepperService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StepperService", function() { return StepperService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class StepperService {
    constructor() { }
    next(steps) {
        let activeIndex = this.getActiveIndex(steps);
        if (steps.length === activeIndex + 1) {
            return;
        }
        steps[activeIndex].active = false;
        steps[activeIndex].finished = true;
        activeIndex += 1;
        steps[activeIndex].active = true;
    }
    back(steps) {
        let activeIndex = this.getActiveIndex(steps);
        if (activeIndex === 0) {
            return;
        }
        steps[activeIndex].active = false;
        activeIndex -= 1;
        steps[activeIndex].active = true;
    }
    reset(steps) {
        steps.forEach(x => {
            x.finished = false;
            x.active = false;
        });
        steps[0].active = true;
    }
    getActiveIndex(steps) {
        let activeIndex = 0;
        steps.forEach((x, i) => {
            if (x.active) {
                activeIndex = i;
            }
        });
        return activeIndex;
    }
}
StepperService.ɵfac = function StepperService_Factory(t) { return new (t || StepperService)(); };
StepperService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: StepperService, factory: StepperService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StepperService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-user-provisioning-user-provisioning-module.js.map