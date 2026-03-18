import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landind-page',
  templateUrl: './landind-page.component.html',
  styleUrls: ['./landind-page.component.css']
})
export class LandindPageComponent implements OnInit {

 ngOnInit(): void {
  
  {
    this.peliculasEnCines = [{
    titulo: 'Spider-Man',
    fechaLanzamiento: new Date(),
    precio: 2000.99,
    poster:'https://i.ebayimg.com/images/g/hhcAAOSwz4Zdab17/s-l1200.jpg'
  },
{
    titulo: 'BatMan',
    fechaLanzamiento: new Date('2016-04-10'),
    precio: 1400.99,
    poster:'https://m.media-amazon.com/images/M/MV5BN2U3NmZjMTYtY2JhOS00NzU4LWJkMDAtZjFmZjAyN2ZlMTMxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg'

  }]
  }

  }
  title = 'El valor que yo quiera';

  peliculasEnCines;

  peliculasProximosestrenos =[]

  }