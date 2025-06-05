import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Vaga } from '../models/vaga.model';

@Injectable({
  providedIn: 'root',
})
export class VagaService {
  //atributo -> localhost
  private apiUrl = 'http://localhost:3001/vagas'; //Caminho para o Arquivo Json

  constructor(private http: HttpClient) {}

  //Comunição CRUD da API ( get / post/ put / delete)

  //obter a lista de vagas (get)
  getVagas(): Observable<Vaga[]> {
    //conexões da informações do banco com o front
    return this.http.get<Vaga[]>(this.apiUrl); // conexão com a API httpClient
  }

  //Cadastrar(post)
  cadastrarVaga(vaga: Vaga): Observable<Vaga[]> {
    return this.http.post<Vaga[]>(this.apiUrl, vaga);
  }

  //Atualizar(put)
  atualizarVaga(id: any, vaga: Vaga): Observable<Vaga[]> {
    const urlAtualizar = `${this.apiUrl}/${id}`;
    return this.http.put<Vaga[]>(urlAtualizar, vaga);
  }

  //Deletar(delete)
  removerVaga(id: any): Observable<Vaga[]> {
    const urlDeletar = `${this.apiUrl}/${id}`;
    return this.http.delete<Vaga[]>(urlDeletar);
  }
}
