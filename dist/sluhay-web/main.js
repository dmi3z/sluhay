(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dmi3z/Documents/Development/sluhay/src/main.ts */"zUnb");


/***/ }),

/***/ "2MiI":
/*!*******************************************************!*\
  !*** ./src/app/components/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _contsants_header_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../contsants/header.constants */ "k/ia");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





function HeaderComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("fragment", item_r1.tag);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.name);
} }
class HeaderComponent {
    constructor() {
        this.headerItems = _contsants_header_constants__WEBPACK_IMPORTED_MODULE_1__["HEADER_ITEMS"];
    }
    ngOnInit() {
    }
}
HeaderComponent.ɵfac = function HeaderComponent_Factory(t) { return new (t || HeaderComponent)(); };
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], inputs: { isWhite: "isWhite" }, decls: 2, vars: 3, consts: [[1, "header"], ["routerLink", "/", "class", "header__item", 3, "fragment", 4, "ngFor", "ngForOf"], ["routerLink", "/", 1, "header__item", 3, "fragment"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_div_1_Template, 2, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("header_gradient", !ctx.isWhite);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.headerItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: [".header[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 125px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  font-family: \"Code Pro LC\";\n  position: relative;\n  left: 0;\n  top: 0;\n  z-index: 10;\n}\n.header_gradient[_ngcontent-%COMP%] {\n  background: linear-gradient(to bottom, black, transparent);\n  position: absolute;\n}\n.header_gradient[_ngcontent-%COMP%]   .header__item[_ngcontent-%COMP%] {\n  color: white !important;\n}\n.header__item[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  cursor: pointer;\n  margin-right: 38px;\n  color: black;\n  outline: none;\n}\n.header__item[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n@media screen and (max-width: 1430px) {\n  .header__item[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL3RoZW1lL21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUNGQSxhQUFBO0VBQ0EsbUJBRnVDO0VBR3ZDLHVCQUh1QjtFQUl2QixtQkFKMkQ7RURLM0QsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtBQUVGO0FBQUU7RUFDRSwwREFBQTtFQUNBLGtCQUFBO0FBRUo7QUFBSTtFQUNFLHVCQUFBO0FBRU47QUFFRTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFBSjtBQUVJO0VBQ0UsZUFBQTtBQUFOO0FBS0E7RUFFSTtJQUNFLGFBQUE7RUFISjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vdGhlbWUvbWl4aW5zLnNjc3MnO1xuXG4uaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTI1cHg7XG4gIEBpbmNsdWRlIGZsZXhNaXg7XG4gIGZvbnQtZmFtaWx5OiAnQ29kZSBQcm8gTEMnO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTA7XG5cbiAgJl9ncmFkaWVudCB7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgYmxhY2ssIHRyYW5zcGFyZW50KTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG5cbiAgICAuaGVhZGVyX19pdGVtIHtcbiAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xuICAgIH1cbiAgfVxuXG4gICZfX2l0ZW0ge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIG1hcmdpbi1yaWdodDogMzhweDtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgb3V0bGluZTogbm9uZTtcblxuICAgICY6bGFzdC1jaGlsZCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0MzBweCkge1xuICAuaGVhZGVyIHtcbiAgICAmX19pdGVtIHtcbiAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxuICB9XG59XG4iLCJcbkBtaXhpbiBmbGV4TWl4KCRqdXN0aWZ5OiBjZW50ZXIsICRhbGlnbjogY2VudGVyLCAkZGlyZWN0aW9uOiByb3cpIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6ICRhbGlnbjtcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcbiAgZmxleC1kaXJlY3Rpb246ICRkaXJlY3Rpb247XG59XG5cbkBtaXhpbiBmb250U3R5bGUoJHNpemU6IDE4cHgsICRjb2xvcjogJG1haW4tZm9udCkge1xuICBmb250LXNpemU6ICRzaXplO1xuICBjb2xvcjogJGNvbG9yO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
            }]
    }], function () { return []; }, { isWhite: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "6j9L":
/*!****************************************************!*\
  !*** ./src/app/modules/thanks/thanks.component.ts ***!
  \****************************************************/
/*! exports provided: ThanksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThanksComponent", function() { return ThanksComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/header/header.component */ "2MiI");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");




class ThanksComponent {
    constructor() { }
    ngOnInit() {
    }
}
ThanksComponent.ɵfac = function ThanksComponent_Factory(t) { return new (t || ThanksComponent)(); };
ThanksComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ThanksComponent, selectors: [["app-thanks"]], decls: 11, vars: 1, consts: [[1, "wrapper"], ["src", "assets/logo_channel.png", "alt", ""], [3, "isWhite"], [1, "wrapper__content"], [1, "wrapper__content-text"], [1, "active"], ["routerLink", "/", 1, "button"]], template: function ThanksComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-header", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u0421\u043F\u0430\u0441\u0438\u0431\u043E \u0447\u0442\u043E \u043F\u043E\u0434\u043F\u0438\u0441\u0430\u043B\u0438\u0441\u044C \u043D\u0430 \u043D\u0430\u0448\u0443 email \u0440\u0430\u0441\u0441\u044B\u043B\u043A\u0443");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Sluhay.by");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " \u0432\u0435\u0440\u043D\u0443\u0442\u044C\u0441\u044F \u043D\u0430 \u0441\u0430\u0439\u0442 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("isWhite", true);
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_1__["HeaderComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"]], styles: ["@font-face {\n  font-family: \"Code Pro LC\";\n  src: url('Code_Pro_LC.ttf');\n}\n@font-face {\n  font-family: \"Code Pro Bold\";\n  src: url('Code_Pro_Bold.ttf');\n}\n@font-face {\n  font-family: \"Code Pro Bold LC\";\n  src: url('Code_Pro_Bold_LC.ttf');\n}\n@font-face {\n  font-family: \"Code Pro LC\";\n  src: url('Code_Pro_LC.ttf');\n}\n@font-face {\n  font-family: \"Code Pro Light\";\n  src: url('Code_Pro_Light.ttf');\n}\n@font-face {\n  font-family: \"Code Pro Light LC\";\n  src: url('Code_Pro_Light_LC.ttf');\n}\n@font-face {\n  font-family: \"Code Pro\";\n  src: url('Code_Pro.ttf');\n}\n.wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding-top: 20px;\n}\n.wrapper__content[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  position: relative;\n  height: 390px;\n  background-image: url('snow_flake.png');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: contain;\n  margin-top: 50px;\n}\n.wrapper__content-text[_ngcontent-%COMP%] {\n  text-align: center;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  font-size: 40px;\n  font-family: \"Code Pro\";\n  width: 100%;\n  max-width: 750px;\n  padding: 0 10px;\n}\n.wrapper__content-text[_ngcontent-%COMP%]   .active[_ngcontent-%COMP%] {\n  color: #f91b1b;\n  margin-top: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9tb2R1bGVzL3RoYW5rcy90aGFua3MuY29tcG9uZW50LnNjc3MiLCJzcmMvdGhlbWUvbWl4aW5zLnNjc3MiLCJzcmMvdGhlbWUvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBQTtFQUNBLDJCQUFBO0FDQ0Y7QURFQTtFQUNFLDRCQUFBO0VBQ0EsNkJBQUE7QUNBRjtBREdBO0VBQ0UsK0JBQUE7RUFDQSxnQ0FBQTtBQ0RGO0FESUE7RUFDRSwwQkFBQTtFQUNBLDJCQUFBO0FDRkY7QURLQTtFQUNFLDZCQUFBO0VBQ0EsOEJBQUE7QUNIRjtBRE1BO0VBQ0UsZ0NBQUE7RUFDQSxpQ0FBQTtBQ0pGO0FET0E7RUFDRSx1QkFBQTtFQUNBLHdCQUFBO0FDTEY7QUF2QkE7RUFDRSxXQUFBO0VDSEEsYUFBQTtFQUNBLG1CQUZ1QztFQUd2Qyx1QkFIdUI7RUFJdkIsc0JEQzZCO0VBQzdCLGlCQUFBO0FBNEJGO0FBMUJFO0VBQ0UsV0FBQTtFQ1JGLGFBQUE7RUFDQSxtQkFGdUM7RUFHdkMsdUJBSHVCO0VBSXZCLG1CQUoyRDtFRFd6RCxrQkFBQTtFQUNBLGFBQUE7RUFDQSx1Q0FBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSx3QkFBQTtFQUNBLGdCQUFBO0FBK0JKO0FBN0JJO0VBQ0Usa0JBQUE7RUNuQkosYUFBQTtFQUNBLG1CQUZ1QztFQUd2Qyx1QkFIdUI7RUFJdkIsc0JEaUJpQztFQUM3QixlQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0FBa0NOO0FBaENNO0VBQ0UsY0U1Qk07RUY2Qk4sZ0JBQUE7QUFrQ1IiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL3RoYW5rcy90aGFua3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdDb2RlIFBybyBMQyc7XG4gIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvQ29kZV9Qcm9fTEMudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0NvZGUgUHJvIEJvbGQnO1xuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0NvZGVfUHJvX0JvbGQudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0NvZGUgUHJvIEJvbGQgTEMnO1xuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0NvZGVfUHJvX0JvbGRfTEMudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0NvZGUgUHJvIExDJztcbiAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9Db2RlX1Byb19MQy50dGYnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnQ29kZSBQcm8gTGlnaHQnO1xuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0NvZGVfUHJvX0xpZ2h0LnR0ZicpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdDb2RlIFBybyBMaWdodCBMQyc7XG4gIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvQ29kZV9Qcm9fTGlnaHRfTEMudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0NvZGUgUHJvJztcbiAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9Db2RlX1Byby50dGYnKTtcbn1cbiIsIkBpbXBvcnQgJy4uLy4uLy4uL3RoZW1lL21peGlucy5zY3NzJztcbkBpbXBvcnQgJy4uLy4uLy4uL3RoZW1lL2ZvbnRzLnNjc3MnO1xuQGltcG9ydCAnLi4vLi4vLi4vdGhlbWUvL2NvbG9ycy5zY3NzJztcblxuLndyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgQGluY2x1ZGUgZmxleE1peCgkZGlyZWN0aW9uOiBjb2x1bW4pO1xuICBwYWRkaW5nLXRvcDogMjBweDtcblxuICAmX19jb250ZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBAaW5jbHVkZSBmbGV4TWl4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDM5MHB4O1xuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3Nub3dfZmxha2UucG5nJyk7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICAgIG1hcmdpbi10b3A6IDUwcHg7XG5cbiAgICAmLXRleHQge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgQGluY2x1ZGUgZmxleE1peCgkZGlyZWN0aW9uOiBjb2x1bW4pO1xuICAgICAgZm9udC1zaXplOiA0MHB4O1xuICAgICAgZm9udC1mYW1pbHk6ICdDb2RlIFBybyc7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIG1heC13aWR0aDogNzUwcHg7XG4gICAgICBwYWRkaW5nOiAwIDEwcHg7XG5cbiAgICAgIC5hY3RpdmUge1xuICAgICAgICBjb2xvcjogJGFjdGl2ZS1mb250O1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG59XG4iLCJcbkBtaXhpbiBmbGV4TWl4KCRqdXN0aWZ5OiBjZW50ZXIsICRhbGlnbjogY2VudGVyLCAkZGlyZWN0aW9uOiByb3cpIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6ICRhbGlnbjtcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcbiAgZmxleC1kaXJlY3Rpb246ICRkaXJlY3Rpb247XG59XG5cbkBtaXhpbiBmb250U3R5bGUoJHNpemU6IDE4cHgsICRjb2xvcjogJG1haW4tZm9udCkge1xuICBmb250LXNpemU6ICRzaXplO1xuICBjb2xvcjogJGNvbG9yO1xufVxuIiwiJG1haW4tZm9udDogIzAwMDAwMDtcbiRtdXRlZC1mb250OiAjNDg0ODQ5O1xuJGFjdGl2ZS1mb250OiAjZjkxYjFiO1xuJG9kZC1iYWNrZ3JvdW5kOiAjZjBmMGYwO1xuJGRhcmstY29sb3I6ICMyODJlMzU7XG4kbWVkaXVtLWNvbG9yOiAjMmUzNDNhO1xuJGxpZ2h0LWNvbG9yOiAjZjBmMGYwO1xuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ThanksComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-thanks',
                templateUrl: './thanks.component.html',
                styleUrls: ['./thanks.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "791+":
/*!******************************************************!*\
  !*** ./src/app/contsants/content-cards.constants.ts ***!
  \******************************************************/
/*! exports provided: CONTENT_CARDS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CONTENT_CARDS", function() { return CONTENT_CARDS; });
/* harmony import */ var _genres_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./genres.enum */ "Oqr+");

const CONTENT_CARDS = [
    {
        genre: _genres_enum__WEBPACK_IMPORTED_MODULE_0__["GENRES"].CHANNEL,
        text: 'белорусская музыка',
        url: 'http://persik.by/stream/3502/32/10970.m3u'
    },
    {
        genre: _genres_enum__WEBPACK_IMPORTED_MODULE_0__["GENRES"].LIVE,
        text: 'концерты. лайвы',
        url: 'http://persik.by/stream/3502/32/10975.m3u8'
    },
    {
        genre: _genres_enum__WEBPACK_IMPORTED_MODULE_0__["GENRES"].POP,
        text: 'популярная. музыка',
        url: 'http://persik.by/stream/3502/32/10972.m3u8'
    },
    {
        genre: _genres_enum__WEBPACK_IMPORTED_MODULE_0__["GENRES"].ROCK,
        text: 'драйв. смысл',
        url: 'http://persik.by/stream/3502/32/10971.m3u8'
    },
    {
        genre: _genres_enum__WEBPACK_IMPORTED_MODULE_0__["GENRES"].EDM,
        text: 'электронная. музыка',
        url: 'http://persik.by/stream/3502/32/10973.m3u8'
    },
    {
        genre: _genres_enum__WEBPACK_IMPORTED_MODULE_0__["GENRES"].RAP,
        text: 'мастера. слова',
        url: 'http://persik.by/stream/3502/32/10974.m3u8'
    }
];


/***/ }),

/***/ "AytR":
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
    production: true
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

/***/ "EnSQ":
/*!******************************************!*\
  !*** ./src/app/services/data.service.ts ***!
  \******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "kU1M");





class DataService {
    constructor(http) {
        this.http = http;
        this.BASE_URL = 'https://api.persik.by/v2/';
    }
    getArtistsIds(genreId) {
        const params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('sort', 'last')
            .set('category_id', '4')
            .set('genre_id', genreId.toString())
            .set('device', 'web-by');
        return this.http
            .get(this.BASE_URL.concat('content/videos'), { params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => data.videos.map((item) => item.video_id)));
    }
    getArtistsInfo(videoIds) {
        let queryString = '?';
        videoIds.forEach((item, index) => {
            if (index !== videoIds.length - 1) {
                queryString += `id[]=${item}&`;
            }
            else {
                queryString += `id[]=${item}`;
            }
        });
        return this.http.get(this.BASE_URL.concat('content/video', queryString))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])((data) => data.videos));
    }
}
DataService.ɵfac = function DataService_Factory(t) { return new (t || DataService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
DataService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: DataService, factory: DataService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DataService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "Fkiz":
/*!*****************************************************************!*\
  !*** ./src/app/components/modal-popup/modal-popup.component.ts ***!
  \*****************************************************************/
/*! exports provided: ModalPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalPopupComponent", function() { return ModalPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ModalPopupComponent {
    constructor() { }
    ngOnInit() {
    }
}
ModalPopupComponent.ɵfac = function ModalPopupComponent_Factory(t) { return new (t || ModalPopupComponent)(); };
ModalPopupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ModalPopupComponent, selectors: [["app-modal-popup"]], decls: 4, vars: 0, consts: [[1, "wrapper"], [1, "modal"], [1, "close"], ["src", "https://app.getresponse.com/site2/sluhay_b2b/?u=yhedG&webforms_id=B78ks", 1, "frame"]], template: function ModalPopupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "iframe", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n  position: fixed;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  background-color: rgba(255, 255, 255, 0.7);\n  left: 0;\n  top: 0;\n  z-index: 1;\n}\n\n.modal[_ngcontent-%COMP%] {\n  width: 60%;\n  min-width: 1430px;\n  position: relative;\n}\n\n.modal[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb2RhbC1wb3B1cC9tb2RhbC1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNyYy90aGVtZS9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQ0hBLGFBQUE7RUFDQSxtQkFGdUM7RUFHdkMsdUJBSHVCO0VBSXZCLG1CQUoyRDtFRE0zRCwwQ0FBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQUVGOztBQUNBO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFFRjs7QUFBRTtFQUNFLFdBQUE7QUFFSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9kYWwtcG9wdXAvbW9kYWwtcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi90aGVtZS9taXhpbnMuc2Nzcyc7XG5cbi53cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgQGluY2x1ZGUgZmxleE1peDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6IHdoaXRlLCAkYWxwaGE6IC43KTtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxO1xufVxuXG4ubW9kYWwge1xuICB3aWR0aDogNjAlO1xuICBtaW4td2lkdGg6IDE0MzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIC5mcmFtZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbiIsIlxuQG1peGluIGZsZXhNaXgoJGp1c3RpZnk6IGNlbnRlciwgJGFsaWduOiBjZW50ZXIsICRkaXJlY3Rpb246IHJvdykge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogJGFsaWduO1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcbn1cblxuQG1peGluIGZvbnRTdHlsZSgkc2l6ZTogMThweCwgJGNvbG9yOiAkbWFpbi1mb250KSB7XG4gIGZvbnQtc2l6ZTogJHNpemU7XG4gIGNvbG9yOiAkY29sb3I7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModalPopupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-modal-popup',
                templateUrl: './modal-popup.component.html',
                styleUrls: ['./modal-popup.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "HxBr":
/*!*****************************************************!*\
  !*** ./src/app/components/bands/bands.component.ts ***!
  \*****************************************************/
/*! exports provided: BandsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BandsComponent", function() { return BandsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _band_item_band_item_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../band-item/band-item.component */ "oJph");
/* harmony import */ var _band_popup_band_popup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../band-popup/band-popup.component */ "t60e");





function BandsComponent_p_9_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BandsComponent_p_9_Template_p_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const item_r3 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.activateGenre(item_r3.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("genres__item_active", item_r3.id === ctx_r0.selectedGenreId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r3.text);
} }
function BandsComponent_app_band_item_12_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-band-item", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BandsComponent_app_band_item_12_Template_app_band_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const i_r7 = ctx.index; const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.openPreview(i_r7); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r6 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("band", item_r6);
} }
function BandsComponent_app_band_popup_13_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-band-popup", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("hidePopup", function BandsComponent_app_band_popup_13_Template_app_band_popup_hidePopup_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.closePopup(); })("changeSlide", function BandsComponent_app_band_popup_13_Template_app_band_popup_changeSlide_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.changeSlide($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bands", ctx_r2.bands)("index", ctx_r2.previewedId);
} }
class BandsComponent {
    constructor() {
        this.genres = [];
        this.bands = [];
        this.changeGenre = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    activateGenre(genreId) {
        this.changeGenre.next(genreId);
    }
    openPreview(id) {
        this.isPreviewOpened = true;
        this.previewedId = id;
        console.log(this.previewedId);
    }
    closePopup() {
        this.isPreviewOpened = false;
    }
    changeSlide(way) {
        console.log(way);
        if (way === 'next') {
            this.nextSlide();
        }
        else {
            this.prevSlide();
        }
    }
    nextSlide() {
        if (this.bands.length - 1 > this.previewedId) {
            this.previewedId++;
        }
        else {
            this.previewedId = 0;
        }
    }
    prevSlide() {
        if (this.previewedId > 0) {
            this.previewedId--;
        }
        else {
            this.previewedId = this.bands.length - 1;
        }
    }
}
BandsComponent.ɵfac = function BandsComponent_Factory(t) { return new (t || BandsComponent)(); };
BandsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BandsComponent, selectors: [["app-bands"]], inputs: { genres: "genres", bands: "bands", selectedGenreId: "selectedGenreId" }, outputs: { changeGenre: "changeGenre" }, decls: 14, vars: 3, consts: [[1, "bands"], [1, "genres-selector"], [1, "group"], ["src", "assets/logo_channel.png", "alt", "", 1, "logo"], [1, "title"], [1, "genres"], ["class", "genres__item", 3, "genres__item_active", "click", 4, "ngFor", "ngForOf"], [1, "bands__list"], [1, "scroll-content"], [3, "band", "click", 4, "ngFor", "ngForOf"], [3, "bands", "index", "hidePopup", "changeSlide", 4, "ngIf"], [1, "genres__item", 3, "click"], [3, "band", "click"], [3, "bands", "index", "hidePopup", "changeSlide"]], template: function BandsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u043E\u043D\u0438 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u0434\u0435\u043B\u0430\u044E\u0442 \u0431\u0435\u043B\u043E\u0440\u0443\u0441\u0441\u043A\u0443\u044E \u043C\u0443\u0437\u044B\u043A\u0443");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, BandsComponent_p_9_Template, 2, 3, "p", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, BandsComponent_app_band_item_12_Template, 1, 1, "app-band-item", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, BandsComponent_app_band_popup_13_Template, 1, 2, "app-band-popup", 10);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.genres);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.bands);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isPreviewOpened);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _band_item_band_item_component__WEBPACK_IMPORTED_MODULE_2__["BandItemComponent"], _band_popup_band_popup_component__WEBPACK_IMPORTED_MODULE_3__["BandPopupComponent"]], styles: ["@font-face {\n  font-family: \"Code Pro LC\";\n  src: url('Code_Pro_LC.ttf');\n}\n@font-face {\n  font-family: \"Code Pro Bold\";\n  src: url('Code_Pro_Bold.ttf');\n}\n@font-face {\n  font-family: \"Code Pro Bold LC\";\n  src: url('Code_Pro_Bold_LC.ttf');\n}\n@font-face {\n  font-family: \"Code Pro LC\";\n  src: url('Code_Pro_LC.ttf');\n}\n@font-face {\n  font-family: \"Code Pro Light\";\n  src: url('Code_Pro_Light.ttf');\n}\n@font-face {\n  font-family: \"Code Pro Light LC\";\n  src: url('Code_Pro_Light_LC.ttf');\n}\n@font-face {\n  font-family: \"Code Pro\";\n  src: url('Code_Pro.ttf');\n}\n.bands[_ngcontent-%COMP%] {\n  width: 1430px;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: row;\n  margin-top: 120px;\n}\n.bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  flex-direction: column;\n  width: 30%;\n  height: 100%;\n  flex-shrink: 0;\n  padding-left: 130px;\n  box-sizing: border-box;\n  margin-top: 76px;\n}\n.bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  flex-direction: column;\n}\n.bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  margin-bottom: 46px;\n}\n.bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-bottom: 58px;\n}\n.bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .genres[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #484849;\n  margin-bottom: 20px;\n  cursor: pointer;\n}\n.bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .genres__item_active[_ngcontent-%COMP%] {\n  color: #f91b1b;\n}\n.bands__list[_ngcontent-%COMP%] {\n  width: 70%;\n  flex-shrink: 0;\n  position: relative;\n}\n.bands__list[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  width: 400px;\n  height: 400px;\n  background-image: url('snow_flake.png');\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  left: -200px;\n  top: 0;\n  z-index: 0;\n}\n.bands__list[_ngcontent-%COMP%]   .scroll-content[_ngcontent-%COMP%] {\n  width: 100%;\n  flex-wrap: wrap;\n  max-height: 1840px;\n  overflow: hidden;\n  overflow-y: auto;\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  flex-direction: row;\n  padding-left: 20px;\n  box-sizing: border-box;\n}\n@media screen and (max-width: 1430px) {\n  .bands[_ngcontent-%COMP%] {\n    width: 100%;\n    flex-direction: column;\n    margin-top: 80px;\n  }\n  .bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%] {\n    width: 100%;\n    flex-direction: column;\n    padding-left: 30px;\n  }\n  .bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    flex-direction: row;\n  }\n  .bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    margin-right: 10px;\n  }\n  .bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .genres[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: row;\n    margin-bottom: 0;\n  }\n  .bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .genres__item[_ngcontent-%COMP%] {\n    margin-right: 40px;\n  }\n  .bands__list[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media screen and (max-width: 767px) {\n  .bands[_ngcontent-%COMP%] {\n    margin-top: 30px;\n  }\n  .bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%] {\n    padding-left: 30px;\n  }\n  .bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n}\n@media screen and (max-width: 600px) {\n  .bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%] {\n    flex-direction: column;\n    margin-top: 20px;\n  }\n  .bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n  .bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n  .bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .genres__item[_ngcontent-%COMP%] {\n    margin-right: 25px;\n  }\n  .bands__list[_ngcontent-%COMP%] {\n    padding-left: 30px;\n    box-sizing: border-box;\n  }\n}\n@media screen and (max-width: 400px) {\n  .bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%] {\n    flex-direction: column;\n    margin-top: 20px;\n  }\n  .bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n  .bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 23px;\n  }\n  .bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .genres__item[_ngcontent-%COMP%] {\n    margin-right: 15px;\n  }\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #dfdfdf;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #f91b1b;\n  height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2JhbmRzL2JhbmRzLmNvbXBvbmVudC5zY3NzIiwic3JjL3RoZW1lL21peGlucy5zY3NzIiwic3JjL3RoZW1lL2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQUE7RUFDQSwyQkFBQTtBQ0NGO0FERUE7RUFDRSw0QkFBQTtFQUNBLDZCQUFBO0FDQUY7QURHQTtFQUNFLCtCQUFBO0VBQ0EsZ0NBQUE7QUNERjtBRElBO0VBQ0UsMEJBQUE7RUFDQSwyQkFBQTtBQ0ZGO0FES0E7RUFDRSw2QkFBQTtFQUNBLDhCQUFBO0FDSEY7QURNQTtFQUNFLGdDQUFBO0VBQ0EsaUNBQUE7QUNKRjtBRE9BO0VBQ0UsdUJBQUE7RUFDQSx3QkFBQTtBQ0xGO0FBdkJBO0VBQ0UsYUFBQTtFQ0hBLGFBQUE7RUFDQSx1QkRHeUI7RUNGekIsdUJBSHVCO0VBSXZCLG1CQUoyRDtFRE0zRCxpQkFBQTtBQTRCRjtBQTFCRTtFQ1BBLGFBQUE7RUFDQSx1QkRPMkI7RUNOM0IsMkJETWlEO0VDTGpELHNCREt5RTtFQUN2RSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUErQko7QUE3Qkk7RUNoQkYsYUFBQTtFQUNBLHVCRGdCaUM7RUNmakMsMkJEZXFCO0VDZHJCLHNCRGM2QztBQWtDL0M7QUEvQkk7RUFDRSxtQkFBQTtBQWlDTjtBQTlCSTtFQUNFLG1CQUFBO0FBZ0NOO0FBN0JJO0VDckJGLGVBRHNCO0VBRXRCLGNDVFc7RUYrQlAsbUJBQUE7RUFDQSxlQUFBO0FBZ0NOO0FBN0JRO0VBQ0UsY0VuQ0k7QUZrRWQ7QUF6QkU7RUFDRSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBMkJKO0FBekJJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSx1Q0FBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLFlBQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQTJCTjtBQXhCSTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VDakVKLGFBQUE7RUFDQSx1QkRpRW1EO0VDaEVuRCwyQkRnRStCO0VDL0QvQixtQkFKMkQ7RURvRXZELGtCQUFBO0VBQ0Esc0JBQUE7QUE2Qk47QUF4QkE7RUFDRTtJQUNFLFdBQUE7SUFDQSxzQkFBQTtJQUNBLGdCQUFBO0VBMkJGO0VBekJFO0lBQ0UsV0FBQTtJQUNBLHNCQUFBO0lBQ0Esa0JBQUE7RUEyQko7RUF6Qkk7SUNwRkosYUFBQTtJQUNBLG1CRG9GbUM7SUNuRm5DLDJCRG1GdUI7SUNsRnZCLG1CRGtGMkM7RUE4QjNDO0VBM0JJO0lBQ0UsYUFBQTtFQTZCTjtFQTFCSTtJQUNFLGtCQUFBO0VBNEJOO0VBekJJO0lDaEdKLGFBQUE7SUFDQSxtQkFGdUM7SUFHdkMsdUJBSHVCO0lBSXZCLG1CQUoyRDtJRG1HckQsZ0JBQUE7RUE4Qk47RUE1Qk07SUFDRSxrQkFBQTtFQThCUjtFQXpCRTtJQUNFLFdBQUE7RUEyQko7QUFDRjtBQXZCQTtFQUNFO0lBQ0UsZ0JBQUE7RUF5QkY7RUF2QkU7SUFDRSxrQkFBQTtFQXlCSjtFQXZCSTtJQUNFLGdCQUFBO0VBeUJOO0FBQ0Y7QUFwQkE7RUFHSTtJQUNFLHNCQUFBO0lBQ0EsZ0JBQUE7RUFvQko7RUFsQkk7SUFDRSxtQkFBQTtFQW9CTjtFQWpCSTtJQUNFLGVBQUE7RUFtQk47RUFmTTtJQUNFLGtCQUFBO0VBaUJSO0VBWkU7SUFDRSxrQkFBQTtJQUNBLHNCQUFBO0VBY0o7QUFDRjtBQVZBO0VBRUk7SUFDRSxzQkFBQTtJQUNBLGdCQUFBO0VBV0o7RUFUSTtJQUNFLG1CQUFBO0VBV047RUFSSTtJQUNFLGVBQUE7RUFVTjtFQU5NO0lBQ0Usa0JBQUE7RUFRUjtBQUNGO0FBRkE7RUFDRSxVQUFBO0FBSUY7QUFEQSxVQUFBO0FBQ0E7RUFDRSxtQkFBQTtBQUlGO0FBREEsV0FBQTtBQUNBO0VBQ0UsbUJFN0xZO0VGOExaLFlBQUE7QUFJRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmFuZHMvYmFuZHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdDb2RlIFBybyBMQyc7XG4gIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvQ29kZV9Qcm9fTEMudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0NvZGUgUHJvIEJvbGQnO1xuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0NvZGVfUHJvX0JvbGQudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0NvZGUgUHJvIEJvbGQgTEMnO1xuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0NvZGVfUHJvX0JvbGRfTEMudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0NvZGUgUHJvIExDJztcbiAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9Db2RlX1Byb19MQy50dGYnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnQ29kZSBQcm8gTGlnaHQnO1xuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0NvZGVfUHJvX0xpZ2h0LnR0ZicpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdDb2RlIFBybyBMaWdodCBMQyc7XG4gIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvQ29kZV9Qcm9fTGlnaHRfTEMudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0NvZGUgUHJvJztcbiAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9Db2RlX1Byby50dGYnKTtcbn1cbiIsIkBpbXBvcnQgJy4uLy4uLy4uL3RoZW1lL21peGlucy5zY3NzJztcbkBpbXBvcnQgJy4uLy4uLy4uL3RoZW1lL2NvbG9ycy5zY3NzJztcbkBpbXBvcnQgJy4uLy4uLy4uL3RoZW1lL2ZvbnRzLnNjc3MnO1xuXG4uYmFuZHMge1xuICB3aWR0aDogMTQzMHB4O1xuICBAaW5jbHVkZSBmbGV4TWl4KCRhbGlnbjogZmxleC1zdGFydCk7XG4gIG1hcmdpbi10b3A6IDEyMHB4O1xuXG4gIC5nZW5yZXMtc2VsZWN0b3Ige1xuICAgIEBpbmNsdWRlIGZsZXhNaXgoJGFsaWduOiBmbGV4LXN0YXJ0LCAkanVzdGlmeTogZmxleC1zdGFydCwgJGRpcmVjdGlvbjogY29sdW1uKTtcbiAgICB3aWR0aDogMzAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDEzMHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgbWFyZ2luLXRvcDogNzZweDtcblxuICAgIC5ncm91cCB7XG4gICAgICBAaW5jbHVkZSBmbGV4TWl4KGZsZXgtc3RhcnQsIGZsZXgtc3RhcnQsIGNvbHVtbik7XG4gICAgfVxuXG4gICAgLmxvZ28ge1xuICAgICAgbWFyZ2luLWJvdHRvbTogNDZweDtcbiAgICB9XG5cbiAgICAudGl0bGUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogNThweDtcbiAgICB9XG5cbiAgICAuZ2VucmVzIHtcbiAgICAgIEBpbmNsdWRlIGZvbnRTdHlsZSgkY29sb3I6ICRtdXRlZC1mb250KTtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgICZfX2l0ZW0ge1xuICAgICAgICAmX2FjdGl2ZSB7XG4gICAgICAgICAgY29sb3I6ICRhY3RpdmUtZm9udDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICZfX2xpc3Qge1xuICAgIHdpZHRoOiA3MCU7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgJjpiZWZvcmUge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB3aWR0aDogNDAwcHg7XG4gICAgICBoZWlnaHQ6IDQwMHB4O1xuICAgICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvc25vd19mbGFrZS5wbmcnKTtcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgbGVmdDogLTIwMHB4O1xuICAgICAgdG9wOiAwO1xuICAgICAgei1pbmRleDogMCA7XG4gICAgfVxuXG4gICAgLnNjcm9sbC1jb250ZW50IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgbWF4LWhlaWdodDogMTg0MHB4O1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgICBAaW5jbHVkZSBmbGV4TWl4KCRqdXN0aWZ5OiBmbGV4LXN0YXJ0LCAkYWxpZ246IGZsZXgtc3RhcnQpO1xuICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQzMHB4KSB7XG4gIC5iYW5kcyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW4tdG9wOiA4MHB4O1xuXG4gICAgLmdlbnJlcy1zZWxlY3RvciB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG5cbiAgICAgIC5ncm91cCB7XG4gICAgICAgIEBpbmNsdWRlIGZsZXhNaXgoZmxleC1zdGFydCwgY2VudGVyLCByb3cpO1xuICAgICAgfVxuXG4gICAgICAudGV4dCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC5sb2dvIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgfVxuXG4gICAgICAuZ2VucmVzIHtcbiAgICAgICAgQGluY2x1ZGUgZmxleE1peDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcblxuICAgICAgICAmX19pdGVtIHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICAmX19saXN0IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuYmFuZHMge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG5cbiAgICAuZ2VucmVzLXNlbGVjdG9yIHtcbiAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcblxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmJhbmRzIHtcblxuICAgIC5nZW5yZXMtc2VsZWN0b3Ige1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG5cbiAgICAgIC5sb2dvIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIH1cblxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgfVxuXG4gICAgICAuZ2VucmVzIHtcbiAgICAgICAgJl9faXRlbSB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgJl9fbGlzdCB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xuICAuYmFuZHMge1xuICAgIC5nZW5yZXMtc2VsZWN0b3Ige1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG5cbiAgICAgIC5sb2dvIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIH1cblxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAyM3B4O1xuICAgICAgfVxuXG4gICAgICAuZ2VucmVzIHtcbiAgICAgICAgJl9faXRlbSB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNHB4O1xufVxuXG4vKiBUcmFjayAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6ICNkZmRmZGY7XG59XG5cbi8qIEhhbmRsZSAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICRhY3RpdmUtZm9udDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuIiwiXG5AbWl4aW4gZmxleE1peCgkanVzdGlmeTogY2VudGVyLCAkYWxpZ246IGNlbnRlciwgJGRpcmVjdGlvbjogcm93KSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiAkYWxpZ247XG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XG4gIGZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xufVxuXG5AbWl4aW4gZm9udFN0eWxlKCRzaXplOiAxOHB4LCAkY29sb3I6ICRtYWluLWZvbnQpIHtcbiAgZm9udC1zaXplOiAkc2l6ZTtcbiAgY29sb3I6ICRjb2xvcjtcbn1cbiIsIiRtYWluLWZvbnQ6ICMwMDAwMDA7XG4kbXV0ZWQtZm9udDogIzQ4NDg0OTtcbiRhY3RpdmUtZm9udDogI2Y5MWIxYjtcbiRvZGQtYmFja2dyb3VuZDogI2YwZjBmMDtcbiRkYXJrLWNvbG9yOiAjMjgyZTM1O1xuJG1lZGl1bS1jb2xvcjogIzJlMzQzYTtcbiRsaWdodC1jb2xvcjogI2YwZjBmMDtcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BandsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-bands',
                templateUrl: './bands.component.html',
                styleUrls: ['./bands.component.scss']
            }]
    }], function () { return []; }, { genres: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], bands: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectedGenreId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], changeGenre: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "I9v1":
/*!************************************************************!*\
  !*** ./src/app/modules/main/constants/genres.constants.ts ***!
  \************************************************************/
/*! exports provided: GENRES_LIST */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GENRES_LIST", function() { return GENRES_LIST; });
/* harmony import */ var _contsants_genres_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../contsants/genres.enum */ "Oqr+");

const GENRES_LIST = [
    {
        id: 1,
        value: _contsants_genres_enum__WEBPACK_IMPORTED_MODULE_0__["GENRES"].ALL,
        text: 'ВСЕ ЖАНРЫ',
    },
    {
        id: 1378,
        value: _contsants_genres_enum__WEBPACK_IMPORTED_MODULE_0__["GENRES"].ROCK,
        text: 'Rock',
    },
    {
        id: 1379,
        value: _contsants_genres_enum__WEBPACK_IMPORTED_MODULE_0__["GENRES"].POP,
        text: 'Pop',
    },
    {
        id: 1380,
        value: _contsants_genres_enum__WEBPACK_IMPORTED_MODULE_0__["GENRES"].EDM,
        text: 'EDM',
    },
    {
        id: 1381,
        value: _contsants_genres_enum__WEBPACK_IMPORTED_MODULE_0__["GENRES"].RAP,
        text: 'Rap',
    },
];


/***/ }),

/***/ "Js2f":
/*!*******************************************************************!*\
  !*** ./src/app/components/content-card/content-card.component.ts ***!
  \*******************************************************************/
/*! exports provided: ContentCardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContentCardComponent", function() { return ContentCardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_contsants_side_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/contsants/side.enum */ "txzI");
/* harmony import */ var _player_player_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../player/player.component */ "L7MN");
/* harmony import */ var _band_logo_band_logo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../band-logo/band-logo.component */ "nogf");





class ContentCardComponent {
    constructor() {
        this.side = src_app_contsants_side_enum__WEBPACK_IMPORTED_MODULE_1__["SIDE"].LEFT;
        this.sides = src_app_contsants_side_enum__WEBPACK_IMPORTED_MODULE_1__["SIDE"];
    }
    ngOnInit() {
        this.genreLogo = this.getGenreLogo();
    }
    getGenreLogo() {
        const logoUrl = `assets/logo_${this.content.genre}.png`;
        return logoUrl;
    }
}
ContentCardComponent.ɵfac = function ContentCardComponent_Factory(t) { return new (t || ContentCardComponent)(); };
ContentCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContentCardComponent, selectors: [["app-content-card"]], inputs: { content: "content", side: "side" }, decls: 15, vars: 8, consts: [[1, "card"], [1, "card__video"], [3, "url", "controls", "autoplay"], ["src", "assets/snow_flake.png", "alt", "", 1, "snow-flake"], [1, "card__data"], [1, "card__data-content", 3, "data"], [1, "container"], [1, "card__data-text"], [1, "card__data-text_red"], [1, "card__data-text", "card__data-text_red"], [1, "card__data-additional"]], template: function ContentCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-player", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-band-logo", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "sluhay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, ".by");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("card_reverse", ctx.side === ctx.sides.RIGHT);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("url", ctx.content.url)("controls", true)("autoplay", false);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.content.genre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.content.genre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.content.text);
    } }, directives: [_player_player_component__WEBPACK_IMPORTED_MODULE_2__["PlayerComponent"], _band_logo_band_logo_component__WEBPACK_IMPORTED_MODULE_3__["BandLogoComponent"]], styles: ["@font-face {\n  font-family: \"Code Pro LC\";\n  src: url('Code_Pro_LC.ttf');\n}\n@font-face {\n  font-family: \"Code Pro Bold\";\n  src: url('Code_Pro_Bold.ttf');\n}\n@font-face {\n  font-family: \"Code Pro Bold LC\";\n  src: url('Code_Pro_Bold_LC.ttf');\n}\n@font-face {\n  font-family: \"Code Pro LC\";\n  src: url('Code_Pro_LC.ttf');\n}\n@font-face {\n  font-family: \"Code Pro Light\";\n  src: url('Code_Pro_Light.ttf');\n}\n@font-face {\n  font-family: \"Code Pro Light LC\";\n  src: url('Code_Pro_Light_LC.ttf');\n}\n@font-face {\n  font-family: \"Code Pro\";\n  src: url('Code_Pro.ttf');\n}\n.card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  width: 1430px;\n  margin-bottom: 100px;\n}\n.card_reverse[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.card_reverse[_ngcontent-%COMP%]   .snow-flake[_ngcontent-%COMP%] {\n  left: -25%;\n}\n.card__video[_ngcontent-%COMP%] {\n  position: relative;\n  width: 55%;\n  flex-shrink: 0;\n}\n.card__video[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n  z-index: 1;\n}\n.card__video[_ngcontent-%COMP%]   .snow-flake[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: -25%;\n}\n.card__video-content[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.card__data[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: column;\n  width: 30%;\n  flex-shrink: 0;\n  padding-left: 110px;\n  box-sizing: border-box;\n  text-transform: uppercase;\n}\n.card__data[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: column;\n  margin-top: 45px;\n}\n.card__data-text[_ngcontent-%COMP%] {\n  color: #000000;\n  font-size: 36px;\n  font-family: \"Code Pro\";\n}\n.card__data-text_red[_ngcontent-%COMP%] {\n  color: #f91b1b;\n}\n.card__data-additional[_ngcontent-%COMP%] {\n  font-family: \"Code Pro Light\";\n  color: #484849;\n  font-size: 32px;\n  margin-top: 45px;\n}\n@media screen and (max-width: 1430px) {\n  .card[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .card__data[_ngcontent-%COMP%] {\n    padding-left: 30px;\n  }\n}\n@media screen and (max-width: 878px) {\n  .card[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n  .card__video[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .card__video[_ngcontent-%COMP%]   .snow-flake[_ngcontent-%COMP%] {\n    left: 25%;\n    top: -40%;\n    width: 50%;\n  }\n  .card__data[_ngcontent-%COMP%] {\n    width: 90%;\n    flex-direction: row;\n    align-items: center;\n    margin-bottom: 20px;\n    padding-left: 0;\n  }\n  .card__data-text[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n  .card__data-additional[_ngcontent-%COMP%] {\n    font-size: 24px;\n    margin-top: 15px;\n  }\n  .card__data[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    margin-left: 30px;\n    margin-top: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvbnRlbnQtY2FyZC9jb250ZW50LWNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvdGhlbWUvbWl4aW5zLnNjc3MiLCJzcmMvdGhlbWUvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBQTtFQUNBLDJCQUFBO0FDQ0Y7QURFQTtFQUNFLDRCQUFBO0VBQ0EsNkJBQUE7QUNBRjtBREdBO0VBQ0UsK0JBQUE7RUFDQSxnQ0FBQTtBQ0RGO0FESUE7RUFDRSwwQkFBQTtFQUNBLDJCQUFBO0FDRkY7QURLQTtFQUNFLDZCQUFBO0VBQ0EsOEJBQUE7QUNIRjtBRE1BO0VBQ0UsZ0NBQUE7RUFDQSxpQ0FBQTtBQ0pGO0FET0E7RUFDRSx1QkFBQTtFQUNBLHdCQUFBO0FDTEY7QUF2QkE7RUNGRSxhQUFBO0VBQ0EsbUJBRnVDO0VBR3ZDLHVCQUh1QjtFQUl2QixtQkFKMkQ7RURLM0QsYUFBQTtFQUNBLG9CQUFBO0FBNEJGO0FBMUJFO0VBQ0UsMkJBQUE7QUE0Qko7QUExQkk7RUFDRSxVQUFBO0FBNEJOO0FBeEJFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQTBCSjtBQXhCSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUEwQk47QUF2Qkk7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0FBeUJOO0FBdEJJO0VBQ0UsV0FBQTtBQXdCTjtBQXBCRTtFQ3JDQSxhQUFBO0VBQ0EsdUJEcUMyQjtFQ3BDM0IsdUJBSHVCO0VBSXZCLHNCRG1DbUQ7RUFDakQsVUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7QUF5Qko7QUF2Qkk7RUM3Q0YsYUFBQTtFQUNBLHVCRDZDNkI7RUM1QzdCLHVCQUh1QjtFQUl2QixzQkQyQ3FEO0VBQ2pELGdCQUFBO0FBNEJOO0FBekJJO0VBQ0UsY0VyRE07RUZzRE4sZUFBQTtFQUNBLHVCQUFBO0FBMkJOO0FBekJNO0VBQ0UsY0V4RE07QUZtRmQ7QUF2Qkk7RUFDRSw2QkFBQTtFQUNBLGNFL0RPO0VGZ0VQLGVBQUE7RUFDQSxnQkFBQTtBQXlCTjtBQXBCQTtFQUNFO0lBQ0UsV0FBQTtFQXVCRjtFQXJCRTtJQUNFLGtCQUFBO0VBdUJKO0FBQ0Y7QUFuQkE7RUFDRTtJQUNFLDhCQUFBO0VBcUJGO0VBbkJFO0lBQ0UsV0FBQTtFQXFCSjtFQW5CSTtJQUNFLFNBQUE7SUFDQSxTQUFBO0lBQ0EsVUFBQTtFQXFCTjtFQWpCRTtJQUNFLFVBQUE7SUFDQSxtQkFBQTtJQUNBLG1CQUFBO0lBQ0EsbUJBQUE7SUFDQSxlQUFBO0VBbUJKO0VBakJJO0lBQ0UsZUFBQTtFQW1CTjtFQWhCSTtJQUNFLGVBQUE7SUFDQSxnQkFBQTtFQWtCTjtFQWZJO0lBQ0UsaUJBQUE7SUFDQSxhQUFBO0VBaUJOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRlbnQtY2FyZC9jb250ZW50LWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdDb2RlIFBybyBMQyc7XG4gIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvQ29kZV9Qcm9fTEMudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0NvZGUgUHJvIEJvbGQnO1xuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0NvZGVfUHJvX0JvbGQudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0NvZGUgUHJvIEJvbGQgTEMnO1xuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0NvZGVfUHJvX0JvbGRfTEMudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0NvZGUgUHJvIExDJztcbiAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9Db2RlX1Byb19MQy50dGYnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnQ29kZSBQcm8gTGlnaHQnO1xuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0NvZGVfUHJvX0xpZ2h0LnR0ZicpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdDb2RlIFBybyBMaWdodCBMQyc7XG4gIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvQ29kZV9Qcm9fTGlnaHRfTEMudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0NvZGUgUHJvJztcbiAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9Db2RlX1Byby50dGYnKTtcbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi90aGVtZS9taXhpbnMuc2Nzc1wiO1xuQGltcG9ydCBcIi4uLy4uLy4uL3RoZW1lL2NvbG9ycy5zY3NzXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vdGhlbWUvZm9udHMuc2Nzc1wiO1xuXG4uY2FyZCB7XG4gIEBpbmNsdWRlIGZsZXhNaXg7XG4gIHdpZHRoOiAxNDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuXG4gICZfcmV2ZXJzZSB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuXG4gICAgLnNub3ctZmxha2Uge1xuICAgICAgbGVmdDogLTI1JTtcbiAgICB9XG4gIH1cblxuICAmX192aWRlbyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiA1NSU7XG4gICAgZmxleC1zaHJpbms6IDA7XG5cbiAgICB2aWRlbyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgfVxuXG4gICAgLnNub3ctZmxha2Uge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgcmlnaHQ6IC0yNSU7XG4gICAgfVxuXG4gICAgJi1jb250ZW50IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuXG4gICZfX2RhdGEge1xuICAgIEBpbmNsdWRlIGZsZXhNaXgoJGFsaWduOiBmbGV4LXN0YXJ0LCAkZGlyZWN0aW9uOiBjb2x1bW4pO1xuICAgIHdpZHRoOiAzMCU7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgcGFkZGluZy1sZWZ0OiAxMTBweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cbiAgICAuY29udGFpbmVyIHtcbiAgICAgIEBpbmNsdWRlIGZsZXhNaXgoJGFsaWduOiBmbGV4LXN0YXJ0LCAkZGlyZWN0aW9uOiBjb2x1bW4pO1xuICAgICAgbWFyZ2luLXRvcDogNDVweDtcbiAgICB9XG5cbiAgICAmLXRleHQge1xuICAgICAgY29sb3I6ICRtYWluLWZvbnQ7XG4gICAgICBmb250LXNpemU6IDM2cHg7XG4gICAgICBmb250LWZhbWlseTogXCJDb2RlIFByb1wiO1xuXG4gICAgICAmX3JlZCB7XG4gICAgICAgIGNvbG9yOiAkYWN0aXZlLWZvbnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi1hZGRpdGlvbmFsIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIkNvZGUgUHJvIExpZ2h0XCI7XG4gICAgICBjb2xvcjogJG11dGVkLWZvbnQ7XG4gICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICBtYXJnaW4tdG9wOiA0NXB4O1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDMwcHgpIHtcbiAgLmNhcmQge1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgJl9fZGF0YSB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg3OHB4KSB7XG4gIC5jYXJkIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG5cbiAgICAmX192aWRlbyB7XG4gICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgLnNub3ctZmxha2Uge1xuICAgICAgICBsZWZ0OiAyNSU7XG4gICAgICAgIHRvcDogLTQwJTtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmX19kYXRhIHtcbiAgICAgIHdpZHRoOiA5MCU7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDA7XG5cbiAgICAgICYtdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgIH1cblxuICAgICAgJi1hZGRpdGlvbmFsIHtcbiAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgfVxuXG4gICAgICAuY29udGFpbmVyIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDMwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJcbkBtaXhpbiBmbGV4TWl4KCRqdXN0aWZ5OiBjZW50ZXIsICRhbGlnbjogY2VudGVyLCAkZGlyZWN0aW9uOiByb3cpIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6ICRhbGlnbjtcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcbiAgZmxleC1kaXJlY3Rpb246ICRkaXJlY3Rpb247XG59XG5cbkBtaXhpbiBmb250U3R5bGUoJHNpemU6IDE4cHgsICRjb2xvcjogJG1haW4tZm9udCkge1xuICBmb250LXNpemU6ICRzaXplO1xuICBjb2xvcjogJGNvbG9yO1xufVxuIiwiJG1haW4tZm9udDogIzAwMDAwMDtcbiRtdXRlZC1mb250OiAjNDg0ODQ5O1xuJGFjdGl2ZS1mb250OiAjZjkxYjFiO1xuJG9kZC1iYWNrZ3JvdW5kOiAjZjBmMGYwO1xuJGRhcmstY29sb3I6ICMyODJlMzU7XG4kbWVkaXVtLWNvbG9yOiAjMmUzNDNhO1xuJGxpZ2h0LWNvbG9yOiAjZjBmMGYwO1xuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-content-card',
                templateUrl: './content-card.component.html',
                styleUrls: ['./content-card.component.scss']
            }]
    }], function () { return []; }, { content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], side: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "K4lg":
/*!**********************************************************!*\
  !*** ./src/app/directives/stop-propagation.directice.ts ***!
  \**********************************************************/
/*! exports provided: StopPropagationDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StopPropagationDirective", function() { return StopPropagationDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class StopPropagationDirective {
    onClick(event) {
        event.stopPropagation();
    }
}
StopPropagationDirective.ɵfac = function StopPropagationDirective_Factory(t) { return new (t || StopPropagationDirective)(); };
StopPropagationDirective.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineDirective"]({ type: StopPropagationDirective, selectors: [["", "app-stop-propagation", ""]], hostBindings: function StopPropagationDirective_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function StopPropagationDirective_click_HostBindingHandler($event) { return ctx.onClick($event); });
    } } });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StopPropagationDirective, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"],
        args: [{
                selector: '[app-stop-propagation]'
            }]
    }], null, { onClick: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['click', ['$event']]
        }] }); })();


/***/ }),

/***/ "L7MN":
/*!*******************************************************!*\
  !*** ./src/app/components/player/player.component.ts ***!
  \*******************************************************/
/*! exports provided: PlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerComponent", function() { return PlayerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../services/player.service */ "QIP1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _sound_range_sound_range_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../sound-range/sound-range.component */ "sGLn");





const _c0 = ["player"];
function PlayerComponent_div_3_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function PlayerComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PlayerComponent_div_3_ng_container_2_Template, 1, 0, "ng-container", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-sound-range", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changeEvent", function PlayerComponent_div_3_Template_app_sound_range_changeEvent_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.onVolumeChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "img", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerComponent_div_3_Template_img_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.toggleFullscreen(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isPlay)("ngIfThen", _r4)("ngIfElse", _r2);
} }
function PlayerComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerComponent_ng_template_4_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.togglePlay(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlayerComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerComponent_ng_template_6_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.togglePlay(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PlayerComponent {
    constructor(playerService) {
        this.playerService = playerService;
    }
    ngOnInit() {
        this.player = this.playerRef.nativeElement;
        this.playerService.playUrl(this.url, this.player, this.autoplay);
    }
    toggleFullscreen() {
        this.isFullscreen = !this.isFullscreen;
    }
    togglePlay() {
        this.isPlay = !this.isPlay;
        if (this.isPlay) {
            this.player.play();
        }
        else {
            this.player.pause();
        }
    }
    onVolumeChange(value) {
        this.player.volume = (value / 100);
    }
}
PlayerComponent.ɵfac = function PlayerComponent_Factory(t) { return new (t || PlayerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_player_service__WEBPACK_IMPORTED_MODULE_1__["PlayerService"])); };
PlayerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PlayerComponent, selectors: [["app-player"]], viewQuery: function PlayerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.playerRef = _t.first);
    } }, inputs: { url: "url", autoplay: "autoplay", controls: "controls", isFullscreen: "isFullscreen" }, decls: 8, vars: 3, consts: [[1, "wrapper"], ["playsinline", "", 1, "player"], ["player", ""], ["class", "controls", 4, "ngIf"], ["play", ""], ["pause", ""], [1, "controls"], [1, "controls__group"], [4, "ngIf", "ngIfThen", "ngIfElse"], [3, "changeEvent"], ["src", "assets/fullscreen.png", "alt", "", 3, "click"], ["src", "assets/play.png", "alt", "", 3, "click"], ["src", "assets/pause.png", "alt", "", 3, "click"]], template: function PlayerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "video", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, PlayerComponent_div_3_Template, 5, 3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, PlayerComponent_ng_template_4_Template, 1, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PlayerComponent_ng_template_6_Template, 1, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("wrapper_fullscreen", ctx.isFullscreen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.controls);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _sound_range_sound_range_component__WEBPACK_IMPORTED_MODULE_3__["SoundRangeComponent"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  z-index: 2;\n  object-fit: contain;\n}\n.wrapper_fullscreen[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1000;\n  left: 0;\n  top: 0;\n  height: 100vh;\n  background-color: black;\n  object-fit: contain;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n}\n.wrapper[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 75px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: row;\n  padding: 0 25px;\n  position: absolute;\n  z-index: 2;\n  left: 0;\n  bottom: 6px;\n  box-sizing: border-box;\n  background: linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent);\n}\n.wrapper[_ngcontent-%COMP%]   .controls__group[_ngcontent-%COMP%] {\n  width: 130px;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: row;\n}\n.wrapper[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 20px;\n  cursor: pointer;\n}\n.wrapper[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wbGF5ZXIvcGxheWVyLmNvbXBvbmVudC5zY3NzIiwic3JjL3RoZW1lL21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQURGO0FBR0U7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUNkRixhQUFBO0VBQ0EsbUJBRnVDO0VBR3ZDLHVCQUh1QjtFQUl2QixtQkFKMkQ7QURrQjdEO0FBQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQ3BCRixhQUFBO0VBQ0EsbUJBRnVDO0VBR3ZDLDhCRG1CNkI7RUNsQjdCLG1CQUoyRDtFRHVCekQsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxvRUFBQTtBQUlKO0FBRkk7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQ2hDSixhQUFBO0VBQ0EsbUJBRnVDO0VBR3ZDLDhCRCtCK0I7RUM5Qi9CLG1CQUoyRDtBRHlDN0Q7QUFKSTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FBTU47QUFERTtFQUNFLFdBQUE7RUFDQSxZQUFBO0FBR0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BsYXllci9wbGF5ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi90aGVtZS9taXhpbnMuc2Nzcyc7XG5cbi53cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xuICBvYmplY3QtZml0OiBjb250YWluO1xuXG4gICZfZnVsbHNjcmVlbiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDEwMDA7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIEBpbmNsdWRlIGZsZXhNaXg7XG4gIH1cblxuICAuY29udHJvbHMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNzVweDtcbiAgICBAaW5jbHVkZSBmbGV4TWl4KCRqdXN0aWZ5OiBzcGFjZS1iZXR3ZWVuKTtcbiAgICBwYWRkaW5nOiAwIDI1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDI7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDZweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoMCwgMCwgMCwgLjQpLCB0cmFuc3BhcmVudCk7XG5cbiAgICAmX19ncm91cCB7XG4gICAgICB3aWR0aDogMTMwcHg7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBAaW5jbHVkZSBmbGV4TWl4KCRqdXN0aWZ5OiBzcGFjZS1iZXR3ZWVuKTtcbiAgICB9XG5cbiAgICBpbWcge1xuICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgfVxuXG5cbiAgLnBsYXllciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG59XG4iLCJcbkBtaXhpbiBmbGV4TWl4KCRqdXN0aWZ5OiBjZW50ZXIsICRhbGlnbjogY2VudGVyLCAkZGlyZWN0aW9uOiByb3cpIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6ICRhbGlnbjtcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcbiAgZmxleC1kaXJlY3Rpb246ICRkaXJlY3Rpb247XG59XG5cbkBtaXhpbiBmb250U3R5bGUoJHNpemU6IDE4cHgsICRjb2xvcjogJG1haW4tZm9udCkge1xuICBmb250LXNpemU6ICRzaXplO1xuICBjb2xvcjogJGNvbG9yO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-player',
                templateUrl: './player.component.html',
                styleUrls: ['./player.component.scss']
            }]
    }], function () { return [{ type: _services_player_service__WEBPACK_IMPORTED_MODULE_1__["PlayerService"] }]; }, { url: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], autoplay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], controls: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], playerRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['player', { static: true }]
        }], isFullscreen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "MaJW":
/*!*****************************************************************!*\
  !*** ./src/app/components/forms-modal/forms-modal.component.ts ***!
  \*****************************************************************/
/*! exports provided: FormsModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FormsModalComponent", function() { return FormsModalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class FormsModalComponent {
    constructor() {
        this.closeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    closeModal() {
        this.closeEvent.next();
    }
    stopProp(event) {
        event.stopPropagation();
    }
}
FormsModalComponent.ɵfac = function FormsModalComponent_Factory(t) { return new (t || FormsModalComponent)(); };
FormsModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormsModalComponent, selectors: [["app-forms-modal"]], outputs: { closeEvent: "closeEvent" }, decls: 20, vars: 0, consts: [[1, "wrapper", 3, "click"], [1, "modal", 3, "click"], [1, "close", 3, "click"], [1, "title"], [1, "subtitle"], ["action", "https://app.getresponse.com/add_subscriber.html", "accept-charset", "utf-8", "method", "post", 1, "form"], [1, "form-line"], ["type", "text", "placeholder", "\u0412\u0430\u0448\u0435 \u0438\u043C\u044F", "name", "first_name"], ["name", "custom_company", "type", "text", "placeholder", "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438", "value", ""], ["name", "custom_phone", "placeholder", "\u0422\u0435\u043B\u0435\u0444\u043E\u043D", "type", "text", "value", ""], ["type", "text", "placeholder", "\u042D\u043B. \u043F\u043E\u0447\u0442\u0430", "name", "email"], ["name", "custom_comment", "placeholder", "\u0414\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435..."], ["type", "hidden", "name", "campaign_token", "value", "oGzLv"], ["type", "hidden", "name", "thankyou_url", "value", "http://sluhay.by/spasibo_za_podpisku"], ["type", "submit", "value", "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C", 1, "send"]], template: function FormsModalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormsModalComponent_Template_div_click_0_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormsModalComponent_Template_div_click_1_listener($event) { return ctx.stopProp($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FormsModalComponent_Template_div_click_2_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u2715");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \u041E\u0433\u0440\u043E\u043C\u043D\u043E\u0435 \u0441\u043F\u0430\u0441\u0438\u0431\u043E \u0437\u0430 \u0432\u0430\u0448\u0435 \u0436\u0435\u043B\u0430\u043D\u0438\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u0431\u0435\u043B\u043E\u0440\u0443\u0441\u0441\u043A\u0443\u044E \u043C\u0443\u0437\u044B\u043A\u0443! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u041D\u0430\u043F\u0438\u0448\u0438\u0442\u0435 \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430 \u0432 \u0444\u043E\u0440\u043C\u0435 \u043D\u0438\u0436\u0435 \u043F\u0430\u0440\u0443 \u0441\u043B\u043E\u0432 \u043E \u0412\u0430\u0448\u0435\u0439 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 \u0438 \u043C\u044B \u0441 \u0412\u0430\u043C\u0438 \u043E\u0431\u044F\u0437\u0430\u0442\u0435\u043B\u044C\u043D\u043E \u0441\u0432\u044F\u0436\u0435\u043C\u0441\u044F");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "textarea", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@font-face {\n  font-family: \"Code Pro LC\";\n  src: url('Code_Pro_LC.ttf');\n}\n@font-face {\n  font-family: \"Code Pro Bold\";\n  src: url('Code_Pro_Bold.ttf');\n}\n@font-face {\n  font-family: \"Code Pro Bold LC\";\n  src: url('Code_Pro_Bold_LC.ttf');\n}\n@font-face {\n  font-family: \"Code Pro LC\";\n  src: url('Code_Pro_LC.ttf');\n}\n@font-face {\n  font-family: \"Code Pro Light\";\n  src: url('Code_Pro_Light.ttf');\n}\n@font-face {\n  font-family: \"Code Pro Light LC\";\n  src: url('Code_Pro_Light_LC.ttf');\n}\n@font-face {\n  font-family: \"Code Pro\";\n  src: url('Code_Pro.ttf');\n}\n.wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n  position: fixed;\n  left: 0;\n  top: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  background: rgba(0, 0, 0, 0.7);\n  z-index: 1000;\n}\n.wrapper[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%] {\n  width: 50%;\n  min-width: 320px;\n  max-width: 500px;\n  color: white;\n  background: #f91b1b;\n  box-sizing: border-box;\n  padding: 25px 0;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding: 35px;\n  text-align: center;\n}\n.wrapper[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  font-size: 35px;\n  color: white;\n  position: absolute;\n  right: -35px;\n  top: -35px;\n  cursor: pointer;\n}\n.wrapper[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  margin: 0;\n  font-family: \"Code Pro Light\";\n  font-size: 27px;\n  text-align: center;\n  margin-bottom: 20px;\n}\n.wrapper[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  font-size: 14px;\n}\n.wrapper[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .form-line[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: row;\n}\n.wrapper[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .form-line[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  border-radius: 4px;\n  height: 30px;\n  outline: none;\n  border: none;\n  padding-left: 7px;\n  width: 100%;\n  background: rgba(255, 255, 255, 0.9);\n  font-family: \"Code Pro\";\n}\n.wrapper[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .form-line[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n.wrapper[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .form-line[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  resize: none;\n  height: 150px;\n  outline: none;\n  border: none;\n  border-radius: 4px;\n  padding: 15px;\n  box-sizing: border-box;\n  background: rgba(255, 255, 255, 0.9);\n  font-family: \"Code Pro\";\n}\n.wrapper[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .send[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 35px;\n  text-transform: uppercase;\n  outline: none;\n  border: none;\n  background-color: #2e343a;\n  color: white;\n  font-family: \"Code Pro Bold\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Zvcm1zLW1vZGFsL2Zvcm1zLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL3RoZW1lL21peGlucy5zY3NzIiwic3JjL3RoZW1lL2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQUE7RUFDQSwyQkFBQTtBQ0NGO0FERUE7RUFDRSw0QkFBQTtFQUNBLDZCQUFBO0FDQUY7QURHQTtFQUNFLCtCQUFBO0VBQ0EsZ0NBQUE7QUNERjtBRElBO0VBQ0UsMEJBQUE7RUFDQSwyQkFBQTtBQ0ZGO0FES0E7RUFDRSw2QkFBQTtFQUNBLDhCQUFBO0FDSEY7QURNQTtFQUNFLGdDQUFBO0VBQ0EsaUNBQUE7QUNKRjtBRE9BO0VBQ0UsdUJBQUE7RUFDQSx3QkFBQTtBQ0xGO0FBdkJBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUNQQSxhQUFBO0VBQ0EsbUJBRnVDO0VBR3ZDLHVCQUh1QjtFQUl2QixtQkFKMkQ7RURVM0QsOEJBQUE7RUFDQSxhQUFBO0FBNEJGO0FBMUJFO0VBQ0UsVUFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJFakJVO0VGa0JWLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VDcEJGLGFBQUE7RUFDQSxtQkFGdUM7RUFHdkMsdUJBSHVCO0VBSXZCLHNCRGtCK0I7RUFDN0IsYUFBQTtFQUNBLGtCQUFBO0FBK0JKO0FBN0JJO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtBQStCTjtBQTVCSTtFQUNFLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUE4Qk47QUEzQkk7RUFDRSxtQkFBQTtFQUNBLGVBQUE7QUE2Qk47QUF6Qk07RUFDRSxXQUFBO0VBQ0EsbUJBQUE7RUNuRE4sYUFBQTtFQUNBLG1CQUZ1QztFQUd2Qyw4QkRrRGlDO0VDakRqQyxtQkFKMkQ7QURtRjdEO0FBNUJRO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtFQUNBLG9DQUFBO0VBQ0EsdUJBQUE7QUE4QlY7QUE1QlU7RUFDRSxlQUFBO0FBOEJaO0FBMUJRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG9DQUFBO0VBQ0EsdUJBQUE7QUE0QlY7QUF4Qk07RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx5QkV2Rk87RUZ3RlAsWUFBQTtFQUNBLDRCQUFBO0FBMEJSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb3Jtcy1tb2RhbC9mb3Jtcy1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0NvZGUgUHJvIExDJztcbiAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9Db2RlX1Byb19MQy50dGYnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnQ29kZSBQcm8gQm9sZCc7XG4gIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvQ29kZV9Qcm9fQm9sZC50dGYnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnQ29kZSBQcm8gQm9sZCBMQyc7XG4gIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvQ29kZV9Qcm9fQm9sZF9MQy50dGYnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnQ29kZSBQcm8gTEMnO1xuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0NvZGVfUHJvX0xDLnR0ZicpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdDb2RlIFBybyBMaWdodCc7XG4gIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvQ29kZV9Qcm9fTGlnaHQudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0NvZGUgUHJvIExpZ2h0IExDJztcbiAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9Db2RlX1Byb19MaWdodF9MQy50dGYnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnQ29kZSBQcm8nO1xuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0NvZGVfUHJvLnR0ZicpO1xufVxuIiwiQGltcG9ydCAnLi4vLi4vLi4vdGhlbWUvbWl4aW5zLnNjc3MnO1xuQGltcG9ydCAnLi4vLi4vLi4vdGhlbWUvY29sb3JzLnNjc3MnO1xuQGltcG9ydCAnLi4vLi4vLi4vdGhlbWUvZm9udHMuc2Nzcyc7XG5cbi53cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBAaW5jbHVkZSBmbGV4TWl4O1xuICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvcjogYmxhY2ssICRhbHBoYTogLjcpO1xuICB6LWluZGV4OiAxMDAwO1xuXG4gIC5tb2RhbCB7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtaW4td2lkdGg6IDMyMHB4O1xuICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQ6ICRhY3RpdmUtZm9udDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmc6IDI1cHggMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgQGluY2x1ZGUgZmxleE1peCgkZGlyZWN0aW9uOiBjb2x1bW4pO1xuICAgIHBhZGRpbmc6IDM1cHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgLmNsb3NlIHtcbiAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAtMzVweDtcbiAgICAgIHRvcDogLTM1cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgfVxuXG4gICAgLnRpdGxlIHtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBmb250LWZhbWlseTogJ0NvZGUgUHJvIExpZ2h0JztcbiAgICAgIGZvbnQtc2l6ZTogMjdweDtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgfVxuXG4gICAgLnN1YnRpdGxlIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgfVxuXG4gICAgLmZvcm0ge1xuICAgICAgJi1saW5lIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIEBpbmNsdWRlIGZsZXhNaXgoJGp1c3RpZnk6IHNwYWNlLWJldHdlZW4pO1xuXG4gICAgICAgIGlucHV0IHtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgICAgICAgIGhlaWdodDogMzBweDtcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDdweDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKHdoaXRlLCAuOSk7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdDb2RlIFBybyc7XG5cbiAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRleHRhcmVhIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICByZXNpemU6IG5vbmU7XG4gICAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEod2hpdGUsIC45KTtcbiAgICAgICAgICBmb250LWZhbWlseTogJ0NvZGUgUHJvJztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAuc2VuZCB7XG4gICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgaGVpZ2h0OiAzNXB4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRtZWRpdW0tY29sb3I7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdDb2RlIFBybyBCb2xkJztcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIlxuQG1peGluIGZsZXhNaXgoJGp1c3RpZnk6IGNlbnRlciwgJGFsaWduOiBjZW50ZXIsICRkaXJlY3Rpb246IHJvdykge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogJGFsaWduO1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcbn1cblxuQG1peGluIGZvbnRTdHlsZSgkc2l6ZTogMThweCwgJGNvbG9yOiAkbWFpbi1mb250KSB7XG4gIGZvbnQtc2l6ZTogJHNpemU7XG4gIGNvbG9yOiAkY29sb3I7XG59XG4iLCIkbWFpbi1mb250OiAjMDAwMDAwO1xuJG11dGVkLWZvbnQ6ICM0ODQ4NDk7XG4kYWN0aXZlLWZvbnQ6ICNmOTFiMWI7XG4kb2RkLWJhY2tncm91bmQ6ICNmMGYwZjA7XG4kZGFyay1jb2xvcjogIzI4MmUzNTtcbiRtZWRpdW0tY29sb3I6ICMyZTM0M2E7XG4kbGlnaHQtY29sb3I6ICNmMGYwZjA7XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FormsModalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-forms-modal',
                templateUrl: './forms-modal.component.html',
                styleUrls: ['./forms-modal.component.scss']
            }]
    }], function () { return []; }, { closeEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "Oqr+":
/*!******************************************!*\
  !*** ./src/app/contsants/genres.enum.ts ***!
  \******************************************/
/*! exports provided: GENRES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GENRES", function() { return GENRES; });
var GENRES;
(function (GENRES) {
    GENRES["RAP"] = "rap";
    GENRES["POP"] = "pop";
    GENRES["ROCK"] = "rock";
    GENRES["EDM"] = "edm";
    GENRES["ALL"] = "all";
    GENRES["LIVE"] = "live";
    GENRES["CHANNEL"] = "channel";
})(GENRES || (GENRES = {}));


/***/ }),

/***/ "QIP1":
/*!********************************************!*\
  !*** ./src/app/services/player.service.ts ***!
  \********************************************/
/*! exports provided: PlayerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerService", function() { return PlayerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var hls_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hls.js */ "ulZh");
/* harmony import */ var hls_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hls_js__WEBPACK_IMPORTED_MODULE_1__);



class PlayerService {
    playUrl(incomeUrl, videoTag, autoplay = true) {
        const hls = new hls_js__WEBPACK_IMPORTED_MODULE_1__();
        const url = this.parseUrl(incomeUrl);
        hls.loadSource(url);
        hls.attachMedia(videoTag);
        if (autoplay) {
            videoTag.muted = true;
            videoTag.play();
        }
    }
    parseUrl(url) {
        if (url.includes('https')) {
            return url;
        }
        else {
            const newUrl = url.replace(':82', '');
            return newUrl;
        }
    }
}
PlayerService.ɵfac = function PlayerService_Factory(t) { return new (t || PlayerService)(); };
PlayerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: PlayerService, factory: PlayerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PlayerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], null, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");



class AppComponent {
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 9, vars: 0, consts: [[1, "wave"], [1, "wrapper", "wrapper_footer"], [1, "copyright"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "sluhay.by");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "\u043A\u0430\u043D\u0430\u043B \u0431\u0435\u043B\u043E\u0440\u0443\u0441\u0441\u043A\u043E\u0439 \u043C\u0443\u0437\u044B\u043A\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "\u00A92021 Sluhay.by");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: ["@font-face {\n  font-family: \"Code Pro LC\";\n  src: url('Code_Pro_LC.ttf');\n}\n@font-face {\n  font-family: \"Code Pro Bold\";\n  src: url('Code_Pro_Bold.ttf');\n}\n@font-face {\n  font-family: \"Code Pro Bold LC\";\n  src: url('Code_Pro_Bold_LC.ttf');\n}\n@font-face {\n  font-family: \"Code Pro LC\";\n  src: url('Code_Pro_LC.ttf');\n}\n@font-face {\n  font-family: \"Code Pro Light\";\n  src: url('Code_Pro_Light.ttf');\n}\n@font-face {\n  font-family: \"Code Pro Light LC\";\n  src: url('Code_Pro_Light_LC.ttf');\n}\n@font-face {\n  font-family: \"Code Pro\";\n  src: url('Code_Pro.ttf');\n}\n.wave[_ngcontent-%COMP%] {\n  width: 100%;\n  background-image: url('wave.png');\n  background-repeat: repeat-x;\n  background-size: contain;\n  background-position: center;\n}\n.wave[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: block;\n  padding-top: 20%;\n}\n.wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n.wrapper_footer[_ngcontent-%COMP%] {\n  height: 260px;\n  text-transform: uppercase;\n  font-size: 24px;\n  color: #484849;\n  font-family: \"Code Pro Light\";\n}\n.wrapper_footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n  text-align: center;\n}\n.wrapper_footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.copyright[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvdGhlbWUvbWl4aW5zLnNjc3MiLCJzcmMvdGhlbWUvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBQTtFQUNBLDJCQUFBO0FDQ0Y7QURFQTtFQUNFLDRCQUFBO0VBQ0EsNkJBQUE7QUNBRjtBREdBO0VBQ0UsK0JBQUE7RUFDQSxnQ0FBQTtBQ0RGO0FESUE7RUFDRSwwQkFBQTtFQUNBLDJCQUFBO0FDRkY7QURLQTtFQUNFLDZCQUFBO0VBQ0EsOEJBQUE7QUNIRjtBRE1BO0VBQ0UsZ0NBQUE7RUFDQSxpQ0FBQTtBQ0pGO0FET0E7RUFDRSx1QkFBQTtFQUNBLHdCQUFBO0FDTEY7QUF2QkE7RUFDRSxXQUFBO0VBQ0EsaUNBQUE7RUFDQSwyQkFBQTtFQUNBLHdCQUFBO0VBQ0EsMkJBQUE7QUF5QkY7QUF2QkU7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0FBeUJKO0FBckJBO0VDaEJFLGFBQUE7RUFDQSxtQkFGdUM7RUFHdkMsdUJBSHVCO0VBSXZCLHNCRGM2QjtBQTJCL0I7QUF6QkU7RUFDRSxhQUFBO0VBQ0EseUJBQUE7RUNkRixlRGVxQjtFQ2RyQixjQ1RXO0VGd0JULDZCQUFBO0FBNEJKO0FBMUJJO0VBQ0UsbUJBQUE7RUFDQSxrQkFBQTtBQTRCTjtBQTFCTTtFQUNFLGdCQUFBO0FBNEJSO0FBdEJBO0VBQ0UsZUFBQTtBQXlCRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0NvZGUgUHJvIExDJztcbiAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9Db2RlX1Byb19MQy50dGYnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnQ29kZSBQcm8gQm9sZCc7XG4gIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvQ29kZV9Qcm9fQm9sZC50dGYnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnQ29kZSBQcm8gQm9sZCBMQyc7XG4gIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvQ29kZV9Qcm9fQm9sZF9MQy50dGYnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnQ29kZSBQcm8gTEMnO1xuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0NvZGVfUHJvX0xDLnR0ZicpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdDb2RlIFBybyBMaWdodCc7XG4gIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvQ29kZV9Qcm9fTGlnaHQudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0NvZGUgUHJvIExpZ2h0IExDJztcbiAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9Db2RlX1Byb19MaWdodF9MQy50dGYnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnQ29kZSBQcm8nO1xuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0NvZGVfUHJvLnR0ZicpO1xufVxuIiwiQGltcG9ydCAnLi4vdGhlbWUvbWl4aW5zLnNjc3MnO1xuQGltcG9ydCAnLi4vdGhlbWUvY29sb3JzLnNjc3MnO1xuQGltcG9ydCAnLi4vdGhlbWUvZm9udHMuc2Nzcyc7XG5cbi53YXZlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vYXNzZXRzL3dhdmUucG5nJyk7XG4gIGJhY2tncm91bmQtcmVwZWF0OiByZXBlYXQteDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG5cbiAgJjo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBhZGRpbmctdG9wOiAyMCU7XG4gIH1cbn1cblxuLndyYXBwZXIge1xuICBAaW5jbHVkZSBmbGV4TWl4KCRkaXJlY3Rpb246IGNvbHVtbik7XG5cbiAgJl9mb290ZXIge1xuICAgIGhlaWdodDogMjYwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBAaW5jbHVkZSBmb250U3R5bGUoMjRweCwgJG11dGVkLWZvbnQpO1xuICAgIGZvbnQtZmFtaWx5OiAnQ29kZSBQcm8gTGlnaHQnO1xuXG4gICAgc3BhbiB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uY29weXJpZ2h0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5cbiIsIlxuQG1peGluIGZsZXhNaXgoJGp1c3RpZnk6IGNlbnRlciwgJGFsaWduOiBjZW50ZXIsICRkaXJlY3Rpb246IHJvdykge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogJGFsaWduO1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcbn1cblxuQG1peGluIGZvbnRTdHlsZSgkc2l6ZTogMThweCwgJGNvbG9yOiAkbWFpbi1mb250KSB7XG4gIGZvbnQtc2l6ZTogJHNpemU7XG4gIGNvbG9yOiAkY29sb3I7XG59XG4iLCIkbWFpbi1mb250OiAjMDAwMDAwO1xuJG11dGVkLWZvbnQ6ICM0ODQ4NDk7XG4kYWN0aXZlLWZvbnQ6ICNmOTFiMWI7XG4kb2RkLWJhY2tncm91bmQ6ICNmMGYwZjA7XG4kZGFyay1jb2xvcjogIzI4MmUzNTtcbiRtZWRpdW0tY29sb3I6ICMyZTM0M2E7XG4kbGlnaHQtY29sb3I6ICNmMGYwZjA7XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], null, null); })();


/***/ }),

/***/ "VK4e":
/*!*******************************************************************!*\
  !*** ./src/app/components/subscription/subscription.component.ts ***!
  \*******************************************************************/
/*! exports provided: SubscriptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubscriptionComponent", function() { return SubscriptionComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SubscriptionComponent {
    constructor() { }
    ngOnInit() {
    }
}
SubscriptionComponent.ɵfac = function SubscriptionComponent_Factory(t) { return new (t || SubscriptionComponent)(); };
SubscriptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SubscriptionComponent, selectors: [["app-subscription"]], decls: 14, vars: 0, consts: [[1, "subscription"], [1, "subscription__text"], ["action", "https://app.getresponse.com/add_subscriber.html", "accept-charset", "utf-8", "method", "post", 1, "form"], ["type", "text", "placeholder", "E-mail", "name", "email", 1, "form__email"], ["type", "hidden", "name", "campaign_token", "value", "oO1IO"], ["type", "hidden", "name", "thankyou_url", "value", "http://sluhay.by/spasibo_za_podpisku"], ["type", "hidden", "name", "start_day", "value", "0"], [1, "form__button"], ["src", "assets/play.svg", "alt", ""], ["type", "submit", "value", "\u041F\u043E\u0434\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F", 1, "hidden"]], template: function SubscriptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u043D\u0430 \u0440\u0430\u0441\u0441\u044B\u043B\u043A\u0443");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@font-face {\n  font-family: \"Code Pro LC\";\n  src: url('Code_Pro_LC.ttf');\n}\n@font-face {\n  font-family: \"Code Pro Bold\";\n  src: url('Code_Pro_Bold.ttf');\n}\n@font-face {\n  font-family: \"Code Pro Bold LC\";\n  src: url('Code_Pro_Bold_LC.ttf');\n}\n@font-face {\n  font-family: \"Code Pro LC\";\n  src: url('Code_Pro_LC.ttf');\n}\n@font-face {\n  font-family: \"Code Pro Light\";\n  src: url('Code_Pro_Light.ttf');\n}\n@font-face {\n  font-family: \"Code Pro Light LC\";\n  src: url('Code_Pro_Light_LC.ttf');\n}\n@font-face {\n  font-family: \"Code Pro\";\n  src: url('Code_Pro.ttf');\n}\n[_nghost-%COMP%] {\n  width: 1430px;\n}\n@media screen and (max-width: 1430px) {\n  [_nghost-%COMP%] {\n    width: 100%;\n  }\n}\n.subscription[_ngcontent-%COMP%] {\n  width: 1430px;\n  height: 260px;\n  background-image: url('support_banner.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: row;\n  padding: 0 180px 0 130px;\n  box-sizing: border-box;\n}\n.subscription__text[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 36px;\n  color: white;\n}\n.subscription[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  height: 50px;\n  width: 70%;\n}\n.subscription[_ngcontent-%COMP%]   .form__email[_ngcontent-%COMP%] {\n  height: 100%;\n  margin-right: 30px;\n  border-radius: 5px;\n  background-color: rgba(255, 255, 255, 0.7);\n  padding-left: 15px;\n  border: none;\n  outline: none;\n  width: 100%;\n}\n.subscription[_ngcontent-%COMP%]   .form__button[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 155px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  text-transform: uppercase;\n  background-color: #282e35;\n  border-radius: 5px;\n  font-size: 14px;\n  color: white;\n  font-family: \"Code Pro Bold\";\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n  text-decoration: none;\n}\n.subscription[_ngcontent-%COMP%]   .form__button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 5px;\n  width: 15px;\n}\n.hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n@media screen and (max-width: 1430px) {\n  .subscription[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media screen and (max-width: 1200px) {\n  .subscription[_ngcontent-%COMP%] {\n    padding: 0 20px;\n  }\n}\n@media screen and (max-width: 910px) {\n  .subscription[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    align-items: flex-start;\n    justify-content: center;\n    flex-direction: column;\n  }\n  .subscription[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media screen and (max-width: 440px) {\n  .subscription[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n  }\n  .subscription__text[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .subscription[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n    height: auto;\n  }\n  .subscription[_ngcontent-%COMP%]   .form__email[_ngcontent-%COMP%] {\n    margin-right: 0;\n    margin-bottom: 10px;\n    height: 40px;\n  }\n  .subscription[_ngcontent-%COMP%]   .form__button[_ngcontent-%COMP%] {\n    height: 40px;\n  }\n  .subscription[_ngcontent-%COMP%]   .form__button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3N1YnNjcmlwdGlvbi9zdWJzY3JpcHRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvdGhlbWUvbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBQTtFQUNBLDJCQUFBO0FDQ0Y7QURFQTtFQUNFLDRCQUFBO0VBQ0EsNkJBQUE7QUNBRjtBREdBO0VBQ0UsK0JBQUE7RUFDQSxnQ0FBQTtBQ0RGO0FESUE7RUFDRSwwQkFBQTtFQUNBLDJCQUFBO0FDRkY7QURLQTtFQUNFLDZCQUFBO0VBQ0EsOEJBQUE7QUNIRjtBRE1BO0VBQ0UsZ0NBQUE7RUFDQSxpQ0FBQTtBQ0pGO0FET0E7RUFDRSx1QkFBQTtFQUNBLHdCQUFBO0FDTEY7QUF2QkE7RUFDRSxhQUFBO0FBeUJGO0FBdkJFO0VBSEY7SUFJSSxXQUFBO0VBMEJGO0FBQ0Y7QUF2QkE7RUFDRSxhQUFBO0VBQ0EsYUFBQTtFQUNBLDJDQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtFQUNBLDJCQUFBO0VDaEJBLGFBQUE7RUFDQSxtQkFGdUM7RUFHdkMsOEJEZWlCO0VDZGpCLG1CQUoyRDtFRG1CM0Qsd0JBQUE7RUFDQSxzQkFBQTtBQTZCRjtBQTNCRTtFQUNFLHlCQUFBO0VDZkYsZURnQnFCO0VDZnJCLFlEZTJCO0FBOEI3QjtBQTNCRTtFQzFCQSxhQUFBO0VBQ0EsbUJBRnVDO0VBR3ZDLHVCQUh1QjtFQUl2QixtQkFKMkQ7RUQ2QnpELFlBQUE7RUFDQSxVQUFBO0FBZ0NKO0FBOUJJO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBZ0NOO0FBN0JJO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUM1Q0osYUFBQTtFQUNBLG1CQUZ1QztFQUd2Qyx1QkFIdUI7RUFJdkIsbUJBSjJEO0VEK0N2RCx5QkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUN6Q0osZUQwQ3VCO0VDekN2QixZRHlDNkI7RUFDekIsNEJBQUE7RUFDQSxlQUFBO0VBQ0EseUJBQUE7VUFBQSxpQkFBQTtFQUNBLHFCQUFBO0FBbUNOO0FBakNNO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0FBbUNSO0FBN0JBO0VBQ0UsYUFBQTtBQWdDRjtBQTdCQTtFQUNFO0lBQ0UsV0FBQTtFQWdDRjtBQUNGO0FBN0JBO0VBQ0U7SUFDRSxlQUFBO0VBK0JGO0FBQ0Y7QUE1QkE7RUFDRTtJQUNFLFdBQUE7SUNqRkYsYUFBQTtJQUNBLHVCRGlGMkI7SUNoRjNCLHVCQUh1QjtJQUl2QixzQkQrRW1EO0VBaUNuRDtFQS9CRTtJQUNFLFdBQUE7RUFpQ0o7QUFDRjtBQTdCQTtFQUNFO0lDM0ZBLGFBQUE7SUFDQSxtQkFGdUM7SUFHdkMsdUJBSHVCO0lBSXZCLHNCRHlGK0I7RUFrQy9CO0VBakNFO0lBQ0Usa0JBQUE7RUFtQ0o7RUFoQ0U7SUNqR0YsYUFBQTtJQUNBLG1CQUZ1QztJQUd2Qyx1QkFIdUI7SUFJdkIsc0JEK0ZpQztJQUM3QixZQUFBO0VBcUNKO0VBbkNJO0lBQ0UsZUFBQTtJQUNBLG1CQUFBO0lBQ0EsWUFBQTtFQXFDTjtFQWxDSTtJQUNFLFlBQUE7RUFvQ047RUFuQ007SUFDRSxhQUFBO0VBcUNSO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3N1YnNjcmlwdGlvbi9zdWJzY3JpcHRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdDb2RlIFBybyBMQyc7XG4gIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvQ29kZV9Qcm9fTEMudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0NvZGUgUHJvIEJvbGQnO1xuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0NvZGVfUHJvX0JvbGQudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0NvZGUgUHJvIEJvbGQgTEMnO1xuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0NvZGVfUHJvX0JvbGRfTEMudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0NvZGUgUHJvIExDJztcbiAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9Db2RlX1Byb19MQy50dGYnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnQ29kZSBQcm8gTGlnaHQnO1xuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0NvZGVfUHJvX0xpZ2h0LnR0ZicpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdDb2RlIFBybyBMaWdodCBMQyc7XG4gIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvQ29kZV9Qcm9fTGlnaHRfTEMudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0NvZGUgUHJvJztcbiAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9Db2RlX1Byby50dGYnKTtcbn1cbiIsIkBpbXBvcnQgJy4uLy4uLy4uL3RoZW1lL21peGlucy5zY3NzJztcbkBpbXBvcnQgJy4uLy4uLy4uL3RoZW1lL2NvbG9ycy5zY3NzJztcbkBpbXBvcnQgJy4uLy4uLy4uL3RoZW1lL2ZvbnRzLnNjc3MnO1xuXG46aG9zdCB7XG4gIHdpZHRoOiAxNDMwcHg7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQzMHB4KSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuLnN1YnNjcmlwdGlvbiB7XG4gIHdpZHRoOiAxNDMwcHg7XG4gIGhlaWdodDogMjYwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9zdXBwb3J0X2Jhbm5lci5qcGdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgQGluY2x1ZGUgZmxleE1peChzcGFjZS1iZXR3ZWVuKTtcbiAgcGFkZGluZzogMCAxODBweCAwIDEzMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICZfX3RleHQge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgQGluY2x1ZGUgZm9udFN0eWxlKDM2cHgsIHdoaXRlKTtcbiAgfVxuXG4gIC5mb3JtIHtcbiAgICBAaW5jbHVkZSBmbGV4TWl4O1xuICAgIGhlaWdodDogNTBweDtcbiAgICB3aWR0aDogNzAlO1xuXG4gICAgJl9fZW1haWwge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgkY29sb3I6IHdoaXRlLCAkYWxwaGE6IDAuNyk7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgJl9fYnV0dG9uIHtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHdpZHRoOiAxNTVweDtcbiAgICAgIEBpbmNsdWRlIGZsZXhNaXg7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI4MmUzNTtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIEBpbmNsdWRlIGZvbnRTdHlsZSgxNHB4LCB3aGl0ZSk7XG4gICAgICBmb250LWZhbWlseTogXCJDb2RlIFBybyBCb2xkXCI7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAgICAgaW1nIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgIHdpZHRoOiAxNXB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uaGlkZGVuIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQzMHB4KSB7XG4gIC5zdWJzY3JpcHRpb24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuc3Vic2NyaXB0aW9uIHtcbiAgICBwYWRkaW5nOiAwIDIwcHg7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTEwcHgpIHtcbiAgLnN1YnNjcmlwdGlvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgQGluY2x1ZGUgZmxleE1peCgkYWxpZ246IGZsZXgtc3RhcnQsICRkaXJlY3Rpb246IGNvbHVtbik7XG5cbiAgICAuZm9ybSB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDQwcHgpIHtcbiAgLnN1YnNjcmlwdGlvbiB7XG4gICAgQGluY2x1ZGUgZmxleE1peCgkZGlyZWN0aW9uOiBjb2x1bW4pO1xuICAgICZfX3RleHQge1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cblxuICAgIC5mb3JtIHtcbiAgICAgIEBpbmNsdWRlIGZsZXhNaXgoJGRpcmVjdGlvbjogY29sdW1uKTtcbiAgICAgIGhlaWdodDogYXV0bztcblxuICAgICAgJl9fZW1haWwge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIGhlaWdodDogNDBweDtcbiAgICAgIH1cblxuICAgICAgJl9fYnV0dG9uIHtcbiAgICAgICAgaGVpZ2h0OiA0MHB4O1xuICAgICAgICBpbWcge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIlxuQG1peGluIGZsZXhNaXgoJGp1c3RpZnk6IGNlbnRlciwgJGFsaWduOiBjZW50ZXIsICRkaXJlY3Rpb246IHJvdykge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogJGFsaWduO1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcbn1cblxuQG1peGluIGZvbnRTdHlsZSgkc2l6ZTogMThweCwgJGNvbG9yOiAkbWFpbi1mb250KSB7XG4gIGZvbnQtc2l6ZTogJHNpemU7XG4gIGNvbG9yOiAkY29sb3I7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SubscriptionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-subscription',
                templateUrl: './subscription.component.html',
                styleUrls: ['./subscription.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "XRsc":
/*!*******************************************************!*\
  !*** ./src/app/components/banner/banner.component.ts ***!
  \*******************************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _banner_player_banner_player_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../banner-player/banner-player.component */ "pdOj");



class BannerComponent {
    constructor() {
        this.URL = 'http://persik.by/stream/3502/32/10970.m3u8';
    }
    ngOnInit() { }
}
BannerComponent.ɵfac = function BannerComponent_Factory(t) { return new (t || BannerComponent)(); };
BannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BannerComponent, selectors: [["app-banner"]], decls: 2, vars: 1, consts: [[1, "banner"], [3, "url"]], template: function BannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-banner-player", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("url", ctx.URL);
    } }, directives: [_banner_player_banner_player_component__WEBPACK_IMPORTED_MODULE_1__["BannerPlayerComponent"]], styles: [".banner[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 130px;\n}\n\n@media screen and (max-width: 878px) {\n  .banner[_ngcontent-%COMP%] {\n    margin-bottom: 60px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9iYW5uZXIvYmFubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtBQUZGOztBQUtBO0VBQ0U7SUFDSSxtQkFBQTtFQUZKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Jhbm5lci9iYW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi90aGVtZS9taXhpbnMuc2Nzcyc7XG5AaW1wb3J0ICcuLi8uLi8uLi90aGVtZS9jb2xvcnMuc2Nzcyc7XG5cbi5iYW5uZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDEzMHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NzhweCkge1xuICAuYmFubmVyIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XG4gIH1cblxufVxuXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BannerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-banner',
                templateUrl: './banner.component.html',
                styleUrls: ['./banner.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _modules_main_main_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/main/main.component */ "ZEQa");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _components_content_card_content_card_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/content-card/content-card.component */ "Js2f");
/* harmony import */ var _components_bands_bands_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/bands/bands.component */ "HxBr");
/* harmony import */ var _components_band_item_band_item_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/band-item/band-item.component */ "oJph");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _components_band_logo_band_logo_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/band-logo/band-logo.component */ "nogf");
/* harmony import */ var _components_support_person_support_person_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/support-person/support-person.component */ "ZjgA");
/* harmony import */ var _components_support_company_support_company_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/support-company/support-company.component */ "q7H0");
/* harmony import */ var _components_modal_popup_modal_popup_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/modal-popup/modal-popup.component */ "Fkiz");
/* harmony import */ var _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/banner/banner.component */ "XRsc");
/* harmony import */ var _components_support_person_group_support_person_group_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/support-person-group/support-person-group.component */ "s76a");
/* harmony import */ var _components_subscription_subscription_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/subscription/subscription.component */ "VK4e");
/* harmony import */ var _components_support_company_group_support_company_group_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/support-company-group/support-company-group.component */ "ioDe");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_band_popup_band_popup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/band-popup/band-popup.component */ "t60e");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _directives_stop_propagation_directice__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./directives/stop-propagation.directice */ "K4lg");
/* harmony import */ var _components_forms_modal_forms_modal_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/forms-modal/forms-modal.component */ "MaJW");
/* harmony import */ var _modules_thanks_thanks_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modules/thanks/thanks.component */ "6j9L");
/* harmony import */ var _components_spasibo_popup_spasibo_popup_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./components/spasibo-popup/spasibo-popup.component */ "ohcA");
/* harmony import */ var _components_player_player_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./components/player/player.component */ "L7MN");
/* harmony import */ var _components_banner_player_banner_player_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/banner-player/banner-player.component */ "pdOj");
/* harmony import */ var _components_sound_range_sound_range_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/sound-range/sound-range.component */ "sGLn");
/* harmony import */ var _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular-slider/ngx-slider */ "SVLx");






























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_27__["NgxSliderModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterModule"].forRoot([
                {
                    path: '',
                    component: _modules_main_main_component__WEBPACK_IMPORTED_MODULE_0__["MainComponent"]
                },
                {
                    path: 'spasibo_za_podpisku',
                    component: _modules_thanks_thanks_component__WEBPACK_IMPORTED_MODULE_22__["ThanksComponent"]
                }
            ]),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["NoopAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
        _components_content_card_content_card_component__WEBPACK_IMPORTED_MODULE_5__["ContentCardComponent"],
        _components_bands_bands_component__WEBPACK_IMPORTED_MODULE_6__["BandsComponent"],
        _components_band_item_band_item_component__WEBPACK_IMPORTED_MODULE_7__["BandItemComponent"],
        _components_band_logo_band_logo_component__WEBPACK_IMPORTED_MODULE_9__["BandLogoComponent"],
        _components_support_person_support_person_component__WEBPACK_IMPORTED_MODULE_10__["SupportPersonComponent"],
        _components_support_company_support_company_component__WEBPACK_IMPORTED_MODULE_11__["SupportCompanyComponent"],
        _components_modal_popup_modal_popup_component__WEBPACK_IMPORTED_MODULE_12__["ModalPopupComponent"],
        _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_13__["BannerComponent"],
        _components_support_person_group_support_person_group_component__WEBPACK_IMPORTED_MODULE_14__["SupportPersonGroupComponent"],
        _components_subscription_subscription_component__WEBPACK_IMPORTED_MODULE_15__["SubscriptionComponent"],
        _components_support_company_group_support_company_group_component__WEBPACK_IMPORTED_MODULE_16__["SupportCompanyGroupComponent"],
        _components_band_popup_band_popup_component__WEBPACK_IMPORTED_MODULE_18__["BandPopupComponent"],
        _directives_stop_propagation_directice__WEBPACK_IMPORTED_MODULE_20__["StopPropagationDirective"],
        _components_forms_modal_forms_modal_component__WEBPACK_IMPORTED_MODULE_21__["FormsModalComponent"],
        _modules_thanks_thanks_component__WEBPACK_IMPORTED_MODULE_22__["ThanksComponent"],
        _modules_main_main_component__WEBPACK_IMPORTED_MODULE_0__["MainComponent"],
        _components_spasibo_popup_spasibo_popup_component__WEBPACK_IMPORTED_MODULE_23__["SpasiboPopupComponent"],
        _components_player_player_component__WEBPACK_IMPORTED_MODULE_24__["PlayerComponent"],
        _components_banner_player_banner_player_component__WEBPACK_IMPORTED_MODULE_25__["BannerPlayerComponent"],
        _components_sound_range_sound_range_component__WEBPACK_IMPORTED_MODULE_26__["SoundRangeComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
        _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_27__["NgxSliderModule"], _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["NoopAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"],
                    _components_content_card_content_card_component__WEBPACK_IMPORTED_MODULE_5__["ContentCardComponent"],
                    _components_bands_bands_component__WEBPACK_IMPORTED_MODULE_6__["BandsComponent"],
                    _components_band_item_band_item_component__WEBPACK_IMPORTED_MODULE_7__["BandItemComponent"],
                    _components_band_logo_band_logo_component__WEBPACK_IMPORTED_MODULE_9__["BandLogoComponent"],
                    _components_support_person_support_person_component__WEBPACK_IMPORTED_MODULE_10__["SupportPersonComponent"],
                    _components_support_company_support_company_component__WEBPACK_IMPORTED_MODULE_11__["SupportCompanyComponent"],
                    _components_modal_popup_modal_popup_component__WEBPACK_IMPORTED_MODULE_12__["ModalPopupComponent"],
                    _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_13__["BannerComponent"],
                    _components_support_person_group_support_person_group_component__WEBPACK_IMPORTED_MODULE_14__["SupportPersonGroupComponent"],
                    _components_subscription_subscription_component__WEBPACK_IMPORTED_MODULE_15__["SubscriptionComponent"],
                    _components_support_company_group_support_company_group_component__WEBPACK_IMPORTED_MODULE_16__["SupportCompanyGroupComponent"],
                    _components_band_popup_band_popup_component__WEBPACK_IMPORTED_MODULE_18__["BandPopupComponent"],
                    _directives_stop_propagation_directice__WEBPACK_IMPORTED_MODULE_20__["StopPropagationDirective"],
                    _components_forms_modal_forms_modal_component__WEBPACK_IMPORTED_MODULE_21__["FormsModalComponent"],
                    _modules_thanks_thanks_component__WEBPACK_IMPORTED_MODULE_22__["ThanksComponent"],
                    _modules_main_main_component__WEBPACK_IMPORTED_MODULE_0__["MainComponent"],
                    _components_spasibo_popup_spasibo_popup_component__WEBPACK_IMPORTED_MODULE_23__["SpasiboPopupComponent"],
                    _components_player_player_component__WEBPACK_IMPORTED_MODULE_24__["PlayerComponent"],
                    _components_banner_player_banner_player_component__WEBPACK_IMPORTED_MODULE_25__["BannerPlayerComponent"],
                    _components_sound_range_sound_range_component__WEBPACK_IMPORTED_MODULE_26__["SoundRangeComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
                    _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_27__["NgxSliderModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_17__["RouterModule"].forRoot([
                        {
                            path: '',
                            component: _modules_main_main_component__WEBPACK_IMPORTED_MODULE_0__["MainComponent"]
                        },
                        {
                            path: 'spasibo_za_podpisku',
                            component: _modules_thanks_thanks_component__WEBPACK_IMPORTED_MODULE_22__["ThanksComponent"]
                        }
                    ]),
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["NoopAnimationsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "ZEQa":
/*!************************************************!*\
  !*** ./src/app/modules/main/main.component.ts ***!
  \************************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var src_app_contsants_side_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/contsants/side.enum */ "txzI");
/* harmony import */ var _contsants_content_cards_constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../contsants/content-cards.constants */ "791+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _constants_support_companies_constants__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./constants/support-companies.constants */ "df8Q");
/* harmony import */ var _constants_genres_constants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./constants/genres.constants */ "I9v1");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./../../services/data.service */ "EnSQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/header/header.component */ "2MiI");
/* harmony import */ var _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/banner/banner.component */ "XRsc");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_bands_bands_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/bands/bands.component */ "HxBr");
/* harmony import */ var _components_support_person_group_support_person_group_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/support-person-group/support-person-group.component */ "s76a");
/* harmony import */ var _components_subscription_subscription_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/subscription/subscription.component */ "VK4e");
/* harmony import */ var _components_support_company_group_support_company_group_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/support-company-group/support-company-group.component */ "ioDe");
/* harmony import */ var _components_content_card_content_card_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/content-card/content-card.component */ "Js2f");
/* harmony import */ var _components_spasibo_popup_spasibo_popup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/spasibo-popup/spasibo-popup.component */ "ohcA");



















function MainComponent_app_content_card_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-content-card", 10);
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const even_r3 = ctx.even;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("id", item_r2.genre)("content", item_r2)("side", even_r3 ? ctx_r0.sides.LEFT : ctx_r0.sides.RIGHT);
} }
function MainComponent_app_spasibo_popup_13_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-spasibo-popup", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("closeEvent", function MainComponent_app_spasibo_popup_13_Template_app_spasibo_popup_closeEvent_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r4.closeSpasiboModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class MainComponent {
    constructor(dataService, activatedRoute) {
        this.dataService = dataService;
        this.activatedRoute = activatedRoute;
        this.contentCards = _contsants_content_cards_constants__WEBPACK_IMPORTED_MODULE_3__["CONTENT_CARDS"];
        this.sides = src_app_contsants_side_enum__WEBPACK_IMPORTED_MODULE_2__["SIDE"];
        this.genres = _constants_genres_constants__WEBPACK_IMPORTED_MODULE_6__["GENRES_LIST"];
        this.allBands = [];
        this.filteredBands = [];
        this.activeGenreId = 1;
        this.supportCompanies = _constants_support_companies_constants__WEBPACK_IMPORTED_MODULE_5__["SUPPORT_COMPANIES"];
    }
    ngOnInit() {
        const allData$ = this.genres.slice(1)
            .map(({ id }) => this.getArtistsInfo(id));
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["forkJoin"])(allData$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((data) => data.reduce((accum, item) => accum.concat(...item), [])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1))
            .subscribe((data) => {
            data.sort((a, b) => a.name.localeCompare(b.name));
            this.allBands = data;
            this.filteredBands = data;
        });
        this.supportPersons = this.dataService.getArtistsIds(1384).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])((ids) => this.dataService.getArtistsInfo(ids)));
        this.activatedRoute.fragment.subscribe(fragment => this.scrollToFragment(fragment));
    }
    onGenreChange(genreId) {
        this.activeGenreId = genreId;
        if (genreId !== 1) {
            this.filteredBands = this.allBands.filter((item) => item.genres.includes(genreId));
        }
        else {
            this.filteredBands = this.allBands;
        }
    }
    closeModal() {
        this.isShowCompanySupportModal = false;
    }
    openModal() {
        this.isShowCompanySupportModal = true;
    }
    closeSpasiboModal() {
        this.isShowSpasiboModal = false;
    }
    openSpasiboModal() {
        this.isShowSpasiboModal = true;
    }
    getArtistsInfo(id) {
        return this.dataService.getArtistsIds(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["switchMap"])((result) => this.dataService.getArtistsInfo(result)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((data) => data.map((item) => {
            const genreId = item.genres[0];
            const genre = this.genres.find((g) => g.id === genreId);
            return Object.assign(Object.assign({}, item), { genre });
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1));
    }
    scrollToFragment(fragment) {
        if (fragment) {
            setTimeout(() => {
                const block = document.querySelector('#' + fragment);
                if (block) {
                    block.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }, 100);
        }
    }
}
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"])); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 14, vars: 9, consts: [[1, "wrapper"], [3, "id", "content", "side", 4, "ngFor", "ngForOf"], ["id", "musicions", 1, "wrapper", "wrapper_odd"], [3, "selectedGenreId", "genres", "bands", "changeGenre"], ["id", "donates", 1, "wrapper"], [3, "supportPersons"], ["id", "subscriptions", 1, "wrapper"], ["id", "companies", 1, "wrapper"], [3, "supportCompanies", "openEvent"], [3, "closeEvent", 4, "ngIf"], [3, "id", "content", "side"], [3, "closeEvent"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "app-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](3, MainComponent_app_content_card_3_Template, 1, 3, "app-content-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](5, "app-bands", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("changeGenre", function MainComponent_Template_app_bands_changeGenre_5_listener($event) { return ctx.onGenreChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](7, "app-support-person-group", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](10, "app-subscription");
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](12, "app-support-company-group", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("openEvent", function MainComponent_Template_app_support_company_group_openEvent_12_listener() { return ctx.openSpasiboModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](13, MainComponent_app_spasibo_popup_13_Template, 1, 0, "app-spasibo-popup", 9);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.contentCards);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("selectedGenreId", ctx.activeGenreId)("genres", ctx.genres)("bands", ctx.filteredBands);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("supportPersons", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 7, ctx.supportPersons));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("supportCompanies", ctx.supportCompanies);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isShowSpasiboModal);
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_9__["HeaderComponent"], _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_10__["BannerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgForOf"], _components_bands_bands_component__WEBPACK_IMPORTED_MODULE_12__["BandsComponent"], _components_support_person_group_support_person_group_component__WEBPACK_IMPORTED_MODULE_13__["SupportPersonGroupComponent"], _components_subscription_subscription_component__WEBPACK_IMPORTED_MODULE_14__["SubscriptionComponent"], _components_support_company_group_support_company_group_component__WEBPACK_IMPORTED_MODULE_15__["SupportCompanyGroupComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["NgIf"], _components_content_card_content_card_component__WEBPACK_IMPORTED_MODULE_16__["ContentCardComponent"], _components_spasibo_popup_spasibo_popup_component__WEBPACK_IMPORTED_MODULE_17__["SpasiboPopupComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_11__["AsyncPipe"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n.wrapper_odd[_ngcontent-%COMP%] {\n  background: #f0f0f0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL21haW4uY29tcG9uZW50LnNjc3MiLCJzcmMvdGhlbWUvbWl4aW5zLnNjc3MiLCJzcmMvdGhlbWUvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUNERSxhQUFBO0VBQ0EsbUJBRnVDO0VBR3ZDLHVCQUh1QjtFQUl2QixzQkRENkI7QUFDL0I7QUFDRTtFQUNFLG1CRUphO0FGS2pCIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL21haW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi90aGVtZS9taXhpbnMuc2Nzcyc7XG5AaW1wb3J0ICcuLi8uLi8uLi90aGVtZS9jb2xvcnMuc2Nzcyc7XG5cbi53cmFwcGVyIHtcbiAgQGluY2x1ZGUgZmxleE1peCgkZGlyZWN0aW9uOiBjb2x1bW4pO1xuXG4gICZfb2RkIHtcbiAgICBiYWNrZ3JvdW5kOiAkb2RkLWJhY2tncm91bmQ7XG4gIH1cbn1cbiIsIlxuQG1peGluIGZsZXhNaXgoJGp1c3RpZnk6IGNlbnRlciwgJGFsaWduOiBjZW50ZXIsICRkaXJlY3Rpb246IHJvdykge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogJGFsaWduO1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcbn1cblxuQG1peGluIGZvbnRTdHlsZSgkc2l6ZTogMThweCwgJGNvbG9yOiAkbWFpbi1mb250KSB7XG4gIGZvbnQtc2l6ZTogJHNpemU7XG4gIGNvbG9yOiAkY29sb3I7XG59XG4iLCIkbWFpbi1mb250OiAjMDAwMDAwO1xuJG11dGVkLWZvbnQ6ICM0ODQ4NDk7XG4kYWN0aXZlLWZvbnQ6ICNmOTFiMWI7XG4kb2RkLWJhY2tncm91bmQ6ICNmMGYwZjA7XG4kZGFyay1jb2xvcjogIzI4MmUzNTtcbiRtZWRpdW0tY29sb3I6ICMyZTM0M2E7XG4kbGlnaHQtY29sb3I6ICNmMGYwZjA7XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.scss']
            }]
    }], function () { return [{ type: _services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }]; }, null); })();


/***/ }),

/***/ "ZjgA":
/*!***********************************************************************!*\
  !*** ./src/app/components/support-person/support-person.component.ts ***!
  \***********************************************************************/
/*! exports provided: SupportPersonComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportPersonComponent", function() { return SupportPersonComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SupportPersonComponent {
    constructor() { }
    ngOnInit() {
    }
}
SupportPersonComponent.ɵfac = function SupportPersonComponent_Factory(t) { return new (t || SupportPersonComponent)(); };
SupportPersonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SupportPersonComponent, selectors: [["app-support-person"]], inputs: { person: "person" }, decls: 12, vars: 6, consts: [[1, "person"], [1, "person__avatar"], [1, "person__status"], [1, "name"], [1, "role"], [1, "text", "text_small"], [1, "person__pay"]], template: function SupportPersonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + ctx.person.cover + ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.person.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.person.international_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.person.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.person.description);
    } }, styles: [".person[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  color: white;\n  margin-bottom: 30px;\n  position: relative;\n  z-index: 1;\n}\n.person__avatar[_ngcontent-%COMP%] {\n  width: 240px;\n  height: 240px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  flex-shrink: 0;\n}\n.person__status[_ngcontent-%COMP%] {\n  width: 35%;\n  height: 240px;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: column;\n  box-sizing: border-box;\n  padding-left: 30px;\n  background-color: #282e35;\n  flex-shrink: 0;\n  text-transform: uppercase;\n}\n.person__status[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  display: none;\n}\n.person__status[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-family: \"Code Pro Bold\";\n  font-size: 20px;\n  margin-bottom: 20px;\n}\n.person__status[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #f91b1b;\n}\n.person__pay[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 240px;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: column;\n  box-sizing: border-box;\n  padding-left: 30px;\n  background-color: #2e343a;\n  padding-right: 20px;\n}\n.person__pay[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-family: \"Code Pro Bold\";\n  text-transform: uppercase;\n}\n.person__pay[_ngcontent-%COMP%]   .text_small[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.person__pay[_ngcontent-%COMP%]   .text_medium[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n@media screen and (max-width: 620px) {\n  .person__status[_ngcontent-%COMP%] {\n    width: 100%;\n    flex-shrink: 1;\n  }\n  .person__status[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    display: inline;\n  }\n  .person__pay[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media screen and (max-width: 480px) {\n  .person[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdXBwb3J0LXBlcnNvbi9zdXBwb3J0LXBlcnNvbi5jb21wb25lbnQuc2NzcyIsInNyYy90aGVtZS9taXhpbnMuc2NzcyIsInNyYy90aGVtZS9jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLFdBQUE7RUNGQSxhQUFBO0VBQ0EsbUJBRnVDO0VBR3ZDLHVCQUh1QjtFQUl2QixtQkFKMkQ7RURLM0QsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFDRjtBQUNFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0FBQ0o7QUFFRTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VDckJGLGFBQUE7RUFDQSx1QkRxQjJCO0VDcEIzQix1QkFIdUI7RUFJdkIsc0JEbUJtRDtFQUNqRCxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJFdkJTO0VGd0JULGNBQUE7RUFDQSx5QkFBQTtBQUdKO0FBREk7RUFDRSxhQUFBO0FBR047QUFBSTtFQUNFLDRCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBRU47QUFDSTtFQ2hDRixlQURzQjtFQUV0QixjQ1JZO0FGMENkO0FBRUU7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQzlDRixhQUFBO0VBQ0EsdUJEOEMyQjtFQzdDM0IsdUJBSHVCO0VBSXZCLHNCRDRDbUQ7RUFDakQsc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCRS9DVztFRmdEWCxtQkFBQTtBQUdKO0FBREk7RUFDRSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtBQUdOO0FBRE07RUFDRSxlQUFBO0FBR1I7QUFBTTtFQUNFLGVBQUE7QUFFUjtBQUlBO0VBRUk7SUFDRSxXQUFBO0lBQ0EsY0FBQTtFQUZKO0VBSUk7SUFDRSxlQUFBO0VBRk47RUFNRTtJQUNFLGFBQUE7RUFKSjtBQUNGO0FBUUE7RUFDRTtJQUNFLHNCQUFBO0VBTkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3VwcG9ydC1wZXJzb24vc3VwcG9ydC1wZXJzb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vdGhlbWUvbWl4aW5zLnNjc3NcIjtcbkBpbXBvcnQgXCIuLi8uLi8uLi90aGVtZS9jb2xvcnMuc2Nzc1wiO1xuXG4ucGVyc29uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIEBpbmNsdWRlIGZsZXhNaXg7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcblxuICAmX19hdmF0YXIge1xuICAgIHdpZHRoOiAyNDBweDtcbiAgICBoZWlnaHQ6IDI0MHB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gIH1cblxuICAmX19zdGF0dXMge1xuICAgIHdpZHRoOiAzNSU7XG4gICAgaGVpZ2h0OiAyNDBweDtcbiAgICBAaW5jbHVkZSBmbGV4TWl4KCRhbGlnbjogZmxleC1zdGFydCwgJGRpcmVjdGlvbjogY29sdW1uKTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyay1jb2xvcjtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gICAgLnRleHQge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAubmFtZSB7XG4gICAgICBmb250LWZhbWlseTogJ0NvZGUgUHJvIEJvbGQnO1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG5cbiAgICAucm9sZSB7XG4gICAgICBAaW5jbHVkZSBmb250U3R5bGUoJGNvbG9yOiAkYWN0aXZlLWZvbnQpO1xuICAgIH1cbiAgfVxuXG4gICZfX3BheSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyNDBweDtcbiAgICBAaW5jbHVkZSBmbGV4TWl4KCRhbGlnbjogZmxleC1zdGFydCwgJGRpcmVjdGlvbjogY29sdW1uKTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWVkaXVtLWNvbG9yO1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG5cbiAgICAudGV4dCB7XG4gICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICBmb250LWZhbWlseTogJ0NvZGUgUHJvIEJvbGQnO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblxuICAgICAgJl9zbWFsbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cblxuICAgICAgJl9tZWRpdW0ge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYyMHB4KSB7XG4gIC5wZXJzb24ge1xuICAgICZfX3N0YXR1cyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGZsZXgtc2hyaW5rOiAxO1xuXG4gICAgICAudGV4dCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmX19wYXkge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLnBlcnNvbiB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuIiwiXG5AbWl4aW4gZmxleE1peCgkanVzdGlmeTogY2VudGVyLCAkYWxpZ246IGNlbnRlciwgJGRpcmVjdGlvbjogcm93KSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiAkYWxpZ247XG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XG4gIGZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xufVxuXG5AbWl4aW4gZm9udFN0eWxlKCRzaXplOiAxOHB4LCAkY29sb3I6ICRtYWluLWZvbnQpIHtcbiAgZm9udC1zaXplOiAkc2l6ZTtcbiAgY29sb3I6ICRjb2xvcjtcbn1cbiIsIiRtYWluLWZvbnQ6ICMwMDAwMDA7XG4kbXV0ZWQtZm9udDogIzQ4NDg0OTtcbiRhY3RpdmUtZm9udDogI2Y5MWIxYjtcbiRvZGQtYmFja2dyb3VuZDogI2YwZjBmMDtcbiRkYXJrLWNvbG9yOiAjMjgyZTM1O1xuJG1lZGl1bS1jb2xvcjogIzJlMzQzYTtcbiRsaWdodC1jb2xvcjogI2YwZjBmMDtcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SupportPersonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-support-person',
                templateUrl: './support-person.component.html',
                styleUrls: ['./support-person.component.scss']
            }]
    }], function () { return []; }, { person: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "df8Q":
/*!***********************************************************************!*\
  !*** ./src/app/modules/main/constants/support-companies.constants.ts ***!
  \***********************************************************************/
/*! exports provided: SUPPORT_COMPANIES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUPPORT_COMPANIES", function() { return SUPPORT_COMPANIES; });
const SUPPORT_COMPANIES = [
    {
        name: 'Persik',
        cost: 200,
        logo: 'assets/persik_logo.png',
        role: 'интерактивное тв',
        since: 'с янв. 2021'
    },
    {
        name: 'Infotelecom',
        cost: 200,
        logo: 'assets/it.png',
        role: 'Телекоммуникации',
        since: 'с янв. 2021'
    }
];


/***/ }),

/***/ "ioDe":
/*!*************************************************************************************!*\
  !*** ./src/app/components/support-company-group/support-company-group.component.ts ***!
  \*************************************************************************************/
/*! exports provided: SupportCompanyGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportCompanyGroupComponent", function() { return SupportCompanyGroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _support_company_support_company_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../support-company/support-company.component */ "q7H0");




function SupportCompanyGroupComponent_app_support_company_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-support-company", 9);
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("company", item_r1);
} }
class SupportCompanyGroupComponent {
    constructor() {
        this.supportCompanies = [];
        this.openEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    openModal() {
        console.log(1);
        this.openEvent.next();
    }
}
SupportCompanyGroupComponent.ɵfac = function SupportCompanyGroupComponent_Factory(t) { return new (t || SupportCompanyGroupComponent)(); };
SupportCompanyGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SupportCompanyGroupComponent, selectors: [["app-support-company-group"]], inputs: { supportCompanies: "supportCompanies" }, outputs: { openEvent: "openEvent" }, decls: 15, vars: 1, consts: [[1, "support"], [1, "support__myself"], ["src", "assets/logo_channel.png", "alt", "", 1, "logo"], [1, "title"], [1, "button", 3, "click"], ["src", "assets/play.svg", "alt", ""], ["src", "assets/snow_flake.png", "alt", "", 1, "snow-flake"], [1, "support__persons", "support__persons_left"], [3, "company", 4, "ngFor", "ngForOf"], [3, "company"]], template: function SupportCompanyGroupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u044D\u0442\u0438 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044E\u0442 \u0431\u0435\u043B\u043E\u0440\u0443\u0441\u0441\u043A\u0443\u044E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " \u043C\u0443\u0437\u044B\u043A\u0443");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SupportCompanyGroupComponent_Template_div_click_9_listener() { return ctx.openModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u0445\u043E\u0447\u0443 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0430\u0442\u044C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SupportCompanyGroupComponent_app_support_company_14_Template, 1, 1, "app-support-company", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.supportCompanies);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _support_company_support_company_component__WEBPACK_IMPORTED_MODULE_2__["SupportCompanyComponent"]], styles: ["@font-face {\n  font-family: \"Code Pro LC\";\n  src: url('Code_Pro_LC.ttf');\n}\n@font-face {\n  font-family: \"Code Pro Bold\";\n  src: url('Code_Pro_Bold.ttf');\n}\n@font-face {\n  font-family: \"Code Pro Bold LC\";\n  src: url('Code_Pro_Bold_LC.ttf');\n}\n@font-face {\n  font-family: \"Code Pro LC\";\n  src: url('Code_Pro_LC.ttf');\n}\n@font-face {\n  font-family: \"Code Pro Light\";\n  src: url('Code_Pro_Light.ttf');\n}\n@font-face {\n  font-family: \"Code Pro Light LC\";\n  src: url('Code_Pro_Light_LC.ttf');\n}\n@font-face {\n  font-family: \"Code Pro\";\n  src: url('Code_Pro.ttf');\n}\n.support[_ngcontent-%COMP%] {\n  width: 1430px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  padding: 120px 0 0 0;\n  box-sizing: border-box;\n}\n.support__persons[_ngcontent-%COMP%] {\n  width: 60%;\n  flex-shrink: 0;\n  position: relative;\n}\n.support__persons_left[_ngcontent-%COMP%]   .snow-flake[_ngcontent-%COMP%] {\n  left: -200px;\n  top: calc(50% - 200px);\n}\n.support__myself[_ngcontent-%COMP%] {\n  padding-left: 130px;\n  box-sizing: border-box;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: column;\n  position: relative;\n  z-index: 1;\n}\n.support__myself[_ngcontent-%COMP%]   .snow-flake[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -200px;\n  top: calc(50% - 200px);\n  z-index: 0;\n}\n.support__myself[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  margin-bottom: 45px;\n}\n@media screen and (max-width: 1430px) {\n  .support[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media screen and (max-width: 1010px) {\n  .support[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n  }\n  .support__myself[_ngcontent-%COMP%] {\n    padding-left: 40px;\n    margin-bottom: 30px;\n  }\n  .support[_ngcontent-%COMP%]   .snow-flake[_ngcontent-%COMP%] {\n    left: 30%;\n    width: 60%;\n  }\n  .support__persons[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media screen and (max-width: 545px) {\n  .support__myself[_ngcontent-%COMP%] {\n    align-items: center;\n    padding-left: 5px;\n  }\n  .support__myself[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .support__myself[_ngcontent-%COMP%]   .snow-flake[_ngcontent-%COMP%] {\n    width: 60%;\n    left: 20%;\n    top: 20%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3N1cHBvcnQtY29tcGFueS1ncm91cC9zdXBwb3J0LWNvbXBhbnktZ3JvdXAuY29tcG9uZW50LnNjc3MiLCJzcmMvdGhlbWUvbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBQTtFQUNBLDJCQUFBO0FDQ0Y7QURFQTtFQUNFLDRCQUFBO0VBQ0EsNkJBQUE7QUNBRjtBREdBO0VBQ0UsK0JBQUE7RUFDQSxnQ0FBQTtBQ0RGO0FESUE7RUFDRSwwQkFBQTtFQUNBLDJCQUFBO0FDRkY7QURLQTtFQUNFLDZCQUFBO0VBQ0EsOEJBQUE7QUNIRjtBRE1BO0VBQ0UsZ0NBQUE7RUFDQSxpQ0FBQTtBQ0pGO0FET0E7RUFDRSx1QkFBQTtFQUNBLHdCQUFBO0FDTEY7QUF2QkE7RUFDRSxhQUFBO0VDSEEsYUFBQTtFQUNBLG1CQUZ1QztFQUd2Qyx1QkFIdUI7RUFJdkIsbUJBSjJEO0VETTNELG9CQUFBO0VBQ0Esc0JBQUE7QUE0QkY7QUExQkU7RUFDRSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBNEJKO0FBekJNO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0FBMkJSO0FBdEJFO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtFQ3ZCRixhQUFBO0VBQ0EsdUJEdUIyQjtFQ3RCM0IsdUJBSHVCO0VBSXZCLHNCRHFCbUQ7RUFDakQsa0JBQUE7RUFDQSxVQUFBO0FBMkJKO0FBekJJO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0FBMkJOO0FBeEJJO0VBQ0UsbUJBQUE7QUEwQk47QUFwQkE7RUFDRTtJQUNFLFdBQUE7RUF1QkY7QUFDRjtBQXBCQTtFQUNFO0lDakRBLGFBQUE7SUFDQSxtQkFGdUM7SUFHdkMsdUJBSHVCO0lBSXZCLHNCRCtDK0I7RUF5Qi9CO0VBeEJFO0lBQ0Usa0JBQUE7SUFDQSxtQkFBQTtFQTBCSjtFQXZCRTtJQUNFLFNBQUE7SUFDQSxVQUFBO0VBeUJKO0VBdEJFO0lBQ0UsV0FBQTtFQXdCSjtBQUNGO0FBcEJBO0VBRUk7SUFDRSxtQkFBQTtJQUNBLGlCQUFBO0VBcUJKO0VBbkJJO0lBQ0Usa0JBQUE7RUFxQk47RUFsQkk7SUFDRSxVQUFBO0lBQ0EsU0FBQTtJQUNBLFFBQUE7RUFvQk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3VwcG9ydC1jb21wYW55LWdyb3VwL3N1cHBvcnQtY29tcGFueS1ncm91cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0NvZGUgUHJvIExDJztcbiAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9Db2RlX1Byb19MQy50dGYnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnQ29kZSBQcm8gQm9sZCc7XG4gIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvQ29kZV9Qcm9fQm9sZC50dGYnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnQ29kZSBQcm8gQm9sZCBMQyc7XG4gIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvQ29kZV9Qcm9fQm9sZF9MQy50dGYnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnQ29kZSBQcm8gTEMnO1xuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0NvZGVfUHJvX0xDLnR0ZicpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdDb2RlIFBybyBMaWdodCc7XG4gIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvQ29kZV9Qcm9fTGlnaHQudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0NvZGUgUHJvIExpZ2h0IExDJztcbiAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9Db2RlX1Byb19MaWdodF9MQy50dGYnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnQ29kZSBQcm8nO1xuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0NvZGVfUHJvLnR0ZicpO1xufVxuIiwiQGltcG9ydCAnLi4vLi4vLi4vdGhlbWUvbWl4aW5zLnNjc3MnO1xuQGltcG9ydCAnLi4vLi4vLi4vdGhlbWUvY29sb3JzLnNjc3MnO1xuQGltcG9ydCAnLi4vLi4vLi4vdGhlbWUvZm9udHMuc2Nzcyc7XG5cbi5zdXBwb3J0IHtcbiAgd2lkdGg6IDE0MzBweDtcbiAgQGluY2x1ZGUgZmxleE1peDtcbiAgcGFkZGluZzogMTIwcHggMCAwIDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgJl9fcGVyc29ucyB7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAmX2xlZnQge1xuICAgICAgLnNub3ctZmxha2Uge1xuICAgICAgICBsZWZ0OiAtMjAwcHg7XG4gICAgICAgIHRvcDogY2FsYyg1MCUgLSAyMDBweCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJl9fbXlzZWxmIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEzMHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgQGluY2x1ZGUgZmxleE1peCgkYWxpZ246IGZsZXgtc3RhcnQsICRkaXJlY3Rpb246IGNvbHVtbik7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDE7XG5cbiAgICAuc25vdy1mbGFrZSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogLTIwMHB4O1xuICAgICAgdG9wOiBjYWxjKDUwJSAtIDIwMHB4KTtcbiAgICAgIHotaW5kZXg6IDA7XG4gICAgfVxuXG4gICAgLmxvZ28ge1xuICAgICAgbWFyZ2luLWJvdHRvbTogNDVweDtcbiAgICB9XG4gIH1cbn1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDMwcHgpIHtcbiAgLnN1cHBvcnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMTBweCkge1xuICAuc3VwcG9ydCB7XG4gICAgQGluY2x1ZGUgZmxleE1peCgkZGlyZWN0aW9uOiBjb2x1bW4pO1xuICAgICZfX215c2VsZiB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIH1cblxuICAgIC5zbm93LWZsYWtlIHtcbiAgICAgIGxlZnQ6IDMwJTtcbiAgICAgIHdpZHRoOiA2MCU7XG4gICAgfVxuXG4gICAgJl9fcGVyc29ucyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTQ1cHgpIHtcbiAgLnN1cHBvcnQge1xuICAgICZfX215c2VsZiB7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG5cbiAgICAgIC50aXRsZSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLnNub3ctZmxha2Uge1xuICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICBsZWZ0OiAyMCU7XG4gICAgICAgIHRvcDogMjAlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiXG5AbWl4aW4gZmxleE1peCgkanVzdGlmeTogY2VudGVyLCAkYWxpZ246IGNlbnRlciwgJGRpcmVjdGlvbjogcm93KSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiAkYWxpZ247XG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XG4gIGZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xufVxuXG5AbWl4aW4gZm9udFN0eWxlKCRzaXplOiAxOHB4LCAkY29sb3I6ICRtYWluLWZvbnQpIHtcbiAgZm9udC1zaXplOiAkc2l6ZTtcbiAgY29sb3I6ICRjb2xvcjtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SupportCompanyGroupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-support-company-group',
                templateUrl: './support-company-group.component.html',
                styleUrls: ['./support-company-group.component.scss']
            }]
    }], function () { return []; }, { supportCompanies: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], openEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "k/ia":
/*!***********************************************!*\
  !*** ./src/app/contsants/header.constants.ts ***!
  \***********************************************/
/*! exports provided: HEADER_ITEMS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HEADER_ITEMS", function() { return HEADER_ITEMS; });
const HEADER_ITEMS = [
    {
        id: 9,
        name: 'SLUHAY BY',
        tag: 'sluhay'
    },
    {
        id: 0,
        name: 'Концерты и трансляции  LIVE',
        tag: 'live'
    },
    {
        id: 1,
        name: 'rock',
        tag: 'rock'
    },
    {
        id: 2,
        name: 'pop',
        tag: 'pop'
    },
    {
        id: 3,
        name: 'edm',
        tag: 'edm'
    },
    {
        id: 4,
        name: 'rap',
        tag: 'rap'
    },
    {
        id: 5,
        name: 'музыканты',
        tag: 'musicions'
    },
    {
        id: 6,
        name: 'поддержка проекта',
        tag: 'donates'
    },
    {
        id: 7,
        name: 'подписка',
        tag: 'subscriptions'
    },
    {
        id: 8,
        name: 'компании',
        tag: 'companies'
    }
];


/***/ }),

/***/ "nogf":
/*!*************************************************************!*\
  !*** ./src/app/components/band-logo/band-logo.component.ts ***!
  \*************************************************************/
/*! exports provided: BandLogoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BandLogoComponent", function() { return BandLogoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class BandLogoComponent {
    constructor() { }
    ngOnInit() {
    }
}
BandLogoComponent.ɵfac = function BandLogoComponent_Factory(t) { return new (t || BandLogoComponent)(); };
BandLogoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BandLogoComponent, selectors: [["app-band-logo"]], inputs: { data: "data" }, decls: 2, vars: 1, consts: [[1, "logo"], ["alt", "", 1, "logo__image", 3, "src"]], template: function BandLogoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("src", "assets/logo_", ctx.data, ".png", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
    } }, styles: ["@font-face {\n  font-family: \"Code Pro LC\";\n  src: url('Code_Pro_LC.ttf');\n}\n@font-face {\n  font-family: \"Code Pro Bold\";\n  src: url('Code_Pro_Bold.ttf');\n}\n@font-face {\n  font-family: \"Code Pro Bold LC\";\n  src: url('Code_Pro_Bold_LC.ttf');\n}\n@font-face {\n  font-family: \"Code Pro LC\";\n  src: url('Code_Pro_LC.ttf');\n}\n@font-face {\n  font-family: \"Code Pro Light\";\n  src: url('Code_Pro_Light.ttf');\n}\n@font-face {\n  font-family: \"Code Pro Light LC\";\n  src: url('Code_Pro_Light_LC.ttf');\n}\n@font-face {\n  font-family: \"Code Pro\";\n  src: url('Code_Pro.ttf');\n}\n.logo[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  position: relative;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: row;\n}\n.logo__image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.logo__text[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-family: \"Code Pro Bold\";\n  font-size: 35px;\n  color: white;\n  margin-top: 14px;\n  position: relative;\n  z-index: 1;\n  filter: blur(0.5px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2JhbmQtbG9nby9iYW5kLWxvZ28uY29tcG9uZW50LnNjc3MiLCJzcmMvdGhlbWUvbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBQTtFQUNBLDJCQUFBO0FDQ0Y7QURFQTtFQUNFLDRCQUFBO0VBQ0EsNkJBQUE7QUNBRjtBREdBO0VBQ0UsK0JBQUE7RUFDQSxnQ0FBQTtBQ0RGO0FESUE7RUFDRSwwQkFBQTtFQUNBLDJCQUFBO0FDRkY7QURLQTtFQUNFLDZCQUFBO0VBQ0EsOEJBQUE7QUNIRjtBRE1BO0VBQ0UsZ0NBQUE7RUFDQSxpQ0FBQTtBQ0pGO0FET0E7RUFDRSx1QkFBQTtFQUNBLHdCQUFBO0FDTEY7QUF4QkE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VDSkEsYUFBQTtFQUNBLHVCREl5QjtFQ0h6Qix1QkFIdUI7RUFJdkIsbUJBSjJEO0FEbUM3RDtBQTNCRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtBQTZCSjtBQTFCRTtFQUNFLHlCQUFBO0VBQ0EsNEJBQUE7RUNWRixlRFdxQjtFQ1ZyQixZRFUyQjtFQUN6QixnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FBNkJKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9iYW5kLWxvZ28vYmFuZC1sb2dvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnQ29kZSBQcm8gTEMnO1xuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0NvZGVfUHJvX0xDLnR0ZicpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdDb2RlIFBybyBCb2xkJztcbiAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9Db2RlX1Byb19Cb2xkLnR0ZicpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdDb2RlIFBybyBCb2xkIExDJztcbiAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9Db2RlX1Byb19Cb2xkX0xDLnR0ZicpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdDb2RlIFBybyBMQyc7XG4gIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvQ29kZV9Qcm9fTEMudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0NvZGUgUHJvIExpZ2h0JztcbiAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9Db2RlX1Byb19MaWdodC50dGYnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnQ29kZSBQcm8gTGlnaHQgTEMnO1xuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0NvZGVfUHJvX0xpZ2h0X0xDLnR0ZicpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdDb2RlIFBybyc7XG4gIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvQ29kZV9Qcm8udHRmJyk7XG59XG4iLCJAaW1wb3J0ICcuLi8uLi8uLi90aGVtZS9taXhpbnMuc2Nzcyc7XG5AaW1wb3J0ICcuLi8uLi8uLi90aGVtZS9mb250cy5zY3NzJztcblxuLmxvZ28ge1xuICB3aWR0aDogMTAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgQGluY2x1ZGUgZmxleE1peCgkYWxpZ246IGZsZXgtc3RhcnQpO1xuXG4gICZfX2ltYWdlIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICB9XG5cbiAgJl9fdGV4dCB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBmb250LWZhbWlseTogXCJDb2RlIFBybyBCb2xkXCI7XG4gICAgQGluY2x1ZGUgZm9udFN0eWxlKDM1cHgsIHdoaXRlKTtcbiAgICBtYXJnaW4tdG9wOiAxNHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxO1xuICAgIGZpbHRlcjogYmx1cigwLjVweCk7XG4gIH1cbn1cbiIsIlxuQG1peGluIGZsZXhNaXgoJGp1c3RpZnk6IGNlbnRlciwgJGFsaWduOiBjZW50ZXIsICRkaXJlY3Rpb246IHJvdykge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogJGFsaWduO1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcbn1cblxuQG1peGluIGZvbnRTdHlsZSgkc2l6ZTogMThweCwgJGNvbG9yOiAkbWFpbi1mb250KSB7XG4gIGZvbnQtc2l6ZTogJHNpemU7XG4gIGNvbG9yOiAkY29sb3I7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BandLogoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-band-logo',
                templateUrl: './band-logo.component.html',
                styleUrls: ['./band-logo.component.scss']
            }]
    }], function () { return []; }, { data: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "oJph":
/*!*************************************************************!*\
  !*** ./src/app/components/band-item/band-item.component.ts ***!
  \*************************************************************/
/*! exports provided: BandItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BandItemComponent", function() { return BandItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class BandItemComponent {
    constructor() { }
    ngOnInit() {
    }
}
BandItemComponent.ɵfac = function BandItemComponent_Factory(t) { return new (t || BandItemComponent)(); };
BandItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BandItemComponent, selectors: [["app-band-item"]], inputs: { band: "band" }, decls: 10, vars: 4, consts: [[1, "band"], [1, "band__poster"], [1, "band__poster-layout"], ["src", "assets/play.svg", "alt", ""], [1, "band__poster-layout-text"], [1, "band__name"], [1, "band__genre"]], template: function BandItemComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u043F\u043E\u0434\u0440\u043E\u0431\u043D\u0435\u0435");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + ctx.band.cover + ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.band.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.band.genre.text);
    } }, styles: ["@font-face {\n  font-family: \"Code Pro LC\";\n  src: url('Code_Pro_LC.ttf');\n}\n@font-face {\n  font-family: \"Code Pro Bold\";\n  src: url('Code_Pro_Bold.ttf');\n}\n@font-face {\n  font-family: \"Code Pro Bold LC\";\n  src: url('Code_Pro_Bold_LC.ttf');\n}\n@font-face {\n  font-family: \"Code Pro LC\";\n  src: url('Code_Pro_LC.ttf');\n}\n@font-face {\n  font-family: \"Code Pro Light\";\n  src: url('Code_Pro_Light.ttf');\n}\n@font-face {\n  font-family: \"Code Pro Light LC\";\n  src: url('Code_Pro_Light_LC.ttf');\n}\n@font-face {\n  font-family: \"Code Pro\";\n  src: url('Code_Pro.ttf');\n}\n[_nghost-%COMP%] {\n  width: 31%;\n  margin-right: 20px;\n}\n@media screen and (max-width: 896px) {\n  [_nghost-%COMP%] {\n    width: 46%;\n  }\n}\n@media screen and (max-width: 600px) {\n  [_nghost-%COMP%] {\n    width: 100%;\n  }\n}\n.band[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 60px;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: column;\n  cursor: pointer;\n}\n.band[_ngcontent-%COMP%]:hover   .band__poster-layout[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.band__poster[_ngcontent-%COMP%] {\n  width: 100%;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  margin-bottom: 30px;\n  position: relative;\n}\n.band__poster[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: block;\n  padding-bottom: 100%;\n}\n.band__poster-layout[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  background: rgba(249, 27, 27, 0.6);\n  z-index: 1;\n  text-transform: uppercase;\n  font-size: 14px;\n  color: white;\n  font-family: \"Code Pro Light\";\n  opacity: 0;\n  transition: 0.4s;\n}\n.band__poster-layout-text[_ngcontent-%COMP%] {\n  margin-top: 17px;\n}\n.band__poster-layout[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 10%;\n  min-width: 16px;\n}\n.band__name[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #000000;\n  font-family: \"Code Pro Bold LC\";\n  margin-bottom: 20px;\n  text-transform: uppercase;\n}\n.band__genre[_ngcontent-%COMP%] {\n  font-family: \"Code Pro LC\";\n  font-size: 18px;\n  color: #f91b1b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2JhbmQtaXRlbS9iYW5kLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzcmMvdGhlbWUvbWl4aW5zLnNjc3MiLCJzcmMvdGhlbWUvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBQTtFQUNBLDJCQUFBO0FDQ0Y7QURFQTtFQUNFLDRCQUFBO0VBQ0EsNkJBQUE7QUNBRjtBREdBO0VBQ0UsK0JBQUE7RUFDQSxnQ0FBQTtBQ0RGO0FESUE7RUFDRSwwQkFBQTtFQUNBLDJCQUFBO0FDRkY7QURLQTtFQUNFLDZCQUFBO0VBQ0EsOEJBQUE7QUNIRjtBRE1BO0VBQ0UsZ0NBQUE7RUFDQSxpQ0FBQTtBQ0pGO0FET0E7RUFDRSx1QkFBQTtFQUNBLHdCQUFBO0FDTEY7QUF2QkE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7QUF5QkY7QUF2QkU7RUFKRjtJQUtJLFVBQUE7RUEwQkY7QUFDRjtBQXhCRTtFQVJGO0lBU0ksV0FBQTtFQTJCRjtBQUNGO0FBeEJBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VDakJBLGFBQUE7RUFDQSx1QkRpQnlCO0VDaEJ6Qix1QkFIdUI7RUFJdkIsc0JEZWlEO0VBQ2pELGVBQUE7QUE4QkY7QUEzQkk7RUFDRSxVQUFBO0FBNkJOO0FBekJFO0VBQ0UsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUEyQko7QUF6Qkk7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBMkJOO0FBeEJJO0VDekNGLGFBQUE7RUFDQSxtQkFGdUM7RUFHdkMsdUJBSHVCO0VBSXZCLHNCRHVDaUM7RUFDN0IsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0Esa0NBQUE7RUFDQSxVQUFBO0VBQ0EseUJBQUE7RUMzQ0osZUQ0Q3VCO0VDM0N2QixZRDJDNkI7RUFDekIsNkJBQUE7RUFDQSxVQUFBO0VBQ0EsZ0JBQUE7QUE4Qk47QUE1Qk07RUFDRSxnQkFBQTtBQThCUjtBQTNCTTtFQUNFLFVBQUE7RUFDQSxlQUFBO0FBNkJSO0FBeEJFO0VDNURBLGVENkRxQjtFQzVEckIsY0NWVTtFRnVFUiwrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUEyQko7QUF4QkU7RUFDRSwwQkFBQTtFQ3BFRixlQURzQjtFQUV0QixjQ1JZO0FGdUdkIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9iYW5kLWl0ZW0vYmFuZC1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnQ29kZSBQcm8gTEMnO1xuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0NvZGVfUHJvX0xDLnR0ZicpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdDb2RlIFBybyBCb2xkJztcbiAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9Db2RlX1Byb19Cb2xkLnR0ZicpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdDb2RlIFBybyBCb2xkIExDJztcbiAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9Db2RlX1Byb19Cb2xkX0xDLnR0ZicpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdDb2RlIFBybyBMQyc7XG4gIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvQ29kZV9Qcm9fTEMudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0NvZGUgUHJvIExpZ2h0JztcbiAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9Db2RlX1Byb19MaWdodC50dGYnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnQ29kZSBQcm8gTGlnaHQgTEMnO1xuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0NvZGVfUHJvX0xpZ2h0X0xDLnR0ZicpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdDb2RlIFBybyc7XG4gIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvQ29kZV9Qcm8udHRmJyk7XG59XG4iLCJAaW1wb3J0ICcuLi8uLi8uLi90aGVtZS9taXhpbnMuc2Nzcyc7XG5AaW1wb3J0ICcuLi8uLi8uLi90aGVtZS9jb2xvcnMuc2Nzcyc7XG5AaW1wb3J0ICcuLi8uLi8uLi90aGVtZS9mb250cy5zY3NzJztcblxuOmhvc3Qge1xuICB3aWR0aDogMzElO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODk2cHgpIHtcbiAgICB3aWR0aDogNDYlO1xuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG4uYmFuZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xuICBAaW5jbHVkZSBmbGV4TWl4KCRhbGlnbjogZmxleC1zdGFydCwgJGRpcmVjdGlvbjogY29sdW1uKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICY6aG92ZXIge1xuICAgIC5iYW5kX19wb3N0ZXItbGF5b3V0IHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG5cbiAgJl9fcG9zdGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMDAlO1xuICAgIH1cblxuICAgICYtbGF5b3V0IHtcbiAgICAgIEBpbmNsdWRlIGZsZXhNaXgoJGRpcmVjdGlvbjogY29sdW1uKTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHRvcDogMDtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yOiAkYWN0aXZlLWZvbnQsICRhbHBoYTogLjYpO1xuICAgICAgei1pbmRleDogMTtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBAaW5jbHVkZSBmb250U3R5bGUoMTRweCwgd2hpdGUpO1xuICAgICAgZm9udC1mYW1pbHk6ICdDb2RlIFBybyBMaWdodCc7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNpdGlvbjogLjRzO1xuXG4gICAgICAmLXRleHQge1xuICAgICAgICBtYXJnaW4tdG9wOiAxN3B4O1xuICAgICAgfVxuXG4gICAgICBpbWcge1xuICAgICAgICB3aWR0aDogMTAlO1xuICAgICAgICBtaW4td2lkdGg6IDE2cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJl9fbmFtZSB7XG4gICAgQGluY2x1ZGUgZm9udFN0eWxlKDIwcHgpO1xuICAgIGZvbnQtZmFtaWx5OiAnQ29kZSBQcm8gQm9sZCBMQyc7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG5cbiAgJl9fZ2VucmUge1xuICAgIGZvbnQtZmFtaWx5OiAnQ29kZSBQcm8gTEMnO1xuICAgIEBpbmNsdWRlIGZvbnRTdHlsZSgkY29sb3I6ICRhY3RpdmUtZm9udCk7XG4gIH1cblxufVxuIiwiXG5AbWl4aW4gZmxleE1peCgkanVzdGlmeTogY2VudGVyLCAkYWxpZ246IGNlbnRlciwgJGRpcmVjdGlvbjogcm93KSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiAkYWxpZ247XG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XG4gIGZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xufVxuXG5AbWl4aW4gZm9udFN0eWxlKCRzaXplOiAxOHB4LCAkY29sb3I6ICRtYWluLWZvbnQpIHtcbiAgZm9udC1zaXplOiAkc2l6ZTtcbiAgY29sb3I6ICRjb2xvcjtcbn1cbiIsIiRtYWluLWZvbnQ6ICMwMDAwMDA7XG4kbXV0ZWQtZm9udDogIzQ4NDg0OTtcbiRhY3RpdmUtZm9udDogI2Y5MWIxYjtcbiRvZGQtYmFja2dyb3VuZDogI2YwZjBmMDtcbiRkYXJrLWNvbG9yOiAjMjgyZTM1O1xuJG1lZGl1bS1jb2xvcjogIzJlMzQzYTtcbiRsaWdodC1jb2xvcjogI2YwZjBmMDtcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BandItemComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-band-item',
                templateUrl: './band-item.component.html',
                styleUrls: ['./band-item.component.scss']
            }]
    }], function () { return []; }, { band: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "ohcA":
/*!*********************************************************************!*\
  !*** ./src/app/components/spasibo-popup/spasibo-popup.component.ts ***!
  \*********************************************************************/
/*! exports provided: SpasiboPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpasiboPopupComponent", function() { return SpasiboPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SpasiboPopupComponent {
    constructor() {
        this.closeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    closeModal() {
        this.closeEvent.next();
    }
    stopProp(event) {
        event.stopPropagation();
    }
}
SpasiboPopupComponent.ɵfac = function SpasiboPopupComponent_Factory(t) { return new (t || SpasiboPopupComponent)(); };
SpasiboPopupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SpasiboPopupComponent, selectors: [["app-spasibo-popup"]], outputs: { closeEvent: "closeEvent" }, decls: 18, vars: 0, consts: [[1, "wrapper", 3, "click"], [1, "popup", 3, "click"], [1, "close", 3, "click"], [1, "title"], [1, "subtitle"], [1, "contact"], [1, "button", "button_dark", 3, "click"]], template: function SpasiboPopupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SpasiboPopupComponent_Template_div_click_0_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SpasiboPopupComponent_Template_div_click_1_listener($event) { return ctx.stopProp($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SpasiboPopupComponent_Template_div_click_2_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u2715");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u041E\u0433\u0440\u043E\u043C\u043D\u043E\u0435 \u0441\u043F\u0430\u0441\u0438\u0431\u043E \u0437\u0430 \u0432\u0430\u0448\u0435 \u0436\u0435\u043B\u0430\u043D\u0438\u0435 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0430\u0442\u044C \u0431\u0435\u043B\u043E\u0440\u0443\u0441\u0441\u043A\u0443\u044E \u043C\u0443\u0437\u044B\u043A\u0443!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u0421\u0432\u044F\u0436\u0438\u0442\u0435\u0441\u044C \u043F\u043E\u0436\u0430\u043B\u0443\u0439\u0441\u0442\u0430 \u0441 \u043D\u0430\u043C\u0438 \u0432 \u0443\u0434\u043E\u0431\u043D\u043E\u0435 \u0434\u043B\u044F \u0432\u0430\u0441 \u0432\u0440\u0435\u043C\u044F:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0422\u0435\u043B\u0435\u0444\u043E\u043D");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "+375 44 760-94-84");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "E-mail");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "sluhay.by@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SpasiboPopupComponent_Template_div_click_16_listener() { return ctx.closeModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "\u0417\u0430\u043A\u0440\u044B\u0442\u044C");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@font-face {\n  font-family: \"Code Pro LC\";\n  src: url('Code_Pro_LC.ttf');\n}\n@font-face {\n  font-family: \"Code Pro Bold\";\n  src: url('Code_Pro_Bold.ttf');\n}\n@font-face {\n  font-family: \"Code Pro Bold LC\";\n  src: url('Code_Pro_Bold_LC.ttf');\n}\n@font-face {\n  font-family: \"Code Pro LC\";\n  src: url('Code_Pro_LC.ttf');\n}\n@font-face {\n  font-family: \"Code Pro Light\";\n  src: url('Code_Pro_Light.ttf');\n}\n@font-face {\n  font-family: \"Code Pro Light LC\";\n  src: url('Code_Pro_Light_LC.ttf');\n}\n@font-face {\n  font-family: \"Code Pro\";\n  src: url('Code_Pro.ttf');\n}\n.wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: fixed;\n  left: 0;\n  top: 0;\n  background-color: rgba(0, 0, 0, 0.8);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  z-index: 100;\n}\n.wrapper[_ngcontent-%COMP%]   .popup[_ngcontent-%COMP%] {\n  padding: 30px;\n  background: #f91b1b;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  position: relative;\n  color: white;\n  box-sizing: border-box;\n  width: 50%;\n  max-width: 600px;\n  min-width: 320px;\n  text-align: center;\n}\n.wrapper[_ngcontent-%COMP%]   .popup[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -30px;\n  top: -30px;\n  cursor: pointer;\n  color: white;\n  z-index: 10;\n  font-size: 30px;\n}\n.wrapper[_ngcontent-%COMP%]   .popup[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  font-family: \"Code Pro Light\";\n}\n.wrapper[_ngcontent-%COMP%]   .popup[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  margin-top: 30px;\n}\n.wrapper[_ngcontent-%COMP%]   .popup[_ngcontent-%COMP%]   .contact[_ngcontent-%COMP%] {\n  font-family: \"Code Pro Bold\";\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3NwYXNpYm8tcG9wdXAvc3Bhc2liby1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNyYy90aGVtZS9taXhpbnMuc2NzcyIsInNyYy90aGVtZS9jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUFBO0VBQ0EsMkJBQUE7QUNDRjtBREVBO0VBQ0UsNEJBQUE7RUFDQSw2QkFBQTtBQ0FGO0FER0E7RUFDRSwrQkFBQTtFQUNBLGdDQUFBO0FDREY7QURJQTtFQUNFLDBCQUFBO0VBQ0EsMkJBQUE7QUNGRjtBREtBO0VBQ0UsNkJBQUE7RUFDQSw4QkFBQTtBQ0hGO0FETUE7RUFDRSxnQ0FBQTtFQUNBLGlDQUFBO0FDSkY7QURPQTtFQUNFLHVCQUFBO0VBQ0Esd0JBQUE7QUNMRjtBQXZCQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0Esb0NBQUE7RUNSQSxhQUFBO0VBQ0EsbUJBRnVDO0VBR3ZDLHVCQUh1QjtFQUl2QixtQkFKMkQ7RURXM0QsWUFBQTtBQTRCRjtBQTFCRTtFQUNFLGFBQUE7RUFDQSxtQkVkVTtFREFaLGFBQUE7RUFDQSxtQkFGdUM7RUFHdkMsdUJBSHVCO0VBSXZCLHNCRFkrQjtFQUM3QixrQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esa0JBQUE7QUErQko7QUE3Qkk7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxVQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7RUFDQSxXQUFBO0VBQ0EsZUFBQTtBQStCTjtBQTVCSTtFQUNFLDZCQUFBO0FBOEJOO0FBM0JJO0VBQ0UsZ0JBQUE7QUE2Qk47QUExQkk7RUFDRSw0QkFBQTtFQUNBLGVBQUE7QUE0Qk4iLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NwYXNpYm8tcG9wdXAvc3Bhc2liby1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0NvZGUgUHJvIExDJztcbiAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9Db2RlX1Byb19MQy50dGYnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnQ29kZSBQcm8gQm9sZCc7XG4gIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvQ29kZV9Qcm9fQm9sZC50dGYnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnQ29kZSBQcm8gQm9sZCBMQyc7XG4gIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvQ29kZV9Qcm9fQm9sZF9MQy50dGYnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnQ29kZSBQcm8gTEMnO1xuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0NvZGVfUHJvX0xDLnR0ZicpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdDb2RlIFBybyBMaWdodCc7XG4gIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvQ29kZV9Qcm9fTGlnaHQudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0NvZGUgUHJvIExpZ2h0IExDJztcbiAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9Db2RlX1Byb19MaWdodF9MQy50dGYnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnQ29kZSBQcm8nO1xuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0NvZGVfUHJvLnR0ZicpO1xufVxuIiwiQGltcG9ydCAnLi4vLi4vLi4vdGhlbWUvY29sb3JzLnNjc3MnO1xuQGltcG9ydCAnLi4vLi4vLi4vdGhlbWUvbWl4aW5zLnNjc3MnO1xuQGltcG9ydCAnLi4vLi4vLi4vdGhlbWUvZm9udHMuc2Nzcyc7XG5cbi53cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiBibGFjaywgJGFscGhhOiAuOCk7XG4gIEBpbmNsdWRlIGZsZXhNaXg7XG4gIHotaW5kZXg6IDEwMDtcblxuICAucG9wdXAge1xuICAgIHBhZGRpbmc6IDMwcHg7XG4gICAgYmFja2dyb3VuZDogJGFjdGl2ZS1mb250O1xuICAgIEBpbmNsdWRlIGZsZXhNaXgoJGRpcmVjdGlvbjogY29sdW1uKTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgd2lkdGg6IDUwJTtcbiAgICBtYXgtd2lkdGg6IDYwMHB4O1xuICAgIG1pbi13aWR0aDogMzIwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgLmNsb3NlIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIHJpZ2h0OiAtMzBweDtcbiAgICAgIHRvcDogLTMwcHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICB6LWluZGV4OiAxMDtcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICB9XG5cbiAgICAudGl0bGUge1xuICAgICAgZm9udC1mYW1pbHk6ICdDb2RlIFBybyBMaWdodCc7XG4gICAgfVxuXG4gICAgLnN1YnRpdGxlIHtcbiAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgfVxuXG4gICAgLmNvbnRhY3Qge1xuICAgICAgZm9udC1mYW1pbHk6ICdDb2RlIFBybyBCb2xkJztcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICB9XG4gIH1cbn1cbiIsIlxuQG1peGluIGZsZXhNaXgoJGp1c3RpZnk6IGNlbnRlciwgJGFsaWduOiBjZW50ZXIsICRkaXJlY3Rpb246IHJvdykge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogJGFsaWduO1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcbn1cblxuQG1peGluIGZvbnRTdHlsZSgkc2l6ZTogMThweCwgJGNvbG9yOiAkbWFpbi1mb250KSB7XG4gIGZvbnQtc2l6ZTogJHNpemU7XG4gIGNvbG9yOiAkY29sb3I7XG59XG4iLCIkbWFpbi1mb250OiAjMDAwMDAwO1xuJG11dGVkLWZvbnQ6ICM0ODQ4NDk7XG4kYWN0aXZlLWZvbnQ6ICNmOTFiMWI7XG4kb2RkLWJhY2tncm91bmQ6ICNmMGYwZjA7XG4kZGFyay1jb2xvcjogIzI4MmUzNTtcbiRtZWRpdW0tY29sb3I6ICMyZTM0M2E7XG4kbGlnaHQtY29sb3I6ICNmMGYwZjA7XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SpasiboPopupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-spasibo-popup',
                templateUrl: './spasibo-popup.component.html',
                styleUrls: ['./spasibo-popup.component.scss']
            }]
    }], null, { closeEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "pdOj":
/*!*********************************************************************!*\
  !*** ./src/app/components/banner-player/banner-player.component.ts ***!
  \*********************************************************************/
/*! exports provided: BannerPlayerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerPlayerComponent", function() { return BannerPlayerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var src_app_services_player_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/player.service */ "QIP1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "tyNb");





const _c0 = ["player"];
function BannerPlayerComponent_div_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " sluhay");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, ".by");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u043A\u0430\u043D\u0430\u043B ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u0431\u0435\u043B\u043E\u0440\u0443\u0441\u0441\u043A\u043E\u0439 \u043C\u0443\u0437\u044B\u043A\u0438 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u043D\u0430\u0447\u043D\u0438 \u0441\u043B\u0443\u0448\u0430\u0442\u044C \u0431\u0435\u043B\u043E\u0440\u0443\u0441\u0441\u043A\u043E\u0435 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BannerPlayerComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BannerPlayerComponent_ng_template_4_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.togglePlay(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BannerPlayerComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BannerPlayerComponent_ng_template_6_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.togglePlay(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class BannerPlayerComponent {
    constructor(playerService) {
        this.playerService = playerService;
        this.isPlay = true;
    }
    ngOnInit() {
        this.player = this.playerRef.nativeElement;
        this.playerService.playUrl(this.url, this.player, this.autoplay);
    }
    toggleFullscreen() {
        this.isFullscreen = !this.isFullscreen;
        this.player.muted = !this.player.muted;
    }
    openFullscreen() {
        this.isFullscreen = true;
        this.player.muted = false;
    }
    closeFullscreen() {
        this.isFullscreen = false;
        this.player.muted = true;
    }
    togglePlay() {
        this.isPlay = !this.isPlay;
        if (this.isPlay) {
            this.player.play();
        }
        else {
            this.player.pause();
        }
    }
    onVolumeChange(value) {
        this.player.volume = value / 100;
    }
}
BannerPlayerComponent.ɵfac = function BannerPlayerComponent_Factory(t) { return new (t || BannerPlayerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_player_service__WEBPACK_IMPORTED_MODULE_1__["PlayerService"])); };
BannerPlayerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BannerPlayerComponent, selectors: [["app-banner-player"]], viewQuery: function BannerPlayerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.playerRef = _t.first);
    } }, inputs: { url: "url", autoplay: "autoplay", controls: "controls", isFullscreen: "isFullscreen" }, decls: 8, vars: 3, consts: [[1, "wrapper"], ["playsinline", "", 1, "player"], ["player", ""], ["class", "banner-content", 4, "ngIf"], ["play", ""], ["pause", ""], [1, "banner-content"], ["src", "assets/logo_main_big.png", "alt", ""], [1, "banner-content__name"], [1, "banner-content__name", "banner-content__name_active"], [1, "banner-content__big-title"], ["routerLink", "/", "fragment", "channel", 1, "banner-content__letstart"], ["src", "assets/arrow_down.png", "alt", ""], ["src", "assets/play.svg", "alt", "", 3, "click"], ["src", "assets/pause.svg", "alt", "", 3, "click"]], template: function BannerPlayerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "video", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BannerPlayerComponent_div_3_Template, 14, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BannerPlayerComponent_ng_template_4_Template, 1, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BannerPlayerComponent_ng_template_6_Template, 1, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("wrapper_fullscreen", ctx.isFullscreen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isFullscreen);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  z-index: 2;\n}\n.wrapper_fullscreen[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1000;\n  left: 0;\n  top: 0;\n  height: 100vh;\n  background-color: black;\n  object-fit: contain;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n}\n.wrapper[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  padding-top: 130px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  flex-direction: column;\n  z-index: 3;\n}\n.wrapper[_ngcontent-%COMP%]   .banner-content__name[_ngcontent-%COMP%] {\n  margin-top: 100px;\n  text-transform: uppercase;\n  font-family: \"Code Pro\";\n  font-size: 36px;\n  color: white;\n}\n.wrapper[_ngcontent-%COMP%]   .banner-content__name_active[_ngcontent-%COMP%] {\n  color: #f91b1b;\n}\n.wrapper[_ngcontent-%COMP%]   .banner-content__big-title[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 35px;\n  font-family: \"Code Pro Light\";\n  color: white;\n  opacity: 0.5;\n  text-align: center;\n  margin-top: 40px;\n}\n.wrapper[_ngcontent-%COMP%]   .banner-content__letstart[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-family: \"Code Pro Light\";\n  position: absolute;\n  bottom: 100px;\n  color: white;\n  text-transform: uppercase;\n  text-align: center;\n  outline: none;\n  cursor: pointer;\n}\n.wrapper[_ngcontent-%COMP%]   .banner-content__letstart[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  width: 22px;\n}\n.wrapper[_ngcontent-%COMP%]   .play-btn[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background-color: rgba(249, 27, 27, 0.7);\n  box-shadow: 0 0 0 20px rgba(249, 27, 27, 0.2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  position: absolute;\n  bottom: 30%;\n  left: calc(50% - 40px);\n  z-index: 5;\n}\n.wrapper[_ngcontent-%COMP%]   .play-btn[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  border: 1px solid white;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  left: 15px;\n  top: 15px;\n  box-sizing: border-box;\n}\n.wrapper[_ngcontent-%COMP%]   .play-btn__image[_ngcontent-%COMP%] {\n  width: 25%;\n  margin-left: 4px;\n}\n.wrapper[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: row;\n  padding: 0 25px;\n  position: absolute;\n  z-index: 10;\n  left: 0;\n  bottom: 0;\n  box-sizing: border-box;\n  background: linear-gradient(to top, black, transparent);\n}\n.wrapper[_ngcontent-%COMP%]   .controls__group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n}\n.wrapper[_ngcontent-%COMP%]   .controls__group[_ngcontent-%COMP%]   .onair[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  text-transform: uppercase;\n  position: relative;\n  color: white;\n}\n.wrapper[_ngcontent-%COMP%]   .controls__group[_ngcontent-%COMP%]   .onair[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 5px;\n  height: 5px;\n  background-color: #f91b1b;\n  border-radius: 50%;\n  position: absolute;\n  left: -8px;\n  top: 7px;\n}\n.wrapper[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 20px;\n  cursor: pointer;\n  margin-right: 20px;\n}\n.wrapper[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n}\n@media screen and (max-width: 1300px) {\n  .wrapper[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%] {\n    padding-top: 50px;\n  }\n}\n@media screen and (max-width: 1120px) {\n  .wrapper[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%] {\n    padding-top: 30px;\n  }\n  .wrapper[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 15%;\n  }\n  .wrapper[_ngcontent-%COMP%]   .banner-content__big-title[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n  .wrapper[_ngcontent-%COMP%]   .banner-content__letstart[_ngcontent-%COMP%] {\n    bottom: 20px;\n  }\n}\n@media screen and (max-width: 830px) {\n  .wrapper[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%] {\n    padding-top: 30px;\n  }\n  .wrapper[_ngcontent-%COMP%]   .banner-content__name[_ngcontent-%COMP%] {\n    margin-top: 30px;\n  }\n}\n@media screen and (max-width: 680px) {\n  .wrapper[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%] {\n    padding-top: 30px;\n  }\n  .wrapper[_ngcontent-%COMP%]   .banner-content__name[_ngcontent-%COMP%] {\n    margin-top: 15px;\n    font-size: 28px;\n  }\n  .wrapper[_ngcontent-%COMP%]   .banner-content__big-title[_ngcontent-%COMP%] {\n    margin-top: 10px;\n    font-size: 18px;\n  }\n}\n@media screen and (max-width: 580px) {\n  .wrapper[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 10%;\n  }\n  .wrapper[_ngcontent-%COMP%]   .banner-content-name[_ngcontent-%COMP%] {\n    margin-top: 10px;\n  }\n  .wrapper[_ngcontent-%COMP%]   .banner-content__big-title[_ngcontent-%COMP%] {\n    font-size: 14px;\n  }\n}\n@media screen and (max-width: 390px) {\n  .wrapper[_ngcontent-%COMP%]   .banner-content__big-title[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9iYW5uZXItcGxheWVyL2Jhbm5lci1wbGF5ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvdGhlbWUvbWl4aW5zLnNjc3MiLCJzcmMvdGhlbWUvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUZGO0FBSUU7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUNkRixhQUFBO0VBQ0EsbUJBRnVDO0VBR3ZDLHVCQUh1QjtFQUl2QixtQkFKMkQ7QURpQjdEO0FBRUU7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLGtCQUFBO0VDekJGLGFBQUE7RUFDQSxtQkFGdUM7RUFHdkMsMkJEd0I2QjtFQ3ZCN0Isc0JEdUJxRDtFQUNuRCxVQUFBO0FBR0o7QUFESTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQ3pCSixlRDBCdUI7RUN6QnZCLFlEeUI2QjtBQUkvQjtBQUZNO0VBQ0UsY0VwQ007QUZ3Q2Q7QUFBSTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLDZCQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBRU47QUFDSTtFQUNFLGVBQUE7RUFDQSw2QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7QUFDTjtBQUNNO0VBQ0UsaUJBQUE7RUFDQSxXQUFBO0FBQ1I7QUFJRTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7RUFDQSw2Q0FBQTtFQzFFRixhQUFBO0VBQ0EsbUJBRnVDO0VBR3ZDLHVCQUh1QjtFQUl2QixtQkFKMkQ7RUQ2RXpELGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBQUNKO0FBQ0k7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0FBQ047QUFFSTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtBQUFOO0FBSUU7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQ3JHRixhQUFBO0VBQ0EsbUJBRnVDO0VBR3ZDLDhCRG9HNkI7RUNuRzdCLG1CQUoyRDtFRHdHekQsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLE9BQUE7RUFDQSxTQUFBO0VBQ0Esc0JBQUE7RUFDQSx1REFBQTtBQUNKO0FBQ0k7RUMvR0YsYUFBQTtFQUNBLG1CQUZ1QztFQUd2Qyx1QkFIdUI7RUFJdkIsbUJBSjJEO0FEcUg3RDtBQUZNO0VBQ0UsaUJBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUlSO0FBRlE7RUFDRSxXQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSx5QkU1SEk7RUY2SEosa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxRQUFBO0FBSVY7QUFDSTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFDTjtBQUdFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7QUFESjtBQUtBO0VBRUk7SUFDRSxpQkFBQTtFQUhKO0FBQ0Y7QUFPQTtFQUVJO0lBQ0UsaUJBQUE7RUFOSjtFQU9JO0lBQ0UsVUFBQTtFQUxOO0VBUUk7SUFDRSxlQUFBO0VBTk47RUFTSTtJQUNFLFlBQUE7RUFQTjtBQUNGO0FBWUE7RUFFSTtJQUNFLGlCQUFBO0VBWEo7RUFhSTtJQUNFLGdCQUFBO0VBWE47QUFDRjtBQWdCQTtFQUVJO0lBQ0UsaUJBQUE7RUFmSjtFQWlCSTtJQUNFLGdCQUFBO0lBQ0EsZUFBQTtFQWZOO0VBa0JJO0lBQ0UsZ0JBQUE7SUFDQSxlQUFBO0VBaEJOO0FBQ0Y7QUFxQkE7RUFHTTtJQUNFLFVBQUE7RUFyQk47RUF3Qkk7SUFDRSxnQkFBQTtFQXRCTjtFQXlCSTtJQUNFLGVBQUE7RUF2Qk47QUFDRjtBQTRCQTtFQUdNO0lBQ0UsYUFBQTtFQTVCTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9iYW5uZXItcGxheWVyL2Jhbm5lci1wbGF5ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vdGhlbWUvbWl4aW5zLnNjc3NcIjtcbkBpbXBvcnQgXCIuLi8uLi8uLi90aGVtZS9jb2xvcnMuc2Nzc1wiO1xuXG4ud3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcblxuICAmX2Z1bGxzY3JlZW4ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICBAaW5jbHVkZSBmbGV4TWl4O1xuICB9XG5cbiAgLmJhbm5lci1jb250ZW50IHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgcGFkZGluZy10b3A6IDEzMHB4O1xuICAgIEBpbmNsdWRlIGZsZXhNaXgoJGp1c3RpZnk6IGZsZXgtc3RhcnQsICRkaXJlY3Rpb246IGNvbHVtbik7XG4gICAgei1pbmRleDogMztcblxuICAgICZfX25hbWUge1xuICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgZm9udC1mYW1pbHk6IFwiQ29kZSBQcm9cIjtcbiAgICAgIEBpbmNsdWRlIGZvbnRTdHlsZSgzNnB4LCB3aGl0ZSk7XG5cbiAgICAgICZfYWN0aXZlIHtcbiAgICAgICAgY29sb3I6ICRhY3RpdmUtZm9udDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmX19iaWctdGl0bGUge1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIkNvZGUgUHJvIExpZ2h0XCI7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBvcGFjaXR5OiAwLjU7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tdG9wOiA0MHB4O1xuICAgIH1cblxuICAgICZfX2xldHN0YXJ0IHtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIkNvZGUgUHJvIExpZ2h0XCI7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICBib3R0b206IDEwMHB4O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG5cbiAgICAgIGltZyB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xuICAgICAgICB3aWR0aDogMjJweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAucGxheS1idG4ge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aWR0aDogODBweDtcbiAgICBoZWlnaHQ6IDgwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoJGNvbG9yOiAkYWN0aXZlLWZvbnQsICRhbHBoYTogMC43KTtcbiAgICBib3gtc2hhZG93OiAwIDAgMCAyMHB4IHJnYmEoJGNvbG9yOiAkYWN0aXZlLWZvbnQsICRhbHBoYTogMC4yKTtcbiAgICBAaW5jbHVkZSBmbGV4TWl4O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDMwJTtcbiAgICBsZWZ0OiBjYWxjKDUwJSAtIDQwcHgpO1xuICAgIHotaW5kZXg6IDU7XG5cbiAgICAmOjphZnRlciB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm9yZGVyOiAxcHggc29saWQgd2hpdGU7XG4gICAgICB3aWR0aDogNTBweDtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgIGxlZnQ6IDE1cHg7XG4gICAgICB0b3A6IDE1cHg7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIH1cblxuICAgICZfX2ltYWdlIHtcbiAgICAgIHdpZHRoOiAyNSU7XG4gICAgICBtYXJnaW4tbGVmdDogNHB4O1xuICAgIH1cbiAgfVxuXG4gIC5jb250cm9scyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIEBpbmNsdWRlIGZsZXhNaXgoJGp1c3RpZnk6IHNwYWNlLWJldHdlZW4pO1xuICAgIHBhZGRpbmc6IDAgMjVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgei1pbmRleDogMTA7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDA7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gdG9wLCBibGFjaywgdHJhbnNwYXJlbnQpO1xuXG4gICAgJl9fZ3JvdXAge1xuICAgICAgQGluY2x1ZGUgZmxleE1peDtcblxuICAgICAgLm9uYWlyIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuXG4gICAgICAgICY6OmFmdGVyIHtcbiAgICAgICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgICAgIHdpZHRoOiA1cHg7XG4gICAgICAgICAgaGVpZ2h0OiA1cHg7XG4gICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGFjdGl2ZS1mb250O1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgICAgbGVmdDogLThweDtcbiAgICAgICAgICB0b3A6IDdweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGltZyB7XG4gICAgICBoZWlnaHQ6IDIwcHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgfVxuICB9XG5cbiAgLnBsYXllciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEzMDBweCkge1xuICAud3JhcHBlciB7XG4gICAgLmJhbm5lci1jb250ZW50IHtcbiAgICAgIHBhZGRpbmctdG9wOiA1MHB4O1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTIwcHgpIHtcbiAgLndyYXBwZXIge1xuICAgIC5iYW5uZXItY29udGVudCB7XG4gICAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAxNSU7XG4gICAgICB9XG5cbiAgICAgICZfX2JpZy10aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgIH1cblxuICAgICAgJl9fbGV0c3RhcnQge1xuICAgICAgICBib3R0b206IDIwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDgzMHB4KSB7XG4gIC53cmFwcGVyIHtcbiAgICAuYmFubmVyLWNvbnRlbnQge1xuICAgICAgcGFkZGluZy10b3A6IDMwcHg7XG5cbiAgICAgICZfX25hbWUge1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2ODBweCkge1xuICAud3JhcHBlciB7XG4gICAgLmJhbm5lci1jb250ZW50IHtcbiAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuXG4gICAgICAmX19uYW1lIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgfVxuXG4gICAgICAmX19iaWctdGl0bGUge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU4MHB4KSB7XG4gIC53cmFwcGVyIHtcbiAgICAuYmFubmVyLWNvbnRlbnQge1xuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgIH1cblxuICAgICAgJi1uYW1lIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgIH1cblxuICAgICAgJl9fYmlnLXRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAzOTBweCkge1xuICAud3JhcHBlciB7XG4gICAgLmJhbm5lci1jb250ZW50IHtcbiAgICAgICZfX2JpZy10aXRsZSB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJcbkBtaXhpbiBmbGV4TWl4KCRqdXN0aWZ5OiBjZW50ZXIsICRhbGlnbjogY2VudGVyLCAkZGlyZWN0aW9uOiByb3cpIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6ICRhbGlnbjtcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcbiAgZmxleC1kaXJlY3Rpb246ICRkaXJlY3Rpb247XG59XG5cbkBtaXhpbiBmb250U3R5bGUoJHNpemU6IDE4cHgsICRjb2xvcjogJG1haW4tZm9udCkge1xuICBmb250LXNpemU6ICRzaXplO1xuICBjb2xvcjogJGNvbG9yO1xufVxuIiwiJG1haW4tZm9udDogIzAwMDAwMDtcbiRtdXRlZC1mb250OiAjNDg0ODQ5O1xuJGFjdGl2ZS1mb250OiAjZjkxYjFiO1xuJG9kZC1iYWNrZ3JvdW5kOiAjZjBmMGYwO1xuJGRhcmstY29sb3I6ICMyODJlMzU7XG4kbWVkaXVtLWNvbG9yOiAjMmUzNDNhO1xuJGxpZ2h0LWNvbG9yOiAjZjBmMGYwO1xuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BannerPlayerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-banner-player',
                templateUrl: './banner-player.component.html',
                styleUrls: ['./banner-player.component.scss']
            }]
    }], function () { return [{ type: src_app_services_player_service__WEBPACK_IMPORTED_MODULE_1__["PlayerService"] }]; }, { url: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], autoplay: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], controls: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], playerRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['player', { static: true }]
        }], isFullscreen: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "q7H0":
/*!*************************************************************************!*\
  !*** ./src/app/components/support-company/support-company.component.ts ***!
  \*************************************************************************/
/*! exports provided: SupportCompanyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportCompanyComponent", function() { return SupportCompanyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class SupportCompanyComponent {
    constructor() { }
    ngOnInit() {
    }
}
SupportCompanyComponent.ɵfac = function SupportCompanyComponent_Factory(t) { return new (t || SupportCompanyComponent)(); };
SupportCompanyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SupportCompanyComponent, selectors: [["app-support-company"]], inputs: { company: "company" }, decls: 16, vars: 5, consts: [[1, "person"], [1, "person__status"], ["alt", "", 3, "src"], [1, "name"], [1, "role"], [1, "person__pay"], [1, "text", "text_small"], [1, "text"], [1, "text_medium"]], template: function SupportCompanyComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "\u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u043F\u0440\u043E\u0435\u043A\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "\u0440\u0443\u0431/\u043C\u0435\u0441");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.company.logo, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.company.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.company.role);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.company.cost, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.company.since);
    } }, styles: [".person[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  color: white;\n  margin-bottom: 30px;\n  position: relative;\n  z-index: 1;\n}\n.person__status[_ngcontent-%COMP%] {\n  width: 65%;\n  height: 240px;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: column;\n  box-sizing: border-box;\n  padding-left: 30px;\n  background-color: #282e35;\n  flex-shrink: 0;\n  text-transform: uppercase;\n}\n.person__status[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-family: \"Code Pro Bold\";\n  font-size: 20px;\n  margin-bottom: 20px;\n  margin-top: 20px;\n}\n.person__status[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #f91b1b;\n}\n.person__pay[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 240px;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: column;\n  box-sizing: border-box;\n  padding-left: 30px;\n  background-color: #2e343a;\n  padding-right: 20px;\n}\n.person__pay[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-family: \"Code Pro Bold\";\n  text-transform: uppercase;\n}\n.person__pay[_ngcontent-%COMP%]   .text_small[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.person__pay[_ngcontent-%COMP%]   .text_medium[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n@media screen and (max-width: 530px) {\n  .person[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .person__status[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdXBwb3J0LWNvbXBhbnkvc3VwcG9ydC1jb21wYW55LmNvbXBvbmVudC5zY3NzIiwic3JjL3RoZW1lL21peGlucy5zY3NzIiwic3JjL3RoZW1lL2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsV0FBQTtFQ0ZBLGFBQUE7RUFDQSxtQkFGdUM7RUFHdkMsdUJBSHVCO0VBSXZCLG1CQUoyRDtFREszRCxpQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUNGO0FBQ0U7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQ1pGLGFBQUE7RUFDQSx1QkRZMkI7RUNYM0IsdUJBSHVCO0VBSXZCLHNCRFVtRDtFQUNqRCxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJFZFM7RUZlVCxjQUFBO0VBQ0EseUJBQUE7QUFJSjtBQUZJO0VBQ0UsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUlOO0FBREk7RUNwQkYsZUFEc0I7RUFFdEIsY0NSWTtBRmdDZDtBQUFFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUNsQ0YsYUFBQTtFQUNBLHVCRGtDMkI7RUNqQzNCLHVCQUh1QjtFQUl2QixzQkRnQ21EO0VBQ2pELHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkVuQ1c7RUZvQ1gsbUJBQUE7QUFLSjtBQUhJO0VBQ0UsZUFBQTtFQUNBLDRCQUFBO0VBQ0EseUJBQUE7QUFLTjtBQUhNO0VBQ0UsZUFBQTtBQUtSO0FBRk07RUFDRSxlQUFBO0FBSVI7QUFFQTtFQUNFO0lBQ0Usc0JBQUE7RUFDRjtFQUNFO0lBQ0UsV0FBQTtFQUNKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3N1cHBvcnQtY29tcGFueS9zdXBwb3J0LWNvbXBhbnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vdGhlbWUvbWl4aW5zLnNjc3NcIjtcbkBpbXBvcnQgXCIuLi8uLi8uLi90aGVtZS9jb2xvcnMuc2Nzc1wiO1xuXG4ucGVyc29uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIEBpbmNsdWRlIGZsZXhNaXg7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcblxuICAmX19zdGF0dXMge1xuICAgIHdpZHRoOiA2NSU7XG4gICAgaGVpZ2h0OiAyNDBweDtcbiAgICBAaW5jbHVkZSBmbGV4TWl4KCRhbGlnbjogZmxleC1zdGFydCwgJGRpcmVjdGlvbjogY29sdW1uKTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyay1jb2xvcjtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gICAgLm5hbWUge1xuICAgICAgZm9udC1mYW1pbHk6ICdDb2RlIFBybyBCb2xkJztcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIH1cblxuICAgIC5yb2xlIHtcbiAgICAgIEBpbmNsdWRlIGZvbnRTdHlsZSgkY29sb3I6ICRhY3RpdmUtZm9udCk7XG4gICAgfVxuICB9XG5cbiAgJl9fcGF5IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDI0MHB4O1xuICAgIEBpbmNsdWRlIGZsZXhNaXgoJGFsaWduOiBmbGV4LXN0YXJ0LCAkZGlyZWN0aW9uOiBjb2x1bW4pO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRtZWRpdW0tY29sb3I7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcblxuICAgIC50ZXh0IHtcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgIGZvbnQtZmFtaWx5OiAnQ29kZSBQcm8gQm9sZCc7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gICAgICAmX3NtYWxsIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgfVxuXG4gICAgICAmX21lZGl1bSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTMwcHgpIHtcbiAgLnBlcnNvbiB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICZfX3N0YXR1cyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cbn1cbiIsIlxuQG1peGluIGZsZXhNaXgoJGp1c3RpZnk6IGNlbnRlciwgJGFsaWduOiBjZW50ZXIsICRkaXJlY3Rpb246IHJvdykge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogJGFsaWduO1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcbn1cblxuQG1peGluIGZvbnRTdHlsZSgkc2l6ZTogMThweCwgJGNvbG9yOiAkbWFpbi1mb250KSB7XG4gIGZvbnQtc2l6ZTogJHNpemU7XG4gIGNvbG9yOiAkY29sb3I7XG59XG4iLCIkbWFpbi1mb250OiAjMDAwMDAwO1xuJG11dGVkLWZvbnQ6ICM0ODQ4NDk7XG4kYWN0aXZlLWZvbnQ6ICNmOTFiMWI7XG4kb2RkLWJhY2tncm91bmQ6ICNmMGYwZjA7XG4kZGFyay1jb2xvcjogIzI4MmUzNTtcbiRtZWRpdW0tY29sb3I6ICMyZTM0M2E7XG4kbGlnaHQtY29sb3I6ICNmMGYwZjA7XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SupportCompanyComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-support-company',
                templateUrl: './support-company.component.html',
                styleUrls: ['./support-company.component.scss']
            }]
    }], function () { return []; }, { company: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "s76a":
/*!***********************************************************************************!*\
  !*** ./src/app/components/support-person-group/support-person-group.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SupportPersonGroupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportPersonGroupComponent", function() { return SupportPersonGroupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _support_person_support_person_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../support-person/support-person.component */ "ZjgA");




function SupportPersonGroupComponent_app_support_person_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-support-person", 9);
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("person", item_r1);
} }
class SupportPersonGroupComponent {
    constructor() {
        this.supportPersons = [];
    }
    ngOnInit() {
    }
}
SupportPersonGroupComponent.ɵfac = function SupportPersonGroupComponent_Factory(t) { return new (t || SupportPersonGroupComponent)(); };
SupportPersonGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SupportPersonGroupComponent, selectors: [["app-support-person-group"]], inputs: { supportPersons: "supportPersons" }, decls: 15, vars: 1, consts: [[1, "support"], [1, "support__persons"], [3, "person", 4, "ngFor", "ngForOf"], [1, "support__myself"], ["src", "assets/snow_flake.png", "alt", "", 1, "snow-flake"], ["src", "assets/logo_channel.png", "alt", "", 1, "logo"], [1, "title"], ["href", "http://ott.by/product/podderzhka-5-rubley-bel-muzykantov-2", "target", "_blank", 1, "button"], ["src", "assets/play.svg", "alt", ""], [3, "person"]], template: function SupportPersonGroupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SupportPersonGroupComponent_app_support_person_2_Template, 1, 1, "app-support-person", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "\u043E\u043D\u0438 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044E\u0442 \u0431\u0435\u043B\u043E\u0440\u0443\u0441\u0441\u043A\u0443\u044E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u043C\u0443\u0437\u044B\u043A\u0443");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \u0445\u043E\u0447\u0443 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0430\u0442\u044C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.supportPersons);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _support_person_support_person_component__WEBPACK_IMPORTED_MODULE_2__["SupportPersonComponent"]], styles: ["@font-face {\n  font-family: \"Code Pro LC\";\n  src: url('Code_Pro_LC.ttf');\n}\n@font-face {\n  font-family: \"Code Pro Bold\";\n  src: url('Code_Pro_Bold.ttf');\n}\n@font-face {\n  font-family: \"Code Pro Bold LC\";\n  src: url('Code_Pro_Bold_LC.ttf');\n}\n@font-face {\n  font-family: \"Code Pro LC\";\n  src: url('Code_Pro_LC.ttf');\n}\n@font-face {\n  font-family: \"Code Pro Light\";\n  src: url('Code_Pro_Light.ttf');\n}\n@font-face {\n  font-family: \"Code Pro Light LC\";\n  src: url('Code_Pro_Light_LC.ttf');\n}\n@font-face {\n  font-family: \"Code Pro\";\n  src: url('Code_Pro.ttf');\n}\n.support[_ngcontent-%COMP%] {\n  width: 1430px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  padding: 120px 0;\n  box-sizing: border-box;\n}\n.support__persons[_ngcontent-%COMP%] {\n  width: 60%;\n  flex-shrink: 0;\n  position: relative;\n  height: 510px;\n  overflow: hidden;\n  overflow-y: auto;\n  z-index: 10;\n}\n.support__myself[_ngcontent-%COMP%] {\n  padding-left: 130px;\n  box-sizing: border-box;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: column;\n  position: relative;\n  z-index: 1;\n}\n.support__myself[_ngcontent-%COMP%]   .snow-flake[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -200px;\n  top: calc(50% - 200px);\n  z-index: 0;\n}\n.support__myself[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  margin-bottom: 45px;\n}\n@media screen and (max-width: 1430px) {\n  .support[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media screen and (max-width: 1010px) {\n  .support[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column-reverse;\n  }\n  .support__myself[_ngcontent-%COMP%] {\n    padding-left: 40px;\n    margin-bottom: 30px;\n  }\n  .support__persons[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media screen and (max-width: 545px) {\n  .support__myself[_ngcontent-%COMP%] {\n    align-items: center;\n    padding-left: 5px;\n  }\n  .support__myself[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .support__myself[_ngcontent-%COMP%]   .snow-flake[_ngcontent-%COMP%] {\n    width: 60%;\n    left: 20%;\n    top: 20%;\n  }\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #dfdfdf;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #f91b1b;\n  height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3N1cHBvcnQtcGVyc29uLWdyb3VwL3N1cHBvcnQtcGVyc29uLWdyb3VwLmNvbXBvbmVudC5zY3NzIiwic3JjL3RoZW1lL21peGlucy5zY3NzIiwic3JjL3RoZW1lL2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQUE7RUFDQSwyQkFBQTtBQ0NGO0FERUE7RUFDRSw0QkFBQTtFQUNBLDZCQUFBO0FDQUY7QURHQTtFQUNFLCtCQUFBO0VBQ0EsZ0NBQUE7QUNERjtBRElBO0VBQ0UsMEJBQUE7RUFDQSwyQkFBQTtBQ0ZGO0FES0E7RUFDRSw2QkFBQTtFQUNBLDhCQUFBO0FDSEY7QURNQTtFQUNFLGdDQUFBO0VBQ0EsaUNBQUE7QUNKRjtBRE9BO0VBQ0UsdUJBQUE7RUFDQSx3QkFBQTtBQ0xGO0FBdkJBO0VBQ0UsYUFBQTtFQ0hBLGFBQUE7RUFDQSxtQkFGdUM7RUFHdkMsdUJBSHVCO0VBSXZCLG1CQUoyRDtFRE0zRCxnQkFBQTtFQUNBLHNCQUFBO0FBNEJGO0FBMUJFO0VBQ0UsVUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQTRCSjtBQXpCRTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7RUNwQkYsYUFBQTtFQUNBLHVCRG9CMkI7RUNuQjNCLHVCQUh1QjtFQUl2QixzQkRrQm1EO0VBQ2pELGtCQUFBO0VBQ0EsVUFBQTtBQThCSjtBQTVCSTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBQThCTjtBQTNCSTtFQUNFLG1CQUFBO0FBNkJOO0FBdEJBO0VBQ0U7SUFDRSxXQUFBO0VBeUJGO0FBQ0Y7QUF0QkE7RUFDRTtJQy9DQSxhQUFBO0lBQ0EsbUJBRnVDO0lBR3ZDLHVCQUh1QjtJQUl2Qiw4QkQ2QytCO0VBMkIvQjtFQTFCRTtJQUNFLGtCQUFBO0lBQ0EsbUJBQUE7RUE0Qko7RUF6QkU7SUFDRSxXQUFBO0VBMkJKO0FBQ0Y7QUF2QkE7RUFFSTtJQUNFLG1CQUFBO0lBQ0EsaUJBQUE7RUF3Qko7RUF0Qkk7SUFDRSxrQkFBQTtFQXdCTjtFQXJCSTtJQUNFLFVBQUE7SUFDQSxTQUFBO0lBQ0EsUUFBQTtFQXVCTjtBQUNGO0FBakJBO0VBQ0UsVUFBQTtBQW1CRjtBQWhCQSxVQUFBO0FBQ0E7RUFDRSxtQkFBQTtBQW1CRjtBQWhCQSxXQUFBO0FBQ0E7RUFDRSxtQkUzRlk7RUY0RlosWUFBQTtBQW1CRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3VwcG9ydC1wZXJzb24tZ3JvdXAvc3VwcG9ydC1wZXJzb24tZ3JvdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdDb2RlIFBybyBMQyc7XG4gIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvQ29kZV9Qcm9fTEMudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0NvZGUgUHJvIEJvbGQnO1xuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0NvZGVfUHJvX0JvbGQudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0NvZGUgUHJvIEJvbGQgTEMnO1xuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0NvZGVfUHJvX0JvbGRfTEMudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0NvZGUgUHJvIExDJztcbiAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9Db2RlX1Byb19MQy50dGYnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnQ29kZSBQcm8gTGlnaHQnO1xuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0NvZGVfUHJvX0xpZ2h0LnR0ZicpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdDb2RlIFBybyBMaWdodCBMQyc7XG4gIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvQ29kZV9Qcm9fTGlnaHRfTEMudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0NvZGUgUHJvJztcbiAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9Db2RlX1Byby50dGYnKTtcbn1cbiIsIkBpbXBvcnQgJy4uLy4uLy4uL3RoZW1lL21peGlucy5zY3NzJztcbkBpbXBvcnQgJy4uLy4uLy4uL3RoZW1lL2NvbG9ycy5zY3NzJztcbkBpbXBvcnQgJy4uLy4uLy4uL3RoZW1lL2ZvbnRzLnNjc3MnO1xuXG4uc3VwcG9ydCB7XG4gIHdpZHRoOiAxNDMwcHg7XG4gIEBpbmNsdWRlIGZsZXhNaXg7XG4gIHBhZGRpbmc6IDEyMHB4IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgJl9fcGVyc29ucyB7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgaGVpZ2h0OiA1MTBweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIG92ZXJmbG93LXk6IGF1dG87XG4gICAgei1pbmRleDogMTA7XG4gIH1cblxuICAmX19teXNlbGYge1xuICAgIHBhZGRpbmctbGVmdDogMTMwcHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBAaW5jbHVkZSBmbGV4TWl4KCRhbGlnbjogZmxleC1zdGFydCwgJGRpcmVjdGlvbjogY29sdW1uKTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTtcblxuICAgIC5zbm93LWZsYWtlIHtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IC0yMDBweDtcbiAgICAgIHRvcDogY2FsYyg1MCUgLSAyMDBweCk7XG4gICAgICB6LWluZGV4OiAwO1xuICAgIH1cblxuICAgIC5sb2dvIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDQ1cHg7XG4gICAgfVxuXG4gIH1cbn1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDMwcHgpIHtcbiAgLnN1cHBvcnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMTBweCkge1xuICAuc3VwcG9ydCB7XG4gICAgQGluY2x1ZGUgZmxleE1peCgkZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZSk7XG4gICAgJl9fbXlzZWxmIHtcbiAgICAgIHBhZGRpbmctbGVmdDogNDBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgfVxuXG4gICAgJl9fcGVyc29ucyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTQ1cHgpIHtcbiAgLnN1cHBvcnQge1xuICAgICZfX215c2VsZiB7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XG5cbiAgICAgIC50aXRsZSB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cblxuICAgICAgLnNub3ctZmxha2Uge1xuICAgICAgICB3aWR0aDogNjAlO1xuICAgICAgICBsZWZ0OiAyMCU7XG4gICAgICAgIHRvcDogMjAlO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNHB4O1xufVxuXG4vKiBUcmFjayAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6ICNkZmRmZGY7XG59XG5cbi8qIEhhbmRsZSAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICRhY3RpdmUtZm9udDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuIiwiXG5AbWl4aW4gZmxleE1peCgkanVzdGlmeTogY2VudGVyLCAkYWxpZ246IGNlbnRlciwgJGRpcmVjdGlvbjogcm93KSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiAkYWxpZ247XG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XG4gIGZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xufVxuXG5AbWl4aW4gZm9udFN0eWxlKCRzaXplOiAxOHB4LCAkY29sb3I6ICRtYWluLWZvbnQpIHtcbiAgZm9udC1zaXplOiAkc2l6ZTtcbiAgY29sb3I6ICRjb2xvcjtcbn1cbiIsIiRtYWluLWZvbnQ6ICMwMDAwMDA7XG4kbXV0ZWQtZm9udDogIzQ4NDg0OTtcbiRhY3RpdmUtZm9udDogI2Y5MWIxYjtcbiRvZGQtYmFja2dyb3VuZDogI2YwZjBmMDtcbiRkYXJrLWNvbG9yOiAjMjgyZTM1O1xuJG1lZGl1bS1jb2xvcjogIzJlMzQzYTtcbiRsaWdodC1jb2xvcjogI2YwZjBmMDtcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SupportPersonGroupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-support-person-group',
                templateUrl: './support-person-group.component.html',
                styleUrls: ['./support-person-group.component.scss']
            }]
    }], function () { return []; }, { supportPersons: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }] }); })();


/***/ }),

/***/ "sGLn":
/*!*****************************************************************!*\
  !*** ./src/app/components/sound-range/sound-range.component.ts ***!
  \*****************************************************************/
/*! exports provided: SoundRangeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SoundRangeComponent", function() { return SoundRangeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-slider/ngx-slider */ "SVLx");



class SoundRangeComponent {
    constructor() {
        this.changeEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.options = {
            floor: 0,
            ceil: 100,
            showSelectionBar: true,
            hideLimitLabels: true,
            hidePointerLabels: true,
        };
        this.value = 100;
    }
    ngOnInit() {
    }
    onValueChange() {
        this.changeEvent.next(this.value);
    }
}
SoundRangeComponent.ɵfac = function SoundRangeComponent_Factory(t) { return new (t || SoundRangeComponent)(); };
SoundRangeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SoundRangeComponent, selectors: [["app-sound-range"]], inputs: { isWhite: "isWhite" }, outputs: { changeEvent: "changeEvent" }, decls: 3, vars: 2, consts: [[1, "custom-slider"], ["src", "assets/sound.png", "alt", "", 1, "icon"], [3, "value", "options", "valueChange"]], template: function SoundRangeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ngx-slider", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("valueChange", function SoundRangeComponent_Template_ngx_slider_valueChange_2_listener($event) { return ctx.value = $event; })("valueChange", function SoundRangeComponent_Template_ngx_slider_valueChange_2_listener() { return ctx.onValueChange(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.value)("options", ctx.options);
    } }, directives: [_angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_1__["ɵa"]], styles: [".custom-slider[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n}\n.custom-slider[_ngcontent-%COMP%]   .icon[_ngcontent-%COMP%] {\n  margin-right: 10px;\n}\n  .ngx-slider {\n  margin: 0 !important;\n  width: 60px !important;\n}\n  .custom-slider .ngx-slider .ngx-slider-bar {\n  background: pink;\n  height: 5px;\n  margin: 0;\n}\n  .custom-slider .ngx-slider .ngx-slider-selection {\n  background: #f91b1b;\n  z-index: 10000000;\n}\n  .custom-slider .ngx-slider .ngx-slider-pointer {\n  display: none;\n}\n  .custom-slider .ngx-slider .ngx-slider-pointer:after {\n  display: none;\n}\n  .custom-slider .ngx-slider .ngx-slider-tick {\n  width: 1px;\n  height: 15px;\n  margin-left: 4px;\n  border-radius: 0;\n  background: black;\n  top: -1px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zb3VuZC1yYW5nZS9zb3VuZC1yYW5nZS5jb21wb25lbnQuc2NzcyIsInNyYy90aGVtZS9taXhpbnMuc2NzcyIsInNyYy90aGVtZS9jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLFdBQUE7RUNGQSxhQUFBO0VBQ0EsbUJBRnVDO0VBR3ZDLHVCQUh1QjtFQUl2QixtQkFKMkQ7QURLN0Q7QUFDRTtFQUNFLGtCQUFBO0FBQ0o7QUFLRTtFQUNFLG9CQUFBO0VBQ0Esc0JBQUE7QUFGSjtBQUlFO0VBQ0UsZ0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtBQUZKO0FBSUU7RUFDRSxtQkV0QlU7RUZ1QlYsaUJBQUE7QUFGSjtBQUtFO0VBQ0UsYUFBQTtBQUhKO0FBTUU7RUFDRSxhQUFBO0FBSko7QUFTRTtFQUNFLFVBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsU0FBQTtBQVBKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zb3VuZC1yYW5nZS9zb3VuZC1yYW5nZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL3RoZW1lL2NvbG9ycy5zY3NzJztcbkBpbXBvcnQgJy4uLy4uLy4uL3RoZW1lL21peGlucy5zY3NzJztcblxuLmN1c3RvbS1zbGlkZXIge1xuICB3aWR0aDogMTAwJTtcbiAgQGluY2x1ZGUgZmxleE1peDtcblxuICAuaWNvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICB9XG5cbn1cblxuOjpuZy1kZWVwIHtcbiAgLm5neC1zbGlkZXIge1xuICAgIG1hcmdpbjogMCAhaW1wb3J0YW50O1xuICAgIHdpZHRoOiA2MHB4ICFpbXBvcnRhbnQ7XG4gIH1cbiAgLmN1c3RvbS1zbGlkZXIgLm5neC1zbGlkZXIgLm5neC1zbGlkZXItYmFyIHtcbiAgICBiYWNrZ3JvdW5kOiBwaW5rO1xuICAgIGhlaWdodDogNXB4O1xuICAgIG1hcmdpbjogMDtcbiAgfVxuICAuY3VzdG9tLXNsaWRlciAubmd4LXNsaWRlciAubmd4LXNsaWRlci1zZWxlY3Rpb24ge1xuICAgIGJhY2tncm91bmQ6ICRhY3RpdmUtZm9udDtcbiAgICB6LWluZGV4OiAxMDAwMDAwMDtcbiAgfVxuXG4gIC5jdXN0b20tc2xpZGVyIC5uZ3gtc2xpZGVyIC5uZ3gtc2xpZGVyLXBvaW50ZXIge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cblxuICAuY3VzdG9tLXNsaWRlciAubmd4LXNsaWRlciAubmd4LXNsaWRlci1wb2ludGVyOmFmdGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG5cblxuXG4gIC5jdXN0b20tc2xpZGVyIC5uZ3gtc2xpZGVyIC5uZ3gtc2xpZGVyLXRpY2sge1xuICAgIHdpZHRoOiAxcHg7XG4gICAgaGVpZ2h0OiAxNXB4O1xuICAgIG1hcmdpbi1sZWZ0OiA0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogMDtcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcbiAgICB0b3A6IC0xcHg7XG4gIH1cblxuXG5cbn1cbiIsIlxuQG1peGluIGZsZXhNaXgoJGp1c3RpZnk6IGNlbnRlciwgJGFsaWduOiBjZW50ZXIsICRkaXJlY3Rpb246IHJvdykge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogJGFsaWduO1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcbn1cblxuQG1peGluIGZvbnRTdHlsZSgkc2l6ZTogMThweCwgJGNvbG9yOiAkbWFpbi1mb250KSB7XG4gIGZvbnQtc2l6ZTogJHNpemU7XG4gIGNvbG9yOiAkY29sb3I7XG59XG4iLCIkbWFpbi1mb250OiAjMDAwMDAwO1xuJG11dGVkLWZvbnQ6ICM0ODQ4NDk7XG4kYWN0aXZlLWZvbnQ6ICNmOTFiMWI7XG4kb2RkLWJhY2tncm91bmQ6ICNmMGYwZjA7XG4kZGFyay1jb2xvcjogIzI4MmUzNTtcbiRtZWRpdW0tY29sb3I6ICMyZTM0M2E7XG4kbGlnaHQtY29sb3I6ICNmMGYwZjA7XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SoundRangeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-sound-range',
                templateUrl: './sound-range.component.html',
                styleUrls: ['./sound-range.component.scss']
            }]
    }], function () { return []; }, { isWhite: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], changeEvent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "t60e":
/*!***************************************************************!*\
  !*** ./src/app/components/band-popup/band-popup.component.ts ***!
  \***************************************************************/
/*! exports provided: BandPopupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BandPopupComponent", function() { return BandPopupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _directives_stop_propagation_directice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../directives/stop-propagation.directice */ "K4lg");



class BandPopupComponent {
    constructor() {
        this.changeSlide = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.hidePopup = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnChanges(changes) {
        if (changes.index) {
            this.descriptionText = this.getDescriptionText(this.bands[this.index].description);
        }
    }
    closePopup() {
        this.hidePopup.next();
    }
    nextSlide() {
        this.changeSlide.next('next');
    }
    prevSlide() {
        this.changeSlide.next('prev');
    }
    getDescriptionText(description) {
        const result = (description === null || description === void 0 ? void 0 : description.length) > 400 ? description.slice(0, 400) + '...' : description;
        return result;
    }
}
BandPopupComponent.ɵfac = function BandPopupComponent_Factory(t) { return new (t || BandPopupComponent)(); };
BandPopupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BandPopupComponent, selectors: [["app-band-popup"]], inputs: { bands: "bands", index: "index" }, outputs: { changeSlide: "changeSlide", hidePopup: "hidePopup" }, features: [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵNgOnChangesFeature"]], decls: 16, vars: 4, consts: [[1, "wrapper", 3, "click"], ["app-stop-propagation", "", 1, "popup"], [1, "close", 3, "click"], [1, "arrow", 3, "click"], [1, "content"], ["alt", "", 1, "poster", 3, "src"], [1, "name"], [1, "genre"], [1, "description"]], template: function BandPopupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BandPopupComponent_Template_div_click_0_listener() { return ctx.closePopup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BandPopupComponent_Template_div_click_2_listener() { return ctx.closePopup(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "\u2716");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BandPopupComponent_Template_div_click_4_listener() { return ctx.prevSlide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u2190");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BandPopupComponent_Template_div_click_14_listener() { return ctx.nextSlide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "\u2192");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.bands[ctx.index].cover, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.bands[ctx.index].name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.bands[ctx.index].genre.text);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.descriptionText);
    } }, directives: [_directives_stop_propagation_directice__WEBPACK_IMPORTED_MODULE_1__["StopPropagationDirective"]], styles: ["@font-face {\n  font-family: \"Code Pro LC\";\n  src: url('Code_Pro_LC.ttf');\n}\n@font-face {\n  font-family: \"Code Pro Bold\";\n  src: url('Code_Pro_Bold.ttf');\n}\n@font-face {\n  font-family: \"Code Pro Bold LC\";\n  src: url('Code_Pro_Bold_LC.ttf');\n}\n@font-face {\n  font-family: \"Code Pro LC\";\n  src: url('Code_Pro_LC.ttf');\n}\n@font-face {\n  font-family: \"Code Pro Light\";\n  src: url('Code_Pro_Light.ttf');\n}\n@font-face {\n  font-family: \"Code Pro Light LC\";\n  src: url('Code_Pro_Light_LC.ttf');\n}\n@font-face {\n  font-family: \"Code Pro\";\n  src: url('Code_Pro.ttf');\n}\n.wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.6);\n  position: fixed;\n  z-index: 100;\n  left: 0;\n  top: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n}\n.wrapper[_ngcontent-%COMP%]   .popup[_ngcontent-%COMP%] {\n  width: 95%;\n  height: 95%;\n  background-color: white;\n  min-width: 320px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  position: relative;\n  padding: 25px 0;\n  box-sizing: border-box;\n}\n.wrapper[_ngcontent-%COMP%]   .popup[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n}\n.wrapper[_ngcontent-%COMP%]   .popup[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  color: black;\n  text-transform: uppercase;\n  font-family: \"Code Pro Bold\";\n  margin-bottom: 10px;\n}\n.wrapper[_ngcontent-%COMP%]   .popup[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .genre[_ngcontent-%COMP%] {\n  color: #f91b1b;\n  margin-bottom: 10px;\n}\n.wrapper[_ngcontent-%COMP%]   .popup[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #484849;\n}\n.wrapper[_ngcontent-%COMP%]   .popup[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .poster[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 15px;\n  max-width: 500px;\n}\n.wrapper[_ngcontent-%COMP%]   .popup[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  font-size: 40px;\n  padding: 0 25px;\n  cursor: pointer;\n  box-sizing: border-box;\n}\n.wrapper[_ngcontent-%COMP%]   .popup[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  font-size: 25px;\n  cursor: pointer;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  color: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2JhbmQtcG9wdXAvYmFuZC1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNyYy90aGVtZS9taXhpbnMuc2NzcyIsInNyYy90aGVtZS9jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDBCQUFBO0VBQ0EsMkJBQUE7QUNDRjtBREVBO0VBQ0UsNEJBQUE7RUFDQSw2QkFBQTtBQ0FGO0FER0E7RUFDRSwrQkFBQTtFQUNBLGdDQUFBO0FDREY7QURJQTtFQUNFLDBCQUFBO0VBQ0EsMkJBQUE7QUNGRjtBREtBO0VBQ0UsNkJBQUE7RUFDQSw4QkFBQTtBQ0hGO0FETUE7RUFDRSxnQ0FBQTtFQUNBLGlDQUFBO0FDSkY7QURPQTtFQUNFLHVCQUFBO0VBQ0Esd0JBQUE7QUNMRjtBQXZCQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VDVEEsYUFBQTtFQUNBLG1CQUZ1QztFQUd2Qyx1QkFIdUI7RUFJdkIsbUJBSjJEO0FEdUM3RDtBQTFCRTtFQUNFLFVBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtFQ2hCRixhQUFBO0VBQ0EsbUJBRnVDO0VBR3ZDLHVCQUh1QjtFQUl2QixtQkFKMkQ7RURtQnpELGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FBK0JKO0FBN0JJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUN4QkosYUFBQTtFQUNBLG1CQUZ1QztFQUd2Qyx1QkFIdUI7RUFJdkIsc0JEc0JpQztFQUM3QixrQkFBQTtBQWtDTjtBQWhDTTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsbUJBQUE7QUFrQ1I7QUEvQk07RUFDRSxjRXBDTTtFRnFDTixtQkFBQTtBQWlDUjtBQTlCTTtFQUNFLGVBQUE7RUFDQSxjRTNDSztBRjJFYjtBQTdCTTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBK0JSO0FBM0JJO0VBQ0UsZUFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUE2Qk47QUExQkk7RUFDRSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFNBQUE7RUFDQSxXQUFBO0FBNEJOIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9iYW5kLXBvcHVwL2JhbmQtcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdDb2RlIFBybyBMQyc7XG4gIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvQ29kZV9Qcm9fTEMudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0NvZGUgUHJvIEJvbGQnO1xuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0NvZGVfUHJvX0JvbGQudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0NvZGUgUHJvIEJvbGQgTEMnO1xuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0NvZGVfUHJvX0JvbGRfTEMudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0NvZGUgUHJvIExDJztcbiAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9Db2RlX1Byb19MQy50dGYnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnQ29kZSBQcm8gTGlnaHQnO1xuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0NvZGVfUHJvX0xpZ2h0LnR0ZicpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdDb2RlIFBybyBMaWdodCBMQyc7XG4gIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvQ29kZV9Qcm9fTGlnaHRfTEMudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0NvZGUgUHJvJztcbiAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9Db2RlX1Byby50dGYnKTtcbn1cbiIsIkBpbXBvcnQgJy4uLy4uLy4uL3RoZW1lL21peGlucy5zY3NzJztcbkBpbXBvcnQgJy4uLy4uLy4uL3RoZW1lL2NvbG9ycy5zY3NzJztcbkBpbXBvcnQgJy4uLy4uLy4uL3RoZW1lL2ZvbnRzLnNjc3MnO1xuXG4ud3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvcjogYmxhY2ssICRhbHBoYTogLjYpO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEwMDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBAaW5jbHVkZSBmbGV4TWl4O1xuXG4gIC5wb3B1cCB7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBoZWlnaHQ6IDk1JTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBtaW4td2lkdGg6IDMyMHB4O1xuICAgIEBpbmNsdWRlIGZsZXhNaXg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDI1cHggMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICAgLmNvbnRlbnQge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBAaW5jbHVkZSBmbGV4TWl4KCRkaXJlY3Rpb246IGNvbHVtbik7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgIC5uYW1lIHtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBmb250LWZhbWlseTogJ0NvZGUgUHJvIEJvbGQnO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgfVxuXG4gICAgICAuZ2VucmUge1xuICAgICAgICBjb2xvcjogJGFjdGl2ZS1mb250O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgfVxuXG4gICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGNvbG9yOiAkbXV0ZWQtZm9udDtcbiAgICAgIH1cblxuICAgICAgLnBvc3RlciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICBtYXgtd2lkdGg6IDUwMHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5hcnJvdyB7XG4gICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICBwYWRkaW5nOiAwIDI1cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIH1cblxuICAgIC5jbG9zZSB7XG4gICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogMTBweDtcbiAgICAgIHRvcDogMTBweDtcbiAgICAgIGNvbG9yOiBncmF5O1xuICAgIH1cbiAgfVxufVxuIiwiXG5AbWl4aW4gZmxleE1peCgkanVzdGlmeTogY2VudGVyLCAkYWxpZ246IGNlbnRlciwgJGRpcmVjdGlvbjogcm93KSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiAkYWxpZ247XG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XG4gIGZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xufVxuXG5AbWl4aW4gZm9udFN0eWxlKCRzaXplOiAxOHB4LCAkY29sb3I6ICRtYWluLWZvbnQpIHtcbiAgZm9udC1zaXplOiAkc2l6ZTtcbiAgY29sb3I6ICRjb2xvcjtcbn1cbiIsIiRtYWluLWZvbnQ6ICMwMDAwMDA7XG4kbXV0ZWQtZm9udDogIzQ4NDg0OTtcbiRhY3RpdmUtZm9udDogI2Y5MWIxYjtcbiRvZGQtYmFja2dyb3VuZDogI2YwZjBmMDtcbiRkYXJrLWNvbG9yOiAjMjgyZTM1O1xuJG1lZGl1bS1jb2xvcjogIzJlMzQzYTtcbiRsaWdodC1jb2xvcjogI2YwZjBmMDtcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BandPopupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-band-popup',
                templateUrl: './band-popup.component.html',
                styleUrls: ['./band-popup.component.scss'],
            }]
    }], function () { return []; }, { bands: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], changeSlide: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], hidePopup: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }] }); })();


/***/ }),

/***/ "txzI":
/*!****************************************!*\
  !*** ./src/app/contsants/side.enum.ts ***!
  \****************************************/
/*! exports provided: SIDE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SIDE", function() { return SIDE; });
var SIDE;
(function (SIDE) {
    SIDE["LEFT"] = "left";
    SIDE["RIGHT"] = "right";
})(SIDE || (SIDE = {}));


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map