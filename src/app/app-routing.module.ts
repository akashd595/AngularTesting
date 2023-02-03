import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArrayDemoComponent } from './array-demo/array-demo.component';
import { BadalQuotesComponent } from './badal-quotes/badal-quotes.component';
import { EvenOddComponent } from './even-odd/even-odd.component';
import { FormBodyComponent } from './form-body/form-body.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { PrimeNumberComponent } from './prime-number/prime-number.component';
import { QuoteGeneratorComponent } from './quote-generator/quote-generator.component';
import { StudentReportCardComponent } from './student-report-card/student-report-card.component';
import { TestingProgramsComponent } from './testing-programs/testing-programs.component';
import { TicTacToeComponent } from './tic-tac-toe/tic-tac-toe.component';

const routes: Routes = [
  {path:'',redirectTo:'/form-body',pathMatch:'full'},
  {path:'form-page',component:FormComponentComponent},
  {path:'form-body',component:FormBodyComponent},
  {path:'prime-number',component:PrimeNumberComponent},
  {path:'even-odd',component:EvenOddComponent},
  {path:'tic-tac-toe',component:TicTacToeComponent},
  {path:'arrays',component:ArrayDemoComponent},
  {path:'test',component:TestingProgramsComponent},
  {path:'quotes',component:QuoteGeneratorComponent},
  {path:'bQuotes',component:BadalQuotesComponent},
  {path:'students',component:StudentReportCardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
