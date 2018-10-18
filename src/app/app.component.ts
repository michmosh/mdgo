import { Component , OnInit} from '@angular/core';
import { Router} from '@angular/router';
import { AccidentsService } from './shared/services/accidents.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'MDGO';
  isDashboardOpen:boolean  =  false;
  isLoaderOn : boolean = false;
  constructor(private router : Router , private service:AccidentsService){}
  
  ngOnInit(){
    this.router.navigate(['/home']);
    this.service.loader.subscribe(async res=>{
       this.isLoaderOn = await res === "LOADING" ? true : false ;
       this.isLoaderOn = await res === "NOT_LOADING" ? false : true ;  
    })
    
  }

  openDashboard(value){
    this.isDashboardOpen = !this.isDashboardOpen
  }


}


