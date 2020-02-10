import { Usuario } from './usuario';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  url = 'http://localhost:8080/usuarios';

  constructor(private http: HttpClient) {}

  getUsuarioList() {
    return this.http.get<Usuario[]>(`${this.url}`);
  }

  getUsuario(id: number) {
    return this.http.get<Usuario>(`${this.url}/${id}`);
  }

  createUsuario(usuario: Usuario) {
    return this.http.post(`${this.url}`, usuario);
  }

  updateUsuario(id: number, usuario: Usuario) {
    return this.http.put(`${this.url}/${id}`, usuario);
  }

  deleteUsuario(id: number) {
    return this.http.delete(`${this.url}/${id}`);
  }
}
