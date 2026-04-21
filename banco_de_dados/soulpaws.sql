CREATE DATABASE soulpaws;
USE soulpaws;

CREATE TABLE usuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(50),
email VARCHAR(45) UNIQUE,
CPF CHAR(11) UNIQUE,
senha VARCHAR(255)
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