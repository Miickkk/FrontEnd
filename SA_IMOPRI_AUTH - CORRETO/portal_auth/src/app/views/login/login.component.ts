import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  senha: string = '';
  erro: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  entrar() {
    this.authService.login({ email: this.email, senha: this.senha }).subscribe(usuario => {
      if (usuario) {
        this.erro = '';

        // Redireciona dependendo da permissão
        if (usuario.permissao === 'corretor') {
          this.router.navigate(['/interna-corretor']); // página admin
        } else {
          this.router.navigate(['/home']); // página de usuário comum
        }

      } else {
        this.erro = 'Email ou senha inválidos';
      }
    }, erro => {
      this.erro = 'Erro ao tentar logar. Tente novamente.';
    });
  }
}
