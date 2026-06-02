function outer(){
    let helloo = 10
    return function (){
        helloo++
        return helloo
    }
}

let money = outer()

console.log(money());
console.log(money());
console.log(money());
