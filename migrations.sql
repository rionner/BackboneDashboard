CREATE DATABASE card;
\c cards;

CREATE TABLE cards (id SERIAL PRIMARY KEY, title VARCHAR(255), content TEXT);
