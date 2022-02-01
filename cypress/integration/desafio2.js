/// <reference types="cypress" />

context('desafio2_api', () => {

      beforeEach(() => {
      cy.visit('https://swapi.dev/api/people/2/')
    })
   
    it('testando api swapi', () => {
        cy.request({
          method: 'GET',
          url: 'https://swapi.dev/api/people/2/',
        }).then(response => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.not.null
            expect(response.body.name).to.eq("C-3PO")
            expect(response.body.height).to.eq("167")
            expect(response.body.mass).to.eq("75")
            expect(response.body.hair_color).to.eq("n/a")
            expect(response.body.skin_color).to.eq("gold")
            expect(response.body.eye_color).to.eq("yellow")
            expect(response.body.birth_year).to.eq("112BBY")
            expect(response.body.gender).to.eq("n/a")
            expect(response.body.homeworld).to.eq("https://swapi.dev/api/planets/1/")
            expect(response.body.films).to.be.not.null
           
        })

    })

})