import { Component, OnInit } from '@angular/core';
import { PeliculaDTO } from '../pelicula';

@Component({
  selector: 'app-editar-pelicula',
  templateUrl: './editar-pelicula.component.html',
  styleUrls: ['./editar-pelicula.component.css']
})
export class EditarPeliculaComponent implements OnInit {

  constructor() { }

  modelo: PeliculaDTO = {titulo: 'Spider-Man', trailer: 'abc', enCines: true, resumen: 'cosa', 
fechaLanzamiento: new Date(), poster: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_LV_Nzbf8GcTyrJgiM__h6_SniVj8oERDkBTKpUfeFkcDxzzKTO3iWp2SeHVJBO92N-ZSJTcah59JvkaE6r-_FTQ2G3FPiZaUtUQznQ&s'}
  ngOnInit(): void {
  }


  guardarCambios(pelicula: PeliculaDTO){
    console.log(pelicula);
  }
}
