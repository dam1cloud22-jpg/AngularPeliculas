import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-filtro-peliculas',
  templateUrl: './filtro-peliculas.component.html',
  styleUrls: ['./filtro-peliculas.component.css']
})
export class FiltroPeliculasComponent implements OnInit {

  constructor(private formBuilder: FormBuilder) { }

  form: FormGroup;

  generos = [
    {id: 1, nombre: 'Drama'},
    {id: 2, nombre: 'Accion'}

  ]

  ngOnInit(): void {
  this.form = this.formBuilder.group({           
    titulo: '',
    generoID: 0,
    proximosEstrenos: false,
    enCines: false
  });
}
}
