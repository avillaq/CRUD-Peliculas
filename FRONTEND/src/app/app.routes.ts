import { Routes } from '@angular/router';
import { PeliculasComponent } from './peliculas/peliculas.component';
import { ListarComponent } from './listar/listar.component';
import { CrearComponent } from './crear/crear.component';
import { EditarComponent } from './editar/editar.component';

export const routes: Routes = [
    { path: "", component: PeliculasComponent },
    { path: "administrar", component: ListarComponent},
    { path: "administrar/crear", component: CrearComponent},
    { path: "administrar/editar/:id_pelicula", component: EditarComponent},
];
