import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'fifak-geneteka-mapa',
  templateUrl: './geneteka-mapa.component.html',
  styleUrls: ['../box-size-scroll.scss','./geneteka-mapa.component.scss']
})
export class GenetekaMapaComponent implements OnInit {
  @Input() idn = 0;  
  @Input() txt = '';  

  constructor() { }

  ngOnInit(): void { }

}