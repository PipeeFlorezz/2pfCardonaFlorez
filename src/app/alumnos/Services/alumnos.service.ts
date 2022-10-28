import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { alumno } from '../../models/models';

@Injectable()
export class AlumnosService {

  public Alumnos: alumno[];
  public observable: Observable<alumno[]>
  public mySubject$!: BehaviorSubject<alumno[]>

  constructor(
  ) { 
    this.Alumnos = [{
      id: 1,
      nombre: 'Mauricio',
      apellido: 'Rios Velez',
      edad: 43,
      pais: 'Colombia', 
      sexo: 'Masculino'
    },
    {
        id: 2,
        nombre: 'Manuela',
        apellido: 'Ramirez',
        edad: 22,
        pais: 'Colombia',
        sexo: 'Femenino'
    },{
      id: 3,
      nombre: 'Manuela',
      apellido: 'Rios Velez',
      edad: 35,
      pais: 'Honduras',
      sexo: 'Femenino'
    },{
      id: 4,
      nombre: 'Martha',
      apellido: 'Carmona Yepes',
      edad: 29,
      pais: 'Guatemala',
      sexo: 'Femenino'
    },{
      id: 5,
      nombre: 'Rene',
      apellido: 'Higuita',
      edad: 64,
      pais: 'Colombia',
      sexo: 'Masculino'
    },
    {
      id: 6,
      nombre: 'Freddy',
      apellido: 'Tao',
      edad: 69,
      pais: 'Colombia',
      sexo: 'Masculino'
    },
    {
        id: 7,
        nombre: 'Pedro',
        apellido: 'Aguirre',
        edad: 39,
        pais: 'Argentina',
        sexo: 'Masculino'
    }
    ]

    this.observable = new Observable<alumno[]>((susbcriptor) => {
      susbcriptor.next(this.Alumnos);
    });

    this.mySubject$ = new BehaviorSubject(this.Alumnos);

  }

  llamarAlumnosSubject(): Observable<alumno[]> {
    return this.mySubject$.asObservable();
  }

  llamarAlumnosObservable(): Observable<alumno[]> {
    return this.observable;
  }

  llamarlumnosPromise(): Promise<alumno[]> {
    return new Promise((resolve, reject) => {
      resolve(this.Alumnos);
    });
  }

  
}

