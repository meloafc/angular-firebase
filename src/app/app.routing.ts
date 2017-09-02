import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';
import { LoginComponent } from "./paginas/login/login.component";

const appRoutes: Routes = [
  { path: 'login', pathMatch: 'full', component: LoginComponent },
  { path: '**', redirectTo: '' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);