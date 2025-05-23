import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curriculo } from '../models/curriculo.model';

@Injectable({
  providedIn: 'root'
})
export class CurriculoService {

    private apiUrl = "http://localhost:3000/curriculos"; 

  constructor(private http: HttpClient) { }


  getCurriculos(): Observable<Curriculo[]> { 
    return this.http.get<Curriculo[]>(this.apiUrl);
  }


  cadastrarCurriculo(curriculo: Curriculo): Observable<Curriculo[]>{
    return this.http.post<Curriculo[]>(this.apiUrl, curriculo);
  }


  atualizarCurriculo(id: any, curriculo: Curriculo): Observable<Curriculo[]>{
    const urlAtualizar = `${this.apiUrl}/${id}`;
    return this.http.put<Curriculo[]>(urlAtualizar, curriculo);
  }


  removerCurriculo(id:any): Observable<Curriculo[]>{
    const urlDeletar = `${this.apiUrl}/${id}`;
    return this.http.delete<Curriculo[]>(urlDeletar);
  }

}
