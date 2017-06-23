import {Component, OnInit, Input} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

import {SetupOption, StyleSheetInfo} from '../../models/stylesheet-info.model';
import {BasisService} from '../../services/basis.service';

@Component({
    selector: 'bsis-stylesheet-info',
    templateUrl: './stylesheet-info.component.html',
    styleUrls: ['./stylesheet-info.component.css']
})
export class StylesheetInfoComponent implements OnInit {
    @Input() bsisForm: FormGroup;
    @Input() stylesheetInfo: StyleSheetInfo;
    stylesheetInfoForm: FormGroup;
    setupOptions: SetupOption[];

    constructor(private fb: FormBuilder, private basisService: BasisService) {
        this.setupOptions = this.basisService.getSetupOptions().options;
    }

    ngOnInit() {
        this.initStylesheetInfoForm();
    }

    private initStylesheetInfoForm() {
        this.stylesheetInfoForm = this.stylesheetInfoToFormGroup(this.stylesheetInfo);
        this.bsisForm.addControl('stylesheetInfo', this.stylesheetInfoForm);
    }

    private stylesheetInfoToFormGroup(model: StyleSheetInfo) {
        return this.fb.group({
            name: [model.name || '', Validators.required],
            author: [model.author || '', Validators.required],
            description: [model.description || '', Validators.required],
            setup: [model.setup || '', Validators.required],
            cssComponentPrefix: [model.cssComponentPrefix || '', Validators.required]
        })
    }

}
