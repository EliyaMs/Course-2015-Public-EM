import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Question } from 'src/app/models/question';

@Component({
  selector: 'app-question-presenter',
  templateUrl: './question-presenter.component.html',
  styleUrls: ['./question-presenter.component.css']
})
export class QuestionPresenterComponent {

  // color: string = "cyan";

  @Input()
  question!: Question;

  @Output()
  selectedAnswer = new EventEmitter<number>();

  selectAnswer(answerIndex: number) {
    if (this.question.userAnswer !== answerIndex ) {
      this.question.userAnswer = answerIndex
      setTimeout(() => {
        this.selectedAnswer.emit(answerIndex);
      }, 500);
    }
  }
}
