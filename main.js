(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".add-todo-icon {\r\n  font-size: 50px;\r\n  color: #066987;\r\n  cursor: pointer;\r\n}\r\n\r\n.title {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  width: 100%;\r\n  justify-content: center;\r\n}\r\n\r\n.title h1 {\r\n  margin-right: 30px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsY0FBYztFQUNkLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGQtdG9kby1pY29uIHtcclxuICBmb250LXNpemU6IDUwcHg7XHJcbiAgY29sb3I6ICMwNjY5ODc7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4udGl0bGUge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi50aXRsZSBoMSB7XHJcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"title\">\n  <h1>\n    My ToDo List\n  </h1>\n  <i class=\"material-icons add-todo-icon\" (click)=\"openCreateDialog()\">\n    add_circle_outline\n  </i>\n</div>\n<router-outlet></router-outlet>\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_todo_todo_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./store/todo/todo.action */ "./src/app/store/todo/todo.action.ts");
/* harmony import */ var _components_new_todo_new_todo_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/new-todo/new-todo.component */ "./src/app/components/new-todo/new-todo.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");






var AppComponent = /** @class */ (function () {
    function AppComponent(store, dialog) {
        this.store = store;
        this.dialog = dialog;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.store.dispatch(new _store_todo_todo_action__WEBPACK_IMPORTED_MODULE_3__["GetTodos"]());
    };
    /**
     * Open "Add new task" dialog
     */
    AppComponent.prototype.openCreateDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_components_new_todo_new_todo_component__WEBPACK_IMPORTED_MODULE_4__["NewTodoComponent"]);
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.onAddTodo(result);
            }
        });
    };
    /**
     * Add new task to store
     */
    AppComponent.prototype.onAddTodo = function (newTodo) {
        this.store.dispatch(new _store_todo_todo_action__WEBPACK_IMPORTED_MODULE_3__["AddTodo"](newTodo));
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _store_reducers_models__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./store/reducers.models */ "./src/app/store/reducers.models.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _store_store_models__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store/store.models */ "./src/app/store/store.models.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _components_new_todo_new_todo_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/new-todo/new-todo.component */ "./src/app/components/new-todo/new-todo.component.ts");
/* harmony import */ var _components_todo_list_item_todo_list_item_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/todo-list-item/todo-list-item.component */ "./src/app/components/todo-list-item/todo-list-item.component.ts");
/* harmony import */ var _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/todo-list/todo-list.component */ "./src/app/components/todo-list/todo-list.component.ts");
/* harmony import */ var _components_todo_detail_todo_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/todo-detail/todo-detail.component */ "./src/app/components/todo-detail/todo-detail.component.ts");
/* harmony import */ var _store_todo_todo_effects__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./store/todo/todo.effects */ "./src/app/store/todo/todo.effects.ts");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _interceptor_mocked_backend_interceptor_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./interceptor/mocked-backend-interceptor.service */ "./src/app/interceptor/mocked-backend-interceptor.service.ts");



















var appRoutes = [
    {
        path: '',
        component: _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_13__["TodoListComponent"]
    },
    {
        path: 'todo/:id',
        component: _components_todo_detail_todo_detail_component__WEBPACK_IMPORTED_MODULE_14__["TodoDetailComponent"]
    },
    {
        path: '**',
        redirectTo: ''
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _components_new_todo_new_todo_component__WEBPACK_IMPORTED_MODULE_11__["NewTodoComponent"],
                _components_todo_list_item_todo_list_item_component__WEBPACK_IMPORTED_MODULE_12__["TodoListItemComponent"],
                _components_todo_list_todo_list_component__WEBPACK_IMPORTED_MODULE_13__["TodoListComponent"],
                _components_todo_detail_todo_detail_component__WEBPACK_IMPORTED_MODULE_14__["TodoDetailComponent"]
            ],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes),
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatProgressBarModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forRoot(_store_reducers_models__WEBPACK_IMPORTED_MODULE_6__["reducers"], { initialState: _store_store_models__WEBPACK_IMPORTED_MODULE_8__["INITIAL_STATE"] }),
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_16__["EffectsModule"].forRoot([_store_todo_todo_effects__WEBPACK_IMPORTED_MODULE_15__["TodoEffects"]])
            ],
            providers: [_interceptor_mocked_backend_interceptor_service__WEBPACK_IMPORTED_MODULE_18__["mockedBackendProvider"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]],
            entryComponents: [_components_new_todo_new_todo_component__WEBPACK_IMPORTED_MODULE_11__["NewTodoComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/new-todo/new-todo.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/new-todo/new-todo.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-dialog-content {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9uZXctdG9kby9uZXctdG9kby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbmV3LXRvZG8vbmV3LXRvZG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1kaWFsb2ctY29udGVudCB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/components/new-todo/new-todo.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/new-todo/new-todo.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form class=\"new-todo-form\">\n  <h2 mat-dialog-title>Add new Todo</h2>\n  <mat-dialog-content>\n    <mat-form-field>\n      <mat-label>Title</mat-label>\n      <input matInput\n             type=\"text\"\n             name=\"todo-title\"\n             placeholder=\"Title\"\n             [(ngModel)]=\"newTodo.title\"\n             required\n             #title=\"ngModel\">\n    </mat-form-field>\n    <mat-form-field>\n      <mat-label>Description</mat-label>\n      <textarea matInput\n                name=\"todo-description\"\n                cdkTextareaAutosize\n                #autosize=\"cdkTextareaAutosize\"\n                cdkAutosizeMinRows=\"2\"\n                cdkAutosizeMaxRows=\"5\"\n                [(ngModel)]=\"newTodo.description\"\n                #description=\"ngModel\"></textarea>\n    </mat-form-field>\n  </mat-dialog-content>\n  <mat-dialog-actions align=\"end\">\n    <button mat-button mat-dialog-close>Close</button>\n    <button mat-raised-button\n            color=\"primary\"\n            [mat-dialog-close]=\"newTodo\"\n            [disabled]=\"title.invalid\">Add\n    </button>\n  </mat-dialog-actions>\n</form>\n"

/***/ }),

/***/ "./src/app/components/new-todo/new-todo.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/new-todo/new-todo.component.ts ***!
  \***********************************************************/
/*! exports provided: NewTodoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTodoComponent", function() { return NewTodoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NewTodoComponent = /** @class */ (function () {
    function NewTodoComponent() {
    }
    NewTodoComponent.prototype.ngOnInit = function () {
        this.newTodo = {
            description: '',
            title: ''
        };
    };
    NewTodoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-todo',
            template: __webpack_require__(/*! ./new-todo.component.html */ "./src/app/components/new-todo/new-todo.component.html"),
            styles: [__webpack_require__(/*! ./new-todo.component.css */ "./src/app/components/new-todo/new-todo.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NewTodoComponent);
    return NewTodoComponent;
}());



/***/ }),

/***/ "./src/app/components/todo-detail/todo-detail.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/todo-detail/todo-detail.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".todo-detail-content {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: inline-flex;\r\n  justify-content: center;\r\n}\r\n\r\n.todo-detail-content mat-card {\r\n  width: 30%;\r\n  height: 50%;\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.todo-detail-content mat-card mat-card-content {\r\n  height: 80%;\r\n}\r\n\r\n.todo-detail-content mat-card-actions {\r\n  display: inline-flex;\r\n}\r\n\r\n.todo-detail-content mat-card-header {\r\n  display: inline-flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n}\r\n\r\n.todo-detail-content mat-card-actions mat-radio-group {\r\n  display: inline-flex;\r\n  width: 100%;\r\n  justify-content: space-around;\r\n}\r\n\r\n.action-btn {\r\n  height: 40px;\r\n  margin-right: 10px;\r\n}\r\n\r\nmat-form-field {\r\n  width: 100%;\r\n}\r\n\r\n.actions {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.actions button {\r\n  margin: 5px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b2RvLWRldGFpbC90b2RvLWRldGFpbC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixvQkFBb0I7RUFDcEIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0Usb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0Usb0JBQW9CO0VBQ3BCLDhCQUE4QjtFQUM5QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxvQkFBb0I7RUFDcEIsV0FBVztFQUNYLDZCQUE2QjtBQUMvQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsV0FBVztBQUNiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90b2RvLWRldGFpbC90b2RvLWRldGFpbC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvZG8tZGV0YWlsLWNvbnRlbnQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLnRvZG8tZGV0YWlsLWNvbnRlbnQgbWF0LWNhcmQge1xyXG4gIHdpZHRoOiAzMCU7XHJcbiAgaGVpZ2h0OiA1MCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG59XHJcblxyXG4udG9kby1kZXRhaWwtY29udGVudCBtYXQtY2FyZCBtYXQtY2FyZC1jb250ZW50IHtcclxuICBoZWlnaHQ6IDgwJTtcclxufVxyXG5cclxuLnRvZG8tZGV0YWlsLWNvbnRlbnQgbWF0LWNhcmQtYWN0aW9ucyB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbn1cclxuXHJcbi50b2RvLWRldGFpbC1jb250ZW50IG1hdC1jYXJkLWhlYWRlciB7XHJcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XHJcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi50b2RvLWRldGFpbC1jb250ZW50IG1hdC1jYXJkLWFjdGlvbnMgbWF0LXJhZGlvLWdyb3VwIHtcclxuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcclxuICB3aWR0aDogMTAwJTtcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuLmFjdGlvbi1idG4ge1xyXG4gIGhlaWdodDogNDBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDEwcHg7XHJcbn1cclxuXHJcbm1hdC1mb3JtLWZpZWxkIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmFjdGlvbnMge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmFjdGlvbnMgYnV0dG9uIHtcclxuICBtYXJnaW46IDVweDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/todo-detail/todo-detail.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/todo-detail/todo-detail.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"todo-detail-content\" align=\"center\" *ngIf=\"todo | async; let todo;\">\n  <div class=\"actions\">\n    <button mat-raised-button (click)=\"goBack()\" class=\"action-btn\">\n      <i class=\"material-icons\">\n        arrow_back\n      </i>\n    </button>\n    <button mat-raised-button *ngIf=\"!editMode\" (click)=\"switchEditModeOn()\" class=\"action-btn\">\n      <i class=\"material-icons\">\n        edit\n      </i>\n    </button>\n    <button mat-raised-button *ngIf=\"editMode\" (click)=\"editTodo(todo)\" class=\"action-btn\">\n      <i class=\"material-icons\">\n        done\n      </i>\n    </button>\n    <button mat-raised-button *ngIf=\"!editMode\" (click)=\"deleteTodo(todo)\" color=\"warn\" class=\"action-btn\">\n      <i class=\"material-icons\">\n        delete_forever\n      </i>\n    </button>\n  </div>\n  <mat-card>\n    <mat-card-header>\n      <mat-card-title>{{todo.title}}</mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <p *ngIf=\"!editMode\">\n        {{todo.description}}\n      </p>\n      <mat-form-field *ngIf=\"editMode\">\n        <textarea matInput\n                  name=\"todo-description\"\n                  cdkTextareaAutosize\n                  #autosize=\"cdkTextareaAutosize\"\n                  cdkAutosizeMinRows=\"2\"\n                  cdkAutosizeMaxRows=\"5\"\n                  [(ngModel)]=\"todo.description\"></textarea>\n      </mat-form-field>\n    </mat-card-content>\n    <mat-card-actions>\n      <mat-radio-group [(ngModel)]=\"todo.state\">\n        <mat-radio-button value=\"{{todoStateEnum.toDo}}\">To Do</mat-radio-button>\n        <mat-radio-button value=\"{{todoStateEnum.inProgress}}\">In Progress</mat-radio-button>\n        <mat-radio-button value=\"{{todoStateEnum.done}}\">Done</mat-radio-button>\n      </mat-radio-group>\n    </mat-card-actions>\n  </mat-card>\n</div>\n\n"

/***/ }),

/***/ "./src/app/components/todo-detail/todo-detail.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/todo-detail/todo-detail.component.ts ***!
  \*****************************************************************/
/*! exports provided: TodoDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoDetailComponent", function() { return TodoDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_todo_todo_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/todo/todo.action */ "./src/app/store/todo/todo.action.ts");
/* harmony import */ var _store_todo_todo_selectors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/todo/todo.selectors */ "./src/app/store/todo/todo.selectors.ts");
/* harmony import */ var _services_router_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/router.service */ "./src/app/services/router.service.ts");
/* harmony import */ var _enum_todo_state_enum__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../enum/todo-state.enum */ "./src/app/enum/todo-state.enum.ts");








var TodoDetailComponent = /** @class */ (function () {
    function TodoDetailComponent(route, store, routerService) {
        this.route = route;
        this.store = store;
        this.routerService = routerService;
        this.todoStateEnum = _enum_todo_state_enum__WEBPACK_IMPORTED_MODULE_7__["TodoStateEnum"];
    }
    TodoDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.id = this.route.snapshot.paramMap.get('id');
        this.store.subscribe(function (state) {
            if (state.toDoList) {
                _this.todo = _this.store.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_store_todo_todo_selectors__WEBPACK_IMPORTED_MODULE_5__["getItemById"](_this.id)));
            }
        });
        this.editMode = false;
    };
    /**
     * Go back to list screen
     */
    TodoDetailComponent.prototype.goBack = function () {
        this.routerService.goTo('');
    };
    /**
     * Put on switch mode for dezcription
     */
    TodoDetailComponent.prototype.switchEditModeOn = function () {
        this.editMode = true;
    };
    /**
     * Update todo in store
     */
    TodoDetailComponent.prototype.editTodo = function (todo) {
        this.store.dispatch(new _store_todo_todo_action__WEBPACK_IMPORTED_MODULE_4__["UpdateTodo"](todo));
        this.editMode = false;
    };
    /**
     * Delete todo from store and go back to list screen
     */
    TodoDetailComponent.prototype.deleteTodo = function (todo) {
        this.store.dispatch(new _store_todo_todo_action__WEBPACK_IMPORTED_MODULE_4__["DeleteTodo"](todo));
        this.goBack();
    };
    TodoDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-todo-detail',
            template: __webpack_require__(/*! ./todo-detail.component.html */ "./src/app/components/todo-detail/todo-detail.component.html"),
            styles: [__webpack_require__(/*! ./todo-detail.component.css */ "./src/app/components/todo-detail/todo-detail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"],
            _services_router_service__WEBPACK_IMPORTED_MODULE_6__["RouterService"]])
    ], TodoDetailComponent);
    return TodoDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/todo-list-item/todo-list-item.component.css":
/*!************************************************************************!*\
  !*** ./src/app/components/todo-list-item/todo-list-item.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".todo-card .left-line {\r\n  width: 25px;\r\n  background-color: #066987;\r\n}\r\n\r\n.todo-card .content {\r\n  display: inline-flex;\r\n  padding: 0;\r\n  width: 100%;\r\n  min-height: 50px;\r\n  text-align: center;\r\n}\r\n\r\nmat-card {\r\n  padding: 0;\r\n  text-align: start;\r\n}\r\n\r\nmat-card-content {\r\n  width: 100%;\r\n}\r\n\r\n.footer {\r\n  height: 10px;\r\n  background-color: #066987;\r\n  margin-top: -5px;\r\n}\r\n\r\n.footer-0 {\r\n  width: 0%;\r\n}\r\n\r\n.footer-50 {\r\n  width: 50%;\r\n}\r\n\r\n.footer-100 {\r\n  width: 100%;\r\n}\r\n\r\n.crossed-out {\r\n  text-decoration: line-through;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b2RvLWxpc3QtaXRlbS90b2RvLWxpc3QtaXRlbS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBVztFQUNYLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLG9CQUFvQjtFQUNwQixVQUFVO0VBQ1YsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsV0FBVztBQUNiOztBQUVBO0VBQ0UsWUFBWTtFQUNaLHlCQUF5QjtFQUN6QixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxTQUFTO0FBQ1g7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxXQUFXO0FBQ2I7O0FBRUE7RUFDRSw2QkFBNkI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RvZG8tbGlzdC1pdGVtL3RvZG8tbGlzdC1pdGVtLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9kby1jYXJkIC5sZWZ0LWxpbmUge1xyXG4gIHdpZHRoOiAyNXB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjY5ODc7XHJcbn1cclxuXHJcbi50b2RvLWNhcmQgLmNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xyXG4gIHBhZGRpbmc6IDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogNTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbm1hdC1jYXJkIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIHRleHQtYWxpZ246IHN0YXJ0O1xyXG59XHJcblxyXG5tYXQtY2FyZC1jb250ZW50IHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmZvb3RlciB7XHJcbiAgaGVpZ2h0OiAxMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwNjY5ODc7XHJcbiAgbWFyZ2luLXRvcDogLTVweDtcclxufVxyXG5cclxuLmZvb3Rlci0wIHtcclxuICB3aWR0aDogMCU7XHJcbn1cclxuXHJcbi5mb290ZXItNTAge1xyXG4gIHdpZHRoOiA1MCU7XHJcbn1cclxuXHJcbi5mb290ZXItMTAwIHtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmNyb3NzZWQtb3V0IHtcclxuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/components/todo-list-item/todo-list-item.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/components/todo-list-item/todo-list-item.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"todo-card\">\n  <div class=\"content\">\n    <div class=\"left-line\"></div>\n    <mat-card-content>\n      <h1 [ngClass]=\"{'crossed-out': todoIsDone(todo)}\">\n        {{todo.title}}\n      </h1>\n    </mat-card-content>\n  </div>\n  <div class=\"footer\" ngClass=\"{{getTodoFooterClass(todo)}}\"></div>\n</mat-card>\n"

/***/ }),

/***/ "./src/app/components/todo-list-item/todo-list-item.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/components/todo-list-item/todo-list-item.component.ts ***!
  \***********************************************************************/
/*! exports provided: TodoListItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListItemComponent", function() { return TodoListItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _enum_todo_state_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../enum/todo-state.enum */ "./src/app/enum/todo-state.enum.ts");



var TodoListItemComponent = /** @class */ (function () {
    function TodoListItemComponent() {
    }
    /**
     * Get footer CSS class for footer
     */
    TodoListItemComponent.prototype.getTodoFooterClass = function (todo) {
        if (todo.state === _enum_todo_state_enum__WEBPACK_IMPORTED_MODULE_2__["TodoStateEnum"].toDo) {
            return ['footer-0'];
        }
        else if (todo.state === _enum_todo_state_enum__WEBPACK_IMPORTED_MODULE_2__["TodoStateEnum"].inProgress) {
            return ['footer-50'];
        }
        else if (todo.state === _enum_todo_state_enum__WEBPACK_IMPORTED_MODULE_2__["TodoStateEnum"].done) {
            return ['footer-100'];
        }
        else {
            return [];
        }
    };
    /**
     * Check if Todo has state DONE
     */
    TodoListItemComponent.prototype.todoIsDone = function (todo) {
        return todo.state === _enum_todo_state_enum__WEBPACK_IMPORTED_MODULE_2__["TodoStateEnum"].done;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TodoListItemComponent.prototype, "todo", void 0);
    TodoListItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-todo-list-item',
            template: __webpack_require__(/*! ./todo-list-item.component.html */ "./src/app/components/todo-list-item/todo-list-item.component.html"),
            styles: [__webpack_require__(/*! ./todo-list-item.component.css */ "./src/app/components/todo-list-item/todo-list-item.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TodoListItemComponent);
    return TodoListItemComponent;
}());



/***/ }),

/***/ "./src/app/components/todo-list/todo-list.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/todo-list/todo-list.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".todos-list li {\r\n  list-style: none;\r\n}\r\n\r\n.todos-list app-todo-list-item {\r\n  width: 100%;\r\n  cursor: pointer;\r\n}\r\n\r\nul {\r\n  padding: 0px;\r\n}\r\n\r\nmat-radio-button {\r\n  font-size: 13px;\r\n}\r\n\r\n.content {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.content .todos-list {\r\n  width: 70%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90b2RvLWxpc3QvdG9kby1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsVUFBVTtBQUNaIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90b2RvLWxpc3QvdG9kby1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9kb3MtbGlzdCBsaSB7XHJcbiAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLnRvZG9zLWxpc3QgYXBwLXRvZG8tbGlzdC1pdGVtIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbnVsIHtcclxuICBwYWRkaW5nOiAwcHg7XHJcbn1cclxuXHJcbm1hdC1yYWRpby1idXR0b24ge1xyXG4gIGZvbnQtc2l6ZTogMTNweDtcclxufVxyXG5cclxuLmNvbnRlbnQge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG5cclxuLmNvbnRlbnQgLnRvZG9zLWxpc3Qge1xyXG4gIHdpZHRoOiA3MCU7XHJcbn1cclxuIl19 */"

/***/ }),

/***/ "./src/app/components/todo-list/todo-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/components/todo-list/todo-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"content\" align=\"center\">\n  <ul class=\"todos-list\" *ngIf=\"todos | async; let todos;\">\n    <ng-container *ngFor=\"let todo of sortTodos(todos)\">\n      <li class=\"todo-card-item\">\n        <mat-grid-list cols=\"10\">\n          <mat-grid-tile [colspan]=\"7\">\n            <app-todo-list-item\n              [todo]=\"todo\"\n              (click)=\"seeDetail(todo.id)\"\n            ></app-todo-list-item>\n          </mat-grid-tile>\n          <section class=\"example-section\">\n            <mat-radio-group [(ngModel)]=\"todo.state\">\n              <mat-grid-tile [colspan]=\"1\">\n                <mat-radio-button value=\"{{todoStateEnum.toDo}}\">To Do</mat-radio-button>\n              </mat-grid-tile>\n              <mat-grid-tile [colspan]=\"1\">\n                <mat-radio-button value=\"{{todoStateEnum.inProgress}}\">In Progress</mat-radio-button>\n              </mat-grid-tile>\n              <mat-grid-tile [colspan]=\"1\">\n                <mat-radio-button value=\"{{todoStateEnum.done}}\">Done</mat-radio-button>\n              </mat-grid-tile>\n            </mat-radio-group>\n          </section>\n        </mat-grid-list>\n      </li>\n      <mat-divider></mat-divider>\n    </ng-container>\n  </ul>\n</div>\n\n\n\n"

/***/ }),

/***/ "./src/app/components/todo-list/todo-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/todo-list/todo-list.component.ts ***!
  \*************************************************************/
/*! exports provided: TodoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoListComponent", function() { return TodoListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _services_router_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/router.service */ "./src/app/services/router.service.ts");
/* harmony import */ var _enum_todo_state_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../enum/todo-state.enum */ "./src/app/enum/todo-state.enum.ts");






var TodoListComponent = /** @class */ (function () {
    function TodoListComponent(store, dialog, routerService) {
        this.store = store;
        this.dialog = dialog;
        this.routerService = routerService;
        this.todoStateEnum = _enum_todo_state_enum__WEBPACK_IMPORTED_MODULE_5__["TodoStateEnum"];
        this.todos = this.store.select(function (state) { return state.toDoList; });
    }
    TodoListComponent.prototype.ngOnInit = function () {
    };
    /**
     * Go to Detail Todo screen
     */
    TodoListComponent.prototype.seeDetail = function (id) {
        this.routerService.goTo('/todo', id);
    };
    /**
     * Sort Todo array according to Todo's date and Todo's state
     */
    TodoListComponent.prototype.sortTodos = function (todosArray) {
        return todosArray.sort(function (todoA, todoB) {
            if (todoA.state !== todoB.state) {
                if (todoA.state !== 'done' && todoB.state !== _enum_todo_state_enum__WEBPACK_IMPORTED_MODULE_5__["TodoStateEnum"].done) {
                    return new Date(todoA.date) < new Date(todoB.date) ? 1 : -1;
                }
                else {
                    return todoA.state === _enum_todo_state_enum__WEBPACK_IMPORTED_MODULE_5__["TodoStateEnum"].done ? 1 : -1;
                }
            }
            else {
                return new Date(todoA.date) < new Date(todoB.date) ? 1 : -1;
            }
        });
    };
    TodoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-todo-list',
            template: __webpack_require__(/*! ./todo-list.component.html */ "./src/app/components/todo-list/todo-list.component.html"),
            styles: [__webpack_require__(/*! ./todo-list.component.css */ "./src/app/components/todo-list/todo-list.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _services_router_service__WEBPACK_IMPORTED_MODULE_4__["RouterService"]])
    ], TodoListComponent);
    return TodoListComponent;
}());



/***/ }),

/***/ "./src/app/enum/todo-state.enum.ts":
/*!*****************************************!*\
  !*** ./src/app/enum/todo-state.enum.ts ***!
  \*****************************************/
/*! exports provided: TodoStateEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoStateEnum", function() { return TodoStateEnum; });
/**
 * Todo states
 */
var TodoStateEnum;
(function (TodoStateEnum) {
    TodoStateEnum["done"] = "DONE";
    TodoStateEnum["inProgress"] = "IN_PROGRESS";
    TodoStateEnum["toDo"] = "TO_DO";
})(TodoStateEnum || (TodoStateEnum = {}));


/***/ }),

/***/ "./src/app/interceptor/mocked-backend-interceptor.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/interceptor/mocked-backend-interceptor.service.ts ***!
  \*******************************************************************/
/*! exports provided: MockedBackendInterceptor, mockedBackendProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MockedBackendInterceptor", function() { return MockedBackendInterceptor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mockedBackendProvider", function() { return mockedBackendProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _mock_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../mock.json */ "./src/app/mock.json");
var _mock_json__WEBPACK_IMPORTED_MODULE_5___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../mock.json */ "./src/app/mock.json", 1);






/**
 * Mocked backend
 */
var MockedBackendInterceptor = /** @class */ (function () {
    function MockedBackendInterceptor() {
    }
    /**
     * Intercept GET Todo API REST call
     */
    MockedBackendInterceptor.prototype.intercept = function (request, next) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function () {
            if (request.url.endsWith('/todos') && request.method === 'GET') {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpResponse"]({ status: 200, body: _mock_json__WEBPACK_IMPORTED_MODULE_5__.todos }));
            }
            return next.handle(request);
        }))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["materialize"])())
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(500))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["dematerialize"])());
    };
    MockedBackendInterceptor = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MockedBackendInterceptor);
    return MockedBackendInterceptor;
}());

var mockedBackendProvider = {
    provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HTTP_INTERCEPTORS"],
    useClass: MockedBackendInterceptor,
    multi: true
};


/***/ }),

/***/ "./src/app/mock.json":
/*!***************************!*\
  !*** ./src/app/mock.json ***!
  \***************************/
/*! exports provided: todos, default */
/***/ (function(module) {

module.exports = {"todos":[{"id":"1","title":"Go shopping","date":"2011-01-11T10:20:30Z","description":"Go shopping with friends","state":"TO_DO"},{"id":"2","title":"Clean house","date":"2011-01-10T10:20:30Z","description":"Clean every room of the house","state":"IN_PROGRESS"},{"id":"3","title":"Buy new phone","date":"2011-01-09T10:20:30Z","description":"Buy the last Apple Iphone","state":"IN_PROGRESS"}]};

/***/ }),

/***/ "./src/app/services/router.service.ts":
/*!********************************************!*\
  !*** ./src/app/services/router.service.ts ***!
  \********************************************/
/*! exports provided: RouterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouterService", function() { return RouterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");



var RouterService = /** @class */ (function () {
    function RouterService(router) {
        this.router = router;
    }
    /**
     * Redirect to route
     */
    RouterService.prototype.goTo = function (route, param) {
        if (param) {
            this.router.navigate([route, param]);
        }
        else {
            this.router.navigate([route]);
        }
    };
    RouterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RouterService);
    return RouterService;
}());



/***/ }),

/***/ "./src/app/store/reducers.models.ts":
/*!******************************************!*\
  !*** ./src/app/store/reducers.models.ts ***!
  \******************************************/
/*! exports provided: reducers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducers", function() { return reducers; });
/* harmony import */ var _todo_todo_reducer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo/todo.reducer */ "./src/app/store/todo/todo.reducer.ts");

var reducers = {
    toDoList: _todo_todo_reducer__WEBPACK_IMPORTED_MODULE_0__["todosReducer"]
};


/***/ }),

/***/ "./src/app/store/store.models.ts":
/*!***************************************!*\
  !*** ./src/app/store/store.models.ts ***!
  \***************************************/
/*! exports provided: INITIAL_STATE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_STATE", function() { return INITIAL_STATE; });
/**
 * Initial state of store
 */
var INITIAL_STATE = {
    toDoList: []
};


/***/ }),

/***/ "./src/app/store/todo/todo.action.ts":
/*!*******************************************!*\
  !*** ./src/app/store/todo/todo.action.ts ***!
  \*******************************************/
/*! exports provided: ADD_TODO, GET_TODOS, GET_TODOS_SUCCESS, GET_TODOS_ERROR, UPDATE_TODO, DELETE_TODO, AddTodo, GetTodos, GetTodosSuccess, GetTodosError, UpdateTodo, DeleteTodo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_TODO", function() { return ADD_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_TODOS", function() { return GET_TODOS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_TODOS_SUCCESS", function() { return GET_TODOS_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_TODOS_ERROR", function() { return GET_TODOS_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_TODO", function() { return UPDATE_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_TODO", function() { return DELETE_TODO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddTodo", function() { return AddTodo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetTodos", function() { return GetTodos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetTodosSuccess", function() { return GetTodosSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetTodosError", function() { return GetTodosError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateTodo", function() { return UpdateTodo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DeleteTodo", function() { return DeleteTodo; });
var ADD_TODO = '[todo] ADD_TODO';
var GET_TODOS = '[todo] GET_TODO';
var GET_TODOS_SUCCESS = '[Todo] GET_TODOS_SUCCESS';
var GET_TODOS_ERROR = '[Todo] GET_TODOS_ERROR';
var UPDATE_TODO = '[todo] UPDATE_TODO';
var DELETE_TODO = '[todo] DELETE_TODO';
/**
 * Add Todo action
 */
var AddTodo = /** @class */ (function () {
    function AddTodo(payload) {
        this.payload = payload;
        this.type = ADD_TODO;
    }
    return AddTodo;
}());

/**
 * Get Todos action
 */
var GetTodos = /** @class */ (function () {
    function GetTodos() {
        this.type = GET_TODOS;
    }
    return GetTodos;
}());

/**
 * Get Todos success action
 */
var GetTodosSuccess = /** @class */ (function () {
    function GetTodosSuccess(payload) {
        this.payload = payload;
        this.type = GET_TODOS_SUCCESS;
    }
    return GetTodosSuccess;
}());

/**
 * Get Todos error action
 */
var GetTodosError = /** @class */ (function () {
    function GetTodosError() {
        this.type = GET_TODOS_ERROR;
    }
    return GetTodosError;
}());

/**
 * Update Todo action
 */
var UpdateTodo = /** @class */ (function () {
    function UpdateTodo(payload) {
        this.payload = payload;
        this.type = UPDATE_TODO;
    }
    return UpdateTodo;
}());

/**
 * Delete Todo action
 */
var DeleteTodo = /** @class */ (function () {
    function DeleteTodo(payload) {
        this.payload = payload;
        this.type = DELETE_TODO;
    }
    return DeleteTodo;
}());



/***/ }),

/***/ "./src/app/store/todo/todo.effects.ts":
/*!********************************************!*\
  !*** ./src/app/store/todo/todo.effects.ts ***!
  \********************************************/
/*! exports provided: TodoEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TodoEffects", function() { return TodoEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _todo_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./todo.action */ "./src/app/store/todo/todo.action.ts");
/* harmony import */ var rxjs_add_operator_map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/map */ "./node_modules/rxjs-compat/_esm5/add/operator/map.js");
/* harmony import */ var rxjs_add_operator_mergeMap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/add/operator/mergeMap */ "./node_modules/rxjs-compat/_esm5/add/operator/mergeMap.js");
/* harmony import */ var rxjs_add_operator_catch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/add/operator/catch */ "./node_modules/rxjs-compat/_esm5/add/operator/catch.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs-compat/_esm5/Observable.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");










var TodoEffects = /** @class */ (function () {
    function TodoEffects(actions$, http) {
        var _this = this;
        this.actions$ = actions$;
        this.http = http;
        /**
         * Watch GET_TODOS action to perform API REST call
         */
        this.GetTodos$ = this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["ofType"])(_todo_action__WEBPACK_IMPORTED_MODULE_1__["GET_TODOS"]))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["mergeMap"])(function (action) {
            return _this.http.get('http://localhost:3000/todos')
                .map(function (data) {
                return new _todo_action__WEBPACK_IMPORTED_MODULE_1__["GetTodosSuccess"](data);
            });
        }));
    }
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["Effect"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", rxjs_Observable__WEBPACK_IMPORTED_MODULE_6__["Observable"])
    ], TodoEffects.prototype, "GetTodos$", void 0);
    TodoEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_7__["Actions"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"]])
    ], TodoEffects);
    return TodoEffects;
}());



/***/ }),

/***/ "./src/app/store/todo/todo.reducer.ts":
/*!********************************************!*\
  !*** ./src/app/store/todo/todo.reducer.ts ***!
  \********************************************/
/*! exports provided: todosReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "todosReducer", function() { return todosReducer; });
/* harmony import */ var _todo_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./todo.action */ "./src/app/store/todo/todo.action.ts");
/* harmony import */ var _enum_todo_state_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../enum/todo-state.enum */ "./src/app/enum/todo-state.enum.ts");


/**
 * Reducer that handle all TodoActions
 */
function todosReducer(state, action) {
    switch (action.type) {
        case _todo_action__WEBPACK_IMPORTED_MODULE_0__["GET_TODOS"]: {
            return [];
        }
        case _todo_action__WEBPACK_IMPORTED_MODULE_0__["GET_TODOS_SUCCESS"]: {
            return action.payload.slice();
        }
        case _todo_action__WEBPACK_IMPORTED_MODULE_0__["ADD_TODO"]: {
            var newTodosArray = new Array({
                id: String(state.length + 1),
                description: action.payload.description,
                title: action.payload.title,
                date: new Date(),
                state: _enum_todo_state_enum__WEBPACK_IMPORTED_MODULE_1__["TodoStateEnum"].toDo
            });
            return state.concat(newTodosArray);
        }
        case _todo_action__WEBPACK_IMPORTED_MODULE_0__["DELETE_TODO"]: {
            return state.filter(function (todo) {
                return todo.id !== action.payload.id;
            });
        }
        case _todo_action__WEBPACK_IMPORTED_MODULE_0__["UPDATE_TODO"]: {
            return state.map(function (todo) {
                return ((todo.id !== action.payload.id) ? todo : Object.assign({}, todo, {
                    description: action.payload.description,
                    date: new Date()
                }));
            });
        }
        default: {
            return state;
        }
    }
}


/***/ }),

/***/ "./src/app/store/todo/todo.selectors.ts":
/*!**********************************************!*\
  !*** ./src/app/store/todo/todo.selectors.ts ***!
  \**********************************************/
/*! exports provided: getItems, getItemById */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItems", function() { return getItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItemById", function() { return getItemById; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var getItems = function (state) { return state.toDoList; };
/**
 * Selector of Todo by ID
 */
var getItemById = function (id) { return Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createSelector"])(getItems, function (todos) { return todos.find(function (todo) {
    return todo.id === id;
}); }); };


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
var environment = {
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Profiles\klorgouilloux\Documents\TodoList\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map