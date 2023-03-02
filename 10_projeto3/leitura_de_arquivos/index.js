const fs = require("fs");
/**
 * leitura
fs.readFile('./andrew.txt', { encoding: 'utf-8' }, (error, data) => {
  if (error) {
    console.log('Aconteceu um erro na leitura');
  } else {
    console.log(data);
  }
});
*/

/*
*escrita
fs.writeFile('./andrew.txt', 'Nome: Andrew', (erro) => {
  if (erro) {
    console.log('Erro durante salvamento...');
  }
});
*/
/*
*formato json 
*/

const modificarUsuario = (nome, idade) => {
  fs.readFile('./usuario.json', { encoding: 'utf-8' }, (error, data) => {
    if (error) {
      console.log('Aconteceu um erro');
    } else {
      let user = JSON.parse(data);
      user.nome = nome;
      user.idade = idade;

      fs.writeFile('./usuario.json', JSON.stringify(user), (error) => {
        if (error) {
          console.log('Aconteceu um erro ao salvar');
        }
      });
      console.log(user);
    }
  });
}

modificarUsuario('Andrew Barbosa Deras', 25);