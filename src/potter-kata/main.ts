export class PotterKata {
    bookPrice:number

    constructor(price: number) {
        this.bookPrice = price
    }

    calculateBasketPrice(basket: string[]): number {
        const isBasketEmpty = basket.length == 0
        if (isBasketEmpty){
            throw new Error("Empty basket")
        }
        return basket.length * this.bookPrice
    }
}
