import { Component, OnInit } from '@angular/core';
import { Interessado } from 'src/app/models/interessado.model';
import { InteressadosService } from 'src/app/services/interessados.service';

@Component({
  selector: 'app-interessados',
  templateUrl: './interessados.component.html',
  styleUrls: ['./interessados.component.scss']
})

// Controller -> View -> Model
export class InteressadosComponent implements OnInit {
  public interessados: Interessado[] = []; // vetor para armazenar os interessados do BD

  constructor(private _interessadosService: InteressadosService) {}
  // Injeta o serviço de interessados dentro do componente

  ngOnInit(): void {
    this.listarInteressados();
  }

  // Função para listar os interessados
  listarInteressados() {
    this._interessadosService.getInteressados().subscribe(
      (res) => {
        this.interessados = res.map(
          (interessado) => {
            return Interessado.fromMap(interessado);
          }
        );
      }
    );
  }
}
