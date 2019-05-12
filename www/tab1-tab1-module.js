(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tab1-tab1-module"],{

/***/ "./src/app/tab1/tab1.module.ts":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.module.ts ***!
  \*************************************/
/*! exports provided: Tab1PageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1PageModule", function() { return Tab1PageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _tab1_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./tab1.page */ "./src/app/tab1/tab1.page.ts");







var Tab1PageModule = /** @class */ (function () {
    function Tab1PageModule() {
    }
    Tab1PageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            imports: [
                _ionic_angular__WEBPACK_IMPORTED_MODULE_1__["IonicModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild([{ path: '', component: _tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"] }])
            ],
            declarations: [_tab1_page__WEBPACK_IMPORTED_MODULE_6__["Tab1Page"]]
        })
    ], Tab1PageModule);
    return Tab1PageModule;
}());



/***/ }),

/***/ "./src/app/tab1/tab1.page.html":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.html ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ion-header>\n    <ion-toolbar>\n        <ion-title>\n            QR Код локации\n        </ion-title>\n    </ion-toolbar>\n</ion-header>\n\n<ion-content  text-center>\n    <!--     <ion-card class=\"welcome-card\">\n          <ion-img src=\"/assets/shapes.svg\"></ion-img>\n          <ion-card-header>\n            <ion-card-subtitle>Get Started</ion-card-subtitle>\n            <ion-card-title>Welcome to Ionic</ion-card-title>\n          </ion-card-header>\n          <ion-card-content>\n            <p>Now that your app has been created, you'll want to start building out features and components. Check out some of the resources below for next steps.</p>\n          </ion-card-content>\n        </ion-card>\n        <ion-list lines=\"none\">\n          <ion-list-header>\n            <ion-label>Resources</ion-label>\n          </ion-list-header>\n          <ion-item href=\"https://ionicframework.com/docs/\">\n            <ion-icon slot=\"start\" color=\"medium\" name=\"book\"></ion-icon>\n            <ion-label>Ionic Documentation</ion-label>\n          </ion-item>\n          <ion-item href=\"https://ionicframework.com/docs/building/scaffolding\">\n            <ion-icon slot=\"start\" color=\"medium\" name=\"build\"></ion-icon>\n            <ion-label>Scaffold Out Your App</ion-label>\n          </ion-item>\n          <ion-item href=\"https://ionicframework.com/docs/layout/structure\">\n            <ion-icon slot=\"start\" color=\"medium\" name=\"grid\"></ion-icon>\n            <ion-label>Change Your App Layout</ion-label>\n          </ion-item>\n          <ion-item href=\"https://ionicframework.com/docs/theming/basics\">\n            <ion-icon slot=\"start\" color=\"medium\" name=\"color-fill\"></ion-icon>\n            <ion-label>Theme Your App</ion-label>\n          </ion-item>\n        </ion-list> -->\n\n    <ion-grid>\n        <ion-row  justify-content-center align-items-center style='height: 100%'>\n            <!-- <ion-col style=\"margin: auto;\"> -->\n            <ion-button (click)='scanCode()'  class=\"mainbtn\">Сканировать</ion-button>\n            <ion-card *ngIf = \"scannedCode\">\n                <ion-card-content>\n                    Считанный код : {{scannedCode}}\n                </ion-card-content>\n\n            </ion-card>\n\n            <ion-card *ngIf = \"location\">\n                <ion-card-content>\n                    Текущая локация : {{location}}\n                </ion-card-content>\n\n            </ion-card>\n            <!-- </ion-col> -->\n        </ion-row>\n    </ion-grid>\n</ion-content>\n"

/***/ }),

/***/ "./src/app/tab1/tab1.page.scss":
/*!*************************************!*\
  !*** ./src/app/tab1/tab1.page.scss ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".welcome-card ion-img {\n  max-height: 35vh;\n  overflow: hidden; }\n\n.mainbtn {\n  height: 100px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFiMS9DOlxcUHJvamVjdHNcXGVNZW51TW9iaWxlL3NyY1xcYXBwXFx0YWIxXFx0YWIxLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFLbEI7RUFDRSxhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90YWIxL3RhYjEucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndlbGNvbWUtY2FyZCBpb24taW1nIHtcbiAgbWF4LWhlaWdodDogMzV2aDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuXG5cbi5tYWluYnRuIHtcbiAgaGVpZ2h0OiAxMDBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/tab1/tab1.page.ts":
/*!***********************************!*\
  !*** ./src/app/tab1/tab1.page.ts ***!
  \***********************************/
/*! exports provided: Tab1Page */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tab1Page", function() { return Tab1Page; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/barcode-scanner/ngx */ "./node_modules/@ionic-native/barcode-scanner/ngx/index.js");
/* harmony import */ var _ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic-native/android-permissions/ngx */ "./node_modules/@ionic-native/android-permissions/ngx/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/dist/fesm5.js");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/storage */ "./node_modules/@ionic/storage/fesm5/ionic-storage.js");
/* harmony import */ var _global_vars__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../global_vars */ "./src/app/global_vars.ts");







//import { HTTP } from '@ionic-native/http/ngx';

var Tab1Page = /** @class */ (function () {
    function Tab1Page(androidPermissions, barcodeScanner, http, alertController, storage) {
        var _this = this;
        this.androidPermissions = androidPermissions;
        this.barcodeScanner = barcodeScanner;
        this.http = http;
        this.alertController = alertController;
        this.storage = storage;
        this.scannedCode = null;
        this.location = null;
        // this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA        en(
        //   result => console.log('Has permission?',result.hasPermi        n),
        //   err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.        RA)
        // );
        storage.get('clientid').then(function (val) {
            if (val) {
                storage.get('clientname').then(function (location) {
                    _this.location = location;
                });
            }
        });
    }
    Tab1Page.prototype.showAlert = function (text, id) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var alertA;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.alertController.create({
                            header: 'Подтверждение локации',
                            //            subHeader: 'Локация',
                            message: text,
                            buttons: [{
                                    text: 'Все верно',
                                    handler: function () {
                                        _this.storage.set('clientid', id);
                                        _this.storage.set('clientname', text);
                                    }
                                }, 'Отмена']
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
    Tab1Page.prototype.scanCode = function () {
        //this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.INTERNET]);
        //this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA]);
        var _this = this;
        this.barcodeScanner.scan().then(function (barcodeData) {
            _this.scannedCode = barcodeData.text;
            var pd = {
                "an": 0,
                "condition": [
                    { "field": "uid", "value": barcodeData.text }
                ]
            };
            var headers = {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            };
            _this.http.post(_global_vars__WEBPACK_IMPORTED_MODULE_7__["globalVars"].apiServerIp + ":" + _global_vars__WEBPACK_IMPORTED_MODULE_7__["globalVars"].apiServerPort + "/table/clients/action/get", pd, { headers: headers })
                //this.http.post(globalVars.apiServerIp + ":" + globalVars.apiServerPort + "/table/clients/action/get", pd,{})
                .subscribe(function (data) {
                if (JSON.stringify(data) !== '[]') {
                    _this.showAlert(data[0].name, data[0].id);
                    //alert(data[0].name);
                }
                else {
                    alert("Локация по QR коду не найдена!");
                }
            }, function (error) {
                alert(JSON.stringify(error) + " Сервер не отвечает.Ошибка подключения!");
            });
        });
    };
    Tab1Page = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tab1',
            template: __webpack_require__(/*! ./tab1.page.html */ "./src/app/tab1/tab1.page.html"),
            styles: [__webpack_require__(/*! ./tab1.page.scss */ "./src/app/tab1/tab1.page.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_native_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_3__["AndroidPermissions"],
            _ionic_native_barcode_scanner_ngx__WEBPACK_IMPORTED_MODULE_2__["BarcodeScanner"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["AlertController"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_6__["Storage"]])
    ], Tab1Page);
    return Tab1Page;
}());



/***/ })

}]);
//# sourceMappingURL=tab1-tab1-module.js.map