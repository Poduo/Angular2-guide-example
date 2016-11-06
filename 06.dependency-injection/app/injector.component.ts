import {Component, Injector}  from '@angular/core';

import {Car, Engine, Tires}   from './car/car';
import {Hero}                 from './heroes/hero';
import {HeroService}          from './heroes/hero.service';
import {heroServiceProvider}  from './heroes/hero.service.provider';
import {Logger}               from './logger.service';

@Component({
    selector: 'my-injectors',
    template: `
  <h2>Other Injections</h2>
  <div id="car">{{car.drive()}}</div>
  <div id="hero">{{hero.name}}</div>
  <div id="rodent">{{rodent}}</div>
  `,
    providers: [Car, Engine, Tires, heroServiceProvider, Logger]
})
export class InjectorComponent {
    car: Car = this.injector.get(Car);

    heroService: HeroService = this.injector.get(HeroService);
    hero: Hero = this.heroService.getHeroes()[0];

    constructor(private injector: Injector) {
    }

    get rodent() {
        let rousDontExist = `R.O.U.S.'s? I don't think they exist!`;
        return this.injector.get(ROUS, rousDontExist);
    }
}

/**
 * R.O.U.S. - Rodents Of Unusual Size
 * // https://www.youtube.com/watch?v=BOv5ZjAOpC8
 */
class ROUS {
}


/*
 Copyright 2016 Google Inc. All Rights Reserved.
 Use of this source code is governed by an MIT-style license that
 can be found in the LICENSE file at http://angular.io/license
 */