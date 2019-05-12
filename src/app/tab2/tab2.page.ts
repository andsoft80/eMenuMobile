import {Component} from '@angular/core';
import {Storage} from '@ionic/storage';
import {globalVars} from '../global_vars';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
    selector: 'app-tab2',
    templateUrl: 'tab2.page.html',
    styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
    menuGroups: any[] = [];

    menuList = null
    groupLevel = null;
    listLevel = null;
    itemLevel = null;
    itemid = null;
    itemname = null;
    itemnode = null;
    itemprice = null;
    constructor(
        public http: HttpClient,
        public storage: Storage


    ) {
        //        this.menuGroups = [
        //            "menu 1",
        //            "menu 2",
        //            "menu 3"
        //        ];
        this.groupLevel = true;
        this.listLevel = false;
        this.itemLevel = false;
        storage.get('clientid').then((val) => {
            if (val) {

                let pd = {
                    "an": 0,
                    "condition": [
                        {"field": "clientid", "value": val}
                    ]

                };
                this.http.post(globalVars.apiServerIp + ":" + globalVars.apiServerPort + "/table/menugroup/action/get", pd, {})

                    .subscribe(
                        data => {


                            if (JSON.stringify(data) !== '[]') {
                                this.menuGroups = Array.of(data);
                                //alert(JSON.stringify(this.menuGroups[0]));
                                //alert(JSON.stringify(this.menuGroups));

                            } else {
                                alert("Меню для локации не задано!");
                            }


                        },
                        error => {

                            alert(JSON.stringify(error) + " Сервер не отвечает.Ошибка подключения!");
                        })
            }
            else{
                alert('Сканируйте QR код локации!');
            }
        });

    }
    itemClick(id) {
        let pd = {
            "an": 0,
            "condition": [
                {"field": "groupid", "value": id}
            ]

        };
        this.http.post(globalVars.apiServerIp + ":" + globalVars.apiServerPort + "/table/menu/action/get", pd, {})

            .subscribe(
                data => {



                    this.menuList = Array.of(data);
                    this.groupLevel = false;
                    this.listLevel = true;
                    this.itemLevel = false;



                },
                error => {

                    alert(JSON.stringify(error) + " Сервер не отвечает.Ошибка подключения!");
                })

    }
    listBack() {
        this.groupLevel = true;
        this.listLevel = false;
        this.itemLevel = false;
    }
    itemBack() {
        this.groupLevel = false;
        this.listLevel = true;
        this.itemLevel = false;
    }
    itemListClick(id, name, node, price) {
        this.itemid = id;
        this.itemname = name;
        this.itemnode = node;
        this.itemprice = price;

        this.groupLevel = false;
        this.listLevel = false;
        this.itemLevel = true;
    }

}
