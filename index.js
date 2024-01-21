const readline = require('readline');

// Criando a interface de leitura
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Definindo a classe Heroi
class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque;

    // Verificando o tipo do herói e definindo o ataque correspondente
    switch (this.tipo) {
      case 1:
        ataque = "usou magia";
        break;
      case 2:
        ataque = "usou espada";
        break;
      case 3:
        ataque = "usou artes marciais";
        break;
      case 4:
        ataque = "usou shuriken";
        break;
      default:
        ataque = "usou um ataque genérico";
    }

    // Exibindo a mensagem de ataque
    console.log(`O herói ${this.nome} atacou usando ${ataque}`);
  }
}

// Função para validar se a idade é um número inteiro não negativo
function validarIdade(idade) {
  const idadeInt = parseInt(idade);
  return !isNaN(idadeInt) && idadeInt >= 0;
}

// Função para validar se o tipo é um dos quatro valores permitidos
function validarTipo(tipo) {
  return tipo >= 1 && tipo <= 4;
}

// Função para permitir que o usuário crie seu próprio personagem
function criarPersonagem() {
  rl.question('Digite o nome do herói: ', (nome) => {
    rl.question('Digite a idade do herói: ', (idade) => {
      if (!validarIdade(idade)) {
        console.log('Idade inválida. A idade deve ser um número inteiro não negativo.');
        rl.close();
        return;
      }

      rl.question('Escolha o tipo do herói (Digite o número correspondente - 1: mago, 2: guerreiro, 3: monge, 4: ninja): ', (tipo) => {
        if (!validarTipo(parseInt(tipo))) {
          console.log('Tipo inválido. Escolha um número de 1 a 4.');
          rl.close();
          return;
        }

        const novoHeroi = new Heroi(nome, parseInt(idade), parseInt(tipo));
        novoHeroi.atacar();
        rl.close();
      });
    });
  });
}

// Chama a função para criar o personagem
criarPersonagem();