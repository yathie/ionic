import { Component, OnInit } from '@angular/core';
//importa o service
import {LugaresService} from  './lugares.service'
//router para navegar
import {Router} from '@angular/router';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.page.html',
  styleUrls: ['./lugares.page.scss'],
})
export class LugaresPage implements OnInit {

  lugares=[]
  
  constructor(private lugarServico:LugaresService,
    private router:Router) { }

  ngOnInit() {
    //this.lugares=this.lugarServico.getLugares()
    console.log('on init')
  }

  ionViewWillEnter(){
    this.lugares=this.lugarServico.getLugares()
    console.log('will enter')
  }

  novoLugar(){
    //console.log('ok' )
    //caminho igaul em routing
    this.router.navigate(['/lugar-novo'])
  }

  irParaHome(){
    this.router.navigate(['/home'])
  }
}
