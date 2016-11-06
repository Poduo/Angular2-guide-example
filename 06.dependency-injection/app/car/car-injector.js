"use strict";
var core_1 = require('@angular/core');
var car_1 = require('./car');
var logger_service_1 = require('../logger.service');
function useInjector() {
    var injector;
    /*
    // Cannot instantiate an ReflectiveInjector like this!
    let injector = new ReflectiveInjector([Car, Engine, Tires]);
    */
    injector = core_1.ReflectiveInjector.resolveAndCreate([car_1.Car, car_1.Engine, car_1.Tires]);
    var car = injector.get(car_1.Car);
    car.description = 'Injector';
    injector = core_1.ReflectiveInjector.resolveAndCreate([logger_service_1.Logger]);
    var logger = injector.get(logger_service_1.Logger);
    logger.log('Injector car.drive() said: ' + car.drive());
    return car;
}
exports.useInjector = useInjector;
/*
Copyright 2016 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/ 
//# sourceMappingURL=car-injector.js.map