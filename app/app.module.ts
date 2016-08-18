import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

// Imports for loading & configuring the in-memory web api
import {HttpModule, XHRBackend} from '@angular/http';

import { InMemoryBackendService, SEED_DATA } from 'angular2-in-memory-web-api';
import { InMemoryDataService }               from './in-memory-data.service';

import { AppComponent }  from './app.component';
import {routing} from './app.routing';

import {HeroesComponent} from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { HeroSearchComponent } from './hero-search.component';

import {HeroService} from './hero.service';

import {DashboardComponent} from './dashboard.component';

@NgModule({
  //used by injection
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule
  ],
  //here we define components that will declare tags we want to use in application
  declarations: [
    AppComponent,
    HeroesComponent,
    DashboardComponent,
    HeroDetailComponent,
    HeroSearchComponent
  ],
  providers: [
    HeroService,
     { provide: XHRBackend, useClass: InMemoryBackendService }, // in-mem server
    { provide: SEED_DATA,  useClass: InMemoryDataService }     // in-mem server data
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }