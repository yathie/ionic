import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
//menu
import { MenuComponent } from './menu/menu.component';



@NgModule({
  declarations: [
    HeaderComponent,
    //menu
    MenuComponent
  ],
  imports: [
    CommonModule,
    //imprtar os componentes do ionic para o header component funcionar
    IonicModule,
  ],
  //acrescentado o export do modulo do componente header criado
  exports:[
    HeaderComponent,
    //menu
    MenuComponent
  ]
  
})
export class ComponentsModule { }