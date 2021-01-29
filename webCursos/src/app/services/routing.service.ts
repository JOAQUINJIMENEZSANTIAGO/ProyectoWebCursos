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
      resolve (DATA.router);
      reject("error")
    })
  }

}

