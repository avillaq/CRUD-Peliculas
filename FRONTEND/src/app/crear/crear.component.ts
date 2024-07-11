import { Component, OnInit } from '@angular/core';
import { RouterLink, Router } from '@angular/router';
import {FormBuilder, Validators, ReactiveFormsModule, FormGroup, FormControl} from '@angular/forms';
import { PeliculasService } from '../peliculas.service';

@Component({
  selector: 'app-crear',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './crear.component.html',
  styleUrl: './crear.component.css'
})
export class CrearComponent implements OnInit {
  formulario: FormGroup = new FormGroup({
    name: new FormControl(''),
    description : new FormControl(''),
    image : new FormControl(''),
    rating : new FormControl(''),
    genres : new FormControl(''),
    inTheaters : new FormControl(''),
  });

  constructor(private formBuilder: FormBuilder, private peliculasService: PeliculasService, private router: Router) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required],
      rating: ['', Validators.required],
      genres: ['', Validators.required],
      inTheaters: [false], // Valor predeterminado en false y sin Validators.required
    });
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
      
      alert("Boletos Comprados Exitosamente!");
      this.peliculasService.crearPelicula(pelicula).subscribe(
        (response) => {
          this.router.navigate(['/']); // Redirige al inicio
        }
      );
    } else {
      alert("Por favor, llena todos los campos");
    }
  }

  
}
