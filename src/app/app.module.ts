import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './Pages/inicio/inicio.component';
import { SorteoComponent } from './Pages/sorteo/sorteo.component';
import { RuletaComponent } from './Components/ruleta/ruleta.component';
import { SombreroComponent } from './Components/sombrero/sombrero.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { PuntuacionesComponent } from './Pages/Puntuaciones/Puntuaciones.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SorteoComponent,
    RuletaComponent,
    SombreroComponent,
    NavBarComponent,
    PuntuacionesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
