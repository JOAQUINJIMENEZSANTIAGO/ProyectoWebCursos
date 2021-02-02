import { Component, OnInit }from '@angular/core';
import { AppsService } from 'src/app/services/apps.service';


@Component({
  selector: 'app-view-app',
  templateUrl: './view-app.component.html',
  styleUrls: ['./view-app.component.css']
})
export class ViewAppComponent implements OnInit {
  app: any;

  constructor(private appselect:AppsService) {

   }

  async ngOnInit() {
    this.app = await this.appselect.getAppsForTitle();
    console.log(this.app);
    
  }
  

}
