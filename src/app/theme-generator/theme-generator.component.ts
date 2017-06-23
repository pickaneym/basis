import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

import {Basis} from './models/basis.model';
import {BasisService} from './services/basis.service';
import {GoogleFontsService} from './services/google-fonts.service';

@Component({
  selector: 'bsis-theme-generator',
  templateUrl: './theme-generator.component.html',
  styleUrls: ['./theme-generator.component.css']
})
export class ThemeGeneratorComponent implements OnInit {
  bsisForm: FormGroup;
  basis: Basis;

  constructor(private  basisService: BasisService,
              private fb: FormBuilder) {
  }

  ngOnInit() {
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
