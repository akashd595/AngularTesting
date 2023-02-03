import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbCollapseModule } from '@ng-bootstrap/ng-bootstrap';
import { FormBodyComponent } from './form-body/form-body.component';
import { PrimeNumberComponent } from './prime-number/prime-number.component';
import { EvenOddComponent } from './even-odd/even-odd.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';
import { ArrayDemoComponent } from './array-demo/array-demo.component';
import { TestingProgramsComponent } from './testing-programs/testing-programs.component';
import { QuoteGeneratorComponent } from './quote-generator/quote-generator.component';
import { BadalQuotesComponent } from './badal-quotes/badal-quotes.component';
import { StudentReportCardComponent } from './student-report-card/student-report-card.component';
@NgModule({
  declarations: [
    AppComponent,
    FormComponentComponent,
    FormBodyComponent,
    PrimeNumberComponent,
    EvenOddComponent,
    TicTacToeComponent,
    ArrayDemoComponent,
    TestingProgramsComponent,
    QuoteGeneratorComponent,
    BadalQuotesComponent,
    StudentReportCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    NgbCollapseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
