import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './Pages/inicio/inicio.component';
import { SorteoComponent } from './Pages/sorteo/sorteo.component';
import { RuletaComponent } from './Components/ruleta/ruleta.component';
import { SombreroComponent } from './Components/sombrero/sombrero.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SorteoComponent,
    RuletaComponent,
    SombreroComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
