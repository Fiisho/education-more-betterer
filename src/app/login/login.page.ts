import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private router: Router,
    public alertController: AlertController,
  ) { }

  User = '';
  Pass = '';

  ngOnInit() {
  }

  async incorrectpassword() {
    const alert = await this.alertController.create({
      header: `Didn't Work?`,
      subHeader: 'Wrong Password',
      message: `Humph, It seems like you've entered the wrong password? Try again or reset it.`,
      buttons: [
        {
          text: 'Try Again',
          handler: () => {
            console.log('Failed Password, Retrying');
          }
        }, {
          text: 'Reset Password',
          handler: () => {
            console.log('Failed Password, Resetting Password');
            this.router.navigate(['/forgot-password']);
          }
        }
      ]
    });

    await alert.present();
  }


  validateLogin() {
    if (this.User === 'MCKstudent' && this.Pass === 'marist') {
      this.router.navigate(['/topic-selection']);
      // this.User = '';
      // this.Pass = '';
    } else {
      // displays incorrect login popup
      this.incorrectpassword();
      this.User = '';
      this.Pass = '';
    }
  }

}
