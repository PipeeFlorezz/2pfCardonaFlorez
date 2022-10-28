import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../angularMaterial/material.module';
import { AlumnosComponent } from './Components/alumnos/alumnos.component';
import { CrearAlumnoComponent } from './Components/crear-alumno/crear-alumno.component';
import { EliminarAlumnoComponent } from './Components/eliminar-alumno/eliminar-alumno.component';
import { AlumnosService } from './Services/alumnos.service';
import { AlumnosGeneroDirective } from './Directivas/alumnos-genero.directive';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    AlumnosComponent,
    CrearAlumnoComponent,
    EliminarAlumnoComponent,
    AlumnosGeneroDirective
  ],
  imports: [
    CommonModule,
    AlumnosRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    SharedModule
  ],
  providers: [
    AlumnosService
  ]
})
export class AlumnosModule { }
