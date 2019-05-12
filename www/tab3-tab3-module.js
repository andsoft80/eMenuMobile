(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab3-tab3-module"],{

/***/ "./src/app/tab3/tab3.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.module.ts ***!
  \*************************************/
/*! exports provided: Tab3PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3PageModule", function() { return Tab3PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab3_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab3.page */ "./src/app/tab3/tab3.page.ts");







var Tab3PageModule = /** @class */ (function () {
    function Tab3PageModule() {
    }
    Tab3PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"] }])
            ],
            declarations: [_tab3_page__WEBPACK_IMPORTED_MODULE_6__["Tab3Page"]]
        })
    ], Tab3PageModule);
    return Tab3PageModule;
}());



/***/ }),

/***/ "./src/app/tab3/tab3.page.html":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-select interface=\"popover\" placeholder=\"Выберите комнату\" slot=\"end\" [(ngModel)]=\"selectRoom\">\n            <ion-select-option *ngFor=\"let room of rooms[0]\" [value]=\"room.id\">{{room.name}}</ion-select-option>\n\n        </ion-select>\n        <!--        <ion-icon name=\"add\" *ngIf = \"listLevel\" (click)=\"newOrder()\" slot=\"end\"></ion-icon>\n                <ion-icon name=\"send\" *ngIf = \"listLevel\" (click)=\"sendOrder()\" slot=\"end\"></ion-icon>-->\n        <!-- Icons -->\n        <ion-button *ngIf = \"listLevel\" slot=\"end\" (click)=\"newOrder()\">\n            <ion-icon  name=\"add\"></ion-icon>\n        </ion-button>\n        <!-- Icons -->\n        <ion-button *ngIf = \"listLevel\" slot=\"end\" (click)=\"sendOrder()\">\n            <ion-icon  name=\"send\"></ion-icon>\n\n        </ion-button>\n\n        <ion-title>\n            Новый заказ\n        </ion-title>\n\n    </ion-toolbar>\n</ion-header>\n\n<ion-content>\n\n    <ion-list *ngIf = \"groupLevel\">\n        <ion-item *ngFor=\"let g of menuGroups[0]\" (click)=\"itemClick(g.id)\">\n            <ion-label >{{g.name}}</ion-label >\n\n\n        </ion-item>\n\n    </ion-list>\n\n    <ion-list *ngIf = \"listLevel\" id=\"list\">\n        <ion-item *ngFor=\"let i of menuList[0]; let p = index\" >\n            <div class=\"ion-text-start\">\n                {{i.name}}\n            </div>\n            <ion-input type=\"number\"  slot=\"end\" style = 'background-color: silver' (ngModelChange)=\"changeQtx($event, i.id, i.price, i.name, i.groupid)\" [(ngModel)]=\"values[p]\"></ion-input>\n            <div slot=\"end\" style='width: 100px'>\n                {{i.price}} руб.\n            </div>\n            <!--            <ion-label slot=\"start\">{{i.name}}</ion-label>\n                        <ion-label slot=\"end\">{{i.price}} руб.</ion-label >-->\n        </ion-item>\n\n    </ion-list>\n\n\n\n\n</ion-content>\n\n<ion-footer>\n    <h3>Стоимость заказа : {{orderAmount}} руб.</h3>\n</ion-footer>"

/***/ }),

/***/ "./src/app/tab3/tab3.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab3/tab3.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RhYjMvdGFiMy5wYWdlLnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/tab3/tab3.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab3/tab3.page.ts ***!
  \***********************************/
/*! exports provided: Tab3Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab3Page", function() { return Tab3Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _global_vars__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../global_vars */ "./src/app/global_vars.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");







var Tab3Page = /** @class */ (function () {
    function Tab3Page(http, storage, alertController, zone) {
        var _this = this;
        this.http = http;
        this.storage = storage;
        this.alertController = alertController;
        this.zone = zone;
        this.menuGroups = [];
        this.menuGroupsObj = [];
        this.menuList = null;
        this.groupLevel = null;
        this.listLevel = null;
        this.itemLevel = null;
        this.itemid = null;
        this.itemname = null;
        this.itemnode = null;
        this.itemprice = null;
        this.list = null;
        this.orderItem = {};
        this.order = [];
        this.orderAmount = 0;
        this.values = [];
        this.selectRoom = null;
        this.rooms = [];
        this.clientid = null;
        this.finalOrder = [];
        //        this.menuGroups = [
        //            "menu 1",
        //            "menu 2",
        //            "menu 3"
        //        ];
        //this.groupLevel = true;
        this.listLevel = true;
        //this.itemLevel = false;
        storage.get('clientid').then(function (val) {
            if (val) {
                _this.clientid = val;
                var pd = {
                    "an": 0,
                    "condition": [
                        { "field": "clientid", "value": val }
                    ]
                };
                _this.http.post(_global_vars__WEBPACK_IMPORTED_MODULE_3__["globalVars"].apiServerIp + ":" + _global_vars__WEBPACK_IMPORTED_MODULE_3__["globalVars"].apiServerPort + "/table/menugroup/action/get", pd, {})
                    .subscribe(function (data) {
                    _this.menuGroupsObj = JSON.parse(JSON.stringify(data));
                }, function (error) {
                    _this.showAlert(JSON.stringify(error) + " Сервер не отвечает.Ошибка подключения!");
                });
                _this.http.post(_global_vars__WEBPACK_IMPORTED_MODULE_3__["globalVars"].apiServerIp + ":" + _global_vars__WEBPACK_IMPORTED_MODULE_3__["globalVars"].apiServerPort + "/table/menu/action/get", pd, {})
                    .subscribe(function (data) {
                    _this.menuList = Array.of(data);
                }, function (error) {
                    _this.showAlert(JSON.stringify(error) + " Сервер не отвечает.Ошибка подключения!");
                });
                _this.http.post(_global_vars__WEBPACK_IMPORTED_MODULE_3__["globalVars"].apiServerIp + ":" + _global_vars__WEBPACK_IMPORTED_MODULE_3__["globalVars"].apiServerPort + "/table/rooms/action/get", pd, {})
                    .subscribe(function (data) {
                    _this.rooms = Array.of(data);
                }, function (error) {
                    _this.showAlert(JSON.stringify(error) + " Сервер не отвечает.Ошибка подключения!");
                });
            }
            else {
                _this.showAlert('Сканируйте QR код локации!');
            }
        });
    }
    //    itemClick(id) {
    //        let pd = {
    //            "an": 0,
    //            "condition": [
    //                {"field": "groupid", "value": id}
    //            ]
    //
    //        };
    //        this.http.post(globalVars.apiServerIp + ":" + globalVars.apiServerPort + "/table/menu/action/get", pd, {})
    //
    //            .subscribe(
    //                data => {
    //
    //
    //
    //                    this.menuList = Array.of(data);
    //                    this.groupLevel = false;
    //                    this.listLevel = true;
    //                    this.itemLevel = false;
    //
    //
    //
    //                },
    //                error => {
    //
    //                    alert(JSON.stringify(error) + " Сервер не отвечает.Ошибка подключения!");
    //                })
    //
    //    }
    //    listBack() {
    //        this.groupLevel = true;
    //        this.listLevel = false;
    //        this.itemLevel = false;
    //    }
    //    itemBack() {
    //        this.groupLevel = false;
    //        this.listLevel = true;
    //        this.itemLevel = false;
    //    }
    //    itemListClick(id, name, node, price) {
    //        this.itemid = id;
    //        this.itemname = name;
    //        this.itemnode = node;
    //        this.itemprice = price;
    //
    //        this.groupLevel = false;
    //        this.listLevel = false;
    //        this.itemLevel = true;
    //    }
    Tab3Page.prototype.changeQtx = function (event, id, price, name, groupid) {
        this.orderItem = {};
        this.orderItem["id"] = id;
        this.orderItem["qtx"] = event;
        this.orderItem["amount"] = event * price;
        this.orderItem["name"] = name;
        this.orderItem["group"] = groupid;
        var push = true;
        for (var i = 0; i < this.order.length; i++) {
            if (this.order[i].id == id) {
                this.order[i] = this.orderItem;
                push = false;
            }
        }
        if (push) {
            this.order.push(this.orderItem);
        }
        this.orderAmount = 0;
        for (var i = 0; i < this.order.length; i++) {
            this.orderAmount += this.order[i].amount;
        }
        //        alert(JSON.stringify(this.order));
    };
    Tab3Page.prototype.newOrder = function () {
        this.selectRoom = null;
        this.orderAmount = 0;
        this.order = [];
        for (var i = 0; i < this.values.length; i++) {
            this.values[i] = '';
        }
    };
    Tab3Page.prototype.getGroupName = function (id) {
        for (var i = 0; i < this.menuGroupsObj.length; i++) {
            if (this.menuGroupsObj[i].id == id) {
                return this.menuGroupsObj[i].name;
            }
        }
    };
    Tab3Page.prototype.sendOrder = function () {
        var _this = this;
        this.finalOrder = [];
        var finalOrderItem = { "group": "", "items": [] };
        var finalOrderItemObj = {};
        if (this.selectRoom == null) {
            this.showAlert('Комната не выбрана!');
            return;
        }
        for (var i = 0; i < this.order.length; i++) {
            if (this.order[i].qtx == null || this.order[i].qtx == '') {
                continue;
            }
            var newGroup = true;
            finalOrderItemObj = {};
            finalOrderItemObj["name"] = this.order[i].name;
            finalOrderItemObj["qty"] = this.order[i].qtx;
            finalOrderItemObj["amount"] = this.order[i].amount;
            for (var k = 0; k < this.finalOrder.length; k++) {
                if (this.finalOrder[k].group == this.getGroupName(this.order[i].group)) {
                    this.finalOrder[k].items.push(finalOrderItemObj);
                    newGroup = false;
                    break;
                }
            }
            if (newGroup) {
                finalOrderItem = { "group": "", "items": [] };
                this.finalOrder.push(finalOrderItem);
                this.finalOrder[this.finalOrder.length - 1].group = this.getGroupName(this.order[i].group);
                this.finalOrder[this.finalOrder.length - 1].items.push(finalOrderItemObj);
            }
        }
        if (this.finalOrder.length == 0) {
            this.showAlert("Заказ пустой!");
            return;
        }
        var parcel = {
            "an": 0,
            "orderdate": String(new Date().getFullYear()) + "." + String(new Date().getMonth() + 1) + "." + String(new Date().getDate()),
            "roomid": this.selectRoom,
            "status": "Новый",
            "content": JSON.stringify(this.finalOrder),
            "clientid": this.clientid
        };
        this.http.post(_global_vars__WEBPACK_IMPORTED_MODULE_3__["globalVars"].apiServerIp + ":" + _global_vars__WEBPACK_IMPORTED_MODULE_3__["globalVars"].apiServerPort + "/table/orders/action/post", parcel, {})
            .subscribe(function (data) {
            if (JSON.stringify(data).indexOf('err') > 0) {
                _this.showAlert("Ошибка: " + JSON.stringify(data));
            }
            else {
                _this.showAlert("Заказ успешно отправлен!");
                _this.newOrder();
            }
        }, function (error) {
            _this.showAlert(JSON.stringify(error) + " Сервер не отвечает.Ошибка подключения!");
        });
    };
    Tab3Page.prototype.showAlert = function (text) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alertA;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Информация',
                            //            subHeader: 'Локация',
                            message: text,
                            buttons: [{
                                    text: 'ok'
                                }]
                        })];
                    case 1:
                        alertA = _a.sent();
                        return [4 /*yield*/, alertA.present()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Tab3Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab3',
            template: __webpack_require__(/*! ./tab3.page.html */ "./src/app/tab3/tab3.page.html"),
            styles: [__webpack_require__(/*! ./tab3.page.scss */ "./src/app/tab3/tab3.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_2__["Storage"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], Tab3Page);
    return Tab3Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab3-tab3-module.js.map