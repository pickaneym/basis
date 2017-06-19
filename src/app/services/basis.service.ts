import {Injectable} from '@angular/core';

import {Basis} from '../models/basis.model';
import {SetupOptions} from '../models/stylesheet-info.model';

@Injectable()
export class BasisService {

    constructor() {
    }

    getBasis() {
        return new Basis();
    }

    getSetupOptions() {
        return new SetupOptions();
    }

}
