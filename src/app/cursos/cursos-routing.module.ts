import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarCursoComponent } from './Components/editar-curso/editar-curso.component';
import { CursosComponent } from './Components/cursos/cursos.component';
import { CursoProfileComponent } from './Components/curso-profile/curso-profile.component';
import { ListarCursosComponent } from './Components/listar-cursos/listar-cursos.component';

const routes: Routes = [
  {
    path: 'cursos', component: CursosComponent,
    children: [
      { path: '', redirectTo: 'listaCursos', pathMatch: 'full' },
      {path: 'listaCursos', component: ListarCursosComponent},
      { path: 'cursoPerfil/:id', component: CursoProfileComponent },
      { path: 'editarCurso/:id', component: EditarCursoComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
