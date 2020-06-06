import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Componente } from 'src/app/interfaces/interfaces';
import { Data1Service } from 'src/app/services/data1.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  /*array de Componente-> interface criada depois desta classe*/
/* componentes:any[]=[
    {
      icon:"bonfire-outline",
      nome:"Action",
      irPara:"/action-sheet",
    },
    {
      icon:"skull-outline",
      nome:"Alert",
      irPara:"/alert",
    },
    {
      icon:"skull-outline",
      nome:"Avatar",
      irPara:"/avatar",
    },
    {
      icon:"bonfire-outline",
      nome:"Botões",
      irPara:"/botoes",
    },
    {
      icon:"bonfire-outline",
      nome:"Cartões",
      irPara:"/card",
    },
    {
      icon:"bonfire-outline",
      nome:"Checkbox",
      irPara:"/checkbox",
    },
    {
      icon:"calendar",
      nome:"Datas",
      irPara:"/datas",
    },
    {
      icon:"add",
      nome:"Fab",
      irPara:"/fab",
    },
    {
      icon:"grid",
      nome:"Grid",
      irPara:"/grids",
    },
    {
      icon:"infinite",
      nome:"Infinite Scroll",
      irPara:"/scroll-infinito",
    },
    {
      icon:"star",
      nome:"Input",
      irPara:"/input",
    },
    {
      icon:"list",
      nome:"List-slinding",
      irPara:"/lista",
    },
    {
      icon:"list",
      nome:"List-reorder",
      irPara:"/lista-reorder",
    },
    {
      icon:"refresh-circle",
      nome:"Loading",
      irPara:"/load",
    },
  ]
  */
  /* modificando lista do menu:
  estah pegando os itens de assets/data/menu.json
  criar novo servico -> services/data1.service.ts (getMenuOps)
  importar interface Componente -> interfaces/interfaces.ts
  */
  componentes: Observable<Componente[]>

  constructor(
    private menuC:MenuController,
    //para importar a lista de itens 
    private data1Service:Data1Service,
  ) { }

  ngOnInit() {
    this.componentes=this.data1Service.getMenuOps();
  }  

  toggleMenu(){
    this.menuC.toggle();
  }
}
/*passar esta interface para
interfaces/interfaces.ts
pq mais paginas irao utilizar
*/
/*
interface Componente{
  icon:string;
  nome:string;
  irPara:string;
}
*/