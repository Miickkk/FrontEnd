import { Component, OnInit } from '@angular/core';
import { Vaga } from 'src/app/models/vaga.model';
import { VagaService } from 'src/app/service/vaga.service';

@Component({
  selector: 'app-painel-vagas',
  templateUrl: './painel-vagas.component.html',
  styleUrls: ['./painel-vagas.component.scss'],
})
export class PainelVagasComponent implements OnInit {
  public vaga: Vaga = new Vaga(0, '', '', '', 0);
  //rastrear os dados da API
  public vagas: Vaga[] = [];
  //ARAMAZENAR AS VAGAS DA api

  constructor(private _vagasService: VagaService) {}
  // estabelece o servico de busca no servidor

  ngOnInit(): void {
    this.listarVagas();
  }
  //listar todas as Vagas //GET
  listarVagas() {
    // Lista as vagas do servidor usando o serviço 'VagaService'
    this._vagasService.getVagas().subscribe((retornaVaga) => {
      this.vagas = retornaVaga.map((item) => {
        // Mapeia os dados retornados para objetos 'Vaga'
        return new Vaga(
          item.id,
          item.nome,
          item.foto,
          item.descricao,
          item.salario
        );
      });
    });
  }

  //lista apenas uma unica Vaga //put
  listarVagaUnica(vaga: Vaga){
    this.vaga = vaga;
  }

  //cadastrar //post
  cadastrar(){
    this._vagasService.cadastrarVaga(this.vaga).subscribe(
      ()=>{
        this.vaga = new Vaga(0,"","","",0);//lismpa o formulário
        this.listarVagas();// atualiza a lista
      },
      (err) => {
        console.error("Erro ao Cadastrar",err); //Mostra o erro do servidor Backend
      }
    );
  }

  atualizar(id: number){
    this._vagasService.atualizarVaga(id,this.vaga).subscribe(
      ()=>{
        //Após atualizar
        this.vaga = new Vaga(0, "", "", "", 0);
        this.listarVagas();
      },
      (err) => {
        console.error("Erro ao Atualizar",err);
      }
    );
  }

  excluir(id:number){
    this._vagasService.removerVaga(id).subscribe(
      ()=> {
        this.vaga = new Vaga(0, "", "", "", 0);
        this.listarVagas();
      },
      (err) => {
        console.error("Erro ao Excluir",err);
      }
    );
  }

}
