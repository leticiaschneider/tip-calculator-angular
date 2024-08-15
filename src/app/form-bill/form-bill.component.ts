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
  billObj = {
    billValue: 0,
    tipPercentage: 0,
    numberOfPeople: 1,
    tipAmountPerPerson: 0,
    totalPerPerson: 0
  }

  calculeValues() {
    this.billObj.tipAmountPerPerson = parseFloat(((this.billObj.billValue * this.billObj.tipPercentage / 100) / this.billObj.numberOfPeople).toFixed(2));
    this.billObj.totalPerPerson = parseFloat(((this.billObj.billValue / this.billObj.numberOfPeople) + this.billObj.tipAmountPerPerson).toFixed(2));
  }
}


