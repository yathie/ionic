import { Injectable } from '@angular/core';
//http para acessar json de pagina da internet
//importar em app.,odule.ts o module
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class FotosService {

  constructor(private http:HttpClient) { }

  getFotos(){
    return this.http.get<any>('https://jsonplaceholder.typicode.com/photos?_limit=6')
  }

}
