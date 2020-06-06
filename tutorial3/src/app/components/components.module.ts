import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
//menu
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    //menu
    MenuComponent
  ],
  imports: [
    CommonModule,
    //importar os componentes do ionic para o header component funcionar
    IonicModule,
    //para o [routerLink]no html funcionar
    RouterModule,

  ],
  //acrescentado o export do modulo do componente header criado
  exports:[
    HeaderComponent,
    //menu
    MenuComponent
  ]
  
})
export class ComponentsModule { }