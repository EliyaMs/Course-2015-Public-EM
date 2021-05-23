
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
    console.log(this.a + ' + ' + this.b + ' = ' + this.add());
    console.log(this.a + ' - ' + this.b + ' = ' + this.sub());
    console.log(this.a + ' * ' + this.b + ' = ' + this.mult());
}

var c1 = new Calculator(5, 10);
c1.log();

var c2 = new Calculator(6, 10);
c2.log();


setTimeout(() => {
    c1.log();
}, 2000);
