import { Component, OnInit } from '@angular/core';
import { TechnologiesService } from 'src/app/services/technologies.service';

@Component({
  selector: 'app-technologies',
  templateUrl: './technologies.component.html',
  styleUrls: ['./technologies.component.css']
})
export class TechnologiesComponent implements OnInit {
technologies:any[];
keyframe:any[];
number: number;

  constructor(private TechnologiesService: TechnologiesService) {
    this.keyframe =[];
    this.number = 50;
   }

  ngOnInit(): void {
    this.technologies =  this.TechnologiesService.getAllTechnologies();
  }
  

}
