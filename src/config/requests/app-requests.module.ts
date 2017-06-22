import {NgModule} from '@angular/core';
import {Restangular, RestangularModule} from 'ngx-restangular';

import {RestangularConfigFactory} from './global-request.config';
import {GOOGLE_FONTS_API, RestangularGoogleFontsFactory} from './/custom/google-fonts-api.request';
import {COLOR_API, RestangularColorFactory} from './/custom/color-api.request';
import {LOCAL, RestangularLocalFactory} from './custom/local.request';

@NgModule({
    imports: [
        RestangularModule.forRoot(RestangularConfigFactory)
    ],
    declarations: [],
    providers: [
        {provide: GOOGLE_FONTS_API, useFactory: RestangularGoogleFontsFactory, deps: [Restangular]},
        {provide: COLOR_API, useFactory: RestangularColorFactory, deps: [Restangular]},
        {provide: LOCAL, useFactory: RestangularLocalFactory, deps: [Restangular]}
    ]
})
export class AppRequestsModule {
}
