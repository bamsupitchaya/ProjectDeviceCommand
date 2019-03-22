import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { RegisterPage } from '../register/register';
import { CommandPage } from '../command/command';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
              public alertCtrl: AlertController,
              ) {

  }
  remember(){
    
  }
  goRegister(){
    this.navCtrl.push(RegisterPage);
  }
  Login(){
    this.navCtrl.push(CommandPage);
  }
  presentAlert(title: string, msg: string){
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: msg,
      buttons: ['OK']
    });
    alert.present();
  }
}
