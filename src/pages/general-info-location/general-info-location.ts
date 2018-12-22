import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the GeneralInfoLocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-general-info-location',
  templateUrl: 'general-info-location.html',
})
export class GeneralInfoLocationPage {

  results = [{label: 'Roma'},{label: 'Madrid'},{label: 'Barcelona'},{label: 'Los Angeles'}];

  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeneralInfoLocationPage');
  }

  saveLocation(item) {
    console.log(item);
    this.dismiss();
  }

  dismiss(data?) {
    this.viewCtrl.dismiss(data);
  }
}
