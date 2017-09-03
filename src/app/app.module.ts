import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './paginas/login/login.component';
import { routing } from "./app.routing";
import { LoginService } from "./core/services/login.service";
import { AuthGuard } from "./auth/auth.guard";
import { InicioComponent } from './paginas/inicio/inicio.component';
import { NavBarComponent } from './layout/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    InicioComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [
    LoginService,
    AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
