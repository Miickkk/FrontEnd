import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Componentes Standalone
import { AppComponent } from './app.component';
import { HomeComponent } from './app/views/publico/home/home.component';
import { LoginComponent } from './app/auth/login/login.component';
import { InternaComponent } from './app/views/clientes/interna/interna.component';
import { RegistroComponent } from './app/auth/registro/registro.component';
import { ImovelComponent } from './app/views/clientes/imoveis/imoveis.component';
import { InteressesComponent } from './app/views/clientes/meus-interesses/meus-interesses.component';
import { HeaderComponent } from './app/templates/header/header.component';
import { FooterComponent } from './app/templates/footer/footer.component';
import { HeaderCorretorComponent } from './app/templates/header-corretor/header-corretor.component';
import { InternaCorretorComponent } from './app/views/corretor/interna-corretor/interna-corretor.component';

@NgModule({
  imports: [
    RouterModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    // Adicione todos os componentes standalone aqui
    AppComponent,
    HomeComponent,
    LoginComponent,
    InternaComponent,
    RegistroComponent,
    ImovelComponent,
    InteressesComponent,
    HeaderComponent,
    FooterComponent,
    HeaderCorretorComponent,
    InternaCorretorComponent
  ],
  providers: [],
  bootstrap: [AppComponent]  // continua o mesmo
})
export class AppModule { }
