import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/interfaces/curso';
import { CursosService } from 'src/app/services/cursos.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: Curso[];
  resultInput: string;
  alertNoFind: string;
  alertEmpety: String;
  cursosLenght: Number;
  textAlert: string;
  

  constructor(private CursosService:CursosService,private router: Router) { 
    this.resultInput = "";
    this.alertEmpety = "";
    this.alertNoFind = "";
    this.textAlert = "No hay cursos disponibles"

  }

  async ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
          return;
      }
      window.scrollTo(0, 0)
  });
    // nada mas iniciar el componnete consumo la peticio de todos los cursos 
    try {
      this.cursos = await this.CursosService.getAllCursos();
    } catch (error) {
      console.log(error);
      this.alertEmpety = this.textAlert;
    }
  }


  async onChange(event) {
    try {
      this.cursos = await this.CursosService.getCursosIncludesLetter(event);
      if (this.cursos.length == 0) {
        this.alertNoFind = "Busqueda sin resultado, el titulo del curso no contiene los caracteres introducidos";
      }else { this.alertNoFind = ""}
      
      console.log(this.cursos.length);
    } catch (error) {
      console.log(error); 
    }
  }
  async onClick() {
    try {
      this.cursos = await this.CursosService.getAllCursos();
      this.resultInput = "";
      this.alertNoFind = "";
    } catch (error) {
      console.log(error);

    }
  }
  
  

}
