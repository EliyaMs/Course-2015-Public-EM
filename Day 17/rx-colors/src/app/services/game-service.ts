import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GameService implements OnInit {
  randomColor$ = new BehaviorSubject<[number, number, number]>([255, 255, 255]);
  private red$ = new BehaviorSubject(0);
  private green$ = new BehaviorSubject(0);
  private blue$ = new BehaviorSubject(0);

  constructor() { }

  ngOnInit(): void { }

  getRed(): Observable<number> {
    return this.red$.asObservable();
  }
  getGreen(): Observable<number> {
    return this.green$.asObservable();
  }
  getBlue(): Observable<number> {
    return this.blue$.asObservable();
  }

  SetRed(value: number): void {
    this.red$.next(value);
  }
  SetGreen(value: number): void {
    this.green$.next(value);
  }
  SetBlue(value: number): void {
    this.blue$.next(value);
  }

  GetComputerColor(): Observable<[number, number, number]> {
    return this.randomColor$.asObservable();
  }
  RandomizeColor(): void {
    let random = () : number => {
      return Math.floor(Math.random() * 255);
    }

    this.randomColor$.next([random(), random(), random()])
    console.log('Random Color: ',this.randomColor$.value)
  }

}
