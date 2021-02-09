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




function HeaderComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
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
HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeaderComponent, selectors: [["app-header"]], decls: 2, vars: 1, consts: [[1, "header"], ["class", "header__item", 4, "ngFor", "ngForOf"], [1, "header__item"]], template: function HeaderComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HeaderComponent_div_1_Template, 2, 1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.headerItems);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgForOf"]], styles: [".header[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 125px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  font-family: \"Code Source Medium\";\n  position: absolute;\n  left: 0;\n  top: 0;\n  background: linear-gradient(to bottom, black, transparent);\n  z-index: 2;\n}\n.header__item[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  cursor: pointer;\n  margin-right: 38px;\n  color: white;\n}\n.header__item[_ngcontent-%COMP%]:last-child {\n  margin-right: 0;\n}\n@media screen and (max-width: 1430px) {\n  .header__item[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oZWFkZXIvaGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL3RoZW1lL21peGlucy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUNGQSxhQUFBO0VBQ0EsbUJBRnVDO0VBR3ZDLHVCQUh1QjtFQUl2QixtQkFKMkQ7RURLM0QsaUNBQUE7RUFDQSxrQkFBQTtFQUNBLE9BQUE7RUFDQSxNQUFBO0VBQ0EsMERBQUE7RUFDQSxVQUFBO0FBRUY7QUFBRTtFQUNFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUVKO0FBQUk7RUFDRSxlQUFBO0FBRU47QUFHQTtFQUVJO0lBQ0UsYUFBQTtFQURKO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi8uLi90aGVtZS9taXhpbnMuc2Nzcyc7XHJcblxyXG4uaGVhZGVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEyNXB4O1xyXG4gIEBpbmNsdWRlIGZsZXhNaXg7XHJcbiAgZm9udC1mYW1pbHk6ICdDb2RlIFNvdXJjZSBNZWRpdW0nO1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICBsZWZ0OiAwO1xyXG4gIHRvcDogMDtcclxuICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gYm90dG9tLCBibGFjaywgdHJhbnNwYXJlbnQpO1xyXG4gIHotaW5kZXg6IDI7XHJcblxyXG4gICZfX2l0ZW0ge1xyXG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbi1yaWdodDogMzhweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuXHJcbiAgICAmOmxhc3QtY2hpbGQge1xyXG4gICAgICBtYXJnaW4tcmlnaHQ6IDA7XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcblxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDMwcHgpIHtcclxuICAuaGVhZGVyIHtcclxuICAgICZfX2l0ZW0ge1xyXG4gICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG4gIH1cclxufVxyXG4iLCJcclxuQG1peGluIGZsZXhNaXgoJGp1c3RpZnk6IGNlbnRlciwgJGFsaWduOiBjZW50ZXIsICRkaXJlY3Rpb246IHJvdykge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6ICRhbGlnbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xyXG59XHJcblxyXG5AbWl4aW4gZm9udFN0eWxlKCRzaXplOiAxOHB4LCAkY29sb3I6ICRtYWluLWZvbnQpIHtcclxuICBmb250LXNpemU6ICRzaXplO1xyXG4gIGNvbG9yOiAkY29sb3I7XHJcbn1cclxuIl19 */"] });
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
        genre: _genres_enum__WEBPACK_IMPORTED_MODULE_0__["GENRES"].RAP,
        text: 'концерты и лайвы',
        url: 'assets/stub.jpg'
    },
    {
        genre: _genres_enum__WEBPACK_IMPORTED_MODULE_0__["GENRES"].ROCK,
        text: 'драйв/смысл',
        url: 'assets/stub.jpg'
    },
    {
        genre: _genres_enum__WEBPACK_IMPORTED_MODULE_0__["GENRES"].POP,
        text: 'популярная музыка',
        url: 'assets/stub.jpg'
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




function BandsComponent_p_8_Template(rf, ctx) { if (rf & 1) {
    const _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BandsComponent_p_8_Template_p_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r4); const item_r2 = ctx.$implicit; const ctx_r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r3.activateGenre(item_r2.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("genres__item_active", item_r2.id === ctx_r0.selectedGenreId);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r2.text);
} }
function BandsComponent_app_band_item_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-band-item", 10);
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
BandsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BandsComponent, selectors: [["app-bands"]], inputs: { genres: "genres", bands: "bands", selectedGenreId: "selectedGenreId" }, outputs: { changeGenre: "changeGenre" }, decls: 12, vars: 2, consts: [[1, "bands"], [1, "genres-selector"], ["src", "assets/logo_main.png", "alt", "", 1, "logo"], [1, "title"], [1, "genres"], ["class", "genres__item", 3, "genres__item_active", "click", 4, "ngFor", "ngForOf"], [1, "bands__list"], [1, "scroll-content"], [3, "band", 4, "ngFor", "ngForOf"], [1, "genres__item", 3, "click"], [3, "band"]], template: function BandsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u043E\u043D\u0438 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u0434\u0435\u043B\u0430\u044E\u0442 \u0431\u0435\u043B\u043E\u0440\u0443\u0441\u0441\u043A\u0443\u044E \u043C\u0443\u0437\u044B\u043A\u0443");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, BandsComponent_p_8_Template, 2, 3, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, BandsComponent_app_band_item_11_Template, 1, 1, "app-band-item", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.genres);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.bands);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgForOf"], _band_item_band_item_component__WEBPACK_IMPORTED_MODULE_2__["BandItemComponent"]], styles: ["@font-face {\n  font-family: \"Code Source Light\";\n  src: url('SourceCodePro-Light.ttf');\n}\n@font-face {\n  font-family: \"Code Source Medium\";\n  src: url('SourceCodePro-Medium.ttf');\n}\n@font-face {\n  font-family: \"Code Source Bold\";\n  src: url('SourceCodePro-Bold.ttf');\n}\n.bands[_ngcontent-%COMP%] {\n  width: 1430px;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: row;\n  margin-top: 120px;\n}\n.bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  flex-direction: column;\n  width: 30%;\n  height: 100%;\n  flex-shrink: 0;\n  padding-left: 130px;\n  box-sizing: border-box;\n  margin-top: 76px;\n}\n.bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  margin-bottom: 46px;\n}\n.bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%] {\n  margin-bottom: 58px;\n}\n.bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .genres[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #484849;\n  margin-bottom: 20px;\n  cursor: pointer;\n}\n.bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .genres__item_active[_ngcontent-%COMP%] {\n  color: #f91b1b;\n}\n.bands__list[_ngcontent-%COMP%] {\n  width: 70%;\n  flex-shrink: 0;\n  position: relative;\n}\n.bands__list[_ngcontent-%COMP%]:before {\n  content: \"\";\n  position: absolute;\n  width: 400px;\n  height: 400px;\n  background-image: url('snow_flake.png');\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n  left: -200px;\n  top: 0;\n  z-index: 0;\n}\n.bands__list[_ngcontent-%COMP%]   .scroll-content[_ngcontent-%COMP%] {\n  width: 100%;\n  flex-wrap: wrap;\n  max-height: 1840px;\n  overflow: hidden;\n  overflow-y: auto;\n  display: flex;\n  align-items: flex-start;\n  justify-content: flex-start;\n  flex-direction: row;\n}\n@media screen and (max-width: 1430px) {\n  .bands[_ngcontent-%COMP%] {\n    width: 100%;\n    flex-direction: column;\n    margin-top: 80px;\n  }\n  .bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%] {\n    width: 100%;\n    flex-direction: row;\n  }\n  .bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    margin-right: 50px;\n  }\n  .bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .genres[_ngcontent-%COMP%] {\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    flex-direction: row;\n    margin-bottom: 0;\n  }\n  .bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .genres__item[_ngcontent-%COMP%] {\n    margin-right: 40px;\n  }\n  .bands__list[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n@media screen and (max-width: 767px) {\n  .bands[_ngcontent-%COMP%] {\n    margin-top: 30px;\n  }\n  .bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%] {\n    padding-left: 30px;\n  }\n}\n@media screen and (max-width: 600px) {\n  .bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%] {\n    flex-direction: column;\n    margin-top: 20px;\n  }\n  .bands[_ngcontent-%COMP%]   .genres-selector[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n    margin-bottom: 10px;\n  }\n  .bands__list[_ngcontent-%COMP%] {\n    padding-left: 30px;\n    box-sizing: border-box;\n  }\n}\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 4px;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  background: #dfdfdf;\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #f91b1b;\n  height: 40px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2JhbmRzL2JhbmRzLmNvbXBvbmVudC5zY3NzIiwic3JjL3RoZW1lL21peGlucy5zY3NzIiwic3JjL3RoZW1lL2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0NBQUE7RUFDQSxtQ0FBQTtBQ0NGO0FERUE7RUFDRSxpQ0FBQTtFQUNBLG9DQUFBO0FDQUY7QURHQTtFQUNFLCtCQUFBO0VBQ0Esa0NBQUE7QUNERjtBQVBBO0VBQ0UsYUFBQTtFQ0hBLGFBQUE7RUFDQSx1QkRHeUI7RUNGekIsdUJBSHVCO0VBSXZCLG1CQUoyRDtFRE0zRCxpQkFBQTtBQVlGO0FBVkU7RUNQQSxhQUFBO0VBQ0EsdUJETzJCO0VDTjNCLDJCRE1pRDtFQ0xqRCxzQkRLeUU7RUFDdkUsVUFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FBZUo7QUFiSTtFQUNFLG1CQUFBO0FBZU47QUFaSTtFQUNFLG1CQUFBO0FBY047QUFYSTtFQ2pCRixlQURzQjtFQUV0QixjQ1RXO0VGMkJQLG1CQUFBO0VBQ0EsZUFBQTtBQWNOO0FBWFE7RUFDRSxjRS9CSTtBRjRDZDtBQVBFO0VBQ0UsVUFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtBQVNKO0FBUEk7RUFDRSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLHVDQUFBO0VBQ0EsNEJBQUE7RUFDQSwyQkFBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0FBU047QUFOSTtFQUNFLFdBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0VDN0RKLGFBQUE7RUFDQSx1QkQ2RG1EO0VDNURuRCwyQkQ0RCtCO0VDM0QvQixtQkFKMkQ7QUQwRTdEO0FBSkE7RUFDRTtJQUNFLFdBQUE7SUFDQSxzQkFBQTtJQUNBLGdCQUFBO0VBT0Y7RUFMRTtJQUNFLFdBQUE7SUFDQSxtQkFBQTtFQU9KO0VBTEk7SUFDRSxhQUFBO0VBT047RUFKSTtJQUNFLGtCQUFBO0VBTU47RUFISTtJQ3ZGSixhQUFBO0lBQ0EsbUJBRnVDO0lBR3ZDLHVCQUh1QjtJQUl2QixtQkFKMkQ7SUQwRnJELGdCQUFBO0VBUU47RUFOTTtJQUNFLGtCQUFBO0VBUVI7RUFIRTtJQUNFLFdBQUE7RUFLSjtBQUNGO0FBREE7RUFDRTtJQUNFLGdCQUFBO0VBR0Y7RUFERTtJQUNFLGtCQUFBO0VBR0o7QUFDRjtBQUNBO0VBR0k7SUFDRSxzQkFBQTtJQUNBLGdCQUFBO0VBREo7RUFHSTtJQUNFLG1CQUFBO0VBRE47RUFLRTtJQUNFLGtCQUFBO0lBQ0Esc0JBQUE7RUFISjtBQUNGO0FBT0E7RUFDRSxVQUFBO0FBTEY7QUFRQSxVQUFBO0FBQ0E7RUFDRSxtQkFBQTtBQUxGO0FBUUEsV0FBQTtBQUNBO0VBQ0UsbUJFL0lZO0VGZ0paLFlBQUE7QUFMRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmFuZHMvYmFuZHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogJ0NvZGUgU291cmNlIExpZ2h0JztcclxuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL1NvdXJjZUNvZGVQcm8tTGlnaHQudHRmJyk7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiAnQ29kZSBTb3VyY2UgTWVkaXVtJztcclxuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL1NvdXJjZUNvZGVQcm8tTWVkaXVtLnR0ZicpO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogJ0NvZGUgU291cmNlIEJvbGQnO1xyXG4gIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvU291cmNlQ29kZVByby1Cb2xkLnR0ZicpO1xyXG59XHJcbiIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJDb2RlIFNvdXJjZSBMaWdodFwiO1xuICBzcmM6IHVybChcIi4uL2Fzc2V0cy9mb250cy9Tb3VyY2VDb2RlUHJvLUxpZ2h0LnR0ZlwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJDb2RlIFNvdXJjZSBNZWRpdW1cIjtcbiAgc3JjOiB1cmwoXCIuLi9hc3NldHMvZm9udHMvU291cmNlQ29kZVByby1NZWRpdW0udHRmXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkNvZGUgU291cmNlIEJvbGRcIjtcbiAgc3JjOiB1cmwoXCIuLi9hc3NldHMvZm9udHMvU291cmNlQ29kZVByby1Cb2xkLnR0ZlwiKTtcbn1cbi5iYW5kcyB7XG4gIHdpZHRoOiAxNDMwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgbWFyZ2luLXRvcDogMTIwcHg7XG59XG4uYmFuZHMgLmdlbnJlcy1zZWxlY3RvciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAzMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZmxleC1zaHJpbms6IDA7XG4gIHBhZGRpbmctbGVmdDogMTMwcHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIG1hcmdpbi10b3A6IDc2cHg7XG59XG4uYmFuZHMgLmdlbnJlcy1zZWxlY3RvciAubG9nbyB7XG4gIG1hcmdpbi1ib3R0b206IDQ2cHg7XG59XG4uYmFuZHMgLmdlbnJlcy1zZWxlY3RvciAudGl0bGUge1xuICBtYXJnaW4tYm90dG9tOiA1OHB4O1xufVxuLmJhbmRzIC5nZW5yZXMtc2VsZWN0b3IgLmdlbnJlcyB7XG4gIGZvbnQtc2l6ZTogMThweDtcbiAgY29sb3I6ICM0ODQ4NDk7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbi5iYW5kcyAuZ2VucmVzLXNlbGVjdG9yIC5nZW5yZXNfX2l0ZW1fYWN0aXZlIHtcbiAgY29sb3I6ICNmOTFiMWI7XG59XG4uYmFuZHNfX2xpc3Qge1xuICB3aWR0aDogNzAlO1xuICBmbGV4LXNocmluazogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmJhbmRzX19saXN0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXCI7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDQwMHB4O1xuICBoZWlnaHQ6IDQwMHB4O1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi9hc3NldHMvc25vd19mbGFrZS5wbmdcIik7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgbGVmdDogLTIwMHB4O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDA7XG59XG4uYmFuZHNfX2xpc3QgLnNjcm9sbC1jb250ZW50IHtcbiAgd2lkdGg6IDEwMCU7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgbWF4LWhlaWdodDogMTg0MHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBhdXRvO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDMwcHgpIHtcbiAgLmJhbmRzIHtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbi10b3A6IDgwcHg7XG4gIH1cbiAgLmJhbmRzIC5nZW5yZXMtc2VsZWN0b3Ige1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIH1cbiAgLmJhbmRzIC5nZW5yZXMtc2VsZWN0b3IgLnRleHQge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbiAgLmJhbmRzIC5nZW5yZXMtc2VsZWN0b3IgLmxvZ28ge1xuICAgIG1hcmdpbi1yaWdodDogNTBweDtcbiAgfVxuICAuYmFuZHMgLmdlbnJlcy1zZWxlY3RvciAuZ2VucmVzIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xuICB9XG4gIC5iYW5kcyAuZ2VucmVzLXNlbGVjdG9yIC5nZW5yZXNfX2l0ZW0ge1xuICAgIG1hcmdpbi1yaWdodDogNDBweDtcbiAgfVxuICAuYmFuZHNfX2xpc3Qge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuYmFuZHMge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gIH1cbiAgLmJhbmRzIC5nZW5yZXMtc2VsZWN0b3Ige1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgfVxufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLmJhbmRzIC5nZW5yZXMtc2VsZWN0b3Ige1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luLXRvcDogMjBweDtcbiAgfVxuICAuYmFuZHMgLmdlbnJlcy1zZWxlY3RvciAubG9nbyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuICAuYmFuZHNfX2xpc3Qge1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB9XG59XG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcbiAgd2lkdGg6IDRweDtcbn1cblxuLyogVHJhY2sgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBiYWNrZ3JvdW5kOiAjZGZkZmRmO1xufVxuXG4vKiBIYW5kbGUgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICBiYWNrZ3JvdW5kOiAjZjkxYjFiO1xuICBoZWlnaHQ6IDQwcHg7XG59IiwiXHJcbkBtaXhpbiBmbGV4TWl4KCRqdXN0aWZ5OiBjZW50ZXIsICRhbGlnbjogY2VudGVyLCAkZGlyZWN0aW9uOiByb3cpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiAkYWxpZ247XHJcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcclxuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcclxufVxyXG5cclxuQG1peGluIGZvbnRTdHlsZSgkc2l6ZTogMThweCwgJGNvbG9yOiAkbWFpbi1mb250KSB7XHJcbiAgZm9udC1zaXplOiAkc2l6ZTtcclxuICBjb2xvcjogJGNvbG9yO1xyXG59XHJcbiIsIiRtYWluLWZvbnQ6ICMwMDAwMDA7XHJcbiRtdXRlZC1mb250OiAjNDg0ODQ5O1xyXG4kYWN0aXZlLWZvbnQ6ICNmOTFiMWI7XHJcbiRvZGQtYmFja2dyb3VuZDogI2YwZjBmMDtcclxuJGRhcmstY29sb3I6ICMyODJlMzU7XHJcbiRtZWRpdW0tY29sb3I6ICMyZTM0M2E7XHJcbiJdfQ== */"] });
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
/* harmony import */ var _band_logo_band_logo_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../band-logo/band-logo.component */ "nogf");




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
ContentCardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContentCardComponent, selectors: [["app-content-card"]], inputs: { content: "content", side: "side" }, decls: 14, vars: 6, consts: [[1, "card"], [1, "card__video"], ["alt", "", 1, "card__video-content", 3, "src"], ["src", "assets/snow_flake.png", "alt", "", 1, "snow-flake"], [1, "card__data"], [1, "card__video-content", 3, "text"], [1, "card__data-text"], [1, "card__data-text_red"], [1, "card__data-text", "card__data-text_red"], [1, "card__data-additional"]], template: function ContentCardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-band-logo", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "sluhay");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, ".by");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "span", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassProp"]("card_reverse", ctx.side === ctx.sides.RIGHT);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", ctx.content.url, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("text", ctx.content.genre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.content.genre);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.content.text);
    } }, directives: [_band_logo_band_logo_component__WEBPACK_IMPORTED_MODULE_2__["BandLogoComponent"]], styles: ["@font-face {\n  font-family: \"Code Source Light\";\n  src: url('SourceCodePro-Light.ttf');\n}\n@font-face {\n  font-family: \"Code Source Medium\";\n  src: url('SourceCodePro-Medium.ttf');\n}\n@font-face {\n  font-family: \"Code Source Bold\";\n  src: url('SourceCodePro-Bold.ttf');\n}\n.card[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  width: 1430px;\n  margin-bottom: 100px;\n}\n.card_reverse[_ngcontent-%COMP%] {\n  flex-direction: row-reverse;\n}\n.card__video[_ngcontent-%COMP%] {\n  position: relative;\n  width: 70%;\n  flex-shrink: 0;\n}\n.card__video[_ngcontent-%COMP%]   .snow-flake[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n}\n.card__video-content[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.card__data[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: column;\n  width: 30%;\n  flex-shrink: 0;\n  padding-left: 130px;\n  box-sizing: border-box;\n  text-transform: uppercase;\n}\n.card__data-text[_ngcontent-%COMP%] {\n  color: #000000;\n  font-size: 36px;\n  font-family: \"Code Source Medium\";\n}\n.card__data-text_red[_ngcontent-%COMP%] {\n  color: #f91b1b;\n}\n.card__data-additional[_ngcontent-%COMP%] {\n  font-family: \"Code Source Light\";\n  color: #484849;\n  font-size: 32px;\n}\n@media screen and (max-width: 1430px) {\n  .card[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n  .card__data[_ngcontent-%COMP%] {\n    padding-left: 30px;\n  }\n}\n@media screen and (max-width: 767px) {\n  .card[_ngcontent-%COMP%] {\n    flex-direction: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2NvbnRlbnQtY2FyZC9jb250ZW50LWNhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvdGhlbWUvbWl4aW5zLnNjc3MiLCJzcmMvdGhlbWUvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBQTtFQUNBLG1DQUFBO0FDQ0Y7QURFQTtFQUNFLGlDQUFBO0VBQ0Esb0NBQUE7QUNBRjtBREdBO0VBQ0UsK0JBQUE7RUFDQSxrQ0FBQTtBQ0RGO0FBUEE7RUNGRSxhQUFBO0VBQ0EsbUJBRnVDO0VBR3ZDLHVCQUh1QjtFQUl2QixtQkFKMkQ7RURLM0QsYUFBQTtFQUNBLG9CQUFBO0FBWUY7QUFWRTtFQUNFLDJCQUFBO0FBWUo7QUFURTtFQUNFLGtCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7QUFXSjtBQVRJO0VBQ0Usa0JBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtBQVdOO0FBUkk7RUFDRSxXQUFBO0FBVU47QUFORTtFQzNCQSxhQUFBO0VBQ0EsdUJEMkIyQjtFQzFCM0IsdUJBSHVCO0VBSXZCLHNCRHlCbUQ7RUFDakQsVUFBQTtFQUNBLGNBQUE7RUFDQSxtQkFBQTtFQUNBLHNCQUFBO0VBQ0EseUJBQUE7QUFXSjtBQVRJO0VBQ0UsY0V0Q007RUZ1Q04sZUFBQTtFQUNBLGlDQUFBO0FBV047QUFUTTtFQUNFLGNFekNNO0FGb0RkO0FBUEk7RUFDRSxnQ0FBQTtFQUNBLGNFaERPO0VGaURQLGVBQUE7QUFTTjtBQUpBO0VBQ0U7SUFDRSxXQUFBO0VBT0Y7RUFMRTtJQUNFLGtCQUFBO0VBT0o7QUFDRjtBQUhBO0VBQ0U7SUFDRSxzQkFBQTtFQUtGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NvbnRlbnQtY2FyZC9jb250ZW50LWNhcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogJ0NvZGUgU291cmNlIExpZ2h0JztcclxuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL1NvdXJjZUNvZGVQcm8tTGlnaHQudHRmJyk7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiAnQ29kZSBTb3VyY2UgTWVkaXVtJztcclxuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL1NvdXJjZUNvZGVQcm8tTWVkaXVtLnR0ZicpO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogJ0NvZGUgU291cmNlIEJvbGQnO1xyXG4gIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvU291cmNlQ29kZVByby1Cb2xkLnR0ZicpO1xyXG59XHJcbiIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJDb2RlIFNvdXJjZSBMaWdodFwiO1xuICBzcmM6IHVybChcIi4uL2Fzc2V0cy9mb250cy9Tb3VyY2VDb2RlUHJvLUxpZ2h0LnR0ZlwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJDb2RlIFNvdXJjZSBNZWRpdW1cIjtcbiAgc3JjOiB1cmwoXCIuLi9hc3NldHMvZm9udHMvU291cmNlQ29kZVByby1NZWRpdW0udHRmXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkNvZGUgU291cmNlIEJvbGRcIjtcbiAgc3JjOiB1cmwoXCIuLi9hc3NldHMvZm9udHMvU291cmNlQ29kZVByby1Cb2xkLnR0ZlwiKTtcbn1cbi5jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIHdpZHRoOiAxNDMwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwMHB4O1xufVxuLmNhcmRfcmV2ZXJzZSB7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcbn1cbi5jYXJkX192aWRlbyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgd2lkdGg6IDcwJTtcbiAgZmxleC1zaHJpbms6IDA7XG59XG4uY2FyZF9fdmlkZW8gLnNub3ctZmxha2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG59XG4uY2FyZF9fdmlkZW8tY29udGVudCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmNhcmRfX2RhdGEge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIHdpZHRoOiAzMCU7XG4gIGZsZXgtc2hyaW5rOiAwO1xuICBwYWRkaW5nLWxlZnQ6IDEzMHB4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuLmNhcmRfX2RhdGEtdGV4dCB7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LXNpemU6IDM2cHg7XG4gIGZvbnQtZmFtaWx5OiBcIkNvZGUgU291cmNlIE1lZGl1bVwiO1xufVxuLmNhcmRfX2RhdGEtdGV4dF9yZWQge1xuICBjb2xvcjogI2Y5MWIxYjtcbn1cbi5jYXJkX19kYXRhLWFkZGl0aW9uYWwge1xuICBmb250LWZhbWlseTogXCJDb2RlIFNvdXJjZSBMaWdodFwiO1xuICBjb2xvcjogIzQ4NDg0OTtcbiAgZm9udC1zaXplOiAzMnB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDMwcHgpIHtcbiAgLmNhcmQge1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5jYXJkX19kYXRhIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIH1cbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5jYXJkIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59IiwiXHJcbkBtaXhpbiBmbGV4TWl4KCRqdXN0aWZ5OiBjZW50ZXIsICRhbGlnbjogY2VudGVyLCAkZGlyZWN0aW9uOiByb3cpIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiAkYWxpZ247XHJcbiAganVzdGlmeS1jb250ZW50OiAkanVzdGlmeTtcclxuICBmbGV4LWRpcmVjdGlvbjogJGRpcmVjdGlvbjtcclxufVxyXG5cclxuQG1peGluIGZvbnRTdHlsZSgkc2l6ZTogMThweCwgJGNvbG9yOiAkbWFpbi1mb250KSB7XHJcbiAgZm9udC1zaXplOiAkc2l6ZTtcclxuICBjb2xvcjogJGNvbG9yO1xyXG59XHJcbiIsIiRtYWluLWZvbnQ6ICMwMDAwMDA7XHJcbiRtdXRlZC1mb250OiAjNDg0ODQ5O1xyXG4kYWN0aXZlLWZvbnQ6ICNmOTFiMWI7XHJcbiRvZGQtYmFja2dyb3VuZDogI2YwZjBmMDtcclxuJGRhcmstY29sb3I6ICMyODJlMzU7XHJcbiRtZWRpdW0tY29sb3I6ICMyZTM0M2E7XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContentCardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-content-card',
                templateUrl: './content-card.component.html',
                styleUrls: ['./content-card.component.scss']
            }]
    }], null, { content: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }], side: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
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
    playUrl(url, videoTag) {
        const hls = new hls_js__WEBPACK_IMPORTED_MODULE_1__();
        hls.loadSource(url);
        hls.attachMedia(videoTag);
        videoTag.play();
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
/* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./services/player.service */ "QIP1");
/* harmony import */ var _components_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/header/header.component */ "2MiI");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _components_bands_bands_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/bands/bands.component */ "HxBr");
/* harmony import */ var _components_content_card_content_card_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/content-card/content-card.component */ "Js2f");
/* harmony import */ var _components_support_person_support_person_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/support-person/support-person.component */ "ZjgA");














const _c0 = ["video"];
function AppComponent_app_content_card_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-content-card", 20);
} if (rf & 2) {
    const item_r3 = ctx.$implicit;
    const even_r4 = ctx.even;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("content", item_r3)("side", even_r4 ? ctx_r1.sides.LEFT : ctx_r1.sides.RIGHT);
} }
function AppComponent_app_support_person_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-support-person", 21);
} if (rf & 2) {
    const item_r5 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("person", item_r5);
} }
class AppComponent {
    constructor(dataService, playerService) {
        this.dataService = dataService;
        this.playerService = playerService;
        this.contentCards = _contsants_content_cards_constants__WEBPACK_IMPORTED_MODULE_1__["CONTENT_CARDS"];
        this.sides = _contsants_side_enum__WEBPACK_IMPORTED_MODULE_0__["SIDE"];
        this.genres = [];
        this.allBands = [];
        this.filteredBands = [];
        this.supportPersons = [];
        this.activeGenreId = 1;
    }
    ngOnInit() {
        this.genres = this.getGenres();
        this.supportPersons = this.getSupportPersons();
        const allData$ = this.genres.slice(1)
            .map(({ id }) => this.getArtistsInfo(id));
        Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["forkJoin"])(allData$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((data) => data.reduce((accum, item) => accum.concat(...item), [])), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["take"])(1))
            .subscribe((data) => {
            this.allBands = data;
            this.filteredBands = data;
        });
        this.playBanner();
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
    playBanner() {
        const video = this.videoRef.nativeElement;
        video.muted = true;
        this.playerService.playUrl('http://persik.by/stream/3502/32/10970.m3u8', video);
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
    getSupportPersons() {
        const persons = [
            {
                name: 'Вадим',
                since: 'янв.2021',
                avatar: 'assets/vadim.jpg',
                cost: '20',
                role: 'Менеджер'
            },
            {
                name: 'Анастасия',
                since: 'янв.2021',
                avatar: 'assets/anastasia.jpg',
                cost: '10',
                role: 'Бизнес-аналитик'
            }
        ];
        return persons;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdirectiveInject"](_services_player_service__WEBPACK_IMPORTED_MODULE_7__["PlayerService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], viewQuery: function AppComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵstaticViewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵloadQuery"]()) && (ctx.videoRef = _t.first);
    } }, decls: 30, vars: 5, consts: [[1, "banner"], [1, "video"], ["video", ""], [1, "banner__content"], ["src", "assets/logo_main_big.png", "alt", ""], [1, "banner__content-name"], [1, "banner__content-name", "banner__content-name_active"], [1, "wrapper"], [3, "content", "side", 4, "ngFor", "ngForOf"], [1, "wrapper", "wrapper_odd"], [3, "selectedGenreId", "genres", "bands", "changeGenre"], [1, "support"], [1, "support__persons"], ["src", "assets/snow_flake.png", "alt", "", 1, "snow-flake"], [3, "person", 4, "ngFor", "ngForOf"], [1, "support__myself"], ["src", "assets/logo_main.png", "alt", "", 1, "logo"], [1, "title"], [1, "button"], ["src", "assets/play.png", "alt", ""], [3, "content", "side"], [3, "person"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](0, "app-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](2, "video", 1, 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](6, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](7, " sluhay");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](8, "span", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](9, ".by");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](11, AppComponent_app_content_card_11_Template, 1, 2, "app-content-card", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](13, "app-bands", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵlistener"]("changeGenre", function AppComponent_Template_app_bands_changeGenre_13_listener($event) { return ctx.onGenreChange($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](14, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](15, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](17, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtemplate"](18, AppComponent_app_support_person_18_Template, 1, 1, "app-support-person", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](20, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](21, "span", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](22, "\u043E\u043D\u0438 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](23, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](24, " \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0438\u0432\u0430\u044E\u0442 \u0431\u0435\u043B\u043E\u0440\u0443\u0441\u0441\u043A\u0443\u044E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](25, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](26, " \u043C\u0443\u0437\u044B\u043A\u0443");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementStart"](27, "button", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelement"](28, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵtext"](29, " \u0445\u043E\u0447\u0443 \u043F\u043E\u0434\u0434\u0435\u0440\u0436\u0430\u0442\u044C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.contentCards);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("selectedGenreId", ctx.activeGenreId)("genres", ctx.genres)("bands", ctx.filteredBands);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵproperty"]("ngForOf", ctx.supportPersons);
    } }, directives: [_components_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _components_bands_bands_component__WEBPACK_IMPORTED_MODULE_10__["BandsComponent"], _components_content_card_content_card_component__WEBPACK_IMPORTED_MODULE_11__["ContentCardComponent"], _components_support_person_support_person_component__WEBPACK_IMPORTED_MODULE_12__["SupportPersonComponent"]], styles: ["@font-face {\n  font-family: \"Code Source Light\";\n  src: url('SourceCodePro-Light.ttf');\n}\n@font-face {\n  font-family: \"Code Source Medium\";\n  src: url('SourceCodePro-Medium.ttf');\n}\n@font-face {\n  font-family: \"Code Source Bold\";\n  src: url('SourceCodePro-Bold.ttf');\n}\n.wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\n.wrapper_odd[_ngcontent-%COMP%] {\n  background: #f0f0f0;\n}\n.banner[_ngcontent-%COMP%] {\n  position: relative;\n}\n.banner__content[_ngcontent-%COMP%] {\n  padding-top: 140px;\n  box-sizing: border-box;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  left: 0;\n  top: 0;\n  z-index: 1;\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  flex-direction: column;\n}\n.banner__content-name[_ngcontent-%COMP%] {\n  margin-top: 80px;\n  text-transform: uppercase;\n  font-family: \"Code Source Medium\";\n  font-size: 36px;\n  color: white;\n}\n.banner__content-name_active[_ngcontent-%COMP%] {\n  color: #f91b1b;\n}\n.video[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 130px;\n}\n.support[_ngcontent-%COMP%] {\n  width: 1430px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  padding: 120px 0;\n  box-sizing: border-box;\n}\n.support__persons[_ngcontent-%COMP%] {\n  width: 60%;\n  flex-shrink: 0;\n  position: relative;\n}\n.support__persons[_ngcontent-%COMP%]   .snow-flake[_ngcontent-%COMP%] {\n  position: absolute;\n  right: -200px;\n  top: calc(50% - 200px);\n  z-index: 0;\n}\n.support__myself[_ngcontent-%COMP%] {\n  padding-left: 130px;\n  box-sizing: border-box;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: column;\n  position: relative;\n  z-index: 1;\n}\n.support__myself[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%] {\n  margin-bottom: 45px;\n}\n.support__myself[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%] {\n  width: 210px;\n  height: 50px;\n  background-color: #f91b1b;\n  border-radius: 5px;\n  outline: none;\n  border: none;\n  text-transform: uppercase;\n  font-size: 14px;\n  color: white;\n  font-family: \"Code Source Bold\";\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  margin-top: 37px;\n}\n.support__myself[_ngcontent-%COMP%]   .button[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  padding-right: 10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvdGhlbWUvbWl4aW5zLnNjc3MiLCJzcmMvdGhlbWUvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBQTtFQUNBLG1DQUFBO0FDQ0Y7QURFQTtFQUNFLGlDQUFBO0VBQ0Esb0NBQUE7QUNBRjtBREdBO0VBQ0UsK0JBQUE7RUFDQSxrQ0FBQTtBQ0RGO0FBUEE7RUNGRSxhQUFBO0VBQ0EsbUJBRnVDO0VBR3ZDLHVCQUh1QjtFQUl2QixzQkFBQTtBRFlGO0FBVkU7RUFDRSxtQkVMYTtBRmlCakI7QUFSQTtFQUNFLGtCQUFBO0FBV0Y7QUFURTtFQUNFLGtCQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLE1BQUE7RUFDQSxVQUFBO0VDckJGLGFBQUE7RUFDQSxtQkFGdUM7RUFHdkMsMkJEb0I2QjtFQ25CN0Isc0JEbUJxRDtBQWN2RDtBQVpJO0VBQ0UsZ0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlDQUFBO0VDcEJKLGVEcUJ1QjtFQ3BCdkIsWURvQjZCO0FBZS9CO0FBYk07RUFDRSxjRS9CTTtBRjhDZDtBQVRBO0VBQ0UsV0FBQTtFQUNBLG9CQUFBO0FBWUY7QUFUQTtFQUNFLGFBQUE7RUMzQ0EsYUFBQTtFQUNBLG1CQUZ1QztFQUd2Qyx1QkFIdUI7RUFJdkIsbUJBSjJEO0VEOEMzRCxnQkFBQTtFQUNBLHNCQUFBO0FBZUY7QUFiRTtFQUNFLFVBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QUFlSjtBQWJJO0VBQ0Usa0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxVQUFBO0FBZU47QUFYRTtFQUNFLG1CQUFBO0VBQ0Esc0JBQUE7RUMvREYsYUFBQTtFQUNBLHVCRCtEMkI7RUM5RDNCLHVCQUh1QjtFQUl2QixzQkQ2RG1EO0VBQ2pELGtCQUFBO0VBQ0EsVUFBQTtBQWdCSjtBQWRJO0VBQ0UsbUJBQUE7QUFnQk47QUFiSTtFQUNFLFlBQUE7RUFDQSxZQUFBO0VBQ0EseUJFM0VRO0VGNEVSLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSx5QkFBQTtFQ3hFSixlRHlFdUI7RUN4RXZCLFlEd0U2QjtFQUN6QiwrQkFBQTtFQ2pGSixhQUFBO0VBQ0EsbUJBRnVDO0VBR3ZDLHVCQUh1QjtFQUl2QixtQkFKMkQ7RURvRnZELGdCQUFBO0FBbUJOO0FBakJNO0VBQ0UsbUJBQUE7QUFtQlIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogJ0NvZGUgU291cmNlIExpZ2h0JztcclxuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL1NvdXJjZUNvZGVQcm8tTGlnaHQudHRmJyk7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiAnQ29kZSBTb3VyY2UgTWVkaXVtJztcclxuICBzcmM6IHVybCgnLi4vYXNzZXRzL2ZvbnRzL1NvdXJjZUNvZGVQcm8tTWVkaXVtLnR0ZicpO1xyXG59XHJcblxyXG5AZm9udC1mYWNlIHtcclxuICBmb250LWZhbWlseTogJ0NvZGUgU291cmNlIEJvbGQnO1xyXG4gIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvU291cmNlQ29kZVByby1Cb2xkLnR0ZicpO1xyXG59XHJcbiIsIkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJDb2RlIFNvdXJjZSBMaWdodFwiO1xuICBzcmM6IHVybChcIi4uL2Fzc2V0cy9mb250cy9Tb3VyY2VDb2RlUHJvLUxpZ2h0LnR0ZlwiKTtcbn1cbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogXCJDb2RlIFNvdXJjZSBNZWRpdW1cIjtcbiAgc3JjOiB1cmwoXCIuLi9hc3NldHMvZm9udHMvU291cmNlQ29kZVByby1NZWRpdW0udHRmXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkNvZGUgU291cmNlIEJvbGRcIjtcbiAgc3JjOiB1cmwoXCIuLi9hc3NldHMvZm9udHMvU291cmNlQ29kZVByby1Cb2xkLnR0ZlwiKTtcbn1cbi53cmFwcGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ud3JhcHBlcl9vZGQge1xuICBiYWNrZ3JvdW5kOiAjZjBmMGYwO1xufVxuXG4uYmFubmVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmJhbm5lcl9fY29udGVudCB7XG4gIHBhZGRpbmctdG9wOiAxNDBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBsZWZ0OiAwO1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDE7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi5iYW5uZXJfX2NvbnRlbnQtbmFtZSB7XG4gIG1hcmdpbi10b3A6IDgwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtZmFtaWx5OiBcIkNvZGUgU291cmNlIE1lZGl1bVwiO1xuICBmb250LXNpemU6IDM2cHg7XG4gIGNvbG9yOiB3aGl0ZTtcbn1cbi5iYW5uZXJfX2NvbnRlbnQtbmFtZV9hY3RpdmUge1xuICBjb2xvcjogI2Y5MWIxYjtcbn1cblxuLnZpZGVvIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1hcmdpbi1ib3R0b206IDEzMHB4O1xufVxuXG4uc3VwcG9ydCB7XG4gIHdpZHRoOiAxNDMwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBwYWRkaW5nOiAxMjBweCAwO1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuLnN1cHBvcnRfX3BlcnNvbnMge1xuICB3aWR0aDogNjAlO1xuICBmbGV4LXNocmluazogMDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLnN1cHBvcnRfX3BlcnNvbnMgLnNub3ctZmxha2Uge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAtMjAwcHg7XG4gIHRvcDogY2FsYyg1MCUgLSAyMDBweCk7XG4gIHotaW5kZXg6IDA7XG59XG4uc3VwcG9ydF9fbXlzZWxmIHtcbiAgcGFkZGluZy1sZWZ0OiAxMzBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG59XG4uc3VwcG9ydF9fbXlzZWxmIC5sb2dvIHtcbiAgbWFyZ2luLWJvdHRvbTogNDVweDtcbn1cbi5zdXBwb3J0X19teXNlbGYgLmJ1dHRvbiB7XG4gIHdpZHRoOiAyMTBweDtcbiAgaGVpZ2h0OiA1MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjkxYjFiO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGJvcmRlcjogbm9uZTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIkNvZGUgU291cmNlIEJvbGRcIjtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIG1hcmdpbi10b3A6IDM3cHg7XG59XG4uc3VwcG9ydF9fbXlzZWxmIC5idXR0b24gaW1nIHtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbn0iLCJcclxuQG1peGluIGZsZXhNaXgoJGp1c3RpZnk6IGNlbnRlciwgJGFsaWduOiBjZW50ZXIsICRkaXJlY3Rpb246IHJvdykge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6ICRhbGlnbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xyXG59XHJcblxyXG5AbWl4aW4gZm9udFN0eWxlKCRzaXplOiAxOHB4LCAkY29sb3I6ICRtYWluLWZvbnQpIHtcclxuICBmb250LXNpemU6ICRzaXplO1xyXG4gIGNvbG9yOiAkY29sb3I7XHJcbn1cclxuIiwiJG1haW4tZm9udDogIzAwMDAwMDtcclxuJG11dGVkLWZvbnQ6ICM0ODQ4NDk7XHJcbiRhY3RpdmUtZm9udDogI2Y5MWIxYjtcclxuJG9kZC1iYWNrZ3JvdW5kOiAjZjBmMGYwO1xyXG4kZGFyay1jb2xvcjogIzI4MmUzNTtcclxuJG1lZGl1bS1jb2xvcjogIzJlMzQzYTtcclxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss'],
            }]
    }], function () { return [{ type: _services_data_service__WEBPACK_IMPORTED_MODULE_6__["DataService"] }, { type: _services_player_service__WEBPACK_IMPORTED_MODULE_7__["PlayerService"] }]; }, { videoRef: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ViewChild"],
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











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
        _components_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
        _components_content_card_content_card_component__WEBPACK_IMPORTED_MODULE_4__["ContentCardComponent"],
        _components_bands_bands_component__WEBPACK_IMPORTED_MODULE_5__["BandsComponent"],
        _components_band_item_band_item_component__WEBPACK_IMPORTED_MODULE_6__["BandItemComponent"],
        _components_band_logo_band_logo_component__WEBPACK_IMPORTED_MODULE_8__["BandLogoComponent"],
        _components_support_person_support_person_component__WEBPACK_IMPORTED_MODULE_9__["SupportPersonComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]] }); })();
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
                    _components_support_person_support_person_component__WEBPACK_IMPORTED_MODULE_9__["SupportPersonComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"]
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
SupportPersonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: SupportPersonComponent, selectors: [["app-support-person"]], inputs: { person: "person" }, decls: 16, vars: 6, consts: [[1, "person"], [1, "person__avatar"], [1, "person__status"], [1, "name"], [1, "role"], [1, "person__pay"], [1, "text", "text_small"], [1, "text"], [1, "text_medium"]], template: function SupportPersonComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵstyleProp"]("background-image", "url(" + ctx.person.avatar + ")");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.person.name);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.person.role);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.person.cost, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("c ", ctx.person.since, "");
    } }, styles: [".person[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  color: white;\n  margin-bottom: 30px;\n  position: relative;\n  z-index: 1;\n}\n.person__avatar[_ngcontent-%COMP%] {\n  width: 240px;\n  height: 240px;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  flex-shrink: 0;\n}\n.person__status[_ngcontent-%COMP%] {\n  width: 35%;\n  height: 240px;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: column;\n  box-sizing: border-box;\n  padding-left: 30px;\n  background-color: #282e35;\n  flex-shrink: 0;\n  text-transform: uppercase;\n}\n.person__status[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-family: \"Code Source Bold\";\n  font-size: 20px;\n  margin-bottom: 20px;\n}\n.person__status[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #f91b1b;\n}\n.person__pay[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 240px;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: column;\n  box-sizing: border-box;\n  padding-left: 30px;\n  background-color: #2e343a;\n}\n.person__pay[_ngcontent-%COMP%]   .text[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-family: \"Code Source Bold\";\n  text-transform: uppercase;\n}\n.person__pay[_ngcontent-%COMP%]   .text_small[_ngcontent-%COMP%] {\n  font-size: 14px;\n}\n.person__pay[_ngcontent-%COMP%]   .text_medium[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zdXBwb3J0LXBlcnNvbi9zdXBwb3J0LXBlcnNvbi5jb21wb25lbnQuc2NzcyIsInNyYy90aGVtZS9taXhpbnMuc2NzcyIsInNyYy90aGVtZS9jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQTtFQUNFLFdBQUE7RUNGQSxhQUFBO0VBQ0EsbUJBRnVDO0VBR3ZDLHVCQUh1QjtFQUl2QixtQkFKMkQ7RURLM0QsaUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7QUFDRjtBQUNFO0VBQ0UsWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkJBQUE7RUFDQSxjQUFBO0FBQ0o7QUFFRTtFQUNFLFVBQUE7RUFDQSxhQUFBO0VDckJGLGFBQUE7RUFDQSx1QkRxQjJCO0VDcEIzQix1QkFIdUI7RUFJdkIsc0JEbUJtRDtFQUNqRCxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJFdkJTO0VGd0JULGNBQUE7RUFDQSx5QkFBQTtBQUdKO0FBREk7RUFDRSwrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUdOO0FBQUk7RUM1QkYsZUFEc0I7RUFFdEIsY0NSWTtBRnVDZDtBQUNFO0VBQ0UsV0FBQTtFQUNBLGFBQUE7RUMxQ0YsYUFBQTtFQUNBLHVCRDBDMkI7RUN6QzNCLHVCQUh1QjtFQUl2QixzQkR3Q21EO0VBQ2pELHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkUzQ1c7QUYrQ2Y7QUFGSTtFQUNFLGVBQUE7RUFDQSwrQkFBQTtFQUNBLHlCQUFBO0FBSU47QUFGTTtFQUNFLGVBQUE7QUFJUjtBQURNO0VBQ0UsZUFBQTtBQUdSIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zdXBwb3J0LXBlcnNvbi9zdXBwb3J0LXBlcnNvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi8uLi90aGVtZS9taXhpbnMuc2Nzc1wiO1xyXG5AaW1wb3J0IFwiLi4vLi4vLi4vdGhlbWUvY29sb3JzLnNjc3NcIjtcclxuXHJcbi5wZXJzb24ge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIEBpbmNsdWRlIGZsZXhNaXg7XHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHotaW5kZXg6IDE7XHJcblxyXG4gICZfX2F2YXRhciB7XHJcbiAgICB3aWR0aDogMjQwcHg7XHJcbiAgICBoZWlnaHQ6IDI0MHB4O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICBmbGV4LXNocmluazogMDtcclxuICB9XHJcblxyXG4gICZfX3N0YXR1cyB7XHJcbiAgICB3aWR0aDogMzUlO1xyXG4gICAgaGVpZ2h0OiAyNDBweDtcclxuICAgIEBpbmNsdWRlIGZsZXhNaXgoJGFsaWduOiBmbGV4LXN0YXJ0LCAkZGlyZWN0aW9uOiBjb2x1bW4pO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHBhZGRpbmctbGVmdDogMzBweDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXJrLWNvbG9yO1xyXG4gICAgZmxleC1zaHJpbms6IDA7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cclxuICAgIC5uYW1lIHtcclxuICAgICAgZm9udC1mYW1pbHk6ICdDb2RlIFNvdXJjZSBCb2xkJztcclxuICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5yb2xlIHtcclxuICAgICAgQGluY2x1ZGUgZm9udFN0eWxlKCRjb2xvcjogJGFjdGl2ZS1mb250KTtcclxuICAgIH1cclxuICB9XHJcblxyXG4gICZfX3BheSB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjQwcHg7XHJcbiAgICBAaW5jbHVkZSBmbGV4TWl4KCRhbGlnbjogZmxleC1zdGFydCwgJGRpcmVjdGlvbjogY29sdW1uKTtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkbWVkaXVtLWNvbG9yO1xyXG5cclxuICAgIC50ZXh0IHtcclxuICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICBmb250LWZhbWlseTogJ0NvZGUgU291cmNlIEJvbGQnO1xyXG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG5cclxuICAgICAgJl9zbWFsbCB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xyXG4gICAgICB9XHJcblxyXG4gICAgICAmX21lZGl1bSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfVxyXG59XHJcbiIsIlxyXG5AbWl4aW4gZmxleE1peCgkanVzdGlmeTogY2VudGVyLCAkYWxpZ246IGNlbnRlciwgJGRpcmVjdGlvbjogcm93KSB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBhbGlnbi1pdGVtczogJGFsaWduO1xyXG4gIGp1c3RpZnktY29udGVudDogJGp1c3RpZnk7XHJcbiAgZmxleC1kaXJlY3Rpb246ICRkaXJlY3Rpb247XHJcbn1cclxuXHJcbkBtaXhpbiBmb250U3R5bGUoJHNpemU6IDE4cHgsICRjb2xvcjogJG1haW4tZm9udCkge1xyXG4gIGZvbnQtc2l6ZTogJHNpemU7XHJcbiAgY29sb3I6ICRjb2xvcjtcclxufVxyXG4iLCIkbWFpbi1mb250OiAjMDAwMDAwO1xyXG4kbXV0ZWQtZm9udDogIzQ4NDg0OTtcclxuJGFjdGl2ZS1mb250OiAjZjkxYjFiO1xyXG4kb2RkLWJhY2tncm91bmQ6ICNmMGYwZjA7XHJcbiRkYXJrLWNvbG9yOiAjMjgyZTM1O1xyXG4kbWVkaXVtLWNvbG9yOiAjMmUzNDNhO1xyXG4iXX0= */"] });
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
        tag: 'concerts'
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
        tag: 'subscription'
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
    } }, styles: ["@font-face {\n  font-family: \"Code Source Light\";\n  src: url('SourceCodePro-Light.ttf');\n}\n@font-face {\n  font-family: \"Code Source Medium\";\n  src: url('SourceCodePro-Medium.ttf');\n}\n@font-face {\n  font-family: \"Code Source Bold\";\n  src: url('SourceCodePro-Bold.ttf');\n}\n[_nghost-%COMP%] {\n  width: 31%;\n  margin-right: 20px;\n}\n@media screen and (max-width: 600px) {\n  [_nghost-%COMP%] {\n    width: 100%;\n  }\n}\n.band[_ngcontent-%COMP%] {\n  width: 100%;\n  margin-bottom: 60px;\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  flex-direction: column;\n  cursor: pointer;\n}\n.band[_ngcontent-%COMP%]:hover   .band__poster-layout[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n.band__poster[_ngcontent-%COMP%] {\n  width: 100%;\n  background-size: cover;\n  background-repeat: no-repeat;\n  background-position: center;\n  margin-bottom: 30px;\n  position: relative;\n}\n.band__poster[_ngcontent-%COMP%]::after {\n  content: \"\";\n  display: block;\n  padding-bottom: 100%;\n}\n.band__poster-layout[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n  width: 100%;\n  height: 100%;\n  position: absolute;\n  left: 0;\n  top: 0;\n  background: rgba(249, 27, 27, 0.6);\n  z-index: 1;\n  text-transform: uppercase;\n  font-size: 14px;\n  color: white;\n  font-family: \"Code Source Light\";\n  opacity: 0;\n  transition: 0.4s;\n}\n.band__poster-layout-text[_ngcontent-%COMP%] {\n  margin-top: 17px;\n}\n.band__name[_ngcontent-%COMP%] {\n  font-size: 20px;\n  color: #000000;\n  font-family: \"Code Source Bold\";\n  margin-bottom: 20px;\n}\n.band__genre[_ngcontent-%COMP%] {\n  font-size: 18px;\n  color: #f91b1b;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy90aGVtZS9mb250cy5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2JhbmQtaXRlbS9iYW5kLWl0ZW0uY29tcG9uZW50LnNjc3MiLCJzcmMvdGhlbWUvbWl4aW5zLnNjc3MiLCJzcmMvdGhlbWUvY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQ0FBQTtFQUNBLG1DQUFBO0FDQ0Y7QURFQTtFQUNFLGlDQUFBO0VBQ0Esb0NBQUE7QUNBRjtBREdBO0VBQ0UsK0JBQUE7RUFDQSxrQ0FBQTtBQ0RGO0FBUEE7RUFDRSxVQUFBO0VBQ0Esa0JBQUE7QUFTRjtBQVBFO0VBSkY7SUFLSSxXQUFBO0VBVUY7QUFDRjtBQVBBO0VBQ0UsV0FBQTtFQUNBLG1CQUFBO0VDYkEsYUFBQTtFQUNBLHVCRGF5QjtFQ1p6Qix1QkFIdUI7RUFJdkIsc0JEV2lEO0VBQ2pELGVBQUE7QUFhRjtBQVZJO0VBQ0UsVUFBQTtBQVlOO0FBUkU7RUFDRSxXQUFBO0VBQ0Esc0JBQUE7RUFDQSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQVVKO0FBUkk7RUFDRSxXQUFBO0VBQ0EsY0FBQTtFQUNBLG9CQUFBO0FBVU47QUFQSTtFQ3JDRixhQUFBO0VBQ0EsbUJBRnVDO0VBR3ZDLHVCQUh1QjtFQUl2QixzQkRtQ2lDO0VBQzdCLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxPQUFBO0VBQ0EsTUFBQTtFQUNBLGtDQUFBO0VBQ0EsVUFBQTtFQUNBLHlCQUFBO0VDdkNKLGVEd0N1QjtFQ3ZDdkIsWUR1QzZCO0VBQ3pCLGdDQUFBO0VBQ0EsVUFBQTtFQUNBLGdCQUFBO0FBYU47QUFYTTtFQUNFLGdCQUFBO0FBYVI7QUFSRTtFQ25EQSxlRG9EcUI7RUNuRHJCLGNDVlU7RUY4RFIsK0JBQUE7RUFDQSxtQkFBQTtBQVdKO0FBUkU7RUN6REEsZUFEc0I7RUFFdEIsY0NSWTtBRjRFZCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmFuZC1pdGVtL2JhbmQtaXRlbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiAnQ29kZSBTb3VyY2UgTGlnaHQnO1xyXG4gIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvU291cmNlQ29kZVByby1MaWdodC50dGYnKTtcclxufVxyXG5cclxuQGZvbnQtZmFjZSB7XHJcbiAgZm9udC1mYW1pbHk6ICdDb2RlIFNvdXJjZSBNZWRpdW0nO1xyXG4gIHNyYzogdXJsKCcuLi9hc3NldHMvZm9udHMvU291cmNlQ29kZVByby1NZWRpdW0udHRmJyk7XHJcbn1cclxuXHJcbkBmb250LWZhY2Uge1xyXG4gIGZvbnQtZmFtaWx5OiAnQ29kZSBTb3VyY2UgQm9sZCc7XHJcbiAgc3JjOiB1cmwoJy4uL2Fzc2V0cy9mb250cy9Tb3VyY2VDb2RlUHJvLUJvbGQudHRmJyk7XHJcbn1cclxuIiwiQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkNvZGUgU291cmNlIExpZ2h0XCI7XG4gIHNyYzogdXJsKFwiLi4vYXNzZXRzL2ZvbnRzL1NvdXJjZUNvZGVQcm8tTGlnaHQudHRmXCIpO1xufVxuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBcIkNvZGUgU291cmNlIE1lZGl1bVwiO1xuICBzcmM6IHVybChcIi4uL2Fzc2V0cy9mb250cy9Tb3VyY2VDb2RlUHJvLU1lZGl1bS50dGZcIik7XG59XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IFwiQ29kZSBTb3VyY2UgQm9sZFwiO1xuICBzcmM6IHVybChcIi4uL2Fzc2V0cy9mb250cy9Tb3VyY2VDb2RlUHJvLUJvbGQudHRmXCIpO1xufVxuOmhvc3Qge1xuICB3aWR0aDogMzElO1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICA6aG9zdCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn1cblxuLmJhbmQge1xuICB3aWR0aDogMTAwJTtcbiAgbWFyZ2luLWJvdHRvbTogNjBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG4uYmFuZDpob3ZlciAuYmFuZF9fcG9zdGVyLWxheW91dCB7XG4gIG9wYWNpdHk6IDE7XG59XG4uYmFuZF9fcG9zdGVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuLmJhbmRfX3Bvc3Rlcjo6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZy1ib3R0b206IDEwMCU7XG59XG4uYmFuZF9fcG9zdGVyLWxheW91dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHRvcDogMDtcbiAgYmFja2dyb3VuZDogcmdiYSgyNDksIDI3LCAyNywgMC42KTtcbiAgei1pbmRleDogMTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtZmFtaWx5OiBcIkNvZGUgU291cmNlIExpZ2h0XCI7XG4gIG9wYWNpdHk6IDA7XG4gIHRyYW5zaXRpb246IDAuNHM7XG59XG4uYmFuZF9fcG9zdGVyLWxheW91dC10ZXh0IHtcbiAgbWFyZ2luLXRvcDogMTdweDtcbn1cbi5iYW5kX19uYW1lIHtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1mYW1pbHk6IFwiQ29kZSBTb3VyY2UgQm9sZFwiO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuLmJhbmRfX2dlbnJlIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBjb2xvcjogI2Y5MWIxYjtcbn0iLCJcclxuQG1peGluIGZsZXhNaXgoJGp1c3RpZnk6IGNlbnRlciwgJGFsaWduOiBjZW50ZXIsICRkaXJlY3Rpb246IHJvdykge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6ICRhbGlnbjtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6ICRqdXN0aWZ5O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiAkZGlyZWN0aW9uO1xyXG59XHJcblxyXG5AbWl4aW4gZm9udFN0eWxlKCRzaXplOiAxOHB4LCAkY29sb3I6ICRtYWluLWZvbnQpIHtcclxuICBmb250LXNpemU6ICRzaXplO1xyXG4gIGNvbG9yOiAkY29sb3I7XHJcbn1cclxuIiwiJG1haW4tZm9udDogIzAwMDAwMDtcclxuJG11dGVkLWZvbnQ6ICM0ODQ4NDk7XHJcbiRhY3RpdmUtZm9udDogI2Y5MWIxYjtcclxuJG9kZC1iYWNrZ3JvdW5kOiAjZjBmMGYwO1xyXG4kZGFyay1jb2xvcjogIzI4MmUzNTtcclxuJG1lZGl1bS1jb2xvcjogIzJlMzQzYTtcclxuIl19 */"] });
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