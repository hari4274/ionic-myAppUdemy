import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public alertCtrl: AlertController){

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

}
