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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2V4YW0udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBRUE7SUFBQTtRQUNZLGNBQVMsR0FBZSxFQUFFLENBQUM7SUE0QnZDLENBQUM7SUExQkcsMEJBQVcsR0FBWCxVQUFZLFFBQWtCO1FBQzFCLElBQUksUUFBUSxJQUFJLElBQUk7WUFDaEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUVELG9CQUFLLEdBQUw7UUFDSSxLQUF1QixVQUFjLEVBQWQsS0FBQSxJQUFJLENBQUMsU0FBUyxFQUFkLGNBQWMsRUFBZCxJQUFjLEVBQUU7WUFBbEMsSUFBTSxRQUFRLFNBQUE7WUFDZixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUM5QixLQUFxQixVQUFnQixFQUFoQixLQUFBLFFBQVEsQ0FBQyxPQUFPLEVBQWhCLGNBQWdCLEVBQWhCLElBQWdCLEVBQUU7Z0JBQWxDLElBQU0sTUFBTSxTQUFBO2dCQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDdkI7WUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQ25CO0lBQ0wsQ0FBQztJQUVELG9CQUFLLEdBQUwsVUFBTSxPQUFpQjtRQUNuQixJQUFJLFFBQVEsR0FBVyxDQUFDLENBQUM7UUFDekIsSUFBSSxTQUFTLEdBQUcsT0FBTyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUE7UUFFL0YsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNoQyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLEtBQUssV0FBVztnQkFDMUMsSUFBSSxPQUFPLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxZQUFZO29CQUFFLFFBQVEsRUFBRSxDQUFDO1NBQ3JFO1FBRUQsT0FBTyxDQUFDLFFBQVEsR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLEdBQUcsR0FBRyxDQUFDO0lBQzdDLENBQUM7SUFDTCxXQUFDO0FBQUQsQ0FBQyxBQTdCRCxJQTZCQztBQTdCWSxvQkFBSSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFF1ZXN0aW9uIH0gZnJvbSBcIi4vcXVlc3Rpb25cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBFeGFtIHtcclxuICAgIHByaXZhdGUgcXVlc3Rpb25zOiBRdWVzdGlvbltdID0gW107XHJcblxyXG4gICAgYWRkUXVlc3Rpb24ocXVlc3Rpb246IFF1ZXN0aW9uKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHF1ZXN0aW9uICE9IG51bGwpXHJcbiAgICAgICAgICAgIHRoaXMucXVlc3Rpb25zLnB1c2gocXVlc3Rpb24pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaW50KCk6IHZvaWQge1xyXG4gICAgICAgIGZvciAoY29uc3QgcXVlc3Rpb24gb2YgdGhpcy5xdWVzdGlvbnMpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocXVlc3Rpb24uY2FwdGlvbik7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgYW5zd2VyIG9mIHF1ZXN0aW9uLmFuc3dlcnMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGFuc3dlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJcIik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGdyYWRlKGFuc3dlcnM6IG51bWJlcltdKTogbnVtYmVyIHtcclxuICAgICAgICBsZXQgQ29ycmVjdHM6IG51bWJlciA9IDA7XHJcbiAgICAgICAgbGV0IG1pbkxlbmd0aCA9IGFuc3dlcnMubGVuZ3RoID4gdGhpcy5xdWVzdGlvbnMubGVuZ3RoID8gYW5zd2Vycy5sZW5ndGggOiB0aGlzLnF1ZXN0aW9ucy5sZW5ndGhcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtaW5MZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mICh0aGlzLnF1ZXN0aW9uc1tpXSkgIT09ICd1bmRlZmluZWQnKVxyXG4gICAgICAgICAgICAgICAgaWYgKGFuc3dlcnNbaV0gPT09IHRoaXMucXVlc3Rpb25zW2ldLmNvcnJlY3RJbmRleCkgQ29ycmVjdHMrKztcclxuICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgICAgcmV0dXJuIChDb3JyZWN0cyAvIGFuc3dlcnMubGVuZ3RoKSAqIDEwMDtcclxuICAgIH1cclxufSJdfQ==