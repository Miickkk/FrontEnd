import { Component, OnInit } from '@angular/core';
import { Imovel } from '../../models/imoveis.model';
import { ImovelService } from '../../services/imoveis.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-imoveis',
  standalone: true,
  templateUrl: './imoveis.component.html',
   imports: [CommonModule],
  styleUrls: ['./imoveis.component.scss']
})
export class ImovelComponent implements OnInit {
  public imoveis: Imovel[] = []; // vetor para armazenar os currículos do BD

  constructor(private _imovelService: ImovelService) {}

  ngOnInit(): void {
    this.listarImoveis();
  }

  listarImoveis() {
    this._imovelService.getImoveis().subscribe(
      (e: any[]) => {
        this.imoveis = e.map((imovel: any) => Imovel.fromMap(imovel));
      },
      (error: any) => {
        console.error('Erro ao buscar imóveis:', error);
      }
    );
  }
}
