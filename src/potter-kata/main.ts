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
        // Del diccionario de libros y cantidades ir cogiendo de todos 1 y aplicando descuento
        // Si nos quedamos en cantidad 0 de un libro, borrarlo del diccionario
        // Asi constantemente hasta tener diccionario tamaño 0
    
        let booksAmountDict:any = {}
        basket.forEach((name: string) => {
            booksAmountDict[name] = (booksAmountDict[name] || 0) + 1
        })

        if (Object.keys(booksAmountDict).length == 1){
            return this.bookPrice * Object.values(booksAmountDict)[0]
        }

        if (Object.keys(booksAmountDict).length == 2){
            return this.calculateDiscount(booksAmountDict)
        }

        return 0
    }
    
    calculateDiscount = (booksAmountDict: any) => {
        let amountOfDifferentBooks = Object.keys(booksAmountDict).length
        Object.keys(booksAmountDict).forEach((book:any) => {
            if(Object.values(booksAmountDict[book]) === 0){
                delete booksAmountDict[book].delete
            } else {
                booksAmountDict[book] = booksAmountDict[book] - 1
            }
        })
        return amountOfDifferentBooks * this.bookPrice * 0.95
    }
}

