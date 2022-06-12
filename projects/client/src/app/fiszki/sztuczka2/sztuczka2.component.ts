import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fifak-sztuczka2',
  templateUrl: './sztuczka2.component.html',
  styleUrls: ['../box-size-scroll.scss','./sztuczka2.component.scss']
})
export class Sztuczka2Component implements OnInit {
  @Input() idn = 0;  
  @Input() txt = '';  

  constructor() { }

  ngOnInit(): void { }

}