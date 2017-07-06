import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

import {Basis} from './models/basis.model';
import {BasisService} from './services/basis.service';
import {ThemeGeneratorService} from './theme-generator.service';

@Component({
    templateUrl: './theme-generator.component.html',
    styleUrls: ['./theme-generator.component.css'],
    providers: [ThemeGeneratorService]
})
export class ThemeGeneratorComponent implements OnInit {
    bsisForm: FormGroup;
    basis: Basis;

    constructor(private  basisService: BasisService,
                private generatorService: ThemeGeneratorService,
                private fb: FormBuilder) {
    }

    ngOnInit() {
        this.basis = this.basisService.getBasis();
        this.bsisForm = this.initBsisForm();
    }

    private initBsisForm() {
        return this.fb.group({});
    };

    public save(): void {
        this.generatorService.generate(this.bsisForm.value);
    }
}
