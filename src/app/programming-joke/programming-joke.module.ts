import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgrammingJokePageRoutingModule } from './programming-joke-routing.module';

import { ProgrammingJokePage } from './programming-joke.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgrammingJokePageRoutingModule
  ],
  declarations: [ProgrammingJokePage]
})
export class ProgrammingJokePageModule {}
