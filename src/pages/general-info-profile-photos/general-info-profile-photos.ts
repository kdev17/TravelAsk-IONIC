import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the GeneralInfoProfilePhotosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-general-info-profile-photos',
  templateUrl: 'general-info-profile-photos.html',
})
export class GeneralInfoProfilePhotosPage {
  numberOfPhoto = ['1','2','3','4'];
  constructor(public navCtrl: NavController, public navParams: NavParams, 
    public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeneralInfoProfilePhotosPage');
  }
  dismiss(data?) {
    this.viewCtrl.dismiss(data);
  }
}
