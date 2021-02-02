import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursoAngularJSComponent } from './components/curso-angular-js/curso-angular-js.component';
import { CursoJSComponent } from './components/curso-js/curso-js.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { MyPersonComponent } from './components/my-person/my-person.component';
import { PorfolioComponent } from './components/porfolio/porfolio.component';
import { TechnologiesComponent } from './components/technologies/technologies.component';
import { ViewAppComponent } from './components/view-app/view-app.component';

import { DATA } from "./db/db";



const routes: Routes = [
  { path: "", component: InicioComponent },
  { path: DATA.router[0], component: PorfolioComponent },
  { path: DATA.router[1], component:TechnologiesComponent},
  { path: DATA.router[2], component: CursosComponent },
  { path: DATA.router[3], component: MyPersonComponent },
  
  { path: DATA.router[2] + "/" + DATA.cursos[0].title, component: CursoJSComponent },
  { path: DATA.router[2] + "/" + DATA.cursos[1].title, component: CursoAngularJSComponent },
  { path: "viewApp", component: ViewAppComponent},
  { path: "**", pathMatch: "full", redirectTo: DATA.router[0] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
