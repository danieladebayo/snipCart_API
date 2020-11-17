describe('Exchange Rates', ()=> {

    it('Latest Foreign Exchange rates.', ()=>{
        cy.request({
            url: 'https://api.ratesapi.io/api/latest',
            method: 'GET',
        }).then(response => {
            expect(response.status).to.eq(200)
        })
    })

    it('Latest Foreign Exchange Rates with Symbols.', ()=>{
        cy.request({
            url: 'https://api.ratesapi.io/api/latest?symbols=USD,GBP',
            method: 'GET',
        })

            .then(response => {
            expect(response.status).to.eq(200)
            expect(response.body.base).to.equal("EUR")
            expect(response.body.rates.USD).to.equal(1.1815)
            expect(response.body.rates.GBP).to.equal(0.89683)
            })

    })

    it('Latest Foreign Exchange Rates with Base.', ()=>{
        cy.request({
            url: 'https://api.ratesapi.io/api/latest?base=USD',
            method: 'GET',
        })

            .then(response => {
                expect(response.status).to.eq(200)
                expect(response.body.base).to.equal("USD")
                expect(response.body.rates.GBP).to.equal(0.7590605163)
                expect(response.body.rates.HKD).to.equal(7.7535336437)
            })

    })

    it('Latest Foreign Exchange Rates with Symbols and Base.', ()=>{
        cy.request({
            url: 'https://api.ratesapi.io/api/latest?base=USD&symbols=GBP',
            method: 'GET',
        })

            .then(response => {
                expect(response.status).to.eq(200)
                expect(response.body.base).to.equal("USD")
                expect(response.body.rates.GBP).to.equal(0.7590605163)
            })


    })

})
