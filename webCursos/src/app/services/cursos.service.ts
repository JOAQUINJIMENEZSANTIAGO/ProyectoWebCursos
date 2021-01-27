import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Injectable } from '@angular/core';
import {CURSOS} from '../db/cursos.db';
import {Curso} from '../interfaces/curso';
// importo la db creada en el fichero y la interface 

@Injectable({
  providedIn: 'root'
})
export class CursosService {
  
  constructor( ) { 

  }
  // creo un a funcion que retorna una promesa tipo curso de la db y me cencioro de que el array no esta vacio
  getAllCursos(): Promise<Curso[]> {
    return new Promise<Curso[]>((resolve, reject)=> {
      if (CURSOS.length > 0) {
        resolve(CURSOS);
      } else {
        reject("Error, dataBase empty ")
      }
      
    });
  }

}
