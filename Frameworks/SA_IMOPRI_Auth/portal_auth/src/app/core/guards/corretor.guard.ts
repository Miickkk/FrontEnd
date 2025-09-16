import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

export const CorretorGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);

  if (auth.isAuthenticated() && auth.getPerfilUsuario() === 'corretor') {
    return true;
  } else {
    router.navigate(['/acesso-negado']);
    return false;
  }
};