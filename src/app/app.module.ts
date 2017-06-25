import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {AppConfigModule} from '../config/app-config.module';
import {CoreModule} from './core/core.module';
import {SharedModule} from './shared/shared.module';
import {ThemeGeneratorModule} from './theme-generator/theme-generator.module';


@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        CoreModule,
        SharedModule,
        ThemeGeneratorModule,
        AppConfigModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
