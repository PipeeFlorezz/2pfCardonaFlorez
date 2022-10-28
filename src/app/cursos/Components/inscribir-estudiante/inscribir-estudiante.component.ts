import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormArray, FormControl, Validators, ValidatorFn, AbstractControl, FormGroup } from '@angular/forms'
import { CursosService } from 'src/app/cursos/Services/cursos.service';
import { Subscription } from 'rxjs';
import { alumno, Curso } from '../../../models/models';

@Component({
  selector: 'app-inscribir-estudiante',
  templateUrl: './inscribir-estudiante.component.html',
  styleUrls: ['./inscribir-estudiante.component.css']
})
export class InscribirEstudianteComponent implements OnInit {

  public formAlumno: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private matDialogRef: MatDialogRef<InscribirEstudianteComponent>

  ) { 
    this.formAlumno = this.formBuilder.group({
      nombre: ['', [Validators.required]],
      apellido: ['', [Validators.required]],
      edad: ['', [Validators.required]],
      pais: ['', [Validators.required]],
      sexo: ['', [Validators.required]]
    })
  }

  ngOnInit(): void {
  }

  inscribirAlumno(){
    console.log(this.formAlumno.value);
    let data: any = this.formAlumno.value
    this.matDialogRef.close(data);
  }

}
