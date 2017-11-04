import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { RestaurantsProvider } from '../../providers/restaurants/restaurants';

@Component({
  selector: 'page-restaurant',
  templateUrl: 'restaurant.html',
})
export class RestaurantPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private restaurantsProvider: RestaurantsProvider) {
    let restaurant = this.restaurantsProvider.getRestaurants();
    restaurant.subscribe(data => {
      this.restaurants = data.restaurants;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RestaurantPage');
  }
}
