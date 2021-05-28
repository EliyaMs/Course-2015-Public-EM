import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Question } from 'src/app/models/question';

@Component({
  selector: 'app-question-presenter',
  templateUrl: './question-presenter.component.html',
  styleUrls: ['./question-presenter.component.css']
})
export class QuestionPresenterComponent {

  @Input()
  question!:Question;

  @Output()
  selectedAnswer = new EventEmitter<number>();

  selectAnswer(answerIndex: number){
    this.selectedAnswer.emit(answerIndex);
  }

}
