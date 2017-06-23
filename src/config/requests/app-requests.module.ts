import {NgModule} from '@angular/core';
import {Restangular, RestangularModule} from 'ngx-restangular';

import {RestangularConfigFactory} from './global-request.config';
import {LOCAL, RestangularLocalFactory} from './local-request.config';
import {GOOGLE_FONTS_API, RestangularGoogleFontsFactory} from './google-fonts-api-request.config';
import {COLOR_API, RestangularColorFactory} from './color-api-request.config';

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
