import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const usuario = this.authService.usuarioAtual();

    if (!usuario) {
      this.router.navigate(['/login']);
      return false;
    }

    // Apenas admin pode acessar /interna-admin
    if (window.location.href.includes('interna-admin') && usuario.permissao !== 'admin') {
      this.router.navigate(['/home']);
      return false;
    }

    return true;
  }
}
