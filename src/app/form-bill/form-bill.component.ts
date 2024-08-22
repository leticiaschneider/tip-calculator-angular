import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-bill',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './form-bill.component.html',
  styleUrl: './form-bill.component.scss'
})
export class FormBillComponent {
  showCustomTip: Boolean = false;
  

  error = {
    billValueHasError: false,
    tipPercentageHasError: false,
    numberOfPeopleHasError: false,
    messageError: ""
  }
  
  billObj: { 
    billValue: number; 
    tipPercentage: number; 
    numberOfPeople: number; 
    tipAmountPerPerson: number; 
    totalPerPerson: number; 
  } = {
    billValue: 0,
    tipPercentage: 0,
    numberOfPeople: 1,
    tipAmountPerPerson: 0,
    totalPerPerson: 0
  };

  calculeValues() {
    this.billObj.tipAmountPerPerson = parseFloat(((this.billObj.billValue * this.billObj.tipPercentage / 100) / this.billObj.numberOfPeople).toFixed(2));
    this.billObj.totalPerPerson = parseFloat(((this.billObj.billValue / this.billObj.numberOfPeople) + this.billObj.tipAmountPerPerson).toFixed(2));
  }

  setValidation() {
    if (this.billObj.tipPercentage > 100) {
      this.billObj.tipPercentage = 100;
      this.error.tipPercentageHasError = true;
      this.error.messageError = "Tip percentage cannot exceed 100%. It has been set to 100%.";
    } else if (this.billObj.tipPercentage < 0) {
      this.billObj.tipPercentage = 0;
      this.error.tipPercentageHasError = true;
      this.error.messageError = "Tip percentage cannot be less than 0%. It has been set to 0%.";
    }

    if (this.billObj.billValue < 0 ) {
      this.billObj.billValue = 0;
      this.error.billValueHasError = true;
      this.error.messageError = "Bill value cannot be less than 0. It has been reset to 0.";
    }

    if (this.billObj.numberOfPeople < 0 ) {
      this.billObj.numberOfPeople = 0;
      this.error.numberOfPeopleHasError = true;
      this.error.messageError = "Number of people cannot be less than 0. It has been reset to 0.";
    }

    setTimeout(() => {
      this.error.tipPercentageHasError = false;
      this.error.numberOfPeopleHasError = false;
      this.error.billValueHasError = false;
      this.error.messageError = "";
    }, 3000);
  }

  resetValues() {
    this.billObj = {
      billValue: 0,
      tipPercentage: 0,
      numberOfPeople: 1,
      tipAmountPerPerson: 0,
      totalPerPerson: 0
    }
  }
}


