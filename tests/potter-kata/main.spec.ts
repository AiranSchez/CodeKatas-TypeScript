import { PotterKata } from '../../src/potter-kata/main'

// Caso 0 - Cesta vacía -> Lanza error

describe('Potter kata tests', () => {
    it('should raise error if empty basket', () => {
        const basket: string[] = []
        expect(() => PotterKata.calculateBasketPrice(basket)).toThrow("Empty basket")
    })
})
