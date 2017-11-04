import { Component, ViewChild } from '@angular/core';
import { Nav, Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { MapPage } from '../pages/map/map';
import { Angular2TokenService } from 'angular2-token';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;

  currentUser: any;

  constructor(public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public alertCtrl: AlertController,
    private _tokenService: Angular2TokenService) {
      this._tokenService.init({
        apiBase: 'https://ufoods.herokuapp.com/'
      });

      this.initializeApp();


      // used for an example of ngFor and navigation
      this.pages = [
        { title: 'Home', component: HomePage },
        { title: 'Map', component: MapPage }
      ];

    }

    initializeApp() {
      this.platform.ready().then(() => {
        this.statusBar.styleDefault();
        this.splashScreen.hide();
      });
    }

    openPage(page) {
      this.nav.setRoot(page.component);
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
