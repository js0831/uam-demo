(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

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


/***/ })

}]);
//# sourceMappingURL=common.js.map