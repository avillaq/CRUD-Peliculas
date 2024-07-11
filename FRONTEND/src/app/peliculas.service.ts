import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {
  constructor( private http: HttpClient ) {}

  getPeliculas() {
    return this.http.get('http://127.0.0.1:8000/api/movies/')
  }
  getPelicula(id: number) {
    return this.http.get("http://127.0.0.1:8000/api/movies/" + id + "/") 
  }
  crearPelicula(pelicula: any) {
    return this.http.post("http://127.0.0.1:8000/api/movies/", pelicula);
  }
}