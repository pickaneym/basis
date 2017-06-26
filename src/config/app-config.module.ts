import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AppRequestsModule} from './requests/app-requests.module';
import {AppRoutingModule} from './routing/app-routing.module';
import {RouterModule} from '@angular/router';
import {AppAuthModule} from './auth/app-auth.module';

@NgModule({
    imports: [
        AppAuthModule,
        AppRequestsModule,
        AppRoutingModule
    ],
    exports: [RouterModule],
    declarations: []
})
export class AppConfigModule {
}
