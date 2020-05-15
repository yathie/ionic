import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    CommonModule,
    //imprtar os componentes do ionic para o header component funcionar
    IonicModule,
  ],
  //acrescentado o export do modulo do componente header criado
  exports:[
    HeaderComponent
  ]
  
})
export class ComponentsModule { }
//1:05