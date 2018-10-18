import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
//CONFIG
import {Config} from '../../shared/config/config';
//MAPS
import { AgmCoreModule } from '@agm/core';
import { AgmDirectionModule } from 'agm-direction';  
//COMPONENTS
import { AccidentListComponent } from '../../accident-list/accident-list.component';
import { SingleAccidentComponent } from '../../single-accident/single-accident.component';


const routes : Routes = [
  {path : 'home', component: AccidentListComponent},
  {path : 'singleAccident/:id' , component : SingleAccidentComponent}
]
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AgmCoreModule.forRoot({apiKey:Config.GoogleMapsApiKey}),
    AgmDirectionModule,
  ],
  exports:[RouterModule] ,
  declarations: [
    AccidentListComponent , 
    SingleAccidentComponent
  ]
})
export class LazyRouterModule { }
