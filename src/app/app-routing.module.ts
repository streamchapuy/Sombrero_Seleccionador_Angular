import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './Pages/inicio/inicio.component';
import { SorteoComponent } from './Pages/sorteo/sorteo.component';
import { PuntuacionesComponent } from './Pages/Puntuaciones/Puntuaciones.component';

const routes: Routes = [ 
  {path:'', component: InicioComponent},
  {path:'sorteo', component: SorteoComponent},
  {path: 'puntuaciones', component: PuntuacionesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
