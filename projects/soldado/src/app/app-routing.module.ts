import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AparcamientosAltaComponent } from './pages/aparcamientos-alta/aparcamientos-alta.component';
import { AparcamientosComponent } from './pages/aparcamientos/aparcamientos.component';
import { ApartamentosComponent } from './pages/apartamentos/apartamentos.component';
import { ComedorAltaComponent } from './pages/comedor-alta/comedor-alta.component';
import { ComedorComponent } from './pages/comedor/comedor.component';
import { GimnasioComponent } from './pages/gimnasio/gimnasio.component';
import { GuarderiaComponent } from './pages/guarderia/guarderia.component';
import { LudotecaComponent } from './pages/ludoteca/ludoteca.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { SalasComponent } from './pages/salas/salas.component';
import { VisitasAltaComponent } from './pages/visitas-alta/visitas-alta.component';
import { VisitasComponent } from './pages/visitas/visitas.component';

const routes: Routes = [
  { path: 'comedor',  component: ComedorComponent },
  { path: 'comedor/alta',  component: ComedorAltaComponent },
  { path: 'aparcamientos',  component: AparcamientosComponent },
  { path: 'aparcamientos/alta',  component: AparcamientosAltaComponent },
  { path: 'guarderia',  component: GuarderiaComponent },
  { path: 'ludoteca',  component: LudotecaComponent },
  { path: 'salas',  component: SalasComponent },
  { path: 'apartamentos',  component: ApartamentosComponent },
  { path: 'gimnasio',  component: GimnasioComponent },
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
