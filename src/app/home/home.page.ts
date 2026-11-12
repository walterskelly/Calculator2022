import { Component } from '@angular/core';

@Component({
  selector: 'page-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  display="";
  firstOperand = 0;
  secondOperand = 0;
  operation="";
  result=0;
  expression="";
  history="";
  problemComplete=false;
  error=false;

  ButtonClicked(button: number) {
    if (this.problemComplete === true) {
      this.display = "";
      this.problemComplete = false;
      this.operation = "";
    }
    this.display += button;
  }

  OperatorClicked(operator: string) {
    if (this.display === "") {
      return;
    }

    if (this.operation !== "") {
      if (this.display.endsWith(" " + this.operation + " ")) {
        this.display = this.display.slice(0, -3);
      }
      else {
        return;
      }
    }

    this.firstOperand = parseFloat(this.display);

    this.operation = operator;
    this.display += " " + operator + " ";
  }

  DecimalPoint() {
    if (this.problemComplete === true) {
      this.display="";
      this.problemComplete=false;
      this.operation = "";
    }

    let currentOperand = this.display;

    if (this.operation !== "") {
      let operationIndex = this.display.indexOf(this.operation);
      currentOperand = this.display.slice(operationIndex + 2);
    }
    
    if (!currentOperand.includes('.')) {
      this.display += ".";
    }
  }

  ClearButton() {
    this.display = "";
    this.problemComplete=false;
    this.error=false;
    this.operation = "";
  }

  Equals() {
    if (this.display.endsWith(" " + this.operation + " ")) {
      return;
    }

    let display = this.display;
    let operation = this.operation;

      if (operation !== "") {
        this.expression = display;
        let operationIndex = display.indexOf(operation);
        display = display.slice(operationIndex + 2);
        this.secondOperand = parseFloat(display);

        if (this.operation === "/" && this.secondOperand === 0) {
          this.display = "Cannot divide by zero";
          this.problemComplete = true;
          return;
        }
        
        switch (operation) {
          case "+": {
            this.result = this.firstOperand + this.secondOperand;
            break;
          }
          case "-": {
            this.result = this.firstOperand - this.secondOperand;
            break;
          }
          case "*": {
            this.result = this.firstOperand * this.secondOperand;
            break;
          }
          case "/": {
            this.result = this.firstOperand / this.secondOperand;
            break;
          }
          default: {
            return;
          }
        }

        this.display = Number(this.result.toPrecision(12)).toString();
        this.expression += " = " + this.display;
        this.history += "\n" + this.expression;
      
      }
  
    this.problemComplete = true;
  }
}
