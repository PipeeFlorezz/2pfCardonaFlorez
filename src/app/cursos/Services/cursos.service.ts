import { ObserversModule } from '@angular/cdk/observers';
import { Injectable } from '@angular/core';
import { BehaviorSubject, filter, map, Observable, Subject } from 'rxjs';
import { Curso } from '../../models/models';
@Injectable()
export class CursosService {

    public cursos: Curso[];
    public subjectCursos$!: BehaviorSubject<Curso[]>;

    constructor() {
        this.cursos = [{
            id: 1,
            profesor: 'Juanita del Valle',
            nombre: 'Cocina desde casa',
            inicia: new Date(2023, 7, 19),
            finaliza: new Date(2023, 9, 19),
            estudiantes: [
                {   
                    id: 1,
                    nombre: 'Freddy',
                    apellido: 'Tao',
                    edad: 69,
                    pais: 'Colombia',
                    sexo: 'Masculino'
                },
                {
                    id: 2,
                    nombre: 'Mauricio',
                    apellido: 'Rios Velez',
                    edad: 43,
                    pais: 'Colombia',
                    sexo: 'Masculino'
                }, {
                    id: 3,
                    nombre: 'Manuela',
                    apellido: 'Rios Velez',
                    edad: 35,
                    pais: 'Honduras',
                    sexo: 'Femenino'
                }

            ],
            imagen: 'https://res.cloudinary.com/dziadnwao/image/upload/v1665642366/cocina_qujbir.jpg',
            inscripcion: true
        }, {
            id: 2,
            profesor: 'Juan Pablo Montoya',
            nombre: 'Automotores',
            inicia: new Date(2023, 7, 19),
            finaliza: new Date(2023, 9, 19),
            estudiantes: [
                {
                    id: 1,
                    nombre: 'Rene',
                    apellido: 'Higuita',
                    edad: 64,
                    pais: 'Colombia',
                    sexo: 'Masculino'
                },
                {
                    id: 2,
                    nombre: 'Fredy',
                    apellido: 'Rincon',
                    edad: 74,
                    pais: 'Colombia',
                    sexo: 'Masculino'
                },

            ],
            imagen: 'https://res.cloudinary.com/dziadnwao/image/upload/v1665642393/formula1_ofrsod.webp',
            inscripcion: true
        }, {
            id: 3,
            profesor: 'Ramiro Garcia',
            nombre: 'Trading',
            inicia: new Date(2023, 2, 25),
            finaliza: new Date(2023, 5, 23),
            estudiantes: [
                {   
                    id: 1,
                    nombre: 'Rene',
                    apellido: 'Higuita',
                    edad: 64,
                    pais: 'Colombia',
                    sexo: 'Masculino'
                },
                {
                    id: 2,
                    nombre: 'Mauricio',
                    apellido: 'Rios Velez',
                    edad: 43,
                    pais: 'Colombia',
                    sexo: 'Masculino'
                },
                {
                    id: 3,
                    nombre: 'Manuela',
                    apellido: 'Rios Velez',
                    edad: 35,
                    pais: 'Honduras',
                    sexo: 'Femenino'
                },
                {
                    id: 4,
                    nombre: 'Martha',
                    apellido: 'Carmona Yepes',
                    edad: 29,
                    pais: 'Guatemala',
                    sexo: 'Femenino'
                },
                {
                    id: 5,
                    nombre: 'Freddy',
                    apellido: 'Tao',
                    edad: 69,
                    pais: 'Colombia',
                    sexo: 'Masculino'
                },
                {
                    id: 6,
                    nombre: 'Pedro',
                    apellido: 'Aguirre',
                    edad: 39,
                    pais: 'Argentina',
                    sexo: 'Masculino'
                }

            ],
            imagen: 'https://res.cloudinary.com/dziadnwao/image/upload/v1665642413/trading_raw1qk.webp',
            inscripcion: false
        }, {
            id: 4,
            profesor: 'Ramiro Garcia',
            nombre: 'Ejercico en Casa',
            inicia: new Date(2023, 2, 25),
            finaliza: new Date(2023, 5, 23),
            estudiantes: [
                {
                    id: 1,
                    nombre: 'Rene',
                    apellido: 'Higuita',
                    edad: 64,
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
                },
                {
                    id: 3,
                    nombre: 'Mauricio',
                    apellido: 'Rios Velez',
                    edad: 43,
                    pais: 'Colombia',
                    sexo: 'Masculino'
                },
                {
                    id: 4,
                    nombre: 'Manuela',
                    apellido: 'Rios Velez',
                    edad: 35,
                    pais: 'Honduras',
                    sexo: 'Femenino'
                },
                {
                    id: 5,
                    nombre: 'Martha',
                    apellido: 'Carmona Yepes',
                    edad: 29,
                    pais: 'Guatemala',
                    sexo: 'Femenino'
                },
                {
                    id: 6,
                    nombre: 'Pedro',
                    apellido: 'Aguirre',
                    edad: 39,
                    pais: 'Argentina',
                    sexo: 'Masculino'
                }
            ],
            imagen: 'https://res.cloudinary.com/dziadnwao/image/upload/v1665642456/ejercicioencasa_u3zvyf.jpg',
            inscripcion: true
        }, {
            id: 5,
            profesor: 'Alfredo Montañez',
            nombre: 'Quimica',
            inicia: new Date(2023, 0, 19),
            finaliza: new Date(2023, 2, 19),
            estudiantes: [
                {
                    id: 1,
                    nombre: 'Rene',
                    apellido: 'Higuita',
                    edad: 64,
                    pais: 'Colombia',
                    sexo: 'Masculino'
                }
            ],
            imagen: 'https://res.cloudinary.com/dziadnwao/image/upload/v1665642424/quimica_rtfl24.jpg',
            inscripcion: false
        },
        {
            id: 6,
            profesor: 'Lucresia Ateorthua',
            nombre: 'Filosofia',
            inicia: new Date(2023, 0, 19),
            finaliza: new Date(2023, 2, 19),
            estudiantes: [
                {
                    id: 1,
                    nombre: 'Rene',
                    apellido: 'Higuita',
                    edad: 64,
                    pais: 'Colombia',
                    sexo: 'Masculino'
                },
                {
                    id: 2,
                    nombre: 'Fredy',
                    apellido: 'Rincon',
                    edad: 74,
                    pais: 'Colombia',
                    sexo: 'Masculino'
                },

            ],
            imagen: 'https://res.cloudinary.com/dziadnwao/image/upload/v1665642434/filoosofia_km2hhx.jpg',
            inscripcion: true
        }];

        this.subjectCursos$ = new BehaviorSubject<Curso[]>(this.cursos);
    }

    llamarCursos(): Observable<Curso[]> {
        return this.subjectCursos$.asObservable();
    }

    llamarCurso(id: any): Observable<Curso[]> {
        return this.llamarCursos().pipe(
            map((cursos: Curso[]) => cursos.filter((curso: Curso) => curso.id === id))
        )
    }

    editarCurso(curso: Curso): any{
        let indice: any = this.cursos.findIndex((c) =>{
            return c.id == curso.id
        });

        this.cursos[indice] = curso;
        this.subjectCursos$.next(this.cursos);
    }

    eliminarCurso(id: any) {
        let indice: any = this.cursos.findIndex((c) =>{
            return c.id == id
        });
        this.cursos.splice(indice, 1);
        this.subjectCursos$.next(this.cursos);

    }

}
