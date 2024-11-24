import { Component, EventEmitter, Output } from '@angular/core';

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

  @Output() calculationCompleted = new EventEmitter<number | null>();

  calculate() {
    this.totalAmount = this.materialCost + this.laborCost;

    const isMaterialValid = this.materialCost >= this.totalAmount * 0.25;
    const isLaborValid = this.laborCost >= this.totalAmount * 0.25;

    if (!isMaterialValid || !isLaborValid) {
      const eligibleCost = Math.min(this.materialCost, this.laborCost) * 2;
      this.result = Math.min(eligibleCost, 3000000 - this.previousSupport);
    } else {
      const support = this.materialCost * 0.5 + this.laborCost * 0.5;
      this.result = Math.min(support, 3000000 - this.previousSupport);
    }

    // Küldjük el az eredményt az AppComponent-nek
    this.calculationCompleted.emit(this.totalAmount);
  }

  reset() {
    this.materialCost = 0;
    this.laborCost = 0;
    this.previousSupport = 0;
    this.result = null;
    this.totalAmount = 0;

    // Nullázzuk az eseményt
    this.calculationCompleted.emit(null);
  }
}
