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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhhbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2V4Mi1qcy9leGFtLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUVBO0lBQUE7UUFDWSxjQUFTLEdBQWUsRUFBRSxDQUFDO0lBMkJ2QyxDQUFDO0lBekJHLDBCQUFXLEdBQVgsVUFBWSxRQUFrQjtRQUMxQixJQUFJLFFBQVEsSUFBSSxJQUFJO1lBQ2hCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFRCxvQkFBSyxHQUFMO1FBQ0ksS0FBdUIsVUFBYyxFQUFkLEtBQUEsSUFBSSxDQUFDLFNBQVMsRUFBZCxjQUFjLEVBQWQsSUFBYyxFQUFFO1lBQWxDLElBQU0sUUFBUSxTQUFBO1lBQ2YsT0FBTyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLENBQUM7WUFDOUIsS0FBcUIsVUFBZ0IsRUFBaEIsS0FBQSxRQUFRLENBQUMsT0FBTyxFQUFoQixjQUFnQixFQUFoQixJQUFnQixFQUFFO2dCQUFsQyxJQUFNLE1BQU0sU0FBQTtnQkFDYixPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ3ZCO1NBQ0o7SUFDTCxDQUFDO0lBRUQsb0JBQUssR0FBTCxVQUFNLE9BQWlCO1FBQ25CLElBQUksUUFBUSxHQUFXLENBQUMsQ0FBQztRQUN6QixJQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQTtRQUUvRixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsU0FBUyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2hDLElBQUksT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxXQUFXO2dCQUMxQyxJQUFJLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFlBQVk7b0JBQUUsUUFBUSxFQUFFLENBQUM7U0FDckU7UUFFRCxPQUFPLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUM7SUFDN0MsQ0FBQztJQUNMLFdBQUM7QUFBRCxDQUFDLEFBNUJELElBNEJDO0FBNUJZLG9CQUFJIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUXVlc3Rpb24gfSBmcm9tIFwiLi9xdWVzdGlvblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIEV4YW0ge1xyXG4gICAgcHJpdmF0ZSBxdWVzdGlvbnM6IFF1ZXN0aW9uW10gPSBbXTtcclxuXHJcbiAgICBhZGRRdWVzdGlvbihxdWVzdGlvbjogUXVlc3Rpb24pOiB2b2lkIHtcclxuICAgICAgICBpZiAocXVlc3Rpb24gIT0gbnVsbClcclxuICAgICAgICAgICAgdGhpcy5xdWVzdGlvbnMucHVzaChxdWVzdGlvbik7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpbnQoKTogdm9pZCB7XHJcbiAgICAgICAgZm9yIChjb25zdCBxdWVzdGlvbiBvZiB0aGlzLnF1ZXN0aW9ucykge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhxdWVzdGlvbi5jYXB0aW9uKTtcclxuICAgICAgICAgICAgZm9yIChjb25zdCBhbnN3ZXIgb2YgcXVlc3Rpb24uYW5zd2Vycykge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYW5zd2VyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBncmFkZShhbnN3ZXJzOiBudW1iZXJbXSk6IG51bWJlciB7XHJcbiAgICAgICAgbGV0IENvcnJlY3RzOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIGxldCBtaW5MZW5ndGggPSBhbnN3ZXJzLmxlbmd0aCA+IHRoaXMucXVlc3Rpb25zLmxlbmd0aCA/IGFuc3dlcnMubGVuZ3RoIDogdGhpcy5xdWVzdGlvbnMubGVuZ3RoXHJcblxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbWluTGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKHR5cGVvZiAodGhpcy5xdWVzdGlvbnNbaV0pICE9PSAndW5kZWZpbmVkJylcclxuICAgICAgICAgICAgICAgIGlmIChhbnN3ZXJzW2ldID09PSB0aGlzLnF1ZXN0aW9uc1tpXS5jb3JyZWN0SW5kZXgpIENvcnJlY3RzKys7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIHJldHVybiAoQ29ycmVjdHMgLyBhbnN3ZXJzLmxlbmd0aCkgKiAxMDA7XHJcbiAgICB9XHJcbn0iXX0=