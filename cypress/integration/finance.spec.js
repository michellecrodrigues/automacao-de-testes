import DevFinance from '../pages/DevFinance'

beforeEach(function(){
    cy.fixture('finance').then((f)=>{
        this.finance = f
    })
})

describe('dev finance homepage', () => {

    it('Viewing the main page', () => {
        var devFi = new DevFinance()
        devFi.go()
    })

    it('Add output value negative', function() {

        /* var finance = {

            descricao: 'Boleto',
            valor: '-800',
            data: '2022-01-10'

        } */

        var devFi = new DevFinance()
        devFi.outputValue(this.finance.debt)

    })

    it('Positive balance entry', function() {

        /* var finance2 = {
            descricao2: 'adiantamento',
            valor2: '1000',
            data2: '2021-12-30'
        } */
        var devFi = new DevFinance()
        devFi.balaceEntry(this.finance.entry)

    })

    it('Add output value', function() {

        /* var finance3 = {
            descricao3: 'Compras',
            valor3: '-500',
            data3: '2022-01-05'
        } */

        var devFi = new DevFinance()
        devFi.outValue(this.finance.output_value)

    })

    it('Perform registry change', function() {

      /*   var finance4 = {
            descricao4: 'Uber',
            valor4: '-200',
            data4: '2022-01-22'
        } */

        var devFi = new DevFinance()
        devFi.change(this.finance.change)

    })

    it('Delete a record', function() {

        var devFi = new DevFinance()
        devFi.delete()

    })

    it('Change application layout to dark', function(){
        var devFi = new DevFinance()
        devFi.layout()
    })
})

