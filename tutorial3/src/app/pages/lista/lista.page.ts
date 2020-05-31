import { Component, OnInit, ViewChild } from '@angular/core';
import { Data1Service } from 'src/app/services/data1.service';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.page.html',
  styleUrls: ['./lista.page.scss'],
})
export class ListaPage implements OnInit {

  usuarios:Observable<any>;
  //referencia a #lista no html
  @ViewChild ('lista') listaa:IonList;

  constructor(private data1S:Data1Service) { }

  ngOnInit() {

   /* 
    this.data1S.getUsers()
    .subscribe(
      //imprimir os dados no console
      console.log
    )
    */
   this.usuarios =this.data1S.getUsers()
  }

  favorite(item){
    console.log("favorite ", item);
    //fecha o item apos clicar neste botao
    this.listaa.closeSlidingItems();
  }

  compartilhar(item){
    console.log("comp ", item);
  }

  naoLido(item){
    console.log("nao lido ", item)
  }




}
