import {Component, OnInit} from '@angular/core';
import {GoogleFontsService} from '../../services/google-fonts.service';

@Component({
    selector: 'bsis-core-styles',
    templateUrl: './core-styles.component.html',
    styleUrls: ['./core-styles.component.css']
})
export class CoreStylesComponent implements OnInit {

    private value: any = {};

    private fonts: Array<Object>;

    constructor(private GoogleFontsService: GoogleFontsService) {
    }

    ngOnInit() {
        this.GoogleFontsService.getAllFonts()
            .subscribe((data) => {
                console.log(data);
                this.fonts = data.items.map((item) => {
                    return {
                        id: item.family,
                        text: item.family
                    }
                });
            });
    }

    public selected(value: any): void {
        console.log('Selected value is: ', value);
    }

    public removed(value: any): void {
        console.log('Removed value is: ', value);
    }

    public typed(value: any): void {
        console.log('New search input: ', value);
    }

    public refreshValue(value: any): void {
        this.value = value;
    }
}
