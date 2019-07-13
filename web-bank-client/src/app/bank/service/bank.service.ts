import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Bank } from '../bank';

@Injectable({
  providedIn: 'root'
})
export class BankService {

  private readonly bankUrl = 'http://localhost:8090/v1/bank/list';

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<Bank[]>(this.bankUrl);
  }
}
