const taxCalculator=require("./tax_calculator")

describe('', () => {
     
    test('should give correctOutput for input', () => {
        expect(taxCalculator(560000,200000)).toBe(102000)  
    })
    test('can not give output for negative inputs', () => {
        expect(taxCalculator(-560000,200000)).toBe("Income and savings can not be in in negative,please provide a correct value")    
    })
    test('should not give output for a single argument', () => { 
        expect(taxCalculator(560000)).toBe("Please provide both income & savings to calculate your tax")
    })
    test('should give output even for decimal inputs', () => { 
        expect(taxCalculator(560000.98,200000.55)).toBe(102001)
    })
    test('call the taxCalculator function without any arguments',() =>{     
        expect(taxCalculator()).toBe("Please provide both income & savings to calculate your tax")
    })
    test('calling the taxCalculator function with string arguments,but the output is number', () => { 
            expect(taxCalculator("560000","200000")).toBe(102000)
    })


})