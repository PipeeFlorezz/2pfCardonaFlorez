export interface alumno {
    id: number,
    nombre: String,
    apellido: String,
    edad: Number,
    pais: String,
    sexo: String
}



export interface Curso {
    id: number,
    profesor: String,
    nombre: String,
    inicia: Date,
    finaliza: Date,
    estudiantes: alumno[],
    imagen: String,
    inscripcion: boolean
}

export interface Admin {
    nombre: String,
    clave: String
}


