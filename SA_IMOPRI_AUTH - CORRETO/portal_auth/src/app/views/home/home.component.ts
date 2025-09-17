import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { InteressadosService } from 'src/app/services/interessados.service';
import { Interessado } from 'src/app/models/interessado.model';

interface Imovel {
  id: number;
  titulo: string;
  descricao: string;
  favorito: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  imoveis: Imovel[] = [
    { id: 1, titulo: 'Apartamento Moderno no Centro', descricao: '2 quartos, sala integrada e varanda panorâmica.', favorito: false },
    { id: 2, titulo: 'Casa Térrea com Quintal Amplo', descricao: 'Residência arejada com 3 quartos e área verde.', favorito: false },
    { id: 3, titulo: 'Cobertura de Luxo Frente Mar', descricao: 'Piscina privativa, 4 suítes e acabamento premium.', favorito: false },
    { id: 4, titulo: 'Kitnet Compacta e Funcional', descricao: 'Prático, econômico, ideal para solteiros.', favorito: false },
    { id: 5, titulo: 'Chácara com Área de Lazer', descricao: 'Piscina, campo de futebol e pomar.', favorito: false },
    { id: 6, titulo: 'Sobrado em Condomínio Fechado', descricao: 'Segurança 24h, 3 dormitórios e área gourmet.', favorito: false },
  ];

  constructor(
    private router: Router,
    private interessadosService: InteressadosService
  ) {}

  adicionarInteressado(imovel: Imovel) {
    imovel.favorito = !imovel.favorito;

    if (imovel.favorito) {
      // Criação correta de um Interessado usando a classe
      const interessado = new Interessado();
      interessado.id = imovel.id;
      interessado.nome = imovel.titulo;
      interessado.email = '';
      interessado.telefone = '';
      interessado.mensagem = imovel.descricao;
      interessado.imovelId = imovel.id;

      this.interessadosService.createInteressado(interessado).subscribe(() => {
        this.router.navigate(['/imoveis-interessados']);
      });
    } else {
      this.interessadosService.deleteInteressado(imovel.id).subscribe();
    }
  }
}
