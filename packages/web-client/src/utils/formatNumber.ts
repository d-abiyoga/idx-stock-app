export class formatNumber {
    constructor() {}
    toCurrency(number: number): string {
        const floatNumber = parseFloat(number.toFixed(2));
        console.log(floatNumber);
        return new Intl.NumberFormat().format(floatNumber);
    }

    toPercentage(number: number): string {
        return `${number.toFixed(2)}%`;
    }
}
