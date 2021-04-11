(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/dmi3z/Development/sluhay/src/main.ts */"zUnb");


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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: [".header[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 125px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  font-family: \"Code Pro LC\";\n  position: relative;\n  left: 0;\n  top: 0;\n  z-index: 10;\n}\n.header_gradient[_ngcontent-%COMP%] {\n  background: linear-gradient(to bottom, black, transparent);\n  position: absolute;\n}\n.header_gradient[_ngcontent-%COMP%]   .header__item[_ngcontent-%COMP%] {\n  color: white !important;\n}\n.header__item[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  cursor: pointer;\n  margin-right: 38px;\n  color: black;\n  outline: none;\n}\n.header__item[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n@media screen and (max-width: 1100px) {\n  .header__item[_ngcontent-%COMP%] {\n    font-size: 12px;\n    margin-right: 22px;\n  }\n}\n@media screen and (max-width: 878px) {\n  .header[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .header__item[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL3RoZW1lL21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUNGQSxhQUFBO0VBQ0EsbUJBRnVDO0VBR3ZDLHVCQUh1QjtFQUl2QixtQkFKMkQ7RURLM0QsMEJBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtBQUVGO0FBQUU7RUFDRSwwREFBQTtFQUNBLGtCQUFBO0FBRUo7QUFBSTtFQUNFLHVCQUFBO0FBRU47QUFFRTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFBSjtBQUVJO0VBQ0UsZUFBQTtBQUFOO0FBSUE7RUFFSTtJQUNFLGVBQUE7SUFDQSxrQkFBQTtFQUZKO0FBQ0Y7QUFNQTtFQUNFO0lBQ0UsYUFBQTtFQUpGO0VBS0U7SUFDRSxhQUFBO0VBSEo7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uLy4uL3RoZW1lL21peGlucy5zY3NzJztcblxuLmhlYWRlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEyNXB4O1xuICBAaW5jbHVkZSBmbGV4TWl4O1xuICBmb250LWZhbWlseTogJ0NvZGUgUHJvIExDJztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDEwO1xuXG4gICZfZ3JhZGllbnQge1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIGJsYWNrLCB0cmFuc3BhcmVudCk7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuXG4gICAgLmhlYWRlcl9faXRlbSB7XG4gICAgICBjb2xvcjogd2hpdGUgIWltcG9ydGFudDtcbiAgICB9XG4gIH1cblxuICAmX19pdGVtIHtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBtYXJnaW4tcmlnaHQ6IDM4cHg7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIG91dGxpbmU6IG5vbmU7XG5cbiAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTEwMHB4KSB7XG4gIC5oZWFkZXIge1xuICAgICZfX2l0ZW0ge1xuICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgbWFyZ2luLXJpZ2h0OiAyMnB4O1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NzhweCkge1xuICAuaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgICZfX2l0ZW0ge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbn1cbiIsIlxuQG1peGluIGZsZXhNaXgoJGp1c3RpZnk6IGNlbnRlciwgJGFsaWduOiBjZW50ZXIsICRkaXJlY3Rpb246IHJvdykge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogJGFsaWduO1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcbn1cblxuQG1peGluIGZvbnRTdHlsZSgkc2l6ZTogMThweCwgJGNvbG9yOiAkbWFpbi1mb250KSB7XG4gIGZvbnQtc2l6ZTogJHNpemU7XG4gIGNvbG9yOiAkY29sb3I7XG59XG4iXX0= */"] });
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
        url: 'http://93.189.224.26/live/Ch045pub/index.m3u8',
        id: 10970
    },
    {
        genre: _genres_enum__WEBPACK_IMPORTED_MODULE_0__["GENRES"].LIVE,
        text: 'концерты. лайвы',
        url: 'http://93.189.224.26/live/Ch173pub/index.m3u8',
        id: 10975
    },
    {
        genre: _genres_enum__WEBPACK_IMPORTED_MODULE_0__["GENRES"].POP,
        text: 'популярная. музыка',
        url: 'http://93.189.224.26/live/Ch066pub/index.m3u8',
        id: 10972
    },
    {
        genre: _genres_enum__WEBPACK_IMPORTED_MODULE_0__["GENRES"].ROCK,
        text: 'драйв. смысл',
        url: 'http://93.189.224.26/live/Ch114pub/index.m3u8',
        id: 10971
    },
    {
        genre: _genres_enum__WEBPACK_IMPORTED_MODULE_0__["GENRES"].EDM,
        text: 'электронная. музыка',
        url: 'http://93.189.224.26/live/Ch091pub/index.m3u8',
        id: 10973
    },
    {
        genre: _genres_enum__WEBPACK_IMPORTED_MODULE_0__["GENRES"].RAP,
        text: 'мастера. слова',
        url: 'http://93.189.224.26/live/Ch107pub/index.m3u8',
        id: 10974
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
    getChannelFrame(id) {
        const unixTime = new Date().getTime() / 1000;
        const t = Math.round(unixTime);
        return `https://old.persik.by/utils/show-frame.php?c=${id}&t=${t}&tr=crop&w=600&h=350`;
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
/* harmony import */ var _band_popup_band_popup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../band-popup/band-popup.component */ "t60e");
/* harmony import */ var _band_item_band_item_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../band-item/band-item.component */ "oJph");
/* harmony import */ var _band_item_horizontal_band_item_horizontal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../band-item-horizontal/band-item-horizontal.component */ "j1pL");
/* harmony import */ var _pipes_bands_genre_pipe__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../pipes/bands-genre.pipe */ "aLj3");







const _c0 = ["scrollContent"];
function BandsComponent_br_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
} }
function BandsComponent_br_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "br");
} }
function BandsComponent_div_10_p_1_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BandsComponent_div_10_p_1_Template_p_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const item_r10 = ctx.$implicit; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r11.activateGenre(item_r10.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r10 = ctx.$implicit;
    const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("genres__item_active", item_r10.id === ctx_r9.selectedGenreId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r10.text);
} }
function BandsComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BandsComponent_div_10_p_1_Template, 2, 3, "p", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r2.genres);
} }
function BandsComponent_ng_container_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function BandsComponent_app_band_popup_12_Template(rf, ctx) { if (rf & 1) {
    const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-band-popup", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("hidePopup", function BandsComponent_app_band_popup_12_Template_app_band_popup_hidePopup_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.closePopup(); })("changeSlide", function BandsComponent_app_band_popup_12_Template_app_band_popup_changeSlide_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r14); const ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r15.changeSlide($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("bands", ctx_r4.bands)("index", ctx_r4.previewedId);
} }
function BandsComponent_ng_template_13_app_band_item_3_Template(rf, ctx) { if (rf & 1) {
    const _r21 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-band-item", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BandsComponent_ng_template_13_app_band_item_3_Template_app_band_item_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r21); const i_r19 = ctx.index; const ctx_r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r20.openPreview(i_r19); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r18 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("band", item_r18);
} }
function BandsComponent_ng_template_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BandsComponent_ng_template_13_app_band_item_3_Template, 1, 1, "app-band-item", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r6.bands);
} }
function BandsComponent_ng_template_15_div_0_app_band_item_horizontal_5_Template(rf, ctx) { if (rf & 1) {
    const _r27 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "app-band-item-horizontal", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("selectEvent", function BandsComponent_ng_template_15_div_0_app_band_item_horizontal_5_Template_app_band_item_horizontal_selectEvent_0_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r27); const genre_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r26.openPreviewHorizontal($event, genre_r23); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const band_r25 = ctx.$implicit;
    const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("dimension", ctx_r24.currentWidth)("band", band_r25);
} }
function BandsComponent_ng_template_15_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, BandsComponent_ng_template_15_div_0_app_band_item_horizontal_5_Template, 1, 2, "app-band-item-horizontal", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "appBandsGenrePipe");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const genre_r23 = ctx.$implicit;
    const ctx_r22 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx_r22.currentWidth, "px");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](genre_r23.text);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](6, 4, ctx_r22.allBands, genre_r23.id));
} }
function BandsComponent_ng_template_15_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, BandsComponent_ng_template_15_div_0_Template, 7, 7, "div", 20);
} if (rf & 2) {
    const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r8.genres.slice(1));
} }
class BandsComponent {
    constructor() {
        this.genres = [];
        this.bands = [];
        this.allBands = [];
        this.changeGenre = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.horizontalBrakeWidth = 970;
    }
    onResize(event) {
        this.currentWidth = event.target.innerWidth;
        this.isMobileView = this.currentWidth <= this.horizontalBrakeWidth;
    }
    ngOnInit() {
        this.currentWidth = window.innerWidth;
        this.isMobileView = this.currentWidth <= this.horizontalBrakeWidth;
    }
    activateGenre(genreId) {
        this.changeGenre.next(genreId);
        this.scrollToTop();
    }
    openPreview(id) {
        this.isPreviewOpened = true;
        this.previewedId = id;
    }
    openPreviewHorizontal(band, genre) {
        if (genre.id !== 1) {
            this.bands = this.allBands.filter(item => item.genres.includes(genre.id));
        }
        else {
            this.bands = this.allBands;
        }
        const index = this.bands.indexOf(band);
        this.openPreview(index);
    }
    closePopup() {
        this.isPreviewOpened = false;
    }
    changeSlide(way) {
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
    scrollToTop() {
        const scrollContent = this.scrollContentRef.nativeElement;
        scrollContent.scrollTo(0, 0);
    }
}
BandsComponent.ɵfac = function BandsComponent_Factory(t) { return new (t || BandsComponent)(); };
BandsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BandsComponent, selectors: [["app-bands"]], viewQuery: function BandsComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.scrollContentRef = _t.first);
    } }, hostBindings: function BandsComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("resize", function BandsComponent_resize_HostBindingHandler($event) { return ctx.onResize($event); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, inputs: { genres: "genres", bands: "bands", allBands: "allBands", selectedGenreId: "selectedGenreId" }, outputs: { changeGenre: "changeGenre" }, decls: 17, vars: 7, consts: [[1, "bands"], [1, "genres-selector"], [1, "group"], ["src", "assets/logo_channel.png", "alt", "", 1, "logo"], [1, "title"], [4, "ngIf"], ["class", "genres", 4, "ngIf"], [4, "ngIf", "ngIfThen", "ngIfElse"], [3, "bands", "index", "hidePopup", "changeSlide", 4, "ngIf"], ["desktop", ""], ["mobile", ""], [1, "genres"], ["class", "genres__item", 3, "genres__item_active", "click", 4, "ngFor", "ngForOf"], [1, "genres__item", 3, "click"], [3, "bands", "index", "hidePopup", "changeSlide"], [1, "bands__list"], [1, "scroll-content"], ["scrollContent", ""], [3, "band", "click", 4, "ngFor", "ngForOf"], [3, "band", "click"], ["class", "section", 3, "width", 4, "ngFor", "ngForOf"], [1, "section"], [1, "section__genre"], [1, "section__content"], [1, "section__content-scroll"], [3, "dimension", "band", "selectEvent", 4, "ngFor", "ngForOf"], [3, "dimension", "band", "selectEvent"]], template: function BandsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\u043E\u043D\u0438 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BandsComponent_br_6_Template, 1, 0, "br", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \u0434\u0435\u043B\u0430\u044E\u0442 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, BandsComponent_br_8_Template, 1, 0, "br", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u0431\u0435\u043B\u043E\u0440\u0443\u0441\u0441\u043A\u0443\u044E \u043C\u0443\u0437\u044B\u043A\u0443");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, BandsComponent_div_10_Template, 2, 1, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, BandsComponent_ng_container_11_Template, 1, 0, "ng-container", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, BandsComponent_app_band_popup_12_Template, 1, 2, "app-band-popup", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, BandsComponent_ng_template_13_Template, 4, 1, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, BandsComponent_ng_template_15_Template, 1, 1, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isMobileView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMobileView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isMobileView);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isMobileView)("ngIfThen", _r7)("ngIfElse", _r5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isPreviewOpened);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _band_popup_band_popup_component__WEBPACK_IMPORTED_MODULE_2__["BandPopupComponent"], _band_item_band_item_component__WEBPACK_IMPORTED_MODULE_3__["BandItemComponent"], _band_item_horizontal_band_item_horizontal_component__WEBPACK_IMPORTED_MODULE_4__["BandItemHorizontalComponent"]], pipes: [_pipes_bands_genre_pipe__WEBPACK_IMPORTED_MODULE_5__["BandsGenrePipe"]], styles: ["@font-face {\n  font-family: \"Code Pro LC\";\n  src: url('Code_Pro_LC.ttf');\n}\n@font-face {\n  font-family: \"Code Pro Bold\";\n  src: url('Code_Pro_Bold.ttf');\n}\n@font-face {\n  font-family: \"Code Pro Bold LC\";\n  src: url('Code_Pro_Bold_LC.ttf');\n}\n@font-face {\n  font-family: \"Code Pro LC\";\n  src: url('Code_Pro_LC.ttf');\n}\n@font-face {\n  font-family: \"Code Pro Light\";\n  src: url('Code_Pro_Light.ttf');\n}\n@font-face {\n  font-family: \"Code Pro Light LC\";\n  src: url('Code_Pro_Light_LC.ttf');\n}\n@font-face {\n  font-family: \"Code Pro\";\n  src: url('Code_Pro.ttf');\n}\n[_nghost-%COMP%] {\n  width: 1430px;\n}\n@media screen and (max-width: 1430px) {\n  [_nghost-%COMP%] {\n    width: 100%;\n  }\n}\n.bands[_ngcontent-%COMP%] {\n  width: 1430px;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: row;\n  margin-top: 120px;\n}\n.bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  flex-direction: column;\n  width: 30%;\n  height: 100%;\n  flex-shrink: 0;\n  padding-left: 130px;\n  box-sizing: border-box;\n  margin-top: 76px;\n}\n.bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  flex-direction: column;\n}\n.bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  margin-bottom: 46px;\n}\n.bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-bottom: 58px;\n}\n.bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .genres[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #484849;\n  margin-bottom: 20px;\n  cursor: pointer;\n}\n.bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .genres__item_active[_ngcontent-%COMP%] {\n  color: #f91b1b;\n}\n.bands__list[_ngcontent-%COMP%] {\n  width: 70%;\n  flex-shrink: 0;\n  position: relative;\n}\n.bands__list[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  width: 400px;\n  height: 400px;\n  background-image: url('snow_flake.png');\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  left: -200px;\n  top: 0;\n  z-index: 0;\n}\n.bands__list[_ngcontent-%COMP%]   .scroll-content[_ngcontent-%COMP%] {\n  width: 100%;\n  flex-wrap: wrap;\n  max-height: 1840px;\n  overflow: hidden;\n  overflow-y: auto;\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  flex-direction: row;\n  padding-left: 20px;\n  box-sizing: border-box;\n  scroll-behavior: smooth;\n}\n.section[_ngcontent-%COMP%] {\n  margin-bottom: 60px;\n}\n.section__genre[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  width: 100%;\n  text-align: center;\n  font-size: 32px;\n  color: #282e35;\n  font-family: \"Code Pro Bold\";\n}\n.section__content[_ngcontent-%COMP%] {\n  width: 100%;\n  overflow: hidden;\n  padding-left: 10px;\n  padding-right: 10px;\n  box-sizing: border-box;\n}\n.section__content-scroll[_ngcontent-%COMP%] {\n  overflow-y: hidden;\n  overflow-x: auto;\n  padding: 10px 0;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  flex-direction: row;\n}\n@media screen and (max-width: 1430px) {\n  .bands[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%] {\n    padding-left: 15px;\n  }\n}\n@media screen and (max-width: 970px) {\n  .bands[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    width: 100%;\n    padding-left: 0;\n    margin-top: 0;\n  }\n  .bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%] {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n  }\n  .bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n}\n@media screen and (max-width: 767px) {\n  .bands[_ngcontent-%COMP%] {\n    margin-top: 30px;\n  }\n  .bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%] {\n    padding-left: 30px;\n    padding-right: 30px;\n  }\n  .bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    margin-bottom: 40px;\n    text-align: center;\n  }\n  .bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n  }\n}\n@media screen and (max-width: 600px) {\n  .bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%] {\n    flex-direction: column;\n    margin-top: 20px;\n  }\n  .bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n  .bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 36px;\n  }\n  .bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .genres__item[_ngcontent-%COMP%] {\n    margin-right: 25px;\n  }\n  .bands__list[_ngcontent-%COMP%] {\n    padding-left: 30px;\n    box-sizing: border-box;\n  }\n}\n@media screen and (max-width: 400px) {\n  .bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%] {\n    flex-direction: column;\n    margin-top: 20px;\n  }\n  .bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n  .bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 36px;\n  }\n  .bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .genres__item[_ngcontent-%COMP%] {\n    margin-right: 15px;\n  }\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n  height: 4px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #dfdfdf;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #f91b1b;\n  height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2JhbmRzL2JhbmRzLmNvbXBvbmVudC5zY3NzIiwic3JjL3RoZW1lL21peGlucy5zY3NzIiwic3JjL3RoZW1lL2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQUE7RUFDQSwyQkFBQTtBQ0NGO0FERUE7RUFDRSw0QkFBQTtFQUNBLDZCQUFBO0FDQUY7QURHQTtFQUNFLCtCQUFBO0VBQ0EsZ0NBQUE7QUNERjtBRElBO0VBQ0UsMEJBQUE7RUFDQSwyQkFBQTtBQ0ZGO0FES0E7RUFDRSw2QkFBQTtFQUNBLDhCQUFBO0FDSEY7QURNQTtFQUNFLGdDQUFBO0VBQ0EsaUNBQUE7QUNKRjtBRE9BO0VBQ0UsdUJBQUE7RUFDQSx3QkFBQTtBQ0xGO0FBdkJBO0VBQ0UsYUFBQTtBQXlCRjtBQXZCRTtFQUhGO0lBSUksV0FBQTtFQTBCRjtBQUNGO0FBdkJBO0VBQ0UsYUFBQTtFQ1hBLGFBQUE7RUFDQSx1QkRXeUI7RUNWekIsdUJBSHVCO0VBSXZCLG1CQUoyRDtFRGMzRCxpQkFBQTtBQTZCRjtBQTNCRTtFQ2ZBLGFBQUE7RUFDQSx1QkRlMkI7RUNkM0IsMkJEY2lEO0VDYmpELHNCRGF5RTtFQUN2RSxVQUFBO0VBQ0EsWUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUFnQ0o7QUE5Qkk7RUN4QkYsYUFBQTtFQUNBLHVCRHdCaUM7RUN2QmpDLDJCRHVCcUI7RUN0QnJCLHNCRHNCNkM7QUFtQy9DO0FBaENJO0VBQ0UsbUJBQUE7QUFrQ047QUEvQkk7RUFDRSxtQkFBQTtBQWlDTjtBQTlCSTtFQzdCRixlQURzQjtFQUV0QixjQ1RXO0VGdUNQLG1CQUFBO0VBQ0EsZUFBQTtBQWlDTjtBQTlCUTtFQUNFLGNFM0NJO0FGMkVkO0FBMUJFO0VBQ0UsVUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQTRCSjtBQTFCSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUNBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUE0Qk47QUF6Qkk7RUFDRSxXQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQ3pFSixhQUFBO0VBQ0EsdUJEeUVtRDtFQ3hFbkQsMkJEd0UrQjtFQ3ZFL0IsbUJBSjJEO0VENEV2RCxrQkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7QUE4Qk47QUF6QkE7RUFDRSxtQkFBQTtBQTRCRjtBQTFCRTtFQUNFLHlCQUFBO0VBQ0EsV0FBQTtFQUNBLGtCQUFBO0VDakZGLGVEa0ZxQjtFQ2pGckIsY0NOVztFRndGVCw0QkFBQTtBQTZCSjtBQTFCRTtFQUNFLFdBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQTRCSjtBQTFCSTtFQUNFLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxlQUFBO0VDdkdKLGFBQUE7RUFDQSxtQkFGdUM7RUFHdkMsMkJEc0dxQjtFQ3JHckIsbUJBSjJEO0FEd0k3RDtBQTNCQTtFQUNFO0lBQ0UsV0FBQTtFQThCRjtFQTVCRTtJQUNFLGtCQUFBO0VBOEJKO0FBQ0Y7QUE0QkE7RUFDRTtJQUNFLHNCQUFBO0VBMUJGO0VBNEJFO0lBQ0UsYUFBQTtJQUNBLHNCQUFBO0lBQ0EsbUJBQUE7SUFDQSxXQUFBO0lBQ0EsZUFBQTtJQUNBLGFBQUE7RUExQko7RUE0Qkk7SUFDRSxhQUFBO0lBQ0Esc0JBQUE7SUFDQSxtQkFBQTtFQTFCTjtFQTRCTTtJQUNFLGtCQUFBO0VBMUJSO0FBQ0Y7QUFnQ0E7RUFDRTtJQUNFLGdCQUFBO0VBOUJGO0VBZ0NFO0lBQ0Usa0JBQUE7SUFDQSxtQkFBQTtFQTlCSjtFQWdDSTtJQUNFLG1CQUFBO0lBQ0Esa0JBQUE7RUE5Qk47RUFpQ0k7SUFDRSxXQUFBO0lDbk5OLGFBQUE7SUFDQSxtQkFGdUM7SUFHdkMsdUJBSHVCO0lBSXZCLHNCRGlObUM7RUE1Qm5DO0FBQ0Y7QUFpQ0E7RUFFSTtJQUNFLHNCQUFBO0lBQ0EsZ0JBQUE7RUFoQ0o7RUFrQ0k7SUFDRSxtQkFBQTtFQWhDTjtFQW1DSTtJQUNFLGVBQUE7RUFqQ047RUFxQ007SUFDRSxrQkFBQTtFQW5DUjtFQXdDRTtJQUNFLGtCQUFBO0lBQ0Esc0JBQUE7RUF0Q0o7QUFDRjtBQTBDQTtFQUVJO0lBQ0Usc0JBQUE7SUFDQSxnQkFBQTtFQXpDSjtFQTJDSTtJQUNFLG1CQUFBO0VBekNOO0VBNENJO0lBQ0UsZUFBQTtFQTFDTjtFQThDTTtJQUNFLGtCQUFBO0VBNUNSO0FBQ0Y7QUFrREE7RUFDRSxVQUFBO0VBQ0EsV0FBQTtBQWhERjtBQW1EQSxVQUFBO0FBQ0E7RUFDRSxtQkFBQTtBQWhERjtBQW1EQSxXQUFBO0FBQ0E7RUFDRSxtQkV6Ulk7RUYwUlosWUFBQTtBQWhERiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmFuZHMvYmFuZHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdDb2RlIFBybyBMQyc7XG4gIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvQ29kZV9Qcm9fTEMudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0NvZGUgUHJvIEJvbGQnO1xuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0NvZGVfUHJvX0JvbGQudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0NvZGUgUHJvIEJvbGQgTEMnO1xuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0NvZGVfUHJvX0JvbGRfTEMudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0NvZGUgUHJvIExDJztcbiAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9Db2RlX1Byb19MQy50dGYnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnQ29kZSBQcm8gTGlnaHQnO1xuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0NvZGVfUHJvX0xpZ2h0LnR0ZicpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdDb2RlIFBybyBMaWdodCBMQyc7XG4gIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvQ29kZV9Qcm9fTGlnaHRfTEMudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0NvZGUgUHJvJztcbiAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9Db2RlX1Byby50dGYnKTtcbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi90aGVtZS9taXhpbnMuc2Nzc1wiO1xuQGltcG9ydCBcIi4uLy4uLy4uL3RoZW1lL2NvbG9ycy5zY3NzXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vdGhlbWUvZm9udHMuc2Nzc1wiO1xuXG46aG9zdCB7XG4gIHdpZHRoOiAgMTQzMHB4O1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0MzBweCkge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi5iYW5kcyB7XG4gIHdpZHRoOiAxNDMwcHg7XG4gIEBpbmNsdWRlIGZsZXhNaXgoJGFsaWduOiBmbGV4LXN0YXJ0KTtcbiAgbWFyZ2luLXRvcDogMTIwcHg7XG5cbiAgLmdlbnJlcy1zZWxlY3RvciB7XG4gICAgQGluY2x1ZGUgZmxleE1peCgkYWxpZ246IGZsZXgtc3RhcnQsICRqdXN0aWZ5OiBmbGV4LXN0YXJ0LCAkZGlyZWN0aW9uOiBjb2x1bW4pO1xuICAgIHdpZHRoOiAzMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIHBhZGRpbmctbGVmdDogMTMwcHg7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBtYXJnaW4tdG9wOiA3NnB4O1xuXG4gICAgLmdyb3VwIHtcbiAgICAgIEBpbmNsdWRlIGZsZXhNaXgoZmxleC1zdGFydCwgZmxleC1zdGFydCwgY29sdW1uKTtcbiAgICB9XG5cbiAgICAubG9nbyB7XG4gICAgICBtYXJnaW4tYm90dG9tOiA0NnB4O1xuICAgIH1cblxuICAgIC50aXRsZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiA1OHB4O1xuICAgIH1cblxuICAgIC5nZW5yZXMge1xuICAgICAgQGluY2x1ZGUgZm9udFN0eWxlKCRjb2xvcjogJG11dGVkLWZvbnQpO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgJl9faXRlbSB7XG4gICAgICAgICZfYWN0aXZlIHtcbiAgICAgICAgICBjb2xvcjogJGFjdGl2ZS1mb250O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJl9fbGlzdCB7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAmOmJlZm9yZSB7XG4gICAgICBjb250ZW50OiBcIlwiO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IDQwMHB4O1xuICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9zbm93X2ZsYWtlLnBuZ1wiKTtcbiAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgbGVmdDogLTIwMHB4O1xuICAgICAgdG9wOiAwO1xuICAgICAgei1pbmRleDogMDtcbiAgICB9XG5cbiAgICAuc2Nyb2xsLWNvbnRlbnQge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICBtYXgtaGVpZ2h0OiAxODQwcHg7XG4gICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICAgIEBpbmNsdWRlIGZsZXhNaXgoJGp1c3RpZnk6IGZsZXgtc3RhcnQsICRhbGlnbjogZmxleC1zdGFydCk7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XG4gICAgfVxuICB9XG59XG5cbi5zZWN0aW9uIHtcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcblxuICAmX19nZW5yZSB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgQGluY2x1ZGUgZm9udFN0eWxlKDMycHgsICRkYXJrLWNvbG9yKTtcbiAgICBmb250LWZhbWlseTogXCJDb2RlIFBybyBCb2xkXCI7XG4gIH1cblxuICAmX19jb250ZW50IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgICAmLXNjcm9sbCB7XG4gICAgICBvdmVyZmxvdy15OiBoaWRkZW47XG4gICAgICBvdmVyZmxvdy14OiBhdXRvO1xuICAgICAgcGFkZGluZzogMTBweCAwO1xuICAgICAgQGluY2x1ZGUgZmxleE1peChmbGV4LXN0YXJ0KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0MzBweCkge1xuICAuYmFuZHMge1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgLmdlbnJlcy1zZWxlY3RvciB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gICAgfVxuICB9XG59XG5cbi8vIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0MzBweCkge1xuLy8gICAuYmFuZHMge1xuLy8gICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgIC8vIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbi8vICAgICAuZ2VucmVzLXNlbGVjdG9yIHtcbi8vICAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcbi8vICAgICB9XG5cbi8vICAgICAmX19saXN0IHtcbi8vICAgICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgIH1cbi8vICAgfVxuLy8gfVxuXG4vLyBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDMwcHgpIHtcbi8vICAgLmJhbmRzIHtcbi8vICAgICB3aWR0aDogMTAwJTtcbi8vICAgICAvLyBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuLy8gICAgIG1hcmdpbi10b3A6IDgwcHg7XG5cbi8vICAgICAuZ2VucmVzLXNlbGVjdG9yIHtcbi8vICAgICAgIHdpZHRoOiAxMDAlO1xuLy8gICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbi8vICAgICAgIHBhZGRpbmctbGVmdDogMzBweDtcblxuLy8gICAgICAgLmdyb3VwIHtcbi8vICAgICAgICAgQGluY2x1ZGUgZmxleE1peChmbGV4LXN0YXJ0LCBjZW50ZXIsIHJvdyk7XG4vLyAgICAgICB9XG5cbi8vICAgICAgIC50ZXh0IHtcbi8vICAgICAgICAgZGlzcGxheTogbm9uZTtcbi8vICAgICAgIH1cblxuLy8gICAgICAgLmxvZ28ge1xuLy8gICAgICAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG4vLyAgICAgICB9XG5cbi8vICAgICAgIC5nZW5yZXMge1xuLy8gICAgICAgICBAaW5jbHVkZSBmbGV4TWl4O1xuLy8gICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuXG4vLyAgICAgICAgICZfX2l0ZW0ge1xuLy8gICAgICAgICAgIG1hcmdpbi1yaWdodDogNDBweDtcbi8vICAgICAgICAgfVxuLy8gICAgICAgfVxuLy8gICAgIH1cblxuLy8gICAgICZfX2xpc3Qge1xuLy8gICAgICAgd2lkdGg6IDEwMCU7XG4vLyAgICAgfVxuLy8gICB9XG4vLyB9XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk3MHB4KSB7XG4gIC5iYW5kcyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIC5nZW5yZXMtc2VsZWN0b3Ige1xuICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICBtYXJnaW4tdG9wOiAwO1xuXG4gICAgICAuZ3JvdXAge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5iYW5kcyB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcblxuICAgIC5nZW5yZXMtc2VsZWN0b3Ige1xuICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcblxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAuZ3JvdXAge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgQGluY2x1ZGUgZmxleE1peCgkZGlyZWN0aW9uOiBjb2x1bW4pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICAuYmFuZHMge1xuICAgIC5nZW5yZXMtc2VsZWN0b3Ige1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG5cbiAgICAgIC5sb2dvIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIH1cblxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgfVxuXG4gICAgICAuZ2VucmVzIHtcbiAgICAgICAgJl9faXRlbSB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgJl9fbGlzdCB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0MDBweCkge1xuICAuYmFuZHMge1xuICAgIC5nZW5yZXMtc2VsZWN0b3Ige1xuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG5cbiAgICAgIC5sb2dvIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIH1cblxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgfVxuXG4gICAgICAuZ2VucmVzIHtcbiAgICAgICAgJl9faXRlbSB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNHB4O1xuICBoZWlnaHQ6IDRweDtcbn1cblxuLyogVHJhY2sgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiAjZGZkZmRmO1xufVxuXG4vKiBIYW5kbGUgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAkYWN0aXZlLWZvbnQ7XG4gIGhlaWdodDogNDBweDtcbn1cbiIsIlxuQG1peGluIGZsZXhNaXgoJGp1c3RpZnk6IGNlbnRlciwgJGFsaWduOiBjZW50ZXIsICRkaXJlY3Rpb246IHJvdykge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogJGFsaWduO1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcbn1cblxuQG1peGluIGZvbnRTdHlsZSgkc2l6ZTogMThweCwgJGNvbG9yOiAkbWFpbi1mb250KSB7XG4gIGZvbnQtc2l6ZTogJHNpemU7XG4gIGNvbG9yOiAkY29sb3I7XG59XG4iLCIkbWFpbi1mb250OiAjMDAwMDAwO1xuJG11dGVkLWZvbnQ6ICM0ODQ4NDk7XG4kYWN0aXZlLWZvbnQ6ICNmOTFiMWI7XG4kb2RkLWJhY2tncm91bmQ6ICNmMGYwZjA7XG4kZGFyay1jb2xvcjogIzI4MmUzNTtcbiRtZWRpdW0tY29sb3I6ICMyZTM0M2E7XG4kbGlnaHQtY29sb3I6ICNmMGYwZjA7XG4iXX0= */"] });
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
        }], allBands: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectedGenreId: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], changeGenre: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"]
        }], scrollContentRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['scrollContent', { static: false }]
        }], onResize: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:resize', ['$event']]
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
/* harmony import */ var _pipes_cut_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../pipes/cut.pipe */ "b3iq");






class ContentCardComponent {
    constructor() {
        this.side = src_app_contsants_side_enum__WEBPACK_IMPORTED_MODULE_1__["SIDE"].LEFT;
        this.sides = src_app_contsants_side_enum__WEBPACK_IMPORTED_MODULE_1__["SIDE"];
    }
    ngOnInit() {
        this.genreLogo = this.getGenreLogo();
        // this.poster = this.getPoster();
    }
    getGenreLogo() {
        const logoUrl = `assets/logo_${this.content.genre}.png`;
        return logoUrl;
    }
}
ContentCardComponent.ɵfac = function ContentCardComponent_Factory(t) { return new (t || ContentCardComponent)(); };
ContentCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContentCardComponent, selectors: [["app-content-card"]], inputs: { content: "content", side: "side" }, decls: 14, vars: 10, consts: [[1, "card"], [1, "card__video"], [3, "url", "controls", "autoplay"], ["src", "assets/snow_flake.png", "alt", "", 1, "snow-flake"], [1, "card__data"], [1, "card__data-content", 3, "data"], [1, "container"], [1, "card__data-text"], [1, "card__data-text", "card__data-text_red"], [1, "card__data-additional"]], template: function ContentCardComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](11, "appCutPipe");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](".", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](11, 8, ctx.content.genre), "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.content.text);
    } }, directives: [_player_player_component__WEBPACK_IMPORTED_MODULE_2__["PlayerComponent"], _band_logo_band_logo_component__WEBPACK_IMPORTED_MODULE_3__["BandLogoComponent"]], pipes: [_pipes_cut_pipe__WEBPACK_IMPORTED_MODULE_4__["CutPipe"]], styles: ["@font-face {\n  font-family: \"Code Pro LC\";\n  src: url('Code_Pro_LC.ttf');\n}\n@font-face {\n  font-family: \"Code Pro Bold\";\n  src: url('Code_Pro_Bold.ttf');\n}\n@font-face {\n  font-family: \"Code Pro Bold LC\";\n  src: url('Code_Pro_Bold_LC.ttf');\n}\n@font-face {\n  font-family: \"Code Pro LC\";\n  src: url('Code_Pro_LC.ttf');\n}\n@font-face {\n  font-family: \"Code Pro Light\";\n  src: url('Code_Pro_Light.ttf');\n}\n@font-face {\n  font-family: \"Code Pro Light LC\";\n  src: url('Code_Pro_Light_LC.ttf');\n}\n@font-face {\n  font-family: \"Code Pro\";\n  src: url('Code_Pro.ttf');\n}\n.card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  width: 1430px;\n  margin-bottom: 100px;\n}\n.card_reverse[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.card_reverse[_ngcontent-%COMP%]   .snow-flake[_ngcontent-%COMP%] {\n  left: -25%;\n}\n.card__video[_ngcontent-%COMP%] {\n  position: relative;\n  width: 55%;\n  flex-shrink: 0;\n}\n.card__video[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n  z-index: 1;\n}\n.card__video[_ngcontent-%COMP%]   .snow-flake[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: -25%;\n  height: 100%;\n}\n.card__video-content[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.card__data[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: column;\n  width: 30%;\n  flex-shrink: 0;\n  padding-left: 110px;\n  box-sizing: border-box;\n  text-transform: uppercase;\n}\n.card__data[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: column;\n  margin-top: 45px;\n}\n.card__data-text[_ngcontent-%COMP%] {\n  color: #000000;\n  font-size: 36px;\n  font-family: \"Code Pro\";\n}\n.card__data-text_red[_ngcontent-%COMP%] {\n  color: #f91b1b;\n}\n.card__data-additional[_ngcontent-%COMP%] {\n  font-family: \"Code Pro Light\";\n  color: #484849;\n  font-size: 32px;\n  margin-top: 45px;\n}\n@media screen and (max-width: 1430px) {\n  .card[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .card__data[_ngcontent-%COMP%] {\n    padding-left: 30px;\n  }\n}\n@media screen and (max-width: 878px) {\n  .card[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n  .card__video[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .card__video[_ngcontent-%COMP%]   .snow-flake[_ngcontent-%COMP%] {\n    left: 25%;\n    top: -40%;\n    width: 50%;\n  }\n  .card__data[_ngcontent-%COMP%] {\n    width: 90%;\n    flex-direction: row;\n    align-items: center;\n    margin-bottom: 20px;\n    padding-left: 0;\n  }\n  .card__data-text[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n  .card__data-additional[_ngcontent-%COMP%] {\n    font-size: 16px;\n    margin-top: 15px;\n    font-family: \"Code Pro\";\n  }\n  .card__data[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    margin-left: 30px;\n    margin-top: 0;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvbnRlbnQtY2FyZC9jb250ZW50LWNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvdGhlbWUvbWl4aW5zLnNjc3MiLCJzcmMvdGhlbWUvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBQTtFQUNBLDJCQUFBO0FDQ0Y7QURFQTtFQUNFLDRCQUFBO0VBQ0EsNkJBQUE7QUNBRjtBREdBO0VBQ0UsK0JBQUE7RUFDQSxnQ0FBQTtBQ0RGO0FESUE7RUFDRSwwQkFBQTtFQUNBLDJCQUFBO0FDRkY7QURLQTtFQUNFLDZCQUFBO0VBQ0EsOEJBQUE7QUNIRjtBRE1BO0VBQ0UsZ0NBQUE7RUFDQSxpQ0FBQTtBQ0pGO0FET0E7RUFDRSx1QkFBQTtFQUNBLHdCQUFBO0FDTEY7QUF2QkE7RUNGRSxhQUFBO0VBQ0EsbUJBRnVDO0VBR3ZDLHVCQUh1QjtFQUl2QixtQkFKMkQ7RURLM0QsYUFBQTtFQUNBLG9CQUFBO0FBNEJGO0FBMUJFO0VBQ0UsMkJBQUE7QUE0Qko7QUExQkk7RUFDRSxVQUFBO0FBNEJOO0FBeEJFO0VBQ0Usa0JBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQTBCSjtBQXhCSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUEwQk47QUF2Qkk7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQXlCTjtBQXRCSTtFQUNFLFdBQUE7QUF3Qk47QUFwQkU7RUN0Q0EsYUFBQTtFQUNBLHVCRHNDMkI7RUNyQzNCLHVCQUh1QjtFQUl2QixzQkRvQ21EO0VBQ2pELFVBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLHlCQUFBO0FBeUJKO0FBdkJJO0VDOUNGLGFBQUE7RUFDQSx1QkQ4QzZCO0VDN0M3Qix1QkFIdUI7RUFJdkIsc0JENENxRDtFQUNqRCxnQkFBQTtBQTRCTjtBQXpCSTtFQUNFLGNFdERNO0VGdUROLGVBQUE7RUFDQSx1QkFBQTtBQTJCTjtBQXpCTTtFQUNFLGNFekRNO0FGb0ZkO0FBdkJJO0VBQ0UsNkJBQUE7RUFDQSxjRWhFTztFRmlFUCxlQUFBO0VBQ0EsZ0JBQUE7QUF5Qk47QUFwQkE7RUFDRTtJQUNFLFdBQUE7RUF1QkY7RUFyQkU7SUFDRSxrQkFBQTtFQXVCSjtBQUNGO0FBbkJBO0VBQ0U7SUFDRSw4QkFBQTtFQXFCRjtFQW5CRTtJQUNFLFdBQUE7RUFxQko7RUFuQkk7SUFDRSxTQUFBO0lBQ0EsU0FBQTtJQUNBLFVBQUE7RUFxQk47RUFqQkU7SUFDRSxVQUFBO0lBQ0EsbUJBQUE7SUFDQSxtQkFBQTtJQUNBLG1CQUFBO0lBQ0EsZUFBQTtFQW1CSjtFQWpCSTtJQUNFLGVBQUE7RUFtQk47RUFoQkk7SUFDRSxlQUFBO0lBQ0EsZ0JBQUE7SUFDQSx1QkFBQTtFQWtCTjtFQWZJO0lBQ0UsaUJBQUE7SUFDQSxhQUFBO0VBaUJOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRlbnQtY2FyZC9jb250ZW50LWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdDb2RlIFBybyBMQyc7XG4gIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvQ29kZV9Qcm9fTEMudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0NvZGUgUHJvIEJvbGQnO1xuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0NvZGVfUHJvX0JvbGQudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0NvZGUgUHJvIEJvbGQgTEMnO1xuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0NvZGVfUHJvX0JvbGRfTEMudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0NvZGUgUHJvIExDJztcbiAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9Db2RlX1Byb19MQy50dGYnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnQ29kZSBQcm8gTGlnaHQnO1xuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0NvZGVfUHJvX0xpZ2h0LnR0ZicpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdDb2RlIFBybyBMaWdodCBMQyc7XG4gIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvQ29kZV9Qcm9fTGlnaHRfTEMudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0NvZGUgUHJvJztcbiAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9Db2RlX1Byby50dGYnKTtcbn1cbiIsIkBpbXBvcnQgXCIuLi8uLi8uLi90aGVtZS9taXhpbnMuc2Nzc1wiO1xuQGltcG9ydCBcIi4uLy4uLy4uL3RoZW1lL2NvbG9ycy5zY3NzXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vdGhlbWUvZm9udHMuc2Nzc1wiO1xuXG4uY2FyZCB7XG4gIEBpbmNsdWRlIGZsZXhNaXg7XG4gIHdpZHRoOiAxNDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xuXG4gICZfcmV2ZXJzZSB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xuXG4gICAgLnNub3ctZmxha2Uge1xuICAgICAgbGVmdDogLTI1JTtcbiAgICB9XG4gIH1cblxuICAmX192aWRlbyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiA1NSU7XG4gICAgZmxleC1zaHJpbms6IDA7XG5cbiAgICB2aWRlbyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgfVxuXG4gICAgLnNub3ctZmxha2Uge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAwO1xuICAgICAgcmlnaHQ6IC0yNSU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgfVxuXG4gICAgJi1jb250ZW50IHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxuXG4gICZfX2RhdGEge1xuICAgIEBpbmNsdWRlIGZsZXhNaXgoJGFsaWduOiBmbGV4LXN0YXJ0LCAkZGlyZWN0aW9uOiBjb2x1bW4pO1xuICAgIHdpZHRoOiAzMCU7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgcGFkZGluZy1sZWZ0OiAxMTBweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cbiAgICAuY29udGFpbmVyIHtcbiAgICAgIEBpbmNsdWRlIGZsZXhNaXgoJGFsaWduOiBmbGV4LXN0YXJ0LCAkZGlyZWN0aW9uOiBjb2x1bW4pO1xuICAgICAgbWFyZ2luLXRvcDogNDVweDtcbiAgICB9XG5cbiAgICAmLXRleHQge1xuICAgICAgY29sb3I6ICRtYWluLWZvbnQ7XG4gICAgICBmb250LXNpemU6IDM2cHg7XG4gICAgICBmb250LWZhbWlseTogXCJDb2RlIFByb1wiO1xuXG4gICAgICAmX3JlZCB7XG4gICAgICAgIGNvbG9yOiAkYWN0aXZlLWZvbnQ7XG4gICAgICB9XG4gICAgfVxuXG4gICAgJi1hZGRpdGlvbmFsIHtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIkNvZGUgUHJvIExpZ2h0XCI7XG4gICAgICBjb2xvcjogJG11dGVkLWZvbnQ7XG4gICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICBtYXJnaW4tdG9wOiA0NXB4O1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDMwcHgpIHtcbiAgLmNhcmQge1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgJl9fZGF0YSB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg3OHB4KSB7XG4gIC5jYXJkIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uLXJldmVyc2U7XG5cbiAgICAmX192aWRlbyB7XG4gICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgLnNub3ctZmxha2Uge1xuICAgICAgICBsZWZ0OiAyNSU7XG4gICAgICAgIHRvcDogLTQwJTtcbiAgICAgICAgd2lkdGg6IDUwJTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmX19kYXRhIHtcbiAgICAgIHdpZHRoOiA5MCU7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDA7XG5cbiAgICAgICYtdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICAgIH1cblxuICAgICAgJi1hZGRpdGlvbmFsIHtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xuICAgICAgICBmb250LWZhbWlseTogJ0NvZGUgUHJvJztcbiAgICAgIH1cblxuICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiXG5AbWl4aW4gZmxleE1peCgkanVzdGlmeTogY2VudGVyLCAkYWxpZ246IGNlbnRlciwgJGRpcmVjdGlvbjogcm93KSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiAkYWxpZ247XG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XG4gIGZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xufVxuXG5AbWl4aW4gZm9udFN0eWxlKCRzaXplOiAxOHB4LCAkY29sb3I6ICRtYWluLWZvbnQpIHtcbiAgZm9udC1zaXplOiAkc2l6ZTtcbiAgY29sb3I6ICRjb2xvcjtcbn1cbiIsIiRtYWluLWZvbnQ6ICMwMDAwMDA7XG4kbXV0ZWQtZm9udDogIzQ4NDg0OTtcbiRhY3RpdmUtZm9udDogI2Y5MWIxYjtcbiRvZGQtYmFja2dyb3VuZDogI2YwZjBmMDtcbiRkYXJrLWNvbG9yOiAjMjgyZTM1O1xuJG1lZGl1bS1jb2xvcjogIzJlMzQzYTtcbiRsaWdodC1jb2xvcjogI2YwZjBmMDtcbiJdfQ== */"] });
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
function PlayerComponent_div_5_ng_container_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainer"](0);
} }
function PlayerComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    const _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PlayerComponent_div_5_ng_container_2_Template, 1, 0, "ng-container", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "app-sound-range", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("changeEvent", function PlayerComponent_div_5_Template_app_sound_range_changeEvent_3_listener($event) { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r7.onVolumeChange($event); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerComponent_div_5_Template_img_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r8); const ctx_r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r9.toggleFullscreen(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r1.isPlay)("ngIfThen", _r4)("ngIfElse", _r2);
} }
function PlayerComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerComponent_ng_template_6_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r11); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.togglePlay(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function PlayerComponent_ng_template_8_Template(rf, ctx) { if (rf & 1) {
    const _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PlayerComponent_ng_template_8_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13); const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r12.togglePlay(); });
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
    } }, inputs: { url: "url", autoplay: "autoplay", controls: "controls", isFullscreen: "isFullscreen" }, decls: 10, vars: 3, consts: [[1, "wrapper"], [1, "loader-wrapper"], [1, "loader"], ["playsinline", "", 1, "player"], ["player", ""], ["class", "controls", 4, "ngIf"], ["play", ""], ["pause", ""], [1, "controls"], [1, "controls__group"], [4, "ngIf", "ngIfThen", "ngIfElse"], [3, "changeEvent"], ["src", "assets/fullscreen.png", "alt", "", 3, "click"], ["src", "assets/play.png", "alt", "", 3, "click"], ["src", "assets/pause.png", "alt", "", 3, "click"]], template: function PlayerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "video", 3, 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, PlayerComponent_div_5_Template, 5, 3, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, PlayerComponent_ng_template_6_Template, 1, 0, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, PlayerComponent_ng_template_8_Template, 1, 0, "ng-template", null, 7, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("wrapper_fullscreen", ctx.isFullscreen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.controls);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _sound_range_sound_range_component__WEBPACK_IMPORTED_MODULE_3__["SoundRangeComponent"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  z-index: 2;\n  object-fit: contain;\n}\n.wrapper_fullscreen[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1000;\n  left: 0;\n  top: 0;\n  height: 100vh;\n  background-color: black;\n  object-fit: contain;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n}\n.wrapper[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 75px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: row;\n  padding: 0 25px;\n  position: absolute;\n  z-index: 2;\n  left: 0;\n  bottom: 6px;\n  box-sizing: border-box;\n  background: linear-gradient(to top, rgba(0, 0, 0, 0.4), transparent);\n}\n.wrapper[_ngcontent-%COMP%]   .controls__group[_ngcontent-%COMP%] {\n  width: 130px;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: row;\n}\n.wrapper[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 20px;\n  cursor: pointer;\n}\n.wrapper[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  z-index: 2;\n  position: relative;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wbGF5ZXIvcGxheWVyLmNvbXBvbmVudC5zY3NzIiwic3JjL3RoZW1lL21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtBQURGO0FBR0U7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUNkRixhQUFBO0VBQ0EsbUJBRnVDO0VBR3ZDLHVCQUh1QjtFQUl2QixtQkFKMkQ7QURrQjdEO0FBQ0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQ3BCRixhQUFBO0VBQ0EsbUJBRnVDO0VBR3ZDLDhCRG1CNkI7RUNsQjdCLG1CQUoyRDtFRHVCekQsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLE9BQUE7RUFDQSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSxvRUFBQTtBQUlKO0FBRkk7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQ2hDSixhQUFBO0VBQ0EsbUJBRnVDO0VBR3ZDLDhCRCtCK0I7RUM5Qi9CLG1CQUoyRDtBRHlDN0Q7QUFKSTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FBTU47QUFERTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBR0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3BsYXllci9wbGF5ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi90aGVtZS9taXhpbnMuc2Nzcyc7XG5cbi53cmFwcGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAyO1xuICBvYmplY3QtZml0OiBjb250YWluO1xuXG4gICZfZnVsbHNjcmVlbiB7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHotaW5kZXg6IDEwMDA7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgICBvYmplY3QtZml0OiBjb250YWluO1xuICAgIEBpbmNsdWRlIGZsZXhNaXg7XG4gIH1cblxuICAuY29udHJvbHMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNzVweDtcbiAgICBAaW5jbHVkZSBmbGV4TWl4KCRqdXN0aWZ5OiBzcGFjZS1iZXR3ZWVuKTtcbiAgICBwYWRkaW5nOiAwIDI1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDI7XG4gICAgbGVmdDogMDtcbiAgICBib3R0b206IDZweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byB0b3AsIHJnYmEoMCwgMCwgMCwgLjQpLCB0cmFuc3BhcmVudCk7XG5cbiAgICAmX19ncm91cCB7XG4gICAgICB3aWR0aDogMTMwcHg7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBAaW5jbHVkZSBmbGV4TWl4KCRqdXN0aWZ5OiBzcGFjZS1iZXR3ZWVuKTtcbiAgICB9XG5cbiAgICBpbWcge1xuICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgIH1cbiAgfVxuXG5cbiAgLnBsYXllciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHotaW5kZXg6IDI7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB9XG59XG4iLCJcbkBtaXhpbiBmbGV4TWl4KCRqdXN0aWZ5OiBjZW50ZXIsICRhbGlnbjogY2VudGVyLCAkZGlyZWN0aW9uOiByb3cpIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6ICRhbGlnbjtcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcbiAgZmxleC1kaXJlY3Rpb246ICRkaXJlY3Rpb247XG59XG5cbkBtaXhpbiBmb250U3R5bGUoJHNpemU6IDE4cHgsICRjb2xvcjogJG1haW4tZm9udCkge1xuICBmb250LXNpemU6ICRzaXplO1xuICBjb2xvcjogJGNvbG9yO1xufVxuIl19 */"] });
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "qCKp");




class PlayerService {
    constructor() {
        this.loadCounter$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.counter = 0;
    }
    playUrl(url, videoTag, autoplay = true) {
        if (navigator.userAgent.includes('iPhone')) {
            this.iPhonePlayer(url, videoTag, autoplay);
        }
        else {
            this.standartPlayer(url, videoTag, autoplay);
        }
    }
    iPhonePlayer(url, videoTag, autoplay) {
        this.addLoader();
        videoTag.src = url;
        videoTag.muted = true;
        videoTag.play();
        videoTag.onloadedmetadata = () => {
            this.removeLoader();
            if (!autoplay) {
                setTimeout(() => {
                    videoTag.pause();
                    videoTag.muted = false;
                }, 200);
            }
        };
    }
    standartPlayer(url, videoTag, autoplay) {
        this.addLoader();
        const hls = new hls_js__WEBPACK_IMPORTED_MODULE_1__();
        hls.loadSource(url);
        hls.attachMedia(videoTag);
        videoTag.onloadedmetadata = () => {
            this.removeLoader();
            if (autoplay) {
                videoTag.muted = true;
                videoTag.play();
            }
        };
    }
    addLoader() {
        this.counter++;
        this.loadCounter$.next(this.counter);
    }
    removeLoader() {
        setTimeout(() => {
            this.counter--;
            this.loadCounter$.next(this.counter);
        }, 100);
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
    } }, directives: [_banner_player_banner_player_component__WEBPACK_IMPORTED_MODULE_1__["BannerPlayerComponent"]], styles: [".banner[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 130px;\n}\n\n@media screen and (max-width: 878px) {\n  .banner[_ngcontent-%COMP%] {\n    margin-bottom: 60px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9iYW5uZXIvYmFubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtBQUZGOztBQUtBO0VBQ0U7SUFDRSxtQkFBQTtFQUZGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Jhbm5lci9iYW5uZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi90aGVtZS9taXhpbnMuc2Nzcyc7XG5AaW1wb3J0ICcuLi8uLi8uLi90aGVtZS9jb2xvcnMuc2Nzcyc7XG5cbi5iYW5uZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi1ib3R0b206IDEzMHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4NzhweCkge1xuICAuYmFubmVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiA2MHB4O1xuICB9XG5cbn1cblxuIl19 */"] });
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
/* harmony import */ var _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular-slider/ngx-slider */ "mgaL");
/* harmony import */ var _components_band_item_horizontal_band_item_horizontal_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./components/band-item-horizontal/band-item-horizontal.component */ "j1pL");
/* harmony import */ var _pipes_bands_genre_pipe__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pipes/bands-genre.pipe */ "aLj3");
/* harmony import */ var _pipes_cut_pipe__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pipes/cut.pipe */ "b3iq");

































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
        _components_sound_range_sound_range_component__WEBPACK_IMPORTED_MODULE_26__["SoundRangeComponent"],
        _components_band_item_horizontal_band_item_horizontal_component__WEBPACK_IMPORTED_MODULE_28__["BandItemHorizontalComponent"],
        _pipes_bands_genre_pipe__WEBPACK_IMPORTED_MODULE_29__["BandsGenrePipe"],
        _pipes_cut_pipe__WEBPACK_IMPORTED_MODULE_30__["CutPipe"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
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
                    _components_sound_range_sound_range_component__WEBPACK_IMPORTED_MODULE_26__["SoundRangeComponent"],
                    _components_band_item_horizontal_band_item_horizontal_component__WEBPACK_IMPORTED_MODULE_28__["BandItemHorizontalComponent"],
                    _pipes_bands_genre_pipe__WEBPACK_IMPORTED_MODULE_29__["BandsGenrePipe"],
                    _pipes_cut_pipe__WEBPACK_IMPORTED_MODULE_30__["CutPipe"]
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
/* harmony import */ var src_app_services_player_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/player.service */ "QIP1");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/header/header.component */ "2MiI");
/* harmony import */ var _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/banner/banner.component */ "XRsc");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_bands_bands_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/bands/bands.component */ "HxBr");
/* harmony import */ var _components_support_person_group_support_person_group_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../components/support-person-group/support-person-group.component */ "s76a");
/* harmony import */ var _components_subscription_subscription_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../components/subscription/subscription.component */ "VK4e");
/* harmony import */ var _components_support_company_group_support_company_group_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../components/support-company-group/support-company-group.component */ "ioDe");
/* harmony import */ var _components_content_card_content_card_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../components/content-card/content-card.component */ "Js2f");
/* harmony import */ var _components_spasibo_popup_spasibo_popup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../components/spasibo-popup/spasibo-popup.component */ "ohcA");




















function MainComponent_app_content_card_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](0, "app-content-card", 11);
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const even_r4 = ctx.even;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("id", item_r3.genre)("content", item_r3)("side", even_r4 ? ctx_r0.sides.LEFT : ctx_r0.sides.RIGHT);
} }
function MainComponent_app_spasibo_popup_13_Template(rf, ctx) { if (rf & 1) {
    const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "app-spasibo-popup", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("closeEvent", function MainComponent_app_spasibo_popup_13_Template_app_spasibo_popup_closeEvent_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵrestoreView"](_r6); const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵnextContext"](); return ctx_r5.closeSpasiboModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
function MainComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](1, "div", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](2, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
} }
class MainComponent {
    constructor(dataService, activatedRoute, playerService) {
        this.dataService = dataService;
        this.activatedRoute = activatedRoute;
        this.playerService = playerService;
        this.contentCards = _contsants_content_cards_constants__WEBPACK_IMPORTED_MODULE_3__["CONTENT_CARDS"];
        this.sides = src_app_contsants_side_enum__WEBPACK_IMPORTED_MODULE_2__["SIDE"];
        this.genres = _constants_genres_constants__WEBPACK_IMPORTED_MODULE_6__["GENRES_LIST"];
        this.allBands = [];
        this.filteredBands = [];
        this.activeGenreId = 1;
        this.supportCompanies = _constants_support_companies_constants__WEBPACK_IMPORTED_MODULE_5__["SUPPORT_COMPANIES"];
    }
    ngOnInit() {
        this.loadCounter$ = this.playerService.loadCounter$;
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
MainComponent.ɵfac = function MainComponent_Factory(t) { return new (t || MainComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_player_service__WEBPACK_IMPORTED_MODULE_9__["PlayerService"])); };
MainComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({ type: MainComponent, selectors: [["app-main"]], decls: 16, vars: 13, consts: [[1, "wrapper"], [3, "id", "content", "side", 4, "ngFor", "ngForOf"], ["id", "musicions", 1, "wrapper", "wrapper_odd"], [3, "selectedGenreId", "genres", "allBands", "bands", "changeGenre"], ["id", "donates", 1, "wrapper"], [3, "supportPersons"], ["id", "subscriptions", 1, "wrapper"], ["id", "companies", 1, "wrapper"], [3, "supportCompanies", "openEvent"], [3, "closeEvent", 4, "ngIf"], ["class", "load-layout", 4, "ngIf"], [3, "id", "content", "side"], [3, "closeEvent"], [1, "load-layout"], [1, "loader-wrapper"], [1, "loader"]], template: function MainComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](14, MainComponent_div_14_Template, 3, 0, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipe"](15, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.contentCards);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("selectedGenreId", ctx.activeGenreId)("genres", ctx.genres)("allBands", ctx.allBands)("bands", ctx.filteredBands);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("supportPersons", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](8, 9, ctx.supportPersons));
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("supportCompanies", ctx.supportCompanies);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", ctx.isShowSpasiboModal);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵpipeBind1"](15, 11, ctx.loadCounter$) !== 0);
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_10__["HeaderComponent"], _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_11__["BannerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _components_bands_bands_component__WEBPACK_IMPORTED_MODULE_13__["BandsComponent"], _components_support_person_group_support_person_group_component__WEBPACK_IMPORTED_MODULE_14__["SupportPersonGroupComponent"], _components_subscription_subscription_component__WEBPACK_IMPORTED_MODULE_15__["SubscriptionComponent"], _components_support_company_group_support_company_group_component__WEBPACK_IMPORTED_MODULE_16__["SupportCompanyGroupComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _components_content_card_content_card_component__WEBPACK_IMPORTED_MODULE_17__["ContentCardComponent"], _components_spasibo_popup_spasibo_popup_component__WEBPACK_IMPORTED_MODULE_18__["SpasiboPopupComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["AsyncPipe"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n.wrapper_odd[_ngcontent-%COMP%] {\n  background: #f0f0f0;\n}\n.load-layout[_ngcontent-%COMP%] {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100vh;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  z-index: 1000;\n  background-color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9tYWluL21haW4uY29tcG9uZW50LnNjc3MiLCJzcmMvdGhlbWUvbWl4aW5zLnNjc3MiLCJzcmMvdGhlbWUvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBSUE7RUNGRSxhQUFBO0VBQ0EsbUJBRnVDO0VBR3ZDLHVCQUh1QjtFQUl2QixzQkFBQTtBREFGO0FBRUU7RUFDRSxtQkVMYTtBRktqQjtBQUlBO0VBQ0UsZUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUNmQSxhQUFBO0VBQ0EsbUJBRnVDO0VBR3ZDLHVCQUh1QjtFQUl2QixtQkFKMkQ7RURrQjNELGFBQUE7RUFDQSx1QkFBQTtBQUVGIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9tYWluL21haW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi90aGVtZS9taXhpbnMuc2Nzcyc7XG5AaW1wb3J0ICcuLi8uLi8uLi90aGVtZS9jb2xvcnMuc2Nzcyc7XG5cblxuLndyYXBwZXIge1xuICBAaW5jbHVkZSBmbGV4TWl4KCRkaXJlY3Rpb246IGNvbHVtbik7XG5cbiAgJl9vZGQge1xuICAgIGJhY2tncm91bmQ6ICRvZGQtYmFja2dyb3VuZDtcbiAgfVxufVxuXG4ubG9hZC1sYXlvdXQge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwdmg7XG4gIEBpbmNsdWRlIGZsZXhNaXg7XG4gIHotaW5kZXg6IDEwMDA7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuIiwiXG5AbWl4aW4gZmxleE1peCgkanVzdGlmeTogY2VudGVyLCAkYWxpZ246IGNlbnRlciwgJGRpcmVjdGlvbjogcm93KSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiAkYWxpZ247XG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XG4gIGZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xufVxuXG5AbWl4aW4gZm9udFN0eWxlKCRzaXplOiAxOHB4LCAkY29sb3I6ICRtYWluLWZvbnQpIHtcbiAgZm9udC1zaXplOiAkc2l6ZTtcbiAgY29sb3I6ICRjb2xvcjtcbn1cbiIsIiRtYWluLWZvbnQ6ICMwMDAwMDA7XG4kbXV0ZWQtZm9udDogIzQ4NDg0OTtcbiRhY3RpdmUtZm9udDogI2Y5MWIxYjtcbiRvZGQtYmFja2dyb3VuZDogI2YwZjBmMDtcbiRkYXJrLWNvbG9yOiAjMjgyZTM1O1xuJG1lZGl1bS1jb2xvcjogIzJlMzQzYTtcbiRsaWdodC1jb2xvcjogI2YwZjBmMDtcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵsetClassMetadata"](MainComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_4__["Component"],
        args: [{
                selector: 'app-main',
                templateUrl: './main.component.html',
                styleUrls: ['./main.component.scss']
            }]
    }], function () { return [{ type: _services_data_service__WEBPACK_IMPORTED_MODULE_7__["DataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"] }, { type: src_app_services_player_service__WEBPACK_IMPORTED_MODULE_9__["PlayerService"] }]; }, null); })();


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
SupportPersonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SupportPersonComponent, selectors: [["app-support-person"]], inputs: { person: "person" }, decls: 13, vars: 6, consts: [[1, "person"], [1, "person__avatar"], [1, "info"], [1, "person__status"], [1, "name"], [1, "role"], [1, "text", "text_small"], [1, "person__pay"]], template: function SupportPersonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + ctx.person.cover + ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.person.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.person.international_name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.person.description);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.person.description);
    } }, styles: [".person[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  color: white;\n  margin-bottom: 30px;\n  position: relative;\n  z-index: 1;\n}\n.person__avatar[_ngcontent-%COMP%] {\n  width: 240px;\n  height: 240px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  flex-shrink: 0;\n}\n.person[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n}\n.person__status[_ngcontent-%COMP%] {\n  width: 35%;\n  height: 240px;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: column;\n  box-sizing: border-box;\n  padding-left: 30px;\n  background-color: #282e35;\n  flex-shrink: 0;\n  text-transform: uppercase;\n}\n.person__status[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  display: none;\n}\n.person__status[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-family: \"Code Pro Bold\";\n  font-size: 20px;\n  margin-bottom: 20px;\n}\n.person__status[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #f91b1b;\n}\n.person__pay[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 240px;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: column;\n  box-sizing: border-box;\n  padding-left: 30px;\n  background-color: #2e343a;\n  padding-right: 20px;\n}\n.person__pay[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-family: \"Code Pro Bold\";\n  text-transform: uppercase;\n}\n.person__pay[_ngcontent-%COMP%]   .text_small[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.person__pay[_ngcontent-%COMP%]   .text_medium[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n@media screen and (max-width: 1024px) {\n  .person[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .person__status[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 120px;\n  }\n  .person__pay[_ngcontent-%COMP%] {\n    height: 120px;\n  }\n}\n@media screen and (max-width: 767px) {\n  .person__avatar[_ngcontent-%COMP%] {\n    width: 130px;\n    height: 150px;\n  }\n  .person__status[_ngcontent-%COMP%] {\n    width: 100%;\n    height: 150px;\n    flex-shrink: 1;\n  }\n  .person__status[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n    margin-bottom: 5px;\n  }\n  .person__status[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%] {\n    font-size: 10px;\n    margin-bottom: 10px;\n  }\n  .person__status[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    display: inline;\n    font-size: 12px;\n  }\n  .person__pay[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdXBwb3J0LXBlcnNvbi9zdXBwb3J0LXBlcnNvbi5jb21wb25lbnQuc2NzcyIsInNyYy90aGVtZS9taXhpbnMuc2NzcyIsInNyYy90aGVtZS9jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLFdBQUE7RUNGQSxhQUFBO0VBQ0EsbUJBRnVDO0VBR3ZDLHVCQUh1QjtFQUl2QixtQkFKMkQ7RURLM0QsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFDRjtBQUNFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0FBQ0o7QUFFRTtFQUNFLFdBQUE7RUNwQkYsYUFBQTtFQUNBLG1CQUZ1QztFQUd2Qyx1QkFIdUI7RUFJdkIsbUJBSjJEO0FEeUI3RDtBQUFFO0VBQ0UsVUFBQTtFQUNBLGFBQUE7RUMxQkYsYUFBQTtFQUNBLHVCRDBCMkI7RUN6QjNCLHVCQUh1QjtFQUl2QixzQkR3Qm1EO0VBQ2pELHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkU1QlM7RUY2QlQsY0FBQTtFQUNBLHlCQUFBO0FBS0o7QUFISTtFQUNFLGFBQUE7QUFLTjtBQUZJO0VBQ0UsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7QUFJTjtBQURJO0VDckNGLGVBRHNCO0VBRXRCLGNDUlk7QUZpRGQ7QUFBRTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VDbkRGLGFBQUE7RUFDQSx1QkRtRDJCO0VDbEQzQix1QkFIdUI7RUFJdkIsc0JEaURtRDtFQUNqRCxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJFcERXO0VGcURYLG1CQUFBO0FBS0o7QUFISTtFQUNFLGVBQUE7RUFDQSw0QkFBQTtFQUNBLHlCQUFBO0FBS047QUFITTtFQUNFLGVBQUE7QUFLUjtBQUZNO0VBQ0UsZUFBQTtBQUlSO0FBRUE7RUFFSTtJQUNFLHNCQUFBO0VBQUo7RUFHRTtJQUNFLFdBQUE7SUFDQSxhQUFBO0VBREo7RUFJRTtJQUNFLGFBQUE7RUFGSjtBQUNGO0FBTUE7RUFFSTtJQUNFLFlBQUE7SUFDQSxhQUFBO0VBTEo7RUFPRTtJQUNFLFdBQUE7SUFDQSxhQUFBO0lBQ0EsY0FBQTtFQUxKO0VBT0k7SUFDRSxrQkFBQTtFQUxOO0VBUUk7SUFDRSxlQUFBO0lBQ0EsbUJBQUE7RUFOTjtFQVNJO0lBQ0UsZUFBQTtJQUNBLGVBQUE7RUFQTjtFQVdFO0lBQ0UsYUFBQTtFQVRKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3N1cHBvcnQtcGVyc29uL3N1cHBvcnQtcGVyc29uLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uLy4uL3RoZW1lL21peGlucy5zY3NzXCI7XG5AaW1wb3J0IFwiLi4vLi4vLi4vdGhlbWUvY29sb3JzLnNjc3NcIjtcblxuLnBlcnNvbiB7XG4gIHdpZHRoOiAxMDAlO1xuICBAaW5jbHVkZSBmbGV4TWl4O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG5cbiAgJl9fYXZhdGFyIHtcbiAgICB3aWR0aDogMjQwcHg7XG4gICAgaGVpZ2h0OiAyNDBweDtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICB9XG5cbiAgLmluZm8ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIEBpbmNsdWRlIGZsZXhNaXg7XG4gIH1cblxuICAmX19zdGF0dXMge1xuICAgIHdpZHRoOiAzNSU7XG4gICAgaGVpZ2h0OiAyNDBweDtcbiAgICBAaW5jbHVkZSBmbGV4TWl4KCRhbGlnbjogZmxleC1zdGFydCwgJGRpcmVjdGlvbjogY29sdW1uKTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyay1jb2xvcjtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gICAgLnRleHQge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAubmFtZSB7XG4gICAgICBmb250LWZhbWlseTogJ0NvZGUgUHJvIEJvbGQnO1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG5cbiAgICAucm9sZSB7XG4gICAgICBAaW5jbHVkZSBmb250U3R5bGUoJGNvbG9yOiAkYWN0aXZlLWZvbnQpO1xuICAgIH1cbiAgfVxuXG4gICZfX3BheSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyNDBweDtcbiAgICBAaW5jbHVkZSBmbGV4TWl4KCRhbGlnbjogZmxleC1zdGFydCwgJGRpcmVjdGlvbjogY29sdW1uKTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWVkaXVtLWNvbG9yO1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG5cbiAgICAudGV4dCB7XG4gICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICBmb250LWZhbWlseTogJ0NvZGUgUHJvIEJvbGQnO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblxuICAgICAgJl9zbWFsbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cblxuICAgICAgJl9tZWRpdW0ge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICAucGVyc29uIHtcbiAgICAuaW5mbyB7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cblxuICAgICZfX3N0YXR1cyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgfVxuXG4gICAgJl9fcGF5IHtcbiAgICAgIGhlaWdodDogMTIwcHg7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5wZXJzb24ge1xuICAgICZfX2F2YXRhciB7XG4gICAgICB3aWR0aDogMTMwcHg7XG4gICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgIH1cbiAgICAmX19zdGF0dXMge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDE1MHB4O1xuICAgICAgZmxleC1zaHJpbms6IDE7XG5cbiAgICAgIC5uYW1lIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNXB4O1xuICAgICAgfVxuXG4gICAgICAucm9sZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIH1cblxuICAgICAgLnRleHQge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmX19wYXkge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbn1cbiIsIlxuQG1peGluIGZsZXhNaXgoJGp1c3RpZnk6IGNlbnRlciwgJGFsaWduOiBjZW50ZXIsICRkaXJlY3Rpb246IHJvdykge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogJGFsaWduO1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcbn1cblxuQG1peGluIGZvbnRTdHlsZSgkc2l6ZTogMThweCwgJGNvbG9yOiAkbWFpbi1mb250KSB7XG4gIGZvbnQtc2l6ZTogJHNpemU7XG4gIGNvbG9yOiAkY29sb3I7XG59XG4iLCIkbWFpbi1mb250OiAjMDAwMDAwO1xuJG11dGVkLWZvbnQ6ICM0ODQ4NDk7XG4kYWN0aXZlLWZvbnQ6ICNmOTFiMWI7XG4kb2RkLWJhY2tncm91bmQ6ICNmMGYwZjA7XG4kZGFyay1jb2xvcjogIzI4MmUzNTtcbiRtZWRpdW0tY29sb3I6ICMyZTM0M2E7XG4kbGlnaHQtY29sb3I6ICNmMGYwZjA7XG4iXX0= */"] });
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

/***/ "aLj3":
/*!*******************************************!*\
  !*** ./src/app/pipes/bands-genre.pipe.ts ***!
  \*******************************************/
/*! exports provided: BandsGenrePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BandsGenrePipe", function() { return BandsGenrePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class BandsGenrePipe {
    transform(bands, genreId) {
        return bands.filter(band => band.genres.includes(genreId));
    }
}
BandsGenrePipe.ɵfac = function BandsGenrePipe_Factory(t) { return new (t || BandsGenrePipe)(); };
BandsGenrePipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "appBandsGenrePipe", type: BandsGenrePipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BandsGenrePipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'appBandsGenrePipe'
            }]
    }], null, null); })();


/***/ }),

/***/ "b3iq":
/*!***********************************!*\
  !*** ./src/app/pipes/cut.pipe.ts ***!
  \***********************************/
/*! exports provided: CutPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CutPipe", function() { return CutPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class CutPipe {
    transform(value) {
        if (value.length > 4) {
            return 'by';
        }
        return value;
    }
}
CutPipe.ɵfac = function CutPipe_Factory(t) { return new (t || CutPipe)(); };
CutPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "appCutPipe", type: CutPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CutPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'appCutPipe'
            }]
    }], null, null); })();


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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _support_company_support_company_component__WEBPACK_IMPORTED_MODULE_2__["SupportCompanyComponent"]], styles: ["@font-face {\n  font-family: \"Code Pro LC\";\n  src: url('Code_Pro_LC.ttf');\n}\n@font-face {\n  font-family: \"Code Pro Bold\";\n  src: url('Code_Pro_Bold.ttf');\n}\n@font-face {\n  font-family: \"Code Pro Bold LC\";\n  src: url('Code_Pro_Bold_LC.ttf');\n}\n@font-face {\n  font-family: \"Code Pro LC\";\n  src: url('Code_Pro_LC.ttf');\n}\n@font-face {\n  font-family: \"Code Pro Light\";\n  src: url('Code_Pro_Light.ttf');\n}\n@font-face {\n  font-family: \"Code Pro Light LC\";\n  src: url('Code_Pro_Light_LC.ttf');\n}\n@font-face {\n  font-family: \"Code Pro\";\n  src: url('Code_Pro.ttf');\n}\n.support[_ngcontent-%COMP%] {\n  width: 1430px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  padding: 120px 0 0 0;\n  box-sizing: border-box;\n}\n.support__persons[_ngcontent-%COMP%] {\n  width: 60%;\n  flex-shrink: 0;\n  position: relative;\n}\n.support__persons_left[_ngcontent-%COMP%]   .snow-flake[_ngcontent-%COMP%] {\n  left: -200px;\n  top: calc(50% - 200px);\n}\n.support__myself[_ngcontent-%COMP%] {\n  padding-left: 130px;\n  box-sizing: border-box;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: column;\n  position: relative;\n  z-index: 1;\n}\n.support__myself[_ngcontent-%COMP%]   .snow-flake[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -200px;\n  top: calc(50% - 200px);\n  z-index: 0;\n}\n.support__myself[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  margin-bottom: 45px;\n}\n@media screen and (max-width: 1430px) {\n  .support[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media screen and (max-width: 1010px) {\n  .support__myself[_ngcontent-%COMP%] {\n    padding-left: 40px;\n    margin-bottom: 30px;\n  }\n  .support__myself[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n  .support[_ngcontent-%COMP%]   .snow-flake[_ngcontent-%COMP%] {\n    left: 30%;\n    width: 60%;\n  }\n  .support__persons[_ngcontent-%COMP%] {\n    width: 60%;\n  }\n}\n@media screen and (max-width: 767px) {\n  .support[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n  }\n  .support__myself[_ngcontent-%COMP%] {\n    align-items: center;\n    padding-left: 5px;\n  }\n  .support__myself[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .support__myself[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    text-align: center;\n    font-size: 36px;\n  }\n  .support__myself[_ngcontent-%COMP%]   .snow-flake[_ngcontent-%COMP%] {\n    width: 60%;\n    left: 20%;\n    top: 20%;\n  }\n  .support__persons[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media screen and (max-width: 545px) {\n  .support__myself[_ngcontent-%COMP%] {\n    align-items: center;\n    padding-left: 5px;\n  }\n  .support__myself[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .support__myself[_ngcontent-%COMP%]   .snow-flake[_ngcontent-%COMP%] {\n    width: 60%;\n    left: 20%;\n    top: 20%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3N1cHBvcnQtY29tcGFueS1ncm91cC9zdXBwb3J0LWNvbXBhbnktZ3JvdXAuY29tcG9uZW50LnNjc3MiLCJzcmMvdGhlbWUvbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBQTtFQUNBLDJCQUFBO0FDQ0Y7QURFQTtFQUNFLDRCQUFBO0VBQ0EsNkJBQUE7QUNBRjtBREdBO0VBQ0UsK0JBQUE7RUFDQSxnQ0FBQTtBQ0RGO0FESUE7RUFDRSwwQkFBQTtFQUNBLDJCQUFBO0FDRkY7QURLQTtFQUNFLDZCQUFBO0VBQ0EsOEJBQUE7QUNIRjtBRE1BO0VBQ0UsZ0NBQUE7RUFDQSxpQ0FBQTtBQ0pGO0FET0E7RUFDRSx1QkFBQTtFQUNBLHdCQUFBO0FDTEY7QUF2QkE7RUFDRSxhQUFBO0VDSEEsYUFBQTtFQUNBLG1CQUZ1QztFQUd2Qyx1QkFIdUI7RUFJdkIsbUJBSjJEO0VETTNELG9CQUFBO0VBQ0Esc0JBQUE7QUE0QkY7QUExQkU7RUFDRSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBNEJKO0FBekJNO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0FBMkJSO0FBdEJFO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtFQ3ZCRixhQUFBO0VBQ0EsdUJEdUIyQjtFQ3RCM0IsdUJBSHVCO0VBSXZCLHNCRHFCbUQ7RUFDakQsa0JBQUE7RUFDQSxVQUFBO0FBMkJKO0FBekJJO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0FBMkJOO0FBeEJJO0VBQ0UsbUJBQUE7QUEwQk47QUFwQkE7RUFDRTtJQUNFLFdBQUE7RUF1QkY7QUFDRjtBQXBCQTtFQUVJO0lBQ0Usa0JBQUE7SUFDQSxtQkFBQTtFQXFCSjtFQW5CSTtJQUNFLGVBQUE7RUFxQk47RUFqQkU7SUFDRSxTQUFBO0lBQ0EsVUFBQTtFQW1CSjtFQWhCRTtJQUNFLFVBQUE7RUFrQko7QUFDRjtBQWRBO0VBQ0U7SUN2RUEsYUFBQTtJQUNBLG1CQUZ1QztJQUd2Qyx1QkFIdUI7SUFJdkIsc0JEcUUrQjtFQW1CL0I7RUFsQkU7SUFDRSxtQkFBQTtJQUNBLGlCQUFBO0VBb0JKO0VBbEJJO0lBQ0UsYUFBQTtFQW9CTjtFQWpCSTtJQUNFLGtCQUFBO0lBQ0EsZUFBQTtFQW1CTjtFQWhCSTtJQUNFLFVBQUE7SUFDQSxTQUFBO0lBQ0EsUUFBQTtFQWtCTjtFQWRFO0lBQ0UsV0FBQTtFQWdCSjtBQUNGO0FBWkE7RUFFSTtJQUNFLG1CQUFBO0lBQ0EsaUJBQUE7RUFhSjtFQVhJO0lBQ0Usa0JBQUE7RUFhTjtFQVZJO0lBQ0UsVUFBQTtJQUNBLFNBQUE7SUFDQSxRQUFBO0VBWU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3VwcG9ydC1jb21wYW55LWdyb3VwL3N1cHBvcnQtY29tcGFueS1ncm91cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0NvZGUgUHJvIExDJztcbiAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9Db2RlX1Byb19MQy50dGYnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnQ29kZSBQcm8gQm9sZCc7XG4gIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvQ29kZV9Qcm9fQm9sZC50dGYnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnQ29kZSBQcm8gQm9sZCBMQyc7XG4gIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvQ29kZV9Qcm9fQm9sZF9MQy50dGYnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnQ29kZSBQcm8gTEMnO1xuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0NvZGVfUHJvX0xDLnR0ZicpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdDb2RlIFBybyBMaWdodCc7XG4gIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvQ29kZV9Qcm9fTGlnaHQudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0NvZGUgUHJvIExpZ2h0IExDJztcbiAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9Db2RlX1Byb19MaWdodF9MQy50dGYnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnQ29kZSBQcm8nO1xuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0NvZGVfUHJvLnR0ZicpO1xufVxuIiwiQGltcG9ydCAnLi4vLi4vLi4vdGhlbWUvbWl4aW5zLnNjc3MnO1xuQGltcG9ydCAnLi4vLi4vLi4vdGhlbWUvY29sb3JzLnNjc3MnO1xuQGltcG9ydCAnLi4vLi4vLi4vdGhlbWUvZm9udHMuc2Nzcyc7XG5cbi5zdXBwb3J0IHtcbiAgd2lkdGg6IDE0MzBweDtcbiAgQGluY2x1ZGUgZmxleE1peDtcbiAgcGFkZGluZzogMTIwcHggMCAwIDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgJl9fcGVyc29ucyB7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAmX2xlZnQge1xuICAgICAgLnNub3ctZmxha2Uge1xuICAgICAgICBsZWZ0OiAtMjAwcHg7XG4gICAgICAgIHRvcDogY2FsYyg1MCUgLSAyMDBweCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgJl9fbXlzZWxmIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDEzMHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgQGluY2x1ZGUgZmxleE1peCgkYWxpZ246IGZsZXgtc3RhcnQsICRkaXJlY3Rpb246IGNvbHVtbik7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHotaW5kZXg6IDE7XG5cbiAgICAuc25vdy1mbGFrZSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogLTIwMHB4O1xuICAgICAgdG9wOiBjYWxjKDUwJSAtIDIwMHB4KTtcbiAgICAgIHotaW5kZXg6IDA7XG4gICAgfVxuXG4gICAgLmxvZ28ge1xuICAgICAgbWFyZ2luLWJvdHRvbTogNDVweDtcbiAgICB9XG4gIH1cbn1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDMwcHgpIHtcbiAgLnN1cHBvcnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMTBweCkge1xuICAuc3VwcG9ydCB7XG4gICAgJl9fbXlzZWxmIHtcbiAgICAgIHBhZGRpbmctbGVmdDogNDBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG5cbiAgICAgIC50aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAuc25vdy1mbGFrZSB7XG4gICAgICBsZWZ0OiAzMCU7XG4gICAgICB3aWR0aDogNjAlO1xuICAgIH1cblxuICAgICZfX3BlcnNvbnMge1xuICAgICAgd2lkdGg6IDYwJTtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLnN1cHBvcnQge1xuICAgIEBpbmNsdWRlIGZsZXhNaXgoJGRpcmVjdGlvbjogY29sdW1uKTtcbiAgICAmX19teXNlbGYge1xuICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuXG4gICAgICAuYnV0dG9uIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBmb250LXNpemU6IDM2cHg7XG4gICAgICB9XG5cbiAgICAgIC5zbm93LWZsYWtlIHtcbiAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgbGVmdDogMjAlO1xuICAgICAgICB0b3A6IDIwJTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmX19wZXJzb25zIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NDVweCkge1xuICAuc3VwcG9ydCB7XG4gICAgJl9fbXlzZWxmIHtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcblxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAuc25vdy1mbGFrZSB7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgIGxlZnQ6IDIwJTtcbiAgICAgICAgdG9wOiAyMCU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJcbkBtaXhpbiBmbGV4TWl4KCRqdXN0aWZ5OiBjZW50ZXIsICRhbGlnbjogY2VudGVyLCAkZGlyZWN0aW9uOiByb3cpIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6ICRhbGlnbjtcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcbiAgZmxleC1kaXJlY3Rpb246ICRkaXJlY3Rpb247XG59XG5cbkBtaXhpbiBmb250U3R5bGUoJHNpemU6IDE4cHgsICRjb2xvcjogJG1haW4tZm9udCkge1xuICBmb250LXNpemU6ICRzaXplO1xuICBjb2xvcjogJGNvbG9yO1xufVxuIl19 */"] });
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

/***/ "j1pL":
/*!***********************************************************************************!*\
  !*** ./src/app/components/band-item-horizontal/band-item-horizontal.component.ts ***!
  \***********************************************************************************/
/*! exports provided: BandItemHorizontalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BandItemHorizontalComponent", function() { return BandItemHorizontalComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class BandItemHorizontalComponent {
    constructor() {
        this.selectEvent = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
    }
    selectBand() {
        this.selectEvent.next(this.band);
    }
}
BandItemHorizontalComponent.ɵfac = function BandItemHorizontalComponent_Factory(t) { return new (t || BandItemHorizontalComponent)(); };
BandItemHorizontalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BandItemHorizontalComponent, selectors: [["app-band-item-horizontal"]], inputs: { dimension: "dimension", band: "band", index: "index" }, outputs: { selectEvent: "selectEvent" }, decls: 6, vars: 6, consts: [[1, "item", 3, "click"], [1, "item__image"], [1, "item__name"], [1, "item__genre"]], template: function BandItemHorizontalComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BandItemHorizontalComponent_Template_div_click_0_listener() { return ctx.selectBand(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("width", ctx.dimension - ctx.dimension / 4, "px");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + ctx.band.cover + ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.band.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.band.genre.text);
    } }, styles: [".item[_ngcontent-%COMP%] {\n  margin-right: 20px;\n  flex-shrink: 0;\n  padding-bottom: 30px;\n}\n.item__image[_ngcontent-%COMP%] {\n  width: 100%;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-color: white;\n}\n.item__image[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: block;\n  padding-top: 100%;\n}\n.item__name[_ngcontent-%COMP%] {\n  font-family: \"Code Pro Bold LC\";\n  font-size: 20px;\n  margin-top: 25px;\n  text-transform: uppercase;\n}\n.item__genre[_ngcontent-%COMP%] {\n  color: #f91b1b;\n  font-family: \"Code Pro LC\";\n  font-size: 18px;\n  margin-top: 18px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9iYW5kLWl0ZW0taG9yaXpvbnRhbC9iYW5kLWl0ZW0taG9yaXpvbnRhbC5jb21wb25lbnQuc2NzcyIsInNyYy90aGVtZS9jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLGtCQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBREY7QUFHRTtFQUNFLFdBQUE7RUFDQSwyQkFBQTtFQUNBLDRCQUFBO0VBQ0Esc0JBQUE7RUFDQSx1QkFBQTtBQURKO0FBR0k7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLGlCQUFBO0FBRE47QUFLRTtFQUNFLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EseUJBQUE7QUFISjtBQU1FO0VBQ0UsY0MzQlU7RUQ0QlYsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7QUFKSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmFuZC1pdGVtLWhvcml6b250YWwvYmFuZC1pdGVtLWhvcml6b250YWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi90aGVtZS9jb2xvcnMuc2Nzcyc7XG5cbi5pdGVtIHtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICBmbGV4LXNocmluazogMDtcbiAgcGFkZGluZy1ib3R0b206IDMwcHg7XG5cbiAgJl9faW1hZ2Uge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG5cbiAgICAmOjphZnRlciB7XG4gICAgICBjb250ZW50OiAnJztcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgcGFkZGluZy10b3A6IDEwMCU7XG4gICAgfVxuICB9XG5cbiAgJl9fbmFtZSB7XG4gICAgZm9udC1mYW1pbHk6ICdDb2RlIFBybyBCb2xkIExDJztcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbWFyZ2luLXRvcDogMjVweDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG5cbiAgJl9fZ2VucmUge1xuICAgIGNvbG9yOiAkYWN0aXZlLWZvbnQ7XG4gICAgZm9udC1mYW1pbHk6ICdDb2RlIFBybyBMQyc7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICAgIG1hcmdpbi10b3A6IDE4cHg7XG4gIH1cblxufVxuIiwiJG1haW4tZm9udDogIzAwMDAwMDtcbiRtdXRlZC1mb250OiAjNDg0ODQ5O1xuJGFjdGl2ZS1mb250OiAjZjkxYjFiO1xuJG9kZC1iYWNrZ3JvdW5kOiAjZjBmMGYwO1xuJGRhcmstY29sb3I6ICMyODJlMzU7XG4kbWVkaXVtLWNvbG9yOiAjMmUzNDNhO1xuJGxpZ2h0LWNvbG9yOiAjZjBmMGYwO1xuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BandItemHorizontalComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-band-item-horizontal',
                templateUrl: './band-item-horizontal.component.html',
                styleUrls: ['./band-item-horizontal.component.scss']
            }]
    }], function () { return []; }, { dimension: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], band: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], index: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], selectEvent: [{
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
    // {
    //   id: 9,
    //   name: 'SLUHAY BY',
    //   tag: 'sluhay'
    // },
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
    } }, styles: ["@font-face {\n  font-family: \"Code Pro LC\";\n  src: url('Code_Pro_LC.ttf');\n}\n@font-face {\n  font-family: \"Code Pro Bold\";\n  src: url('Code_Pro_Bold.ttf');\n}\n@font-face {\n  font-family: \"Code Pro Bold LC\";\n  src: url('Code_Pro_Bold_LC.ttf');\n}\n@font-face {\n  font-family: \"Code Pro LC\";\n  src: url('Code_Pro_LC.ttf');\n}\n@font-face {\n  font-family: \"Code Pro Light\";\n  src: url('Code_Pro_Light.ttf');\n}\n@font-face {\n  font-family: \"Code Pro Light LC\";\n  src: url('Code_Pro_Light_LC.ttf');\n}\n@font-face {\n  font-family: \"Code Pro\";\n  src: url('Code_Pro.ttf');\n}\n[_nghost-%COMP%] {\n  width: 30%;\n  margin-right: 20px;\n}\n@media screen and (max-width: 1430px) {\n  [_nghost-%COMP%] {\n    width: 46%;\n  }\n}\n.band[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 60px;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: column;\n  cursor: pointer;\n}\n.band[_ngcontent-%COMP%]:hover   .band__poster-layout[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.band__poster[_ngcontent-%COMP%] {\n  width: 100%;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  margin-bottom: 30px;\n  position: relative;\n}\n.band__poster[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: block;\n  padding-bottom: 100%;\n}\n.band__poster-layout[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  background: rgba(249, 27, 27, 0.6);\n  z-index: 1;\n  text-transform: uppercase;\n  font-size: 14px;\n  color: white;\n  font-family: \"Code Pro Light\";\n  opacity: 0;\n  transition: 0.4s;\n}\n.band__poster-layout-text[_ngcontent-%COMP%] {\n  margin-top: 17px;\n}\n.band__poster-layout[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 10%;\n  min-width: 16px;\n}\n.band__name[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #000000;\n  font-family: \"Code Pro Bold LC\";\n  margin-bottom: 20px;\n  text-transform: uppercase;\n}\n.band__genre[_ngcontent-%COMP%] {\n  font-family: \"Code Pro LC\";\n  font-size: 18px;\n  color: #f91b1b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2JhbmQtaXRlbS9iYW5kLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzcmMvdGhlbWUvbWl4aW5zLnNjc3MiLCJzcmMvdGhlbWUvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwwQkFBQTtFQUNBLDJCQUFBO0FDQ0Y7QURFQTtFQUNFLDRCQUFBO0VBQ0EsNkJBQUE7QUNBRjtBREdBO0VBQ0UsK0JBQUE7RUFDQSxnQ0FBQTtBQ0RGO0FESUE7RUFDRSwwQkFBQTtFQUNBLDJCQUFBO0FDRkY7QURLQTtFQUNFLDZCQUFBO0VBQ0EsOEJBQUE7QUNIRjtBRE1BO0VBQ0UsZ0NBQUE7RUFDQSxpQ0FBQTtBQ0pGO0FET0E7RUFDRSx1QkFBQTtFQUNBLHdCQUFBO0FDTEY7QUF2QkE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7QUF5QkY7QUF2QkU7RUFKRjtJQUtJLFVBQUE7RUEwQkY7QUFDRjtBQXZCQTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQ2JBLGFBQUE7RUFDQSx1QkRheUI7RUNaekIsdUJBSHVCO0VBSXZCLHNCRFdpRDtFQUNqRCxlQUFBO0FBNkJGO0FBMUJJO0VBQ0UsVUFBQTtBQTRCTjtBQXhCRTtFQUNFLFdBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0FBMEJKO0FBeEJJO0VBQ0UsV0FBQTtFQUNBLGNBQUE7RUFDQSxvQkFBQTtBQTBCTjtBQXZCSTtFQ3JDRixhQUFBO0VBQ0EsbUJBRnVDO0VBR3ZDLHVCQUh1QjtFQUl2QixzQkRtQ2lDO0VBQzdCLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLGtDQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VDdkNKLGVEd0N1QjtFQ3ZDdkIsWUR1QzZCO0VBQ3pCLDZCQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBNkJOO0FBM0JNO0VBQ0UsZ0JBQUE7QUE2QlI7QUExQk07RUFDRSxVQUFBO0VBQ0EsZUFBQTtBQTRCUjtBQXZCRTtFQ3hEQSxlRHlEcUI7RUN4RHJCLGNDVlU7RUZtRVIsK0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0FBMEJKO0FBdkJFO0VBQ0UsMEJBQUE7RUNoRUYsZUFEc0I7RUFFdEIsY0NSWTtBRmtHZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmFuZC1pdGVtL2JhbmQtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0NvZGUgUHJvIExDJztcbiAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9Db2RlX1Byb19MQy50dGYnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnQ29kZSBQcm8gQm9sZCc7XG4gIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvQ29kZV9Qcm9fQm9sZC50dGYnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnQ29kZSBQcm8gQm9sZCBMQyc7XG4gIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvQ29kZV9Qcm9fQm9sZF9MQy50dGYnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnQ29kZSBQcm8gTEMnO1xuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0NvZGVfUHJvX0xDLnR0ZicpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdDb2RlIFBybyBMaWdodCc7XG4gIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvQ29kZV9Qcm9fTGlnaHQudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0NvZGUgUHJvIExpZ2h0IExDJztcbiAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9Db2RlX1Byb19MaWdodF9MQy50dGYnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnQ29kZSBQcm8nO1xuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0NvZGVfUHJvLnR0ZicpO1xufVxuIiwiQGltcG9ydCAnLi4vLi4vLi4vdGhlbWUvbWl4aW5zLnNjc3MnO1xuQGltcG9ydCAnLi4vLi4vLi4vdGhlbWUvY29sb3JzLnNjc3MnO1xuQGltcG9ydCAnLi4vLi4vLi4vdGhlbWUvZm9udHMuc2Nzcyc7XG5cbjpob3N0IHtcbiAgd2lkdGg6IDMwJTtcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0MzBweCkge1xuICAgIHdpZHRoOiA0NiU7XG4gIH1cbn1cblxuLmJhbmQge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcbiAgQGluY2x1ZGUgZmxleE1peCgkYWxpZ246IGZsZXgtc3RhcnQsICRkaXJlY3Rpb246IGNvbHVtbik7XG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICAmOmhvdmVyIHtcbiAgICAuYmFuZF9fcG9zdGVyLWxheW91dCB7XG4gICAgICBvcGFjaXR5OiAxO1xuICAgIH1cbiAgfVxuXG4gICZfX3Bvc3RlciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICY6OmFmdGVyIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTAwJTtcbiAgICB9XG5cbiAgICAmLWxheW91dCB7XG4gICAgICBAaW5jbHVkZSBmbGV4TWl4KCRkaXJlY3Rpb246IGNvbHVtbik7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGxlZnQ6IDA7XG4gICAgICB0b3A6IDA7XG4gICAgICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvcjogJGFjdGl2ZS1mb250LCAkYWxwaGE6IC42KTtcbiAgICAgIHotaW5kZXg6IDE7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgQGluY2x1ZGUgZm9udFN0eWxlKDE0cHgsIHdoaXRlKTtcbiAgICAgIGZvbnQtZmFtaWx5OiAnQ29kZSBQcm8gTGlnaHQnO1xuICAgICAgb3BhY2l0eTogMDtcbiAgICAgIHRyYW5zaXRpb246IC40cztcblxuICAgICAgJi10ZXh0IHtcbiAgICAgICAgbWFyZ2luLXRvcDogMTdweDtcbiAgICAgIH1cblxuICAgICAgaW1nIHtcbiAgICAgICAgd2lkdGg6IDEwJTtcbiAgICAgICAgbWluLXdpZHRoOiAxNnB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICZfX25hbWUge1xuICAgIEBpbmNsdWRlIGZvbnRTdHlsZSgyMHB4KTtcbiAgICBmb250LWZhbWlseTogJ0NvZGUgUHJvIEJvbGQgTEMnO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuXG4gICZfX2dlbnJlIHtcbiAgICBmb250LWZhbWlseTogJ0NvZGUgUHJvIExDJztcbiAgICBAaW5jbHVkZSBmb250U3R5bGUoJGNvbG9yOiAkYWN0aXZlLWZvbnQpO1xuICB9XG5cbn1cbiIsIlxuQG1peGluIGZsZXhNaXgoJGp1c3RpZnk6IGNlbnRlciwgJGFsaWduOiBjZW50ZXIsICRkaXJlY3Rpb246IHJvdykge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogJGFsaWduO1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcbn1cblxuQG1peGluIGZvbnRTdHlsZSgkc2l6ZTogMThweCwgJGNvbG9yOiAkbWFpbi1mb250KSB7XG4gIGZvbnQtc2l6ZTogJHNpemU7XG4gIGNvbG9yOiAkY29sb3I7XG59XG4iLCIkbWFpbi1mb250OiAjMDAwMDAwO1xuJG11dGVkLWZvbnQ6ICM0ODQ4NDk7XG4kYWN0aXZlLWZvbnQ6ICNmOTFiMWI7XG4kb2RkLWJhY2tncm91bmQ6ICNmMGYwZjA7XG4kZGFyay1jb2xvcjogIzI4MmUzNTtcbiRtZWRpdW0tY29sb3I6ICMyZTM0M2E7XG4kbGlnaHQtY29sb3I6ICNmMGYwZjA7XG4iXX0= */"] });
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
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " \u043A\u0430\u043D\u0430\u043B \u0431\u0435\u043B\u043E\u0440\u0443\u0441\u0441\u043A\u043E\u0439 \u043C\u0443\u0437\u044B\u043A\u0438 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " sluhay");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, ".by");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u043A\u0430\u043D\u0430\u043B ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "\u0431\u0435\u043B\u043E\u0440\u0443\u0441\u0441\u043A\u043E\u0439 \u043C\u0443\u0437\u044B\u043A\u0438 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " \u043D\u0430\u0447\u043D\u0438 \u0441\u043B\u0443\u0448\u0430\u0442\u044C \u0431\u0435\u043B\u043E\u0440\u0443\u0441\u0441\u043A\u043E\u0435 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BannerPlayerComponent_ng_template_4_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BannerPlayerComponent_ng_template_4_Template_img_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.togglePlay(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function BannerPlayerComponent_ng_template_6_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "img", 15);
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
    } }, inputs: { url: "url", autoplay: "autoplay", controls: "controls", isFullscreen: "isFullscreen" }, decls: 8, vars: 3, consts: [[1, "wrapper"], ["playsinline", "", 1, "player"], ["player", ""], ["class", "banner-content", 4, "ngIf"], ["play", ""], ["pause", ""], [1, "banner-content"], [1, "banner-content__title-mob"], ["src", "assets/logo_main_big.png", "alt", ""], [1, "banner-content__name"], [1, "banner-content__name", "banner-content__name_active"], [1, "banner-content__big-title"], ["routerLink", "/", "fragment", "channel", 1, "banner-content__letstart"], ["src", "assets/arrow_down.png", "alt", ""], ["src", "assets/play.svg", "alt", "", 3, "click"], ["src", "assets/pause.svg", "alt", "", 3, "click"]], template: function BannerPlayerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "video", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, BannerPlayerComponent_div_3_Template, 16, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BannerPlayerComponent_ng_template_4_Template, 1, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, BannerPlayerComponent_ng_template_6_Template, 1, 0, "ng-template", null, 5, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("wrapper_fullscreen", ctx.isFullscreen);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isFullscreen);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: [".wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: relative;\n  z-index: 2;\n}\n.wrapper_fullscreen[_ngcontent-%COMP%] {\n  position: fixed;\n  z-index: 1000;\n  left: 0;\n  top: 0;\n  height: 100vh;\n  background-color: black;\n  object-fit: contain;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n}\n.wrapper[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  padding-top: 130px;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  flex-direction: column;\n  z-index: 3;\n}\n.wrapper[_ngcontent-%COMP%]   .banner-content__name[_ngcontent-%COMP%] {\n  margin-top: 100px;\n  text-transform: uppercase;\n  font-family: \"Code Pro\";\n  font-size: 36px;\n  color: white;\n}\n.wrapper[_ngcontent-%COMP%]   .banner-content__name_active[_ngcontent-%COMP%] {\n  color: #f91b1b;\n}\n.wrapper[_ngcontent-%COMP%]   .banner-content__title-mob[_ngcontent-%COMP%] {\n  display: none;\n  font-size: 15px;\n  font-family: \"Code Pro LC\";\n  color: white;\n  margin-top: 37px;\n  margin-bottom: 76px;\n}\n.wrapper[_ngcontent-%COMP%]   .banner-content__big-title[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 35px;\n  font-family: \"Code Pro Light\";\n  color: white;\n  opacity: 0.5;\n  text-align: center;\n  margin-top: 40px;\n}\n.wrapper[_ngcontent-%COMP%]   .banner-content__letstart[_ngcontent-%COMP%] {\n  font-size: 12px;\n  font-family: \"Code Pro Light\";\n  position: absolute;\n  bottom: 100px;\n  color: white;\n  text-transform: uppercase;\n  text-align: center;\n  outline: none;\n  cursor: pointer;\n}\n.wrapper[_ngcontent-%COMP%]   .banner-content__letstart[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  padding-top: 10px;\n  width: 22px;\n}\n.wrapper[_ngcontent-%COMP%]   .play-btn[_ngcontent-%COMP%] {\n  cursor: pointer;\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  background-color: rgba(249, 27, 27, 0.7);\n  box-shadow: 0 0 0 20px rgba(249, 27, 27, 0.2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  position: absolute;\n  bottom: 30%;\n  left: calc(50% - 40px);\n  z-index: 5;\n}\n.wrapper[_ngcontent-%COMP%]   .play-btn[_ngcontent-%COMP%]::after {\n  content: \"\";\n  position: absolute;\n  border: 1px solid white;\n  width: 50px;\n  height: 50px;\n  border-radius: 50%;\n  left: 15px;\n  top: 15px;\n  box-sizing: border-box;\n}\n.wrapper[_ngcontent-%COMP%]   .play-btn__image[_ngcontent-%COMP%] {\n  width: 25%;\n  margin-left: 4px;\n}\n.wrapper[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 60px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: row;\n  padding: 0 25px;\n  position: absolute;\n  z-index: 10;\n  left: 0;\n  bottom: 0;\n  box-sizing: border-box;\n  background: linear-gradient(to top, black, transparent);\n}\n.wrapper[_ngcontent-%COMP%]   .controls__group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n}\n.wrapper[_ngcontent-%COMP%]   .controls__group[_ngcontent-%COMP%]   .onair[_ngcontent-%COMP%] {\n  margin-left: 20px;\n  text-transform: uppercase;\n  position: relative;\n  color: white;\n}\n.wrapper[_ngcontent-%COMP%]   .controls__group[_ngcontent-%COMP%]   .onair[_ngcontent-%COMP%]::after {\n  content: \"\";\n  width: 5px;\n  height: 5px;\n  background-color: #f91b1b;\n  border-radius: 50%;\n  position: absolute;\n  left: -8px;\n  top: 7px;\n}\n.wrapper[_ngcontent-%COMP%]   .controls[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  height: 20px;\n  cursor: pointer;\n  margin-right: 20px;\n}\n.wrapper[_ngcontent-%COMP%]   .player[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  object-fit: cover;\n}\n@media screen and (max-width: 1300px) {\n  .wrapper[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%] {\n    padding-top: 140px;\n  }\n}\n@media screen and (max-width: 1120px) {\n  .wrapper[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%] {\n    padding-top: 130px;\n  }\n  .wrapper[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 100px;\n  }\n  .wrapper[_ngcontent-%COMP%]   .banner-content__big-title[_ngcontent-%COMP%] {\n    font-size: 22px;\n  }\n  .wrapper[_ngcontent-%COMP%]   .banner-content__letstart[_ngcontent-%COMP%] {\n    bottom: 20px;\n  }\n  .wrapper[_ngcontent-%COMP%]   .banner-content__letstart[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 24px;\n  }\n}\n@media screen and (max-width: 950px) {\n  .wrapper[_ngcontent-%COMP%]   .banner-content__name[_ngcontent-%COMP%] {\n    margin-top: 30px;\n  }\n}\n@media screen and (max-width: 830px) {\n  .wrapper[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%] {\n    padding-top: 30px;\n  }\n  .wrapper__title-mob[_ngcontent-%COMP%] {\n    display: inline;\n  }\n}\n@media screen and (max-width: 767px) {\n  .wrapper[_ngcontent-%COMP%] {\n    height: 720px;\n  }\n  .wrapper[_ngcontent-%COMP%]   .banner-content[_ngcontent-%COMP%] {\n    padding-top: 30px;\n  }\n  .wrapper[_ngcontent-%COMP%]   .banner-content__name[_ngcontent-%COMP%] {\n    margin-top: 80px;\n    font-size: 28px;\n  }\n  .wrapper[_ngcontent-%COMP%]   .banner-content__big-title[_ngcontent-%COMP%] {\n    font-size: 18px;\n    font-size: 32px;\n    margin-top: 38px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9iYW5uZXItcGxheWVyL2Jhbm5lci1wbGF5ZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvdGhlbWUvbWl4aW5zLnNjc3MiLCJzcmMvdGhlbWUvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUZGO0FBSUU7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUNkRixhQUFBO0VBQ0EsbUJBRnVDO0VBR3ZDLHVCQUh1QjtFQUl2QixtQkFKMkQ7QURpQjdEO0FBRUU7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLGtCQUFBO0VDekJGLGFBQUE7RUFDQSxtQkFGdUM7RUFHdkMsMkJEd0I2QjtFQ3ZCN0Isc0JEdUJxRDtFQUNuRCxVQUFBO0FBR0o7QUFESTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtFQ3pCSixlRDBCdUI7RUN6QnZCLFlEeUI2QjtBQUkvQjtBQUZNO0VBQ0UsY0VwQ007QUZ3Q2Q7QUFBSTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsMEJBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtBQUVOO0FBQ0k7RUFDRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSw2QkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQUNOO0FBRUk7RUFDRSxlQUFBO0VBQ0EsNkJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0FBQU47QUFFTTtFQUNFLGlCQUFBO0VBQ0EsV0FBQTtBQUFSO0FBS0U7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLHdDQUFBO0VBQ0EsNkNBQUE7RUNuRkYsYUFBQTtFQUNBLG1CQUZ1QztFQUd2Qyx1QkFIdUI7RUFJdkIsbUJBSjJEO0VEc0Z6RCxrQkFBQTtFQUNBLFdBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7QUFBSjtBQUVJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLFNBQUE7RUFDQSxzQkFBQTtBQUFOO0FBR0k7RUFDRSxVQUFBO0VBQ0EsZ0JBQUE7QUFETjtBQUtFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUM5R0YsYUFBQTtFQUNBLG1CQUZ1QztFQUd2Qyw4QkQ2RzZCO0VDNUc3QixtQkFKMkQ7RURpSHpELGVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxPQUFBO0VBQ0EsU0FBQTtFQUNBLHNCQUFBO0VBQ0EsdURBQUE7QUFBSjtBQUVJO0VDeEhGLGFBQUE7RUFDQSxtQkFGdUM7RUFHdkMsdUJBSHVCO0VBSXZCLG1CQUoyRDtBRDZIN0Q7QUFETTtFQUNFLGlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFHUjtBQURRO0VBQ0UsV0FBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EseUJFcklJO0VGc0lKLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsUUFBQTtBQUdWO0FBRUk7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBQU47QUFJRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsaUJBQUE7QUFGSjtBQU1BO0VBRUk7SUFDRSxrQkFBQTtFQUpKO0FBQ0Y7QUFRQTtFQUVJO0lBQ0Usa0JBQUE7RUFQSjtFQVFJO0lBQ0UsWUFBQTtFQU5OO0VBU0k7SUFDRSxlQUFBO0VBUE47RUFVSTtJQUNFLFlBQUE7RUFSTjtFQVVNO0lBQ0UsV0FBQTtFQVJSO0FBQ0Y7QUFjQTtFQUlNO0lBQ0UsZ0JBQUE7RUFmTjtBQUNGO0FBb0JBO0VBRUk7SUFDRSxpQkFBQTtFQW5CSjtFQXNCRTtJQUNFLGVBQUE7RUFwQko7QUFDRjtBQXdCQTtFQUNFO0lBQ0UsYUFBQTtFQXRCRjtFQXdCRTtJQUNFLGlCQUFBO0VBdEJKO0VBd0JJO0lBQ0UsZ0JBQUE7SUFDQSxlQUFBO0VBdEJOO0VBeUJJO0lBQ0UsZUFBQTtJQUNBLGVBQUE7SUFDQSxnQkFBQTtFQXZCTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9iYW5uZXItcGxheWVyL2Jhbm5lci1wbGF5ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vdGhlbWUvbWl4aW5zLnNjc3NcIjtcbkBpbXBvcnQgXCIuLi8uLi8uLi90aGVtZS9jb2xvcnMuc2Nzc1wiO1xuXG4ud3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMjtcblxuICAmX2Z1bGxzY3JlZW4ge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB6LWluZGV4OiAxMDAwO1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiAwO1xuICAgIGhlaWdodDogMTAwdmg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcbiAgICBAaW5jbHVkZSBmbGV4TWl4O1xuICB9XG5cbiAgLmJhbm5lci1jb250ZW50IHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG4gICAgcGFkZGluZy10b3A6IDEzMHB4O1xuICAgIEBpbmNsdWRlIGZsZXhNaXgoJGp1c3RpZnk6IGZsZXgtc3RhcnQsICRkaXJlY3Rpb246IGNvbHVtbik7XG4gICAgei1pbmRleDogMztcblxuICAgICZfX25hbWUge1xuICAgICAgbWFyZ2luLXRvcDogMTAwcHg7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgZm9udC1mYW1pbHk6IFwiQ29kZSBQcm9cIjtcbiAgICAgIEBpbmNsdWRlIGZvbnRTdHlsZSgzNnB4LCB3aGl0ZSk7XG5cbiAgICAgICZfYWN0aXZlIHtcbiAgICAgICAgY29sb3I6ICRhY3RpdmUtZm9udDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmX190aXRsZS1tb2Ige1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgIGZvbnQtZmFtaWx5OiAnQ29kZSBQcm8gTEMnO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgbWFyZ2luLXRvcDogMzdweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDc2cHg7XG4gICAgfVxuXG4gICAgJl9fYmlnLXRpdGxlIHtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICBmb250LWZhbWlseTogXCJDb2RlIFBybyBMaWdodFwiO1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgb3BhY2l0eTogMC41O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luLXRvcDogNDBweDtcbiAgICB9XG5cbiAgICAmX19sZXRzdGFydCB7XG4gICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICBmb250LWZhbWlseTogXCJDb2RlIFBybyBMaWdodFwiO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgYm90dG9tOiAxMDBweDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICBpbWcge1xuICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgd2lkdGg6IDIycHg7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLnBsYXktYnRuIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgd2lkdGg6IDgwcHg7XG4gICAgaGVpZ2h0OiA4MHB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogJGFjdGl2ZS1mb250LCAkYWxwaGE6IDAuNyk7XG4gICAgYm94LXNoYWRvdzogMCAwIDAgMjBweCByZ2JhKCRjb2xvcjogJGFjdGl2ZS1mb250LCAkYWxwaGE6IDAuMik7XG4gICAgQGluY2x1ZGUgZmxleE1peDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgYm90dG9tOiAzMCU7XG4gICAgbGVmdDogY2FsYyg1MCUgLSA0MHB4KTtcbiAgICB6LWluZGV4OiA1O1xuXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgY29udGVudDogXCJcIjtcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xuICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICBoZWlnaHQ6IDUwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICBsZWZ0OiAxNXB4O1xuICAgICAgdG9wOiAxNXB4O1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB9XG5cbiAgICAmX19pbWFnZSB7XG4gICAgICB3aWR0aDogMjUlO1xuICAgICAgbWFyZ2luLWxlZnQ6IDRweDtcbiAgICB9XG4gIH1cblxuICAuY29udHJvbHMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogNjBweDtcbiAgICBAaW5jbHVkZSBmbGV4TWl4KCRqdXN0aWZ5OiBzcGFjZS1iZXR3ZWVuKTtcbiAgICBwYWRkaW5nOiAwIDI1cHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHotaW5kZXg6IDEwO1xuICAgIGxlZnQ6IDA7XG4gICAgYm90dG9tOiAwO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHRvcCwgYmxhY2ssIHRyYW5zcGFyZW50KTtcblxuICAgICZfX2dyb3VwIHtcbiAgICAgIEBpbmNsdWRlIGZsZXhNaXg7XG5cbiAgICAgIC5vbmFpciB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcblxuICAgICAgICAmOjphZnRlciB7XG4gICAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgICB3aWR0aDogNXB4O1xuICAgICAgICAgIGhlaWdodDogNXB4O1xuICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhY3RpdmUtZm9udDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICAgIGxlZnQ6IC04cHg7XG4gICAgICAgICAgdG9wOiA3cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpbWcge1xuICAgICAgaGVpZ2h0OiAyMHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgIH1cbiAgfVxuXG4gIC5wbGF5ZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBvYmplY3QtZml0OiBjb3ZlcjtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMzAwcHgpIHtcbiAgLndyYXBwZXIge1xuICAgIC5iYW5uZXItY29udGVudCB7XG4gICAgICBwYWRkaW5nLXRvcDogMTQwcHg7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMjBweCkge1xuICAud3JhcHBlciB7XG4gICAgLmJhbm5lci1jb250ZW50IHtcbiAgICAgIHBhZGRpbmctdG9wOiAxMzBweDtcbiAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICAgIH1cblxuICAgICAgJl9fYmlnLXRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAyMnB4O1xuICAgICAgfVxuXG4gICAgICAmX19sZXRzdGFydCB7XG4gICAgICAgIGJvdHRvbTogMjBweDtcblxuICAgICAgICBpbWcge1xuICAgICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk1MHB4KSB7XG4gIC53cmFwcGVyIHtcbiAgICAuYmFubmVyLWNvbnRlbnQge1xuXG4gICAgICAmX19uYW1lIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODMwcHgpIHtcbiAgLndyYXBwZXIge1xuICAgIC5iYW5uZXItY29udGVudCB7XG4gICAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICB9XG5cbiAgICAmX190aXRsZS1tb2Ige1xuICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAud3JhcHBlciB7XG4gICAgaGVpZ2h0OiA3MjBweDtcblxuICAgIC5iYW5uZXItY29udGVudCB7XG4gICAgICBwYWRkaW5nLXRvcDogMzBweDtcblxuICAgICAgJl9fbmFtZSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDgwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgIH1cblxuICAgICAgJl9fYmlnLXRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDM4cHg7XG4gICAgICB9XG5cblxuICAgIH1cbiAgfVxufVxuIiwiXG5AbWl4aW4gZmxleE1peCgkanVzdGlmeTogY2VudGVyLCAkYWxpZ246IGNlbnRlciwgJGRpcmVjdGlvbjogcm93KSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiAkYWxpZ247XG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XG4gIGZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xufVxuXG5AbWl4aW4gZm9udFN0eWxlKCRzaXplOiAxOHB4LCAkY29sb3I6ICRtYWluLWZvbnQpIHtcbiAgZm9udC1zaXplOiAkc2l6ZTtcbiAgY29sb3I6ICRjb2xvcjtcbn1cbiIsIiRtYWluLWZvbnQ6ICMwMDAwMDA7XG4kbXV0ZWQtZm9udDogIzQ4NDg0OTtcbiRhY3RpdmUtZm9udDogI2Y5MWIxYjtcbiRvZGQtYmFja2dyb3VuZDogI2YwZjBmMDtcbiRkYXJrLWNvbG9yOiAjMjgyZTM1O1xuJG1lZGl1bS1jb2xvcjogIzJlMzQzYTtcbiRsaWdodC1jb2xvcjogI2YwZjBmMDtcbiJdfQ== */"] });
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
SupportCompanyComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SupportCompanyComponent, selectors: [["app-support-company"]], inputs: { company: "company" }, decls: 21, vars: 7, consts: [[1, "person"], [1, "person__status"], ["alt", "", 3, "src"], [1, "name"], [1, "role"], [1, "person__pay"], [1, "description"], [1, "text", "text_small"], [1, "text"], [1, "text_medium"]], template: function SupportCompanyComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "\u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u0435\u0442 \u043F\u0440\u043E\u0435\u043A\u0442");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "\u0440\u0443\u0431/\u043C\u0435\u0441");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.company.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.company.role);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.company.cost, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.company.since);
    } }, styles: [".person[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  color: white;\n  margin-bottom: 30px;\n  position: relative;\n  z-index: 1;\n}\n.person[_ngcontent-%COMP%]   .info[_ngcontent-%COMP%] {\n  display: flex;\n}\n.person__status[_ngcontent-%COMP%] {\n  width: 65%;\n  height: 240px;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: column;\n  box-sizing: border-box;\n  padding-left: 30px;\n  background-color: #282e35;\n  flex-shrink: 0;\n  text-transform: uppercase;\n}\n.person__status[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-family: \"Code Pro Bold\";\n  font-size: 20px;\n  margin-bottom: 20px;\n  margin-top: 20px;\n}\n.person__status[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #f91b1b;\n}\n.person__pay[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 240px;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: column;\n  box-sizing: border-box;\n  padding-left: 30px;\n  background-color: #2e343a;\n  padding-right: 20px;\n}\n.person__pay[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  display: none;\n}\n.person__pay[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-family: \"Code Pro Bold\";\n  text-transform: uppercase;\n}\n.person__pay[_ngcontent-%COMP%]   .text_small[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.person__pay[_ngcontent-%COMP%]   .text_medium[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n@media screen and (max-width: 767px) {\n  .person[_ngcontent-%COMP%] {\n    flex-direction: row;\n  }\n  .person__status[_ngcontent-%COMP%] {\n    width: 128px;\n    height: 170px;\n  }\n  .person__status[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 70%;\n  }\n  .person__status[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%], .person__status[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .person__pay[_ngcontent-%COMP%] {\n    height: 170px;\n  }\n  .person__pay[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: flex-start;\n    justify-content: flex-start;\n    flex-direction: column;\n    margin-bottom: 15px;\n  }\n  .person__pay[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n    font-size: 18px;\n    font-family: \"Code Pro Bold LC\";\n  }\n  .person__pay[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%] {\n    color: #f91b1b;\n    font-size: 10px;\n  }\n  .person__pay[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n  .person__pay[_ngcontent-%COMP%]   .text_small[_ngcontent-%COMP%] {\n    font-size: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdXBwb3J0LWNvbXBhbnkvc3VwcG9ydC1jb21wYW55LmNvbXBvbmVudC5zY3NzIiwic3JjL3RoZW1lL21peGlucy5zY3NzIiwic3JjL3RoZW1lL2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsV0FBQTtFQ0ZBLGFBQUE7RUFDQSxtQkFGdUM7RUFHdkMsdUJBSHVCO0VBSXZCLG1CQUoyRDtFREszRCxpQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUNGO0FBQ0U7RUFDRSxhQUFBO0FBQ0o7QUFFRTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VDaEJGLGFBQUE7RUFDQSx1QkRnQjJCO0VDZjNCLHVCQUh1QjtFQUl2QixzQkRjbUQ7RUFDakQsc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCRWxCUztFRm1CVCxjQUFBO0VBQ0EseUJBQUE7QUFHSjtBQURJO0VBQ0UsNEJBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUdOO0FBQUk7RUN4QkYsZUFEc0I7RUFFdEIsY0NSWTtBRm1DZDtBQUNFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUN0Q0YsYUFBQTtFQUNBLHVCRHNDMkI7RUNyQzNCLHVCQUh1QjtFQUl2QixzQkRvQ21EO0VBQ2pELHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkV2Q1c7RUZ3Q1gsbUJBQUE7QUFJSjtBQUZJO0VBQ0UsYUFBQTtBQUlOO0FBREk7RUFDRSxlQUFBO0VBQ0EsNEJBQUE7RUFDQSx5QkFBQTtBQUdOO0FBRE07RUFDRSxlQUFBO0FBR1I7QUFBTTtFQUNFLGVBQUE7QUFFUjtBQVFBO0VBQ0U7SUFDRSxtQkFBQTtFQUxGO0VBT0U7SUFDRSxZQUFBO0lBQ0EsYUFBQTtFQUxKO0VBT0k7SUFDRSxVQUFBO0VBTE47RUFRSTtJQUNFLGFBQUE7RUFOTjtFQVNFO0lBQ0UsYUFBQTtFQVBKO0VBU0k7SUN4RkosYUFBQTtJQUNBLHVCRHdGbUM7SUN2Rm5DLDJCRHVGdUI7SUN0RnZCLHNCRHNGK0M7SUFDekMsbUJBQUE7RUFKTjtFQU1NO0lBQ0UsZUFBQTtJQUNBLCtCQUFBO0VBSlI7RUFPTTtJQUNFLGNFbEdJO0lGbUdKLGVBQUE7RUFMUjtFQVNJO0lBQ0UsZUFBQTtFQVBOO0VBU007SUFDRSxlQUFBO0VBUFI7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3VwcG9ydC1jb21wYW55L3N1cHBvcnQtY29tcGFueS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi90aGVtZS9taXhpbnMuc2Nzc1wiO1xuQGltcG9ydCBcIi4uLy4uLy4uL3RoZW1lL2NvbG9ycy5zY3NzXCI7XG5cbi5wZXJzb24ge1xuICB3aWR0aDogMTAwJTtcbiAgQGluY2x1ZGUgZmxleE1peDtcbiAgZmxleC13cmFwOiBub3dyYXA7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuXG4gIC5pbmZvIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICB9XG5cbiAgJl9fc3RhdHVzIHtcbiAgICB3aWR0aDogNjUlO1xuICAgIGhlaWdodDogMjQwcHg7XG4gICAgQGluY2x1ZGUgZmxleE1peCgkYWxpZ246IGZsZXgtc3RhcnQsICRkaXJlY3Rpb246IGNvbHVtbik7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmstY29sb3I7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblxuICAgIC5uYW1lIHtcbiAgICAgIGZvbnQtZmFtaWx5OiAnQ29kZSBQcm8gQm9sZCc7XG4gICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICB9XG5cbiAgICAucm9sZSB7XG4gICAgICBAaW5jbHVkZSBmb250U3R5bGUoJGNvbG9yOiAkYWN0aXZlLWZvbnQpO1xuICAgIH1cbiAgfVxuXG4gICZfX3BheSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyNDBweDtcbiAgICBAaW5jbHVkZSBmbGV4TWl4KCRhbGlnbjogZmxleC1zdGFydCwgJGRpcmVjdGlvbjogY29sdW1uKTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWVkaXVtLWNvbG9yO1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG5cbiAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAudGV4dCB7XG4gICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICBmb250LWZhbWlseTogJ0NvZGUgUHJvIEJvbGQnO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblxuICAgICAgJl9zbWFsbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cblxuICAgICAgJl9tZWRpdW0ge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCkge1xuICBcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLnBlcnNvbiB7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcblxuICAgICZfX3N0YXR1cyB7XG4gICAgICB3aWR0aDogMTI4cHg7XG4gICAgICBoZWlnaHQ6IDE3MHB4O1xuXG4gICAgICBpbWcge1xuICAgICAgICB3aWR0aDogNzAlO1xuICAgICAgfVxuXG4gICAgICAubmFtZSwgLnJvbGUge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgICAmX19wYXkge1xuICAgICAgaGVpZ2h0OiAxNzBweDtcblxuICAgICAgLmRlc2NyaXB0aW9uIHtcbiAgICAgICAgQGluY2x1ZGUgZmxleE1peChmbGV4LXN0YXJ0LCBmbGV4LXN0YXJ0LCBjb2x1bW4pO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuXG4gICAgICAgIC5uYW1lIHtcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdDb2RlIFBybyBCb2xkIExDJztcbiAgICAgICAgfVxuXG4gICAgICAgIC5yb2xlIHtcbiAgICAgICAgICBjb2xvcjogJGFjdGl2ZS1mb250O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICAudGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcblxuICAgICAgICAmX3NtYWxsIHtcbiAgICAgICAgICBmb250LXNpemU6IDEwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuIiwiXG5AbWl4aW4gZmxleE1peCgkanVzdGlmeTogY2VudGVyLCAkYWxpZ246IGNlbnRlciwgJGRpcmVjdGlvbjogcm93KSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiAkYWxpZ247XG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XG4gIGZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xufVxuXG5AbWl4aW4gZm9udFN0eWxlKCRzaXplOiAxOHB4LCAkY29sb3I6ICRtYWluLWZvbnQpIHtcbiAgZm9udC1zaXplOiAkc2l6ZTtcbiAgY29sb3I6ICRjb2xvcjtcbn1cbiIsIiRtYWluLWZvbnQ6ICMwMDAwMDA7XG4kbXV0ZWQtZm9udDogIzQ4NDg0OTtcbiRhY3RpdmUtZm9udDogI2Y5MWIxYjtcbiRvZGQtYmFja2dyb3VuZDogI2YwZjBmMDtcbiRkYXJrLWNvbG9yOiAjMjgyZTM1O1xuJG1lZGl1bS1jb2xvcjogIzJlMzQzYTtcbiRsaWdodC1jb2xvcjogI2YwZjBmMDtcbiJdfQ== */"] });
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
SupportPersonGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SupportPersonGroupComponent, selectors: [["app-support-person-group"]], inputs: { supportPersons: "supportPersons" }, decls: 18, vars: 1, consts: [[1, "support"], [1, "support__persons"], [3, "person", 4, "ngFor", "ngForOf"], ["href", "http://ott.by/product/podderzhka-5-rubley-bel-muzykantov-2", "target", "_blank", 1, "button"], ["src", "assets/play.svg", "alt", ""], [1, "support__myself"], ["src", "assets/snow_flake.png", "alt", "", 1, "snow-flake"], ["src", "assets/logo_channel.png", "alt", "", 1, "logo"], [1, "title"], [3, "person"]], template: function SupportPersonGroupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, SupportPersonGroupComponent_app_support_person_2_Template, 1, 1, "app-support-person", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " \u0445\u043E\u0447\u0443 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0430\u0442\u044C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "\u043E\u043D\u0438 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044E\u0442 \u0431\u0435\u043B\u043E\u0440\u0443\u0441\u0441\u043A\u0443\u044E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " \u043C\u0443\u0437\u044B\u043A\u0443");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " \u0445\u043E\u0447\u0443 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0430\u0442\u044C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.supportPersons);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _support_person_support_person_component__WEBPACK_IMPORTED_MODULE_2__["SupportPersonComponent"]], styles: ["@font-face {\n  font-family: \"Code Pro LC\";\n  src: url('Code_Pro_LC.ttf');\n}\n@font-face {\n  font-family: \"Code Pro Bold\";\n  src: url('Code_Pro_Bold.ttf');\n}\n@font-face {\n  font-family: \"Code Pro Bold LC\";\n  src: url('Code_Pro_Bold_LC.ttf');\n}\n@font-face {\n  font-family: \"Code Pro LC\";\n  src: url('Code_Pro_LC.ttf');\n}\n@font-face {\n  font-family: \"Code Pro Light\";\n  src: url('Code_Pro_Light.ttf');\n}\n@font-face {\n  font-family: \"Code Pro Light LC\";\n  src: url('Code_Pro_Light_LC.ttf');\n}\n@font-face {\n  font-family: \"Code Pro\";\n  src: url('Code_Pro.ttf');\n}\n.support[_ngcontent-%COMP%] {\n  width: 1430px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  padding: 120px 0;\n  box-sizing: border-box;\n}\n.support__persons[_ngcontent-%COMP%] {\n  width: 60%;\n  flex-shrink: 0;\n  position: relative;\n  height: 510px;\n  overflow: hidden;\n  overflow-y: auto;\n  z-index: 10;\n}\n.support__persons[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  display: none;\n}\n.support__myself[_ngcontent-%COMP%] {\n  padding-left: 130px;\n  box-sizing: border-box;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: column;\n  position: relative;\n  z-index: 1;\n}\n.support__myself[_ngcontent-%COMP%]   .snow-flake[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -200px;\n  top: calc(50% - 200px);\n  z-index: 0;\n}\n.support__myself[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  margin-bottom: 45px;\n}\n@media screen and (max-width: 1430px) {\n  .support[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media screen and (max-width: 1010px) {\n  .support__myself[_ngcontent-%COMP%] {\n    padding-left: 40px;\n    margin-bottom: 30px;\n  }\n  .support__myself[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n  .support__persons[_ngcontent-%COMP%] {\n    width: 60%;\n  }\n}\n@media screen and (max-width: 767px) {\n  .support[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column-reverse;\n  }\n  .support__persons[_ngcontent-%COMP%] {\n    overflow: visible;\n    height: auto;\n    width: 100%;\n  }\n  .support__persons[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n    display: flex;\n    margin: 0 auto;\n    margin-top: 50px;\n  }\n  .support__myself[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .support__myself[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 36px;\n  }\n}\n@media screen and (max-width: 545px) {\n  .support__myself[_ngcontent-%COMP%] {\n    align-items: center;\n    padding-left: 5px;\n  }\n  .support__myself[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    text-align: center;\n  }\n  .support__myself[_ngcontent-%COMP%]   .snow-flake[_ngcontent-%COMP%] {\n    width: 60%;\n    left: 20%;\n    top: 20%;\n  }\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #dfdfdf;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #f91b1b;\n  height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3N1cHBvcnQtcGVyc29uLWdyb3VwL3N1cHBvcnQtcGVyc29uLWdyb3VwLmNvbXBvbmVudC5zY3NzIiwic3JjL3RoZW1lL21peGlucy5zY3NzIiwic3JjL3RoZW1lL2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQUE7RUFDQSwyQkFBQTtBQ0NGO0FERUE7RUFDRSw0QkFBQTtFQUNBLDZCQUFBO0FDQUY7QURHQTtFQUNFLCtCQUFBO0VBQ0EsZ0NBQUE7QUNERjtBRElBO0VBQ0UsMEJBQUE7RUFDQSwyQkFBQTtBQ0ZGO0FES0E7RUFDRSw2QkFBQTtFQUNBLDhCQUFBO0FDSEY7QURNQTtFQUNFLGdDQUFBO0VBQ0EsaUNBQUE7QUNKRjtBRE9BO0VBQ0UsdUJBQUE7RUFDQSx3QkFBQTtBQ0xGO0FBdkJBO0VBQ0UsYUFBQTtFQ0hBLGFBQUE7RUFDQSxtQkFGdUM7RUFHdkMsdUJBSHVCO0VBSXZCLG1CQUoyRDtFRE0zRCxnQkFBQTtFQUNBLHNCQUFBO0FBNEJGO0FBMUJFO0VBQ0UsVUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsV0FBQTtBQTRCSjtBQTFCSTtFQUNFLGFBQUE7QUE0Qk47QUF4QkU7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0VDeEJGLGFBQUE7RUFDQSx1QkR3QjJCO0VDdkIzQix1QkFIdUI7RUFJdkIsc0JEc0JtRDtFQUNqRCxrQkFBQTtFQUNBLFVBQUE7QUE2Qko7QUEzQkk7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7QUE2Qk47QUExQkk7RUFDRSxtQkFBQTtBQTRCTjtBQXJCQTtFQUNFO0lBQ0UsV0FBQTtFQXdCRjtBQUNGO0FBckJBO0VBRUk7SUFDRSxrQkFBQTtJQUNBLG1CQUFBO0VBc0JKO0VBcEJJO0lBQ0UsZUFBQTtFQXNCTjtFQWxCRTtJQUNFLFVBQUE7RUFvQko7QUFDRjtBQWhCQTtFQUNFO0lDcEVBLGFBQUE7SUFDQSxtQkFGdUM7SUFHdkMsdUJBSHVCO0lBSXZCLDhCRGtFK0I7RUFxQi9CO0VBcEJFO0lBQ0UsaUJBQUE7SUFDQSxZQUFBO0lBQ0EsV0FBQTtFQXNCSjtFQXBCSTtJQUNFLGFBQUE7SUFDQSxjQUFBO0lBQ0EsZ0JBQUE7RUFzQk47RUFqQkk7SUFDRSxhQUFBO0VBbUJOO0VBaEJJO0lBQ0UsZUFBQTtFQWtCTjtBQUNGO0FBYkE7RUFFSTtJQUNFLG1CQUFBO0lBQ0EsaUJBQUE7RUFjSjtFQVpJO0lBQ0Usa0JBQUE7RUFjTjtFQVhJO0lBQ0UsVUFBQTtJQUNBLFNBQUE7SUFDQSxRQUFBO0VBYU47QUFDRjtBQVBBO0VBQ0UsVUFBQTtBQVNGO0FBTkEsVUFBQTtBQUNBO0VBQ0UsbUJBQUE7QUFTRjtBQU5BLFdBQUE7QUFDQTtFQUNFLG1CRTdIWTtFRjhIWixZQUFBO0FBU0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3N1cHBvcnQtcGVyc29uLWdyb3VwL3N1cHBvcnQtcGVyc29uLWdyb3VwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnQ29kZSBQcm8gTEMnO1xuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0NvZGVfUHJvX0xDLnR0ZicpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdDb2RlIFBybyBCb2xkJztcbiAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9Db2RlX1Byb19Cb2xkLnR0ZicpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdDb2RlIFBybyBCb2xkIExDJztcbiAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9Db2RlX1Byb19Cb2xkX0xDLnR0ZicpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdDb2RlIFBybyBMQyc7XG4gIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvQ29kZV9Qcm9fTEMudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0NvZGUgUHJvIExpZ2h0JztcbiAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9Db2RlX1Byb19MaWdodC50dGYnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnQ29kZSBQcm8gTGlnaHQgTEMnO1xuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL0NvZGVfUHJvX0xpZ2h0X0xDLnR0ZicpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdDb2RlIFBybyc7XG4gIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvQ29kZV9Qcm8udHRmJyk7XG59XG4iLCJAaW1wb3J0ICcuLi8uLi8uLi90aGVtZS9taXhpbnMuc2Nzcyc7XG5AaW1wb3J0ICcuLi8uLi8uLi90aGVtZS9jb2xvcnMuc2Nzcyc7XG5AaW1wb3J0ICcuLi8uLi8uLi90aGVtZS9mb250cy5zY3NzJztcblxuLnN1cHBvcnQge1xuICB3aWR0aDogMTQzMHB4O1xuICBAaW5jbHVkZSBmbGV4TWl4O1xuICBwYWRkaW5nOiAxMjBweCAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICZfX3BlcnNvbnMge1xuICAgIHdpZHRoOiA2MCU7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIGhlaWdodDogNTEwcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgIHotaW5kZXg6IDEwO1xuXG4gICAgLmJ1dHRvbiB7XG4gICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbiAgfVxuXG4gICZfX215c2VsZiB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMzBweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIEBpbmNsdWRlIGZsZXhNaXgoJGFsaWduOiBmbGV4LXN0YXJ0LCAkZGlyZWN0aW9uOiBjb2x1bW4pO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxO1xuXG4gICAgLnNub3ctZmxha2Uge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogLTIwMHB4O1xuICAgICAgdG9wOiBjYWxjKDUwJSAtIDIwMHB4KTtcbiAgICAgIHotaW5kZXg6IDA7XG4gICAgfVxuXG4gICAgLmxvZ28ge1xuICAgICAgbWFyZ2luLWJvdHRvbTogNDVweDtcbiAgICB9XG5cbiAgfVxufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0MzBweCkge1xuICAuc3VwcG9ydCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAxMHB4KSB7XG4gIC5zdXBwb3J0IHtcbiAgICAmX19teXNlbGYge1xuICAgICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcblxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgfVxuICAgIH1cblxuICAgICZfX3BlcnNvbnMge1xuICAgICAgd2lkdGg6IDYwJTtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLnN1cHBvcnQge1xuICAgIEBpbmNsdWRlIGZsZXhNaXgoJGRpcmVjdGlvbjogY29sdW1uLXJldmVyc2UpO1xuICAgICZfX3BlcnNvbnMge1xuICAgICAgb3ZlcmZsb3c6IHZpc2libGU7XG4gICAgICBoZWlnaHQ6IGF1dG87XG4gICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgLmJ1dHRvbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICBtYXJnaW4tdG9wOiA1MHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgICZfX215c2VsZiB7XG4gICAgICAuYnV0dG9uIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NDVweCkge1xuICAuc3VwcG9ydCB7XG4gICAgJl9fbXlzZWxmIHtcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDVweDtcblxuICAgICAgLnRpdGxlIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgfVxuXG4gICAgICAuc25vdy1mbGFrZSB7XG4gICAgICAgIHdpZHRoOiA2MCU7XG4gICAgICAgIGxlZnQ6IDIwJTtcbiAgICAgICAgdG9wOiAyMCU7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cblxuOjotd2Via2l0LXNjcm9sbGJhciB7XG4gIHdpZHRoOiA0cHg7XG59XG5cbi8qIFRyYWNrICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRyYWNrIHtcbiAgYmFja2dyb3VuZDogI2RmZGZkZjtcbn1cblxuLyogSGFuZGxlICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogJGFjdGl2ZS1mb250O1xuICBoZWlnaHQ6IDQwcHg7XG59XG4iLCJcbkBtaXhpbiBmbGV4TWl4KCRqdXN0aWZ5OiBjZW50ZXIsICRhbGlnbjogY2VudGVyLCAkZGlyZWN0aW9uOiByb3cpIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6ICRhbGlnbjtcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcbiAgZmxleC1kaXJlY3Rpb246ICRkaXJlY3Rpb247XG59XG5cbkBtaXhpbiBmb250U3R5bGUoJHNpemU6IDE4cHgsICRjb2xvcjogJG1haW4tZm9udCkge1xuICBmb250LXNpemU6ICRzaXplO1xuICBjb2xvcjogJGNvbG9yO1xufVxuIiwiJG1haW4tZm9udDogIzAwMDAwMDtcbiRtdXRlZC1mb250OiAjNDg0ODQ5O1xuJGFjdGl2ZS1mb250OiAjZjkxYjFiO1xuJG9kZC1iYWNrZ3JvdW5kOiAjZjBmMGYwO1xuJGRhcmstY29sb3I6ICMyODJlMzU7XG4kbWVkaXVtLWNvbG9yOiAjMmUzNDNhO1xuJGxpZ2h0LWNvbG9yOiAjZjBmMGYwO1xuIl19 */"] });
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
/* harmony import */ var _angular_slider_ngx_slider__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular-slider/ngx-slider */ "mgaL");



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
        const result = (description === null || description === void 0 ? void 0 : description.length) > 350 ? description.slice(0, 350) + '...' : description;
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