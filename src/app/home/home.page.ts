import { Component } from '@angular/core';
import { IonItem } from '@ionic/angular';
import { NavController } from '@ionic/angular';
import { GlobaldataService } from '../globaldata.service';
import { Router } from '@angular/router';


@Component({
  selector: 'page-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  router: Router;
  display="";
  firstOperand = 0;
  secondOperand = 0;
  operation="";
  secondNumberString=""
  decimalPlaces=0;
  decimalPlaces2=0;
  decimalPlacesResult=0;
  result=0;
  resultString="";
  expression="";
  history="";
  problemComplete=false;
  error=false;

  constructor(){}

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

  ClearButton(display) {
    this.display = "";
    this.problemComplete=false;
    this.error=false;
    this.operation = "";
  }

  Equals(display, operation) {
    if (this.display.endsWith(" " + this.operation + " ")) {
      return;
    }
      if (operation !== "") {
        this.expression = display;
        let operationIndex = display.indexOf(operation);
        display = display.slice(operationIndex + 2);
        this.secondNumberString = display;
        this.secondOperand = parseFloat(display);
        if (this.secondNumberString.includes('.')) {
          this.decimalPlaces2 = this.secondNumberString.length - this.secondNumberString.indexOf('.') - 1;
          if (this.decimalPlaces2 > this.decimalPlaces) {
            this.decimalPlaces = this.decimalPlaces2;
          }
        }
        switch (operation) {
          case "+": {
            this.result = this.firstOperand + this.secondOperand;
            this.display = this.result.toFixed(this.decimalPlaces).toString();
            this.expression += " = " + this.result;
            this.history += "\n" + this.expression;
            break;
          }
          case "-": {
            this.result = this.firstOperand - this.secondOperand;
            this.display = this.result.toFixed(this.decimalPlaces).toString();
            this.expression += " = " + this.result;
            this.history += "\n" + this.expression;
            break;
          }
          case "*": {
            this.result = this.firstOperand * this.secondOperand;
            this.display = this.result.toFixed(this.decimalPlaces).toString();
            this.expression += " = " + this.result;
            this.history += "\n" + this.expression;
            break;
          }
          case "/": {
            this.result = this.firstOperand / this.secondOperand;
            this.resultString = this.result.toString();
            if (this.resultString.includes('.')) {
              this.decimalPlacesResult = this.resultString.length - this.resultString.indexOf('.') - 1;
              if (this.decimalPlacesResult > this.decimalPlaces) {
                this.decimalPlaces = this.decimalPlacesResult;
              }
            }
            this.display = this.result.toFixed(this.decimalPlaces).toString();
            this.expression += " = " + this.result;
            this.history += "\n" + this.expression;
            break;
          }
          default: {
            this.display = "";
            break;
          }
      }
      
    }
    this.decimalPlaces = 0;
    this.problemComplete = true;
  }
}
