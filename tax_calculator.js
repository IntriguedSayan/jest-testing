
const taxCalculator=(...args)=>{
    if(args.length<2){
        return("Please provide both income & savings to calculate your tax")
    }
    let[income,savings]=args
    if(typeof(income)==="string"){
        income=Number(income)
    }
    if(typeof(savings)){
        savings=Number(savings)
    }
    if(income<0 || savings<0){
        return("Income and savings can not be in in negative,please provide a correct value")
    }

    if(income<250000){
        return ("No tax required")
    }
    if(income>=250000 && income<500000){
        let tax=(income*10)/100
        let rebate=savings/2
        let corrRebate
        if(rebate<=50000){
             corrRebate=rebate
        }else{
             corrRebate=50000
        }
        let newIncome=income-corrRebate
        let newTax=Math.ceil((newIncome*10)/100)
        return newTax
    }

    if(income>=500000 && income<1000000){
        let tax=(income*20)/100
        let rebate=(savings*30)/100
        let corrRebate
        if(rebate<=50000) corrRebate=rebate
        else corrRebate=50000
        let newIncome=income-corrRebate
        let newTax=Math.ceil(newIncome/5)
        return newTax
    }

    if(income>=1000000){
        let tax=(income*30)/100
        let rebate=(savings*10)/100
        let corrRebate
        rebate<=50000?corrRebate=rebate:corrRebate=50000
        let newIncome=income=corrRebate
        let newTax=Math.ceil((newIncome*30)/100)
        return newTax
    }


}

    console.log(taxCalculator(560000.98,200000.55))

module.exports=taxCalculator