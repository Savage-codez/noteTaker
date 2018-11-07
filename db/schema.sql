DROP DATABASE IF EXISTS noteTakerDB;
CREATE DATABASE noteTakerDB;
USE noteTakerDB;

-- Create the tables table
CREATE TABLE notes
(
  id INT NOT NULL AUTO_INCREMENT,
  notetitle VARCHAR (255) NOT NULL,
  notebody VARCHAR (255) NOT NULL,
  PRIMARY KEY(id)
);