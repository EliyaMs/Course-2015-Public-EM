import { Question } from './question';

export const Questions: Question[] = [
    // 1 3 2 3 1 0 3 2 0 2
    {
        caption: 'what do you get if you mix red and yellow?',
        answers: ['Pink', 'Orange', 'Green', 'White'],
        correctAnswer: 1,
        userAnswer: -1
    }, {
        caption: 'what do you get if you mix blue and yellow?',
        answers: ['Green', 'Pink', 'Orange', 'White'],
        correctAnswer: 3,
        userAnswer: -1
    }, {
        caption: 'what do you get if you mix blue and red?',
        answers: ['Purple', 'Cyan', 'Magenta', 'White'],
        correctAnswer: 2,
        userAnswer: -1
    }, {
        caption: 'what do you get if you mix green and magenta?',
        answers: ['Ichs', 'Brown', 'Green', 'White'],
        correctAnswer: 3,
        userAnswer: -1
    }, {
        caption: '2 * 3 = ?',
        answers: ['3', '6', '2', '5'],
        correctAnswer: 1,
        userAnswer: -1
    }, {
        caption: '2 + 3 = ?',
        answers: ['5', '6', '2', '7'],
        correctAnswer: 0,
        userAnswer: -1
    }, {
        caption: '2 - 3 = ?',
        answers: ['9', '-5', '2', '-1'],
        correctAnswer: 3,
        userAnswer: -1
    }, {
        caption: '8 / 4 = ?',
        answers: ['3', '8', '2', '5'],
        correctAnswer: 2,
        userAnswer: -1
    }, {
        caption: '20 / 4 = ?',
        answers: ['5', '13', '6', '4'],
        correctAnswer: 0,
        userAnswer: -1
    }, {
        caption: '3 * 2 + 4 = ?',
        answers: ['16', '11', '10', '18'],
        correctAnswer: 2,
        userAnswer: -1
    }
]
