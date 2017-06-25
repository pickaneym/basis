import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MdButtonModule,
    MdIconModule,
    MdCheckboxModule,
    MdInputModule,
    MdRadioModule,
    MdSelectModule
} from '@angular/material';
import {SelectModule} from 'ng2-select';
import {ThemeGeneratorRoutingModule} from './theme-generator.routing';

import {BasisService} from './services/basis.service';
import {GoogleFontsService} from './services/google-fonts.service';
import {StylesheetInfoComponent} from './components/stylesheet-info/stylesheet-info.component';
import {CoreStylesComponent} from './components/core-styles/core-styles.component';
import {ColorReferencesComponent} from './components/color-references/color-references.component';
import {DependenciesComponent} from './components/dependencies/dependencies.component';
import {ExtrasComponent} from './components/extras/extras.component';
import {ThemeGeneratorComponent} from './theme-generator.component';



@NgModule({
    declarations: [
        ThemeGeneratorComponent,
        StylesheetInfoComponent,
        CoreStylesComponent,
        ColorReferencesComponent,
        DependenciesComponent,
        ExtrasComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        MdButtonModule,
        MdIconModule,
        MdCheckboxModule,
        MdInputModule,
        MdRadioModule,
        MdSelectModule,
        SelectModule,
        ThemeGeneratorRoutingModule
    ],
    exports: [],
    providers: [BasisService, GoogleFontsService]
})
export class ThemeGeneratorModule {
}
