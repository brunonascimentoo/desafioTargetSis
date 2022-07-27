function reverteString(str) {

    const resultado = document.querySelector('.resultado')

    solucao = '';
    tamanho = str.length - 1;


    for (let posicao = tamanho; posicao >= 0; posicao--) {

        solucao = solucao + str[posicao]
    }
    return resultado.innerHTML = solucao
}

reverteString('desafio');