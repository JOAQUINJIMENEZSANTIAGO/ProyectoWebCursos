import { Injectable } from '@angular/core';
import { DATA } from "../db/db";
import { App } from '../interfaces/app';

@Injectable({
  providedIn: 'root'
})
export class AppsService {

  constructor() {

  }
  getAllTechnologies(): Promise<string[]> {
    return new Promise<string[]>((resolve, reject) => {
      let result = DATA.technologies;
      if (result) {
        resolve(result);
      } else {
        reject("error")
      }
    });
  }
  getAllApps(): Promise<App[]> {
    return new Promise<App[]>((resolve, reject) => {
      let result = DATA.apps;
      resolve(result);
      reject("error");
    })
  }
  getFilterAppsForTechnologies(technologie): Promise<App[]> {
    return new Promise<App[]>((resolve, reject)=>{
      let result = DATA.apps.filter(el => el.technologies == technologie);
      if(result) {
        resolve(result);
      } else{
        reject("error");
      }
       
    })
     
  }

  // TODO: filtrar por select 
}
