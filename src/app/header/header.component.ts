import { Component, OnInit , Output , EventEmitter  } from '@angular/core';
import { Config } from '../shared/config/config';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() isDashboardOpen : EventEmitter<boolean> = new EventEmitter<boolean>();
  isOpen : boolean = true
  appName : string = Config.AppName;
  constructor() { }

  ngOnInit() {
  }

  toggleDashboard():void{
    this.isOpen != this.isOpen;
    this.isDashboardOpen.emit(this.isOpen); 
  }

}
