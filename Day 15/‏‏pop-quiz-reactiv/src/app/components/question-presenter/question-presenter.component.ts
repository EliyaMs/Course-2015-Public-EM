import { Observable } from 'rxjs';
import { DataService } from './../../services/data.service';
import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/models/question';

@Component({
  selector: 'app-question-presenter',
  templateUrl: './question-presenter.component.html',
  styleUrls: ['./question-presenter.component.css']
})
export class QuestionPresenterComponent implements OnInit{
  
    question$ = new Observable<Question>();

  constructor(public dataService: DataService){ }

  ngOnInit(): void {
    this.question$ = this.dataService.getCurrentQuestion();;
  }

  async selectAnswer(answerIndex: number) { 
    await this.dataService.nextQuestion(answerIndex);
  }

}
