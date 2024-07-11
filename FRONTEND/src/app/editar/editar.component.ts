import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import {FormBuilder, Validators, ReactiveFormsModule, FormGroup, FormControl} from '@angular/forms';
import { PeliculasService } from '../peliculas.service';
import { GenerosService } from '../generos.service';


@Component({
  selector: 'app-editar',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './editar.component.html',
  styleUrl: './editar.component.css'
})
export class EditarComponent implements OnInit{
  @Input("id_pelicula") id_pelicula: number = 0; 
  generos: any = [];
  
  formulario: FormGroup = new FormGroup({
    name: new FormControl(''),
    description : new FormControl(''),
    image : new FormControl(''),
    rating : new FormControl(''),
    genres : new FormControl(''),
    inTheaters : new FormControl(''),
  });



  constructor(private formBuilder: FormBuilder, private peliculasService: PeliculasService, private router: Router, private generosService:GenerosService) { }

  ngOnInit() {
    this.generosService.getGeneros().subscribe(
      (response:any) => {
        console.log(response);
        this.generos = response
      }); 
      
    this.peliculasService.getPelicula(this.id_pelicula).subscribe(
      (response:any) => {
        console.log(response);

        this.formulario = this.formBuilder.group({
          name: [response.name, Validators.required],
          description: [response.description, Validators.required],
          image: [response.image, Validators.required],
          rating: [response.rating, Validators.required],
          genres: [response.genres, Validators.required],
          inTheaters: [response.inTheaters], // Valor predeterminado en false y sin Validators.required
        });
        
      }
    );
  }

  onSubmit(): void {
    
    if (this.formulario.valid) {
      const pelicula = {
        name: this.formulario.value.name,
        description: this.formulario.value.description,
        image: this.formulario.value.image,
        rating: this.formulario.value.rating,
        genres:  this.formulario.value.genres,
        inTheaters: this.formulario.value.inTheaters,
      };
      
      alert("Pelicula actualizada!");
      this.peliculasService.crearPelicula(pelicula).subscribe(
        (response) => {
          console.log(response);
          
          this.router.navigate(['/administrar']);
        }
      );
    } else {
      alert("Algo salió mal, verifica los datos ingresados.");
    }
  }

}
