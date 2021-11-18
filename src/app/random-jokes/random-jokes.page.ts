import { Component, OnInit } from '@angular/core';
import { Joke } from '../service/joke.model';
import { JokeService } from '../service/joke.service';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-random-jokes',
  templateUrl: './random-jokes.page.html',
  styleUrls: ['./random-jokes.page.scss'],
})
export class RandomJokesPage implements OnInit {

  public randJoke: any;

  constructor(private jokeServ: JokeService, private storageServe: StorageService) { }

  ngOnInit() {
    //Subscribes to the Observable on page initialization
    this.jokeServ.getAllJokes().subscribe();
  }

  displayJoke(){
    return this.jokeServ.showAllJokes();
  }

  //Gets a new joke from the API
  getNewJoke() {
    this.jokeServ.getAllJokes().subscribe();
    this.displayJoke();
  }

  saveJoke() {
    this.storageServe.addNewJoke(this.jokeServ.getTimeStamp(), this.jokeServ.sendRandomJoke());
    this.storageServe.addAlert();
  }

}
