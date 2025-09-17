import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MeuImovel } from '../models/meu-imovel.model';

@Injectable({
  providedIn: 'root'
})
export class MeusImoveisService {
  private apiUrl = "http://localhost:3004/meus-imoveis"; // endereço da API

  constructor(private http: HttpClient) {}

  // GET - obter a lista de imóveis
  getMeusImoveis(): Observable<MeuImovel[]> {
    return this.http.get<MeuImovel[]>(this.apiUrl);
  }

  // POST - adicionar um novo imóvel
  postMeuImovel(meuImovel: MeuImovel): Observable<MeuImovel[]> {
    return this.http.post<MeuImovel[]>(this.apiUrl, meuImovel);
  }

  // PUT - atualizar imóvel existente
  putMeuImovel(id: any, meuImovel: MeuImovel): Observable<MeuImovel[]> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<MeuImovel[]>(url, meuImovel);
  }

  // DELETE - remover imóvel
  deleteMeuImovel(id: any): Observable<MeuImovel[]> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete<MeuImovel[]>(url);
  }
}
