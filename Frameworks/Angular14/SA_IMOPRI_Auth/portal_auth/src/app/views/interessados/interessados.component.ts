import { Component, OnInit } from '@angular/core';
import { InteressadosService } from './interessados.service';
import { Interesses } from '../models/interesses.model';

@Component({
  selector: 'app-interessados',
  templateUrl: './interessados.component.html',
  styleUrls: ['./interessados.component.css']
})
export class InteressadosComponent implements OnInit {
  interessados: Interesses[] = [];
  erro: string = '';
  sucesso: string = '';

  constructor(private interessadosService: InteressadosService) { }

  ngOnInit(): void {
    this.carregarInteressados();
  }

  carregarInteressados(): void {
    this.interessadosService.getInteresses().subscribe({
      next: (dados: Interesses[]) => this.interessados = dados,
      error: () => this.erro = 'Erro ao carregar interessados.'
    });
  }

  removerInteressado(interessado: Interesses): void {
    if (!interessado.id) return;

    this.interessadosService.deleteInteresse(interessado.id).subscribe({
      next: () => {
        this.interessados = this.interessados.filter(i => i.id !== interessado.id);
        this.sucesso = 'Interessado removido com sucesso!';
      },
      error: () => this.erro = 'Erro ao remover interessado.'
    });
  }
}
