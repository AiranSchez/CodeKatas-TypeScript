export class PotterKata {
    static calculateBasketPrice(basket: string[]): number {
        const isBasketEmpty = basket.length == 0
        if (isBasketEmpty){
            throw new Error("Empty basket")
        }
        const bookPrice = 8
        return basket.length * bookPrice
    }
}
