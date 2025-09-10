import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Interesses } from '../models/interesses.model';

@Injectable({
  providedIn: 'root'
})
export class InteressadosService {
  private apiUrl = 'http://localhost:3004/interessados';

  constructor(private http: HttpClient) {}

  getInteresses(): Observable<Interesses[]> {
    return this.http.get<Interesses[]>(this.apiUrl);
  }

  createInteresse(interessado: Interesses): Observable<Interesses> {
    return this.http.post<Interesses>(this.apiUrl, interessado);
  }

  updateInteresse(interessado: Interesses): Observable<Interesses> {
    return this.http.put<Interesses>(`${this.apiUrl}/${interessado.id}`, interessado);
  }

  deleteInteresse(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}