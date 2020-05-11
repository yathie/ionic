import { Component, OnInit } from '@angular/core';
//ActivatedRoute eh encarregado de processar a url no angular
//
import {ActivatedRoute} from '@angular/router';
import { LugaresPage } from '../lugares.page';
import { LugaresService } from '../lugares.service';
import { Lugar } from '../lugar.model';

@Component({
  selector: 'app-lugar-detalhe',
  templateUrl: './lugar-detalhe.page.html',
  styleUrls: ['./lugar-detalhe.page.scss'],
})
export class LugarDetalhePage implements OnInit {

  lugar:Lugar

  //instanciar o route e o service
  constructor(private activateR:ActivatedRoute, private lugaresService:LugaresService ) { }

  ngOnInit() {
    //pegar o id da url
    this.activateR.paramMap.subscribe(paramMap=>{
      //lugarID - igual ao app-routing.module.ts
      const idRecebido=paramMap.get('lugarID')
      //console.log(idRecebido)
      //recebe o objeto de acordo com o id
      this.lugar=this.lugaresService.getLugar(idRecebido)
      console.log(this.lugar)
    })

  }

}
