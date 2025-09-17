import { Component, OnInit } from '@angular/core';
import { InteressadosService } from 'src/app/services/interessados.service';
import { MeuImovel } from 'src/app/models/meu-imovel.model';
import { Interessado } from 'src/app/models/interessado.model';

@Component({
  selector: 'app-imoveis-interessados',
  templateUrl: './imoveis-interessados.component.html',
  styleUrls: ['./imoveis-interessados.component.scss'],
})
export class ImoveisInteressadosComponent implements OnInit {
  imoveisInteressados: MeuImovel[] = [];

  constructor(private interessadosService: InteressadosService) {}

  ngOnInit() {
    this.interessadosService
      .getInteressados()
      .subscribe((interessados: Interessado[]) => {
        // Transformar cada interessado em MeuImovel usando os dados que você tem
        this.imoveisInteressados = interessados.map(
          (i) =>
            new MeuImovel(
              i.imovelId, // id do imóvel
              i.nome, // título do imóvel (usando nome do interessado)
              '', // cidade (não temos, pode ajustar depois)
              undefined, // valor (não temos, pode ajustar)
              '', // tipo (não temos)
              i.mensagem, // descrição
              undefined // foto (pode adicionar se tiver)
            )
        );
      });
  }
}
