class Leitor {
  Ler(caminho) {
    console.log('Conteúdo do arquivo');
  };
};

class Escritor {
  Escrever(arquivo, caminho) {
    console.log('Conteúdo escrito');
  };
};

class Criador {
  Criar(nome) {
    console.log('Arquivo criado');
  };
};

class CriadorDePdf {
  Criar(nome) {
    console.log('Criando PDF....');
  }
}

class Destruidor {
  Deletar(nome) {
    console.log('Arquivo deletado');
  };
};

class ManipuladorDeArquivo {
  constructor(nome) {
    this.arquivo = nome;
    this.leitor = new Leitor();
    this.escritor = new Escritor();
    this.criador = new Criador();
    this.destruidor = new Destruidor();
  };
};

class GerenciamentoDeUsuarios {
  constructor() {
    this.criador = new CriadorDePdf();
    this.escritor = new Escritor();
  };

  SalvarListaDeUsuarios(lista) {
    this.criador.Criar('usuario.txt');
    this.escritor.Escrever('usuario.txt', lista)
  };
};


const manipulador = new ManipuladorDeArquivo('meuarquivo.txt');

manipulador.leitor.Ler();
manipulador.escritor.Escrever();
manipulador.criador.Criar();
manipulador.destruidor.Deletar();