import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CursosService } from '../../Services/cursos.service';
import { alumno, Curso } from '../../../models/models'
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { InscribirEstudianteComponent } from '../inscribir-estudiante/inscribir-estudiante.component'
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-curso-profile',
  templateUrl: './curso-profile.component.html',
  styleUrls: ['./curso-profile.component.css']
})
export class CursoProfileComponent implements OnInit, OnDestroy {

  public cursos!: Curso[];
  public curso: Curso;
  public estudiantes!: alumno[];
  public displayedColumns: string[];
  public id!: number | any;
  public subscripcion!: Subscription

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute,
    private cursosService: CursosService
  ) {
    this.displayedColumns = ['nombre', 'apellido', 'edad', 'pais', 'sexo'];
    //this.cursos = this.cursosService.llamarCursos();
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
    this.route.params.subscribe((params: any) => {
      console.log(params['id']);
      console.log(this.cursos);
      this.id = parseInt(params['id']);
      this.llamarCurso(this.id);
    });
  }

  ngOnDestroy(): void {
    this.subscripcion.unsubscribe();
  }

  inscribirme(): void {
    let dialog = this.dialog.open(InscribirEstudianteComponent, {
      width: '45%',
      height: '80%'
    });

    dialog.beforeClosed().subscribe(res => {
      console.log(res);
      console.log(typeof res)
      if(res === undefined) return;
      if(res.length == 0) return;
      if(res.nombre.length == 0) return;
      res.id = this.estudiantes.length + 1;
      this.estudiantes.unshift(res);
      localStorage.setItem('estudiantes' + this.curso.nombre.toUpperCase(), JSON.stringify(this.estudiantes));
      let data: any = localStorage.getItem('estudiantes' + this.curso.nombre.toUpperCase());
      console.log(data);
      this.estudiantes = JSON.parse(data);
      this.curso.estudiantes = this.estudiantes;
      //this.router.navigate(['/cursoPerfil/', this.curso.id]);
    })
  }

  llamarCurso(id: any){
    this.subscripcion = this.cursosService.llamarCurso(id).subscribe(
      res => {
        console.log(res)
        this.cursos = res;
        console.log(this.cursos);
        this.curso = this.cursos[0];
        let result: alumno[], data: any = localStorage.getItem('estudiantes' + this.curso.nombre.toUpperCase());
        result = JSON.parse(data);
        if(result){
          this.estudiantes = result;
        }else {
          this.estudiantes = this.curso.estudiantes;
        }
      }
    )
  }
  
}
