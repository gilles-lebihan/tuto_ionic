import { Component } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { LoadingController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import {Router, NavigationExtras} from '@angular/router';
import { from } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public title: string;

  constructor(public actionSheetController: ActionSheetController,
              public alertController: AlertController,
              public loadingController: LoadingController,
              public http: HttpClient,
              public router: Router) {}

  ngOnInit() {
    }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          }
        }, {
          text: 'open action sheet',
          handler: async () => {
            console.log('open action sheet');
            const actionSheet = await this.actionSheetController.create({
              header: 'Albums',
              buttons: [{
                text: 'Delete',
                role: 'destructive',
                icon: 'trash',
                handler: () => {
                  console.log('Delete clicked');
                }
              }]
            });
            await actionSheet.present();         
          }
        }
      ]
    });

    await alert.present();
  }
    async presentActionSheet() {
      const actionSheet = await this.actionSheetController.create({
        header: 'Albums',
        buttons: [{
          text: 'Delete',
          role: 'destructive',
          icon: 'trash',
          handler: () => {
            console.log('Delete clicked');
          }
        }, {
          text: 'Share',
          icon: 'share',
          handler: () => {
            console.log('Share clicked');
          }
        }, {
          text: 'Play (open modal)',
          icon: 'arrow-dropright-circle',
          handler: () => {
            console.log('Play clicked');
          }
        }, {
          text: 'Favorite',
          icon: 'heart',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Cancel',
          icon: 'close',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }]
      });
      await actionSheet.present();
    }

    async presentLoadingWithOptions() {
      const loading = await this.loadingController.create({
        spinner: 'bubbles',
        duration: 5000,
        message: 'Please wait...',
        translucent: true,
        cssClass: 'custom-class custom-loading'
      });
      return await loading.present();
    }

}
