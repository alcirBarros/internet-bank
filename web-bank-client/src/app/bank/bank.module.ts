import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListagemComponent } from './listagem';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ListagemComponent
  ],
  exports:[
    ListagemComponent
  ]
})
export class BankModule { }
