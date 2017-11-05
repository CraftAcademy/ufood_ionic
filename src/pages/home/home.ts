import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { MapPage} from '../map/map';
import {RestaurantListPage} from "../restaurant-list/restaurant-list";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  currentUser: any;

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController) {
  }

  goToMapPage() {
    this.navCtrl.push(MapPage);
  }

  goToRestaurantListPage() {
    this.navCtrl.push(RestaurantListPage)
  }
}
