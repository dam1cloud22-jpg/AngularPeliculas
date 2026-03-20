import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { MatTable } from '@angular/material/table';

@Component({
  selector: 'app-autocomplete-actores',
  templateUrl: './autocomplete-actores.component.html',
  styleUrls: ['./autocomplete-actores.component.css']
})
export class AutocompleteActoresComponent implements OnInit {

  constructor() { }


  control: FormControl = new FormControl();
  actores = [
    {nombre: 'Tom Holland', personaje:'', foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRc8BtQfo7DYe9gLoiXmFYOE9JfIum5cpwrg&s'},
    {nombre: 'Tom Hanks',  personaje:'', foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUaFiHDyZl4ycl99h44EmE6VmaEwKkh5qhEA&s'},
    {nombre: 'Samuel L. Jackson',  personaje:'', foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu3fds18q93LqvkArnwDm6CAKcTEhG3WVRfg&s'},


  ]

  actoresOriginal = this.actores;

  actoresSeleccionados = [];

  columnasAMostrar = ['imagen', 'nombre', 'personaje', 'acciones'];

  @ViewChild(MatTable) table: MatTable<any>;


  ngOnInit(): void {
    this.control.valueChanges.subscribe(valor => {
      this.actores = this.actoresOriginal;
      this.actores = this.actores.filter(actor => actor.nombre.indexOf(valor) !== -1);
    });
}

  optionSelected(event: MatAutocompleteSelectedEvent){
    console.log(event.option.value);
    this.actoresSeleccionados.push(event.option.value);
    this.control.patchValue('');

    if(this.table !== undefined){
      this.table.renderRows();
    }
  }

  eliminar(actor){
    const indice = this.actoresSeleccionados.findIndex(a => a.nombre === actor.nombre);
    this.actoresSeleccionados.splice(indice, 1);
    this.table.renderRows();
  }

}
