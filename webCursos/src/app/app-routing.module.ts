import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursoJSComponent } from './components/curso-js/curso-js.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { MyPersonComponent } from './components/my-person/my-person.component';
import { PorfolioComponent } from './components/porfolio/porfolio.component';

const routes: Routes = [
  {path: "", component: PorfolioComponent},
  {path: "porfolio", component: PorfolioComponent},
  {path: 'myPerson', component: MyPersonComponent},
  {path: "cursos", component: CursosComponent},
  {path: "cursos/cursoJS", component:CursoJSComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
