import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  nome:string

  constructor(
    private alertC:AlertController
  ) { }

  ngOnInit() {
  }class="ion-text-center"

  async presentAlert() {
    const alert = await this.alertC.create({
      header: 'Alert',
      subHeader: 'Subtitle',
      message: 'This is an alert message.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Ok',
          handler: () => {
            console.log('Confirm Ok');
          }
        }
      ]
    });

    await alert.present();
  }

  /*alert com input
  o input, se confirmado, aparece na pagina alert
  */
  async presentAlertPrompt() {
  const alert = await this.alertC.create({
    header: 'Prompt!',
    subHeader: 'escreva seu nome!',
    message: 'seu nome irá apararece no topo na página.',
    inputs: [
      {
        name: 'name1',
        type: 'text',
        placeholder: 'nome'
      },
    ],
    buttons: [
      {
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: () => {
          console.log('Confirm Cancel');
        }
      }, {
        text: 'Ok',
        handler: (n) => {
          console.log(n);
          this.nome=n.name1;
        }
      }
    ]
  });

  await alert.present();
  }
}
