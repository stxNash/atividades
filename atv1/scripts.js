function antes() {
    document.getElementById('imagens').src = 'https://i.pinimg.com/originals/b3/90/a5/b390a519b1359ac2755d9d482319c65d.jpg';
}

// Função que chama o novo celular
function depois() {
    document.getElementById('imagens').src = 'https://th.bing.com/th/id/R.13f354391f8ded846d4315ded6eb2984?rik=8J%2bVxmu2T8ILeQ&pid=ImgRaw&r=0';
}

// Adição de eventos aos botões
document.getElementById('antes').addEventListener('click', antes);
document.getElementById('depois').addEventListener('click', depois);