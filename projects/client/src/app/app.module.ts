import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { FiszkiComponent, FiszkaComponent, Sztuczka1Component, Sztuczka2Component, Sztuczka3Component, GenetekaOpisComponent, GenetekaBazaComponent, GenetekaMapaComponent, GenetekaPomocComponent } from './fiszki';


@NgModule({
  declarations: [
    AppComponent,
    FiszkiComponent,
    FiszkaComponent,
    Sztuczka1Component,
    Sztuczka2Component,
    Sztuczka3Component,
    GenetekaOpisComponent,
    GenetekaBazaComponent,
    GenetekaMapaComponent,
    GenetekaPomocComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
