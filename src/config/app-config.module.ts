import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppRequestsModule} from './requests/app-requests.module';
import {AppRoutingModule} from './routing/app-routing.module';
import {RouterModule} from '@angular/router';

@NgModule({
    imports: [
        CommonModule,
        AppRequestsModule,
        AppRoutingModule
    ],
    exports: [RouterModule, AppRequestsModule],
    declarations: []
})
export class AppConfigModule {
}
