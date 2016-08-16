import {Injectable} from '@angular/core';
import {Hero} from './hero';

import 'rxjs/add/operator/toPromise';

import {Headers,Http} from '@angular/http';

//import {Promise};
//import {Headers};

@Injectable()
export class HeroService{ 
    private heroesUrl = 'app/heroes'; //web api
    
    constructor(
        private http:Http
    ){}

    getHeroes(){
        //return Promise.resolve(HEROES);
        return this.http.get(this.heroesUrl)
            .toPromise()
            .then(response=>response.json().data as Hero[])
            .catch(this.handleError);
    }

    getHero(id:number){
        return this.getHeroes().then(heroes=>heroes.find(hero=>hero.id === id ));
    }

    private handleError(error:any){
        console.log('An error has occured.',error);
        return Promise.reject(error.message || error);
    }

    private post(hero:Hero) : Promise<Hero>{
        let headers = new Headers({
            'Content-type':'application/json'
        });

        return this.http.
            post(this.heroesUrl, JSON.stringify(hero), {headers:headers})
            .toPromise()
            .then(res=>res.json().data)
            .catch(this.handleError);
    }

    private put(hero:Hero) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.heroesUrl}/${hero.id}`;

        return this.http
                .put(url, JSON.stringify(hero), {headers:headers})
                .toPromise()
                .then(()=>hero)
                .catch(this.handleError);
    }

    delete(hero: Hero) {
        let headers = new Headers();
        headers.append('Content-Type', 'application/json');

        let url = `${this.heroesUrl}/${hero.id}`;

        return this.http
                    .delete(url, {headers: headers})
                    .toPromise()
                    .catch(this.handleError);
    }

    save(hero:Hero):Promise<Hero>{
        if(hero.id)
            return this.put(hero);
        else
            return this.post(hero);
    }

}