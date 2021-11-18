import { Component, Input } from '@angular/core';
import { JokeService } from '../service/joke.service';
import { Joke } from '../service/joke.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  @Input() jokeOption: string;

  constructor(private jokeServ: JokeService, private router: Router) {}

  navigate() {
    if(this.jokeOption.valueOf() === 'any') {
      this.router.navigate(['/random-jokes']);
    } else if(this.jokeOption.valueOf() === 'programming') {
      this.router.navigate(['/programming-joke']);
    } else if(this.jokeOption.valueOf() === 'pun') {
      this.router.navigate(['/pun-jokes']);
    }
  }

}
