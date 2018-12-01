import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GuideDetailPage } from '../guide-detail/guide-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  reapeatNTimes(number) {
    const arr = [];
    for (let index = 0; index < number; index++) {
      arr.push({});  
    }
    return arr;
  }

  goToGuide(id) {
    this.navCtrl.push(GuideDetailPage);
  }
}
