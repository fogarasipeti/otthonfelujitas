import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; // ngModel használata miatt
import { AppComponent } from './app.component';
import { CalculationsComponent } from './calculations/calculations.component';
import { WorksListComponent } from './works-list/works-list.component';

@NgModule({
  declarations: [AppComponent, CalculationsComponent, WorksListComponent],
  imports: [
    BrowserModule,
    FormsModule, // ngModel használata miatt
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
