import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AppRoutingModule} from './app-routing.module';
import {
    MdButtonModule,
    MdIconModule,
    MdCheckboxModule,
    MdInputModule,
    MdRadioModule,
    MdSelectModule,
    MdMenuModule,
    MdToolbarModule
} from '@angular/material';


import {AppComponent} from './app.component';
import {NavComponent} from './components/nav/nav.component';
import {StylesheetInfoComponent} from './components/stylesheet-info/stylesheet-info.component';
import {CoreStylesComponent} from './components/core-styles/core-styles.component';
import {ColorReferencesComponent} from './components/color-references/color-references.component';
import {ExtrasComponent} from './components/extras/extras.component';
import {DependenciesComponent} from './components/dependencies/dependencies.component';
import {BasisService} from "./services/basis.service";

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        StylesheetInfoComponent,
        CoreStylesComponent,
        ColorReferencesComponent,
        ExtrasComponent,
        DependenciesComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MdButtonModule,
        MdIconModule,
        MdCheckboxModule,
        MdInputModule,
        MdRadioModule,
        MdSelectModule,
        MdMenuModule,
        MdToolbarModule
    ],
    providers: [BasisService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
