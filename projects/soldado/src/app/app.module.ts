import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComedorComponent } from './pages/comedor/comedor.component';
import { VisitasComponent } from './pages/visitas/visitas.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ComedorAltaComponent } from './pages/comedor-alta/comedor-alta.component';
import { VisitasAltaComponent } from './pages/visitas-alta/visitas-alta.component';
import { AparcamientosComponent } from './pages/aparcamientos/aparcamientos.component';
import { GuarderiaComponent } from './pages/guarderia/guarderia.component';
import { LudotecaComponent } from './pages/ludoteca/ludoteca.component';
import { SalasComponent } from './pages/salas/salas.component';
import { ApartamentosComponent } from './pages/apartamentos/apartamentos.component';
import { GimnasioComponent } from './pages/gimnasio/gimnasio.component';
import { AparcamientosAltaComponent } from './pages/aparcamientos-alta/aparcamientos-alta.component';

@NgModule({
  declarations: [
    AppComponent,
    ComedorComponent,
    VisitasComponent,
    NotFoundComponent,
    ComedorAltaComponent,
    VisitasAltaComponent,
    AparcamientosComponent,
    GuarderiaComponent,
    LudotecaComponent,
    SalasComponent,
    ApartamentosComponent,
    GimnasioComponent,
    AparcamientosAltaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
