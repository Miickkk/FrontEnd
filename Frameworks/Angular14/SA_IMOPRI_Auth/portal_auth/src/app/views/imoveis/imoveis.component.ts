import { Component, OnInit } from '@angular/core';
import { Imovel } from 'src/app/models/imoveis.model';
import { ImoveisService } from 'src/app/services/imoveis.service';

@Component({
  selector: 'app-imoveis',
  templateUrl: './imoveis.component.html',
  styleUrls: ['./imoveis.component.scss']
})
export class ImovelComponent implements OnInit {
  public imoveis: Imovel[] = []; // vetor para armazenar os currículos do BD

  constructor(private _imovelService: ImoveisService) {}

  ngOnInit(): void {
    this.listarImoveis();
  }

  listarImoveis() {
    this._imovelService.getImoveis().subscribe(
      (e) => {
        this.imoveis = e.map((imovel) => Imovel.fromMap(imovel));
      },
      (error) => {
        console.error('Erro ao buscar imóveis:', error);
      }
    );
  }
}
