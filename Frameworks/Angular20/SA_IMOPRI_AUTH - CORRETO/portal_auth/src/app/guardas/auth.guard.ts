import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  // VERIFICA SE O USUÁRIO ESTÁ AUTENTICADO 
  canActivate(): boolean {
    const cliente = this.authService.clienteAtual();

    // SE NÃO ESTIVER AUTENTICADO, REDIRECIONA PARA LOGIN
    if (!cliente) {
      this.router.navigate(['/login']);
      return false;
    }

    // RESTRIÇÃO DE ACESSO PARA USUÁRIOS COMUNS
    if (window.location.href.includes('meus-imoveis') && cliente.permissao !== 'corretor') {
      this.router.navigate(['/home']);
      return false;
    }

    return true;
  }
}
