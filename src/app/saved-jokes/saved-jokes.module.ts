import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SavedJokesPageRoutingModule } from './saved-jokes-routing.module';

import { SavedJokesPage } from './saved-jokes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SavedJokesPageRoutingModule
  ],
  declarations: [SavedJokesPage]
})
export class SavedJokesPageModule {}
