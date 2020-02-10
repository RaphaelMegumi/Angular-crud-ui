import { Router } from '@angular/router';
import { UsuarioService } from './../usuario.service';
import { Usuario } from './../usuario';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.css']
})
export class ListUserComponent implements OnInit {
  usuarios: Observable<Usuario[]>;

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  ngOnInit() {
    this.mostrarListaDeUsuarios();
  }

  mostrarListaDeUsuarios() {
    this.usuarios = this.usuarioService.getUsuarioList();
  }

  deleteUsuario(id: number) {
    this.usuarioService.deleteUsuario(id).subscribe(
      data => {
        console.log(data);
        this.reloadData();
      },
      error => console.log(error)
    );
  }

  reloadData() {
    this.usuarios = this.usuarioService.getUsuarioList();
  }

  updateUsuario(id: number) {
    this.router.navigate(['update-user', id]);
  }
}
