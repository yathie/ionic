import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  /*array de Componente-> interface criada depois desta classe*/
  componentes:any[]=[
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

  constructor() { }

  ngOnInit() {
  }  

}

interface Componente{
  icon:string;
  nome:string;
  irPara:string;
}
