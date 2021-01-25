import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursoJSComponent } from './components/curso-js/curso-js.component';
import { HomeComponent } from './components/home/home.component';
import { MyPersonComponent } from './components/my-person/my-person.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "home", component: HomeComponent},
  {path: 'myPerson', component: MyPersonComponent},
  {path: "home/cursoJS", component: CursoJSComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
