import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GeneralInfoProfilePhotosPage } from './general-info-profile-photos';

@NgModule({
  declarations: [
    GeneralInfoProfilePhotosPage,
  ],
  imports: [
    IonicPageModule.forChild(GeneralInfoProfilePhotosPage),
  ],
})
export class GeneralInfoProfilePhotosPageModule {}
