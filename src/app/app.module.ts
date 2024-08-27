import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './Pages/inicio/inicio.component';
import { SorteoComponent } from './Pages/sorteo/sorteo.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SorteoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
