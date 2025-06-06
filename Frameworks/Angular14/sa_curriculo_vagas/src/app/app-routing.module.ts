import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


//IMPORTAÇÕES QUE SERAM USADOS NA ROTAS
import { InicioComponent } from './view/inicio/inicio.component';
import { CurriculosComponent } from './view/curriculos/curriculos.component';
import { VagasComponent } from './view/vagas/vagas.component';
import { PainelVagasComponent } from './view/painel-vagas/painel-vagas.component';
import { PainelCurriculoComponent } from './view/painel-curriculos/painel-curriculos.component';


//ROTAS DE APLICAÇÃO
const routes: Routes = [
  {path: "", component: InicioComponent},
  {path: "curriculos", component: CurriculosComponent},
  {path: "vagas", component: VagasComponent},
  {path: "painel-vagas", component: PainelVagasComponent},
  {path: "painel-curriculos", component: PainelCurriculoComponent},
];


//MÓDULO DE ROTEAMENTO
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
