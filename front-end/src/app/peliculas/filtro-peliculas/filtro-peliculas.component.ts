import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-filtro-peliculas',
  templateUrl: './filtro-peliculas.component.html',
  styleUrls: ['./filtro-peliculas.component.css']
})
export class FiltroPeliculasComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,
    private location: Location, private activatedRoute: ActivatedRoute
  ) { }

  form: FormGroup;

  generos = [
    {id: 1, nombre: 'Drama'},
    {id: 2, nombre: 'Accion'},
    {id: 3, nombre: 'Comedia'}
  ]

  peliculas = [
    {titulo: 'Spider Man FFH', enCines: false, proximosEstrenos:true, generos:[1,2],poster:'https://www.emp-online.es/dw/image/v2/BBQV_PRD/on/demandware.static/-/Sites-master-emp/default/dw34eb4cb5/images/4/5/0/7/450759a.jpg?sfrm=png'},
    {titulo: 'Moana', enCines: true, proximosEstrenos:false, generos:[3],poster:'https://m.media-amazon.com/images/I/81YKTpSuZBL._AC_UF1000,1000_QL80_.jpg'},
    {titulo: 'Inception', enCines: false, proximosEstrenos:false, generos:[1,3],poster:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_bTru3smhD-EqL3DlDzuUBrkFW7aEW9qQ9Q&s'}
  ]

  peliculasOriginal = this.peliculas;

  fromularioOriginal ={           
    titulo: '',
    generoID: 0,
    proximosEstrenos: false,
    enCines: false
  };

  ngOnInit(): void {
  this.form = this.formBuilder.group(this.fromularioOriginal);
    this.leerValoresURL();
    this.buscarPeliculas(this.form.value);
  this.form.valueChanges
    .subscribe(valores=>{
      this.peliculas = this.peliculasOriginal;
      this.buscarPeliculas(valores);
      this.escribirParametrosBusquedaEnURL();
    })
}


private leerValoresURL(){
  this.activatedRoute.queryParams.subscribe(params=>{
    var objeto: any = {};

    if (params.titulo){
        objeto.titulo = params.titulo;
      }

      if (params.generoID){
        objeto.generoId = Number(params.generoID);
      }

      if (params.proximosEstrenos){
        objeto.proximosEstrenos = params.proximosEstrenos;
      }

      if (params.enCines){
        objeto.enCines = params.enCines;
      }

      this.form.patchValue(objeto);

    });
}


private escribirParametrosBusquedaEnURL(){
var queryStrings = [];

var valoresFormulario = this.form.value;

if (valoresFormulario.titulo){
  queryStrings.push(`titulo=${valoresFormulario.titulo}`);
}

if (valoresFormulario.generoID != '0'){
  queryStrings.push(`generoID=${valoresFormulario.generoID}`);
}

if (valoresFormulario.proximosEstrenos){
  queryStrings.push(`proximosEstrenos=${valoresFormulario.proximosEstrenos}`);
}

if (valoresFormulario.enCines){
  queryStrings.push(`enCines=${valoresFormulario.enCines}`);
}

this.location.replaceState('peliculas/buscar', queryStrings.join('&'));

}


buscarPeliculas(valores: any){
  if(valores.titulo){
    this.peliculas = this.peliculas.filter(pelicula => pelicula.titulo.indexOf(valores.titulo) !== -1)
  }

  if(valores.generoID !== 0){
     this.peliculas = this.peliculas.filter(pelicula => pelicula.generos.indexOf(valores.generoID) !== -1)
  }

  if(valores.proximosEstrenos){
     this.peliculas = this.peliculas.filter(pelicula => pelicula.proximosEstrenos)
  }

  if(valores.enCines){
     this.peliculas = this.peliculas.filter(pelicula => pelicula.enCines)
  }
}
limpiar(){
  this.form.patchValue(this.fromularioOriginal);
}
}
