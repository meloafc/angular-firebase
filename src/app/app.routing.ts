import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule }   from '@angular/router';
import { LoginComponent } from "./paginas/login/login.component";
import { AuthGuard } from "./auth/auth.guard";
import { InicioComponent } from "./paginas/inicio/inicio.component";

const appRoutes: Routes = [
  { path: '', component: InicioComponent, canActivate: [AuthGuard] },
  { path: 'login', pathMatch: 'full', component: LoginComponent },
  { path: '**', redirectTo: '' }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);