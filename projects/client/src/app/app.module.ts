import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//import { NgxMapLibreGLModule } from '@maplibre/ngx-maplibre-gl';


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
    FormsModule,
    //NgxMapLibreGLModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
