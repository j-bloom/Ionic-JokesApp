import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PunJokesPage } from './pun-jokes.page';

const routes: Routes = [
  {
    path: '',
    component: PunJokesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PunJokesPageRoutingModule {}
