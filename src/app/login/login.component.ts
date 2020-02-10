import { Usuario } from './../usuario';
import { AutenticacaoService } from './../autenticacao.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  usuario: Usuario = new Usuario();

  constructor(private autenticacaoService: AutenticacaoService) {}

  ngOnInit() {}

  fazerLogin() {
    this.autenticacaoService.fazerLogin(this.usuario);
  }
}
