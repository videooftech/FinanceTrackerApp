import { Component, OnInit } from '@angular/core';
import { IncomeService } from '../../services/income.service';
import { Income } from '../../models/income.model';



@Component({
  selector: 'app-income',
  templateUrl: './income.component.html'
})
export class IncomeComponent implements OnInit {

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
}
