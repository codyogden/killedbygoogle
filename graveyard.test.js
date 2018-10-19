const data = require('./graveyard.json');


describe('graveyard', () => {
    it('graveyard', () => {
        expect(data).toHaveLength(84);
        data.forEach((product) => {
            expect(product.dateClose).not.toBeNull();
            expect(product.dateOpen).not.toBeNull();
            expect(product.description).not.toBeNull();
            expect(product.link).not.toBeNull();
            expect(product.name).not.toBeNull();

            let dateClose = new Date(product.dateClose).getTime();
            let dateOpen = new Date(product.dateOpen).getTime();
            expect(dateOpen).toBeLessThanOrEqual(dateClose);
        });
    });
});

