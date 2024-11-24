import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  totalAmount: number = 0;
  showLoans: boolean = false;

  // Eseménykezelő metódus
  onCalculationResult(totalAmount: number | null) {
    if (totalAmount !== null && totalAmount > 0) {
      this.totalAmount = totalAmount;
      this.showLoans = true; // Mutassa a Loans komponenst
    } else {
      this.totalAmount = 0;
      this.showLoans = false; // Rejtsük el a Loans komponenst
    }
  }
}
