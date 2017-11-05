import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { RestaurantsProvider } from '../../providers/restaurants/restaurants';
import { RestaurantPage } from '../restaurant/restaurant';

@Component({
  selector: 'page-restaurant-list',
  templateUrl: 'restaurant-list.html',
})
export class RestaurantListPage {
  restaurants: any;
  id: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private restaurantsProvider: RestaurantsProvider) {
    let restaurant = this.restaurantsProvider.getRestaurants();
    restaurant.subscribe(data => {
      this.restaurants = data.restaurants;
    })
  }

  ionViewDidLoad() {
    this.id = this.navParams.get('id');
    console.log(this.id);
  }

  viewRestaurant(id) {
    this.navCtrl.push(RestaurantPage, {'id': `${id}`})
  }
}
