import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  constructor(public alertController: AlertController) { }

  ngOnInit() {
  }

  async comingsoonAlert() {
    const alert = await this.alertController.create({
      cssClass: 'custom-class',
      header: 'Coming Soon!',
      subHeader: 'Coming in a Future Update...',
      message: 'This stage is still currently being developed, check back soon to see if its ready for you!',
      buttons: ['Ok']
    });

    await alert.present();
  }

}

