import { Component, OnInit } from '@angular/core';
//para navegar entre paginas
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-inicial',
  templateUrl: './inicial.page.html',
  styleUrls: ['./inicial.page.scss'],
})
export class InicialPage implements OnInit {

  constructor(
    private navegar:NavController,
    //this.navegar.push(Tab1Page)
  ) { }

  ngOnInit() {
  }


  /**acessar webapi- Http from @angular/http
   * nomeFuncao (){
   *   return this.http.get('limk)
   * }
   * no outro fiz por httpclient
   */
}
