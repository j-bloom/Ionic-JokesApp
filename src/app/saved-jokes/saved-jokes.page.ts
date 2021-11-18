import { Component, OnInit } from '@angular/core';
import { StorageService } from '../service/storage.service';
import { Joke } from '../service/joke.model';

@Component({
  selector: 'app-saved-jokes',
  templateUrl: './saved-jokes.page.html',
  styleUrls: ['./saved-jokes.page.scss'],
})
export class SavedJokesPage implements OnInit {

  jokeList: Joke[];
  isEmpty: boolean;

  constructor(private storageServ: StorageService) { }

  ngOnInit() {
    this.jokeList = this.storageServ.getAll();

    console.log(this.storageServ.getAll());
  }

  showJokes() {
    this.jokeList = this.storageServ.getAll();
  }

  deleteJoke(joke: Joke) {
    this.storageServ.removeJoke(joke);
    this.jokeList = this.storageServ.getAll();
  }

  deleteAll() {
    this.storageServ.deleteAllJokes();
    this.jokeList = this.storageServ.getAll();
  }
}
