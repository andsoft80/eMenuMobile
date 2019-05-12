(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab2-tab2-module"],{

/***/ "./src/app/tab2/tab2.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.module.ts ***!
  \*************************************/
/*! exports provided: Tab2PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2PageModule", function() { return Tab2PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab2_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab2.page */ "./src/app/tab2/tab2.page.ts");







var Tab2PageModule = /** @class */ (function () {
    function Tab2PageModule() {
    }
    Tab2PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"] }])
            ],
            declarations: [_tab2_page__WEBPACK_IMPORTED_MODULE_6__["Tab2Page"]]
        })
    ], Tab2PageModule);
    return Tab2PageModule;
}());



/***/ }),

/***/ "./src/app/tab2/tab2.page.html":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n<!--        <ion-icon name=\"arrow-back\" *ngIf = \"listLevel\" (click)=\"listBack()\" slot=\"start\"></ion-icon>\n        <ion-icon name=\"arrow-back\" *ngIf = \"itemLevel\" (click)=\"itemBack()\" slot=\"start\"></ion-icon>-->\n        <ion-button *ngIf = \"listLevel\" slot=\"start\" (click)=\"listBack()\">\n            <ion-icon  name=\"arrow-back\"></ion-icon>\n        </ion-button>      \n\n        <ion-button *ngIf = \"itemLevel\" slot=\"start\" (click)=\"itemBack()\">\n            <ion-icon  name=\"arrow-back\"></ion-icon>\n        </ion-button>  \n\n\n        <ion-title>\n            Меню локации\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-list *ngIf = \"groupLevel\">\n        <ion-item *ngFor=\"let g of menuGroups[0]\" (click)=\"itemClick(g.id)\">\n            <ion-label >{{g.name}}</ion-label >\n\n\n        </ion-item>\n\n    </ion-list>\n\n    <ion-list *ngIf = \"listLevel\">\n        <ion-item *ngFor=\"let i of menuList[0]\" (click)=\"itemListClick(i.id, i.name, i.node, i.price)\">\n            <div class=\"ion-text-start\">\n                {{i.name}}\n            </div>\n            <div slot=\"end\" >\n                {{i.price}} руб.\n            </div>\n            <!--            <ion-label slot=\"start\">{{i.name}}</ion-label>\n                        <ion-label slot=\"end\">{{i.price}} руб.</ion-label >-->\n        </ion-item>\n\n    </ion-list>\n    <ion-card *ngIf = \"itemLevel\">\n        <ion-card-title>{{itemname}}</ion-card-title>\n        <ion-card-content>\n            <p>Описание: {{itemnode}}</p>\n            <p>Цена: {{itemprice}} руб.</p>\n\n        </ion-card-content>\n    </ion-card>\n\n\n\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab2/tab2.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab2/tab2.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjIvdGFiMi5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/tab2/tab2.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab2/tab2.page.ts ***!
  \***********************************/
/*! exports provided: Tab2Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab2Page", function() { return Tab2Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _global_vars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../global_vars */ "./src/app/global_vars.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");





var Tab2Page = /** @class */ (function () {
    function Tab2Page(http, storage) {
        var _this = this;
        this.http = http;
        this.storage = storage;
        this.menuGroups = [];
        this.menuList = null;
        this.groupLevel = null;
        this.listLevel = null;
        this.itemLevel = null;
        this.itemid = null;
        this.itemname = null;
        this.itemnode = null;
        this.itemprice = null;
        //        this.menuGroups = [
        //            "menu 1",
        //            "menu 2",
        //            "menu 3"
        //        ];
        this.groupLevel = true;
        this.listLevel = false;
        this.itemLevel = false;
        storage.get('clientid').then(function (val) {
            if (val) {
                var pd = {
                    "an": 0,
                    "condition": [
                        { "field": "clientid", "value": val }
                    ]
                };
                _this.http.post(_global_vars__WEBPACK_IMPORTED_MODULE_3__["globalVars"].apiServerIp + ":" + _global_vars__WEBPACK_IMPORTED_MODULE_3__["globalVars"].apiServerPort + "/table/menugroup/action/get", pd, {})
                    .subscribe(function (data) {
                    if (JSON.stringify(data) !== '[]') {
                        _this.menuGroups = Array.of(data);
                        //alert(JSON.stringify(this.menuGroups[0]));
                        //alert(JSON.stringify(this.menuGroups));
                    }
                    else {
                        alert("Меню для локации не задано!");
                    }
                }, function (error) {
                    alert(JSON.stringify(error) + " Сервер не отвечает.Ошибка подключения!");
                });
            }
            else {
                alert('Сканируйте QR код локации!');
            }
        });
    }
    Tab2Page.prototype.itemClick = function (id) {
        var _this = this;
        var pd = {
            "an": 0,
            "condition": [
                { "field": "groupid", "value": id }
            ]
        };
        this.http.post(_global_vars__WEBPACK_IMPORTED_MODULE_3__["globalVars"].apiServerIp + ":" + _global_vars__WEBPACK_IMPORTED_MODULE_3__["globalVars"].apiServerPort + "/table/menu/action/get", pd, {})
            .subscribe(function (data) {
            _this.menuList = Array.of(data);
            _this.groupLevel = false;
            _this.listLevel = true;
            _this.itemLevel = false;
        }, function (error) {
            alert(JSON.stringify(error) + " Сервер не отвечает.Ошибка подключения!");
        });
    };
    Tab2Page.prototype.listBack = function () {
        this.groupLevel = true;
        this.listLevel = false;
        this.itemLevel = false;
    };
    Tab2Page.prototype.itemBack = function () {
        this.groupLevel = false;
        this.listLevel = true;
        this.itemLevel = false;
    };
    Tab2Page.prototype.itemListClick = function (id, name, node, price) {
        this.itemid = id;
        this.itemname = name;
        this.itemnode = node;
        this.itemprice = price;
        this.groupLevel = false;
        this.listLevel = false;
        this.itemLevel = true;
    };
    Tab2Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab2',
            template: __webpack_require__(/*! ./tab2.page.html */ "./src/app/tab2/tab2.page.html"),
            styles: [__webpack_require__(/*! ./tab2.page.scss */ "./src/app/tab2/tab2.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"]])
    ], Tab2Page);
    return Tab2Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab2-tab2-module.js.map