-- Active: 1718394895000@@127.0.0.1@5433@likeme
CREATE DATABASE likeme;

DROP TABLE

CREATE TABLE posts (
    id SERIAL , 
    titulo VARCHAR(25), 
    img VARCHAR(1000),
    descripcion VARCHAR(255), 
    likes INT DEFAULT 0
    );

SELECT * FROM posts;
