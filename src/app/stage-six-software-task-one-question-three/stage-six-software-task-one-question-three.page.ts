import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-stage-six-software-task-one-question-three',
  templateUrl: './stage-six-software-task-one-question-three.page.html',
  styleUrls: ['./stage-six-software-task-one-question-three.page.scss'],
})
export class StageSixSoftwareTaskOneQuestionThreePage implements OnInit {

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
