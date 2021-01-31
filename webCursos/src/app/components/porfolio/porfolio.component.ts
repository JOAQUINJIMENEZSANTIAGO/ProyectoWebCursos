import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { App } from 'src/app/interfaces/app';
import { AppsService } from 'src/app/services/apps.service';

@Component({
  selector: 'app-porfolio',
  templateUrl: './porfolio.component.html',
  styleUrls: ['./porfolio.component.css']
})
export class PorfolioComponent implements OnInit {

  technologies: string[];
  AllApps: App[];
  appsSelect: App[];
  optionSelect: string;
  valueSelect: string;

  constructor(private appsService: AppsService, private router: Router) {
    this.valueSelect = "";
  }

  async ngOnInit() {
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });
    try {
      this.technologies = await this.appsService.getAllTechnologies();

      this.AllApps = await this.appsService.getAllApps();
    }
    catch (error) {
      console.log(error);
    }

  }
  async change(event) {
    this.valueSelect = event.target.value
    try {
     this.AllApps = await this.appsService.getFilterAppsForTechnologies(this.valueSelect);
    }
    catch (error) {
      console.log(error);
    }
  }

}
