import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, tap } from 'rxjs/operators';
import { Joke } from '../models/joke.module';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  readonly baseUrl: string = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getJoke(keyword: string, index: number): Promise<Joke> {
    const url = `${this.baseUrl}/jokes?q=${keyword}&_start=${index}&_limit=1`;
    let res = this.http
      .get<Joke[]>(url)
      .pipe(
        tap(b => console.log('b1: ', index, b)),
        map(joke => joke[0])
      )
      .toPromise()

    return res;
  }

  getJokeByGanerAndIndex(keyword: string, index: number, ganer: string): Promise<Joke> {
    const url = `${this.baseUrl}/jokes?q=${keyword}&type=${ganer}&_start=${index}&_limit=1`;
    let res = this.http
      .get<Joke[]>(url)
      .pipe(
        tap(b => console.log('b2: ', index, b)),
        map(joke => joke[0])
      )
      .toPromise();

    return res;
  }

  getAllJokeGaner(): Promise<string[]> {
    const url = `${this.baseUrl}/jokes`;
    let res = this.http
      .get<Joke[]>(url)
      .pipe(
        map(jokes => jokes.map(j => j.type)
          .filter((item, i, ar) => ar.indexOf(item) === i)
        )
      ).toPromise();

    return res;
  }

}
