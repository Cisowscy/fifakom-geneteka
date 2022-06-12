import { Component, Input, OnInit } from '@angular/core';
import { KontrolaFiszekService } from "./kontrola-fiszek.service";

@Component({
  selector: 'fifak-fiszka',
  templateUrl: './fiszka.component.html',
  styleUrls: ['./fiszka.component.scss']
})
export class FiszkaComponent implements OnInit {
  @Input() id = 0;
  @Input() wers1 = '';
  @Input() wers2 = '';
  stan = false;

  

  constructor(private stanFiszek: KontrolaFiszekService) { }

  ngOnInit(): void {
    if (this.id==0){
      this.stan=true;
    }    
    this.stanFiszek.zainicjuj(this.id, this.stan);
    //
    this.stanFiszek.odczytaj(this.id).subscribe(sprawdzonyStan => {
      this.stan = sprawdzonyStan;
  });

  }

  zmianaStanuFiszki(){
    this.stanFiszek.zmieniaj(this.id);
  }

}
