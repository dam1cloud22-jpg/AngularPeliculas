import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../peliculas.service';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { PeliculaDTO } from '../pelicula';

@Component({
  selector: 'app-detalle-pelicula',
  templateUrl: './detalle-pelicula.component.html',
  styleUrls: ['./detalle-pelicula.component.css']
})
export class DetallePeliculaComponent implements OnInit {

  constructor(
    private peliculasService: PeliculasService,
    private activatedRoute: ActivatedRoute, 
    private sanitazer: DomSanitizer
  ) { }

  pelicula: PeliculaDTO;
  fechaEstreno: Date;
  trailerURL: SafeResourceUrl | string;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.peliculasService.obtenerPorId(params.id).subscribe(pelicula => {
        console.log(pelicula);
        this.pelicula = pelicula;
        this.fechaEstreno = new Date(this.pelicula.fechaEstreno);
        this.trailerURL = this.generarURLYoutubeEmbed(this.pelicula.trailer);
      })
    })
  }

  generarURLYoutubeEmbed(url: any): SafeResourceUrl | string {
    if (!url){
      return '';
    }

    // Evita el error si la URL no es de YouTube o no tiene el formato v=
    if (!url.includes('v=')) {
      return '';
    }

    var video_id = url.split('v=')[1];
    var posicionAmpersand = video_id.indexOf('&');
    if (posicionAmpersand !== -1){
      video_id = video_id.substring(0, posicionAmpersand);
    }
    
    return this.sanitazer.bypassSecurityTrustResourceUrl(`https://www.youtube.com/embed/${video_id}`);
  }

}