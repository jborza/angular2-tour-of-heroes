import {Component, OnInit} from '@angular/core';
import {HeroService} from './hero.service';

import {Router} from '@angular/router';

import {Hero} from './hero';

@Component({
    selector: '<my-dashboard>',
    templateUrl: 'app/dashboard.component.html',
})
export class DashboardComponent implements OnInit{
    heroes: Hero[] = [];

    constructor(private heroService:HeroService,
    private router:Router){
    }

    ngOnInit(){
        this.heroService.getHeroes().then(
            heroes => this.heroes = heroes.slice(0,4)
        );
    }

    gotoDetails(hero: Hero){
        let link = ['/detail',hero.id];
        this.router.navigate(link);
    }
}