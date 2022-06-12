import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fifak-sztuczka1',
  templateUrl: './sztuczka1.component.html',
  styleUrls: ['../box-size-scroll.scss','./sztuczka1.component.scss']
})
export class Sztuczka1Component implements OnInit {
  @Input() idn = 0;  
  @Input() txt = '';  
  stan2 = false;

  constructor( ) { }

  ngOnInit(): void {
  }

}
