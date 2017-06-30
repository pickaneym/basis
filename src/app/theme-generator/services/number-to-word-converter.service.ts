import {Injectable} from '@angular/core';

@Injectable()
export class NumberToWordService {
    private num: Array<string>;
    private tens: Array<string>;

    constructor() {
        this.num = 'zero one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen'.split(' ');
        this.tens = 'twenty thirty forty fifty sixty seventy eighty ninety'.split(' ');
    }

    convertNumberToWord(n) {
        if (n < 20) {
            return this.num[n];
        }
        const digit = n % 10;
        if (n < 100) {
            return this.tens[Math.floor(n / 10) - 2] + (digit ? '-' + this.num[digit] : '');
        }
        if (n < 1000) {
            return this.num[Math.floor(n / 100)] + ' hundred' + (n % 100 === 0 ? '' : ' ' + this.convertNumberToWord(n % 100));
        }
        return this.convertNumberToWord(Math.floor(n / 1000)) + ' thousand' +
            (n % 1000 !== 0 ? ' ' + this.convertNumberToWord(n % 1000) : '');
    }
}
