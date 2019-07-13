import { Component, OnInit } from '@angular/core';
import { BankService } from '../service';
import { Bank } from '../bank';

@Component({
  selector: 'app-bank-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css'],
  preserveWhitespaces: true
})
export class ListagemComponent implements OnInit {

  bankList: Bank[];

  constructor(private bankService: BankService) { }

  ngOnInit() {
    this.bankService.listar().subscribe(dados => this.bankList = dados);
  }
}
