import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  contact: any;
  socials: any[];
  tlf: string;
  mail: string;
  hrefMail: string;
  hrefTlf: string;
  socialFirst: any;

  constructor(private contactservice: ContactService) {
    this.tlf = "";
    this.mail = "";
    this.hrefMail = "";
    this.hrefTlf = "";
  }

  async ngOnInit() {
    try {
      this.contact = await this.contactservice.getContact();
      this.tlf = this.contact.tel;
      this.mail = this.contact.mail;
      this.hrefMail = "mailto:" + this.mail;
      this.hrefTlf = "tel:" + this.tlf;

      this.socials = await this.contactservice.getAllSocials();
    } catch (error) {
      console.log(error);
    }
  }

}
