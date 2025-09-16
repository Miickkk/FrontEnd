import { Component, OnInit } from '@angular/core';
import { Imovel } from '../../../core/models/imovel.model';
import { Imoveis } from '../../../core/services/imoveis';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-busca-imoveis',
  imports: [CommonModule, RouterModule],
  templateUrl: './busca-imoveis.html',
  styleUrls: ['./busca-imoveis.scss']
})
export class BuscaImoveis implements OnInit {
  public imoveis: Imovel[] = []; 

  constructor(private imoveisService: Imoveis){} 
  
  ngOnInit(): void {
    this.listarImoveis();
  }

  listarImoveis(): void{
    this.imoveisService.getImoveis().subscribe({
      next: (dados) => (this.imoveis = dados),
      error: (err) => console.error('Erro ao buscar imóveis:', err),
    });
  }
}
