-- Active: 1718394895000@@127.0.0.1@5433@likeme
CREATE DATABASE likeme;


CREATE TABLE posts (
    id SERIAL, 
    titulo VARCHAR(25), 
    img VARCHAR(1000),
    descripcion VARCHAR(255), 
    likes INT
    );

SELECT * FROM posts;
