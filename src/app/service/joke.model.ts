// export interface Joke {
//   error?: boolean;
//   category?: string;
//   joke: string;
//   flags?: [];
//   id?: number;
//   safe?: boolean;
//   lang?: string;
// }

export class Joke{
  time: string;
  category: string;
  joke: string;

  constructor(c: string, j: string){
    this.category = c;
    this.joke = j;
  }
}
