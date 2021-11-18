import { Component, OnInit } from '@angular/core';
import { JokeService } from '../service/joke.service';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-pun-jokes',
  templateUrl: './pun-jokes.page.html',
  styleUrls: ['./pun-jokes.page.scss'],
})
export class PunJokesPage implements OnInit {

  constructor(private jokeServ: JokeService, private storageServe: StorageService) { }

  ngOnInit() {
    //Subscribes to the Observable on page initialization
    this.jokeServ.getPunJokes().subscribe();
  }

  displayJoke(){
    return this.jokeServ.showPunJokes();
  }

  //Gets a new joke from the API
  getNewJoke() {
    this.jokeServ.getPunJokes().subscribe();
    this.displayJoke();
  }

  saveJoke() {
    this.storageServe.addNewJoke(this.jokeServ.getTimeStamp(), this.jokeServ.sendRandomJoke());
    this.storageServe.addAlert();
  }

  deleteAll() {
    this.storageServe.deleteAllJokes();
  }
}
