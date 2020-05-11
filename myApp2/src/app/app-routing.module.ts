import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {//rota principal - primeira rota a ser definida
    path: '',
    redirectTo: 'home', //se trocar por 'lugares', esta sera a pagina principal
    pathMatch: 'full'
  },
  {
    path: 'lugares',
    //loadChildren: () => import('./lugares/lugares.module').then( m => m.LugaresPageModule)
    children:[
      {
        path:"",
        loadChildren: () => import('./lugares/lugares.module').then( m => m.LugaresPageModule)
      },
      {
        path:":lugarID", //lugares/34 -> vai para lugar-detalhe
        loadChildren: () => import('./lugares/lugar-detalhe/lugar-detalhe.module').then( m => m.LugarDetalhePageModule)
      },
    ]
  },
  {
    path: 'lugar-detalhe',
    loadChildren: () => import('./lugares/lugar-detalhe/lugar-detalhe.module').then( m => m.LugarDetalhePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
