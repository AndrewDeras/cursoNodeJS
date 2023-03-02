class Animal {
  constructor(nome, idade, preco) {
    this.nome = nome;
    this.idade = idade;
    this.preco = preco;
  };

  ChecarEstoque() {
    return 10
  };

  MetodoQualquer() {
    console.log('Esse metodo pertence a classe mãe');
  }
};

class Cachorro extends Animal {
  constructor(nome, idade, preco, raca, peso) {
    super(nome, idade, preco)
    this.raca = raca;
    this.peso = peso;
  }

  latir() {
    console.log('Latindo');
  }

  ChecarEstoque() {
    console.log(20);
  }

  MetodoQualquer() {
    super.MetodoQualquer();
  }

  Detalhes() {
    console.log(`
      Nome: ${this.nome},
      Raça: ${this.raca}
    `);
  }


}



const dog = new Cachorro('Solito', 7, 250, 'fila', 10);
dog.Detalhes();