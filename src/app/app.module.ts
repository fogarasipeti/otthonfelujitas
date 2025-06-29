import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // ngModel használata miatt
import { AppComponent } from './app.component';
import { CalculationsComponent } from './calculations/calculations.component';
import { DiscountsComponent } from './discounts/discounts.component';
import { LoansComponent } from './loans/loans.component';
import { EligibleSettlementsComponent } from './eligible-settlements/eligible-settlements.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculationsComponent,
    DiscountsComponent,
    LoansComponent,
    EligibleSettlementsComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
