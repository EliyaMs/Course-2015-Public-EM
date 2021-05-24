import { Question } from "./question";

export class Exam {
    private questions: Question[] = [];

    addQuestion(question: Question): void {
        if (question != null)
            this.questions.push(question);
    }

    print(): void {
        for (const question of this.questions) {
            console.log(question.caption);
            for (const answer of question.answers) {
                console.log(answer);
            }
        }
    }

    grade(answers: number[]): number {
        let Corrects: number = 0;
        let minLength = answers.length > this.questions.length ? answers.length : this.questions.length

        for (let i = 0; i < minLength; i++) {
            if (typeof (this.questions[i]) !== 'undefined')
                if (answers[i] === this.questions[i].correctIndex) Corrects++;
        }
        
        return (Corrects / answers.length) * 100;
    }
}