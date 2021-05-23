
function Calculator(a, b) {
    this.a = a;
    this.b = b;
}

Calculator.prototype.add = function () {
    return this.a + this.b;
}

Calculator.prototype.sub = function () {
    return this.a - this.b;
}

Calculator.prototype.mult = function () {
    return this.a * this.b;
}

Calculator.prototype.log = function () {
    console.log(this.add());
    console.log(this.sub());
    console.log(this.mult());
}

var c1 = new Calculator(5, 10);
var callLog = c1.log;
callLog.call(c1);

var c2 = new Calculator(6, 10);
var callLog2 = c2.log;
callLog2.call(c2);



setTimeout(() => {
    callLog2.call(c1);
}, 2000);
