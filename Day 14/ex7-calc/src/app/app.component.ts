import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  a: number = 0;
  b: number = 0;
  isGo: boolean = false;
  isInputsValid = false;


  setA(value: string) {
    this.a = Number(value);
    if (this.a && this.b){
      this.isInputsValid = true;
    }
    else {
      this.isInputsValid = false;
    }
  }
  setB(value: string) {
    this.b = Number(value);
    if (this.b && this.a){
      this.isInputsValid = true;
    }
    else {
      this.isInputsValid = false;
    }
  }

  add() {
    return this.a + this.b;
  }

  sub() {
    return this.a - this.b;
  }

  mult() {
    return this.a * this.b;
  }

  go(inputA: string, inputB: string) {
    this.isGo = true;
  }
}
