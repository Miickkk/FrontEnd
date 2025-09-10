import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-interna',
  templateUrl: './interna.component.html',
  styleUrls: ['./interna.component.scss']
})
export class InternaComponent implements OnInit {
  usuario: any = {};

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.carregarUsuario();
  }

  carregarUsuario() {
    this.usuario = this.authService.usuarioAtual();
    
    if (!this.usuario || Object.keys(this.usuario).length === 0) {
      this.router.navigate(['/login']);
    }
  }

  logout() {
    this.authService.logout();
  }
}