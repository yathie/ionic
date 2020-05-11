import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LugarNovoPageRoutingModule } from './lugar-novo-routing.module';

import { LugarNovoPage } from './lugar-novo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LugarNovoPageRoutingModule
  ],
  declarations: [LugarNovoPage]
})
export class LugarNovoPageModule {}
