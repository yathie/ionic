import { Component, OnInit } from '@angular/core';
import { Data1Service } from 'src/app/services/data1.service';
import { Componente } from 'src/app/interfaces/interfaces';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  /*componentes é um observable q responde
  um array de Componente
  */
  componentes: Observable<Componente[]>;
  constructor(
    //para importar a lista de itens 
    private data1Service:Data1Service,
  ) { }

  ngOnInit() {
    this.componentes=this.data1Service.getMenuOps();
  }

}
