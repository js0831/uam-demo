(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-department-department-module"],{

/***/ "./src/app/modules/department/department.component.ts":
/*!************************************************************!*\
  !*** ./src/app/modules/department/department.component.ts ***!
  \************************************************************/
/*! exports provided: DepartmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentComponent", function() { return DepartmentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/__ivy_ngcc__/fesm2015/ngrx-store.js");
/* harmony import */ var _store_actions_hierarchy_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions/hierarchy.action */ "./src/app/store/actions/hierarchy.action.ts");
/* harmony import */ var src_app_shared_components_hierarchy_hierarchy_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/shared/components/hierarchy/hierarchy.service */ "./src/app/shared/components/hierarchy/hierarchy.service.ts");
/* harmony import */ var _shared_components_hierarchy_hierarchy_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../shared/components/hierarchy/hierarchy.component */ "./src/app/shared/components/hierarchy/hierarchy.component.ts");
/* harmony import */ var _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/components/modal/modal.component */ "./src/app/shared/components/modal/modal.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/components/menu/menu.component */ "./src/app/shared/components/menu/menu.component.ts");












function DepartmentComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "app-menu", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DepartmentComponent_ng_template_4_Template_div_click_5_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const node_r3 = ctx.node; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.addChild(node_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Add Child");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DepartmentComponent_ng_template_4_Template_div_click_7_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const node_r3 = ctx.node; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.remove(node_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Remove");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DepartmentComponent_ng_template_4_Template_div_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const node_r3 = ctx.node; const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.edit(node_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const node_r3 = ctx.node;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](node_r3.name);
} }
function DepartmentComponent_label_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Parent:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.addNode.name, "");
} }
const FORM_TYPE_ADD = 'FORM_TYPE_ADD';
const FORM_TYPE_EDIT = 'FORM_TYPE_EDIT';
class DepartmentComponent {
    constructor(store, formBuilder, hierarchyService) {
        this.store = store;
        this.formBuilder = formBuilder;
        this.hierarchyService = hierarchyService;
        this.nodeInitialData = {
            name: 'Organization'
        };
        this.node = this.nodeInitialData;
        this.editNode = null;
        this.addNode = null;
        this.showEditModal = false;
    }
    ngOnInit() {
        const hierarchy = [
            { id: 1, name: 'CSL Limited', parent_id: null },
            { id: 2, name: 'CSO', parent_id: 1 },
            { id: 3, name: 'CRM', parent_id: 2 },
            { id: 4, name: '1010 ( BOT )', parent_id: 3 },
            { id: 5, name: 'Premium Serving', parent_id: 4 },
            { id: 6, name: '1010 Inbound', parent_id: 4 },
            { id: 7, name: 'ECS 1010', parent_id: 4 },
            { id: 8, name: 'O2F (YTB)', parent_id: 3 },
            { id: 9, name: 'O2F Inbound Team 1', parent_id: 8 },
            { id: 10, name: 'O2F Inbound Team 2 & Tier 2', parent_id: 8 }
        ];
        this.store.dispatch(Object(_store_actions_hierarchy_action__WEBPACK_IMPORTED_MODULE_3__["setNode"])({ hierarchy }));
        this.watchHierarchy();
        this.buildForm();
    }
    addChild(node) {
        this.formType = FORM_TYPE_ADD;
        this.addNode = node;
        this.editNode = null;
        this.showEditModal = true;
        this.modalTitle = 'Add Department';
    }
    remove(node) {
        if (node.subNodes && node.subNodes.length > 0) {
            alert('Cannot remove items that has children');
        }
        else {
            this.store.dispatch(Object(_store_actions_hierarchy_action__WEBPACK_IMPORTED_MODULE_3__["removeNode"])(node));
        }
    }
    edit(node) {
        this.editNode = node;
        this.addNode = null;
        this.showEditModal = true;
        this.formType = FORM_TYPE_EDIT;
        this.form.get('name').setValue(node.name);
        this.form.get('description').setValue(node.description || '');
        this.modalTitle = 'Edit Department';
    }
    submitForm() {
        if (this.formType === FORM_TYPE_EDIT) {
            this.doEditNode();
        }
        if (this.formType === FORM_TYPE_ADD) {
            this.doAddNode();
        }
        this.form.reset();
    }
    watchHierarchy() {
        this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])('hierarchy')).subscribe(value => {
            this.node = this.hierarchyService.formatOrg(value);
        });
    }
    buildForm() {
        this.form = this.formBuilder.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            description: ''
        });
    }
    doAddNode() {
        const formValue = this.form.value;
        this.store.dispatch(Object(_store_actions_hierarchy_action__WEBPACK_IMPORTED_MODULE_3__["addNode"])({
            id: new Date().getTime(),
            parent_id: this.addNode.id,
            name: formValue.name,
            description: formValue.description
        }));
        this.showEditModal = false;
    }
    doEditNode() {
        const formValue = this.form.value;
        this.store.dispatch(Object(_store_actions_hierarchy_action__WEBPACK_IMPORTED_MODULE_3__["editNode"])(Object.assign(Object.assign({}, this.editNode), { name: formValue.name, description: formValue.description })));
        this.showEditModal = false;
    }
    closeModal() {
        this.showEditModal = false;
        this.form.reset();
    }
}
DepartmentComponent.ɵfac = function DepartmentComponent_Factory(t) { return new (t || DepartmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_components_hierarchy_hierarchy_service__WEBPACK_IMPORTED_MODULE_4__["HierarchyService"])); };
DepartmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DepartmentComponent, selectors: [["app-department"]], decls: 19, vars: 8, consts: [["aria-label", "breadcrumb"], [1, "breadcrumb"], [1, "breadcrumb-item", "active"], ["nodeTemplate", ""], [1, "d-flex", "justify-content-center"], [3, "node", "nodeTemplate"], [3, "show", "saveBtn", "closeBtn", "title", "close", "submit"], [3, "formGroup"], [4, "ngIf"], [1, "form-group"], ["formControlName", "name", "type", "text", "placeholder", "Enter name", 1, "form-control"], ["formControlName", "description", "type", "text", "placeholder", "Enter description ...", 1, "form-control"], ["href", "javascript:;"], [1, "node-menu"], [3, "name"], [1, "dropdown-item", 3, "click"]], template: function DepartmentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ol", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Departments");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, DepartmentComponent_ng_template_4_Template, 11, 1, "ng-template", null, 3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "app-hierarchy", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "app-modal", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("close", function DepartmentComponent_Template_app_modal_close_8_listener() { return ctx.closeModal(); })("submit", function DepartmentComponent_Template_app_modal_submit_8_listener() { return ctx.submitForm(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "form", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, DepartmentComponent_label_10_Template, 4, 1, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "textarea", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("node", ctx.node)("nodeTemplate", _r0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("show", ctx.showEditModal)("saveBtn", "Save")("closeBtn", "Cancel")("title", ctx.modalTitle);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.form);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.addNode);
    } }, directives: [_shared_components_hierarchy_hierarchy_component__WEBPACK_IMPORTED_MODULE_5__["HierarchyComponent"], _shared_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_6__["ModalComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _shared_components_menu_menu_component__WEBPACK_IMPORTED_MODULE_8__["MenuComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZGVwYXJ0bWVudC9kZXBhcnRtZW50LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DepartmentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-department',
                templateUrl: './department.component.html',
                styleUrls: ['./department.component.scss']
            }]
    }], function () { return [{ type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: src_app_shared_components_hierarchy_hierarchy_service__WEBPACK_IMPORTED_MODULE_4__["HierarchyService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/modules/department/department.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/department/department.module.ts ***!
  \*********************************************************/
/*! exports provided: DepartmentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DepartmentModule", function() { return DepartmentModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _department_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./department.component */ "./src/app/modules/department/department.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");








const routes = [
    { path: '', component: _department_component__WEBPACK_IMPORTED_MODULE_2__["DepartmentComponent"] }
];
class DepartmentModule {
}
DepartmentModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: DepartmentModule });
DepartmentModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function DepartmentModule_Factory(t) { return new (t || DepartmentModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](DepartmentModule, { declarations: [_department_component__WEBPACK_IMPORTED_MODULE_2__["DepartmentComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DepartmentModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_department_component__WEBPACK_IMPORTED_MODULE_2__["DepartmentComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes)
                ]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-department-department-module.js.map