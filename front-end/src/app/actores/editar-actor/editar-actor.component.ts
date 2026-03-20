import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { actorCreacionDTO, actorDTO } from '../actor';

@Component({
  selector: 'app-editar-actor',
  templateUrl: './editar-actor.component.html',
  styleUrls: ['./editar-actor.component.css']
})
export class EditarActorComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }
  modelo: actorDTO = {nombre: 'Felipe', fechaNacimiento: new Date(), foto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRc8BtQfo7DYe9gLoiXmFYOE9JfIum5cpwrg&s'}
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      // alert(params.id);a
    })
  }

  guardarCambios(actor: actorCreacionDTO){
    console.log(actor);

  }
}