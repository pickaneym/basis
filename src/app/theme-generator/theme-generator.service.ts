import {Injectable} from '@angular/core';
import 'rxjs/add/operator/toPromise';

import {Basis} from './models/basis.model';
import {StyleSheetInfo} from './models/stylesheet-info.model';
import {ColorRefs} from './models/color-ref.model';
import * as tpl from '../../assets/basis-tpls';
import {CoreStyles} from './models/core-style.model';

@Injectable()
export class ThemeGeneratorService {

    constructor() {
    }

    generate(bsis: Basis) {
        console.log(bsis);
        if (bsis.coreStyles.importUrl) {
            console.log(this.getFontImportUrl(bsis.coreStyles));
        }

        console.log(this.getStyleSheetInfo(bsis.stylesheetInfo));
        console.log(this.getCoreStyles(bsis));
        console.log(this.getColorRefs(bsis.colorRefs));
        console.log(this.getFlexClasses());
        console.log(this.getHelperClasses());

        let basisConcat = this.getFontImportUrl(bsis.coreStyles) + this.getStyleSheetInfo(bsis.stylesheetInfo) +
            this.getColorRefs(bsis.colorRefs) + this.getCoreStyles(bsis) +
            this.getFlexClasses() + this.getHelperClasses();

        const element = document.createElement('a');
        element.setAttribute('href', 'data:text/css;charset=utf-8,' + encodeURIComponent(basisConcat));
        element.setAttribute('download', 'layout.css');
        element.style.display = 'none';
        document.body.appendChild(element);
        element.click();

    }

    private getFontImportUrl(coreStyles: CoreStyles) {
        const importUrl = [];
        importUrl.push('@import url(\'https://fonts.googleapis.com/css?family=');
        importUrl.push(coreStyles.font.family.replace(/ /g, '+'));
        importUrl.push(':');
        importUrl.push(coreStyles.variants.join(','));
        importUrl.push('\');');
        return importUrl.join('');
    }

    private getCoreStyles(bsis: Basis): string {
        const fontSize = bsis.stylesheetInfo.setup.name === 'Mobile First' ? '12px' : '16px';
        let fontFamilyCss = '';

        if (bsis.coreStyles.fontType === 'google-font') {
            fontFamilyCss = `
   font-family: '${bsis.coreStyles.font.family}', ${bsis.coreStyles.font.category};`;
        }

        return tpl.getCoreStyles(fontSize, fontFamilyCss);
    }

    private getFlexClasses(): string {
        return tpl.flexClasses;
    }

    private getHelperClasses(): string {
        return tpl.helperClasses;
    }

    private getStyleSheetInfo(stylesheetInfo: StyleSheetInfo): string {
        return tpl.getStylesheetInfo(stylesheetInfo);
    }

    private getColorRefs(colorRefs: ColorRefs): string {
        let colorValues = '';
        let largestRefArray = colorRefs.backgroundColor;

        Object.keys(colorRefs).map(k => {
            if (largestRefArray.length < colorRefs[k].length) {
                largestRefArray = colorRefs[k];
            }
        });

        largestRefArray.forEach((bg, i) => {
            const lineBreak = i === largestRefArray.length - 1 ? '' : '\n';

            colorValues += colorRefs.backgroundColor.length > i ?
                `| ${colorRefs.backgroundColor[i].color}               ` :
                `|                       `;

            colorValues += colorRefs.textColor.length > i ?
                `| ${colorRefs.textColor[i].color}               ` :
                `|                       `;

            colorValues += colorRefs.buttonColor.length > i ?
                `| ${colorRefs.buttonColor[i].color}               ` + lineBreak :
                `|                       ` + lineBreak;
        });

        return tpl.getColorRefs(colorValues);
    }
}

