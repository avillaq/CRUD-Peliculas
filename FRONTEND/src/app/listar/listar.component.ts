import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PeliculasService } from '../peliculas.service';

@Component({
  selector: 'app-listar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './listar.component.html',
  styleUrl: './listar.component.css'
})
export class ListarComponent implements OnInit {
  constructor(private peliculasService: PeliculasService) { }

  peliculas: any = [];

  ngOnInit() {
    this.peliculasService.getPeliculas().subscribe(
      (response) => {
        this.peliculas = response;

        console.log(this.peliculas);
      }
    );
  }

  getListaNombreGeneros(generos:any []): string {
    let generosCadena = "";
    generos.forEach((gen: any) => {
      generosCadena += gen.name + ", ";
    });
    return generosCadena.slice(0, -2);
  }

  eliminarPelicula(id: number) {
    if (confirm("¿Está seguro de eliminar la película?")) {
      this.peliculasService.eliminarPelicula(id).subscribe(
        (response) => {
          this.peliculas = this.peliculas.filter((pelicula: any) => pelicula.id != id);
        })
    }
  }
}
