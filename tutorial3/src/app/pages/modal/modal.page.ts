import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(
    private modalC:ModalController,
  ) { }

  ngOnInit() {
  }

  async abrirModal(){
    //importar ModalController - para poder abrir a pagina
    const modal= await this.modalC.create({
      component:ModalInfoPage,
      componentProps:{
        fruta:'uva',
        cor:'roxo',
      }
    });
    await modal.present();
    /*importar a ModalInfoPage em modal.module.ts:
    entryComponents:[
    ModalInfoPage,
  ],
  e
  importar ModalInfoPageModule em imports em
  modal.module.ts, para obter todas as configuracoes e opcoes
  da ModalInfoPage */
    
    /*para q a funcao sairComArgs funcione
    acrescentar a promessa abaixo, q escuta
    quando o modal se fecha e oq estah dentro 
    dentro, e onDidDismiss vai gravar um uma variavel
    chamada data e isso cria o objeto
    */
    const {data} = await  modal.onDidDismiss();
    console.log('retorno da modal ', data);
  }
}
