import {Component, OnInit, EventEmitter, Output, Input} from '@angular/core';
import { ActivatedRoute, Params} from '@angular/router';

import {HeroService} from './hero.service';
import {Hero} from './hero';

@Component({
    selector: 'my-hero-detail',
    templateUrl: 'app/hero-detail.component.html',
    styleUrls: ['app/hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
    @Input()
    hero: Hero;

    @Output()
    close = new EventEmitter();

    error:any;
    navigated : boolean = false; //true if navigated here

    constructor(
        private heroService: HeroService,
        private route: ActivatedRoute
    ) {}
    
    ngOnInit(){
        const idParam = 'id';
        this.route.params.forEach(params =>{
            if(params[idParam] !== undefined){
                let id = +params['id'];
                this.navigated = true;
                this.heroService.getHero(id).then(hero => this.hero = hero);
            }
            else{
                this.navigated = false;
                this.hero = new Hero();
            }
        });
    }

    save(){
        this.heroService
            .save(this.hero)
            .then(hero=>{
                this.hero = hero; //update current one with saved with id
                this.goBack(hero)
            })
            .catch(err=>this.error = err); //TODO: display error message
    }

    goBack(savedHero: Hero = null){
        this.close.emit(savedHero); //notify we saved or created a hero, HeroesComponent is listening for this
        if(this.navigated == true)
            window.history.back();
    }
}