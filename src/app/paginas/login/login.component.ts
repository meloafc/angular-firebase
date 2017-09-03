import { Component, OnInit } from '@angular/core';
import { LoginService } from "../../core/services/login.service";
import { Router } from "@angular/router";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  loading = false;

  constructor(
    private router: Router,
    private loginService: LoginService
  ) { }

  ngOnInit() {
  }

  fazerLogin() {
    this.loginService.fazerLogin({usuario: 'alex', senha: 'alex'});
    this.router.navigate(['/']);
  }
}
