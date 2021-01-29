import { Injectable } from '@angular/core';
import {DATA} from '../db/db'
import {Curso} from '../interfaces/curso';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor( ) { 
  }
  
  getAllCursos(): Promise<Curso[]> {
    return new Promise<Curso[]>((resolve, reject)=> {
      if (DATA.cursos.length > 0) {
        resolve(DATA.cursos);
      } else {
        reject("Data base empety");
      }
    });
  }
  getCursosIncludesLetter(parameter): Promise<Curso[]> {
    return new Promise<Curso[]>((resolve, reject)=> {
      if (DATA.cursos.length > 0) {
        let result = DATA.cursos.filter(cursos => cursos.title.toLowerCase().includes(parameter.toLowerCase()));
        resolve (result);
      } else {
        reject("No hay ningun curso")
      }
    });
  }
  getTitleAllCursos(): Promise<string[]> {
    return new Promise<string[]>((resolve, reject )=>{
      let result = []
      DATA.cursos.forEach(element => {
       result.push(element.title) 
      });
      resolve(result)
      reject("error")
    })
  }

}
