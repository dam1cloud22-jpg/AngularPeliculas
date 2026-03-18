
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-ranking',
  templateUrl: './ranking.component.html',
  styleUrls: ['./ranking.component.css']
})
export class RankingComponent implements OnInit {

  constructor() { }

  @Input()
  MaximoRating = 5;

  @Input()
  RatingSeleccionado = 0;


  @Output()
  rated: EventEmitter<number> = new EventEmitter<number>();
  maximoRatingArr = [];
  votado = false;
  ratingAnterior;


  ngOnInit(): void {
    this.maximoRatingArr = Array(this.MaximoRating).fill(0);
  }
  ManejarMouseEnter(index : number): void{
    this.RatingSeleccionado = index + 1;
  }

  ManejarMouseLeave(){
    if(this.ratingAnterior !== 0){
      this.RatingSeleccionado = this.ratingAnterior;
    }else{
      this.RatingSeleccionado = 0;
    }

  }

  rate(index : number): void{
    this.RatingSeleccionado = index + 1;
    this.votado = true;
    this.ratingAnterior = this.RatingSeleccionado;
    this.rated.emit(this.RatingSeleccionado);
  }


}