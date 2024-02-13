import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { GuarderiaService } from '../../services/guarderia-service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-guarderia',
  templateUrl: './guarderia.component.html',
  styleUrls: ['./guarderia.component.scss']
})
export class GuarderiaComponent implements OnInit {
  tipoUsuario: string;
  ventana: string;
  ventanaDatos: string;
  alergiasSeleccionadas: boolean[] = [];
  guardar = false;
  borrar = false;

  data$: Observable<any>;
  login$: Observable<any>;

  nombres: string[];
  estados: string[];
  turnos: string[];
  deposiciones: string[];
  alergias: string[];
  reservas: any[];
  reserva: any;

  constructor(
    readonly data: GuarderiaService,
    readonly loginSrv: LoginService
  ) { }

  ngOnInit(): void {
    this.loginSrv.user$.subscribe(user => {
      this.tipoUsuario = user
    });

    console.log(this.tipoUsuario)
    this.data$ = this.data.loadGuarderiaDatos();
    this.data$.subscribe(
      datos => {
        this.nombres = datos?.nombres;
        this.estados = datos?.estados;
        this.turnos = datos?.turnos;
        this.deposiciones = datos?.deposiciones;
        this.alergias = datos?.alergias;
        this.reservas = datos?.reservas;
        this.reserva = datos?.reservas[0];
        this.alergiasSeleccionadas = [datos?.reservas[0].alergiaLeche, datos?.reservas[0].alergiaHuevo, datos?.reservas[0].alergiaGluten, datos?.reservas[0].alergiaMarisco, datos?.reservas[0].alergiaLatex, datos?.reservas[0].alergiaOtros]
      });


    if (this.tipoUsuario == "Admin") {
      this.setVentana("historial")
    } else if (this.tipoUsuario == "User") {
      this.setVentana("datos")
      setTimeout(() => {
        this.padresDatos()
      }, 1);
    }
  }

  setVentana(ventana: string) {
    this.ventana = ventana;
  }

  monitorDatos() {
    this.ventanaDatos = "monitor";
    console.log(document.getElementById("monitorDatos"))
    document.getElementById("monitorDatos").style.backgroundColor = "#3596c3";
    document.getElementById("monitorDatos").style.color = "white";
    document.getElementById("monitorDatos").style.borderBottom = "1px solid #3596c3";

    document.getElementById("padresDatos").style.backgroundColor = "white";
    document.getElementById("padresDatos").style.color = "#3596c3";
    document.getElementById("padresDatos").style.borderBottom = "none";
  }

  padresDatos() {
    this.ventanaDatos = "padres";
    document.getElementById("padresDatos").style.backgroundColor = "#3596c3";
    document.getElementById("padresDatos").style.color = "white";
    document.getElementById("padresDatos").style.borderBottom = "1px solid #3596c3";

    document.getElementById("monitorDatos").style.backgroundColor = "white";
    document.getElementById("monitorDatos").style.color = "#3596c3";
    document.getElementById("monitorDatos").style.borderBottom = "none";
  }

  openModalGuardar() {
    this.guardar = true;
  }

  closeModalGuardar() {
    this.guardar = false;
  }

  toggleVisibilidad(index: number) {
    this.alergiasSeleccionadas[index] = !this.alergiasSeleccionadas[index];
  }

  openModalBorrar() {
    this.borrar = true;
  }

  closeModalBorrar() {
    this.borrar = false;
  }

  setEditReserva(reserva: any) {
    this.reserva = reserva;
    this.setVentana("datos");
    if (this.tipoUsuario === "Admin") {
      setTimeout(() => {
        this.monitorDatos();
      }, 1);
    } else if (this.tipoUsuario === "User") {
      setTimeout(() => {
        this.padresDatos()
      }, 1);
    } else {
      console.log("Hubo algún error");
    }
  }
}
