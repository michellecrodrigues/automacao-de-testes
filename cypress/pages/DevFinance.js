

class DevFinance {
    go() {
        //cy.viewport(1440, 900)
        cy.visit('/')
    }

    outputValue(debt) {
        
        cy.get('#form h2').should('have.text', 'Nova Transação')
        cy.get('[class="button new"]').click()

        cy.get('input[name="description"]').type(debt.descricao,{multiple:true})
        cy.get('input[name="amount"]').type(debt.valor)
        cy.get('input[name="date"]').type(debt.data)
        cy.get('#form button').click()
    }

    balaceEntry(entry) {
        cy.get('[class="button new"]').click()
        cy.get('#form h2').should('have.text', 'Nova Transação')

        cy.get('input[name="description"]').type(entry.descricao)
        cy.get('input[name="amount"]').type(entry.valor)
        cy.get('input[name="date"]').type(entry.data)
        cy.get('#form button').click()
    }

    outValue(output_value) {
        cy.get('[class="button new"]').click()
        cy.get('#form h2').should('have.text', 'Nova Transação', 'compras')

        cy.get('input[name="description"]').type(output_value.descricao)
        cy.get('input[name="amount"]').type(output_value.valor)
        cy.get('input[name="date"]').type(output_value.data)
        cy.get('#form button').click()
    }
    change(change) {
        cy.get('tr[data-index="0"]')
            .get('.data-table__description')
            .get('.data-table__price-income')
            .get('.data-table__date')
            .get('[onclick="Transaction.edit(0)"]').click({ multiple: true })

        cy.get('input[name="description"]').clear(change.descricao)
        cy.get('input[name="description"]').type(change.descricao)
        cy.get('input[name="amount"]').clear(change.valor)
        cy.get('input[name="amount"]').type(change.valor)
        cy.get('input[name="date"]').clear(change.data)
        cy.get('input[name="date"]').type(change.data)
        cy.get('#form button').click()
    }
    delete() {
        cy.get('tr[data-index="2"]')
            .get('.data-table__description')
            .get('.data-table__price-income')
            .get('.data-table__date')
            .get('[onclick="Transaction.remove(2)"]').click({ multiple: true })
    }

    layout() {
        cy.get('.control-theme')
            .get('.theme-switch-circle').click()
    }
}
export default DevFinance;