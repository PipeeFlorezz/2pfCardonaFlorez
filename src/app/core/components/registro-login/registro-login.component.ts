import { style } from '@angular/animations';
import { Component, NgModuleFactory, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormArray, FormControl, Validators, ValidatorFn, AbstractControl, FormGroup, NgForm } from '@angular/forms'
import { Admin, alumno } from '../../../models/models';
import { Router } from '@angular/router';
import { AlumnosService } from '../../../alumnos/Services/alumnos.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-registro-login',
  templateUrl: './registro-login.component.html',
  styleUrls: ['./registro-login.component.css']
})
export class RegistroLoginComponent implements OnInit, OnDestroy {

  public admin: Admin;
  public alumno: alumno;
  public Admin!: boolean;
  public Alumno!: boolean;
  public primerForm: boolean;
  public Usuario!: string;
  public subscripcion!: Subscription;
  constructor(
    private router: Router,
    private alumnoServices: AlumnosService
  ) { 
    this.admin = {nombre: '', clave: ''};
    this.alumno = {id: 0, nombre: '', apellido: '', edad: 0, pais: '', sexo: ''}
    this.primerForm = true;

  }

  ngOnInit(): void {
    console.log(document.querySelector('.acceder'));
  }
  
  ngOnDestroy(): void {
    //if(this.subscripcion) this.subscripcion.unsubscribe();

  }

  formUsuario(primerForm: NgForm){
    console.log(primerForm.value.Usuario);
    let tipoUsuario = this.Usuario.toLowerCase()


    console.log(this.Usuario, tipoUsuario);
    if(tipoUsuario == 'administrador'){
      this.primerForm = false;
      this.Alumno = false;
      this.Admin = true;
    }else if(tipoUsuario == 'alumno'){
      this.primerForm = false;
      this.Alumno = true;
      this.Admin = false;
    }


  }

  adminForm(adminForm: NgForm){
    console.log(this.admin);
    console.log(adminForm.value);
    this.primerForm = false;
    this.Alumno = false;
    this.Admin = false;  
    this.alumno.nombre = 'No hay alumno';
    if(this.alumno.nombre == 'No hay alumno'){
      localStorage.setItem('usuarioLogueado', JSON.stringify(this.admin));
    }
    setTimeout(() => {
      document.querySelector('.acceder')?.classList.add('cerrar');
    }, 300);
    this.router.navigate(['/alumnos']);
  }
  

  formAlumno(alumnoForm: NgForm){
    console.log(this.alumno);
    console.log(alumnoForm.value);
    this.primerForm = false;
    this.Alumno = false;
    this.Admin = false;
    this.admin.nombre = 'No hay administrador';
    this.llamarAlumnos();
    if(this.admin.nombre === 'No hay administrador'){
      localStorage.setItem('usuarioLogueado', JSON.stringify(this.alumno));
    }
    setTimeout(() => {
      document.querySelector('.acceder')?.classList.add('cerrar');
    }, 300);
    this.router.navigate(['/alumnos']);
  }

  llamarAlumnos(){
    this.subscripcion = this.alumnoServices.llamarAlumnosObservable()
      .subscribe(
        res => {
          console.log(res);
          this.alumno.id = res.length + 1;
        }
      )
  }

}
