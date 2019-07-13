import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

}
