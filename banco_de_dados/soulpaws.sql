CREATE DATABASE soulpaws;
USE soulpaws;

CREATE TABLE usuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(50),
email VARCHAR(45) UNIQUE,
senha VARCHAR(255),
CPF CHAR(11) UNIQUE
);

CREATE TABLE formCadastro (
idForm INT PRIMARY KEY AUTO_INCREMENT ,
transtornoMental VARCHAR(40),
momentosDificeis BOOLEAN,
comoAjudou VARCHAR(255),
especie BOOLEAN,
raça VARCHAR(50),
fkUsuario INT,
CONSTRAINT chFkUsuario
FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario)
);

CREATE TABLE postagem(
idPostagem INT PRIMARY KEY AUTO_INCREMENT,
fkUsuario INT,
CONSTRAINT chUsuario
FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario),
titulo VARCHAR (255),
post VARCHAR(255),
dtPostagem DATETIME DEFAULT CURRENT_TIMESTAMP,
fkComentario INT,
CONSTRAINT chFkComentario
FOREIGN KEY (fkComentario) REFERENCES postagem(idPostagem)
);

CREATE TABLE emocao(
idEmocao INT PRIMARY KEY AUTO_INCREMENT,
emocao VARCHAR(45),
descricao VARCHAR(255),
fkUsuario INT,
CONSTRAINT fkUsuario
FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario) 
);

SELECT * FROM usuario;

desc formCadastro;

SELECT * FROM formCadastro;
SELECT * FROM usuario;

select * from emocao;

-- insert para testar a dahsboard e enriquecer o banco de dados p/ apresentação
INSERT INTO usuario (nome, email, senha, CPF) VALUES
('Pedro H', 'pedro@email.com', '123456', '12345678901'),
('Ana Silva', 'ana@email.com', '123456', '98765432100'),
('João Costa', 'joao@email.com', '123456', '11122233344'),
('Maria Souza', 'maria@email.com', '123456', '22233344455'),
('Lucas Lima', 'lucas@email.com', '123456', '33344455566'),
('Julia Ferreira', 'julia@email.com', '123456', '44455566677'),
('Carlos Mendes', 'carlos@email.com', '123456', '55566677788'),
('Beatriz Santos', 'beatriz@email.com', '123456', '66677788899');

INSERT INTO formCadastro (transtornoMental, momentosDificeis, comoAjudou, especie, raça, fkUsuario) VALUES
('Ansiedade', true, 'Me acalmava nas crises', true, 'Golden Retriever', 1),
('Depressão', true, 'Me fazia levantar da cama', true, 'Golden Retriever', 2),
('Nenhum', false, 'Companhia no dia a dia', true, 'Labrador', 3),
('Ansiedade', true, 'Companhia constante', true, 'Golden Retriever', 4),
('Depressão', true, 'Me fazia sorrir todo dia', true, 'Poodle', 5),
('Nenhum', false, 'Companhia no dia a dia', true, 'Labrador', 6),
('Ansiedade', true, 'Me distraía dos pensamentos', true, 'Poodle', 7),
('Nenhum', false, 'Alegria em casa', true, 'Labrador', 8);

INSERT INTO postagem (fkUsuario, titulo, post) VALUES
(1, 'Meu golden me salvou', 'Hoje meu cachorro percebeu que eu estava mal e ficou do meu lado o dia todo.'),
(2, 'Dica para ansiedade', 'Brincar com meu pet por 10 minutos já muda meu humor completamente.'),
(3, 'Primeiro post aqui', 'Acabei de entrar na plataforma, feliz em conhecer essa comunidade!'),
(1, 'Semana difícil', 'Foi uma semana pesada mas meu pet me ajudou a passar por ela.'),
(2, 'Rotina com pet', 'Criar uma rotina com meu cachorro me ajudou muito com a disciplina.');

INSERT INTO postagem (fkUsuario, titulo, post, fkComentario) VALUES
(2, 'Re: Meu golden me salvou', 'Que lindo! Os animais sentem tudo mesmo.', 1),
(3, 'Re: Meu golden me salvou', 'Meu labrador faz o mesmo, é incrível!', 1),
(1, 'Re: Dica para ansiedade', 'Concordo demais, funciona muito bem!', 2),
(3, 'Re: Primeiro post aqui', 'Seja bem vindo! Aqui é um lugar muito acolhedor.', 3);

INSERT INTO emocao (emocao, descricao, fkUsuario) VALUES
('Feliz', 'Me senti bem hoje', 1),
('Feliz', 'Ótimo dia com meu pet', 1),
('Ansioso', 'Dia corrido no trabalho', 1),
('Triste', 'Saudade de casa', 1),
('Feliz', 'Passeio no parque', 1),
('Feliz', 'Dia produtivo', 1),
('Raiva', 'Situação estressante', 1),
('Ansioso', 'Consulta médica hoje', 1),
('Feliz', 'Final de semana incrível', 1),
('Triste', 'Dia difícil', 1);

INSERT INTO emocao (emocao, descricao, fkUsuario) VALUES
('Feliz', 'Ótimo dia', 2),
('Feliz', 'Passeio com meu pet', 2),
('Ansioso', 'Dia corrido', 2),
('Triste', 'Dia difícil', 2),
('Feliz', 'Final de semana bom', 2),
('Raiva', 'Situação estressante', 2);

INSERT INTO postagem (fkUsuario, titulo, post, dtPostagem) VALUES
(2, 'Post em Janeiro', 'Começando o ano com energia!', '2025-01-15 10:00:00'),
(2, 'Post em Janeiro', 'Meu pet me animou hoje.', '2025-01-22 14:00:00'),
(2, 'Post em Fevereiro', 'Fevereiro chegou com tudo.', '2025-02-10 09:00:00'),
(2, 'Post em Março', 'Março está sendo incrível.', '2025-03-05 11:00:00'),
(2, 'Post em Março', 'Mais um dia feliz com meu pet.', '2025-03-18 16:00:00'),
(2, 'Post em Abril', 'Abril, mês das surpresas.', '2025-04-02 08:00:00'),
(2, 'Post em Abril', 'Passeio incrível hoje.', '2025-04-20 15:00:00'),
(2, 'Post em Abril', 'Meu cachorro aprendeu um truque novo.', '2025-04-28 17:00:00');

INSERT INTO postagem (fkUsuario, titulo, post, fkComentario, dtPostagem) VALUES
(1, 'Re: Post Janeiro', 'Que legal!', 6, '2025-01-23 10:00:00'),
(3, 'Re: Post Março', 'Adorei!', 8, '2025-03-19 12:00:00'),
(1, 'Re: Post Abril', 'Que fofo!', 10, '2025-04-21 09:00:00');
                      
INSERT INTO postagem (fkUsuario, titulo, post, dtPostagem) VALUES
(2, 'Janeiro com meu pet', 'Começando o ano cheio de energia!', '2025-01-05 10:00:00'),
(2, 'Mais um dia incrível', 'Meu cachorro me anima todo dia.', '2025-01-14 14:00:00'),
(2, 'Fevereiro chegou', 'Novo mês, novas energias!', '2025-02-03 09:00:00'),
(2, 'Passeio no parque', 'Fomos ao parque hoje, incrível!', '2025-02-17 11:00:00'),
(2, 'Fevereiro especial', 'Meu pet aprendeu um truque novo.', '2025-02-25 16:00:00'),
(2, 'Março começou bem', 'Que mês incrível está sendo!', '2025-03-08 08:00:00'),
(2, 'Rotina saudável', 'Criar rotina com pet mudou minha vida.', '2025-03-15 13:00:00'),
(2, 'Fim de março', 'Encerrando março muito feliz.', '2025-03-28 17:00:00'),
(2, 'Abril animado', 'Abril chegou com muita energia.', '2025-04-06 10:00:00'),
(2, 'Semana ótima', 'Meu pet me ajudou muito essa semana.', '2025-04-13 15:00:00'),
(2, 'Quase maio', 'Abril foi incrível!', '2025-04-27 09:00:00');

INSERT INTO postagem (fkUsuario, titulo, post, fkComentario, dtPostagem) VALUES
(1, 'Re: Janeiro', 'Que legal!', 6, '2025-01-15 10:00:00'),
(3, 'Re: Fevereiro', 'Adorei!', 8, '2025-02-18 12:00:00'),
(1, 'Re: Março', 'Que fofo!', 11, '2025-03-16 09:00:00'),
(3, 'Re: Abril', 'Incrível!', 14, '2025-04-07 11:00:00');