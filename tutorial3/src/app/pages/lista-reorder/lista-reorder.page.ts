import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lista-reorder',
  templateUrl: './lista-reorder.page.html',
  styleUrls: ['./lista-reorder.page.scss'],
})
export class ListaReorderPage implements OnInit {

  sabores=['4 queijos', 'peperoni', 'funghi', 'bolonhesa']

  constructor() { }

  ngOnInit() {
  }

  doReorder(ev){
    //console.log(ev);

    /*atualiza a lista, assim da para
    guardar a lista atualizada com a modificacao
    de posicoes em algum lugar*/
    const itemMovido=this.sabores.splice(ev.detail.from,1)[0];
    this.sabores.splice(ev.detail.to,0,itemMovido);
    console.log(this.sabores);

    ev.detail.complete();
  }
}
