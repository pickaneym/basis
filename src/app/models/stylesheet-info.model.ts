export class StyleSheetInfo {
    name: string;
    author: string;
    description: string;
    setup: SetupOption;
    cssComponentPrefix: string;
}

export class SetupOptions {
    options: SetupOption[] = [];

    constructor() {
        this.options.push(new SetupOption('Mobile First'));
        this.options.push(new SetupOption('Desktop First'));
    }
}

export class SetupOption {
    name: string;

    constructor(name) {
        this.name = name;
    }
}