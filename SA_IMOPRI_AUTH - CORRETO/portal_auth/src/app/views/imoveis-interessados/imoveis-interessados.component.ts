// imoveis-interessados.component.ts
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InteressadosService } from 'src/app/services/interessados.service';
import { NotificacaoService } from 'src/app/services/notificacao.service';
import { forkJoin, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-imoveis-interessados',
  templateUrl: './imoveis-interessados.component.html',
  styleUrls: ['./imoveis-interessados.component.scss']
})
export class ImoveisInteressadosComponent implements OnInit {
  public imoveisFavoritos: any[] = [];
  private clienteId = 2;  // pegar do login
  private apiUrl = 'http://localhost:3004';

  constructor(
    private interessadosService: InteressadosService,
    private http: HttpClient,
    private notificacaoService: NotificacaoService
  ) {}

  ngOnInit(): void {
    this.carregarFavoritosDoCliente();
  }

  carregarFavoritosDoCliente() {
    this.interessadosService.getFavoritosByCliente(this.clienteId).subscribe({
      next: interesses => {
        const requests = interesses.map(i =>
          this.http.get<any>(`${this.apiUrl}/imoveis/${i.imovelId}`).pipe(
            catchError(() => of(null))
          )
        );
        forkJoin(requests).subscribe(imoveis =>
          this.imoveisFavoritos = imoveis.filter(i => i)
        );
      },
      error: () => this.notificacaoService.mostrar('❌ Erro ao buscar favoritos.')
    });
  }
}
