import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  receiverUsername;
  items = [];
  username;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.receiverUsername = this.navParams.get('receiverUsername');
    this.username = 'Anto';
    console.log(this.navParams);
    for (let i = 0; i < 30; i++) {
      const msg = Math.random() > 0.5 ? {author: this.receiverUsername, msg:'Ciao come va ', date: new Date()} 
      :{author: this.username, msg: 'Tutto bene grazie! E te?', date: new Date()}
      this.items.push(msg);
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatPage');
  }

  doInfinite(infiniteScroll) {
    console.log('Begin async operation');

    setTimeout(() => {
      for (let i = 0; i < 30; i++) {
        this.items.push( this.items.length );
      }

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 500);
  }

}
