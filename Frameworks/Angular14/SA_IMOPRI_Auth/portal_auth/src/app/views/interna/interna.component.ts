import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-interna',
  templateUrl: './interna.component.html',
  styleUrls: ['./interna.component.scss']
})
export class InternaComponent implements OnInit {
  cliente: any = {};

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.carregarCliente();
  }

  carregarCliente() {
    this.cliente = this.authService.clienteAtual();
    
    if (!this.cliente || Object.keys(this.cliente).length === 0) {
      this.router.navigate(['/login']);
    }
  }

  logout() {
    this.authService.logout();
  }
}