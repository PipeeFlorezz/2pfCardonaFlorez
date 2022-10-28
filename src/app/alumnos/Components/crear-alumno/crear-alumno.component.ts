import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormArray, FormControl, Validators, ValidatorFn, AbstractControl, FormGroup } from '@angular/forms'
import { MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { alumno } from '../../../models/models';
import { AlumnosService } from '../../Services/alumnos.service';

@Component({
  selector: 'app-crear-alumno',
  templateUrl: './crear-alumno.component.html',
  styleUrls: ['./crear-alumno.component.css']
})
export class CrearAlumnoComponent implements OnInit, OnDestroy {

  public formAlumno: FormGroup;
  public alumnos!: alumno[];
  public id!: number;
  public subscripcion!: Subscription;

  constructor(
    private alumnosSrrvices: AlumnosService,
    private formBuilder: FormBuilder,
    private matDialogRef: MatDialogRef<CrearAlumnoComponent>
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
    this.traerAlumnos()
    let datos: any = localStorage.getItem('datasource');
    console.log(JSON.parse(datos));
    let datosParciales: any = JSON.parse(datos);
    console.log(datosParciales.length);
  }

  ngOnDestroy(): void {
    this.subscripcion.unsubscribe();
  }


  crearAlumno(){

    let datos: any = localStorage.getItem('datasource');
    console.log(JSON.parse(datos));
    let datosParciales: any = JSON.parse(datos);
    console.log(datosParciales.length);

    console.log(this.formAlumno.value);
    let sexo: any, data:any = this.formAlumno.value;
    console.log(data)
    //data.id = datosParciales.length + 1;
    sexo = data.sexo.toLocaleLowerCase()
    console.log(sexo);
    data.sexo = sexo;
    console.log(data)
    this.matDialogRef.close(data)
  }

  traerAlumnos(){
    this.subscripcion = this.alumnosSrrvices.llamarAlumnosObservable()
    .subscribe(
      res => {
        console.log(res);
        this.alumnos = res;
        console.log(this.alumnos);
        localStorage.setItem('datasource', JSON.stringify(this.alumnos))
      }
    )
  }

}
