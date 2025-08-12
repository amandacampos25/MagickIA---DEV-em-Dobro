const botaoFiltrar = document.querySelector('.btn-filtrar');


botaoFiltrar.addEventListener('click', function () {

    const categoriaSelecionada = document.querySelector('#categoria').value;
    const precoMaximoSelecionado = document.querySelector('#preco').value;


    const cartas = document.querySelectorAll('.carta');

    cartas.forEach(function (carta) {
        const categoriaCarta = carta.dataset.categoria;
        const precoDaCarta = carta.dataset.preco;

        let mostrarCarta = true;

        console.log('A categoria selecionada foi:' + categoriaSelecionada);

        const temFltroDeCategoria = categoriaSelecionada != '';

        const cartaNaoBateComFiltroDeCategoria = categoriaSelecionada.toLowerCase() !== categoriaCarta.toLowerCase();

        if (temFltroDeCategoria && cartaNaoBateComFiltroDeCategoria) {
            mostrarCarta = false;
        }

        const temFiltroDePreco = precoMaximoSelecionado !== '';
        const cartaNaoBateComFiltroDePrecoMaximo = parseFloat(precoDaCarta) > parseFloat(precoMaximoSelecionado);

        if (temFiltroDePreco && cartaNaoBateComFiltroDePrecoMaximo) {
            mostrarCarta = false;
        }

        if (mostrarCarta) {
            carta.classList.add('mostrar');
            //carta.classList.remove(esconder);
        } else {
            carta.classList.remove('mostrar');
            carta.classList.add('esconder');
        }

    })
});

