import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalPageRoutingModule } from './modal-routing.module';

import { ModalPage } from './modal.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { ModalInfoPage } from '../modal-info/modal-info.page';
import { ModalInfoPageModule } from '../modal-info/modal-info.module';

@NgModule({
  /*importado para funcionar 
  a pagina modal ModalInfoPage*/
  entryComponents:[
    ModalInfoPage,
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalPageRoutingModule,
    //importado
    ComponentsModule,
    /*para obter todas as configuracoes e opcoes
    da ModalInfoPage 
    
    remover:
    'const routes' 
    'import { ModalInfoPageRoutingModule...'
    em modal-info.module.ts
    para q o modal nao se comporte como pagina normal:
     */
    ModalInfoPageModule,
  ],
  declarations: [ModalPage]
})
export class ModalPageModule {}
