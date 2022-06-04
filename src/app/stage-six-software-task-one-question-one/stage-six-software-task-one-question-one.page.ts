import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-stage-six-software-task-one-question-one',
  templateUrl: './stage-six-software-task-one-question-one.page.html',
  styleUrls: ['./stage-six-software-task-one-question-one.page.scss'],
})
export class StageSixSoftwareTaskOneQuestionOnePage implements OnInit {

  constructor(public toastController: ToastController) { }

  ngOnInit() {
  }

  async wronganswer() {
    const toast = await this.toastController.create({
      header: "Wrong Answer, Try again...",
      position: 'bottom',
      color: 'danger',
      duration: 2000
    });
    toast.present();
  }
}
