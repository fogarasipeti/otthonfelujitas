import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CalculatorsComponent } from './calculators/calculators.component';
import { WorksListComponent } from './works-list/works-list.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorsComponent,
    WorksListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
