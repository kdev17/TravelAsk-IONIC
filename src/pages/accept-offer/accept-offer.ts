import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import { ChatPage } from '../chat/chat';

/**
 * Generated class for the AcceptOfferPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-accept-offer',
  templateUrl: 'accept-offer.html',
})
export class AcceptOfferPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AcceptOfferPage');
  }

  dismiss(data?) {
    this.viewCtrl.dismiss(data);
  }


  acceptOffert() {
    // Salva info
    let data = {
      'esito': 'OK',
      'action': 'accept',
    };

    this.dismiss(data);
  }

  skipOffer() {
    // Salva info
    let data = {
      'esito': 'OK',
      'action': 'skip'
    };

    this.dismiss(data);
  }

}
