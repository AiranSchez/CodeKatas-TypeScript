import { PotterKata } from '../../src/potter-kata/main'


enum HarryPotterBooks {
    book1 = "I",
    book2 = "II",
    book3 = "III",
    book4 = "IV",
    book5 = "V"
}

describe('Potter kata tests', () => {
    const potterKata = new PotterKata(8)
    it('should raise error if empty basket', () => {
        const basket: string[] = []
        expect(() => potterKata.calculateBasketPrice(basket)).toThrow("Empty basket")
    })

    it('should return price for 1 book', () => {
        const basket: HarryPotterBooks[] = [HarryPotterBooks.book1]
        expect(potterKata.calculateBasketPrice(basket)).toBe(8)
    })

    it('should return price for all repeated books', () => {
        const basket: HarryPotterBooks[] = [HarryPotterBooks.book1, HarryPotterBooks.book1]
        expect(potterKata.calculateBasketPrice(basket)).toBe(16)
    })

    it('should return price with discount for 2 different books', () => {
        const basket: HarryPotterBooks[] = [HarryPotterBooks.book1, HarryPotterBooks.book2]
        expect(potterKata.calculateBasketPrice(basket)).toBe(15.20)
    })
})
