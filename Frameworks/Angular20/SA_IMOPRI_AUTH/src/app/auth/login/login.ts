import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.scss']
})
export class Login {
  email = '';
  senha = '';
  erro = '';

  constructor(private auth: AuthService, private router: Router) {}

  onSubmit() {
    this.erro = '';
    this.auth.login(this.email, this.senha).subscribe({
      next: (sucesso) => {
        if (sucesso) {
          const usuario = this.auth.usuarioAtual();

          if (usuario.tipo === 'cliente') {
            this.router.navigate(['/meus-interesses']);
          } else if (usuario.tipo === 'corretor') {
            this.router.navigate(['/dashboard']);
          } else {
            this.router.navigate(['/']); 
          }
        } else {
          this.erro = 'Email ou senha inválidos';
        }
      },
      error: () => {
        this.erro = 'Erro no servidor. Tente novamente.';
      }
    });
  }
}