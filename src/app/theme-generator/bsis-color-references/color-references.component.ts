import {Component, Input, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormArray} from '@angular/forms';

import {ColorRefs} from '../models/color-ref.model';
import {NumberToWordService} from '../services/number-to-word-converter.service';

@Component({
    selector: 'bsis-color-references',
    templateUrl: './color-references.component.html',
    styleUrls: ['./color-references.component.css'],
    providers: [NumberToWordService]
})
export class ColorReferencesComponent implements OnInit {
    @Input() bsisForm: FormGroup;
    @Input() colorRefs: ColorRefs;
    colorRefsForm: FormGroup;
    backgroundColorFormArray: FormArray;
    textColorFormArray: FormArray;
    buttonColorFormArray: FormArray;

    constructor(private fb: FormBuilder, private numberToWord: NumberToWordService) {
    }

    ngOnInit() {
        this.initColorRefsForm();
    }

    addColorRef(fa: FormArray, type: string): void {
        const index = fa.length + 1;
        fa.push(this.initColorRef(type, index));
    }

    removeColorRef(fa: FormArray, index: number) {
        fa.controls.forEach((control, i) => {
            if (i <= index) {
                return;
            }
            control.patchValue({
                className: control.get('className').value.split('-')[0] + '-' + this.numberToWord.convertNumberToWord(i)
            });
        });
        fa.removeAt(index);
    }

    private initColorRefsForm() {
        this.colorRefsForm = this.colorRefsToFormGroup();
        this.bsisForm.addControl('colorRefs', this.colorRefsForm);
        this.backgroundColorFormArray = this.bsisForm.get('colorRefs').get('backgroundColor') as FormArray;
        this.textColorFormArray = this.bsisForm.get('colorRefs').get('textColor')  as FormArray;
        this.buttonColorFormArray = this.bsisForm.get('colorRefs').get('buttonColor')  as FormArray;
    }

    private colorRefsToFormGroup(): FormGroup {
        return this.fb.group({
            backgroundColor: this.fb.array([
                this.initColorRef('bg', 1)
            ]),
            textColor: this.fb.array([
                this.initColorRef('color', 1)
            ]),
            buttonColor: this.fb.array([
                this.initColorRef('btn', 1)
            ])
        })
    }

    private initColorRef(type: string, index: number): FormGroup {
        const className = `.${type}-${this.numberToWord.convertNumberToWord(index)}`;
        return this.fb.group({
            className: [className],
            color: ['']
        })
    }

}
