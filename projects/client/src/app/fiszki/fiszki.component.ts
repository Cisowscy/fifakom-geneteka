import { Component, OnInit } from '@angular/core';
import { KontrolaFiszekService } from "./kontrola-fiszek.service";

@Component({
  selector: 'fifak-fiszki',
  templateUrl: './fiszki.component.html',
  styleUrls: ['../../theme/tools.scss','./fiszki.component.scss']
})
export class FiszkiComponent implements OnInit {
  fiszki = [
    {id:3, stan:false, wers1: 'WSTĘP' , wers2: 'baza „GeneTeka”' },
    {id:4, stan:false, wers1: 'ZAKRES' , wers2: 'baza „GeneTeka”' },
    {id:5, stan:false, wers1: 'ZASÓB' , wers2: 'baza „GeneTeka”' },
    {id:6, stan:false, wers1: 'PORADNIK' , wers2: 'baza „GeneTeka”' },
    {id:0, stan:true,  wers1: 'sztuczka 1' , wers2: '„Fifakom-GeneTeka”' },
    {id:1, stan:false, wers1: 'sztuczka 2' , wers2: '„Fifakom-GeneTeka”' },
    {id:2, stan:false, wers1: 'sztuczka 3' , wers2: '„Fifakom-GeneTeka”' },
  ];
  constructor(private stanSekcji: KontrolaFiszekService) { }

  ngOnInit(): void {
    for (const k in this.fiszki) {
      if (Object.prototype.hasOwnProperty.call(this.fiszki, k)) {
        const e = this.fiszki[k];
        this.stanSekcji.odczytaj(e.id).subscribe(sprawdzonyStan => {
          this.fiszki[k].stan = sprawdzonyStan;
        });
      }
    }
  }

}
