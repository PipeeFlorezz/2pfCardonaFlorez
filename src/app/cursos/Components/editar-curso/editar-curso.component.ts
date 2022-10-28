import { Component, OnInit, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { Curso, alumno } from '../../../models/models'
import { CursosService } from 'src/app/cursos/Services/cursos.service';

@Component({
  selector: 'app-editar-curso',
  templateUrl: './editar-curso.component.html',
  styleUrls: ['./editar-curso.component.css']
})
export class EditarCursoComponent implements OnInit, OnDestroy {

  public Cursos!: Curso[];
  public cursos!: Curso[];
  public curso: Curso;
  public cursos$!: Observable<Curso[]>
  public subscripcion!: Subscription

  constructor(
    private route: ActivatedRoute,
    private cursosService: CursosService,
    private router: Router
  ) { 
    this.curso = {
      id: 0,
      profesor: '', nombre: '',
      inicia: new Date(),
      finaliza: new Date(),
      estudiantes: [{ id: 0, nombre: '', apellido: '', edad: 0, pais: '', sexo: '' }],
      imagen: '',
      inscripcion: true
    }
  }

  ngOnInit(): void {
    //this.llamarCursos();
    this.route.params.subscribe((params) => {
      console.log(params['id']);
      let id: number = parseInt(params['id']);
      this.llamarCurso(id);
    })
  }

  ngOnDestroy(): void {
    this.subscripcion.unsubscribe();
  }



  llamarCurso(id: number): void {
    this.subscripcion = this.cursosService.llamarCurso(id).subscribe(
      res => {
        this.cursos = res;
        console.log(res)
        this.curso = this.cursos[0];
        console.log(this.curso);
      }
    )
  }

  editCurso(form: NgForm){
    console.log(form.value.inicia)
    let curso: Curso = {
      id: this.curso.id,
      profesor: form.value.profesor,
      nombre: form.value.nombre,
      inicia: form.value.inicia,
      finaliza: form.value.finaliza,
      estudiantes: this.curso.estudiantes,
      imagen: this.curso.imagen,
      inscripcion: this.curso.inscripcion
    }
    this.cursosService.editarCurso(curso);
    console.log(this.Cursos);
    //localStorage.setItem('cursosActualizados', JSON.stringify(this.Cursos$))
    this.router.navigate(['/cursos']);
  }

  llamarCursos(){
    this.cursosService.llamarCursos().subscribe(
      res => {
        this.Cursos = res;
        console.log(this.Cursos);
      }
    )
  }

}
