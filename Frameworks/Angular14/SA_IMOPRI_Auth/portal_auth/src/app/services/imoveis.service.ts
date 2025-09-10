import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Imovel } from '../models/imoveis.model';

@Injectable({
  providedIn: 'root'
})
export class ImovelService {
  private apiUrl = "http://localhost:3004/imoveis"; // endereço da Api

  constructor(private http: HttpClient) {}

  // get - obter a lista de imóveis
  getImoveis(): Observable<Imovel[]> {
    return this.http.get<Imovel[]>(this.apiUrl);
  }

  // post
  postImovel(imovel: Imovel): Observable<Imovel[]> {
    return this.http.post<Imovel[]>(this.apiUrl, imovel);
  }

  // put
  putImovel(id: any, imovel: Imovel): Observable<Imovel[]> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Imovel[]>(url, imovel);
  }

  // delete
  deleteImovel(id: any): Observable<Imovel[]> {
    const url = this.apiUrl + "/" + id;
    return this.http.delete<Imovel[]>(url);
  }
}
