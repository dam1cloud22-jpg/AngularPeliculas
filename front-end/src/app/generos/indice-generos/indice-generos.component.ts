import { Component, OnInit } from '@angular/core';
import { GenerosService } from '../generos.service';
import { generoDTO } from '../genero';
import { HttpResponse } from '@angular/common/http';
import { PageEvent } from '@angular/material/paginator';


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
  this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
}

cargarRegistros(pagina: number, cantidadElementosAMostrar){
  this.GenerosService.obtenerPaginado(pagina,cantidadElementosAMostrar)
  .subscribe((respuesta: HttpResponse<generoDTO[]>) => {
    this.generos = respuesta.body;
    console.log(respuesta.headers.get("cantidadTotalRegistros"));
    this.cantidadTotalregistros = respuesta.headers.get("cantidadTotalregistros")
  }, error => console.error(error));
}

actualizarPaginacion(datos: PageEvent){
  this.paginaActual = datos.pageIndex + 1;
  this.cantidadRegistrosAMostrar = datos.pageSize;
  this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar)
}

borrar(id : number){
  this.GenerosService.borrar(id).subscribe(()=>{
    this.cargarRegistros(this.paginaActual, this.cantidadRegistrosAMostrar);
  }, error => console.error(error));
}

}


