import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AparcamientosAltaComponent } from './pages/aparcamientos-alta/aparcamientos-alta.component';
import { AparcamientosComponent } from './pages/aparcamientos/aparcamientos.component';
import { ApartamentosAltaComponent } from './pages/apartamentos-alta/apartamentos-alta.component';
import { ApartamentosComponent } from './pages/apartamentos/apartamentos.component';
import { BibliotecaAltaComponent } from './pages/biblioteca-alta/biblioteca-alta.component';
import { BibliotecaComponent } from './pages/biblioteca/biblioteca.component';
import { ComedorAltaComponent } from './pages/comedor/comedor.component';
import { ComedorHistoricoComponent } from './pages/comedor-historico/comedor-historico.component';
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

const routes: Routes = [
  { path: 'comedor/historico',  component: ComedorHistoricoComponent },
  { path: 'comedor',  component: ComedorAltaComponent },
  { path: 'aparcamientos',  component: AparcamientosComponent },
  { path: 'aparcamientos/alta',  component: AparcamientosAltaComponent },
  { path: 'guarderia',  component: GuarderiaComponent },
  { path: 'guarderia/alta',  component: GuarderiaAltaComponent },
  { path: 'ludoteca',  component: LudotecaComponent },
  { path: 'ludoteca/alta',  component: LudotecaAltaComponent },
  { path: 'salas',  component: SalasComponent },
  { path: 'salas/alta',  component: SalasAltaComponent },
  { path: 'apartamentos',  component: ApartamentosComponent },
  { path: 'apartamentos/alta',  component: ApartamentosAltaComponent },
  { path: 'gimnasio',  component: GimnasioComponent },
  { path: 'gimnasio/alta',  component: GimnasioAltaComponent },
  { path: 'biblioteca',  component: BibliotecaComponent },
  { path: 'biblioteca/alta',  component: BibliotecaAltaComponent },
  { path: 'piscina',  component: PiscinaComponent },
  { path: 'piscina/alta',  component: PiscinaAltaComponent },
  { path: 'visitas',  component: VisitasComponent },
  { path: 'visitas/alta',  component: VisitasAltaComponent },
  { path: 'fichaje',  component: FichajeComponent },
  { path: 'fichaje/alta',  component: FichajeAltaComponent },
  { path: 'turnos',  component: TurnosComponent },
  { path: 'turnos/alta',  component: TurnosAltaComponent },
  { path: '',   redirectTo: '/comedor', pathMatch: 'full' },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
