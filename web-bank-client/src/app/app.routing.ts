import { AuthGuard } from './auth/auth.guard';
import { SigninComponent } from './signin/signin.component';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './shared/home/home.component';
import { NotFoundComponent } from './shared/not-found.component';


const appRoutes: Routes = [
    { path: 'contacts', loadChildren: 'app/bank/bank.module#BankModule', 
      canActivate: [AuthGuard]},
    { path: '', pathMatch: 'full', component: HomeComponent, 
      canActivate: [AuthGuard] },
    { path: 'signin', component: SigninComponent },
    { path: 'not-found', component: NotFoundComponent },
    { path: '**', redirectTo: 'not-found' }
  ];
  
  export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
  