import { Component, OnInit } from '@angular/core';
import { GuarderiaService } from '../../services/guarderia-service';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-guarderia',
  templateUrl: './guarderia.component.html',
  styleUrls: ['./guarderia.component.scss']
})
export class GuarderiaComponent implements OnInit {
  fechaActual: string = new Date().toISOString().slice(0, 16);  //fecha actual
  tipoUsuario: string;  //si es admin o user
  ventana: string;  //controla el cambio de ventana y en cual estas
  ventanaDatos: string; //controla si estas viendo la parte de Monitor y Padres de la ventana datos
  nuevaReserva = true; //controla si estamos creando una nueva reserva o no.
  intoleranciasSeleccionadas: boolean[] = [];   //Son las intolerancias que se seleccionan
  guardar = false;  //bandera para el modal de guardar datos
  autorizado = false; //controla si estamos creando una nueva reserva o no.

  nombres: string[];
  estados: string[];
  turnos: string[];
  deposiciones: string[];
  intolerancias: string[];
  reservas: any[];
  reserva: any;

  constructor(
    readonly dataSrv: GuarderiaService,
    readonly loginSrv: LoginService
  ) { }

  ngOnInit(): void {
    this.loginSrv.user$.subscribe(user => {
      this.tipoUsuario = user
    });

    this.dataSrv.loadGuarderiaDatos().subscribe(
      datos => {
        this.nombres = datos?.nombres;
        this.estados = datos?.estados;
        this.turnos = datos?.turnos;
        this.deposiciones = datos?.deposiciones;
        this.intolerancias = datos?.intolerancias;
        this.reservas = datos?.reservas;
      });

    if (this.tipoUsuario == "Admin") {
      this.setVentana("historial")
    } else if (this.tipoUsuario == "User") {
      this.setVentana("datos")
      setTimeout(() => {
        this.padresDatos()
      }, 10);
    }
  }

  setVentana(ventana: string) {
    this.ventana = ventana;
  }

  monitorDatos() {
    this.ventanaDatos = "monitor";
    document.getElementById("monitorDatos").style.borderBottom = "3px solid #3596c3";
    document.getElementById("monitorDatos").style.fontWeight = "600";
    document.getElementById("padresDatos").style.borderBottom = "none";
    document.getElementById("padresDatos").style.fontWeight = "400";
  }

  padresDatos() {
    this.ventanaDatos = "padres";
    document.getElementById("padresDatos").style.borderBottom = "3px solid #3596c3";
    document.getElementById("padresDatos").style.fontWeight = "600";
    document.getElementById("monitorDatos").style.borderBottom = "none";
    document.getElementById("monitorDatos").style.fontWeight = "400";
  }

  openModalGuardar() {
    this.guardar = true;
  }

  closeModalGuardar() {
    this.guardar = false;
  }

  toggleVisibilidad(index: number) {
    this.intoleranciasSeleccionadas[index] = !this.intoleranciasSeleccionadas[index];
  }

  setNewReserva() {
    this.nuevaReserva = true
    this.reserva = undefined;
    this.intoleranciasSeleccionadas = []
    this.setVentana("datos");
    setTimeout(() => {
      this.padresDatos()
    }, 1);
  }

  setEditReserva(reserva: any) {
    this.nuevaReserva = false
    this.reserva = reserva;
    this.intoleranciasSeleccionadas = [reserva.intoleranciaLeche, reserva.intoleranciaHuevo, reserva.intoleranciaGluten]
    this.autorizado = reserva.autorizacion
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

  cAutorizadoChange(check) {
    this.autorizado = check
  }

  formatDateDDMMYYYY(fecha: string): string {
    const fechaSinTiempo = fecha.split('T')[0];
    const partesFecha = fechaSinTiempo.split('-');
    const dia = partesFecha[2];
    const mes = partesFecha[1];
    const año = partesFecha[0];
    return `${año}-${mes}-${dia}`;
  }

  formatDateConMesEscritoDDMM(fecha) {
    const fechaSinTiempo = fecha.split('T')[0];
    const partesFecha = fechaSinTiempo.split('-');
    const dia = partesFecha[2];
    const mesNumerico = parseInt(partesFecha[1], 10);
    const meses = ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'];
    const mes = meses[mesNumerico - 1];
    return `${dia}-${mes}`;
  }
}
