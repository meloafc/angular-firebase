import { Component, OnInit } from '@angular/core';
import { LoginService } from "./core/services/login.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  usuarioLogado = "";

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.usuarioLogado = this.loginService.getUsuarioLogado().usuario;
  }
}
