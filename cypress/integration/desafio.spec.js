
describe('Home Page', ()=>{
    it('Vistando a página principal', ()=>{
        cy.viewport(1440,900)
        cy.visit('https://maratona-discover-devfinance.netlify.app/#.')
    })

describe('Transacao', ()=>{
    it('Adicionar uma nova transacao', ()=>{
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

    describe('Transacao 2', ()=>{
        it('Adicionar uma nova transacao', ()=>{
            cy.get('[class="button new"]').click()
            cy.get('#form h2').should('have.text', 'Nova Transação')
            
            var finance = {
                descricao: 'conta de energia',
                valor: '-150',
                data: '2021-12-30'
            }
    
            cy.get('input[name="description"]').type(finance.descricao)
            cy.get('input[name="amount"]').type(finance.valor)
            cy.get('input[name="date"]').type(finance.data)
            cy.get('#form button').click()
    
        })
        describe('Transacao 3', ()=>{
            it('Adicionar uma nova transacao', ()=>{
                cy.get('[class="button new"]').click()
                cy.get('#form h2').should('have.text', 'Nova Transação')
                
                
                var finance = {
                    descricao: 'Valor em caixa',
                    valor: '3500',
                    data: '2022-01-05'
                }
        
                cy.get('input[name="description"]').type(finance.descricao)
                cy.get('input[name="amount"]').type(finance.valor)
                cy.get('input[name="date"]').type(finance.data)
                cy.get('#form button').click()
        
            })
               
        })
    })
})
})
