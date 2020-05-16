import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-action-sheet',
  templateUrl: './action-sheet.page.html',
  styleUrls: ['./action-sheet.page.scss'],
})
export class ActionSheetPage implements OnInit {

  //injetar o servico de actionsheet
  constructor(
    private actionSheetCtrl: ActionSheetController,

    ) {
     }

  ngOnInit() {
  }

  async presentActionSheet() {
    const actionSheet = await this.actionSheetCtrl.create({
      header: 'Albums',
      /*aco clicar fora na action sheet, por padrao, ela
      fecha (true)
      para desabilitar, declarar backdropDismiss:false*/
      backdropDismiss:false,
      buttons: [{
        
        text: 'Delete',
        /*a opcao Delete no ios fica em vermelho, 
        no android nao*/
        role: 'destructive',
        /*opçao para deixar em vermelho no android
        -criar classe, eu fiz 'emvermelho'
        -fazer a consifuracao desta classe em global.scss
        -nao funcionou*/
        cssClass:'vermelho',
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

}
