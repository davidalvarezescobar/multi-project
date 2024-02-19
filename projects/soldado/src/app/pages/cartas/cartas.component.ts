import { Component, OnInit } from '@angular/core';
import { CartasService } from '../../services/cartas-service';

@Component({
  selector: 'app-cartas',
  templateUrl: './cartas.component.html',
  styleUrls: ['./cartas.component.scss']
})
export class CartasComponent implements OnInit {
  quickServices: { nombre: string, url: string, image: string }[];

  constructor(readonly dataSrv: CartasService) { }

  ngOnInit(): void {
    this.dataSrv.loadCartasDatos().subscribe(
      datos => {
        this.quickServices = datos?.quickServices;
      });
  }
}