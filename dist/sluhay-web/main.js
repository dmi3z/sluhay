(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Development\sluhay-web\src\main.ts */"zUnb");


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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"]], styles: [".header[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 125px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  font-family: \"Code Source Medium\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  background: linear-gradient(to bottom, black, transparent);\n  z-index: 2;\n}\n.header__item[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  cursor: pointer;\n  margin-right: 38px;\n  color: white;\n  outline: none;\n}\n.header__item[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n@media screen and (max-width: 1430px) {\n  .header__item[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL3RoZW1lL21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUNGQSxhQUFBO0VBQ0EsbUJBRnVDO0VBR3ZDLHVCQUh1QjtFQUl2QixtQkFKMkQ7RURLM0QsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsMERBQUE7RUFDQSxVQUFBO0FBRUY7QUFBRTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7QUFFSjtBQUFJO0VBQ0UsZUFBQTtBQUVOO0FBR0E7RUFFSTtJQUNFLGFBQUE7RUFESjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vdGhlbWUvbWl4aW5zLnNjc3MnO1xyXG5cclxuLmhlYWRlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMjVweDtcclxuICBAaW5jbHVkZSBmbGV4TWl4O1xyXG4gIGZvbnQtZmFtaWx5OiAnQ29kZSBTb3VyY2UgTWVkaXVtJztcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgbGVmdDogMDtcclxuICB0b3A6IDA7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSwgYmxhY2ssIHRyYW5zcGFyZW50KTtcclxuICB6LWluZGV4OiAyO1xyXG5cclxuICAmX19pdGVtIHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDM4cHg7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG5cclxuICAgICY6bGFzdC1jaGlsZCB7XHJcbiAgICAgIG1hcmdpbi1yaWdodDogMDtcclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0MzBweCkge1xyXG4gIC5oZWFkZXIge1xyXG4gICAgJl9faXRlbSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIlxyXG5AbWl4aW4gZmxleE1peCgkanVzdGlmeTogY2VudGVyLCAkYWxpZ246IGNlbnRlciwgJGRpcmVjdGlvbjogcm93KSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogJGFsaWduO1xyXG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XHJcbiAgZmxleC1kaXJlY3Rpb246ICRkaXJlY3Rpb247XHJcbn1cclxuXHJcbkBtaXhpbiBmb250U3R5bGUoJHNpemU6IDE4cHgsICRjb2xvcjogJG1haW4tZm9udCkge1xyXG4gIGZvbnQtc2l6ZTogJHNpemU7XHJcbiAgY29sb3I6ICRjb2xvcjtcclxufVxyXG4iXX0= */"] });
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
    production: false
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
    } }, styles: [".wrapper[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100vh;\n  position: fixed;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  background-color: rgba(255, 255, 255, 0.7);\n  left: 0;\n  top: 0;\n  z-index: 1;\n}\n\n.modal[_ngcontent-%COMP%] {\n  width: 60%;\n  min-width: 1430px;\n  position: relative;\n}\n\n.modal[_ngcontent-%COMP%]   .frame[_ngcontent-%COMP%] {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb2RhbC1wb3B1cC9tb2RhbC1wb3B1cC5jb21wb25lbnQuc2NzcyIsInNyYy90aGVtZS9taXhpbnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0EsZUFBQTtFQ0hBLGFBQUE7RUFDQSxtQkFGdUM7RUFHdkMsdUJBSHVCO0VBSXZCLG1CQUoyRDtFRE0zRCwwQ0FBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsVUFBQTtBQUVGOztBQUNBO0VBQ0UsVUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFFRjs7QUFBRTtFQUNFLFdBQUE7QUFFSiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9kYWwtcG9wdXAvbW9kYWwtcG9wdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi90aGVtZS9taXhpbnMuc2Nzcyc7XHJcblxyXG4ud3JhcHBlciB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgQGluY2x1ZGUgZmxleE1peDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCRjb2xvcjogd2hpdGUsICRhbHBoYTogLjcpO1xyXG4gIGxlZnQ6IDA7XHJcbiAgdG9wOiAwO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi5tb2RhbCB7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBtaW4td2lkdGg6IDE0MzBweDtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcblxyXG4gIC5mcmFtZSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcbn1cclxuIiwiXHJcbkBtaXhpbiBmbGV4TWl4KCRqdXN0aWZ5OiBjZW50ZXIsICRhbGlnbjogY2VudGVyLCAkZGlyZWN0aW9uOiByb3cpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiAkYWxpZ247XHJcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcclxuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcclxufVxyXG5cclxuQG1peGluIGZvbnRTdHlsZSgkc2l6ZTogMThweCwgJGNvbG9yOiAkbWFpbi1mb250KSB7XHJcbiAgZm9udC1zaXplOiAkc2l6ZTtcclxuICBjb2xvcjogJGNvbG9yO1xyXG59XHJcbiJdfQ== */"] });
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




function BandsComponent_p_9_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BandsComponent_p_9_Template_p_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const item_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.activateGenre(item_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("genres__item_active", item_r2.id === ctx_r0.selectedGenreId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.text);
} }
function BandsComponent_app_band_item_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-band-item", 11);
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("band", item_r5);
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
}
BandsComponent.ɵfac = function BandsComponent_Factory(t) { return new (t || BandsComponent)(); };
BandsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BandsComponent, selectors: [["app-bands"]], inputs: { genres: "genres", bands: "bands", selectedGenreId: "selectedGenreId" }, outputs: { changeGenre: "changeGenre" }, decls: 13, vars: 2, consts: [[1, "bands"], [1, "genres-selector"], [1, "group"], ["src", "assets/logo_main.png", "alt", "", 1, "logo"], [1, "title"], [1, "genres"], ["class", "genres__item", 3, "genres__item_active", "click", 4, "ngFor", "ngForOf"], [1, "bands__list"], [1, "scroll-content"], [3, "band", 4, "ngFor", "ngForOf"], [1, "genres__item", 3, "click"], [3, "band"]], template: function BandsComponent_Template(rf, ctx) { if (rf & 1) {
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.genres);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.bands);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _band_item_band_item_component__WEBPACK_IMPORTED_MODULE_2__["BandItemComponent"]], styles: ["@font-face {\n  font-family: \"Code Source Light\";\n  src: url('SourceCodePro-Light.ttf');\n}\n@font-face {\n  font-family: \"Code Source Medium\";\n  src: url('SourceCodePro-Medium.ttf');\n}\n@font-face {\n  font-family: \"Code Source Bold\";\n  src: url('SourceCodePro-Bold.ttf');\n}\n.bands[_ngcontent-%COMP%] {\n  width: 1430px;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: row;\n  margin-top: 120px;\n}\n.bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  flex-direction: column;\n  width: 30%;\n  height: 100%;\n  flex-shrink: 0;\n  padding-left: 130px;\n  box-sizing: border-box;\n  margin-top: 76px;\n}\n.bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  flex-direction: column;\n}\n.bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  margin-bottom: 46px;\n}\n.bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-bottom: 58px;\n}\n.bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .genres[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #484849;\n  margin-bottom: 20px;\n  cursor: pointer;\n}\n.bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .genres__item_active[_ngcontent-%COMP%] {\n  color: #f91b1b;\n}\n.bands__list[_ngcontent-%COMP%] {\n  width: 70%;\n  flex-shrink: 0;\n  position: relative;\n}\n.bands__list[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  width: 400px;\n  height: 400px;\n  background-image: url('snow_flake.png');\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  left: -200px;\n  top: 0;\n  z-index: 0;\n}\n.bands__list[_ngcontent-%COMP%]   .scroll-content[_ngcontent-%COMP%] {\n  width: 100%;\n  flex-wrap: wrap;\n  max-height: 1840px;\n  overflow: hidden;\n  overflow-y: auto;\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  flex-direction: row;\n  padding-left: 20px;\n  box-sizing: border-box;\n}\n@media screen and (max-width: 1430px) {\n  .bands[_ngcontent-%COMP%] {\n    width: 100%;\n    flex-direction: column;\n    margin-top: 80px;\n  }\n  .bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%] {\n    width: 100%;\n    flex-direction: column;\n    padding-left: 30px;\n  }\n  .bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .group[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    flex-direction: row;\n  }\n  .bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    margin-right: 10px;\n  }\n  .bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .genres[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: row;\n    margin-bottom: 0;\n  }\n  .bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .genres__item[_ngcontent-%COMP%] {\n    margin-right: 40px;\n  }\n  .bands__list[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media screen and (max-width: 767px) {\n  .bands[_ngcontent-%COMP%] {\n    margin-top: 30px;\n  }\n  .bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%] {\n    padding-left: 30px;\n  }\n  .bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    margin-bottom: 0;\n  }\n}\n@media screen and (max-width: 600px) {\n  .bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%] {\n    flex-direction: column;\n    margin-top: 20px;\n  }\n  .bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n  .bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 26px;\n  }\n  .bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .genres__item[_ngcontent-%COMP%] {\n    margin-right: 25px;\n  }\n  .bands__list[_ngcontent-%COMP%] {\n    padding-left: 30px;\n    box-sizing: border-box;\n  }\n}\n@media screen and (max-width: 400px) {\n  .bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%] {\n    flex-direction: column;\n    margin-top: 20px;\n  }\n  .bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n  .bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 23px;\n  }\n  .bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .genres__item[_ngcontent-%COMP%] {\n    margin-right: 15px;\n  }\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #dfdfdf;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #f91b1b;\n  height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2JhbmRzL2JhbmRzLmNvbXBvbmVudC5zY3NzIiwic3JjL3RoZW1lL21peGlucy5zY3NzIiwic3JjL3RoZW1lL2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0NBQUE7RUFDQSxtQ0FBQTtBQ0NGO0FERUE7RUFDRSxpQ0FBQTtFQUNBLG9DQUFBO0FDQUY7QURHQTtFQUNFLCtCQUFBO0VBQ0Esa0NBQUE7QUNERjtBQVBBO0VBQ0UsYUFBQTtFQ0hBLGFBQUE7RUFDQSx1QkRHeUI7RUNGekIsdUJBSHVCO0VBSXZCLG1CQUoyRDtFRE0zRCxpQkFBQTtBQVlGO0FBVkU7RUNQQSxhQUFBO0VBQ0EsdUJETzJCO0VDTjNCLDJCRE1pRDtFQ0xqRCxzQkRLeUU7RUFDdkUsVUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBZUo7QUFiSTtFQ2hCRixhQUFBO0VBQ0EsdUJEZ0JpQztFQ2ZqQywyQkRlcUI7RUNkckIsc0JEYzZDO0FBa0IvQztBQWZJO0VBQ0UsbUJBQUE7QUFpQk47QUFkSTtFQUNFLG1CQUFBO0FBZ0JOO0FBYkk7RUNyQkYsZUFEc0I7RUFFdEIsY0NUVztFRitCUCxtQkFBQTtFQUNBLGVBQUE7QUFnQk47QUFiUTtFQUNFLGNFbkNJO0FGa0RkO0FBVEU7RUFDRSxVQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0FBV0o7QUFUSTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsdUNBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7QUFXTjtBQVJJO0VBQ0UsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7RUNqRUosYUFBQTtFQUNBLHVCRGlFbUQ7RUNoRW5ELDJCRGdFK0I7RUMvRC9CLG1CQUoyRDtFRG9FdkQsa0JBQUE7RUFDQSxzQkFBQTtBQWFOO0FBUkE7RUFDRTtJQUNFLFdBQUE7SUFDQSxzQkFBQTtJQUNBLGdCQUFBO0VBV0Y7RUFURTtJQUNFLFdBQUE7SUFDQSxzQkFBQTtJQUNBLGtCQUFBO0VBV0o7RUFUSTtJQ3BGSixhQUFBO0lBQ0EsbUJEb0ZtQztJQ25GbkMsMkJEbUZ1QjtJQ2xGdkIsbUJEa0YyQztFQWMzQztFQVhJO0lBQ0UsYUFBQTtFQWFOO0VBVkk7SUFDRSxrQkFBQTtFQVlOO0VBVEk7SUNoR0osYUFBQTtJQUNBLG1CQUZ1QztJQUd2Qyx1QkFIdUI7SUFJdkIsbUJBSjJEO0lEbUdyRCxnQkFBQTtFQWNOO0VBWk07SUFDRSxrQkFBQTtFQWNSO0VBVEU7SUFDRSxXQUFBO0VBV0o7QUFDRjtBQVBBO0VBQ0U7SUFDRSxnQkFBQTtFQVNGO0VBUEU7SUFDRSxrQkFBQTtFQVNKO0VBUEk7SUFDRSxnQkFBQTtFQVNOO0FBQ0Y7QUFKQTtFQUdJO0lBQ0Usc0JBQUE7SUFDQSxnQkFBQTtFQUlKO0VBRkk7SUFDRSxtQkFBQTtFQUlOO0VBREk7SUFDRSxlQUFBO0VBR047RUFDTTtJQUNFLGtCQUFBO0VBQ1I7RUFJRTtJQUNFLGtCQUFBO0lBQ0Esc0JBQUE7RUFGSjtBQUNGO0FBTUE7RUFFSTtJQUNFLHNCQUFBO0lBQ0EsZ0JBQUE7RUFMSjtFQU9JO0lBQ0UsbUJBQUE7RUFMTjtFQVFJO0lBQ0UsZUFBQTtFQU5OO0VBVU07SUFDRSxrQkFBQTtFQVJSO0FBQ0Y7QUFjQTtFQUNFLFVBQUE7QUFaRjtBQWVBLFVBQUE7QUFDQTtFQUNFLG1CQUFBO0FBWkY7QUFlQSxXQUFBO0FBQ0E7RUFDRSxtQkU3TFk7RUY4TFosWUFBQTtBQVpGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9iYW5kcy9iYW5kcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiAnQ29kZSBTb3VyY2UgTGlnaHQnO1xyXG4gIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvU291cmNlQ29kZVByby1MaWdodC50dGYnKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdDb2RlIFNvdXJjZSBNZWRpdW0nO1xyXG4gIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvU291cmNlQ29kZVByby1NZWRpdW0udHRmJyk7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiAnQ29kZSBTb3VyY2UgQm9sZCc7XHJcbiAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9Tb3VyY2VDb2RlUHJvLUJvbGQudHRmJyk7XHJcbn1cclxuIiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkNvZGUgU291cmNlIExpZ2h0XCI7XG4gIHNyYzogdXJsKFwiLi4vYXNzZXRzL2ZvbnRzL1NvdXJjZUNvZGVQcm8tTGlnaHQudHRmXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkNvZGUgU291cmNlIE1lZGl1bVwiO1xuICBzcmM6IHVybChcIi4uL2Fzc2V0cy9mb250cy9Tb3VyY2VDb2RlUHJvLU1lZGl1bS50dGZcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQ29kZSBTb3VyY2UgQm9sZFwiO1xuICBzcmM6IHVybChcIi4uL2Fzc2V0cy9mb250cy9Tb3VyY2VDb2RlUHJvLUJvbGQudHRmXCIpO1xufVxuLmJhbmRzIHtcbiAgd2lkdGg6IDE0MzBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXJnaW4tdG9wOiAxMjBweDtcbn1cbi5iYW5kcyAuZ2VucmVzLXNlbGVjdG9yIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDMwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBmbGV4LXNocmluazogMDtcbiAgcGFkZGluZy1sZWZ0OiAxMzBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgbWFyZ2luLXRvcDogNzZweDtcbn1cbi5iYW5kcyAuZ2VucmVzLXNlbGVjdG9yIC5ncm91cCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uYmFuZHMgLmdlbnJlcy1zZWxlY3RvciAubG9nbyB7XG4gIG1hcmdpbi1ib3R0b206IDQ2cHg7XG59XG4uYmFuZHMgLmdlbnJlcy1zZWxlY3RvciAudGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiA1OHB4O1xufVxuLmJhbmRzIC5nZW5yZXMtc2VsZWN0b3IgLmdlbnJlcyB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICM0ODQ4NDk7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5iYW5kcyAuZ2VucmVzLXNlbGVjdG9yIC5nZW5yZXNfX2l0ZW1fYWN0aXZlIHtcbiAgY29sb3I6ICNmOTFiMWI7XG59XG4uYmFuZHNfX2xpc3Qge1xuICB3aWR0aDogNzAlO1xuICBmbGV4LXNocmluazogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmJhbmRzX19saXN0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDQwMHB4O1xuICBoZWlnaHQ6IDQwMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvc25vd19mbGFrZS5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgbGVmdDogLTIwMHB4O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDA7XG59XG4uYmFuZHNfX2xpc3QgLnNjcm9sbC1jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWF4LWhlaWdodDogMTg0MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0MzBweCkge1xuICAuYmFuZHMge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luLXRvcDogODBweDtcbiAgfVxuICAuYmFuZHMgLmdlbnJlcy1zZWxlY3RvciB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIH1cbiAgLmJhbmRzIC5nZW5yZXMtc2VsZWN0b3IgLmdyb3VwIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cbiAgLmJhbmRzIC5nZW5yZXMtc2VsZWN0b3IgLnRleHQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmJhbmRzIC5nZW5yZXMtc2VsZWN0b3IgLmxvZ28ge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuICAuYmFuZHMgLmdlbnJlcy1zZWxlY3RvciAuZ2VucmVzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG4gIC5iYW5kcyAuZ2VucmVzLXNlbGVjdG9yIC5nZW5yZXNfX2l0ZW0ge1xuICAgIG1hcmdpbi1yaWdodDogNDBweDtcbiAgfVxuICAuYmFuZHNfX2xpc3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuYmFuZHMge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gIH1cbiAgLmJhbmRzIC5nZW5yZXMtc2VsZWN0b3Ige1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgfVxuICAuYmFuZHMgLmdlbnJlcy1zZWxlY3RvciAudGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDA7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gIC5iYW5kcyAuZ2VucmVzLXNlbGVjdG9yIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cbiAgLmJhbmRzIC5nZW5yZXMtc2VsZWN0b3IgLmxvZ28ge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbiAgLmJhbmRzIC5nZW5yZXMtc2VsZWN0b3IgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDI2cHg7XG4gIH1cbiAgLmJhbmRzIC5nZW5yZXMtc2VsZWN0b3IgLmdlbnJlc19faXRlbSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAyNXB4O1xuICB9XG4gIC5iYW5kc19fbGlzdCB7XG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQwMHB4KSB7XG4gIC5iYW5kcyAuZ2VucmVzLXNlbGVjdG9yIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gIH1cbiAgLmJhbmRzIC5nZW5yZXMtc2VsZWN0b3IgLmxvZ28ge1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbiAgLmJhbmRzIC5nZW5yZXMtc2VsZWN0b3IgLnRpdGxlIHtcbiAgICBmb250LXNpemU6IDIzcHg7XG4gIH1cbiAgLmJhbmRzIC5nZW5yZXMtc2VsZWN0b3IgLmdlbnJlc19faXRlbSB7XG4gICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICB9XG59XG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDRweDtcbn1cblxuLyogVHJhY2sgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiAjZGZkZmRmO1xufVxuXG4vKiBIYW5kbGUgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjZjkxYjFiO1xuICBoZWlnaHQ6IDQwcHg7XG59IiwiXHJcbkBtaXhpbiBmbGV4TWl4KCRqdXN0aWZ5OiBjZW50ZXIsICRhbGlnbjogY2VudGVyLCAkZGlyZWN0aW9uOiByb3cpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiAkYWxpZ247XHJcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcclxuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcclxufVxyXG5cclxuQG1peGluIGZvbnRTdHlsZSgkc2l6ZTogMThweCwgJGNvbG9yOiAkbWFpbi1mb250KSB7XHJcbiAgZm9udC1zaXplOiAkc2l6ZTtcclxuICBjb2xvcjogJGNvbG9yO1xyXG59XHJcbiIsIiRtYWluLWZvbnQ6ICMwMDAwMDA7XHJcbiRtdXRlZC1mb250OiAjNDg0ODQ5O1xyXG4kYWN0aXZlLWZvbnQ6ICNmOTFiMWI7XHJcbiRvZGQtYmFja2dyb3VuZDogI2YwZjBmMDtcclxuJGRhcmstY29sb3I6ICMyODJlMzU7XHJcbiRtZWRpdW0tY29sb3I6ICMyZTM0M2E7XHJcbiRsaWdodC1jb2xvcjogI2YwZjBmMDtcclxuIl19 */"] });
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
    } }, inputs: { content: "content", side: "side" }, decls: 16, vars: 5, consts: [[1, "card"], [1, "card__video"], ["controls", ""], ["player", ""], ["src", "assets/snow_flake.png", "alt", "", 1, "snow-flake"], [1, "card__data"], [1, "card__data-content", 3, "text"], [1, "container"], [1, "card__data-text"], [1, "card__data-text_red"], [1, "card__data-text", "card__data-text_red"], [1, "card__data-additional"]], template: function ContentCardComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", ctx.content.genre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.content.genre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.content.text);
    } }, directives: [_band_logo_band_logo_component__WEBPACK_IMPORTED_MODULE_3__["BandLogoComponent"]], styles: ["@font-face {\n  font-family: \"Code Source Light\";\n  src: url('SourceCodePro-Light.ttf');\n}\n@font-face {\n  font-family: \"Code Source Medium\";\n  src: url('SourceCodePro-Medium.ttf');\n}\n@font-face {\n  font-family: \"Code Source Bold\";\n  src: url('SourceCodePro-Bold.ttf');\n}\n.card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  width: 1430px;\n  margin-bottom: 100px;\n}\n.card_reverse[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.card__video[_ngcontent-%COMP%] {\n  position: relative;\n  width: 65%;\n  flex-shrink: 0;\n}\n.card__video[_ngcontent-%COMP%]   video[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.card__video[_ngcontent-%COMP%]   .snow-flake[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n.card__video-content[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.card__data[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: column;\n  width: 30%;\n  flex-shrink: 0;\n  padding-left: 110px;\n  box-sizing: border-box;\n  text-transform: uppercase;\n}\n.card__data[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: column;\n}\n.card__data-text[_ngcontent-%COMP%] {\n  color: #000000;\n  font-size: 36px;\n  font-family: \"Code Source Medium\";\n}\n.card__data-text_red[_ngcontent-%COMP%] {\n  color: #f91b1b;\n}\n.card__data-additional[_ngcontent-%COMP%] {\n  font-family: \"Code Source Light\";\n  color: #484849;\n  font-size: 32px;\n}\n@media screen and (max-width: 1430px) {\n  .card[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .card__data[_ngcontent-%COMP%] {\n    padding-left: 30px;\n  }\n}\n@media screen and (max-width: 767px) {\n  .card[_ngcontent-%COMP%] {\n    flex-direction: column-reverse;\n  }\n  .card__video[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .card__data[_ngcontent-%COMP%] {\n    width: 90%;\n    flex-direction: row;\n    align-items: center;\n    margin-bottom: 20px;\n    padding-left: 0;\n  }\n  .card__data-text[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n  .card__data-additional[_ngcontent-%COMP%] {\n    font-size: 24px;\n  }\n  .card__data[_ngcontent-%COMP%]   .container[_ngcontent-%COMP%] {\n    margin-left: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvbnRlbnQtY2FyZC9jb250ZW50LWNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvdGhlbWUvbWl4aW5zLnNjc3MiLCJzcmMvdGhlbWUvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBQTtFQUNBLG1DQUFBO0FDQ0Y7QURFQTtFQUNFLGlDQUFBO0VBQ0Esb0NBQUE7QUNBRjtBREdBO0VBQ0UsK0JBQUE7RUFDQSxrQ0FBQTtBQ0RGO0FBUEE7RUNGRSxhQUFBO0VBQ0EsbUJBRnVDO0VBR3ZDLHVCQUh1QjtFQUl2QixtQkFKMkQ7RURLM0QsYUFBQTtFQUNBLG9CQUFBO0FBWUY7QUFWRTtFQUNFLDJCQUFBO0FBWUo7QUFURTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUFXSjtBQVRJO0VBQ0UsV0FBQTtBQVdOO0FBUkk7RUFDRSxrQkFBQTtFQUNBLE1BQUE7RUFDQSxRQUFBO0FBVU47QUFQSTtFQUNFLFdBQUE7QUFTTjtBQUxFO0VDL0JBLGFBQUE7RUFDQSx1QkQrQjJCO0VDOUIzQix1QkFIdUI7RUFJdkIsc0JENkJtRDtFQUNqRCxVQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esc0JBQUE7RUFDQSx5QkFBQTtBQVVKO0FBUkk7RUN2Q0YsYUFBQTtFQUNBLHVCRHVDNkI7RUN0QzdCLHVCQUh1QjtFQUl2QixzQkRxQ3FEO0FBYXZEO0FBVkk7RUFDRSxjRTlDTTtFRitDTixlQUFBO0VBQ0EsaUNBQUE7QUFZTjtBQVZNO0VBQ0UsY0VqRE07QUY2RGQ7QUFSSTtFQUNFLGdDQUFBO0VBQ0EsY0V4RE87RUZ5RFAsZUFBQTtBQVVOO0FBTEE7RUFDRTtJQUNFLFdBQUE7RUFRRjtFQU5FO0lBQ0Usa0JBQUE7RUFRSjtBQUNGO0FBSkE7RUFDRTtJQUNFLDhCQUFBO0VBTUY7RUFKRTtJQUNFLFdBQUE7RUFNSjtFQUhFO0lBQ0UsVUFBQTtJQUNBLG1CQUFBO0lBQ0EsbUJBQUE7SUFDQSxtQkFBQTtJQUNBLGVBQUE7RUFLSjtFQUhJO0lBQ0UsZUFBQTtFQUtOO0VBRkk7SUFDRSxlQUFBO0VBSU47RUFESTtJQUNFLGlCQUFBO0VBR047QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY29udGVudC1jYXJkL2NvbnRlbnQtY2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiAnQ29kZSBTb3VyY2UgTGlnaHQnO1xyXG4gIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvU291cmNlQ29kZVByby1MaWdodC50dGYnKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdDb2RlIFNvdXJjZSBNZWRpdW0nO1xyXG4gIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvU291cmNlQ29kZVByby1NZWRpdW0udHRmJyk7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiAnQ29kZSBTb3VyY2UgQm9sZCc7XHJcbiAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9Tb3VyY2VDb2RlUHJvLUJvbGQudHRmJyk7XHJcbn1cclxuIiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkNvZGUgU291cmNlIExpZ2h0XCI7XG4gIHNyYzogdXJsKFwiLi4vYXNzZXRzL2ZvbnRzL1NvdXJjZUNvZGVQcm8tTGlnaHQudHRmXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkNvZGUgU291cmNlIE1lZGl1bVwiO1xuICBzcmM6IHVybChcIi4uL2Fzc2V0cy9mb250cy9Tb3VyY2VDb2RlUHJvLU1lZGl1bS50dGZcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQ29kZSBTb3VyY2UgQm9sZFwiO1xuICBzcmM6IHVybChcIi4uL2Fzc2V0cy9mb250cy9Tb3VyY2VDb2RlUHJvLUJvbGQudHRmXCIpO1xufVxuLmNhcmQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgd2lkdGg6IDE0MzBweDtcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG59XG4uY2FyZF9yZXZlcnNlIHtcbiAgZmxleC1kaXJlY3Rpb246IHJvdy1yZXZlcnNlO1xufVxuLmNhcmRfX3ZpZGVvIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogNjUlO1xuICBmbGV4LXNocmluazogMDtcbn1cbi5jYXJkX192aWRlbyB2aWRlbyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNhcmRfX3ZpZGVvIC5zbm93LWZsYWtlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xufVxuLmNhcmRfX3ZpZGVvLWNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbn1cbi5jYXJkX19kYXRhIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMzAlO1xuICBmbGV4LXNocmluazogMDtcbiAgcGFkZGluZy1sZWZ0OiAxMTBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5jYXJkX19kYXRhIC5jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4uY2FyZF9fZGF0YS10ZXh0IHtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtc2l6ZTogMzZweDtcbiAgZm9udC1mYW1pbHk6IFwiQ29kZSBTb3VyY2UgTWVkaXVtXCI7XG59XG4uY2FyZF9fZGF0YS10ZXh0X3JlZCB7XG4gIGNvbG9yOiAjZjkxYjFiO1xufVxuLmNhcmRfX2RhdGEtYWRkaXRpb25hbCB7XG4gIGZvbnQtZmFtaWx5OiBcIkNvZGUgU291cmNlIExpZ2h0XCI7XG4gIGNvbG9yOiAjNDg0ODQ5O1xuICBmb250LXNpemU6IDMycHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0MzBweCkge1xuICAuY2FyZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLmNhcmRfX2RhdGEge1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNhcmQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcbiAgfVxuICAuY2FyZF9fdmlkZW8ge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5jYXJkX19kYXRhIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIHBhZGRpbmctbGVmdDogMDtcbiAgfVxuICAuY2FyZF9fZGF0YS10ZXh0IHtcbiAgICBmb250LXNpemU6IDMwcHg7XG4gIH1cbiAgLmNhcmRfX2RhdGEtYWRkaXRpb25hbCB7XG4gICAgZm9udC1zaXplOiAyNHB4O1xuICB9XG4gIC5jYXJkX19kYXRhIC5jb250YWluZXIge1xuICAgIG1hcmdpbi1sZWZ0OiAzMHB4O1xuICB9XG59IiwiXHJcbkBtaXhpbiBmbGV4TWl4KCRqdXN0aWZ5OiBjZW50ZXIsICRhbGlnbjogY2VudGVyLCAkZGlyZWN0aW9uOiByb3cpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiAkYWxpZ247XHJcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcclxuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcclxufVxyXG5cclxuQG1peGluIGZvbnRTdHlsZSgkc2l6ZTogMThweCwgJGNvbG9yOiAkbWFpbi1mb250KSB7XHJcbiAgZm9udC1zaXplOiAkc2l6ZTtcclxuICBjb2xvcjogJGNvbG9yO1xyXG59XHJcbiIsIiRtYWluLWZvbnQ6ICMwMDAwMDA7XHJcbiRtdXRlZC1mb250OiAjNDg0ODQ5O1xyXG4kYWN0aXZlLWZvbnQ6ICNmOTFiMWI7XHJcbiRvZGQtYmFja2dyb3VuZDogI2YwZjBmMDtcclxuJGRhcmstY29sb3I6ICMyODJlMzU7XHJcbiRtZWRpdW0tY29sb3I6ICMyZTM0M2E7XHJcbiRsaWdodC1jb2xvcjogI2YwZjBmMDtcclxuIl19 */"] });
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

















function AppComponent_app_content_card_3_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-content-card", 11);
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    const even_r2 = ctx.even;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("id", item_r1.genre)("content", item_r1)("side", even_r2 ? ctx_r0.sides.LEFT : ctx_r0.sides.RIGHT);
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
                id: 1380,
                value: _contsants_genres_enum__WEBPACK_IMPORTED_MODULE_3__["GENRES"].EDM,
                text: 'EDM',
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
                logo: 'assets/persik_logo.png',
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
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 20, vars: 8, consts: [[1, "wrapper"], [3, "id", "content", "side", 4, "ngFor", "ngForOf"], ["id", "musicions", 1, "wrapper", "wrapper_odd"], [3, "selectedGenreId", "genres", "bands", "changeGenre"], ["id", "donates", 1, "wrapper"], [3, "supportPersons"], ["id", "subscriptions", 1, "wrapper"], ["id", "companies", 1, "wrapper"], [3, "supportCompanies"], [1, "wrapper", "wrapper_footer"], [1, "copyright"], [3, "id", "content", "side"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](12, "app-support-company-group", 8);
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
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.contentCards);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("selectedGenreId", ctx.activeGenreId)("genres", ctx.genres)("bands", ctx.filteredBands);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("supportPersons", _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵpipeBind1"](8, 6, ctx.supportPersons));
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("supportCompanies", ctx.supportCompanies);
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _components_banner_banner_component__WEBPACK_IMPORTED_MODULE_9__["BannerComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["NgForOf"], _components_bands_bands_component__WEBPACK_IMPORTED_MODULE_11__["BandsComponent"], _components_support_person_group_support_person_group_component__WEBPACK_IMPORTED_MODULE_12__["SupportPersonGroupComponent"], _components_subscription_subscription_component__WEBPACK_IMPORTED_MODULE_13__["SubscriptionComponent"], _components_support_company_group_support_company_group_component__WEBPACK_IMPORTED_MODULE_14__["SupportCompanyGroupComponent"], _components_content_card_content_card_component__WEBPACK_IMPORTED_MODULE_15__["ContentCardComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_10__["AsyncPipe"]], styles: ["@font-face {\n  font-family: \"Code Source Light\";\n  src: url('SourceCodePro-Light.ttf');\n}\n@font-face {\n  font-family: \"Code Source Medium\";\n  src: url('SourceCodePro-Medium.ttf');\n}\n@font-face {\n  font-family: \"Code Source Bold\";\n  src: url('SourceCodePro-Bold.ttf');\n}\n.wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n.wrapper_odd[_ngcontent-%COMP%] {\n  background: #f0f0f0;\n}\n.wrapper_footer[_ngcontent-%COMP%] {\n  border-top: 44px solid #f0f0f0;\n  height: 260px;\n  text-transform: uppercase;\n  font-size: 24px;\n  color: #484849;\n  font-family: \"Code Source Light\";\n}\n.wrapper_footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-bottom: 25px;\n  text-align: center;\n}\n.wrapper_footer[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:last-child {\n  margin-bottom: 0;\n}\n.copyright[_ngcontent-%COMP%] {\n  font-size: 16px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvdGhlbWUvbWl4aW5zLnNjc3MiLCJzcmMvdGhlbWUvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBQTtFQUNBLG1DQUFBO0FDQ0Y7QURFQTtFQUNFLGlDQUFBO0VBQ0Esb0NBQUE7QUNBRjtBREdBO0VBQ0UsK0JBQUE7RUFDQSxrQ0FBQTtBQ0RGO0FBUEE7RUNGRSxhQUFBO0VBQ0EsbUJBRnVDO0VBR3ZDLHVCQUh1QjtFQUl2QixzQkFBQTtBRFlGO0FBVkU7RUFDRSxtQkVMYTtBRmlCakI7QUFURTtFQUNFLDhCQUFBO0VBQ0EsYUFBQTtFQUNBLHlCQUFBO0VDTEYsZURNcUI7RUNMckIsY0NUVztFRmVULGdDQUFBO0FBWUo7QUFWSTtFQUNFLG1CQUFBO0VBQ0Esa0JBQUE7QUFZTjtBQVZNO0VBQ0UsZ0JBQUE7QUFZUjtBQU5BO0VBQ0UsZUFBQTtBQVNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdDb2RlIFNvdXJjZSBMaWdodCc7XHJcbiAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9Tb3VyY2VDb2RlUHJvLUxpZ2h0LnR0ZicpO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogJ0NvZGUgU291cmNlIE1lZGl1bSc7XHJcbiAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9Tb3VyY2VDb2RlUHJvLU1lZGl1bS50dGYnKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdDb2RlIFNvdXJjZSBCb2xkJztcclxuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL1NvdXJjZUNvZGVQcm8tQm9sZC50dGYnKTtcclxufVxyXG4iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQ29kZSBTb3VyY2UgTGlnaHRcIjtcbiAgc3JjOiB1cmwoXCIuLi9hc3NldHMvZm9udHMvU291cmNlQ29kZVByby1MaWdodC50dGZcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQ29kZSBTb3VyY2UgTWVkaXVtXCI7XG4gIHNyYzogdXJsKFwiLi4vYXNzZXRzL2ZvbnRzL1NvdXJjZUNvZGVQcm8tTWVkaXVtLnR0ZlwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJDb2RlIFNvdXJjZSBCb2xkXCI7XG4gIHNyYzogdXJsKFwiLi4vYXNzZXRzL2ZvbnRzL1NvdXJjZUNvZGVQcm8tQm9sZC50dGZcIik7XG59XG4ud3JhcHBlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuLndyYXBwZXJfb2RkIHtcbiAgYmFja2dyb3VuZDogI2YwZjBmMDtcbn1cbi53cmFwcGVyX2Zvb3RlciB7XG4gIGJvcmRlci10b3A6IDQ0cHggc29saWQgI2YwZjBmMDtcbiAgaGVpZ2h0OiAyNjBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAyNHB4O1xuICBjb2xvcjogIzQ4NDg0OTtcbiAgZm9udC1mYW1pbHk6IFwiQ29kZSBTb3VyY2UgTGlnaHRcIjtcbn1cbi53cmFwcGVyX2Zvb3RlciBzcGFuIHtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLndyYXBwZXJfZm9vdGVyIHNwYW46bGFzdC1jaGlsZCB7XG4gIG1hcmdpbi1ib3R0b206IDA7XG59XG5cbi5jb3B5cmlnaHQge1xuICBmb250LXNpemU6IDE2cHg7XG59IiwiXHJcbkBtaXhpbiBmbGV4TWl4KCRqdXN0aWZ5OiBjZW50ZXIsICRhbGlnbjogY2VudGVyLCAkZGlyZWN0aW9uOiByb3cpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiAkYWxpZ247XHJcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcclxuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcclxufVxyXG5cclxuQG1peGluIGZvbnRTdHlsZSgkc2l6ZTogMThweCwgJGNvbG9yOiAkbWFpbi1mb250KSB7XHJcbiAgZm9udC1zaXplOiAkc2l6ZTtcclxuICBjb2xvcjogJGNvbG9yO1xyXG59XHJcbiIsIiRtYWluLWZvbnQ6ICMwMDAwMDA7XHJcbiRtdXRlZC1mb250OiAjNDg0ODQ5O1xyXG4kYWN0aXZlLWZvbnQ6ICNmOTFiMWI7XHJcbiRvZGQtYmFja2dyb3VuZDogI2YwZjBmMDtcclxuJGRhcmstY29sb3I6ICMyODJlMzU7XHJcbiRtZWRpdW0tY29sb3I6ICMyZTM0M2E7XHJcbiRsaWdodC1jb2xvcjogI2YwZjBmMDtcclxuIl19 */"] });
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
SubscriptionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SubscriptionComponent, selectors: [["app-subscription"]], decls: 10, vars: 0, consts: [[1, "subscription"], [1, "subscription__text"], [1, "form"], ["type", "text", "placeholder", "E-mail", 1, "form__email"], ["target", "_blank", "href", "https://app.getresponse.com/site2/sluhay_b2b/?u=yhedG&webforms_id=B78ks", 1, "form__button"], ["src", "assets/play.png", "alt", ""]], template: function SubscriptionComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "\u043F\u043E\u0434\u043F\u0438\u0441\u043A\u0430");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \u043D\u0430 \u0440\u0430\u0441\u0441\u044B\u043B\u043A\u0443");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " \u043E\u0442\u043F\u0440\u0430\u0432\u0438\u0442\u044C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["@font-face {\n  font-family: \"Code Source Light\";\n  src: url('SourceCodePro-Light.ttf');\n}\n@font-face {\n  font-family: \"Code Source Medium\";\n  src: url('SourceCodePro-Medium.ttf');\n}\n@font-face {\n  font-family: \"Code Source Bold\";\n  src: url('SourceCodePro-Bold.ttf');\n}\n[_nghost-%COMP%] {\n  width: 1430px;\n}\n@media screen and (max-width: 1430px) {\n  [_nghost-%COMP%] {\n    width: 100%;\n  }\n}\n.subscription[_ngcontent-%COMP%] {\n  width: 1430px;\n  height: 260px;\n  background-image: url('support_banner.jpg');\n  background-repeat: no-repeat;\n  background-size: cover;\n  background-position: center;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-direction: row;\n  padding: 0 180px 0 130px;\n  box-sizing: border-box;\n}\n.subscription__text[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-size: 36px;\n  color: white;\n}\n.subscription[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  height: 50px;\n  width: 70%;\n}\n.subscription[_ngcontent-%COMP%]   .form__email[_ngcontent-%COMP%] {\n  height: 100%;\n  margin-right: 30px;\n  border-radius: 5px;\n  background-color: rgba(255, 255, 255, 0.7);\n  padding-left: 15px;\n  border: none;\n  outline: none;\n  width: 100%;\n}\n.subscription[_ngcontent-%COMP%]   .form__button[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 155px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  text-transform: uppercase;\n  background-color: #282e35;\n  border-radius: 5px;\n  font-size: 14px;\n  color: white;\n  font-family: \"Code Source Bold\";\n  cursor: pointer;\n  -webkit-user-select: none;\n          user-select: none;\n  text-decoration: none;\n}\n.subscription[_ngcontent-%COMP%]   .form__button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  margin-right: 5px;\n}\n@media screen and (max-width: 1430px) {\n  .subscription[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media screen and (max-width: 1200px) {\n  .subscription[_ngcontent-%COMP%] {\n    padding: 0 20px;\n  }\n}\n@media screen and (max-width: 910px) {\n  .subscription[_ngcontent-%COMP%] {\n    width: 100%;\n    display: flex;\n    align-items: flex-start;\n    justify-content: center;\n    flex-direction: column;\n  }\n  .subscription[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media screen and (max-width: 440px) {\n  .subscription[_ngcontent-%COMP%]   .form__email[_ngcontent-%COMP%] {\n    margin-right: 10px;\n  }\n  .subscription[_ngcontent-%COMP%]   .form__button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3N1YnNjcmlwdGlvbi9zdWJzY3JpcHRpb24uY29tcG9uZW50LnNjc3MiLCJzcmMvdGhlbWUvbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBQTtFQUNBLG1DQUFBO0FDQ0Y7QURFQTtFQUNFLGlDQUFBO0VBQ0Esb0NBQUE7QUNBRjtBREdBO0VBQ0UsK0JBQUE7RUFDQSxrQ0FBQTtBQ0RGO0FBUEE7RUFDRSxhQUFBO0FBU0Y7QUFQRTtFQUhGO0lBSUksV0FBQTtFQVVGO0FBQ0Y7QUFQQTtFQUNFLGFBQUE7RUFDQSxhQUFBO0VBQ0EsMkNBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsMkJBQUE7RUNoQkEsYUFBQTtFQUNBLG1CQUZ1QztFQUd2Qyw4QkRlaUI7RUNkakIsbUJBSjJEO0VEbUIzRCx3QkFBQTtFQUNBLHNCQUFBO0FBYUY7QUFYRTtFQUNFLHlCQUFBO0VDZkYsZURnQnFCO0VDZnJCLFlEZTJCO0FBYzdCO0FBWEU7RUMxQkEsYUFBQTtFQUNBLG1CQUZ1QztFQUd2Qyx1QkFIdUI7RUFJdkIsbUJBSjJEO0VENkJ6RCxZQUFBO0VBQ0EsVUFBQTtBQWdCSjtBQWRJO0VBQ0UsWUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSwwQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBZ0JOO0FBYkk7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQzVDSixhQUFBO0VBQ0EsbUJBRnVDO0VBR3ZDLHVCQUh1QjtFQUl2QixtQkFKMkQ7RUQrQ3ZELHlCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQ3pDSixlRDBDdUI7RUN6Q3ZCLFlEeUM2QjtFQUN6QiwrQkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtVQUFBLGlCQUFBO0VBQ0EscUJBQUE7QUFtQk47QUFqQk07RUFDRSxpQkFBQTtBQW1CUjtBQWJBO0VBQ0U7SUFDRSxXQUFBO0VBZ0JGO0FBQ0Y7QUFiQTtFQUNFO0lBQ0UsZUFBQTtFQWVGO0FBQ0Y7QUFaQTtFQUNFO0lBQ0UsV0FBQTtJQzVFRixhQUFBO0lBQ0EsdUJENEUyQjtJQzNFM0IsdUJBSHVCO0lBSXZCLHNCRDBFbUQ7RUFpQm5EO0VBZkU7SUFDRSxXQUFBO0VBaUJKO0FBQ0Y7QUFiQTtFQUdNO0lBQ0Usa0JBQUE7RUFhTjtFQVRNO0lBQ0UsYUFBQTtFQVdSO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3N1YnNjcmlwdGlvbi9zdWJzY3JpcHRpb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogJ0NvZGUgU291cmNlIExpZ2h0JztcclxuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL1NvdXJjZUNvZGVQcm8tTGlnaHQudHRmJyk7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiAnQ29kZSBTb3VyY2UgTWVkaXVtJztcclxuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL1NvdXJjZUNvZGVQcm8tTWVkaXVtLnR0ZicpO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogJ0NvZGUgU291cmNlIEJvbGQnO1xyXG4gIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvU291cmNlQ29kZVByby1Cb2xkLnR0ZicpO1xyXG59XHJcbiIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJDb2RlIFNvdXJjZSBMaWdodFwiO1xuICBzcmM6IHVybChcIi4uL2Fzc2V0cy9mb250cy9Tb3VyY2VDb2RlUHJvLUxpZ2h0LnR0ZlwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJDb2RlIFNvdXJjZSBNZWRpdW1cIjtcbiAgc3JjOiB1cmwoXCIuLi9hc3NldHMvZm9udHMvU291cmNlQ29kZVByby1NZWRpdW0udHRmXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkNvZGUgU291cmNlIEJvbGRcIjtcbiAgc3JjOiB1cmwoXCIuLi9hc3NldHMvZm9udHMvU291cmNlQ29kZVByby1Cb2xkLnR0ZlwiKTtcbn1cbjpob3N0IHtcbiAgd2lkdGg6IDE0MzBweDtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0MzBweCkge1xuICA6aG9zdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuLnN1YnNjcmlwdGlvbiB7XG4gIHdpZHRoOiAxNDMwcHg7XG4gIGhlaWdodDogMjYwcHg7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uL2Fzc2V0cy9zdXBwb3J0X2Jhbm5lci5qcGdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBwYWRkaW5nOiAwIDE4MHB4IDAgMTMwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG4uc3Vic2NyaXB0aW9uX190ZXh0IHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAzNnB4O1xuICBjb2xvcjogd2hpdGU7XG59XG4uc3Vic2NyaXB0aW9uIC5mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGhlaWdodDogNTBweDtcbiAgd2lkdGg6IDcwJTtcbn1cbi5zdWJzY3JpcHRpb24gLmZvcm1fX2VtYWlsIHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjcpO1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZTtcbiAgd2lkdGg6IDEwMCU7XG59XG4uc3Vic2NyaXB0aW9uIC5mb3JtX19idXR0b24ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxNTVweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyODJlMzU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIkNvZGUgU291cmNlIEJvbGRcIjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB1c2VyLXNlbGVjdDogbm9uZTtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLnN1YnNjcmlwdGlvbiAuZm9ybV9fYnV0dG9uIGltZyB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDMwcHgpIHtcbiAgLnN1YnNjcmlwdGlvbiB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEyMDBweCkge1xuICAuc3Vic2NyaXB0aW9uIHtcbiAgICBwYWRkaW5nOiAwIDIwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkxMHB4KSB7XG4gIC5zdWJzY3JpcHRpb24ge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxuICAuc3Vic2NyaXB0aW9uIC5mb3JtIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDQwcHgpIHtcbiAgLnN1YnNjcmlwdGlvbiAuZm9ybV9fZW1haWwge1xuICAgIG1hcmdpbi1yaWdodDogMTBweDtcbiAgfVxuICAuc3Vic2NyaXB0aW9uIC5mb3JtX19idXR0b24gaW1nIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59IiwiXHJcbkBtaXhpbiBmbGV4TWl4KCRqdXN0aWZ5OiBjZW50ZXIsICRhbGlnbjogY2VudGVyLCAkZGlyZWN0aW9uOiByb3cpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiAkYWxpZ247XHJcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcclxuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcclxufVxyXG5cclxuQG1peGluIGZvbnRTdHlsZSgkc2l6ZTogMThweCwgJGNvbG9yOiAkbWFpbi1mb250KSB7XHJcbiAgZm9udC1zaXplOiAkc2l6ZTtcclxuICBjb2xvcjogJGNvbG9yO1xyXG59XHJcbiJdfQ== */"] });
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
    }
    ngOnInit() {
        this.playBanner();
    }
    playBanner() {
        const video = this.videoRef.nativeElement;
        video.muted = true;
        this.playerService.playUrl('http://persik.by/stream/3502/32/10970.m3u8', video);
    }
}
BannerComponent.ɵfac = function BannerComponent_Factory(t) { return new (t || BannerComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_services_player_service__WEBPACK_IMPORTED_MODULE_1__["PlayerService"])); };
BannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BannerComponent, selectors: [["app-banner"]], viewQuery: function BannerComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.videoRef = _t.first);
    } }, decls: 9, vars: 0, consts: [[1, "banner"], [1, "video"], ["video", ""], [1, "banner__content"], ["src", "assets/logo_main_big.png", "alt", ""], [1, "banner__content-name"], [1, "banner__content-name", "banner__content-name_active"]], template: function BannerComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".banner[_ngcontent-%COMP%] {\n  position: relative;\n  margin-bottom: 130px;\n}\n.banner__content[_ngcontent-%COMP%] {\n  box-sizing: border-box;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n.banner__content-name[_ngcontent-%COMP%] {\n  margin-top: 80px;\n  text-transform: uppercase;\n  font-family: \"Code Source Medium\";\n  font-size: 36px;\n  color: white;\n}\n.banner__content-name_active[_ngcontent-%COMP%] {\n  color: #f91b1b;\n}\n.video[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@media screen and (max-width: 580px) {\n  .banner__content[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n    width: 20%;\n  }\n  .banner__content-name[_ngcontent-%COMP%] {\n    margin-top: 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9iYW5uZXIvYmFubmVyLmNvbXBvbmVudC5zY3NzIiwic3JjL3RoZW1lL21peGlucy5zY3NzIiwic3JjL3RoZW1lL2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0Usa0JBQUE7RUFDQSxvQkFBQTtBQUZGO0FBSUU7RUFDRSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLFVBQUE7RUNaRixhQUFBO0VBQ0EsbUJBRnVDO0VBR3ZDLHVCQUh1QjtFQUl2QixzQkRVK0I7QUFDakM7QUFDSTtFQUNFLGdCQUFBO0VBQ0EseUJBQUE7RUFDQSxpQ0FBQTtFQ1hKLGVEWXVCO0VDWHZCLFlEVzZCO0FBRS9CO0FBQU07RUFDRSxjRXRCTTtBRndCZDtBQUlBO0VBQ0UsV0FBQTtBQURGO0FBSUE7RUFHTTtJQUNFLFVBQUE7RUFITjtFQU1JO0lBQ0UsZ0JBQUE7RUFKTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9iYW5uZXIvYmFubmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCAnLi4vLi4vLi4vdGhlbWUvbWl4aW5zLnNjc3MnO1xyXG5AaW1wb3J0ICcuLi8uLi8uLi90aGVtZS9jb2xvcnMuc2Nzcyc7XHJcblxyXG4uYmFubmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTMwcHg7XHJcblxyXG4gICZfX2NvbnRlbnQge1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHRvcDogMDtcclxuICAgIHotaW5kZXg6IDE7XHJcbiAgICBAaW5jbHVkZSBmbGV4TWl4KCRkaXJlY3Rpb246IGNvbHVtbik7XHJcblxyXG4gICAgJi1uYW1lIHtcclxuICAgICAgbWFyZ2luLXRvcDogODBweDtcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgZm9udC1mYW1pbHk6ICdDb2RlIFNvdXJjZSBNZWRpdW0nO1xyXG4gICAgICBAaW5jbHVkZSBmb250U3R5bGUoMzZweCwgd2hpdGUpO1xyXG5cclxuICAgICAgJl9hY3RpdmUge1xyXG4gICAgICAgIGNvbG9yOiAkYWN0aXZlLWZvbnQ7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi52aWRlbyB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDU4MHB4KSB7XHJcbiAgLmJhbm5lciB7XHJcbiAgICAmX19jb250ZW50IHtcclxuICAgICAgaW1nIHtcclxuICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmLW5hbWUge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuIiwiXHJcbkBtaXhpbiBmbGV4TWl4KCRqdXN0aWZ5OiBjZW50ZXIsICRhbGlnbjogY2VudGVyLCAkZGlyZWN0aW9uOiByb3cpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiAkYWxpZ247XHJcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcclxuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcclxufVxyXG5cclxuQG1peGluIGZvbnRTdHlsZSgkc2l6ZTogMThweCwgJGNvbG9yOiAkbWFpbi1mb250KSB7XHJcbiAgZm9udC1zaXplOiAkc2l6ZTtcclxuICBjb2xvcjogJGNvbG9yO1xyXG59XHJcbiIsIiRtYWluLWZvbnQ6ICMwMDAwMDA7XHJcbiRtdXRlZC1mb250OiAjNDg0ODQ5O1xyXG4kYWN0aXZlLWZvbnQ6ICNmOTFiMWI7XHJcbiRvZGQtYmFja2dyb3VuZDogI2YwZjBmMDtcclxuJGRhcmstY29sb3I6ICMyODJlMzU7XHJcbiRtZWRpdW0tY29sb3I6ICMyZTM0M2E7XHJcbiRsaWdodC1jb2xvcjogI2YwZjBmMDtcclxuIl19 */"] });
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



















class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"].forRoot([])
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
        _components_support_company_group_support_company_group_component__WEBPACK_IMPORTED_MODULE_15__["SupportCompanyGroupComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"]] }); })();
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
                    _components_support_company_group_support_company_group_component__WEBPACK_IMPORTED_MODULE_15__["SupportCompanyGroupComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"].forRoot([])
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
    } }, styles: [".person[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  color: white;\n  margin-bottom: 30px;\n  position: relative;\n  z-index: 1;\n}\n.person__avatar[_ngcontent-%COMP%] {\n  width: 240px;\n  height: 240px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  flex-shrink: 0;\n}\n.person__status[_ngcontent-%COMP%] {\n  width: 35%;\n  height: 240px;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: column;\n  box-sizing: border-box;\n  padding-left: 30px;\n  background-color: #282e35;\n  flex-shrink: 0;\n  text-transform: uppercase;\n}\n.person__status[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  display: none;\n}\n.person__status[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-family: \"Code Source Bold\";\n  font-size: 20px;\n  margin-bottom: 20px;\n}\n.person__status[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #f91b1b;\n}\n.person__pay[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 240px;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: column;\n  box-sizing: border-box;\n  padding-left: 30px;\n  background-color: #2e343a;\n  padding-right: 20px;\n}\n.person__pay[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-family: \"Code Source Bold\";\n  text-transform: uppercase;\n}\n.person__pay[_ngcontent-%COMP%]   .text_small[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.person__pay[_ngcontent-%COMP%]   .text_medium[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n@media screen and (max-width: 620px) {\n  .person__status[_ngcontent-%COMP%] {\n    width: 100%;\n    flex-shrink: 1;\n  }\n  .person__status[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    display: inline;\n  }\n  .person__pay[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media screen and (max-width: 480px) {\n  .person[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdXBwb3J0LXBlcnNvbi9zdXBwb3J0LXBlcnNvbi5jb21wb25lbnQuc2NzcyIsInNyYy90aGVtZS9taXhpbnMuc2NzcyIsInNyYy90aGVtZS9jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLFdBQUE7RUNGQSxhQUFBO0VBQ0EsbUJBRnVDO0VBR3ZDLHVCQUh1QjtFQUl2QixtQkFKMkQ7RURLM0QsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFDRjtBQUNFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0FBQ0o7QUFFRTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VDckJGLGFBQUE7RUFDQSx1QkRxQjJCO0VDcEIzQix1QkFIdUI7RUFJdkIsc0JEbUJtRDtFQUNqRCxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJFdkJTO0VGd0JULGNBQUE7RUFDQSx5QkFBQTtBQUdKO0FBREk7RUFDRSxhQUFBO0FBR047QUFBSTtFQUNFLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBRU47QUFDSTtFQ2hDRixlQURzQjtFQUV0QixjQ1JZO0FGMENkO0FBRUU7RUFDRSxXQUFBO0VBQ0EsYUFBQTtFQzlDRixhQUFBO0VBQ0EsdUJEOEMyQjtFQzdDM0IsdUJBSHVCO0VBSXZCLHNCRDRDbUQ7RUFDakQsc0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCRS9DVztFRmdEWCxtQkFBQTtBQUdKO0FBREk7RUFDRSxlQUFBO0VBQ0EsK0JBQUE7RUFDQSx5QkFBQTtBQUdOO0FBRE07RUFDRSxlQUFBO0FBR1I7QUFBTTtFQUNFLGVBQUE7QUFFUjtBQUlBO0VBRUk7SUFDRSxXQUFBO0lBQ0EsY0FBQTtFQUZKO0VBSUk7SUFDRSxlQUFBO0VBRk47RUFNRTtJQUNFLGFBQUE7RUFKSjtBQUNGO0FBUUE7RUFDRTtJQUNFLHNCQUFBO0VBTkY7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3VwcG9ydC1wZXJzb24vc3VwcG9ydC1wZXJzb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vdGhlbWUvbWl4aW5zLnNjc3NcIjtcclxuQGltcG9ydCBcIi4uLy4uLy4uL3RoZW1lL2NvbG9ycy5zY3NzXCI7XHJcblxyXG4ucGVyc29uIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBAaW5jbHVkZSBmbGV4TWl4O1xyXG4gIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG5cclxuICAmX19hdmF0YXIge1xyXG4gICAgd2lkdGg6IDI0MHB4O1xyXG4gICAgaGVpZ2h0OiAyNDBweDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgfVxyXG5cclxuICAmX19zdGF0dXMge1xyXG4gICAgd2lkdGg6IDM1JTtcclxuICAgIGhlaWdodDogMjQwcHg7XHJcbiAgICBAaW5jbHVkZSBmbGV4TWl4KCRhbGlnbjogZmxleC1zdGFydCwgJGRpcmVjdGlvbjogY29sdW1uKTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyay1jb2xvcjtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHJcbiAgICAudGV4dCB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcblxyXG4gICAgLm5hbWUge1xyXG4gICAgICBmb250LWZhbWlseTogJ0NvZGUgU291cmNlIEJvbGQnO1xyXG4gICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnJvbGUge1xyXG4gICAgICBAaW5jbHVkZSBmb250U3R5bGUoJGNvbG9yOiAkYWN0aXZlLWZvbnQpO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgJl9fcGF5IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAyNDBweDtcclxuICAgIEBpbmNsdWRlIGZsZXhNaXgoJGFsaWduOiBmbGV4LXN0YXJ0LCAkZGlyZWN0aW9uOiBjb2x1bW4pO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRtZWRpdW0tY29sb3I7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyMHB4O1xyXG5cclxuICAgIC50ZXh0IHtcclxuICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICBmb250LWZhbWlseTogJ0NvZGUgU291cmNlIEJvbGQnO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cclxuICAgICAgJl9zbWFsbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmX21lZGl1bSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MjBweCkge1xyXG4gIC5wZXJzb24ge1xyXG4gICAgJl9fc3RhdHVzIHtcclxuICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIGZsZXgtc2hyaW5rOiAxO1xyXG5cclxuICAgICAgLnRleHQge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgICZfX3BheSB7XHJcbiAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gIC5wZXJzb24ge1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICB9XHJcbn1cclxuIiwiXHJcbkBtaXhpbiBmbGV4TWl4KCRqdXN0aWZ5OiBjZW50ZXIsICRhbGlnbjogY2VudGVyLCAkZGlyZWN0aW9uOiByb3cpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiAkYWxpZ247XHJcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcclxuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcclxufVxyXG5cclxuQG1peGluIGZvbnRTdHlsZSgkc2l6ZTogMThweCwgJGNvbG9yOiAkbWFpbi1mb250KSB7XHJcbiAgZm9udC1zaXplOiAkc2l6ZTtcclxuICBjb2xvcjogJGNvbG9yO1xyXG59XHJcbiIsIiRtYWluLWZvbnQ6ICMwMDAwMDA7XHJcbiRtdXRlZC1mb250OiAjNDg0ODQ5O1xyXG4kYWN0aXZlLWZvbnQ6ICNmOTFiMWI7XHJcbiRvZGQtYmFja2dyb3VuZDogI2YwZjBmMDtcclxuJGRhcmstY29sb3I6ICMyODJlMzU7XHJcbiRtZWRpdW0tY29sb3I6ICMyZTM0M2E7XHJcbiRsaWdodC1jb2xvcjogI2YwZjBmMDtcclxuIl19 */"] });
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
    }
    ngOnInit() {
    }
}
SupportCompanyGroupComponent.ɵfac = function SupportCompanyGroupComponent_Factory(t) { return new (t || SupportCompanyGroupComponent)(); };
SupportCompanyGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SupportCompanyGroupComponent, selectors: [["app-support-company-group"]], inputs: { supportCompanies: "supportCompanies" }, decls: 15, vars: 1, consts: [[1, "support"], [1, "support__myself"], ["src", "assets/logo_main.png", "alt", "", 1, "logo"], [1, "title"], ["target", "_blank", "href", "https://app.getresponse.com/site2/sluhay_b2b/?u=yhedG&webforms_id=B7YvD", 1, "button"], ["src", "assets/play.png", "alt", ""], [1, "support__persons", "support__persons_left"], ["src", "assets/snow_flake.png", "alt", "", 1, "snow-flake"], [3, "company", 4, "ngFor", "ngForOf"], [3, "company"]], template: function SupportCompanyGroupComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _support_company_support_company_component__WEBPACK_IMPORTED_MODULE_2__["SupportCompanyComponent"]], styles: ["@font-face {\n  font-family: \"Code Source Light\";\n  src: url('SourceCodePro-Light.ttf');\n}\n@font-face {\n  font-family: \"Code Source Medium\";\n  src: url('SourceCodePro-Medium.ttf');\n}\n@font-face {\n  font-family: \"Code Source Bold\";\n  src: url('SourceCodePro-Bold.ttf');\n}\n.support[_ngcontent-%COMP%] {\n  width: 1430px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  padding: 120px 0;\n  box-sizing: border-box;\n}\n.support__persons[_ngcontent-%COMP%] {\n  width: 60%;\n  flex-shrink: 0;\n  position: relative;\n}\n.support__persons[_ngcontent-%COMP%]   .snow-flake[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -200px;\n  top: calc(50% - 200px);\n  z-index: 0;\n}\n.support__persons_left[_ngcontent-%COMP%]   .snow-flake[_ngcontent-%COMP%] {\n  left: -200px;\n  top: calc(50% - 200px);\n}\n.support__myself[_ngcontent-%COMP%] {\n  padding-left: 130px;\n  box-sizing: border-box;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: column;\n  position: relative;\n  z-index: 1;\n}\n.support__myself[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  margin-bottom: 45px;\n}\n.support__myself[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  width: 210px;\n  height: 50px;\n  background-color: #f91b1b;\n  border-radius: 5px;\n  outline: none;\n  border: none;\n  text-transform: uppercase;\n  font-size: 14px;\n  color: white;\n  font-family: \"Code Source Bold\";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  margin-top: 37px;\n  text-decoration: none;\n}\n.support__myself[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  padding-right: 10px;\n}\n@media screen and (max-width: 1430px) {\n  .support[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media screen and (max-width: 1010px) {\n  .support[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column;\n  }\n  .support__myself[_ngcontent-%COMP%] {\n    padding-left: 40px;\n    margin-bottom: 30px;\n  }\n  .support__persons[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .support__persons[_ngcontent-%COMP%]   .snow-flake[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media screen and (max-width: 530px) {\n  .support__myself[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n    font-size: 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3N1cHBvcnQtY29tcGFueS1ncm91cC9zdXBwb3J0LWNvbXBhbnktZ3JvdXAuY29tcG9uZW50LnNjc3MiLCJzcmMvdGhlbWUvbWl4aW5zLnNjc3MiLCJzcmMvdGhlbWUvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBQTtFQUNBLG1DQUFBO0FDQ0Y7QURFQTtFQUNFLGlDQUFBO0VBQ0Esb0NBQUE7QUNBRjtBREdBO0VBQ0UsK0JBQUE7RUFDQSxrQ0FBQTtBQ0RGO0FBUEE7RUFDRSxhQUFBO0VDSEEsYUFBQTtFQUNBLG1CQUZ1QztFQUd2Qyx1QkFIdUI7RUFJdkIsbUJBSjJEO0VETTNELGdCQUFBO0VBQ0Esc0JBQUE7QUFZRjtBQVZFO0VBQ0UsVUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQVlKO0FBVkk7RUFDRSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLFVBQUE7QUFZTjtBQVJNO0VBQ0UsWUFBQTtFQUNBLHNCQUFBO0FBVVI7QUFMRTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7RUM5QkYsYUFBQTtFQUNBLHVCRDhCMkI7RUM3QjNCLHVCQUh1QjtFQUl2QixzQkQ0Qm1EO0VBQ2pELGtCQUFBO0VBQ0EsVUFBQTtBQVVKO0FBUkk7RUFDRSxtQkFBQTtBQVVOO0FBUEk7RUFDRSxZQUFBO0VBQ0EsWUFBQTtFQUNBLHlCRTFDUTtFRjJDUixrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUN2Q0osZUR3Q3VCO0VDdkN2QixZRHVDNkI7RUFDekIsK0JBQUE7RUNoREosYUFBQTtFQUNBLG1CQUZ1QztFQUd2Qyx1QkFIdUI7RUFJdkIsbUJBSjJEO0VEbUR2RCxnQkFBQTtFQUNBLHFCQUFBO0FBYU47QUFYTTtFQUNFLG1CQUFBO0FBYVI7QUFOQTtFQUNFO0lBQ0UsV0FBQTtFQVNGO0FBQ0Y7QUFOQTtFQUNFO0lDcEVBLGFBQUE7SUFDQSxtQkFGdUM7SUFHdkMsdUJBSHVCO0lBSXZCLHNCRGtFK0I7RUFXL0I7RUFWRTtJQUNFLGtCQUFBO0lBQ0EsbUJBQUE7RUFZSjtFQVRFO0lBQ0UsV0FBQTtFQVdKO0VBVEk7SUFDRSxhQUFBO0VBV047QUFDRjtBQU5BO0VBR007SUFDRSxlQUFBO0VBTU47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3VwcG9ydC1jb21wYW55LWdyb3VwL3N1cHBvcnQtY29tcGFueS1ncm91cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiAnQ29kZSBTb3VyY2UgTGlnaHQnO1xyXG4gIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvU291cmNlQ29kZVByby1MaWdodC50dGYnKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdDb2RlIFNvdXJjZSBNZWRpdW0nO1xyXG4gIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvU291cmNlQ29kZVByby1NZWRpdW0udHRmJyk7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiAnQ29kZSBTb3VyY2UgQm9sZCc7XHJcbiAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9Tb3VyY2VDb2RlUHJvLUJvbGQudHRmJyk7XHJcbn1cclxuIiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkNvZGUgU291cmNlIExpZ2h0XCI7XG4gIHNyYzogdXJsKFwiLi4vYXNzZXRzL2ZvbnRzL1NvdXJjZUNvZGVQcm8tTGlnaHQudHRmXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkNvZGUgU291cmNlIE1lZGl1bVwiO1xuICBzcmM6IHVybChcIi4uL2Fzc2V0cy9mb250cy9Tb3VyY2VDb2RlUHJvLU1lZGl1bS50dGZcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQ29kZSBTb3VyY2UgQm9sZFwiO1xuICBzcmM6IHVybChcIi4uL2Fzc2V0cy9mb250cy9Tb3VyY2VDb2RlUHJvLUJvbGQudHRmXCIpO1xufVxuLnN1cHBvcnQge1xuICB3aWR0aDogMTQzMHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgcGFkZGluZzogMTIwcHggMDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cbi5zdXBwb3J0X19wZXJzb25zIHtcbiAgd2lkdGg6IDYwJTtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zdXBwb3J0X19wZXJzb25zIC5zbm93LWZsYWtlIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICByaWdodDogLTIwMHB4O1xuICB0b3A6IGNhbGMoNTAlIC0gMjAwcHgpO1xuICB6LWluZGV4OiAwO1xufVxuLnN1cHBvcnRfX3BlcnNvbnNfbGVmdCAuc25vdy1mbGFrZSB7XG4gIGxlZnQ6IC0yMDBweDtcbiAgdG9wOiBjYWxjKDUwJSAtIDIwMHB4KTtcbn1cbi5zdXBwb3J0X19teXNlbGYge1xuICBwYWRkaW5nLWxlZnQ6IDEzMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbn1cbi5zdXBwb3J0X19teXNlbGYgLmxvZ28ge1xuICBtYXJnaW4tYm90dG9tOiA0NXB4O1xufVxuLnN1cHBvcnRfX215c2VsZiAuYnV0dG9uIHtcbiAgd2lkdGg6IDIxMHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOTFiMWI7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgYm9yZGVyOiBub25lO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250LXNpemU6IDE0cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1mYW1pbHk6IFwiQ29kZSBTb3VyY2UgQm9sZFwiO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luLXRvcDogMzdweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuLnN1cHBvcnRfX215c2VsZiAuYnV0dG9uIGltZyB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDE0MzBweCkge1xuICAuc3VwcG9ydCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMTBweCkge1xuICAuc3VwcG9ydCB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgLnN1cHBvcnRfX215c2VsZiB7XG4gICAgcGFkZGluZy1sZWZ0OiA0MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIH1cbiAgLnN1cHBvcnRfX3BlcnNvbnMge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5zdXBwb3J0X19wZXJzb25zIC5zbm93LWZsYWtlIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MzBweCkge1xuICAuc3VwcG9ydF9fbXlzZWxmIC50aXRsZSB7XG4gICAgZm9udC1zaXplOiAzMHB4O1xuICB9XG59IiwiXHJcbkBtaXhpbiBmbGV4TWl4KCRqdXN0aWZ5OiBjZW50ZXIsICRhbGlnbjogY2VudGVyLCAkZGlyZWN0aW9uOiByb3cpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiAkYWxpZ247XHJcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcclxuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcclxufVxyXG5cclxuQG1peGluIGZvbnRTdHlsZSgkc2l6ZTogMThweCwgJGNvbG9yOiAkbWFpbi1mb250KSB7XHJcbiAgZm9udC1zaXplOiAkc2l6ZTtcclxuICBjb2xvcjogJGNvbG9yO1xyXG59XHJcbiIsIiRtYWluLWZvbnQ6ICMwMDAwMDA7XHJcbiRtdXRlZC1mb250OiAjNDg0ODQ5O1xyXG4kYWN0aXZlLWZvbnQ6ICNmOTFiMWI7XHJcbiRvZGQtYmFja2dyb3VuZDogI2YwZjBmMDtcclxuJGRhcmstY29sb3I6ICMyODJlMzU7XHJcbiRtZWRpdW0tY29sb3I6ICMyZTM0M2E7XHJcbiRsaWdodC1jb2xvcjogI2YwZjBmMDtcclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SupportCompanyGroupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-support-company-group',
                templateUrl: './support-company-group.component.html',
                styleUrls: ['./support-company-group.component.scss']
            }]
    }], function () { return []; }, { supportCompanies: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
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
BandLogoComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BandLogoComponent, selectors: [["app-band-logo"]], inputs: { text: "text" }, decls: 4, vars: 1, consts: [[1, "logo"], ["src", "assets/logo_empty.png", "alt", "", 1, "logo__image"], [1, "logo__text"]], template: function BandLogoComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.text);
    } }, styles: ["@font-face {\n  font-family: \"Code Source Light\";\n  src: url('SourceCodePro-Light.ttf');\n}\n@font-face {\n  font-family: \"Code Source Medium\";\n  src: url('SourceCodePro-Medium.ttf');\n}\n@font-face {\n  font-family: \"Code Source Bold\";\n  src: url('SourceCodePro-Bold.ttf');\n}\n.logo[_ngcontent-%COMP%] {\n  width: 100px;\n  height: 100px;\n  position: relative;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: row;\n}\n.logo__image[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n}\n.logo__text[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  font-family: \"Code Source Bold\";\n  font-size: 35px;\n  color: white;\n  margin-top: 12px;\n  position: relative;\n  z-index: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2JhbmQtbG9nby9iYW5kLWxvZ28uY29tcG9uZW50LnNjc3MiLCJzcmMvdGhlbWUvbWl4aW5zLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBQTtFQUNBLG1DQUFBO0FDQ0Y7QURFQTtFQUNFLGlDQUFBO0VBQ0Esb0NBQUE7QUNBRjtBREdBO0VBQ0UsK0JBQUE7RUFDQSxrQ0FBQTtBQ0RGO0FBUkE7RUFDRSxZQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VDSkEsYUFBQTtFQUNBLHVCREl5QjtFQ0h6Qix1QkFIdUI7RUFJdkIsbUJBSjJEO0FEbUI3RDtBQVhFO0VBQ0UsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0FBYUo7QUFWRTtFQUNFLHlCQUFBO0VBQ0EsK0JBQUE7RUNWRixlRFdxQjtFQ1ZyQixZRFUyQjtFQUN6QixnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQWFKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9iYW5kLWxvZ28vYmFuZC1sb2dvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdDb2RlIFNvdXJjZSBMaWdodCc7XHJcbiAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9Tb3VyY2VDb2RlUHJvLUxpZ2h0LnR0ZicpO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogJ0NvZGUgU291cmNlIE1lZGl1bSc7XHJcbiAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9Tb3VyY2VDb2RlUHJvLU1lZGl1bS50dGYnKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdDb2RlIFNvdXJjZSBCb2xkJztcclxuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL1NvdXJjZUNvZGVQcm8tQm9sZC50dGYnKTtcclxufVxyXG4iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQ29kZSBTb3VyY2UgTGlnaHRcIjtcbiAgc3JjOiB1cmwoXCIuLi9hc3NldHMvZm9udHMvU291cmNlQ29kZVByby1MaWdodC50dGZcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQ29kZSBTb3VyY2UgTWVkaXVtXCI7XG4gIHNyYzogdXJsKFwiLi4vYXNzZXRzL2ZvbnRzL1NvdXJjZUNvZGVQcm8tTWVkaXVtLnR0ZlwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJDb2RlIFNvdXJjZSBCb2xkXCI7XG4gIHNyYzogdXJsKFwiLi4vYXNzZXRzL2ZvbnRzL1NvdXJjZUNvZGVQcm8tQm9sZC50dGZcIik7XG59XG4ubG9nbyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG59XG4ubG9nb19faW1hZ2Uge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbn1cbi5sb2dvX190ZXh0IHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1mYW1pbHk6IFwiQ29kZSBTb3VyY2UgQm9sZFwiO1xuICBmb250LXNpemU6IDM1cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXRvcDogMTJweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xufSIsIlxyXG5AbWl4aW4gZmxleE1peCgkanVzdGlmeTogY2VudGVyLCAkYWxpZ246IGNlbnRlciwgJGRpcmVjdGlvbjogcm93KSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogJGFsaWduO1xyXG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XHJcbiAgZmxleC1kaXJlY3Rpb246ICRkaXJlY3Rpb247XHJcbn1cclxuXHJcbkBtaXhpbiBmb250U3R5bGUoJHNpemU6IDE4cHgsICRjb2xvcjogJG1haW4tZm9udCkge1xyXG4gIGZvbnQtc2l6ZTogJHNpemU7XHJcbiAgY29sb3I6ICRjb2xvcjtcclxufVxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BandLogoComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-band-logo',
                templateUrl: './band-logo.component.html',
                styleUrls: ['./band-logo.component.scss']
            }]
    }], function () { return []; }, { text: [{
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
    } }, styles: ["@font-face {\n  font-family: \"Code Source Light\";\n  src: url('SourceCodePro-Light.ttf');\n}\n@font-face {\n  font-family: \"Code Source Medium\";\n  src: url('SourceCodePro-Medium.ttf');\n}\n@font-face {\n  font-family: \"Code Source Bold\";\n  src: url('SourceCodePro-Bold.ttf');\n}\n[_nghost-%COMP%] {\n  width: 31%;\n  margin-right: 20px;\n}\n@media screen and (max-width: 896px) {\n  [_nghost-%COMP%] {\n    width: 46%;\n  }\n}\n@media screen and (max-width: 600px) {\n  [_nghost-%COMP%] {\n    width: 100%;\n  }\n}\n.band[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 60px;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: column;\n  cursor: pointer;\n}\n.band[_ngcontent-%COMP%]:hover   .band__poster-layout[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.band__poster[_ngcontent-%COMP%] {\n  width: 100%;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  margin-bottom: 30px;\n  position: relative;\n}\n.band__poster[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: block;\n  padding-bottom: 100%;\n}\n.band__poster-layout[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  background: rgba(249, 27, 27, 0.6);\n  z-index: 1;\n  text-transform: uppercase;\n  font-size: 14px;\n  color: white;\n  font-family: \"Code Source Light\";\n  opacity: 0;\n  transition: 0.4s;\n}\n.band__poster-layout-text[_ngcontent-%COMP%] {\n  margin-top: 17px;\n}\n.band__name[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #000000;\n  font-family: \"Code Source Bold\";\n  margin-bottom: 20px;\n}\n.band__genre[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #f91b1b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2JhbmQtaXRlbS9iYW5kLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzcmMvdGhlbWUvbWl4aW5zLnNjc3MiLCJzcmMvdGhlbWUvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBQTtFQUNBLG1DQUFBO0FDQ0Y7QURFQTtFQUNFLGlDQUFBO0VBQ0Esb0NBQUE7QUNBRjtBREdBO0VBQ0UsK0JBQUE7RUFDQSxrQ0FBQTtBQ0RGO0FBUEE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7QUFTRjtBQVBFO0VBSkY7SUFLSSxVQUFBO0VBVUY7QUFDRjtBQVJFO0VBUkY7SUFTSSxXQUFBO0VBV0Y7QUFDRjtBQVJBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VDakJBLGFBQUE7RUFDQSx1QkRpQnlCO0VDaEJ6Qix1QkFIdUI7RUFJdkIsc0JEZWlEO0VBQ2pELGVBQUE7QUFjRjtBQVhJO0VBQ0UsVUFBQTtBQWFOO0FBVEU7RUFDRSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQVdKO0FBVEk7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBV047QUFSSTtFQ3pDRixhQUFBO0VBQ0EsbUJBRnVDO0VBR3ZDLHVCQUh1QjtFQUl2QixzQkR1Q2lDO0VBQzdCLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLGtDQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VDM0NKLGVENEN1QjtFQzNDdkIsWUQyQzZCO0VBQ3pCLGdDQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBY047QUFaTTtFQUNFLGdCQUFBO0FBY1I7QUFURTtFQ3ZEQSxlRHdEcUI7RUN2RHJCLGNDVlU7RUZrRVIsK0JBQUE7RUFDQSxtQkFBQTtBQVlKO0FBVEU7RUM3REEsZUFEc0I7RUFFdEIsY0NSWTtBRmlGZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmFuZC1pdGVtL2JhbmQtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiAnQ29kZSBTb3VyY2UgTGlnaHQnO1xyXG4gIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvU291cmNlQ29kZVByby1MaWdodC50dGYnKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdDb2RlIFNvdXJjZSBNZWRpdW0nO1xyXG4gIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvU291cmNlQ29kZVByby1NZWRpdW0udHRmJyk7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiAnQ29kZSBTb3VyY2UgQm9sZCc7XHJcbiAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9Tb3VyY2VDb2RlUHJvLUJvbGQudHRmJyk7XHJcbn1cclxuIiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkNvZGUgU291cmNlIExpZ2h0XCI7XG4gIHNyYzogdXJsKFwiLi4vYXNzZXRzL2ZvbnRzL1NvdXJjZUNvZGVQcm8tTGlnaHQudHRmXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkNvZGUgU291cmNlIE1lZGl1bVwiO1xuICBzcmM6IHVybChcIi4uL2Fzc2V0cy9mb250cy9Tb3VyY2VDb2RlUHJvLU1lZGl1bS50dGZcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQ29kZSBTb3VyY2UgQm9sZFwiO1xuICBzcmM6IHVybChcIi4uL2Fzc2V0cy9mb250cy9Tb3VyY2VDb2RlUHJvLUJvbGQudHRmXCIpO1xufVxuOmhvc3Qge1xuICB3aWR0aDogMzElO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4OTZweCkge1xuICA6aG9zdCB7XG4gICAgd2lkdGg6IDQ2JTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgOmhvc3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi5iYW5kIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDYwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuLmJhbmQ6aG92ZXIgLmJhbmRfX3Bvc3Rlci1sYXlvdXQge1xuICBvcGFjaXR5OiAxO1xufVxuLmJhbmRfX3Bvc3RlciB7XG4gIHdpZHRoOiAxMDAlO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5iYW5kX19wb3N0ZXI6OmFmdGVyIHtcbiAgY29udGVudDogXCJcIjtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmctYm90dG9tOiAxMDAlO1xufVxuLmJhbmRfX3Bvc3Rlci1sYXlvdXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIGJhY2tncm91bmQ6IHJnYmEoMjQ5LCAyNywgMjcsIDAuNik7XG4gIHotaW5kZXg6IDE7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogXCJDb2RlIFNvdXJjZSBMaWdodFwiO1xuICBvcGFjaXR5OiAwO1xuICB0cmFuc2l0aW9uOiAwLjRzO1xufVxuLmJhbmRfX3Bvc3Rlci1sYXlvdXQtdGV4dCB7XG4gIG1hcmdpbi10b3A6IDE3cHg7XG59XG4uYmFuZF9fbmFtZSB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIGZvbnQtZmFtaWx5OiBcIkNvZGUgU291cmNlIEJvbGRcIjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cbi5iYW5kX19nZW5yZSB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICNmOTFiMWI7XG59IiwiXHJcbkBtaXhpbiBmbGV4TWl4KCRqdXN0aWZ5OiBjZW50ZXIsICRhbGlnbjogY2VudGVyLCAkZGlyZWN0aW9uOiByb3cpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiAkYWxpZ247XHJcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcclxuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcclxufVxyXG5cclxuQG1peGluIGZvbnRTdHlsZSgkc2l6ZTogMThweCwgJGNvbG9yOiAkbWFpbi1mb250KSB7XHJcbiAgZm9udC1zaXplOiAkc2l6ZTtcclxuICBjb2xvcjogJGNvbG9yO1xyXG59XHJcbiIsIiRtYWluLWZvbnQ6ICMwMDAwMDA7XHJcbiRtdXRlZC1mb250OiAjNDg0ODQ5O1xyXG4kYWN0aXZlLWZvbnQ6ICNmOTFiMWI7XHJcbiRvZGQtYmFja2dyb3VuZDogI2YwZjBmMDtcclxuJGRhcmstY29sb3I6ICMyODJlMzU7XHJcbiRtZWRpdW0tY29sb3I6ICMyZTM0M2E7XHJcbiRsaWdodC1jb2xvcjogI2YwZjBmMDtcclxuIl19 */"] });
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
    } }, styles: [".person[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  color: white;\n  margin-bottom: 30px;\n  position: relative;\n  z-index: 1;\n}\n.person__status[_ngcontent-%COMP%] {\n  width: 65%;\n  height: 240px;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: column;\n  box-sizing: border-box;\n  padding-left: 30px;\n  background-color: #282e35;\n  flex-shrink: 0;\n  text-transform: uppercase;\n}\n.person__status[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-family: \"Code Source Bold\";\n  font-size: 20px;\n  margin-bottom: 20px;\n  margin-top: 20px;\n}\n.person__status[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #f91b1b;\n}\n.person__pay[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 240px;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: column;\n  box-sizing: border-box;\n  padding-left: 30px;\n  background-color: #2e343a;\n  padding-right: 20px;\n}\n.person__pay[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-family: \"Code Source Bold\";\n  text-transform: uppercase;\n}\n.person__pay[_ngcontent-%COMP%]   .text_small[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.person__pay[_ngcontent-%COMP%]   .text_medium[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n@media screen and (max-width: 530px) {\n  .person[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n  .person__status[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdXBwb3J0LWNvbXBhbnkvc3VwcG9ydC1jb21wYW55LmNvbXBvbmVudC5zY3NzIiwic3JjL3RoZW1lL21peGlucy5zY3NzIiwic3JjL3RoZW1lL2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdBO0VBQ0UsV0FBQTtFQ0ZBLGFBQUE7RUFDQSxtQkFGdUM7RUFHdkMsdUJBSHVCO0VBSXZCLG1CQUoyRDtFREszRCxpQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQUNGO0FBQ0U7RUFDRSxVQUFBO0VBQ0EsYUFBQTtFQ1pGLGFBQUE7RUFDQSx1QkRZMkI7RUNYM0IsdUJBSHVCO0VBSXZCLHNCRFVtRDtFQUNqRCxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJFZFM7RUZlVCxjQUFBO0VBQ0EseUJBQUE7QUFJSjtBQUZJO0VBQ0UsK0JBQUE7RUFDQSxlQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQUlOO0FBREk7RUNwQkYsZUFEc0I7RUFFdEIsY0NSWTtBRmdDZDtBQUFFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUNsQ0YsYUFBQTtFQUNBLHVCRGtDMkI7RUNqQzNCLHVCQUh1QjtFQUl2QixzQkRnQ21EO0VBQ2pELHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkVuQ1c7RUZvQ1gsbUJBQUE7QUFLSjtBQUhJO0VBQ0UsZUFBQTtFQUNBLCtCQUFBO0VBQ0EseUJBQUE7QUFLTjtBQUhNO0VBQ0UsZUFBQTtBQUtSO0FBRk07RUFDRSxlQUFBO0FBSVI7QUFFQTtFQUNFO0lBQ0Usc0JBQUE7RUFDRjtFQUNFO0lBQ0UsV0FBQTtFQUNKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3N1cHBvcnQtY29tcGFueS9zdXBwb3J0LWNvbXBhbnkuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vLi4vdGhlbWUvbWl4aW5zLnNjc3NcIjtcclxuQGltcG9ydCBcIi4uLy4uLy4uL3RoZW1lL2NvbG9ycy5zY3NzXCI7XHJcblxyXG4ucGVyc29uIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBAaW5jbHVkZSBmbGV4TWl4O1xyXG4gIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB6LWluZGV4OiAxO1xyXG5cclxuICAmX19zdGF0dXMge1xyXG4gICAgd2lkdGg6IDY1JTtcclxuICAgIGhlaWdodDogMjQwcHg7XHJcbiAgICBAaW5jbHVkZSBmbGV4TWl4KCRhbGlnbjogZmxleC1zdGFydCwgJGRpcmVjdGlvbjogY29sdW1uKTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFyay1jb2xvcjtcclxuICAgIGZsZXgtc2hyaW5rOiAwO1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuXHJcbiAgICAubmFtZSB7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnQ29kZSBTb3VyY2UgQm9sZCc7XHJcbiAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxuICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICAucm9sZSB7XHJcbiAgICAgIEBpbmNsdWRlIGZvbnRTdHlsZSgkY29sb3I6ICRhY3RpdmUtZm9udCk7XHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICAmX19wYXkge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDI0MHB4O1xyXG4gICAgQGluY2x1ZGUgZmxleE1peCgkYWxpZ246IGZsZXgtc3RhcnQsICRkaXJlY3Rpb246IGNvbHVtbik7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJG1lZGl1bS1jb2xvcjtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcblxyXG4gICAgLnRleHQge1xyXG4gICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnQ29kZSBTb3VyY2UgQm9sZCc7XHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcblxyXG4gICAgICAmX3NtYWxsIHtcclxuICAgICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgICZfbWVkaXVtIHtcclxuICAgICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUzMHB4KSB7XHJcbiAgLnBlcnNvbiB7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICZfX3N0YXR1cyB7XHJcbiAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJcclxuQG1peGluIGZsZXhNaXgoJGp1c3RpZnk6IGNlbnRlciwgJGFsaWduOiBjZW50ZXIsICRkaXJlY3Rpb246IHJvdykge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6ICRhbGlnbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xyXG59XHJcblxyXG5AbWl4aW4gZm9udFN0eWxlKCRzaXplOiAxOHB4LCAkY29sb3I6ICRtYWluLWZvbnQpIHtcclxuICBmb250LXNpemU6ICRzaXplO1xyXG4gIGNvbG9yOiAkY29sb3I7XHJcbn1cclxuIiwiJG1haW4tZm9udDogIzAwMDAwMDtcclxuJG11dGVkLWZvbnQ6ICM0ODQ4NDk7XHJcbiRhY3RpdmUtZm9udDogI2Y5MWIxYjtcclxuJG9kZC1iYWNrZ3JvdW5kOiAjZjBmMGYwO1xyXG4kZGFyay1jb2xvcjogIzI4MmUzNTtcclxuJG1lZGl1bS1jb2xvcjogIzJlMzQzYTtcclxuJGxpZ2h0LWNvbG9yOiAjZjBmMGYwO1xyXG4iXX0= */"] });
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




function SupportPersonGroupComponent_app_support_person_3_Template(rf, ctx) { if (rf & 1) {
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
SupportPersonGroupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SupportPersonGroupComponent, selectors: [["app-support-person-group"]], inputs: { supportPersons: "supportPersons" }, decls: 15, vars: 1, consts: [[1, "support"], [1, "support__persons"], ["src", "assets/snow_flake.png", "alt", "", 1, "snow-flake"], [3, "person", 4, "ngFor", "ngForOf"], [1, "support__myself"], ["src", "assets/logo_main.png", "alt", "", 1, "logo"], [1, "title"], ["href", "https://persik.by/private/tv-tarify", "target", "_blank", 1, "button"], ["src", "assets/play.png", "alt", ""], [3, "person"]], template: function SupportPersonGroupComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, SupportPersonGroupComponent_app_support_person_3_Template, 1, 1, "app-support-person", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.supportPersons);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _support_person_support_person_component__WEBPACK_IMPORTED_MODULE_2__["SupportPersonComponent"]], styles: ["@font-face {\n  font-family: \"Code Source Light\";\n  src: url('SourceCodePro-Light.ttf');\n}\n@font-face {\n  font-family: \"Code Source Medium\";\n  src: url('SourceCodePro-Medium.ttf');\n}\n@font-face {\n  font-family: \"Code Source Bold\";\n  src: url('SourceCodePro-Bold.ttf');\n}\n.support[_ngcontent-%COMP%] {\n  width: 1430px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  padding: 120px 0;\n  box-sizing: border-box;\n}\n.support__persons[_ngcontent-%COMP%] {\n  width: 60%;\n  flex-shrink: 0;\n  position: relative;\n}\n.support__persons[_ngcontent-%COMP%]   .snow-flake[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -200px;\n  top: calc(50% - 200px);\n  z-index: 0;\n}\n.support__persons_left[_ngcontent-%COMP%]   .snow-flake[_ngcontent-%COMP%] {\n  left: -200px;\n  top: calc(50% - 200px);\n}\n.support__myself[_ngcontent-%COMP%] {\n  padding-left: 130px;\n  box-sizing: border-box;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: column;\n  position: relative;\n  z-index: 1;\n}\n.support__myself[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  margin-bottom: 45px;\n}\n.support__myself[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  width: 210px;\n  height: 50px;\n  background-color: #f91b1b;\n  border-radius: 5px;\n  outline: none;\n  border: none;\n  text-transform: uppercase;\n  font-size: 14px;\n  color: white;\n  font-family: \"Code Source Bold\";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  margin-top: 37px;\n  text-decoration: none;\n}\n.support__myself[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  padding-right: 10px;\n}\n@media screen and (max-width: 1430px) {\n  .support[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media screen and (max-width: 1010px) {\n  .support[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: column-reverse;\n  }\n  .support__myself[_ngcontent-%COMP%] {\n    padding-left: 40px;\n    margin-bottom: 30px;\n  }\n  .support__persons[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .support__persons[_ngcontent-%COMP%]   .snow-flake[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3N1cHBvcnQtcGVyc29uLWdyb3VwL3N1cHBvcnQtcGVyc29uLWdyb3VwLmNvbXBvbmVudC5zY3NzIiwic3JjL3RoZW1lL21peGlucy5zY3NzIiwic3JjL3RoZW1lL2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0NBQUE7RUFDQSxtQ0FBQTtBQ0NGO0FERUE7RUFDRSxpQ0FBQTtFQUNBLG9DQUFBO0FDQUY7QURHQTtFQUNFLCtCQUFBO0VBQ0Esa0NBQUE7QUNERjtBQVBBO0VBQ0UsYUFBQTtFQ0hBLGFBQUE7RUFDQSxtQkFGdUM7RUFHdkMsdUJBSHVCO0VBSXZCLG1CQUoyRDtFRE0zRCxnQkFBQTtFQUNBLHNCQUFBO0FBWUY7QUFWRTtFQUNFLFVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFZSjtBQVZJO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0FBWU47QUFSTTtFQUNFLFlBQUE7RUFDQSxzQkFBQTtBQVVSO0FBTEU7RUFDRSxtQkFBQTtFQUNBLHNCQUFBO0VDOUJGLGFBQUE7RUFDQSx1QkQ4QjJCO0VDN0IzQix1QkFIdUI7RUFJdkIsc0JENEJtRDtFQUNqRCxrQkFBQTtFQUNBLFVBQUE7QUFVSjtBQVJJO0VBQ0UsbUJBQUE7QUFVTjtBQVBJO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSx5QkUxQ1E7RUYyQ1Isa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHlCQUFBO0VDdkNKLGVEd0N1QjtFQ3ZDdkIsWUR1QzZCO0VBQ3pCLCtCQUFBO0VDaERKLGFBQUE7RUFDQSxtQkFGdUM7RUFHdkMsdUJBSHVCO0VBSXZCLG1CQUoyRDtFRG1EdkQsZ0JBQUE7RUFDQSxxQkFBQTtBQWFOO0FBWE07RUFDRSxtQkFBQTtBQWFSO0FBTkE7RUFDRTtJQUNFLFdBQUE7RUFTRjtBQUNGO0FBTkE7RUFDRTtJQ3BFQSxhQUFBO0lBQ0EsbUJBRnVDO0lBR3ZDLHVCQUh1QjtJQUl2Qiw4QkRrRStCO0VBVy9CO0VBVkU7SUFDRSxrQkFBQTtJQUNBLG1CQUFBO0VBWUo7RUFURTtJQUNFLFdBQUE7RUFXSjtFQVRJO0lBQ0UsYUFBQTtFQVdOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3N1cHBvcnQtcGVyc29uLWdyb3VwL3N1cHBvcnQtcGVyc29uLWdyb3VwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdDb2RlIFNvdXJjZSBMaWdodCc7XHJcbiAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9Tb3VyY2VDb2RlUHJvLUxpZ2h0LnR0ZicpO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogJ0NvZGUgU291cmNlIE1lZGl1bSc7XHJcbiAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9Tb3VyY2VDb2RlUHJvLU1lZGl1bS50dGYnKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdDb2RlIFNvdXJjZSBCb2xkJztcclxuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL1NvdXJjZUNvZGVQcm8tQm9sZC50dGYnKTtcclxufVxyXG4iLCJAZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQ29kZSBTb3VyY2UgTGlnaHRcIjtcbiAgc3JjOiB1cmwoXCIuLi9hc3NldHMvZm9udHMvU291cmNlQ29kZVByby1MaWdodC50dGZcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQ29kZSBTb3VyY2UgTWVkaXVtXCI7XG4gIHNyYzogdXJsKFwiLi4vYXNzZXRzL2ZvbnRzL1NvdXJjZUNvZGVQcm8tTWVkaXVtLnR0ZlwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJDb2RlIFNvdXJjZSBCb2xkXCI7XG4gIHNyYzogdXJsKFwiLi4vYXNzZXRzL2ZvbnRzL1NvdXJjZUNvZGVQcm8tQm9sZC50dGZcIik7XG59XG4uc3VwcG9ydCB7XG4gIHdpZHRoOiAxNDMwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBwYWRkaW5nOiAxMjBweCAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLnN1cHBvcnRfX3BlcnNvbnMge1xuICB3aWR0aDogNjAlO1xuICBmbGV4LXNocmluazogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnN1cHBvcnRfX3BlcnNvbnMgLnNub3ctZmxha2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtMjAwcHg7XG4gIHRvcDogY2FsYyg1MCUgLSAyMDBweCk7XG4gIHotaW5kZXg6IDA7XG59XG4uc3VwcG9ydF9fcGVyc29uc19sZWZ0IC5zbm93LWZsYWtlIHtcbiAgbGVmdDogLTIwMHB4O1xuICB0b3A6IGNhbGMoNTAlIC0gMjAwcHgpO1xufVxuLnN1cHBvcnRfX215c2VsZiB7XG4gIHBhZGRpbmctbGVmdDogMTMwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xufVxuLnN1cHBvcnRfX215c2VsZiAubG9nbyB7XG4gIG1hcmdpbi1ib3R0b206IDQ1cHg7XG59XG4uc3VwcG9ydF9fbXlzZWxmIC5idXR0b24ge1xuICB3aWR0aDogMjEwcHg7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y5MWIxYjtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBvdXRsaW5lOiBub25lO1xuICBib3JkZXI6IG5vbmU7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LWZhbWlseTogXCJDb2RlIFNvdXJjZSBCb2xkXCI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBtYXJnaW4tdG9wOiAzN3B4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG4uc3VwcG9ydF9fbXlzZWxmIC5idXR0b24gaW1nIHtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQzMHB4KSB7XG4gIC5zdXBwb3J0IHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAxMHB4KSB7XG4gIC5zdXBwb3J0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICB9XG4gIC5zdXBwb3J0X19teXNlbGYge1xuICAgIHBhZGRpbmctbGVmdDogNDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICB9XG4gIC5zdXBwb3J0X19wZXJzb25zIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAuc3VwcG9ydF9fcGVyc29ucyAuc25vdy1mbGFrZSB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufSIsIlxyXG5AbWl4aW4gZmxleE1peCgkanVzdGlmeTogY2VudGVyLCAkYWxpZ246IGNlbnRlciwgJGRpcmVjdGlvbjogcm93KSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogJGFsaWduO1xyXG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XHJcbiAgZmxleC1kaXJlY3Rpb246ICRkaXJlY3Rpb247XHJcbn1cclxuXHJcbkBtaXhpbiBmb250U3R5bGUoJHNpemU6IDE4cHgsICRjb2xvcjogJG1haW4tZm9udCkge1xyXG4gIGZvbnQtc2l6ZTogJHNpemU7XHJcbiAgY29sb3I6ICRjb2xvcjtcclxufVxyXG4iLCIkbWFpbi1mb250OiAjMDAwMDAwO1xyXG4kbXV0ZWQtZm9udDogIzQ4NDg0OTtcclxuJGFjdGl2ZS1mb250OiAjZjkxYjFiO1xyXG4kb2RkLWJhY2tncm91bmQ6ICNmMGYwZjA7XHJcbiRkYXJrLWNvbG9yOiAjMjgyZTM1O1xyXG4kbWVkaXVtLWNvbG9yOiAjMmUzNDNhO1xyXG4kbGlnaHQtY29sb3I6ICNmMGYwZjA7XHJcbiJdfQ== */"] });
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