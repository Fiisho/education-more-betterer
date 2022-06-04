import { Component, OnInit } from '@angular/core';
import { AlertController, IonCard } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-stage-six-software-task-one-info',
  templateUrl: './stage-six-software-task-one-info.page.html',
  styleUrls: ['./stage-six-software-task-one-info.page.scss'],
})
export class StageSixSoftwareTaskOneInfoPage implements OnInit {

  constructor(
    private router: Router,
    public alertController: AlertController) { }

  ngOnInit() {
  }

  async railroadAlert() {
    const alert = await this.alertController.create({
      cssClass: 'custom-class',
      header: 'Here you go!',
      subHeader: 'This is an example of a railroad diagram.',
      message: `<img src="${"assets/railroad.png"}" class="card-alert">`
    });

    await alert.present();
  }

  async questionconfirmationAlert() {
    const alert = await this.alertController.create({
      cssClass: 'custom-class',
      header: 'Question Time!',
      subHeader: `You've got this!`,
      message: `Makesure you have read all the information to be able to confidently answer the questions.`,
      buttons: [
        {
          text: 'Go Back',
        }, {
          text: 'Continue',
          handler: () => {
            this.router.navigate(['/stage-six-software-task-one-question-one']);
          }
        }
      ]
    });

    await alert.present();
  }

}
