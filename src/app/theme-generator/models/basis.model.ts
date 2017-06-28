import {StyleSheetInfo} from './stylesheet-info.model';
import {CoreStyles} from './core-style.model';

export class Basis {

    public stylesheetInfo: StyleSheetInfo;
    public coreStyles: CoreStyles;

    constructor() {
        this.stylesheetInfo = new StyleSheetInfo();
        this.coreStyles = new CoreStyles();
    }

    // colorReferences: object[];
    // fonts: object[];
    // flexClasses: boolean;
    // layoutClasses: object;
    // componentClasses: object;
}