import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { Mapa1Component } from "./components/mapa1/mapa1.component";
import { Mapa2Component } from "./components/mapa2/mapa2.component";
import { Mapa3Component } from "./components/mapa3/mapa3.component";

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { titulo: 'Inicio' }},
  { path: 'mapa1', component: Mapa1Component, data: { titulo: 'Mapa usando @Typimg Google' } },
  { path: 'mapa2', component: Mapa2Component, data: { titulo: 'Mapa usando el módulo AGM' } },
  { path: 'mapa3', component: Mapa3Component, data: { titulo: 'Mapa usando el módulo Mapbox' } },
  { path: '**', pathMatch: 'full', redirectTo: '/home' },
  { path: '', pathMatch: 'full', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }