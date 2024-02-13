import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import es from '@angular/common/locales/es';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AccessControlDirective } from './directives/access-control.directive';
import { AparcamientosAltaComponent } from './pages/aparcamientos-alta/aparcamientos-alta.component';
import { AparcamientosComponent } from './pages/aparcamientos/aparcamientos.component';
import { ApartamentosAltaComponent } from './pages/apartamentos-alta/apartamentos-alta.component';
import { ApartamentosComponent } from './pages/apartamentos/apartamentos.component';
import { BibliotecaAltaComponent } from './pages/biblioteca-alta/biblioteca-alta.component';
import { BibliotecaComponent } from './pages/biblioteca/biblioteca.component';
import { ComedorAdminComponent } from './pages/comedor-admin/comedor-admin.component';
import { ComedorHistoricoComponent } from './pages/comedor-historico/comedor-historico.component';
import { ComedorAltaComponent } from './pages/comedor/comedor.component';
import { FichajeAltaComponent } from './pages/fichaje-alta/fichaje-alta.component';
import { FichajeComponent } from './pages/fichaje/fichaje.component';
import { GimnasioAltaComponent } from './pages/gimnasio-alta/gimnasio-alta.component';
import { GimnasioComponent } from './pages/gimnasio/gimnasio.component';
import { GuarderiaAltaComponent } from './pages/guarderia-alta/guarderia-alta.component';
import { GuarderiaComponent } from './pages/guarderia/guarderia.component';
import { LudotecaAltaComponent } from './pages/ludoteca-alta/ludoteca-alta.component';
import { LudotecaComponent } from './pages/ludoteca/ludoteca.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PiscinaAltaComponent } from './pages/piscina-alta/piscina-alta.component';
import { PiscinaComponent } from './pages/piscina/piscina.component';
import { SalasAltaComponent } from './pages/salas-alta/salas-alta.component';
import { SalasComponent } from './pages/salas/salas.component';
import { TurnosAltaComponent } from './pages/turnos-alta/turnos-alta.component';
import { TurnosComponent } from './pages/turnos/turnos.component';
import { VisitasAltaComponent } from './pages/visitas-alta/visitas-alta.component';
import { VisitasComponent } from './pages/visitas/visitas.component';
import { ComedorFilterPipe } from './pipes/comedor-filter.pipe';
import { ComedorHistoricoAdminComponent } from './pages/comedor-historico-admin/comedor-historico-admin.component';

registerLocaleData(es);

@NgModule({
  declarations: [
    AppComponent,
    ComedorHistoricoComponent,
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
    TurnosAltaComponent,
    ComedorFilterPipe,
    ComedorAdminComponent,
    AccessControlDirective,
    ComedorHistoricoAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
