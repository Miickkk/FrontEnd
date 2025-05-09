import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PedidoFormComponent } from './components/pedido-form/pedido-form.component';
import { ClienteFormComponent } from './components/cliente-form/cliente-form.component';
import { PedidoListComponent } from './components/pedido-list/pedido-list.component';
import { FormsModule } from '@angular/forms';
import { ProdutoFormComponent } from './components/produto-form/produto-form.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutoFormComponent,
    PedidoFormComponent,
    ClienteFormComponent,
    PedidoListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

    FormsModule //faz funcionar o ngModel
