import { Component, OnInit } from '@angular/core';
import { HerramientasService } from '../../services/herramientas-service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-herramientas',
  templateUrl: './herramientas.component.html',
  styleUrls: ['./herramientas.component.scss']
})
export class HerramientasComponent implements OnInit {
  tipoUsuario: string;
  ventana: string;
  horaActual: string;
  fechaActual: string;
  vEntrada: boolean = false;
  vSalida: boolean = false;
  cambiosGuardados: boolean = false;
  modalObservacion: boolean = false;
  resultadoVerificacion: string;
  objetoRecuperado: boolean = false;
  observacionIncidencia: string;
  semaforoInventario: boolean;
  semaforoHistorial: boolean;

  herramientas:[{ nombre: string, cEntrada: boolean, cSalida: boolean}];
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
        this.herramientas = herramientas?.nombre.map(nombre=> { return {nombre:nombre, cEntrada: true, cSalida: true}});
        this.historialHerramietnas = herramientas?.historialHerramientas
        this.horaEntrada = herramientas?.horaEntrada;
        this.turnos = herramientas?.turnos;
        this.cajas = herramientas?.cajas;
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

  cEntradaChange(check: boolean, herramientaEntrada: string) {
    for (let i = 0; i < this.herramientas.length; i++) {
      if (this.herramientas[i].nombre == herramientaEntrada) {
        this.herramientas[i].cEntrada = check
        this.setSemaforoUserIncidencia()
        return
      }
    }
  }

  cSalidaChange(check: boolean, herramientaEntrada: string) {
    for (let i = 0; i < this.herramientas.length; i++) {
      if (this.herramientas[i].nombre == herramientaEntrada) {
        this.herramientas[i].cSalida = check
        this.setSemaforoUserIncidencia()
        return
      }
    }
  }

  openModalVerificacionEntrada(){
    if (this.semaforoInventario) {
      this.resultadoVerificacion = "Todos los materiales han sido devueltos"
      document.getElementById("botonEntradaConfirmacion").style.backgroundColor = "#3596c3";
      document.getElementById("botonEntradaConfirmacion").style.borderColor = "#3596c3";
      this.vEntrada = true
    } else {
      this.resultadoVerificacion = "Atención, incidencias encontradas con el inventario de herramientas"
      document.getElementById("botonEntradaConfirmacion").style.backgroundColor = "red";
      document.getElementById("botonEntradaConfirmacion").style.borderColor = "red";
      this.vEntrada = true
    }
  }

  closeModalVerificacionEntrada() {
    this.vEntrada = false
  }

  openModalVerificacionSalida() {
    for (let i = 0; i < this.herramientas.length; i++) {
      if (!this.herramientas[i].cEntrada && this.herramientas[i].cSalida) {
        this.objetoRecuperado = true
        break
      }
    }

    if (this.semaforoInventario) {
      this.resultadoVerificacion = "Todos los materiales han sido devueltos"
      document.getElementById("botonSalidaConfirmacion").style.backgroundColor = "#3596c3";
      document.getElementById("botonSalidaConfirmacion").style.borderColor = "#3596c3";
      this.vSalida = true
    } else {
      this.resultadoVerificacion = "Atención, incidencias encontradas con el inventario de herramientas"
      document.getElementById("botonSalidaConfirmacion").style.backgroundColor = "red";
      document.getElementById("botonSalidaConfirmacion").style.borderColor = "red";
      this.vSalida = true
    }
  }

  closeModalVerificacionSalida() {
    this.vSalida = false
    this.objetoRecuperado = false
  }

  openModalObservacion(observacionIncidencia: string) {
    this.observacionIncidencia = observacionIncidencia
    this.modalObservacion = true;
  }

  closeModalObservacion() {
    this.modalObservacion = false;
  }

  openModalGuardarCambio() {
    console.log("hola")
    this.cambiosGuardados = true;
  }

  closeModalGuardarCambio() {
    this.cambiosGuardados = false;
  }

  guardarDatosEntradaModal(){
    this.closeModalVerificacionEntrada()
    console.log("hola")
    this.openModalGuardarCambio()
  }

  guardarDatosSalidaModal(){
    this.closeModalVerificacionSalida()
    this.openModalGuardarCambio()
  }

  setSemaforoUserIncidencia() {
    for (let i = 0; i < this.herramientas.length; i++) {
      if (!this.herramientas[i].cEntrada || !this.herramientas[i].cSalida) {
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
    this.setSemaforoHistorialIncidencia();
    this.setSemaforoUserIncidencia();
  }

  formatDateDDMMYYYY(fecha: string): string {
    const fechaSinTiempo = fecha.split('T')[0];
    const partesFecha = fechaSinTiempo.split('-');
    const dia = partesFecha[2];
    const mes = partesFecha[1];
    const año = partesFecha[0];
    return `${año}-${mes}-${dia}`;
  }
}