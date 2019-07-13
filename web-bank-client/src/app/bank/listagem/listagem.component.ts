import { Component, OnInit } from '@angular/core';
import { BankService } from '../service';

@Component({
  selector: 'app-bank-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  bankList = [
    {id: 1, nome: 'Satander'},
    {id: 2, nome: 'Bradesco'}
  ];

  // bankList: Array<any>;

  constructor(private contatoService: BankService) { }

  ngOnInit() {
    // this.listar();
  }

  // listar(){
  //   this.contatoService.listar().subscribe(dado => this.bankList= dado);
  // }
}
