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
      icon:"american-football",
      nome:"Action",
      irPara:"/action-sheet",
    },
    {
      icon:"appstore",
      nome:"Alert",
      irPara:"/alert",
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
