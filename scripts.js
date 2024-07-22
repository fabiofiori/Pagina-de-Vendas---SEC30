document.addEventListener('DOMContentLoaded', function() {
    fetch('seu_arquivo.json')
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('produtos-container');
            data.produtos.forEach(produto => {
                const produtoDiv = document.createElement('div');
                produtoDiv.className = 'produto';
                produtoDiv.innerHTML = `
                    <img src="${produto.imagem}" alt="${produto.nome}">
                    <h3>${produto.nome}</h3>
                    <p>${produto.descricao}</p>
                    <button>Comprar</button>
                `;
                container.appendChild(produtoDiv);
            });
        })
        .catch(error => console.error('Erro ao carregar produtos:', error));
});
