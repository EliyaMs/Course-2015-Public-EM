import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Question } from '../models/question';
import { Questions } from '../models/questions';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private currentIndex$ = new BehaviorSubject<number>(0);

  private maxLength: number = Questions.length;

  private finalScore$ = new BehaviorSubject<number>(0);
  private correctAnswers$ = new BehaviorSubject<number>(0);

  constructor() { }

  getFinalScore(): Observable<number>{
    return this.finalScore$.asObservable();
  }

  getCorrectAnswers(): Observable<number>{
    return this.correctAnswers$.asObservable();
  }

  getCurrentQuestion(): Observable<Question> {
    return this.currentIndex$.pipe(
      map(index => Questions[index])
    )
  }

  getCurrentIndex(): Observable<number> {
    return this.currentIndex$.asObservable();
  }

  getAnsweredQuestions(): Observable<Question[]> {
    return this.currentIndex$.pipe(
      map(i => Questions.slice(0, i))
    )
  }

  isQuizOver(): Observable<boolean> {
    return this.currentIndex$.pipe(
      map(index => index >= this.maxLength)
    )
  }
  nextQuestion(answerIndex: number): Promise<void>{

    let index = this.currentIndex$.value;
    let question = Questions[index];
    let correctAnswers = this.correctAnswers$.value + 1;

    if (index < this.maxLength) {
      if (question.correctAnswer == answerIndex) {
        this.correctAnswers$.next(correctAnswers);
      }
      question.userAnswer = answerIndex;
      this.currentIndex$.next(index + 1);
      this.finalScore$.next((this.correctAnswers$.value / this.maxLength) * 100);
    }
    return Promise.resolve();
  }

}
