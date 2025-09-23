import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-interna',
  templateUrl: './interna.component.html',
  styleUrls: ['./interna.component.scss'],
})
export class InternaComponent implements OnInit {
  cliente: any = {}; // cliente logado, se houver
  mostrarMenuItens: boolean = false; // para sinalizar ao app que é interna

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.carregarCliente();
    this.mostrarMenuItens = false; // itens do menu escondidos aqui
  }

  carregarCliente() {
    this.cliente = this.authService.clienteAtual() || {};
  }

  logout() {
    this.authService.logout();
  }
}
