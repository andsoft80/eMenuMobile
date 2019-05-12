import {Component} from '@angular/core';
import {Storage} from '@ionic/storage';
import {globalVars} from '../global_vars';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {NgZone} from '@angular/core';
import {AlertController} from '@ionic/angular';

@Component({
    selector: 'app-tab3',
    templateUrl: 'tab3.page.html',
    styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
    menuGroups: any[] = [];
    menuGroupsObj = [];
    menuList = null
    groupLevel = null;
    listLevel = null;
    itemLevel = null;
    itemid = null;
    itemname = null;
    itemnode = null;
    itemprice = null;
    list = null;
    orderItem = {};
    order = [];
    orderAmount = 0;
    values: Array<string> = [];
    selectRoom = null;
    rooms: any[] = [];
    clientid = null;
    finalOrder = [];
    constructor(
        public http: HttpClient,
        public storage: Storage,
        public alertController: AlertController,
        private zone: NgZone


    ) {
        //        this.menuGroups = [
        //            "menu 1",
        //            "menu 2",
        //            "menu 3"
        //        ];
        //this.groupLevel = true;
        this.listLevel = true;
        //this.itemLevel = false;
        storage.get('clientid').then((val) => {
            if (val) {
                this.clientid = val;
                let pd = {
                    "an": 0,
                    "condition": [
                        {"field": "clientid", "value": val}
                    ]

                };
                this.http.post(globalVars.apiServerIp + ":" + globalVars.apiServerPort + "/table/menugroup/action/get", pd, {})

                    .subscribe(
                        data => {



                            this.menuGroupsObj = JSON.parse(JSON.stringify(data));






                        },
                        error => {

                            this.showAlert(JSON.stringify(error) + " Сервер не отвечает.Ошибка подключения!");
                        })
                this.http.post(globalVars.apiServerIp + ":" + globalVars.apiServerPort + "/table/menu/action/get", pd, {})

                    .subscribe(
                        data => {



                            this.menuList = Array.of(data);






                        },
                        error => {

                            this.showAlert(JSON.stringify(error) + " Сервер не отвечает.Ошибка подключения!");
                        })
                this.http.post(globalVars.apiServerIp + ":" + globalVars.apiServerPort + "/table/rooms/action/get", pd, {})

                    .subscribe(
                        data => {



                            this.rooms = Array.of(data);






                        },
                        error => {

                            this.showAlert(JSON.stringify(error) + " Сервер не отвечает.Ошибка подключения!");
                        })
            }
            else {
                this.showAlert('Сканируйте QR код локации!');
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
    changeQtx(event, id, price, name, groupid) {
        this.orderItem = {};
        this.orderItem["id"] = id;
        this.orderItem["qtx"] = event;
        this.orderItem["amount"] = event * price;
        this.orderItem["name"] = name;
        this.orderItem["group"] = groupid;
        let push = true;
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
    }
    newOrder() {
        this.selectRoom = null;
        this.orderAmount = 0;
        this.order = [];
        for (var i = 0; i < this.values.length; i++) {
            this.values[i] = '';
        }
    }
    getGroupName(id) {
        for (var i = 0; i < this.menuGroupsObj.length; i++) {
            if (this.menuGroupsObj[i].id == id) {
                return this.menuGroupsObj[i].name;
            }
        }
    }
    
    sendOrder() {
        this.finalOrder = [];
        let finalOrderItem = {"group": "", "items": []};
        let finalOrderItemObj = {};
        if (this.selectRoom == null) {
            this.showAlert('Комната не выбрана!');
            return;
        }


        for (var i = 0; i < this.order.length; i++) {
            if (this.order[i].qtx == null || this.order[i].qtx == '') {
                continue;
            }
            let newGroup = true;
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
                finalOrderItem = {"group": "", "items": []};
                this.finalOrder.push(finalOrderItem);
                this.finalOrder[this.finalOrder.length - 1].group = this.getGroupName(this.order[i].group);
                this.finalOrder[this.finalOrder.length - 1].items.push(finalOrderItemObj);


            }
        }
        
        if (this.finalOrder.length == 0) {
            this.showAlert("Заказ пустой!");
            return;
        }
        let parcel =
        {
            "an": 0,
            "orderdate": String(new Date().getFullYear()) + "." + String(new Date().getMonth()+1) + "." + String(new Date().getDate()),
            "roomid": this.selectRoom,
            "status": "Новый",
            "content": JSON.stringify(this.finalOrder),
            "clientid": this.clientid
        };
        
        this.http.post(globalVars.apiServerIp + ":" + globalVars.apiServerPort + "/table/orders/action/post", parcel, {})

            .subscribe(
                data => {


                    if (JSON.stringify(data).indexOf('err')>0){
                        this.showAlert("Ошибка: " +JSON.stringify(data));
                    }
                    else{
                       this.showAlert("Заказ успешно отправлен!"); 
                        this.newOrder();
                    }






                },
                error => {

                    this.showAlert(JSON.stringify(error) + " Сервер не отвечает.Ошибка подключения!");
                })

    }
    async showAlert(text) {
        const alertA = await this.alertController.create({
            header: 'Информация',
            //            subHeader: 'Локация',
            message: text,
            buttons: [{
                text: 'ok'

            }]
        });

        await alertA.present();
    }
}
