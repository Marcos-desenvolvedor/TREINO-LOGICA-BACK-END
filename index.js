// TREINO LOGICA BACK-END

console.log("EXERCICIO 1");

function mostraEstado(idade) {
  switch (true) {
    case idade > 0 && idade < 12:
      console.log("criança");
      break;
    case idade > 12 && idade < 17:
      console.log("Adolescente");
      break;
    case idade >= 18:
      console.log("Adulto");
      break;
    default:
      console.log("Inválido");
      break;
  }
}

mostraEstado(45);

console.log("EXERCICIO 2");

const lista = [10, -5, 3, 8, -2];

const listaFiltrada = lista
  .filter((n) => n > 0 && n % 2 === 0)
  .reduce((acc, n) => {
    return acc + n;
  }, 0);

console.log(listaFiltrada);

console.log("EXERCICIO 3");

const carrinho = [
  { nome: "Teclado", preco: 100, quantidade: 2 },
  { nome: "Mouse", preco: 50, quantidade: 1 },
  { nome: "Monitor", preco: 900, quantidade: 1 },
];

function verificaDesconto(valor) {
  const valorParaDesconto = 1000;
  let valorFinal;

  if (valor > valorParaDesconto) {
    const valorDescontado = (valor / 100) * 10;

    valorFinal = valor - valorDescontado;
  } else {
    valorFinal = valor;
  }
  return valorFinal;
}

function calcularCompra() {
  const totalComprado = carrinho.reduce((acc, c) => {
    return acc + c.preco * c.quantidade;
  }, 0);

  const totalPagar = verificaDesconto(totalComprado);
  console.log(totalPagar);
}

calcularCompra();

console.log("EXERCICIO 4");

const user = {
  nome: "Ana",
  ativo: true,
  tentativas: 3,
};

function acessoUser() {
  const userAtivo = user.ativo === true;

  if (userAtivo) {
    const userTentativas = user.tentativas < 5;

    if (userTentativas) {
      return { sucesso: true, mesagem: "LOGADO" };
    } else {
      return { sucesso: false, mesagem: "TENTATIVAS ESTOURADAS" };
    }
  } else {
    console.log("User inativo");
  }
}

acessoUser();

console.log("EXERCICIO 5");

//RESOLVER O PROBLEMA DO CODIGO

const itens = [
  { nome: "Teclado", preco: 100, quantidade: 2 },
  { nome: "Mouse", preco: 50, quantidade: 1 },
  { nome: "Monitor", preco: 900, quantidade: 1 },
];

function calcularTotal(itens) {
  let total = 0;

  for (let item of itens) {
    total + item.preco * item.quantidade;
  }

  return total;
}

function calcularTotalCorigido() {
  let total = 0;

  for (const item of itens) {
    total += item.preco * item.quantidade;
  }

  return total;
}
console.log(calcularTotalCorigido());

console.log("EXERCICIO 6");

// COMPLETE A LOGICA

function autenticar(usuario, senha) {
  if (usuario === "admin" && senha === "1234") {
    // o que retornar aqui?
  }

  // e aqui?
}

function autenticarCompleto(usuario, senha) {
  if (usuario === "admin" && senha === "1234") {
    return {
      sucesso: true,
      mesagem: "LOGADO COM SUCESSO",
    };
  } else {
    return {
      sucesso: false,
      mesagem: "LOGIN RECUSADO",
    };
  }
}

console.log(autenticarCompleto("admin", "1234"));

console.log("EXERCICIO 7");

const usuarioAtual = {
  nome: "Carlos",
  email: "carlos@email.com",
  idade: 30,
};

const dadosNovos = {
  email: "novo@email.com",
};

function atualizarDados(userAtual, dadosAtualizar) {
  return { ...userAtual, ...dadosAtualizar };
}

console.log(atualizarDados(usuarioAtual, dadosNovos));
