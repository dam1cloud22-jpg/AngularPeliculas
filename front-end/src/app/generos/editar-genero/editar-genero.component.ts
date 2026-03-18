import { Component, OnInit } from '@angular/core';
import { generoCreacionDTO } from '../genero';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editar-genero',
  templateUrl: './editar-genero.component.html',
  styleUrls: ['./editar-genero.component.css']
})
export class EditarGeneroComponent implements OnInit {

  constructor(private router: Router) { }

  modelo: generoCreacionDTO = {nombre: 'Drama'};





  guardarCambios(genero: generoCreacionDTO){
    // ... guardar los cambios
    console.log(genero);
    this.router.navigate(['/generos']);
  }


  ngOnInit(): void {
  }

}
