import { Component } from '@angular/core';
import { AlertController, LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public alertCtrl: AlertController, public loadingCtrl: LoadingController, public toastCtrl: ToastController){

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
      message: 'Hello i am your Loading message',
      spinner: 'crescent',
      duration: 2000
    });

    await loading.present();
  }

  async openToast() {
    const toast = await this.toastCtrl.create({
      message: 'Hello i am your toast message',
      duration: 2000,
      position: 'top'
    });

    await toast.present();
  }
}
