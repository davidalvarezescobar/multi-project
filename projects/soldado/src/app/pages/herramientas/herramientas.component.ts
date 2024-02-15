import { Component, OnInit } from '@angular/core';
import { HerramientasService } from '../../services/herramientas-service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-guarderia-alta',
  templateUrl: './herramientas.component.html',
  styleUrls: ['./herramientas.component.scss']
})
export class HerramientasComponent implements OnInit {
  tipoUsuario: string;
  ventana: string;
  horaActual: string;
  fechaActual: string;
  verificacion: boolean = false;
  modalObservacion: boolean = false;
  resultadoVerificacion: string;
  checks: boolean[];
  objetoRecuperado: boolean = false;
  observacionIncidencia: string;
  semaforoInventario: boolean;
  semaforoHistorial: boolean;

  herramientasEntrada: { nombre: string, guardado: boolean }[];
  historialHerramietnas: any[];
  horaEntrada: string
  turnos: string[];
  cajas: string[];

  constructor(
    readonly dataSrv: HerramientasService,
    readonly loginSrv: LoginService) { }

  ngOnInit(): void {
    this.horaActual = new Date().toISOString().slice(11, 16);
    this.fechaActual = new Date().toISOString().slice(0, 16);

    this.loginSrv.user$.subscribe(user => {
      this.tipoUsuario = user

      if (this.tipoUsuario == "Admin") {
        this.ventana = "historial"
      } else if (this.tipoUsuario == "User") {
        this.ventana = "inventario"
      }
    });

    this.dataSrv.loadHerramientasDatos().subscribe(
      herramientas => {
        this.herramientasEntrada = herramientas?.herramientas;
        this.historialHerramietnas = herramientas?.historialHerramientas
        this.horaEntrada = herramientas?.horaEntrada;
        this.turnos = herramientas?.turnos;
        this.cajas = herramientas?.cajas;

        for (let i = 0; i < (herramientas?.herramientas.length || 0); i++) {
          this.checks.push(false);
        }
        this.resetChecks()
        this.setSemaforoHistorialIncidencia();
        this.setSemaforoUserIncidencia();
      });
  }

  combrobarDatos() {
    if (this.semaforoInventario) {
      return true
    } else {
      return false
    }
  }

  cSalidaChange(check: boolean, herramientaEntrada: string) {
    for (let i = 0; i < this.herramientasEntrada.length; i++) {
      if (this.herramientasEntrada[i].nombre == herramientaEntrada) {
        this.checks[i] = check
        this.setSemaforoUserIncidencia()
        return
      }
    }
  }

  openModalVerificacion() {
    for (let i = 0; i < this.herramientasEntrada.length; i++) {
      if (!this.herramientasEntrada[i].guardado && this.checks[i]) {
        this.objetoRecuperado = true
        break
      }
    }

    if (this.semaforoInventario) {
      this.resultadoVerificacion = "Todos los materiales han sido devueltos"
      document.getElementById("botonConfirmacion").style.backgroundColor = "#3596c3";
      document.getElementById("botonConfirmacion").style.borderColor = "#3596c3";
      this.verificacion = true
    } else {
      this.resultadoVerificacion = "Faltan materiales"
      document.getElementById("botonConfirmacion").style.backgroundColor = "red";
      document.getElementById("botonConfirmacion").style.borderColor = "red";
      this.verificacion = true
    }
  }

  closeModalVerificacion() {
    this.verificacion = false
    this.objetoRecuperado = false
  }

  setSemaforoUserIncidencia() {
    for (let i = 0; i < this.checks.length; i++) {
      if (!this.checks[i]) {
        this.semaforoInventario = false
        return
      }
    }
    this.semaforoInventario = true
  }

  setSemaforoHistorialIncidencia() {
    for (let i = 0; i < this.historialHerramietnas.length; i++) {
      if (!this.historialHerramietnas[i].estadoSalida) {
        this.semaforoHistorial = false
        return
      }
    }
    this.semaforoHistorial = true
  }

  setVentana(ventana: string) {
    this.ventana = ventana
    this.resetChecks()
    this.setSemaforoHistorialIncidencia();
    this.setSemaforoUserIncidencia();
  }

  openModalObservacion(observacionIncidencia: string) {
    this.observacionIncidencia = observacionIncidencia
    this.modalObservacion = true;
  }

  closeModalObservacion() {
    this.modalObservacion = false;
  }

  resetChecks(){
    this.checks = [];
    for (let i = 0; i < (this.herramientasEntrada.length); i++) {
      this.checks.push(false);
    }
  }
}