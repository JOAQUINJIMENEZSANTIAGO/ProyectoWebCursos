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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
