import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http"
import { Observable, Subject, from , of } from "rxjs";
import { map } from 'rxjs/operators';
import { Config } from '../config/config'
import { Accident } from '../models/accident.model';

@Injectable({
  providedIn: 'root'
})
export class AccidentsService {
  baseUrl : string = Config.ApiUrl;
  accidents : any[] = [];
  loader:Subject<string> = new Subject<string>();
  
  constructor(private http:HttpClient) {
    
   }

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

  activateLoader(isActive){
    isActive ? this.loader.next("LOADING") : this.loader.next("NOT_LOADING") 
     
  }
}
