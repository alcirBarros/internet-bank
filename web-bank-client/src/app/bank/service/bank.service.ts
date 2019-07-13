import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  bankUrl = "http://localhost:8090/v1/bank/list"

  constructor(private http: HttpClient) { }

  listar(){
    // return this.http.get<any[]>(`${this.bankUrl}`);
  }
}
