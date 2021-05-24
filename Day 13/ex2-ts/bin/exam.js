"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exam = void 0;
var Exam = /** @class */ (function () {
    function Exam() {
        this.questions = [];
    }
    Exam.prototype.addQuestion = function (question) {
        if (question != null)
            this.questions.push(question);
    };
    Exam.prototype.print = function () {
        for (var _i = 0, _a = this.questions; _i < _a.length; _i++) {
            var question = _a[_i];
            console.log(question.caption);
            for (var _b = 0, _c = question.answers; _b < _c.length; _b++) {
                var answer = _c[_b];
                console.log(answer);
            }
            console.log("");
        }
    };
    Exam.prototype.grade = function (answers) {
        var Corrects = 0;
        var minLength = answers.length > this.questions.length ? answers.length : this.questions.length;
        for (var i = 0; i < minLength; i++) {
            if (typeof (this.questions[i]) !== 'undefined')
                if (answers[i] === this.questions[i].correctIndex)
                    Corrects++;
        }
        return (Corrects / answers.length) * 100;
    };
    return Exam;
}());
exports.Exam = Exam;
//# sourceMappingURL=exam.js.map