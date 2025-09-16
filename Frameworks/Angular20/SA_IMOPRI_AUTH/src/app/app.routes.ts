import { RouterModule, Routes } from '@angular/router';
import { Home } from './views/publico/home/home';
import { Login } from './auth/login/login';
import { Registro } from './auth/registro/registro';
import { authGuard } from './core/guards/auth-guard';
import { corretorGuard } from './core/guards/corretor-guard';
import { Imoveis } from './views/cliente/imoveis/imoveis';
import { NgModule } from '@angular/core';


export const routes: Routes = [
    { path: '', component: Home },

    { path: 'login', component: Login },
    { path: 'registro', component: Registro },

    // Usuários comuns
    { path: 'imoveis', component: Imoveis, canActivate: [authGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
