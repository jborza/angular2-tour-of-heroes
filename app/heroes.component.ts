import { Component, OnInit } from '@angular/core';

import {Hero} from './hero';
import {HeroService} from './hero.service';

import {Router} from '@angular/router';

import {HeroDetailComponent} from './hero-detail.component';

@Component({
  selector: 'my-heroes',
  styleUrls:['app/heroes.component.css'],
  templateUrl:'app/heroes.component.html'
})
export class HeroesComponent implements OnInit
{
  selectedHero: Hero;
  heroes: Hero[];
  
  constructor(
    private heroService: HeroService,
    private router: Router
    ){}
  
  onSelect(hero: Hero) { this.selectedHero = hero;}
  
  getHeroes(){
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  ngOnInit(){
    this.getHeroes();
  }

  gotoDetail(){
    let link = ['/detail',this.selectedHero.id];
    this.router.navigate(link);
  }

  addHero(){
    let link = ['/detail'];
    this.router.navigate(link);
  }
 }

