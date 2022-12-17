export class PotterKata {
    static calculateBasketPrice(basket: string[]): number {
        if (basket.length == 0){
            throw new Error("Empty basket")
        }
        return 0
    }
}
