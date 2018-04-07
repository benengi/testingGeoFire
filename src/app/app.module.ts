import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Geolocation } from '@ionic-native/geolocation';


import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { AgmCoreModule } from '@agm/core';



//firebase 
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { GeoService } from '../services/geo.service';

export const FIREBASE = {
  apiKey: "AIzaSyBD2ifqAVHmUCf-2L5jTUQ3r3yLkNIZJ64",
  authDomain: "test-26347.firebaseapp.com",
  databaseURL: "https://test-26347.firebaseio.com",
  projectId: "test-26347",
  storageBucket: "test-26347.appspot.com",
  messagingSenderId: "685601391293"
};


@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBadqWD4yZ8oq_9JQ14OXFU6YC17BycGU8'
    }),
    AngularFireModule.initializeApp(FIREBASE),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    Geolocation,
    GeoService
  ]
})
export class AppModule { }
