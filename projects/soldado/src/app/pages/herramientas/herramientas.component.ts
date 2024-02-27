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
  horaEntrada: string;
  horaSalida: string;
  fechaActual: string;
  modalAdvertenciaEntrada: boolean = false;
  modalAdvertenciaSalida: boolean = false;
  cambiosGuardadosEntrada: boolean = false;
  cambiosGuardadosSalida: boolean = false;
  modalObservacion: boolean = false;
  resultadoVerificacion: string;
  objetoRecuperado: boolean = false;
  observacionIncidencia: string;
  semaforoInventario: boolean;
  semaforoHistorial: boolean;
  momentoActivo: string = "Entrada";
  cEntrada: boolean[] = [];
  cSalida: boolean[] = [];

  herramientas: string[];
  historialHerramietnas: any[];
  turnos: string[];
  cajas: string[];

  constructor(
    readonly dataSrv: HerramientasService,
    readonly loginSrv: LoginService) { }

  ngOnInit(): void {
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
        this.herramientas = herramientas?.nombre;
        this.historialHerramietnas = herramientas?.historialHerramientas
        this.turnos = herramientas?.turnos;
        this.cajas = herramientas?.cajas;

        for (let i = 0; i < this.herramientas.length; i++) {
          this.cEntrada[i] = true
          this.cSalida[i] = true
        }

        this.setSemaforoHistorialIncidencia();
        this.setSemaforoUserIncidencia(this.cEntrada);
      });
  }

  modalVerificacionHerramietnasEntrada() {
    if (this.semaforoInventario) {
      this.openModalGuardarCambioEntrada();
    } else {
      this.openModalAdvertenciaEntrada()
    }
  }

  modalVerificacionHerramietnasSalida() {
    if (this.semaforoInventario) {
      this.openModalGuardarCambioSalida();
    } else {
      this.openModalAdvertenciaSalida()
    }
  }

  openModalGuardarCambioEntrada() {
    this.closeModalAdvertenciaEntrada()
    this.cambiosGuardadosEntrada = true;
  }

  closeModalGuardarCambioEntrada() {
    this.horaEntrada = new Date().toISOString().slice(11, 16);
    this.momentoActivo = "Salida"
    this.setSemaforoUserIncidencia(this.cSalida)
    this.cambiosGuardadosEntrada = false;
  }

  openModalGuardarCambioSalida() {
    this.closeModalAdvertenciaSalida()
    this.cambiosGuardadosSalida = true;
  }

  closeModalGuardarCambioSalida() {
    this.horaSalida = new Date().toISOString().slice(11, 16);
    this.momentoActivo = "Finalizado"
    this.cambiosGuardadosSalida = false;
  }

  openModalAdvertenciaEntrada() {
    this.modalAdvertenciaEntrada = true
  }

  closeModalAdvertenciaEntrada() {
    this.modalAdvertenciaEntrada = false
  }

  openModalAdvertenciaSalida() {
    this.modalAdvertenciaSalida = true
  }

  closeModalAdvertenciaSalida() {
    this.modalAdvertenciaSalida = false
  }

  openModalObservacion(observacionIncidencia: string) {
    this.observacionIncidencia = observacionIncidencia
    this.modalObservacion = true;
  }

  closeModalObservacion() {
    this.modalObservacion = false;
  }


  cEntradaChange(check: boolean, herramientaEntrada: string) {
    for (let i = 0; i < this.herramientas.length; i++) {
      if (this.herramientas[i] == herramientaEntrada) {
        this.cEntrada[i] = check
        this.setSemaforoUserIncidencia(this.cEntrada)
        return
      }
    }
  }

  cSalidaChange(check: boolean, herramientaEntrada: string) {
    for (let i = 0; i < this.herramientas.length; i++) {
      if (this.herramientas[i] == herramientaEntrada) {
        this.cSalida[i] = check
        this.setSemaforoUserIncidencia(this.cSalida)
        return
      }
    }
  }

  setSemaforoUserIncidencia(checks: boolean[]) {
    for (let i = 0; i < checks.length; i++) {
      if (!checks[i]) {
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
    this.setSemaforoUserIncidencia(this.cEntrada);
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