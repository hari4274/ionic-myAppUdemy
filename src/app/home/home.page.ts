import { Component } from '@angular/core';
import { AlertController, LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public alertCtrl: AlertController, public loadingCtrl: LoadingController){

  }

  async openPage()
  {
    const alert = await this.alertCtrl.create({
      header: 'Products',
      message: 'You have 300 Products',
      buttons: ['Ok']
    });

    await alert.present();
  }

  async openLoading()
  {
    const loading = await this.loadingCtrl.create({
      message: 'Hello i am your message',
      spinner: 'crescent',
      duration: 2000
    });

    await loading.present();
  }

}
