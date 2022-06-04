import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-stage-six-selection',
  templateUrl: './stage-six-selection.page.html',
  styleUrls: ['./stage-six-selection.page.scss'],
})
export class StageSixSelectionPage implements OnInit {

  constructor(public toastController: ToastController) { }

  ngOnInit() {
  }

  async nondeveloped() {
    const toast = await this.toastController.create({
      header: "Sorry this isn't available yet!",
      position: 'bottom',
      color: 'danger',
      duration: 2000
    });
    toast.present();
  }
}
