const enviarEmail = (corpo, para, callback) => {
  setInterval(() => {

    /// ..... logica do email
    let error = true;
    if (error) {
      callback("O envio do email falhou!")
    } else {
      callback();
    }
  }, 5000);
};

console.log('Email sendo enviado');
enviarEmail("Oi, seja bem vindo ", "aluno@email.com", (erro) => {
  if (erro === undefined) {
    console.log('Tudo ok');
  } else {
    console.log(`Aconteu um erro - ${erro}`);
  }
});