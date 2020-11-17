describe('Past Conversion Rates', ()=> {

    it('Specific date Foreign Exchange rates', ()=>{
        cy.request({
            url: 'https://api.ratesapi.io/api/2010-01-12',
            method: 'GET',
        }).then(response => {
            expect(response.status).to.eq(200)
            expect(response.body.base).to.equal("EUR")
            expect(response.body.rates.GBP).to.equal(0.8972)
            expect(response.body.rates.HKD).to.equal(11.2301)
        })
    })

    it('Specific date Foreign Exchange Rates with Symbols.', ()=>{
        cy.request({
            url: 'https://api.ratesapi.io/api/2010-01-12?symbols=USD,GBP',
            method: 'GET',
        })

            .then(response => {
            expect(response.status).to.eq(200)
            expect(response.body.base).to.equal("EUR")
            expect(response.body.rates.USD).to.equal(1.4481)
            expect(response.body.rates.GBP).to.equal(0.8972)
            })

    })

    it('Specific date Foreign Exchange Rates with Base', ()=>{
        cy.request({
            url: 'https://api.ratesapi.io/api/2010-01-12?base=USD',
            method: 'GET',
        })

            .then(response => {
                expect(response.status).to.eq(200)
            })

    })

    it('Specific date Foreign Exchange Rates with Symbols and Base', ()=>{
        cy.request({
            url: 'https://api.ratesapi.io/api/2010-01-12?base=USD&symbols=GBP',
            method: 'GET',
        })

            .then(response => {
                expect(response.status).to.eq(200)
                expect(response.body.base).to.equal("USD")
                expect(response.body.rates.GBP).to.equal(0.6195704717)
            })

    })

})
