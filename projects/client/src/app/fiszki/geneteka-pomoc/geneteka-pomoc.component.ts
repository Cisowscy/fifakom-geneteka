import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'fifak-geneteka-pomoc',
  templateUrl: './geneteka-pomoc.component.html',
  styleUrls: ['../box-size-scroll.scss','./geneteka-pomoc.component.scss']
})
export class GenetekaPomocComponent implements OnInit {
  @Input() idn = 0;  
  @Input() txt = '';  

  constructor() { }

  ngOnInit(): void { }

}