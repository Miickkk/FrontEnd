import { Component, OnInit } from '@angular/core';
import { Curriculo } from 'src/app/models/curriculo.model';
import { CurriculoService } from 'src/app/service/curriculo.service';

@Component({
  selector: 'app-painel-curriculos',
  templateUrl: './painel-curriculos.component.html',
  styleUrls: ['./painel-curriculos.component.scss'],
})
export class PainelCurriculoComponent implements OnInit {
  public curriculo: Curriculo = new Curriculo(0, '', '', '', '', '', 0, '', '');

  public curriculos: Curriculo[] = [];

  constructor(private _curriculosService: CurriculoService) {}

  ngOnInit(): void {
    this.listarCurriculos();
  }

  listarCurriculos() {
    this._curriculosService.getCurriculos().subscribe((retornaCurriculo) => {
      this.curriculos = retornaCurriculo.map((item) => {
        return new Curriculo(
          item.id,
          item.nome,
          item.email,
          item.telefone,
          item.experiencia,
          item.formacao,
          item.idade,
          item.genero,
          item.endereco
        );
      });
    });
  }

  listarCurriculoUnico(curriculo: Curriculo) {
    this.curriculo = curriculo;
  }

  cadastrar() {
    this._curriculosService.cadastrarCurriculo(this.curriculo).subscribe(
      () => {
        this.curriculo = new Curriculo(0, '', '', '', '', '', 0, '', ''); //lismpa o formulário
        this.listarCurriculos(); // atualiza a lista
      },
      (err) => {
        console.error('Erro ao Cadastrar', err); //Mostra o erro do servidor Backend
      }
    );
  }

  atualizar(id: number) {
    this._curriculosService.atualizarCurriculo(id, this.curriculo).subscribe(
      () => {
        this.curriculo = new Curriculo(0, '', '', '', '', '', 0, '', '');
        this.listarCurriculos();
        alert('Currículo Atualizado com Sucesso!!!');
      },
      (err) => {
        console.error('Erro ao Atualizar', err);
      }
    );
  }

  excluir(id: number) {
    this._curriculosService.removerCurriculo(id).subscribe(
      () => {
        this.curriculo = new Curriculo(0, '', '', '', '', '', 0, '', '');
        this.listarCurriculos();
      },
      (err) => {
        console.error('Erro ao Excluir', err);
      }
    );
  }
}
