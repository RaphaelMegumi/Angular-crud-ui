import { AutenticacaoService } from './autenticacao.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'usuarios-ui';

  mostrarMenu: boolean = false;

  constructor(private autenticacaoService: AutenticacaoService) {}

  ngOnInit() {
    this.autenticacaoService.mostrarMenuEmitter.subscribe(
      mostrar => (this.mostrarMenu = mostrar)
    );
  }
}
