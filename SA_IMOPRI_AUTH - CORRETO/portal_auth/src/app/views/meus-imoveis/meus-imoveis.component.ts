import { Component, OnInit } from '@angular/core';
import { MeuImovel } from 'src/app/models/meu-imovel.model';
import { MeusImoveisService } from 'src/app/services/meus-imoveis.service';

@Component({
  selector: 'app-meus-imoveis',
  templateUrl: './meus-imoveis.component.html',
  styleUrls: ['./meus-imoveis.component.scss']
})
export class MeusImoveisComponent implements OnInit {
  public meusImoveis: MeuImovel[] = []; // vetor para armazenar os imóveis do BD

  constructor(private _meusImoveisService: MeusImoveisService) {}

  ngOnInit(): void {
    this.listarImoveis();
  }

  listarImoveis() {
    this._meusImoveisService.getMeusImoveis().subscribe(  // <--- aqui estava o erro
      (res) => {
        this.meusImoveis = res.map((imovel) => MeuImovel.fromMap(imovel));
      },
      (error) => {
        console.error('Erro ao buscar imóveis:', error);
      }
    );
  }
}
