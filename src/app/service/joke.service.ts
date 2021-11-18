import { Injectable } from '@angular/core';
import { Joke } from './joke.model';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class JokeService {

  url = '';
  urlProg = '';
  urlPun = '';
  singleCategory: string;
  singleJoke: string;
  programmingCategory: string;
  programmingJoke: string;
  punCategory: string;
  punJoke: string;
  time: string;

  constructor(private http: HttpClient) { }

  getTimeStamp(){
    return this.time = new Date().toString();
  }

  sendRandomJoke() {
    return this.singleJoke;
  }

  //Gets a joke from the Random Joke API
  getAllJokes(){
    this.url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,racist,sexist,explicit&type=single';
    return this.http.get<Joke>(this.url)
      .pipe(
        map((res: any) => {
          this.time = this.getTimeStamp();
          this.singleCategory = res['category'];
          this.singleJoke = res['joke'];
          console.log(this.time);
          console.log(this.singleCategory);
          console.log(this.singleJoke);
        })
      );
  }

  //Returns a single joke to display on Random Jokes page
  showAllJokes() {
    return this.singleJoke;
  }

  //Gets a joke from the Programming Joke API
  getProgrammingJokes(){
    this.urlProg = 'https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,racist,sexist,explicit&type=single';
    return this.http.get<Joke>(this.urlProg)
      .pipe(
        map((res: any) => {
          this.time = this.getTimeStamp();
          this.programmingCategory = res['category'];
          this.singleJoke = res['joke'];
          console.log(this.time);
          console.log(this.programmingCategory);
          console.log(this.programmingJoke);
        })
      );
  }

  //Returns a single joke to display on programming Jokes page
  showProgrammingJokes() {
    return this.singleJoke;
  }

  //Gets a joke from the Pun Joke API
  getPunJokes(){
    this.urlPun = 'https://v2.jokeapi.dev/joke/Pun?blacklistFlags=nsfw,religious,racist,sexist,explicit&type=single';
    return this.http.get<Joke>(this.urlPun)
      .pipe(
        map((res: any) => {
          this.time = this.getTimeStamp();
          this.punCategory = res['category'];
          this.singleJoke = res['joke'];
          console.log(this.time);
          console.log(this.punJoke);
          console.log(this.punCategory);
        })
      );
  }

  //Returns a single joke to display on Pun Jokes page
  showPunJokes() {
    return this.singleJoke;
  }

}

