import {Component, OnInit} from '@angular/core';


import {HeroSearchService} from './hero-search.service';
import {Hero} from './hero';

@Component({
    selector: 'hero-search',
    templateUrl: 'app/hero-search.component.html',
    styleUrls: ['app/hero-search.component.css']
})
export class HeroSearchComponent implements OnInit{
    constructor(
        private heroSearchService: HeroSearchService
    ) {}

    ngOnInit(){

    }
}