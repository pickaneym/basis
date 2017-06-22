import {InjectionToken} from '@angular/core';
import {Restangular} from 'ngx-restangular';

// Restangular service that uses Bing
export const LOCAL = new InjectionToken<any>('LocalRequest');
export function RestangularLocalFactory(restangular: Restangular) {
    return restangular.withConfig((RestangularConfigurer) => {
        RestangularConfigurer.setBaseUrl('http://localhost:4200/');
    });
}
