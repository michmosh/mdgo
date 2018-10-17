import { BrowserModule } from '@angular/platform-browser';
import { NgModule , ApplicationRef} from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 

// ROUTER MODULE
import { LazyRouterModule } from './shared/lazy-router/lazy-router.module';
import { RouterModule } from '@angular/router';

//COMPONENTS
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { MainComponent } from './main/main.component';

//SERVICES
import { AccidentsService } from './shared/services/accidents.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    MainComponent
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([]),
    LazyRouterModule
  ],
  providers: [AccidentsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
