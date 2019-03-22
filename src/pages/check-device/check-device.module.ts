import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CheckDevicePage } from './check-device';

@NgModule({
  declarations: [
    CheckDevicePage,
  ],
  imports: [
    IonicPageModule.forChild(CheckDevicePage),
  ],
})
export class CheckDevicePageModule {}
