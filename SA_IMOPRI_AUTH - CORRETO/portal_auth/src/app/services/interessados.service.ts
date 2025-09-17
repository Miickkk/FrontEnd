import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Interessado } from '../models/interessado.model';

@Injectable({
  providedIn: 'root'
})
export class InteressadosService {
  private apiUrl = 'http://localhost:3004/interessados';

  constructor(private http: HttpClient) {}

  // GET - obter todos os interessados
  getInteressados(): Observable<Interessado[]> {
    return this.http.get<Interessado[]>(this.apiUrl);
  }

  // POST - criar novo interessado
  createInteressado(interessado: Interessado): Observable<Interessado> {
    return this.http.post<Interessado>(this.apiUrl, interessado);
  }

  // PUT - atualizar interessado existente
  updateInteressado(interessado: Interessado): Observable<Interessado> {
    return this.http.put<Interessado>(`${this.apiUrl}/${interessado.id}`, interessado);
  }

  // DELETE - remover interessado
  deleteInteressado(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
