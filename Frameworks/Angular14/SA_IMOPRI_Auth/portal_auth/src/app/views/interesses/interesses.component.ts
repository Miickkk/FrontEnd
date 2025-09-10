import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Imovel {
  nome: string;
  descricao: string;
}

@Component({
  selector: 'app-interesses',
  standalone: true,
  templateUrl: './interesses.component.html',
  imports: [CommonModule],
  styleUrls: ['./interesses.component.scss']
})
export class InteressesComponent {
  imoveisInteressados: Imovel[] = [
    {
      nome: 'Casa Térrea com Quintal Amplo',
      descricao: 'Residência arejada, 3 quartos, garagem para 2 carros e área verde.'
    },
    {
      nome: 'Cobertura de Luxo Frente Mar',
      descricao: 'Cobertura com piscina privativa, 4 suítes e acabamento premium.'
    },
    {
      nome: 'Kitnet Compacta e Funcional',
      descricao: 'Espaço prático e econômico, ideal para estudantes e solteiros.'
    }
  ];
}
