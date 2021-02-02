import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { CursosService } from 'src/app/services/cursos.service';
import { RoutingService } from 'src/app/services/routing.service';

@Component({
  selector: 'app-plantilla-curso',
  templateUrl: './plantilla-curso.component.html',
  styleUrls: ['./plantilla-curso.component.css']
})
export class PlantillaCursoComponent implements OnInit {
  cursos: string[];
  title: string;
  stringRouter: string[];
  returnText: string;
  returnRouter: string;

  constructor(private router: Router, private cursosService: CursosService, private routingService: RoutingService) {
    this.cursos = [];
    this.stringRouter = [];
    this.returnRouter = "";
    this.returnText = ""
  }

  async ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
    try {
      this.cursos = await this.cursosService.getTitleAllCursos()
      this.title = this.cursos[0]

      this.stringRouter = await this.routingService.getAllRouting();
      this.returnRouter = "/" + this.stringRouter[2];
      this.returnText = "Volver a los "+this.stringRouter[2];
    } catch (error) {
      console.log(error);
    }

  }

}