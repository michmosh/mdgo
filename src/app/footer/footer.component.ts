import { Component, OnInit } from '@angular/core';
import {Config} from '../shared/config/config';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  appName : string = Config.AppName;
  constructor() { }

  ngOnInit() {
  }

}
