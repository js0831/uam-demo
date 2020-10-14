(function () {
  function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

  function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

  function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "./$$_lazy_route_resource lazy recursive":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function $$_lazy_route_resourceLazyRecursive(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
      /***/
    },

    /***/
    "./src/app/app-routing.module.ts":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

      var routes = [];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
        type: AppRoutingModule
      });
      AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
        factory: function AppRoutingModule_Factory(t) {
          return new (t || AppRoutingModule)();
        },
        imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
          args: [{
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.component.ts":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _provisioning_provisioning_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./provisioning/provisioning.component */
      "./src/app/provisioning/provisioning.component.ts");
      /* harmony import */


      var jk_wait__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! jk-wait */
      "./node_modules/jk-wait/__ivy_ngcc__/fesm2015/jk-wait.js");

      var AppComponent = function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'uamui';
        this.downloadLink = "".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL, "staff/exportDataAsExcel");
      };

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 10,
        vars: 1,
        consts: [["target", "_blank", 3, "href"], [1, "content"], [1, "inner-content"]],
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "UAM");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Download");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "app-provisioning");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "ng-jk-wait");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("href", ctx.downloadLink, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
          }
        },
        directives: [_provisioning_provisioning_component__WEBPACK_IMPORTED_MODULE_2__["ProvisioningComponent"], jk_wait__WEBPACK_IMPORTED_MODULE_3__["JkWaitComponent"]],
        styles: ["header[_ngcontent-%COMP%] {\n  background: #0e73ce;\n  height: 3rem;\n}\nheader[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 100%;\n  width: 100%;\n  max-width: 1000px;\n  margin: auto;\n}\nheader[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 1.75rem;\n  font-weight: 300;\n}\nheader[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 0.9rem;\n}\n.content[_ngcontent-%COMP%] {\n  height: calc(100vh - 3rem);\n  background: #9c9c9c;\n  padding-top: 0.5rem;\n}\n.inner-content[_ngcontent-%COMP%] {\n  width: 100%;\n  max-width: 1000px;\n  margin: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7RUFDQSxZQUFBO0FBQ0o7QUFDSTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QUFDUjtBQUVJO0VBQ0ksV0FBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7QUFBUjtBQUdJO0VBQ0ksV0FBQTtFQUNBLGlCQUFBO0FBRFI7QUFJQTtFQUNJLDBCQUFBO0VBQ0EsbUJBQUE7RUFDQSxtQkFBQTtBQURKO0FBSUE7RUFDSSxXQUFBO0VBQ0EsaUJBQUE7RUFDQSxZQUFBO0FBREoiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoZWFkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kOiMwZTczY2U7XHJcbiAgICBoZWlnaHQ6M3JlbTtcclxuXHJcbiAgICA+IGRpdntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICAgICAgICBtYXJnaW46YXV0bztcclxuICAgIH1cclxuXHJcbiAgICBoMXtcclxuICAgICAgICBjb2xvcjogI2ZmZjtcclxuICAgICAgICBmb250LXNpemU6IDEuNzVyZW07XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgIH1cclxuXHJcbiAgICBhe1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMC45cmVtO1xyXG4gICAgfVxyXG59XHJcbi5jb250ZW50e1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gM3JlbSk7XHJcbiAgICBiYWNrZ3JvdW5kOiAjOWM5YzljO1xyXG4gICAgcGFkZGluZy10b3A6IC41cmVtO1xyXG59XHJcblxyXG4uaW5uZXItY29udGVudHtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IDEwMDBweDtcclxuICAgIG1hcmdpbjphdXRvO1xyXG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.scss']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/app.module.ts":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app-routing.module */
      "./src/app/app-routing.module.ts");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app.component */
      "./src/app/app.component.ts");
      /* harmony import */


      var _provisioning_provisioning_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./provisioning/provisioning.component */
      "./src/app/provisioning/provisioning.component.ts");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var jk_wait__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! jk-wait */
      "./node_modules/jk-wait/__ivy_ngcc__/fesm2015/jk-wait.js");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], jk_wait__WEBPACK_IMPORTED_MODULE_7__["JkWaitModule"].forRoot({
          type: 'SPINNER'
        }), _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _provisioning_provisioning_component__WEBPACK_IMPORTED_MODULE_4__["ProvisioningComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], jk_wait__WEBPACK_IMPORTED_MODULE_7__["JkWaitModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _provisioning_provisioning_component__WEBPACK_IMPORTED_MODULE_4__["ProvisioningComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], jk_wait__WEBPACK_IMPORTED_MODULE_7__["JkWaitModule"].forRoot({
              type: 'SPINNER'
            }), _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "./src/app/provisioning/provisioning.component.ts":
    /*!********************************************************!*\
      !*** ./src/app/provisioning/provisioning.component.ts ***!
      \********************************************************/

    /*! exports provided: ProvisioningComponent */

    /***/
    function srcAppProvisioningProvisioningComponentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProvisioningComponent", function () {
        return ProvisioningComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "./node_modules/tslib/tslib.es6.js");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! src/environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _shared_data_static_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../shared/data/static.data */
      "./src/app/shared/data/static.data.ts");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
      /* harmony import */


      var _shared_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../shared/services/api.service */
      "./src/app/shared/services/api.service.ts");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

      function ProvisioningComponent_option_6_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var jobDuty_r6 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", jobDuty_r6.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](jobDuty_r6.name);
        }
      }

      function ProvisioningComponent_option_12_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var br_r7 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", br_r7.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](br_r7.name);
        }
      }

      function ProvisioningComponent_option_18_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ch_r8 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ch_r8.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ch_r8.name);
        }
      }

      function ProvisioningComponent_option_24_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ch_r9 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", ch_r9.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](ch_r9.name);
        }
      }

      function ProvisioningComponent_ng_container_31_option_1_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var app_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]().$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", app_r10.id);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](app_r10.name);
        }
      }

      function ProvisioningComponent_ng_container_31_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, ProvisioningComponent_ng_container_31_option_1_Template, 2, 2, "option", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
        }

        if (rf & 2) {
          var app_r10 = ctx.$implicit;

          var ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", !ctx_r4.isAppAlreadySelected(app_r10.id));
        }
      }

      function ProvisioningComponent_div_36_div_7_option_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "option", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var option_r18 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("value", option_r18.categoryId);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", option_r18.categoryValue, " ");
        }
      }

      function ProvisioningComponent_div_36_div_7_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "label");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "select", 24);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "option");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, ProvisioningComponent_div_36_div_7_option_5_Template, 2, 2, "option", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var attr_r16 = ctx.$implicit;

          var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", attr_r16.categoryValue, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formControlName", ctx_r15.getAttributeFormName(attr_r16.categoryValue));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", attr_r16.options);
        }
      }

      function ProvisioningComponent_div_36_Template(rf, ctx) {
        if (rf & 1) {
          var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 18);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "input", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 20);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 21);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProvisioningComponent_div_36_Template_button_click_4_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r20);

            var app_r13 = ctx.$implicit;
            var i_r14 = ctx.index;

            var ctx_r19 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

            return ctx_r19.removeApplication(app_r13.id, i_r14);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "remove");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 22);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](7, ProvisioningComponent_div_36_div_7_Template, 6, 3, "div", 23);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var app_r13 = ctx.$implicit;
          var i_r14 = ctx.index;

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroupName", i_r14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", app_r13.name, " ");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", app_r13.attributes);
        }
      }

      var ProvisioningComponent = /*#__PURE__*/function () {
        function ProvisioningComponent(api, fb) {
          _classCallCheck(this, ProvisioningComponent);

          this.api = api;
          this.fb = fb;
          this.isStaticData = src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].staticData;
          this.firstLeveldata = {
            jobDuties: _shared_data_static_data__WEBPACK_IMPORTED_MODULE_3__["STATIC_DATA"].jobDuties,
            channels: _shared_data_static_data__WEBPACK_IMPORTED_MODULE_3__["STATIC_DATA"].channels,
            businessRoles: _shared_data_static_data__WEBPACK_IMPORTED_MODULE_3__["STATIC_DATA"].businessRoles,
            teams: _shared_data_static_data__WEBPACK_IMPORTED_MODULE_3__["STATIC_DATA"].teams
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

        _createClass(ProvisioningComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.buildForms();

            if (!this.isStaticData) {
              this.resetData();
              this.loadFirstLevelData();
              this.getApplications();
            }
          }
        }, {
          key: "buildForms",
          value: function buildForms() {
            this.applicationForm = this.fb.group({
              application: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            });
            this.levelOneForm = this.fb.group({
              business_role_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              channel_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              job_duty_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              team_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            });
            this.levelTwoForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
              applications: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArray"]([])
            });
          }
        }, {
          key: "addApplication",
          value: function addApplication() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var appId, app, attributes;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      if (!this.applicationForm.invalid) {
                        _context.next = 2;
                        break;
                      }

                      return _context.abrupt("return");

                    case 2:
                      appId = this.applicationForm.value.application;
                      app = this.applications.filter(function (x) {
                        return x.id.toString() === appId;
                      })[0];
                      _context.next = 6;
                      return this.getApplicationAttributes(appId);

                    case 6:
                      attributes = _context.sent;
                      this.buildApplicationsFormArray(appId);
                      app = Object.assign(Object.assign({}, app), {
                        attributes: attributes
                      });
                      this.selectedApplications.push(app);
                      this.applicationForm.reset();
                      return _context.abrupt("return");

                    case 12:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "buildApplicationsFormArray",
          value: function buildApplicationsFormArray(appId) {
            this.applicationsFormArray.push(this.fb.group({
              app_id: [appId, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              center_cd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              channel_cd: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              channel_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
              function_group_id: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
            }));
          }
        }, {
          key: "getAttributeFormName",
          value: function getAttributeFormName(attributeName) {
            var attrNameNoSpace = attributeName.replace(/\ /g, '');
            return this.commonAttributesForms[attrNameNoSpace];
          }
        }, {
          key: "getApplicationAttributes",
          value: function getApplicationAttributes(appId) {
            var e_1, _a;

            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var attributes, attributesWithOptions, attributes_1, attributes_1_1, attr, options;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.api.list('attribute/getAllAppAttribute', {
                        appId: appId
                      }).toPromise();

                    case 2:
                      attributes = _context2.sent;
                      attributesWithOptions = [];
                      _context2.prev = 4;
                      attributes_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__asyncValues"])(attributes);

                    case 6:
                      _context2.next = 8;
                      return attributes_1.next();

                    case 8:
                      attributes_1_1 = _context2.sent;

                      if (attributes_1_1.done) {
                        _context2.next = 17;
                        break;
                      }

                      attr = attributes_1_1.value;
                      _context2.next = 13;
                      return this.getAttributeOptions(appId, attr.category);

                    case 13:
                      options = _context2.sent;
                      attributesWithOptions.push(Object.assign(Object.assign({}, attr), {
                        options: options
                      }));

                    case 15:
                      _context2.next = 6;
                      break;

                    case 17:
                      _context2.next = 22;
                      break;

                    case 19:
                      _context2.prev = 19;
                      _context2.t0 = _context2["catch"](4);
                      e_1 = {
                        error: _context2.t0
                      };

                    case 22:
                      _context2.prev = 22;
                      _context2.prev = 23;

                      if (!(attributes_1_1 && !attributes_1_1.done && (_a = attributes_1["return"]))) {
                        _context2.next = 27;
                        break;
                      }

                      _context2.next = 27;
                      return _a.call(attributes_1);

                    case 27:
                      _context2.prev = 27;

                      if (!e_1) {
                        _context2.next = 30;
                        break;
                      }

                      throw e_1.error;

                    case 30:
                      return _context2.finish(27);

                    case 31:
                      return _context2.finish(22);

                    case 32:
                      return _context2.abrupt("return", attributesWithOptions);

                    case 33:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this, [[4, 19, 22, 32], [23,, 27, 31]]);
            }));
          }
        }, {
          key: "getAttributeOptions",
          value: function getAttributeOptions(appId, category) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var options;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.api.list('attribute/findValuesByCategory', {
                        appId: appId,
                        category: category
                      }).toPromise();

                    case 2:
                      options = _context3.sent;
                      return _context3.abrupt("return", options);

                    case 4:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "isAppAlreadySelected",
          value: function isAppAlreadySelected(id) {
            return this.selectedApplications.filter(function (x) {
              return x.id === id;
            }).length > 0;
          }
        }, {
          key: "removeApplication",
          value: function removeApplication(id, index) {
            this.selectedApplications = this.selectedApplications.filter(function (x) {
              return x.id !== id;
            });
            this.applicationsFormArray.removeAt(index);
            console.log(this.levelTwoForm.value);
          }
        }, {
          key: "resetData",
          value: function resetData() {
            this.firstLeveldata = {
              jobDuties: [],
              channels: [],
              businessRoles: [],
              teams: []
            };
            this.applications = [];
          }
        }, {
          key: "getApplications",
          value: function getApplications() {
            var _this = this;

            this.getListOf('application').then(function (x) {
              _this.applications = x;
            });
          }
        }, {
          key: "loadFirstLevelData",
          value: function loadFirstLevelData() {
            var _this2 = this;

            this.getListOf('job-duty').then(function (x) {
              _this2.firstLeveldata.jobDuties = x;
            });
            this.getListOf('business-role').then(function (x) {
              _this2.firstLeveldata.businessRoles = x;
            });
            this.getListOf('channel').then(function (x) {
              _this2.firstLeveldata.channels = x;
            });
            this.getListOf('team').then(function (x) {
              _this2.firstLeveldata.teams = x;
            });
          }
        }, {
          key: "getListOf",
          value: function getListOf(entity) {
            var _this3 = this;

            return new Promise(function (res, rej) {
              _this3.api.list(entity, {
                limit: 999,
                offset: 0
              }).subscribe(function (x) {
                res(x);
              });
            });
          }
        }, {
          key: "save",
          value: function save() {
            var _this4 = this;

            if (this.levelOneForm.invalid || this.levelTwoForm.invalid) {
              alert('All Fields are required');
              return;
            }

            var levelOne = this.levelOneForm.value;
            var levelTwo = this.levelTwoForm.value;
            var data = Object.assign(Object.assign({}, levelOne), {
              applications: _toConsumableArray(levelTwo.applications)
            });
            console.log(data);
            this.api.create('preset', data).subscribe(function (x) {
              _this4.levelOneForm.reset();

              _this4.levelTwoForm.reset();

              alert('Success');
            });
          }
        }, {
          key: "applicationsFormArray",
          get: function get() {
            return this.levelTwoForm.get('applications');
          }
        }]);

        return ProvisioningComponent;
      }();

      ProvisioningComponent.ɵfac = function ProvisioningComponent_Factory(t) {
        return new (t || ProvisioningComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_shared_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]));
      };

      ProvisioningComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
        type: ProvisioningComponent,
        selectors: [["app-provisioning"]],
        decls: 40,
        vars: 9,
        consts: [[1, "levelOne", 3, "formGroup"], [1, "form-group"], ["formControlName", "job_duty_id", 1, "form-control", "form-control-sm"], [3, "value", 4, "ngFor", "ngForOf"], ["formControlName", "business_role_id", 1, "form-control", "form-control-sm"], ["formControlName", "channel_id", 1, "form-control", "form-control-sm"], ["formControlName", "team_id", 1, "form-control", "form-control-sm"], [1, "application", 3, "formGroup"], ["formControlName", "application", 1, "form-control", "form-control-sm"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-primary", "btn-sm", 3, "click"], [1, "level-two", 3, "formGroup"], ["formArrayName", "applications"], ["class", "card", 3, "formGroupName", 4, "ngFor", "ngForOf"], [1, "submit"], [1, "btn", "btn-primary", 3, "click"], [3, "value"], [3, "value", 4, "ngIf"], [1, "card", 3, "formGroupName"], ["type", "hidden", "formControlName", "app_id"], [1, "card-header"], ["type", "button", 1, "btn", "btn-link", 3, "click"], [1, "card-body"], ["class", "form-group", 4, "ngFor", "ngForOf"], [1, "form-control", "form-control-sm", 3, "formControlName"]],
        template: function ProvisioningComponent_Template(rf, ctx) {
          if (rf & 1) {
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

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](19, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, "Team");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "select", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](23, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](24, ProvisioningComponent_option_24_Template, 2, 2, "option", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "form", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "label");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, "Application");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "select", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](30, "option");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](31, ProvisioningComponent_ng_container_31_Template, 2, 1, "ng-container", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](32, "button", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProvisioningComponent_Template_button_click_32_listener() {
              return ctx.addApplication();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](33, "Add Application");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](34, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](36, ProvisioningComponent_div_36_Template, 8, 3, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "button", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function ProvisioningComponent_Template_button_click_38_listener() {
              return ctx.save();
            });

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, "Save");

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.levelOneForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.firstLeveldata.jobDuties);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.firstLeveldata.businessRoles);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.firstLeveldata.channels);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.firstLeveldata.teams);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.applicationForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](6);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.applications);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("formGroup", ctx.levelTwoForm);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", ctx.selectedApplications);
          }
        },
        directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["SelectControlValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgSelectOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_x"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormArrayName"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupName"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"]],
        styles: [".levelOne[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 0.5rem;\n  background: #fff;\n  margin-bottom: 0.5rem;\n  border-radius: 0.25rem;\n}\n.levelOne[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  flex: 1;\n  padding-right: 1rem;\n}\n.levelOne[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]:last-child {\n  padding: 0;\n}\n.level-two[_ngcontent-%COMP%] {\n  position: relative;\n  height: calc(100vh - 15rem);\n  overflow-y: auto;\n  background: #fff;\n  padding: 0.5rem;\n  border-bottom: 0.5rem solid #fff;\n  border-bottom-left-radius: 0.25rem;\n  border-bottom-right-radius: 0.25rem;\n  border-top: 1px solid #ddd;\n}\n.level-two[_ngcontent-%COMP%]   .card[_ngcontent-%COMP%] {\n  margin-bottom: 0.5rem;\n}\n.level-two[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%] {\n  background-color: #f7f7f7;\n  padding: 0.5rem;\n  font-size: 0.85rem;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n}\n.level-two[_ngcontent-%COMP%]   .card-header[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  padding: 0;\n}\n.level-two[_ngcontent-%COMP%]   .card-body[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  grid-gap: 0.25rem;\n  padding: 0.5rem;\n}\n.submit[_ngcontent-%COMP%] {\n  padding: 0.5rem 0;\n  text-align: right;\n}\n.form-group[_ngcontent-%COMP%] {\n  margin-bottom: 0;\n}\n.form-group[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  font-size: 0.75rem;\n  margin-bottom: 0.25rem;\n}\n.application[_ngcontent-%COMP%] {\n  padding: 0.5rem 0.5rem 0;\n  background: #fff;\n  border-top-left-radius: 0.25rem;\n  border-top-right-radius: 0.25rem;\n  border-bottom: 0.5rem solid #fff;\n}\n.application[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: flex-start;\n}\n.application[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  margin-right: 1rem;\n  font-size: 0.9rem;\n}\n.application[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   select[_ngcontent-%COMP%] {\n  width: 20rem;\n}\n.application[_ngcontent-%COMP%]    > div[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin-left: auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvdmlzaW9uaW5nL3Byb3Zpc2lvbmluZy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EscUJBQUE7RUFDQSxzQkFBQTtBQUNKO0FBQ0k7RUFDSSxPQUFBO0VBQ0EsbUJBQUE7QUFDUjtBQUNRO0VBQ0ksVUFBQTtBQUNaO0FBSUE7RUFDSSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQ0FBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSwwQkFBQTtBQURKO0FBS0k7RUFDSSxxQkFBQTtBQUhSO0FBTUk7RUFDSSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUVBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLDhCQUFBO0FBTFI7QUFPUTtFQUNJLGlCQUFBO0VBQ0EsVUFBQTtBQUxaO0FBU0k7RUFDSSxhQUFBO0VBQ0EscUNBQUE7RUFDQSxpQkFBQTtFQUNBLGVBQUE7QUFQUjtBQWNBO0VBQ0ksaUJBQUE7RUFDQSxpQkFBQTtBQVhKO0FBY0E7RUFDSSxnQkFBQTtBQVhKO0FBYUk7RUFDSSxrQkFBQTtFQUNBLHNCQUFBO0FBWFI7QUFlQTtFQUNJLHdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSwrQkFBQTtFQUNBLGdDQUFBO0VBQ0EsZ0NBQUE7QUFaSjtBQWNJO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtBQVpSO0FBY1E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGlCQUFBO0FBWlo7QUFlUTtFQUNJLFlBQUE7QUFiWjtBQWdCUTtFQUNJLGlCQUFBO0FBZFoiLCJmaWxlIjoic3JjL2FwcC9wcm92aXNpb25pbmcvcHJvdmlzaW9uaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxldmVsT25le1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgcGFkZGluZzouNXJlbTtcclxuICAgIGJhY2tncm91bmQ6I2ZmZjtcclxuICAgIG1hcmdpbi1ib3R0b206IC41cmVtO1xyXG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG5cclxuICAgID4gZGl2e1xyXG4gICAgICAgIGZsZXg6MTtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OjFyZW07XHJcblxyXG4gICAgICAgICY6bGFzdC1jaGlsZHtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5sZXZlbC10d28ge1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMTVyZW0pO1xyXG4gICAgb3ZlcmZsb3cteTogYXV0bztcclxuICAgIGJhY2tncm91bmQ6ICNmZmY7XHJcbiAgICBwYWRkaW5nOiAuNXJlbTtcclxuICAgIGJvcmRlci1ib3R0b206IC41cmVtIHNvbGlkICNmZmY7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAuMjVyZW07XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogLjI1cmVtO1xyXG4gICAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNkZGQ7XHJcblxyXG5cclxuXHJcbiAgICAuY2FyZHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAuNXJlbTtcclxuICAgIH1cclxuXHJcbiAgICAuY2FyZC1oZWFkZXJ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y3ZjdmNztcclxuICAgICAgICBwYWRkaW5nOi41cmVtO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogLjg1cmVtO1xyXG5cclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG5cclxuICAgICAgICBidXR0b257XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjdyZW07XHJcbiAgICAgICAgICAgIHBhZGRpbmc6MDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLmNhcmQtYm9keXtcclxuICAgICAgICBkaXNwbGF5OmdyaWQ7XHJcbiAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoNCwgMWZyKTtcclxuICAgICAgICBncmlkLWdhcDogMC4yNXJlbTtcclxuICAgICAgICBwYWRkaW5nOi41cmVtO1xyXG5cclxuXHJcblxyXG5cclxuICAgIH0gICAgXHJcbn1cclxuLnN1Ym1pdHtcclxuICAgIHBhZGRpbmc6IC41cmVtIDA7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgXHJcbiAgICBsYWJlbHtcclxuICAgICAgICBmb250LXNpemU6IC43NXJlbTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAuMjVyZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbi5hcHBsaWNhdGlvbiB7XHJcbiAgICBwYWRkaW5nOiAwLjVyZW0gMC41cmVtIDA7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZmZmO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogLjI1cmVtO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IC4yNXJlbTtcclxuICAgIGJvcmRlci1ib3R0b206IC41cmVtIHNvbGlkICNmZmY7XHJcblxyXG4gICAgPiBkaXZ7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG5cclxuICAgICAgICBsYWJlbHtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtOyAgXHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogLjlyZW07ICAgICAgXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZWxlY3R7XHJcbiAgICAgICAgICAgIHdpZHRoOiAyMHJlbTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGJ1dHRvbntcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](ProvisioningComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
          args: [{
            selector: 'app-provisioning',
            templateUrl: './provisioning.component.html',
            styleUrls: ['./provisioning.component.scss']
          }]
        }], function () {
          return [{
            type: _shared_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
          }, {
            type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "./src/app/shared/data/static.data.ts":
    /*!********************************************!*\
      !*** ./src/app/shared/data/static.data.ts ***!
      \********************************************/

    /*! exports provided: STATIC_DATA */

    /***/
    function srcAppSharedDataStaticDataTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "STATIC_DATA", function () {
        return STATIC_DATA;
      });

      var STATIC_DATA = {
        applications: [{
          id: 1,
          name: 'SVC',
          attributes: [{
            id: 1,
            name: 'Function Group'
          }, {
            id: 2,
            name: 'Channel ID'
          }, {
            id: 3,
            name: 'Channel CD'
          }, {
            id: 4,
            name: 'Center CD'
          }]
        }, {
          id: 2,
          name: 'BOM',
          attributes: [{
            id: 1,
            name: 'Function Group'
          }, {
            id: 2,
            name: 'Channel ID'
          }, {
            id: 3,
            name: 'Channel CD'
          }, {
            id: 4,
            name: 'Center CD'
          }]
        }, {
          id: 3,
          name: 'Salesforce',
          attributes: [{
            id: 1,
            name: 'Function Group'
          }, {
            id: 2,
            name: 'Channel ID'
          }, {
            id: 3,
            name: 'Channel CD'
          }, {
            id: 4,
            name: 'Center CD'
          }, {
            id: 5,
            name: 'Profile'
          }]
        }],
        jobDuties: [{
          id: 1,
          name: 'Fullfilment / CFM'
        }, {
          id: 2,
          name: 'Smart Charge / SCS'
        }, {
          id: 3,
          name: 'Outbound Sales (call center) / OBS'
        }],
        businessRoles: [{
          id: 1,
          name: 'Supervisor'
        }, {
          id: 2,
          name: 'Frontline'
        }, {
          id: 3,
          name: 'Sales Manager'
        }, {
          id: 4,
          name: 'Support'
        }],
        channels: [{
          id: 5,
          name: 'CS_SC_14'
        }, {
          id: 1,
          name: 'VCC'
        }, {
          id: 2,
          name: 'OBS'
        }, {
          id: 3,
          name: 'RET'
        }, {
          id: 4,
          name: 'CSS'
        }],
        teams: [{
          id: 1,
          name: 'CS_SC_14'
        }, {
          id: 2,
          name: 'VCC'
        }, {
          id: 3,
          name: 'OBS'
        }, {
          id: 4,
          name: 'RET'
        }, {
          id: 5,
          name: 'CSS'
        }],
        attributes: [{
          id: 1,
          name: 'Function Group',
          options: [{
            label: 'RS-CSL-FRONTLINE',
            value: '1'
          }, {
            label: 'LTS-RET-SM',
            value: '1'
          }, {
            label: 'CFM3-F&S-SMART-LIVING ONLY SUPPORT',
            value: '1'
          }, {
            label: 'PCD-RET-SM',
            value: '1'
          }, {
            label: 'QOM-QSI',
            value: '1'
          }, {
            label: 'RS-CSL-FRONTLINE',
            value: '1'
          }, {
            label: 'CSS-IMSTS - AGENT',
            value: '1'
          }, {
            label: 'CSS-IMSTS - MANAGER',
            value: '1'
          }]
        }, {
          id: 2,
          name: 'Channel ID',
          options: [{
            label: 1,
            value: 1
          }, {
            label: 2,
            value: 2
          }, {
            label: 3,
            value: 3
          }, {
            label: 4,
            value: 4
          }, {
            label: 5,
            value: 5
          }]
        }, {
          id: 3,
          name: 'Channel CD',
          options: [{
            label: 'QOM',
            value: 'QOM'
          }, {
            label: 'CSS',
            value: 'CSS'
          }, {
            label: 'IBS',
            value: 'IBS'
          }, {
            label: 'VCC',
            value: 'VCC'
          }, {
            label: 'CFM1',
            value: 'CFM1'
          }, {
            label: 'CPA(LTS)',
            value: 'CPA(LTS)'
          }, {
            label: 'DS6',
            value: 'DS6'
          }]
        }, {
          id: 4,
          name: 'Center CD',
          options: [{
            label: 'CS SERVICE CENTER',
            value: 'CS SERVICE CENTER'
          }, {
            label: 'TTW/33',
            value: 'TTW/33'
          }, {
            label: 'SHOP TEAM 2',
            value: 'SHOP TEAM 2'
          }, {
            label: 'QOM',
            value: 'QOM'
          }, {
            label: 'RETENTION TEAM',
            value: 'RETENTION TEAM'
          }, {
            label: 'F&S',
            value: 'F&S'
          }, {
            label: 'DEL RETENTION',
            value: 'DEL RETENTION'
          }, {
            label: 'SHOP TEAM 7',
            value: 'SHOP TEAM 7'
          }]
        }, {
          id: 5,
          name: 'Profile',
          options: [{
            label: 'System Administration',
            value: 'System Administration'
          }, {
            label: 'Sales Manager',
            value: 'Sales Manager'
          }, {
            label: 'Product Encoder',
            value: 'Product Encoder'
          }, {
            label: 'Marketing',
            value: 'Marketing'
          }, {
            label: 'Developer',
            value: 'Developer'
          }]
        }]
      };
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
            var _this5 = this;

            this.wait.start();
            var endpoint = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL).concat(what, "/");
            return this.http.post(endpoint, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (x) {
              _this5.wait.end();

              return x;
            }));
          }
        }, {
          key: "update",
          value: function update(what, id, data) {
            var _this6 = this;

            this.wait.start();
            var endpoint = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL).concat(what, "/").concat(id);
            return this.http.put(endpoint, data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (x) {
              _this6.wait.end();

              return x;
            }));
          }
        }, {
          key: "delete",
          value: function _delete(what, id) {
            var _this7 = this;

            this.wait.start();
            var endpoint = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL).concat(what, "/").concat(id);
            return this.http["delete"](endpoint).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (x) {
              _this7.wait.end();

              return x;
            }));
          }
        }, {
          key: "list",
          value: function list(ofWhat, params) {
            var _this8 = this;

            this.wait.start();
            var paramString = params ? "?".concat(this.objectToParams(params)) : '';
            var endpoint = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL).concat(ofWhat, "/").concat(paramString);
            return this.http.get(endpoint).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (x) {
              _this8.wait.end();

              return x;
            }));
          }
        }, {
          key: "listMap",
          value: function listMap(ofWhat, params) {
            var _this9 = this;

            this.wait.start();
            var paramString = params ? "?".concat(this.objectToParams(params)) : '';
            var endpoint = "".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].apiURL).concat(ofWhat, "/").concat(paramString);
            return this.http.get(endpoint).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (x) {
              _this9.wait.end();

              return {
                data: x.content,
                count: x.totalElements,
                totalPage: x.totalPages
              };
            }));
          }
        }, {
          key: "objectToParams",
          value: function objectToParams(obj) {
            var keys = Object.keys(obj);
            var paramsString = '';
            keys.forEach(function (key) {
              paramsString += "".concat(key, "=").concat(obj[key], "&");
            });
            return paramsString.slice(0, -1);
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
    "./src/environments/environment.ts":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false,
        // apiURL: 'http://localhost:4003/api/',
        apiURL: 'https://tricky-cow-4.loca.lt/api/',
        staticData: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "./src/main.ts":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function srcMainTs(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "./src/environments/environment.ts");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "./src/app/app.module.ts");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! C:\Users\81254807\Desktop\UAM\project\uam\src\main.ts */
      "./src/main.ts");
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map