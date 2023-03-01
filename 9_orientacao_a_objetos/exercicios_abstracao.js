// produto para loja

class ProdutoLoja {
  constructor() {
    this.nome = '';
    this.descricao = '';
    this.peso = '';
    this.dimensao = '';
    this.fornecedor = '';
    this.marca = '';
    this.quantidade = '';
  }

  Vender() {
    console.log('vender');
  };

  AtualizarPreco() {
    console.log('preço atualizado');
  };

  Oferta() {
    console.log('Oferta');
  };

  Trocar() {
    console.log('Trocado');
  }
};

// Carrinho de compras para loja

class CarrinhoCompras {
  constructor() {
    this.produto = '';
    this.quantidade = 0;
    this.preco = 0;
  }

  VerificarEstoque() {
    console.log('verificando');
  };

  VerficarMetodoPagamento() {
    console.log('verificando metodo de pagamento');
  };

  ConcluirCompra() {
    console.log('Finalizando compra');
  }
}

//comida para sistema de cardapio

class Cardapio {
  constructor() {
    this.conuda = '';
    this.numeroDePessoas = 0;
    this.preco = 0;
    this.peso = 0;
  }

  PrepararPedido() {
    console.log('Preparando');
  }

  ServirPedido() {
    console.log('Servindo');
  }
}

// personagem para jogo de rpg

class PersonagemRPG {
  constructor() {
    this.usuario = '';
    this.habilidades = '';
    this.nivel = 0;
  }

  Interagir() {
    console.log('interagindo');
  }

  Lutar() {
    console.log('Lutando');
  }

  Curar() {
    console.log('curando');
  }
}

//Carro para sistema de aluguel de carros

class CarroDeAluguel {
  constructor() {
    this.marca = '';
    this.modelo = '';
    this.ano = 0;
    this.cor = ''
    this.kilometragem = 0;
    this.portas = 0;
    this.precoDia = 0;
  }

  Buzina() {
    console.log('buzina');
  }

  Acelerar() {
    console.log('Acelerar');
  }
  Desacelerar() {
    console.log('Desacelerar');
  }
}

// usuario para rede social

class User {
  constructor() {
    this.usuario = '';
    this.email = '';
    this.senha = '';
    this.idade = '';
    this.termos = true;
  }

  Logar() {
    console.log('logou');
  }
  Deslogar() {
    console.log('Deslogou');
  }
}

// video para serviço de streamin

class VideoOnDemand {
  constructor() {
    this.titulo = '';
    this.categoria = '';
    this.duracao = 0;
    this.visualizacoes = 0;
    this.comentarios = true;
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
}

// aluno para sistema de gestão escolar

class Aluno {
  constructor() {
    this.nome = '';
    this.turma = '';
    this.turno = '';
    this.matricula = '';
    this.materias = [];
    this.notas = [];
  }
  Matricular() {
    console.log("Matricular aluno");
  }

  Desmatricular() {
    console.log("Desmatricular aluno");
  }

  PostarNota() {
    console.log("Postar nota do aluno");
  }

  DefinirHorarios() {
    console.log("Definir horários");
  }
}

// encomenda para sistema de frete

class Frete {
  constructor() {
    this.destinatario = "";
    this.remetente = "";
    this.endereco = '';
    this.cep = '';
    this.complemento = '';
    this.estado = '';
    this.municipio = '';
  }

  CalcularFrete() {
    console.log('Calculando');
  }

  Enviar() {
    console.log('enviando');
  }

  Retornar() {
    console.log('retornando');
  }
}

// //  - Banda para serviço de streaming (ex: Spotify)
class Banda {
  constructor() {
    this.nomeMusica = "";
    this.nomeArtista = "";
    this.estilo = "";
  }

  AdicionarPlaylist() {
    console.log("Adicionado playlist");
  }

  AdicionarMusicaPlaylist() {
    console.log("Adicionado música a playlist");
  }

  RemoverPlaylist() {
    console.log("Remover playlist");
  }

  RemoverMusicaPlaylist() {
    console.log("Remover música a playlist");
  }
}

// 11 - Pedido para sistema de delivery
class PedidoDelivery {
  construtor() {
    this.nomeEstabelecimento = "";
    this.enderecoEstabelecimento = "";
    this.avaliacaoEstabelecimento = "";
    this.nomeRefeicao = "";
    this.descricaoRefeicao = "";
    this.valorRefeicao = 0;
    this.valorDesconto = 0;
    this.valorFrete = 0;
    this.tempoEntrega = 0;
    this.formasPagamento = [];
  }

  AdicionarCarrinho() {
    console.log("Produto adicionado ao carrinho");
  }

  RemoverCarrinho() {
    console.log("Produto retirado do carrinho");
  }

  CalcularValor() {
    console.log("Valor total");
  }

  FecharPedido() {
    console.log("Pedido solicitado com sucesso, acompanhe a entrega");
  }

  Entrega() {
    console.log("Entrega com sucesso");
  }
}

// 12 - Agendamento para sistema de dentista
class agendaDentista {
  constructor() {
    this.dadosPaciente = [];
    this.dataConsulta = "";
    this.horarioConsulta = "";
    this.nomeProfissional = "";
  }

  Adicionar() {
    console.log("Paciente adicionado");
  }

  Remover() {
    console.log("Paciente removido");
  }

  Remarcar() {
    console.log("Paciente remarcado");
  }
}

// 14 - Mensagem do WhatsApp
class MensagemWhatsapp {
  constructor() {
    this.nome = "";
    this.numeroCelular = 0;
    this.contato = "";
    this.mensagem = "";
    this.arquivos = [];
  }

  Enviar() {
    console.log("Enviado");
  }

  Apagar() {
    console.log("Apagado");
  }

  AdicionarContato() {
    console.log("Contato adicionado");
  }
}

// 16 - Grupo de rede social (ex: Grupo do Facebook)
class GrupoFacebook {
  constructor() {
    this.nomeGrupo = "";
    this.qtdGrupo = 0;
    this.membros = [];
  }

  Entrar() {
    console.log("Bem vindo no grupo");
  }

  Sair() {
    console.log("Deseja realmente sair do grupo?");
  }

  Convidar() {
    console.log("Convite enviado");
  }

  EnviarMensagem() {
    console.log("Mensagem enviada!");
  }
}
// 17 - Player de vídeo
class PlayerVideo {
  constructor() {
    this.play = "";
    this.stop = "";
    this.pause = "";
    this.tempo = 0;
    this.avancar = "";
    this.audio = "";
  }

  Reproduzir() {
    console.log("Reproduzindo...");
  }

  Parar() {
    console.log("Parando...");
  }

  Pausar() {
    console.log("Pausando...");
  }

  Avancar() {
    console.log("Avançar...");
  }

  Mudo() {
    console.log("Mudo");
  }

}

// 18 - Storie do Instagram
class StorieInstagram {
  constructor() {
    this.nomeUsuario = "";
    this.tempoPostagem = 0;
    this.texto = "";
    this.filtros = [];
    this.permissaoContato = [];
    this.localizacao = "";
  }

  Postar() {
    console.log("Postar...");
  }

  Deletar() {
    console.log("Deletar...");
  }
}


// 19 - Buscador (ex: Formulário de busca do Google)
class Buscador {
  constructor() {
    this.barraPesquisa = "";
    this.botaoPesquisar = "";
  }

  Pesquisar() {
    console.log("O buscador encontrou 100 resultados para sua pesquisa");
  }

  Sugestoes() {
    console.log('mostrando sugestoes');
  }
}

// 20 - Busca do Google
class Google {
  constructor() {
    this.campoPesquisa = "";
    this.btPesquisar = "";
  }

  Digitar() {
    console.log("Prévia da sua busca...");
  }

  Pesquisar() {
    console.log("Mostra resultado da sua busca...");
  }
}

// 21 - Notificação do Facebook
class NotificacaoFacebook {
  constructor() {
    this.titulo = "";
    this.horario = "";
    this.tipoNotificacao = [];
  }

  Visualizar() {
    console.log("Ver notificação");
  }

  LimparNotificacao() {
    console.log("Notificação limpa");
  }
}

// 22 - Curso na Udemy
class CursoUdemy {
  constructor() {
    this.titulo = "";
    this.autor = "";
    this.preco = 0;
    this.conteudo = "";
    this.categoria = "";
    this.avaliacao = "";
    this.qtdAlunos = "";
  }

  Comprar() {
    console.log("Bem-vindo ao curso...");
  }

  Reembolso() {
    console.log("Reembolso feito com sucesso");
  }

  Arquivar() {
    console.log("Curso arquivado");
  }
}
