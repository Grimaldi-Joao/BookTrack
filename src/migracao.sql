
    CREATE TABLE usuarios (
        id SERIAL PRIMARY KEY,
        nome VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL UNIQUE
);

    CREATE TABLE livros (
        id SERIAL PRIMARY KEY,
        titulo VARCHAR(100) NOT NULL,
        autor VARCHAR(255),
        status VARCHAR(20) NOT NULL CHECK (status IN ('Quero Ler', 'Lendo', 'Lido')),
        avaliacao INTEGER CHECK (avaliacao BETWEEN 1 AND 5),
        data_conclusao TIMESTAMP,
        usuario_id INTEGER REFERENCES usuarios(id) ON DELETE CASCADE
);
