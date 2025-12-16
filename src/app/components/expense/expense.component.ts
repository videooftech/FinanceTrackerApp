import { Component, OnInit } from '@angular/core';
import { ExpenseService } from '../../services/expense.service';
import { Expense } from '../../models/expense.model';

@Component({
  selector: 'app-expense',
  templateUrl: './expense.component.html'
})
export class ExpenseComponent implements OnInit {

  editing: boolean = false;
  editData: Expense = { id: 0, category: '', amount: 0, date: '' };

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

  startEdit(item: Expense) {
    this.editing = true;
    this.editData = { ...item };
  }

  cancelEdit() {
    this.editing = false;
  }

  saveEdit() {
     this.expenseService.updateExpense(this.editData.id, this.editData)
       .subscribe(() => {
         this.loadExpenses();
         this.editing = false;
       });
  }

  deleteExpense(id: number) {
    if (confirm("Are you sure you want to delete this expense?")) {
       this.expenseService.deleteExpense(id).subscribe(() => {
      console.log("Deleted, refreshing list...");

       this.loadExpenses();
      });
    }
  }

}
