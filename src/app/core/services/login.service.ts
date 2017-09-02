import { Injectable } from '@angular/core';
import { Usuario } from "../models/usuario";

const CHAVE_USUARIO_LOGADO: string = "usuario-logado";

@Injectable()
export class LoginService {

  constructor() { }

  isUsuarioLogado(): boolean {
    if(this.getUsuarioLogado() == undefined) {
      return false;
    }
    return true;
  }

  getUsuarioLogado(): Usuario {
    let usuarioLogado: Usuario = JSON.parse(localStorage.getItem(CHAVE_USUARIO_LOGADO));
    return usuarioLogado;
  }

  fazerLogin(usuario: Usuario) {
    localStorage.setItem(CHAVE_USUARIO_LOGADO, JSON.stringify(usuario));
  }

  fazerLogout() {
    localStorage.removeItem(CHAVE_USUARIO_LOGADO);
  }

}
