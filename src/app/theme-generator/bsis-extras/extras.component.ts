import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'bsis-extras',
    templateUrl: './extras.component.html',
    styleUrls: ['./extras.component.css']
})
export class ExtrasComponent implements OnInit {

    checked: boolean;

    constructor() {
        this.checked = true;
    }

    ngOnInit() {

    }
}
