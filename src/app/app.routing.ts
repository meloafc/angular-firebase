import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';
import { LoginComponent } from "./paginas/login/login.component";
import { AppComponent } from "./app.component";
import { AuthGuard } from "./auth/auth.guard";

const appRoutes: Routes = [
  { path: '', component: AppComponent, canActivate: [AuthGuard] },
  { path: 'login', pathMatch: 'full', component: LoginComponent },
  { path: '**', redirectTo: '' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);