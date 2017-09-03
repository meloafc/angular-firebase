import { Component, OnInit } from '@angular/core';
import { LoginService } from "../../core/services/login.service";
import { Router } from "@angular/router";

@Component({
  selector: 'nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  usuarioLogado = "";

  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.usuarioLogado = this.loginService.getUsuarioLogado().usuario;
  }

  fazerLogout() {
    this.loginService.fazerLogout();
    this.router.navigate(['/login']);
  }

}
