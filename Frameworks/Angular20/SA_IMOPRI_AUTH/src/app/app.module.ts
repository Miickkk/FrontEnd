import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    AppComponent // Standalone components vão aqui, nunca em declarations
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
