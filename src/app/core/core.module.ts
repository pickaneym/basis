import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
    MdIconModule,
    MdMenuModule,
    MdToolbarModule
} from '@angular/material';

import {NavComponent} from '../components/nav/nav.component';
import {BasisService} from '../services/basis.service';

@NgModule({
    declarations: [NavComponent],
    imports: [
        CommonModule,
        MdIconModule,
        MdMenuModule,
        MdToolbarModule
    ],
    exports: [NavComponent],
    providers: [BasisService]
})

// Do put a singleton service whose instance will be shared throughout the application here
export class CoreModule {
    constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
        if (parentModule) {
            throw new Error(
                'CoreModule is already loaded. Import it in the AppModule only');
        }
    }
}
