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
transtornoMental BOOLEAN,
momentosDificei BOOLEAN,
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
