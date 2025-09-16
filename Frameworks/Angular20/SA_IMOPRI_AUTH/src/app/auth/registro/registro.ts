import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth';
import { Cliente } from '../../core/models/cliente.model';
import { identity, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  imports: [FormsModule],
  templateUrl: './registro.html',
  styleUrls: ['./registro.scss']
})

export class Registro {
  nome = "";
  email = "";
  senha = "";
  erro = '';

  constructor(private auth: AuthService, private router: Router){}

  onSubmit() {
    this.erro = '';
    const cliente: Cliente = {
      id: 0, // or undefined/null if allowed, or generate a temporary id if needed
      nome: this.nome,
      email: this.email,
      senha: this.senha,
    };
    this.auth.registrarCliente(cliente).subscribe({
      next: (user) => {
        this.router.navigate(['/login']);
      },
      error: (err) => {
        if (err.message === 'Usuário já existe') {
          this.erro = 'Este email já está cadastrado';
        } else {
          this.erro = 'Erro ao registrar. Tente novamente';
        }
      }
    });
  }
}