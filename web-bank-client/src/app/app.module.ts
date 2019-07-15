import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';


import { BankModule, ListagemComponent } from './bank';
import { BankService } from './bank/service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { routing } from './app.routing';
import { SigninComponent } from './signin/signin.component';
import { AuthService } from './auth/auth.service';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './shared/home/home.component';



@NgModule({
  declarations: [
    AppComponent,
    SigninComponent,
    ListagemComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    SharedModule,
    routing
  ],
  providers: [
    AuthGuard,
    AuthService,
    BankService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
