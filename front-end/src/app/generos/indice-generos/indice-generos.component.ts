import { Component, OnInit } from '@angular/core';
import { GenerosService } from '../generos.service';

@Component({
  selector: 'app-indice-generos',
  templateUrl: './indice-generos.component.html',
  styleUrls: ['./indice-generos.component.css']
})
export class IndiceGenerosComponent implements OnInit {

  constructor(private GenerosService: GenerosService) { }

  ngOnInit(): void {
    this.GenerosService.obtenerTodos()
    .subscribe(generos =>{
      console.log(generos);
    }, error => console.log(error));
  }

}
