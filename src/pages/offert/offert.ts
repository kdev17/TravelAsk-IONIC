import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, AlertController } from 'ionic-angular';
import { SendOffertModalPage } from '../send-offert-modal/send-offert-modal';

/**
 * Generated class for the OffertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-offert',
  templateUrl: 'offert.html',
})
export class OffertPage {
  // ARRIVANO OFFERTE AI LOCALI!
  inboxMenu = 'offers';
  // public navCtrl: NavController, public navParams: NavParams
  constructor(public modalCtrl: ModalController, private alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OffertPage');
  }

  sendOffert() {
    const modal = this.modalCtrl.create(SendOffertModalPage);
    modal.onDidDismiss(data => {
      console.log(data);
      this.alertCtrl.create({
        title: 'Offert has been sent',
        subTitle: data.msg,
        cssClass: 'alertPopup',
        buttons: ['Ok'],
      }).present();
    });
    modal.present();
    
  }
}
