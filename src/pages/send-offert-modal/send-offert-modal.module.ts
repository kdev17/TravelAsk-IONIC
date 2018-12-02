import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SendOffertModalPage } from './send-offert-modal';

@NgModule({
  declarations: [
    SendOffertModalPage,
  ],
  imports: [
    IonicPageModule.forChild(SendOffertModalPage),
  ],
})
export class SendOffertModalPageModule {}
