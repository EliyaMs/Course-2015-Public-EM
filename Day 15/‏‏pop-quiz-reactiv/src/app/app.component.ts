import { DataService } from './services/data.service';
import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Pop Quiz';
  isquizOver$ = new Observable<boolean>();

  constructor(public dataService: DataService) { 
    this.isquizOver$ = dataService.isQuizOver();
  }

}

