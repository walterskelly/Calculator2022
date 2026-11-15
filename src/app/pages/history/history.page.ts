import { Component } from '@angular/core';
import { Calculation, GlobaldataService } from 'src/app/globaldata.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage {
  display: Calculation[] = [];
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
    private alertController: AlertController,
    private router: Router
  ) {}

  selectCalculation(result: number) {
    this.globalData.selectedResult = result;
    this.router.navigate(['/home']);
  }

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
