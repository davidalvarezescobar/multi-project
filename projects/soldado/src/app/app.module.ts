import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComedorComponent } from './pages/comedor/comedor.component';
import { VisitasComponent } from './pages/visitas/visitas.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ComedorAltaComponent } from './pages/comedor-alta/comedor-alta.component';
import { VisitasAltaComponent } from './pages/visitas-alta/visitas-alta.component';

@NgModule({
  declarations: [
    AppComponent,
    ComedorComponent,
    VisitasComponent,
    NotFoundComponent,
    ComedorAltaComponent,
    VisitasAltaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
