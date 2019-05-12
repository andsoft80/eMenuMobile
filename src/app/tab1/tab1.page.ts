import {Component} from '@angular/core';
import {BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';
import {AndroidPermissions} from '@ionic-native/android-permissions/ngx';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AlertController} from '@ionic/angular';
import {Storage} from '@ionic/storage';

//import { HTTP } from '@ionic-native/http/ngx';



import {globalVars} from '../global_vars';

@Component({
    selector: 'app-tab1',
    templateUrl: 'tab1.page.html',
    styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
    scannedCode = null;
    location = null;
    constructor(
        private androidPermissions: AndroidPermissions,
        private barcodeScanner: BarcodeScanner,
        public http: HttpClient,
        public alertController: AlertController,
        public storage: Storage


    ) {
        // this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.CAMERA        en(
        //   result => console.log('Has permission?',result.hasPermi        n),
        //   err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.        RA)
        // );
        storage.get('clientid').then((val) => {
            if (val) {

                storage.get('clientname').then((location) => {
                    this.location = location;
                })

            }
        });


    }

    async showAlert(text, id) {
        const alertA = await this.alertController.create({
            header: 'Подтверждение локации',
            //            subHeader: 'Локация',
            message: text,
            buttons: [{
                text: 'Все верно',
                handler: () => {
                    this.storage.set('clientid', id);
                    this.storage.set('clientname', text);
                }

            }, 'Отмена']
        });

        await alertA.present();
    }

    scanCode() {







        //this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.INTERNET]);
        //this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.CAMERA]);

        this.barcodeScanner.scan().then(barcodeData => {
            this.scannedCode = barcodeData.text;

            let pd = {
                "an": 0,
                "condition": [
                    {"field": "uid", "value": barcodeData.text}
                ]
            };
            let headers =
            {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, PUT',
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }

            this.http.post(globalVars.apiServerIp + ":" + globalVars.apiServerPort + "/table/clients/action/get", pd, {headers: headers})
                //this.http.post(globalVars.apiServerIp + ":" + globalVars.apiServerPort + "/table/clients/action/get", pd,{})
                .subscribe(
                    data => {


                        if (JSON.stringify(data) !== '[]') {
                            this.showAlert(data[0].name, data[0].id);
                            //alert(data[0].name);
                        } else {
                            alert("Локация по QR коду не найдена!");
                        }


                    },
                    error => {

                        alert(JSON.stringify(error) + " Сервер не отвечает.Ошибка подключения!");
                    })
        })
    }

}


