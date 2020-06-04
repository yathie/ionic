import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoadPageRoutingModule } from './load-routing.module';

import { LoadPage } from './load.page';
import { ComponentsModule } from 'src/app/components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LoadPageRoutingModule,
    //importado
    ComponentsModule
  ],
  declarations: [LoadPage]
})
export class LoadPageModule {}
