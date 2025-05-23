import { Component, OnInit } from '@angular/core';
import { Curriculo } from 'src/app/models/curriculo.model';
import { CurriculoService } from 'src/app/services/curriculo.service';

@Component({
  selector: 'app-curriculos',
  templateUrl: './curriculos.component.html',
  styleUrls: ['./curriculos.component.scss']
})
export class CurriculosComponent implements OnInit{
  public curriculos: Curriculo[] =[]

  constructor(private _curriculosSerice : CurriculoService){}

  ngOnInit(): void {
    this.listarCurriculos();
  }

  listarCurriculos(){
    this._curriculosSerice.getCurriculos().subscribe(
      (retornaCurriculo) => {
        this.curriculos = retornaCurriculo.map(
          (item) => Curriculo.fromMap(item)
        );
      }
    );

  }
}
