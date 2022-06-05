import { AlertController, IonBackButtonDelegate } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { Vibration } from "@ionic-native/vibration/ngx";

@Component({
  selector: 'app-information',
  templateUrl: './information.page.html',
  styleUrls: ['./information.page.scss'],
})
export class InformationPage implements OnInit {

  constructor(
    private v:Vibration, public alertController: AlertController, public toastController: ToastController
  ) { }

  ResetPassword = '';
  oldpassword = '';
  newpassword = '';

  ngOnInit() {
  }

vibrate(){
  this.v.vibrate(5000);
}

stop(){
  this.v.vibrate(0);
}

  async toast() {
    const toast = await this.toastController.create({
      header: 'Password has been changed!',
      position: 'bottom',
      duration: 2000
    });
    toast.present();
  }



  async resetpass() {
    const alert = await this.alertController.create({
      header: `Reset your Password`,
      message: `Please confirm you wish to reset you password to: ${this.ResetPassword}`,
      buttons: [
        {
          text: 'Cancel',
          handler: () => {
            console.log(`Password Changed Aborted`);

          }
        },
        {
          text: 'Reset Password',
          handler: () => {
            console.log(`Password Changed to: ${this.ResetPassword}`);
            this.toast();
          }
        }
      ]
    });

    await alert.present();

  }

  async notifs() {

    const toast = await this.toastController.create({
      header: `Notifications have been enabled/disabled!`,
      position: 'bottom',
      duration: 2000
    });

    toast.present();
    console.log(`Notifications have been enabled/disabled.`);
  }

  async autoupdates() {

    const toast = await this.toastController.create({
      header: `Auto-updates have been enabled/disabled!`,
      position: 'bottom',
      duration: 2000
    });

    toast.present();
    console.log(`Auto-updates have been enabled/disabled.`);
  }

  async rememberlogin() {

    const toast = await this.toastController.create({
      header: `The unavaiable settings are still being developed...`,
      position: 'bottom',
      duration: 2000

    });
    toast.present();
  }

}

