import { Component, Input } from '@angular/core';
import { Question } from 'src/app/models/question';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.css']
})
export class SummaryComponent { 
  @Input()
  completeQuestions!:Question[];
}
