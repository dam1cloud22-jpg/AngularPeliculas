import { Component, OnInit } from '@angular/core';
import { GenerosService } from '../generos.service';
import { generoDTO } from '../genero';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-indice-generos',
  templateUrl: './indice-generos.component.html',
  styleUrls: ['./indice-generos.component.css']
})
export class IndiceGenerosComponent implements OnInit {

  constructor(private GenerosService: GenerosService) { }

  generos: generoDTO[];
  AccionesAMostrar = ['id' , 'nombre', 'acciones'];
  cantidadTotalregistros;
  paginaActual= 1;
  cantidadRegistrosAMostrar = 10;

  ngOnInit(): void {
  this.GenerosService.obtenerTodos()
  .subscribe((respuesta: HttpResponse<generoDTO[]>) => {
    this.generos = respuesta.body;
    console.log(respuesta.headers.get("cantidadTotalRegistros"));
    this.cantidadTotalregistros = respuesta.headers.get("cantidadTotalregistros")
  }, error => console.error(error));
}

}


