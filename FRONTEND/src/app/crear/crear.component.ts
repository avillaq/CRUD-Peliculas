import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import {FormBuilder, Validators, ReactiveFormsModule, FormGroup, FormControl} from '@angular/forms';

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
    url_image : new FormControl(''),
    ranking : new FormControl(''),
    genres : new FormControl(''),
    inTheaters : new FormControl(''),
  });

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formulario = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      url_image: ['', Validators.required],
      ranking: ['', Validators.required],
      genres: ['', Validators.required],
      inTheaters: ['', Validators.required],
    });
    
  }

  onSubmit(): void {
    console.log(this.formulario.value);
    
    if (this.formulario.valid) {
      console.log(this.formulario.value);
      
      alert("Boletos Comprados Exitosamente!");
    } else {
      alert("Por favor, llena todos los campos");
    }
  }

  
}
