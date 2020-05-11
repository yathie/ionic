/*service eh uma classe que tem metodos tipicos
relacionados com certos dados
p.ex.: uma classe q possa guardar
 ou listar os dados de todos os lugares;
 mais outro metodo para guardar mais lugares, ou remove-los
 */
import { Injectable } from '@angular/core';
import {Lugar} from './lugar.model';

@Injectable({
  providedIn: 'root'
})
export class LugaresService {

  private lugares:Lugar[]=[
    {
      id:'1',
      titulo:'mercadinho',
      imgURL:'https://img.freepik.com/vetores-gratis/pessoas-vestindo-mascara-no-supermercado_23-2148503783.jpg?size=626&ext=jpg',
      comentarios:['preços bons', 'frutas frescas'],
    },
    {
      id:'2',
      titulo:'mercadinho 2',
      imgURL:'https://img.freepik.com/vetores-gratis/pessoas-vestindo-mascara-no-supermercado_23-2148503783.jpg?size=626&ext=jpg',
      comentarios:['muitas promoções', 'tem tudo o que eu preciso'],
    },
    {
      id:'3',
      titulo:'mercadinho 3',
      imgURL:'https://img.freepik.com/vetores-gratis/pessoas-vestindo-mascara-no-supermercado_23-2148503783.jpg?size=626&ext=jpg',
      comentarios:[],
    },
  ]

  constructor() { }

  //retorna todos os lugares
  getLugares(){
    return[...this.lugares]
  }

  //retorna um objeto de lugares pelo id q está sendo passado
  getLugar(idLugar:string){
    return{
      ...this.lugares.find(l =>{
        return l.id===idLugar
      })
    } 
  }

  /*adiciona um novo objeto em lugares
  recebendo titulo e imagem
  e utilizando interface
  */
  addLugares(titulo:string,img:string){
    this.lugares.push(
      {
        titulo,
        imgURL:img,
        comentarios:[],
        id:this.lugares.length+1+""
      }
    )
  }

  //remove um lugar pelo id
  /**percorre todo o array lugares e salva todos os 
   * itens q tem o id diferente do passado
   */
  deleteLugar(idLugar:string){
    this.lugares=this.lugares.filter(l =>{
      return l.id!==idLugar
    })
  }

  
}
