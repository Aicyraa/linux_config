let salaries = {
    John: 100,
    Pete: 300,
    Mary: 250,
}

function sumSalaries(salary){
    return Object.values(salary).reduce((sum, value ) => value + sum, 0)
}

function count(obj){
    return Object.keys(obj).length
}

console.log(sumSalaries(salaries));
console.log(count(salaries));
