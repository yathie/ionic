import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Componente } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class Data1Service {

  /*para fazer requisicoes http precisa importar
  em app.module.ts-> HttpClientModule 
  */
  constructor(private http: HttpClient) { }

  /*para utilizar os metodos do servico 
  importar Data1Service no arquivo.page.ts que ira utiliza-lo*/
  getUsers(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
  }

  getMenuOps(){
    return this.http.get<Componente[]>('assets/data/menu.json')
  }
}
