import { Component, OnInit } from '@angular/core';
import { PeliculaDTO } from '../peliculas/pelicula';
import { PeliculasService } from '../peliculas/peliculas.service';

@Component({
  selector: 'app-landind-page',
  templateUrl: './landind-page.component.html',
  styleUrls: ['./landind-page.component.css']
})
export class LandindPageComponent implements OnInit {

constructor(private peliculasService: PeliculasService){

}

 ngOnInit(): void {
  this.cargarDatos();
}

peliculasEnCines: PeliculaDTO[];
peliculasProximosEstrenos: PeliculaDTO[];

cargarDatos(){
  this.peliculasService.obtenerLandingPage().subscribe(landingPage => {
    this.peliculasEnCines = landingPage.enCines;
    this.peliculasProximosEstrenos = landingPage.proximosEstrenos;
  });
}

borrado(){
  this.cargarDatos();
}
  }