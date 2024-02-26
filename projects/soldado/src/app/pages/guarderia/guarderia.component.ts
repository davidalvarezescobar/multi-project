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
  alergiasSeleccionadas: boolean[] = [];   //Son las alergias que se seleccionan
  guardar = false;  //bandera para el modal de guardar datos

  nombres: string[];
  estados: string[];
  turnos: string[];
  deposiciones: string[];
  alergias: string[];
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
        this.alergias = datos?.alergias;
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

  setNewReserva(){
    this.nuevaReserva = true
    this.reserva = undefined;
    this.alergiasSeleccionadas = []
    this.setVentana("datos");
      setTimeout(() => {
        this.padresDatos()
      }, 1);
  }

  setEditReserva(reserva: any) {
    this.nuevaReserva = false
    this.reserva = reserva;
    this.alergiasSeleccionadas = [reserva.alergiaLeche, reserva.alergiaHuevo, reserva.alergiaGluten, reserva.alergiaMarisco, reserva.alergiaLatex, reserva.alergiaOtros]
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

  formatDateDDMMYYYY(fecha: string): string {
    const fechaSinTiempo = fecha.split('T')[0];
    const partesFecha = fechaSinTiempo.split('-');
    const dia = partesFecha[2];
    const mes = partesFecha[1];
    const año = partesFecha[0];
    console.log(`${año}-${mes}-${dia}`)
    return `${año}-${mes}-${dia}`;
  }
  formatDateDDMMYYYYHHMM(fecha: string): string {
    const partes = fecha.split('T');
    const fechaPartes = partes[0].split('-');
    const dia = fechaPartes[0];
    const mes = fechaPartes[1];
    const año = fechaPartes[2];
    const horaPartes = partes[1].split(':');
    const hora = horaPartes[0];
    const minutos = horaPartes[1];
    return `${año}-${mes}-${dia} ${hora}:${minutos}`;
  }
}
