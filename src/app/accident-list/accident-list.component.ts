import { Component, OnInit } from '@angular/core';
import { AccidentsService } from '../shared/services/accidents.service';
import {Accident} from '../shared/models/accident.model';
@Component({
  selector: 'app-accident-list',
  templateUrl: './accident-list.component.html',
  styleUrls: ['./accident-list.component.css']
})
export class AccidentListComponent implements OnInit {
  accidentsArray : Array<Accident>;
  treatedAccidentsArray : Array<Accident>;
  unTreatedAccidentsArray : Array<Accident>;
  constructor(private service : AccidentsService) { }

  ngOnInit() :void{
    this.service.getAccidents().subscribe(res=>{
      this.accidentsArray = res;
      this.splitAccidenteTypes();
    })
  }

  splitAccidenteTypes():void{
    this.treatedAccidentsArray = this.accidentsArray.filter((accident:Accident)=> accident.isTreated === true);
    this.unTreatedAccidentsArray = this.accidentsArray.filter((accident:Accident)=> accident.isTreated === false);
 
  }

}
