import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../peliculas.service';
import { GenerosService } from '../generos.service';

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css'
})
export class PeliculasComponent implements OnInit{
  peliculas: any = [];
  generos: any = [];
  estrellas: any = [];

  
  constructor(private peliculasService: PeliculasService, private generosService:GenerosService) { }

  ngOnInit(): void {
    this.peliculasService.getPeliculas().subscribe((data: any) => {
      this.peliculas = data;
    });
    this.generosService.getGeneros().subscribe((data: any) => {
      this.generos = data;
    });
  }

  getListaNombreGeneros(idGeneros: []): string {
    let generos:any = [];
    idGeneros.forEach((id: number) => {
      generos.push(this.generos.find((generoObj: any) => generoObj.id == id).name);
    });
    return generos
  }

  contadorEstrellas(contador: number) {
    this.estrellas = new Array(5).fill(false);
    this.estrellas.fill(true, 0, contador);
    return this.estrellas;
  }



}
