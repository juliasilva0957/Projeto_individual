CREATE DATABASE soulpaws;
USE soulpaws;

CREATE TABLE usuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(50),
nomeUsuario VARCHAR(50) UNIQUE,
email VARCHAR(45) UNIQUE,
senha VARCHAR(255),
CPF CHAR(11) UNIQUE
);

CREATE TABLE formCadastro (
idForm INT PRIMARY KEY AUTO_INCREMENT ,
jaTeve BOOLEAN,
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
dtRegsitro DATETIME DEFAULT CURRENT_TIMESTAMP,
fkUsuario INT,
CONSTRAINT fkUsuario
FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario) 
);

USE soulpaws;

INSERT INTO usuario (nome, nomeUsuario, email, senha, CPF) VALUES
('Julia Santos da Silva', 'julia.santos', 'julia@email.com', 'senha123', '12345678901'),
('Nicole Cristina', 'nicole.cris', 'nicole@email.com', 'senha123', '23456789012'),
('Pedro Henrique Morais', 'pedro.morais', 'pedro@email.com', 'senha123', '34567890123'),
('Esther Nascimento', 'esther.nasci', 'esther@email.com', 'senha123', '45678901244'),
('Thamyres Batista', 'thamy.batista', 'thamy@email.com', 'senha123', '56789012355');

INSERT INTO formCadastro (jaTeve, transtornoMental, momentosDificeis, comoAjudou, especie, raça, fkUsuario) VALUES
(1, 'Ansiedade', 1, 'Meu cachorro me acalma nos momentos de crise profunda.', 1, 'Golden Retriever', 1),
(1, 'Depressão', 1, 'Brincar com ela me dá forças para levantar da cama de manhã.', 1, 'Poodle', 2),
(0, 'Nenhum', 1, 'Ele percebe quando estou triste e deita do meu lado.', 1, 'Golden Retriever', 3),
(1, 'Burnout', 1, 'Passear com ele me desliga completamente do estresse do trabalho.', 1, 'SRD (Vira-lata)', 4),
(1, 'Ansiedade', 1, 'O carinho dela reduz meu ritmo cardíaco nos dias difíceis.', 1, 'Golden Retriever', 5);

INSERT INTO postagem (fkUsuario, titulo, post, dtPostagem, fkComentario) VALUES
(1, 'Meu primeiro dia aqui', 'Olá pessoal, acabei de entrar na comunidade e estou amando conhecer o propósito do projeto.', '2026-05-01 10:00:00', NULL),
(1, 'Ansiedade e Pets', 'Hoje a minha crise atacou forte, mas o Bob ficou do meu lado o tempo todo. Eles realmente sentem nossa energia.', '2026-05-05 14:20:00', NULL),
(1, 'Dica de passeio', 'Levar o pet para parques abertos me ajudou muito a espairecer essa semana. Recomendo fortemente.', '2026-05-10 16:45:00', NULL),
(1, 'Evolução no tratamento', 'Queria compartilhar que com a ajuda do meu pet e terapia, passei uma semana inteira sem crises de ansiedade.', '2026-05-18 20:30:00', NULL),
(1, 'Rotina matinal', 'Criar o hábito de acordar e caminhar com meu companheiro mudou totalmente a energia do meu dia.', '2026-05-22 07:15:00', NULL),
(2, 'Superando a depressão', 'Tem dias que são cinzas, mas olhar para o rabinho abanando me faz lembrar que sou importante para alguém.', '2026-05-02 11:30:00', NULL),
(2, 'Adotei mais um!', 'A família cresceu. Acredito que o amor deles limpa qualquer ambiente pesado.', '2026-05-12 09:00:00', NULL),
(2, 'Rede de apoio', 'Muito bom encontrar um fórum focado nisso. Nos sentimos acolhidos por pessoas que passam pelo mesmo.', '2026-05-15 19:00:00', NULL),
(3, 'Companheirismo silencioso', 'Às vezes não preciso falar nada. O silêncio dele ao meu lado vale mais que mil palavras de consolo.', '2026-05-04 22:10:00', NULL),
(3, 'Brincadeiras que curam', 'Passar 15 minutos jogando a bolinha me fez esquecer todos os problemas da faculdade hoje.', '2026-05-14 15:35:00', NULL),
(3, 'Gratidão pelo dia atual', 'Hoje o dia foi produtivo e calmo. Desejo forças a todos que estão na luta diária.', '2026-05-20 18:40:00', NULL),
(4, 'Cansaço extremo e Burnout', 'Cheguei exausta do trabalho hoje. Ver meu pet me esperando na porta apagou metade do peso do dia.', '2026-05-06 18:50:00', NULL),
(4, 'Desconexão necessária', 'Desliguem as telas um pouco e fiquem olhando para os seus pets. É terapêutico e melhora o sono.', '2026-05-16 21:15:00', NULL),
(5, 'Apoio emocional puro', 'O suporte que um animal de estimação nos dá é genuíno, sem julgamentos ou cobranças.', '2026-05-08 13:00:00', NULL),
(5, 'Respirando fundo', 'Mais um dia vencido. Nos momentos de falta de ar, focar no carinho do meu pet me trouxe de volta.', '2026-05-21 11:55:00', NULL);

INSERT INTO postagem (fkUsuario, titulo, post, dtPostagem, fkComentario) VALUES
(2, 'Re: Primeiro dia', 'Seja muito bem-vinda, Julia! Esse espaço é incrível e vai te ajudar muito.', '2026-05-01 10:30:00', 1),
(3, 'Re: Primeiro dia', 'Bem-vinda! Conte conosco por aqui.', '2026-05-01 11:00:00', 1),
(4, 'Re: Ansiedade e Pets', 'Eles são anjos na nossa vida, Julia. Melhoras para você!', '2026-05-05 14:50:00', 2),
(5, 'Re: Ansiedade e Pets', 'Completamente de acordo. Minha gata faz exatamente a mesma coisa comigo.', '2026-05-05 15:10:00', 2),
(1, 'Re: Superando a depressão', 'Força, Nicole! Um dia de cada vez. Eles nos dão um motivo real para continuar.', '2026-05-02 12:00:00', 6),
(5, 'Re: Companheirismo', 'Essa conexão em silêncio é uma das coisas mais bonitas que existem.', '2026-05-04 22:45:00', 9),
(3, 'Re: Burnout', 'Sei bem como é. O retorno deles para casa é a melhor parte do dia.', '2026-05-06 19:30:00', 12),
(1, 'Re: Burnout', 'Espero que consiga descansar um pouco mais hoje, Esther. Melhoras.', '2026-05-06 20:00:00', 12);

INSERT INTO emocao (emocao, descricao, dtRegsitro, fkUsuario) VALUES
('Ansiedade', 'Crise forte logo após o almoço devido a prazos.', '2026-05-02 13:00:00', 1),
('Calma', 'Fiquei brincando com o Bob e consegui me acalmar.', '2026-05-02 14:30:00', 1),
('Tristeza', 'Desanimada com algumas notícias recebidas hoje.', '2026-05-05 09:00:00', 1),
('Alegria', 'Dia produtivo e passei bastante tempo ao ar livre.', '2026-05-10 18:00:00', 1),
('Ansiedade', 'Pensamentos acelerados durante a noite.', '2026-05-12 23:15:00', 1),
('Gratidão', 'Muito feliz com a evolução que tive essa semana.', '2026-05-18 21:00:00', 1),
('Calma', 'Dia tranquilo em casa sem grandes preocupações.', '2026-05-22 15:00:00', 1),
('Ansiedade', 'Preocupada com o dia de amanhã.', '2026-05-23 10:00:00', 1),
('Tristeza', 'Sentimento de vazio persistente pela manhã.', '2026-05-02 08:00:00', 2),
('Alegria', 'Felicidade pura ao adotar o novo membro da família.', '2026-05-12 10:30:00', 2),
('Calma', 'Sensação de paz ao ver os dois brincando juntos.', '2026-05-13 14:00:00', 2),
('Tristeza', 'Dia um pouco mais pesado e cansativo.', '2026-05-15 17:00:00', 2),
('Calma', 'Me sentindo centrado e focado nos estudos hoje.', '2026-05-04 14:00:00', 3),
('Estresse', 'Muitas entregas acumuladas da faculdade.', '2026-05-14 11:00:00', 3),
('Alegria', 'Consegui desestressar jogando bola com meu pet.', '2026-05-14 16:00:00', 3),
('Gratidão', 'Sensação de dever cumprido ao final do dia.', '2026-05-20 21:00:00', 3),
('Estresse', 'Cansaço mental extremo acumulado da semana de trabalho.', '2026-05-06 17:45:00', 4),
('Calma', 'Relaxando após seguir a dica de desligar as telas.', '2026-05-16 22:00:00', 4),
('Estresse', 'Cobranças excessivas no ambiente profissional.', '2026-05-19 10:00:00', 4),
('Alegria', 'Dia ensolarado ótimo para passear.', '2026-05-08 10:00:00', 5),
('Ansiedade', 'Coração disparado sem motivo aparente logo cedo.', '2026-05-21 08:30:00', 5),
('Calma', 'Consegui controlar o ritmo respiratório com ajuda do pet.', '2026-05-21 12:30:00', 5);