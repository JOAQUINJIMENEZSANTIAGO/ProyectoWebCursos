import { Component } from '@angular/core';
import { ContactService } from './services/contact.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string;
  roll: string;
  constructor(private contactService: ContactService) {
    this.name = "";
    this.roll = "";
  }
  async ngOnInit() {
    try {
      this.name = await this.contactService.getName();
      this.roll = await this.contactService.getRoll();
    } catch (error) {
      console.log(error);

    }
  }
}
