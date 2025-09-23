// home.component.ts
import { Component, OnInit } from '@angular/core';
import { InteressadosService } from 'src/app/services/interessados.service';
import { NotificacaoService } from 'src/app/services/notificacao.service';
import { HttpClient } from '@angular/common/http';
import { Interessado } from 'src/app/models/interessado.model';

interface Imovel {
  id: number | string;
  titulo: string;
  descricao: string;
  tipo?: string;
  cidade?: string;
  preco?: number;
  favorito?: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  imoveis: Imovel[] = [];
  clienteId = 2; // pegar do login real
  private apiUrl = 'http://localhost:3004';

  constructor(
    private http: HttpClient,
    private interessadosService: InteressadosService,
    private notificacaoService: NotificacaoService
  ) {}

  ngOnInit(): void {
    this.carregarImoveis();
  }

  carregarImoveis() {
    this.http.get<Imovel[]>(`${this.apiUrl}/imoveis`).subscribe({
      next: imoveis => {
        this.imoveis = imoveis.map(i => ({ ...i, favorito: false }));
        // Marcar os favoritos do cliente
        this.interessadosService.getFavoritosByCliente(this.clienteId).subscribe({
          next: interesses => {
            this.imoveis.forEach(imovel => {
              if (interesses.find(f => f.imovelId === imovel.id)) {
                imovel.favorito = true;
              }
            });
          }
        });
      },
      error: () => this.notificacaoService.mostrar('Erro ao carregar imóveis.')
    });
  }

favoritar(imovel: Imovel) {
  const interesse = new Interessado();
  interesse.clienteId = this.clienteId;
  interesse.imovelId = Number(imovel.id); // 🔹 converte para number

  this.interessadosService.createInteresse(interesse).subscribe({
    next: () => {
      imovel.favorito = true;
      this.notificacaoService.mostrar('Imóvel favoritado com sucesso!');
    },
    error: () => this.notificacaoService.mostrar('Erro ao favoritar o imóvel.')
  });
}
}
