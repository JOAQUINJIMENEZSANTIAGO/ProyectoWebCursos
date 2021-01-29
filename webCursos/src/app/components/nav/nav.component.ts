import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { RoutingService } from 'src/app/services/routing.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  nav: string[];
  @Output() portfolioTitle = new EventEmitter<string>();
  @Output() cursosTitle: string;
  @Output() aboutTitle: string;
  
  constructor(private routingService: RoutingService) {
    this.nav = ["Portfolio","Cursos","Sobre mi"];
   }

  async ngOnInit(){
   try {
     this.nav = await this.routingService.getAllRouting();
     
   } catch (error) {
     console.log(error);
   }
  }

}
