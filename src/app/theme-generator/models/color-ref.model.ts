export class ColorRefs {
    backgroundColor: Array<ColorRef>;
    textColor: Array<ColorRef>;
    buttonColor: Array<ColorRef>;
}

interface ColorRef {
    className: string;
    color: string;
}

