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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color='accent'>\n  <h3><a href=\"https://capstone.cs.gwu.edu/\">GW CS Senior Design</a> 2020</h3>\n</mat-toolbar>\n\n<mat-tab-group>\n\n  <mat-tab label=\"Overview\">\n    <mat-card>\n      <h1>Matthew Gilmore, Daniel Marley, Jonathan Minkin: Data Guardian</h1>\n      <h3> Project Overview </h3>\n      <p style='line-height: 24pt; margin: 15px;'>\n        When we interact with companies on the Internet, we often give companies our personal information. Usually, this involves agreeing to a company’s terms and conditions of data usage, which is often a long legal document that is difficult for the average person to understand. Furthermore, users are not able to see exactly how their data is used by a company. Our system aims to solve this problem by acting on the idea that users own their data, and should control how it is used. Our system provides users with a simple web interface for writing data usage policies in plain english.\n        <br>\n        <br>\n        In short, companies register with the Data Guardian of their choice, stating what data they will be requesting from users. Users then may create policy leases with these companies, stating how their specific data can be used and for how long. When companies agree to these policies, they report to the Data Guardian all future uses of this user’s data, and the Data Guardian makes this information publicly accessible. This last level of transparency allows users to review the data activities of companies and - if a violation of a policy or an unauthorized data transaction is logged - users can report it to the Data Guardian’s legal users for review.\n      </p>\n    </mat-card>\n  </mat-tab>\n\n  <mat-tab label=\"Group Members\">\n    <mat-card>\n      <h1>Group Members</h1>\n      <mat-card class='userl'>\n        <img class='profile' src=\"assets/matt.jpeg\">\n        <div>\n          <h1 style='margin-bottom: 0px;'> Matt Gilmore </h1>\n          <h4 style='margin-top: 0px;'>\n            <a href='mailto:mtgilmore@gwu.edu'>mtgilmore@gwu.edu</a>\n          </h4>\n          <p>\n            I'm 22 years old and from Boston. After graduation I'll be working for EY as a data analyst. I like to focus in data science and machine learning.\n            When not programming, I enjoy hiking, running, and cooking. Maybe I can start a business some day mixing all these interests.\n          </p>\n        </div>\n      </mat-card>\n\n      <mat-card class='userr'>\n        <img class='profile' src=\"assets/daniel.JPG\">\n        <div>\n          <h1 style='margin-bottom: 0px;'> Daniel Marley </h1>\n          <h4 style='margin-top: 0px;'>\n            <a href='mailto:danielmarley@gwu.edu'>danielmarley@gwu.edu</a>\n          </h4>\n          <p style='direction: ltr !important; text-align: right;'>\n            21 year old Philadelphia native, heading to work for Lockheed Martin Space post-graduation. Within the topic of Computer Science, I'm primarily interested in the topics of web development and machine learning/AI; outside of academics, my hobbies and passions include musical theater, politics, reading, and sustainability.\n            In terms of goals for the future, within the next 5 years I plan to get my Master's degree in CS and enter the rotational program for Lockheed. From there, who knows, lots to still learn and figure out.\n          </p>\n        </div>\n      </mat-card>\n\n      <mat-card class='userl'>\n        <img class='profile' src=\"assets/jon.jpeg\">\n        <div>\n          <h1 style='margin-bottom: 0px;'> Jonathan Minkin </h1>\n          <h4 style='margin-top: 0px;'>\n            <a href='mailto:minkinj@gwu.edu'>minkinj@gwu.edu</a>\n          </h4>\n          <p>\n            I'm 22 years old and from Boston. After graduation, I'll be working at Amazon Web Services in Seattle. Within computer science, my interests are distributed systems and cloud computing. Outside of computer science, I enjoy running and biking. In the future, I would like to join a product team at AWS so that I can work on cutting edge cloud technologies.\n          </p>\n        </div>\n      </mat-card>\n    </mat-card>\n   </mat-tab>\n\n  <mat-tab label=\"Screencast\">\n    <mat-card>\n      <h1>Project Screencast</h1>\n      <mat-card>\n        //TO DO\n        <video src=\"assets/demo.mp4\" controls>\n        </video>\n      </mat-card>\n    </mat-card>\n  </mat-tab>\n\n  <mat-tab label=\"Assignments\">\n    <mat-card id='assignments'>\n      <h1 style='grid-area: a;'> Assignment Links </h1>\n      <mat-card style='grid-area: b;'>\n        <h2> Fall 2019 </h2>\n        <mat-action-list>\n          <a href='https://docs.google.com/document/d/1_Tlf8M7_umfNpUvbM0IROpZnA3bj0WMLO6RrADKv1Us/edit?usp=sharing' target=\"_blank\">\n            <button mat-list-item>\n              Matthew Gilmore Writing 1 <mat-icon style='position: absolute; right: 15px;'>get_app</mat-icon>\n            </button>\n          </a>\n          <a href='https://drive.google.com/file/d/1cSbrGkc9wBwSR16uIVPp53P7RuE2SWTH/view?usp=sharing' target=\"_blank\">\n            <button mat-list-item>\n              Daniel Marley Writing 1 <mat-icon style='position: absolute; right: 15px;'>get_app</mat-icon>\n            </button>\n          </a>\n          <a href='https://docs.google.com/document/d/1UO0Xk2WPcX31aB0nLpls9HHlkU6ZsiidrdlPE2RHNck/edit?usp=sharing' target=\"_blank\">\n            <button mat-list-item>\n              Jonathan Minkin Writing 1 <mat-icon style='position: absolute; right: 15px;'>get_app</mat-icon>\n            </button>\n          </a>\n          <a href='https://drive.google.com/file/d/1V6zHA97F_fYuJpp9NTj1mnaViXFlaM2I/view?usp=sharing' target=\"_blank\">\n            <button mat-list-item>\n              Writing 2 <mat-icon style='position: absolute; right: 15px;'>get_app</mat-icon>\n            </button>\n          </a>\n          <a href='https://drive.google.com/file/d/1SwFkjqJCjrx8m136MDreGNadfk5iW9qa/view?usp=sharing' target=\"_blank\">\n            <button mat-list-item>\n              Writing 3 <mat-icon style='position: absolute; right: 15px;'>get_app</mat-icon>\n            </button>\n          </a>\n        </mat-action-list>\n      </mat-card>\n\n      <mat-card style='grid-area: c;'>\n        <h2> Spring 2020 </h2>\n        <mat-action-list>\n          <a href='https://drive.google.com/file/d/18bOlsyR4CaF_PIi7uPheBs_rWYUdQNjo/view?usp=sharing' target=\"_blank\">\n            <button mat-list-item>\n              Writing 3 Revised <mat-icon style='position: absolute; right: 15px;'>get_app</mat-icon>\n            </button>\n          </a>\n          <a href='https://docs.google.com/document/d/1kFgO5ynWXkYa5UE-bvQKGSkRjuQaxGSX7nOKCZ5Xffk/edit?usp=sharing' target=\"_blank\">\n            <button mat-list-item>\n              The Final Report<mat-icon style='position: absolute; right: 15px;'>get_app</mat-icon>\n            </button>\n          </a>\n        </mat-action-list>\n      </mat-card>\n    </mat-card>\n  </mat-tab>\n</mat-tab-group>\n"

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-toolbar{\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0px;\n  z-index: 2;\n}\n\n#tool-logo{\n  margin-right: 10px;\n}\n\n.userl{\n  display: grid;\n  direction: ltr;\n  grid-template: \"a b\" 1fr / 400px 1fr;\n}\n\n.userr{\n  display: grid;\n  direction: rtl;\n  grid-template: \"a b\" 1fr / 400px 1fr;\n}\n\n.profile{\n  margin-left: 50px;\n  margin-right: 50px;\n  height: 300px;\n  width: 300px;\n  border-radius: 150px;\n  display: inline;\n}\n\na{\n  color: rgb(40, 40, 40);\n}\n\na:visited{\n  color: rgb(40, 40, 40);\n}\n\nvideo{\n  height: 500px;\n  display: flex;\n  margin: auto auto;\n}\n\n#assignments{\n  max-width: 100%;\n  display: grid;\n  grid-template: \"a a\" 1fr\n                 \"b c\"/ 50% 50%;\n}\n\n#assignments>mat-card{\n  margin-left: 15px;\n  margin-right: 15px;\n  max-width: 100%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx3QkFBZ0I7RUFBaEIsZ0JBQWdCO0VBQ2hCLFFBQVE7RUFDUixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGFBQWE7RUFDYixjQUFjO0VBQ2Qsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGtCQUFrQjtFQUNsQixhQUFhO0VBQ2IsWUFBWTtFQUNaLG9CQUFvQjtFQUNwQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsYUFBYTtFQUNiOytCQUM2QjtBQUMvQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LXRvb2xiYXJ7XG4gIHBvc2l0aW9uOiBzdGlja3k7XG4gIHRvcDogMHB4O1xuICB6LWluZGV4OiAyO1xufVxuXG4jdG9vbC1sb2dve1xuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi51c2VybHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZGlyZWN0aW9uOiBsdHI7XG4gIGdyaWQtdGVtcGxhdGU6IFwiYSBiXCIgMWZyIC8gNDAwcHggMWZyO1xufVxuXG4udXNlcnJ7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGRpcmVjdGlvbjogcnRsO1xuICBncmlkLXRlbXBsYXRlOiBcImEgYlwiIDFmciAvIDQwMHB4IDFmcjtcbn1cblxuLnByb2ZpbGV7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICBtYXJnaW4tcmlnaHQ6IDUwcHg7XG4gIGhlaWdodDogMzAwcHg7XG4gIHdpZHRoOiAzMDBweDtcbiAgYm9yZGVyLXJhZGl1czogMTUwcHg7XG4gIGRpc3BsYXk6IGlubGluZTtcbn1cblxuYXtcbiAgY29sb3I6IHJnYig0MCwgNDAsIDQwKTtcbn1cbmE6dmlzaXRlZHtcbiAgY29sb3I6IHJnYig0MCwgNDAsIDQwKTtcbn1cblxudmlkZW97XG4gIGhlaWdodDogNTAwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogYXV0byBhdXRvO1xufVxuXG4jYXNzaWdubWVudHN7XG4gIG1heC13aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZTogXCJhIGFcIiAxZnJcbiAgICAgICAgICAgICAgICAgXCJiIGNcIi8gNTAlIDUwJTtcbn1cblxuI2Fzc2lnbm1lbnRzPm1hdC1jYXJke1xuICBtYXJnaW4tbGVmdDogMTVweDtcbiAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xuICBtYXgtd2lkdGg6IDEwMCU7XG59XG4iXX0= */"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'proj-webpage';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm2015/toolbar.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm2015/card.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/esm2015/divider.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm2015/list.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm2015/tabs.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");











let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
            _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
            _angular_material_divider__WEBPACK_IMPORTED_MODULE_5__["MatDividerModule"],
            _angular_material_list__WEBPACK_IMPORTED_MODULE_6__["MatListModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"]
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
    })
], AppModule);



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/Daniel/Desktop/sd-20-gilmore-marley-minkin-page/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map