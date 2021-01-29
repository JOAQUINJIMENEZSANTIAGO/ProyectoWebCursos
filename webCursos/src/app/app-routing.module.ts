import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursoAngularJSComponent } from './components/curso-angular-js/curso-angular-js.component';
import { CursoJSComponent } from './components/curso-js/curso-js.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { MyPersonComponent } from './components/my-person/my-person.component';
import { PorfolioComponent } from './components/porfolio/porfolio.component';

const routes: Routes = [
  {path: "", component: InicioComponent},
  {path: "portfolio", component: PorfolioComponent},
  {path: 'myPerson', component: MyPersonComponent},
  {path: "cursos", component: CursosComponent},
  {path: "cursos/cursoJS", component:CursoJSComponent},
  {path: "cursos/cursoAngularJS", component:CursoAngularJSComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
