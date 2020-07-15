import { Component, OnInit, ElementRef } from '@angular/core';
import { AgmCoreModule, InfoWindowManager } from '@agm/core';
import { MarkerManager } from '@agm/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Marcador } from '../../classes/marcador.class';
import { EditorMapaComponent } from "./editor-mapa.component";

@Component({
  selector: 'app-mapa2',
  templateUrl: './mapa2.component.html',
  styleUrls: ['./mapa2.component.css'],
  providers: [MarkerManager, InfoWindowManager]
})
export class Mapa2Component implements OnInit {

  titulo = 'Mapa usando el módulo AGM';

  marcadores: Marcador[] = [];
  
  // ESTABLECE LAS COOREDENADAS DL MAPA
  //lat: number = 40.730610;
  //lng: number = 73.935242;

  // COORDENADAS DE MI UBUCACIÓN
  lat: number = 41.2245316;
  lng: number = 1.7161504;
  
  constructor(public markerManager: MarkerManager, public infoWindowManager: InfoWindowManager, public snackBar: MatSnackBar, public matDialog: MatDialog, _el: ElementRef) {

    const nuevoMarcador = new Marcador(41.2245316, 1.7161504);

    this.marcadores.push(nuevoMarcador);

    if(localStorage.getItem('marcadores')){
      this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
    }
    
  }
  
  ngOnInit(): void {
  }

  agregarMarcador(evento){
    const coords: { lat: number, lng: number} = evento.coords;

    const nuevoMarcador = new Marcador(coords.lat, coords.lng);

    this.marcadores.push(nuevoMarcador);

    this.guardarStorage();

    this.snackBar.open('Marcador  agregado', 'Cerrar', { duration: 4000});
  }

  guardarStorage(){
    localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
  }

  eliminarMarcador(i: number){
    this.marcadores.splice(i, 1);
    this.guardarStorage();
    this.snackBar.open('Marcador eliminado', 'Cerrar', { duration: 4000 });
  }

  editarMarcador(marcador: Marcador){
    const dialogRef = this.matDialog.open(EditorMapaComponent, {
      width: '250px', data: { titulo: marcador.titulo, descripcion: marcador.descripcion}
    });

    dialogRef.afterClosed().subscribe(result => {
      if(!result){
        return;
      }

      marcador.titulo = result.titulo;
      marcador.descripcion = result.descripcion;

      this.guardarStorage();
      this.snackBar.open('Marcador actualizado', 'Cerrar', { duration: 4000 });
    });
  }

}
