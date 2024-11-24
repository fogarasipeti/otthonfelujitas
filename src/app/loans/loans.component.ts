import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.css'],
})
export class LoansComponent {
  @Input() totalAmount: number = 0;

  calculateMonthlyPayment(
    amount: number,
    annualRate: number,
    months: number
  ): number {
    const monthlyRate = annualRate / 12 / 100;
    return (amount * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months));
  }

  get personalLoanMonthlyPayment(): number {
    return this.calculateMonthlyPayment(this.totalAmount, 8, 84);
  }

  get homeRenovationLoanMonthlyPayment(): number {
    return this.calculateMonthlyPayment(this.totalAmount, 3, 120);
  }
}
