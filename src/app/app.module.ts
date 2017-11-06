import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';
import { Geolocation } from '@ionic-native/geolocation';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {RestaurantListPage} from "../pages/restaurant-list/restaurant-list";
import { RestaurantPage } from '../pages/restaurant/restaurant';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {MapPage} from "../pages/map/map";
import { RestaurantsProvider } from '../providers/restaurants/restaurants';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MapPage,
    RestaurantListPage,
    RestaurantPage

  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MapPage,
    RestaurantListPage,
    RestaurantPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestaurantsProvider,
    Geolocation
  ]
})
export class AppModule {}
