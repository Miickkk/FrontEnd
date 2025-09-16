import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Cliente } from '../models/cliente.model';
import { Corretor } from '../models/corretor.model';
import { Imovel } from '../models/imovel.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3004/usuarios';
  private readonly CHAVE_USUARIO = 'usuarioLogado';

  constructor(private http: HttpClient) {}

  // LOGIN
  login(email: string, senha: string): Observable<boolean> {
    return this.http
      .get<any[]>(`${this.apiUrl}?email=${email}&senha=${senha}`)
      .pipe(map((usuarios) => {
          if (usuarios.length > 0) {
            localStorage.setItem(this.CHAVE_USUARIO, JSON.stringify(usuarios[0]));
            return true;
          }
          return false;
        })
      );
  }

  // REGISTRO (apenas cliente se cadastra, corretor é criado por admin)
  registrarCliente(cliente: Cliente): Observable<Cliente> {
    const { id, ...dados } = cliente;
    return this.http.post<Cliente>(this.apiUrl, { ...dados, tipo: 'cliente' });
  }

  // LOGOUT
  logout() {
    localStorage.removeItem(this.CHAVE_USUARIO);
  }

  isBrowser(): boolean {
  return typeof window !== 'undefined';
}

  // CHECA LOGIN
  isAuthenticated(): boolean {
    if (!this.isBrowser()) return false;
    return !!localStorage.getItem(this.CHAVE_USUARIO);
  }

  // RETORNA USUÁRIO ATUAL
  usuarioAtual(): any {
    if (!this.isBrowser()) return false;
    return JSON.parse(localStorage.getItem(this.CHAVE_USUARIO) || '{}');
  }

  // CHECA PERFIL
  getPerfilUsuario(): 'cliente' | 'corretor' | null {
    const user = this.usuarioAtual();
    return user?.tipo || null;
  }
}
