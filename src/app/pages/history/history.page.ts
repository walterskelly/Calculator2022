import { Component } from '@angular/core';
import { GlobaldataService } from 'src/app/globaldata.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage {
  display: string[] = [];
  alertButtons = [
  {
    text: 'Cancel',
    role: 'cancel'
  },
  {
    text: 'Clear',
    role: 'destructive',
    handler: () => {
      this.clearHistory();
    }
  }
  ];

  constructor(
    public globalData: GlobaldataService,
    private alertController: AlertController
  ) {}

  ionViewWillEnter() {
    this.display = this.globalData.history;
  }

  clearHistory() {
    this.globalData.clearHistory();
  }

  async confirmClearHistory() {
    const alert = await this.alertController.create({
      header: 'Clear History?',
      message: 'Are you sure you want to delete all calculations?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Clear',
          role: 'destructive',
          handler: () => {
            this.clearHistory();
          }
        }
      ]
    });

    await alert.present();
  }
}
