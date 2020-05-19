import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BotoesPageRoutingModule } from './botoes-routing.module';

import { BotoesPage } from './botoes.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BotoesPageRoutingModule,
    //importado
    ComponentsModule
  ],
  declarations: [BotoesPage]
})
export class BotoesPageModule {}
