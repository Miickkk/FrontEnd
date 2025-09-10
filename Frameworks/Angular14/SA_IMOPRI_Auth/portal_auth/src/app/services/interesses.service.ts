import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Interesses } from '../models/interesses.model';

@Injectable({
  providedIn: 'root'
})
export class InteresseService {
  private apiUrl = "http://localhost:3004/interesses"; // endereço da Api

  constructor(private http: HttpClient) {}

  // get - obter a lista de interesses
  getInteresses(): Observable<Interesses[]> {
    return this.http.get<Interesses[]>(this.apiUrl);
  }

  // post
  postInteresse(interesse: Interesses): Observable<Interesses[]> {
    return this.http.post<Interesses[]>(this.apiUrl, interesse);
  }

  // put
  putInteresse(id: any, interesse: Interesses): Observable<Interesses[]> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.put<Interesses[]>(url, interesse);
  }

  // delete
  deleteInteresse(id: any): Observable<Interesses[]> {
    const url = this.apiUrl + "/" + id;
    return this.http.delete<Interesses[]>(url);
  }
}
