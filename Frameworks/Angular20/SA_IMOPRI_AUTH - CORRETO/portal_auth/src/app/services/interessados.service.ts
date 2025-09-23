import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, of } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';
import { Interessado } from '../models/interessado.model';

// SERVIÇO DE INTERESSADOS
@Injectable({
  providedIn: 'root'
})
export class InteressadosService {
  private apiUrl = 'http://localhost:3004';

  constructor(private http: HttpClient) {}

  // LISTA OS FAVORITOS DE UM CLIENTE
  getFavoritosByCliente(clienteId: number): Observable<Interessado[]> {
    return this.http.get<Interessado[]>(`${this.apiUrl}/interesses?clienteId=${clienteId}`);
  }

  // LISTA OS INTERESSADOS NOS IMÓVEIS DE UM CORRETOR
getInteressadosByCorretor(corretorId: number): Observable<any[]> {
  return forkJoin([
    this.http.get<any[]>(`${this.apiUrl}/imoveis?corretorId=${corretorId}`),
    this.http.get<any[]>(`${this.apiUrl}/interesses`)
  ]).pipe(
    map(([imoveis, interesses]) => {

      // TRANSFORMA OS IDs DOS IMÓVEIS EM STRINGS PARA COMPARAÇÃO
      const imoveisIds = imoveis.map(i => String(i.id));
      return interesses
        .filter(i => imoveisIds.includes(String(i.imovelId)))
        .map(i => ({
          id: i.id,
          clienteId: i.clienteId,
          imovelId: i.imovelId
        }));
    }),
    catchError(() => of([]))
  );
}

// CRIAR INTERESSE
createInteresse(interesse: Interessado): Observable<Interessado> {
  return this.http.get<Interessado[]>(`${this.apiUrl}/interesses`).pipe(
    switchMap((interesses: any[]) => {

      // CALCULA O PRÓXIMO ID
      const maxId = interesses.length ? Math.max(...interesses.map(i => Number(i.id))) : 0;
      interesse.id = (maxId + 1).toString(); 

      // FAZ O POST
      return this.http.post<Interessado>(`${this.apiUrl}/interesses`, interesse);
    })
  );
}

  // DELETAR INTERESSE
deleteInteressado(id: number): Observable<void> {

  // JSON SERVER EXIGE QUE O ID SEJA EXATAMENTE DO MESMO TIPO DO DB.JSON
  return this.http.delete<void>(`${this.apiUrl}/interesses/${id}`);
}
}