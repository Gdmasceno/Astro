create database astro;
use astro;

create table usuario(
id int primary key auto_increment,
nome varchar(45),
email varchar(45),
senha varchar(45)
);

create table peso(
id int auto_increment,
fkUsuario int, foreign key (fkUsuario) references usuario(id),
primary key(id,fkUsuario),
planeta varchar(45),
peso double
);