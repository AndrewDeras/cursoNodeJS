# API de Games
Está api é utilizada para TAL e Tal...
## Endpoints

### GET /games
Esse endpoint é responsável por retornar a listagem de todos os games cadastrados no banco de dados.
#### Parâmetros
Nenhum.
#### Respostas
##### Ok! 200
Caso essa resposta aconteça, você vai receber a listagem de todos os games.
Exemplo de resposta.
```
[
    {
        "id": 22,
        "title": "formula 1",
        "year": 2022,
        "price": 40
    },
    {
        "id": 33,
        "title": "Fifa 22",
        "year": 2022,
        "price": 50
    },
    {
        "id": 4,
        "title": "GTA V",
        "year": 2013,
        "price": 50
    }
]
```
##### Falha na autenticação! 401
Caso essa respota aconteça significa que aconteceu uma falha durante o processo de autenticação da requisição. Motivos: token inválido, Token experido.
Exemplo de respota.
```
{
    "err": "Acesso negado."
}
```

### POST /auth
Esse endpoint é responsável por realeizar a autenticação do usuário.

#### Parâmetros

Email: e-mail do usuário cadastrado no sistema.

Password: senha do usuário cadastrada no sistema.

Exemplo.
```
{
    "email": "andrew@email.com",
    "password": "12345"
}
```

#### Respostas
##### Ok! 200
Caso essa resposta aconteça, você receberá o token jwt para consehuir accesar endpoints protegidos da API.

Exemplo de resposta.
```
{
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MzksImVtYWlsIjoiYW5kcmV3QGVtYWlsLmNvbSIsImlhdCI6MTY4MTM0NDg2NSwiZXhwIjoxNjgxNTE3NjY1fQ.zTV8RS44Lc4Jj7kr2HgX8r46HjXj2juXTxZ8VTj2OQA"
}
```

##### Falha na autenticação! 401
Caso essa respota aconteça significa que aconteceu uma falha durante o processo de autenticação da requisição. Motivos: senha ou e-mail incorretos.
Exemplo de respota.
```
{
    "err": "Credenciais inválidas."
}
```