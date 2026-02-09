import PromptSync from "prompt-sync";

const prompt = PromptSync();
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

console.log("EXERCICO 8");

const produtos = [
  { nome: "Teclado", estoque: 5 },
  { nome: "Mouse", estoque: 0 },
  { nome: "Monitor", estoque: 2 },
];

// Crie uma função que:

// receba o nome do produto

// verifique se existe

// se tiver estoque → diminui 1

// se não tiver → retorna erro

function verificaProduto(nome) {
  const produtoExiste = produtos.find((p) => p.nome === nome);

  if (produtoExiste) {
    if (produtoExiste.estoque > 0) {
      produtoExiste.estoque = produtoExiste.estoque - 1;
      return {
        sucesso: true,
        mesagem: "Estoque atualizado",
      };
    } else {
      return {
        sucesso: false,
        mesagem: "Sem estoque",
      };
    }
  } else {
    return {
      sucesso: false,
      mesagem: "Não existe",
    };
  }
}

console.log(verificaProduto("Teclado").mesagem);
console.log(produtos);

console.log("EXERCICO 9");

const usuario = {
  nome: "Carlos",
  email: "",
  senha: "123",
};

// Regras:

// nome obrigatório

// email obrigatório

// senha mínimo 6 caracteres

// Retornar:

function verificaUser() {
  if (!usuario.nome) {
    return { sucesso: false, mensagem: "Nome inválido" };
  }

  if (!usuario.email) {
    return { sucesso: false, mensagem: "Email inválido" };
  }

  if (usuario.senha.length < 6) {
    return { sucesso: false, mensagem: "Senha inválida" };
  }

  return { sucesso: true, mensagem: "Logado" };
}

console.log(verificaUser().mensagem);

console.log("EXERCICIO 10");

const pedidosUsuarios = [
  { usuario: "Ana", valor: 100 },
  { usuario: "Carlos", valor: 50 },
  { usuario: "Ana", valor: 300 },
];

const resultado = pedidosUsuarios.reduce((acc, p) => {
  if (!acc[p.usuario]) {
    acc[p.usuario] = 0;
  }

  acc[p.usuario] += p.valor;

  return acc;
}, {});

console.log(resultado);

console.log("EXERCICO 11");

const userLogar = {
  nome: "admin",
  senha: "1234",
  tentativas: 0,
  bloqueado: false,
};

function logarUser() {
  while (userLogar.tentativas < 3) {
    userLogar.tentativas++;

    const senha = prompt("QUAL A SENHA: ");

    if (senha !== userLogar.senha) {
      console.log("Senha inválida");
      continue;
    } else {
      return { sucesso: true, mensagem: "LOGADO" };
    }
  }
  userLogar.bloqueado = true;
  return {
    sucesso: false,
    mensagem: "BLOQUEADO",
  };
}

console.log(logarUser().mensagem);
console.log(userLogar);
