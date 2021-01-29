import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MyPersonComponent } from './components/my-person/my-person.component';
import { NavComponent } from './components/nav/nav.component';
import { MaxLenghtPipe } from './pipes/max-lenght.pipe';
import { CursoJSComponent } from './components/curso-js/curso-js.component';
import { FooterComponent } from './components/footer/footer.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { PorfolioComponent } from './components/porfolio/porfolio.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { InicioComponent } from './components/inicio/inicio.component';
import { CursoAngularJSComponent } from './components/curso-angular-js/curso-angular-js.component';
import { PlantillaCursoComponent } from './components/plantilla-curso/plantilla-curso.component';



@NgModule({
  declarations: [
    AppComponent,
    MyPersonComponent,
    NavComponent,
    MaxLenghtPipe,
    CursoJSComponent,
    FooterComponent,
    CursosComponent,
    PorfolioComponent,
    InicioComponent,
    CursoAngularJSComponent,
    PlantillaCursoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
