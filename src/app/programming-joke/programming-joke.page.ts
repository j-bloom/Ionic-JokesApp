import { Component, OnInit } from '@angular/core';
import { JokeService } from '../service/joke.service';
import { StorageService } from '../service/storage.service';

@Component({
  selector: 'app-programming-joke',
  templateUrl: './programming-joke.page.html',
  styleUrls: ['./programming-joke.page.scss'],
})
export class ProgrammingJokePage implements OnInit {

  constructor(private jokeServ: JokeService, private storageServe: StorageService) { }

  ngOnInit() {
    //Subscribes to the Observable on page initialization
    this.jokeServ.getProgrammingJokes().subscribe();
  }

  displayJoke() {
    return this.jokeServ.showProgrammingJokes();
  }

  //Gets a new joke from the API
  getNewJoke() {
    this.jokeServ.getProgrammingJokes().subscribe();
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
