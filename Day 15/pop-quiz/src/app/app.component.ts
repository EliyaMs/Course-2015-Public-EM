import { Questions } from './models/questions';
import { Question } from './models/question';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title:string = 'Pop Quiz';

  answeredQuestions:Question[] = [];
  currentQuestion:Question = Questions[0];
  currentIndex:number = 0;
  maxLength: number = Questions.length;

  finalScore: number = 0;
  correctAnswers: number = 0;

  goNextQuestion(answerIndex: number){
    if(this.currentIndex < this.maxLength){
      if (this.currentQuestion.correctAnswer == answerIndex){
        this.correctAnswers++;
      }
      this.currentQuestion.userAnswer = answerIndex;
      this.answeredQuestions.push(this.currentQuestion);
  
      this.currentIndex++;
      this.currentQuestion = Questions[this.currentIndex];
      this.finalScore = (this.correctAnswers / this.maxLength) * 100;
    }
  }

}

