import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PeliculasService } from '../peliculas.service';
import { GenerosService } from '../generos.service';

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent implements OnInit{
  constructor(private peliculasService: PeliculasService, private generosService:GenerosService) { }

  peliculas: any = [];
  generos: any = [];

  ngOnInit() {
    this.generosService.getGeneros().subscribe(
      (response) => {
        this.generos = response;
        console.log(this.generos);
      }
    );

    this.peliculasService.getPeliculas().subscribe(
      (response) => {
        this.peliculas = response;

        console.log(this.peliculas);
      }
    );
  }
}
