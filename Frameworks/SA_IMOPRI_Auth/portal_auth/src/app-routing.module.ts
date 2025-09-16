import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './app/views/publico/home/home.component';
import { LoginComponent } from './app/auth/login/login.component';
import { RegistroComponent } from './app/auth/registro/registro.component';
import { InternaComponent } from './app/views/clientes/interna/interna.component';
import { InternaCorretorComponent } from './app/views/corretor/interna-corretor/interna-corretor.component';
import { ImovelComponent } from './app/views/clientes/imoveis/imoveis.component';
import { InteressesComponent } from './app/views/clientes/meus-interesses/meus-interesses.component';
import { AuthGuard } from './app/core/guards/auth.guard';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },

  // Usuários comuns
  { path: 'imoveis', component: ImovelComponent, canActivate: [AuthGuard] },
  { path: 'interesses', component: InteressesComponent, canActivate: [AuthGuard] },
  { path: 'interna', component: InternaComponent, canActivate: [AuthGuard] },

  // Painel admin
  { path: 'interna-corretor', component: InternaCorretorComponent, canActivate: [AuthGuard] },

  // Rota coringa
  { path: '**', redirectTo: 'home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
