(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-general-roles-general-roles-module"], {
    /***/
    "./src/app/modules/general-roles/application-assignment/application-assignment.component.ts":
    /*!**************************************************************************************************!*\
      !*** ./src/app/modules/general-roles/application-assignment/application-assignment.component.ts ***!
      \**************************************************************************************************/

    /*! exports provided: ApplicationAssignmentComponent */

    /***/
    function srcAppModulesGeneralRolesApplicationAssignmentApplicationAssignmentComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApplicationAssignmentComponent", function () {
        return ApplicationAssignmentComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      var ApplicationAssignmentComponent = /*#__PURE__*/function () {
        function ApplicationAssignmentComponent() {
          _classCallCheck(this, ApplicationAssignmentComponent);
        }

        _createClass(ApplicationAssignmentComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return ApplicationAssignmentComponent;
      }();

      ApplicationAssignmentComponent.ɵfac = function ApplicationAssignmentComponent_Factory(t) {
        return new (t || ApplicationAssignmentComponent)();
      };

      ApplicationAssignmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ApplicationAssignmentComponent,
        selectors: [["app-application-assignment"]],
        decls: 27,
        vars: 0,
        consts: [[1, "section-title"], [1, "application"], [1, "form-group"], [1, "form-control", "form-control-sm"], [1, "btn", "btn-primary", "btn-sm"], [1, "level-two", 2, "height", "initial"], [1, "card"], [1, "card-header"], ["type", "button", 1, "btn", "btn-link"], [1, "card-body"], ["type", "text", 1, "form-control", "form-control-sm"]],
        template: function ApplicationAssignmentComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Application Assignment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Application");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "select", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Add Application");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " First Application ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "remove");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Attr1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "select", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Attr2");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]],
        styles: [".level-two[_ngcontent-%COMP%] {\n  position: relative;\n  height: calc(100vh - 26.5rem);\n  overflow-y: auto;\n  background: #fff;\n  padding: 0.5rem;\n  border-bottom: 0.5rem solid #fff;\n  border-bottom-left-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n  border-top: 1px solid #ddd;\n}\n.level-two[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.level-two[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background-color: #f7f7f7;\n  padding: 0.5rem;\n  font-size: 0.85rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.level-two[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  padding: 0;\n}\n.level-two[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-gap: 0.25rem;\n  padding: 0.5rem;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  margin-bottom: 0.25rem;\n}\n.application[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.5rem 0;\n  background: #fff;\n  border-bottom: 0.5rem solid #fff;\n}\n.application[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n}\n.application[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-right: 1rem;\n  font-size: 0.9rem;\n}\n.application[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 20rem;\n}\n.application[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  background: #fff;\n  padding: 0.5rem;\n  border-radius: 0.25rem;\n  margin: 0;\n  border-bottom: 2px solid #b5b5b5;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9nZW5lcmFsLXJvbGVzL2FwcGxpY2F0aW9uLWFzc2lnbm1lbnQvYXBwbGljYXRpb24tYXNzaWdubWVudC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLDBCQUFBO0FBQ0o7QUFHSTtFQUNJLHFCQUFBO0FBRFI7QUFJSTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFIUjtBQUtRO0VBQ0ksaUJBQUE7RUFDQSxVQUFBO0FBSFo7QUFPSTtFQUNJLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQUxSO0FBYUE7RUFDSSxnQkFBQTtBQVZKO0FBWUk7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0FBVlI7QUFjQTtFQUNJLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtBQVhKO0FBYUk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0FBWFI7QUFhUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUFYWjtBQWNRO0VBQ0ksWUFBQTtBQVpaO0FBZVE7RUFDSSxpQkFBQTtBQWJaO0FBa0JBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7QUFmSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZ2VuZXJhbC1yb2xlcy9hcHBsaWNhdGlvbi1hc3NpZ25tZW50L2FwcGxpY2F0aW9uLWFzc2lnbm1lbnQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGV2ZWwtdHdvIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDI2LjVyZW0pO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAuNXJlbTtcclxuICAgIGJvcmRlci1ib3R0b206IC41cmVtIHNvbGlkICNmZmY7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAuMjVyZW07XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogLjI1cmVtO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7XHJcblxyXG5cclxuXHJcbiAgICAuY2FyZHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC1oZWFkZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcclxuICAgICAgICBwYWRkaW5nOi41cmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogLjg1cmVtO1xyXG5cclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgICBidXR0b257XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjdyZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtYm9keXtcclxuICAgICAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcclxuICAgICAgICBncmlkLWdhcDogMC4yNXJlbTtcclxuICAgICAgICBwYWRkaW5nOi41cmVtO1xyXG5cclxuXHJcblxyXG5cclxuICAgIH0gICAgXHJcbn1cclxuXHJcbi5mb3JtLWdyb3Vwe1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIFxyXG4gICAgbGFiZWx7XHJcbiAgICAgICAgZm9udC1zaXplOiAuNzVyZW07XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLjI1cmVtO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYXBwbGljYXRpb24ge1xyXG4gICAgcGFkZGluZzogMC41cmVtIDAuNXJlbSAwO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1ib3R0b206IC41cmVtIHNvbGlkICNmZmY7XHJcblxyXG4gICAgPiBkaXZ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cclxuICAgICAgICBsYWJlbHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtOyAgXHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjlyZW07ICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZWxlY3R7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMHJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uc2VjdGlvbi10aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogLjhyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzogLjVyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2I1YjViNTtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApplicationAssignmentComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-application-assignment',
            templateUrl: './application-assignment.component.html',
            styleUrls: ['./application-assignment.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/general-roles/attributes/attributes.component.ts":
    /*!**************************************************************************!*\
      !*** ./src/app/modules/general-roles/attributes/attributes.component.ts ***!
      \**************************************************************************/

    /*! exports provided: AttributesComponent */

    /***/
    function srcAppModulesGeneralRolesAttributesAttributesComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AttributesComponent", function () {
        return AttributesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var AttributesComponent = /*#__PURE__*/function () {
        function AttributesComponent() {
          _classCallCheck(this, AttributesComponent);
        }

        _createClass(AttributesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return AttributesComponent;
      }();

      AttributesComponent.ɵfac = function AttributesComponent_Factory(t) {
        return new (t || AttributesComponent)();
      };

      AttributesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AttributesComponent,
        selectors: [["app-attributes"]],
        decls: 30,
        vars: 0,
        consts: [[1, "table-list", "mt-2"], [1, "table-list__buttons"], [2, "font-size", "0.8rem", "font-weight", "500"], ["type", "button", 1, "btn", "btn-sm", "btn-success"], [1, "table", "table-sm", "draggable"], ["scope", "col", 2, "font-size", "14px"], [2, "font-size", "14px"], ["type", "text", 1, "form-control", "form-control-sm", 2, "font-size", "13px", "padding", "2px 4px", "height", "25px"], [1, "text-right", 2, "font-size", "14px"], ["href", "#"]],
        template: function AttributesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Attributes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Add New Attribute");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "table", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "ID");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Title");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Value");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Attr1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Sample Attribute 1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "td", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](23, "input", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "td", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "edit");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " | ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, "delete");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZ2VuZXJhbC1yb2xlcy9hdHRyaWJ1dGVzL2F0dHJpYnV0ZXMuY29tcG9uZW50LnNjc3MifQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AttributesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-attributes',
            templateUrl: './attributes.component.html',
            styleUrls: ['./attributes.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/general-roles/create-general-roles-form/create-general-roles-form.component.ts":
    /*!********************************************************************************************************!*\
      !*** ./src/app/modules/general-roles/create-general-roles-form/create-general-roles-form.component.ts ***!
      \********************************************************************************************************/

    /*! exports provided: CreateGeneralRolesFormComponent */

    /***/
    function srcAppModulesGeneralRolesCreateGeneralRolesFormCreateGeneralRolesFormComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateGeneralRolesFormComponent", function () {
        return CreateGeneralRolesFormComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

      var CreateGeneralRolesFormComponent = function CreateGeneralRolesFormComponent() {
        _classCallCheck(this, CreateGeneralRolesFormComponent);
      };

      CreateGeneralRolesFormComponent.ɵfac = function CreateGeneralRolesFormComponent_Factory(t) {
        return new (t || CreateGeneralRolesFormComponent)();
      };

      CreateGeneralRolesFormComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CreateGeneralRolesFormComponent,
        selectors: [["app-create-general-roles-form"]],
        decls: 25,
        vars: 0,
        consts: [[1, "section-title"], [1, "levelOne"], [1, "form-group"], [1, "form-control", "form-control-sm"], [1, "applicationRole"]],
        template: function CreateGeneralRolesFormComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "General Role Maintenance");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "form", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Organization");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "select", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Channel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "select", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Team");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "select", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Business Job Role");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "select", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]],
        styles: [".levelOne[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  justify-content: center;\n  padding: 0.5rem;\n  background: #fff;\n  margin-bottom: 0.5rem;\n  border-radius: 0.25rem;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.levelOne[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex: 1;\n  padding-right: 1rem;\n}\n.levelOne[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n  padding: 0;\n}\n.levelOne[_ngcontent-%COMP%]   .applicationRole[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.levelOne[_ngcontent-%COMP%]   .applicationRole[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.levelOne[_ngcontent-%COMP%]   .applicationRole[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 2rem;\n  border-bottom: 1px dashed #ddd;\n  font-size: 0.9rem;\n}\n.levelOne[_ngcontent-%COMP%]   .applicationRole[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: smaller;\n  color: blue;\n  cursor: pointer;\n}\n.level-two[_ngcontent-%COMP%] {\n  position: relative;\n  height: calc(100vh - 26.5rem);\n  overflow-y: auto;\n  background: #fff;\n  padding: 0.5rem;\n  border-bottom: 0.5rem solid #fff;\n  border-bottom-left-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n  border-top: 1px solid #ddd;\n}\n.level-two[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.level-two[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background-color: #f7f7f7;\n  padding: 0.5rem;\n  font-size: 0.85rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.level-two[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  padding: 0;\n}\n.level-two[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-gap: 0.25rem;\n  padding: 0.5rem;\n}\n.submit[_ngcontent-%COMP%] {\n  padding: 0.5rem 0;\n  text-align: right;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  margin-bottom: 0.25rem;\n}\n.application[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.5rem 0;\n  background: #fff;\n  border-bottom: 0.5rem solid #fff;\n}\n.application[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n}\n.application[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-right: 1rem;\n  font-size: 0.9rem;\n}\n.application[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 20rem;\n}\n.application[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  background: #fff;\n  padding: 0.5rem;\n  border-radius: 0.25rem;\n  margin: 0;\n  border-bottom: 2px solid #b5b5b5;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9nZW5lcmFsLXJvbGVzL2NyZWF0ZS1nZW5lcmFsLXJvbGVzLWZvcm0vY3JlYXRlLWdlbmVyYWwtcm9sZXMtZm9ybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxvQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtFQUVBLHlCQUFBO0VBQ0EsMEJBQUE7QUFBSjtBQUVJO0VBQ0ksT0FBQTtFQUNBLG1CQUFBO0FBQVI7QUFHUTtFQUNJLFVBQUE7QUFEWjtBQU9ZO0VBQ0ksYUFBQTtFQUNBLFdBQUE7QUFMaEI7QUFTUTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7QUFQWjtBQVNZO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtBQVBoQjtBQVNnQjtFQUNJLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUFQcEI7QUFjQTtFQUNJLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdDQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLDBCQUFBO0FBWEo7QUFlSTtFQUNJLHFCQUFBO0FBYlI7QUFnQkk7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBZlI7QUFpQlE7RUFDSSxpQkFBQTtFQUNBLFVBQUE7QUFmWjtBQW1CSTtFQUNJLGFBQUE7RUFDQSxxQ0FBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtBQWpCUjtBQXdCQTtFQUNJLGlCQUFBO0VBQ0EsaUJBQUE7QUFyQko7QUF3QkE7RUFDSSxnQkFBQTtBQXJCSjtBQXVCSTtFQUNJLGtCQUFBO0VBQ0Esc0JBQUE7QUFyQlI7QUF5QkE7RUFDSSx3QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0NBQUE7QUF0Qko7QUF3Qkk7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLDJCQUFBO0FBdEJSO0FBd0JRO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQXRCWjtBQXlCUTtFQUNJLFlBQUE7QUF2Qlo7QUEwQlE7RUFDSSxpQkFBQTtBQXhCWjtBQTZCQTtFQUNJLGlCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7RUFDQSxTQUFBO0VBQ0EsZ0NBQUE7RUFDQSw2QkFBQTtFQUNBLDRCQUFBO0FBMUJKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9nZW5lcmFsLXJvbGVzL2NyZWF0ZS1nZW5lcmFsLXJvbGVzLWZvcm0vY3JlYXRlLWdlbmVyYWwtcm9sZXMtZm9ybS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sZXZlbE9uZXtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBwYWRkaW5nOi41cmVtO1xyXG4gICAgYmFja2dyb3VuZDojZmZmO1xyXG4gICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XHJcblxyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAwO1xyXG5cclxuICAgID4gZGl2e1xyXG4gICAgICAgIGZsZXg6MTtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OjFyZW07XHJcbiAgICAgICAgXHJcblxyXG4gICAgICAgICY6bGFzdC1jaGlsZHtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmFwcGxpY2F0aW9uUm9sZXtcclxuICAgICAgICAuZm9ybS1ncm91cHtcclxuICAgICAgICAgICAgPiBkaXZ7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgZ2FwOiAuNXJlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdWx7XHJcbiAgICAgICAgICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgICAgIG1hcmdpbjogMDtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIGxpIHtcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6ZmxleDtcclxuICAgICAgICAgICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDJyZW07XHJcbiAgICAgICAgICAgICAgICBib3JkZXItYm90dG9tOiAxcHggZGFzaGVkICNkZGQ7XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IC45cmVtO1xyXG5cclxuICAgICAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiBzbWFsbGVyO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yOmJsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgY3Vyc29yOnBvaW50ZXJcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmxldmVsLXR3byB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwdmggLSAyNi41cmVtKTtcclxuICAgIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzogLjVyZW07XHJcbiAgICBib3JkZXItYm90dG9tOiAuNXJlbSBzb2xpZCAjZmZmO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogLjI1cmVtO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IC4yNXJlbTtcclxuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZGRkO1xyXG5cclxuXHJcblxyXG4gICAgLmNhcmR7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLjVyZW07XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtaGVhZGVye1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmN2Y3Zjc7XHJcbiAgICAgICAgcGFkZGluZzouNXJlbTtcclxuICAgICAgICBmb250LXNpemU6IC44NXJlbTtcclxuXHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuXHJcbiAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgICBmb250LXNpemU6IC43cmVtO1xyXG4gICAgICAgICAgICBwYWRkaW5nOjA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLWJvZHl7XHJcbiAgICAgICAgZGlzcGxheTpncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDUsIDFmcik7XHJcbiAgICAgICAgZ3JpZC1nYXA6IDAuMjVyZW07XHJcbiAgICAgICAgcGFkZGluZzouNXJlbTtcclxuXHJcblxyXG5cclxuXHJcbiAgICB9ICAgIFxyXG59XHJcbi5zdWJtaXR7XHJcbiAgICBwYWRkaW5nOiAuNXJlbSAwO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5mb3JtLWdyb3Vwe1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgIFxyXG4gICAgbGFiZWx7XHJcbiAgICAgICAgZm9udC1zaXplOiAuNzVyZW07XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLjI1cmVtO1xyXG4gICAgfVxyXG59XHJcblxyXG4uYXBwbGljYXRpb24ge1xyXG4gICAgcGFkZGluZzogMC41cmVtIDAuNXJlbSAwO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIGJvcmRlci1ib3R0b206IC41cmVtIHNvbGlkICNmZmY7XHJcblxyXG4gICAgPiBkaXZ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cclxuICAgICAgICBsYWJlbHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtOyAgXHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjlyZW07ICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZWxlY3R7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMHJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uc2VjdGlvbi10aXRsZXtcclxuICAgIGZvbnQtc2l6ZTogLjhyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgcGFkZGluZzogLjVyZW07XHJcbiAgICBib3JkZXItcmFkaXVzOiAuMjVyZW07XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2I1YjViNTtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxufVxyXG4iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateGeneralRolesFormComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-create-general-roles-form',
            templateUrl: './create-general-roles-form.component.html',
            styleUrls: ['./create-general-roles-form.component.scss']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/general-roles/create-general-roles/create-general-roles.component.ts":
    /*!**********************************************************************************************!*\
      !*** ./src/app/modules/general-roles/create-general-roles/create-general-roles.component.ts ***!
      \**********************************************************************************************/

    /*! exports provided: CreateGeneralRolesComponent */

    /***/
    function srcAppModulesGeneralRolesCreateGeneralRolesCreateGeneralRolesComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "CreateGeneralRolesComponent", function () {
        return CreateGeneralRolesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _create_general_roles_form_create_general_roles_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../create-general-roles-form/create-general-roles-form.component */
      "./src/app/modules/general-roles/create-general-roles-form/create-general-roles-form.component.ts");
      /* harmony import */


      var _general_roles_groups_general_roles_groups_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../general-roles-groups/general-roles-groups.component */
      "./src/app/modules/general-roles/general-roles-groups/general-roles-groups.component.ts");

      var CreateGeneralRolesComponent = function CreateGeneralRolesComponent() {
        _classCallCheck(this, CreateGeneralRolesComponent);
      };

      CreateGeneralRolesComponent.ɵfac = function CreateGeneralRolesComponent_Factory(t) {
        return new (t || CreateGeneralRolesComponent)();
      };

      CreateGeneralRolesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: CreateGeneralRolesComponent,
        selectors: [["app-create-general-roles"]],
        decls: 5,
        vars: 0,
        consts: [[1, "submit"], [1, "btn", "btn-primary"]],
        template: function CreateGeneralRolesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-create-general-roles-form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-general-roles-groups");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_create_general_roles_form_create_general_roles_form_component__WEBPACK_IMPORTED_MODULE_1__["CreateGeneralRolesFormComponent"], _general_roles_groups_general_roles_groups_component__WEBPACK_IMPORTED_MODULE_2__["GeneralRolesGroupsComponent"]],
        styles: [".levelOne[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  justify-content: center;\n  padding: 0.5rem;\n  background: #fff;\n  margin-bottom: 0.5rem;\n  border-radius: 0.25rem;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.levelOne[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex: 1;\n  padding-right: 1rem;\n}\n.levelOne[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n  padding: 0;\n}\n.levelOne[_ngcontent-%COMP%]   .applicationRole[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.levelOne[_ngcontent-%COMP%]   .applicationRole[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.levelOne[_ngcontent-%COMP%]   .applicationRole[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 2rem;\n  border-bottom: 1px dashed #ddd;\n  font-size: 0.9rem;\n}\n.levelOne[_ngcontent-%COMP%]   .applicationRole[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: smaller;\n  color: blue;\n  cursor: pointer;\n}\n.level-two[_ngcontent-%COMP%] {\n  position: relative;\n  height: calc(100vh - 26.5rem);\n  overflow-y: auto;\n  background: #fff;\n  padding: 0.5rem;\n  border-bottom: 0.5rem solid #fff;\n  border-bottom-left-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n  border-top: 1px solid #ddd;\n}\n.level-two[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.level-two[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background-color: #f7f7f7;\n  padding: 0.5rem;\n  font-size: 0.85rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.level-two[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  padding: 0;\n}\n.level-two[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-gap: 0.25rem;\n  padding: 0.5rem;\n}\n.submit[_ngcontent-%COMP%] {\n  padding: 0.5rem 0;\n  text-align: right;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  margin-bottom: 0.25rem;\n}\n.application[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.5rem 0;\n  background: #fff;\n  border-bottom: 0.5rem solid #fff;\n}\n.application[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n}\n.application[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-right: 1rem;\n  font-size: 0.9rem;\n}\n.application[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 20rem;\n}\n.application[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  background: #fff;\n  padding: 0.5rem;\n  border-radius: 0.25rem;\n  margin: 0;\n  border-bottom: 2px solid #b5b5b5;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9nZW5lcmFsLXJvbGVzL2NyZWF0ZS1nZW5lcmFsLXJvbGVzL2NyZWF0ZS1nZW5lcmFsLXJvbGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLG9CQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLHNCQUFBO0VBRUEseUJBQUE7RUFDQSwwQkFBQTtBQUFKO0FBRUk7RUFDSSxPQUFBO0VBQ0EsbUJBQUE7QUFBUjtBQUdRO0VBQ0ksVUFBQTtBQURaO0FBT1k7RUFDSSxhQUFBO0VBQ0EsV0FBQTtBQUxoQjtBQVNRO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtBQVBaO0FBU1k7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUNBLGlCQUFBO0FBUGhCO0FBU2dCO0VBQ0ksa0JBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQVBwQjtBQWNBO0VBQ0ksa0JBQUE7RUFDQSw2QkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0NBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0EsMEJBQUE7QUFYSjtBQWVJO0VBQ0kscUJBQUE7QUFiUjtBQWdCSTtFQUNJLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBRUEsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7QUFmUjtBQWlCUTtFQUNJLGlCQUFBO0VBQ0EsVUFBQTtBQWZaO0FBbUJJO0VBQ0ksYUFBQTtFQUNBLHFDQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FBakJSO0FBd0JBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQXJCSjtBQXdCQTtFQUNJLGdCQUFBO0FBckJKO0FBdUJJO0VBQ0ksa0JBQUE7RUFDQSxzQkFBQTtBQXJCUjtBQXlCQTtFQUNJLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQ0FBQTtBQXRCSjtBQXdCSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0EsMkJBQUE7QUF0QlI7QUF3QlE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBdEJaO0FBeUJRO0VBQ0ksWUFBQTtBQXZCWjtBQTBCUTtFQUNJLGlCQUFBO0FBeEJaO0FBNkJBO0VBQ0ksaUJBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtFQUNBLDZCQUFBO0VBQ0EsNEJBQUE7QUExQkoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2dlbmVyYWwtcm9sZXMvY3JlYXRlLWdlbmVyYWwtcm9sZXMvY3JlYXRlLWdlbmVyYWwtcm9sZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubGV2ZWxPbmV7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZzouNXJlbTtcclxuICAgIGJhY2tncm91bmQ6I2ZmZjtcclxuICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG5cclxuICAgIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogMDtcclxuXHJcbiAgICA+IGRpdntcclxuICAgICAgICBmbGV4OjE7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDoxcmVtO1xyXG4gICAgICAgIFxyXG5cclxuICAgICAgICAmOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5hcHBsaWNhdGlvblJvbGV7XHJcbiAgICAgICAgLmZvcm0tZ3JvdXB7XHJcbiAgICAgICAgICAgID4gZGl2e1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgIGdhcDogLjVyZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHVse1xyXG4gICAgICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgICAgICBtYXJnaW46IDA7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICBsaSB7XHJcbiAgICAgICAgICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiAycmVtO1xyXG4gICAgICAgICAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjZGRkO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiAuOXJlbTtcclxuXHJcbiAgICAgICAgICAgICAgICBhe1xyXG4gICAgICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjpibHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnNvcjpwb2ludGVyXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5sZXZlbC10d28ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMjYuNXJlbSk7XHJcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBhZGRpbmc6IC41cmVtO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogLjVyZW0gc29saWQgI2ZmZjtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IC4yNXJlbTtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAuMjVyZW07XHJcbiAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2RkZDtcclxuXHJcblxyXG5cclxuICAgIC5jYXJke1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5jYXJkLWhlYWRlcntcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjdmN2Y3O1xyXG4gICAgICAgIHBhZGRpbmc6LjVyZW07XHJcbiAgICAgICAgZm9udC1zaXplOiAuODVyZW07XHJcblxyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcblxyXG4gICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgICAgZm9udC1zaXplOiAuN3JlbTtcclxuICAgICAgICAgICAgcGFkZGluZzowO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC1ib2R5e1xyXG4gICAgICAgIGRpc3BsYXk6Z3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCg1LCAxZnIpO1xyXG4gICAgICAgIGdyaWQtZ2FwOiAwLjI1cmVtO1xyXG4gICAgICAgIHBhZGRpbmc6LjVyZW07XHJcblxyXG5cclxuXHJcblxyXG4gICAgfSAgICBcclxufVxyXG4uc3VibWl0e1xyXG4gICAgcGFkZGluZzogLjVyZW0gMDtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcblxyXG4uZm9ybS1ncm91cHtcclxuICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICBcclxuICAgIGxhYmVse1xyXG4gICAgICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IC4yNXJlbTtcclxuICAgIH1cclxufVxyXG5cclxuLmFwcGxpY2F0aW9uIHtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAwLjVyZW0gMDtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBib3JkZXItYm90dG9tOiAuNXJlbSBzb2xpZCAjZmZmO1xyXG5cclxuICAgID4gZGl2e1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuXHJcbiAgICAgICAgbGFiZWx7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIG1hcmdpbi1yaWdodDogMXJlbTsgIFxyXG4gICAgICAgICAgICBmb250LXNpemU6IC45cmVtOyAgICAgIFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2VsZWN0e1xyXG4gICAgICAgICAgICB3aWR0aDogMjByZW07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBidXR0b257XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLnNlY3Rpb24tdGl0bGV7XHJcbiAgICBmb250LXNpemU6IC44cmVtO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBhZGRpbmc6IC41cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNiNWI1YjU7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMDtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateGeneralRolesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-create-general-roles',
            templateUrl: './create-general-roles.component.html',
            styleUrls: ['./create-general-roles.component.scss']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/general-roles/edit-general-roles/edit-general-roles.component.ts":
    /*!******************************************************************************************!*\
      !*** ./src/app/modules/general-roles/edit-general-roles/edit-general-roles.component.ts ***!
      \******************************************************************************************/

    /*! exports provided: EditGeneralRolesComponent */

    /***/
    function srcAppModulesGeneralRolesEditGeneralRolesEditGeneralRolesComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "EditGeneralRolesComponent", function () {
        return EditGeneralRolesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _create_general_roles_form_create_general_roles_form_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../create-general-roles-form/create-general-roles-form.component */
      "./src/app/modules/general-roles/create-general-roles-form/create-general-roles-form.component.ts");
      /* harmony import */


      var _general_roles_groups_general_roles_groups_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../general-roles-groups/general-roles-groups.component */
      "./src/app/modules/general-roles/general-roles-groups/general-roles-groups.component.ts");

      var EditGeneralRolesComponent = function EditGeneralRolesComponent() {
        _classCallCheck(this, EditGeneralRolesComponent);
      };

      EditGeneralRolesComponent.ɵfac = function EditGeneralRolesComponent_Factory(t) {
        return new (t || EditGeneralRolesComponent)();
      };

      EditGeneralRolesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: EditGeneralRolesComponent,
        selectors: [["app-edit-general-roles"]],
        decls: 5,
        vars: 0,
        consts: [[1, "submit"], [1, "btn", "btn-primary"]],
        template: function EditGeneralRolesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-create-general-roles-form");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-general-roles-groups");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_create_general_roles_form_create_general_roles_form_component__WEBPACK_IMPORTED_MODULE_1__["CreateGeneralRolesFormComponent"], _general_roles_groups_general_roles_groups_component__WEBPACK_IMPORTED_MODULE_2__["GeneralRolesGroupsComponent"]],
        styles: [".levelOne[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: stretch;\n  justify-content: center;\n  padding: 0.5rem;\n  background: #fff;\n  margin-bottom: 0.5rem;\n  border-radius: 0.25rem;\n  border-top-left-radius: 0;\n  border-top-right-radius: 0;\n}\n.levelOne[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex: 1;\n  padding-right: 1rem;\n}\n.levelOne[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n  padding: 0;\n}\n.levelOne[_ngcontent-%COMP%]   .applicationRole[_ngcontent-%COMP%]   .form-group[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n.levelOne[_ngcontent-%COMP%]   .applicationRole[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n.levelOne[_ngcontent-%COMP%]   .applicationRole[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  height: 2rem;\n  border-bottom: 1px dashed #ddd;\n  font-size: 0.9rem;\n}\n.levelOne[_ngcontent-%COMP%]   .applicationRole[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: smaller;\n  color: blue;\n  cursor: pointer;\n}\n.level-two[_ngcontent-%COMP%] {\n  position: relative;\n  height: calc(100vh - 26.5rem);\n  overflow-y: auto;\n  background: #fff;\n  padding: 0.5rem;\n  border-bottom: 0.5rem solid #fff;\n  border-bottom-left-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n  border-top: 1px solid #ddd;\n}\n.level-two[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.level-two[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background-color: #f7f7f7;\n  padding: 0.5rem;\n  font-size: 0.85rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.level-two[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  padding: 0;\n}\n.level-two[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  grid-gap: 0.25rem;\n  padding: 0.5rem;\n}\n.submit[_ngcontent-%COMP%] {\n  padding: 0.5rem 0;\n  text-align: right;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  margin-bottom: 0.25rem;\n}\n.application[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.5rem 0;\n  background: #fff;\n  border-bottom: 0.5rem solid #fff;\n}\n.application[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n}\n.application[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-right: 1rem;\n  font-size: 0.9rem;\n}\n.application[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 20rem;\n}\n.application[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n.section-title[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  background: #fff;\n  padding: 0.5rem;\n  border-radius: 0.25rem;\n  margin: 0;\n  border-bottom: 2px solid #b5b5b5;\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9nZW5lcmFsLXJvbGVzL2VkaXQtZ2VuZXJhbC1yb2xlcy9lZGl0LWdlbmVyYWwtcm9sZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0Esb0JBQUE7RUFDQSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esc0JBQUE7RUFFQSx5QkFBQTtFQUNBLDBCQUFBO0FBQUo7QUFFSTtFQUNJLE9BQUE7RUFDQSxtQkFBQTtBQUFSO0FBR1E7RUFDSSxVQUFBO0FBRFo7QUFPWTtFQUNJLGFBQUE7RUFDQSxXQUFBO0FBTGhCO0FBU1E7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBUFo7QUFTWTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7QUFQaEI7QUFTZ0I7RUFDSSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0FBUHBCO0FBY0E7RUFDSSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSwwQkFBQTtBQVhKO0FBZUk7RUFDSSxxQkFBQTtBQWJSO0FBZ0JJO0VBQ0kseUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFFQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSw4QkFBQTtBQWZSO0FBaUJRO0VBQ0ksaUJBQUE7RUFDQSxVQUFBO0FBZlo7QUFtQkk7RUFDSSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFqQlI7QUF3QkE7RUFDSSxpQkFBQTtFQUNBLGlCQUFBO0FBckJKO0FBd0JBO0VBQ0ksZ0JBQUE7QUFyQko7QUF1Qkk7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0FBckJSO0FBeUJBO0VBQ0ksd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdDQUFBO0FBdEJKO0FBd0JJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBQXRCUjtBQXdCUTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUF0Qlo7QUF5QlE7RUFDSSxZQUFBO0FBdkJaO0FBMEJRO0VBQ0ksaUJBQUE7QUF4Qlo7QUE2QkE7RUFDSSxpQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsNkJBQUE7RUFDQSw0QkFBQTtBQTFCSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZ2VuZXJhbC1yb2xlcy9lZGl0LWdlbmVyYWwtcm9sZXMvZWRpdC1nZW5lcmFsLXJvbGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxldmVsT25le1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6LjVyZW07XHJcbiAgICBiYWNrZ3JvdW5kOiNmZmY7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxuXHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDA7XHJcblxyXG4gICAgPiBkaXZ7XHJcbiAgICAgICAgZmxleDoxO1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6MXJlbTtcclxuICAgICAgICBcclxuXHJcbiAgICAgICAgJjpsYXN0LWNoaWxke1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYXBwbGljYXRpb25Sb2xle1xyXG4gICAgICAgIC5mb3JtLWdyb3Vwe1xyXG4gICAgICAgICAgICA+IGRpdntcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICBnYXA6IC41cmVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1bHtcclxuICAgICAgICAgICAgbGlzdC1zdHlsZTogbm9uZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgbGkge1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgICAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgICAgIGhlaWdodDogMnJlbTtcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2RkZDtcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogLjlyZW07XHJcblxyXG4gICAgICAgICAgICAgICAgYXtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IHNtYWxsZXI7XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6Ymx1ZTtcclxuICAgICAgICAgICAgICAgICAgICBjdXJzb3I6cG9pbnRlclxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4ubGV2ZWwtdHdvIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGhlaWdodDogY2FsYygxMDB2aCAtIDI2LjVyZW0pO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAuNXJlbTtcclxuICAgIGJvcmRlci1ib3R0b206IC41cmVtIHNvbGlkICNmZmY7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAuMjVyZW07XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogLjI1cmVtO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7XHJcblxyXG5cclxuXHJcbiAgICAuY2FyZHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC1oZWFkZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcclxuICAgICAgICBwYWRkaW5nOi41cmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogLjg1cmVtO1xyXG5cclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgICBidXR0b257XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjdyZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtYm9keXtcclxuICAgICAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNSwgMWZyKTtcclxuICAgICAgICBncmlkLWdhcDogMC4yNXJlbTtcclxuICAgICAgICBwYWRkaW5nOi41cmVtO1xyXG5cclxuXHJcblxyXG5cclxuICAgIH0gICAgXHJcbn1cclxuLnN1Ym1pdHtcclxuICAgIHBhZGRpbmc6IC41cmVtIDA7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgXHJcbiAgICBsYWJlbHtcclxuICAgICAgICBmb250LXNpemU6IC43NXJlbTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAuMjVyZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hcHBsaWNhdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMC41cmVtIDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogLjVyZW0gc29saWQgI2ZmZjtcclxuXHJcbiAgICA+IGRpdntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XHJcblxyXG4gICAgICAgIGxhYmVse1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDFyZW07ICBcclxuICAgICAgICAgICAgZm9udC1zaXplOiAuOXJlbTsgICAgICBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNlbGVjdHtcclxuICAgICAgICAgICAgd2lkdGg6IDIwcmVtO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYnV0dG9ue1xyXG4gICAgICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5zZWN0aW9uLXRpdGxle1xyXG4gICAgZm9udC1zaXplOiAuOHJlbTtcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAuNXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjYjViNWI1O1xyXG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xyXG59XHJcbiJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditGeneralRolesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-edit-general-roles',
            templateUrl: './edit-general-roles.component.html',
            styleUrls: ['./edit-general-roles.component.scss']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/general-roles/from-to-date/from-to-date.component.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/modules/general-roles/from-to-date/from-to-date.component.ts ***!
      \******************************************************************************/

    /*! exports provided: FromToDateComponent */

    /***/
    function srcAppModulesGeneralRolesFromToDateFromToDateComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FromToDateComponent", function () {
        return FromToDateComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var FromToDateComponent = /*#__PURE__*/function () {
        function FromToDateComponent() {
          _classCallCheck(this, FromToDateComponent);
        }

        _createClass(FromToDateComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FromToDateComponent;
      }();

      FromToDateComponent.ɵfac = function FromToDateComponent_Factory(t) {
        return new (t || FromToDateComponent)();
      };

      FromToDateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FromToDateComponent,
        selectors: [["app-from-to-date"]],
        decls: 16,
        vars: 0,
        consts: [[2, "padding", "10px", "margin-bottom", "15px"], [1, "row"], [1, "col-6"], [1, "form-group"], ["type", "date", 1, "form-control", "form-control-sm"], [1, "col-6", 2, "position", "relative"], [1, "col-6", "text-right"], [1, "btn", "btn-primary", "btn-sm"]],
        template: function FromToDateComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "From Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "To Date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Add New");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZ2VuZXJhbC1yb2xlcy9mcm9tLXRvLWRhdGUvZnJvbS10by1kYXRlLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FromToDateComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-from-to-date',
            templateUrl: './from-to-date.component.html',
            styleUrls: ['./from-to-date.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/general-roles/general-role-list/general-role-list.component.ts":
    /*!****************************************************************************************!*\
      !*** ./src/app/modules/general-roles/general-role-list/general-role-list.component.ts ***!
      \****************************************************************************************/

    /*! exports provided: GeneralRoleListComponent */

    /***/
    function srcAppModulesGeneralRolesGeneralRoleListGeneralRoleListComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GeneralRoleListComponent", function () {
        return GeneralRoleListComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function GeneralRoleListComponent_tr_22_Template(rf, ctx) {
        if (rf & 1) {
          var _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "edit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeneralRoleListComponent_tr_22_Template_a_click_12_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3);

            var generalRole_r1 = ctx.$implicit;

            var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r2.remove(generalRole_r1);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var generalRole_r1 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", generalRole_r1.organization.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", generalRole_r1.channel.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", generalRole_r1.team.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", generalRole_r1.businessJobRole.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/general-roles/edit/", generalRole_r1.id, "");
        }
      }

      var GeneralRoleListComponent = /*#__PURE__*/function () {
        function GeneralRoleListComponent() {
          _classCallCheck(this, GeneralRoleListComponent);

          this.generalRoles = [];
        }

        _createClass(GeneralRoleListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.generalRoles = JSON.parse(localStorage.getItem('general-roles')) || [];
          }
        }, {
          key: "remove",
          value: function remove(generalRole) {
            if (confirm('Are you sure you want to remove this general role?')) {
              this.generalRoles = this.generalRoles.filter(function (item) {
                return item.id === generalRole.id;
              });
              localStorage.setItem('general-roles', JSON.stringify(this.generalRoles));
            }
          }
        }]);

        return GeneralRoleListComponent;
      }();

      GeneralRoleListComponent.ɵfac = function GeneralRoleListComponent_Factory(t) {
        return new (t || GeneralRoleListComponent)();
      };

      GeneralRoleListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GeneralRoleListComponent,
        selectors: [["app-general-role-list"]],
        decls: 23,
        vars: 1,
        consts: [["aria-label", "breadcrumb"], [1, "breadcrumb"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "table-list"], [1, "table-list__buttons"], ["routerLink", "/general-roles/create", "type", "button", 1, "btn", "btn-sm", "btn-primary"], [1, "table", "table-sm"], ["scope", "col"], [4, "ngFor", "ngForOf"], [1, "table-list__actions"], [3, "routerLink"], [3, "click"]],
        template: function GeneralRoleListComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ol", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "General Role List");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Add New General Role");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Organization");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Channel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Team");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Business Job Role");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, GeneralRoleListComponent_tr_22_Template, 14, 5, "tr", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.generalRoles);
          }
        },
        directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZ2VuZXJhbC1yb2xlcy9nZW5lcmFsLXJvbGUtbGlzdC9nZW5lcmFsLXJvbGUtbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralRoleListComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-general-role-list',
            templateUrl: './general-role-list.component.html',
            styleUrls: ['./general-role-list.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/general-roles/general-roles-groups/general-roles-groups.component.ts":
    /*!**********************************************************************************************!*\
      !*** ./src/app/modules/general-roles/general-roles-groups/general-roles-groups.component.ts ***!
      \**********************************************************************************************/

    /*! exports provided: GeneralRolesGroupsComponent */

    /***/
    function srcAppModulesGeneralRolesGeneralRolesGroupsGeneralRolesGroupsComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GeneralRolesGroupsComponent", function () {
        return GeneralRolesGroupsComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _from_to_date_from_to_date_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../from-to-date/from-to-date.component */
      "./src/app/modules/general-roles/from-to-date/from-to-date.component.ts");
      /* harmony import */


      var _attributes_attributes_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../attributes/attributes.component */
      "./src/app/modules/general-roles/attributes/attributes.component.ts");
      /* harmony import */


      var _application_assignment_application_assignment_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../application-assignment/application-assignment.component */
      "./src/app/modules/general-roles/application-assignment/application-assignment.component.ts");

      var GeneralRolesGroupsComponent = /*#__PURE__*/function () {
        function GeneralRolesGroupsComponent() {
          _classCallCheck(this, GeneralRolesGroupsComponent);
        }

        _createClass(GeneralRolesGroupsComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return GeneralRolesGroupsComponent;
      }();

      GeneralRolesGroupsComponent.ɵfac = function GeneralRolesGroupsComponent_Factory(t) {
        return new (t || GeneralRolesGroupsComponent)();
      };

      GeneralRolesGroupsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GeneralRolesGroupsComponent,
        selectors: [["app-general-roles-groups"]],
        decls: 4,
        vars: 0,
        consts: [[2, "background", "white", "border-radius", "5px"]],
        template: function GeneralRolesGroupsComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-from-to-date");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-attributes");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-application-assignment");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        directives: [_from_to_date_from_to_date_component__WEBPACK_IMPORTED_MODULE_1__["FromToDateComponent"], _attributes_attributes_component__WEBPACK_IMPORTED_MODULE_2__["AttributesComponent"], _application_assignment_application_assignment_component__WEBPACK_IMPORTED_MODULE_3__["ApplicationAssignmentComponent"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZ2VuZXJhbC1yb2xlcy9nZW5lcmFsLXJvbGVzLWdyb3Vwcy9nZW5lcmFsLXJvbGVzLWdyb3Vwcy5jb21wb25lbnQuc2NzcyJ9 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralRolesGroupsComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-general-roles-groups',
            templateUrl: './general-roles-groups.component.html',
            styleUrls: ['./general-roles-groups.component.scss']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/general-roles/general-roles.module.ts":
    /*!***************************************************************!*\
      !*** ./src/app/modules/general-roles/general-roles.module.ts ***!
      \***************************************************************/

    /*! exports provided: GeneralRolesModule */

    /***/
    function srcAppModulesGeneralRolesGeneralRolesModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GeneralRolesModule", function () {
        return GeneralRolesModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
      /* harmony import */


      var _general_roles_general_roles_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./general-roles/general-roles.component */
      "./src/app/modules/general-roles/general-roles/general-roles.component.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../shared/shared.module */
      "./src/app/shared/shared.module.ts");
      /* harmony import */


      var _general_role_list_general_role_list_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./general-role-list/general-role-list.component */
      "./src/app/modules/general-roles/general-role-list/general-role-list.component.ts");
      /* harmony import */


      var _create_general_roles_create_general_roles_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./create-general-roles/create-general-roles.component */
      "./src/app/modules/general-roles/create-general-roles/create-general-roles.component.ts");
      /* harmony import */


      var _edit_general_roles_edit_general_roles_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./edit-general-roles/edit-general-roles.component */
      "./src/app/modules/general-roles/edit-general-roles/edit-general-roles.component.ts");
      /* harmony import */


      var _application_assignment_application_assignment_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./application-assignment/application-assignment.component */
      "./src/app/modules/general-roles/application-assignment/application-assignment.component.ts");
      /* harmony import */


      var _attributes_attributes_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./attributes/attributes.component */
      "./src/app/modules/general-roles/attributes/attributes.component.ts");
      /* harmony import */


      var _from_to_date_from_to_date_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./from-to-date/from-to-date.component */
      "./src/app/modules/general-roles/from-to-date/from-to-date.component.ts");
      /* harmony import */


      var _general_roles_groups_general_roles_groups_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./general-roles-groups/general-roles-groups.component */
      "./src/app/modules/general-roles/general-roles-groups/general-roles-groups.component.ts");
      /* harmony import */


      var _create_general_roles_form_create_general_roles_form_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./create-general-roles-form/create-general-roles-form.component */
      "./src/app/modules/general-roles/create-general-roles-form/create-general-roles-form.component.ts");

      var routes = [{
        path: '',
        component: _general_roles_general_roles_component__WEBPACK_IMPORTED_MODULE_2__["GeneralRolesComponent"]
      }, {
        path: 'list',
        component: _general_role_list_general_role_list_component__WEBPACK_IMPORTED_MODULE_6__["GeneralRoleListComponent"]
      }, {
        path: 'create',
        component: _create_general_roles_create_general_roles_component__WEBPACK_IMPORTED_MODULE_7__["CreateGeneralRolesComponent"]
      }, {
        path: 'edit/:generalRoleId',
        component: _edit_general_roles_edit_general_roles_component__WEBPACK_IMPORTED_MODULE_8__["EditGeneralRolesComponent"]
      }];

      var GeneralRolesModule = function GeneralRolesModule() {
        _classCallCheck(this, GeneralRolesModule);
      };

      GeneralRolesModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: GeneralRolesModule
      });
      GeneralRolesModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function GeneralRolesModule_Factory(t) {
          return new (t || GeneralRolesModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GeneralRolesModule, {
          declarations: [_general_roles_general_roles_component__WEBPACK_IMPORTED_MODULE_2__["GeneralRolesComponent"], _general_role_list_general_role_list_component__WEBPACK_IMPORTED_MODULE_6__["GeneralRoleListComponent"], _create_general_roles_create_general_roles_component__WEBPACK_IMPORTED_MODULE_7__["CreateGeneralRolesComponent"], _edit_general_roles_edit_general_roles_component__WEBPACK_IMPORTED_MODULE_8__["EditGeneralRolesComponent"], _application_assignment_application_assignment_component__WEBPACK_IMPORTED_MODULE_9__["ApplicationAssignmentComponent"], _attributes_attributes_component__WEBPACK_IMPORTED_MODULE_10__["AttributesComponent"], _from_to_date_from_to_date_component__WEBPACK_IMPORTED_MODULE_11__["FromToDateComponent"], _general_roles_groups_general_roles_groups_component__WEBPACK_IMPORTED_MODULE_12__["GeneralRolesGroupsComponent"], _create_general_roles_form_create_general_roles_form_component__WEBPACK_IMPORTED_MODULE_13__["CreateGeneralRolesFormComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralRolesModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_general_roles_general_roles_component__WEBPACK_IMPORTED_MODULE_2__["GeneralRolesComponent"], _general_role_list_general_role_list_component__WEBPACK_IMPORTED_MODULE_6__["GeneralRoleListComponent"], _create_general_roles_create_general_roles_component__WEBPACK_IMPORTED_MODULE_7__["CreateGeneralRolesComponent"], _edit_general_roles_edit_general_roles_component__WEBPACK_IMPORTED_MODULE_8__["EditGeneralRolesComponent"], _application_assignment_application_assignment_component__WEBPACK_IMPORTED_MODULE_9__["ApplicationAssignmentComponent"], _attributes_attributes_component__WEBPACK_IMPORTED_MODULE_10__["AttributesComponent"], _from_to_date_from_to_date_component__WEBPACK_IMPORTED_MODULE_11__["FromToDateComponent"], _general_roles_groups_general_roles_groups_component__WEBPACK_IMPORTED_MODULE_12__["GeneralRolesGroupsComponent"], _create_general_roles_form_create_general_roles_form_component__WEBPACK_IMPORTED_MODULE_13__["CreateGeneralRolesFormComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_5__["SharedModule"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes)]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/modules/general-roles/general-roles/general-roles.component.ts":
    /*!********************************************************************************!*\
      !*** ./src/app/modules/general-roles/general-roles/general-roles.component.ts ***!
      \********************************************************************************/

    /*! exports provided: GeneralRolesComponent */

    /***/
    function srcAppModulesGeneralRolesGeneralRolesGeneralRolesComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "GeneralRolesComponent", function () {
        return GeneralRolesComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_app_shared_services_local_data_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/app/shared/services/local-data.service */
      "./src/app/shared/services/local-data.service.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function GeneralRolesComponent_li_41_Template(rf, ctx) {
        if (rf & 1) {
          var _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeneralRolesComponent_li_41_Template_a_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7);

            var i_r5 = ctx.index;

            var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r6["delete"](i_r5, "organization");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r4.name, " ");
        }
      }

      function GeneralRolesComponent_li_44_Template(rf, ctx) {
        if (rf & 1) {
          var _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeneralRolesComponent_li_44_Template_a_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11);

            var i_r9 = ctx.index;

            var ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r10["delete"](i_r9, "channel");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r8.name, " ");
        }
      }

      function GeneralRolesComponent_li_47_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeneralRolesComponent_li_47_Template_a_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var i_r13 = ctx.index;

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r14["delete"](i_r13, "team");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r12 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r12.name, " ");
        }
      }

      function GeneralRolesComponent_li_50_Template(rf, ctx) {
        if (rf & 1) {
          var _r19 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeneralRolesComponent_li_50_Template_a_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r19);

            var i_r17 = ctx.index;

            var ctx_r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r18["delete"](i_r17, "jobrole");
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r16 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", item_r16.name, " ");
        }
      }

      var _c0 = function _c0() {
        return {
          standalone: true
        };
      };

      var GeneralRolesComponent = /*#__PURE__*/function () {
        function GeneralRolesComponent(localData) {
          _classCallCheck(this, GeneralRolesComponent);

          this.localData = localData;
          this.model = {
            organization: '',
            team: '',
            channel: '',
            jobrole: ''
          };
          this.list = {
            organization: [],
            team: [],
            channel: [],
            jobrole: []
          };
        }

        _createClass(GeneralRolesComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var currentData = this.localData.get('general-roles') || {
              organization: [],
              team: [],
              channel: [],
              jobrole: []
            };
            this.list = currentData;
          }
        }, {
          key: "save",
          value: function save(what) {
            var value = this.model[what];

            if (value.length === 0) {
              return;
            }

            this.model[what] = '';
            this.list[what].push({
              id: new Date().getTime(),
              name: value
            });
            this.saveLocalData();
          }
        }, {
          key: "delete",
          value: function _delete(index, what) {
            var sure = confirm('Are you sure?');

            if (!sure) {
              return;
            }

            this.list[what] = this.list[what].filter(function (el, i) {
              return i !== index;
            });
            this.saveLocalData();
          }
        }, {
          key: "saveLocalData",
          value: function saveLocalData() {
            this.localData.save('general-roles', this.list);
          }
        }]);

        return GeneralRolesComponent;
      }();

      GeneralRolesComponent.ɵfac = function GeneralRolesComponent_Factory(t) {
        return new (t || GeneralRolesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_services_local_data_service__WEBPACK_IMPORTED_MODULE_1__["LocalDataService"]));
      };

      GeneralRolesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: GeneralRolesComponent,
        selectors: [["app-general-roles"]],
        decls: 51,
        vars: 16,
        consts: [["aria-label", "breadcrumb"], [1, "breadcrumb"], ["aria-current", "page", 1, "breadcrumb-item", "active"], [1, "table-list"], [1, "table", "table-sm"], ["scope", "col"], [1, "input-fields"], [3, "submit"], ["type", "text", 1, "form-control", "form-control-sm", 3, "ngModelOptions", "ngModel", "ngModelChange"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [4, "ngFor", "ngForOf"], [3, "click"]],
        template: function GeneralRolesComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ol", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "General Role Maintenance");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "table", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "thead");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Organization");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Channel");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Team");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "th", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Business Job Role");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "tbody");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "tr", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "form", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function GeneralRolesComponent_Template_form_submit_19_listener() {
              return ctx.save("organization");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GeneralRolesComponent_Template_input_ngModelChange_20_listener($event) {
              return ctx.model.organization = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeneralRolesComponent_Template_button_click_21_listener() {
              return ctx.save("organization");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "+");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "form", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function GeneralRolesComponent_Template_form_submit_24_listener() {
              return ctx.save("channel");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GeneralRolesComponent_Template_input_ngModelChange_25_listener($event) {
              return ctx.model.channel = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeneralRolesComponent_Template_button_click_26_listener() {
              return ctx.save("channel");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, "+");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "form", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function GeneralRolesComponent_Template_form_submit_29_listener() {
              return ctx.save("team");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GeneralRolesComponent_Template_input_ngModelChange_30_listener($event) {
              return ctx.model.team = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeneralRolesComponent_Template_button_click_31_listener() {
              return ctx.save("team");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "+");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "th");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "form", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("submit", function GeneralRolesComponent_Template_form_submit_34_listener() {
              return ctx.save("jobrole");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "input", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GeneralRolesComponent_Template_input_ngModelChange_35_listener($event) {
              return ctx.model.jobrole = $event;
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "button", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GeneralRolesComponent_Template_button_click_36_listener() {
              return ctx.save("jobrole");
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "+");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "tr");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, GeneralRolesComponent_li_41_Template, 4, 1, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](44, GeneralRolesComponent_li_44_Template, 4, 1, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](47, GeneralRolesComponent_li_47_Template, 4, 1, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "td");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "ul");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](50, GeneralRolesComponent_li_50_Template, 4, 1, "li", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](12, _c0))("ngModel", ctx.model.organization);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](13, _c0))("ngModel", ctx.model.channel);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](14, _c0))("ngModel", ctx.model.team);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModelOptions", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](15, _c0))("ngModel", ctx.model.jobrole);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.list.organization);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.list.channel);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.list.team);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.list.jobrole);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]],
        styles: [".input-fields[_ngcontent-%COMP%]   th[_ngcontent-%COMP%]   form[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.5rem;\n}\n\nul[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  border-bottom: 1px dashed #ddd;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n}\n\nul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  color: red;\n  cursor: pointer;\n}\n\ntd[_ngcontent-%COMP%], th[_ngcontent-%COMP%] {\n  border-right: 1px solid #ddd;\n  border-left: 1px solid #ddd;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9nZW5lcmFsLXJvbGVzL2dlbmVyYWwtcm9sZXMvZ2VuZXJhbC1yb2xlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDSTtFQUNJLGFBQUE7RUFDQSxXQUFBO0FBQVI7O0FBSUE7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBREo7O0FBR0k7RUFDSSw4QkFBQTtFQUVBLGFBQUE7RUFDQSw4QkFBQTtFQUNBLG1CQUFBO0FBRlI7O0FBSVE7RUFDSSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBRlo7O0FBT0E7RUFDSSw0QkFBQTtFQUNBLDJCQUFBO0FBSkoiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2dlbmVyYWwtcm9sZXMvZ2VuZXJhbC1yb2xlcy9nZW5lcmFsLXJvbGVzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmlucHV0LWZpZWxkc3tcclxuICAgIHRoIGZvcm17XHJcbiAgICAgICAgZGlzcGxheTpmbGV4O1xyXG4gICAgICAgIGdhcDogLjVyZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbnVse1xyXG4gICAgbGlzdC1zdHlsZTpub25lO1xyXG4gICAgcGFkZGluZzowO1xyXG4gICAgbWFyZ2luOjA7XHJcblxyXG4gICAgbGl7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IGRhc2hlZCAjZGRkO1xyXG5cclxuICAgICAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgICAgIGF7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjc1cmVtO1xyXG4gICAgICAgICAgICBjb2xvcjogcmVkO1xyXG4gICAgICAgICAgICBjdXJzb3I6cG9pbnRlcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbnRkLCB0aHtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNkZGQ7XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GeneralRolesComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-general-roles',
            templateUrl: './general-roles.component.html',
            styleUrls: ['./general-roles.component.scss']
          }]
        }], function () {
          return [{
            type: src_app_shared_services_local_data_service__WEBPACK_IMPORTED_MODULE_1__["LocalDataService"]
          }];
        }, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=modules-general-roles-general-roles-module-es5.js.map