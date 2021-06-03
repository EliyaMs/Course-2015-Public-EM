import { Observable } from 'rxjs';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/models/question';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent implements OnInit{

  answeredQuestions$ = new Observable<Question[]>();

  constructor(public dataService: DataService) {}

  ngOnInit(): void {
    this.answeredQuestions$ = this.dataService.getAnsweredQuestions();
  } 

}
