//declare var apiServerIp: String;
//declare var apiServerPort: String;
//declare var admUser: String;
//declare var admPassword: String;

import { Component } from '@angular/core';
import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    //public apiServerIp: String
//    public apiServerIp: String,
//    public apiServerPort: String,
//    public admUser: String,
//    public admPassword: String
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
        //apiServerIp = 'ip';
//      apiServerIp = '185.220.35.146';
//      apiServerPort = '3030';
//      admUser = 'andsoft80@gmail.com';
//      admPassword = 'death666';
      
    });
  }
}
