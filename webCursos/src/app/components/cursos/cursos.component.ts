import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/interfaces/curso';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
  cursos: Curso[] ;
  constructor(private CursosService:CursosService) { 

  }

  async ngOnInit() {
    try {
      this.cursos = await this.CursosService.getAllCursos();
    } catch (error) {
      console.log(error);
    }
  }

}
