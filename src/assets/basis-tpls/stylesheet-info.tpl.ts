import {StyleSheetInfo} from '../../app/theme-generator/models/stylesheet-info.model';

export function getStylesheetInfo(stylesheetInfo: StyleSheetInfo): string {
    return `

/*
|--------------------------------------------------------------------------
| Stylesheet Information
|--------------------------------------------------------------------------
|
| Project Layout Name: ${stylesheetInfo.name}
| Author: ${stylesheetInfo.author}
| Description: ${stylesheetInfo.description}
| Layout Setup: ${stylesheetInfo.setup.name}
| Project CSS Component Prefix: ${stylesheetInfo.cssComponentPrefix + '*'}
|`;
}
