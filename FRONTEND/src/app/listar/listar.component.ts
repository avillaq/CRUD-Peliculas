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
      }
    );

    this.peliculasService.getPeliculas().subscribe(
      (response) => {
        this.peliculas = response;

        console.log(this.peliculas);
      }
    );
  }

  getListaNombreGeneros(idGeneros : []): string {
    let generos = "";
    idGeneros.forEach((id:number) => {
      generos += this.generos.find((generoObj:any) => generoObj.id == id).name + ", ";
    });
    return generos.slice(0, -2);
  }
}
