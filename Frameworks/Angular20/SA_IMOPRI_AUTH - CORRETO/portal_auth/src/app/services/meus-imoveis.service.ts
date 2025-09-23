import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MeuImovel } from '../models/meu-imovel.model';

// SERVIÇO DE MEUS IMÓVEIS
@Injectable({
  providedIn: 'root'
})
export class MeusImoveisService {
  private apiUrl = "http://localhost:3004/meus-imoveis"; // endereço da API

  constructor(private http: HttpClient) {}

  // GET - LISTA TODOS OS IMÓVEIS
  getMeusImoveis(): Observable<MeuImovel[]> {
    return this.http.get<MeuImovel[]>(this.apiUrl);
  }

  // POST - ADICIONAR UM NOVO IMÓVEL
  postMeuImovel(meuImovel: MeuImovel): Observable<MeuImovel[]> {
    return this.http.post<MeuImovel[]>(this.apiUrl, meuImovel);
  }

  // PUT - ATUALIZAR IMÓVEL EXISTENTE
  putMeuImovel(id: any, meuImovel: MeuImovel): Observable<MeuImovel[]> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<MeuImovel[]>(url, meuImovel);
  }

  // DELETE - REMOVER IMÓVEL
  deleteMeuImovel(id: any): Observable<MeuImovel[]> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<MeuImovel[]>(url);
  }
}
