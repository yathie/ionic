import { Component, OnInit } from '@angular/core';
//importar service, para salvar os dados
import { LugaresService } from '../lugares.service';
//Router para navegar
import { Router } from '@angular/router';

@Component({
  selector: 'app-lugar-novo',
  templateUrl: './lugar-novo.page.html',
  styleUrls: ['./lugar-novo.page.scss'],
})
export class LugarNovoPage implements OnInit {

  constructor(private lugarS:LugaresService,
    private router:Router) { }

  ngOnInit() {
  }

  salvarDados(titulo,img){
    this.lugarS.addLugar(titulo.value,img.value)
    this.router.navigate(['/lugares'])
  }
}
