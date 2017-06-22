import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

import {BasisService} from './services/basis.service';
import {Basis} from './models/basis.model';
import {GoogleFontsService} from './services/google-fonts.service';

@Component({
    selector: 'bsis-root',
    templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
    bsisForm: FormGroup;
    basis: Basis;

    constructor(private  basisService: BasisService,
                private fb: FormBuilder,
                private GoogleFontsService: GoogleFontsService) {
    }

    ngOnInit() {
        this.GoogleFontsService.getAllFonts()
            .subscribe((data) => {
                console.log(data);
            });
        this.basis = this.basisService.getBasis();
        this.bsisForm = this.initBsisForm();
    }

    private initBsisForm() {
        return this.fb.group({});
    };

    private save(): void {
        console.log(this.bsisForm.value);
    }
}
