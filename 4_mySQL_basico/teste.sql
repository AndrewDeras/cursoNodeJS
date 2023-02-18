CREATE TABLE usuarios(
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  nome VARCHAR(50),
  email VARCHAR(100),
  idade INT
);

INSERT INTO usuarios (nome, email, idade) VALUES ("Andrew","andrew@email.com",25);
INSERT INTO usuarios (nome, email, idade) VALUES ("Vini","vini@email.com",22);
INSERT INTO usuarios (nome, email, idade) VALUES ("Karim","karim@email.com",35);

DELETE FROM usuarios WHERE nome = "Ev";
UPDATE usuarios SET nome = "Monica" WHERE id = 15;