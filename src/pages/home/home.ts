import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { MapPage} from '../map/map';
import { Angular2TokenService } from 'angular2-token';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  currentUser: any;

  constructor(public navCtrl: NavController,
              private _tokenService: Angular2TokenService,
              public alertCtrl: AlertController,) {
    this._tokenService.init({
      apiBase: 'https://ufoods.herokuapp.com/api/v1'
    });
  }

  goToMapPage() {
    this.navCtrl.push(MapPage);
  }
  loginPopUp() {
    let confirm = this.alertCtrl.create({
      title: 'Login',
      inputs: [
        {
          name: 'email',
          placeholder: 'email'
        },
        {
          name: 'password',
          placeholder: 'password',
          type: 'password'
        }
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
          }
        },
        {
          text: 'Login',
          handler: data => {
            this.login(data);
          }
        }
      ]
    });
    confirm.present();
  }
  login(credentials) {
    this._tokenService
    .signIn(credentials)
    .subscribe(
      res => (this.currentUser = res.json().data),
      err => console.error('error')
    );
  }
}
