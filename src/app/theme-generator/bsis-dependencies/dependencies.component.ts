import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'bsis-dependencies',
    templateUrl: './dependencies.component.html',
    styleUrls: ['./dependencies.component.css']
})
export class DependenciesComponent implements OnInit {
    checked: boolean;

    constructor() {
        this.checked = true;
    }

    ngOnInit() {
    }

}
