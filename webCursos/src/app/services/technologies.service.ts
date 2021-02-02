import { Injectable } from '@angular/core';
import {DATA} from '../db/db'

@Injectable({
  providedIn: 'root'
})
export class TechnologiesService {

  constructor() { 

  }
  getAllTechnologies():any{
    let result = DATA.technologies;
    return result;
  }
}
