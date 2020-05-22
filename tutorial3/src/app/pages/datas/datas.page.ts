import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datas',
  templateUrl: './datas.page.html',
  styleUrls: ['./datas.page.scss'],
})
export class DatasPage implements OnInit {

  dataNasc:Date = new Date();
  customPickerOp;
  customData;

  constructor() { }

  ngOnInit() {
    this.customPickerOp = {
      buttons: [{
        text: 'Save',
        handler: (ev) => {
          console.log('Clicked Save!')
          console.log(ev)
          console.log(ev.year.value)
          //nao está aparecendo soh o ano
          this.customData=(ev.year.value)
        }
      }, {
        text: 'Log',
        handler: () => {
          console.log('Clicked Log. Do not Dismiss.');
          return false;
        }
      }]
    }
  }

  mudaData(ev){
    console.log(ev)
    console.log("transformar em data: ",new Date(ev.detail.value))
  }

}
