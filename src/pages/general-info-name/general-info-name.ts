import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ModalCustom } from '../../components/modal'
/**
 * Generated class for the GeneralInfoNamePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-general-info-name',
  templateUrl: 'general-info-name.html',
})
export class GeneralInfoNamePage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams, 
              public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeneralInfoNamePage');
  }

  dismiss(data?) {
    this.viewCtrl.dismiss(data);
  }

}
