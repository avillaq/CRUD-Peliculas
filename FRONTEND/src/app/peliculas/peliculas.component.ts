import { Component, OnInit } from '@angular/core';
import { PeliculasService } from '../peliculas.service';

@Component({
  selector: 'app-peliculas',
  standalone: true,
  imports: [],
  templateUrl: './peliculas.component.html',
  styleUrl: './peliculas.component.css'
})
export class PeliculasComponent implements OnInit{
  peliculas: any = [];
  estrellas: any = [];

  
  constructor(private peliculasService: PeliculasService) { }

  ngOnInit(): void {
    this.peliculasService.getPeliculas().subscribe((data: any) => {
      this.peliculas = data;
    });
  }

  contadorEstrellas(contador: number) {
    this.estrellas = new Array(5).fill(false);
    this.estrellas.fill(true, 0, contador);
    return this.estrellas;
  }

}
