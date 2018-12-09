import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ChatPage } from '../chat/chat';

/**
 * Generated class for the ChatListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chat-list',
  templateUrl: 'chat-list.html',
})
export class ChatListPage {
  private imgAvatar1 = 'https://www.out.com/sites/out.com/files/2018/08/13/jack-whitehall-out-750x_4.jpg';
  private imgAvatar2 = 'https://cdn1.thr.com/sites/default/files/imagecache/scale_crop_768_433/2018/05/gettyimages-949158452-h_2018.jpg';
  private imgAvatar3 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYoc846_M-XeVna6XYaaIRRbXmqjWuL-Ec5MoN8D1swDIPnvU2';
  private imgAvatar4 = 'https://img.discogs.com/O0Wqrg7nUry7PlAY2tmDQaPhfJk=/fit-in/600x600/filters:strip_icc():format(jpeg):mode_rgb():quality(90)/discogs-images/R-1741121-1394508907-7633.jpeg.jpg';
  
  personeContattate = [
    {id:'1', nome: 'Mario', avatarImg: this.imgAvatar1, lastMsg: 'Va bene.'},
    {id:'2', nome: 'Luca', avatarImg: this.imgAvatar2, lastMsg: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, beatae!'},
    {id:'3', nome: 'Cristian', avatarImg: this.imgAvatar3, lastMsg: 'Domani allora si va a correre!'},
    {id:'4', nome: 'Martina', avatarImg: this.imgAvatar4, lastMsg: 'Lorem, ipsum dolor.'},
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChatListPage');
  }
  

  openChat(user) {
    console.log(user);
    this.navCtrl.push(ChatPage, user);
  }

}
