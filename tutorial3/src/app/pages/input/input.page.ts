import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  nome:string

  constructor() { }

  ngOnInit() {
  }

  onSubmitTemplate(){
    console.log("form enviado")
  }

}
