import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss']
})
export class RegistroComponent {
  nome: string = '';
  email: string = '';
  senha: string = '';
  erro: string = '';
  sucesso: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  // Função simples para verificar se tem @
  temArroba(email: string): boolean {
    return email.includes('@');
  }

  registrar() {
    // Resetar mensagens
    this.erro = '';
    this.sucesso = '';

    // Validar se tem @ no email
    if (!this.temArroba(this.email)) {
      this.erro = 'Por favor, insira um email válido com @!';
      return;
    }

    const novoCliente = {
      nome: this.nome,
      email: this.email,
      senha: this.senha
    };

    this.authService.registrar(novoCliente).subscribe({
      next: () => {
        this.sucesso = "Registro bem-sucedido! Vá para o login.";
        this.erro = '';
      },
      error: (err) => {
        this.erro = 'Erro ao registrar: ' + err.message;
      }
    });
  }
}