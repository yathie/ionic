import { Component, OnInit } from '@angular/core';
//importa o service
import {LugaresService} from  './lugares.service'
@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.page.html',
  styleUrls: ['./lugares.page.scss'],
})
export class LugaresPage implements OnInit {

  lugares=[]
  
  constructor(private lugarServico:LugaresService) { }

  ngOnInit() {
    //this.lugares=this.lugarServico.getLugares()
    console.log('on init')
  }

  ionViewWillEnter(){
    this.lugares=this.lugarServico.getLugares()
    console.log('will enter')
  }

}
