import {InjectionToken} from '@angular/core';
import {Restangular} from 'ngx-restangular';

import {GOOGLE_FONTS_API_KEY} from '../google-fonts-api.key';

export const GOOGLE_FONTS_API = new InjectionToken<any>('GoogleFontsApi');
export function RestangularGoogleFontsFactory(restangular: Restangular) {
    return restangular.withConfig((RestangularConfigurer) => {
        RestangularConfigurer.setBaseUrl('https://www.googleapis.com/webfonts/v1/');
        RestangularConfigurer.setDefaultRequestParams({
            key: GOOGLE_FONTS_API_KEY,
            sort: 'popularity'
        });
    });
}
