import { Injectable } from '@angular/core';
import { DATA } from "../db/db"

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor() {

  }
  getPhoto(): Promise<string> {
    return new Promise<string>((resolve, reject) => {
      let result = DATA.author.photo;
      if (result) {
        resolve(result);
      } else {
        reject("error");
      };
    });
  }
  getName(): Promise<string> {
    let result = DATA.author.name
    return new Promise<string>((resolve, reject) => {
      if (result) {
        resolve(result)
      } else {
        reject("error")
      }
    });
  }
  getRoll(): Promise<string> {
    let result = DATA.author.roll
    return new Promise<string>((resolve, reject) => {
      if (result) {
        resolve(result)
      } else {
        reject("error")
      }
    });
  }
  getAllSocials(): Promise<any> {
    return new Promise<any> ((resolve, reject)=>{
      let result = DATA.author.social;
      if (result) {
        resolve(result);
      } else {
        reject("error");
      }
    });
  }
  getContact(): Promise<any> {
    return new Promise<any> ((resolve, reject)=>{
      let result = DATA.author.contact;
      if (result) {
        resolve(result);
      } else {
        reject("error");
      }
    });
  }

}
