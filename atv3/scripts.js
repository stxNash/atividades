function calcularImovel(metragem, quartos){
    let m2 = 3000
    let preco = 0

    switch(quartos){
        case 1:
            preco = metragem*m2
            break
        case 2:
            preco = metragem*(m2*1.2)
            break
        case 3:
            preco = metragem*(m2*1.5)
            break
        default:
            alert("Não permitido")
            break
    }
    return preco
}

let quartos = 2
let metragem = 100
let precoImovel = calcularImovel(metragem, quartos)
console.log(`O preço do imóvel com metragem ${metragem}, ${quartos} quartos é R$${precoImovel}`)