import { Injectable } from '@angular/core';
import { Observable, Subject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class KontrolaFiszekService {
  private fiszekStany = [
    /* 0 */ new Subject<any>(),
    /* 1 */ new Subject<any>(),
    /* 2 */ new Subject<any>(),
    /* 3 */ new Subject<any>(),
    /* 4 */ new Subject<any>(),
    /* 5 */ new Subject<any>(),
    /* 6 */ new Subject<any>()
  ];
  fiszka_F = new Set<number>([1,2,3,4,5,6]);
  fiszka_T = 0;


  constructor() { }

  odczytaj(id:number): Observable<any> {
    return this.fiszekStany[id].asObservable();    
  }

  zainicjuj(id:number, stan:boolean){
    this.fiszekStany[id].next(stan);
  }

  zmieniaj(id:number){
    //console.log(this.fiszekStany);
    if(!(this.fiszka_T==id)){      
      this.fiszka_F.delete(id);
      this.fiszka_F.add(this.fiszka_T);
      this.fiszka_T= id;
      //this.fiszekStany[id].next(stan);
      this.fiszekStany[id].next(true);
      for (let ii of this.fiszka_F) {
        this.fiszekStany[ii].next(false);
    }
      
    }
    
  }
}
