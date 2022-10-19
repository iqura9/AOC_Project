
const sortA_9 = (str,split,join,register) => {
    let ArrString = str.split(split);
    if(register){
        ArrString.sort((a, b) => +(a>b)||-(b>a)) // register matter
    }else{
        ArrString.sort((a,b)=> a.localeCompare(b,{ignorePunctuation: true},{sensitivity: 'base'})); //ignore register
    }
    return ArrString.join(join);
}

const sort9_A = (str,split,join,register) => {
    let ArrString = str.split(split);
    if(register){
        ArrString.sort((a, b) => +(a<b)||-(b<a)) // register matter
    }else{
        ArrString.sort((a,b)=> b.localeCompare(a,{ignorePunctuation: true},{sensitivity: 'base'})); //ignore register
    }
    return ArrString.join(join);
}
const CountOfLetters_AlotFirst = (str,split,join) => {
    let ArrString = str.split(split);
    ArrString.sort((a, b) => b.length - a.length || b.localeCompare(a))
    return ArrString.join(join);
}
const CountOfLetters_LowFirst = (str,split,join) => {
    let ArrString = str.split(split);
    ArrString.sort((a, b) => a.length - b.length || a.localeCompare(b))
    return ArrString.join(join);
}
module.exports = {
    sort9_A, sortA_9, CountOfLetters_AlotFirst, CountOfLetters_LowFirst
}
