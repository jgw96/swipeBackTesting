import { Component } from '@angular/core';

import { NavController, App } from 'ionic-angular';

import { AboutPage } from '../about/about';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public app: App) {

  }

  pushPage() {
    this.navCtrl.push(AboutPage);
  }

  weirdPush() {
    this.app.getRootNav().push(AboutPage);
  }

}
