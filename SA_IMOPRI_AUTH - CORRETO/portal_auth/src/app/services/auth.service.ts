import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable, switchMap, throwError } from 'rxjs';

// SERVIÇO DE AUTENTICAÇÃO
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3004/clientes';
  private readonly CHAVE_AUTH = 'clienteLogado';

  constructor(private router: Router, private http: HttpClient) {}

  // REGISTRO
registrar(cliente: any): Observable<any> {
  return this.http.get<any[]>(this.apiUrl).pipe(
    switchMap((clientes) => {

      // VERIFICA SE O EMAIL JÁ ESTÁ CADASTRADO
      if (clientes.some(c => c.email === cliente.email)) {
        return throwError(() => new Error('Cliente já cadastrado'));
      }

      // GERA O PRÓXIMO ID
      const maxId = clientes.length ? Math.max(...clientes.map(c => Number(c.id))) : 0;
      cliente.id = maxId + 1;

      return this.http.post<any>(this.apiUrl, cliente);
    })
  );
}

  // LOGIN
  login(credenciais: { email: string; senha: string }): Observable<any> {
    const corretor = {
      id: '1',
      nome: 'Corretor',
      email: 'corretor@rh.connect.com',
      senha: 'corretor1234',
      permissao: 'corretor',
    };

    // BUSCA O CLIENTE NO BACKEND
    return this.http.get<any[]>(this.apiUrl).pipe(
      map((clientes) => {

        // VERIFICAR SE É O CORRETOR
        if (
          credenciais.email === corretor.email &&
          credenciais.senha === corretor.senha
        ) {
          localStorage.setItem(this.CHAVE_AUTH, JSON.stringify(corretor));
          return corretor;
        }

        // PROCURAR CLIENTE NORMAL
        const cliente = clientes.find(
          (c) => c.email === credenciais.email && c.senha === credenciais.senha
        );

        if (cliente) {
          localStorage.setItem(this.CHAVE_AUTH, JSON.stringify(cliente));
          return cliente;
        }

        return null;
      })
    );
  }

  // LOGOUT
  logout(): void {
    localStorage.removeItem(this.CHAVE_AUTH);
    this.router.navigate(['/interna']);
  }

  // VERIFICA SE O CLIENTE ESTÁ AUTENTICADO
  estaAutenticado(): boolean {
    return !!localStorage.getItem(this.CHAVE_AUTH);
  }

  // RETORNA O CLIENTE ATUAL
  clienteAtual(): any {
    return JSON.parse(localStorage.getItem(this.CHAVE_AUTH) || 'null');
  }
}
