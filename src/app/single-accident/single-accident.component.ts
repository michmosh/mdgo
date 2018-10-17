import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AccidentsService } from '../shared/services/accidents.service';
import { map, switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Accident } from '../shared/models/accident.model';
@Component({
  selector: 'app-single-accident',
  templateUrl: './single-accident.component.html',
  styleUrls: ['./single-accident.component.css']
})
export class SingleAccidentComponent implements OnInit {
  accident: Accident;
  constructor(private route: ActivatedRoute,
              private router: Router,
              private service: AccidentsService) { }

  ngOnInit():void {
   this.route.paramMap.subscribe((params)=>{
      return this.service.getAccidentByMDA(params.get('id')).subscribe(res=>{
        this.accident = res;
      })
    })
  }

}
