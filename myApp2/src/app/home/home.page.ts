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
    console.log('ttttt')
    this.fotosS.getFotos().subscribe(
      data=>{
        console.log(data)
        //this.fotos=data;
      }
    )
  }
}
