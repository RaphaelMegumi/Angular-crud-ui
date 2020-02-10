import { UsuarioService } from './../usuario.service';
import { Usuario } from './../usuario';
import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {
  id: number;
  usuario: Usuario = new Usuario();

  constructor(
    private router: Router,
    private usuarioService: UsuarioService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.id = this.route.snapshot.params.id;
    this.usuarioService.getUsuario(this.id).subscribe(
      data => {
        console.log(data), (this.usuario = data);
      },
      error => console.log(error)
    );
  }

  onSubmit() {
    this.updateUsuario();
  }

  updateUsuario() {
    this.usuarioService.updateUsuario(this.id, this.usuario).subscribe(
      data => {
        this.usuario = new Usuario();
        this.goToList();
      },
      error => console.log(error)
    );
  }

  goToList() {
    this.router.navigate(['/usuarios']);
  }
}
