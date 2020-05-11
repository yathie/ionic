import { Component, OnInit } from '@angular/core';
//ActivatedRoute eh encarregado de processar a url no angular
//Router permite navegar, redirecionar o usuario
import {ActivatedRoute, Router} from '@angular/router';
import { LugaresService } from '../lugares.service';
import { Lugar } from '../lugar.model';
import {AlertController} from '@ionic/angular'

@Component({
  selector: 'app-lugar-detalhe',
  templateUrl: './lugar-detalhe.page.html',
  styleUrls: ['./lugar-detalhe.page.scss'],
})
export class LugarDetalhePage implements OnInit {

  lugar:Lugar

  //instanciar o route e o service
  constructor(private activateR:ActivatedRoute, 
    private lugaresService:LugaresService,
    private router:Router,
    private alertaC:AlertController) { }

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

  
  async removeLugar(){
    //console.log('removeu')

    const alertaEl=await this.alertaC.create({
      //criar um alerta eh um metodo assincrono
      header:'remover?',
      message:'removerá o lugar para sempre!',
      buttons: [
        {text:'Cancela', role:'cancelar' },
        {text:'Confirma',
         handler:()=>{
          this.lugaresService.deleteLugar(this.lugar.id)
          //console.log(this.lugaresService.getLugares())
          //redireciona o usuario para outra pagina após remover o lugar
          this.router.navigate(['/lugares'])
         }}
      ],
    });
    await alertaEl.present()
  }
  /*
  removeLugar(){
    this.alertaC.create({
      //criar um alerta eh um metodo assincrono
      header:'remover?',
      message:'removerá o lugar para sempre!',
      buttons: [
        {text:'Cancela', role:'cancelar' },
        {text:'Confirma',
        handler:()=>{
          this.lugaresService.deleteLugar(this.lugar.id)
          //console.log(this.lugaresService.getLugares())
          //redireciona o usuario para outra pagina após remover o lugar
          this.router.navigate(['/lugares'])
        }}
      ],
    });
  }  
  */ 
}
