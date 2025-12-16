import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IncomeService } from '../../services/income.service';
import { Income } from '../../models/income.model';



@Component({
  selector: 'app-income',
  templateUrl: './income.component.html',
  styleUrls: ['./income.component.css'],
  encapsulation: ViewEncapsulation.None

})
export class IncomeComponent implements OnInit {

  editing: boolean = false;
  editData: Income = { id: 0, source: '', amount: 0, date: '' };

  incomeList: Income[] = [];

  newIncome: Omit<Income, 'id'> = {
    source: '',
    amount: 0,
    date: ''
  };


  constructor(private incomeService: IncomeService) {}

  ngOnInit(): void {
    this.loadIncome();
  }

  loadIncome() {
    this.incomeService.getIncome().subscribe(res => {
      this.incomeList = res;
    });
  }

  addIncome() {
    this.incomeService.addIncome(this.newIncome).subscribe(res => {
      this.incomeList.push(res);
      this.newIncome = { source: '', amount: 0, date: '' };
    });
  }

  startEdit(item: Income) {
    this.editing = true;
    this.editData = { ...item };
  }

  cancelEdit() {
    this.editing = false;
  }

  saveEdit() {
    this.incomeService.updateIncome(this.editData.id, this.editData)
      .subscribe(() => {
        this.loadIncome();
        this.editing = false;
      });
  }

  deleteIncome(id: number) {
    if (confirm("Are you sure you want to delete this income?")) {
      this.incomeService.deleteIncome(id).subscribe(() => {
        this.loadIncome();
      });
    }
  }

}
