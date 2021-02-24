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
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 2, vars: 1, consts: [[1, "header"], ["routerLink", "/", "class", "header__item", 3, "fragment", 4, "ngFor", "ngForOf"], ["routerLink", "/", 1, "header__item", 3, "fragment"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_div_1_Template, 2, 2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.headerItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: [".header[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 125px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  font-family: \"Code Source Medium\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  background: linear-gradient(to bottom, black, transparent);\n  z-index: 2;\n}\n.header__item[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  cursor: pointer;\n  margin-right: 38px;\n  color: white;\n  outline: none;\n}\n.header__item[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n@media screen and (max-width: 1430px) {\n  .header__item[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL3RoZW1lL21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUNGQSxhQUFBO0VBQ0EsbUJBRnVDO0VBR3ZDLHVCQUh1QjtFQUl2QixtQkFKMkQ7RURLM0QsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsMERBQUE7RUFDQSxVQUFBO0FBRUY7QUFBRTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFFSjtBQUFJO0VBQ0UsZUFBQTtBQUVOO0FBR0E7RUFFSTtJQUNFLGFBQUE7RUFESjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vdGhlbWUvbWl4aW5zLnNjc3MnO1xuXG4uaGVhZGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTI1cHg7XG4gIEBpbmNsdWRlIGZsZXhNaXg7XG4gIGZvbnQtZmFtaWx5OiAnQ29kZSBTb3VyY2UgTWVkaXVtJztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20sIGJsYWNrLCB0cmFuc3BhcmVudCk7XG4gIHotaW5kZXg6IDI7XG5cbiAgJl9faXRlbSB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgbWFyZ2luLXJpZ2h0OiAzOHB4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBvdXRsaW5lOiBub25lO1xuXG4gICAgJjpsYXN0LWNoaWxkIHtcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQzMHB4KSB7XG4gIC5oZWFkZXIge1xuICAgICZfX2l0ZW0ge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbn1cbiIsIlxuQG1peGluIGZsZXhNaXgoJGp1c3RpZnk6IGNlbnRlciwgJGFsaWduOiBjZW50ZXIsICRkaXJlY3Rpb246IHJvdykge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogJGFsaWduO1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcbn1cblxuQG1peGluIGZvbnRTdHlsZSgkc2l6ZTogMThweCwgJGNvbG9yOiAkbWFpbi1mb250KSB7XG4gIGZvbnQtc2l6ZTogJHNpemU7XG4gIGNvbG9yOiAkY29sb3I7XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-header',
                templateUrl: './header.component.html',
                styleUrls: ['./header.component.scss']
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
    }
    prevSlide() {
        if (this.previewedId > 0) {
            this.previewedId--;
        }
    }
}
BandsComponent.ɵfac = function BandsComponent_Factory(t) { return new (t || BandsComponent)(); };
BandsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BandsComponent, selectors: [["app-bands"]], inputs: { genres: "genres", bands: "bands", selectedGenreId: "selectedGenreId" }, outputs: { changeGenre: "changeGenre" }, decls: 14, vars: 3, consts: [[1, "bands"], [1, "genres-selector"], [1, "group"], ["src", "assets/logo_main.png", "alt", "", 1, "logo"], [1, "title"], [1, "genres"], ["class", "genres__item", 3, "genres__item_active", "click", 4, "ngFor", "ngForOf"], [1, "bands__list"], [1, "scroll-content"], [3, "band", "click", 4, "ngFor", "ngForOf"], [3, "bands", "index", "hidePopup", "changeSlide", 4, "ngIf"], [1, "genres__item", 3, "click"], [3, "band", "click"], [3, "bands", "index", "hidePopup", "changeSlide"]], template: function BandsComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _band_item_band_item_component__WEBPACK_IMPORTED_MODULE_2__["BandItemComponent"], _band_popup_band_popup_component__WEBPACK_IMPORTED_MODULE_3__["BandPopupComponent"]], styles: ["@font-face {\n  font-family: \"Code Source Light\";\n  src: url('SourceCodePro-Light.ttf');\n}\n@font-face {\n  font-family: \"Code Source Medium\";\n  src: url('SourceCodePro-Medium.ttf');\n}\n@font-face {\n  font-family: \"Code Source Bold\";\n  src: url('SourceCodePro-Bold.ttf');\n}\n.bands[_ngcontent-%COMP%] {\n  width: 1430px;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: row;\n  margin-top: 120px;\n}\n.bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  flex-direction: column;\n  width: 30%;\n  height: 100%;\n  flex-shrink: 0;\n  padding-left: 130px;\n  box-sizing: border-box;\n  margin-top: 76px;\n}\n.bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  flex-direction: column;\n}\n.bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  margin-bottom: 46px;\n}\n.bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-bottom: 58px;\n}\n.bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .genres[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #484849;\n  margin-bottom: 20px;\n  cursor: pointer;\n}\n.bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .genres__item_active[_ngcontent-%COMP%] {\n  color: #f91b1b;\n}\n.bands__list[_ngcontent-%COMP%] {\n  width: 70%;\n  flex-shrink: 0;\n  position: relative;\n}\n.bands__list[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  width: 400px;\n  height: 400px;\n  background-image: url('snow_flake.png');\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  left: -200px;\n  top: 0;\n  z-index: 0;\n}\n.bands__list[_ngcontent-%COMP%]   .scroll-content[_ngcontent-%COMP%] {\n  width: 100%;\n  flex-wrap: wrap;\n  max-height: 1840px;\n  overflow: hidden;\n  overflow-y: auto;\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  flex-direction: row;\n  padding-left: 20px;\n  box-sizing: border-box;\n}\n@media screen and (max-width: 1430px) {\n  .bands[_ngcontent-%COMP%] {\n    width: 100%;\n    flex-direction: column;\n    margin-top: 80px;\n  }\n  .bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%] {\n    width: 100%;\n    flex-direction: column;\n    padding-left: 30px;\n  }\n  .bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    flex-direction: row;\n  }\n  .bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    margin-right: 10px;\n  }\n  .bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .genres[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: row;\n    margin-bottom: 0;\n  }\n  .bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .genres__item[_ngcontent-%COMP%] {\n    margin-right: 40px;\n  }\n  .bands__list[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media screen and (max-width: 767px) {\n  .bands[_ngcontent-%COMP%] {\n    margin-top: 30px;\n  }\n  .bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%] {\n    padding-left: 30px;\n  }\n  .bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n}\n@media screen and (max-width: 600px) {\n  .bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%] {\n    flex-direction: column;\n    margin-top: 20px;\n  }\n  .bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n  .bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n  .bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .genres__item[_ngcontent-%COMP%] {\n    margin-right: 25px;\n  }\n  .bands__list[_ngcontent-%COMP%] {\n    padding-left: 30px;\n    box-sizing: border-box;\n  }\n}\n@media screen and (max-width: 400px) {\n  .bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%] {\n    flex-direction: column;\n    margin-top: 20px;\n  }\n  .bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n  .bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 23px;\n  }\n  .bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .genres__item[_ngcontent-%COMP%] {\n    margin-right: 15px;\n  }\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #dfdfdf;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #f91b1b;\n  height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2JhbmRzL2JhbmRzLmNvbXBvbmVudC5zY3NzIiwic3JjL3RoZW1lL21peGlucy5zY3NzIiwic3JjL3RoZW1lL2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0NBQUE7RUFDQSxtQ0FBQTtBQ0NGO0FERUE7RUFDRSxpQ0FBQTtFQUNBLG9DQUFBO0FDQUY7QURHQTtFQUNFLCtCQUFBO0VBQ0Esa0NBQUE7QUNERjtBQVBBO0VBQ0UsYUFBQTtFQ0hBLGFBQUE7RUFDQSx1QkRHeUI7RUNGekIsdUJBSHVCO0VBSXZCLG1CQUoyRDtFRE0zRCxpQkFBQTtBQVlGO0FBVkU7RUNQQSxhQUFBO0VBQ0EsdUJETzJCO0VDTjNCLDJCRE1pRDtFQ0xqRCxzQkRLeUU7RUFDdkUsVUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBZUo7QUFiSTtFQ2hCRixhQUFBO0VBQ0EsdUJEZ0JpQztFQ2ZqQywyQkRlcUI7RUNkckIsc0JEYzZDO0FBa0IvQztBQWZJO0VBQ0UsbUJBQUE7QUFpQk47QUFkSTtFQUNFLG1CQUFBO0FBZ0JOO0FBYkk7RUNyQkYsZUFEc0I7RUFFdEIsY0NUVztFRitCUCxtQkFBQTtFQUNBLGVBQUE7QUFnQk47QUFiUTtFQUNFLGNFbkNJO0FGa0RkO0FBVEU7RUFDRSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBV0o7QUFUSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUNBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUFXTjtBQVJJO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUNqRUosYUFBQTtFQUNBLHVCRGlFbUQ7RUNoRW5ELDJCRGdFK0I7RUMvRC9CLG1CQUoyRDtFRG9FdkQsa0JBQUE7RUFDQSxzQkFBQTtBQWFOO0FBUkE7RUFDRTtJQUNFLFdBQUE7SUFDQSxzQkFBQTtJQUNBLGdCQUFBO0VBV0Y7RUFURTtJQUNFLFdBQUE7SUFDQSxzQkFBQTtJQUNBLGtCQUFBO0VBV0o7RUFUSTtJQ3BGSixhQUFBO0lBQ0EsbUJEb0ZtQztJQ25GbkMsMkJEbUZ1QjtJQ2xGdkIsbUJEa0YyQztFQWMzQztFQVhJO0lBQ0UsYUFBQTtFQWFOO0VBVkk7SUFDRSxrQkFBQTtFQVlOO0VBVEk7SUNoR0osYUFBQTtJQUNBLG1CQUZ1QztJQUd2Qyx1QkFIdUI7SUFJdkIsbUJBSjJEO0lEbUdyRCxnQkFBQTtFQWNOO0VBWk07SUFDRSxrQkFBQTtFQWNSO0VBVEU7SUFDRSxXQUFBO0VBV0o7QUFDRjtBQVBBO0VBQ0U7SUFDRSxnQkFBQTtFQVNGO0VBUEU7SUFDRSxrQkFBQTtFQVNKO0VBUEk7SUFDRSxnQkFBQTtFQVNOO0FBQ0Y7QUFKQTtFQUdJO0lBQ0Usc0JBQUE7SUFDQSxnQkFBQTtFQUlKO0VBRkk7SUFDRSxtQkFBQTtFQUlOO0VBREk7SUFDRSxlQUFBO0VBR047RUFDTTtJQUNFLGtCQUFBO0VBQ1I7RUFJRTtJQUNFLGtCQUFBO0lBQ0Esc0JBQUE7RUFGSjtBQUNGO0FBTUE7RUFFSTtJQUNFLHNCQUFBO0lBQ0EsZ0JBQUE7RUFMSjtFQU9JO0lBQ0UsbUJBQUE7RUFMTjtFQVFJO0lBQ0UsZUFBQTtFQU5OO0VBVU07SUFDRSxrQkFBQTtFQVJSO0FBQ0Y7QUFjQTtFQUNFLFVBQUE7QUFaRjtBQWVBLFVBQUE7QUFDQTtFQUNFLG1CQUFBO0FBWkY7QUFlQSxXQUFBO0FBQ0E7RUFDRSxtQkU3TFk7RUY4TFosWUFBQTtBQVpGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9iYW5kcy9iYW5kcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0NvZGUgU291cmNlIExpZ2h0JztcbiAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9Tb3VyY2VDb2RlUHJvLUxpZ2h0LnR0ZicpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdDb2RlIFNvdXJjZSBNZWRpdW0nO1xuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL1NvdXJjZUNvZGVQcm8tTWVkaXVtLnR0ZicpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdDb2RlIFNvdXJjZSBCb2xkJztcbiAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9Tb3VyY2VDb2RlUHJvLUJvbGQudHRmJyk7XG59XG4iLCJAaW1wb3J0ICcuLi8uLi8uLi90aGVtZS9taXhpbnMuc2Nzcyc7XG5AaW1wb3J0ICcuLi8uLi8uLi90aGVtZS9jb2xvcnMuc2Nzcyc7XG5AaW1wb3J0ICcuLi8uLi8uLi90aGVtZS9mb250cy5zY3NzJztcblxuLmJhbmRzIHtcbiAgd2lkdGg6IDE0MzBweDtcbiAgQGluY2x1ZGUgZmxleE1peCgkYWxpZ246IGZsZXgtc3RhcnQpO1xuICBtYXJnaW4tdG9wOiAxMjBweDtcblxuICAuZ2VucmVzLXNlbGVjdG9yIHtcbiAgICBAaW5jbHVkZSBmbGV4TWl4KCRhbGlnbjogZmxleC1zdGFydCwgJGp1c3RpZnk6IGZsZXgtc3RhcnQsICRkaXJlY3Rpb246IGNvbHVtbik7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gICAgcGFkZGluZy1sZWZ0OiAxMzBweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIG1hcmdpbi10b3A6IDc2cHg7XG5cbiAgICAuZ3JvdXAge1xuICAgICAgQGluY2x1ZGUgZmxleE1peChmbGV4LXN0YXJ0LCBmbGV4LXN0YXJ0LCBjb2x1bW4pO1xuICAgIH1cblxuICAgIC5sb2dvIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDQ2cHg7XG4gICAgfVxuXG4gICAgLnRpdGxlIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IDU4cHg7XG4gICAgfVxuXG4gICAgLmdlbnJlcyB7XG4gICAgICBAaW5jbHVkZSBmb250U3R5bGUoJGNvbG9yOiAkbXV0ZWQtZm9udCk7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICAgICAmX19pdGVtIHtcbiAgICAgICAgJl9hY3RpdmUge1xuICAgICAgICAgIGNvbG9yOiAkYWN0aXZlLWZvbnQ7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAmX19saXN0IHtcbiAgICB3aWR0aDogNzAlO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcblxuICAgICY6YmVmb3JlIHtcbiAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgd2lkdGg6IDQwMHB4O1xuICAgICAgaGVpZ2h0OiA0MDBweDtcbiAgICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybCgnLi4vLi4vLi4vYXNzZXRzL3Nub3dfZmxha2UucG5nJyk7XG4gICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgIGxlZnQ6IC0yMDBweDtcbiAgICAgIHRvcDogMDtcbiAgICAgIHotaW5kZXg6IDAgO1xuICAgIH1cblxuICAgIC5zY3JvbGwtY29udGVudCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIG1heC1oZWlnaHQ6IDE4NDBweDtcbiAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICBvdmVyZmxvdy15OiBhdXRvO1xuICAgICAgQGluY2x1ZGUgZmxleE1peCgkanVzdGlmeTogZmxleC1zdGFydCwgJGFsaWduOiBmbGV4LXN0YXJ0KTtcbiAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0MzBweCkge1xuICAuYmFuZHMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luLXRvcDogODBweDtcblxuICAgIC5nZW5yZXMtc2VsZWN0b3Ige1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuXG4gICAgICAuZ3JvdXAge1xuICAgICAgICBAaW5jbHVkZSBmbGV4TWl4KGZsZXgtc3RhcnQsIGNlbnRlciwgcm93KTtcbiAgICAgIH1cblxuICAgICAgLnRleHQge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICAubG9nbyB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgIH1cblxuICAgICAgLmdlbnJlcyB7XG4gICAgICAgIEBpbmNsdWRlIGZsZXhNaXg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG5cbiAgICAgICAgJl9faXRlbSB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgJl9fbGlzdCB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmJhbmRzIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuXG4gICAgLmdlbnJlcy1zZWxlY3RvciB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG5cbiAgICAgIC50aXRsZSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5iYW5kcyB7XG5cbiAgICAuZ2VucmVzLXNlbGVjdG9yIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuXG4gICAgICAubG9nbyB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICB9XG5cbiAgICAgIC50aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICAgIH1cblxuICAgICAgLmdlbnJlcyB7XG4gICAgICAgICZfX2l0ZW0ge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMjVweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgICZfX2xpc3Qge1xuICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDAwcHgpIHtcbiAgLmJhbmRzIHtcbiAgICAuZ2VucmVzLXNlbGVjdG9yIHtcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuXG4gICAgICAubG9nbyB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICB9XG5cbiAgICAgIC50aXRsZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICAgIH1cblxuICAgICAgLmdlbnJlcyB7XG4gICAgICAgICZfX2l0ZW0ge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTVweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDRweDtcbn1cblxuLyogVHJhY2sgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiAjZGZkZmRmO1xufVxuXG4vKiBIYW5kbGUgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAkYWN0aXZlLWZvbnQ7XG4gIGhlaWdodDogNDBweDtcbn1cbiIsIlxuQG1peGluIGZsZXhNaXgoJGp1c3RpZnk6IGNlbnRlciwgJGFsaWduOiBjZW50ZXIsICRkaXJlY3Rpb246IHJvdykge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogJGFsaWduO1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcbn1cblxuQG1peGluIGZvbnRTdHlsZSgkc2l6ZTogMThweCwgJGNvbG9yOiAkbWFpbi1mb250KSB7XG4gIGZvbnQtc2l6ZTogJHNpemU7XG4gIGNvbG9yOiAkY29sb3I7XG59XG4iLCIkbWFpbi1mb250OiAjMDAwMDAwO1xuJG11dGVkLWZvbnQ6ICM0ODQ4NDk7XG4kYWN0aXZlLWZvbnQ6ICNmOTFiMWI7XG4kb2RkLWJhY2tncm91bmQ6ICNmMGYwZjA7XG4kZGFyay1jb2xvcjogIzI4MmUzNTtcbiRtZWRpdW0tY29sb3I6ICMyZTM0M2E7XG4kbGlnaHQtY29sb3I6ICNmMGYwZjA7XG4iXX0= */"] });
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
/* harmony import */ var src_app_services_player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/player.service */ "QIP1");
/* harmony import */ var _band_logo_band_logo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../band-logo/band-logo.component */ "nogf");





const _c0 = ["player"];
class ContentCardComponent {
    constructor(playerService) {
        this.playerService = playerService;
        this.side = src_app_contsants_side_enum__WEBPACK_IMPORTED_MODULE_1__["SIDE"].LEFT;
        this.sides = src_app_contsants_side_enum__WEBPACK_IMPORTED_MODULE_1__["SIDE"];
    }
    ngOnInit() {
        this.genreLogo = this.getGenreLogo();
        const player = this.playerRef.nativeElement;
        this.playerService.playUrl(this.content.url, player, false);
    }
    getGenreLogo() {
        const logoUrl = `assets/logo_${this.content.genre}.png`;
        return logoUrl;
    }
}
ContentCardComponent.ɵfac = function ContentCardComponent_Factory(t) { return new (t || ContentCardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_player_service__WEBPACK_IMPORTED_MODULE_2__["PlayerService"])); };
ContentCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContentCardComponent, selectors: [["app-content-card"]], viewQuery: function ContentCardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.playerRef = _t.first);
    } }, inputs: { content: "content", side: "side" }, decls: 16, vars: 5, consts: [[1, "card"], [1, "card__video"], ["controls", ""], ["player", ""], ["src", "assets/snow_flake.png", "alt", "", 1, "snow-flake"], [1, "card__data"], [1, "card__data-content", 3, "data"], [1, "container"], [1, "card__data-text"], [1, "card__data-text_red"], [1, "card__data-text", "card__data-text_red"], [1, "card__data-additional"]], template: function ContentCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "video", 2, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "app-band-logo", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "sluhay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, ".by");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("card_reverse", ctx.side === ctx.sides.RIGHT);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("data", ctx.content.genre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.content.genre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.content.text);
    } }, directives: [_band_logo_band_logo_component__WEBPACK_IMPORTED_MODULE_3__["BandLogoComponent"]], styles: ["@font-face {\n  font-family: \"Code Source Light\";\n  src: url('SourceCodePro-Light.ttf');\n}\n@font-face {\n  font-family: \"Code Source Medium\";\n  src: url('SourceCodePro-Medium.ttf');\n}\n@font-face {\n  font-family: \"Code Source Bold\";\n  src: url('SourceCodePro-Bold.ttf');\n}\n.card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  width: 1430px;\n  margin-bottom: 100px;\n}\n.card_reverse[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.card__video[_ngcontent-%COMP%] {\n  position: relative;\n  width: 65%;\n  flex-shrink: 0;\n}\n.card__video[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  width: 100%;\n  position: relative;\n  z-index: 1;\n}\n.card__video[_ngcontent-%COMP%]   .snow-flake[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n.card__video-content[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.card__data[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: column;\n  width: 30%;\n  flex-shrink: 0;\n  padding-left: 110px;\n  box-sizing: border-box;\n  text-transform: uppercase;\n}\n.card__data[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: column;\n}\n.card__data-text[_ngcontent-%COMP%] {\n  color: #000000;\n  font-size: 36px;\n  font-family: \"Code Source Medium\";\n}\n.card__data-text_red[_ngcontent-%COMP%] {\n  color: #f91b1b;\n}\n.card__data-additional[_ngcontent-%COMP%] {\n  font-family: \"Code Source Light\";\n  color: #484849;\n  font-size: 32px;\n}\n@media screen and (max-width: 1430px) {\n  .card[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .card__data[_ngcontent-%COMP%] {\n    padding-left: 30px;\n  }\n}\n@media screen and (max-width: 767px) {\n  .card[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n  .card__video[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .card__data[_ngcontent-%COMP%] {\n    width: 90%;\n    flex-direction: row;\n    align-items: center;\n    margin-bottom: 20px;\n    padding-left: 0;\n  }\n  .card__data-text[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n  .card__data-additional[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .card__data[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    margin-left: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvbnRlbnQtY2FyZC9jb250ZW50LWNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvdGhlbWUvbWl4aW5zLnNjc3MiLCJzcmMvdGhlbWUvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBQTtFQUNBLG1DQUFBO0FDQ0Y7QURFQTtFQUNFLGlDQUFBO0VBQ0Esb0NBQUE7QUNBRjtBREdBO0VBQ0UsK0JBQUE7RUFDQSxrQ0FBQTtBQ0RGO0FBUEE7RUNGRSxhQUFBO0VBQ0EsbUJBRnVDO0VBR3ZDLHVCQUh1QjtFQUl2QixtQkFKMkQ7RURLM0QsYUFBQTtFQUNBLG9CQUFBO0FBWUY7QUFWRTtFQUNFLDJCQUFBO0FBWUo7QUFURTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUFXSjtBQVRJO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQVdOO0FBUkk7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0FBVU47QUFQSTtFQUNFLFdBQUE7QUFTTjtBQUxFO0VDakNBLGFBQUE7RUFDQSx1QkRpQzJCO0VDaEMzQix1QkFIdUI7RUFJdkIsc0JEK0JtRDtFQUNqRCxVQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBQVVKO0FBUkk7RUN6Q0YsYUFBQTtFQUNBLHVCRHlDNkI7RUN4QzdCLHVCQUh1QjtFQUl2QixzQkR1Q3FEO0FBYXZEO0FBVkk7RUFDRSxjRWhETTtFRmlETixlQUFBO0VBQ0EsaUNBQUE7QUFZTjtBQVZNO0VBQ0UsY0VuRE07QUYrRGQ7QUFSSTtFQUNFLGdDQUFBO0VBQ0EsY0UxRE87RUYyRFAsZUFBQTtBQVVOO0FBTEE7RUFDRTtJQUNFLFdBQUE7RUFRRjtFQU5FO0lBQ0Usa0JBQUE7RUFRSjtBQUNGO0FBSkE7RUFDRTtJQUNFLDhCQUFBO0VBTUY7RUFKRTtJQUNFLFdBQUE7RUFNSjtFQUhFO0lBQ0UsVUFBQTtJQUNBLG1CQUFBO0lBQ0EsbUJBQUE7SUFDQSxtQkFBQTtJQUNBLGVBQUE7RUFLSjtFQUhJO0lBQ0UsZUFBQTtFQUtOO0VBRkk7SUFDRSxlQUFBO0VBSU47RUFESTtJQUNFLGlCQUFBO0VBR047QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGVudC1jYXJkL2NvbnRlbnQtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0NvZGUgU291cmNlIExpZ2h0JztcbiAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9Tb3VyY2VDb2RlUHJvLUxpZ2h0LnR0ZicpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdDb2RlIFNvdXJjZSBNZWRpdW0nO1xuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL1NvdXJjZUNvZGVQcm8tTWVkaXVtLnR0ZicpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdDb2RlIFNvdXJjZSBCb2xkJztcbiAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9Tb3VyY2VDb2RlUHJvLUJvbGQudHRmJyk7XG59XG4iLCJAaW1wb3J0IFwiLi4vLi4vLi4vdGhlbWUvbWl4aW5zLnNjc3NcIjtcbkBpbXBvcnQgXCIuLi8uLi8uLi90aGVtZS9jb2xvcnMuc2Nzc1wiO1xuQGltcG9ydCBcIi4uLy4uLy4uL3RoZW1lL2ZvbnRzLnNjc3NcIjtcblxuLmNhcmQge1xuICBAaW5jbHVkZSBmbGV4TWl4O1xuICB3aWR0aDogMTQzMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcblxuICAmX3JldmVyc2Uge1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbiAgfVxuXG4gICZfX3ZpZGVvIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgd2lkdGg6IDY1JTtcbiAgICBmbGV4LXNocmluazogMDtcblxuICAgIHZpZGVvIHtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgei1pbmRleDogMTtcbiAgICB9XG5cbiAgICAuc25vdy1mbGFrZSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICB0b3A6IDA7XG4gICAgICByaWdodDogMDtcbiAgICB9XG5cbiAgICAmLWNvbnRlbnQge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG5cbiAgJl9fZGF0YSB7XG4gICAgQGluY2x1ZGUgZmxleE1peCgkYWxpZ246IGZsZXgtc3RhcnQsICRkaXJlY3Rpb246IGNvbHVtbik7XG4gICAgd2lkdGg6IDMwJTtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICBwYWRkaW5nLWxlZnQ6IDExMHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblxuICAgIC5jb250YWluZXIge1xuICAgICAgQGluY2x1ZGUgZmxleE1peCgkYWxpZ246IGZsZXgtc3RhcnQsICRkaXJlY3Rpb246IGNvbHVtbik7XG4gICAgfVxuXG4gICAgJi10ZXh0IHtcbiAgICAgIGNvbG9yOiAkbWFpbi1mb250O1xuICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgZm9udC1mYW1pbHk6IFwiQ29kZSBTb3VyY2UgTWVkaXVtXCI7XG5cbiAgICAgICZfcmVkIHtcbiAgICAgICAgY29sb3I6ICRhY3RpdmUtZm9udDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmLWFkZGl0aW9uYWwge1xuICAgICAgZm9udC1mYW1pbHk6IFwiQ29kZSBTb3VyY2UgTGlnaHRcIjtcbiAgICAgIGNvbG9yOiAkbXV0ZWQtZm9udDtcbiAgICAgIGZvbnQtc2l6ZTogMzJweDtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQzMHB4KSB7XG4gIC5jYXJkIHtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgICZfX2RhdGEge1xuICAgICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIH1cbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY2FyZCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuXG4gICAgJl9fdmlkZW8ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgJl9fZGF0YSB7XG4gICAgICB3aWR0aDogOTAlO1xuICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgcGFkZGluZy1sZWZ0OiAwO1xuXG4gICAgICAmLXRleHQge1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICB9XG5cbiAgICAgICYtYWRkaXRpb25hbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgIH1cblxuICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIiwiXG5AbWl4aW4gZmxleE1peCgkanVzdGlmeTogY2VudGVyLCAkYWxpZ246IGNlbnRlciwgJGRpcmVjdGlvbjogcm93KSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiAkYWxpZ247XG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XG4gIGZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xufVxuXG5AbWl4aW4gZm9udFN0eWxlKCRzaXplOiAxOHB4LCAkY29sb3I6ICRtYWluLWZvbnQpIHtcbiAgZm9udC1zaXplOiAkc2l6ZTtcbiAgY29sb3I6ICRjb2xvcjtcbn1cbiIsIiRtYWluLWZvbnQ6ICMwMDAwMDA7XG4kbXV0ZWQtZm9udDogIzQ4NDg0OTtcbiRhY3RpdmUtZm9udDogI2Y5MWIxYjtcbiRvZGQtYmFja2dyb3VuZDogI2YwZjBmMDtcbiRkYXJrLWNvbG9yOiAjMjgyZTM1O1xuJG1lZGl1bS1jb2xvcjogIzJlMzQzYTtcbiRsaWdodC1jb2xvcjogI2YwZjBmMDtcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-content-card',
                templateUrl: './content-card.component.html',
                styleUrls: ['./content-card.component.scss']
            }]
    }], function () { return [{ type: src_app_services_player_service__WEBPACK_IMPORTED_MODULE_2__["PlayerService"] }]; }, { content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], side: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], playerRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['player', { static: true }]
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
FormsModalComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FormsModalComponent, selectors: [["app-forms-modal"]], outputs: { closeEvent: "closeEvent" }, decls: 20, vars: 0, consts: [[1, "wrapper", 3, "click"], [1, "modal", 3, "click"], [1, "close", 3, "click"], [1, "title"], [1, "subtitle"], ["action", "https://app.getresponse.com/add_subscriber.html", "accept-charset", "utf-8", "method", "post", 1, "form"], [1, "form-line"], ["type", "text", "placeholder", "\u0412\u0430\u0448\u0435 \u0438\u043C\u044F", "name", "first_name"], ["name", "custom_company", "type", "text", "placeholder", "\u041D\u0430\u0437\u0432\u0430\u043D\u0438\u0435 \u043A\u043E\u043C\u043F\u0430\u043D\u0438\u0438", "value", ""], ["name", "custom_phone", "placeholder", "\u0422\u0435\u043B\u0435\u0444\u043E\u043D", "type", "text", "value", ""], ["type", "text", "placeholder", "\u042D\u043B. \u043F\u043E\u0447\u0442\u0430", "name", "email"], ["name", "custom_comment", "placeholder", "\u0414\u043E\u0431\u0430\u0432\u044C\u0442\u0435 \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435..."], ["type", "hidden", "name", "campaign_token", "value", "oGzLv"], ["type", "hidden", "name", "thankyou_url", "value", "http://sluhay.by/spasibo"], ["type", "submit", "value", "\u041E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C", 1, "send"]], template: function FormsModalComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, styles: ["@font-face {\n  font-family: \"Code Source Light\";\n  src: url('SourceCodePro-Light.ttf');\n}\n@font-face {\n  font-family: \"Code Source Medium\";\n  src: url('SourceCodePro-Medium.ttf');\n}\n@font-face {\n  font-family: \"Code Source Bold\";\n  src: url('SourceCodePro-Bold.ttf');\n}\n.wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n  position: fixed;\n  left: 0;\n  top: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  background: rgba(0, 0, 0, 0.7);\n  z-index: 1000;\n}\n.wrapper[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%] {\n  width: 50%;\n  min-width: 320px;\n  max-width: 500px;\n  color: white;\n  background: #f91b1b;\n  box-sizing: border-box;\n  padding: 25px 0;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  padding: 35px;\n  text-align: center;\n}\n.wrapper[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  font-size: 35px;\n  color: white;\n  position: absolute;\n  right: -35px;\n  top: -35px;\n  cursor: pointer;\n}\n.wrapper[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  margin: 0;\n  font-family: \"Code Source Light\";\n  font-size: 27px;\n  text-align: center;\n  margin-bottom: 20px;\n}\n.wrapper[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .subtitle[_ngcontent-%COMP%] {\n  margin-bottom: 20px;\n  font-size: 14px;\n}\n.wrapper[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .form-line[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: row;\n}\n.wrapper[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .form-line[_ngcontent-%COMP%]   input[_ngcontent-%COMP%] {\n  margin-right: 10px;\n  border-radius: 4px;\n  height: 30px;\n  outline: none;\n  border: none;\n  padding-left: 7px;\n  width: 100%;\n  background: rgba(255, 255, 255, 0.9);\n  font-family: \"Code Source Medium\";\n}\n.wrapper[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .form-line[_ngcontent-%COMP%]   input[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n.wrapper[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .form-line[_ngcontent-%COMP%]   textarea[_ngcontent-%COMP%] {\n  width: 100%;\n  resize: none;\n  height: 150px;\n  outline: none;\n  border: none;\n  border-radius: 4px;\n  padding: 15px;\n  box-sizing: border-box;\n  background: rgba(255, 255, 255, 0.9);\n  font-family: \"Code Source Medium\";\n}\n.wrapper[_ngcontent-%COMP%]   .modal[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .send[_ngcontent-%COMP%] {\n  width: 150px;\n  height: 35px;\n  text-transform: uppercase;\n  outline: none;\n  border: none;\n  background-color: #2e343a;\n  color: white;\n  font-family: \"Code Source Bold\";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Zvcm1zLW1vZGFsL2Zvcm1zLW1vZGFsLmNvbXBvbmVudC5zY3NzIiwic3JjL3RoZW1lL21peGlucy5zY3NzIiwic3JjL3RoZW1lL2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0NBQUE7RUFDQSxtQ0FBQTtBQ0NGO0FERUE7RUFDRSxpQ0FBQTtFQUNBLG9DQUFBO0FDQUY7QURHQTtFQUNFLCtCQUFBO0VBQ0Esa0NBQUE7QUNERjtBQVBBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUNQQSxhQUFBO0VBQ0EsbUJBRnVDO0VBR3ZDLHVCQUh1QjtFQUl2QixtQkFKMkQ7RURVM0QsOEJBQUE7RUFDQSxhQUFBO0FBWUY7QUFWRTtFQUNFLFVBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CRWpCVTtFRmtCVixzQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQ3BCRixhQUFBO0VBQ0EsbUJBRnVDO0VBR3ZDLHVCQUh1QjtFQUl2QixzQkRrQitCO0VBQzdCLGFBQUE7RUFDQSxrQkFBQTtBQWVKO0FBYkk7RUFDRSxlQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLFVBQUE7RUFDQSxlQUFBO0FBZU47QUFaSTtFQUNFLHlCQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7QUFjTjtBQVhJO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FBYU47QUFUTTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQ25ETixhQUFBO0VBQ0EsbUJBRnVDO0VBR3ZDLDhCRGtEaUM7RUNqRGpDLG1CQUoyRDtBRG1FN0Q7QUFaUTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7RUFDQSxvQ0FBQTtFQUNBLGlDQUFBO0FBY1Y7QUFaVTtFQUNFLGVBQUE7QUFjWjtBQVZRO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG9DQUFBO0VBQ0EsaUNBQUE7QUFZVjtBQVJNO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUJFdkZPO0VGd0ZQLFlBQUE7RUFDQSwrQkFBQTtBQVVSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mb3Jtcy1tb2RhbC9mb3Jtcy1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0NvZGUgU291cmNlIExpZ2h0JztcbiAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9Tb3VyY2VDb2RlUHJvLUxpZ2h0LnR0ZicpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdDb2RlIFNvdXJjZSBNZWRpdW0nO1xuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL1NvdXJjZUNvZGVQcm8tTWVkaXVtLnR0ZicpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdDb2RlIFNvdXJjZSBCb2xkJztcbiAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9Tb3VyY2VDb2RlUHJvLUJvbGQudHRmJyk7XG59XG4iLCJAaW1wb3J0ICcuLi8uLi8uLi90aGVtZS9taXhpbnMuc2Nzcyc7XG5AaW1wb3J0ICcuLi8uLi8uLi90aGVtZS9jb2xvcnMuc2Nzcyc7XG5AaW1wb3J0ICcuLi8uLi8uLi90aGVtZS9mb250cy5zY3NzJztcblxuLndyYXBwZXIge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDB2aDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIEBpbmNsdWRlIGZsZXhNaXg7XG4gIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yOiBibGFjaywgJGFscGhhOiAuNyk7XG4gIHotaW5kZXg6IDEwMDA7XG5cbiAgLm1vZGFsIHtcbiAgICB3aWR0aDogNTAlO1xuICAgIG1pbi13aWR0aDogMzIwcHg7XG4gICAgbWF4LXdpZHRoOiA1MDBweDtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgYmFja2dyb3VuZDogJGFjdGl2ZS1mb250O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZzogMjVweCAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBAaW5jbHVkZSBmbGV4TWl4KCRkaXJlY3Rpb246IGNvbHVtbik7XG4gICAgcGFkZGluZzogMzVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAuY2xvc2Uge1xuICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgcmlnaHQ6IC0zNXB4O1xuICAgICAgdG9wOiAtMzVweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB9XG5cbiAgICAudGl0bGUge1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgIG1hcmdpbjogMDtcbiAgICAgIGZvbnQtZmFtaWx5OiAnQ29kZSBTb3VyY2UgTGlnaHQnO1xuICAgICAgZm9udC1zaXplOiAyN3B4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG5cbiAgICAuc3VidGl0bGUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG5cbiAgICAuZm9ybSB7XG4gICAgICAmLWxpbmUge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgQGluY2x1ZGUgZmxleE1peCgkanVzdGlmeTogc3BhY2UtYmV0d2Vlbik7XG5cbiAgICAgICAgaW5wdXQge1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgaGVpZ2h0OiAzMHB4O1xuICAgICAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogN3B4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEod2hpdGUsIC45KTtcbiAgICAgICAgICBmb250LWZhbWlseTogJ0NvZGUgU291cmNlIE1lZGl1bSc7XG5cbiAgICAgICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRleHRhcmVhIHtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICByZXNpemU6IG5vbmU7XG4gICAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgICBvdXRsaW5lOiBub25lO1xuICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgICAgICAgcGFkZGluZzogMTVweDtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEod2hpdGUsIC45KTtcbiAgICAgICAgICBmb250LWZhbWlseTogJ0NvZGUgU291cmNlIE1lZGl1bSc7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnNlbmQge1xuICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgIGhlaWdodDogMzVweDtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgb3V0bGluZTogbm9uZTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWVkaXVtLWNvbG9yO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQ29kZSBTb3VyY2UgQm9sZCc7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJcbkBtaXhpbiBmbGV4TWl4KCRqdXN0aWZ5OiBjZW50ZXIsICRhbGlnbjogY2VudGVyLCAkZGlyZWN0aW9uOiByb3cpIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6ICRhbGlnbjtcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcbiAgZmxleC1kaXJlY3Rpb246ICRkaXJlY3Rpb247XG59XG5cbkBtaXhpbiBmb250U3R5bGUoJHNpemU6IDE4cHgsICRjb2xvcjogJG1haW4tZm9udCkge1xuICBmb250LXNpemU6ICRzaXplO1xuICBjb2xvcjogJGNvbG9yO1xufVxuIiwiJG1haW4tZm9udDogIzAwMDAwMDtcbiRtdXRlZC1mb250OiAjNDg0ODQ5O1xuJGFjdGl2ZS1mb250OiAjZjkxYjFiO1xuJG9kZC1iYWNrZ3JvdW5kOiAjZjBmMGYwO1xuJGRhcmstY29sb3I6ICMyODJlMzU7XG4kbWVkaXVtLWNvbG9yOiAjMmUzNDNhO1xuJGxpZ2h0LWNvbG9yOiAjZjBmMGYwO1xuIl19 */"] });
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
    playUrl(url, videoTag, autoplay = true) {
        const hls = new hls_js__WEBPACK_IMPORTED_MODULE_1__();
        hls.loadSource(url);
        hls.attachMedia(videoTag);
        if (autoplay) {
            videoTag.play();
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
/* harmony import */ var _contsants_side_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./contsants/side.enum */ "txzI");
/* harmony import */ var _contsants_content_cards_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contsants/content-cards.constants */ "791+");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _contsants_genres_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contsants/genres.enum */ "Oqr+");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "kU1M");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./services/data.service */ "EnSQ");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/banner/banner.component */ "XRsc");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_bands_bands_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/bands/bands.component */ "HxBr");
/* harmony import */ var _components_support_person_group_support_person_group_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/support-person-group/support-person-group.component */ "s76a");
/* harmony import */ var _components_subscription_subscription_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/subscription/subscription.component */ "VK4e");
/* harmony import */ var _components_support_company_group_support_company_group_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/support-company-group/support-company-group.component */ "ioDe");
/* harmony import */ var _components_content_card_content_card_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/content-card/content-card.component */ "Js2f");
/* harmony import */ var _components_forms_modal_forms_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/forms-modal/forms-modal.component */ "MaJW");


















function AppComponent_app_content_card_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-content-card", 12);
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const even_r3 = ctx.even;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", item_r2.genre)("content", item_r2)("side", even_r3 ? ctx_r0.sides.LEFT : ctx_r0.sides.RIGHT);
} }
function AppComponent_app_forms_modal_20_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](0, "app-forms-modal", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("closeEvent", function AppComponent_app_forms_modal_20_Template_app_forms_modal_closeEvent_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"](); return ctx_r4.closeModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(dataService, activatedRoute) {
        this.dataService = dataService;
        this.activatedRoute = activatedRoute;
        this.contentCards = _contsants_content_cards_constants__WEBPACK_IMPORTED_MODULE_1__["CONTENT_CARDS"];
        this.sides = _contsants_side_enum__WEBPACK_IMPORTED_MODULE_0__["SIDE"];
        this.genres = [];
        this.allBands = [];
        this.filteredBands = [];
        this.activeGenreId = 1;
        this.supportCompanies = [];
    }
    ngOnInit() {
        this.genres = this.getGenres();
        this.supportCompanies = this.getSupportCompanies();
        const allData$ = this.genres.slice(1)
            .map(({ id }) => this.getArtistsInfo(id));
        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["forkJoin"])(allData$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => data.reduce((accum, item) => accum.concat(...item), [])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1))
            .subscribe((data) => {
            data.sort((a, b) => a.name.localeCompare(b.name));
            this.allBands = data;
            this.filteredBands = data;
        });
        this.supportPersons = this.dataService.getArtistsIds(1384).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((ids) => this.dataService.getArtistsInfo(ids)));
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
    getArtistsInfo(id) {
        return this.dataService.getArtistsIds(id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])((result) => this.dataService.getArtistsInfo(result)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => data.map((item) => {
            const genreId = item.genres[0];
            const genre = this.genres.find((g) => g.id === genreId);
            return Object.assign(Object.assign({}, item), { genre });
        })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1));
    }
    getGenres() {
        const genres = [
            {
                id: 1,
                value: _contsants_genres_enum__WEBPACK_IMPORTED_MODULE_3__["GENRES"].ALL,
                text: 'ВСЕ ЖАНРЫ',
            },
            {
                id: 1378,
                value: _contsants_genres_enum__WEBPACK_IMPORTED_MODULE_3__["GENRES"].ROCK,
                text: 'Rock',
            },
            {
                id: 1379,
                value: _contsants_genres_enum__WEBPACK_IMPORTED_MODULE_3__["GENRES"].POP,
                text: 'Pop',
            },
            {
                id: 1380,
                value: _contsants_genres_enum__WEBPACK_IMPORTED_MODULE_3__["GENRES"].EDM,
                text: 'EDM',
            },
            {
                id: 1381,
                value: _contsants_genres_enum__WEBPACK_IMPORTED_MODULE_3__["GENRES"].RAP,
                text: 'Rap',
            },
        ];
        return genres;
    }
    getSupportCompanies() {
        const companies = [
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
        return companies;
    }
    scrollToFragment(fragment) {
        if (fragment) {
            const block = document.querySelector('#' + fragment);
            if (block) {
                block.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        }
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 21, vars: 9, consts: [[1, "wrapper"], [3, "id", "content", "side", 4, "ngFor", "ngForOf"], ["id", "musicions", 1, "wrapper", "wrapper_odd"], [3, "selectedGenreId", "genres", "bands", "changeGenre"], ["id", "donates", 1, "wrapper"], [3, "supportPersons"], ["id", "subscriptions", 1, "wrapper"], ["id", "companies", 1, "wrapper"], [3, "supportCompanies", "openEvent"], [1, "wrapper", "wrapper_footer"], [1, "copyright"], [3, "closeEvent", 4, "ngIf"], [3, "id", "content", "side"], [3, "closeEvent"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](1, "app-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](3, AppComponent_app_content_card_3_Template, 1, 3, "app-content-card", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](5, "app-bands", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("changeGenre", function AppComponent_Template_app_bands_changeGenre_5_listener($event) { return ctx.onGenreChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](7, "app-support-person-group", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipe"](8, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](10, "app-subscription");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "app-support-company-group", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("openEvent", function AppComponent_Template_app_support_company_group_openEvent_12_listener() { return ctx.openModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](15, "sluhay.by");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](17, "\u043A\u0430\u043D\u0430\u043B \u0431\u0435\u043B\u043E\u0440\u0443\u0441\u0441\u043A\u043E\u0439 \u043C\u0443\u0437\u044B\u043A\u0438");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](18, "span", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](19, "\u00A92021 Sluhay.by");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](20, AppComponent_app_forms_modal_20_Template, 1, 0, "app-forms-modal", 11);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.contentCards);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("selectedGenreId", ctx.activeGenreId)("genres", ctx.genres)("bands", ctx.filteredBands);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("supportPersons", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 7, ctx.supportPersons));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("supportCompanies", ctx.supportCompanies);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngIf", ctx.isShowCompanySupportModal);
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_9__["BannerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _components_bands_bands_component__WEBPACK_IMPORTED_MODULE_11__["BandsComponent"], _components_support_person_group_support_person_group_component__WEBPACK_IMPORTED_MODULE_12__["SupportPersonGroupComponent"], _components_subscription_subscription_component__WEBPACK_IMPORTED_MODULE_13__["SubscriptionComponent"], _components_support_company_group_support_company_group_component__WEBPACK_IMPORTED_MODULE_14__["SupportCompanyGroupComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgIf"], _components_content_card_content_card_component__WEBPACK_IMPORTED_MODULE_15__["ContentCardComponent"], _components_forms_modal_forms_modal_component__WEBPACK_IMPORTED_MODULE_16__["FormsModalComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]], styles: ["@font-face {\n  font-family: \"Code Source Light\";\n  src: url('SourceCodePro-Light.ttf');\n}\n@font-face {\n  font-family: \"Code Source Medium\";\n  src: url('SourceCodePro-Medium.ttf');\n}\n@font-face {\n  font-family: \"Code Source Bold\";\n  src: url('SourceCodePro-Bold.ttf');\n}\n.wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n.wrapper_odd[_ngcontent-%COMP%] {\n  background: #f0f0f0;\n}\n.wrapper_footer[_ngcontent-%COMP%] {\n  border-top: 44px solid #f0f0f0;\n  height: 260px;\n  text-transform: uppercase;\n  font-size: 24px;\n  color: #484849;\n  font-family: \"Code Source Light\";\n}\n.wrapper_footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n  text-align: center;\n}\n.wrapper_footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.copyright[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvdGhlbWUvbWl4aW5zLnNjc3MiLCJzcmMvdGhlbWUvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBQTtFQUNBLG1DQUFBO0FDQ0Y7QURFQTtFQUNFLGlDQUFBO0VBQ0Esb0NBQUE7QUNBRjtBREdBO0VBQ0UsK0JBQUE7RUFDQSxrQ0FBQTtBQ0RGO0FBUEE7RUNGRSxhQUFBO0VBQ0EsbUJBRnVDO0VBR3ZDLHVCQUh1QjtFQUl2QixzQkFBQTtBRFlGO0FBVkU7RUFDRSxtQkVMYTtBRmlCakI7QUFURTtFQUNFLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VDTEYsZURNcUI7RUNMckIsY0NUVztFRmVULGdDQUFBO0FBWUo7QUFWSTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUFZTjtBQVZNO0VBQ0UsZ0JBQUE7QUFZUjtBQU5BO0VBQ0UsZUFBQTtBQVNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnQ29kZSBTb3VyY2UgTGlnaHQnO1xuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL1NvdXJjZUNvZGVQcm8tTGlnaHQudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0NvZGUgU291cmNlIE1lZGl1bSc7XG4gIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvU291cmNlQ29kZVByby1NZWRpdW0udHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0NvZGUgU291cmNlIEJvbGQnO1xuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL1NvdXJjZUNvZGVQcm8tQm9sZC50dGYnKTtcbn1cbiIsIkBpbXBvcnQgJy4uL3RoZW1lL21peGlucy5zY3NzJztcbkBpbXBvcnQgJy4uL3RoZW1lL2NvbG9ycy5zY3NzJztcbkBpbXBvcnQgJy4uL3RoZW1lL2ZvbnRzLnNjc3MnO1xuXG4ud3JhcHBlciB7XG4gIEBpbmNsdWRlIGZsZXhNaXgoJGRpcmVjdGlvbjogY29sdW1uKTtcblxuICAmX29kZCB7XG4gICAgYmFja2dyb3VuZDogJG9kZC1iYWNrZ3JvdW5kO1xuICB9XG5cbiAgJl9mb290ZXIge1xuICAgIGJvcmRlci10b3A6IDQ0cHggc29saWQgJGxpZ2h0LWNvbG9yO1xuICAgIGhlaWdodDogMjYwcHg7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBAaW5jbHVkZSBmb250U3R5bGUoMjRweCwgJG11dGVkLWZvbnQpO1xuICAgIGZvbnQtZmFtaWx5OiAnQ29kZSBTb3VyY2UgTGlnaHQnO1xuXG4gICAgc3BhbiB7XG4gICAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAmOmxhc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG4uY29weXJpZ2h0IHtcbiAgZm9udC1zaXplOiAxNnB4O1xufVxuXG5cbiIsIlxuQG1peGluIGZsZXhNaXgoJGp1c3RpZnk6IGNlbnRlciwgJGFsaWduOiBjZW50ZXIsICRkaXJlY3Rpb246IHJvdykge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogJGFsaWduO1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcbn1cblxuQG1peGluIGZvbnRTdHlsZSgkc2l6ZTogMThweCwgJGNvbG9yOiAkbWFpbi1mb250KSB7XG4gIGZvbnQtc2l6ZTogJHNpemU7XG4gIGNvbG9yOiAkY29sb3I7XG59XG4iLCIkbWFpbi1mb250OiAjMDAwMDAwO1xuJG11dGVkLWZvbnQ6ICM0ODQ4NDk7XG4kYWN0aXZlLWZvbnQ6ICNmOTFiMWI7XG4kb2RkLWJhY2tncm91bmQ6ICNmMGYwZjA7XG4kZGFyay1jb2xvcjogIzI4MmUzNTtcbiRtZWRpdW0tY29sb3I6ICMyZTM0M2E7XG4kbGlnaHQtY29sb3I6ICNmMGYwZjA7XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], function () { return [{ type: _services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }]; }, null); })();


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
SubscriptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SubscriptionComponent, selectors: [["app-subscription"]], decls: 13, vars: 0, consts: [[1, "subscription"], [1, "subscription__text"], ["action", "https://app.getresponse.com/add_subscriber.html", "accept-charset", "utf-8", "method", "post", 1, "form"], ["type", "text", "placeholder", "E-mail", "name", "email", 1, "form__email"], ["type", "hidden", "name", "campaign_token", "value", "oO1IO"], ["type", "hidden", "name", "start_day", "value", "0"], [1, "form__button"], ["src", "assets/play.png", "alt", ""], ["type", "submit", "value", "\u041F\u043E\u0434\u043F\u0438\u0441\u0430\u0442\u044C\u0441\u044F", 1, "hidden"]], template: function SubscriptionComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@font-face {\n  font-family: \"Code Source Light\";\n  src: url('SourceCodePro-Light.ttf');\n}\n@font-face {\n  font-family: \"Code Source Medium\";\n  src: url('SourceCodePro-Medium.ttf');\n}\n@font-face {\n  font-family: \"Code Source Bold\";\n  src: url('SourceCodePro-Bold.ttf');\n}\n[_nghost-%COMP%] {\n  width: 1430px;\n}\n@media screen and (max-width: 1430px) {\n  [_nghost-%COMP%] {\n    width: 100%;\n  }\n}\n.subscription[_ngcontent-%COMP%] {\n  width: 1430px;\n  height: 260px;\n  background-image: url('support_banner.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: row;\n  padding: 0 180px 0 130px;\n  box-sizing: border-box;\n}\n.subscription__text[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 36px;\n  color: white;\n}\n.subscription[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  height: 50px;\n  width: 70%;\n}\n.subscription[_ngcontent-%COMP%]   .form__email[_ngcontent-%COMP%] {\n  height: 100%;\n  margin-right: 30px;\n  border-radius: 5px;\n  background-color: rgba(255, 255, 255, 0.7);\n  padding-left: 15px;\n  border: none;\n  outline: none;\n  width: 100%;\n}\n.subscription[_ngcontent-%COMP%]   .form__button[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 155px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  text-transform: uppercase;\n  background-color: #282e35;\n  border-radius: 5px;\n  font-size: 14px;\n  color: white;\n  font-family: \"Code Source Bold\";\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n  text-decoration: none;\n}\n.subscription[_ngcontent-%COMP%]   .form__button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n.hidden[_ngcontent-%COMP%] {\n  display: none;\n}\n@media screen and (max-width: 1430px) {\n  .subscription[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media screen and (max-width: 1200px) {\n  .subscription[_ngcontent-%COMP%] {\n    padding: 0 20px;\n  }\n}\n@media screen and (max-width: 910px) {\n  .subscription[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    align-items: flex-start;\n    justify-content: center;\n    flex-direction: column;\n  }\n  .subscription[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media screen and (max-width: 440px) {\n  .subscription[_ngcontent-%COMP%]   .form__email[_ngcontent-%COMP%] {\n    margin-right: 10px;\n  }\n  .subscription[_ngcontent-%COMP%]   .form__button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3N1YnNjcmlwdGlvbi9zdWJzY3JpcHRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvdGhlbWUvbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBQTtFQUNBLG1DQUFBO0FDQ0Y7QURFQTtFQUNFLGlDQUFBO0VBQ0Esb0NBQUE7QUNBRjtBREdBO0VBQ0UsK0JBQUE7RUFDQSxrQ0FBQTtBQ0RGO0FBUEE7RUFDRSxhQUFBO0FBU0Y7QUFQRTtFQUhGO0lBSUksV0FBQTtFQVVGO0FBQ0Y7QUFQQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsMkNBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUNoQkEsYUFBQTtFQUNBLG1CQUZ1QztFQUd2Qyw4QkRlaUI7RUNkakIsbUJBSjJEO0VEbUIzRCx3QkFBQTtFQUNBLHNCQUFBO0FBYUY7QUFYRTtFQUNFLHlCQUFBO0VDZkYsZURnQnFCO0VDZnJCLFlEZTJCO0FBYzdCO0FBWEU7RUMxQkEsYUFBQTtFQUNBLG1CQUZ1QztFQUd2Qyx1QkFIdUI7RUFJdkIsbUJBSjJEO0VENkJ6RCxZQUFBO0VBQ0EsVUFBQTtBQWdCSjtBQWRJO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBZ0JOO0FBYkk7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQzVDSixhQUFBO0VBQ0EsbUJBRnVDO0VBR3ZDLHVCQUh1QjtFQUl2QixtQkFKMkQ7RUQrQ3ZELHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQ3pDSixlRDBDdUI7RUN6Q3ZCLFlEeUM2QjtFQUN6QiwrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0EscUJBQUE7QUFtQk47QUFqQk07RUFDRSxpQkFBQTtBQW1CUjtBQWJBO0VBQ0UsYUFBQTtBQWdCRjtBQWJBO0VBQ0U7SUFDRSxXQUFBO0VBZ0JGO0FBQ0Y7QUFiQTtFQUNFO0lBQ0UsZUFBQTtFQWVGO0FBQ0Y7QUFaQTtFQUNFO0lBQ0UsV0FBQTtJQ2hGRixhQUFBO0lBQ0EsdUJEZ0YyQjtJQy9FM0IsdUJBSHVCO0lBSXZCLHNCRDhFbUQ7RUFpQm5EO0VBZkU7SUFDRSxXQUFBO0VBaUJKO0FBQ0Y7QUFiQTtFQUdNO0lBQ0Usa0JBQUE7RUFhTjtFQVRNO0lBQ0UsYUFBQTtFQVdSO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3N1YnNjcmlwdGlvbi9zdWJzY3JpcHRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdDb2RlIFNvdXJjZSBMaWdodCc7XG4gIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvU291cmNlQ29kZVByby1MaWdodC50dGYnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnQ29kZSBTb3VyY2UgTWVkaXVtJztcbiAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9Tb3VyY2VDb2RlUHJvLU1lZGl1bS50dGYnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnQ29kZSBTb3VyY2UgQm9sZCc7XG4gIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvU291cmNlQ29kZVByby1Cb2xkLnR0ZicpO1xufVxuIiwiQGltcG9ydCAnLi4vLi4vLi4vdGhlbWUvbWl4aW5zLnNjc3MnO1xuQGltcG9ydCAnLi4vLi4vLi4vdGhlbWUvY29sb3JzLnNjc3MnO1xuQGltcG9ydCAnLi4vLi4vLi4vdGhlbWUvZm9udHMuc2Nzcyc7XG5cbjpob3N0IHtcbiAgd2lkdGg6IDE0MzBweDtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDMwcHgpIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG4uc3Vic2NyaXB0aW9uIHtcbiAgd2lkdGg6IDE0MzBweDtcbiAgaGVpZ2h0OiAyNjBweDtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vYXNzZXRzL3N1cHBvcnRfYmFubmVyLmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBAaW5jbHVkZSBmbGV4TWl4KHNwYWNlLWJldHdlZW4pO1xuICBwYWRkaW5nOiAwIDE4MHB4IDAgMTMwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgJl9fdGV4dCB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICBAaW5jbHVkZSBmb250U3R5bGUoMzZweCwgd2hpdGUpO1xuICB9XG5cbiAgLmZvcm0ge1xuICAgIEBpbmNsdWRlIGZsZXhNaXg7XG4gICAgaGVpZ2h0OiA1MHB4O1xuICAgIHdpZHRoOiA3MCU7XG5cbiAgICAmX19lbWFpbCB7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogd2hpdGUsICRhbHBoYTogMC43KTtcbiAgICAgIHBhZGRpbmctbGVmdDogMTVweDtcbiAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG5cbiAgICAmX19idXR0b24ge1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgd2lkdGg6IDE1NXB4O1xuICAgICAgQGluY2x1ZGUgZmxleE1peDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyZTM1O1xuICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgQGluY2x1ZGUgZm9udFN0eWxlKDE0cHgsIHdoaXRlKTtcbiAgICAgIGZvbnQtZmFtaWx5OiBcIkNvZGUgU291cmNlIEJvbGRcIjtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICAgICBpbWcge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuLmhpZGRlbiB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0MzBweCkge1xuICAuc3Vic2NyaXB0aW9uIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcbiAgLnN1YnNjcmlwdGlvbiB7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkxMHB4KSB7XG4gIC5zdWJzY3JpcHRpb24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIEBpbmNsdWRlIGZsZXhNaXgoJGFsaWduOiBmbGV4LXN0YXJ0LCAkZGlyZWN0aW9uOiBjb2x1bW4pO1xuXG4gICAgLmZvcm0ge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ0MHB4KSB7XG4gIC5zdWJzY3JpcHRpb24ge1xuICAgIC5mb3JtIHtcbiAgICAgICZfX2VtYWlsIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xuICAgICAgfVxuXG4gICAgICAmX19idXR0b24ge1xuICAgICAgICBpbWcge1xuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiIsIlxuQG1peGluIGZsZXhNaXgoJGp1c3RpZnk6IGNlbnRlciwgJGFsaWduOiBjZW50ZXIsICRkaXJlY3Rpb246IHJvdykge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogJGFsaWduO1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcbn1cblxuQG1peGluIGZvbnRTdHlsZSgkc2l6ZTogMThweCwgJGNvbG9yOiAkbWFpbi1mb250KSB7XG4gIGZvbnQtc2l6ZTogJHNpemU7XG4gIGNvbG9yOiAkY29sb3I7XG59XG4iXX0= */"] });
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
/* harmony import */ var src_app_services_player_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/services/player.service */ "QIP1");



const _c0 = ["video"];
class BannerComponent {
    constructor(playerService) {
        this.playerService = playerService;
        this.isPlay = true;
    }
    ngOnInit() {
        this.video = this.videoRef.nativeElement;
        this.video.onfullscreenchange = (event) => {
            this.isMuted = !this.isMuted;
            this.video.muted = this.isMuted;
        };
        this.playBanner();
    }
    fullscreenMode() {
        this.video.requestFullscreen();
        this.video.muted = false;
    }
    playBanner() {
        this.isMuted = true;
        this.video.muted = this.isMuted;
        this.playerService.playUrl('http://persik.by/stream/3502/32/10970.m3u8', this.video);
        this.isPlay = true;
    }
}
BannerComponent.ɵfac = function BannerComponent_Factory(t) { return new (t || BannerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_player_service__WEBPACK_IMPORTED_MODULE_1__["PlayerService"])); };
BannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BannerComponent, selectors: [["app-banner"]], viewQuery: function BannerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.videoRef = _t.first);
    } }, decls: 12, vars: 0, consts: [[1, "banner"], [1, "video"], ["video", ""], [1, "banner__content"], ["src", "assets/logo_main_big.png", "alt", ""], [1, "banner__content-name"], [1, "banner__content-name", "banner__content-name_active"], [1, "controls"], [1, "controls__fullscreen", 3, "click"], ["src", "assets/fullscreen.svg", "alt", ""]], template: function BannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "video", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " sluhay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, ".by");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BannerComponent_Template_div_click_10_listener() { return ctx.fullscreenMode(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".banner[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 130px;\n}\n.banner__content[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n.banner__content-name[_ngcontent-%COMP%] {\n  margin-top: 80px;\n  text-transform: uppercase;\n  font-family: \"Code Source Medium\";\n  font-size: 36px;\n  color: white;\n}\n.banner__content-name_active[_ngcontent-%COMP%] {\n  color: #f91b1b;\n}\n.video[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.controls[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  flex-direction: row;\n  padding: 0 30px;\n  box-sizing: border-box;\n  position: absolute;\n  width: 100%;\n  left: 0;\n  bottom: 0;\n  height: 60px;\n}\n.controls__fullscreen[_ngcontent-%COMP%] {\n  width: 25px;\n  height: 25px;\n  cursor: pointer;\n}\n@media screen and (max-width: 580px) {\n  .banner__content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 20%;\n  }\n  .banner__content-name[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9iYW5uZXIvYmFubmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL3RoZW1lL21peGlucy5zY3NzIiwic3JjL3RoZW1lL2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtBQUZGO0FBSUU7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQ1hGLGFBQUE7RUFDQSxtQkFGdUM7RUFHdkMsdUJBSHVCO0VBSXZCLHNCRFUrQjtBQUFqQztBQUVJO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlDQUFBO0VDWEosZURZdUI7RUNYdkIsWURXNkI7QUFDL0I7QUFDTTtFQUNFLGNFdEJNO0FGdUJkO0FBS0E7RUFDRSxXQUFBO0FBRkY7QUFLQTtFQ2hDRSxhQUFBO0VBQ0EsbUJBRnVDO0VBR3ZDLHlCRCtCMkI7RUM5QjNCLG1CQUoyRDtFRG1DM0QsZUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsT0FBQTtFQUNBLFNBQUE7RUFDQSxZQUFBO0FBQ0Y7QUFDRTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsZUFBQTtBQUNKO0FBR0E7RUFHTTtJQUNFLFVBQUE7RUFGTjtFQUtJO0lBQ0UsZ0JBQUE7RUFITjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9iYW5uZXIvYmFubmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vdGhlbWUvbWl4aW5zLnNjc3MnO1xuQGltcG9ydCAnLi4vLi4vLi4vdGhlbWUvY29sb3JzLnNjc3MnO1xuXG4uYmFubmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tYm90dG9tOiAxMzBweDtcblxuICAmX19jb250ZW50IHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgbGVmdDogMDtcbiAgICB0b3A6IDA7XG5cbiAgICBAaW5jbHVkZSBmbGV4TWl4KCRkaXJlY3Rpb246IGNvbHVtbik7XG5cbiAgICAmLW5hbWUge1xuICAgICAgbWFyZ2luLXRvcDogODBweDtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBmb250LWZhbWlseTogJ0NvZGUgU291cmNlIE1lZGl1bSc7XG4gICAgICBAaW5jbHVkZSBmb250U3R5bGUoMzZweCwgd2hpdGUpO1xuXG4gICAgICAmX2FjdGl2ZSB7XG4gICAgICAgIGNvbG9yOiAkYWN0aXZlLWZvbnQ7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbi52aWRlbyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uY29udHJvbHMge1xuICBAaW5jbHVkZSBmbGV4TWl4KCRqdXN0aWZ5OiBmbGV4LWVuZCk7XG4gIHBhZGRpbmc6IDAgMzBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgbGVmdDogMDtcbiAgYm90dG9tOiAwO1xuICBoZWlnaHQ6IDYwcHg7XG5cbiAgJl9fZnVsbHNjcmVlbiB7XG4gICAgd2lkdGg6IDI1cHg7XG4gICAgaGVpZ2h0OiAyNXB4O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgfVxufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1ODBweCkge1xuICAuYmFubmVyIHtcbiAgICAmX19jb250ZW50IHtcbiAgICAgIGltZyB7XG4gICAgICAgIHdpZHRoOiAyMCU7XG4gICAgICB9XG5cbiAgICAgICYtbmFtZSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJcbkBtaXhpbiBmbGV4TWl4KCRqdXN0aWZ5OiBjZW50ZXIsICRhbGlnbjogY2VudGVyLCAkZGlyZWN0aW9uOiByb3cpIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6ICRhbGlnbjtcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcbiAgZmxleC1kaXJlY3Rpb246ICRkaXJlY3Rpb247XG59XG5cbkBtaXhpbiBmb250U3R5bGUoJHNpemU6IDE4cHgsICRjb2xvcjogJG1haW4tZm9udCkge1xuICBmb250LXNpemU6ICRzaXplO1xuICBjb2xvcjogJGNvbG9yO1xufVxuIiwiJG1haW4tZm9udDogIzAwMDAwMDtcbiRtdXRlZC1mb250OiAjNDg0ODQ5O1xuJGFjdGl2ZS1mb250OiAjZjkxYjFiO1xuJG9kZC1iYWNrZ3JvdW5kOiAjZjBmMGYwO1xuJGRhcmstY29sb3I6ICMyODJlMzU7XG4kbWVkaXVtLWNvbG9yOiAjMmUzNDNhO1xuJGxpZ2h0LWNvbG9yOiAjZjBmMGYwO1xuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BannerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-banner',
                templateUrl: './banner.component.html',
                styleUrls: ['./banner.component.scss']
            }]
    }], function () { return [{ type: src_app_services_player_service__WEBPACK_IMPORTED_MODULE_1__["PlayerService"] }]; }, { videoRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['video', { static: true }]
        }] }); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _components_content_card_content_card_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/content-card/content-card.component */ "Js2f");
/* harmony import */ var _components_bands_bands_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/bands/bands.component */ "HxBr");
/* harmony import */ var _components_band_item_band_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/band-item/band-item.component */ "oJph");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _components_band_logo_band_logo_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/band-logo/band-logo.component */ "nogf");
/* harmony import */ var _components_support_person_support_person_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/support-person/support-person.component */ "ZjgA");
/* harmony import */ var _components_support_company_support_company_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/support-company/support-company.component */ "q7H0");
/* harmony import */ var _components_modal_popup_modal_popup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/modal-popup/modal-popup.component */ "Fkiz");
/* harmony import */ var _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/banner/banner.component */ "XRsc");
/* harmony import */ var _components_support_person_group_support_person_group_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/support-person-group/support-person-group.component */ "s76a");
/* harmony import */ var _components_subscription_subscription_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/subscription/subscription.component */ "VK4e");
/* harmony import */ var _components_support_company_group_support_company_group_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/support-company-group/support-company-group.component */ "ioDe");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _components_band_popup_band_popup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/band-popup/band-popup.component */ "t60e");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _directives_stop_propagation_directice__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./directives/stop-propagation.directice */ "K4lg");
/* harmony import */ var _components_forms_modal_forms_modal_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/forms-modal/forms-modal.component */ "MaJW");























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"].forRoot([]),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["NoopAnimationsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
        _components_content_card_content_card_component__WEBPACK_IMPORTED_MODULE_4__["ContentCardComponent"],
        _components_bands_bands_component__WEBPACK_IMPORTED_MODULE_5__["BandsComponent"],
        _components_band_item_band_item_component__WEBPACK_IMPORTED_MODULE_6__["BandItemComponent"],
        _components_band_logo_band_logo_component__WEBPACK_IMPORTED_MODULE_8__["BandLogoComponent"],
        _components_support_person_support_person_component__WEBPACK_IMPORTED_MODULE_9__["SupportPersonComponent"],
        _components_support_company_support_company_component__WEBPACK_IMPORTED_MODULE_10__["SupportCompanyComponent"],
        _components_modal_popup_modal_popup_component__WEBPACK_IMPORTED_MODULE_11__["ModalPopupComponent"],
        _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_12__["BannerComponent"],
        _components_support_person_group_support_person_group_component__WEBPACK_IMPORTED_MODULE_13__["SupportPersonGroupComponent"],
        _components_subscription_subscription_component__WEBPACK_IMPORTED_MODULE_14__["SubscriptionComponent"],
        _components_support_company_group_support_company_group_component__WEBPACK_IMPORTED_MODULE_15__["SupportCompanyGroupComponent"],
        _components_band_popup_band_popup_component__WEBPACK_IMPORTED_MODULE_17__["BandPopupComponent"],
        _directives_stop_propagation_directice__WEBPACK_IMPORTED_MODULE_19__["StopPropagationDirective"],
        _components_forms_modal_forms_modal_component__WEBPACK_IMPORTED_MODULE_20__["FormsModalComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["NoopAnimationsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                    _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
                    _components_content_card_content_card_component__WEBPACK_IMPORTED_MODULE_4__["ContentCardComponent"],
                    _components_bands_bands_component__WEBPACK_IMPORTED_MODULE_5__["BandsComponent"],
                    _components_band_item_band_item_component__WEBPACK_IMPORTED_MODULE_6__["BandItemComponent"],
                    _components_band_logo_band_logo_component__WEBPACK_IMPORTED_MODULE_8__["BandLogoComponent"],
                    _components_support_person_support_person_component__WEBPACK_IMPORTED_MODULE_9__["SupportPersonComponent"],
                    _components_support_company_support_company_component__WEBPACK_IMPORTED_MODULE_10__["SupportCompanyComponent"],
                    _components_modal_popup_modal_popup_component__WEBPACK_IMPORTED_MODULE_11__["ModalPopupComponent"],
                    _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_12__["BannerComponent"],
                    _components_support_person_group_support_person_group_component__WEBPACK_IMPORTED_MODULE_13__["SupportPersonGroupComponent"],
                    _components_subscription_subscription_component__WEBPACK_IMPORTED_MODULE_14__["SubscriptionComponent"],
                    _components_support_company_group_support_company_group_component__WEBPACK_IMPORTED_MODULE_15__["SupportCompanyGroupComponent"],
                    _components_band_popup_band_popup_component__WEBPACK_IMPORTED_MODULE_17__["BandPopupComponent"],
                    _directives_stop_propagation_directice__WEBPACK_IMPORTED_MODULE_19__["StopPropagationDirective"],
                    _components_forms_modal_forms_modal_component__WEBPACK_IMPORTED_MODULE_20__["FormsModalComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"].forRoot([]),
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["NoopAnimationsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
            }]
    }], null, null); })();


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
    } }, styles: [".person[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  color: white;\n  margin-bottom: 30px;\n  position: relative;\n  z-index: 1;\n}\n.person__avatar[_ngcontent-%COMP%] {\n  width: 240px;\n  height: 240px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  flex-shrink: 0;\n}\n.person__status[_ngcontent-%COMP%] {\n  width: 35%;\n  height: 240px;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: column;\n  box-sizing: border-box;\n  padding-left: 30px;\n  background-color: #282e35;\n  flex-shrink: 0;\n  text-transform: uppercase;\n}\n.person__status[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  display: none;\n}\n.person__status[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-family: \"Code Source Bold\";\n  font-size: 20px;\n  margin-bottom: 20px;\n}\n.person__status[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #f91b1b;\n}\n.person__pay[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 240px;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: column;\n  box-sizing: border-box;\n  padding-left: 30px;\n  background-color: #2e343a;\n  padding-right: 20px;\n}\n.person__pay[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-family: \"Code Source Bold\";\n  text-transform: uppercase;\n}\n.person__pay[_ngcontent-%COMP%]   .text_small[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.person__pay[_ngcontent-%COMP%]   .text_medium[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n@media screen and (max-width: 620px) {\n  .person__status[_ngcontent-%COMP%] {\n    width: 100%;\n    flex-shrink: 1;\n  }\n  .person__status[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    display: inline;\n  }\n  .person__pay[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media screen and (max-width: 480px) {\n  .person[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdXBwb3J0LXBlcnNvbi9zdXBwb3J0LXBlcnNvbi5jb21wb25lbnQuc2NzcyIsInNyYy90aGVtZS9taXhpbnMuc2NzcyIsInNyYy90aGVtZS9jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLFdBQUE7RUNGQSxhQUFBO0VBQ0EsbUJBRnVDO0VBR3ZDLHVCQUh1QjtFQUl2QixtQkFKMkQ7RURLM0QsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFDRjtBQUNFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0FBQ0o7QUFFRTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VDckJGLGFBQUE7RUFDQSx1QkRxQjJCO0VDcEIzQix1QkFIdUI7RUFJdkIsc0JEbUJtRDtFQUNqRCxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJFdkJTO0VGd0JULGNBQUE7RUFDQSx5QkFBQTtBQUdKO0FBREk7RUFDRSxhQUFBO0FBR047QUFBSTtFQUNFLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBRU47QUFDSTtFQ2hDRixlQURzQjtFQUV0QixjQ1JZO0FGMENkO0FBRUU7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQzlDRixhQUFBO0VBQ0EsdUJEOEMyQjtFQzdDM0IsdUJBSHVCO0VBSXZCLHNCRDRDbUQ7RUFDakQsc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCRS9DVztFRmdEWCxtQkFBQTtBQUdKO0FBREk7RUFDRSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSx5QkFBQTtBQUdOO0FBRE07RUFDRSxlQUFBO0FBR1I7QUFBTTtFQUNFLGVBQUE7QUFFUjtBQUlBO0VBRUk7SUFDRSxXQUFBO0lBQ0EsY0FBQTtFQUZKO0VBSUk7SUFDRSxlQUFBO0VBRk47RUFNRTtJQUNFLGFBQUE7RUFKSjtBQUNGO0FBUUE7RUFDRTtJQUNFLHNCQUFBO0VBTkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3VwcG9ydC1wZXJzb24vc3VwcG9ydC1wZXJzb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vdGhlbWUvbWl4aW5zLnNjc3NcIjtcbkBpbXBvcnQgXCIuLi8uLi8uLi90aGVtZS9jb2xvcnMuc2Nzc1wiO1xuXG4ucGVyc29uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIEBpbmNsdWRlIGZsZXhNaXg7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcblxuICAmX19hdmF0YXIge1xuICAgIHdpZHRoOiAyNDBweDtcbiAgICBoZWlnaHQ6IDI0MHB4O1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgZmxleC1zaHJpbms6IDA7XG4gIH1cblxuICAmX19zdGF0dXMge1xuICAgIHdpZHRoOiAzNSU7XG4gICAgaGVpZ2h0OiAyNDBweDtcbiAgICBAaW5jbHVkZSBmbGV4TWl4KCRhbGlnbjogZmxleC1zdGFydCwgJGRpcmVjdGlvbjogY29sdW1uKTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyay1jb2xvcjtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gICAgLnRleHQge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG5cbiAgICAubmFtZSB7XG4gICAgICBmb250LWZhbWlseTogJ0NvZGUgU291cmNlIEJvbGQnO1xuICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICB9XG5cbiAgICAucm9sZSB7XG4gICAgICBAaW5jbHVkZSBmb250U3R5bGUoJGNvbG9yOiAkYWN0aXZlLWZvbnQpO1xuICAgIH1cbiAgfVxuXG4gICZfX3BheSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyNDBweDtcbiAgICBAaW5jbHVkZSBmbGV4TWl4KCRhbGlnbjogZmxleC1zdGFydCwgJGRpcmVjdGlvbjogY29sdW1uKTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWVkaXVtLWNvbG9yO1xuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XG5cbiAgICAudGV4dCB7XG4gICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICBmb250LWZhbWlseTogJ0NvZGUgU291cmNlIEJvbGQnO1xuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcblxuICAgICAgJl9zbWFsbCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgIH1cblxuICAgICAgJl9tZWRpdW0ge1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYyMHB4KSB7XG4gIC5wZXJzb24ge1xuICAgICZfX3N0YXR1cyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICAgIGZsZXgtc2hyaW5rOiAxO1xuXG4gICAgICAudGV4dCB7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAmX19wYXkge1xuICAgICAgZGlzcGxheTogbm9uZTtcbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLnBlcnNvbiB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuIiwiXG5AbWl4aW4gZmxleE1peCgkanVzdGlmeTogY2VudGVyLCAkYWxpZ246IGNlbnRlciwgJGRpcmVjdGlvbjogcm93KSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiAkYWxpZ247XG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XG4gIGZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xufVxuXG5AbWl4aW4gZm9udFN0eWxlKCRzaXplOiAxOHB4LCAkY29sb3I6ICRtYWluLWZvbnQpIHtcbiAgZm9udC1zaXplOiAkc2l6ZTtcbiAgY29sb3I6ICRjb2xvcjtcbn1cbiIsIiRtYWluLWZvbnQ6ICMwMDAwMDA7XG4kbXV0ZWQtZm9udDogIzQ4NDg0OTtcbiRhY3RpdmUtZm9udDogI2Y5MWIxYjtcbiRvZGQtYmFja2dyb3VuZDogI2YwZjBmMDtcbiRkYXJrLWNvbG9yOiAjMjgyZTM1O1xuJG1lZGl1bS1jb2xvcjogIzJlMzQzYTtcbiRsaWdodC1jb2xvcjogI2YwZjBmMDtcbiJdfQ== */"] });
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
        this.openEvent.next();
    }
}
SupportCompanyGroupComponent.ɵfac = function SupportCompanyGroupComponent_Factory(t) { return new (t || SupportCompanyGroupComponent)(); };
SupportCompanyGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SupportCompanyGroupComponent, selectors: [["app-support-company-group"]], inputs: { supportCompanies: "supportCompanies" }, outputs: { openEvent: "openEvent" }, decls: 15, vars: 1, consts: [[1, "support"], [1, "support__myself"], ["src", "assets/logo_main.png", "alt", "", 1, "logo"], [1, "title"], [1, "button", 3, "click"], ["src", "assets/play.png", "alt", ""], [1, "support__persons", "support__persons_left"], ["src", "assets/snow_flake.png", "alt", "", 1, "snow-flake"], [3, "company", 4, "ngFor", "ngForOf"], [3, "company"]], template: function SupportCompanyGroupComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SupportCompanyGroupComponent_Template_span_click_9_listener() { return ctx.openModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " \u0445\u043E\u0447\u0443 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0430\u0442\u044C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, SupportCompanyGroupComponent_app_support_company_14_Template, 1, 1, "app-support-company", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.supportCompanies);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _support_company_support_company_component__WEBPACK_IMPORTED_MODULE_2__["SupportCompanyComponent"]], styles: ["@font-face {\n  font-family: \"Code Source Light\";\n  src: url('SourceCodePro-Light.ttf');\n}\n@font-face {\n  font-family: \"Code Source Medium\";\n  src: url('SourceCodePro-Medium.ttf');\n}\n@font-face {\n  font-family: \"Code Source Bold\";\n  src: url('SourceCodePro-Bold.ttf');\n}\n.support[_ngcontent-%COMP%] {\n  width: 1430px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  padding: 120px 0;\n  box-sizing: border-box;\n}\n.support__persons[_ngcontent-%COMP%] {\n  width: 60%;\n  flex-shrink: 0;\n  position: relative;\n}\n.support__persons[_ngcontent-%COMP%]   .snow-flake[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -200px;\n  top: calc(50% - 200px);\n  z-index: 0;\n}\n.support__persons_left[_ngcontent-%COMP%]   .snow-flake[_ngcontent-%COMP%] {\n  left: -200px;\n  top: calc(50% - 200px);\n}\n.support__myself[_ngcontent-%COMP%] {\n  padding-left: 130px;\n  box-sizing: border-box;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: column;\n  position: relative;\n  z-index: 1;\n}\n.support__myself[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  margin-bottom: 45px;\n}\n.support__myself[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  width: 210px;\n  height: 50px;\n  background-color: #f91b1b;\n  border-radius: 5px;\n  outline: none;\n  border: none;\n  text-transform: uppercase;\n  font-size: 14px;\n  color: white;\n  font-family: \"Code Source Bold\";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  margin-top: 37px;\n  cursor: pointer;\n}\n.support__myself[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  padding-right: 10px;\n}\n@media screen and (max-width: 1430px) {\n  .support[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media screen and (max-width: 1010px) {\n  .support[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n  }\n  .support__myself[_ngcontent-%COMP%] {\n    padding-left: 40px;\n    margin-bottom: 30px;\n  }\n  .support__persons[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .support__persons[_ngcontent-%COMP%]   .snow-flake[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media screen and (max-width: 530px) {\n  .support__myself[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3N1cHBvcnQtY29tcGFueS1ncm91cC9zdXBwb3J0LWNvbXBhbnktZ3JvdXAuY29tcG9uZW50LnNjc3MiLCJzcmMvdGhlbWUvbWl4aW5zLnNjc3MiLCJzcmMvdGhlbWUvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBQTtFQUNBLG1DQUFBO0FDQ0Y7QURFQTtFQUNFLGlDQUFBO0VBQ0Esb0NBQUE7QUNBRjtBREdBO0VBQ0UsK0JBQUE7RUFDQSxrQ0FBQTtBQ0RGO0FBUEE7RUFDRSxhQUFBO0VDSEEsYUFBQTtFQUNBLG1CQUZ1QztFQUd2Qyx1QkFIdUI7RUFJdkIsbUJBSjJEO0VETTNELGdCQUFBO0VBQ0Esc0JBQUE7QUFZRjtBQVZFO0VBQ0UsVUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQVlKO0FBVkk7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7QUFZTjtBQVJNO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0FBVVI7QUFMRTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7RUM5QkYsYUFBQTtFQUNBLHVCRDhCMkI7RUM3QjNCLHVCQUh1QjtFQUl2QixzQkQ0Qm1EO0VBQ2pELGtCQUFBO0VBQ0EsVUFBQTtBQVVKO0FBUkk7RUFDRSxtQkFBQTtBQVVOO0FBUEk7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCRTFDUTtFRjJDUixrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUN2Q0osZUR3Q3VCO0VDdkN2QixZRHVDNkI7RUFDekIsK0JBQUE7RUNoREosYUFBQTtFQUNBLG1CQUZ1QztFQUd2Qyx1QkFIdUI7RUFJdkIsbUJBSjJEO0VEbUR2RCxnQkFBQTtFQUNBLGVBQUE7QUFhTjtBQVhNO0VBQ0UsbUJBQUE7QUFhUjtBQU5BO0VBQ0U7SUFDRSxXQUFBO0VBU0Y7QUFDRjtBQU5BO0VBQ0U7SUNwRUEsYUFBQTtJQUNBLG1CQUZ1QztJQUd2Qyx1QkFIdUI7SUFJdkIsc0JEa0UrQjtFQVcvQjtFQVZFO0lBQ0Usa0JBQUE7SUFDQSxtQkFBQTtFQVlKO0VBVEU7SUFDRSxXQUFBO0VBV0o7RUFUSTtJQUNFLGFBQUE7RUFXTjtBQUNGO0FBTkE7RUFHTTtJQUNFLGVBQUE7RUFNTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zdXBwb3J0LWNvbXBhbnktZ3JvdXAvc3VwcG9ydC1jb21wYW55LWdyb3VwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnQ29kZSBTb3VyY2UgTGlnaHQnO1xuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL1NvdXJjZUNvZGVQcm8tTGlnaHQudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0NvZGUgU291cmNlIE1lZGl1bSc7XG4gIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvU291cmNlQ29kZVByby1NZWRpdW0udHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0NvZGUgU291cmNlIEJvbGQnO1xuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL1NvdXJjZUNvZGVQcm8tQm9sZC50dGYnKTtcbn1cbiIsIkBpbXBvcnQgJy4uLy4uLy4uL3RoZW1lL21peGlucy5zY3NzJztcbkBpbXBvcnQgJy4uLy4uLy4uL3RoZW1lL2NvbG9ycy5zY3NzJztcbkBpbXBvcnQgJy4uLy4uLy4uL3RoZW1lL2ZvbnRzLnNjc3MnO1xuXG4uc3VwcG9ydCB7XG4gIHdpZHRoOiAxNDMwcHg7XG4gIEBpbmNsdWRlIGZsZXhNaXg7XG4gIHBhZGRpbmc6IDEyMHB4IDA7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cbiAgJl9fcGVyc29ucyB7XG4gICAgd2lkdGg6IDYwJTtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAuc25vdy1mbGFrZSB7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogLTIwMHB4O1xuICAgICAgdG9wOiBjYWxjKDUwJSAtIDIwMHB4KTtcbiAgICAgIHotaW5kZXg6IDA7XG4gICAgfVxuXG4gICAgJl9sZWZ0IHtcbiAgICAgIC5zbm93LWZsYWtlIHtcbiAgICAgICAgbGVmdDogLTIwMHB4O1xuICAgICAgICB0b3A6IGNhbGMoNTAlIC0gMjAwcHgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICZfX215c2VsZiB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMzBweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIEBpbmNsdWRlIGZsZXhNaXgoJGFsaWduOiBmbGV4LXN0YXJ0LCAkZGlyZWN0aW9uOiBjb2x1bW4pO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxO1xuXG4gICAgLmxvZ28ge1xuICAgICAgbWFyZ2luLWJvdHRvbTogNDVweDtcbiAgICB9XG5cbiAgICAuYnV0dG9uIHtcbiAgICAgIHdpZHRoOiAyMTBweDtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhY3RpdmUtZm9udDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgQGluY2x1ZGUgZm9udFN0eWxlKDE0cHgsIHdoaXRlKTtcbiAgICAgIGZvbnQtZmFtaWx5OiAnQ29kZSBTb3VyY2UgQm9sZCc7XG4gICAgICBAaW5jbHVkZSBmbGV4TWl4O1xuICAgICAgbWFyZ2luLXRvcDogMzdweDtcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgaW1nIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDMwcHgpIHtcbiAgLnN1cHBvcnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMTBweCkge1xuICAuc3VwcG9ydCB7XG4gICAgQGluY2x1ZGUgZmxleE1peCgkZGlyZWN0aW9uOiBjb2x1bW4pO1xuICAgICZfX215c2VsZiB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IDQwcHg7XG4gICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIH1cblxuICAgICZfX3BlcnNvbnMge1xuICAgICAgd2lkdGg6IDEwMCU7XG5cbiAgICAgIC5zbm93LWZsYWtlIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTMwcHgpIHtcbiAgLnN1cHBvcnQge1xuICAgICZfX215c2VsZiB7XG4gICAgICAudGl0bGUge1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCJcbkBtaXhpbiBmbGV4TWl4KCRqdXN0aWZ5OiBjZW50ZXIsICRhbGlnbjogY2VudGVyLCAkZGlyZWN0aW9uOiByb3cpIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6ICRhbGlnbjtcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcbiAgZmxleC1kaXJlY3Rpb246ICRkaXJlY3Rpb247XG59XG5cbkBtaXhpbiBmb250U3R5bGUoJHNpemU6IDE4cHgsICRjb2xvcjogJG1haW4tZm9udCkge1xuICBmb250LXNpemU6ICRzaXplO1xuICBjb2xvcjogJGNvbG9yO1xufVxuIiwiJG1haW4tZm9udDogIzAwMDAwMDtcbiRtdXRlZC1mb250OiAjNDg0ODQ5O1xuJGFjdGl2ZS1mb250OiAjZjkxYjFiO1xuJG9kZC1iYWNrZ3JvdW5kOiAjZjBmMGYwO1xuJGRhcmstY29sb3I6ICMyODJlMzU7XG4kbWVkaXVtLWNvbG9yOiAjMmUzNDNhO1xuJGxpZ2h0LWNvbG9yOiAjZjBmMGYwO1xuIl19 */"] });
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
BandLogoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BandLogoComponent, selectors: [["app-band-logo"]], inputs: { data: "data" }, decls: 4, vars: 1, consts: [[1, "logo"], ["src", "assets/logo_empty.png", "alt", "", 1, "logo__image"], [1, "logo__text"]], template: function BandLogoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.data);
    } }, styles: ["@font-face {\n  font-family: \"Code Source Light\";\n  src: url('SourceCodePro-Light.ttf');\n}\n@font-face {\n  font-family: \"Code Source Medium\";\n  src: url('SourceCodePro-Medium.ttf');\n}\n@font-face {\n  font-family: \"Code Source Bold\";\n  src: url('SourceCodePro-Bold.ttf');\n}\n.logo[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  position: relative;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: row;\n}\n.logo__image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.logo__text[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-family: \"Code Source Bold\";\n  font-size: 35px;\n  color: white;\n  margin-top: 14px;\n  position: relative;\n  z-index: 1;\n  filter: blur(0.5px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2JhbmQtbG9nby9iYW5kLWxvZ28uY29tcG9uZW50LnNjc3MiLCJzcmMvdGhlbWUvbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBQTtFQUNBLG1DQUFBO0FDQ0Y7QURFQTtFQUNFLGlDQUFBO0VBQ0Esb0NBQUE7QUNBRjtBREdBO0VBQ0UsK0JBQUE7RUFDQSxrQ0FBQTtBQ0RGO0FBUkE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VDSkEsYUFBQTtFQUNBLHVCREl5QjtFQ0h6Qix1QkFIdUI7RUFJdkIsbUJBSjJEO0FEbUI3RDtBQVhFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0FBYUo7QUFWRTtFQUNFLHlCQUFBO0VBQ0EsK0JBQUE7RUNWRixlRFdxQjtFQ1ZyQixZRFUyQjtFQUN6QixnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLG1CQUFBO0FBYUoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2JhbmQtbG9nby9iYW5kLWxvZ28uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdDb2RlIFNvdXJjZSBMaWdodCc7XG4gIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvU291cmNlQ29kZVByby1MaWdodC50dGYnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnQ29kZSBTb3VyY2UgTWVkaXVtJztcbiAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9Tb3VyY2VDb2RlUHJvLU1lZGl1bS50dGYnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnQ29kZSBTb3VyY2UgQm9sZCc7XG4gIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvU291cmNlQ29kZVByby1Cb2xkLnR0ZicpO1xufVxuIiwiQGltcG9ydCAnLi4vLi4vLi4vdGhlbWUvbWl4aW5zLnNjc3MnO1xuQGltcG9ydCAnLi4vLi4vLi4vdGhlbWUvZm9udHMuc2Nzcyc7XG5cbi5sb2dvIHtcbiAgd2lkdGg6IDEwMHB4O1xuICBoZWlnaHQ6IDEwMHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIEBpbmNsdWRlIGZsZXhNaXgoJGFsaWduOiBmbGV4LXN0YXJ0KTtcblxuICAmX19pbWFnZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgfVxuXG4gICZfX3RleHQge1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgZm9udC1mYW1pbHk6IFwiQ29kZSBTb3VyY2UgQm9sZFwiO1xuICAgIEBpbmNsdWRlIGZvbnRTdHlsZSgzNXB4LCB3aGl0ZSk7XG4gICAgbWFyZ2luLXRvcDogMTRweDtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgei1pbmRleDogMTtcbiAgICBmaWx0ZXI6IGJsdXIoMC41cHgpO1xuICB9XG59XG4iLCJcbkBtaXhpbiBmbGV4TWl4KCRqdXN0aWZ5OiBjZW50ZXIsICRhbGlnbjogY2VudGVyLCAkZGlyZWN0aW9uOiByb3cpIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6ICRhbGlnbjtcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcbiAgZmxleC1kaXJlY3Rpb246ICRkaXJlY3Rpb247XG59XG5cbkBtaXhpbiBmb250U3R5bGUoJHNpemU6IDE4cHgsICRjb2xvcjogJG1haW4tZm9udCkge1xuICBmb250LXNpemU6ICRzaXplO1xuICBjb2xvcjogJGNvbG9yO1xufVxuIl19 */"] });
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
BandItemComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BandItemComponent, selectors: [["app-band-item"]], inputs: { band: "band" }, decls: 10, vars: 4, consts: [[1, "band"], [1, "band__poster"], [1, "band__poster-layout"], ["src", "assets/play.png", "alt", ""], [1, "band__poster-layout-text"], [1, "band__name"], [1, "band__genre"]], template: function BandItemComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, styles: ["@font-face {\n  font-family: \"Code Source Light\";\n  src: url('SourceCodePro-Light.ttf');\n}\n@font-face {\n  font-family: \"Code Source Medium\";\n  src: url('SourceCodePro-Medium.ttf');\n}\n@font-face {\n  font-family: \"Code Source Bold\";\n  src: url('SourceCodePro-Bold.ttf');\n}\n[_nghost-%COMP%] {\n  width: 31%;\n  margin-right: 20px;\n}\n@media screen and (max-width: 896px) {\n  [_nghost-%COMP%] {\n    width: 46%;\n  }\n}\n@media screen and (max-width: 600px) {\n  [_nghost-%COMP%] {\n    width: 100%;\n  }\n}\n.band[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 60px;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: column;\n  cursor: pointer;\n}\n.band[_ngcontent-%COMP%]:hover   .band__poster-layout[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.band__poster[_ngcontent-%COMP%] {\n  width: 100%;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  margin-bottom: 30px;\n  position: relative;\n}\n.band__poster[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: block;\n  padding-bottom: 100%;\n}\n.band__poster-layout[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  background: rgba(249, 27, 27, 0.6);\n  z-index: 1;\n  text-transform: uppercase;\n  font-size: 14px;\n  color: white;\n  font-family: \"Code Source Light\";\n  opacity: 0;\n  transition: 0.4s;\n}\n.band__poster-layout-text[_ngcontent-%COMP%] {\n  margin-top: 17px;\n}\n.band__name[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #000000;\n  font-family: \"Code Source Bold\";\n  margin-bottom: 20px;\n}\n.band__genre[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #f91b1b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2JhbmQtaXRlbS9iYW5kLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzcmMvdGhlbWUvbWl4aW5zLnNjc3MiLCJzcmMvdGhlbWUvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBQTtFQUNBLG1DQUFBO0FDQ0Y7QURFQTtFQUNFLGlDQUFBO0VBQ0Esb0NBQUE7QUNBRjtBREdBO0VBQ0UsK0JBQUE7RUFDQSxrQ0FBQTtBQ0RGO0FBUEE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7QUFTRjtBQVBFO0VBSkY7SUFLSSxVQUFBO0VBVUY7QUFDRjtBQVJFO0VBUkY7SUFTSSxXQUFBO0VBV0Y7QUFDRjtBQVJBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VDakJBLGFBQUE7RUFDQSx1QkRpQnlCO0VDaEJ6Qix1QkFIdUI7RUFJdkIsc0JEZWlEO0VBQ2pELGVBQUE7QUFjRjtBQVhJO0VBQ0UsVUFBQTtBQWFOO0FBVEU7RUFDRSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQVdKO0FBVEk7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBV047QUFSSTtFQ3pDRixhQUFBO0VBQ0EsbUJBRnVDO0VBR3ZDLHVCQUh1QjtFQUl2QixzQkR1Q2lDO0VBQzdCLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLGtDQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VDM0NKLGVENEN1QjtFQzNDdkIsWUQyQzZCO0VBQ3pCLGdDQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBY047QUFaTTtFQUNFLGdCQUFBO0FBY1I7QUFURTtFQ3ZEQSxlRHdEcUI7RUN2RHJCLGNDVlU7RUZrRVIsK0JBQUE7RUFDQSxtQkFBQTtBQVlKO0FBVEU7RUM3REEsZUFEc0I7RUFFdEIsY0NSWTtBRmlGZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmFuZC1pdGVtL2JhbmQtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0NvZGUgU291cmNlIExpZ2h0JztcbiAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9Tb3VyY2VDb2RlUHJvLUxpZ2h0LnR0ZicpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdDb2RlIFNvdXJjZSBNZWRpdW0nO1xuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL1NvdXJjZUNvZGVQcm8tTWVkaXVtLnR0ZicpO1xufVxuXG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdDb2RlIFNvdXJjZSBCb2xkJztcbiAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9Tb3VyY2VDb2RlUHJvLUJvbGQudHRmJyk7XG59XG4iLCJAaW1wb3J0ICcuLi8uLi8uLi90aGVtZS9taXhpbnMuc2Nzcyc7XG5AaW1wb3J0ICcuLi8uLi8uLi90aGVtZS9jb2xvcnMuc2Nzcyc7XG5AaW1wb3J0ICcuLi8uLi8uLi90aGVtZS9mb250cy5zY3NzJztcblxuOmhvc3Qge1xuICB3aWR0aDogMzElO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogODk2cHgpIHtcbiAgICB3aWR0aDogNDYlO1xuICB9XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG4uYmFuZCB7XG4gIHdpZHRoOiAxMDAlO1xuICBtYXJnaW4tYm90dG9tOiA2MHB4O1xuICBAaW5jbHVkZSBmbGV4TWl4KCRhbGlnbjogZmxleC1zdGFydCwgJGRpcmVjdGlvbjogY29sdW1uKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuXG4gICY6aG92ZXIge1xuICAgIC5iYW5kX19wb3N0ZXItbGF5b3V0IHtcbiAgICAgIG9wYWNpdHk6IDE7XG4gICAgfVxuICB9XG5cbiAgJl9fcG9zdGVyIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gICAgJjo6YWZ0ZXIge1xuICAgICAgY29udGVudDogJyc7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHBhZGRpbmctYm90dG9tOiAxMDAlO1xuICAgIH1cblxuICAgICYtbGF5b3V0IHtcbiAgICAgIEBpbmNsdWRlIGZsZXhNaXgoJGRpcmVjdGlvbjogY29sdW1uKTtcbiAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogMDtcbiAgICAgIHRvcDogMDtcbiAgICAgIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yOiAkYWN0aXZlLWZvbnQsICRhbHBoYTogLjYpO1xuICAgICAgei1pbmRleDogMTtcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICBAaW5jbHVkZSBmb250U3R5bGUoMTRweCwgd2hpdGUpO1xuICAgICAgZm9udC1mYW1pbHk6ICdDb2RlIFNvdXJjZSBMaWdodCc7XG4gICAgICBvcGFjaXR5OiAwO1xuICAgICAgdHJhbnNpdGlvbjogLjRzO1xuXG4gICAgICAmLXRleHQge1xuICAgICAgICBtYXJnaW4tdG9wOiAxN3B4O1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gICZfX25hbWUge1xuICAgIEBpbmNsdWRlIGZvbnRTdHlsZSgyMHB4KTtcbiAgICBmb250LWZhbWlseTogJ0NvZGUgU291cmNlIEJvbGQnO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIH1cblxuICAmX19nZW5yZSB7XG4gICAgQGluY2x1ZGUgZm9udFN0eWxlKCRjb2xvcjogJGFjdGl2ZS1mb250KTtcbiAgfVxuXG59XG4iLCJcbkBtaXhpbiBmbGV4TWl4KCRqdXN0aWZ5OiBjZW50ZXIsICRhbGlnbjogY2VudGVyLCAkZGlyZWN0aW9uOiByb3cpIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6ICRhbGlnbjtcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcbiAgZmxleC1kaXJlY3Rpb246ICRkaXJlY3Rpb247XG59XG5cbkBtaXhpbiBmb250U3R5bGUoJHNpemU6IDE4cHgsICRjb2xvcjogJG1haW4tZm9udCkge1xuICBmb250LXNpemU6ICRzaXplO1xuICBjb2xvcjogJGNvbG9yO1xufVxuIiwiJG1haW4tZm9udDogIzAwMDAwMDtcbiRtdXRlZC1mb250OiAjNDg0ODQ5O1xuJGFjdGl2ZS1mb250OiAjZjkxYjFiO1xuJG9kZC1iYWNrZ3JvdW5kOiAjZjBmMGYwO1xuJGRhcmstY29sb3I6ICMyODJlMzU7XG4kbWVkaXVtLWNvbG9yOiAjMmUzNDNhO1xuJGxpZ2h0LWNvbG9yOiAjZjBmMGYwO1xuIl19 */"] });
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("c ", ctx.company.since, "");
    } }, styles: [".person[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  color: white;\n  margin-bottom: 30px;\n  position: relative;\n  z-index: 1;\n}\n.person__status[_ngcontent-%COMP%] {\n  width: 65%;\n  height: 240px;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: column;\n  box-sizing: border-box;\n  padding-left: 30px;\n  background-color: #282e35;\n  flex-shrink: 0;\n  text-transform: uppercase;\n}\n.person__status[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-family: \"Code Source Bold\";\n  font-size: 20px;\n  margin-bottom: 20px;\n  margin-top: 20px;\n}\n.person__status[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #f91b1b;\n}\n.person__pay[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 240px;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: column;\n  box-sizing: border-box;\n  padding-left: 30px;\n  background-color: #2e343a;\n  padding-right: 20px;\n}\n.person__pay[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-family: \"Code Source Bold\";\n  text-transform: uppercase;\n}\n.person__pay[_ngcontent-%COMP%]   .text_small[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.person__pay[_ngcontent-%COMP%]   .text_medium[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n@media screen and (max-width: 530px) {\n  .person[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .person__status[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdXBwb3J0LWNvbXBhbnkvc3VwcG9ydC1jb21wYW55LmNvbXBvbmVudC5zY3NzIiwic3JjL3RoZW1lL21peGlucy5zY3NzIiwic3JjL3RoZW1lL2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsV0FBQTtFQ0ZBLGFBQUE7RUFDQSxtQkFGdUM7RUFHdkMsdUJBSHVCO0VBSXZCLG1CQUoyRDtFREszRCxpQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUNGO0FBQ0U7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQ1pGLGFBQUE7RUFDQSx1QkRZMkI7RUNYM0IsdUJBSHVCO0VBSXZCLHNCRFVtRDtFQUNqRCxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJFZFM7RUZlVCxjQUFBO0VBQ0EseUJBQUE7QUFJSjtBQUZJO0VBQ0UsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUlOO0FBREk7RUNwQkYsZUFEc0I7RUFFdEIsY0NSWTtBRmdDZDtBQUFFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUNsQ0YsYUFBQTtFQUNBLHVCRGtDMkI7RUNqQzNCLHVCQUh1QjtFQUl2QixzQkRnQ21EO0VBQ2pELHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkVuQ1c7RUZvQ1gsbUJBQUE7QUFLSjtBQUhJO0VBQ0UsZUFBQTtFQUNBLCtCQUFBO0VBQ0EseUJBQUE7QUFLTjtBQUhNO0VBQ0UsZUFBQTtBQUtSO0FBRk07RUFDRSxlQUFBO0FBSVI7QUFFQTtFQUNFO0lBQ0Usc0JBQUE7RUFDRjtFQUNFO0lBQ0UsV0FBQTtFQUNKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3N1cHBvcnQtY29tcGFueS9zdXBwb3J0LWNvbXBhbnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vdGhlbWUvbWl4aW5zLnNjc3NcIjtcbkBpbXBvcnQgXCIuLi8uLi8uLi90aGVtZS9jb2xvcnMuc2Nzc1wiO1xuXG4ucGVyc29uIHtcbiAgd2lkdGg6IDEwMCU7XG4gIEBpbmNsdWRlIGZsZXhNaXg7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBjb2xvcjogd2hpdGU7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcblxuICAmX19zdGF0dXMge1xuICAgIHdpZHRoOiA2NSU7XG4gICAgaGVpZ2h0OiAyNDBweDtcbiAgICBAaW5jbHVkZSBmbGV4TWl4KCRhbGlnbjogZmxleC1zdGFydCwgJGRpcmVjdGlvbjogY29sdW1uKTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyay1jb2xvcjtcbiAgICBmbGV4LXNocmluazogMDtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gICAgLm5hbWUge1xuICAgICAgZm9udC1mYW1pbHk6ICdDb2RlIFNvdXJjZSBCb2xkJztcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIH1cblxuICAgIC5yb2xlIHtcbiAgICAgIEBpbmNsdWRlIGZvbnRTdHlsZSgkY29sb3I6ICRhY3RpdmUtZm9udCk7XG4gICAgfVxuICB9XG5cbiAgJl9fcGF5IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDI0MHB4O1xuICAgIEBpbmNsdWRlIGZsZXhNaXgoJGFsaWduOiBmbGV4LXN0YXJ0LCAkZGlyZWN0aW9uOiBjb2x1bW4pO1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRtZWRpdW0tY29sb3I7XG4gICAgcGFkZGluZy1yaWdodDogMjBweDtcblxuICAgIC50ZXh0IHtcbiAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgIGZvbnQtZmFtaWx5OiAnQ29kZSBTb3VyY2UgQm9sZCc7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXG4gICAgICAmX3NtYWxsIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgfVxuXG4gICAgICAmX21lZGl1bSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTMwcHgpIHtcbiAgLnBlcnNvbiB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgICZfX3N0YXR1cyB7XG4gICAgICB3aWR0aDogMTAwJTtcbiAgICB9XG4gIH1cbn1cbiIsIlxuQG1peGluIGZsZXhNaXgoJGp1c3RpZnk6IGNlbnRlciwgJGFsaWduOiBjZW50ZXIsICRkaXJlY3Rpb246IHJvdykge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogJGFsaWduO1xuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcbn1cblxuQG1peGluIGZvbnRTdHlsZSgkc2l6ZTogMThweCwgJGNvbG9yOiAkbWFpbi1mb250KSB7XG4gIGZvbnQtc2l6ZTogJHNpemU7XG4gIGNvbG9yOiAkY29sb3I7XG59XG4iLCIkbWFpbi1mb250OiAjMDAwMDAwO1xuJG11dGVkLWZvbnQ6ICM0ODQ4NDk7XG4kYWN0aXZlLWZvbnQ6ICNmOTFiMWI7XG4kb2RkLWJhY2tncm91bmQ6ICNmMGYwZjA7XG4kZGFyay1jb2xvcjogIzI4MmUzNTtcbiRtZWRpdW0tY29sb3I6ICMyZTM0M2E7XG4kbGlnaHQtY29sb3I6ICNmMGYwZjA7XG4iXX0= */"] });
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
SupportPersonGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SupportPersonGroupComponent, selectors: [["app-support-person-group"]], inputs: { supportPersons: "supportPersons" }, decls: 15, vars: 1, consts: [[1, "support"], [1, "support__persons"], [3, "person", 4, "ngFor", "ngForOf"], [1, "support__myself"], ["src", "assets/snow_flake.png", "alt", "", 1, "snow-flake"], ["src", "assets/logo_main.png", "alt", "", 1, "logo"], [1, "title"], ["href", "https://persik.by/private/tv-tarify", "target", "_blank", 1, "button"], ["src", "assets/play.png", "alt", ""], [3, "person"]], template: function SupportPersonGroupComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _support_person_support_person_component__WEBPACK_IMPORTED_MODULE_2__["SupportPersonComponent"]], styles: ["@font-face {\n  font-family: \"Code Source Light\";\n  src: url('SourceCodePro-Light.ttf');\n}\n@font-face {\n  font-family: \"Code Source Medium\";\n  src: url('SourceCodePro-Medium.ttf');\n}\n@font-face {\n  font-family: \"Code Source Bold\";\n  src: url('SourceCodePro-Bold.ttf');\n}\n.support[_ngcontent-%COMP%] {\n  width: 1430px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  padding: 120px 0;\n  box-sizing: border-box;\n}\n.support__persons[_ngcontent-%COMP%] {\n  width: 60%;\n  flex-shrink: 0;\n  position: relative;\n  height: 510px;\n  overflow: hidden;\n  overflow-y: auto;\n  z-index: 10;\n}\n.support__myself[_ngcontent-%COMP%] {\n  padding-left: 130px;\n  box-sizing: border-box;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: column;\n  position: relative;\n  z-index: 1;\n}\n.support__myself[_ngcontent-%COMP%]   .snow-flake[_ngcontent-%COMP%] {\n  position: absolute;\n  left: -200px;\n  top: calc(50% - 200px);\n  z-index: 0;\n}\n.support__myself[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  margin-bottom: 45px;\n}\n.support__myself[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  width: 210px;\n  height: 50px;\n  background-color: #f91b1b;\n  border-radius: 5px;\n  outline: none;\n  border: none;\n  text-transform: uppercase;\n  font-size: 14px;\n  color: white;\n  font-family: \"Code Source Bold\";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  margin-top: 37px;\n  text-decoration: none;\n}\n.support__myself[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  padding-right: 10px;\n}\n@media screen and (max-width: 1430px) {\n  .support[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media screen and (max-width: 1010px) {\n  .support[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column-reverse;\n  }\n  .support__myself[_ngcontent-%COMP%] {\n    padding-left: 40px;\n    margin-bottom: 30px;\n  }\n  .support__persons[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .support__persons[_ngcontent-%COMP%]   .snow-flake[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #dfdfdf;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #f91b1b;\n  height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3N1cHBvcnQtcGVyc29uLWdyb3VwL3N1cHBvcnQtcGVyc29uLWdyb3VwLmNvbXBvbmVudC5zY3NzIiwic3JjL3RoZW1lL21peGlucy5zY3NzIiwic3JjL3RoZW1lL2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0NBQUE7RUFDQSxtQ0FBQTtBQ0NGO0FERUE7RUFDRSxpQ0FBQTtFQUNBLG9DQUFBO0FDQUY7QURHQTtFQUNFLCtCQUFBO0VBQ0Esa0NBQUE7QUNERjtBQVBBO0VBQ0UsYUFBQTtFQ0hBLGFBQUE7RUFDQSxtQkFGdUM7RUFHdkMsdUJBSHVCO0VBSXZCLG1CQUoyRDtFRE0zRCxnQkFBQTtFQUNBLHNCQUFBO0FBWUY7QUFWRTtFQUNFLFVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsZ0JBQUE7RUFDQSxnQkFBQTtFQUNBLFdBQUE7QUFZSjtBQVRFO0VBQ0UsbUJBQUE7RUFDQSxzQkFBQTtFQ3BCRixhQUFBO0VBQ0EsdUJEb0IyQjtFQ25CM0IsdUJBSHVCO0VBSXZCLHNCRGtCbUQ7RUFDakQsa0JBQUE7RUFDQSxVQUFBO0FBY0o7QUFaSTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtBQWNOO0FBWEk7RUFDRSxtQkFBQTtBQWFOO0FBVkk7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCRXZDUTtFRndDUixrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUNwQ0osZURxQ3VCO0VDcEN2QixZRG9DNkI7RUFDekIsK0JBQUE7RUM3Q0osYUFBQTtFQUNBLG1CQUZ1QztFQUd2Qyx1QkFIdUI7RUFJdkIsbUJBSjJEO0VEZ0R2RCxnQkFBQTtFQUNBLHFCQUFBO0FBZ0JOO0FBZE07RUFDRSxtQkFBQTtBQWdCUjtBQVRBO0VBQ0U7SUFDRSxXQUFBO0VBWUY7QUFDRjtBQVRBO0VBQ0U7SUNqRUEsYUFBQTtJQUNBLG1CQUZ1QztJQUd2Qyx1QkFIdUI7SUFJdkIsOEJEK0QrQjtFQWMvQjtFQWJFO0lBQ0Usa0JBQUE7SUFDQSxtQkFBQTtFQWVKO0VBWkU7SUFDRSxXQUFBO0VBY0o7RUFaSTtJQUNFLGFBQUE7RUFjTjtBQUNGO0FBUkE7RUFDRSxVQUFBO0FBVUY7QUFQQSxVQUFBO0FBQ0E7RUFDRSxtQkFBQTtBQVVGO0FBUEEsV0FBQTtBQUNBO0VBQ0UsbUJFOUZZO0VGK0ZaLFlBQUE7QUFVRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3VwcG9ydC1wZXJzb24tZ3JvdXAvc3VwcG9ydC1wZXJzb24tZ3JvdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6ICdDb2RlIFNvdXJjZSBMaWdodCc7XG4gIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvU291cmNlQ29kZVByby1MaWdodC50dGYnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnQ29kZSBTb3VyY2UgTWVkaXVtJztcbiAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9Tb3VyY2VDb2RlUHJvLU1lZGl1bS50dGYnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnQ29kZSBTb3VyY2UgQm9sZCc7XG4gIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvU291cmNlQ29kZVByby1Cb2xkLnR0ZicpO1xufVxuIiwiQGltcG9ydCAnLi4vLi4vLi4vdGhlbWUvbWl4aW5zLnNjc3MnO1xuQGltcG9ydCAnLi4vLi4vLi4vdGhlbWUvY29sb3JzLnNjc3MnO1xuQGltcG9ydCAnLi4vLi4vLi4vdGhlbWUvZm9udHMuc2Nzcyc7XG5cbi5zdXBwb3J0IHtcbiAgd2lkdGg6IDE0MzBweDtcbiAgQGluY2x1ZGUgZmxleE1peDtcbiAgcGFkZGluZzogMTIwcHggMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcblxuICAmX19wZXJzb25zIHtcbiAgICB3aWR0aDogNjAlO1xuICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDUxMHB4O1xuICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgb3ZlcmZsb3cteTogYXV0bztcbiAgICB6LWluZGV4OiAxMDtcbiAgfVxuXG4gICZfX215c2VsZiB7XG4gICAgcGFkZGluZy1sZWZ0OiAxMzBweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIEBpbmNsdWRlIGZsZXhNaXgoJGFsaWduOiBmbGV4LXN0YXJ0LCAkZGlyZWN0aW9uOiBjb2x1bW4pO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICB6LWluZGV4OiAxO1xuXG4gICAgLnNub3ctZmxha2Uge1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgbGVmdDogLTIwMHB4O1xuICAgICAgdG9wOiBjYWxjKDUwJSAtIDIwMHB4KTtcbiAgICAgIHotaW5kZXg6IDA7XG4gICAgfVxuXG4gICAgLmxvZ28ge1xuICAgICAgbWFyZ2luLWJvdHRvbTogNDVweDtcbiAgICB9XG5cbiAgICAuYnV0dG9uIHtcbiAgICAgIHdpZHRoOiAyMTBweDtcbiAgICAgIGhlaWdodDogNTBweDtcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICRhY3RpdmUtZm9udDtcbiAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgIG91dGxpbmU6IG5vbmU7XG4gICAgICBib3JkZXI6IG5vbmU7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgQGluY2x1ZGUgZm9udFN0eWxlKDE0cHgsIHdoaXRlKTtcbiAgICAgIGZvbnQtZmFtaWx5OiAnQ29kZSBTb3VyY2UgQm9sZCc7XG4gICAgICBAaW5jbHVkZSBmbGV4TWl4O1xuICAgICAgbWFyZ2luLXRvcDogMzdweDtcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAgICAgaW1nIHtcbiAgICAgICAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cblxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDMwcHgpIHtcbiAgLnN1cHBvcnQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMTBweCkge1xuICAuc3VwcG9ydCB7XG4gICAgQGluY2x1ZGUgZmxleE1peCgkZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZSk7XG4gICAgJl9fbXlzZWxmIHtcbiAgICAgIHBhZGRpbmctbGVmdDogNDBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgfVxuXG4gICAgJl9fcGVyc29ucyB7XG4gICAgICB3aWR0aDogMTAwJTtcblxuICAgICAgLnNub3ctZmxha2Uge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuXG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogNHB4O1xufVxuXG4vKiBUcmFjayAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XG4gIGJhY2tncm91bmQ6ICNkZmRmZGY7XG59XG5cbi8qIEhhbmRsZSAqL1xuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XG4gIGJhY2tncm91bmQ6ICRhY3RpdmUtZm9udDtcbiAgaGVpZ2h0OiA0MHB4O1xufVxuIiwiXG5AbWl4aW4gZmxleE1peCgkanVzdGlmeTogY2VudGVyLCAkYWxpZ246IGNlbnRlciwgJGRpcmVjdGlvbjogcm93KSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiAkYWxpZ247XG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XG4gIGZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xufVxuXG5AbWl4aW4gZm9udFN0eWxlKCRzaXplOiAxOHB4LCAkY29sb3I6ICRtYWluLWZvbnQpIHtcbiAgZm9udC1zaXplOiAkc2l6ZTtcbiAgY29sb3I6ICRjb2xvcjtcbn1cbiIsIiRtYWluLWZvbnQ6ICMwMDAwMDA7XG4kbXV0ZWQtZm9udDogIzQ4NDg0OTtcbiRhY3RpdmUtZm9udDogI2Y5MWIxYjtcbiRvZGQtYmFja2dyb3VuZDogI2YwZjBmMDtcbiRkYXJrLWNvbG9yOiAjMjgyZTM1O1xuJG1lZGl1bS1jb2xvcjogIzJlMzQzYTtcbiRsaWdodC1jb2xvcjogI2YwZjBmMDtcbiJdfQ== */"] });
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
    ngOnInit() {
        this.descriptionText = this.getDescriptionText(this.bands[this.index].description);
    }
    closePopup() {
        this.hidePopup.next();
    }
    nextSlide() {
        this.changeSlide.next('next');
        this.descriptionText = this.getDescriptionText(this.bands[this.index].description);
    }
    prevSlide() {
        this.changeSlide.next('prev');
        this.descriptionText = this.getDescriptionText(this.bands[this.index].description);
    }
    getDescriptionText(description) {
        const result = (description === null || description === void 0 ? void 0 : description.length) > 400 ? description.slice(0, 400) + '...' : description;
        return result;
    }
}
BandPopupComponent.ɵfac = function BandPopupComponent_Factory(t) { return new (t || BandPopupComponent)(); };
BandPopupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BandPopupComponent, selectors: [["app-band-popup"]], inputs: { bands: "bands", index: "index" }, outputs: { changeSlide: "changeSlide", hidePopup: "hidePopup" }, decls: 16, vars: 4, consts: [[1, "wrapper", 3, "click"], ["app-stop-propagation", "", 1, "popup"], [1, "close", 3, "click"], [1, "arrow", 3, "click"], [1, "content"], ["alt", "", 1, "poster", 3, "src"], [1, "name"], [1, "genre"], [1, "description"]], template: function BandPopupComponent_Template(rf, ctx) { if (rf & 1) {
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
    } }, directives: [_directives_stop_propagation_directice__WEBPACK_IMPORTED_MODULE_1__["StopPropagationDirective"]], styles: ["@font-face {\n  font-family: \"Code Source Light\";\n  src: url('SourceCodePro-Light.ttf');\n}\n@font-face {\n  font-family: \"Code Source Medium\";\n  src: url('SourceCodePro-Medium.ttf');\n}\n@font-face {\n  font-family: \"Code Source Bold\";\n  src: url('SourceCodePro-Bold.ttf');\n}\n.wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n  background: rgba(0, 0, 0, 0.6);\n  position: fixed;\n  z-index: 100;\n  left: 0;\n  top: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n}\n.wrapper[_ngcontent-%COMP%]   .popup[_ngcontent-%COMP%] {\n  width: 95%;\n  height: 95%;\n  background-color: white;\n  min-width: 320px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  position: relative;\n  padding: 25px 0;\n  box-sizing: border-box;\n}\n.wrapper[_ngcontent-%COMP%]   .popup[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  text-align: center;\n}\n.wrapper[_ngcontent-%COMP%]   .popup[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  color: black;\n  text-transform: uppercase;\n  font-family: \"Code Source Bold\";\n  margin-bottom: 10px;\n}\n.wrapper[_ngcontent-%COMP%]   .popup[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .genre[_ngcontent-%COMP%] {\n  color: #f91b1b;\n  margin-bottom: 10px;\n}\n.wrapper[_ngcontent-%COMP%]   .popup[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .description[_ngcontent-%COMP%] {\n  font-size: 13px;\n  color: #484849;\n}\n.wrapper[_ngcontent-%COMP%]   .popup[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .poster[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 15px;\n  max-width: 440px;\n}\n.wrapper[_ngcontent-%COMP%]   .popup[_ngcontent-%COMP%]   .arrow[_ngcontent-%COMP%] {\n  font-size: 40px;\n  padding: 0 25px;\n  cursor: pointer;\n  box-sizing: border-box;\n}\n.wrapper[_ngcontent-%COMP%]   .popup[_ngcontent-%COMP%]   .close[_ngcontent-%COMP%] {\n  font-size: 25px;\n  cursor: pointer;\n  position: absolute;\n  right: 10px;\n  top: 10px;\n  color: gray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2JhbmQtcG9wdXAvYmFuZC1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNyYy90aGVtZS9taXhpbnMuc2NzcyIsInNyYy90aGVtZS9jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdDQUFBO0VBQ0EsbUNBQUE7QUNDRjtBREVBO0VBQ0UsaUNBQUE7RUFDQSxvQ0FBQTtBQ0FGO0FER0E7RUFDRSwrQkFBQTtFQUNBLGtDQUFBO0FDREY7QUFQQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VDVEEsYUFBQTtFQUNBLG1CQUZ1QztFQUd2Qyx1QkFIdUI7RUFJdkIsbUJBSjJEO0FEdUI3RDtBQVZFO0VBQ0UsVUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLGdCQUFBO0VDaEJGLGFBQUE7RUFDQSxtQkFGdUM7RUFHdkMsdUJBSHVCO0VBSXZCLG1CQUoyRDtFRG1CekQsa0JBQUE7RUFDQSxlQUFBO0VBQ0Esc0JBQUE7QUFlSjtBQWJJO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUN4QkosYUFBQTtFQUNBLG1CQUZ1QztFQUd2Qyx1QkFIdUI7RUFJdkIsc0JEc0JpQztFQUM3QixrQkFBQTtBQWtCTjtBQWhCTTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLCtCQUFBO0VBQ0EsbUJBQUE7QUFrQlI7QUFmTTtFQUNFLGNFcENNO0VGcUNOLG1CQUFBO0FBaUJSO0FBZE07RUFDRSxlQUFBO0VBQ0EsY0UzQ0s7QUYyRGI7QUFiTTtFQUNFLFdBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FBZVI7QUFYSTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLHNCQUFBO0FBYU47QUFWSTtFQUNFLGVBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7QUFZTiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmFuZC1wb3B1cC9iYW5kLXBvcHVwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiAnQ29kZSBTb3VyY2UgTGlnaHQnO1xuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL1NvdXJjZUNvZGVQcm8tTGlnaHQudHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0NvZGUgU291cmNlIE1lZGl1bSc7XG4gIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvU291cmNlQ29kZVByby1NZWRpdW0udHRmJyk7XG59XG5cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogJ0NvZGUgU291cmNlIEJvbGQnO1xuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL1NvdXJjZUNvZGVQcm8tQm9sZC50dGYnKTtcbn1cbiIsIkBpbXBvcnQgJy4uLy4uLy4uL3RoZW1lL21peGlucy5zY3NzJztcbkBpbXBvcnQgJy4uLy4uLy4uL3RoZW1lL2NvbG9ycy5zY3NzJztcbkBpbXBvcnQgJy4uLy4uLy4uL3RoZW1lL2ZvbnRzLnNjc3MnO1xuXG4ud3JhcHBlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMHZoO1xuICBiYWNrZ3JvdW5kOiByZ2JhKCRjb2xvcjogYmxhY2ssICRhbHBoYTogLjYpO1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHotaW5kZXg6IDEwMDtcbiAgbGVmdDogMDtcbiAgdG9wOiAwO1xuICBAaW5jbHVkZSBmbGV4TWl4O1xuXG4gIC5wb3B1cCB7XG4gICAgd2lkdGg6IDk1JTtcbiAgICBoZWlnaHQ6IDk1JTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgICBtaW4td2lkdGg6IDMyMHB4O1xuICAgIEBpbmNsdWRlIGZsZXhNaXg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDI1cHggMDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXG4gICAgLmNvbnRlbnQge1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICBAaW5jbHVkZSBmbGV4TWl4KCRkaXJlY3Rpb246IGNvbHVtbik7XG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgIC5uYW1lIHtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBmb250LWZhbWlseTogJ0NvZGUgU291cmNlIEJvbGQnO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgfVxuXG4gICAgICAuZ2VucmUge1xuICAgICAgICBjb2xvcjogJGFjdGl2ZS1mb250O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgfVxuXG4gICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIGNvbG9yOiAkbXV0ZWQtZm9udDtcbiAgICAgIH1cblxuICAgICAgLnBvc3RlciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICBtYXgtd2lkdGg6IDQ0MHB4O1xuICAgICAgfVxuICAgIH1cblxuICAgIC5hcnJvdyB7XG4gICAgICBmb250LXNpemU6IDQwcHg7XG4gICAgICBwYWRkaW5nOiAwIDI1cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIH1cblxuICAgIC5jbG9zZSB7XG4gICAgICBmb250LXNpemU6IDI1cHg7XG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICByaWdodDogMTBweDtcbiAgICAgIHRvcDogMTBweDtcbiAgICAgIGNvbG9yOiBncmF5O1xuICAgIH1cbiAgfVxufVxuIiwiXG5AbWl4aW4gZmxleE1peCgkanVzdGlmeTogY2VudGVyLCAkYWxpZ246IGNlbnRlciwgJGRpcmVjdGlvbjogcm93KSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiAkYWxpZ247XG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XG4gIGZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xufVxuXG5AbWl4aW4gZm9udFN0eWxlKCRzaXplOiAxOHB4LCAkY29sb3I6ICRtYWluLWZvbnQpIHtcbiAgZm9udC1zaXplOiAkc2l6ZTtcbiAgY29sb3I6ICRjb2xvcjtcbn1cbiIsIiRtYWluLWZvbnQ6ICMwMDAwMDA7XG4kbXV0ZWQtZm9udDogIzQ4NDg0OTtcbiRhY3RpdmUtZm9udDogI2Y5MWIxYjtcbiRvZGQtYmFja2dyb3VuZDogI2YwZjBmMDtcbiRkYXJrLWNvbG9yOiAjMjgyZTM1O1xuJG1lZGl1bS1jb2xvcjogIzJlMzQzYTtcbiRsaWdodC1jb2xvcjogI2YwZjBmMDtcbiJdfQ== */"] });
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