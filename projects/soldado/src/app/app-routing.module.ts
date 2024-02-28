import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AparcamientosAdminGuard } from './guards/aparcamientos-admin.guard';
import { AparcamientosGuard } from './guards/aparcamientos.guard';
import { ComedorAdminGuard } from './guards/comedor-admin.guard';
import { ComedorGuard } from './guards/comedor.guard';
import { AparcamientosAdminComponent } from './pages/aparcamientos-admin/aparcamientos-admin.component';
import { AparcamientosAltaComponent } from './pages/aparcamientos-alta/aparcamientos-alta.component';
import { AparcamientosComponent } from './pages/aparcamientos/aparcamientos.component';
import { ApartamentosAltaComponent } from './pages/apartamentos-alta/apartamentos-alta.component';
import { ApartamentosComponent } from './pages/apartamentos/apartamentos.component';
import { BibliotecaAltaComponent } from './pages/biblioteca-alta/biblioteca-alta.component';
import { BibliotecaComponent } from './pages/biblioteca/biblioteca.component';
import { CartasComponent } from './pages/cartas/cartas.component';
import { ComedorAdminComponent } from './pages/comedor-admin/comedor-admin.component';
import { ComedorHistoricoAdminComponent } from './pages/comedor-historico-admin/comedor-historico-admin.component';
import { ComedorHistoricoComponent } from './pages/comedor-historico/comedor-historico.component';
import { ComedorAltaComponent } from './pages/comedor/comedor.component';
import { DatosComponent } from './pages/datos/datos.component';
import { FichajeAltaComponent } from './pages/fichaje-alta/fichaje-alta.component';
import { FichajeComponent } from './pages/fichaje/fichaje.component';
import { GimnasioAltaComponent } from './pages/gimnasio-alta/gimnasio-alta.component';
import { GimnasioComponent } from './pages/gimnasio/gimnasio.component';
import { GuarderiaComponent } from './pages/guarderia/guarderia.component';
import { HerramientasComponent } from './pages/herramientas/herramientas.component';
import { LudotecaAltaComponent } from './pages/ludoteca-alta/ludoteca-alta.component';
import { LudotecaComponent } from './pages/ludoteca/ludoteca.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { PiscinaAltaComponent } from './pages/piscina-alta/piscina-alta.component';
import { PiscinaHistoricoComponent } from './pages/piscina-historico/piscina-historico.component';
import { PiscinaComponent } from './pages/piscina/piscina.component';
import { SalasAltaComponent } from './pages/salas-alta/salas-alta.component';
import { SalasDisponibilidadComponent } from './pages/salas-disponibilidad/salas-disponibilidad.component';
import { SalasHistoricoComponent } from './pages/salas-historico/salas-historico.component';
import { SalasComponent } from './pages/salas/salas.component';
import { SocorristaHistoricoComponent } from './pages/socorrista-historico/socorrista-historico.component';
import { SocorristaComponent } from './pages/socorrista/socorrista.component';
import { TurnosAltaComponent } from './pages/turnos-alta/turnos-alta.component';
import { TurnosComponent } from './pages/turnos/turnos.component';
import { VisitasAltaComponent } from './pages/visitas-alta/visitas-alta.component';
import { VisitasComponent } from './pages/visitas/visitas.component';

const routes: Routes = [
  { path: 'comedor/historico',  component: ComedorHistoricoComponent, canActivate: [ComedorGuard] },
  { path: 'comedor-admin/historico',  component: ComedorHistoricoAdminComponent, canActivate: [ComedorAdminGuard] },
  { path: 'comedor',  component: ComedorAltaComponent, canActivate: [ComedorGuard]},
  { path: 'comedor-admin',  component: ComedorAdminComponent, canActivate: [ComedorAdminGuard]},
  { path: 'aparcamientos',  component: AparcamientosComponent, canActivate: [AparcamientosGuard] },
  { path: 'aparcamientos-admin',  component: AparcamientosAdminComponent, canActivate: [AparcamientosAdminGuard] },
  { path: 'aparcamientos/alta',  component: AparcamientosAltaComponent },
  { path: 'guarderia',  component: GuarderiaComponent },
  { path: 'herramientas',  component: HerramientasComponent },
  { path: 'ludoteca',  component: LudotecaComponent },
  { path: 'ludoteca/alta',  component: LudotecaAltaComponent },
  { path: 'salas',  component: SalasComponent },
  { path: 'salas/alta',  component: SalasAltaComponent },
  { path: 'salas/disponibilidad',  component: SalasDisponibilidadComponent },
  { path: 'salas/listado',  component: SalasHistoricoComponent },
  { path: 'apartamentos',  component: ApartamentosComponent },
  { path: 'apartamentos/alta',  component: ApartamentosAltaComponent },
  { path: 'gimnasio',  component: GimnasioComponent },
  { path: 'gimnasio/alta',  component: GimnasioAltaComponent },
  { path: 'biblioteca',  component: BibliotecaComponent },
  { path: 'biblioteca/alta',  component: BibliotecaAltaComponent },
  { path: 'piscina',  component: PiscinaComponent },
  { path: 'piscina/historico',  component: PiscinaHistoricoComponent },
  { path: 'piscina/alta',  component: PiscinaAltaComponent },
  { path: 'socorrista',  component: SocorristaComponent },
  { path: 'socorrista/historico',  component: SocorristaHistoricoComponent },
  { path: 'visitas',  component: VisitasComponent },
  { path: 'visitas/alta',  component: VisitasAltaComponent },
  { path: 'fichaje',  component: FichajeComponent },
  { path: 'fichaje/alta',  component: FichajeAltaComponent },
  { path: 'turnos',  component: TurnosComponent },
  { path: 'turnos/alta',  component: TurnosAltaComponent },
  { path: 'datos',  component: DatosComponent},
  { path: '',   component: CartasComponent},
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
