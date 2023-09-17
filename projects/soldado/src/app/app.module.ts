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
import { GuarderiaAltaComponent } from './pages/guarderia-alta/guarderia-alta.component';
import { LudotecaAltaComponent } from './pages/ludoteca-alta/ludoteca-alta.component';
import { SalasAltaComponent } from './pages/salas-alta/salas-alta.component';
import { ApartamentosAltaComponent } from './pages/apartamentos-alta/apartamentos-alta.component';
import { GimnasioAltaComponent } from './pages/gimnasio-alta/gimnasio-alta.component';
import { BibliotecaComponent } from './pages/biblioteca/biblioteca.component';
import { BibliotecaAltaComponent } from './pages/biblioteca-alta/biblioteca-alta.component';
import { PiscinaComponent } from './pages/piscina/piscina.component';
import { PiscinaAltaComponent } from './pages/piscina-alta/piscina-alta.component';
import { FichajeComponent } from './pages/fichaje/fichaje.component';
import { FichajeAltaComponent } from './pages/fichaje-alta/fichaje-alta.component';
import { TurnosComponent } from './pages/turnos/turnos.component';
import { TurnosAltaComponent } from './pages/turnos-alta/turnos-alta.component';

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
    AparcamientosAltaComponent,
    GuarderiaAltaComponent,
    LudotecaAltaComponent,
    SalasAltaComponent,
    ApartamentosAltaComponent,
    GimnasioAltaComponent,
    BibliotecaComponent,
    BibliotecaAltaComponent,
    PiscinaComponent,
    PiscinaAltaComponent,
    FichajeComponent,
    FichajeAltaComponent,
    TurnosComponent,
    TurnosAltaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
