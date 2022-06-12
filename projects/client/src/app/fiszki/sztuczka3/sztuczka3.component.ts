import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fifak-sztuczka3',
  templateUrl: './sztuczka3.component.html',
  styleUrls: ['../box-size-scroll.scss','./sztuczka3.component.scss']
})
export class Sztuczka3Component implements OnInit {
  @Input() idn = 0;  
  @Input() txt = '';  

  constructor() { }

  ngOnInit(): void { }

}