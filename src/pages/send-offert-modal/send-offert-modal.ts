import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';
import * as moment from 'moment';
/**
 * Generated class for the SendOffertModalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-send-offert-modal',
  templateUrl: 'send-offert-modal.html',
})
export class SendOffertModalPage {

  hours = [];
  meetingPreference = ['Morning', 'Afternoon', 'Evening', 'Night'];
  dateAvailable = [];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public viewCtrl: ViewController) {

    for (let index = 1; index < 20; index++) {
      this.hours.push(index);
      this.dateAvailable.push(moment().add('d', index).toDate())
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SendOffertModalPage');
  }

  dismiss(data?) {
    this.viewCtrl.dismiss(data);
  }

  sendOffert() {
    // Salva info
    let data = { 'esito':'OK', 'msg': 'Thank you! Your offer has been sent successfully. You can expect responses from visitors who are interested. They will apper in your TravelAsk inbox.' };

    this.dismiss(data);
  }

}
