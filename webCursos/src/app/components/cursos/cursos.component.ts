import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/interfaces/curso';
import { CursosService } from 'src/app/services/cursos.service';
import { Router, NavigationEnd } from '@angular/router';
import { RoutingService } from 'src/app/services/routing.service';

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
  routerNav: string[];
  btnReturn: string;


  constructor(private CursosService: CursosService, private router: Router, private routerService: RoutingService) {
    this.resultInput = "";
    this.alertEmpety = "";
    this.alertNoFind = "";
    this.textAlert = "No hay cursos disponibles"
    this.routerNav = [];
    this.btnReturn = "";

  }

  async ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });

    try {
      this.cursos = await this.CursosService.getAllCursos();
    } catch (error) {
      console.log(error);
      this.alertEmpety = this.textAlert;
    }
    try {
      this.routerNav = await this.routerService.getAllRouting();
    } catch (error) {
      console.log("error");
    }
    this.btnReturn = "Volver a todos los " + this.routerNav[1]
  }


  async onChange(event) {
    let eventTrim = event.trim();
    try {
      this.cursos = await this.CursosService.getCursosIncludesLetter(eventTrim);
      if (this.cursos.length == 0) {
        this.alertNoFind = "Busqueda sin resultado, el titulo del curso no contiene los caracteres introducidos";
      } else { this.alertNoFind = "" }
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
