import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scroll-infinito',
  templateUrl: './scroll-infinito.page.html',
  styleUrls: ['./scroll-infinito.page.scss'],
})
export class ScrollInfinitoPage implements OnInit {

  lista:any[]=Array(15)

  constructor() { }

  ngOnInit() {
  }

  loadData(ev){
    console.log("carregando...");
    setTimeout(()=>{
      //limitar o carregamento infinito
      if(this.lista.length > 29){
        ev.target.complete();
        ev.target.disabled=true;
        return;
      }
      const novoArr=Array(15);
      this.lista.push(...novoArr);
      //indica que o evento foi completado, 
      //entao carrega mais 15 infinitamente
      ev.target.complete();
    },3000);
  }

}
