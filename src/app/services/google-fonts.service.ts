import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {GOOGLE_FONTS_API} from '../../config/requests/custom/google-fonts-api.request';


@Injectable()
export class GoogleFontsService {

    constructor(@Inject(GOOGLE_FONTS_API) public GoogleFontsApi) {
    }

    getAllFonts(): Observable<any> {
        return this.GoogleFontsApi
            .one('webfonts')
            .get();
    }
}
