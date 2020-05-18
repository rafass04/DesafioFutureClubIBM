(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<main>\n  <router-outlet></router-outlet>\n</main>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html ***!
  \***************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n  <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n  <form (submit)=\"onLogin(loginForm)\" #loginForm=\"ngForm\" *ngIf=\"!isLoading\">\n    <mat-form-field>\n      <input matInput name=\"email\" ngModel type=\"email\" placeholder=\"E-Mail\" #emailInput=\"ngModel\" required email>\n      <mat-error *ngIf=\"emailInput.invalid\">Please enter a valid email.</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n      <input type=\"password\" name=\"password\" ngModel matInput placeholder=\"Password\" #passwordInput=\"ngModel\" required>\n      <mat-error *ngIf=\"passwordInput.invalid\">Please enter a valid password.</mat-error>\n    </mat-form-field>\n    <button class=\"button\" type=\"submit\" *ngIf=\"!isLoading\">Login</button>\n  </form>\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html":
/*!*****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card>\n  <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n  <form (submit)=\"onSignup(signupForm)\" #signupForm=\"ngForm\" *ngIf=\"!isLoading\">\n    <mat-form-field>\n      <input matInput name=\"email\" ngModel type=\"email\" placeholder=\"E-Mail\" #emailInput=\"ngModel\" required email>\n      <mat-error *ngIf=\"emailInput.invalid\">Please enter a valid email.</mat-error>\n    </mat-form-field>\n    <mat-form-field>\n      <input type=\"password\" name=\"password\" ngModel matInput placeholder=\"Password\" #passwordInput=\"ngModel\" required>\n      <mat-error *ngIf=\"passwordInput.invalid\">Please enter a valid password.</mat-error>\n    </mat-form-field>\n    <button class=\"button\" type=\"submit\" *ngIf=\"!isLoading\">SignUp</button>\n  </form>\n</mat-card>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-toolbar color=\"primary\">\n  <img src=\"assets/oie_transparent.png\" alt=\"Logo aqui\" height=\"80px\">\n  <span class=\"spacer\"></span>\n  <ul>\n    <li>\n      <a mat-button color=\"warn\" routerLink=\"/create\" routerLinkActive=\"mat-accent\">Now</a>\n    </li>\n    <li *ngIf=\"!userIsAuthenticated\">\n      <a mat-button color=\"warn\" routerLink=\"/login\" routerLinkActive=\"mat-accent\">Login</a>\n    </li>\n    <li *ngIf=\"!userIsAuthenticated\">\n      <a mat-button color=\"warn\" routerLink=\"/signup\" routerLinkActive=\"mat-accent\">SignUp</a>\n    </li>\n    <li *ngIf=\"userIsAuthenticated\">\n      <button mat-button color=\"warn\" (click)=\"onLogout()\">Logout</button>\n    </li>\n  </ul>\n</mat-toolbar>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/post-create/post-create.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/posts/post-create/post-create.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <mat-card>\n  <mat-spinner *ngIf=\"isLoading\"></mat-spinner>\n  <form [formGroup]=\"form\" (submit)=\"onSavePost()\" *ngIf=\"!isLoading\">\n    <mat-form-field>\n      <input matInput type=\"text\" formControlName=\"title\" placeholder=\"Post Title\">\n      <mat-error *ngIf=\"form.get('title').invalid\">Please enter a post title.</mat-error>\n    </mat-form-field>\n    <div>\n      <button mat-stroked-button type=\"button\" (click)=\"filePicker.click()\">Pick Image</button>\n      <input type=\"file\" #filePicker (change)=\"onImagePicked($event)\">\n    </div>\n    <div class=\"image-preview\" *ngIf=\"imagePreview !== '' && imagePreview && form.get('image').valid\">\n      <img [src]=\"imagePreview\" [alt]=\"form.value.title\">\n    </div>\n    <mat-form-field>\n      <textarea matInput rows=\"4\" formControlName=\"content\" placeholder=\"Post Content\"></textarea>\n      <mat-error *ngIf=\"form.get('content').invalid\">Please enter a post title.</mat-error>\n    </mat-form-field>\n    <button mat-raised-button color=\"accent\" type=\"submit\">Save Post</button>\n  </form>\n</mat-card> -->\n<!-- <div class=\"side\">\n  <iframe src=\"https://open.spotify.com/embed/playlist/4bMgSquYGXoVhY4YZaDdaZ\" width=\"300\" height=\"900\"\n  frameborder=\"0\" allowtransparency=\"true\" allow=\"encrypted-media\"></iframe>\n</div> -->\n\n<!-- -------------- -->\n\n\n\n\n<div class=\"container\">\n  <div class=\"card\">\n    <h3 class=\"title\">Card 1</h3>\n    <div class=\"bar\">\n      <div class=\"emptybar\"></div>\n      <div class=\"filledbar\"></div>\n    </div>\n    <div class=\"circle\">\n      <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n      <circle class=\"stroke\" cx=\"60\" cy=\"60\" r=\"50\"/>\n    </svg>\n    </div>\n  </div>\n  <div class=\"card\">\n    <h3 class=\"title\">Card 2</h3>\n    <div class=\"bar\">\n      <div class=\"emptybar\"></div>\n      <div class=\"filledbar\"></div>\n    </div>\n    <div class=\"circle\">\n      <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n      <circle class=\"stroke\" cx=\"60\" cy=\"60\" r=\"50\"/>\n    </svg>\n    </div>\n  </div>\n  <div class=\"card\">\n    <h3 class=\"title\">Card 3</h3>\n    <div class=\"bar\">\n      <div class=\"emptybar\"></div>\n      <div class=\"filledbar\"></div>\n    </div>\n    <div class=\"circle\">\n      <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n      <circle class=\"stroke\" cx=\"60\" cy=\"60\" r=\"50\"/>\n    </svg>\n    </div>\n  </div>\n  <div class=\"card\">\n    <h3 class=\"title\">Card 4</h3>\n    <div class=\"bar\">\n      <div class=\"emptybar\"></div>\n      <div class=\"filledbar\"></div>\n    </div>\n    <div class=\"circle\">\n      <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n      <circle class=\"stroke\" cx=\"60\" cy=\"60\" r=\"50\"/>\n    </svg>\n    </div>\n  </div>\n  <div class=\"card\">\n    <h3 class=\"title\">Card 5</h3>\n    <div class=\"bar\">\n      <div class=\"emptybar\"></div>\n      <div class=\"filledbar\"></div>\n    </div>\n    <div class=\"circle\">\n      <svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\">\n      <circle class=\"stroke\" cx=\"60\" cy=\"60\" r=\"50\"/>\n    </svg>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/post-list/post-list.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/posts/post-list/post-list.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-spinner color=\"warn\" *ngIf=\"isLoading\"></mat-spinner>\n<div class=\"area\">  \n  <div class=\"content\">\n    <div class=\"area2\">  \n      <div class=\"content2\">\n        <button type=\"button\" class=\"button\" (click)=\"setSearchWord('covid19')\"><b>Covid-19</b></button>\n        <button type=\"button\" class=\"button\" (click)=\"setSearchWord('business')\"><b>Business</b></button>\n        <button type=\"button\" class=\"button\" (click)=\"setSearchWord('sports')\"><b>Sports</b></button>\n        <button type=\"button\" class=\"button\" (click)=\"setSearchWord('tech')\"><b>Tech</b></button>\n        <button type=\"button\" class=\"button\" (click)=\"setSearchWord('politics')\"><b>Politics</b></button>\n        <button type=\"button\" class=\"button\" (click)=\"setSearchWord('entertainment')\"><b>Entertainment</b></button>\n      </div>\n      <div class=\"side2\">\n        <input matInput type=\"text\" [(ngModel)]=\"searchword\" (keydown)=\"onKeyDown($event)\">\n        <button class=\"button\" (click)=\"setSearchWord(searchword)\"><i class=\"fa fa-search\"></i></button>\n      </div>\n    </div>\n    <br>\n    <mat-accordion multi=\"true\" *ngIf=\"posts.length > 0 && !isLoading\">\n      <mat-expansion-panel *ngFor=\"let post of posts\">\n        <mat-expansion-panel-header>\n          <b>{{ post.title }}</b>\n        </mat-expansion-panel-header>\n        <p>{{ post.content }}</p>\n        <b>Authors: {{ post.authors }}<br>\n        Date: 2004-2005</b>\n      </mat-expansion-panel>\n    </mat-accordion>\n  </div>\n  <div class=\"side\">\n    <iframe src=\"https://open.spotify.com/embed-podcast/show/4lUqFpahx5eB6zuJLKIaJD\" width=\"300\" height=\"300\"\n    frameborder=\"0\" allowtransparency=\"true\" allow=\"encrypted-media\"></iframe>\n    <div class=\"area3\">  \n      <div class=\"content3\">\n        <b>English:</b>\n        <img src=\"assets/TheWIREDUK.png\" alt=\"Logo aqui\" height=\"150px\"><br>\n      </div>\n      <div class=\"side3\">\n        <b>Portuguese:</b>\n        <img src=\"assets/sobretudo.png\" alt=\"Logo aqui\" height=\"150px\">\n      </div>\n    </div>\n  </div>\n</div>");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./posts/post-list/post-list.component */ "./src/app/posts/post-list/post-list.component.ts");
/* harmony import */ var _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./posts/post-create/post-create.component */ "./src/app/posts/post-create/post-create.component.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth/auth.guard */ "./src/app/auth/auth.guard.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var routes = [
    { path: "", component: _posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_2__["PostListComponent"] },
    { path: "create", component: _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_3__["PostCreateComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: "edit/:postId", component: _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_3__["PostCreateComponent"], canActivate: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: "login", component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: "signup", component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
            providers: [_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("main {\n  width: 80%;\n  margin: 1rem auto;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0FBQ25CIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYWluIHtcbiAgd2lkdGg6IDgwJTtcbiAgbWFyZ2luOiAxcmVtIGF1dG87XG59Il19 */");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var AppComponent = /** @class */ (function () {
    function AppComponent(authService) {
        this.authService = authService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.authService.autoAuthUser();
    };
    AppComponent.ctorParameters = function () { return [
        { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }
    ]; };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/input.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/card.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/button.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/toolbar.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/expansion.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/progress-spinner.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/paginator.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./posts/post-create/post-create.component */ "./src/app/posts/post-create/post-create.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./posts/post-list/post-list.component */ "./src/app/posts/post-list/post-list.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./auth/login/login.component */ "./src/app/auth/login/login.component.ts");
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./auth/signup/signup.component */ "./src/app/auth/signup/signup.component.ts");
/* harmony import */ var _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./auth/auth-interceptor */ "./src/app/auth/auth-interceptor.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"],
                _posts_post_create_post_create_component__WEBPACK_IMPORTED_MODULE_13__["PostCreateComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
                _posts_post_list_post_list_component__WEBPACK_IMPORTED_MODULE_15__["PostListComponent"],
                _auth_login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"],
                _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_18__["SignupComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_16__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_1__["BrowserAnimationsModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_9__["MatExpansionModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_10__["MatProgressSpinnerModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"]
            ],
            providers: [
                { provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HTTP_INTERCEPTORS"], useClass: _auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_19__["AuthInterceptor"], multi: true }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_12__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth/auth-interceptor.ts":
/*!******************************************!*\
  !*** ./src/app/auth/auth-interceptor.ts ***!
  \******************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthInterceptor = /** @class */ (function () {
    function AuthInterceptor(authService) {
        this.authService = authService;
    }
    AuthInterceptor.prototype.intercept = function (req, next) {
        var authToken = this.authService.getToken();
        var authRequest = req.clone({
            headers: req.headers.set("Authorization", "Bearer " + authToken)
        });
        return next.handle(authRequest);
    };
    AuthInterceptor.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }
    ]; };
    AuthInterceptor = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], AuthInterceptor);
    return AuthInterceptor;
}());



/***/ }),

/***/ "./src/app/auth/auth.guard.ts":
/*!************************************!*\
  !*** ./src/app/auth/auth.guard.ts ***!
  \************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = /** @class */ (function () {
    function AuthGuard(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function (route, state) {
        var isAuth = this.authService.getIsAuth();
        if (!isAuth) {
            this.router.navigate(['/login']);
        }
        return isAuth;
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"] }
    ]; };
    AuthGuard = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"], _angular_router__WEBPACK_IMPORTED_MODULE_0__["Router"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/auth/auth.service.ts":
/*!**************************************!*\
  !*** ./src/app/auth/auth.service.ts ***!
  \**************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
        this.isAuthenticated = false;
        this.authStatusListener = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    AuthService.prototype.getToken = function () {
        return this.token;
    };
    AuthService.prototype.getIsAuth = function () {
        return this.isAuthenticated;
    };
    AuthService.prototype.getAuthStatusListener = function () {
        return this.authStatusListener.asObservable();
    };
    AuthService.prototype.createUser = function (email, password) {
        var authData = { email: email, password: password };
        this.http
            .post("http://localhost:3000/api/user/signup", authData)
            .subscribe(function (response) {
            console.log(response);
        });
    };
    AuthService.prototype.login = function (email, password) {
        var _this = this;
        var authData = { email: email, password: password };
        this.http
            .post("http://localhost:3000/api/user/login", authData)
            .subscribe(function (response) {
            var token = response.token;
            _this.token = token;
            if (token) {
                var expiresInDuration = response.expiresIn;
                _this.setAuthTimer(expiresInDuration);
                _this.isAuthenticated = true;
                _this.authStatusListener.next(true);
                var now = new Date();
                var expirationDate = new Date(now.getTime() + expiresInDuration * 1000);
                console.log(expirationDate);
                _this.saveAuthData(token, expirationDate);
                _this.router.navigate(["/"]);
            }
        });
    };
    AuthService.prototype.autoAuthUser = function () {
        var authInformation = this.getAuthData();
        if (!authInformation) {
            return;
        }
        var now = new Date();
        var expiresIn = authInformation.expirationDate.getTime() - now.getTime();
        if (expiresIn > 0) {
            this.token = authInformation.token;
            this.isAuthenticated = true;
            this.setAuthTimer(expiresIn / 1000);
            this.authStatusListener.next(true);
        }
    };
    AuthService.prototype.logout = function () {
        this.token = null;
        this.isAuthenticated = false;
        this.authStatusListener.next(false);
        clearTimeout(this.tokenTimer);
        this.clearAuthData();
        this.router.navigate(["/"]);
    };
    AuthService.prototype.setAuthTimer = function (duration) {
        var _this = this;
        console.log("Setting timer: " + duration);
        this.tokenTimer = setTimeout(function () {
            _this.logout();
        }, duration * 1000);
    };
    AuthService.prototype.saveAuthData = function (token, expirationDate) {
        localStorage.setItem("token", token);
        localStorage.setItem("expiration", expirationDate.toISOString());
    };
    AuthService.prototype.clearAuthData = function () {
        localStorage.removeItem("token");
        localStorage.removeItem("expiration");
    };
    AuthService.prototype.getAuthData = function () {
        var token = localStorage.getItem("token");
        var expirationDate = localStorage.getItem("expiration");
        if (!token || !expirationDate) {
            return;
        }
        return {
            token: token,
            expirationDate: new Date(expirationDate)
        };
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
    ]; };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: "root" }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/auth/login/login.component.css":
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-form-field {\n  width: 100%;\n}\n\nmat-spinner {\n  margin: auto;\n}\n\n.button {\n  background-color:transparent;\n  border-radius: 4px;\n  text-align: center;\n  display: inline-block;\n  cursor: pointer; \n  border: 2px solid #970000;\n  margin: 0px 2px;\n  color: #970000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGNBQWM7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9hdXRoL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtZm9ybS1maWVsZCB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5tYXQtc3Bpbm5lciB7XG4gIG1hcmdpbjogYXV0bztcbn1cblxuLmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjsgXG4gIGJvcmRlcjogMnB4IHNvbGlkICM5NzAwMDA7XG4gIG1hcmdpbjogMHB4IDJweDtcbiAgY29sb3I6ICM5NzAwMDA7XG59Il19 */");

/***/ }),

/***/ "./src/app/auth/login/login.component.ts":
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var LoginComponent = /** @class */ (function () {
    function LoginComponent(authService) {
        this.authService = authService;
        this.isLoading = false;
    }
    LoginComponent.prototype.onLogin = function (form) {
        if (form.invalid) {
            return;
        }
        this.isLoading = true;
        this.authService.login(form.value.email, form.value.password);
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }
    ]; };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __importDefault(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/login/login.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./login.component.css */ "./src/app/auth/login/login.component.css")).default]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/auth/signup/signup.component.css":
/*!**************************************************!*\
  !*** ./src/app/auth/signup/signup.component.css ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-form-field {\n  width: 100%;\n}\n\nmat-spinner {\n  margin: auto;\n}\n\n.button {\n  background-color:transparent;\n  border-radius: 4px;\n  text-align: center;\n  display: inline-block;\n  cursor: pointer; \n  border: 2px solid #970000;\n  margin: 0px 2px;\n  color: #970000;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aC9zaWdudXAvc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixxQkFBcUI7RUFDckIsZUFBZTtFQUNmLHlCQUF5QjtFQUN6QixlQUFlO0VBQ2YsY0FBYztBQUNoQiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cblxubWF0LXNwaW5uZXIge1xuICBtYXJnaW46IGF1dG87XG59XG5cbi5idXR0b24ge1xuICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBjdXJzb3I6IHBvaW50ZXI7IFxuICBib3JkZXI6IDJweCBzb2xpZCAjOTcwMDAwO1xuICBtYXJnaW46IDBweCAycHg7XG4gIGNvbG9yOiAjOTcwMDAwO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/auth/signup/signup.component.ts":
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var SignupComponent = /** @class */ (function () {
    function SignupComponent(authService) {
        this.authService = authService;
        this.isLoading = false;
    }
    SignupComponent.prototype.onSignup = function (form) {
        if (form.invalid) {
            return;
        }
        this.isLoading = true;
        this.authService.createUser(form.value.email, form.value.password);
    };
    SignupComponent.ctorParameters = function () { return [
        { type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }
    ]; };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            template: __importDefault(__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/auth/signup/signup.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./signup.component.css */ "./src/app/auth/signup/signup.component.css")).default]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ul {\n  list-style: none;\n  padding: 0;\n  margin: 0;\n}\n\na {\n  text-decoration: none;\n  color: white;\n\n}\n\nul {\n  display: flex;\n}\n\n.spacer {\n  flex: 1 1 auto;\n}\n\n.mat-toolbar.mat-primary {\n  background: #000000;\n  color: #fff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsWUFBWTs7QUFFZDs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxtQkFBbUI7RUFDbkIsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsidWwge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBwYWRkaW5nOiAwO1xuICBtYXJnaW46IDA7XG59XG5cbmEge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGNvbG9yOiB3aGl0ZTtcblxufVxuXG51bCB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5zcGFjZXIge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cblxuLm1hdC10b29sYmFyLm1hdC1wcmltYXJ5IHtcbiAgYmFja2dyb3VuZDogIzAwMDAwMDtcbiAgY29sb3I6ICNmZmY7XG59XG4iXX0= */");

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(authService) {
        this.authService = authService;
        this.userIsAuthenticated = false;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.userIsAuthenticated = this.authService.getIsAuth();
        this.authListenerSubs = this.authService
            .getAuthStatusListener()
            .subscribe(function (isAuthenticated) {
            _this.userIsAuthenticated = isAuthenticated;
        });
    };
    HeaderComponent.prototype.onLogout = function () {
        this.authService.logout();
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        this.authListenerSubs.unsubscribe();
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }
    ]; };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-header",
            template: __importDefault(__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")).default]
        }),
        __metadata("design:paramtypes", [_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/posts/post-create/mime-type.validator.ts":
/*!**********************************************************!*\
  !*** ./src/app/posts/post-create/mime-type.validator.ts ***!
  \**********************************************************/
/*! exports provided: mimeType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mimeType", function() { return mimeType; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");

var mimeType = function (control) {
    if (typeof (control.value) === 'string') {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(null);
    }
    var file = control.value;
    var fileReader = new FileReader();
    var frObs = rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].create(function (observer) {
        fileReader.addEventListener("loadend", function () {
            var arr = new Uint8Array(fileReader.result).subarray(0, 4);
            var header = "";
            var isValid = false;
            for (var i = 0; i < arr.length; i++) {
                header += arr[i].toString(16);
            }
            switch (header) {
                case "89504e47":
                    isValid = true;
                    break;
                case "ffd8ffe0":
                case "ffd8ffe1":
                case "ffd8ffe2":
                case "ffd8ffe3":
                case "ffd8ffe8":
                    isValid = true;
                    break;
                default:
                    isValid = false; // Or you can use the blob.type as fallback
                    break;
            }
            if (isValid) {
                observer.next(null);
            }
            else {
                observer.next({ invalidMimeType: true });
            }
            observer.complete();
        });
        fileReader.readAsArrayBuffer(file);
    });
    return frObs;
};


/***/ }),

/***/ "./src/app/posts/post-create/post-create.component.css":
/*!*************************************************************!*\
  !*** ./src/app/posts/post-create/post-create.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("mat-form-field,\ntextarea {\n  width: 100%;\n}\n\nmat-spinner {\n  margin: auto;\n  color: #970000;\n}\n\ninput[type=\"file\"] {\n  visibility: hidden;\n}\n\n.image-preview {\n  height: 5rem;\n  margin: 1rem 0;\n}\n\n.image-preview img {\n  height: 100%;\n}\n\n/* ---- */\n\nbody {\n  background-color: #100e17;\n  font-family: 'Open Sans', sans-serif;\n}\n\n.container {\n  position: absolute;\n  height: 300px;\n  width: 600px;\n  top: 200px;\n  left: calc(50% - 300px);\n  display: flex;\n}\n\n.card {\n  display: flex;\n  height: 280px;\n  width: 200px;\n  background-color: #17141d;\n  border-radius: 10px;\n  box-shadow: -1rem 0 3rem #000;\n/*   margin-left: -50px; */\n  transition: 0.4s ease-out;\n  position: relative;\n  left: 0px;\n}\n\n.card:not(:first-child) {\n    margin-left: -50px;\n}\n\n.card:hover {\n  transform: translateY(-20px);\n  transition: 0.4s ease-out;\n}\n\n.card:hover ~ .card {\n  position: relative;\n  left: 50px;\n  transition: 0.4s ease-out;\n}\n\n.title {\n  color: white;\n  font-weight: 300;\n  position: absolute;\n  left: 20px;\n  top: 15px;\n}\n\n.bar {\n  position: absolute;\n  top: 100px;\n  left: 20px;\n  height: 5px;\n  width: 150px;\n}\n\n.emptybar {\n  background-color: #2e3033;\n  width: 100%;\n  height: 100%;\n}\n\n.filledbar {\n  position: absolute;\n  top: 0px;\n  z-index: 3;\n  width: 0px;\n  height: 100%;\n  background: rgb(0,154,217);\n  background: linear-gradient(90deg, rgba(0,154,217,1) 0%, rgba(217,147,0,1) 65%, rgba(255,186,0,1) 100%);\n  transition: 0.6s ease-out;\n}\n\n.card:hover .filledbar {\n  width: 120px;\n  transition: 0.4s ease-out;\n}\n\n.circle {\n  position: absolute;\n  top: 150px;\n  left: calc(50% - 60px);\n}\n\n.stroke {\n  stroke: white;\n  stroke-dasharray: 360;\n  stroke-dashoffset: 360;\n  transition: 0.6s ease-out;\n}\n\nsvg {\n  fill: #17141d;\n  stroke-width: 2px;\n}\n\n.card:hover .stroke {\n  stroke-dashoffset: 100;\n  transition: 0.6s ease-out;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdHMvcG9zdC1jcmVhdGUvcG9zdC1jcmVhdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7RUFFRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osY0FBYztBQUNoQjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUNBLFNBQVM7O0FBRVQ7RUFDRSx5QkFBeUI7RUFDekIsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixZQUFZO0VBQ1osVUFBVTtFQUNWLHVCQUF1QjtFQUN2QixhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsYUFBYTtFQUNiLFlBQVk7RUFDWix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLDZCQUE2QjtBQUMvQiwwQkFBMEI7RUFDeEIseUJBQXlCO0VBQ3pCLGtCQUFrQjtFQUNsQixTQUFTO0FBQ1g7O0FBRUE7SUFDSSxrQkFBa0I7QUFDdEI7O0FBRUE7RUFDRSw0QkFBNEI7RUFDNUIseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixVQUFVO0VBQ1YsV0FBVztFQUNYLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHlCQUF5QjtFQUN6QixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixVQUFVO0VBQ1YsVUFBVTtFQUNWLFlBQVk7RUFDWiwwQkFBMEI7RUFDMUIsdUdBQXVHO0VBQ3ZHLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFlBQVk7RUFDWix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7QUFDbkI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIseUJBQXlCO0FBQzNCIiwiZmlsZSI6InNyYy9hcHAvcG9zdHMvcG9zdC1jcmVhdGUvcG9zdC1jcmVhdGUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1mb3JtLWZpZWxkLFxudGV4dGFyZWEge1xuICB3aWR0aDogMTAwJTtcbn1cblxubWF0LXNwaW5uZXIge1xuICBtYXJnaW46IGF1dG87XG4gIGNvbG9yOiAjOTcwMDAwO1xufVxuXG5pbnB1dFt0eXBlPVwiZmlsZVwiXSB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbn1cblxuLmltYWdlLXByZXZpZXcge1xuICBoZWlnaHQ6IDVyZW07XG4gIG1hcmdpbjogMXJlbSAwO1xufVxuXG4uaW1hZ2UtcHJldmlldyBpbWcge1xuICBoZWlnaHQ6IDEwMCU7XG59XG4vKiAtLS0tICovXG5cbmJvZHkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTAwZTE3O1xuICBmb250LWZhbWlseTogJ09wZW4gU2FucycsIHNhbnMtc2VyaWY7XG59XG5cbi5jb250YWluZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGhlaWdodDogMzAwcHg7XG4gIHdpZHRoOiA2MDBweDtcbiAgdG9wOiAyMDBweDtcbiAgbGVmdDogY2FsYyg1MCUgLSAzMDBweCk7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5cbi5jYXJkIHtcbiAgZGlzcGxheTogZmxleDtcbiAgaGVpZ2h0OiAyODBweDtcbiAgd2lkdGg6IDIwMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTcxNDFkO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBib3gtc2hhZG93OiAtMXJlbSAwIDNyZW0gIzAwMDtcbi8qICAgbWFyZ2luLWxlZnQ6IC01MHB4OyAqL1xuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2Utb3V0O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGxlZnQ6IDBweDtcbn1cblxuLmNhcmQ6bm90KDpmaXJzdC1jaGlsZCkge1xuICAgIG1hcmdpbi1sZWZ0OiAtNTBweDtcbn1cblxuLmNhcmQ6aG92ZXIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTIwcHgpO1xuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2Utb3V0O1xufVxuXG4uY2FyZDpob3ZlciB+IC5jYXJkIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBsZWZ0OiA1MHB4O1xuICB0cmFuc2l0aW9uOiAwLjRzIGVhc2Utb3V0O1xufVxuXG4udGl0bGUge1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgbGVmdDogMjBweDtcbiAgdG9wOiAxNXB4O1xufVxuXG4uYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDEwMHB4O1xuICBsZWZ0OiAyMHB4O1xuICBoZWlnaHQ6IDVweDtcbiAgd2lkdGg6IDE1MHB4O1xufVxuXG4uZW1wdHliYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmUzMDMzO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uZmlsbGVkYmFyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDBweDtcbiAgei1pbmRleDogMztcbiAgd2lkdGg6IDBweDtcbiAgaGVpZ2h0OiAxMDAlO1xuICBiYWNrZ3JvdW5kOiByZ2IoMCwxNTQsMjE3KTtcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KDkwZGVnLCByZ2JhKDAsMTU0LDIxNywxKSAwJSwgcmdiYSgyMTcsMTQ3LDAsMSkgNjUlLCByZ2JhKDI1NSwxODYsMCwxKSAxMDAlKTtcbiAgdHJhbnNpdGlvbjogMC42cyBlYXNlLW91dDtcbn1cblxuLmNhcmQ6aG92ZXIgLmZpbGxlZGJhciB7XG4gIHdpZHRoOiAxMjBweDtcbiAgdHJhbnNpdGlvbjogMC40cyBlYXNlLW91dDtcbn1cblxuLmNpcmNsZSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAxNTBweDtcbiAgbGVmdDogY2FsYyg1MCUgLSA2MHB4KTtcbn1cblxuLnN0cm9rZSB7XG4gIHN0cm9rZTogd2hpdGU7XG4gIHN0cm9rZS1kYXNoYXJyYXk6IDM2MDtcbiAgc3Ryb2tlLWRhc2hvZmZzZXQ6IDM2MDtcbiAgdHJhbnNpdGlvbjogMC42cyBlYXNlLW91dDtcbn1cblxuc3ZnIHtcbiAgZmlsbDogIzE3MTQxZDtcbiAgc3Ryb2tlLXdpZHRoOiAycHg7XG59XG5cbi5jYXJkOmhvdmVyIC5zdHJva2Uge1xuICBzdHJva2UtZGFzaG9mZnNldDogMTAwO1xuICB0cmFuc2l0aW9uOiAwLjZzIGVhc2Utb3V0O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/posts/post-create/post-create.component.ts":
/*!************************************************************!*\
  !*** ./src/app/posts/post-create/post-create.component.ts ***!
  \************************************************************/
/*! exports provided: PostCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostCreateComponent", function() { return PostCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _posts_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../posts.service */ "./src/app/posts/posts.service.ts");
/* harmony import */ var _mime_type_validator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./mime-type.validator */ "./src/app/posts/post-create/mime-type.validator.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var PostCreateComponent = /** @class */ (function () {
    function PostCreateComponent(postsService, route) {
        this.postsService = postsService;
        this.route = route;
        this.enteredTitle = "";
        this.enteredContent = "";
        this.isLoading = false;
        this.mode = "create";
    }
    PostCreateComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            title: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3)]
            }),
            content: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, { validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required] }),
            image: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](null, {
                validators: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
                asyncValidators: [_mime_type_validator__WEBPACK_IMPORTED_MODULE_4__["mimeType"]]
            })
        });
        this.route.paramMap.subscribe(function (paramMap) {
            if (paramMap.has("postId")) {
                _this.mode = "edit";
                _this.postId = paramMap.get("postId");
                _this.isLoading = true;
                _this.postsService.getPost(_this.postId).subscribe(function (postData) {
                    _this.isLoading = false;
                    _this.post = {
                        id: postData._id,
                        title: postData.title,
                        content: postData.content,
                        imagePath: postData.imagePath
                    };
                    _this.form.setValue({
                        title: _this.post.title,
                        content: _this.post.content,
                        image: _this.post.imagePath
                    });
                });
            }
            else {
                _this.mode = "create";
                _this.postId = null;
            }
        });
    };
    PostCreateComponent.prototype.onImagePicked = function (event) {
        var _this = this;
        var file = event.target.files[0];
        this.form.patchValue({ image: file });
        this.form.get("image").updateValueAndValidity();
        var reader = new FileReader();
        reader.onload = function () {
            _this.imagePreview = reader.result;
        };
        reader.readAsDataURL(file);
    };
    PostCreateComponent.prototype.onSavePost = function () {
        if (this.form.invalid) {
            return;
        }
        this.isLoading = true;
        if (this.mode === "create") {
            this.postsService.addPost(this.form.value.title, this.form.value.content, this.form.value.image);
        }
        else {
            this.postsService.updatePost(this.postId, this.form.value.title, this.form.value.content, this.form.value.image);
        }
        this.form.reset();
    };
    PostCreateComponent.ctorParameters = function () { return [
        { type: _posts_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
    ]; };
    PostCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-post-create",
            template: __importDefault(__webpack_require__(/*! raw-loader!./post-create.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/post-create/post-create.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./post-create.component.css */ "./src/app/posts/post-create/post-create.component.css")).default]
        }),
        __metadata("design:paramtypes", [_posts_service__WEBPACK_IMPORTED_MODULE_3__["PostsService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], PostCreateComponent);
    return PostCreateComponent;
}());



/***/ }),

/***/ "./src/app/posts/post-list/post-list.component.css":
/*!*********************************************************!*\
  !*** ./src/app/posts/post-list/post-list.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (":host {\n  display: block;\n  margin-top: 1rem;\n}\n\nmat-spinner {\n  margin: auto;\n  color: #970000;\n}\n\nmat-paginator {\n  margin-top: 1rem;\n}\n\n.info-text {\n  text-align: center;\n}\n\n.post-image {\n  width: 100%;\n}\n\n.post-image img {\n  width: 100%;\n  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);\n}\n\n.area{\n  display: block;\n  position: relative;\n}\n\n.side{\n  top:0;\n  right: 0;\n  width:300px;\n  position: absolute;\n}\n\n.content {\n  /* width: 100%; */\n  padding-right: 320px;\n}\n\ninput[type=text]{\n  border-radius: 4px;\n  background: #ffffff;\n  border-color: #970000;\n}\n\n.area2{\n  display: block;\n  position: relative;\n}\n\n.side2{\n  top:0;\n  right: 0;\n  width:350px;\n  position: absolute;\n}\n\n.content2{\n  /* width: 100%; */\n  padding-right: 320px;\n}\n\n.btn-custom {\n\tpadding: 1px 15px 3px 2px;\n\tborder-radius: 50px;\n}\n\n.btn-icon {\n\tpadding: 8px;\n\tbackground: #ffffff;\n}\n\n.button {\n  background-color:transparent;\n  border-radius: 4px;\n  text-align: center;\n  display: inline-block;\n  cursor: pointer; \n  border: 2px solid #970000;\n  margin: 0px 2px;\n  color: #970000;\n}\n\nh4 {\n  color: #000000;\n}\n\n.area3{\n  display: block;\n  position: relative;\n}\n\n.side3{\n  top:0;\n  right: 0;\n  width:150px;\n  position: absolute;\n}\n\n.content3{\n  /* width: 100%; */\n  padding-right: 320px;\n}\n\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcG9zdHMvcG9zdC1saXN0L3Bvc3QtbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsV0FBVztFQUNYLDBDQUEwQztBQUM1Qzs7QUFDQTtFQUNFLGNBQWM7RUFDZCxrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxLQUFLO0VBQ0wsUUFBUTtFQUNSLFdBQVc7RUFDWCxrQkFBa0I7QUFDcEI7O0FBQ0E7RUFDRSxpQkFBaUI7RUFDakIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG1CQUFtQjtFQUNuQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsS0FBSztFQUNMLFFBQVE7RUFDUixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLG9CQUFvQjtBQUN0Qjs7QUFFQTtDQUNDLHlCQUF5QjtDQUN6QixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osbUJBQW1CO0FBQ3BCOztBQUVBO0VBQ0UsNEJBQTRCO0VBQzVCLGtCQUFrQjtFQUNsQixrQkFBa0I7RUFDbEIscUJBQXFCO0VBQ3JCLGVBQWU7RUFDZix5QkFBeUI7RUFDekIsZUFBZTtFQUNmLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLEtBQUs7RUFDTCxRQUFRO0VBQ1IsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjs7QUFDQTtFQUNFLGlCQUFpQjtFQUNqQixvQkFBb0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9wb3N0cy9wb3N0LWxpc3QvcG9zdC1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6aG9zdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG5tYXQtc3Bpbm5lciB7XG4gIG1hcmdpbjogYXV0bztcbiAgY29sb3I6ICM5NzAwMDA7XG59XG5cbm1hdC1wYWdpbmF0b3Ige1xuICBtYXJnaW4tdG9wOiAxcmVtO1xufVxuXG4uaW5mby10ZXh0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ucG9zdC1pbWFnZSB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucG9zdC1pbWFnZSBpbWcge1xuICB3aWR0aDogMTAwJTtcbiAgYm94LXNoYWRvdzogMXB4IDFweCA1cHggcmdiYSgwLCAwLCAwLCAwLjUpO1xufVxuLmFyZWF7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2lkZXtcbiAgdG9wOjA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDozMDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLmNvbnRlbnQge1xuICAvKiB3aWR0aDogMTAwJTsgKi9cbiAgcGFkZGluZy1yaWdodDogMzIwcHg7XG59XG5cbmlucHV0W3R5cGU9dGV4dF17XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyLWNvbG9yOiAjOTcwMDAwO1xufVxuXG4uYXJlYTJ7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG4uc2lkZTJ7XG4gIHRvcDowO1xuICByaWdodDogMDtcbiAgd2lkdGg6MzUwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbn1cbi5jb250ZW50MntcbiAgLyogd2lkdGg6IDEwMCU7ICovXG4gIHBhZGRpbmctcmlnaHQ6IDMyMHB4O1xufVxuXG4uYnRuLWN1c3RvbSB7XG5cdHBhZGRpbmc6IDFweCAxNXB4IDNweCAycHg7XG5cdGJvcmRlci1yYWRpdXM6IDUwcHg7XG59XG5cbi5idG4taWNvbiB7XG5cdHBhZGRpbmc6IDhweDtcblx0YmFja2dyb3VuZDogI2ZmZmZmZjtcbn1cblxuLmJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6dHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGN1cnNvcjogcG9pbnRlcjsgXG4gIGJvcmRlcjogMnB4IHNvbGlkICM5NzAwMDA7XG4gIG1hcmdpbjogMHB4IDJweDtcbiAgY29sb3I6ICM5NzAwMDA7XG59XG5cbmg0IHtcbiAgY29sb3I6ICMwMDAwMDA7XG59XG5cbi5hcmVhM3tcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5zaWRlM3tcbiAgdG9wOjA7XG4gIHJpZ2h0OiAwO1xuICB3aWR0aDoxNTBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xufVxuLmNvbnRlbnQze1xuICAvKiB3aWR0aDogMTAwJTsgKi9cbiAgcGFkZGluZy1yaWdodDogMzIwcHg7XG59XG5cblxuIl19 */");

/***/ }),

/***/ "./src/app/posts/post-list/post-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/posts/post-list/post-list.component.ts ***!
  \********************************************************/
/*! exports provided: PostListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostListComponent", function() { return PostListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _posts_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../posts.service */ "./src/app/posts/posts.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../auth/auth.service */ "./src/app/auth/auth.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



var PostListComponent = /** @class */ (function () {
    function PostListComponent(postsService, authService) {
        this.postsService = postsService;
        this.authService = authService;
        // posts = [
        //   { title: "First Post", content: "This is the first post's content" },
        //   { title: "Second Post", content: "This is the second post's content" },
        //   { title: "Third Post", content: "This is the third post's content" }
        // ];
        this.posts = [];
        this.isLoading = false;
        this.totalPosts = 0;
        this.postsPerPage = 2;
        this.currentPage = 1;
        this.pageSizeOptions = [1, 2, 5, 10];
        this.userIsAuthenticated = false;
        this.searchword = '';
    }
    PostListComponent.prototype.setSearchWord = function (category) {
        this.searchword = category;
        this.searchThis();
    };
    PostListComponent.prototype.searchThis = function () {
        this.getPosts();
    };
    PostListComponent.prototype.onKeyDown = function (event) {
        if (event.key === 'Enter') {
            this.searchThis();
        }
    };
    PostListComponent.prototype.getPosts = function () {
        this.postsService.getPosts(this.postsPerPage, this.currentPage, this.searchword);
    };
    PostListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.isLoading = true;
        this.getPosts();
        this.postsSub = this.postsService
            .getPostUpdateListener()
            .subscribe(function (postData) {
            _this.isLoading = false;
            _this.totalPosts = postData.postCount;
            _this.posts = postData.posts;
        });
        this.userIsAuthenticated = this.authService.getIsAuth();
        this.authStatusSub = this.authService
            .getAuthStatusListener()
            .subscribe(function (isAuthenticated) {
            _this.userIsAuthenticated = isAuthenticated;
        });
    };
    PostListComponent.prototype.onChangedPage = function (pageData) {
        this.isLoading = true;
        this.currentPage = pageData.pageIndex + 1;
        this.postsPerPage = pageData.pageSize;
        this.postsService.getPosts(this.postsPerPage, this.currentPage, this.searchword);
    };
    PostListComponent.prototype.onDelete = function (postId) {
        var _this = this;
        this.isLoading = true;
        this.postsService.deletePost(postId).subscribe(function () {
            _this.postsService.getPosts(_this.postsPerPage, _this.currentPage, _this.searchword);
        });
    };
    PostListComponent.prototype.ngOnDestroy = function () {
        this.postsSub.unsubscribe();
        this.authStatusSub.unsubscribe();
    };
    PostListComponent.ctorParameters = function () { return [
        { type: _posts_service__WEBPACK_IMPORTED_MODULE_1__["PostsService"] },
        { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
    ]; };
    PostListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-post-list",
            template: __importDefault(__webpack_require__(/*! raw-loader!./post-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/posts/post-list/post-list.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./post-list.component.css */ "./src/app/posts/post-list/post-list.component.css")).default]
        }),
        __metadata("design:paramtypes", [_posts_service__WEBPACK_IMPORTED_MODULE_1__["PostsService"],
            _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]])
    ], PostListComponent);
    return PostListComponent;
}());



/***/ }),

/***/ "./src/app/posts/posts.service.ts":
/*!****************************************!*\
  !*** ./src/app/posts/posts.service.ts ***!
  \****************************************/
/*! exports provided: PostsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostsService", function() { return PostsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __spreadArrays = (undefined && undefined.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};





var PostsService = /** @class */ (function () {
    function PostsService(http, router) {
        this.http = http;
        this.router = router;
        this.posts = [];
        this.postsUpdated = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    PostsService.prototype.getPosts = function (postsPerPage, currentPage, searchword) {
        var _this = this;
        var queryParams = "?pagesize=" + postsPerPage + "&page=" + currentPage + "&searchword=" + searchword;
        this.http
            .get("http://localhost:3000/api/posts/discovery" + queryParams)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (postData) {
            return {
                posts: postData.posts.map(function (post) {
                    return {
                        title: post.title,
                        content: post.content,
                        authors: post.authors,
                        publish_date: post.date,
                        id: post._id,
                        imagePath: post.imagePath
                    };
                }),
                maxPosts: postData.maxPosts
            };
        }))
            .subscribe(function (transformedPostData) {
            _this.posts = transformedPostData.posts;
            console.log(transformedPostData.posts);
            _this.postsUpdated.next({
                posts: __spreadArrays(_this.posts),
                postCount: transformedPostData.maxPosts
            });
        });
    };
    PostsService.prototype.getPostUpdateListener = function () {
        return this.postsUpdated.asObservable();
    };
    PostsService.prototype.getPost = function (id) {
        return this.http.get("http://localhost:3000/api/posts/" + id);
    };
    PostsService.prototype.addPost = function (title, content, image) {
        var _this = this;
        var postData = new FormData();
        postData.append("title", title);
        postData.append("content", content);
        postData.append("image", image, title);
        this.http
            .post("http://localhost:3000/api/posts", postData)
            .subscribe(function (responseData) {
            _this.router.navigate(["/"]);
        });
    };
    PostsService.prototype.updatePost = function (id, title, content, image) {
        var _this = this;
        var postData;
        if (typeof image === "object") {
            postData = new FormData();
            postData.append("id", id);
            postData.append("title", title);
            postData.append("content", content);
            postData.append("image", image, title);
        }
        else {
            postData = {
                id: id,
                title: title,
                content: content,
                imagePath: image
            };
        }
        this.http
            .put("http://localhost:3000/api/posts/" + id, postData)
            .subscribe(function (response) {
            _this.router.navigate(["/"]);
        });
    };
    PostsService.prototype.deletePost = function (postId) {
        return this.http
            .delete("http://localhost:3000/api/posts/" + postId);
    };
    PostsService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
    PostsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({ providedIn: "root" }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], PostsService);
    return PostsService;
}());



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/rafaela/Documents/teste/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map