import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MdButtonModule,
    MdIconModule,
    MdCheckboxModule,
    MdInputModule,
    MdRadioModule,
    MdSelectModule
} from '@angular/material';


import {AppComponent} from './app.component';
import {CoreModule} from './core/core.module';
import {AppRoutingModule} from './app-routing.module';

import {StylesheetInfoComponent} from './components/stylesheet-info/stylesheet-info.component';
import {CoreStylesComponent} from './components/core-styles/core-styles.component';
import {ColorReferencesComponent} from './components/color-references/color-references.component';
import {ExtrasComponent} from './components/extras/extras.component';
import {DependenciesComponent} from './components/dependencies/dependencies.component';


@NgModule({
    declarations: [
        AppComponent,
        StylesheetInfoComponent,
        CoreStylesComponent,
        ColorReferencesComponent,
        ExtrasComponent,
        DependenciesComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        CoreModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MdButtonModule,
        MdIconModule,
        MdCheckboxModule,
        MdInputModule,
        MdRadioModule,
        MdSelectModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
