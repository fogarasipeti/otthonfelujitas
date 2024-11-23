import { Component } from '@angular/core';

@Component({
  selector: 'app-calculations',
  templateUrl: './calculations.component.html',
  styleUrls: ['./calculations.component.css'],
})
export class CalculationsComponent {
  materialCost: number = 0;
  laborCost: number = 0;
  previousSupport: number = 0;
  result: number | null = null;
  totalAmount: number = 0;

  calculate() {
    this.totalAmount = this.materialCost + this.laborCost;

    // Check if individual costs are at least 25% of the total amount
    const isMaterialValid = this.materialCost >= this.totalAmount * 0.25;
    const isLaborValid = this.laborCost >= this.totalAmount * 0.25;

    if (!isMaterialValid || !isLaborValid) {
      // Calculate based on the smaller of the two costs
      const eligibleCost = Math.min(this.materialCost, this.laborCost) * 2;
      this.result = Math.min(eligibleCost, 3000000 - this.previousSupport);
    } else {
      // Apply the 50-50% rule
      const support = this.materialCost * 0.5 + this.laborCost * 0.5;
      this.result = Math.min(support, 3000000 - this.previousSupport);
    }
  }

  reset() {
    this.materialCost = 0;
    this.laborCost = 0;
    this.previousSupport = 0;
    this.totalAmount = 0;
    this.result = null;
  }
}
