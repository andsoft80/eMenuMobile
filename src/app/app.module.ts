import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarcodeScanner} from '@ionic-native/barcode-scanner/ngx';
import { AndroidPermissions } from '@ionic-native/android-permissions/ngx';
import { HttpClientModule } from '@angular/common/http';
//import { HTTP } from '@ionic-native/http/ngx';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule
  , HttpClientModule, 
      IonicStorageModule.forRoot()
  ],
  providers: [
    StatusBar,
    SplashScreen,
    BarcodeScanner,
    AndroidPermissions,
    
    //HTTP,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
