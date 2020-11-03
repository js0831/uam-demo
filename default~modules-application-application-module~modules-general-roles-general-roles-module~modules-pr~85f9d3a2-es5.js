(function () {
  function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~modules-application-application-module~modules-general-roles-general-roles-module~modules-pr~85f9d3a2"], {
    /***/
    "./src/app/shared/components/language-field/language-field.component.ts":
    /*!******************************************************************************!*\
      !*** ./src/app/shared/components/language-field/language-field.component.ts ***!
      \******************************************************************************/

    /*! exports provided: LanguageFieldComponent */

    /***/
    function srcAppSharedComponentsLanguageFieldLanguageFieldComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LanguageFieldComponent", function () {
        return LanguageFieldComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../services/api.service */
      "./src/app/shared/services/api.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function LanguageFieldComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 4);
        }
      }

      function LanguageFieldComponent_div_6_form_7_ng_container_2_option_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var lang_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", lang_r5.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](lang_r5.langCode);
        }
      }

      function LanguageFieldComponent_div_6_form_7_ng_container_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, LanguageFieldComponent_div_6_form_7_ng_container_2_option_1_Template, 2, 2, "option", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var lang_r5 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r4.isLanguageAdded(lang_r5.id));
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "is-invalid": a0
        };
      };

      function LanguageFieldComponent_div_6_form_7_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "select", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, LanguageFieldComponent_div_6_form_7_ng_container_2_Template, 2, 1, "ng-container", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "input", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LanguageFieldComponent_div_6_form_7_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r8.add();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "add");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r2.sourceForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx_r2.isInvalid("language")));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.languages);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c0, ctx_r2.isInvalid("value")));
        }
      }

      function LanguageFieldComponent_div_6_tr_17_Template(rf, ctx) {
        if (rf & 1) {
          var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LanguageFieldComponent_div_6_tr_17_Template_a_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

            var i_r11 = ctx.index;

            var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r12["delete"](i_r11);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "delete");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var text_r10 = ctx.$implicit;

          var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r3.getLanguageName(text_r10.value.language), " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", text_r10.value.value, " ");
        }
      }

      function LanguageFieldComponent_div_6_Template(rf, ctx) {
        if (rf & 1) {
          var _r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LanguageFieldComponent_div_6_Template_span_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r15);

            var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r14.close();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, LanguageFieldComponent_div_6_form_7_Template, 6, 8, "form", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "tr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Language ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Value ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "td");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](16, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, LanguageFieldComponent_div_6_tr_17_Template, 8, 2, "tr", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.title);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.sourceForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.form);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r1.translationsFormArray.controls);
        }
      }

      var LanguageFieldComponent = /*#__PURE__*/function () {
        function LanguageFieldComponent(fb, api) {
          _classCallCheck(this, LanguageFieldComponent);

          this.fb = fb;
          this.api = api;
          this.title = '';
          this.displayValue = '';
          this.isEdit = false;
          this.languages = [{
            id: 1,
            langCode: 'en'
          }, {
            id: 2,
            langCode: 'zh_HK'
          }];
        }

        _createClass(LanguageFieldComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.sourceForm = this.fb.group({
              language: ['1', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              value: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
            this.form.addControl('translations', this.fb.array([], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required));
            this.loadDisplayText();

            if (src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].staticData) {
              return;
            }

            this.languages = [];
            this.api.list('language/getAllLanguage').subscribe(function (x) {
              _this.languages = x.languages;
            });
          }
        }, {
          key: "close",
          value: function close() {
            this.loadDisplayText();
            this.isEdit = false;
          }
        }, {
          key: "loadDisplayText",
          value: function loadDisplayText() {
            var _this2 = this;

            setTimeout(function (xx) {
              var values = _this2.translationsFormArray.value;

              if (!values || values.length === 0) {
                _this2.displayValue = '';
                return;
              }

              var found = values.filter(function (x) {
                return x.language === src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].language.toString();
              });
              var fallback = found.length === 0 ? values[0].value : found[0].value;
              _this2.displayValue = fallback;
            }, 100);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            this.form.removeControl('translations');
          }
        }, {
          key: "isInvalid",
          value: function isInvalid(name) {
            var control = this.sourceForm.get(name);
            return control.invalid && control.touched;
          }
        }, {
          key: "add",
          value: function add() {
            if (this.sourceForm.invalid) {
              return;
            }

            var source = this.sourceForm.value;
            var group = this.fb.group({
              language: [source.language, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              value: [source.value, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
            this.translationsFormArray.push(group);
            this.sourceForm.reset();
          }
        }, {
          key: "isLanguageAdded",
          value: function isLanguageAdded(id) {
            var addedValues = this.form.get('translations').value;
            return addedValues.filter(function (x) {
              return x.language === id.toString();
            }).length > 0;
          }
        }, {
          key: "getLanguageName",
          value: function getLanguageName(id) {
            var found = this.languages.filter(function (x) {
              return x.id.toString() === id;
            });
            return found.length > 0 ? found[0].langCode : '';
          }
        }, {
          key: "delete",
          value: function _delete(index) {
            this.translationsFormArray.removeAt(index);
          }
        }, {
          key: "edit",
          value: function edit() {
            this.isEdit = true;
          }
        }, {
          key: "translationsFormArray",
          get: function get() {
            return this.form.get('translations');
          }
        }]);

        return LanguageFieldComponent;
      }();

      LanguageFieldComponent.ɵfac = function LanguageFieldComponent_Factory(t) {
        return new (t || LanguageFieldComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]));
      };

      LanguageFieldComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: LanguageFieldComponent,
        selectors: [["app-language-field"]],
        inputs: {
          title: "title",
          form: "form"
        },
        decls: 7,
        vars: 4,
        consts: [[1, "display"], [3, "click"], ["class", "blocker", 4, "ngIf"], ["class", "language", 4, "ngIf"], [1, "blocker"], [1, "language"], [1, "title"], ["class", "language__input", 3, "formGroup", 4, "ngIf"], [1, "language__values", 3, "formGroup"], ["formArrayName", "translations"], [4, "ngFor", "ngForOf"], [1, "language__input", 3, "formGroup"], ["formControlName", "language", 1, "form-control", "form-control-sm", 3, "ngClass"], ["type", "text", "formControlName", "value", 1, "form-control", "form-control-sm", 3, "ngClass"], ["type", "button", 1, "btn", "btn-sm", "btn-primary", 3, "click"], [3, "value", 4, "ngIf"], [3, "value"]],
        template: function LanguageFieldComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LanguageFieldComponent_Template_a_click_3_listener() {
              return ctx.edit();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, LanguageFieldComponent_div_5_Template, 1, 0, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, LanguageFieldComponent_div_6_Template, 18, 4, "div", 3);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.displayValue);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.displayValue ? "Edit" : "Add " + ctx.title, " ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isEdit);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isEdit);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_x"]],
        styles: [".title[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 0.5rem 1rem;\n  border-bottom: 1px solid #eee;\n  height: 2.5rem;\n}\n.title[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  margin: 0;\n}\n.title[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  cursor: pointer;\n}\n.display[_ngcontent-%COMP%] {\n  display: inline-block;\n  padding: 0 0.5rem;\n}\n.display[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-weight: 500;\n}\n.display[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  cursor: pointer;\n  color: #fff;\n  background: #ff5a29;\n  border-radius: 1rem;\n  padding: 0 0.5rem;\n  height: 1.25rem;\n  min-width: 2.25rem;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  margin-left: 0.5rem;\n}\n.blocker[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(51, 51, 51, 0.8);\n  z-index: 1;\n}\n.language[_ngcontent-%COMP%] {\n  z-index: 2;\n  position: fixed;\n  top: 7rem;\n  left: 0;\n  background: #fff;\n  border-radius: 0.25rem;\n  right: 0;\n  width: 25rem;\n  margin: auto;\n}\n.language[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  padding: 1rem;\n}\n.language__input[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 0.25rem;\n  margin-bottom: 0.25rem;\n}\n.language__input[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 10rem;\n}\n.language__values[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n}\n.language__values[_ngcontent-%COMP%]   table[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.language__values[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:first-child {\n  font-weight: 500;\n}\n.language__values[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\n  padding: 0.25rem;\n}\n.language__values[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:first-child {\n  width: 6.25rem;\n}\n.language__values[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child {\n  text-align: right;\n}\n.language__values[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%]:last-child   a[_ngcontent-%COMP%] {\n  color: blue;\n  cursor: pointer;\n  font-size: 0.8rem;\n}\n.language__values[_ngcontent-%COMP%]   table[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%] {\n  border-bottom: 1px dashed #d2d2d2;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbGFuZ3VhZ2UtZmllbGQvbGFuZ3VhZ2UtZmllbGQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0JBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsOEJBQUE7RUFDQSxvQkFBQTtFQUNBLDZCQUFBO0VBQ0EsY0FBQTtBQXZCSjtBQXlCSTtFQUNJLFNBQUE7QUF2QlI7QUEwQkk7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QUF4QlI7QUE0QkE7RUFDSSxxQkFBQTtFQUNBLGlCQUFBO0FBekJKO0FBMEJJO0VBQ0ksZ0JBQUE7QUF4QlI7QUEwQkk7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUF4QlI7QUE0QkE7RUFDSSxlQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGlDQUFBO0VBQ0EsVUFBQTtBQXpCSjtBQTRCQTtFQUNJLFVBQUE7RUFDQSxlQUFBO0VBQ0EsU0FBQTtFQUNBLE9BQUE7RUFDQSxnQkFBQTtFQUVBLHNCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FBMUJKO0FBNEJJO0VBQ0ksYUFBQTtBQTFCUjtBQThCSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0FBNUJSO0FBOEJRO0VBQ0ksWUFBQTtBQTVCWjtBQWdDSTtFQUNJLGlCQUFBO0FBOUJSO0FBZ0NRO0VBQ0ksV0FBQTtBQTlCWjtBQWdDWTtFQUNJLGdCQUFBO0FBOUJoQjtBQWdDWTtFQUNJLGdCQUFBO0FBOUJoQjtBQWdDZ0I7RUFDSSxjQUFBO0FBOUJwQjtBQWlDZ0I7RUFDSSxpQkFBQTtBQS9CcEI7QUFpQ29CO0VBQ0ksV0FBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQS9CeEI7QUFvQ1k7RUFDSSxpQ0FBQTtBQWxDaEIiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9sYW5ndWFnZS1maWVsZC9sYW5ndWFnZS1maWVsZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjpob3N0e1xyXG4gICAgLy8gZGlzcGxheTogYmxvY2s7XHJcbiAgICAvLyBwYWRkaW5nOiAuNXJlbTtcclxuICAgIC8vIGJhY2tncm91bmQ6ICNlZWU7XHJcbiAgICAvLyBib3JkZXItcmFkaXVzOiAuMjVyZW07XHJcblxyXG4gICAgLy8gcG9zaXRpb246IGZpeGVkO1xyXG4gICAgLy8gdG9wOiA1cmVtO1xyXG4gICAgLy8gbGVmdDogMDtcclxuICAgIC8vIHJpZ2h0OiAwO1xyXG4gICAgLy8gbWFyZ2luOiBhdXRvO1xyXG4gICAgLy8gd2lkdGg6IDI1cmVtO1xyXG5cclxuICAgIC8vICY6OmJlZm9yZXtcclxuICAgIC8vICAgICBjb250ZW50OicnO1xyXG4gICAgLy8gICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIC8vICAgICB0b3A6MDtcclxuICAgIC8vICAgICBsZWZ0OjA7XHJcbiAgICAvLyAgICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoNTEgNTEgNTEgLyAwLjgpO1xyXG4gICAgLy8gICAgIGhlaWdodDoxMDAlO1xyXG4gICAgLy8gICAgIHdpZHRoOjEwMCU7XHJcbiAgICAvLyB9XHJcbn1cclxuXHJcbi50aXRsZXtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgcGFkZGluZzogLjVyZW0gMXJlbTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZWVlO1xyXG4gICAgaGVpZ2h0OiAyLjVyZW07XHJcblxyXG4gICAgbGFiZWx7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgfVxyXG5cclxuICAgIHNwYW57XHJcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG59XHJcblxyXG4uZGlzcGxheXtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDAgLjVyZW07XHJcbiAgICBsYWJlbHtcclxuICAgICAgICBmb250LXdlaWdodDogNTAwO1xyXG4gICAgfVxyXG4gICAgYXtcclxuICAgICAgICBmb250LXNpemU6IDAuN3JlbTtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2ZmNWEyOTtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiAxcmVtO1xyXG4gICAgICAgIHBhZGRpbmc6IDAgLjVyZW07XHJcbiAgICAgICAgaGVpZ2h0OiAxLjI1cmVtO1xyXG4gICAgICAgIG1pbi13aWR0aDogMi4yNXJlbTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAuNXJlbTtcclxuICAgIH1cclxufVxyXG5cclxuLmJsb2NrZXJ7XHJcbiAgICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNTEgNTEgNTEgLyAwLjgpO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuLmxhbmd1YWdle1xyXG4gICAgei1pbmRleDogMjtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHRvcDogN3JlbTtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgLy8gcGFkZGluZzogMXJlbTtcclxuICAgIGJvcmRlci1yYWRpdXM6IC4yNXJlbTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgd2lkdGg6IDI1cmVtO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG5cclxuICAgID4gZGl2e1xyXG4gICAgICAgIHBhZGRpbmc6MXJlbTtcclxuICAgIH1cclxuXHJcblxyXG4gICAgJl9faW5wdXR7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGdhcDogLjI1cmVtOyAgICBcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAuMjVyZW07XHJcblxyXG4gICAgICAgIHNlbGVjdHtcclxuICAgICAgICAgICAgd2lkdGg6IDEwcmVtO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAmX192YWx1ZXN7XHJcbiAgICAgICAgZm9udC1zaXplOiAuOHJlbTtcclxuXHJcbiAgICAgICAgdGFibGV7XHJcbiAgICAgICAgICAgIHdpZHRoOjEwMCU7XHJcblxyXG4gICAgICAgICAgICB0cjpmaXJzdC1jaGlsZHtcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGR7XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nOiAuMjVyZW07XHJcblxyXG4gICAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogNi4yNXJlbTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAmOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGF7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOmJsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0cntcclxuICAgICAgICAgICAgICAgIGJvcmRlci1ib3R0b206IDFweCBkYXNoZWQgI2QyZDJkMjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LanguageFieldComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-language-field',
            templateUrl: './language-field.component.html',
            styleUrls: ['./language-field.component.scss']
          }]
        }], function () {
          return [{
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
          }, {
            type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
          }];
        }, {
          title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          form: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/shared/components/modal/modal.component.ts":
    /*!************************************************************!*\
      !*** ./src/app/shared/components/modal/modal.component.ts ***!
      \************************************************************/

    /*! exports provided: ModalComponent */

    /***/
    function srcAppSharedComponentsModalModalComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ModalComponent", function () {
        return ModalComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function ModalComponent_div_0_div_3_Template(rf, ctx) {
        if (rf & 1) {
          var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h5", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_div_0_div_3_Template_button_click_3_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4);

            var ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r3.close.emit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.title);
        }
      }

      function ModalComponent_div_0_div_6_button_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_div_0_div_6_button_1_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8);

            var ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r7.submit.emit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r5.saveBtn);
        }
      }

      function ModalComponent_div_0_div_6_button_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_div_0_div_6_button_2_Template_button_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

            var ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

            return ctx_r9.close.emit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r6.closeBtn);
        }
      }

      function ModalComponent_div_0_div_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ModalComponent_div_0_div_6_button_1_Template, 2, 1, "button", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ModalComponent_div_0_div_6_button_2_Template, 2, 1, "button", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.saveBtn);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r2.closeBtn);
        }
      }

      function ModalComponent_div_0_Template(rf, ctx) {
        if (rf & 1) {
          var _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_div_0_Template_div_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            var ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r11.close.emit();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModalComponent_div_0_Template_div_click_1_listener($event) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12);

            return $event.stopPropagation();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ModalComponent_div_0_div_3_Template, 6, 1, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojection"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ModalComponent_div_0_div_6_Template, 3, 2, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.header);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r0.footer);
        }
      }

      var _c0 = ["*"];

      var ModalComponent = function ModalComponent() {
        _classCallCheck(this, ModalComponent);

        this.close = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.submit = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.show = false;
        this.saveBtn = '';
        this.closeBtn = '';
        this.title = '';
        this.footer = true;
        this.header = true;
      };

      ModalComponent.ɵfac = function ModalComponent_Factory(t) {
        return new (t || ModalComponent)();
      };

      ModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: ModalComponent,
        selectors: [["app-modal"]],
        inputs: {
          show: "show",
          saveBtn: "saveBtn",
          closeBtn: "closeBtn",
          title: "title",
          footer: "footer",
          header: "header"
        },
        outputs: {
          close: "close",
          submit: "submit"
        },
        ngContentSelectors: _c0,
        decls: 1,
        vars: 1,
        consts: [["class", "modal fade show", "style", "display: block; background: #00000080;", "tabindex", "-1", "role", "dialog", 3, "click", 4, "ngIf"], ["tabindex", "-1", "role", "dialog", 1, "modal", "fade", "show", 2, "display", "block", "background", "#00000080", 3, "click"], ["role", "document", 1, "modal-dialog", 3, "click"], [1, "modal-content"], ["class", "modal-header", 4, "ngIf"], [1, "modal-body"], ["class", "modal-footer", 4, "ngIf"], [1, "modal-header"], [1, "modal-title"], ["type", "button", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-footer"], ["type", "button", "class", "btn btn-primary", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-secondary", "data-dismiss", "modal", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], ["type", "button", "data-dismiss", "modal", 1, "btn", "btn-secondary", 3, "click"]],
        template: function ModalComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵprojectionDef"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ModalComponent_div_0_Template, 7, 2, "div", 0);
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.show);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
        styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL21vZGFsL21vZGFsLmNvbXBvbmVudC5zY3NzIn0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-modal',
            templateUrl: './modal.component.html',
            styleUrls: ['./modal.component.scss']
          }]
        }], null, {
          close: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          submit: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }],
          show: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          saveBtn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          closeBtn: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          title: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          footer: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          header: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/shared/components/multiple-selection/multiple-selection.component.ts":
    /*!**************************************************************************************!*\
      !*** ./src/app/shared/components/multiple-selection/multiple-selection.component.ts ***!
      \**************************************************************************************/

    /*! exports provided: MultipleSelectionComponent */

    /***/
    function srcAppSharedComponentsMultipleSelectionMultipleSelectionComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MultipleSelectionComponent", function () {
        return MultipleSelectionComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function MultipleSelectionComponent_li_2_Template(rf, ctx) {
        if (rf & 1) {
          var _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultipleSelectionComponent_li_2_Template_span_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5);

            var tag_r3 = ctx.$implicit;

            var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

            return ctx_r4.removeTag(tag_r3.id);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\xD7");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tag_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", tag_r3.text, " ");
        }
      }

      var _c0 = function _c0(a0) {
        return {
          active: a0
        };
      };

      function MultipleSelectionComponent_ul_5_li_1_Template(rf, ctx) {
        if (rf & 1) {
          var _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultipleSelectionComponent_ul_5_li_1_Template_li_click_0_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9);

            var item_r7 = ctx.$implicit;

            var ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

            return ctx_r8.clickSelectionItem(item_r7);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, item_r7.active));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r7.text);
        }
      }

      function MultipleSelectionComponent_ul_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, MultipleSelectionComponent_ul_5_li_1_Template, 2, 4, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.selection);
        }
      }

      var MultipleSelectionComponent = /*#__PURE__*/function () {
        function MultipleSelectionComponent() {
          _classCallCheck(this, MultipleSelectionComponent);

          this.selection = [];
          this.onSelectionChange = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
          this.tags = [];
          this.isSelectionVisible = false;
        }

        _createClass(MultipleSelectionComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.hideSelection = this.hideSelection.bind(this);
            document.addEventListener('click', this.hideSelection);
          }
        }, {
          key: "ngOnDestroy",
          value: function ngOnDestroy() {
            document.removeEventListener('click', this.hideSelection);
          }
        }, {
          key: "removeTag",
          value: function removeTag(id) {
            this.tags = this.tags.filter(function (tag) {
              if (tag.id !== id) {
                return true;
              }

              tag.active = false;
              return false;
            });
            this.onSelectionChange.emit(this.tags);
          }
        }, {
          key: "clickSelectionItem",
          value: function clickSelectionItem(tag) {
            if (!tag.active) {
              tag.active = true;
              this.tags.push(tag);
              this.onSelectionChange.emit(this.tags);
            } else {
              this.removeTag(tag.id);
            }
          }
        }, {
          key: "hideSelection",
          value: function hideSelection() {
            this.isSelectionVisible = false;
          }
        }, {
          key: "showSelection",
          value: function showSelection(event) {
            event.stopPropagation();
            this.isSelectionVisible = true;
          }
        }, {
          key: "deleteInInputBox",
          value: function deleteInInputBox(event) {
            if (event.keyCode === 8 && event.target.innerHTML === '' && this.tags.length > 0) {
              this.removeTag(this.tags[this.tags.length - 1].id);
            }
          }
        }]);

        return MultipleSelectionComponent;
      }();

      MultipleSelectionComponent.ɵfac = function MultipleSelectionComponent_Factory(t) {
        return new (t || MultipleSelectionComponent)();
      };

      MultipleSelectionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: MultipleSelectionComponent,
        selectors: [["app-multiple-selection"]],
        inputs: {
          selection: "selection"
        },
        outputs: {
          onSelectionChange: "onSelectionChange"
        },
        decls: 6,
        vars: 2,
        consts: [[1, "form-control", "form-control-sm", 3, "click"], [1, "tags-list"], [4, "ngFor", "ngForOf"], ["contenteditable", "", 1, "hidden-input-box", 3, "keydown"], ["input", ""], ["class", "selection-dropdown dropdown-menu show", 4, "ngIf"], [1, "close-btn", 3, "click"], [1, "selection-dropdown", "dropdown-menu", "show"], ["class", "dropdown-item", 3, "ngClass", "click", 4, "ngFor", "ngForOf"], [1, "dropdown-item", 3, "ngClass", "click"]],
        template: function MultipleSelectionComponent_Template(rf, ctx) {
          if (rf & 1) {
            var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MultipleSelectionComponent_Template_div_click_0_listener($event) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r10);

              var _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

              _r1.focus();

              return ctx.showSelection($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, MultipleSelectionComponent_li_2_Template, 4, 1, "li", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3, 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keydown", function MultipleSelectionComponent_Template_span_keydown_3_listener($event) {
              return ctx.deleteInInputBox($event);
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, MultipleSelectionComponent_ul_5_Template, 2, 1, "ul", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.tags);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isSelectionVisible);
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
        styles: [".form-control[_ngcontent-%COMP%] {\n  height: initial;\n  position: relative;\n}\n\n.form-control[_ngcontent-%COMP%]   .tags-list[_ngcontent-%COMP%] {\n  list-style: none;\n  display: inline-block;\n  padding: 0;\n  margin: 0;\n}\n\n.form-control[_ngcontent-%COMP%]   .tags-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: inline-block;\n  border: 1px solid #ccc;\n  border-radius: 3px;\n  background: #f8f8f8;\n  font-size: 88%;\n  padding: 0 5px;\n  margin-right: 2px;\n}\n\n.form-control[_ngcontent-%COMP%]   .hidden-input-box[_ngcontent-%COMP%] {\n  word-break: break-word;\n  display: inline-block;\n  min-width: 20px;\n  outline: none;\n  font-size: inherit;\n}\n\n.form-control[_ngcontent-%COMP%]   .selection-dropdown[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 100%;\n  left: 0;\n  right: 0;\n  margin: 0;\n  padding: 8px 0;\n  list-style: none;\n}\n\n.form-control[_ngcontent-%COMP%]   .close-btn[_ngcontent-%COMP%] {\n  margin-left: 3px;\n  cursor: pointer;\n  font-weight: 700;\n}\n\n.form-control[_ngcontent-%COMP%]   .selection-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%] {\n  cursor: pointer;\n  font-size: 80%;\n}\n\n.form-control[_ngcontent-%COMP%]   .selection-dropdown[_ngcontent-%COMP%]   .dropdown-item[_ngcontent-%COMP%]:active, .form-control[_ngcontent-%COMP%]   .selection-dropdown[_ngcontent-%COMP%]   .dropdown-item.active[_ngcontent-%COMP%] {\n  background: #c2ddf2;\n  color: #212529;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbXVsdGlwbGUtc2VsZWN0aW9uL211bHRpcGxlLXNlbGVjdGlvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGVBQUE7RUFDQSxrQkFBQTtBQUNKOztBQUNBO0VBQ0ksZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0FBRUo7O0FBQUE7RUFDSSxxQkFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0EsaUJBQUE7QUFHSjs7QUFEQTtFQUNJLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0FBSUo7O0FBRkE7RUFDSSxrQkFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFLSjs7QUFIQTtFQUNJLGdCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0FBTUo7O0FBSkE7RUFDSSxlQUFBO0VBQ0EsY0FBQTtBQU9KOztBQUxBOztFQUVJLG1CQUFBO0VBQ0EsY0FBQTtBQVFKIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvbXVsdGlwbGUtc2VsZWN0aW9uL211bHRpcGxlLXNlbGVjdGlvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtLWNvbnRyb2wge1xyXG4gICAgaGVpZ2h0OiBpbml0aWFsO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5mb3JtLWNvbnRyb2wgLnRhZ3MtbGlzdCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgcGFkZGluZzogMDtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG4uZm9ybS1jb250cm9sIC50YWdzLWxpc3QgbGkge1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcclxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgIGJhY2tncm91bmQ6ICNmOGY4Zjg7XHJcbiAgICBmb250LXNpemU6IDg4JTtcclxuICAgIHBhZGRpbmc6IDAgNXB4O1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAycHg7XHJcbn1cclxuLmZvcm0tY29udHJvbCAuaGlkZGVuLWlucHV0LWJveCB7XHJcbiAgICB3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWluLXdpZHRoOiAyMHB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogaW5oZXJpdDtcclxufVxyXG4uZm9ybS1jb250cm9sIC5zZWxlY3Rpb24tZHJvcGRvd24ge1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMDAlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogOHB4IDA7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG59XHJcbi5mb3JtLWNvbnRyb2wgLmNsb3NlLWJ0biB7XHJcbiAgICBtYXJnaW4tbGVmdDogM3B4O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcclxufVxyXG4uZm9ybS1jb250cm9sIC5zZWxlY3Rpb24tZHJvcGRvd24gLmRyb3Bkb3duLWl0ZW0ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgZm9udC1zaXplOiA4MCU7XHJcbn1cclxuLmZvcm0tY29udHJvbCAuc2VsZWN0aW9uLWRyb3Bkb3duIC5kcm9wZG93bi1pdGVtOmFjdGl2ZSxcclxuLmZvcm0tY29udHJvbCAuc2VsZWN0aW9uLWRyb3Bkb3duIC5kcm9wZG93bi1pdGVtLmFjdGl2ZSB7XHJcbiAgICBiYWNrZ3JvdW5kOiAjYzJkZGYyO1xyXG4gICAgY29sb3I6ICMyMTI1Mjk7XHJcbn0iXX0= */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MultipleSelectionComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-multiple-selection',
            templateUrl: './multiple-selection.component.html',
            styleUrls: ['./multiple-selection.component.scss']
          }]
        }], null, {
          selection: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }],
          onSelectionChange: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
          }]
        });
      })();
      /***/

    },

    /***/
    "./src/app/shared/data/locale-mapper.ts":
    /*!**********************************************!*\
      !*** ./src/app/shared/data/locale-mapper.ts ***!
      \**********************************************/

    /*! exports provided: default */

    /***/
    function srcAppSharedDataLocaleMapperTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);

      var localMapper = {
        'en-US': 1,
        'zh-HK': 2
      };
      /* harmony default export */

      __webpack_exports__["default"] = localMapper;
      /***/
    },

    /***/
    "./src/app/shared/pipes/itranslate.pipe.ts":
    /*!*************************************************!*\
      !*** ./src/app/shared/pipes/itranslate.pipe.ts ***!
      \*************************************************/

    /*! exports provided: ItranslatePipe */

    /***/
    function srcAppSharedPipesItranslatePipeTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ItranslatePipe", function () {
        return ItranslatePipe;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _data_locale_mapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../data/locale-mapper */
      "./src/app/shared/data/locale-mapper.ts");

      var ItranslatePipe = /*#__PURE__*/function () {
        function ItranslatePipe() {
          _classCallCheck(this, ItranslatePipe);
        }

        _createClass(ItranslatePipe, [{
          key: "findTranslation",
          value: function findTranslation(translations) {
            var localLangId = _data_locale_mapper__WEBPACK_IMPORTED_MODULE_1__["default"][navigator.language];
            return translations.filter(function (x) {
              return x.langId === localLangId;
            });
          }
        }, {
          key: "transform",
          value: function transform(translations) {
            if (translations && translations.length > 0) {
              var found = this.findTranslation(translations);
              var fallback = found.length === 0 ? translations[0].value : found[0].value;
              return fallback;
            }

            return '';
          }
        }]);

        return ItranslatePipe;
      }();

      ItranslatePipe.ɵfac = function ItranslatePipe_Factory(t) {
        return new (t || ItranslatePipe)();
      };

      ItranslatePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({
        name: "itranslate",
        type: ItranslatePipe,
        pure: true
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ItranslatePipe, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
          args: [{
            name: 'itranslate'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/services/api.service.ts":
    /*!************************************************!*\
      !*** ./src/app/shared/services/api.service.ts ***!
      \************************************************/

    /*! exports provided: ApiService */

    /***/
    function srcAppSharedServicesApiServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ApiService", function () {
        return ApiService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "./node_modules/rxjs/_esm2015/operators/index.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var jk_wait__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! jk-wait */
      "./node_modules/jk-wait/__ivy_ngcc__/fesm2015/jk-wait.js");

      var ApiService = /*#__PURE__*/function () {
        function ApiService(http, wait) {
          _classCallCheck(this, ApiService);

          this.http = http;
          this.wait = wait;
          this.configUrl = 'assets/config.json';
        }

        _createClass(ApiService, [{
          key: "create",
          value: function create(what, data) {
            var _this3 = this;

            this.wait.start();
            var endpoint = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL).concat(what, "/");
            return this.http.post(endpoint, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (x) {
              _this3.wait.end();

              return x;
            }));
          }
        }, {
          key: "update",
          value: function update(what, id, data) {
            var _this4 = this;

            this.wait.start();
            var endpoint = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL).concat(what, "/").concat(id);
            return this.http.put(endpoint, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (x) {
              _this4.wait.end();

              return x;
            }));
          }
        }, {
          key: "delete",
          value: function _delete(what, id) {
            var _this5 = this;

            this.wait.start();
            var endpoint = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL).concat(what, "/").concat(id);
            return this.http["delete"](endpoint).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (x) {
              _this5.wait.end();

              return x;
            }));
          }
        }, {
          key: "list",
          value: function list(ofWhat, params) {
            var _this6 = this;

            this.wait.start();
            var endpoint = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL).concat(ofWhat, "/");
            return this.http.get(endpoint, {
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (x) {
              _this6.wait.end();

              return x;
            }));
          }
        }, {
          key: "listMap",
          value: function listMap(ofWhat, params) {
            var _this7 = this;

            this.wait.start();
            var endpoint = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL).concat(ofWhat, "/");
            return this.http.get(endpoint, {
              params: params
            }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (x) {
              _this7.wait.end();

              return {
                data: x.content,
                count: x.totalElements,
                totalPage: x.totalPages
              };
            }));
          }
        }]);

        return ApiService;
      }();

      ApiService.ɵfac = function ApiService_Factory(t) {
        return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](jk_wait__WEBPACK_IMPORTED_MODULE_4__["JkWaitService"]));
      };

      ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: ApiService,
        factory: ApiService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
          }, {
            type: jk_wait__WEBPACK_IMPORTED_MODULE_4__["JkWaitService"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/services/local-data.service.ts":
    /*!*******************************************************!*\
      !*** ./src/app/shared/services/local-data.service.ts ***!
      \*******************************************************/

    /*! exports provided: LocalDataService */

    /***/
    function srcAppSharedServicesLocalDataServiceTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LocalDataService", function () {
        return LocalDataService;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

      var LocalDataService = /*#__PURE__*/function () {
        function LocalDataService() {
          _classCallCheck(this, LocalDataService);
        }

        _createClass(LocalDataService, [{
          key: "save",
          value: function save(what, data) {
            var newData = _defineProperty({}, what, data);

            if (!this.isEmpty(this.current)) {
              newData = Object.assign(Object.assign({}, this.current), _defineProperty({}, what, data));
            }

            localStorage.setItem('localData', JSON.stringify(newData));
          }
        }, {
          key: "get",
          value: function get(what) {
            if (this.isEmpty(this.current)) {
              return;
            }

            return this.current[what];
          }
        }, {
          key: "delete",
          value: function _delete(what) {
            if (this.isEmpty(this.current)) {
              return;
            }

            var clone = this.cloneObject(this.current);
            delete clone[what];
            localStorage.setItem('localData', JSON.stringify(clone));
          }
        }, {
          key: "clear",
          value: function clear() {
            localStorage.removeItem('localData');
          }
        }, {
          key: "cloneObject",
          value: function cloneObject(obj) {
            var str = JSON.stringify(obj);
            return JSON.parse(str);
          }
        }, {
          key: "isEmpty",
          value: function isEmpty(obj) {
            return Object.keys(obj).length === 0;
          }
        }, {
          key: "data",
          get: function get() {
            return this.current;
          }
        }, {
          key: "current",
          get: function get() {
            var data = localStorage.getItem('localData');
            return data ? JSON.parse(data) : {};
          }
        }]);

        return LocalDataService;
      }();

      LocalDataService.ɵfac = function LocalDataService_Factory(t) {
        return new (t || LocalDataService)();
      };

      LocalDataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
        token: LocalDataService,
        factory: LocalDataService.ɵfac,
        providedIn: 'root'
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LocalDataService, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
          args: [{
            providedIn: 'root'
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/shared.module.ts":
    /*!*****************************************!*\
      !*** ./src/app/shared/shared.module.ts ***!
      \*****************************************/

    /*! exports provided: SharedModule */

    /***/
    function srcAppSharedSharedModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedModule", function () {
        return SharedModule;
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


      var _components_modal_modal_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./components/modal/modal.component */
      "./src/app/shared/components/modal/modal.component.ts");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _components_language_field_language_field_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/language-field/language-field.component */
      "./src/app/shared/components/language-field/language-field.component.ts");
      /* harmony import */


      var _pipes_itranslate_pipe__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./pipes/itranslate.pipe */
      "./src/app/shared/pipes/itranslate.pipe.ts");
      /* harmony import */


      var _components_multiple_selection_multiple_selection_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/multiple-selection/multiple-selection.component */
      "./src/app/shared/components/multiple-selection/multiple-selection.component.ts");

      var SharedModule = function SharedModule() {
        _classCallCheck(this, SharedModule);
      };

      SharedModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: SharedModule
      });
      SharedModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function SharedModule_Factory(t) {
          return new (t || SharedModule)();
        },
        imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SharedModule, {
          declarations: [_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"], _components_language_field_language_field_component__WEBPACK_IMPORTED_MODULE_6__["LanguageFieldComponent"], _pipes_itranslate_pipe__WEBPACK_IMPORTED_MODULE_7__["ItranslatePipe"], _components_multiple_selection_multiple_selection_component__WEBPACK_IMPORTED_MODULE_8__["MultipleSelectionComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]],
          exports: [_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"], _components_language_field_language_field_component__WEBPACK_IMPORTED_MODULE_6__["LanguageFieldComponent"], _pipes_itranslate_pipe__WEBPACK_IMPORTED_MODULE_7__["ItranslatePipe"], _components_multiple_selection_multiple_selection_component__WEBPACK_IMPORTED_MODULE_8__["MultipleSelectionComponent"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            declarations: [_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"], _components_language_field_language_field_component__WEBPACK_IMPORTED_MODULE_6__["LanguageFieldComponent"], _pipes_itranslate_pipe__WEBPACK_IMPORTED_MODULE_7__["ItranslatePipe"], _components_multiple_selection_multiple_selection_component__WEBPACK_IMPORTED_MODULE_8__["MultipleSelectionComponent"]],
            exports: [_components_modal_modal_component__WEBPACK_IMPORTED_MODULE_2__["ModalComponent"], _components_language_field_language_field_component__WEBPACK_IMPORTED_MODULE_6__["LanguageFieldComponent"], _pipes_itranslate_pipe__WEBPACK_IMPORTED_MODULE_7__["ItranslatePipe"], _components_multiple_selection_multiple_selection_component__WEBPACK_IMPORTED_MODULE_8__["MultipleSelectionComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"]]
          }]
        }], null, null);
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=default~modules-application-application-module~modules-general-roles-general-roles-module~modules-pr~85f9d3a2-es5.js.map