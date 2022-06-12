import { Component, Input, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
//import { Map, NavigationControl, Marker } from 'maplibre-gl';

@Component({
  selector: 'fifak-sztuczka1',
  templateUrl: './sztuczka1.component.html',
  styleUrls: ['../box-size-scroll.scss','./sztuczka1.component.scss']
})
export class Sztuczka1Component implements OnInit, AfterViewInit {
  @Input() idn = 0;  
  @Input() txt = '';  
  stan2 = false;

  mapStyle = 'https://maps.geoapify.com/v1/styles/positron/style.json';
  myAPIKey = 'bfe115a424794a68ab642a83c453eabb';
  initMap= { lng: 22.0, lat: 50.7, zoom: 6 };
  //@ViewChild('map') private mapContainer!: ElementRef<HTMLElement>;

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit() {
    //https://myprojects.geoapify.com/api/
    const myAPIKey = 'bfe115a424794a68ab642a83c453eabb'; 
    //const mapStyle = 'https://maps.geoapify.com/v1/styles/positron/style.json';

    const initialState = { lng: 22.0, lat: 50.7, zoom: 6 };

    //, 

    //const map = new Map({
    //  container: this.mapContainer.nativeElement,
    //  style: `${mapStyle}?apiKey=${myAPIKey}`,
    //  center: [initialState.lng, initialState.lat],
    //  zoom: initialState.zoom
    //});
//
    //map.addControl(new NavigationControl({
    //  showCompass: true,
	  //  showZoom: true,
	  //  visualizePitch: true
    //}));
  }

  //

  

}
