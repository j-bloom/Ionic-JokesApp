import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PunJokesPageRoutingModule } from './pun-jokes-routing.module';

import { PunJokesPage } from './pun-jokes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PunJokesPageRoutingModule
  ],
  declarations: [PunJokesPage]
})
export class PunJokesPageModule {}
