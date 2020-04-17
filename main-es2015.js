(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _morning_morning_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./morning/morning.component */ "./src/app/morning/morning.component.ts");
/* harmony import */ var _evening_evening_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./evening/evening.component */ "./src/app/evening/evening.component.ts");







const routes = [
    { path: "", component: _home_home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"] },
    { path: "morning", component: _morning_morning_component__WEBPACK_IMPORTED_MODULE_3__["MorningComponent"] },
    { path: "evening", component: _evening_evening_component__WEBPACK_IMPORTED_MODULE_4__["EveningComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'dua';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 9, vars: 0, consts: [[1, "navbar-fixed"], ["id", "nav", 1, "#ff4081", "pink", "accent-2", "center-align"], ["routerLink", ""], ["src", "../assets/img/house-512.webp ", "alt", "", 1, "home", "circle"], ["routerLink", "morning"], ["src", "../assets/img/sun.png", "alt", "", 1, "home", "circle"], ["routerLink", "evening"], ["src", "../assets/img/moon.png", "alt", "", 1, "home", "circle"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "img", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"]], styles: ["#nav[_ngcontent-%COMP%]{\r\n    position: fixed;\r\n    bottom: 0px;\r\n    padding: 5px;\r\n}\r\n.home[_ngcontent-%COMP%]{\r\n    width: 44px;\r\n    margin-left: 5px;\r\n    margin-right: 5px;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxlQUFlO0lBQ2YsV0FBVztJQUNYLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbmF2e1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAwcHg7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuLmhvbWV7XHJcbiAgICB3aWR0aDogNDRweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _morning_morning_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./morning/morning.component */ "./src/app/morning/morning.component.ts");
/* harmony import */ var _evening_evening_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./evening/evening.component */ "./src/app/evening/evening.component.ts");








class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
        _morning_morning_component__WEBPACK_IMPORTED_MODULE_5__["MorningComponent"],
        _evening_evening_component__WEBPACK_IMPORTED_MODULE_6__["EveningComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"],
                    _morning_morning_component__WEBPACK_IMPORTED_MODULE_5__["MorningComponent"],
                    _evening_evening_component__WEBPACK_IMPORTED_MODULE_6__["EveningComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/evening/evening.component.ts":
/*!**********************************************!*\
  !*** ./src/app/evening/evening.component.ts ***!
  \**********************************************/
/*! exports provided: EveningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EveningComponent", function() { return EveningComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class EveningComponent {
    constructor() {
        this.morningAMount = 0;
        this.morningAMount2 = 0;
        this.morningAMount3 = 0;
        this.morningAMount4 = 0;
        this.morningAMount5 = 0;
        this.morningAMount6 = 0;
        this.morningAMount7 = 0;
        this.morningAMount8 = 0;
        this.morningAMount9 = 0;
        this.morningAMount10 = 0;
        this.morningAMount11 = 0;
        this.morningAMount12 = 0;
        this.morningAMount13 = 0;
    }
    clickM() {
        this.morningAMount++;
    }
    clickM2() {
        this.morningAMount2++;
    }
    clickM3() {
        this.morningAMount3++;
    }
    clickM4() {
        this.morningAMount4++;
    }
    clickM5() {
        this.morningAMount5++;
    }
    clickM6() {
        this.morningAMount6++;
    }
    clickM7() {
        this.morningAMount7++;
    }
    clickM8() {
        this.morningAMount8++;
    }
    clickM9() {
        this.morningAMount9++;
    }
    clickM10() {
        this.morningAMount10++;
    }
    clickM11() {
        this.morningAMount11++;
    }
    clickM12() {
        this.morningAMount12++;
    }
    clickM13() {
        this.morningAMount13++;
    }
    ngOnInit() {
    }
}
EveningComponent.ɵfac = function EveningComponent_Factory(t) { return new (t || EveningComponent)(); };
EveningComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EveningComponent, selectors: [["app-evening"]], decls: 299, vars: 13, consts: [[1, "row"], [1, "center-align"], [1, "col", "s12"], [1, "center-align", 2, "line-height", "176%"], [1, "btn", "btn-large", "#9e9e9e", "grey", "waves-effect", "waves-light", 2, "width", "100%", 3, "click"]], template: function EveningComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Evening Dua");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u0623\u064E\u0639\u064F\u0648\u0630\u064F \u0628\u0650\u0627\u0644\u0644\u0647\u0650 \u0645\u0650\u0646\u064E \u0627\u0644\u0634\u0651\u064E\u064A\u0652\u0637\u064E\u0627\u0646\u0650 \u0627\u0644\u0631\u0651\u064E\u062C\u0650\u064A\u0645\u0650 \"\u0627\u0644\u0644\u0647\u064F \u0644\u064E\u0627 \u0625\u0650\u0644\u0670\u0647\u064E \u0625\u0650\u0644\u0651\u064E\u0627 \u0647\u064F\u0648\u064E \u0627\u0644\u0652\u062D\u064E\u064A\u0651\u064F \u0627\u0644\u0652\u0642\u064E\u064A\u0651\u064F\u0648\u0645\u064F \u0644\u064E\u0627 \u062A\u064E\u0623\u0652\u062E\u064F\u0630\u064F\u0647\u064F \u0633\u0650\u0646\u064E\u0629\u064C \u0648\u064E\u0644\u064E\u0627 \u0646\u064E\u0648\u0652\u0645\u064C \u0644\u064E\u0647\u064F \u0645\u064E\u0627 \u0641\u0650\u064A \u0627\u0644\u0633\u0651\u064E\u0645\u064E\u0627\u0648\u064E\u0627\u062A\u0650 \u0648\u064E\u0645\u064E\u0627 \u0641\u0650\u064A \u0627\u0644\u0652\u0623\u064E\u0631\u0652\u0636\u0650 \u0645\u064E\u0646\u0652 \u0630\u064E\u0627 \u0627\u0644\u0651\u064E\u0630\u0650\u064A \u064A\u064E\u0634\u0652\u0641\u064E\u0639\u064F \u0639\u0650\u0646\u0652\u062F\u064E\u0647\u064F \u0625\u0650\u0644\u0651\u064E\u0627 \u0628\u0650\u0625\u0650\u0630\u0652\u0646\u0650\u0647\u0650 \u064A\u064E\u0639\u0652\u0644\u064E\u0645\u064F \u0645\u064E\u0627 \u0628\u064E\u064A\u0652\u0646\u064E \u0623\u064E\u064A\u0652\u062F\u0650\u064A\u0647\u0650\u0645\u0652 \u0648\u064E\u0645\u064E\u0627 \u062E\u064E\u0644\u0652\u0641\u064E\u0647\u064F\u0645\u0652 \u0648\u064E\u0644\u064E\u0627 \u064A\u064F\u062D\u0650\u064A\u0637\u064F\u0648\u0646\u064E \u0628\u0650\u0634\u064E\u064A\u0652\u0621\u064D \u0645\u0650\u0646\u0652 \u0639\u0650\u0644\u0652\u0645\u0650\u0647\u0650 \u0625\u0650\u0644\u0651\u064E\u0627 \u0628\u0650\u0645\u064E\u0627 \u0634\u064E\u0627\u0621\u064E \u0648\u064E\u0633\u0650\u0639\u064E \u0643\u064F\u0631\u0652\u0633\u0650\u064A\u0651\u064F\u0647\u064F \u0627\u0644\u0633\u0651\u064E\u0645\u064E\u0627\u0648\u064E\u0627\u062A\u0650 \u0648\u064E\u0627\u0644\u0652\u0623\u064E\u0631\u0652\u0636\u064E \u0648\u064E\u0644\u064E\u0627 \u064A\u064E\u0626\u064F\u0648\u062F\u064F\u0647\u064F \u062D\u0650\u0641\u0652\u0638\u064F\u0647\u064F\u0645\u064E\u0627 \u0648\u064E\u0647\u064F\u0648\u064E \u0627\u0644\u0652\u0639\u064E\u0644\u0650\u064A\u0651\u064F \u0627\u0644\u0652\u0639\u064E\u0638\u0650\u064A\u0645\u064F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " 'A 'oothu billaahi minash-Shaytaanir-rajeem. Allaahu laa 'ilaaha 'illaa Huwal-Hayyul-Qayyoom, laa ta'khuthuhu sinatun wa laa nawm, lahu maa fis-samaawaati wa maa fil-'ardh, man thai-lathee yashfa'u 'indahu 'illaa bi'ithnih, ya'lamu maa bayna 'aydeehim wa maa khalfahum, wa laa yuheetoona bishay'im-min 'ilmihi 'illaa bimaa shaa'a, wasi'a kursiyyuhus samaawaati wal'ardh, wa laa ya'ooduhu hifdhuhumaa, wa Huwal- 'Aliyyul- 'Adheem. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "***********");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " I seek refuge in Allah from Satan the outcast. - Allah! There is none worthy of worship but He, the Ever Living, the One Who sustains and protects all that exists. Neither slumber nor sleep overtakes Him. To Him belongs whatever is in the heavens and whatever is on the earth. Who is he that can intercede with Him except with His Permission? He knows what happens to them in this world, and what will happen to them in the Hereafter. And they will never encompass anything of His Knowledge except that which He wills. His Throne extends over the heavens and the earth, and He feels no fatigue in guarding and preserving them. And He is the Most High, the Most Great. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " \u0628\u0650\u0633\u0652\u0645\u0650 \u0627\u0644\u0644\u0647\u0650 \u0627\u0644\u0631\u0651\u064E\u062D\u0652\u0645\u0670\u0646\u0650 \u0627\u0644\u0631\u0651\u064E\u062D\u0650\u064A\u0645\u0650 \"\u0642\u064F\u0644\u0652 \u0647\u064F\u0648\u064E \u0627\u0644\u0644\u0647\u064F \u0623\u064E\u062D\u064E\u062F\u064C \u06DE \u0627\u0644\u0644\u0647\u064F \u0627\u0644\u0635\u0651\u064E\u0645\u064E\u062F\u064F \u06DE \u0644\u064E\u0645\u0652 \u064A\u064E\u0644\u0650\u062F\u0652 \u0648\u064E\u0644\u064E\u0645\u0652 \u064A\u064F\u0648\u0644\u064E\u062F\u0652 \u06DE \u0648\u064E\u0644\u064E\u0645\u0652 \u064A\u064E\u0643\u064F\u0646 \u0644\u0651\u064E\u0647\u064F \u0643\u064F\u0641\u064F\u0648\u064B\u0627 \u0623\u064E\u062D\u064E\u062F\u064C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Bismillaahir-Rahmaanir-Raheem. Qul Huwallaahu 'Ahad. Allaahus-Samad. Lam yalid wa lam yoolad. Wa lam yakun lahu kufuwan 'ahad. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EveningComponent_Template_button_click_19_listener() { return ctx.clickM(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "********************");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " With the Name of Allah, the Most Gracious, the Most Merciful. Say: He is Allah (the) One. The Self-Sufficient Master, Whom all creatures need, He begets not nor was He begotten, and there is none equal to Him ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " \u0628\u0650\u0633\u0652\u0645\u0650 \u0627\u0644\u0644\u0647\u0650 \u0627\u0644\u0631\u0651\u064E\u062D\u0652\u0645\u0670\u0646\u0650 \u0627\u0644\u0631\u0651\u064E\u062D\u0650\u064A\u0645\u0650 \"\u0642\u064F\u0644\u0652 \u0623\u064E\u0639\u064F\u0648\u0630\u064F \u0628\u0650\u0631\u064E\u0628\u0651\u0650 \u0627\u0644\u0652\u0641\u064E\u0644\u064E\u0642\u0650 \u06DE \u0645\u0650\u0646 \u0634\u064E\u0631\u0651\u0650 \u0645\u064E\u0627 \u062E\u064E\u0644\u064E\u0642\u064E \u06DE \u0648\u064E\u0645\u0650\u0646 \u0634\u064E\u0631\u0651\u0650 \u063A\u064E\u0627\u0633\u0650\u0642\u064D \u0625\u0650\u0630\u064E\u0627 \u0648\u064E\u0642\u064E\u0628\u064E \u06DE \u0648\u064E\u0645\u0650\u0646 \u0634\u064E\u0631\u0651\u0650 \u0627\u0644\u0646\u0651\u064E\u0641\u0651\u0670\u062B\u064E\u0670\u062A\u0650 \u0641\u0650\u064A \u0627\u0644\u0652\u0639\u064F\u0642\u064E\u062F\u0650 \u06DE \u0648\u064E\u0645\u0650\u0646 \u0634\u064E\u0631\u0651\u0650 \u062D\u064E\u0627\u0633\u0650\u062F\u064D \u0625\u0650\u0630\u064E\u0627 \u062D\u064E\u0633\u064E\u062F\u064E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Bismillaahir-Rahmaanir-Raheem. Qul 'a'oothu birabbil-falaq. Min sharri ma khalaq. Wa min sharri ghaasiqin 'ithaa waqab. Wa min sharrin-naffaathaati fil-'uqad. Wa min sharri haasidin 'ithaa hasad ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EveningComponent_Template_button_click_33_listener() { return ctx.clickM2(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "********************");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " With the Name of Allah, the Most Gracious, the Most Merciful. Say: He is Allah (the) One. The Self-Sufficient Master, Whom all creatures need, He begets not nor was He begotten, and there is none equal to Him ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " \u0628\u0650\u0633\u0652\u0645\u0650 \u0627\u0644\u0644\u0647\u0650 \u0627\u0644\u0631\u0651\u064E\u062D\u0652\u0645\u0670\u0646\u0650 \u0627\u0644\u0631\u0651\u064E\u062D\u0650\u064A\u0645\u0650 \"\u0642\u064F\u0644\u0652 \u0623\u064E\u0639\u064F\u0648\u0630\u064F \u0628\u0650\u0631\u064E\u0628\u0651\u0650 \u0627\u0644\u0646\u0651\u064E\u0627\u0633\u0650 \u06DE \u0645\u064E\u0644\u0650\u0643\u0650 \u0627\u0644\u0646\u0651\u064E\u0627\u0633\u0650 \u06DE \u0625\u0650\u0644\u064E\u0647\u0650 \u0627\u0644\u0646\u0651\u064E\u0627\u0633\u0650 \u06DE \u0645\u0650\u0646 \u0634\u064E\u0631\u0651\u0650 \u0627\u0644\u0652\u0648\u064E\u0633\u0652\u0648\u064E\u0627\u0633\u0650 \u0627\u0644\u0652\u062E\u064E\u0646\u0651\u064E\u0627\u0633\u0650 \u06DE \u0627\u0644\u0651\u064E\u0630\u0650\u064A \u064A\u064F\u0648\u064E\u0633\u0652\u0648\u0650\u0633\u064F \u0641\u0650\u064A \u0635\u064F\u062F\u064F\u0648\u0631\u0650 \u0627\u0644\u0646\u0651\u064E\u0627\u0633\u0650 \u06DE \u0645\u0650\u0646\u064E \u0627\u0644\u0652\u062C\u0650\u0646\u0651\u064E\u0629\u0650 \u0648\u064E\u0627\u0644\u0646\u0651\u064E\u0627\u0633\u0650 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Bismillaahir-Rahmaanir-Raheem. Qul 'a'oothu birabbin-naas. Malikin-naas. 'Ilaahin-naas. Min sharril-waswaasil-khannaas. Allathee yuwaswisu fee sudoorin-naas. Minal-jinnati wannaas. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EveningComponent_Template_button_click_47_listener() { return ctx.clickM3(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "********************");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " With the Name of Allah , the Most Gracious , the Most Merciful. Say: I seek refuge with (Allah) the Lord of mankind, the King of mankind , the God of mankind , from the evil of the whisperer who withdraws, who whispers in the breasts of mankind, of jinns and men. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " \u0623\u064E\u0635\u0652\u0628\u064E\u062D\u0652\u0646\u064E\u0627 \u0648\u064E\u0623\u064E\u0635\u0652\u0628\u064E\u062D\u064E \u0627\u0644\u0652\u0645\u064F\u0644\u0652\u0643\u064F \u0644\u0644\u0647\u0650 \u0648\u064E\u0627\u0644\u0652\u062D\u064E\u0645\u0652\u062F\u064F \u0644\u0644\u0647\u0650\u060C \u0644\u064E\u0627 \u0625\u0650\u0644\u0670\u0647\u064E \u0625\u0650\u0644\u0651\u064E\u0627 \u0627\u0644\u0644\u0647\u064F \u0648\u064E\u062D\u0652\u062F\u064E\u0647\u064F \u0644\u064E\u0627 \u0634\u064E\u0631\u0650\u064A\u0643\u064E \u0644\u064E\u0647\u064F\u060C \u0644\u064E\u0647\u064F \u0627\u0644\u0652\u0645\u064F\u0644\u0652\u0643\u064F \u0648\u064E\u0644\u064E\u0647\u064F \u0627\u0644\u0652\u062D\u064E\u0645\u0652\u062F\u064F \u0648\u064E\u0647\u064F\u0648\u064E \u0639\u064E\u0644\u064E\u0649 \u0643\u064F\u0644\u0651\u0650 \u0634\u064E\u064A\u0652\u0621\u064D \u0642\u064E\u062F\u0650\u064A\u0631\u064C\u060C \u0631\u0628\u0651\u0650 \u0623\u064E\u0633\u0652\u0623\u064E\u0644\u064F\u0643\u064E \u062E\u064E\u064A\u0652\u0631\u064E \u0645\u064E\u0627 \u0641\u0650\u064A \u0647\u064E\u0630\u064E\u0627 \u0627\u0644\u0652\u064A\u064E\u0648\u0645\u0650 \u0648\u064E\u062E\u064E\u064A\u0652\u0631\u064E \u0645\u064E\u0627 \u0628\u064E\u0639\u0652\u062F\u064E\u0647\u064F\u060C \u0648\u064E\u0623\u064E\u0639\u064F\u0648\u0630\u064F \u0628\u0650\u0643\u064E \u0645\u0650\u0646\u0652 \u0634\u064E\u0631\u0651\u0650 \u0645\u064E\u0627 \u0641\u0650\u064A \u0647\u064E\u0630\u064E\u0627 \u0627\u0644\u0652\u064A\u064E\u0648\u0645\u0650 \u0648\u064E\u0634\u064E\u0631\u0651\u0650 \u0645\u064E\u0627 \u0628\u064E\u0639\u0652\u062F\u064E\u0647\u064F\u060C \u0631\u064E\u0628\u0651\u0650 \u0623\u064E\u0639\u064F\u0648\u0630\u064F \u0628\u0650\u0643\u064E \u0645\u0650\u0646\u064E \u0627\u0644\u0652\u0643\u064E\u0633\u064E\u0644\u0650\u060C \u0648\u064E\u0633\u064F\u0648\u0621\u0650 \u0627\u0644\u0643\u0650\u0628\u064E\u0631\u0650\u060C \u0631\u064E\u0628\u0651\u0650 \u0623\u064E\u0639\u064F\u0648\u0630\u064F \u0628\u0650\u0643\u064E \u0645\u0650\u0646\u0652 \u0639\u064E\u0630\u064E\u0627\u0628\u064D \u0641\u0650\u064A \u0627\u0644\u0646\u0651\u064E\u0627\u0631\u0650 \u0648\u064E\u0639\u064E\u0630\u064E\u0627\u0628\u064D \u0641\u0650\u064A \u0627\u0644\u0652\u0642\u064E\u0628\u0652\u0631\u0650 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " 'Asbahnaa wa 'asbahal-mulku lillaahi walhamdu lillaahi, laa 'ilaaha 'illallaahu wahdahu laa shareeka lahu, lahul-mulku wa lahul-hamdu wa Huwa 'alaa kulli shay'in Qadeer. Rabbi 'as'aluka khayra maa fee haathal-yawmi wa khayra maa ba'dahu wa 'a'oothu bika min sharri maa fee haathal-yawmi wa sharri maa ba'dahu, Rabbi 'a'oothu bika minal-kasali, wa soo'il-kibari, Rabbi 'a'oothu bika min 'athaabin fin-naari wa 'athaabin fil-qabri.. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "********************");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " 'Asbahnaa wa 'asbahal-mulku lillaahi walhamdu lillaahi, laa 'ilaaha 'illallaahu wahdahu laa shareeka lahu, lahul-mulku wa lahul-hamdu wa Huwa 'alaa kulli shay'in Qadeer. Rabbi 'as'aluka khayra maa fee haathal-yawmi wa khayra maa ba'dahu wa 'a'oothu bika min sharri maa fee haathal-yawmi wa sharri maa ba'dahu, Rabbi 'a'oothu bika minal-kasali, wa soo'il-kibari, Rabbi 'a'oothu bika min 'athaabin fin-naari wa 'athaabin fil-qabri. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " \u0627\u0644\u0644\u0651\u064E\u0647\u064F\u0645\u0651\u064E \u0628\u0650\u0643\u064E \u0623\u064E\u0635\u0652\u0628\u064E\u062D\u0652\u0646\u064E\u0627\u060C \u0648\u064E\u0628\u0650\u0643\u064E \u0623\u064E\u0645\u0652\u0633\u064E\u064A\u0652\u0646\u064E\u0627\u060C \u0648\u064E\u0628\u0650\u0643\u064E \u0646\u064E\u062D\u0652\u064A\u064E\u0627\u060C \u0648\u064E\u0628\u0650\u0643\u064E \u0646\u064E\u0645\u064F\u0648\u062A\u064F \u0648\u064E\u0625\u0650\u0644\u064E\u064A\u0652\u0643\u064E \u0627\u0644\u0646\u0651\u064F\u0634\u064F\u0648\u0631\u064F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Allaahumma bika 'asbahnaa, wa bika 'amsaynaa, wa bika nahyaa, wa bika namootu wa 'ilaykan-nushoor. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "********************");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " O Allah , by You we enter the morning and by You we enter the evening, 1 by You we live and and by You we die, and to You is the Final Return ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " \u0627\u0644\u0644\u0651\u064E\u0647\u064F\u0645\u0651\u064E \u0623\u064E\u0646\u0652\u062A\u064E \u0631\u064E\u0628\u0651\u0650\u064A \u0644\u0651\u0627 \u0625\u0650\u0644\u0670\u0647\u064E \u0625\u0650\u0644\u0651\u064E\u0627 \u0623\u064E\u0646\u0652\u062A\u064E\u060C \u062E\u064E\u0644\u064E\u0642\u0652\u062A\u064E\u0646\u0650\u064A \u0648\u064E\u0623\u064E\u0646\u064E\u0627 \u0639\u064E\u0628\u0652\u062F\u064F\u0643\u064E\u060C \u0648\u064E\u0623\u064E\u0646\u064E\u0627 \u0639\u064E\u0644\u064E\u0649 \u0639\u064E\u0647\u0652\u062F\u0650\u0643\u064E \u0648\u064E\u0648\u064E\u0639\u0652\u062F\u0650\u0643\u064E \u0645\u064E\u0627 \u0627\u0633\u0652\u062A\u064E\u0637\u064E\u0639\u0652\u062A\u064F\u060C \u0623\u064E\u0639\u064F\u0648\u0630\u064F \u0628\u0650\u0643\u064E \u0645\u0650\u0646\u0652 \u0634\u064E\u0631\u0651\u0650 \u0645\u064E\u0627 \u0635\u064E\u0646\u064E\u0639\u0652\u062A\u064F\u060C \u0623\u064E\u0628\u064F\u0648\u0621\u064F \u0644\u064E\u0643\u064E \u0628\u0650\u0646\u0650\u0639\u0652\u0645\u064E\u062A\u0650\u0643\u064E \u0639\u064E\u0644\u064E\u064A\u0651\u064E\u060C \u0648\u064E\u0623\u064E\u0628\u064F\u0648\u0621\u064F \u0628\u0650\u0630\u064E\u0646\u0652\u0628\u0650\u064A \u0641\u064E\u0627\u063A\u0652\u0641\u0650\u0631 \u0644\u0650\u064A \u0641\u064E\u0625\u0650\u0646\u0651\u064E\u0647\u064F \u0644\u064E\u0627 \u064A\u064E\u063A\u0652\u0641\u0650\u0631\u064F \u0627\u0644\u0630\u0651\u064F\u0646\u064F\u0648\u0628\u064E \u0625\u0650\u0644\u0651\u064E\u0627 \u0623\u064E\u0646\u0652\u062A\u064E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " Allaahumma 'Anta Rabbee laa 'ilaaha 'illaa 'Anta, khalaqtanee wa 'anaa 'abduka, wa 'anaa 'alaa 'ahdika wa wa'dika mas-tata'tu, 'a'oothu bika min sharri maa sana'tu, 'aboo'u laka bini'matika 'alayya, wa 'aboo'u bithanbee faghfir lee fa'innahu laa yaghfiruth-thunooba 'illaa 'Anta ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "********************");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " O Allah, You are my Lord, there is none worthy of worship but You. You created me and I am your slave. I keep Your covenant, and my pledge to You so far as I am able. I seek refuge in You from the evil of what I have done. I admit to Your blessings upon me, and I admit to my misdeeds. Forgive me, for there is none who may forgive sins but You ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " \u0627\u0644\u0644\u0651\u064E\u0647\u064F\u0645\u0651\u064E \u0625\u0650\u0646\u0651\u0650\u064A \u0623\u064E\u0635\u0652\u0628\u064E\u062D\u0652\u062A\u064F \u0623\u064F\u0634\u0652\u0647\u0650\u062F\u064F\u0643\u064E \u0648\u064E\u0623\u064F\u0634\u0652\u0647\u0650\u062F\u064F \u062D\u064E\u0645\u064E\u0644\u064E\u0629\u064E \u0639\u064E\u0631\u0652\u0634\u0650\u0643\u064E\u060C \u0648\u064E\u0645\u064E\u0644\u064E\u0627\u0626\u0650\u0643\u064E\u062A\u064E\u0643\u064E \u0648\u064E\u062C\u064E\u0645\u0650\u064A\u0639\u064E \u062E\u064E\u0644\u0652\u0642\u0650\u0643\u064E\u060C \u0623\u064E\u0646\u0651\u064E\u0643\u064E \u0623\u064E\u0646\u0652\u062A\u064E \u0627\u0644\u0644\u0647\u064F \u0644\u064E\u0627 \u0625\u0650\u0644\u0670\u0647\u064E \u0625\u0650\u0644\u0651\u064E\u0627 \u0623\u064E\u0646\u0652\u062A\u064E \u0648\u064E\u062D\u0652\u062F\u064E\u0643\u064E \u0644\u064E\u0627 \u0634\u064E\u0631\u0650\u064A\u0643\u064E \u0644\u064E\u0643\u064E\u060C \u0648\u064E\u0623\u064E\u0646\u0651\u064E \u0645\u064F\u062D\u064E\u0645\u0651\u064E\u062F\u0627\u064B \u0639\u064E\u0628\u0652\u062F\u064F\u0643\u064E \u0648\u064E\u0631\u064E\u0633\u064F\u0648\u0644\u064F\u0643\u064E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " Allaahumma 'innee 'asbahtu 'ush-hiduka wa 'ush-hidu hamalata 'arshika, wa malaa'ikataka wajamee'a khalqika, 'annaka 'Antallaahu laa 'ilaaha 'illaa 'Anta wahdaka laa shareeka laka, wa 'anna Muhammadan 'abduka wa Rasooluka. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EveningComponent_Template_button_click_91_listener() { return ctx.clickM4(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "********************");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " O Allah , I have entered a new morning 1 and call upon You and upon the bearers of Your Throne , upon Your angels and all creation to bear witness that surely You are Allah , there is none worthy of worship but You alone , You have no partners, and that Muhammad is Your slave and Your Messenger . (Recite four times in Arabic.) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " \u0627\u0644\u0644\u0651\u064E\u0647\u064F\u0645\u0651\u064E \u0645\u064E\u0627 \u0623\u064E\u0635\u0652\u0628\u064E\u062D\u064E \u0628\u0650\u064A \u0645\u0650\u0646\u0652 \u0646\u0650\u0639\u0652\u0645\u064E\u0629\u064D \u0623\u064E\u0648\u0652 \u0628\u0650\u0623\u064E\u062D\u064E\u062F\u064D \u0645\u0650\u0646\u0652 \u062E\u064E\u0644\u0652\u0642\u0650\u0643\u064E \u0641\u064E\u0645\u0650\u0646\u0652\u0643\u064E \u0648\u064E\u062D\u0652\u062F\u064E\u0643\u064E \u0644\u064E\u0627 \u0634\u064E\u0631\u0650\u064A\u0643\u064E \u0644\u064E\u0643\u064E\u060C \u0641\u064E\u0644\u064E\u0643\u064E \u0627\u0644\u0652\u062D\u064E\u0645\u0652\u062F\u064F \u0648\u064E\u0644\u064E\u0643\u064E \u0627\u0644\u0634\u0651\u064F\u0643\u0652\u0631\u064F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " Allaahumma maa 'asbaha bee min ni'matin 'aw bi'ahadin min khalqika faminka wahdaka laa shareeka laka, falakal-hamdu wa lakash-shukru ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "********************");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " O Allah , whatever blessing has been received by me or anyone of Your creation 1 is from You alone , You have no partner . All praise is for you and thanks is to You. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " \u0627\u0644\u0644\u0651\u0647\u064F\u0640\u0645\u0651\u064E \u0639\u0627\u0641\u0650\u0640\u0646\u064A \u0641\u064A \u0628\u064E\u062F\u064E\u0646\u0640\u064A \u060C \u0627\u0644\u0644\u0651\u0647\u064F\u0640\u0645\u0651\u064E \u0639\u0627\u0641\u0650\u0640\u0646\u064A \u0641\u064A \u0633\u064E\u0645\u0652\u0640\u0639\u064A \u060C \u0627\u0644\u0644\u0651\u0647\u064F\u0640\u0645\u0651\u064E \u0639\u0627\u0641\u0650\u0640\u0646\u064A \u0641\u064A \u0628\u064E\u0635\u064E\u0640\u0631\u064A \u060C \u0644\u0627 \u0625\u0644\u0647\u064E \u0625\u0644\u0627\u0651 \u0623\u064E\u0646\u0652\u0640\u062A\u064E \u0627\u0644\u0644\u0651\u0647\u064F\u0640\u0645\u0651\u064E \u0625\u0650\u0646\u0651\u0640\u064A \u0623\u064E\u0639\u0640\u0648\u0630\u064F\u0628\u0650\u0643\u064E \u0645\u0650\u0646\u064E \u0627\u0644\u0652\u0643\u064F\u0640\u0641\u0631 \u060C \u0648\u064E\u0627\u0644\u0641\u064E\u0640\u0642\u0652\u0631 \u060C \u0648\u064E\u0623\u064E\u0639\u0640\u0648\u0630\u064F\u0628\u0650\u0643\u064E \u0645\u0650\u0646\u0652 \u0639\u064E\u0630\u0627\u0628\u0650 \u0627\u0644\u0642\u064E\u0640\u0628\u0652\u0631 \u060C \u0644\u0627 \u0625\u0644\u0647\u064E \u0625\u0644\u0627\u0651 \u0623\u064E\u0646\u0652\u0640\u062A\u064E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " Allaahumma 'aafinee fee badanee, Allaahumma 'aafinee fee sam'ee, Allaahumma 'aafinee fee basaree, laa 'ilaaha 'illaa 'Anta Allaahumma 'innee 'a'oothu bika minal-kufri, walfaqri, wa 'a'oothu bika min 'athaabil-qabri, laa 'ilaaha 'illaa 'Anta. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EveningComponent_Template_button_click_115_listener() { return ctx.clickM5(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "********************");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " O Allah, make me healthy in my body. O Allah, preserve for me my hearing. O Allah, preserve for me my sight. There is none worthy of worship but You . O Allah , I seek refuge in You from disbelief and poverty and I seek refuge in You from the punishment of the grave . There is none worthy of worship but You. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, " \u062D\u064E\u0633\u0652\u0628\u0650\u064A\u064E \u0627\u0644\u0644\u0647\u064F \u0644\u064E\u0622 \u0625\u0650\u0644\u0670\u0647\u064E \u0625\u0650\u0644\u0651\u064E\u0627 \u0647\u064F\u0648\u064E \u0639\u064E\u0644\u064E\u064A\u0652\u0647\u0650 \u062A\u064E\u0648\u064E\u0643\u0651\u064E\u0644\u0652\u062A\u064F \u0648\u064E\u0647\u064F\u0648\u064E \u0631\u064E\u0628\u0651\u064F \u0627\u0644\u0652\u0639\u064E\u0631\u0652\u0634\u0650 \u0627\u0644\u0652\u0639\u064E\u0638\u0650\u064A\u0645\u0650 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, " Hasbiyallaahu laa 'ilaaha 'illaa Huwa 'alayhi tawakkaltu wa Huwa Rabbul-'Arshil-'Adheem ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EveningComponent_Template_button_click_129_listener() { return ctx.clickM6(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "********************");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, " Allah is sufficient for me . There is none worthy of worship but Him . I have placed my trust in Him, He is Lord of the Majestic Throne ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " \u0627\u0644\u0644\u0651\u064E\u0647\u064F\u0645\u0651\u064E \u0625\u0650\u0646\u0651\u0650\u064A \u0623\u064E\u0633\u0652\u0623\u064E\u0644\u064F\u0643\u064E \u0627\u0644\u0652\u0639\u064E\u0641\u0652\u0648\u064E \u0648\u064E\u0627\u0644\u0652\u0639\u064E\u0627\u0641\u0650\u064A\u064E\u0629\u064E \u0641\u0650\u064A \u0627\u0644\u062F\u0651\u064F\u0646\u0652\u064A\u064E\u0627 \u0648\u064E\u0627\u0644\u0652\u0622\u062E\u0650\u0631\u064E\u0629\u0650\u060C \u0627\u0644\u0644\u0651\u064E\u0647\u064F\u0645\u0651\u064E \u0625\u0650\u0646\u0651\u0650\u064A \u0623\u064E\u0633\u0652\u0623\u064E\u0644\u064F\u0643\u064E \u0627\u0644\u0652\u0639\u064E\u0641\u0652\u0648\u064E \u0648\u064E\u0627\u0644\u0652\u0639\u064E\u0627\u0641\u0650\u064A\u064E\u0629\u064E \u0641\u0650\u064A \u062F\u0650\u064A\u0646\u0650\u064A \u0648\u064E\u062F\u064F\u0646\u0652\u064A\u064E\u0627\u064A\u064E \u0648\u064E\u0623\u064E\u0647\u0652\u0644\u0644\u0650\u064A\u060C \u0648\u064E\u0645\u064E\u0627\u0644\u0650\u064A\u060C \u0627\u0644\u0644\u0651\u064E\u0647\u064F\u0645\u0651\u064E \u0627\u0633\u0652\u062A\u064F\u0631\u0652 \u0639\u064E\u0648\u0652\u0631\u064E\u0627\u062A\u0650\u064A\u060C \u0648\u064E\u0622\u0645\u0650\u0646\u0652 \u0631\u064E\u0648\u0652\u0639\u064E\u0627\u062A\u0650\u064A\u060C \u0627\u0644\u0644\u0651\u064E\u0647\u064F\u0645\u0651\u064E \u0627\u062D\u0652\u0641\u064E\u0638\u0652\u0646\u0650\u064A \u0645\u0650\u0646\u0652 \u0628\u064E\u064A\u0652\u0646\u0650 \u064A\u064E\u062F\u064E\u064A\u0651\u064E\u060C \u0648\u064E\u0645\u0650\u0646\u0652 \u062E\u064E\u0644\u0652\u0641\u0650\u064A\u060C \u0648\u064E\u0639\u064E\u0646\u0652 \u064A\u064E\u0645\u0650\u064A\u0646\u0650\u064A\u060C \u0648\u064E\u0639\u064E\u0646\u0652 \u0634\u0650\u0645\u064E\u0627\u0644\u0650\u064A\u060C \u0648\u064E\u0645\u0650\u0646\u0652 \u0641\u064E\u0648\u0652\u0642\u0650\u064A\u060C \u0648\u064E\u0623\u064E\u0639\u064F\u0648\u0630\u064F \u0628\u0650\u0639\u064E\u0638\u064E\u0645\u064E\u062A\u0650\u0643\u064E \u0623\u064E\u0646\u0652 \u0623\u064F\u063A\u0652\u062A\u064E\u0627\u0644\u064E \u0645\u0650\u0646\u0652 \u062A\u064E\u062D\u0652\u062A\u0650\u064A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, " Allaahumma 'innee 'as'alukal-'afwa wal'aafiyata fid-dunyaa wal'aakhirati, Allaahumma 'innee 'as'alukal-'afwa wal'aafiyata fee deenee wa dunyaaya wa 'ahlee, wa maalee , Allaahum-mastur 'awraatee, wa 'aamin raw'aatee, Allaahum-mahfadhnee min bayni yadayya, wa min khalfee, wa 'an yameenee, wa 'an shimaalee, wa min fawqee, wa 'a'oothu bi'adhamatika 'an 'ughtaala min tahtee ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "********************");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, " O Allah, I seek Your forgiveness and Your protection in this world and the next. O Allah, I seek Your forgiveness and Your protection in my religion, in my worldly affairs, in my family and in my wealth. O Allah, conceal my secrets and preserve me from anguish. O Allah, guard me from what is in front of me and behind me, from my right, and from my left, and from above me. I seek refuge in Your Greatness from being struck down from beneath me. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, " \u0627\u0644\u0644\u0651\u064E\u0647\u064F\u0645\u0651\u064E \u0639\u064E\u0627\u0644\u0650\u0645\u064E \u0627\u0644\u0652\u063A\u064E\u064A\u0652\u0628\u0650 \u0648\u064E\u0627\u0644\u0634\u0651\u064E\u0647\u064E\u0627\u062F\u064E\u0629\u0650 \u0641\u064E\u0627\u0637\u0650\u0631\u064E \u0627\u0644\u0633\u0651\u064E\u0645\u0627\u0648\u064E\u0627\u062A\u0650 \u0648\u064E\u0627\u0644\u0652\u0623\u064E\u0631\u0652\u0636\u0650\u060C \u0631\u064E\u0628\u0651\u064E \u0643\u064F\u0644\u0651\u0650 \u0634\u064E\u064A\u0652\u0621\u064D \u0648\u064E\u0645\u064E\u0644\u0650\u064A\u0643\u064E\u0647\u064F\u060C \u0623\u064E\u0634\u0652\u0647\u064E\u062F\u064F \u0623\u064E\u0646\u0652 \u0644\u064E\u0627 \u0625\u0650\u0644\u0670\u0647\u064E \u0625\u0650\u0644\u0651\u064E\u0627 \u0623\u064E\u0646\u0652\u062A\u064E\u060C \u0623\u064E\u0639\u064F\u0648\u0630\u064F \u0628\u0650\u0643\u064E \u0645\u0650\u0646\u0652 \u0634\u064E\u0631\u0651\u0650 \u0646\u064E\u0641\u0652\u0633\u0650\u064A\u060C \u0648\u064E\u0645\u0650\u0646\u0652 \u0634\u064E\u0631\u0651\u0650 \u0627\u0644\u0634\u0651\u064E\u064A\u0652\u0637\u064E\u0627\u0646\u0650 \u0648\u064E\u0634\u0650\u0631\u0652\u0643\u0650\u0647\u0650\u060C \u0648\u064E\u0623\u064E\u0646\u0652 \u0623\u064E\u0642\u0652\u062A\u064E\u0631\u0650\u0641\u064E \u0639\u064E\u0644\u064E\u0649 \u0646\u064E\u0641\u0652\u0633\u0650\u064A \u0633\u064F\u0648\u0621\u0627\u064B\u060C \u0623\u064E\u0648\u0652 \u0623\u064E\u062C\u064F\u0631\u0651\u064E\u0647\u064F \u0625\u0650\u0644\u064E\u0649 \u0645\u064F\u0633\u0652\u0644\u0650\u0645\u064D ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, " Allaahumma 'Aalimal-ghaybi wash-shahaadati faatiras-samaawaati wal'ardhi, Rabba kulli shay'in wa maleekahu, 'ash-hadu 'an laa 'ilaaha 'illaa 'Anta, 'a'oothu bika min sharri nafsee, wa min sharrish-shaytaani wa shirkihi, wa 'an 'aqtarifa 'alaa nafsee soo'an, 'aw 'ajurrahu 'ilaa Muslimin. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "********************");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, " O Allah, Knower of the unseen and the evident , Maker of the heavens and the earth , Lord of everything and its Possessor , I bear witness that there is none worthy of worship but You . I seek refuge in You from the evil of my soul and from the evil of Satan and his helpers . (I seek refuge in You) from bringing evil upon my soul and from harming any Muslim. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, " \u0627\u0628\u0650\u0633\u0652\u0645\u0650 \u0627\u0644\u0644\u0647\u0650 \u0627\u0644\u0651\u064E\u0630\u0650\u064A \u0644\u064E\u0627 \u064A\u064E\u0636\u064F\u0631\u0651\u064F \u0645\u064E\u0639\u064E \u0627\u0633\u0652\u0645\u0650\u0647\u0650 \u0634\u064E\u064A\u0652\u0621\u064C \u0641\u0650\u064A \u0627\u0644\u0652\u0623\u064E\u0631\u0652\u0636\u0650 \u0648\u064E\u0644\u064E\u0627 \u0641\u0650\u064A \u0627\u0644\u0633\u0651\u064E\u0645\u064E\u0627\u0621\u0650 \u0648\u064E\u0647\u064F\u0648\u064E \u0627\u0644\u0633\u0651\u064E\u0645\u0650\u064A\u0639\u064F \u0627\u0644\u0652\u0639\u064E\u0644\u0650\u064A\u0645\u064F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, " Bismillaahil-lathee laa yadhurru ma'as-mihi shay'un fil-'ardhi wa laa fis-samaa'i wa Huwas-Samee 'ul- 'Aleem . ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EveningComponent_Template_button_click_163_listener() { return ctx.clickM7(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "********************");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, " In the Name of Allah, Who with His Name nothing can cause harm in the earth nor in the heavens, and He is the All-Hearing, the All-Knowing. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, " \u0631\u064E\u0636\u0650\u064A\u062A\u064F \u0628\u0627\u0644\u0644\u0647\u0650 \u0631\u064E\u0628\u0651\u064E\u0627\u064B\u060C \u0648\u064E\u0628\u0650\u0627\u0644\u0652\u0625\u0650\u0633\u0652\u0644\u064E\u0627\u0645\u0650 \u062F\u0650\u064A\u0646\u0627\u064B\u060C \u0648\u064E\u0628\u0650\u0645\u064F\u062D\u064E\u0645\u0651\u064E\u062F\u064D \u0635\u064E\u0644\u064E\u0649 \u0627\u0644\u0644\u0647\u064F \u0639\u064E\u0644\u0650\u064A\u0647\u0650 \u0648\u064E\u0633\u064E\u0644\u0651\u064E\u0645\u064E \u0646\u064E\u0628\u0650\u064A\u0651\u064E\u0627\u064B ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, " Radheetu billaahi Rabban, wa bil-'Islaami deenan, wa bi-Muhammadin (sallallaahu 'alayhi wa sallama) Nabiyyan. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EveningComponent_Template_button_click_177_listener() { return ctx.clickM8(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "********************");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, " I am pleased with Allah as my Lord, with Islam as my religion and with Muhammad (peace and blessings of Allah be upon him) as my Prophet. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, " \u064A\u064E\u0627 \u062D\u064E\u064A\u0651\u064F \u064A\u064E\u0627 \u0642\u064E\u064A\u0651\u064F\u0648\u0645\u064F \u0628\u0650\u0631\u064E\u062D\u0652\u0645\u064E\u062A\u0650\u0643\u064E \u0623\u064E\u0633\u0652\u062A\u064E\u063A\u0650\u064A\u062B\u064F \u0623\u064E\u0635\u0652\u0644\u0650\u062D\u0652 \u0644\u0650\u064A \u0634\u064E\u0623\u0652\u0646\u0650\u064A \u0643\u064F\u0644\u0651\u064E\u0647\u064F \u0648\u064E\u0644\u064E\u0627 \u062A\u064E\u0643\u0650\u0644\u0652\u0646\u0650\u064A \u0625\u0650\u0644\u064E\u0649 \u0646\u064E\u0641\u0652\u0633\u0650\u064A \u0637\u064E\u0631\u0652\u0641\u064E\u0629\u064E \u0639\u064E\u064A\u0652\u0646\u064D ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, " Yaa Hayyu yaa Qayyoomu birahmatika 'astagheethu 'aslih lee sha'nee kullahu wa laa takilnee 'ilaa nafsee tarfata 'aynin. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "********************");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, " O Ever Living One, O Eternal One, by Your mercy I call on You to set right all my affairs. Do not place me in charge of my soul even for the blinking of an eye ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, " \u0623\u064E\u0635\u0652\u0628\u064E\u062D\u0652\u0646\u064E\u0627 \u0639\u064E\u0644\u064E\u0649 \u0641\u0650\u0637\u0652\u0631\u064E\u0629\u0650 \u0627\u0644\u0652\u0625\u0650\u0633\u0652\u0644\u064E\u0627\u0645\u0650 \u0648\u064E\u0639\u064E\u0644\u064E\u0649 \u0643\u064E\u0644\u0650\u0645\u064E\u0629\u0650 \u0627\u0644\u0652\u0625\u0650\u062E\u0652\u0644\u064E\u0627\u0635\u0650\u060C \u0648\u064E\u0639\u064E\u0644\u064E\u0649 \u062F\u0650\u064A\u0646\u0650 \u0646\u064E\u0628\u0650\u064A\u0651\u0650\u0646\u064E\u0627 \u0645\u064F\u062D\u064E\u0645\u0651\u064E\u062F\u064D \u0635\u064E\u0644\u064E\u0649 \u0627\u0644\u0644\u0647\u064F \u0639\u064E\u0644\u0650\u064A\u0647\u0650 \u0648\u064E\u0633\u064E\u0644\u0651\u064E\u0645\u064E\u060C \u0648\u064E\u0639\u064E\u0644\u064E\u0649 \u0645\u0650\u0644\u0651\u064E\u0629\u0650 \u0623\u064E\u0628\u0650\u064A\u0646\u064E\u0627 \u0625\u0650\u0628\u0652\u0631\u064E\u0627\u0647\u0650\u064A\u0645\u064E\u060C \u062D\u064E\u0646\u0650\u064A\u0641\u064E\u0627\u064B \u0645\u064F\u0633\u0652\u0644\u0650\u0645\u0627\u064B \u0648\u064E\u0645\u064E\u0627 \u0643\u064E\u0627\u0646\u064E \u0645\u0650\u0646\u064E \u0627\u0644\u0652\u0645\u064F\u0634\u0652\u0631\u0650\u0643\u0650\u064A\u0646\u064E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, " Asbahnaa 'alaa fitratil-'Islaami wa 'alaa kalimatil-'ikhlaasi, wa 'alaa deeni Nabiyyinaa Muhammadin (sallallaahu 'alayhi wa sallama), wa 'alaa millati 'abeenaa 'Ibraaheema, haneefan Musliman wa maa kaana minal-mushrikeen. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "********************");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, " We have entered a new day 1 upon the natural religion of Islam, the word of sincere devotion, the religion of our Prophet Muhammad (peace and blessings of Allah be upon him), and the faith of our father Ibrahim. He was upright (in worshipping Allah), and a Muslim. He was not of those who worship others besides Allah. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, " \u0633\u064F\u0628\u0652\u062D\u064E\u0627\u0646\u064E \u0627\u0644\u0644\u0647\u0650 \u0648\u064E\u0628\u0650\u062D\u064E\u0645\u0652\u062F\u0650\u0647\u0650 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, " Subhaanallaahi wa bihamdihi. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EveningComponent_Template_button_click_211_listener() { return ctx.clickM9(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](213, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](214, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "********************");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, " Glory is to Allah and praise is to Him ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](219, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, " \u0644\u064E\u0627 \u0625\u0650\u0644\u0670\u0647\u064E \u0625\u0650\u0644\u0651\u064E\u0627 \u0627\u0644\u0644\u0647\u064F \u0648\u064E\u062D\u0652\u062F\u064E\u0647\u064F \u0644\u064E\u0627 \u0634\u064E\u0631\u0650\u064A\u0643\u064E \u0644\u064E\u0647\u064F\u060C \u0644\u064E\u0647\u064F \u0627\u0644\u0652\u0645\u064F\u0644\u0652\u0643\u064F \u0648\u064E\u0644\u064E\u0647\u064F \u0627\u0644\u0652\u062D\u064E\u0645\u0652\u062F\u064F\u060C \u0648\u064E\u0647\u064F\u0648\u064E \u0639\u064E\u0644\u064E\u0649 \u0643\u064F\u0644\u0651\u0650 \u0634\u064E\u064A\u0652\u0621\u064D \u0642\u064E\u062F\u0650\u064A\u0631\u064C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, " Laa 'ilaaha 'illallaahu wahdahu laa shareeka lahu, lahul-mulku wa lahul-hamdu, wa Huwa 'alaa kulli shay'in Qadeer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EveningComponent_Template_button_click_225_listener() { return ctx.clickM10(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](227, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](228, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "********************");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, " None has the right to be worshipped but Allah alone, Who has no partner. His is the dominion and His is the praise and He is Able to do all things ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, " \u0633\u064F\u0628\u0652\u062D\u064E\u0627\u0646\u064E \u0627\u0644\u0644\u0647\u0650 \u0648\u064E\u0628\u0650\u062D\u064E\u0645\u0652\u062F\u0650\u0647\u0650: \u0639\u064E\u062F\u064E\u062F\u064E \u062E\u064E\u0644\u0652\u0642\u0650\u0647\u0650\u060C \u0648\u064E\u0631\u0650\u0636\u064E\u0627 \u0646\u064E\u0641\u0652\u0633\u0650\u0647\u0650\u060C \u0648\u064E\u0632\u0650\u0646\u064E\u0629\u064E \u0639\u064E\u0631\u0652\u0634\u0650\u0647\u0650 \u0648\u064E\u0645\u0650\u062F\u064E\u0627\u062F\u064E \u0643\u064E\u0644\u0650\u0645\u064E\u0627\u062A\u0650\u0647\u0650 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, " Subhaanallaahi wa bihamdihi: 'Adada khalqihi, wa ridhaa nafsihi, wa zinata 'arshihi wa midaada kalimaatihi. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EveningComponent_Template_button_click_239_listener() { return ctx.clickM11(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](241, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](242, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "********************");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, " Glory is to Allah and praise is to Him, by the multitude of His creation, by His Pleasure, by the weight of His Throne, and by the extent of His Words ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](247, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, " \u0627\u0644\u0644\u0651\u064E\u0647\u064F\u0645\u0651\u064E \u0625\u0646\u0651\u0650\u064A \u0623\u064E\u0633\u0652\u0623\u064E\u0644\u064F\u0643\u064E \u0639\u0650\u0644\u0652\u0645\u0627\u064B \u0646\u064E\u0627\u0641\u0650\u0639\u0627\u064B\u060C \u0648\u064E\u0631\u0650\u0632\u0642\u0627\u064B \u0637\u064E\u064A\u0651\u0650\u0628\u0627\u064B\u060C \u0648\u064E\u0639\u064E\u0645\u064E\u0644\u0627\u064B \u0645\u064F\u062A\u064E\u0642\u064E\u0628\u0651\u064E\u0644\u0627\u064B ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, " Allaahumma 'innee 'as'aluka 'ilman naafi'an, wa rizqan tayyiban, wa 'amalan mutaqabbalan. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "********************");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, " O Allah, I ask You for knowledge that is of benefit , a good provision , and deeds that will be accepted ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](257, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, " \u0623\u064E\u0633\u0652\u062A\u064E\u063A\u0652\u0641\u0650\u0631\u064F \u0627\u0644\u0644\u0647\u064E \u0648\u064E\u0623\u064E\u062A\u064F\u0648\u0628\u064F \u0625\u0650\u0644\u064E\u064A\u0652\u0647\u0650 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, " Astaghfirullaaha wa 'atoobu 'ilayhi. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "********************");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, " I seek the forgiveness of Allah and repent to Him. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](267, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, " \u0623\u064E\u0639\u064F\u0648\u0630\u064F \u0628\u0650\u0643\u064E\u0644\u0650\u0645\u064E\u0627\u062A\u0650 \u0627\u0644\u0644\u0647\u0650 \u0627\u0644\u062A\u0651\u064E\u0627\u0645\u0651\u064E\u0627\u062A\u0650 \u0645\u0650\u0646\u0652 \u0634\u064E\u0631\u0651\u0650 \u0645\u064E\u0627 \u062E\u064E\u0644\u064E\u0642\u064E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, " A'oothu bikalimaatil-laahit-taammaati min sharri maa khalaqa. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EveningComponent_Template_button_click_273_listener() { return ctx.clickM12(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](275, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](276, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, "********************");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, " I seek refuge in the Perfect Words of Allah from the evil of what He has created ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](281, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, " \u0627\u0644\u0644\u0651\u064E\u0647\u064F\u0645\u0651\u064E \u0635\u064E\u0644\u0651\u0650 \u0648\u064E\u0633\u064E\u0644\u0651\u0650\u0645\u0652 \u0639\u064E\u0644\u064E\u0649 \u0646\u064E\u0628\u0650\u064A\u0651\u0650\u0646\u064E\u0627 \u0645\u064F\u062D\u064E\u0645\u0651\u064E\u062F\u064D ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, " Allahumma salli wa sallim 'alaa nabiyyinaa Muhammadin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EveningComponent_Template_button_click_287_listener() { return ctx.clickM13(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](289, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](290, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, "********************");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, " Oh Allah, we ask you for peace and blessings upon our prophet Muhammad ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](295, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](296, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](297, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](298, "br");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.morningAMount, " (3)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.morningAMount2, " (3)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.morningAMount3, " (3)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.morningAMount4, " (4)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.morningAMount5, " (3)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.morningAMount6, " (7)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.morningAMount7, " (3)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.morningAMount8, " (3)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.morningAMount9, " (100)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.morningAMount10, " (10)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.morningAMount11, " (3)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.morningAMount12, " (3)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.morningAMount13, " (10)");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2V2ZW5pbmcvZXZlbmluZy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EveningComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-evening',
                templateUrl: './evening.component.html',
                styleUrls: ['./evening.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 8, vars: 0, consts: [[1, "row"], [1, "col", "s12", "center-align"], ["src", "../../assets/img/YrDWRaOr.jpg", "alt", "", "srcset", "", 1, ""]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/morning/morning.component.ts":
/*!**********************************************!*\
  !*** ./src/app/morning/morning.component.ts ***!
  \**********************************************/
/*! exports provided: MorningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MorningComponent", function() { return MorningComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class MorningComponent {
    constructor() {
        this.morningAMount = 0;
        this.morningAMount2 = 0;
        this.morningAMount3 = 0;
        this.morningAMount4 = 0;
        this.morningAMount5 = 0;
        this.morningAMount6 = 0;
        this.morningAMount7 = 0;
        this.morningAMount8 = 0;
        this.morningAMount9 = 0;
        this.morningAMount10 = 0;
        this.morningAMount11 = 0;
        this.morningAMount12 = 0;
        this.morningAMount13 = 0;
    }
    clickM() {
        this.morningAMount++;
    }
    clickM2() {
        this.morningAMount2++;
    }
    clickM3() {
        this.morningAMount3++;
    }
    clickM4() {
        this.morningAMount4++;
    }
    clickM5() {
        this.morningAMount5++;
    }
    clickM6() {
        this.morningAMount6++;
    }
    clickM7() {
        this.morningAMount7++;
    }
    clickM8() {
        this.morningAMount8++;
    }
    clickM9() {
        this.morningAMount9++;
    }
    clickM10() {
        this.morningAMount10++;
    }
    clickM11() {
        this.morningAMount11++;
    }
    clickM12() {
        this.morningAMount12++;
    }
    clickM13() {
        this.morningAMount13++;
    }
    ngOnInit() {
    }
}
MorningComponent.ɵfac = function MorningComponent_Factory(t) { return new (t || MorningComponent)(); };
MorningComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MorningComponent, selectors: [["app-morning"]], decls: 299, vars: 13, consts: [[1, "row"], [1, "center-align"], [1, "col", "s12"], [1, "center-align", 2, "line-height", "176%"], [1, "btn", "btn-large", "#e91e63", "pink", "waves-effect", "waves-light", 2, "width", "100%", 3, "click"]], template: function MorningComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Mornning Dua");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " \u0623\u064E\u0639\u064F\u0648\u0630\u064F \u0628\u0650\u0627\u0644\u0644\u0647\u0650 \u0645\u0650\u0646\u064E \u0627\u0644\u0634\u0651\u064E\u064A\u0652\u0637\u064E\u0627\u0646\u0650 \u0627\u0644\u0631\u0651\u064E\u062C\u0650\u064A\u0645\u0650 \"\u0627\u0644\u0644\u0647\u064F \u0644\u064E\u0627 \u0625\u0650\u0644\u0670\u0647\u064E \u0625\u0650\u0644\u0651\u064E\u0627 \u0647\u064F\u0648\u064E \u0627\u0644\u0652\u062D\u064E\u064A\u0651\u064F \u0627\u0644\u0652\u0642\u064E\u064A\u0651\u064F\u0648\u0645\u064F \u0644\u064E\u0627 \u062A\u064E\u0623\u0652\u062E\u064F\u0630\u064F\u0647\u064F \u0633\u0650\u0646\u064E\u0629\u064C \u0648\u064E\u0644\u064E\u0627 \u0646\u064E\u0648\u0652\u0645\u064C \u0644\u064E\u0647\u064F \u0645\u064E\u0627 \u0641\u0650\u064A \u0627\u0644\u0633\u0651\u064E\u0645\u064E\u0627\u0648\u064E\u0627\u062A\u0650 \u0648\u064E\u0645\u064E\u0627 \u0641\u0650\u064A \u0627\u0644\u0652\u0623\u064E\u0631\u0652\u0636\u0650 \u0645\u064E\u0646\u0652 \u0630\u064E\u0627 \u0627\u0644\u0651\u064E\u0630\u0650\u064A \u064A\u064E\u0634\u0652\u0641\u064E\u0639\u064F \u0639\u0650\u0646\u0652\u062F\u064E\u0647\u064F \u0625\u0650\u0644\u0651\u064E\u0627 \u0628\u0650\u0625\u0650\u0630\u0652\u0646\u0650\u0647\u0650 \u064A\u064E\u0639\u0652\u0644\u064E\u0645\u064F \u0645\u064E\u0627 \u0628\u064E\u064A\u0652\u0646\u064E \u0623\u064E\u064A\u0652\u062F\u0650\u064A\u0647\u0650\u0645\u0652 \u0648\u064E\u0645\u064E\u0627 \u062E\u064E\u0644\u0652\u0641\u064E\u0647\u064F\u0645\u0652 \u0648\u064E\u0644\u064E\u0627 \u064A\u064F\u062D\u0650\u064A\u0637\u064F\u0648\u0646\u064E \u0628\u0650\u0634\u064E\u064A\u0652\u0621\u064D \u0645\u0650\u0646\u0652 \u0639\u0650\u0644\u0652\u0645\u0650\u0647\u0650 \u0625\u0650\u0644\u0651\u064E\u0627 \u0628\u0650\u0645\u064E\u0627 \u0634\u064E\u0627\u0621\u064E \u0648\u064E\u0633\u0650\u0639\u064E \u0643\u064F\u0631\u0652\u0633\u0650\u064A\u0651\u064F\u0647\u064F \u0627\u0644\u0633\u0651\u064E\u0645\u064E\u0627\u0648\u064E\u0627\u062A\u0650 \u0648\u064E\u0627\u0644\u0652\u0623\u064E\u0631\u0652\u0636\u064E \u0648\u064E\u0644\u064E\u0627 \u064A\u064E\u0626\u064F\u0648\u062F\u064F\u0647\u064F \u062D\u0650\u0641\u0652\u0638\u064F\u0647\u064F\u0645\u064E\u0627 \u0648\u064E\u0647\u064F\u0648\u064E \u0627\u0644\u0652\u0639\u064E\u0644\u0650\u064A\u0651\u064F \u0627\u0644\u0652\u0639\u064E\u0638\u0650\u064A\u0645\u064F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " 'A 'oothu billaahi minash-Shaytaanir-rajeem. Allaahu laa 'ilaaha 'illaa Huwal-Hayyul-Qayyoom, laa ta'khuthuhu sinatun wa laa nawm, lahu maa fis-samaawaati wa maa fil-'ardh, man thai-lathee yashfa'u 'indahu 'illaa bi'ithnih, ya'lamu maa bayna 'aydeehim wa maa khalfahum, wa laa yuheetoona bishay'im-min 'ilmihi 'illaa bimaa shaa'a, wasi'a kursiyyuhus samaawaati wal'ardh, wa laa ya'ooduhu hifdhuhumaa, wa Huwal- 'Aliyyul- 'Adheem. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "***********");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " I seek refuge in Allah from Satan the outcast. - Allah! There is none worthy of worship but He, the Ever Living, the One Who sustains and protects all that exists. Neither slumber nor sleep overtakes Him. To Him belongs whatever is in the heavens and whatever is on the earth. Who is he that can intercede with Him except with His Permission? He knows what happens to them in this world, and what will happen to them in the Hereafter. And they will never encompass anything of His Knowledge except that which He wills. His Throne extends over the heavens and the earth, and He feels no fatigue in guarding and preserving them. And He is the Most High, the Most Great. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " \u0628\u0650\u0633\u0652\u0645\u0650 \u0627\u0644\u0644\u0647\u0650 \u0627\u0644\u0631\u0651\u064E\u062D\u0652\u0645\u0670\u0646\u0650 \u0627\u0644\u0631\u0651\u064E\u062D\u0650\u064A\u0645\u0650 \"\u0642\u064F\u0644\u0652 \u0647\u064F\u0648\u064E \u0627\u0644\u0644\u0647\u064F \u0623\u064E\u062D\u064E\u062F\u064C \u06DE \u0627\u0644\u0644\u0647\u064F \u0627\u0644\u0635\u0651\u064E\u0645\u064E\u062F\u064F \u06DE \u0644\u064E\u0645\u0652 \u064A\u064E\u0644\u0650\u062F\u0652 \u0648\u064E\u0644\u064E\u0645\u0652 \u064A\u064F\u0648\u0644\u064E\u062F\u0652 \u06DE \u0648\u064E\u0644\u064E\u0645\u0652 \u064A\u064E\u0643\u064F\u0646 \u0644\u0651\u064E\u0647\u064F \u0643\u064F\u0641\u064F\u0648\u064B\u0627 \u0623\u064E\u062D\u064E\u062F\u064C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Bismillaahir-Rahmaanir-Raheem. Qul Huwallaahu 'Ahad. Allaahus-Samad. Lam yalid wa lam yoolad. Wa lam yakun lahu kufuwan 'ahad. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MorningComponent_Template_button_click_19_listener() { return ctx.clickM(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "********************");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " With the Name of Allah, the Most Gracious, the Most Merciful. Say: He is Allah (the) One. The Self-Sufficient Master, Whom all creatures need, He begets not nor was He begotten, and there is none equal to Him ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, " \u0628\u0650\u0633\u0652\u0645\u0650 \u0627\u0644\u0644\u0647\u0650 \u0627\u0644\u0631\u0651\u064E\u062D\u0652\u0645\u0670\u0646\u0650 \u0627\u0644\u0631\u0651\u064E\u062D\u0650\u064A\u0645\u0650 \"\u0642\u064F\u0644\u0652 \u0623\u064E\u0639\u064F\u0648\u0630\u064F \u0628\u0650\u0631\u064E\u0628\u0651\u0650 \u0627\u0644\u0652\u0641\u064E\u0644\u064E\u0642\u0650 \u06DE \u0645\u0650\u0646 \u0634\u064E\u0631\u0651\u0650 \u0645\u064E\u0627 \u062E\u064E\u0644\u064E\u0642\u064E \u06DE \u0648\u064E\u0645\u0650\u0646 \u0634\u064E\u0631\u0651\u0650 \u063A\u064E\u0627\u0633\u0650\u0642\u064D \u0625\u0650\u0630\u064E\u0627 \u0648\u064E\u0642\u064E\u0628\u064E \u06DE \u0648\u064E\u0645\u0650\u0646 \u0634\u064E\u0631\u0651\u0650 \u0627\u0644\u0646\u0651\u064E\u0641\u0651\u0670\u062B\u064E\u0670\u062A\u0650 \u0641\u0650\u064A \u0627\u0644\u0652\u0639\u064F\u0642\u064E\u062F\u0650 \u06DE \u0648\u064E\u0645\u0650\u0646 \u0634\u064E\u0631\u0651\u0650 \u062D\u064E\u0627\u0633\u0650\u062F\u064D \u0625\u0650\u0630\u064E\u0627 \u062D\u064E\u0633\u064E\u062F\u064E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Bismillaahir-Rahmaanir-Raheem. Qul 'a'oothu birabbil-falaq. Min sharri ma khalaq. Wa min sharri ghaasiqin 'ithaa waqab. Wa min sharrin-naffaathaati fil-'uqad. Wa min sharri haasidin 'ithaa hasad ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MorningComponent_Template_button_click_33_listener() { return ctx.clickM2(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](36, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "********************");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, " With the Name of Allah, the Most Gracious, the Most Merciful. Say: He is Allah (the) One. The Self-Sufficient Master, Whom all creatures need, He begets not nor was He begotten, and there is none equal to Him ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " \u0628\u0650\u0633\u0652\u0645\u0650 \u0627\u0644\u0644\u0647\u0650 \u0627\u0644\u0631\u0651\u064E\u062D\u0652\u0645\u0670\u0646\u0650 \u0627\u0644\u0631\u0651\u064E\u062D\u0650\u064A\u0645\u0650 \"\u0642\u064F\u0644\u0652 \u0623\u064E\u0639\u064F\u0648\u0630\u064F \u0628\u0650\u0631\u064E\u0628\u0651\u0650 \u0627\u0644\u0646\u0651\u064E\u0627\u0633\u0650 \u06DE \u0645\u064E\u0644\u0650\u0643\u0650 \u0627\u0644\u0646\u0651\u064E\u0627\u0633\u0650 \u06DE \u0625\u0650\u0644\u064E\u0647\u0650 \u0627\u0644\u0646\u0651\u064E\u0627\u0633\u0650 \u06DE \u0645\u0650\u0646 \u0634\u064E\u0631\u0651\u0650 \u0627\u0644\u0652\u0648\u064E\u0633\u0652\u0648\u064E\u0627\u0633\u0650 \u0627\u0644\u0652\u062E\u064E\u0646\u0651\u064E\u0627\u0633\u0650 \u06DE \u0627\u0644\u0651\u064E\u0630\u0650\u064A \u064A\u064F\u0648\u064E\u0633\u0652\u0648\u0650\u0633\u064F \u0641\u0650\u064A \u0635\u064F\u062F\u064F\u0648\u0631\u0650 \u0627\u0644\u0646\u0651\u064E\u0627\u0633\u0650 \u06DE \u0645\u0650\u0646\u064E \u0627\u0644\u0652\u062C\u0650\u0646\u0651\u064E\u0629\u0650 \u0648\u064E\u0627\u0644\u0646\u0651\u064E\u0627\u0633\u0650 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Bismillaahir-Rahmaanir-Raheem. Qul 'a'oothu birabbin-naas. Malikin-naas. 'Ilaahin-naas. Min sharril-waswaasil-khannaas. Allathee yuwaswisu fee sudoorin-naas. Minal-jinnati wannaas. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MorningComponent_Template_button_click_47_listener() { return ctx.clickM3(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "********************");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " With the Name of Allah , the Most Gracious , the Most Merciful. Say: I seek refuge with (Allah) the Lord of mankind, the King of mankind , the God of mankind , from the evil of the whisperer who withdraws, who whispers in the breasts of mankind, of jinns and men. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](55, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " \u0623\u064E\u0635\u0652\u0628\u064E\u062D\u0652\u0646\u064E\u0627 \u0648\u064E\u0623\u064E\u0635\u0652\u0628\u064E\u062D\u064E \u0627\u0644\u0652\u0645\u064F\u0644\u0652\u0643\u064F \u0644\u0644\u0647\u0650 \u0648\u064E\u0627\u0644\u0652\u062D\u064E\u0645\u0652\u062F\u064F \u0644\u0644\u0647\u0650\u060C \u0644\u064E\u0627 \u0625\u0650\u0644\u0670\u0647\u064E \u0625\u0650\u0644\u0651\u064E\u0627 \u0627\u0644\u0644\u0647\u064F \u0648\u064E\u062D\u0652\u062F\u064E\u0647\u064F \u0644\u064E\u0627 \u0634\u064E\u0631\u0650\u064A\u0643\u064E \u0644\u064E\u0647\u064F\u060C \u0644\u064E\u0647\u064F \u0627\u0644\u0652\u0645\u064F\u0644\u0652\u0643\u064F \u0648\u064E\u0644\u064E\u0647\u064F \u0627\u0644\u0652\u062D\u064E\u0645\u0652\u062F\u064F \u0648\u064E\u0647\u064F\u0648\u064E \u0639\u064E\u0644\u064E\u0649 \u0643\u064F\u0644\u0651\u0650 \u0634\u064E\u064A\u0652\u0621\u064D \u0642\u064E\u062F\u0650\u064A\u0631\u064C\u060C \u0631\u0628\u0651\u0650 \u0623\u064E\u0633\u0652\u0623\u064E\u0644\u064F\u0643\u064E \u062E\u064E\u064A\u0652\u0631\u064E \u0645\u064E\u0627 \u0641\u0650\u064A \u0647\u064E\u0630\u064E\u0627 \u0627\u0644\u0652\u064A\u064E\u0648\u0645\u0650 \u0648\u064E\u062E\u064E\u064A\u0652\u0631\u064E \u0645\u064E\u0627 \u0628\u064E\u0639\u0652\u062F\u064E\u0647\u064F\u060C \u0648\u064E\u0623\u064E\u0639\u064F\u0648\u0630\u064F \u0628\u0650\u0643\u064E \u0645\u0650\u0646\u0652 \u0634\u064E\u0631\u0651\u0650 \u0645\u064E\u0627 \u0641\u0650\u064A \u0647\u064E\u0630\u064E\u0627 \u0627\u0644\u0652\u064A\u064E\u0648\u0645\u0650 \u0648\u064E\u0634\u064E\u0631\u0651\u0650 \u0645\u064E\u0627 \u0628\u064E\u0639\u0652\u062F\u064E\u0647\u064F\u060C \u0631\u064E\u0628\u0651\u0650 \u0623\u064E\u0639\u064F\u0648\u0630\u064F \u0628\u0650\u0643\u064E \u0645\u0650\u0646\u064E \u0627\u0644\u0652\u0643\u064E\u0633\u064E\u0644\u0650\u060C \u0648\u064E\u0633\u064F\u0648\u0621\u0650 \u0627\u0644\u0643\u0650\u0628\u064E\u0631\u0650\u060C \u0631\u064E\u0628\u0651\u0650 \u0623\u064E\u0639\u064F\u0648\u0630\u064F \u0628\u0650\u0643\u064E \u0645\u0650\u0646\u0652 \u0639\u064E\u0630\u064E\u0627\u0628\u064D \u0641\u0650\u064A \u0627\u0644\u0646\u0651\u064E\u0627\u0631\u0650 \u0648\u064E\u0639\u064E\u0630\u064E\u0627\u0628\u064D \u0641\u0650\u064A \u0627\u0644\u0652\u0642\u064E\u0628\u0652\u0631\u0650 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " 'Asbahnaa wa 'asbahal-mulku lillaahi walhamdu lillaahi, laa 'ilaaha 'illallaahu wahdahu laa shareeka lahu, lahul-mulku wa lahul-hamdu wa Huwa 'alaa kulli shay'in Qadeer. Rabbi 'as'aluka khayra maa fee haathal-yawmi wa khayra maa ba'dahu wa 'a'oothu bika min sharri maa fee haathal-yawmi wa sharri maa ba'dahu, Rabbi 'a'oothu bika minal-kasali, wa soo'il-kibari, Rabbi 'a'oothu bika min 'athaabin fin-naari wa 'athaabin fil-qabri.. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](62, "********************");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](63, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](64, " 'Asbahnaa wa 'asbahal-mulku lillaahi walhamdu lillaahi, laa 'ilaaha 'illallaahu wahdahu laa shareeka lahu, lahul-mulku wa lahul-hamdu wa Huwa 'alaa kulli shay'in Qadeer. Rabbi 'as'aluka khayra maa fee haathal-yawmi wa khayra maa ba'dahu wa 'a'oothu bika min sharri maa fee haathal-yawmi wa sharri maa ba'dahu, Rabbi 'a'oothu bika minal-kasali, wa soo'il-kibari, Rabbi 'a'oothu bika min 'athaabin fin-naari wa 'athaabin fil-qabri. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](65, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, " \u0627\u0644\u0644\u0651\u064E\u0647\u064F\u0645\u0651\u064E \u0628\u0650\u0643\u064E \u0623\u064E\u0635\u0652\u0628\u064E\u062D\u0652\u0646\u064E\u0627\u060C \u0648\u064E\u0628\u0650\u0643\u064E \u0623\u064E\u0645\u0652\u0633\u064E\u064A\u0652\u0646\u064E\u0627\u060C \u0648\u064E\u0628\u0650\u0643\u064E \u0646\u064E\u062D\u0652\u064A\u064E\u0627\u060C \u0648\u064E\u0628\u0650\u0643\u064E \u0646\u064E\u0645\u064F\u0648\u062A\u064F \u0648\u064E\u0625\u0650\u0644\u064E\u064A\u0652\u0643\u064E \u0627\u0644\u0646\u0651\u064F\u0634\u064F\u0648\u0631\u064F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, " Allaahumma bika 'asbahnaa, wa bika 'amsaynaa, wa bika nahyaa, wa bika namootu wa 'ilaykan-nushoor. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](72, "********************");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](73, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](74, " O Allah , by You we enter the morning and by You we enter the evening, 1 by You we live and and by You we die, and to You is the Final Return ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](75, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](76, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](77, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](78, " \u0627\u0644\u0644\u0651\u064E\u0647\u064F\u0645\u0651\u064E \u0623\u064E\u0646\u0652\u062A\u064E \u0631\u064E\u0628\u0651\u0650\u064A \u0644\u0651\u0627 \u0625\u0650\u0644\u0670\u0647\u064E \u0625\u0650\u0644\u0651\u064E\u0627 \u0623\u064E\u0646\u0652\u062A\u064E\u060C \u062E\u064E\u0644\u064E\u0642\u0652\u062A\u064E\u0646\u0650\u064A \u0648\u064E\u0623\u064E\u0646\u064E\u0627 \u0639\u064E\u0628\u0652\u062F\u064F\u0643\u064E\u060C \u0648\u064E\u0623\u064E\u0646\u064E\u0627 \u0639\u064E\u0644\u064E\u0649 \u0639\u064E\u0647\u0652\u062F\u0650\u0643\u064E \u0648\u064E\u0648\u064E\u0639\u0652\u062F\u0650\u0643\u064E \u0645\u064E\u0627 \u0627\u0633\u0652\u062A\u064E\u0637\u064E\u0639\u0652\u062A\u064F\u060C \u0623\u064E\u0639\u064F\u0648\u0630\u064F \u0628\u0650\u0643\u064E \u0645\u0650\u0646\u0652 \u0634\u064E\u0631\u0651\u0650 \u0645\u064E\u0627 \u0635\u064E\u0646\u064E\u0639\u0652\u062A\u064F\u060C \u0623\u064E\u0628\u064F\u0648\u0621\u064F \u0644\u064E\u0643\u064E \u0628\u0650\u0646\u0650\u0639\u0652\u0645\u064E\u062A\u0650\u0643\u064E \u0639\u064E\u0644\u064E\u064A\u0651\u064E\u060C \u0648\u064E\u0623\u064E\u0628\u064F\u0648\u0621\u064F \u0628\u0650\u0630\u064E\u0646\u0652\u0628\u0650\u064A \u0641\u064E\u0627\u063A\u0652\u0641\u0650\u0631 \u0644\u0650\u064A \u0641\u064E\u0625\u0650\u0646\u0651\u064E\u0647\u064F \u0644\u064E\u0627 \u064A\u064E\u063A\u0652\u0641\u0650\u0631\u064F \u0627\u0644\u0630\u0651\u064F\u0646\u064F\u0648\u0628\u064E \u0625\u0650\u0644\u0651\u064E\u0627 \u0623\u064E\u0646\u0652\u062A\u064E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](79, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](80, " Allaahumma 'Anta Rabbee laa 'ilaaha 'illaa 'Anta, khalaqtanee wa 'anaa 'abduka, wa 'anaa 'alaa 'ahdika wa wa'dika mas-tata'tu, 'a'oothu bika min sharri maa sana'tu, 'aboo'u laka bini'matika 'alayya, wa 'aboo'u bithanbee faghfir lee fa'innahu laa yaghfiruth-thunooba 'illaa 'Anta ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](81, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](82, "********************");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](83, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](84, " O Allah, You are my Lord, there is none worthy of worship but You. You created me and I am your slave. I keep Your covenant, and my pledge to You so far as I am able. I seek refuge in You from the evil of what I have done. I admit to Your blessings upon me, and I admit to my misdeeds. Forgive me, for there is none who may forgive sins but You ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](85, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](86, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](87, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](88, " \u0627\u0644\u0644\u0651\u064E\u0647\u064F\u0645\u0651\u064E \u0625\u0650\u0646\u0651\u0650\u064A \u0623\u064E\u0635\u0652\u0628\u064E\u062D\u0652\u062A\u064F \u0623\u064F\u0634\u0652\u0647\u0650\u062F\u064F\u0643\u064E \u0648\u064E\u0623\u064F\u0634\u0652\u0647\u0650\u062F\u064F \u062D\u064E\u0645\u064E\u0644\u064E\u0629\u064E \u0639\u064E\u0631\u0652\u0634\u0650\u0643\u064E\u060C \u0648\u064E\u0645\u064E\u0644\u064E\u0627\u0626\u0650\u0643\u064E\u062A\u064E\u0643\u064E \u0648\u064E\u062C\u064E\u0645\u0650\u064A\u0639\u064E \u062E\u064E\u0644\u0652\u0642\u0650\u0643\u064E\u060C \u0623\u064E\u0646\u0651\u064E\u0643\u064E \u0623\u064E\u0646\u0652\u062A\u064E \u0627\u0644\u0644\u0647\u064F \u0644\u064E\u0627 \u0625\u0650\u0644\u0670\u0647\u064E \u0625\u0650\u0644\u0651\u064E\u0627 \u0623\u064E\u0646\u0652\u062A\u064E \u0648\u064E\u062D\u0652\u062F\u064E\u0643\u064E \u0644\u064E\u0627 \u0634\u064E\u0631\u0650\u064A\u0643\u064E \u0644\u064E\u0643\u064E\u060C \u0648\u064E\u0623\u064E\u0646\u0651\u064E \u0645\u064F\u062D\u064E\u0645\u0651\u064E\u062F\u0627\u064B \u0639\u064E\u0628\u0652\u062F\u064F\u0643\u064E \u0648\u064E\u0631\u064E\u0633\u064F\u0648\u0644\u064F\u0643\u064E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](89, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](90, " Allaahumma 'innee 'asbahtu 'ush-hiduka wa 'ush-hidu hamalata 'arshika, wa malaa'ikataka wajamee'a khalqika, 'annaka 'Antallaahu laa 'ilaaha 'illaa 'Anta wahdaka laa shareeka laka, wa 'anna Muhammadan 'abduka wa Rasooluka. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](91, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MorningComponent_Template_button_click_91_listener() { return ctx.clickM4(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](92);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](93, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](94, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](95, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](96, "********************");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](97, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](98, " O Allah , I have entered a new morning 1 and call upon You and upon the bearers of Your Throne , upon Your angels and all creation to bear witness that surely You are Allah , there is none worthy of worship but You alone , You have no partners, and that Muhammad is Your slave and Your Messenger . (Recite four times in Arabic.) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](99, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](100, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](101, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](102, " \u0627\u0644\u0644\u0651\u064E\u0647\u064F\u0645\u0651\u064E \u0645\u064E\u0627 \u0623\u064E\u0635\u0652\u0628\u064E\u062D\u064E \u0628\u0650\u064A \u0645\u0650\u0646\u0652 \u0646\u0650\u0639\u0652\u0645\u064E\u0629\u064D \u0623\u064E\u0648\u0652 \u0628\u0650\u0623\u064E\u062D\u064E\u062F\u064D \u0645\u0650\u0646\u0652 \u062E\u064E\u0644\u0652\u0642\u0650\u0643\u064E \u0641\u064E\u0645\u0650\u0646\u0652\u0643\u064E \u0648\u064E\u062D\u0652\u062F\u064E\u0643\u064E \u0644\u064E\u0627 \u0634\u064E\u0631\u0650\u064A\u0643\u064E \u0644\u064E\u0643\u064E\u060C \u0641\u064E\u0644\u064E\u0643\u064E \u0627\u0644\u0652\u062D\u064E\u0645\u0652\u062F\u064F \u0648\u064E\u0644\u064E\u0643\u064E \u0627\u0644\u0634\u0651\u064F\u0643\u0652\u0631\u064F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](103, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](104, " Allaahumma maa 'asbaha bee min ni'matin 'aw bi'ahadin min khalqika faminka wahdaka laa shareeka laka, falakal-hamdu wa lakash-shukru ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](105, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](106, "********************");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](107, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](108, " O Allah , whatever blessing has been received by me or anyone of Your creation 1 is from You alone , You have no partner . All praise is for you and thanks is to You. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](109, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](110, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](111, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](112, " \u0627\u0644\u0644\u0651\u0647\u064F\u0640\u0645\u0651\u064E \u0639\u0627\u0641\u0650\u0640\u0646\u064A \u0641\u064A \u0628\u064E\u062F\u064E\u0646\u0640\u064A \u060C \u0627\u0644\u0644\u0651\u0647\u064F\u0640\u0645\u0651\u064E \u0639\u0627\u0641\u0650\u0640\u0646\u064A \u0641\u064A \u0633\u064E\u0645\u0652\u0640\u0639\u064A \u060C \u0627\u0644\u0644\u0651\u0647\u064F\u0640\u0645\u0651\u064E \u0639\u0627\u0641\u0650\u0640\u0646\u064A \u0641\u064A \u0628\u064E\u0635\u064E\u0640\u0631\u064A \u060C \u0644\u0627 \u0625\u0644\u0647\u064E \u0625\u0644\u0627\u0651 \u0623\u064E\u0646\u0652\u0640\u062A\u064E \u0627\u0644\u0644\u0651\u0647\u064F\u0640\u0645\u0651\u064E \u0625\u0650\u0646\u0651\u0640\u064A \u0623\u064E\u0639\u0640\u0648\u0630\u064F\u0628\u0650\u0643\u064E \u0645\u0650\u0646\u064E \u0627\u0644\u0652\u0643\u064F\u0640\u0641\u0631 \u060C \u0648\u064E\u0627\u0644\u0641\u064E\u0640\u0642\u0652\u0631 \u060C \u0648\u064E\u0623\u064E\u0639\u0640\u0648\u0630\u064F\u0628\u0650\u0643\u064E \u0645\u0650\u0646\u0652 \u0639\u064E\u0630\u0627\u0628\u0650 \u0627\u0644\u0642\u064E\u0640\u0628\u0652\u0631 \u060C \u0644\u0627 \u0625\u0644\u0647\u064E \u0625\u0644\u0627\u0651 \u0623\u064E\u0646\u0652\u0640\u062A\u064E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](113, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](114, " Allaahumma 'aafinee fee badanee, Allaahumma 'aafinee fee sam'ee, Allaahumma 'aafinee fee basaree, laa 'ilaaha 'illaa 'Anta Allaahumma 'innee 'a'oothu bika minal-kufri, walfaqri, wa 'a'oothu bika min 'athaabil-qabri, laa 'ilaaha 'illaa 'Anta. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](115, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MorningComponent_Template_button_click_115_listener() { return ctx.clickM5(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](116);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](117, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](118, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](119, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](120, "********************");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](121, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](122, " O Allah, make me healthy in my body. O Allah, preserve for me my hearing. O Allah, preserve for me my sight. There is none worthy of worship but You . O Allah , I seek refuge in You from disbelief and poverty and I seek refuge in You from the punishment of the grave . There is none worthy of worship but You. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](123, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](124, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](125, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](126, " \u062D\u064E\u0633\u0652\u0628\u0650\u064A\u064E \u0627\u0644\u0644\u0647\u064F \u0644\u064E\u0622 \u0625\u0650\u0644\u0670\u0647\u064E \u0625\u0650\u0644\u0651\u064E\u0627 \u0647\u064F\u0648\u064E \u0639\u064E\u0644\u064E\u064A\u0652\u0647\u0650 \u062A\u064E\u0648\u064E\u0643\u0651\u064E\u0644\u0652\u062A\u064F \u0648\u064E\u0647\u064F\u0648\u064E \u0631\u064E\u0628\u0651\u064F \u0627\u0644\u0652\u0639\u064E\u0631\u0652\u0634\u0650 \u0627\u0644\u0652\u0639\u064E\u0638\u0650\u064A\u0645\u0650 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](127, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](128, " Hasbiyallaahu laa 'ilaaha 'illaa Huwa 'alayhi tawakkaltu wa Huwa Rabbul-'Arshil-'Adheem ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](129, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MorningComponent_Template_button_click_129_listener() { return ctx.clickM6(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](130);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](131, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](132, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](133, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](134, "********************");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](135, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](136, " Allah is sufficient for me . There is none worthy of worship but Him . I have placed my trust in Him, He is Lord of the Majestic Throne ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](137, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](138, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](139, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](140, " \u0627\u0644\u0644\u0651\u064E\u0647\u064F\u0645\u0651\u064E \u0625\u0650\u0646\u0651\u0650\u064A \u0623\u064E\u0633\u0652\u0623\u064E\u0644\u064F\u0643\u064E \u0627\u0644\u0652\u0639\u064E\u0641\u0652\u0648\u064E \u0648\u064E\u0627\u0644\u0652\u0639\u064E\u0627\u0641\u0650\u064A\u064E\u0629\u064E \u0641\u0650\u064A \u0627\u0644\u062F\u0651\u064F\u0646\u0652\u064A\u064E\u0627 \u0648\u064E\u0627\u0644\u0652\u0622\u062E\u0650\u0631\u064E\u0629\u0650\u060C \u0627\u0644\u0644\u0651\u064E\u0647\u064F\u0645\u0651\u064E \u0625\u0650\u0646\u0651\u0650\u064A \u0623\u064E\u0633\u0652\u0623\u064E\u0644\u064F\u0643\u064E \u0627\u0644\u0652\u0639\u064E\u0641\u0652\u0648\u064E \u0648\u064E\u0627\u0644\u0652\u0639\u064E\u0627\u0641\u0650\u064A\u064E\u0629\u064E \u0641\u0650\u064A \u062F\u0650\u064A\u0646\u0650\u064A \u0648\u064E\u062F\u064F\u0646\u0652\u064A\u064E\u0627\u064A\u064E \u0648\u064E\u0623\u064E\u0647\u0652\u0644\u0644\u0650\u064A\u060C \u0648\u064E\u0645\u064E\u0627\u0644\u0650\u064A\u060C \u0627\u0644\u0644\u0651\u064E\u0647\u064F\u0645\u0651\u064E \u0627\u0633\u0652\u062A\u064F\u0631\u0652 \u0639\u064E\u0648\u0652\u0631\u064E\u0627\u062A\u0650\u064A\u060C \u0648\u064E\u0622\u0645\u0650\u0646\u0652 \u0631\u064E\u0648\u0652\u0639\u064E\u0627\u062A\u0650\u064A\u060C \u0627\u0644\u0644\u0651\u064E\u0647\u064F\u0645\u0651\u064E \u0627\u062D\u0652\u0641\u064E\u0638\u0652\u0646\u0650\u064A \u0645\u0650\u0646\u0652 \u0628\u064E\u064A\u0652\u0646\u0650 \u064A\u064E\u062F\u064E\u064A\u0651\u064E\u060C \u0648\u064E\u0645\u0650\u0646\u0652 \u062E\u064E\u0644\u0652\u0641\u0650\u064A\u060C \u0648\u064E\u0639\u064E\u0646\u0652 \u064A\u064E\u0645\u0650\u064A\u0646\u0650\u064A\u060C \u0648\u064E\u0639\u064E\u0646\u0652 \u0634\u0650\u0645\u064E\u0627\u0644\u0650\u064A\u060C \u0648\u064E\u0645\u0650\u0646\u0652 \u0641\u064E\u0648\u0652\u0642\u0650\u064A\u060C \u0648\u064E\u0623\u064E\u0639\u064F\u0648\u0630\u064F \u0628\u0650\u0639\u064E\u0638\u064E\u0645\u064E\u062A\u0650\u0643\u064E \u0623\u064E\u0646\u0652 \u0623\u064F\u063A\u0652\u062A\u064E\u0627\u0644\u064E \u0645\u0650\u0646\u0652 \u062A\u064E\u062D\u0652\u062A\u0650\u064A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](141, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](142, " Allaahumma 'innee 'as'alukal-'afwa wal'aafiyata fid-dunyaa wal'aakhirati, Allaahumma 'innee 'as'alukal-'afwa wal'aafiyata fee deenee wa dunyaaya wa 'ahlee, wa maalee , Allaahum-mastur 'awraatee, wa 'aamin raw'aatee, Allaahum-mahfadhnee min bayni yadayya, wa min khalfee, wa 'an yameenee, wa 'an shimaalee, wa min fawqee, wa 'a'oothu bi'adhamatika 'an 'ughtaala min tahtee ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](143, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](144, "********************");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](145, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](146, " O Allah, I seek Your forgiveness and Your protection in this world and the next. O Allah, I seek Your forgiveness and Your protection in my religion, in my worldly affairs, in my family and in my wealth. O Allah, conceal my secrets and preserve me from anguish. O Allah, guard me from what is in front of me and behind me, from my right, and from my left, and from above me. I seek refuge in Your Greatness from being struck down from beneath me. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](147, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](148, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](149, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](150, " \u0627\u0644\u0644\u0651\u064E\u0647\u064F\u0645\u0651\u064E \u0639\u064E\u0627\u0644\u0650\u0645\u064E \u0627\u0644\u0652\u063A\u064E\u064A\u0652\u0628\u0650 \u0648\u064E\u0627\u0644\u0634\u0651\u064E\u0647\u064E\u0627\u062F\u064E\u0629\u0650 \u0641\u064E\u0627\u0637\u0650\u0631\u064E \u0627\u0644\u0633\u0651\u064E\u0645\u0627\u0648\u064E\u0627\u062A\u0650 \u0648\u064E\u0627\u0644\u0652\u0623\u064E\u0631\u0652\u0636\u0650\u060C \u0631\u064E\u0628\u0651\u064E \u0643\u064F\u0644\u0651\u0650 \u0634\u064E\u064A\u0652\u0621\u064D \u0648\u064E\u0645\u064E\u0644\u0650\u064A\u0643\u064E\u0647\u064F\u060C \u0623\u064E\u0634\u0652\u0647\u064E\u062F\u064F \u0623\u064E\u0646\u0652 \u0644\u064E\u0627 \u0625\u0650\u0644\u0670\u0647\u064E \u0625\u0650\u0644\u0651\u064E\u0627 \u0623\u064E\u0646\u0652\u062A\u064E\u060C \u0623\u064E\u0639\u064F\u0648\u0630\u064F \u0628\u0650\u0643\u064E \u0645\u0650\u0646\u0652 \u0634\u064E\u0631\u0651\u0650 \u0646\u064E\u0641\u0652\u0633\u0650\u064A\u060C \u0648\u064E\u0645\u0650\u0646\u0652 \u0634\u064E\u0631\u0651\u0650 \u0627\u0644\u0634\u0651\u064E\u064A\u0652\u0637\u064E\u0627\u0646\u0650 \u0648\u064E\u0634\u0650\u0631\u0652\u0643\u0650\u0647\u0650\u060C \u0648\u064E\u0623\u064E\u0646\u0652 \u0623\u064E\u0642\u0652\u062A\u064E\u0631\u0650\u0641\u064E \u0639\u064E\u0644\u064E\u0649 \u0646\u064E\u0641\u0652\u0633\u0650\u064A \u0633\u064F\u0648\u0621\u0627\u064B\u060C \u0623\u064E\u0648\u0652 \u0623\u064E\u062C\u064F\u0631\u0651\u064E\u0647\u064F \u0625\u0650\u0644\u064E\u0649 \u0645\u064F\u0633\u0652\u0644\u0650\u0645\u064D ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](151, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](152, " Allaahumma 'Aalimal-ghaybi wash-shahaadati faatiras-samaawaati wal'ardhi, Rabba kulli shay'in wa maleekahu, 'ash-hadu 'an laa 'ilaaha 'illaa 'Anta, 'a'oothu bika min sharri nafsee, wa min sharrish-shaytaani wa shirkihi, wa 'an 'aqtarifa 'alaa nafsee soo'an, 'aw 'ajurrahu 'ilaa Muslimin. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](153, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](154, "********************");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](155, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](156, " O Allah, Knower of the unseen and the evident , Maker of the heavens and the earth , Lord of everything and its Possessor , I bear witness that there is none worthy of worship but You . I seek refuge in You from the evil of my soul and from the evil of Satan and his helpers . (I seek refuge in You) from bringing evil upon my soul and from harming any Muslim. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](157, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](158, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](159, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](160, " \u0627\u0628\u0650\u0633\u0652\u0645\u0650 \u0627\u0644\u0644\u0647\u0650 \u0627\u0644\u0651\u064E\u0630\u0650\u064A \u0644\u064E\u0627 \u064A\u064E\u0636\u064F\u0631\u0651\u064F \u0645\u064E\u0639\u064E \u0627\u0633\u0652\u0645\u0650\u0647\u0650 \u0634\u064E\u064A\u0652\u0621\u064C \u0641\u0650\u064A \u0627\u0644\u0652\u0623\u064E\u0631\u0652\u0636\u0650 \u0648\u064E\u0644\u064E\u0627 \u0641\u0650\u064A \u0627\u0644\u0633\u0651\u064E\u0645\u064E\u0627\u0621\u0650 \u0648\u064E\u0647\u064F\u0648\u064E \u0627\u0644\u0633\u0651\u064E\u0645\u0650\u064A\u0639\u064F \u0627\u0644\u0652\u0639\u064E\u0644\u0650\u064A\u0645\u064F ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](161, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](162, " Bismillaahil-lathee laa yadhurru ma'as-mihi shay'un fil-'ardhi wa laa fis-samaa'i wa Huwas-Samee 'ul- 'Aleem . ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](163, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MorningComponent_Template_button_click_163_listener() { return ctx.clickM7(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](164);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](165, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](166, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](167, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](168, "********************");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](169, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](170, " In the Name of Allah, Who with His Name nothing can cause harm in the earth nor in the heavens, and He is the All-Hearing, the All-Knowing. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](171, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](172, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](173, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](174, " \u0631\u064E\u0636\u0650\u064A\u062A\u064F \u0628\u0627\u0644\u0644\u0647\u0650 \u0631\u064E\u0628\u0651\u064E\u0627\u064B\u060C \u0648\u064E\u0628\u0650\u0627\u0644\u0652\u0625\u0650\u0633\u0652\u0644\u064E\u0627\u0645\u0650 \u062F\u0650\u064A\u0646\u0627\u064B\u060C \u0648\u064E\u0628\u0650\u0645\u064F\u062D\u064E\u0645\u0651\u064E\u062F\u064D \u0635\u064E\u0644\u064E\u0649 \u0627\u0644\u0644\u0647\u064F \u0639\u064E\u0644\u0650\u064A\u0647\u0650 \u0648\u064E\u0633\u064E\u0644\u0651\u064E\u0645\u064E \u0646\u064E\u0628\u0650\u064A\u0651\u064E\u0627\u064B ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](175, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](176, " Radheetu billaahi Rabban, wa bil-'Islaami deenan, wa bi-Muhammadin (sallallaahu 'alayhi wa sallama) Nabiyyan. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](177, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MorningComponent_Template_button_click_177_listener() { return ctx.clickM8(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](178);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](179, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](180, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](181, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](182, "********************");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](183, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](184, " I am pleased with Allah as my Lord, with Islam as my religion and with Muhammad (peace and blessings of Allah be upon him) as my Prophet. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](185, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](186, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](187, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](188, " \u064A\u064E\u0627 \u062D\u064E\u064A\u0651\u064F \u064A\u064E\u0627 \u0642\u064E\u064A\u0651\u064F\u0648\u0645\u064F \u0628\u0650\u0631\u064E\u062D\u0652\u0645\u064E\u062A\u0650\u0643\u064E \u0623\u064E\u0633\u0652\u062A\u064E\u063A\u0650\u064A\u062B\u064F \u0623\u064E\u0635\u0652\u0644\u0650\u062D\u0652 \u0644\u0650\u064A \u0634\u064E\u0623\u0652\u0646\u0650\u064A \u0643\u064F\u0644\u0651\u064E\u0647\u064F \u0648\u064E\u0644\u064E\u0627 \u062A\u064E\u0643\u0650\u0644\u0652\u0646\u0650\u064A \u0625\u0650\u0644\u064E\u0649 \u0646\u064E\u0641\u0652\u0633\u0650\u064A \u0637\u064E\u0631\u0652\u0641\u064E\u0629\u064E \u0639\u064E\u064A\u0652\u0646\u064D ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](189, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](190, " Yaa Hayyu yaa Qayyoomu birahmatika 'astagheethu 'aslih lee sha'nee kullahu wa laa takilnee 'ilaa nafsee tarfata 'aynin. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](191, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](192, "********************");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](193, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](194, " O Ever Living One, O Eternal One, by Your mercy I call on You to set right all my affairs. Do not place me in charge of my soul even for the blinking of an eye ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](195, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](196, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](197, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](198, " \u0623\u064E\u0635\u0652\u0628\u064E\u062D\u0652\u0646\u064E\u0627 \u0639\u064E\u0644\u064E\u0649 \u0641\u0650\u0637\u0652\u0631\u064E\u0629\u0650 \u0627\u0644\u0652\u0625\u0650\u0633\u0652\u0644\u064E\u0627\u0645\u0650 \u0648\u064E\u0639\u064E\u0644\u064E\u0649 \u0643\u064E\u0644\u0650\u0645\u064E\u0629\u0650 \u0627\u0644\u0652\u0625\u0650\u062E\u0652\u0644\u064E\u0627\u0635\u0650\u060C \u0648\u064E\u0639\u064E\u0644\u064E\u0649 \u062F\u0650\u064A\u0646\u0650 \u0646\u064E\u0628\u0650\u064A\u0651\u0650\u0646\u064E\u0627 \u0645\u064F\u062D\u064E\u0645\u0651\u064E\u062F\u064D \u0635\u064E\u0644\u064E\u0649 \u0627\u0644\u0644\u0647\u064F \u0639\u064E\u0644\u0650\u064A\u0647\u0650 \u0648\u064E\u0633\u064E\u0644\u0651\u064E\u0645\u064E\u060C \u0648\u064E\u0639\u064E\u0644\u064E\u0649 \u0645\u0650\u0644\u0651\u064E\u0629\u0650 \u0623\u064E\u0628\u0650\u064A\u0646\u064E\u0627 \u0625\u0650\u0628\u0652\u0631\u064E\u0627\u0647\u0650\u064A\u0645\u064E\u060C \u062D\u064E\u0646\u0650\u064A\u0641\u064E\u0627\u064B \u0645\u064F\u0633\u0652\u0644\u0650\u0645\u0627\u064B \u0648\u064E\u0645\u064E\u0627 \u0643\u064E\u0627\u0646\u064E \u0645\u0650\u0646\u064E \u0627\u0644\u0652\u0645\u064F\u0634\u0652\u0631\u0650\u0643\u0650\u064A\u0646\u064E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](199, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](200, " Asbahnaa 'alaa fitratil-'Islaami wa 'alaa kalimatil-'ikhlaasi, wa 'alaa deeni Nabiyyinaa Muhammadin (sallallaahu 'alayhi wa sallama), wa 'alaa millati 'abeenaa 'Ibraaheema, haneefan Musliman wa maa kaana minal-mushrikeen. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](201, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](202, "********************");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](203, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](204, " We have entered a new day 1 upon the natural religion of Islam, the word of sincere devotion, the religion of our Prophet Muhammad (peace and blessings of Allah be upon him), and the faith of our father Ibrahim. He was upright (in worshipping Allah), and a Muslim. He was not of those who worship others besides Allah. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](205, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](206, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](207, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](208, " \u0633\u064F\u0628\u0652\u062D\u064E\u0627\u0646\u064E \u0627\u0644\u0644\u0647\u0650 \u0648\u064E\u0628\u0650\u062D\u064E\u0645\u0652\u062F\u0650\u0647\u0650 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](209, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](210, " Subhaanallaahi wa bihamdihi. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](211, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MorningComponent_Template_button_click_211_listener() { return ctx.clickM9(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](212);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](213, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](214, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](215, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](216, "********************");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](217, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](218, " Glory is to Allah and praise is to Him ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](219, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](220, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](221, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](222, " \u0644\u064E\u0627 \u0625\u0650\u0644\u0670\u0647\u064E \u0625\u0650\u0644\u0651\u064E\u0627 \u0627\u0644\u0644\u0647\u064F \u0648\u064E\u062D\u0652\u062F\u064E\u0647\u064F \u0644\u064E\u0627 \u0634\u064E\u0631\u0650\u064A\u0643\u064E \u0644\u064E\u0647\u064F\u060C \u0644\u064E\u0647\u064F \u0627\u0644\u0652\u0645\u064F\u0644\u0652\u0643\u064F \u0648\u064E\u0644\u064E\u0647\u064F \u0627\u0644\u0652\u062D\u064E\u0645\u0652\u062F\u064F\u060C \u0648\u064E\u0647\u064F\u0648\u064E \u0639\u064E\u0644\u064E\u0649 \u0643\u064F\u0644\u0651\u0650 \u0634\u064E\u064A\u0652\u0621\u064D \u0642\u064E\u062F\u0650\u064A\u0631\u064C ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](223, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](224, " Laa 'ilaaha 'illallaahu wahdahu laa shareeka lahu, lahul-mulku wa lahul-hamdu, wa Huwa 'alaa kulli shay'in Qadeer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](225, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MorningComponent_Template_button_click_225_listener() { return ctx.clickM10(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](226);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](227, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](228, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](229, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](230, "********************");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](231, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](232, " None has the right to be worshipped but Allah alone, Who has no partner. His is the dominion and His is the praise and He is Able to do all things ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](233, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](234, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](235, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](236, " \u0633\u064F\u0628\u0652\u062D\u064E\u0627\u0646\u064E \u0627\u0644\u0644\u0647\u0650 \u0648\u064E\u0628\u0650\u062D\u064E\u0645\u0652\u062F\u0650\u0647\u0650: \u0639\u064E\u062F\u064E\u062F\u064E \u062E\u064E\u0644\u0652\u0642\u0650\u0647\u0650\u060C \u0648\u064E\u0631\u0650\u0636\u064E\u0627 \u0646\u064E\u0641\u0652\u0633\u0650\u0647\u0650\u060C \u0648\u064E\u0632\u0650\u0646\u064E\u0629\u064E \u0639\u064E\u0631\u0652\u0634\u0650\u0647\u0650 \u0648\u064E\u0645\u0650\u062F\u064E\u0627\u062F\u064E \u0643\u064E\u0644\u0650\u0645\u064E\u0627\u062A\u0650\u0647\u0650 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](237, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](238, " Subhaanallaahi wa bihamdihi: 'Adada khalqihi, wa ridhaa nafsihi, wa zinata 'arshihi wa midaada kalimaatihi. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](239, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MorningComponent_Template_button_click_239_listener() { return ctx.clickM11(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](240);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](241, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](242, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](243, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](244, "********************");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](245, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](246, " Glory is to Allah and praise is to Him, by the multitude of His creation, by His Pleasure, by the weight of His Throne, and by the extent of His Words ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](247, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](248, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](249, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](250, " \u0627\u0644\u0644\u0651\u064E\u0647\u064F\u0645\u0651\u064E \u0625\u0646\u0651\u0650\u064A \u0623\u064E\u0633\u0652\u0623\u064E\u0644\u064F\u0643\u064E \u0639\u0650\u0644\u0652\u0645\u0627\u064B \u0646\u064E\u0627\u0641\u0650\u0639\u0627\u064B\u060C \u0648\u064E\u0631\u0650\u0632\u0642\u0627\u064B \u0637\u064E\u064A\u0651\u0650\u0628\u0627\u064B\u060C \u0648\u064E\u0639\u064E\u0645\u064E\u0644\u0627\u064B \u0645\u064F\u062A\u064E\u0642\u064E\u0628\u0651\u064E\u0644\u0627\u064B ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](251, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](252, " Allaahumma 'innee 'as'aluka 'ilman naafi'an, wa rizqan tayyiban, wa 'amalan mutaqabbalan. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](253, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](254, "********************");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](255, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](256, " O Allah, I ask You for knowledge that is of benefit , a good provision , and deeds that will be accepted ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](257, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](258, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](259, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](260, " \u0623\u064E\u0633\u0652\u062A\u064E\u063A\u0652\u0641\u0650\u0631\u064F \u0627\u0644\u0644\u0647\u064E \u0648\u064E\u0623\u064E\u062A\u064F\u0648\u0628\u064F \u0625\u0650\u0644\u064E\u064A\u0652\u0647\u0650 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](261, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](262, " Astaghfirullaaha wa 'atoobu 'ilayhi. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](263, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](264, "********************");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](265, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](266, " I seek the forgiveness of Allah and repent to Him. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](267, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](268, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](269, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](270, " \u0623\u064E\u0639\u064F\u0648\u0630\u064F \u0628\u0650\u0643\u064E\u0644\u0650\u0645\u064E\u0627\u062A\u0650 \u0627\u0644\u0644\u0647\u0650 \u0627\u0644\u062A\u0651\u064E\u0627\u0645\u0651\u064E\u0627\u062A\u0650 \u0645\u0650\u0646\u0652 \u0634\u064E\u0631\u0651\u0650 \u0645\u064E\u0627 \u062E\u064E\u0644\u064E\u0642\u064E ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](271, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](272, " A'oothu bikalimaatil-laahit-taammaati min sharri maa khalaqa. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](273, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MorningComponent_Template_button_click_273_listener() { return ctx.clickM12(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](274);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](275, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](276, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](277, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](278, "********************");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](279, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](280, " I seek refuge in the Perfect Words of Allah from the evil of what He has created ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](281, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](282, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](283, "h6", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](284, " \u0627\u0644\u0644\u0651\u064E\u0647\u064F\u0645\u0651\u064E \u0635\u064E\u0644\u0651\u0650 \u0648\u064E\u0633\u064E\u0644\u0651\u0650\u0645\u0652 \u0639\u064E\u0644\u064E\u0649 \u0646\u064E\u0628\u0650\u064A\u0651\u0650\u0646\u064E\u0627 \u0645\u064F\u062D\u064E\u0645\u0651\u064E\u062F\u064D ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](285, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](286, " Allahumma salli wa sallim 'alaa nabiyyinaa Muhammadin ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](287, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function MorningComponent_Template_button_click_287_listener() { return ctx.clickM13(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](288);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](289, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](290, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](291, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](292, "********************");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](293, "h6");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](294, " Oh Allah, we ask you for peace and blessings upon our prophet Muhammad ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](295, "hr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](296, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](297, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](298, "br");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.morningAMount, " (3)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.morningAMount2, " (3)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.morningAMount3, " (3)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.morningAMount4, " (4)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.morningAMount5, " (3)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.morningAMount6, " (7)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.morningAMount7, " (3)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.morningAMount8, " (3)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.morningAMount9, " (100)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.morningAMount10, " (10)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.morningAMount11, " (3)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](34);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.morningAMount12, " (3)");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.morningAMount13, " (10)");
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vcm5pbmcvbW9ybmluZy5jb21wb25lbnQuY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MorningComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-morning',
                templateUrl: './morning.component.html',
                styleUrls: ['./morning.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
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

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Munnim\Desktop\dua\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map