CREATE DATABASE soulpaws;
USE soulpaws;

CREATE TABLE usuario (
idUsuario INT PRIMARY KEY AUTO_INCREMENT,
nome VARCHAR(50),
nomeUsuario VARCHAR(50) UNIQUE,
email VARCHAR(45) UNIQUE,
senha VARCHAR(255),
CPF CHAR(11) UNIQUE,
imagemPerfil VARCHAR (255)
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



INSERT INTO usuario VALUES
(default, 'Ana Clara Souza',      'anaclaras',    'ana.clara@email.com',    '$2b$10$KIX1hVz3QwErty7UoplMSOqWvXn5R.MlkT4dJcN2Yh8', '12345678901', 'perfil_ana.jpg'),
(default, 'Bruno Mendes',         'brunomendes',  'bruno.mendes@email.com', '$2b$10$AbCdEfGhIjKlMnOpQrStUvWxYz1234567890abcde', '98765432100', 'perfil_bruno.jpg'),
(default, 'Camila Ferreira',      'camilaferr',   'camila.f@email.com',     '$2b$10$ZxYwVuTsRqPoNmLkJiHgFeDcBa0987654321zyxwv', '11122233344', 'perfil_camila.jpg'),
(default, 'Diego Oliveira',       'diegooliv',    'diego.oliv@email.com',   '$2b$10$MnBvCxZaQwErTyUiOpLkJhGfDsAp1q2w3e4r5t6y', '55566677788', 'perfil_diego.jpg'),
(default, 'Eduarda Lima',         'eduardalima',  'edu.lima@email.com',     '$2b$10$PoIuYtReWqAsZxDcFvGbHnJmKlP9o8i7u6y5t4r3', '99988877766', 'perfil_edu.jpg'),
(default, 'Felipe Rocha',         'feliperocha',  'felipe.r@email.com',     '$2b$10$LkJhGfDsAqWsXdCfVgBhNjMkIoLpOiUyTrEwQzAs', '33344455566', 'perfil_felipe.jpg'),
(default, 'Gabriela Santos',      'gabisantos',   'gabi.santos@email.com',  '$2b$10$QwErTyUiOpAsZxDcFvGbHnJmKlPoIuYtReWqMnBvC', '77788899900', 'perfil_gabi.jpg');



INSERT INTO formCadastro VALUES
(default, 1, 'Ansiedade',  1, 'Meu Golden sempre percebe quando estou mal e fica do meu lado.',         0, 'GoldenRetriver',  1),
(default, 0, NULL,         0, NULL,                                                                     0, 'Labrador',        2),
(default, 1, 'Depressão',  1, 'Minha gata me faz levantar da cama todos os dias para alimentá-la.',     1, 'Ragdoll',         3),
(default, 1, 'Burnout',    1, 'Brincar com meu Beagle me distrai dos pensamentos negativos.',           0, 'Beagle',          4),
(default, 0, NULL,         1, 'Meu Poodle late quando percebe que estou chorando, é muito fofo.',       0, 'Poodle',          5),
(default, 1, 'Ansiedade',  1, 'Meu Maine Coon senta no meu colo quando estou estressado e relaxo.',     1, 'MaineCoon',       6),
(default, 1, 'TDAH',       1, 'Cuidar do meu Shih Tzu me ajuda a manter uma rotina mais organizada.',  0, 'Shihtzu',         7);


INSERT INTO postagem VALUES
(default, 1, 'Meu pet me salvou',
 'Depois de meses muito difíceis com ansiedade, foi meu Golden que me deu forças para continuar. Alguém mais passou por isso?',
 '2026-04-10 09:15:00', NULL),

(default, 3, 'Rotina com minha gatinha',
 'Criar uma rotina de cuidados com minha Ragdoll me ajudou a sair da depressão. Hoje me sinto muito melhor!',
 '2026-04-12 14:30:00', NULL),

(default, 5, 'Poodle e ansiedade',
 'Meu Poodle late quando percebe que estou ansioso. Parece que ele sente tudo. Pets são incríveis 🐾',
 '2026-04-15 18:45:00', NULL),

(default, 6, 'Maine Coon: o melhor terapeuta',
 'Meu Maine Coon sabe exatamente quando preciso de um abraço. Simplesmente deita no meu colo e tudo passa.',
 '2026-04-20 21:00:00', NULL),

(default, 2, 'Caminhada com meu Labrador',
 'Caminhamos 5km hoje! Exercitar com meu pet tem sido ótimo para minha saúde mental. Recomendo a todos!',
 '2026-04-25 08:00:00', NULL),

(default, 7, 'Shih Tzu e rotina',
 'Meu Shih Tzu me obriga a ter horário pra tudo. Acordar, comer, passear... Isso me ajuda demais com meu TDAH.',
 '2026-05-01 10:20:00', NULL),

(default, 4, 'Beagle curioso demais 😂',
 'Meu Beagle farejou minha mochila e derrubou tudo. Não consigo ficar triste com esse ser por perto. 🐶',
 '2026-05-05 16:00:00', NULL),

-- Comentários
(default, 2, 'Re: Meu pet me salvou',
 'Passei exatamente por isso! Minha gata me salvou também. Força pra você! 💙',
 '2026-04-10 11:00:00', 1),

(default, 4, 'Re: Rotina com minha gatinha',
 'Que história linda! Meu Beagle também me ajudou a criar uma rotina. Pets são terapêuticos demais.',
 '2026-04-12 15:45:00', 2),

(default, 1, 'Re: Caminhada com meu Labrador',
 'Adorei a dica! Vou começar a caminhar com meu Golden também. Obrigada por compartilhar! 🐾',
 '2026-04-25 09:30:00', 5);


INSERT INTO emocao (emocao, descricao, fkUsuario) VALUES
('Feliz',       'Hoje acordei bem disposta e brinquei bastante com meu Golden no parque.',                          1),
('Ansioso',     'Semana pesada no trabalho, mas meu Labrador me acalmou com seus olhinhos.',                        2),
('Triste',      'Dia difícil. Minha Ragdoll ficou do meu lado o tempo todo, isso me confortou muito.',              3),
('Estressado',  'Prazo apertado no trabalho. Fui passear com meu Beagle e voltei renovado.',                        4),
('Calmo',       'Fim de semana tranquilo. Poodle no colo, série passando, vida boa.',                               5),
('Grato',       'Grato por ter meu Maine Coon. Ele torna os dias mais leves sem fazer nada demais.',                6),
('Animado',     'Meu Shih Tzu aprendeu um truque novo hoje! Fiquei empolgado demais para ensinar mais.',            7),
('Solitário',   'Dia sozinha em casa, mas meu Golden não me deixou me sentir só por um segundo sequer.',            1),
('Feliz',       'Fiz uma caminhada longa com meu Labrador. Me sinto leve e de bem com a vida.',                     2),
('Calmo',       'Meditei enquanto minha Ragdoll roncava do lado. Foi a melhor sessão de meditação da minha vida.',  3),
('Animado',     'Levei meu Beagle para encontrar outros cães no parque. Ele ficou louco de alegria!',               4),
('Grato',       'Percebi hoje o quanto meu Poodle melhorou minha rotina. Nunca mais perco meu horário de dormir.',  5),
('Feliz',       'Dia produtivo e meu Maine Coon comemorou comigo deitando na minha mesa. 😂',                        6),
('Ansioso',     'Prova importante amanhã. Meu Shih Tzu ficou na minha cama me fazendo companhia até eu dormir.',    7);