import { Component, OnInit , Input , Output , EventEmitter } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent implements OnInit {
  @Input() isDashboardOpen : boolean;
  @Output() isDashBoardClosed : EventEmitter<boolean> = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit() {
    
  }
  toggleOpenClose(){
    this.isDashBoardClosed.emit(true);
  }

}
