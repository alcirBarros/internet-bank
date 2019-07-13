import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { ListagemComponent } from './listagem';
import { BankService } from './service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ListagemComponent
  ],
  exports:[
    ListagemComponent
  ],
  providers:[
    BankService
  ]
})
export class BankModule { }
