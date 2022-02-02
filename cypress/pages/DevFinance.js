

class DevFinance {
    go(){
        cy.viewport(1440, 900)
        cy.visit('https://maratona-discover-devfinance.netlify.app/#.')
    }

    outputValue(finance) {
        cy.get('[class="button new"]').click()
        cy.get('#form h2').should('have.text', 'Nova Transação')

        cy.get('input[name="description"]').type(finance.descricao)
        cy.get('input[name="amount"]').type(finance.valor)
        cy.get('input[name="date"]').type(finance.data)
        cy.get('#form button').click()
    }

    balaceEntry(finance2) {
        cy.get('[class="button new"]').click()
        cy.get('#form h2').should('have.text', 'Nova Transação')

        cy.get('input[name="description"]').type(finance2.descricao2)
        cy.get('input[name="amount"]').type(finance2.valor2)
        cy.get('input[name="date"]').type(finance2.data2)
        cy.get('#form button').click()
    }

    outValue(finance3) {
        cy.get('[class="button new"]').click()
        cy.get('#form h2').should('have.text', 'Nova Transação', 'compras')

        cy.get('input[name="description"]').type(finance3.descricao3)
        cy.get('input[name="amount"]').type(finance3.valor3)
        cy.get('input[name="date"]').type(finance3.data3)
        cy.get('#form button').click()
    }
    change(finance4) {
        cy.get('tr[data-index="0"]')
            .get('.data-table__description')
            .get('.data-table__price-income')
            .get('.data-table__date')
            .get('[onclick="Transaction.edit(0)"]').click({ multiple: true })

            cy.get('input[name="description"]').clear(finance4.descricao4)
            cy.get('input[name="description"]').type(finance4.descricao4)
            cy.get('input[name="amount"]').clear(finance4.valor4)
            cy.get('input[name="amount"]').type(finance4.valor4)
            cy.get('input[name="date"]').clear(finance4.data4)
            cy.get('input[name="date"]').type(finance4.data4)
            cy.get('#form button').click()
    }
    delete(){
        cy.get('tr[data-index="2"]')
          .get('.data-table__description')
          .get('.data-table__price-income')
          .get('.data-table__date')
          .get('[onclick="Transaction.remove(2)"]').click({ multiple: true })
    }

    layout(){
        cy.get('.control-theme')
          .get('.theme-switch-circle').click()
    }
}
export default DevFinance;