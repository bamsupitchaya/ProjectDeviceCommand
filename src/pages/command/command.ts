import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AddDevicesPage } from '../add-devices/add-devices';
import { StatusDevicesPage } from '../status-devices/status-devices';
import { SpeechRecognition } from '@ionic-native/speech-recognition/ngx';

@IonicPage()
@Component({
  selector: 'page-command',
  templateUrl: 'command.html',
})
export class CommandPage {

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private speechRecognition: SpeechRecognition) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CommandPage');
  }
  //speechTo(){
  //  this.speechRecognition.startListening().subscribe(
    //  (matches:string[]) => console.log(matches)
    //)
  //}

  addDevice(){
    this.navCtrl.push(AddDevicesPage);
  }
  checkStatus(){
    this.navCtrl.push(StatusDevicesPage);
  }
}
