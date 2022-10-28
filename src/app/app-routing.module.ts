import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosModule } from './alumnos/alumnos.module';
import { AlumnosComponent } from './alumnos/Components/alumnos/alumnos.component';
import { PaginaNoEncontadaComponent } from './core/components/pagina-no-encontada/pagina-no-encontada.component';
import { RegistroLoginComponent } from './core/components/registro-login/registro-login.component';

const routes: Routes = [
  { path: '', redirectTo: 'alumnos', pathMatch: 'full' },
  {path: '', loadChildren: () => {
     return import('./alumnos/alumnos.module').then(m => m.AlumnosModule);
  }},
  {path: '', loadChildren: () => {
    return import('./cursos/cursos.module').then(m => m.CursosModule);
 }},
  {path: 'registro', component: RegistroLoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
