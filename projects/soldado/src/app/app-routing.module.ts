import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComedorAltaComponent } from './pages/comedor-alta/comedor-alta.component';
import { ComedorComponent } from './pages/comedor/comedor.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { VisitasAltaComponent } from './pages/visitas-alta/visitas-alta.component';
import { VisitasComponent } from './pages/visitas/visitas.component';

const routes: Routes = [
  { path: 'comedor',  component: ComedorComponent },
  { path: 'comedor/alta',  component: ComedorAltaComponent },
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
