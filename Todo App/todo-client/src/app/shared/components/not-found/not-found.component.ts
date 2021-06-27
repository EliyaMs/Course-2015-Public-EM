import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit, OnDestroy {

  num: number = 0;
  subscription = new Subscription;
  intervalId:any;

  constructor() { }

  ngOnInit(): void {
    this.num = Math.floor(Math.random() * 3) + 1

    this.intervalId = setInterval(() => {
      this.num = this.num % 3 + 1
    }, 20000,);
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

}
