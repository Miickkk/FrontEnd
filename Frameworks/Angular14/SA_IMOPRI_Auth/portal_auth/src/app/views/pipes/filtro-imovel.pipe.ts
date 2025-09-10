import { Pipe, PipeTransform } from '@angular/core';

export interface Imovel {
  id: number;
  nome: string;
  cidade: string;
  valor: number;
  tipo: string;
  descricao: string;
  foto: string;
}

@Pipe({ name: 'filtroImovel', standalone: true })
export class FiltroImovelPipe implements PipeTransform {
  transform(imoveis: Imovel[], filtro: string) {
    if (!filtro) return imoveis;
    return imoveis.filter(i => i.nome.toLowerCase().includes(filtro.toLowerCase()));
  }
}
