import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  items: any[];

  constructor(public navCtrl: NavController) {

  }

  ionViewDidEnter() {
    this.items = [];

    for (let i = 0; i < 100; i++) {
      this.items.push({ name: 'ionic' });
    }
  }

}
