import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';
import { GuideDetailPage } from '../guide-detail/guide-detail';
import { ChatPage } from '../chat/chat';
import { OffertPage } from '../offert/offert';
import { ChatListPage } from '../chat-list/chat-list';
import { LoginPage } from '../login/login';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  isLogin;

  tab0Root = LoginPage;
  tab1Root = HomePage;//ProfilePage ; // HomePage
  tab2Root = OffertPage;
  tab3Root = ChatListPage;
  tab4Root = ProfilePage;
  tab5Root = GuideDetailPage;
  tab6Root = ChatPage;

  constructor() {

  }
  test($ev) {
    this.isLogin = $ev.index === 0;
  }

}
