import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { ProfilePage } from '../profile/profile';
import { GuideDetailPage } from '../guide-detail/guide-detail';
import { ChatPage } from '../chat/chat';
import { OffertPage } from '../offert/offert';
import { ChatListPage } from '../chat-list/chat-list';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ProfilePage ; // HomePage
  tab2Root = OffertPage;
  tab3Root = ChatListPage;
  tab4Root = ProfilePage;
  tab5Root = GuideDetailPage;
  tab6Root = ChatPage;

  constructor() {

  }
}
