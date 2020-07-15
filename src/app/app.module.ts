import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from "./material.module";
import { AppComponent } from './app.component';
import { HomeComponent } from "./components/home/home.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Mapa1Component } from './components/mapa1/mapa1.component';

import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
import { Mapa2Component } from './components/mapa2/mapa2.component';
import { EditorMapaComponent } from './components/mapa2/editor-mapa.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { Mapa3Component } from './components/mapa3/mapa3.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  entryComponents: [
    EditorMapaComponent
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    Mapa1Component,
    Mapa2Component,
    NavbarComponent,
    Mapa3Component,
    EditorMapaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD4NO8JMVnprRzkC0A3-XsivMlf7alGBsA'
    })
  ],
  providers: [Title, GoogleMapsAPIWrapper],
  bootstrap: [AppComponent]
})
export class AppModule { }