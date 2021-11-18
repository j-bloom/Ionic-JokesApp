import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RandomJokesPageRoutingModule } from './random-jokes-routing.module';

import { RandomJokesPage } from './random-jokes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RandomJokesPageRoutingModule
  ],
  declarations: [RandomJokesPage]
})
export class RandomJokesPageModule {}
