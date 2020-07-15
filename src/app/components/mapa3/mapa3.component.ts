import { environment } from "./../../../environments/environment";
import { Component, OnInit } from '@angular/core';

import * as Mapboxgl from 'mapbox-gl';

@Component({
  selector: 'app-mapa3',
  templateUrl: './mapa3.component.html',
  styleUrls: ['./mapa3.component.css']
})
export class Mapa3Component implements OnInit {
  
  titulo = 'Mapa usando el módulo Mapbox';
 
  mapa: Mapboxgl.Map;

  constructor() { }

  ngOnInit(): void {
    (Mapboxgl as any).accessToken = environment.mapboxKey;

    this.mapa = new Mapboxgl.Map({
      container: 'mapbox', // container id
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [1.7161504, 41.2245316], // starting position = LNG, LAT 
      zoom: 15 // starting zoom
    });

    this.crearMarcador(1.7161504, 41.2245316);
  }

  crearMarcador(lng: number, lat: number){
    const coordinates = document.getElementById('coordinates');

    const marker = new Mapboxgl.Marker({
      draggable: true
      }).setLngLat([lng, lat]).addTo(this.mapa);
       
      function onDragEnd() {
        let lngLat = marker.getLngLat();
        coordinates.style.display = 'inline-block';
        coordinates.innerHTML = 'Longitud: ' + lngLat.lng + '  / Latitud: ' + lngLat.lat;

      }
       
      marker.on('dragend', onDragEnd);
  }

}
