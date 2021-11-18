import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgrammingJokePage } from './programming-joke.page';

const routes: Routes = [
  {
    path: '',
    component: ProgrammingJokePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgrammingJokePageRoutingModule {}
