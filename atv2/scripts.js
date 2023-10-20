function calculador(n1, n2){
    return (n2/n1)*100
}

let x = 25
let y = 10
let porcentagem = calculador(x,y)
console.log(`${porcentagem}% de ${x} é ${y}`)