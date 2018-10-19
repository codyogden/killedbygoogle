const data = require('./graveyard.json');


describe('graveyard', () => {
    it('graveyard', () => {
        expect(data).toHaveLength(82);
        data.forEach((product) => {
            let dateClose = new Date(product.dateClose).getTime();
            let dateOpen = new Date(product.dateOpen).getTime();
            expect(dateOpen).toBeLessThanOrEqual(dateClose);
        });
    });
});

