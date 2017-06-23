import {InjectionToken} from '@angular/core';
import {Restangular} from 'ngx-restangular';

// Restangular service that uses Bing
export const COLOR_API = new InjectionToken<any>('ColorApi');
export function RestangularColorFactory(restangular: Restangular) {
    return restangular.withConfig((RestangularConfigurer) => {
        RestangularConfigurer.setBaseUrl('http://thecolorapi.com/');
    });
}
