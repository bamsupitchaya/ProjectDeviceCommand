import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StatusDevicesPage } from '../status-devices/status-devices';

@IonicPage()
@Component({
  selector: 'page-add-devices',
  templateUrl: 'add-devices.html',
})
export class AddDevicesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddDevicesPage');
  }
  checkStatus(){
    this.navCtrl.push(StatusDevicesPage);
  }
}
