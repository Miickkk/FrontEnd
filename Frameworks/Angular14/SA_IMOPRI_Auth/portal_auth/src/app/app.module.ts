import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

// Componentes Standalone
import { AppComponent } from './app.component';
import { HomeComponent } from './views/home/home.component';
import { LoginComponent } from './views/login/login.component';
import { InternaComponent } from './views/interna/interna.component';
import { RegistroComponent } from './views/registro/registro.component';
import { ImovelComponent } from './views/imoveis/imoveis.component';
import { InteressesComponent } from './views/interesses/interesses.component';
import { HeaderComponent } from './templates/header/header.component';
import { FooterComponent } from './templates/footer/footer.component';
import { HeaderCorretorComponent } from './templates/header-corretor/header-corretor.component';
import { InternaCorretorComponent } from './views/interna-corretor/interna-corretor.component';

@NgModule({
  imports: [
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
export class AppModule {}
