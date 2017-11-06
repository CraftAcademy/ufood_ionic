import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { RestaurantsProvider } from '../../providers/restaurants/restaurants';

@Component({
  selector: 'page-restaurant',
  templateUrl: 'restaurant.html',
})
export class RestaurantPage {
  restaurants: any;
  id: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private restaurantsProvider: RestaurantsProvider) {
    let restaurant = this.restaurantsProvider.getRestaurant('id');
    restaurant.subscribe(data => {
      this.restaurants = data.restaurants;
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RestaurantPage');
  }
}
