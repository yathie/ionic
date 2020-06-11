import { Component, OnInit, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modal-info',
  templateUrl: './modal-info.page.html',
  styleUrls: ['./modal-info.page.scss'],
})
export class ModalInfoPage implements OnInit {
  /*importar propriedades da modal contidas em 
  metodo abrirModal() em modal.page.ts */
  @Input() fruta;
  @Input() cor;

  constructor(
    private modalC:ModalController,
  ) { }

  ngOnInit() {
  }

  sair(){
    //importar ModalController
    this.modalC.dismiss();
  }

  sairComArgs(){
    //importar ModalController
    this.modalC.dismiss({
      fruta:'abacaxi',
      cor:'amarelo'
    });
    /*acrescentar em modal.page.ts:
     */
  }

}
