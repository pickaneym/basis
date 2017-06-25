import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

import {ThemeGeneratorComponent} from './theme-generator.component';
import {AuthService} from '../../config/auth/auth.service';

const themeGeneratorRoutes: Routes = [
    {
        path: 'basis',
        component: ThemeGeneratorComponent,
        canActivate: [AuthService]
    }
];

@NgModule({
    declarations: [],
    imports: [
        RouterModule.forChild(themeGeneratorRoutes)
    ],
    exports: [RouterModule]
})

export class ThemeGeneratorRoutingModule {
}
