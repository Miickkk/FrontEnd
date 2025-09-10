import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, switchMap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3004/clientes';
  private readonly CHAVE_AUTH = 'clienteLogado';

  constructor(private router: Router, private http: HttpClient) {}

  // Registrar novo cliente
  registrar(cliente: any): Observable<any> {
    return this.http.get<any[]>(`${this.apiUrl}?email=${cliente.email}`).pipe(
      switchMap((res) => {
        if (res.length > 0) {
          return throwError(() => new Error('Cliente já cadastrado'));
        }
        return this.http.post<any>(this.apiUrl, cliente);
      })
    );
  }

  // Login
  login(credenciais: { email: string; senha: string }): Observable<any> {
    const corretor = {
      id: '1',
      nome: 'Corretor',
      email: 'corretor@imobiliariapm.connect.com',
      senha: 'corretor1234',
      permissao: 'corretor',
    };

    return this.http.get<any[]>(this.apiUrl).pipe(
      map((corretores) => {
        // Verificar se é o corretor
        if (
          credenciais.email === corretor.email &&
          credenciais.senha === corretor.senha
        ) {
          localStorage.setItem(this.CHAVE_AUTH, JSON.stringify(corretor));
          return corretor;
        }

        // Procurar usuário normal
        const clienteEncontrado = corretores.find(
          (cliente: any) => cliente.email === credenciais.email && cliente.senha === credenciais.senha
        );

        if (clienteEncontrado) {
          localStorage.setItem(this.CHAVE_AUTH, JSON.stringify(clienteEncontrado));
          return clienteEncontrado;
        }

        return null;
      })
    );
  }

  // Logout
  logout(): void {
    localStorage.removeItem(this.CHAVE_AUTH);
    this.router.navigate(['/login']);
  }

  // Verifica se o usuário está autenticado
  estaAutenticado(): boolean {
    return !!localStorage.getItem(this.CHAVE_AUTH);
  }

  // Retorna o usuário logado
  usuarioAtual(): any {
    return JSON.parse(localStorage.getItem(this.CHAVE_AUTH) || 'null');
  }
}
