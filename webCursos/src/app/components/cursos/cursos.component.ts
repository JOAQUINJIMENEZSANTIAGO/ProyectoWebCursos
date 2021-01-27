import { Component, Input, OnInit } from '@angular/core';
import { Curso } from 'src/app/interfaces/curso';
import { CursosService } from 'src/app/services/cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  cursos: Curso[];
  filter: any;

  constructor(private CursosService:CursosService) { 

  }

  async ngOnInit() {
    // nada mas iniciar el componnete consumo la peticio de todos los cursos 
    try {
      this.cursos = await this.CursosService.getAllCursos();
    } catch (error) {
      console.log(error);
    }
  }
  onChange(event) {
    console.log(event);
    try {
      this.CursosService.getCursosIncludesLetter(event)
    } catch (error) {
      console.log(error);  
    }
 
  }
  
  

}
