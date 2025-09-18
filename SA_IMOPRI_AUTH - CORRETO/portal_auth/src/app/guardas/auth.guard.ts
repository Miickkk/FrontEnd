import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const cliente = this.authService.clienteAtual();

    if (!cliente) {
      this.router.navigate(['/login']);
      return false;
    }

    // Apenas corretor pode acessar /interna-corretor
    if (window.location.href.includes('meus-imoveis') && cliente.permissao !== 'corretor') {
      this.router.navigate(['/home']);
      return false;
    }

    return true;
  }
}
