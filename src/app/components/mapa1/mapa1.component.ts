import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-mapa1',
  templateUrl: './mapa1.component.html',
  styleUrls: ['./mapa1.component.css']
})
export class Mapa1Component implements OnInit, AfterViewInit {

  titulo = 'Mapa usando @Typimg Google';
  
  //ESTABLECE LAS COOREDENADAS DL MAPA
  //lat: number = 40.730610;
  //lng: number = 73.935242;

  // COORDENADAS DE MI UBUCACIÓN
  lat: number = 41.2245316;
  lng: number = 1.7161504;

  // ESTE BLOQUE ES USANDO LOS @TYPINGS GOOGLE PARA CREAR EL MAPA SIN EL USO DEL MODULO AGM
  @ViewChild('mapContainer', {static: false}) gmap: ElementRef;

  map: google.maps.Map;

  markers = [
    {
      position: new google.maps.LatLng(40.73061, 73.935242),
      map: this.map,
      title: "Marker 2"
    },
    {
      position: new google.maps.LatLng(32.06485, 34.763226),
      map: this.map,
      title: "Marker 3"
    }
  ];

  coordinates = new google.maps.LatLng(this.lat, this.lng);

  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 18,
  };

  marker = new google.maps.Marker({
    position: this.coordinates,
    map: this.map,
    title: "Marcador 1"
  });

  ngAfterViewInit() {
    this.mapInitializer();
  }
  
  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement, this.mapOptions);
    //Adding Click event to default marker
    this.marker.addListener("click", () => {
      const infoWindow = new google.maps.InfoWindow({
        content: this.marker.getTitle()
      });
      infoWindow.open(this.marker.getMap(), this.marker);
    });

    //Adding default marker to map
    this.marker.setMap(this.map);

    //Adding other markers
    this.loadAllMarkers();
  }

  loadAllMarkers(): void {
    this.markers.forEach(markerInfo => {
      //Creating a new marker object
      const marker = new google.maps.Marker({
        ...markerInfo
      });

      //creating a new info window with markers info
      const infoWindow = new google.maps.InfoWindow({
        content: marker.getTitle()
      });

      //Add click event to open info window on marker
      marker.addListener("click", () => {
        infoWindow.open(marker.getMap(), marker);
      });

      //Adding marker to google map
      marker.setMap(this.map);
    });
  }

  constructor() { }

  ngOnInit(): void {
  }

}