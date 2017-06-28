import {NgModule, Optional, SkipSelf} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {
    MdButtonModule,
    MdIconModule,
    MdMenuModule,
    MdToolbarModule
} from '@angular/material';

import {NavComponent} from './nav/nav.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
    declarations: [NavComponent, PageNotFoundComponent],
    imports: [
        CommonModule,
        MdIconModule,
        MdMenuModule,
        MdButtonModule,
        MdToolbarModule,
        RouterModule
    ],
    exports: [NavComponent],
    providers: []
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
