import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { MyPersonComponent } from './components/my-person/my-person.component';
import { NavComponent } from './components/nav/nav.component';
import { MaxLenghtPipe } from './pipes/max-lenght.pipe';
import { CursoJSComponent } from './components/curso-js/curso-js.component';
import { FooterComponent } from './components/footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MyPersonComponent,
    NavComponent,
    MaxLenghtPipe,
    CursoJSComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
