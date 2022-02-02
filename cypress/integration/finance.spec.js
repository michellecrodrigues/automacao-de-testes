import DevFinance from '../pages/DevFinance'

describe('dev finance homepage', () => {

    it('Viewing the main page', () => {
        var devFi = new DevFinance()
        devFi.go()
    })

    it('Add output value', () => {

        
        var finance = {

            descricao: 'Boleto',
            valor: '-800',
            data: '2022-01-10'
        
        }    
        
        var devFi = new DevFinance()
        devFi.outputValue(finance)
        
    })

    it('Positive balance entry', () => {

        var finance2 = {
            descricao2: 'conta de energia',
            valor2: '1000',
            data2: '2021-12-30'
        }
        var devFi = new DevFinance()
        devFi.balaceEntry(finance2)

    })
    
    it('Add output value', () => {

        var finance3 = {
            descricao3: 'Valor em caixa',
            valor3: '-500',
            data3: '2022-01-05'
        }

        var devFi = new DevFinance()
        devFi.outValue(finance3)

    })

    it('Perform registry change', () => {

        var finance4 = {
            descricao4: 'Uber',
            valor4: '-200',
            data4: '2022-01-22'
        }

        var devFi = new DevFinance()
        devFi.change(finance4)

    })

    it('Delete a record', () => {

        var devFi = new DevFinance()
        devFi.delete()

    })

    it('Change application layout to dark', () => {
        var devFi = new DevFinance()
        devFi.layout()
    })



})

