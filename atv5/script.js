function mostrarDados() {
    const nome = String(document.getElementById('nome').value)
    const idade = Number(document.getElementById('idade').value)

    // Ler CPF
    const cpf = String(document.getElementById('cpf').value)

    // alert(`O imovel com ${quartos} quartos e com metragem de ${metragem}m2 custa R${preço},00`)
    document.querySelector(".mostra").innerHTML = `Cadastrado: ${nome} tem CPF: ${cpf} e ${idade} anos`;
}