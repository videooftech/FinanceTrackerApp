import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Income } from '../models/income.model';

@Injectable({
  providedIn: 'root'
})
export class IncomeService {

  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getIncome(): Observable<Income[]> {
    return this.http.get<Income[]>(`${this.baseUrl}/api/income`);
  }

  addIncome(data: Omit<Income, 'id'>): Observable<Income> {
    return this.http.post<Income>(`${this.baseUrl}/api/income`, data);
  }
}