import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fifak-geneteka-baza',
  templateUrl: './geneteka-baza.component.html',
  styleUrls: ['../box-size-scroll.scss','./geneteka-baza.component.scss']
})
export class GenetekaBazaComponent implements OnInit {
  @Input() idn = 0; 
  @Input() txt = '';  

  constructor() { }

  ngOnInit(): void { }

}
