const convertTime=require("./index")
// import convertTime from "./index"

describe("",()=>{
    test('should give time in string from miliseconds', () => {
        expect(convertTime(200000)).toBe("3minutes20seconds")
    });
    test('should give can not be negative', () => {
        expect(convertTime(-200000)).toBe("Time can not be negative")     
    })
    test('should provide rounded output if given decimal input', () => { 
        expect(convertTime(60000.9)).toBe("1minutes0seconds") 
    })
    test('should provide output even if the input is in strings', () => {
        expect(convertTime("63000")).toBe("1minute3seconds")     
    })
    test('call the function without any arguments', () => {
        expect(convertTime()).toBe("Please provide an input") 
    })
    test('call the function with only empty space', () => {
        expect(convertTime(" ")).toBe("At least 1000 miliseconds needs to be provided as input")
    })
})