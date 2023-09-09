import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AparcamientosAltaComponent } from './pages/aparcamientos-alta/aparcamientos-alta.component';
import { AparcamientosComponent } from './pages/aparcamientos/aparcamientos.component';
import { ApartamentosAltaComponent } from './pages/apartamentos-alta/apartamentos-alta.component';
import { ApartamentosComponent } from './pages/apartamentos/apartamentos.component';
import { ComedorAltaComponent } from './pages/comedor-alta/comedor-alta.component';
import { ComedorComponent } from './pages/comedor/comedor.component';
import { GimnasioAltaComponent } from './pages/gimnasio-alta/gimnasio-alta.component';
import { GimnasioComponent } from './pages/gimnasio/gimnasio.component';
import { GuarderiaAltaComponent } from './pages/guarderia-alta/guarderia-alta.component';
import { GuarderiaComponent } from './pages/guarderia/guarderia.component';
import { LudotecaAltaComponent } from './pages/ludoteca-alta/ludoteca-alta.component';
import { LudotecaComponent } from './pages/ludoteca/ludoteca.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SalasAltaComponent } from './pages/salas-alta/salas-alta.component';
import { SalasComponent } from './pages/salas/salas.component';
import { VisitasAltaComponent } from './pages/visitas-alta/visitas-alta.component';
import { VisitasComponent } from './pages/visitas/visitas.component';

const routes: Routes = [
  { path: 'comedor',  component: ComedorComponent },
  { path: 'comedor/alta',  component: ComedorAltaComponent },
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
  { path: 'visitas',  component: VisitasComponent },
  { path: 'visitas/alta',  component: VisitasAltaComponent },
  { path: '',   redirectTo: '/comedor', pathMatch: 'full' },
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
