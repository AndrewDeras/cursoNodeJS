class Movie {
  constructor(titulo, ano, genero, atores, duracao) {
    this.titulo = titulo;
    this.ano = ano;
    this.genero = genero;
    this.atores = atores;
    this.duracao = duracao;
  }

  Reproduzir() {
    console.log('Reproduzindo');
  }

  Pausar() {
    console.log('Pausado');
  }

  Avancar() {
    console.log('Avançar');
  }

  Fechar() {
    console.log('Fechar');
  }

  Ficha() {
    console.log(`
      Titulo: ${this.titulo},
      Ano de lançamento: ${this.ano},
      Genero: ${this.genero},
      Duração: ${this.duracao},
      Atores: ${this.atores}
    `);
  }
};

const vingadores = new Movie('Vingadores Ultimato', 2019, 'Ação/Ficção científica', ['Robert Jr, Chris Evans', 'Samuel Jakson', 'Tom Holland'], '3h2m');

vingadores.Ficha();