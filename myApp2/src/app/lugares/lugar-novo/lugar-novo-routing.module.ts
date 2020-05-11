import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LugarNovoPage } from './lugar-novo.page';

const routes: Routes = [
  {
    path: '',
    component: LugarNovoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LugarNovoPageRoutingModule {}
