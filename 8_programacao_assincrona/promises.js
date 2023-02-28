// promise = pode ser resolvida ou falhar

function pegarId() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(39);
    }, 1500);
  });
};

function buscarEmailNoBanco(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('andrew@email.com');
    }, 2000);
  });
};

const enviarEmail = (corpo, para) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let deuErro = false;
      if (!deuErro) {
        resolve({ time: 2, to: 'deras@email.com' });// promessa ok!
      } else {
        reject('Não foi possível enviar o email');// foi mal , falhei
      }
    }, 2000)
  });
};
/*
pegarId().then((id) => {
  buscarEmailNoBanco(id).then((email) => {
    enviarEmail('Olá sou o Andrew', email).then(() => (
      console.log(`Email enviado para o usuário com id: ${id}`)
    )).catch((err) => {
      console.log(err);
    })
  })
});
*/

/*
// async - await
function pegarUsuarios() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([
        { name: 'Andrew', lang: 'JS' },
        { name: 'Jeff', lang: 'Java' },
        { name: 'Lindsay', lang: 'PHP' }
      ])
    }, 2500)
  });
};
*/
const principal = async () => {
  let id = await pegarId();
  let email = buscarEmailNoBanco(id);
  try {
    await enviarEmail('Olá Deras', email)
    console.log(`Email enviado para o usuário com id: ${id}`);
  } catch (error) {
    console.log(error);
  }


}
principal();
