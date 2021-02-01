import { Injectable } from '@angular/core';
import { DATA } from "../db/db";
import { App } from '../interfaces/app';

@Injectable({
  providedIn: 'root'
})
export class AppsService {
  titleApp: string;
  constructor() {
  this.titleApp="";
  }

  getAllTechnologies(): Promise<string[]> {
    return new Promise<string[]>((resolve, reject) => {
      let result = [];
      let technologies = [];
      DATA.apps.forEach(element => {
        result.push(element.technologies);
      });
      for (let i = 0; i < result.length; i++) {
        result[i].forEach(element => {
          element;
          let findString = technologies.find(el => el == element);
          if (findString != element) {
            technologies.push(element);
          }
        });
      }
      if (result) {
        resolve(technologies);
      } else {
        reject("error");
      }
    })
  }
  getAllApps(): Promise<App[]> {
    return new Promise<App[]>((resolve, reject) => {
      let result = DATA.apps;
      resolve(result);
      reject("error");
    })
  }
  getFilterAppsForTechnologies(technologie: string): Promise<App[]> {
    return new Promise<App[]>((resolve, reject) => {
      let result = DATA.apps.filter(el => el.technologies.includes(technologie))
      if (result) {
        resolve(result);
      } else {
        reject("error");
      }
    })
  }
  getAppsForTitle(title = this.titleApp): Promise<App> {
    return new Promise<App>((resolve, reject)=>{
      let result = DATA.apps.filter(el => el.title == title);
      if (result) {
        resolve(result);
      } else {
        reject("error");
      }
    })
  }
 
  postTittle(event){
   this.titleApp = event;
   console.log(this.titleApp);
  }
}
