function isLeapYear(n){
    if(n % 400 === 0){ return true }
    if(n % 100 === 0){ return false }
    if(n % 4 === 0){return true }
    return false
}
module.exports = isLeapYear