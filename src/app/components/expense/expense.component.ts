import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../../services/expense.service';
import { Expense } from '../../models/expense.model';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html'
})
export class ExpenseComponent implements OnInit {

  expenseList: Expense[] = [];

  newExpense: Omit<Expense, 'id'>
 = {
    category: '',
    amount: 0,
    date: ''
  };

  constructor(private expenseService: ExpenseService) {}

  ngOnInit(): void {
    this.loadExpenses();
  }

  loadExpenses() {
    this.expenseService.getExpenses().subscribe(res => {
      this.expenseList = res;
    });
  }

  addExpense() {
    this.expenseService.addExpense(this.newExpense).subscribe(res => {
      this.expenseList.push(res);
      this.newExpense = { category: '', amount: 0, date: '' };
    });
  }
}
