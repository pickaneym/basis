import {StyleSheetInfo} from './stylesheet-info.model';
import {CoreStyles} from './core-style.model';
import {ColorRefs} from './color-ref.model';

export class Basis {

    stylesheetInfo: StyleSheetInfo;
    coreStyles: CoreStyles;
    colorRefs: ColorRefs;

    constructor() {
        this.stylesheetInfo = new StyleSheetInfo();
        this.coreStyles = new CoreStyles();
        this.colorRefs = new ColorRefs();
    }

    // colorReferences: object[];
    // fonts: object[];
    // flexClasses: boolean;
    // layoutClasses: object;
    // componentClasses: object;
}