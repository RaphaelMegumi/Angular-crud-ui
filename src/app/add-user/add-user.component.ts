import { Router } from '@angular/router';
import { UsuarioService } from './../usuario.service';
import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuario';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  usuario: Usuario = new Usuario();
  submitted = false;

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  ngOnInit() {}

  newUsuario(): void {
    this.submitted = false;
    this.usuario = new Usuario();
  }

  save() {
    this.usuarioService.createUsuario(this.usuario).subscribe(
      data => {
        this.usuario = new Usuario();
        this.goToList();
        console.log(data);
      },
      error => console.log(error)
    );
  }

  goToList() {
    this.router.navigate(['/usuarios']);
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }
}
