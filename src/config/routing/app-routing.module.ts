import {NgModule} from '@angular/core';
import {Routes, RouterModule, Router} from '@angular/router';

import {PageNotFoundComponent} from '../../app/core/page-not-found/page-not-found.component';

const routes: Routes = [
    {path: '', redirectTo: 'basis', pathMatch: 'full'},
    {path: '**', component: PageNotFoundComponent}
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forRoot(routes, {useHash: true})
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {
    // Diagnostic only: inspect router configuration
    constructor(router: Router) {
        console.log('Routes: ', JSON.stringify(router.config, undefined, 2));
    }
}
