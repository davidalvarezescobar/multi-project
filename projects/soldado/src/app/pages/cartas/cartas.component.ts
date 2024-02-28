import { Component, OnInit } from '@angular/core';
import { CartasService } from '../../services/cartas-service';

@Component({
  selector: 'app-cartas',
  templateUrl: './cartas.component.html',
  styleUrls: ['./cartas.component.scss']
})
export class CartasComponent implements OnInit {
  quickServices: { nombre: string, url: string, image: string }[];
  imageSources: string [] = []

  constructor(readonly dataSrv: CartasService) { }

  ngOnInit(): void {
    this.dataSrv.loadCartasDatos().subscribe(
      datos => {
        this.quickServices = datos?.quickServices;
        for(let i = 0; i< this.quickServices.length; i++){
          this.imageSources[i] = 'assets/cartas-imagen/' + this.quickServices[i].image + '-off.png';
        }
      });
  }

  changeImage(hover: boolean, i: number){
    if(hover){
      this.imageSources[i] = 'assets/cartas-imagen/' + this.quickServices[i].image + '-on.png';
    }else{
      this.imageSources[i] = 'assets/cartas-imagen/' + this.quickServices[i].image + '-off.png';
    }
  }
}