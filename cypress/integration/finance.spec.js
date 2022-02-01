
describe('Home Page', () => {
    it('Vistando a página principal', () => {
        cy.viewport(1440, 900)
        cy.visit('https://maratona-discover-devfinance.netlify.app/#.')
    })

    it('Adicionar valor de saída', () => {
        cy.get('[class="button new"]').click()
        cy.get('#form h2').should('have.text', 'Nova Transação')

        var finance = {
            descricao: 'compras',
            valor: '-800',
            data: '2022-01-10'
        }

        cy.get('input[name="description"]').type(finance.descricao)
        cy.get('input[name="amount"]').type(finance.valor)
        cy.get('input[name="date"]').type(finance.data)
        cy.get('#form button').click()

    })

    it('Entrada de saldo positivo', () => {
        cy.get('[class="button new"]').click()
        cy.get('#form h2').should('have.text', 'Nova Transação')

        var finance = {
            descricao: 'conta de energia',
            valor: '1000',
            data: '2021-12-30'
        }

        cy.get('input[name="description"]').type(finance.descricao)
        cy.get('input[name="amount"]').type(finance.valor)
        cy.get('input[name="date"]').type(finance.data)
        cy.get('#form button').click()

    })
    it('Adicionar valor de saída ', () => {
        cy.get('[class="button new"]').click()
        cy.get('#form h2').should('have.text', 'Nova Transação', 'compras')


        var finance = {
            descricao: 'Valor em caixa',
            valor: '-500',
            data: '2022-01-05'
        }

        cy.get('input[name="description"]').type(finance.descricao)
        cy.get('input[name="amount"]').type(finance.valor)
        cy.get('input[name="date"]').type(finance.data)
        cy.get('#form button').click()

    })

    it('Realizar alteração de registro ', () => {
        cy.get('tr[data-index="0"]')
            .get('.data-table__description')
            .get('.data-table__price-income')
            .get('.data-table__date')
            .get('[onclick="Transaction.edit(0)"]').click({ multiple: true })

        var finance = {
            descricao: 'Uber',
            valor: '-200',
            data: '2022-01-22'
        }

        cy.get('input[name="description"]').clear(finance.descricao)
        cy.get('input[name="description"]').type(finance.descricao)
        cy.get('input[name="amount"]').clear(finance.valor)
        cy.get('input[name="amount"]').type(finance.valor)
        cy.get('input[name="date"]').clear(finance.data)
        cy.get('input[name="date"]').type(finance.data)
        cy.get('#form button').click()



    })

    it('Deletar um registro', () => {

        cy.get('tr[data-index="2"]')
            .get('.data-table__description')
            .get('.data-table__price-income')
            .get('.data-table__date')
            .get('[onclick="Transaction.remove(2)"]').click({ multiple: true })

    })

    //it('Alterar o tema de finance', () => {
        
        //cy.check('div.control-theme').click()
          //.should('not.be.visible')
          //.should('be.checked')
       // cy.contains('[value="night-mode"]').click()
    //})



})

