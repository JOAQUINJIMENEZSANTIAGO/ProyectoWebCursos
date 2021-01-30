import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-my-person',
  templateUrl: './my-person.component.html',
  styleUrls: ['./my-person.component.css']
})
export class MyPersonComponent implements OnInit {
  urlPhoto: string;

  constructor(private contactService: ContactService) { 
    this.urlPhoto ="";
  }

  async ngOnInit() {
    try {
      this.urlPhoto = await this.contactService.getPhoto();
    } catch (error) {
      console.log(error)
    }
  }

}
