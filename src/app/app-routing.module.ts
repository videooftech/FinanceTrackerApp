import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncomeComponent } from './components/income/income.component';
import { ExpenseComponent } from './components/expense/expense.component';

const routes: Routes = [
  { path: '', redirectTo: 'income', pathMatch: 'full' },
  { path: 'income', component: IncomeComponent },
  { path: 'expense', component: ExpenseComponent },
  // dashboard will come later
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
