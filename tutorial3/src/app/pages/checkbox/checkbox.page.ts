import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {

  dados=[
    {
      nome:'primary',
      selecionado:false
    },
    {
      nome:'secondary',
      selecionado:false
    },
    {
      nome:'tertiary',
      selecionado:true
    },
    {
      nome:'danger',
      selecionado:true
    },
  ]

  constructor() { }

  ngOnInit() {
  }

  /*imprime no console 'dados' do objeto clicado*/
  onClick(check){
    console.log(check)
  }

}
