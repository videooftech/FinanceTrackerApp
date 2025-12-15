import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Expense } from '../models/expense.model';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getExpenses(): Observable<Expense[]> {
    return this.http.get<Expense[]>(`${this.baseUrl}/api/expense`);
  }

  addExpense(data: Omit<Expense, 'id'>): Observable<Expense> {
    return this.http.post<Expense>(`${this.baseUrl}/api/expense`, data);
  }
}