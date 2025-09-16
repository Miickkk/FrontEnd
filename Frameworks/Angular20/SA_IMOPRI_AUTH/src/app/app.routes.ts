import { Routes } from '@angular/router';
import { Home } from './views/publico/home/home';
import { BuscaImoveis } from './views/publico/busca-imoveis/busca-imoveis';
import { Login } from './auth/login/login';
import { Registro } from './auth/registro/registro';
import { MeusInteresses } from './views/cliente/meus-interesses/meus-interesses';
import { DashboardImoveis } from './views/corretor/dashboard-imoveis/dashboard-imoveis';
import { authGuard } from './core/guards/auth-guard';
import { corretorGuard } from './core/guards/corretor-guard';
import { CardImovel } from './templates/components/card-imovel/card-imovel';

export const routes: Routes = [
    {path: '', component: Home},
    {path: 'busca', component: BuscaImoveis},
    {path: 'login', component: Login},
    {path: 'registro', component: Registro},
    {path: 'meus-interesses', component: MeusInteresses},
    {path: 'dashboard', component: DashboardImoveis},
    {path: 'imovel/:id', component: CardImovel}
];
