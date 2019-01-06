import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { GeneralInfoLocationPage } from './general-info-location';
import { GeoProvider } from '../../providers/geo/geo';

@NgModule({
  declarations: [
    GeneralInfoLocationPage,
  ],
  providers: [
  ],
  imports: [
    IonicPageModule.forChild(GeneralInfoLocationPage),
  ],
})
export class GeneralInfoLocationPageModule {}
