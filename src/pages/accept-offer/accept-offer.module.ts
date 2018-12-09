import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AcceptOfferPage } from './accept-offer';

@NgModule({
  declarations: [
    AcceptOfferPage,
  ],
  imports: [
    IonicPageModule.forChild(AcceptOfferPage),
  ],
})
export class AcceptOfferPageModule {}
