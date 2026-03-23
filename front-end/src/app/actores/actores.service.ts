import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { actorCreacionDTO } from './actor';
import { formatearFecha } from '../utilidades/utilidades';

@Injectable({
  providedIn: 'root'
})
export class ActoresService {

  constructor(private http: HttpClient) { }

  private apiURL = environment.apiUrl + 'actores';

  public crear(actor: actorCreacionDTO) {
  const formData = this.construirFormData(actor);
  return this.http.post(this.apiURL, formData);
}

private construirFormData(actor: actorCreacionDTO): FormData {
  const formData = new FormData();
  formData.append('nombre', actor.nombre);
  if (actor.biografia){
    formData.append('biografia', actor.biografia);
  }
  if (actor.fechaNacimiento){
    formData.append('fechaNacimiento', formatearFecha(actor.fechaNacimiento));
  }
  if (actor.foto){
    formData.append('foto', actor.foto);
  }

  return formData;
}
}