const isLeapYear = require('../lib/isLeapYear')
describe('isLeapYear',() =>{
    it("should return true when input 2000", ()=> {
        expect(isLeapYear(2000)).toBe(true)
    })
    it("should return true when input 2008", ()=> {
        expect(isLeapYear(2008)).toBe(true)
    })
    it("should return false when input 1900", ()=> {
        expect(isLeapYear(1900)).toBe(false)
    })
})