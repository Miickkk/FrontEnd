import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Componentes não-standalone
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { InternaComponent } from './views/interna/interna.component';
import { RegistroComponent } from './views/registro/registro.component';
import { ImoveisInteressadosComponent } from './views/imoveis-interessados/imoveis-interessados.component';
import { PerfilComponent } from './views/perfil/perfil.component';

// Componentes standalone
import { MeusImoveisComponent } from './views/meus-imoveis/meus-imoveis.component';
import { CadastrarComponent } from './views/cadastrar/cadastrar.component';
import { HeaderComponent } from './templates/header/header.component'; // standalone
import { HeaderCorretorComponent } from './templates/header-corretor/header-corretor.component'; // standalone
import { FooterComponent } from './templates/footer/footer.component'; // standalone
import { HeaderPublicoComponent } from './templates/header-publico/header-publico.component'; // não-standalone

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    InternaComponent,
    RegistroComponent,
    ImoveisInteressadosComponent,
    PerfilComponent,
    HeaderPublicoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,

    // Standalone
    MeusImoveisComponent,
    CadastrarComponent,
    HeaderComponent,
    HeaderCorretorComponent,
    FooterComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
