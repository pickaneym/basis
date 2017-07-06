import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {GoogleFontsService} from '../services/fonts.service';
import {CoreStyles} from '../models/core-style.model';

@Component({
    selector: 'bsis-core-styles',
    templateUrl: './core-styles.component.html',
    styleUrls: ['./core-styles.component.css']
})
export class CoreStylesComponent implements OnInit {
    @Input() bsisForm: FormGroup;
    @Input() coreStyles: CoreStyles;
    coreStylesForm: FormGroup;
    googleFonts: Array<object>;
    fontVariants: Array<string>;
    fontOptions: boolean;

    constructor(private fb: FormBuilder, private fontService: GoogleFontsService) {
        this.getGoogleFonts();
        this.fontVariants = [];
        this.fontOptions = false;
    }

    ngOnInit() {
        this.initCoreStylesForm();
        this.onFontChange();
        this.onFontTypeChange();
    }

    private onFontTypeChange() {
        this.coreStylesForm.get('fontType').valueChanges
            .subscribe(fontType => {
                this.fontOptions = fontType === 'google-font';

                if (fontType === 'default-font') {
                    this.coreStylesForm.patchValue({
                        font: null,
                        variants: null,
                        importUrl: false,
                        download: false
                    });

                    this.fontVariants = [];
                }
            });
    }

    private onFontChange() {
        this.coreStylesForm.get('font').valueChanges
            .subscribe(font => {
                if (font === null) {
                    return;
                }

                this.fontVariants = font.variants;
            });
    }

    private initCoreStylesForm() {
        this.coreStylesForm = this.coreStylesToFormGroup(this.coreStyles);
        this.bsisForm.addControl('coreStyles', this.coreStylesForm);
    }

    private coreStylesToFormGroup(model: CoreStyles) {
        return this.fb.group({
            font: [model.font || null],
            variants: [model.variants || null],
            fontType: [model.fontType || 'default-font'],
            importUrl: [model.importUrl || false],
            download: [model.download || false]
        })
    }

    private getGoogleFonts(): void {
        this.fontService.getGoogleFonts()
            .subscribe(fonts => {
                console.log(fonts);
                this.googleFonts = fonts.items;
            });
    }

}
