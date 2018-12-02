import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChatPage } from '../chat/chat';
import { CreateTripPage } from '../create-trip/create-trip';

/**
 * Generated class for the GuideDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-guide-detail',
  templateUrl: 'guide-detail.html',
})
export class GuideDetailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GuideDetailPage');
  }

  goBack(){
    this.navCtrl.pop();
  }

  getDate(){
    return new Date();
  }

  goToChat() {
    this.navCtrl.push(ChatPage, {
      id: '1',
      receiverUsername: 'Karim'
    });
  }
  goToCreateTrip() {
    this.navCtrl.push(CreateTripPage, {
      id: '1',
    });
  }

  sendComment() {
    console.log('Commento inviato');
  }
}
