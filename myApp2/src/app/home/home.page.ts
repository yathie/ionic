import { Component, OnInit } from '@angular/core';
import { FotosService } from './fotos.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  fotos:[]

  constructor(private fotosS:FotosService) {}

  ngOnInit(){
    this.fotosS.getFotos().subscribe(
      data=>{
        this.fotos=data;
      }
    )
  }
}
