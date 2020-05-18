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
