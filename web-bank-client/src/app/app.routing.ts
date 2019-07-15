import { AuthGuard } from './auth/auth.guard';
import { SigninComponent } from './signin/signin.component';
import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
    // { path: 'contacts', loadChildren: 'app/contacts/contacts.module#ContactsModule', canActivate: [AuthGuard]},
    { path: '', pathMatch: 'full', component: HomeComponent, canActivate: [AuthGuard] },
    { path: 'signin', component: SigninComponent },
    // { path: 'not-found', component: NotFoundComponent },
    { path: '**', redirectTo: 'not-found' }
  ];
  
  export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
  