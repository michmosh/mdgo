import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable, Subscriber, from , of } from "rxjs";
import { map } from 'rxjs/operators';
import { Config } from '../config/config'
import { Accident } from '../models/accident.model';

@Injectable({
  providedIn: 'root'
})
export class AccidentsService {
  baseUrl : string = Config.ApiUrl;
  accidents : any[] = [];
  constructor(private http:HttpClient) { }

  getAccidents():Observable<Accident[]>{
    return this.http.get<Accident[]>(this.baseUrl).pipe(
      map((res) => {
        this.accidents = res["Data"];
        return this.accidents;
      }));
  }

  getAccidentByMDA(mda:string){
    let accident = this.accidents.filter(el=>el.MDA === mda);
    return of(accident[0]);
  }
}
