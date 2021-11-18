import { Injectable } from '@angular/core';
import { Joke } from './joke.model';
import { Storage } from '@ionic/storage-angular';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})

export class StorageService {

  private jokeStorage: Storage | null = null;

  constructor(public alertController: AlertController, private storage: Storage) {
    this.init();
   }

   async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this.jokeStorage = storage;
  }

    // Create and expose methods that users of this service can
  // call, for example:
  public set(key: string, value: any) {
    this.jokeStorage?.set(key, value);
  }

   // add new record to the storage
  public addNewJoke(key: string, value: any) {
    const newJoke = new Joke(key,value);
    this.jokeStorage?.set(key, newJoke);
  }

    // get all records from the storage
    public getAll(){
      const favJokes: Joke[] =[];
      if (this.jokeStorage != null){
      this.jokeStorage.forEach((value, key, index) => {
        favJokes.push(value as Joke);
      });
    }
      return favJokes;
    }

      // remove a record from the storage
  public async removeJoke(joke: Joke){
    await this.jokeStorage.remove(joke.category);
  }

  public async deleteAllJokes(){
    await this.jokeStorage.clear();
  }

  async addAlert() {
    const alert = await this.alertController.create({
      header: 'Saved',
      message: 'Your joke have been successfully saved!',
      buttons: ['OK']
    });
    await alert.present();
  }

}
