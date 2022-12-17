import { PotterKata } from '../../src/potter-kata/main'


enum HarryPotterBooks {
    book1 = "I",
    book2 = "II",
    book3 = "III",
    book4 = "IV",
    book5 = "V"
}

describe('Potter kata tests', () => {
    it('should raise error if empty basket', () => {
        const basket: string[] = []
        expect(() => PotterKata.calculateBasketPrice(basket)).toThrow("Empty basket")
    })

    it('should return price for 1 book', () => {
        const basket: HarryPotterBooks[] = [HarryPotterBooks.book1]
        expect(PotterKata.calculateBasketPrice(basket)).toBe(8)
    })

    it('should return price for all repeated books', () => {
        const basket: HarryPotterBooks[] = [HarryPotterBooks.book1, HarryPotterBooks.book1]
        expect(PotterKata.calculateBasketPrice(basket)).toBe(16)
    })
})
