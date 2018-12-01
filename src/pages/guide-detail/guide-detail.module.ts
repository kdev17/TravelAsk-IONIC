import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GuideDetailPage } from './guide-detail';

@NgModule({
  declarations: [
    GuideDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(GuideDetailPage),
  ],
})
export class GuideDetailPageModule {}
