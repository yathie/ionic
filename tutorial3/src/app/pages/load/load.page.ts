import { Component, OnInit } from '@angular/core';
/*para funcionar ion-loadign importar LoadingPageModule */
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-load',
  templateUrl: './load.page.html',
  styleUrls: ['./load.page.scss'],
})
export class LoadPage implements OnInit {

  carrega:any;

  constructor(
    private load: LoadingController,
  ) { }

  ngOnInit() {
    this.presentLoading('carregando');
    //cancelar o 'loading' apos 3s
    setTimeout(()=>{
      this.carrega.dismiss();
    },3000)
  
  }
/*
  async presentLoading() {
    const loading = await this.load.create({
      cssClass: 'my-custom-class',
      message: 'Funcionando...',
      duration: 2000
    });
    await loading.present();

    const { role, data } = await loading.onDidDismiss();
    console.log('Loading dismissed!');
  }
  */

  async presentLoading(message: string) {
    this.carrega = await this.load.create({
      cssClass: 'my-custom-class',
      message,
      //duration: 2000
    });
    return this.carrega.present();
  }    

}
