import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChatListPage } from './chat-list';

@NgModule({
  declarations: [
    ChatListPage,
  ],
  entryComponents: [
    ChatListPage
  ],
  imports: [
    IonicPageModule.forChild(ChatListPage),
  ],
})
export class ChatListPageModule {}
