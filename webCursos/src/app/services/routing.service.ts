import { Injectable } from '@angular/core';
import {DATA} from "../db/db"

@Injectable({
  providedIn: 'root'
})
export class RoutingService {

  constructor() { 

  }

  getAllRouting(): Promise<any> {
    return new Promise<any>((resolve, reject)=>{
      let result = DATA.router
      if (result) {
        resolve (DATA.router);
      } else {
        reject("error")
      } 
    })
  }

}

