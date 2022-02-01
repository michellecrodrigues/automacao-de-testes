
describe('Home Page', ()=>{

    it('Vistando a página principal', ()=>{
        cy.viewport(1440,900)
        cy.visit('https://maratona-discover-devfinance.netlify.app/#.')
    })


    it('Adicionar uma nova transacao', ()=>{
        cy.get('[class="button new"]').click()
        cy.get('#form h2').should('have.text', 'Nova Transação')
        
        var finance = {
            descricao: 'compras',
            valor: '800',
            data: '2022-01-10'
        }

        cy.get('input[name="description"]').type(finance.descricao)
        cy.get('input[name="amount"]').type(finance.valor)
        cy.get('input[name="date"]').type(finance.data)
        cy.get('#form button').click()

    })

        it('Adiciona um valor negativo', ()=>{
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

            
            it('Edita uma transacao', ()=>{
                cy.get('tr[data-index="0"]')
                cy.get('[alt="Editar transação"]')
                cy.get('.data-table-edit').focus()
                  // .should('be.visible') .focus()
                   //.wait(500)
                   //.contains('.modal-overlay.active')
                  
                //cy.wait(500)
                //cy.contains('[div.modal-overlay]').click('active');
               // cy.get('[#form]', { timeout: 500 })
        //.find('input')
        //.click()
            })      
              
})          
        