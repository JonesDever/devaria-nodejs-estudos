const listaDeProdutosDisponiveis = [
    "Pão",
    "Leite",
    "Café",
    "Laranja",
    "Macarrão",
    "Sabonete",
    "Detergente",
];

const listaDeArgumentos = process.argv.slice(2);

const listaDeProdutosSolicitadosDisponiveis = listaDeProdutosDisponiveis.filter(produto => {
    return listaDeArgumentos.find(argumento => argumento === produto);
})

listaDeProdutosSolicitadosDisponiveis.forEach(produto => console.log(`Este produto nós temos: ${produto}`));