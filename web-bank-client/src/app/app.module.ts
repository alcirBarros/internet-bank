import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';


import { BankModule, ListagemComponent } from './bank';
import { BankService } from './bank/service';


@NgModule({
  declarations: [
    AppComponent,
    ListagemComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [BankService],
  bootstrap: [AppComponent]
})
export class AppModule { }
