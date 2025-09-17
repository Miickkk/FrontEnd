import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { InternaComponent } from './views/interna/interna.component';
import { RegistroComponent } from './views/registro/registro.component';
import { MeusImoveisComponent } from './views/meus-imoveis/meus-imoveis.component';
import { InteressadosComponent } from './views/interessados/interessados.component';
import { HeaderComponent } from './templates/header/header.component';
import { FooterComponent } from './templates/footer/footer.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { InternaCorretorComponent } from './views/interna-corretor/interna-corretor.component';
import { ImoveisInteressadosComponent } from './views/imoveis-interessados/imoveis-interessados.component';
import { HeaderPublicoComponent } from './templates/header-publico/header-publico.component';
import { PerfilComponent } from './views/perfil/perfil.component';
import { HeaderCorretorComponent } from './templates/header-corretor/header-corretor.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    InternaComponent,
    RegistroComponent,
    MeusImoveisComponent,
    InteressadosComponent,
    HeaderComponent,
    FooterComponent,
    InternaCorretorComponent,
    ImoveisInteressadosComponent,
    HeaderPublicoComponent,
    PerfilComponent,
    HeaderCorretorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
