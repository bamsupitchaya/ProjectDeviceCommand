import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AddDevicesPage } from './add-devices';

@NgModule({
  declarations: [
    AddDevicesPage,
  ],
  imports: [
    IonicPageModule.forChild(AddDevicesPage),
  ],
})
export class AddDevicesPageModule {}
