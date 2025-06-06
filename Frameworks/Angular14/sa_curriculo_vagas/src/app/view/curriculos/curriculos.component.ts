//IMPOTAÇÕES NECESSÁRIAS
import { Component, OnInit } from '@angular/core';
import { Curriculo } from 'src/app/models/curriculo.model';
import { CurriculoService } from '../../service/curriculo.service';


@Component({
  selector: 'app-curriculos',
  templateUrl: './curriculos.component.html',
  styleUrls: ['./curriculos.component.scss'],
})
export class CurriculosComponent implements OnInit {
  public curriculos: Curriculo[] = [];

  constructor(private _curriculosSerice: CurriculoService) {}

  ngOnInit(): void {
    this.listarCurriculos();
  }


  //METODO PARA LISTAR OS CURRÍCULOS
  listarCurriculos() {
    this._curriculosSerice
      .getCurriculos()
      .subscribe((retornaCurriculo: any[]) => {
        this.curriculos = retornaCurriculo.map((item: any) =>
          Curriculo.fromMap(item)
        );
      });
  }
}
