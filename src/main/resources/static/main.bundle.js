webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".main-content {\n  width: 100%;\n}\n\n.create-button {\n  margin: 10px;\n}\n\n.todos-panel {\n  padding-top: 10px;\n}\n\n.complete {\n  color: green;\n}\n\n.uncomplete {\n  color: red;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar>Todo Application</mat-toolbar>\n<div class=\"main-content\">\n  <button mat-button color=\"primary\" (click)=\"onNewTodoClick()\" class=\"create-button\">\n    <mat-icon>library_add</mat-icon>\n    New Todo\n  </button>\n  <div class=\"todos-panel\">\n    <!-- Uncompleted Todos -->\n    <mat-accordion>\n      <mat-expansion-panel *ngFor=\"let todo of getUncompletedTodos(); index as i\">\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            <mat-icon class=\"uncomplete\">close</mat-icon>\n            <span><strong>{{todo.createts | date: 'medium' }}</strong></span>\n          </mat-panel-title>\n          <mat-panel-description>{{todo.title}}</mat-panel-description>\n        </mat-expansion-panel-header>\n        <p>{{todo.description}}</p>\n        <mat-action-row>\n          <button mat-button color=\"primary\" (click)=\"todo.completed = true\">\n            <mat-icon>check</mat-icon>\n            Complete\n          </button>\n          <button mat-button color=\"secondary\" (click)=\"deleteTodo(i)\">\n            <mat-icon>delete</mat-icon>\n            Delete\n          </button>\n        </mat-action-row>\n      </mat-expansion-panel>\n    </mat-accordion>\n    <!-- Completed Todos -->\n    <mat-accordion>\n      <mat-expansion-panel *ngFor=\"let todo of getCompletedTodos(); index as i\">\n        <mat-expansion-panel-header>\n          <mat-panel-title>\n            <mat-icon class=\"complete\">check</mat-icon>\n            <span><strong>{{todo.createts | date: 'medium' }}{{todo.title}}</strong></span>\n          </mat-panel-title>\n          <mat-panel-description>{{todo.title}}</mat-panel-description>\n        </mat-expansion-panel-header>\n        <p>{{todo.description}}</p>\n        <mat-action-row>\n          <button mat-button color=\"primary\" (click)=\"todo.completed = false\">\n            <mat-icon>close</mat-icon>\n            Uncomplete\n          </button>\n          <button mat-button color=\"secondary\" (click)=\"deleteTodo(i)\">\n            <mat-icon>delete</mat-icon>\n            Delete\n          </button>\n        </mat-action-row>\n      </mat-expansion-panel>\n    </mat-accordion>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dialogs_todo_dialog__ = __webpack_require__("../../../../../src/app/dialogs/todo-dialog.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var AppComponent = (function () {
    function AppComponent(todoDialogRef, http) {
        this.todoDialogRef = todoDialogRef;
        this.http = http;
        this.todos = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.http.get("/todos").subscribe(function (result) {
            _this.todos = result['_embedded']['todos'];
        });
    };
    AppComponent.prototype.onNewTodoClick = function () {
        var _this = this;
        var dialogRef = this.todoDialogRef.open(__WEBPACK_IMPORTED_MODULE_1__dialogs_todo_dialog__["a" /* TodoDialog */], {
            data: {
                title: 'Create new Todo'
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
            if (result) {
                if (result.title) {
                    console.log("saving new todo");
                    _this.saveNewTodo(result);
                }
            }
        });
    };
    AppComponent.prototype.getUncompletedTodos = function () {
        return this.todos.filter(function (todo) { return !todo.completed; });
    };
    AppComponent.prototype.getCompletedTodos = function () {
        return this.todos.filter(function (todo) { return todo.completed; });
    };
    AppComponent.prototype.saveNewTodo = function (todo) {
        var _this = this;
        this.http.post("/todos", todo).subscribe(function (response) {
            console.log(response);
            _this.todos.push(response);
        });
    };
    AppComponent.prototype.updateTodo = function (index) {
        var todo = this.todos[index];
        var uri = "/todos/" + todo.id;
        this.http.put(uri, todo).subscribe(function (result) {
            console.log(result);
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatDialog */], __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__dialogs_todo_dialog__ = __webpack_require__("../../../../../src/app/dialogs/todo-dialog.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["H" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__dialogs_todo_dialog__["a" /* TodoDialog */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_forms__["h" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["j" /* MatToolbarModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["b" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["h" /* MatIconModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["c" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["e" /* MatDialogModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["g" /* MatExpansionModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_material__["i" /* MatInputModule */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */], __WEBPACK_IMPORTED_MODULE_7__dialogs_todo_dialog__["a" /* TodoDialog */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/dialogs/todo-dialog.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".full-width {\n  width: 100%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/dialogs/todo-dialog.html":
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>\n  <mat-icon>library_add</mat-icon>\n  {{data.title}}\n</h2>\n<mat-dialog-content>\n  <form>\n    <mat-form-field class=\"full-width\">\n      <input matInput placeholder=\"Todo Title\" name=\"title\" [(ngModel)]=\"todo.title\">\n    </mat-form-field>\n    <mat-form-field class=\"full-width\">\n      <textarea matInput placeholder=\"Todo Description\" name=\"description\" [(ngModel)]=\"todo.description\"></textarea>\n    </mat-form-field>\n  </form>\n</mat-dialog-content>\n<mat-dialog-actions>\n  <button mat-button (click)=\"onCancelClick()\">Cancel</button>\n  <button mat-button (click)=\"onSaveClick()\">Save</button>\n</mat-dialog-actions>\n"

/***/ }),

/***/ "../../../../../src/app/dialogs/todo-dialog.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TodoDialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_todo__ = __webpack_require__("../../../../../src/app/model/todo.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var TodoDialog = (function () {
    function TodoDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.todo = new __WEBPACK_IMPORTED_MODULE_2__model_todo__["a" /* Todo */]();
    }
    TodoDialog.prototype.onSaveClick = function () {
        this.dialogRef.close(this.todo);
    };
    TodoDialog.prototype.onCancelClick = function () {
        this.dialogRef.close();
    };
    TodoDialog = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'todo-dialog',
            template: __webpack_require__("../../../../../src/app/dialogs/todo-dialog.html"),
            styles: [__webpack_require__("../../../../../src/app/dialogs/todo-dialog.css")]
        }),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* Inject */])(__WEBPACK_IMPORTED_MODULE_1__angular_material__["a" /* MAT_DIALOG_DATA */])),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_material__["f" /* MatDialogRef */], Object])
    ], TodoDialog);
    return TodoDialog;
}());



/***/ }),

/***/ "../../../../../src/app/model/todo.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Todo; });
var Todo = (function () {
    function Todo() {
        this.title = '';
        this.description = '';
    }
    return Todo;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map