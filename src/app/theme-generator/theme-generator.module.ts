import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
    MdButtonModule,
    MdIconModule,
    MdCheckboxModule,
    MdInputModule,
    MdRadioModule,
    MdSelectModule
} from '@angular/material';
import {SelectModule} from 'ng2-select';

import * as tg from './';
import {HttpModule} from '@angular/http'; // Import from barrel

@NgModule({
    declarations: [
        tg.ThemeGeneratorComponent,
        tg.StylesheetInfoComponent,
        tg.CoreStylesComponent,
        tg.ColorReferencesComponent,
        tg.DependenciesComponent,
        tg.ExtrasComponent
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
        HttpModule,
        tg.ThemeGeneratorRoutingModule
    ],
    exports: [],
    providers: [
        tg.BasisService,
        tg.GoogleFontsService
    ]
})
export class ThemeGeneratorModule {
}
